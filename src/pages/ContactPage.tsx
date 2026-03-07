import { Phone, Mail, MapPin, Clock } from 'lucide-react';

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
      icon: MapPin,
      title: 'Addresa',
      details: ['Istog', 'UÇK, Smail Gusturanaj'],
      color: 'bg-orange-50 text-orange-600',
    },
    {
      icon: Clock,
      title: 'Orari i Punës',
      details: ['Hënë - Premte: 7:00 - 17:00', 'Shtunë: 7:00 - 16:00'],
      color: 'bg-purple-50 text-purple-600',
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Na Kontaktoni</h1>
          <p className="text-1xl text-gray-600 max-w-3xl mx-auto">
            Keni ndonjë problem me instalimet hidraulike apo keni nevojë për një ofertë?
            Jemi këtu për t’ju ndihmuar! Na kontaktoni përmes mënyrave të mëposhtme.
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

        <div className="bg-gray-50 rounded-2xl p-8">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">Zona e Shërbimit</h3>
          <p className="text-gray-600 mb-4 leading-relaxed">
            Ne ofrojmë shërbimet tona në qytetin dhe zonat përreth.
            Nëse nuk jeni të sigurt nëse ofrojmë shërbim në zonën tuaj, na telefononi dhe do t’ju informojmë.
          </p>
         
        </div>
      </div>
    </div>
  );
}