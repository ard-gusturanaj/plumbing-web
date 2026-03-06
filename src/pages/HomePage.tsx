import { Shield, Clock, Award, Phone } from 'lucide-react';

interface HomePageProps {
  onNavigate: (page: string) => void;
}

export default function HomePage({ onNavigate }: HomePageProps) {
  const features = [
    {
      icon: Shield,
      title: 'Licensed & Insured',
      description: 'Fully certified professionals with comprehensive insurance coverage for your peace of mind.',
    },
    {
      icon: Clock,
      title: '24/7 Emergency Service',
      description: 'Plumbing emergencies don\'t wait. Neither do we. Available around the clock for urgent repairs.',
    },
    {
      icon: Award,
      title: '15+ Years Experience',
      description: 'Decades of expertise in residential and commercial plumbing solutions.',
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <div
        className="relative h-[600px] bg-cover bg-center flex items-center"
        style={{
          backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(https://images.pexels.com/photos/8961183/pexels-photo-8961183.jpeg?auto=compress&cs=tinysrgb&w=1920)',
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-white">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
            Professional Plumbing<br />Services You Can Trust
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-2xl">
            Expert solutions for all your residential and commercial plumbing needs.
            Fast, reliable, and affordable service.
          </p>
          <button
            onClick={() => onNavigate('contact')}
            className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-4 rounded-lg text-lg transition-all transform hover:scale-105 shadow-lg"
          >
            Get a Free Quote
          </button>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Why Choose ProFlow Plumbing?</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We're committed to providing exceptional service with integrity, expertise, and customer satisfaction as our top priorities.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-20">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow border border-gray-100"
            >
              <feature.icon className="h-12 w-12 text-blue-600 mb-4" />
              <h3 className="text-2xl font-bold text-gray-900 mb-3">{feature.title}</h3>
              <p className="text-gray-600 leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>

        <div className="bg-blue-600 rounded-2xl p-12 text-white text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Services</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-8">
            {[
              'Emergency Repairs',
              'Drain Cleaning',
              'Water Heater Installation',
              'Pipe Replacement',
              'Bathroom Remodeling',
              'Leak Detection',
              'Sewer Line Services',
              'Commercial Plumbing',
            ].map((service, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm p-4 rounded-lg">
                <p className="font-semibold">{service}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-20 bg-gray-50 rounded-2xl p-12">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">About ProFlow Plumbing</h2>
              <p className="text-gray-600 mb-4 leading-relaxed">
                Founded in 2008, ProFlow Plumbing has been serving the community with dedication and expertise for over 15 years.
                Our team of licensed professionals brings a wealth of knowledge and experience to every job, no matter how big or small.
              </p>
              <p className="text-gray-600 mb-4 leading-relaxed">
                We pride ourselves on transparent pricing, quality workmanship, and exceptional customer service.
                When you call ProFlow, you're not just getting a plumber—you're getting a trusted partner committed to solving your plumbing challenges efficiently and effectively.
              </p>
              <p className="text-gray-600 leading-relaxed">
                From routine maintenance to complex installations, we handle it all with the same level of professionalism and attention to detail that has earned us hundreds of five-star reviews.
              </p>
            </div>
            <div className="relative">
              <img
                src="https://images.pexels.com/photos/8486919/pexels-photo-8486919.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Professional plumber"
                className="rounded-xl shadow-2xl"
              />
            </div>
          </div>
        </div>

        <div className="mt-20 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Ready to Get Started?</h2>
          <p className="text-xl text-gray-600 mb-8">
            Contact us today for a free consultation and quote.
          </p>
          <button
            onClick={() => onNavigate('contact')}
            className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-4 rounded-lg text-lg transition-all inline-flex items-center space-x-2 shadow-lg"
          >
            <Phone className="h-5 w-5" />
            <span>Contact Us Now</span>
          </button>
        </div>
      </div>
    </div>
  );
}
