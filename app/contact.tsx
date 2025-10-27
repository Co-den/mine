import { useState } from "react";


// ContactForm component definition appended at end of file (client-side)
export default function ContactForm() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
    consent: false,
  });
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState<{ type: "success" | "error" | null; message: string | null }>(
    {
      type: null,
      message: null,
    }
  );

  const update = (e: any) => {
    const { name, value, type, checked } = e.target;
    setForm((p) => ({ ...p, [name]: type === "checkbox" ? checked : value }));
  };

  const submit = async (e: any) => {
    e.preventDefault();
    setStatus({ type: null, message: null });

    if (!form.name || !form.email || !form.message) {
      setStatus({ type: "error", message: "Please fill in name, email and message." });
      return;
    }
    if (!/\S+@\S+\.\S+/.test(form.email)) {
      setStatus({ type: "error", message: "Please provide a valid email." });
      return;
    }

    setLoading(true);
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (res.ok) {
        setStatus({ type: "success", message: "Message sent. Thank you!" });
        setForm({ name: "", email: "", subject: "", message: "", consent: false });
      } else {
        const data = await res.json().catch(() => ({}));
        setStatus({ type: "error", message: data?.error || "Failed to send message." });
      }
    } catch (err) {
      setStatus({ type: "error", message: "Network error. Try again later." });
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={submit} className="bg-white border-2 border-gray-200 p-6 md:p-8 rounded-md">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <label className="flex flex-col text-xs md:text-sm">
          <span className="sr-only">Name</span>
          <input
            name="name"
            value={form.name}
            onChange={update}
            placeholder="Your name *"
            className="border border-gray-300 px-3 py-2 rounded-md text-xs md:text-sm focus:outline-none focus:ring-2 focus:ring-green-500"
            required
          />
        </label>
        <label className="flex flex-col text-xs md:text-sm">
          <span className="sr-only">Email</span>
          <input
            name="email"
            value={form.email}
            onChange={update}
            type="email"
            placeholder="Email address *"
            className="border border-gray-300 px-3 py-2 rounded-md text-xs md:text-sm focus:outline-none focus:ring-2 focus:ring-green-500"
            required
          />
        </label>
      </div>

      <div className="mt-4">
        <label className="flex flex-col text-xs md:text-sm">
          <span className="sr-only">Subject</span>
          <input
            name="subject"
            value={form.subject}
            onChange={update}
            placeholder="Subject (optional)"
            className="border border-gray-300 px-3 py-2 rounded-md text-xs md:text-sm focus:outline-none focus:ring-2 focus:ring-green-500"
          />
        </label>
      </div>

      <div className="mt-4">
        <label className="flex flex-col text-xs md:text-sm">
          <span className="sr-only">Message</span>
          <textarea
            name="message"
            value={form.message}
            onChange={update}
            placeholder="Your message *"
            rows={6}
            className="border border-gray-300 px-3 py-2 rounded-md text-xs md:text-sm focus:outline-none focus:ring-2 focus:ring-green-500 resize-none"
            required
          />
        </label>
      </div>

      <div className="mt-4 flex items-center gap-3 text-xs md:text-sm">
        <input id="consent" name="consent" type="checkbox" checked={form.consent} onChange={update} className="w-4 h-4" />
        <label htmlFor="consent" className="text-gray-600">
          I agree to be contacted regarding this inquiry.
        </label>
      </div>

      <div className="mt-6 flex items-center justify-between gap-4">
        <button
          type="submit"
          disabled={loading}
          className="bg-black text-white px-5 py-2 rounded-md font-bold uppercase text-xs md:text-sm hover:bg-gray-800 transition disabled:opacity-60"
        >
          {loading ? "Sending..." : "Send Message"}
        </button>

        <div aria-live="polite" className="text-xs md:text-sm">
          {status.type === "success" && <span className="text-green-500">{status.message}</span>}
          {status.type === "error" && <span className="text-red-500">{status.message}</span>}
        </div>
      </div>
    </form>
  );
}