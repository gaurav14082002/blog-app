import React from "react";
import { FaEnvelope, FaMapMarkerAlt, FaPhone } from "react-icons/fa";
import { useForm } from "react-hook-form";
import axios from "axios";
import { toast } from "react-toastify";
import { ToastContainer } from "react-toastify";

function Contact() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = async(data) => {
    const userInfo = {
      access_key: "e6efe870-96ad-4ce5-964e-a44a74c2affb",
      name: data.name,
      email: data.email,
      message: data.message,
    };
    try{
      const response = await axios.post("https://api.web3forms.com/submit",userInfo)
       toast.success("message sent successfully")

    }catch(error){
      toast.error("an error occured")
    }
  };

  return (
    <div className="bg-gradient-to-r from-indigo-700 via-purple-700 to-pink-700 min-h-screen py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto bg-white p-10 rounded-lg shadow-2xl space-y-12">
        <div className="text-center">
          <h2 className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-red-500 to-pink-500 mb-6">
            Contact Us
          </h2>
        </div>

        <div className="flex flex-col md:flex-row justify-between gap-8">
          <div className="w-full md:w-1/2 mb-8 md:pr-8">
            <h3 className="text-xl font-semibold text-gray-900 mb-6">
              Send us a message
            </h3>
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-800"
                >
                  Your Name
                </label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  placeholder="Your Name"
                  className="w-full px-6 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500"
                  {...register("name", { required: true })}
                />
                {errors.name && (
                  <span className="font-semibold text-red-500">
                    This field is required
                  </span>
                )}
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-800"
                >
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="Your Email"
                  className="w-full px-6 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500"
                  {...register("email", { required: true })}
                />
                {errors.email && (
                  <span className="font-semibold text-red-500">
                    This field is required
                  </span>
                )}
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-800"
                >
                  Message
                </label>
                <textarea
                  name="message"
                  id="message"
                  rows="4"
                  placeholder="Your Message"
                  className="w-full px-6 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500"
                  {...register("message", { required: true })}
                ></textarea>
                {errors.message && (
                  <span className="font-semibold text-red-500">
                    This field is required
                  </span>
                )}
              </div>
              <div>
                <button
                  type="submit"
                  className="w-full py-3 px-6 bg-gradient-to-r from-yellow-400 to-pink-500 text-white rounded-lg hover:opacity-90 transition-opacity duration-300 focus:outline-none focus:ring-2 focus:ring-yellow-500"
                >
                  Send Message
                </button>
              </div>
            </form>
          </div>

          <div className="w-full md:w-1/2 bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold text-gray-900 mb-6">
              Contact Information
            </h3>
            <ul className="space-y-4">
              <li className="flex items-center space-x-3">
                <FaMapMarkerAlt className="text-green-500" />
                <span className="text-gray-700">Sector-3, Faridabad, Haryana</span>
              </li>
              <li className="flex items-center space-x-3">
                <FaEnvelope className="text-blue-500" />
                <span className="text-gray-700">gs1380525@gmail.com</span>
              </li>
              <li className="flex items-center space-x-3">
                <FaPhone className="text-red-500" />
                <span className="text-gray-700">+91 9717034927</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
