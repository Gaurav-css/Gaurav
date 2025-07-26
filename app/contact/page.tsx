'use client';

import { useState } from 'react';

export default function ContactPage() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('Sending...');

    const res = await fetch('/api/contact', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData),
    });

    if (res.ok) {
      setStatus('Message sent successfully!');
      setFormData({ name: '', email: '', message: '' });
    } else {
      setStatus('Failed to send message.');
    }
  };

  return (
    <div className="min-h-screen flex justify-center items-center bg-gray-100 p-6">
      <form onSubmit={handleSubmit} className="bg-white p-6 rounded shadow-md w-full max-w-md">
        <h2 className="text-2xl font-bold mb-4 text-center">Contact Us</h2>

        <input
          name="name"
          type="text"
          required
          placeholder="Your Name"
          value={formData.name}
          onChange={handleChange}
          className="w-full mb-3 p-2 border rounded"
        />

        <input
          name="email"
          type="email"
          required
          placeholder="Your Email"
          value={formData.email}
          onChange={handleChange}
          className="w-full mb-3 p-2 border rounded"
        />

        <textarea
          name="message"
          required
          placeholder="Your Message"
          value={formData.message}
          onChange={handleChange}
          rows={4}
          className="w-full mb-3 p-2 border rounded"
        />

        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
        >
          Submit
        </button>

        {status && <p className="mt-3 text-center text-gray-600">{status}</p>}
      </form>
    </div>
  );
}
