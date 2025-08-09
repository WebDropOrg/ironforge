import { useState } from 'react';
import { MapPin, Phone, Mail, Clock, Send, CheckCircle, X } from 'lucide-react';
import { ContactFormData, ContactResponse } from '@shared/api';

export default function Contact() {
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    email: '',
    phone: '',
    subject: 'general',
    message: '',
    preferredContactMethod: 'email',
    goals: []
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [statusMessage, setStatusMessage] = useState('');
  const [errors, setErrors] = useState<Record<string, string>>({});

  const fitnessGoals = [
    'Weight Loss',
    'Muscle Building',
    'Strength Training',
    'Cardio Fitness',
    'Sports Performance',
    'General Health',
    'Injury Recovery',
    'Competition Prep'
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const handleGoalToggle = (goal: string) => {
    setFormData(prev => ({
      ...prev,
      goals: prev.goals?.includes(goal)
        ? prev.goals.filter(g => g !== goal)
        : [...(prev.goals || []), goal]
    }));
  };

  const validateForm = () => {
    const newErrors: Record<string, string> = {};

    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.email.trim()) newErrors.email = 'Email is required';
    else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = 'Please enter a valid email';
    if (!formData.message.trim()) newErrors.message = 'Message is required';
    else if (formData.message.length < 10) newErrors.message = 'Message must be at least 10 characters';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) return;

    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data: ContactResponse = await response.json();

      if (data.success) {
        setSubmitStatus('success');
        setStatusMessage(data.message);
        setFormData({
          name: '',
          email: '',
          phone: '',
          subject: 'general',
          message: '',
          preferredContactMethod: 'email',
          goals: []
        });
      } else {
        setSubmitStatus('error');
        setStatusMessage(data.message || 'Something went wrong. Please try again.');
      }
    } catch (error) {
      setSubmitStatus('error');
      setStatusMessage('Network error. Please check your connection and try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: <MapPin className="h-6 w-6" />,
      title: 'Visit Us',
      details: ['123 Fitness Street', 'Gym City, GC 12345']
    },
    {
      icon: <Phone className="h-6 w-6" />,
      title: 'Call Us',
      details: ['(555) 123-IRON', '(555) 123-4766']
    },
    {
      icon: <Mail className="h-6 w-6" />,
      title: 'Email Us',
      details: ['info@ironforge.gym', 'support@ironforge.gym']
    },
    {
      icon: <Clock className="h-6 w-6" />,
      title: 'Hours',
      details: ['Mon-Fri: 5:00 AM - 11:00 PM', 'Sat-Sun: 6:00 AM - 10:00 PM']
    }
  ];

  return (
    <div className="pt-16 min-h-screen bg-background">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-gym-dark via-background to-gym-dark-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Get in <span className="gradient-text">Touch</span>
          </h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Ready to start your fitness journey? We're here to help you every step of the way. 
            Reach out to us and let's discuss your goals.
          </p>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-20 bg-gym-dark-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {contactInfo.map((info, index) => (
              <div
                key={index}
                className={`card-hover bg-gym-dark p-6 rounded-xl text-center animate-fade-in animate-delay-${index * 100}`}
              >
                <div className="text-gym-orange mb-4 flex justify-center">
                  {info.icon}
                </div>
                <h3 className="text-lg font-bold text-white mb-3">
                  {info.title}
                </h3>
                <div className="space-y-1">
                  {info.details.map((detail, idx) => (
                    <p key={idx} className="text-gray-400 text-sm">
                      {detail}
                    </p>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-20 bg-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-white mb-6">
              Send Us a <span className="gradient-text">Message</span>
            </h2>
            <p className="text-xl text-gray-400">
              Fill out the form below and we'll get back to you within 24 hours
            </p>
          </div>

          {/* Status Message */}
          {submitStatus !== 'idle' && (
            <div className={`mb-8 p-4 rounded-lg flex items-center space-x-3 ${
              submitStatus === 'success' 
                ? 'bg-green-900/50 border border-green-500' 
                : 'bg-red-900/50 border border-red-500'
            }`}>
              {submitStatus === 'success' ? (
                <CheckCircle className="h-5 w-5 text-green-400" />
              ) : (
                <X className="h-5 w-5 text-red-400" />
              )}
              <span className={`${
                submitStatus === 'success' ? 'text-green-400' : 'text-red-400'
              }`}>
                {statusMessage}
              </span>
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Name */}
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-white mb-2">
                  Full Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  className={`w-full px-4 py-3 bg-gym-dark-light border rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-gym-orange transition-colors ${
                    errors.name ? 'border-red-500' : 'border-gym-dark hover:border-gym-orange/50'
                  }`}
                  placeholder="Enter your full name"
                />
                {errors.name && <p className="mt-1 text-sm text-red-400">{errors.name}</p>}
              </div>

              {/* Email */}
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-white mb-2">
                  Email Address *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className={`w-full px-4 py-3 bg-gym-dark-light border rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-gym-orange transition-colors ${
                    errors.email ? 'border-red-500' : 'border-gym-dark hover:border-gym-orange/50'
                  }`}
                  placeholder="Enter your email address"
                />
                {errors.email && <p className="mt-1 text-sm text-red-400">{errors.email}</p>}
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Phone */}
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-white mb-2">
                  Phone Number (Optional)
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 bg-gym-dark-light border border-gym-dark hover:border-gym-orange/50 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-gym-orange transition-colors"
                  placeholder="Enter your phone number"
                />
              </div>

              {/* Subject */}
              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-white mb-2">
                  Subject *
                </label>
                <select
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 bg-gym-dark-light border border-gym-dark hover:border-gym-orange/50 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-gym-orange transition-colors"
                >
                  <option value="general">General Inquiry</option>
                  <option value="membership">Membership Information</option>
                  <option value="personal_training">Personal Training</option>
                  <option value="group_classes">Group Classes</option>
                </select>
              </div>
            </div>

            {/* Preferred Contact Method */}
            <div>
              <label className="block text-sm font-medium text-white mb-2">
                Preferred Contact Method
              </label>
              <div className="flex space-x-4">
                <label className="flex items-center">
                  <input
                    type="radio"
                    name="preferredContactMethod"
                    value="email"
                    checked={formData.preferredContactMethod === 'email'}
                    onChange={handleInputChange}
                    className="text-gym-orange focus:ring-gym-orange"
                  />
                  <span className="ml-2 text-gray-300">Email</span>
                </label>
                <label className="flex items-center">
                  <input
                    type="radio"
                    name="preferredContactMethod"
                    value="phone"
                    checked={formData.preferredContactMethod === 'phone'}
                    onChange={handleInputChange}
                    className="text-gym-orange focus:ring-gym-orange"
                  />
                  <span className="ml-2 text-gray-300">Phone</span>
                </label>
              </div>
            </div>

            {/* Fitness Goals */}
            <div>
              <label className="block text-sm font-medium text-white mb-2">
                Fitness Goals (Select all that apply)
              </label>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                {fitnessGoals.map((goal) => (
                  <label
                    key={goal}
                    className={`flex items-center justify-center p-3 rounded-lg cursor-pointer transition-all duration-300 ${
                      formData.goals?.includes(goal)
                        ? 'bg-gym-orange text-black'
                        : 'bg-gym-dark-light text-gray-300 hover:bg-gym-orange/20'
                    }`}
                  >
                    <input
                      type="checkbox"
                      checked={formData.goals?.includes(goal) || false}
                      onChange={() => handleGoalToggle(goal)}
                      className="sr-only"
                    />
                    <span className="text-sm font-medium">{goal}</span>
                  </label>
                ))}
              </div>
            </div>

            {/* Message */}
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-white mb-2">
                Message *
              </label>
              <textarea
                id="message"
                name="message"
                rows={6}
                value={formData.message}
                onChange={handleInputChange}
                className={`w-full px-4 py-3 bg-gym-dark-light border rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-gym-orange transition-colors resize-none ${
                  errors.message ? 'border-red-500' : 'border-gym-dark hover:border-gym-orange/50'
                }`}
                placeholder="Tell us about your fitness goals, questions, or how we can help you..."
              />
              {errors.message && <p className="mt-1 text-sm text-red-400">{errors.message}</p>}
            </div>

            {/* Submit Button */}
            <div className="text-center">
              <button
                type="submit"
                disabled={isSubmitting}
                className={`inline-flex items-center space-x-3 px-8 py-4 rounded-lg font-bold text-lg transition-all duration-300 ${
                  isSubmitting
                    ? 'bg-gray-600 text-gray-300 cursor-not-allowed'
                    : 'btn-primary hover:scale-105'
                }`}
              >
                {isSubmitting ? (
                  <>
                    <div className="w-5 h-5 border-2 border-current border-t-transparent rounded-full animate-spin" />
                    <span>Sending...</span>
                  </>
                ) : (
                  <>
                    <Send className="h-5 w-5" />
                    <span>Send Message</span>
                  </>
                )}
              </button>
            </div>
          </form>
        </div>
      </section>

      {/* Map/Location Section */}
      <section className="py-20 bg-gym-dark-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-white mb-6">
              Visit Our <span className="gradient-text">Location</span>
            </h2>
            <p className="text-xl text-gray-400">
              Come check out our state-of-the-art facility and meet our team
            </p>
          </div>
          
          <div className="bg-gym-dark rounded-xl p-8 text-center">
            <div className="mb-6">
              <MapPin className="h-12 w-12 text-gym-orange mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-white mb-2">IronForge Gym</h3>
              <p className="text-gray-400">123 Fitness Street, Gym City, GC 12345</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-sm">
              <div>
                <h4 className="font-semibold text-white mb-2">Weekdays</h4>
                <p className="text-gray-400">5:00 AM - 11:00 PM</p>
              </div>
              <div>
                <h4 className="font-semibold text-white mb-2">Weekends</h4>
                <p className="text-gray-400">6:00 AM - 10:00 PM</p>
              </div>
              <div>
                <h4 className="font-semibold text-white mb-2">Parking</h4>
                <p className="text-gray-400">Free for all members</p>
              </div>
            </div>
            
            <div className="mt-8">
              <button className="btn-primary">
                Get Directions
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
