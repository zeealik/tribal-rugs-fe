import MainLayout from '@/layouts/main-layout';
import { WHATSAPP_PHONE_NUMBER } from '@/lib/constants';
import { Mail, Phone, MapPin } from 'lucide-react';

const Contact = () => {
  return (
    <MainLayout>
      <div className="container mx-auto px-auto mt-48 mb-12">
        <h1 className="text-3xl font-bold text-center mb-10">Contact Us</h1>

        <div className="grid md:grid-cols-2 gap-10">
          {/* Contact Form */}
          <div>
            <h2 className="text-2xl font-semibold mb-4">Get In Touch</h2>
            <form className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium">
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  className="mt-1 p-3 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Enter your name"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  className="mt-1 p-3 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Enter your email"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium">
                  Message
                </label>
                <textarea
                  id="message"
                  rows={4}
                  className="mt-1 p-3 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Your message"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-black text-white p-3 rounded-md hover:bg-gray-800 transition"
              >
                Send Message
              </button>
            </form>
          </div>

          {/* Contact Details */}
          <div className="space-y-6">
            <h2 className="text-2xl font-semibold mb-4">Contact Information</h2>
            <div className="flex items-center">
              <Phone className="mr-2" />
              <span>{WHATSAPP_PHONE_NUMBER}</span>
            </div>
            <div className="flex items-center">
              <Mail className="mr-2" />
              <span>shamsyousafzai999@gmail.com</span>
            </div>
            <div className="flex items-center">
              <MapPin className="mr-2" />
              <span>F-6, Super Market Islamabad</span>
            </div>
            <p className="mt-6">
              <strong>Opening Hours:</strong>
              <br />
              Monday-Saturday: 10 AM to 7 PM
            </p>
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default Contact;
