import { Phone, Mail, MapPin, Clock } from 'lucide-react';

export default function ContactPage() {
  const contactInfo = [
    {
      icon: Phone,
      title: 'Phone',
      details: ['Main: (555) 123-4567', 'Emergency: (555) 999-8888'],
      color: 'bg-blue-50 text-blue-600',
    },
    {
      icon: Mail,
      title: 'Email',
      details: ['info@proflowplumbing.com', 'service@proflowplumbing.com'],
      color: 'bg-green-50 text-green-600',
    },
    {
      icon: MapPin,
      title: 'Address',
      details: ['1234 Main Street', 'Anytown, ST 12345'],
      color: 'bg-orange-50 text-orange-600',
    },
    {
      icon: Clock,
      title: 'Business Hours',
      details: ['Mon-Fri: 7:00 AM - 7:00 PM', 'Sat-Sun: 8:00 AM - 5:00 PM', '24/7 Emergency Service'],
      color: 'bg-purple-50 text-purple-600',
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-gray-900 mb-4">Get in Touch</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Have a plumbing issue or need a quote? We're here to help! Reach out to us using any of the methods below.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {contactInfo.map((info, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow"
            >
              <div className={`${info.color} w-14 h-14 rounded-full flex items-center justify-center mb-4`}>
                <info.icon className="h-7 w-7" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">{info.title}</h3>
              {info.details.map((detail, idx) => (
                <p key={idx} className="text-gray-600 leading-relaxed">
                  {detail}
                </p>
              ))}
            </div>
          ))}
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <div className="bg-white rounded-2xl shadow-xl p-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Send Us a Message</h2>
            <form className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">
                  Full Name
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition"
                  placeholder="John Doe"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition"
                  placeholder="john@example.com"
                />
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-semibold text-gray-700 mb-2">
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="phone"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition"
                  placeholder="(555) 123-4567"
                />
              </div>

              <div>
                <label htmlFor="service" className="block text-sm font-semibold text-gray-700 mb-2">
                  Service Needed
                </label>
                <select
                  id="service"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition"
                >
                  <option>Select a service</option>
                  <option>Emergency Repair</option>
                  <option>Drain Cleaning</option>
                  <option>Water Heater</option>
                  <option>Bathroom Remodel</option>
                  <option>Leak Detection</option>
                  <option>Other</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  rows={4}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition resize-none"
                  placeholder="Tell us about your plumbing needs..."
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-4 rounded-lg text-lg transition-all transform hover:scale-105 shadow-lg"
              >
                Send Message
              </button>
            </form>
          </div>

          <div className="space-y-8">
            <div className="bg-blue-600 rounded-2xl p-8 text-white">
              <h2 className="text-3xl font-bold mb-4">Need Emergency Service?</h2>
              <p className="text-lg mb-6 leading-relaxed">
                Plumbing emergencies can happen at any time. That's why we offer 24/7 emergency service
                to help you when you need it most.
              </p>
              <a
                href="tel:5559998888"
                className="bg-white text-blue-600 hover:bg-gray-100 font-bold px-8 py-4 rounded-lg text-lg inline-flex items-center space-x-2 transition-all transform hover:scale-105 shadow-lg"
              >
                <Phone className="h-5 w-5" />
                <span>Call (555) 999-8888</span>
              </a>
            </div>

            <div className="bg-white rounded-2xl shadow-xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Why Choose Us?</h3>
              <ul className="space-y-4">
                {[
                  'Licensed and insured professionals',
                  'Upfront, transparent pricing',
                  'Same-day service available',
                  'Quality workmanship guaranteed',
                  'Friendly, courteous technicians',
                  'Clean and respectful of your home',
                ].map((item, index) => (
                  <li key={index} className="flex items-start space-x-3">
                    <div className="bg-green-100 rounded-full p-1 mt-0.5">
                      <Phone className="h-4 w-4 text-green-600" />
                    </div>
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-gray-50 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Service Area</h3>
              <p className="text-gray-600 mb-4 leading-relaxed">
                We proudly serve the greater metropolitan area and surrounding communities.
                Not sure if we service your area? Give us a call, and we'll let you know!
              </p>
              <p className="text-sm text-gray-500">
                Serving: Anytown, Nearby City, Suburb Heights, Riverside, and more.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
