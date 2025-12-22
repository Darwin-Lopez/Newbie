import imgheaderCard from "./assets/illustration-hero.svg"
import imgMusic from "./assets/icon-music.svg"

function App() {
  return (
    <>
      <section className="w-full min-h-screen bg-Blue-100 flex items-center justify-center p-5">
        <div className="w-full h-full md:w-[500px] rounded-xl overflow-hidden">
          <div className="flex flex-col">
            <div className="w-full pb-3 bg-white">
              <img decoding="async" fetchPriority="high" src={imgheaderCard} alt="hero img" className="w-full h-full object-cover object-center" />
            </div>
            <div className="w-full text-center p-5 md:p-14 bg-white">
              <h1 className="text-Blue-950 font-extrabold text-xl">Order Summary</h1>
              <div className="w-full pt-5">
                <p className="text-Gray-600 text-lg font-normal">You can now listen to millions of songs, audiobooks, and podcasts on any device anywhere you like!</p>
                <div className="flex items-center justify-between py-10">
                  <div className="flex gap-5">
                    <img src={imgMusic} alt="" />
                    <div className="text-start">
                      <p className="text-black font-extrabold text-base">Annual Plan</p>
                      <p className="text-Gray-600">$59.9/year</p>
                    </div>
                  </div>
                  <div>
                    <a href="#" className="text-base text-Blue-700 font-extrabold underline cursor-pointer hover:text-Blue-700/70 transition">Change</a>
                  </div>
                </div>
              </div>
              <div>
                <button className="bg-Blue-700 py-3 w-full rounded-xl shadow-lg shadow-Blue-700/40 text-white font-bold mb-5 cursor-pointer inline-block hover:bg-Blue-700/70 transition">Proceed to Payment</button>
                <button className="bg-white py-3 w-full rounded-xl text-Gray-600 font-bold cursor-pointer inline-block hover:text-black transition">Cancel Order</button>
              </div>
            </div>

          </div>
        </div>
      </section>
    </>
  )
}

export default App
