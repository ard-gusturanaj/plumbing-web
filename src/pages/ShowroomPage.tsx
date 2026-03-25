import { CheckCircle } from 'lucide-react';

export default function ShowroomPage() {
  const projects = [
     {
      id: 5,
      title: 'Instalimi i Ngrohjes',
      description: 'Instalim i plotë i pajisjeve ngrohëse.',
      image: '/img/vail1.png',
      category: 'Banimi',
      details: ['Instalim profesional i pajisjeve', 'Pajisje moderne', 'Teknologji për kursimin e energjisë'],
    }, 
    {
      id: 3,
      title: 'Ngrohësit e Ujit',
      description: 'Ngrohësit e ujit me sistem modern dhe efikas.',
      image:
        'https://www.thespruce.com/thmb/PkzMacIYDiv711fdDfewXYZvUCs=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/GettyImages-1304894986-5aa4a452c9b848cbb0378529d5797ce2.jpg',
      category: 'Banimi',
      details: ['Instalim', 'Ngrohës modern', 'Efikasitet energjetik'],
    },
     {
      id: 7,
      title: 'Instalim i Sistemit Termo-Hidraulik',
      description:
        'Projekt i realizuar me instalim të plotë të ngrohjes në dysheme dhe sistemit hidraulik, me fokus në funksionalitet, siguri dhe përfundim cilësor.',
      image: '/img/plumbimg.png',
      category: 'Banimi',
      details: ['Instalim i plotë i linjave', 'Pajisje cilësore', 'Përfundim i pastër dhe profesional'],
    },
    {
      id: 1,
      title: 'Instalime të Sanitarisë',
      description:
        'Instalim i plotë i sanitarisë duke përfshirë pajisje të reja, instalime hidraulike dhe përfundime moderne.',
      image: 'https://images.pexels.com/photos/1457847/pexels-photo-1457847.jpeg?auto=compress&cs=tinysrgb&w=800',
      category: 'Banimi',
      details: ['Instalim i sanitarisë', 'Sistem hidraulik modern', 'Pajisje moderne'],
    },
    {
      id: 2,
      title: 'Instalim i Lavamanit të Kuzhinës',
      description: 'Instalim profesional i lavamanit të kuzhinës me pajisje cilësore.',
      image: 'https://images.pexels.com/photos/2724748/pexels-photo-2724748.jpeg?auto=compress&cs=tinysrgb&w=800',
      category: 'Banimi',
      details: ['Instalim i lavamanit cilësor', 'Sistem kullimi i përditësuar'],
    },
   
    {
      id: 4,
      title: 'Rinovim i Tualeteve Komerciale',
      description: 'Rinovim i plotë i instalimeve hidraulike për tualetet e një ndërtese zyrash.',
      image: 'https://www.americanstandard-us.com/cdn/shop/files/Commerical-Banner-3_2000x.jpg?v=1740709664',
      category: 'Komerciale',
      details: ['Instalim dhe rinovim i shumë pajisjeve', 'Përputhje me standardet ADA'],
    },
   
   
    {
      id: 6,
      title: 'Instalime dhe të Kanalizimit',
      description: 'Instalim i linjës së kanalizimit me teknologji moderne.',
      image: 'https://www.tonysplumbing.com/wp-content/uploads/2024/04/sewer-pipes-orange.jpg',
      category: 'Banimi',
      details: ['Ndërhyrje minimale', 'Zgjidhje afatgjatë'],
    },
    
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-6 md:py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8 md:mb-10">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-3 md:mb-4">Projektet Tona</h1>
          <p className="text-sm md:text-base text-gray-600 max-w-3xl mx-auto">
            Disa nga projektet tona të përfunduara së fundmi. Ne krenohemi me çdo punë, duke ofruar cilësi të lartë
            dhe afatgjatë.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all transform hover:-translate-y-1"
            >
              <div className="relative h-52 md:h-64 overflow-hidden">
                <img src={project.image} alt={project.title} className="w-full h-full object-cover" />
                <div className="absolute top-4 right-4">
                  <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                    {project.category}
                  </span>
                </div>
              </div>

              <div className="p-4 md:p-6">
                <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-2">{project.title}</h3>
                <p className="text-sm md:text-base text-gray-600 mb-3 md:mb-4 leading-relaxed">{project.description}</p>

                <div className="border-t border-gray-100 pt-2">
                  <p className="text-sm font-semibold text-gray-700 mb-2">Pikat Kryesore të Projektit:</p>
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

      </div>
    </div>
  );
}

