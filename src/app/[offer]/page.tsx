"use client"
import Image from 'next/image';
import { useRouter } from 'next/navigation'
import { useState } from 'react';

interface Service {
    id: number;
    name: string;
    price: number;
    imageUrl: string;
    description: string;
    author: {
      name: string;
      level: number;
      avatar: string;
    };
    rating: {
      score: number;
      count: number;
    };
    features: string[];
    packages: {
      name: string;
      description: string;
      price: number;
    }[];
    gallery: string[];
    responseTime: string;
    ordersInQueue: number;
  }
  
  const services = [
    {
      id: 1,
      name: "Zaprojektuję profesjonalną stronę przyjazną dla urządzeń mobilnych",
      price: 20,
      imageUrl: "https://cdn.logojoy.com/wp-content/uploads/20200814102904/AdobeStock_218976523-min-1024x724.jpeg",
      description: "Tworzenie stron internetowych, które wyglądają atrakcyjnie i funkcjonują płynnie na różnych urządzeniach, to wyzwanie wymagające zarówno precyzji technicznej, jak i wrażliwości na potrzeby użytkowników. Specjalista w tym obszarze musi mieć nie tylko głęboką znajomość języków programowania, takich jak HTML, CSS i JavaScript, ale także umiejętność zrozumienia potrzeb odbiorców i dostosowania projektu do ich różnorodnych urządzeń, od smartfonów po komputery stacjonarne. Tworzenie stron responsywnych to sztuka uwzględniająca elastyczność w projektowaniu, by zapewnić optymalne doświadczenie użytkownika bez względu na wielkość ekranu. Obejmuje to również umiejętność wykorzystania nowoczesnych technik projektowania, aby strony nie tylko wyglądały atrakcyjnie, ale także były łatwe w nawigacji i szybkie w działaniu, co jest kluczowe zwłaszcza na urządzeniach mobilnych, gdzie ograniczenia przepustowości sieci mogą wpływać na szybkość ładowania stron. Jednocześnie, specjalista w tworzeniu responsywnych stron musi być stale zaznajomiony z najnowszymi trendami i technologiami, aby dostarczyć użytkownikom innowacyjne i satysfakcjonujące doświadczenia online.",
      author: {
        name: "Anna Kowalska",
        level: 2,
        avatar: "https://via.placeholder.com/100x100/7B341E/FFFFFF?text=AK"
      },
      rating: {
        score: 4.9,
        count: 183
      },
      features: ["terminowa-dostawa", "szybka-odpowiedz", "gwarancja-satysfakcji", "100% pozytywnych ocen", "50+ ukończonych projektów"],
      packages: [
        {
          name: "Basic",
          description: "Responsywna strona internetowa, 3 strony, ikony społecznościowe + suwaki, formularz kontaktowy",
          price: 20
        },
        {
          name: "Standard",
          description: "5 stron, integracja z CMS, optymalizacja SEO, projekt mobilny",
          price: 40
        },
        {
          name: "Premium",
          description: "10 stron, zaawansowane SEO, projekt mobilny i webowy, wsparcie 24/7",
          price: 80
        }
      ],
      gallery: [
        "https://via.placeholder.com/400x300/4A5568/FFFFFF?text=Projekt+1",
        "https://via.placeholder.com/400x300/4A5568/FFFFFF?text=Projekt+2",
        "https://via.placeholder.com/400x300/4A5568/FFFFFF?text=Projekt+3",
        "https://via.placeholder.com/400x300/4A5568/FFFFFF?text=Projekt+4"
      ],
      responseTime: "2 godziny",
      ordersInQueue: 15
    },
    {
      id: 2,
      name: "Stworzę niestandardowe motywy WordPress",
      price: 45,
      imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQrzAicjrHuGWhcqpDgjnM8zp1mT1ZcUJ8Ssw&s",
      description: "Spersonalizowane motywy WordPress to kluczowy element budowy silnej obecności online dla Twojej marki. Te wyjątkowe motywy zostały zaprojektowane w taki sposób, aby idealnie odzwierciedlać tożsamość Twojej marki, zapewniając spójne wrażenia dla odwiedzających Twoją stronę. Dzięki spersonalizowanym motywom, możesz w pełni wyrazić unikalność i wartości Twojej marki, co z kolei może przyczynić się do zwiększenia zaangażowania użytkowników oraz budowania lojalności.",
      author: {
        name: "Marek Nowak",
        level: 3,
        avatar: "https://via.placeholder.com/100x100/075985/FFFFFF?text=MN"
      },
      rating: {
        score: 4.8,
        count: 207
      },
      features: ["seo-zoptymalizowane", "gotowe-do-ecommerce", "wielojezyczne"],
      packages: [
        {
          name: "Basic",
          description: "Podstawowy motyw WordPress z 3 stronami i podstawowymi funkcjami",
          price: 45
        },
        {
          name: "Standard",
          description: "5 stron, integracja z WooCommerce, optymalizacja SEO, dostosowanie do brandingu",
          price: 75
        },
        {
          name: "Premium",
          description: "10 stron, zaawansowane funkcje e-commerce, niestandardowe wtyczki, pełne wsparcie",
          price: 120
        }
      ],
   gallery: [
    "https://via.placeholder.com/400x300/4A5568/FFFFFF?text=Motyw+1",
    "https://via.placeholder.com/400x300/4A5568/FFFFFF?text=Motyw+2",
    "https://via.placeholder.com/400x300/4A5568/FFFFFF?text=Motyw+3",
    "https://via.placeholder.com/400x300/4A5568/FFFFFF?text=Motyw+4"
  ],
  responseTime: "3 dni",
  ordersInQueue: 24
},
{
  id: 3,
  name: "Opracuję aplikacje mobilne w React Native",
  price: 75,
  imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRsA8cVPyYr_UZb1UVBTrcP9s4quRNax2ksIA&s",
  description: "Wieloplatformowe aplikacje mobilne są niezbędnym narzędziem w dzisiejszym cyfrowym świecie, gdzie użytkownicy korzystają z różnorodnych urządzeń i systemów operacyjnych. Tworzenie aplikacji, które działają płynnie zarówno na iOS, jak i Androidzie, zapewnia szeroki zasięg dla Twojej marki i pozwala dotrzeć do większej liczby potencjalnych klientów. Dzięki temu możesz zagwarantować spójne doświadczenia użytkowników niezależnie od preferencji platformy mobilnej, na której korzystają.",
  author: {
    name: "Zofia Lewandowska",
    level: 2,
    avatar: "https://via.placeholder.com/100x100/6D28D9/FFFFFF?text=ZL"
  },
  rating: {
    score: 4.7,
    count: 129
  },
  features: ["wieloplatformowe", "zoptymalizowana-wydajnosc", "wsparcie-offline"],
  packages: [
    {
      name: "Basic",
      description: "Prosta aplikacja z podstawowymi funkcjami, ekranem logowania i rejestracji",
      price: 75
    },
    {
      name: "Standard",
      description: "Aplikacja z kilkoma ekranami, nawigacją, integracją z API i bazą danych",
      price: 150
    },
    {
      name: "Premium",
      description: "Złożona aplikacja z wieloma funkcjami, powiadomieniami push, płatnościami w aplikacji i pełnym wsparciem",
      price: 300
    }
  ],
  gallery: [
    "https://via.placeholder.com/400x300/4A5568/FFFFFF?text=Aplikacja+1",
    "https://via.placeholder.com/400x300/4A5568/FFFFFF?text=Aplikacja+2",
    "https://via.placeholder.com/400x300/4A5568/FFFFFF?text=Aplikacja+3",
    "https://via.placeholder.com/400x300/4A5568/FFFFFF?text=Aplikacja+4"
  ],
  responseTime: "2 tygodnie",
  ordersInQueue: 18
},
{
  id: 4,
  name: "Wykonam projekt UI/UX dla sieci i mobile",
  price: 50,
  imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4O4atBWXNKF7B_iscIc9-8dUhRpo3RodPkg&s",
  description: "Intuicyjne i wizualnie atrakcyjne projekty są kluczowe dla poprawy doświadczenia użytkownika na Twojej stronie internetowej lub w aplikacji. Stworzenie projektów, które są łatwe w nawigacji i jednocześnie estetycznie przyjemne dla oka, może znacząco zwiększyć zaangażowanie użytkowników oraz czas spędzony na Twojej platformie. To może prowadzić do wzrostu konwersji i lojalności klientów, co z kolei przyczynia się do sukcesu Twojej marki.",
  author: {
    name: "Robert Wiśniewski",
    level: 3,
    avatar: "https://via.placeholder.com/100x100/B91C1C/FFFFFF?text=RW"
  },
  rating: {
    score: 5.0,
    count: 221
  },
  features: ["badanie-uzytkownikow", "wireframing", "testowanie-prototypow"],
  packages: [
    {
      name: "Basic",
      description: "Projekt UI/UX dla jednej strony internetowej lub ekranu aplikacji",
  // Usługa 4 (ciąg dalszy)
  price: 50
},
{
  name: "Standard",
  description: "Projekt UI/UX dla 3 stron internetowych lub ekranów aplikacji",
  price: 120
},
{
  name: "Premium",
  description: "Pełny projekt UI/UX dla strony internetowej lub aplikacji z prototypowaniem i testami",
  price: 200
}
],
gallery: [
"https://via.placeholder.com/400x300/4A5568/FFFFFF?text=Projekt+UI/UX+1",
"https://via.placeholder.com/400x300/4A5568/FFFFFF?text=Projekt+UI/UX+2",
"https://via.placeholder.com/400x300/4A5568/FFFFFF?text=Projekt+UI/UX+3",
"https://via.placeholder.com/400x300/4A5568/FFFFFF?text=Projekt+UI/UX+4"
],
responseTime: "1 tydzień",
ordersInQueue: 32
},
{
id: 5,
name: "Zoptymalizuję szybkość Twojej strony",
price: 30,
imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSoHsB-g5HHPUDoUW8n2y820DQJzA8BvQZYMw&s",
description: "Przyspieszenie ładowania strony jest kluczowe dla zapewnienia pozytywnego doświadczenia użytkownika oraz osiągnięcia lepszych wyników SEO. Długie czasy ładowania mogą prowadzić do frustracji użytkowników i zniechęcenia do powrotu na Twoją stronę. Dlatego ważne jest, aby zoptymalizować stronę pod kątem szybkości ładowania, co może mieć bezpośredni wpływ na retencję użytkowników oraz pozycję Twojej strony w wynikach wyszukiwania.",
author: {
name: "Ewa Dąbrowska",
level: 2,
avatar: "https://via.placeholder.com/100x100/4D7C0F/FFFFFF?text=ED"
},
rating: {
score: 4.6,
count: 98
},
features: ["optymalizacja-obrazow", "minifikacja-kodu", "strategie-cache"],
packages: [
{
  name: "Basic",
  description: "Podstawowa optymalizacja strony internetowej z kompresją obrazów i minifikacją kodu",
  price: 30
},
{
  name: "Standard",
  description: "Zaawansowana optymalizacja strony internetowej z optymalizacją bazy danych i CDN",
  price: 60
},
{
  name: "Premium",
  description: "Pełna optymalizacja strony internetowej z audytem SEO i monitorowaniem wydajności",
  price: 120
}
],
gallery: [
"https://via.placeholder.com/400x300/4A5568/FFFFFF?text=Optymalizacja+1",
"https://via.placeholder.com/400x300/4A5568/FFFFFF?text=Optymalizacja+2",
"https://via.placeholder.com/400x300/4A5568/FFFFFF?text=Optymalizacja+3",
"https://via.placeholder.com/400x300/4A5568/FFFFFF?text=Optymalizacja+4"
],
responseTime: "2 dni",
ordersInQueue: 15
},
{
id: 6,
name: "Stworzę interaktywne wizualizacje danych",
price: 600,
imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTKz9SftcCB5eL3TMGqy2mUeNOIvx34KZHyEw&s",
description: "Zamienianie skomplikowanych danych w piękne, interaktywne wykresy i grafy może pomóc w lepszym zrozumieniu informacji przez użytkowników. Przejrzyste wizualizacje danych mogą ułatwić analizę i interpretację informacji, co z kolei może prowadzić do bardziej świadomych decyzji biznesowych. Dzięki temu Twoja marka może w pełni wykorzystać potencjał swoich danych i efektywniej komunikować się z klientami.",
author: {
name: "Henryk Jankowski",

  level: 3,
  avatar: "https://via.placeholder.com/100x100/134E4A/FFFFFF?text=HJ"
},
rating: {
  score: 4.9,
  count: 176
},
features: ["ekspert-d3js", "aktualizacje-na-zywo", "projekt-dashboardow"],
packages: [
  {
    name: "Basic",
    description: "Interaktywna wizualizacja danych dla jednego zestawu danych z wykresami i tabelami",
    price: 300
  },
  {
    name: "Standard",
    description: "Interaktywna wizualizacja danych dla 2-3 zestawów danych z panelami sterowania i filtrami",
    price: 450
  },
  {
    name: "Premium",
    description: "Interaktywna wizualizacja danych dla wielu zestawów danych z zaawansowanymi funkcjami i integracją API",
    price: 600
  }
],
gallery: [
  "https://via.placeholder.com/400x300/4A5568/FFFFFF?text=Wizualizacja+1",
  "https://via.placeholder.com/400x300/4A5568/FFFFFF?text=Wizualizacja+2",
  "https://via.placeholder.com/400x300/4A5568/FFFFFF?text=Wizualizacja+3",
  "https://via.placeholder.com/400x300/4A5568/FFFFFF?text=Wizualizacja+4"
],
responseTime: "3 tygodnie",
ordersInQueue: 5
}
];



