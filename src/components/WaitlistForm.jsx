import React, { useState } from 'react';
import ErrorMessage from './ErrorMessage';

export default function WaitlistForm() {
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);
    setSuccess(false);
    setLoading(true);

    try {
      const formData = new FormData(e.currentTarget);
      const formProps = Object.fromEntries(formData);
      
      const queryString = new URLSearchParams({
        ...formProps,
        timestamp: new Date().toISOString()
      }).toString();

      const scriptUrl = `https://script.google.com/macros/s/${import.meta.env.VITE_GOOGLE_SCRIPT_URL}/exec`;
      
      await fetch(scriptUrl, {
        redirect: 'follow',
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        mode: 'no-cors',
        body: queryString
      });

      // Reset form and show success
      e.currentTarget.reset();
      setSuccess(true);
    } catch (err) {
      console.error('Submit Error:', err);
      setError('Something went wrong. Please try again later.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="w-full max-w-md mx-auto">
      <input
        type="email"
        name="email"
        required
        placeholder="Enter your email"
        className="w-full px-4 py-2 mb-4 border rounded-md"
      />
      {error && <ErrorMessage message={error} />}
      {success && (
        <div className="text-green-600 mb-4">
          Successfully joined the waitlist! We'll be in touch soon.
        </div>
      )}
      <button 
        type="submit" 
        disabled={loading}
        className="w-full bg-orange-600 text-white py-2 px-4 rounded-md hover:bg-orange-700 transition-colors"
      >
        {loading ? 'Submitting...' : 'Join Waitlist'}
      </button>
    </form>
  );
}
