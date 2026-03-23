import { Phone, Mail, Clock, MapPin } from 'lucide-react';

export default function ContactPage() {
  const contactInfo = [
    {
      icon: Phone,
      title: 'Phone',
      details: ['(+383) 44-282-232'],
      color: 'bg-blue-50 text-blue-600',
    },
    {
      icon: Mail,
      title: 'Email',
      details: ['lulzimgusturanaj@gmail.com'],
      color: 'bg-green-50 text-green-600',
    },
    {
      icon: Clock,
      title: 'Orari i Punës',
      details: ['Hënë - Premte: 8:00 - 16:00'],
      color: 'bg-purple-50 text-purple-600',
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white py-8 md:py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-6 md:mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">Na Kontaktoni</h1>
          <p className="text-sm md:text-base text-gray-600 max-w-3xl mx-auto">
            Keni ndonjë problem me instalimet hidraulike apo keni nevojë për një ofertë? Jemi këtu për t’ju ndihmuar!
            Na kontaktoni përmes mënyrave të mëposhtme.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-4 mb-10 md:mb-12">
          {contactInfo.map((info, index) => (
            <div key={index} className="bg-white rounded-xl shadow-lg p-3 md:p-4 hover:shadow-xl transition-shadow">
              <div className={`${info.color} w-12 h-12 md:w-14 md:h-14 rounded-full flex items-center justify-center mb-3 md:mb-4`}>
                <info.icon className="h-6 w-6 md:h-7 md:w-7" />
              </div>
              <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-2 md:mb-3">{info.title}</h3>
              {info.details.map((detail, idx) => (
                <p key={idx} className="text-sm md:text-base text-gray-600 leading-relaxed">
                  {detail}
                </p>
              ))}
            </div>
          ))}
        </div>

        <div className="bg-white rounded-2xl p-4 md:p-6 shadow-lg border border-gray-100">
          <div className="flex items-center gap-2 mb-4">
            <MapPin className="w-6 h-6 text-blue-600" />
            <h3 className="text-2xl font-bold text-gray-900">Lokacioni</h3>
          </div>
          <p className="text-sm md:text-base text-gray-600 mb-4">Istog</p>
          <div className="overflow-hidden rounded-xl border border-gray-200">
            <iframe
              title="LG Company Location"
              src="https://www.google.com/maps?q=LG%20Company%2C%20Rruga%20U%C3%87K%2C%20Istog%2031000&output=embed"
              className="w-full h-[280px] md:h-[420px] border-0"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>

        <div className="bg-gray-50 rounded-2xl p-6 md:p-8 mt-6 md:mt-8">
          <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-3 md:mb-4">Zona e Shërbimit</h3>
          <p className="text-sm md:text-base text-gray-600 mb-4 leading-relaxed">
            Ne ofrojmë shërbimet tona në qytetin dhe zonat përreth. Nëse nuk jeni të sigurt nëse ofrojmë shërbim në
            zonën tuaj, na telefononi dhe do t’ju informojmë.
          </p>
        </div>
      </div>

      <a
        href="tel:+38344282232"
        className="fixed bottom-4 right-4 bg-blue-600 hover:bg-blue-700 text-white px-4 py-3 rounded-full shadow-xl flex items-center gap-2 text-base font-semibold z-50 md:hidden"
      >
        <Phone className="w-5 h-5" />
        Call
      </a>
    </div>
  );
}
