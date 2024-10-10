import { WHATSAPP_PHONE_NUMBER } from '@/lib/constants';
import { Mail, Phone, MapPin, Instagram, Facebook, Youtube } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="py-10 border border-t-gray-200">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-start">
          <div className="flex flex-col mb-6 md:mb-0">
            <h2 className="text-2xl font-bold mb-2">Tribal Rugs Palace</h2>
            <p className="mb-1">Monday-Saturday</p>
            <p className="mb-4">10 AM to 7 PM</p>
            <div className="flex items-center mb-2">
              <Phone className="mr-2" />
              <span>{WHATSAPP_PHONE_NUMBER}</span>
            </div>
            <div className="flex items-center mb-2">
              <Mail className="mr-2" />
              <span>shamsyousafzai999@gmail.com</span>
            </div>
            <div className="flex items-center">
              <MapPin className="mr-2" />
              <span>F-6, Super Market Islamabad</span>
            </div>
          </div>
          {/* about us  */}
          <div className="flex flex-col mb-6 md:mb-0 cursor-pointer">
            <h3 className="font-bold mb-2">ABOUT US</h3>
            <a href="#" className="mb-1">
              About Us
            </a>
            <a href="#" className="mb-1">
              Store Locator
            </a>
            <a href="#" className="mb-1">
              Privacy Policies
            </a>
            <a href="#" className="mb-1">
              Disclaimer
            </a>
            <a href="#" className="mb-1">
              Term & Conditions
            </a>
          </div>
          {/* customer service  */}
          <div className="flex flex-col mb-6 md:mb-0 cursor-pointer">
            <h3 className="font-bold mb-2">CUSTOMER SERVICE</h3>
            <a href="#" className="mb-1">
              How To Order
            </a>
            <a href="#" className="mb-1">
              FAQs
            </a>
            <a href="/contact" className="mb-1">
              Contact Us
            </a>
            <a href="#" className="mb-1">
              Refund & Exchange
            </a>
            <a href="#" className="mb-1">
              Feedback/Complaints
            </a>
            <a href="#" className="mb-1">
              Track Your Order
            </a>
          </div>

          {/* newsletter  */}
          <div className="flex flex-col mb-6 md:mb-0 cursor-pointer">
            <h3 className="font-bold mb-2">NEWSLETTER</h3>
            <p className="mb-2">
              Get the latest style updates and special deals directly in your inbox
            </p>
            <div className="flex mb-4">
              <input
                type="email"
                placeholder="Enter your email"
                className="p-2 border border-gray-300 rounded-l"
              />
              <button className="p-2 bg-black text-white rounded-r">Subscribe</button>
            </div>
            <div className="flex space-x-4">
              <a href="#">
                <Instagram />
              </a>
              <a href="#">
                <Facebook />
              </a>
              <a href="#">
                <Youtube />
              </a>
            </div>
          </div>
        </div>
        <div className="text-center mt-8">
          <p>&copy; 2024 Tribal Rugs Palace. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
