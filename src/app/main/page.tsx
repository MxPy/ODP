import ProductCard from '../components/ProductCard';

const products = [
    {
      id: 1,
      name: "Zaprojektuję profesjonalną stronę przyjazną dla urządzeń mobilnych",
      price: 20,
      imageUrl: "https://cdn.logojoy.com/wp-content/uploads/20200814102904/AdobeStock_218976523-min-1024x724.jpeg",
      description: "Ekspert w tworzeniu responsywnych, przyjaznych dla użytkownika stron, które świetnie wyglądają na wszystkich urządzeniach.",
      author: {
        name: "Anna Kowalska",
        level: 2,
        avatar: "https://via.placeholder.com/100x100/7B341E/FFFFFF?text=AK"
      },
      rating: {
        score: 4.9,
        count: 183
      },
      features: ["terminowa-dostawa", "szybka-odpowiedz", "gwarancja-satysfakcji"]
    },
    {
      id: 2,
      name: "Stworzę niestandardowe motywy WordPress",
      price: 45,
      imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQrzAicjrHuGWhcqpDgjnM8zp1mT1ZcUJ8Ssw&s",
      description: "Spersonalizowane motywy WordPress, które doskonale odzwierciedlają tożsamość Twojej marki.",
      author: {
        name: "Marek Nowak",
        level: 3,
        avatar: "https://via.placeholder.com/100x100/075985/FFFFFF?text=MN"
      },
      rating: {
        score: 4.8,
        count: 207
      },
      features: ["seo-zoptymalizowane", "gotowe-do-ecommerce", "wielojezyczne"]
    },
    {
      id: 3,
      name: "Opracuję aplikacje mobilne w React Native",
      price: 75,
      imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRsA8cVPyYr_UZb1UVBTrcP9s4quRNax2ksIA&s",
      description: "Wieloplatformowe aplikacje mobilne, które są naprawdę natywne zarówno na iOS, jak i Androidzie.",
      author: {
        name: "Zofia Lewandowska",
        level: 2,
        avatar: "https://via.placeholder.com/100x100/6D28D9/FFFFFF?text=ZL"
      },
      rating: {
        score: 4.7,
        count: 129
      },
      features: ["wieloplatformowe", "zoptymalizowana-wydajnosc", "wsparcie-offline"]
    },
    {
      id: 4,
      name: "Wykonam projekt UI/UX dla sieci i mobile",
      price: 50,
      imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4O4atBWXNKF7B_iscIc9-8dUhRpo3RodPkg&s",
      description: "Intuicyjne i wizualnie atrakcyjne projekty, które poprawiają doświadczenie użytkownika.",
      author: {
        name: "Robert Wiśniewski",
        level: 3,
        avatar: "https://via.placeholder.com/100x100/B91C1C/FFFFFF?text=RW"
      },
      rating: {
        score: 5.0,
        count: 221
      },
      features: ["badanie-uzytkownikow", "wireframing", "testowanie-prototypow"]
    },
    {
      id: 5,
      name: "Zoptymalizuję szybkość Twojej strony",
      price: 30,
      imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSoHsB-g5HHPUDoUW8n2y820DQJzA8BvQZYMw&s",
      description: "Przyspiesz ładowanie strony dla lepszej retencji użytkowników i wyników SEO.",
      author: {
        name: "Ewa Dąbrowska",
        level: 2,
        avatar: "https://via.placeholder.com/100x100/4D7C0F/FFFFFF?text=ED"
      },
      rating: {
        score: 4.6,
        count: 98
      },
      features: ["optymalizacja-obrazow", "minifikacja-kodu", "strategie-cache"]
    },
    {
      id: 6,
      name: "Stworzę interaktywne wizualizacje danych",
      price: 600,
      imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTKz9SftcCB5eL3TMGqy2mUeNOIvx34KZHyEw&s",
      description: "Zamieniam skomplikowane dane w piękne, interaktywne wykresy i grafy.",
      author: {
        name: "Henryk Jankowski",
        level: 3,
        avatar: "https://via.placeholder.com/100x100/134E4A/FFFFFF?text=HJ"
      },
      rating: {
        score: 4.9,
        count: 176
      },
      features: ["ekspert-d3js", "aktualizacje-na-zywo", "projekt-dashboardow"]
    }
  ];

export default function Home() {
  return (
    <div className="hero min-h-screen bg-base-200">
    <div className="hero-content text-center">
      <div>
        <div className="p-20 m-2 grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 gap-x-20 gap-y-10">
          {products.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </div>
  </div>
    
  );
};