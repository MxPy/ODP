import Link from "next/link";

interface Product {
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
  }
  
  const ProductCard: React.FC<{ product: Product }> = ({ product }) => {
    return (
      <Link href="/" className="max-w-sm hover:bg-gray-600 hover:border-gray-300 bg-white border border-gray-200 rounded-t-xl shadow dark:bg-gray-800 dark:border-gray-700">
        <div  id="slide1" className="carousel-item relative rounded-t-xl overflow-hidden">
        <img 
          className="rounded-t-lg w-full h-48 object-cover" 
          src={product.imageUrl} 
          alt={product.name} 
        />
        <div className="absolute shadow-md w-full px-1.5 py-1.5 top-0 inset-x-0 glass [--glass-opacity:0.8] [--glass-blur:30px] text-white text-xl text-center leading-4">
        <div className="flex  items-center ">
            <img 
              src={product.author.avatar} 
              alt={product.author.name} 
              className="w-8 h-8 rounded-full mr-2" 
            />
            <div>
              <p className="text-xs font-semibold text-black dark:black">
                {product.author.name}
              </p>
              <p className="text-xs text-gray-700 dark:text-gray-700">
                Level {product.author.level}
              </p>
            </div>
          </div>
        </div>
            <div className="absolute w-full py-2.5 bottom-0 inset-x-0 glass [--glass-opacity:0.8] [--glass-blur:30px] font-bold text-black text-xl text-center leading-4">{product.name}</div>
        </div>
       
        <div className="p-5">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            
          </h5>
          
          <div className="flex justify-between items-center">
            <span className="text-xl font-bold text-gray-900 dark:text-white">
              {product.price} zł
            </span>
            {/* <a href="#" className="inline-flex items-center mx-2 px-1 py-2 text-xs font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                    Sprawdź to!!
                    <svg className="rtl:rotate-180 w-2.5 h-2.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                    </svg>
                </a> */}
            <div className="flex items-center">
              <svg className="w-4 h-4 text-yellow-300 me-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
              </svg>
              
              <span className="text-sm font-bold text-gray-900 dark:text-white">{product.rating.score}</span>
              
              <span className="text-sm text-gray-500 dark:text-gray-400 ms-1">({product.rating.count})</span>
            </div>
          </div>
          
        </div>
      </Link>
    );
  };
  
  export default ProductCard;