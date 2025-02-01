import React, { useRef, useState } from "react";

const Contact = () => {
    const formRef = useRef();

    const [loading, setLoading] = useState(false)
    const [form, setForm] = useState({
        name: '',
        email: '',
        message: '',
    })

    const handleChange = () => {}
    const handleSubmit = () => {}

  return (
    <section className="c-space my-20" id="contact">
      <div className="relative min-h-screen border rounded-2xl shadow-terminal flex items-center justify-center flex-col">
        <div className="absolute top-0 bg-white w-full rounded-t-lg p-4">
          <div className="flex gap-2">
            <span className="relative flex h-3 w-3">
              <span className="btn-ping bg-red-400"></span>
              <span className="btn-ping_dot bg-red-300"></span>
            </span>
            <span className="relative flex h-3 w-3">
              <span className="btn-ping bg-yellow-400"></span>
              <span className="btn-ping_dot bg-yellow-300"></span>
            </span>
            <span className="relative flex h-3 w-3">
              <span className="btn-ping bg-green-400"></span>
              <span className="btn-ping_dot bg-green-300"></span>
            </span>
          </div>
        </div>
        <div className="contact-container bg-white/50 p-3">
          <h3 className="font-bold text-2x">Get in Touch</h3>
          <p className="text-base mt-4">
            Need a fresh website, a revamp of your current one, or a custom
            digital solution? Let’s collaborate and bring your ideas to life.
          </p>

          <form ref={formRef} onSubmit={handleSubmit} className="mt-12 flex flex-col space-y-7">
          <label className="space-y-3">
              <span className="field-label">Full name</span>
              <input
                type="text"
                name="name"
                // value={form.name}
                onChange={handleChange}
                required
                className="field-input"
                placeholder="Full name"
              />
            </label>

            <label className="space-y-3">
              <span className="field-label">Email address</span>
              <input
                type="email"
                name="email"
                // value={form.email}
                onChange={handleChange}
                required
                className="field-input"
                placeholder="ex., a.melni44enko@gmail.com"
              />
            </label>

            <label className="space-y-3">
              <span className="field-label">Your message</span>
              <textarea
                name="message"
                // value={form.message}
                onChange={handleChange}
                required
                rows={5}
                className="field-input"
                placeholder="Share your thoughts or inquiries..."
              />
            </label>

            <button className="field-btn" type="submit" disabled={loading}>
              {loading ? 'Sending...' : 'Send Message'}

              <img src="/assets/arrow-up.png" alt="arrow-up" className="field-btn_arrow" />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
