
// import Tutorials from '../Tutorials';
import Slider from 'react-slick'; //create carrousel functionality
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import StoresRandoom from '../../Components/Stores';


const settings={
  dots:true,
  isFinite:true,
  speed:2000,
  slideToShow:3,
  slideToScroll:1,
  autoplaySpeed: 10,
  autoplay: true
}
const data=
[
  {
    key:`1`,
    name:`frenessi`,    
    img: '../src/imgs/img1.jpg', 
    review:`Reservas, Asiento, Estacionamiento disponible, Bar completo, Servicio de mesa, Tarjetas de regalo disponibles`,
    url:`https://www.frenessi.co/home`
  },
  {
    key:`2`,
    name:`cantinala15`,
    img: '../src/imgs/img2.jpg', 
    review:`¿Estás buscando dónde celebrar tu cumpleaños en Cali y Bogotá? Disfruta de una celebración inolvidable y festeja de manera diferente con una experiencia al estilo Cantina La 15.`,
    url:`https://www.cantinala15.com/`
  },
  {
    key:`3`,
    name:`habhotel`,
    img: '../src/imgs/img3.jpg',  
    review:`Pasarla bien, comer bien, sentirse bien. Esto es lo que vives en HAB Café,
    el restaurante del HAB Hotel en Chapinero Alto, en donde disfrutas
    una experiencia gastronómica Farm-to-Table divertida y deliciosa, en un
    ambiente cosmopolita y refinado.`,
    url:`https://habhotel.co/hab-cafe/`
  },
  {
    key:`3`,
    name:`restauranteomm`,
    img: '../src/imgs/img4.jpg',  
    review:`Un lugar ideal para reencontrarse con los amigos del alma, compartir entre todos pequeños bocados de comida asiática y brindar con sake por los momentos vividos y los que faltan por vivir.`,
    url:`https://www.restauranteomm.com/`
  },
]

export default function Stores() {
  return (
    <>    
    <div className="bg-gradient-to-r from-gray-900 to-gray-800 text-white p-8">
  <h1 className="text-4xl font-bold mb-4">Mejores restaurantes colombia</h1>  
  <hr className="border-white border-b-2 mb-4" />

  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
    <div className="md:col-span-1">      
           <Slider {...settings}>
            {data.map((d) => (
              <div key={d.key} className="rounded-lg shadow-lg overflow-hidden mb-4">
                <img src={d.img} alt={d.name} className="h-64 w-full object-cover" />
                <div className="p-4">
                  <h2 className="text-xl font-semibold mb-2">{d.name}</h2>
                  <p className="text-gray-300">{d.review}</p>
                  <br/>
                  <button className="bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded mb-4"
                    onClick={() => window.open(d.url, '_blank')}>
                    Reservar
                  </button>
                </div>
              </div>
            ))}
          </Slider>

      <div className="flex justify-between">
            <div className="text-xl font-bold">Horario de apertura:</div>
              <div>10:00 AM - 10:00 PM</div>
      </div>
        <div className="flex justify-between">
          <div className="text-xl font-bold">Ubicación:</div>
          <div>Calle Principal, Bogotá</div>
        </div>
        <div className="mt-4">
          <p className="text-lg font-semibold">Descripción:</p>
          <p className="text-gray-300">Un lugar elegante que ofrece una experiencia culinaria única, con un ambiente refinado y platos exquisitos preparados por nuestros chefs expertos.</p>
        </div>
    </div>
      <div className="md:col-span-1">
      <h2 className="text-2xl font-bold mb-4">Menú destacado</h2>
          <div className="grid grid-cols-1 gap-4">
              <div className="bg-gray-800 p-4 rounded-lg hover:bg-gray-700 transition-colors duration-300">
                <h3 className="text-xl font-semibold mb-2">Plato Principal</h3>
                <p className="text-gray-300">Filete de res con salsa de trufa negra, acompañado de puré de papas al parmesano y espárragos a la parrilla.</p>
              </div>
              <div className="bg-gray-800 p-4 rounded-lg hover:bg-gray-700 transition-colors duration-300">
                <h3 className="text-xl font-semibold mb-2">Postre</h3>
                <p className="text-gray-300">Tarta de chocolate negro con ganache de frambuesa y helado de vainilla de Madagascar.</p>
              </div>
              <div className="bg-gray-800 p-4 rounded-lg hover:bg-gray-700 transition-colors duration-300">
                  <h3 className="text-xl font-semibold mb-2">Jugos</h3>
                  <p className="text-gray-300">Los unicos y mejores jugos que se van a encontrar en esta pagina</p>
              </div>
              <div className="bg-gray-800 p-4 rounded-lg hover:bg-gray-700 transition-colors duration-300">
                 <StoresRandoom></StoresRandoom>
              </div>
        </div>
    </div>
  </div>
  <br/>
  <hr className="border-white border-b-2 mb-4" />
</div>



    </>
  )
  }