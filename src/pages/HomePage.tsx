import { Shield, Award, Phone, Droplets, Flame, Wrench, Bath } from 'lucide-react';
import type { PageId } from '../types/page';

interface HomePageProps {
  onNavigate: (page: PageId) => void;
}

export default function HomePage({ onNavigate }: HomePageProps) {
  const features = [
    {
      icon: Shield,
      title: 'Të Licencuar dhe të Siguruar',
      description: 'Profesionistë të certifikuar me mbulim të plotë sigurimi për qetësinë tuaj.',
    },
   
    {
      icon: Award,
      title: 'Mbi 25 Vite Përvojë',
      description: 'Ekspertizë shumëvjeçare në zgjidhje hidraulike për ambiente banesore dhe komerciale.',
    },
  ];

  const services = [
    {
      title: 'Ujësjellës',
      description: 'Instalim dhe riparim i sistemit të ujit për banesa dhe lokale.',
      icon: Droplets,
    },
    {
      title: 'Ngrohje',
      description: 'Zgjidhje efikase për ngrohje qendrore dhe sisteme moderne.',
      icon: Flame,
    },
    {
      title: 'Riparim',
      description: 'Riparime të shpejta dhe profesionale për çdo problem hidraulik.',
      icon: Wrench,
    },
    {
      title: 'Sanitari',
      description: 'Instalim, montim dhe mirëmbajtje e pajisjeve sanitare për banjo dhe kuzhina.',
      icon: Bath,
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <div
        className="relative h-[300px] md:h-[380px] bg-cover bg-center flex items-center"
        style={{
          backgroundImage:
            'linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(https://www.hindscc.edu/wp-content/uploads/2022/02/Plumbing-Construction-Technology.jpg)',
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-white">
          <h1 className="text-3xl md:text-6xl font-bold mb-4 md:mb-6 leading-tight">
            Termo-Hidraulik Profesional
            <br />
           
          </h1>
          <p className="text-base md:text-2xl mb-8 md:mb-18 max-w-2xl">
            Zgjidhje profesionale për të gjitha nevojat tuaja hidraulike në ambiente banesore dhe komerciale.
            Shërbim i shpejtë dhe i besueshëm.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 md:py-6">
        <div className="text-center mb-8 md:mb-22">
          <h2 className="text-3xl font-bold text-gray-900 mb-2"></h2>
        </div>

        <div className="grid md:grid-cols-3 gap-4 md:gap-8 mb-8 md:mb-12">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white p-5 md:p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow border border-gray-100"
            >
              <feature.icon className="h-10 w-10 md:h-12 md:w-12 text-blue-600 mb-3 md:mb-4" />
              <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-2 md:mb-3">{feature.title}</h3>
              <p className="text-sm md:text-base text-gray-600 leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>

        <div className="bg-blue-700 rounded-2xl p-5 md:p-12 text-white">
          <h2 className="text-2xl md:text-4xl font-bold mb-4 text-center">Shërbimet</h2>
          <div className="grid grid-cols-1 gap-3 md:gap-6 mt-6 md:mt-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-white text-gray-900 rounded-xl md:rounded-2xl p-3 md:p-6 shadow-lg border border-gray-100 flex items-start gap-3 md:gap-4 transition-all"
              >
                <div className="w-11 h-11 md:w-16 md:h-16 rounded-xl bg-blue-50 flex items-center justify-center shrink-0">
                  <service.icon className="w-5 h-5 md:w-8 md:h-8 text-blue-600" />
                </div>
                <div>
                  <h3 className="text-base md:text-2xl font-bold mb-1 md:mb-2">{service.title}</h3>
                  <p className="text-xs md:text-base text-gray-600 leading-6 md:leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-8 md:mt-12 bg-gray-50 rounded-2xl p-6 md:p-18">
          <div className="grid md:grid-cols-2 gap-6 md:gap-18 items-center">
            <div>
              <p className="text-sm md:text-base text-gray-600 mb-4 leading-relaxed">
                Ekipi ynë i profesionistëve të licencuar sjell një pasuri të madhe njohurish dhe përvoje në çdo punë,
                pavarësisht madhësisë apo kompleksitetit të saj. Ne krenohemi me çmime transparente, cilësi të lartë
                në punë dhe shërbim të jashtëzakonshëm ndaj klientit. Kur kontaktoni LG, ju nuk po merrni vetëm një
                hidraulik, por një partner të besueshëm, të përkushtuar për të zgjidhur sfidat tuaja hidraulike në
                mënyrë efikase dhe profesionale. Nga mirëmbajtja rutinë deri te instalimet komplekse, ne i trajtojmë
                të gjitha me të njëjtin nivel profesionalizmi dhe vëmendjeje ndaj detajeve, gjë që na ka sjellë qindra
                vlerësime me pesë yje nga klientët tanë.
              </p>
            </div>
            <div className="relative">
              <img
                src="/img/LgLogo.png"
                alt="LG Company logo"
                className="mx-auto h-16 w-[22rem] rounded-full border border-blue-200 bg-white px-6 py-2 object-contain shadow-md ring-1 ring-blue-100 transition-all hover:shadow-lg md:h-20 md:w-[28rem]"
              />
            </div>
          </div>
        </div>

        <div className="mt-10 md:mt-16 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">Contact</h2>
          <p className="text-base md:text-xl text-gray-600 mb-6 md:mb-8">Keni nevojë për shërbimet tona? Na kontaktoni tani.</p>
          <div className="flex justify-center relative z-10">
            <button
              onClick={() => onNavigate('contact')}
              className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 md:px-8 py-3 md:py-4 rounded-lg text-base md:text-lg inline-flex items-center justify-center gap-2 transition-all shadow-lg"
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


