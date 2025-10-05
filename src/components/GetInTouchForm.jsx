import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';

const GetInTouchForm = () => {
  const form = useRef();
  const [focusedField, setFocusedField] = useState(null);
  const [formState, setFormState] = useState({
    fullName: '',
    email: '',
    mobile: '',
    organisationLink: '',
    services: [],
    source: '',
    message: ''
  });

  // Add form submission handling
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      const result = await emailjs.sendForm(
        'service_yhvioqr', // Replace with your EmailJS service ID
        'template_lq65whg', // Replace with your EmailJS template ID
        form.current,
        'Dq7Kwo1Hnie3a2OBC' // Replace with your EmailJS public key
      );

      if (result.text === 'OK') {
        setSubmitStatus('success');
        setFormState({
          fullName: '',
          email: '',
          mobile: '',
          organisationLink: '',
          services: [],
          source: '',
          message: ''
        });
        form.current.reset();
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      setSubmitStatus('error');
      console.error('Error:', error);
    }
    setIsSubmitting(false);
  };

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0 }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-black-50 via-black py-16 px-4 mt-6 contiform">
           <div className="text-center mb-12">
          <h1 className="text-6xl font-extrabold mb-6 mt-5 bg-clip-text text-transparent 
            bg-gradient-to-r from-white to-purple-400">
           Contact Us
          </h1>
          <div className="w-24 h-1 bg-[#d749ff] mx-auto rounded-full" />
        </div>

      <motion.div 
        className="container mx-auto max-w-6xl bg-white rounded-3xl shadow-2xl overflow-hidden mt-5"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        <div className="grid grid-cols-1 md:grid-cols-2">
          {/* Left side - Hero Section */}
          <div className="bg-gradient-to-br from-purple-600 to-black p-12 text-white relative overflow-hidden">
            <div className="absolute inset-0 bg-black opacity-10"></div>
            <motion.div 
              className="relative z-10"
              variants={containerVariants}
            >
              <motion.h1 
                className="text-5xl font-bold mb-6 leading-tight"
                variants={itemVariants}
              >
                Let's make it <br/>a reality!
              </motion.h1>
              <motion.p 
                className="text-lg opacity-90 mb-8"
                variants={itemVariants}
              >
                We're excited to work with you soon! Please share your details & we'll get back in 2-3 working days!
              </motion.p>
              <motion.div 
                className="space-y-4"
                variants={itemVariants}
              >
                <h2 className="text-2xl font-semibold mb-4">Contact</h2>
                <a 
                  href="mailto:modelensofficial@gmail.com" 
                  className="flex items-center gap-3 text-white/90 hover:text-white transition-colors group"
                >
                  <svg 
                    className="w-6 h-6 group-hover:scale-110 transition-transform" 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  modelensofficial@gmail.com
                </a>
              </motion.div>

            </motion.div>

            {/* Decorative circles */}
            <div className="absolute -bottom-24 -right-24 w-48 h-48 bg-white/10 rounded-full"></div>
            <div className="absolute -top-12 -left-12 w-32 h-32 bg-white/10 rounded-full"></div>
          </div>

          {/* Right side - Form */}
          <div className="p-12">
            <form 
              ref={form}
              onSubmit={handleSubmit}
              className="space-y-8"
            >
              {/* Input fields */}
              {[
                { name: 'user_name', label: 'Full Name', type: 'text' },
                { name: 'user_email', label: 'Email', type: 'email' },
                { name: 'user_mobile', label: 'Mobile no.', type: 'tel' },
                { name: 'organisation_link', label: "Organisation's link", type: 'url' }
              ].map((field) => (
                <motion.div 
                  key={field.name}
                  variants={itemVariants}
                  className="relative"
                >
                  <label 
                    className={`absolute left-0 transition-all duration-300 ${
                      focusedField === field.name || formState[field.name]
                        ? '-top-6 text-sm text-purple-600'
                        : 'top-0 text-gray-500'
                    }`}
                  >
                    {field.label}
                  </label>
                  <input
                    type={field.type}
                    name={field.name}
                    className="w-full border-b-2 border-gray-200 py-2 focus:border-purple-600 focus:outline-none transition-colors bg-transparent"
                    placeholder={field.placeholder}
                    onFocus={() => setFocusedField(field.name)}
                    onBlur={() => setFocusedField(null)}
                    onChange={(e) => setFormState({ ...formState, [field.name]: e.target.value })}
                  />
                </motion.div>
              ))}

              {/* Services Selection */}
              <motion.div variants={itemVariants} className="space-y-4">
                <p className="font-medium text-gray-700">What services are you interested in?</p>
                <div className="grid grid-cols-2 gap-4">
                  {[
                    'Brand Photoshoot',
                    'Modelling',
                    'Photography',
                    'Brand consultant',
                    'Makeup',
                    'Others'
                  ].map((service) => (
                    <label 
                      key={service} 
                      className="flex items-center gap-3 group cursor-pointer"
                    >
                      <div className="relative">
                        <input
                          type="checkbox"
                          name="services[]"
                          value={service}
                          className="appearance-none w-5 h-5 border-2 border-gray-300 rounded transition-colors
                            checked:bg-purple-600 checked:border-purple-600 cursor-pointer"
                        />
                        <svg
                          className="absolute inset-0 w-5 h-5 text-white pointer-events-none opacity-0 check:opacity-100 transition-opacity"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                        >
                          <path d="M20 6L9 17l-5-5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      </div>
                      <span className="text-gray-600 group-hover:text-purple-600 transition-colors">
                        {service}
                      </span>
                    </label>
                  ))}
                </div>
              </motion.div>

              {/* Source Selection */}
              <motion.div variants={itemVariants} className="space-y-4">
                <p className="font-medium text-gray-700">How did you hear about us?</p>
                <div className="flex flex-wrap gap-6">
                  {['Instagram', 'LinkedIn', 'Referrals'].map((source) => (
                    <label 
                      key={source} 
                      className="flex items-center gap-3 group cursor-pointer"
                    >
                      <div className="relative">
                        <input
                          type="radio"
                          name="source"
                          value={source}
                          className="appearance-none w-5 h-5 border-2 border-gray-300 rounded-full transition-colors
                            checked:border-purple-600 cursor-pointer"
                        />
                        <div className="absolute inset-0 m-1 rounded-full transition-colors peer-checked:bg-purple-600"></div>
                      </div>
                      <span className="text-gray-600 group-hover:text-purple-600 transition-colors">
                        {source}
                      </span>
                    </label>
                  ))}
                </div>
              </motion.div>

              {/* Message */}
              <motion.div variants={itemVariants}>
                <label className="font-medium text-gray-700 block mb-2">
                  Want to add any specific message?
                </label>
                <textarea
                  name="message"
                  rows="4"
                  className="w-full border-2 border-gray-200 rounded-lg p-3 focus:border-purple-600 focus:outline-none transition-colors resize-none"
                  placeholder="Your message..."
                ></textarea>
              </motion.div>

              {/* Submit Button */}
              <motion.button
                type="submit"
                disabled={isSubmitting}
                className={`w-full bg-gradient-to-r from-purple-600 to-blue-600 text-white py-4 rounded-lg font-medium
                  hover:from-purple-700 hover:to-blue-700 transform hover:scale-105 transition-all duration-300
                  focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2
                  ${isSubmitting ? 'opacity-75 cursor-not-allowed' : ''}`}
                whileHover={{ scale: isSubmitting ? 1 : 1.05 }}
                whileTap={{ scale: isSubmitting ? 1 : 0.95 }}
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </motion.button>

              {/* Status message */}
              {submitStatus === 'success' && (
                <motion.p 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="text-green-600 text-center"
                >
                  Thank you! Your message has been sent successfully.
                </motion.p>
              )}
              {submitStatus === 'error' && (
                <motion.p 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="text-red-600 text-center"
                >
                  Oops! Something went wrong. Please try again.
                </motion.p>
              )}
            </form>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default GetInTouchForm;