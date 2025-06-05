import React, { useState } from 'react';
import {
  Instagram,
  Twitter,
  Star,
  User,
  Building2,
  Mail,
  Phone,
  Calendar,
  DollarSign,
  MessageSquare,
  ClipboardList,
  PenTool
} from 'lucide-react';

const IconButton = ({ icon }) => (
  <button className="p-3 rounded-full bg-black bg-opacity-30 hover:bg-opacity-50 backdrop-blur-md text-white">
    {icon}
  </button>
);

const InputField = ({ icon, type = "text", placeholder }) => (
  <div className="relative w-full">
    <div className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-300">
      {icon}
    </div>
    <input
      type={type}
      placeholder={placeholder}
      className="w-full px-4 py-3 pl-10 rounded-xl bg-black bg-opacity-40 border border-white/20 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-400"
    />
  </div>
);

const SelectField = ({ icon, options }) => (
  <div className="relative w-full">
    <div className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-300">
      {icon}
    </div>
    <select
      className="w-full px-4 py-3 pl-10 rounded-xl bg-black bg-opacity-80 border border-white/20 text-white focus:outline-none focus:ring-2 focus:ring-orange-400"
    >
      <option value="">Select Work Type</option>
      {options.map((option) => (
        <option key={option} value={option.toLowerCase()}>
          {option}
        </option>
      ))}
    </select>
  </div>
);

const TextareaField = ({ icon, placeholder }) => (
  <div className="relative w-full">
    <div className="absolute left-3 top-4 text-gray-300">
      {icon}
    </div>
    <textarea
      placeholder={placeholder}
      rows="4"
      className="w-full px-4 py-3 pl-10 rounded-xl bg-black bg-opacity-40 border border-white/20 text-white placeholder-gray-300 resize-none focus:outline-none focus:ring-2 focus:ring-orange-400"
    />
  </div>
);

const Landing = () => {
  const [showForm, setShowForm] = useState(false);

  const handleConnectClick = () => {
    setShowForm(true);
    
  };

  const handleCancel = () => {
    setShowForm(false);
  };

  return (
    <div className="relative overflow-hidden w-full min-h-screen md:h-screen">
      {/* Background Image */}
      <img
        src="https://framerusercontent.com/images/UXzBq2N36Gb1LJ0SOsv4NRl8YI.png?lossless=1"
        alt="Background"
        className="absolute inset-0 w-full h-full object-cover object-center z-0"
      />

      {/* Foreground Content */}
      <div className="relative z-10 flex items-center justify-center min-h-screen">
        <div className="flex flex-col items-center justify-center text-center px-4 py-20 max-w-2xl w-full">
          {/* Status pill */}
          <div className="mb-4 px-4 py-1 bg-black bg-opacity-40 rounded-full flex items-center space-x-2 text-sm text-white backdrop-blur-md">
            <span className="h-2 w-2 bg-green-400 rounded-full animate-ping"></span>
            <span>Join our waitlist</span>
          </div>
        {!showForm ? (
            <>
          {/* Heading */}
          <h1 className="text-4xl md:text-6xl font-semibold inter text-white mb-6">NexaCrft Digitech</h1>

          {/* Waitlist Box or Form */}
          
            <div className="w-full bg-black bg-opacity-30 backdrop-blur-md border border-white/10 rounded-3xl px-6 py-10 shadow-lg">
              <h2 className="text-2xl md:text-3xl font-semibold inter text-white mb-2">Good things come to those who wait</h2>
              <p className="text-gray-300  text-sm mb-6">
                Currently we have a lot more projects to work upon, sign up for the waitlist to be the first to know when we take in our next project to work on.
              </p>

              <div className="flex flex-col sm:flex-row items-center gap-4">
                <InputField type="email" placeholder="Enter your email" icon={<Mail className="w-5 h-5" />} />
                <button
                  onClick={handleConnectClick}
                  className="px-6 py-3 w-full sm:w-auto rounded-full bg-gradient-to-r from-orange-800 to-orange-400 text-white font-medium hover:scale-105 transition-transform"
                >
                  Connect
                </button>
              </div>
            </div>
            </>
          ) : (
            <div className="w-full bg-black bg-opacity-30 backdrop-blur-md border border-white/10 rounded-3xl px-6 py-6 shadow-lg space-y-4">
              <h2 className="text-2xl font-semibold text-white mb-4">Project Inquiry Form</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <InputField placeholder="Your Name" icon={<User className="w-5 h-5" />} />
                <InputField placeholder="Company" icon={<Building2 className="w-5 h-5" />} />
                <InputField type="email" placeholder="Email Address" icon={<Mail className="w-5 h-5" />} />
                <InputField type="tel" placeholder="Phone Number" icon={<Phone className="w-5 h-5" />} />
                <SelectField icon={<ClipboardList className="w-5 h-5" />} options={["Website", "Marketing", "App", "Branding", "Content", "Reels", "Other"]} />
                <InputField type="date" placeholder="Deadline" icon={<Calendar className="w-5 h-5" />} />
                <InputField type="number" placeholder="Estimated Budget" icon={<DollarSign className="w-5 h-5" />} />
                <InputField placeholder="Project Scope" icon={<PenTool className="w-5 h-5" />} />
              </div>
              <TextareaField placeholder="Additional Message" icon={<MessageSquare className="w-5 h-5" />} />
              <div className="flex gap-4 justify-end pt-4">
                <button onClick={handleCancel} className="px-4 py-2 rounded-full border border-gray-300 text-white hover:bg-gray-800">
                  Cancel
                </button>
                <button className="px-6 py-2 rounded-full bg-gradient-to-r from-orange-800 to-orange-400 text-white font-semibold hover:scale-105 transition-transform">
                  Submit
                </button>
              </div>
            </div>
          )}

          {/* Social Icons */}
          {!showForm && (
            <div className="flex gap-6 mt-10">
              <a href="https://www.instagram.com/nexacrft" target="_blank" rel="noopener noreferrer">
                <IconButton icon={<Instagram className="w-5 h-5" />} />
              </a>
              <a href="https://www.nexacrft.com" target="_blank" rel="noopener noreferrer">
                <IconButton icon={<Star className="w-5 h-5" />} />
              </a>
              <a href="https://twitter.com/nexacrft" target="_blank" rel="noopener noreferrer">
                <IconButton icon={<Twitter className="w-5 h-5" />} />
              </a>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Landing;
