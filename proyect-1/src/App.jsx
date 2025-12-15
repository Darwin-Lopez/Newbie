import { useForm } from "react-hook-form";
import { ToastContainer, toast } from 'react-toastify';
import imgError from "./assets/icon-error.svg"

function App() {
  const { register, formState: { errors }, handleSubmit } = useForm()

  const onSubmit = (data) => {
    toast.success("¡Todo está correcto, datos enviados!");
    console.log(data);
  };

  return (
    <>
      <section className="min-h-screen flex items-center justify-center bg-[url('/src/assets/bg-intro-desktop.png')] bg-red-500/70">
        <ToastContainer />
        <div className="w-[1400px] p-5 container mx-auto flex flex-col md:flex-row items-center justify-center gap-10">
          <div className="grow w-full px-5 md:px-0 text-center">
            <h1 className="text-2xl lg:text-5xl lg:text-start font-bold text-center text-white text-balance mb-5">Learn to code by watching others</h1>
            <p className="text-center lg:text-start text-white text-lg font-light">See how experenced developers solve problems in real-time. Watching scripted tutorials is great. but undestanding how developers think is invaluable.</p>
          </div>
          <div className="grow w-full md:px-0 text-center">
            <button className="w-full p-5 bg-purple-700 text-white shadow-2xl cursor-pointer rounded-xl text-balance mb-10"><span className="font-semibold">Try it free 7 days</span> <span className="text-white font-light">then $20/mo. thereafter</span></button>
            <div className="bg-white p-5 rounded-xl shadow-xl">
              <form action="#" onSubmit={handleSubmit(onSubmit)}>
                <div className={`w-full relative ${errors.fullname?.type === "required" ? " " : "mb-5"}`}>
                  <input type="text" {...register("fullname", {
                    required: true
                  })} className={`w-full border-2 ${errors.fullname?.type === "required" ? "border-red-400 focus:border-red-500" : "border-gray-300 focus:border-purple-700"}  outline-none font-bold rounded-lg p-5`} placeholder={`${errors.fullname?.type === "required" ? " " : "First Name"}`} />
                  <img src={imgError} alt="" className={`${errors.fullname?.type === "required" ? "block absolute top-1/2 left-[90%] transform -translate-x-1/2 -translate-y-1/2" : "hidden"}`} />
                </div>
                {errors.fullname?.type === "required" && <p className="p-2 italic text-red-400 text-end mb-2 text-xs">First name cannot be empty</p>}
                <div className={`w-full relative ${errors.lastname?.type === "required" ? " " : "mb-5"}`}>
                  <input type="text" {...register("lastname", {
                    required: true
                  })} className={`w-full border-2 ${errors.lastname?.type === "required" ? "border-red-400 focus:border-red-500" : "border-gray-300 focus:border-purple-700"}  outline-none font-bold rounded-lg p-5`} placeholder={`${errors.lastname?.type === "required" ? " " : "Last Name"}`} />
                  <img src={imgError} alt="" className={`${errors.lastname?.type === "required" ? "block absolute top-1/2 left-[90%] transform -translate-x-1/2 -translate-y-1/2" : "hidden"}`} />
                </div>
                {errors.lastname?.type === "required" && <p className="p-2 italic text-red-400 text-end mb-2 text-xs">Last name cannot be empty</p>}
                <div className={`w-full relative ${errors.adress?.type === "required" || errors.adress?.type === "pattern" ? " " : "mb-5"}`}>
                  <input type="email"  {...register("adress", {
                    required: true,
                    pattern: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
                  })} placeholder={`${errors.password?.type === "required" ? "name@example.com" : "Email Address"}`} className={`w-full border-2 ${errors.adress?.type === "pattern" || errors.adress?.type === "required" ? "border-red-400 focus:border-red-500 text-red-400" : "border-gray-300 focus:border-purple-700"}  outline-none font-bold rounded-lg p-5`} />
                  <img src={imgError} alt="" className={`${errors.adress?.type === "required" ? "block absolute top-1/2 left-[90%] transform -translate-x-1/2 -translate-y-1/2" : "hidden"}`} />
                </div>
                {errors.adress?.type === "pattern" && <p className="p-2 italic text-red-400 text-end mb-2 text-xs">Looks like this is not an email</p>}
                {errors.adress?.type === "required" && <p className="p-2 italic text-red-400 text-end mb-2 text-xs">Email Address cannot be empty</p>}
                <div className={`w-full relative ${errors.password?.type === "required" ? " " : "mb-5"}`}>
                  <input type="password" {...register("password", {
                    required: true
                  })} className={`w-full border-2 ${errors.password?.type === "required" ? "border-red-400 focus:border-red-500" : "border-gray-300 focus:border-purple-700"}  outline-none font-bold rounded-lg p-5`} placeholder={`${errors.password?.type === "required" ? " " : "Password"}`} />
                  <img src={imgError} alt="" className={`${errors.password?.type === "required" ? "block absolute top-1/2 left-[90%] transform -translate-x-1/2 -translate-y-1/2" : "hidden"}`} />
                </div>
                {errors.password?.type === "required" && <p className="p-2 italic text-red-400 text-end mb-2 text-xs">Password cannot be empty</p>}
                <button type="submit" className="w-full bg-green-400/90 hover:bg-green-500 transition cursor-pointer shadow-lg rounded-lg p-4 tracking-wider uppercase text-white font-medium text-lg">Claim your free trial</button>
                <p className="mt-5 text-xs text-gray-400 text-balance">By clicking the button, you are agreeing to our <span className="font-semibold text-red-400 cursor-pointer">Terms and Services</span></p>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default App
