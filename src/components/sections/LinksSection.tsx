"use client";

import { useState } from "react";

export default function LinksSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<
    "idle" | "success" | "error"
  >("idle");

  const links = [
    {
      name: "GitHub",
      url: "https://github.com/PickHD",
      icon: (
        <svg fill="currentColor" viewBox="0 0 20 20">
          <path
            fillRule="evenodd"
            d="M10 0C4.477 0 0 4.484 0 10.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.613-1.336-2.22-.253-4.555 1.113-4.555 1.113-.893-1.59-1.742-1.59-1.742-1.426-.973.108-.953.108-.953 1.296.09 1.978 1.296 1.978.862 1.479 2.259 1.053 2.877.808.088-.626.337-1.088.613-1.336-2.186-.224-4.517 1.103-4.517 1.103-.37.965-1.416 1.479-1.416 1.479-.876 1.5-.854 1.484-.854 1.484.835.473 1.54.473 1.54.934 1.597 2.44.224 3.03-1.088 3.03-1.088.27-.748.534-1.088.534-1.088.399.364.864.236 1.235.478 1.521.18.52.36 1.037.558 1.585.624 1.895.62.62.62.62zm-1.337 9.763c0 .734-.598 1.332-1.332 1.332s-1.332-.598-1.332-1.332.598-1.332 1.332-.598 1.332zM10 14.653c-2.575 0-4.653-2.078-4.653-4.653S7.425 5.347 10 5.347s4.653 2.078 4.653 4.653-2.078 4.653-4.653 4.653zm0-7.787c-1.734 0-3.134 1.4-3.134 3.134S8.266 13.134 10 13.134s3.134-1.4 3.134-3.134-1.4-3.134-3.134-3.134z"
            clipRule="evenodd"
          />
        </svg>
      ),
    },
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/taufik-januar-777141193/",
      icon: (
        <svg fill="currentColor" viewBox="0 0 20 20">
          <path
            d="M16.338 16.338H13.67V12.16c0-.995-.017-2.277-1.387-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248H8.014v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.778 3.203 4.092v4.711zM5.005 6.575a1.548 1.548 0 11-.003-3.096 1.548 1.548 0 01.003 3.096zm-1.337 9.763H6.34v-8.59H3.667v8.59zM17.668 1H2.328C1.595 1 1 1.581 1 2.298v15.403C1 18.418 1.595 19 2.328 19h15.34c.734 0 1.332-.582 1.332-1.299V2.298C19 1.581 18.402 1 17.668 1z"
            clipRule="evenodd"
          />
        </svg>
      ),
    },
    {
      name: "Instagram",
      url: "https://www.instagram.com/taufikjanuarr/",
      icon: (
        <svg fill="currentColor" viewBox="0 0 20 20">
          <path d="M10 0C4.477 0 0 4.477 0 10s4.477 10 10 10 10-4.477 10-10S15.523 0 10 0zm6.441 6.891c0 .734-.598 1.332-1.332 1.332s-1.332-.598-1.332-1.332.598-1.332 1.332-.598 1.332zM10 14.653c-2.575 0-4.653-2.078-4.653-4.653S7.425 5.347 10 5.347s4.653 2.078 4.653 4.653-2.078 4.653-4.653 4.653zm0-7.787c-1.734 0-3.134 1.4-3.134 3.134S8.266 13.134 10 13.134s3.134-1.4 3.134-3.134-1.4-3.134-3.134-3.134z" />
        </svg>
      ),
    },
    {
      name: "Docker Hub",
      url: "https://hub.docker.com/u/pickezdocker",
      icon: (
        <svg fill="currentColor" viewBox="0 0 20 20">
          <path d="M9.812 3.75a2.5 2.5 0 100 5 2.5 2.5 0 000-5zm0 1.5a1 1 0 110 2 1 1 0 010-2zm0 6.5a2.5 2.5 0 100 5 2.5 2.5 0 000-5zm0 1.5a1 1 0 110 2 1 1 0 010-2zm5.688-9a2.5 2.5 0 100 5 2.5 2.5 0 000-5zm0 1.5a1 1 0 110 2 1 1 0 010-2zm-11.376 0a2.5 2.5 0 100 5 2.5 2.5 0 000-5zm0 1.5a1 1 0 110 2 1 1 0 010-2zm5.688 12.5a2.5 2.5 0 100 5 2.5 2.5 0 000-5zm0 1.5a1 1 0 110 2 1 1 0 010-2z" />
        </svg>
      ),
    },
    {
      name: "Email",
      url: "mailto:contact@taufikjanuar.com",
      icon: (
        <svg fill="currentColor" viewBox="0 0 20 20">
          <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
          <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
        </svg>
      ),
    },
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1000));
      setSubmitStatus("success");
      setFormData({ name: "", email: "", message: "" });
      setTimeout(() => setSubmitStatus("idle"), 3000);
    } catch (error) {
      setSubmitStatus("error");
      setTimeout(() => setSubmitStatus("idle"), 3000);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section className="premium-section">
      <div className="flex items-center mb-8">
        <svg className="icon" fill="currentColor" viewBox="0 0 20 20">
          <path d="M12.586 4.586a2 2 0 112.828 2.828l-3 3a2 2 0 01-2.828 0 1 1 0 00-1.414 1.414 4 4 0 005.656 0l3-3a4 4 0 00-5.656-5.656l-1.5 1.5a1 1 0 101.414 1.414l1.5-1.5a2 2 0 01-2.828-2.828l3-3z" />
        </svg>
        <h2 className="text-2xl font-bold serif-heading">Connect With Me</h2>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Social Links */}
        <div className="lg:col-span-2">
          <h3 className="text-lg font-semibold text-white mb-4">
            Social Profiles
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {links.map((link) => (
              <a
                key={link.name}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center p-4 border border-gray-800 rounded-lg hover:bg-gray-950 hover:border-blue-400 transition-all duration-200 group"
              >
                <p className="text-white font-medium group-hover:text-gray-200 transition-colors">
                  {link.name}
                </p>
              </a>
            ))}
          </div>
        </div>

        {/* Contact Form */}
        <div className="lg:col-span-1">
          <h3 className="text-lg font-semibold text-white mb-4">
            Get In Touch
          </h3>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-300 mb-2"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="premium-input w-full"
                placeholder="Your name"
              />
            </div>

            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-300 mb-2"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="premium-input w-full"
                placeholder="your@email.com"
              />
            </div>

            <div>
              <label
                htmlFor="message"
                className="block text-sm font-medium text-gray-300 mb-2"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={4}
                className="premium-input w-full resize-none"
                placeholder="Tell me about your project..."
              />
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="premium-button w-full disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isSubmitting ? (
                <div className="flex items-center justify-center">
                  <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin mr-2"></div>
                  Sending...
                </div>
              ) : (
                "Send Message"
              )}
            </button>

            {submitStatus === "success" && (
              <div className="mt-4 p-3 bg-green-500/10 border border-green-500/30 rounded-lg text-green-300 text-sm">
                ✓ Message sent successfully! I&apos;ll get back to you soon.
              </div>
            )}

            {submitStatus === "error" && (
              <div className="mt-4 p-3 bg-red-500/10 border border-red-500/30 rounded-lg text-red-300 text-sm">
                ✗ Failed to send message. Please try again later.
              </div>
            )}
          </form>
        </div>
      </div>

      <div className="mt-8 p-6 bg-gradient-to-r from-blue-500/5 to-green-500/5 rounded-lg border border-blue-400/20">
        <p className="text-gray-300 text-center">
          <span className="text-white font-medium">
            Let&apos;s build something amazing together!
          </span>
          <br />
          Whether you have a project in mind or just want to connect, I&apos;m
          always open to discussing new opportunities and interesting ideas.
        </p>
      </div>
    </section>
  );
}
