import React, { useState } from "react";
import { motion } from "framer-motion";

const Contact = () => {
  const [result, setResult] = useState("");
  const [isSuccess, setIsSuccess] = useState(false);

  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    formData.append("access_key", "b731ff9e-1a53-46de-834a-cf9d70797672");
    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();
      setResult(data.success ? "Success!" : "Error");
      if (data.success) {
        setResult("Message sent successfully!");
        setIsSuccess(true);
        event.target.reset();
      } else {
        console.log("Error", data);
        setResult(data.message);
      }
    } catch (error) {
      console.log("Error", error);
      setResult("Something went wrong. Please try again later.");
    }
  };

  return (
    <section id="contact" className="py-32 bg-surface border-y border-border">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-start">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="md:col-span-5"
          >
            <h2 className="text-sm font-bold uppercase tracking-widest text-accent mb-4">
              Contact
            </h2>
            <h3 className="text-4xl md:text-5xl font-bold text-primary tracking-tight leading-tight">
              Let's make something <br />
              great together.
            </h3>
            <p className="mt-6 text-lg text-slate-600 max-w-sm">
              I'm always open to discussing new projects, creative ideas or
              opportunities to be part of your visions.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="md:col-span-7"
          >
            <form className="flex flex-col space-y-6" onSubmit={onSubmit}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex flex-col space-y-2">
                  <label
                    htmlFor="name"
                    className="text-xs font-bold uppercase tracking-wider text-primary"
                  >
                    Name
                  </label>
                  <input
                    id="name"
                    type="text"
                    placeholder="Your Name"
                    name="name"
                    className="px-4 py-3 border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-accent bg-white text-primary transition-colors"
                  />
                </div>
                <div className="flex flex-col space-y-2">
                  <label
                    htmlFor="email"
                    className="text-xs font-bold uppercase tracking-wider text-primary"
                  >
                    Email
                  </label>
                  <input
                    id="email"
                    type="email"
                    name="email"
                    placeholder="Your Email"
                    className="px-4 py-3 border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-accent bg-white text-primary transition-colors"
                  />
                </div>
              </div>
              <div className="flex flex-col space-y-2">
                <label
                  htmlFor="message"
                  className="text-xs font-bold uppercase tracking-wider text-primary"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  placeholder="How can I help you?"
                  rows="5"
                  name="message"
                  className="px-4 py-3 border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-accent bg-white text-primary transition-colors resize-none"
                ></textarea>
              </div>
              {!isSuccess && (
                <button
                  type="submit"
                  className="self-start px-8 py-4 bg-primary text-white font-bold uppercase tracking-widest text-xs rounded-md hover:opacity-90 transition-opacity shadow-sm disabled:opacity-50"
                  disabled={result === "Sending...."}
                >
                  {result === "Sending...." ? "Sending..." : "Send Message"}
                </button>
              )}

              {result && (
                <p
                  className={`text-sm font-bold ${
                    isSuccess ? "text-green-600" : "text-red-500"
                  }`}
                >
                  {result}
                </p>
              )}
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
