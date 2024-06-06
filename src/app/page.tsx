import Image from "next/image";
import Link from "next/link";

export default function Home()  {
  return (
    <main className="">
      <div className="hero min-h-[80vh] max-h-[80vh]" style={{backgroundImage: 'url(https://c8.alamy.com/compfr/ebtt0d/l-homme-une-femme-parlant-dans-un-bureau-ebtt0d.jpg)'}}>
        <div className="hero-overlay bg-opacity-70"></div>
        <div className="hero-content text-left">
          <div className="max-w-2xl">
            <h2 className="text-6xl font-bold py-8">Znajdź to co potrzebujesz, już teraz!</h2>
            <label className="input input-bordered flex items-center gap-2">
              <input type="text" className="grow" placeholder="Wyszukaj co ci potrzebne" />
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 opacity-70"><path fillRule="evenodd" d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z" clipRule="evenodd" /></svg>
            </label>
            <div className="join my-2">
            <p className="font-bold join-item mx-2">Popularne: </p>
              <Link href="/main" className="btn btn-xs btn-outline text-white join-item mx-2">Projektowanie Stron Internetowych</Link>
              <button className="btn btn-xs btn-outline text-white join-item mx-2">WordPress</button>
              <button className="btn btn-xs btn-outline text-white join-item mx-2">Projektowanie Loga</button>
              <button className="btn btn-xs btn-outline text-white join-item mx-2">Serwis AI</button>
            </div>
          </div>
        </div>
      </div>
      <div className="hero flex-col justify-center min-h-[80vh] max-h-[80vh] bg-base-100 p-5">
  <div className="hero-content text-left">
  <div className="max-w-7xl">
  <h2 className="text-4xl font-bold py-8">Uzytkownicy ostatnio wybierają</h2>
    <div className="relative">
      <div className="carousel carousel-center max-w-l p-4 space-x-10 bg-neutral rounded-box">
          <div  id="slide1" className="carousel-item relative  rounded-box overflow-hidden">
            <img src="https://img.daisyui.com/images/stock/photo-1559703248-dcaaec9fab78.jpg" alt="Avatar" className="object-cover  w-full h-full" />
            <div className="absolute w-full py-2.5 bottom-0 inset-x-0 glass hover:bg-slate-100 text-white text-xl text-center leading-4">Artyści AI</div>
        </div>
          <div className="carousel-item relative  rounded-box overflow-hidden">
            <img src="https://img.daisyui.com/images/stock/photo-1565098772267-60af42b81ef2.jpg" alt="Avatar" className="object-cover w-full h-full" />
            <div className="absolute w-full py-2.5 bottom-0 inset-x-0 glass hover:bg-slate-100 text-white text-xl text-center leading-4">Projektowanie Logo</div>
          </div>
          <div className=" carousel-item relative  rounded-box overflow-hidden">
            <img src="https://img.daisyui.com/images/stock/photo-1572635148818-ef6fd45eb394.jpg" alt="Avatar" className="object-cover w-full h-full" />
            <div className="absolute w-full py-2.5 bottom-0 inset-x-0 glass hover:bg-slate-100 text-white text-xl text-center leading-4">Lektor</div>
          </div>
          <div className="carousel-item relative  rounded-box overflow-hidden">
            <img src="https://img.daisyui.com/images/stock/photo-1494253109108-2e30c049369b.jpg" alt="Avatar" className="object-cover w-full h-full" />
            <div className="absolute w-full py-2.5 bottom-0 inset-x-0 glass hover:bg-slate-100 text-white text-xl text-center leading-4">Wnoszenie kanapy na 4 piętro</div>
          </div>
          <div className="carousel-item relative  rounded-box overflow-hidden">
            <img src="https://img.daisyui.com/images/stock/photo-1550258987-190a2d41a8ba.jpg" alt="Avatar" className="object-cover w-full h-full" />
            <div className="absolute w-full py-2.5 bottom-0 inset-x-0 glass hover:bg-slate-100 text-white text-xl text-center leading-4">Minecraft</div>
          </div>
          <div className="carousel-item relative  rounded-box overflow-hidden">
            <img src="https://img.daisyui.com/images/stock/photo-1559181567-c3190ca9959b.jpg" alt="Avatar" className="object-cover w-full h-full" />
            <div className="absolute w-full py-2.5 bottom-0 inset-x-0 glass hover:bg-slate-100 text-white text-xl text-center leading-4">Okładki Książek</div>
          </div>
        <div id="slide2" className="carousel-item relative  rounded-box overflow-hidden">
            <img src="https://img.daisyui.com/images/stock/photo-1601004890684-d8cbf643f5f2.jpg" alt="Avatar" className="object-cover w-full h-full" />
            <div className="absolute w-full py-2.5 bottom-0 inset-x-0 glass hover:bg-slate-100 text-white text-xl text-center leading-4">Ilustracje</div>
          </div>
      </div>
      <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
        <a href="#slide1" className="btn btn-circle btn-ghost">❮</a> 
        <a href="#slide2" className="btn btn-circle btn-ghost">❯</a>
      </div>
    </div>
    </div>
  </div>
  
</div>

<div className="hero flex justify-center min-h-[80vh] max-h-[80vh]  bg-base-200 p-2">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <img src="https://iconeyecare.com/wp-content/uploads/sites/2/2018/12/workplace-vision-problems-scaled.jpg" className="max-w-3xl rounded-lg shadow-2xl" />
    <div className="max-w-lg max-h-sm">
      <h1 className=" max-w-md text-4xl font-bold py-5">Najlepsza część? Wszystko.</h1>
      <h2 className=" max-w-md text-2xl font-bold">Utrzymaj się w budżecie</h2>
      <p className=" max-w-md py-2">Znajdź odpowiednią usługę dla każdej ceny. Brak stawek godzinowych, tylko ceny za projekt..</p>
      <h2 className=" max-w-md text-2xl font-bold">Szybko wykonuj wysokiej jakości pracę</h2>
      <p className=" max-w-md py-2">Przekaż swój projekt utalentowanemu freelancerowi w ciągu kilku minut i uzyskaj długotrwałe rezultaty.</p>
      <h2 className=" max-w-md text-2xl font-bold">Płać, kiedy jesteś zadowolony</h2>
      <p className=" max-w-md py-2">Kosztorysy z góry oznaczają brak niespodzianek. Płatności są realizowane tylko wtedy, gdy Ty je zatwierdzisz.</p>
      <h2 className=" max-w-md text-2xl font-bold">Licz na całodobową pomoc</h2>
      <p className=" max-w-md py-2">Nasz zespół pomocy technicznej dostępny jest przez całą dobę, aby pomóc Ci w każdej chwili i wszędzie.</p>
    </div>
  </div>
</div>

<div className=" flex bg-base-100 justify-center ">
      <div className="hero flex justify-center  min-h-[80vh] max-h-[80vh] min-w-[80vh] max-w-[80vh]">
      <div className="mockup-phone border bg-base-300 justify-center">
              <div className="camera "></div> 
              <div className="display max-h-[80vh] max-w-[80vh] ">
                <div className="flex justify-center bg-base-200">
                <img src="https://www.spt.com.pl/wp-content/uploads/2023/02/montaz-kanapy-pila-1-472x1024.jpg" className="object-cover "></img>
                </div>
                </div>
      </div>
            <div className="hero-content text-center">
          <div className="max-w-md">
            <p className="py-6">Menadżer projektu e-commerce: Twój przewodnik po sukcesie
            Jesteśmy z Tobą na każdym etapie uruchomienia Twojego sklepu internetowego!
            Szybki start: Skróć czas wprowadzenia produktu na rynek dzięki dedykowanemu zespołowi doświadczonych freelancerów.
            Optymalizacja budżetu: Menadżer projektu zajmie się wszystkimi Twoimi zadaniami, oszczędzając Twój czas i pieniądze, które możesz przeznaczyć na marketing i rozwój firmy.
            Pełne wsparcie: Menadżer projektu będzie Twoim przewodnikiem po uruchomieniu sklepu internetowego, udzielając Ci wskazówek i pomocy na każdym kroku.</p>
          </div>
        </div>
            
      </div>
      </div>

      <div className="hero flex justify-center min-h-[80vh] max-h-[80vh]  bg-base-200 p-5">
            <div className="hero-content text-center">
          <div className="max-w-md">
            <p className="py-6">The web task board connected to Discord streamlines project management for teams. Integrated within Discord servers, it offers customizable task boards where users can assign tasks, track progress, and communicate seamlessly. With real-time updates and flexible integrations, it enhances productivity and collaboration within Discord's familiar environment.</p>
          </div>
        </div>
            <div className="mockup-browser border bg-base-300">
              <div className="mockup-browser-toolbar">
                <div className="input">https://odp.io</div>
              </div>
                <div className="flex justify-center bg-base-200">
                <div className=" min-h-[40vh] object-cover min-w-[70vh] max-w-fit max-h-fit" style={{backgroundImage: 'url(https://a.allegroimg.com/original/12006a/79935dcd4b7bab1502e6db497f3b)'}}>
                </div>
                </div>
            </div>
      </div>
      
      
    </main>
  );
}