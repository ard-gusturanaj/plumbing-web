import { Shield, Clock, Award, Phone } from 'lucide-react';

interface HomePageProps {
  onNavigate: (page: string) => void;
}

export default function HomePage({ onNavigate }: HomePageProps) {
  const features = [
    {
      icon: Shield,
      title: 'Të Licencuar dhe të Siguruar',
      description: 'Profesionistë të certifikuar me mbulim të plotë sigurimi për qetësinë tuaj.',
    },
    {
      icon: Clock,
      title: 'Shërbim Emergjent 24/7',
      description: 'Emergjencat hidraulike nuk presin. As ne. Jemi në dispozicion 24/7 për riparime urgjente.',
    },
    {
      icon: Award,
      title: 'Mbi 15 Vite Përvojë',
      description: 'Ekspertizë shumëvjeçare në zgjidhje hidraulike për ambiente banesore dhe komerciale.',
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <div
        className="relative h-[450px] bg-cover bg-center flex items-center"
        style={{
          backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(https://www.hindscc.edu/wp-content/uploads/2022/02/Plumbing-Construction-Technology.jpg)',
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-white">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            Hidraulik Profesional<br />Shërbim i shpejtë dhe i besueshëm
          </h1>
          <p className="text-xl md:text-2xl mb-18 max-w-2xl">
           Zgjidhje profesionale për të gjitha nevojat tuaja hidraulike në ambiente banesore dhe komerciale.
Shërbim i shpejtë dhe i besueshëm.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-22">
          <h2 className="text-3xl font-bold text-gray-900 mb-4"></h2>
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

        <div className="bg-blue-700 rounded-2xl p-12 text-white text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Shërbimet</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-8">
            {[
              'Ujësjelles',
              'Ngrohje',
              'Riparim',
              'Instalim',
              'Sanitari',
            ].map((service, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm p-4 rounded-lg">
                <p className="font-semibold">{service}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-20 bg-gray-50 rounded-2xl p-18">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-700 mb-4">LG Company</h2>
              <p className="text-gray-600 mb-4 leading-relaxed">
                Ekipi ynë i profesionistëve të licencuar sjell një pasuri të madhe njohurish dhe përvoje në çdo punë, pavarësisht madhësisë apo kompleksitetit të saj.

Ne krenohemi me çmime transparente, cilësi të lartë në punë dhe shërbim të jashtëzakonshëm ndaj klientit. Kur kontaktoni LG, ju nuk po merrni vetëm një hidraulik, por një partner të besueshëm, të përkushtuar për të zgjidhur sfidat tuaja hidraulike në mënyrë efikase dhe profesionale.

Nga mirëmbajtja rutinë deri te instalimet komplekse, ne i trajtojmë të gjitha me të njëjtin nivel profesionalizmi dhe vëmendjeje ndaj detajeve, gjë që na ka sjellë qindra vlerësime me pesë yje nga klientët tanë.
              </p>
              <p className="text-gray-600 mb-4 leading-relaxed">
                
              </p>
              <p className="text-gray-600 leading-relaxed">
              
              </p>
            </div>
            <div className="relative">
              <img
                src="https://cdn.prod.website-files.com/643dd13153ce80ea0a9ceae9/68deab6039c6575485a4eb66_64a2d407bfcebde9109cf23a_Bathroom%2520Plumbing.png"
                alt="Professional plumber with tools"
                className="rounded-xl shadow-2xl"
              />
            </div>
          </div>
        </div>

        <div className="mt-20 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Contact</h2>
          <p className="text-xl text-gray-600 mb-8">
           Keni nevojë për shërbimet tona? Na kontaktoni tani.
          </p>
   <div className="flex justify-center relative z-10">
  <button
    onClick={() => onNavigate('contact')}
    className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-4 rounded-lg text-lg inline-flex items-center justify-center gap-2 transition-all shadow-lg"
  >
    <Phone className="h-5 w-5 shrink-0" />
    <span>Contact Us</span>
  </button>
</div>
        </div>
      </div>
    </div>
  );
}
