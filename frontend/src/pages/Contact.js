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
    <div className="bg-gray-50 min-h-screen flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl w-full space-y-8 bg-white p-10 rounded-lg shadow-lg">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-950">Contact Us</h2>
        </div>
        <div className="flex flex-col md:flex-row justify-between">
          <div className="w-full md:w-1/2 mb-8 md:pr-4">
            <h3 className="text-lg font-medium text-gray-950 mb-4">
              Send us a message
            </h3>
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-950"
                >
                  Your Name
                </label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  placeholder="Your Name"
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
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
                  className="block text-sm font-medium text-gray-950"
                >
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="Your Email"
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
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
                  className="block text-sm font-medium text-gray-950"
                >
                  Message
                </label>
                <textarea
                  name="message"
                  id="message"
                  rows="4"
                  placeholder="Your Message"
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
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
                  className="w-full py-2 px-4 bg-green-600 text-white rounded-lg hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500"
                >
                  Send Message
                </button>
              </div>
            </form>
          </div>
          <div className="w-full md:w-1/2 md:pl-8">
            <h3 className="text-lg font-medium text-gray-950 mb-4">
              Contact Information
            </h3>
            <ul className="space-y-3">
              <li className="flex items-center space-x-2">
                <span>
                  <FaMapMarkerAlt className="text-green-500" />
                  sector-3 Faridabad, Haryana
                </span>
              </li>
              <li className="flex items-center space-x-2">
                <FaEnvelope className="text-blue-500" />
                <span>gs1380525@gmail.com</span>
              </li>
              <li className="flex items-center space-x-2">
                <FaPhone className="text-red-500" />
                <span>+91 9717034927</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
