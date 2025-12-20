import imgSedans from "./assets/icon-sedans.svg"
import imgSuvs from "./assets/icon-suvs.svg";
import imgLuxury from "./assets/icon-luxury.svg";


function App() {
  return (
    <>
      <section className="bg-white w-full min-h-screen flex items-center justify-center p-6">
        <div className="flex flex-col md:flex-row md:w-[900px] w-full rounded-xl overflow-hidden">
          <div className="bg-gold-400 w-full p-10">
            <img src={imgSedans} alt="" />
            <h1 className="uppercase text-white text-4xl font-bold my-8 font-big">Sedans</h1>
            <p className="text-start font-big text-whiteTransparent mb-5 md:mb-20 font-light font-lexend">Choose a sedan for its affordanbility and excellent fuel economy. Ideal for cruising in the city or on your next road trip.</p>
            <button type="button" className="bg-white px-8 py-3 shadow-lg rounded-full inline-block">
              <p className="text-base  text-gold-400 text-center font-900 font-lexend cursor-pointer">Learn More</p>
            </button>
          </div>
          <div className="bg-cyan-800 w-full p-10">
            <img src={imgSuvs} alt="" />
            <h1 className="uppercase text-white text-4xl font-bold my-8 font-big">Suvs</h1>
            <p className="text-start font-big text-whiteTransparent mb-5 md:mb-20 font-light font-lexend">Take an SUV for its spacious interior, power, and versatility. Perfect for your next family vacation and off-road adventures</p>
            <button type="button" className="bg-white px-8 py-3 shadow-lg rounded-full inline-block">
              <p className="text-base  text-cyan-800 text-center font-900 font-lexend cursor-pointer">Learn More</p>
            </button>
          </div>
          <div className="bg-green-950 w-full p-10">
            <img src={imgLuxury} alt="" />
            <h1 className="uppercase text-white text-4xl font-bold my-8 font-big">Luxury</h1>
            <p className="text-start font-big text-whiteTransparent mb-5 md:mb-20 font-light font-lexend">Cruise in the best card brands wothout the bloated prices. Enjoy the enhanced confort of a luxury rental and arrive in style.</p>
            <button type="button" className="bg-white px-8 py-3 shadow-lg rounded-full inline-block">
              <p className="text-base  text-green-950 text-center font-900 font-lexend cursor-pointer">Learn More</p>
            </button>
          </div>
        </div>
      </section>
    </>
  )
}

export default App
