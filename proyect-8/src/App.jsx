import imgHeader from "./assets/image-header-mobile.jpg"

function App() {

  return (
    <>
      <section className="w-full min-h-screen flex items-center justify-center p-5 bg-Navy-950">
        <div className="flex flex-col justify-center items-center lg:items-stretch lg:flex-row-reverse  w-full h-full lg:w-9/12 rounded-xl overflow-hidden">
          <div className="grow w-[350px] lg:w-[450px] relative after:content-[''] after:w-full after:h-full after:absolute after:top-0 after:left-0 after:bg-Purple-500/60">
            <img src={imgHeader} className="w-full h-full object-cover object-center relative" alt="" />
          </div>
          <div className="grow w-[350px] lg:w-[450px] bg-Blue-950 p-9 lg:p-16 lg:flex lg:items-start lg:justify-center flex-col">
            <h1 className="text-white font-inter text-center text-3xl lg:text-start lg:text-4xl text-balance mb-5 font-bold">Get <span className="text-Purple-500">insights</span> that help your business grow.</h1>
            <p className="font-inter font-light text-WhiteParagrapth text-center lg:text-start text-base">Discover the benefits of data analytics and make better decisions regardingrevenue,  customer experience, and averall, efficiency.</p>
            <div className="flex flex-col lg:flex-row gap-10 md:gap-14 items-center justify-center pt-10 lg:pt-14">
              <div className="w-full text-center lg:text-start">
                <h2 className="font-bold text-white font-inter text-2xl mb-2">10K+</h2>
                <p className="uppercase font-light font-lexend text-xs text-whitHeadings">Companies</p>
              </div>
              <div className="w-full text-center lg:text-start">
                <h2 className="font-bold text-white font-inter text-2xl mb-2">314</h2>
                <p className="uppercase font-light font-lexend text-xs text-whitHeadings">Templates</p>
              </div>
              <div className="w-full text-center lg:text-start">
                <h2 className="font-bold text-white text-2xl font-inter mb-2">12M+</h2>
                <p className="uppercase font-light font-lexend text-xs text-whitHeadings">QUERIES</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )

}

export default App
