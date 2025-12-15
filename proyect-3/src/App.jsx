import imgSearch from "./assets/icon-supervisor.svg"
import imBuilder from "./assets/icon-team-builder.svg"
import imgKarma from "./assets/icon-karma.svg"
import imgCalculator from "./assets/icon-calculator.svg"

function App() {

  return (
    <>
      <section>
        <div className="w-full min-h-screen flex items-center justify-center flex-col p-5 ">
          <div className="w-full md:w-[600px]">
            <h1 className="text-center text-Grey-400 font-light text-2xl">Reliable, efficient delivery</h1>
            <h2 className="text-center text-Grey-500 font-bold text-2xl mb-5">Powered by Technology</h2>
            <p className="text-center text-Grey-400 mb-10 text-pretty xl:mb-16">Our Artificial intelligence powered tools use milions of project data points to ensure that your project is successful</p>
          </div>
          <div className="relative w-full md:w-[600px] flex flex-col justify-center items-center">
            <div className="w-full h-auto md:w-[400px] shadow-xl border-t-5 border-t-Cyan-500 border border-neutral-200 rounded-lg p-5 mb-5 xl:absolute xl:-left-[55%]">
              <h3 className="font-semibold text-xl text-Grey-500 mb-2 top">Supervisor</h3>
              <p className="text-Grey-400 text-xs">Monitors activity to identify project roadblocks</p>
              <div className="flex justify-end p-5">
                <img src={imgSearch} alt="" className="size-16 object-cover" />
              </div>
            </div>

            <div className="w-full h-auto md:w-[400px] shadow-xl border-t-5 border-t-Red-500 border border-neutral-200 rounded-lg p-5 mb-5">
              <h3 className="font-semibold text-xl text-Grey-500 mb-2 ">Team Builder</h3>
              <p className="text-Grey-400 text-xs">Scans our talent networkto create the optimal team four you project</p>
              <div className="flex justify-end p-5">
                <img src={imBuilder} alt="" className="size-16 object-cover" />
              </div>
            </div>

            <div className="w-full h-auto md:w-[400px] shadow-xl border-t-5 border-t-Orange-500 border border-neutral-200 rounded-lg p-5 mb-5">
              <h3 className="font-semibold text-xl text-Grey-500 mb-2 ">Karma</h3>
              <p className="text-Grey-400 text-xs">Regularty evaluates our talent to ensure quality</p>
              <div className="flex justify-end p-5">
                <img src={imgKarma} alt="" className="size-16 object-cover" />
              </div>
            </div>

            <div className="w-full h-auto md:w-[400px] shadow-xl border-t-5 border-t-Blue-500 border border-neutral-200 rounded-lg p-5 mb-5 xl:absolute xl:-right-[55%]">
              <h3 className="font-semibold text-xl text-Grey-500 mb-2 ">Calculator</h3>
              <p className="text-Grey-400 text-xs">Uses data from past projects to provide betther delivery estimates</p>
              <div className="flex justify-end p-5">
                <img src={imgCalculator} alt="" className="size-16 object-cover" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default App
