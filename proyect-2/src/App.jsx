import { useForm } from "react-hook-form"
import logo from "./assets/logo.svg"
import heroMovile from "./assets/hero-mobile.jpg"
import heroDesktop from "./assets/hero-desktop.jpg"
import iconError from "./assets/icon-error.svg"
import { ToastContainer, toast } from 'react-toastify';

function App() {

  const { register, formState: { errors }, handleSubmit } = useForm()

  const onSubmit = (data) => {
    toast.success("Email added successfully");
    console.log(data);
  }
  return (
    <>
      <ToastContainer />
      <section className="w-full min-h-screen">
        <div className="flex flex-col md:flex-row justify-between">
          <div className="w-full h-screen flex flex-col md:justify-center md:items-center">
            <div class="w-full md:w-[530px] relative">
              <div className="w-full bg-white">
                <img src={logo} alt="" height="auto" className="w-[200px] md:w-[220px] h-auto p-10 block md:absolute top-5" />
              </div>
              <div className="block md:hidden">
                <img src={heroMovile} alt="" className="w-full h-full object-cover" />
              </div>
              <div className="w-full min-h-screen p-10 md:flex md:items-center md:justify-center md:flex-col mt-10 md:mt-0">
                <h1 className="text-center md:text-start"><span className="text-4xl tracking-widest font-light text-pink-400 uppercase md:text-7xl">WE'RE</span> <span className="text-4xl md:text-start text-black uppercase font-medium tracking-widest mb-5 inline-block md:text-7xl" s>Coming Soon</span></h1>
                <p className="text-center md:text-start text-pink-400 mb-10">Hello fellow shoppers! We're currently building our new fashion store. Add your email below to stay up-to-date with announcements and our launch deals.</p>
                <div className="w-full relative">
                  <form action="" onSubmit={handleSubmit(onSubmit)}>
                    <input type="text" {...register("email", {
                      required: true,
                      pattern: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
                    })} placeholder="Email Address" className={`border-2 rounded-full py-4 px-5 outline-0 focus:border-pink-400 w-full ${errors.email?.type ? "border-red-500 focus:border-red-400" : "text-pink-400 border-pink-400 "}`} />
                    <button type="submit" className="bg-pink-400  outline-0 cursor-pointer shadow-xl py-4 px-8 rounded-full absolute top-0.5 right-0">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#fff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-chevron-right"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M9 6l6 6l-6 6" /></svg>
                    </button>
                    {errors.email?.type && <p className="px-3 py-2 text-xs text-red-500">Please provide a valid email</p>}
                    {errors.email?.type && <img decoding="async" className="absolute top-[32%] right-0 mr-28 transform translate-x-1/2 -translate-y-1/2" src={iconError} />}
                  </form>
                </div>
              </div>
            </div>
          </div>
          <div>
            <img src={heroDesktop} alt="" className="w-5xl min-h-screen object-cover" />
          </div>
        </div>
      </section >
    </>
  )
}

export default App