import React, { useState } from 'react';

const Contact = () => {
 
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

 
  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

 
  const handleSubmit = (event) => {
    event.preventDefault();
   
    console.log('Form data submitted:', formData);
  };

  return (
    <div className="container mx-auto p-8">
      <h2 className="text-4xl font-bold mb-8 text-center">Contact Us</h2>

      <div className="max-w-md mx-auto">
        <form className="grid grid-cols-1 gap-6" onSubmit={handleSubmit}>
          <div>
            <label className="block text-sm font-medium text-gray-600">Full Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="mt-1 p-2 w-full text-black border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
              placeholder="Enter Name"
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-600">
              Email Address
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="mt-1 p-2 w-full text-black  border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
              placeholder="Enter Email"
            />
          </div>

          <div>
            <label htmlFor="message" className="block text-sm font-medium  text-gray-600">
              Your Message
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows="4"
              className="mt-1 p-2 w-full border border-gray-300  text-black rounded-md focus:outline-none focus:border-blue-500"
              placeholder="Write your message here..."
            ></textarea>
          </div>

          <div>
            <button
              type="submit"
              className="w-full p-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:shadow-outline-blue active:bg-blue-800"
            >
              Submit
            </button>
          </div>
        </form>
      </div>

      <p className="mt-8 text-center">
        Have questions or feedback? Feel free to reach out to us at{' '}
        <a href="mailto:info@yourwebsite.com" className="text-blue-500 underline">
          info@Cryptoview.com
        </a>
      </p>
    </div>
  );
};

export default Contact;