export default function Home({ params }: { params: { offer: string } }) {
  const [selectedPackageIndex, setSelectedPackageIndex] = useState(0);
  const router = useRouter()
  const id = params.offer
  function handleClick(index: number) {
    console.log(selectedPackageIndex === 0);
    setSelectedPackageIndex(index);
    // Tutaj możesz dodać dodatkową logikę, jeśli jest potrzebna
  }
  // Assign the value of the 'offer' query parameter to the 'service' variable
 
  
  const service = services.find((service) => service.id === parseInt(id));

  const handleBasket = (event: any) => {
    const loginValue = localStorage.getItem('login');
    if (loginValue) {
      let prices: number[] = [];
      const storedPrices = localStorage.getItem('items');
      if (storedPrices) {
        prices = JSON.parse(storedPrices);
      }
      prices.push(service.packages[selectedPackageIndex].price);
      localStorage.setItem('items', JSON.stringify(prices));
      window.location.href = `/main` ;
    }else{
      window.location.href = `/login`
    }
    
  };

  if (!service) {
    // Handle the case where the 'offer' query parameter is invalid or not found
    return <div>Invalid service ID</div>;
  }
  return (  
    <main className="">
<div className="hero z-0 min-h-screen p-10 bg-base-200 relative">
  <div className="hero-content text-center"></div>
  <div className="container mx-auto px-4 py-8">
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      <div className="col-span-2  py-5">
        <h1 className="text-4xl text-center rounded-t-3xl glass [--glass-opacity:0.4] [--glass-blur:30px] font-bold">{service.name}</h1>
        <div className=" w-full  rounded-box ">
          <div className="relative   w-full">
            <img src={service.imageUrl} className="w-full " />
          </div>
        </div>
        <div className="flex glass  p-2 items-center mb-6">
          <img src={service.author.avatar} alt={service.author.name} className="w-12 h-12 rounded-full mr-4" />
          <div>
            <p className="font-semibold">{service.author.name}</p>
            <p className="text-sm">Level {service.author.level} Ogłoszeniodawca</p>
          </div>
        </div>

        <h2 className="text-2xl font-bold mb-4">O tej ofercie</h2>
        <p className="mb-6">{service.description}</p>
        <h2 className="text-2xl font-bold mb-4">Dlaczego Ja?</h2>
        <ul className="list-disc list-inside mb-6">
          {service.features.map((feature, index) => (
            <li key={index}>{feature}</li>
          ))}
        </ul>
      </div>

      {/* sale window being */}
      <div className='content-center z-2 fixed top-1/2 right-14 transform -translate-y-1/2'>
        <div className="card glass shadow-xl max-w-md">
          <div className="card-body">
            <div className="flex justify-between items-center mb-4">
              <div className="flex items-center">
                <svg className="w-4 h-4 text-yellow-300 me-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                  <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
                </svg>
                <span className="font-bold">{service.rating.score}</span>
                <span className="ml-1">({service.rating.count})</span>
              </div>
            </div>
            <ul className="menu menu-vertical mx-10 justify-center lg:menu-horizontal glass [--glass-opacity:0.2] [--glass-blur:30px] rounded-box tabs mb-4">
              <li><button onClick={() => handleClick(0)} className="btn glass [--glass-opacity:0.8] [--glass-blur:30px] font-bold text-black mx-1 btn-outline">{service.packages[0].name}</button></li>
              <li><button onClick={() => handleClick(1)} className="btn glass [--glass-opacity:0.8] [--glass-blur:30px] font-bold text-black mx-1 btn-outline">{service.packages[1].name}</button></li>
              <li><button onClick={() => handleClick(2)} className="btn glass [--glass-opacity:0.8] [--glass-blur:30px] font-bold text-black mx-1 btn-outline">{service.packages[2].name}</button></li>
            </ul>
            {selectedPackageIndex === 0 && <p className="mb-4 text-lg glass rounded-box p-2">{service.packages[0].description}</p>}
            {selectedPackageIndex === 1 && <p className="mb-4 text-lg glass rounded-box p-2">{service.packages[1].description}</p>}
            {selectedPackageIndex === 2 && <p className="mb-4 text-lg glass rounded-box p-2">{service.packages[2].description}</p>}
            <div className="flex justify-between items-center mb-4">
              <div className="flex items-center">
                <span className="material-icons font-bold text-sm glass p-2 rounded-box mr-2">Czas dostawy: {service.responseTime}</span>
              </div>
              <div className="flex items-center">
                <span className="material-icons font-bold text-sm glass p-2 rounded-box mr-2">ilość zapytań w kolejce: {service.ordersInQueue}</span>
              </div>
            </div>
            <div className="text-right">
              {selectedPackageIndex === 0 && <p className="text-3xl font-bold">{service.packages[0].price} zł</p>}
              {selectedPackageIndex === 1 && <p className="text-3xl font-bold">{service.packages[1].price} zł</p>}
              {selectedPackageIndex === 2 && <p className="text-3xl font-bold">{service.packages[2].price} zł</p>}
              <button onClick={handleBasket} className="btn glass [--glass-opacity:0.8] [--glass-blur:30px] font-bold text-black mx-1 btn-outline text-lg  btn-block mt-4">Zamów</button>
            </div>
          </div>
        </div>
      </div>
      {/* sale window ends */}
    </div>
  </div>
  </div>
  <div className="hero relative z-10 flex justify-center min-h-[80vh] max-h-[80vh]" style={{backgroundImage: 'url(https://cdn.apartmenttherapy.info/image/upload/v1556748492/stock/6d75c294f4a3daa83af48e699aff32b118bc1eb2.jpg)'}}>
  <div className="hero-overlay flex-col lg:flex-row-reverse">
  <div className='w-full absolute py-16 glass text-white  px-4'>
      <div className='max-w-[1240px] mx-auto grid lg:grid-cols-3'>
        <div className='lg:col-span-2 my-4'>
          <h1 className='md:text-4xl sm:text-3xl text-2xl font-bold py-2'>
            Pragniesz więcej ofert???
          </h1>
          <p>Zapisz się teraz i zostań z nami</p>
        </div>
        <div className='my-4'>
          <div className='flex flex-col sm:flex-row items-center justify-between w-full'>
            <input
              className='p-3 flex w-full rounded-md text-black'
              type='email'
              placeholder='wpisz adres email'
            />
            <button className='btn btn-primary text-black font-bold rounded-md  w-[200px] ml-4 my-6 px-6 py-3'>
              Powiadom mnie
            </button>
          </div>
          <p>
            Dbamy o Twoją prywantość. Przeczytaj naszą{' '}
            <span className='text-gray-700'>----politka prywatonści</span>
          </p>
        </div>
      </div>
    </div>
  </div>
</div>
</main>




);
}