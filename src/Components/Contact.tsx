// src/pages/Contact.tsx
import React from "react";
import { useForm } from "react-hook-form";

type ContactFormData = {
  name: string;
  email: string;
  message: string;
};

const Contact: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ContactFormData>();

  const onSubmit = (data: ContactFormData) => {
    console.log("Form Submitted:", data);
    alert("Thank you! We’ll get back to you soon.");
  };

  return (
    <div className="pt-20">
      <section className="bg-gray-50 py-16">
        <div className="container mx-auto px-6 md:px-12 lg:px-20">
          {/* Title */}
          <h1 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-6">
            Contact Us
          </h1>
          <p className="text-center text-gray-600 max-w-2xl mx-auto mb-12">
            Have questions about your next adventure? Get in touch with us, and
            we’ll be happy to assist you.
          </p>

          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Form */}
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="bg-white shadow-md rounded-2xl p-8 space-y-6"
            >
              <div>
                <label className="block text-gray-700 font-medium mb-2">
                  Name
                </label>
                <input
                  type="text"
                  {...register("name", { required: "Name is required" })}
                  className="w-full border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-blue-500 outline-none"
                />
                {errors.name && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.name.message}
                  </p>
                )}
              </div>

              <div>
                <label className="block text-gray-700 font-medium mb-2">
                  Email
                </label>
                <input
                  type="email"
                  {...register("email", { required: "Email is required" })}
                  className="w-full border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-blue-500 outline-none"
                />
                {errors.email && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.email.message}
                  </p>
                )}
              </div>

              <div>
                <label className="block text-gray-700 font-medium mb-2">
                  Message
                </label>
                <textarea
                  rows={4}
                  {...register("message", { required: "Message is required" })}
                  className="w-full border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-blue-500 outline-none"
                />
                {errors.message && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.message.message}
                  </p>
                )}
              </div>

              <button
                type="submit"
                className="w-full bg-blue-600 text-white py-3 rounded-lg shadow hover:bg-blue-700 transition"
              >
                Send Message
              </button>
            </form>

            {/* Contact Info */}
            <div className="space-y-6">
              <h2 className="text-2xl font-semibold text-gray-800">
                Get in Touch
              </h2>
              <p className="text-gray-600">
                Whether you need help planning your trip or just want to say hi,
                we’re always here for you.
              </p>
              <ul className="space-y-3 text-gray-700">
                <li>📍 123 Travel Street, Adventure City, World</li>
                <li>📞 +91 98765 43210</li>
                <li>✉️ support@travelpro.com</li>
              </ul>
              <div className="mt-6">
                <iframe
                  title="Map"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.019015739844!2d-122.40136878468294!3d37.79228177975602!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80858064d2c2f2af%3A0xe4f8f77d5a2b!2sTravel%20Agency!5e0!3m2!1sen!2sin!4v1630000000000!5m2!1sen!2sin"
                  width="100%"
                  height="250"
                  loading="lazy"
                  className="rounded-2xl shadow-md"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
