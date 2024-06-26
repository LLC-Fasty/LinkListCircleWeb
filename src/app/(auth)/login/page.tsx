import { login, signup } from './actions'

export default function LoginPage() {
  return (
    <div className="bg-[#9A3B3B] flex justify-center items-center h-screen">
    <form className="bg-[#E2C799] p-8 rounded-3xl border-8 border-[#F2ECBE] shadow-lg w-full max-w-sm">
        <div className="text-center px-4">
          <h1 className="text-[#9A3B3B] font-black pb-6 text-4xl ">LINKLISTCIRCLE</h1>
        </div>
      <div className="mb-6">
        <label htmlFor="email" className="block text-xl text-[#9A3B3B] font-bold mb-2">Email:</label>
        <input 
          id="email" 
          name="email" 
          type="email" 
          required 
          className="w-full px-3 py-2 border-[#9A3B3B] border-4 bg-[#F2ECBE] rounded-xl text-[#9A3B3B] text-xl focus:outline-none focus:border-[#C08261]"
        />
      </div>
      <div className="mb-6">
        <label htmlFor="password" className="block text-[#9A3B3B] text-xl font-bold mb-2">Password:</label>
        <input 
          id="password" 
          name="password" 
          type="password" 
          required 
          className="w-full px-3 py-2 border-[#9A3B3B] border-4 bg-[#F2ECBE] rounded-xl text-[#9A3B3B] text-xlfocus:outline-none focus:border-[#C08261]"
        />
      </div>
      <div className="flex justify-between">
        <button 
          type="submit" 
          formAction={login} 
          className="bg-[#9A3B3B] text-white font-bold px-6 py-4 text-xl rounded-full hover:bg-[#9A3B3B] focus:outline-none focus:bg-[#9A3B3B]"
        >
          Log in
        </button>
        <button 
          type="submit" 
          formAction={signup} 
          className="bg-[#9A3B3B] text-white font-bold py-4 text-xl px-6 rounded-full hover:bg-[#9A3B3B] focus:outline-none focus:bg-[#9A3B3B]"
        >
          Sign up
        </button>
      </div>
    </form>
  </div>
  )
}