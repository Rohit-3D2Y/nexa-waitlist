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

const InputField = ({ icon, type = "text", placeholder, name, value, onChange }) => (
  <div className="relative w-full">
    <div className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-300">
      {icon}
    </div>
    <input
      type={type}
      name={name}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      className="w-full px-4 py-3 pl-10 rounded-xl bg-black bg-opacity-40 border border-white/20 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-400"
    />
  </div>
);

const SelectField = ({ icon, options, name, onChange }) => (
  <div className="relative w-full">
    <div className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-300">
      {icon}
    </div>
    <select
      name={name}
      onChange={onChange}
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

const TextareaField = ({ icon, placeholder, name, value, onChange }) => (
  <div className="relative w-full">
    <div className="absolute left-3 top-4 text-gray-300">
      {icon}
    </div>
    <textarea
      placeholder={placeholder}
      name={name}
      value={value}
      onChange={onChange}
      rows="4"
      className="w-full px-4 py-3 pl-10 rounded-xl bg-black bg-opacity-40 border border-white/20 text-white placeholder-gray-300 resize-none focus:outline-none focus:ring-2 focus:ring-orange-400"
    />
  </div>
);

const Landing = () => {
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    workType: '',
    deadline: '',
    budget: '',
    scope: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState('');

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError('');

    try {
      const scriptUrl = import.meta.env.VITE_GOOGLE_SCRIPT_URL;
      
      // Add timestamp and format data
      const formDataToSend = {
        timestamp: new Date().toISOString(),
        ...formData
      };

      const response = await fetch(scriptUrl, {
        method: 'POST',
        mode: 'no-cors',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formDataToSend)
      });

      setShowForm(false);
      setFormData({
        name: '',
        company: '',
        email: '',
        phone: '',
        workType: '',
        deadline: '',
        budget: '',
        scope: '',
        message: ''
      });
      alert('Thank you for your submission!');
    } catch (error) {
      console.error('Error:', error);
      setError('Failed to submit form. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

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
            <form onSubmit={handleSubmit} className="w-full bg-black bg-opacity-30 backdrop-blur-md border border-white/10 rounded-3xl px-6 py-6 shadow-lg space-y-4">
              <h2 className="text-2xl font-semibold text-white mb-4">Project Inquiry Form</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <InputField name="name" placeholder="Your Name" icon={<User className="w-5 h-5" />} value={formData.name} onChange={handleInputChange} />
                <InputField name="company" placeholder="Company" icon={<Building2 className="w-5 h-5" />} value={formData.company} onChange={handleInputChange} />
                <InputField name="email" type="email" placeholder="Email Address" icon={<Mail className="w-5 h-5" />} value={formData.email} onChange={handleInputChange} />
                <InputField name="phone" type="tel" placeholder="Phone Number" icon={<Phone className="w-5 h-5" />} value={formData.phone} onChange={handleInputChange} />
                <SelectField name="workType" icon={<ClipboardList className="w-5 h-5" />} options={["Website", "Marketing", "App", "Branding", "Content", "Reels", "Other"]} onChange={handleInputChange} />
                <InputField name="deadline" type="date" placeholder="Deadline" icon={<Calendar className="w-5 h-5" />} value={formData.deadline} onChange={handleInputChange} />
                <InputField name="budget" type="number" placeholder="Estimated Budget" icon={<DollarSign className="w-5 h-5" />} value={formData.budget} onChange={handleInputChange} />
                <InputField name="scope" placeholder="Project Scope" icon={<PenTool className="w-5 h-5" />} value={formData.scope} onChange={handleInputChange} />
              </div>
              <TextareaField name="message" placeholder="Additional Message" icon={<MessageSquare className="w-5 h-5" />} value={formData.message} onChange={handleInputChange} />
              {error && (
                <div className="text-red-500 text-sm text-center">
                  {error}
                </div>
              )}
              <div className="flex gap-4 justify-end pt-4">
                <button type="button" onClick={handleCancel} className="px-4 py-2 rounded-full border border-gray-300 text-white hover:bg-gray-800">
                  Cancel
                </button>
                <button 
                  type="submit" 
                  disabled={isSubmitting}
                  className="px-6 py-2 rounded-full bg-gradient-to-r from-orange-800 to-orange-400 text-white font-semibold hover:scale-105 transition-transform disabled:opacity-50"
                >
                  {isSubmitting ? 'Submitting...' : 'Submit'}
                </button>
              </div>
            </form>
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
