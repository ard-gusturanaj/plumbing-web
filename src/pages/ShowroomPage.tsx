import { CheckCircle } from 'lucide-react';

export default function ShowroomPage() {
  const projects = [
    {
      id: 1,
      title: 'Complete Bathroom Remodel',
      description: 'Full bathroom renovation including new fixtures, piping, and modern finishes.',
      image: 'https://images.pexels.com/photos/1457847/pexels-photo-1457847.jpeg?auto=compress&cs=tinysrgb&w=800',
      category: 'Residential',
      details: ['New shower installation', 'Updated plumbing system', 'Modern fixtures'],
    },
    {
      id: 2,
      title: 'Kitchen Sink & Disposal Installation',
      description: 'Professional installation of undermount sink and garbage disposal system.',
      image: 'https://images.pexels.com/photos/2724748/pexels-photo-2724748.jpeg?auto=compress&cs=tinysrgb&w=800',
      category: 'Residential',
      details: ['High-quality sink installation', 'Disposal unit setup', 'Updated drainage'],
    },
    {
      id: 3,
      title: 'Water Heater Replacement',
      description: 'Emergency water heater replacement with energy-efficient tankless system.',
      image: 'https://images.pexels.com/photos/5691621/pexels-photo-5691621.jpeg?auto=compress&cs=tinysrgb&w=800',
      category: 'Residential',
      details: ['Tankless water heater', 'Same-day installation', 'Energy efficiency upgrade'],
    },
    {
      id: 4,
      title: 'Commercial Restroom Renovation',
      description: 'Complete plumbing overhaul for commercial office building restrooms.',
      image: 'https://images.pexels.com/photos/1090638/pexels-photo-1090638.jpeg?auto=compress&cs=tinysrgb&w=800',
      category: 'Commercial',
      details: ['Multiple fixture installation', 'ADA compliance', 'Water-saving technology'],
    },
    {
      id: 5,
      title: 'Outdoor Sprinkler System',
      description: 'Custom irrigation system design and installation for landscaping.',
      image: 'https://images.pexels.com/photos/2950003/pexels-photo-2950003.jpeg?auto=compress&cs=tinysrgb&w=800',
      category: 'Residential',
      details: ['Smart controller system', 'Efficient water distribution', 'Professional landscaping integration'],
    },
    {
      id: 6,
      title: 'Main Line Sewer Repair',
      description: 'Trenchless sewer line repair using modern technology to minimize disruption.',
      image: 'https://images.pexels.com/photos/4246120/pexels-photo-4246120.jpeg?auto=compress&cs=tinysrgb&w=800',
      category: 'Emergency',
      details: ['Trenchless technology', 'Minimal yard disruption', 'Long-lasting solution'],
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-gray-900 mb-4">Our Work</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Take a look at some of our recently completed projects. We take pride in every job,
            delivering quality workmanship that stands the test of time.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all transform hover:-translate-y-1"
            >
              <div className="relative h-64 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-4 right-4">
                  <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                    {project.category}
                  </span>
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-3">{project.title}</h3>
                <p className="text-gray-600 mb-4 leading-relaxed">{project.description}</p>

                <div className="border-t border-gray-100 pt-4">
                  <p className="text-sm font-semibold text-gray-700 mb-2">Project Highlights:</p>
                  <ul className="space-y-2">
                    {project.details.map((detail, index) => (
                      <li key={index} className="flex items-start space-x-2 text-sm text-gray-600">
                        <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                        <span>{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-white rounded-2xl p-12 text-center shadow-lg">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Your Project Could Be Next!</h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Whether it's a small repair or a major installation, we bring the same level of expertise
            and attention to detail to every job.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <div className="bg-blue-50 px-6 py-3 rounded-lg">
              <p className="text-3xl font-bold text-blue-600">500+</p>
              <p className="text-gray-700">Projects Completed</p>
            </div>
            <div className="bg-blue-50 px-6 py-3 rounded-lg">
              <p className="text-3xl font-bold text-blue-600">98%</p>
              <p className="text-gray-700">Customer Satisfaction</p>
            </div>
            <div className="bg-blue-50 px-6 py-3 rounded-lg">
              <p className="text-3xl font-bold text-blue-600">15+</p>
              <p className="text-gray-700">Years in Business</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
