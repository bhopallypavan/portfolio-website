
import React, { useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import toast from "react-hot-toast";

import {
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaLinkedin,
  FaGithub,
} from "react-icons/fa";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [isSending, setIsSending] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setIsSending(true);

    try {
      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        {
          name: formData.name,
          email: formData.email,
          subject: formData.subject,
          message: formData.message,
        },
        {
          publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
        }
      );

      toast.success("Message sent successfully!");

      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      });
    } catch (error) {
      console.error("Email sending failed:", error);
      toast.error("Failed to send message. Please try again.");
    } finally {
      setIsSending(false);
    }
  };

  return (
    <section
      id="contact"
      className="min-h-screen bg-black text-white py-16 sm:py-20 md:py-24 px-4 sm:px-6 md:px-16"
    >
      <div className="max-w-6xl mx-auto">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-10 sm:mb-12 md:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold">
            Contact <span className="text-purple-500">Me</span>
          </h2>

          <p className="text-gray-400 text-sm sm:text-base mt-3 sm:mt-4">
            Have a project or opportunity? Let's connect!
          </p>
        </motion.div>

        {/* Main Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-12 lg:gap-16">

          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            
            className="w-full"
          >
            <h3 className="text-xl sm:text-2xl font-semibold mb-4 sm:mb-6">
              Let's Work Together
            </h3>

            <p className="text-gray-400 text-sm sm:text-base leading-relaxed mb-7 sm:mb-8">
              I'm an aspiring Full-Stack Developer passionate about
              building responsive and interactive web applications.
              I'm open to learning opportunities and job opportunities.
            </p>

            {/* Contact Details */}
            <div className="space-y-5 sm:space-y-6">

              <div className="flex items-start gap-4">
                <FaEnvelope className="text-purple-500 text-xl mt-1 shrink-0" />
                <div className="min-w-0">
                  <h4 className="font-semibold text-sm sm:text-base">
                    Email
                  </h4>
                  <a
                    href="mailto:bhopallypavankumar@gmail.com"
                    className="text-gray-400 text-sm sm:text-base break-all hover:text-purple-400 transition"
                  >
                    bhopallypavankumar@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <FaPhone className="text-purple-500 text-xl mt-1 shrink-0" />
                <div>
                  <h4 className="font-semibold text-sm sm:text-base">
                    Phone
                  </h4>
                  <p className="text-gray-400 text-sm sm:text-base">
                    +91 XXXXXXXXXX
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <FaMapMarkerAlt className="text-purple-500 text-xl mt-1 shrink-0" />
                <div>
                  <h4 className="font-semibold text-sm sm:text-base">
                    Location
                  </h4>
                  <p className="text-gray-400 text-sm sm:text-base">
                    Hyderabad, India
                  </p>
                </div>
              </div>

            </div>

            {/* Social Links */}
            <div className="flex gap-5 mt-8 sm:mt-10">

              <a
                            href="https://www.linkedin.com/in/pavan-kumar-3b404032a /"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="LinkedIn"
                            className="text-gray-300 text-2xl hover:text-purple-500 transition duration-300 hover:scale-110"
                          >
                            <FaLinkedin />
                          </a>
              
                          <a
                            href="https://github.com/bhopallypavan/"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="GitHub"
                            className="text-gray-300 text-2xl hover:text-purple-500 transition duration-300 hover:scale-110"
                          >
                            <FaGithub />
                          </a>

            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="w-full bg-[#151515] p-4 sm:p-6 md:p-8 rounded-xl sm:rounded-2xl border border-gray-800"
          >

            {/* Name */}
            <div className="mb-5">
              <label
                htmlFor="name"
                className="block mb-2 text-gray-300 text-sm sm:text-base"
              >
                Your Name
              </label>

              <input
                id="name"
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Enter your name"
                autoComplete="name"
                required
                className="w-full p-3 text-sm sm:text-base bg-black border border-gray-700 rounded-lg outline-none focus:border-purple-500 transition"
              />
            </div>

            {/* Email */}
            <div className="mb-5">
              <label
                htmlFor="email"
                className="block mb-2 text-gray-300 text-sm sm:text-base"
              >
                Your Email
              </label>

              <input
                id="email"
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Enter your email"
                autoComplete="email"
                required
                className="w-full p-3 text-sm sm:text-base bg-black border border-gray-700 rounded-lg outline-none focus:border-purple-500 transition"
              />
            </div>

            {/* Subject */}
            <div className="mb-5">
              <label
                htmlFor="subject"
                className="block mb-2 text-gray-300 text-sm sm:text-base"
              >
                Subject
              </label>

              <input
                id="subject"
                type="text"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                placeholder="Enter subject"
                required
                className="w-full p-3 text-sm sm:text-base bg-black border border-gray-700 rounded-lg outline-none focus:border-purple-500 transition"
              />
            </div>

            {/* Message */}
            <div className="mb-6">
              <label
                htmlFor="message"
                className="block mb-2 text-gray-300 text-sm sm:text-base"
              >
                Message
              </label>

              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Write your message..."
                rows={5}
                required
                className="w-full p-3 text-sm sm:text-base bg-black border border-gray-700 rounded-lg outline-none focus:border-purple-500 resize-none transition"
              />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={isSending}
              className="w-full bg-purple-600 hover:bg-purple-700 disabled:opacity-50 disabled:cursor-not-allowed py-3 rounded-lg text-sm sm:text-base font-semibold transition duration-300"
            >
              {isSending ? "Sending..." : "Send Message"}
            </button>

          </motion.form>

        </div>
      </div>
    </section>
  );
};

export default Contact;
