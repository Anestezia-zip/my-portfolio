import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const formRef = useRef();
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = ({ target: { name, value } }) => {
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      await emailjs.send(
        "anastasiia",
        "template_emailjs",
        {
          from_name: form.name,
          to_name: "Anastasiia",
          from_email: form.email,
          to_email: "a.melni44enko@gmail.com",
          message: form.message,
        },
        "wVGeZN02Ec9zamWMp"
      );

      setLoading(false);
      setSubmitted(true);
    } catch (error) {
      setLoading(false);
      console.error(error);
    }
  };

  const handleReset = () => {
    setForm({ name: "", email: "", message: "" });
    setSubmitted(false);
  };

  return (
    <section className="c-space my-20" id="contact">
      <div className="relative min-h-screen border rounded-2xl shadow-terminal flex items-center justify-center flex-col">
        <div className="absolute top-0 bg-white w-full rounded-t-lg p-5">
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
        <div className="contact-container bg-white/40 p-6 pb-8 my-4">
          {submitted ? (
            <div className="text-center">
              <h3 className="font-bold text-2xl">Thank you!</h3>
              <p className="text-base mt-4">
                I usually respond the same day 😉
              </p>
              <button
                className="mt-6 p-2 rounded-md bg-gradient-to-b from-teal-900 via-gray-800 to-black text-white sm:text-xl"
                onClick={handleReset}
              >
                Back to form
              </button>
            </div>
          ) : (
            <>
              <h3 className="font-bold text-2x">Get in Touch</h3>
              <p className="text-base mt-4">
                Need a fresh website, a revamp of your current one, or a custom
                digital solution? Let’s collaborate and bring your ideas to
                life.
              </p>
              <form
                ref={formRef}
                onSubmit={handleSubmit}
                className="mt-12 flex flex-col space-y-7"
              >
                <label className="space-y-3" htmlFor="name">
                  <span className="field-label">Full name</span>
                  <input
                    id="name"
                    type="text"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    required
                    className="field-input"
                    placeholder="Your full name"
                  />
                </label>

                <label className="space-y-3" htmlFor="email">
                  <span className="field-label">Email address</span>
                  <input
                    id="email"
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    required
                    className="field-input"
                    placeholder="Your email address"
                  />
                </label>

                <label className="space-y-3" htmlFor="message">
                  <span className="field-label">Your message</span>
                  <textarea
                    id="message"
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="field-input"
                    placeholder="Hi, I'm interested in..."
                  />
                </label>

                <button
                  className="flex items-center justify-center gap-2 p-2 rounded-md bg-gradient-to-b from-teal-900 via-gray-800 to-black"
                  type="submit"
                  disabled={loading}
                  aria-live="polite"
                >
                  <span className="text-white sm:text-xl">
                    {loading ? "Sending..." : "Send message"}
                  </span>

                  <img
                    src="/assets/paper-plane.png"
                    alt="arrow-up"
                    className="w-3 h-3 mt-1 invert"
                  />
                </button>
              </form>
            </>
          )}
        </div>
      </div>
    </section>
  );
};

export default Contact;
