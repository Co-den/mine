"use client"

import type React from "react"

import { useState } from "react"
import {
  Github,
  Linkedin, Twitter
} from "lucide-react";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" })
  const [loading, setLoading] = useState(false)
  const [status, setStatus] = useState<{ type: "success" | "error" | null; msg?: string }>({
    type: null,
  })

  const update = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    setForm((p) => ({ ...p, [e.target.name]: e.target.value }))

  const submit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus({ type: null })
    if (!form.name || !form.email || !form.message) {
      setStatus({ type: "error", msg: "Please fill in name, email and message." })
      return
    }
    if (!/\S+@\S+\.\S+/.test(form.email)) {
      setStatus({ type: "error", msg: "Please provide a valid email." })
      return
    }

    setLoading(true)
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      })
      if (res.ok) {
        setStatus({ type: "success", msg: "Message sent. Thank you!" })
        setForm({ name: "", email: "", subject: "", message: "" })
      } else {
        const data = await res.json().catch(() => ({}))
        setStatus({ type: "error", msg: data?.error || "Failed to send message." })
      }
    } catch {
      setStatus({ type: "error", msg: "Network error. Try again later." })
    } finally {
      setLoading(false)
    }
  }

  // prefer JetBrains Mono, fallback to Courier New / monospace
  const monoFont = { fontFamily: "'JetBrains Mono', 'Courier New', monospace" }

  return (
    <section id="contact" className="py-0 px-4 bg-retro-white">
      <div className="max-w-6xl mx-auto">
        {/* Add header section that was missing */}
        <div className="text-center mb-6">
          <h2 className="retro-heading text-2xl md:text-6xl mb-8 md:mb-12 text-center">
            CONTACT.EXE
          </h2>
          <div className="w-24 h-1 bg-green-500 mx-auto mb-8"></div>
          <p className="text-gray-700 leading-relaxed mb-4 text-xs md:text-base retro-text">
            Ready to collaborate on your next project? Let's connect and build something amazing together.
          </p>
        </div>

        <div className="grid gap-12 lg:grid-cols-2">
          {/* Form section - increase padding and spacing */}
          <div className="fade-in">
            <div className="border-2 border-gray-200 rounded-lg p-8 md:p-10">
              <h3 style={monoFont} className="text-2xl font-bold mb-6">
                SEND MESSAGE
              </h3>

              <form onSubmit={submit} className="space-y-6">
                {/* Increase input heights and padding */}
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label style={monoFont} className="block text-xs uppercase text-gray-600 mb-2">
                      Name
                    </label>
                    <input
                      name="name"
                      value={form.name}
                      onChange={update}
                      required
                      placeholder="Your name"
                      className="w-full h-12 px-4 rounded-md border-2 border-gray-200 focus:outline-none focus:ring-2 focus:ring-green-500 text-base"
                    />
                  </div>

                  <div>
                    <label style={monoFont} className="block text-xs uppercase text-gray-600 mb-2">
                      Email
                    </label>
                    <input
                      name="email"
                      value={form.email}
                      onChange={update}
                      required
                      type="email"
                      placeholder="your@email.com"
                      className="w-full h-12 px-4 rounded-md border-2 border-gray-200 focus:outline-none focus:ring-2 focus:ring-green-500 text-base"
                    />
                  </div>
                </div>

                <div>
                  <label style={monoFont} className="block text-xs uppercase text-gray-600 mb-2">
                    Subject
                  </label>
                  <input
                    name="subject"
                    value={form.subject}
                    onChange={update}
                    placeholder="Project inquiry"
                    className="w-full h-12 px-4 rounded-md border-2 border-gray-200 focus:outline-none focus:ring-2 focus:ring-green-500 text-base"
                  />
                </div>

                <div>
                  <label style={monoFont} className="block text-xs uppercase text-gray-600 mb-2">
                    Message
                  </label>
                  <textarea
                    name="message"
                    value={form.message}
                    onChange={update}
                    required
                    rows={5}
                    placeholder="Tell me about your project..."
                    className="w-full min-h-[160px] p-4 rounded-md border-2 border-gray-200 focus:outline-none focus:ring-2 focus:ring-green-500 text-base resize-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full inline-flex items-center justify-center gap-3 h-11 bg-black text-white rounded-md hover:bg-gray-800 transition-colors"
                >
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="opacity-90"
                  >
                    <path d="M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z" />
                    <path d="m21.854 2.147-10.94 10.939" />
                  </svg>
                  <span style={monoFont} className="text-sm font-medium">
                    {loading ? "SENDING..." : "SEND MESSAGE"}
                  </span>
                </button>

                <div aria-live="polite" className="text-sm h-6">
                  {status.type === "success" && <p className="text-green-600">{status.msg}</p>}
                  {status.type === "error" && <p className="text-red-600">{status.msg}</p>}
                </div>
              </form>
            </div>
          </div>

          {/* right: info */}
          <div className="space-y-6">
            <div className="fade-in-delayed">
              <h3 style={monoFont} className="text-lg md:text-xl font-semibold mb-3">
                GET IN TOUCH
              </h3>

              <div className="space-y-3">
                <a
                  href="mailto:agugbuenzubechi@gmail.com"
                  className="flex items-center gap-4 p-3 border-2 border-gray-200 rounded-md hover:border-gray-400 transition-colors"
                >
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7" />
                    <rect x="2" y="4" width="20" height="16" rx="2" />
                  </svg>
                  <div>
                    <p style={monoFont} className="text-xs text-gray-600 uppercase">
                      Email
                    </p>
                    <p style={monoFont} className="text-sm text-black">
                      agugbuenzubechi@gmail.com
                    </p>
                  </div>
                </a>

                <a
                  href="tel:+2349057696490"
                  className="flex items-center gap-4 p-3 border-2 border-gray-200 rounded-md hover:border-gray-400 transition-colors"
                >
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384" />
                  </svg>
                  <div>
                    <p style={monoFont} className="text-xs text-gray-600 uppercase">
                      Phone
                    </p>
                    <p style={monoFont} className="text-sm text-black">
                      +234 (0) 913 5651 670
                    </p>
                  </div>
                </a>

                <div className="flex items-center gap-4 p-3 border-2 border-gray-200 rounded-md">
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0" />
                    <circle cx="12" cy="10" r="3" />
                  </svg>
                  <div>
                    <p style={monoFont} className="text-xs text-gray-600 uppercase">
                      Location
                    </p>
                    <p style={monoFont} className="text-sm text-black">
                      Enugu, Enugu State
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h4 style={monoFont} className="text-lg font-semibold mb-3">
                SOCIAL LINKS
              </h4>
              <div className="grid grid-cols-3 gap-3">
                <a
                  href="https://github.com/Co-den"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center p-3 border-2 border-gray-200 rounded-md hover:bg-black hover:text-white transition-colors"
                >
                  <Github size={18} />
                </a>

                <a
                  href="https://www.linkedin.com/in/ikenna-agugbue-135455249a"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center p-3 border-2 border-gray-200 rounded-md hover:bg-black hover:text-white transition-colors"
                >
                  <Linkedin size={18} />
                </a>

                <a
                  href="#"
                  className="flex items-center justify-center p-3 border-2 border-gray-200 rounded-md hover:bg-black hover:text-white transition-colors"
                >
                  <Twitter size={18} />
                </a>
              </div>
            </div>

            {/* status block */}
            <div className="mt-2 border-2 border-gray-900 bg-black text-white px-4 py-4 rounded-md">
              <p className="text-xs md:text-sm neon-text">
              <span>&gt; CURRENT STATUS:</span>
              <span className="ml-2">AVAILABLE FOR WORK</span>
            </p>
              <p style={monoFont} className="text-sm mt-1">
                Currently accepting new projects and collaborations. Response time: immediately
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
