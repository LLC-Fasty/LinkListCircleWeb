"use client";
import { useState } from 'react';
import { supabase } from '../../../utils/supabaseClient';

export default function Submit() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [responseMessage, setResponseMessage] = useState('');

  const handleSubmit = async (e:any) => {
    e.preventDefault();

    const { data, error } = await supabase
      .from('detail')
      .insert([{ name, email, message }]);

    if (error) {
      console.error(error);
      setResponseMessage(`Error sending data: ${error.message}`);
    } else {
      setResponseMessage('We Have Recieved Your Response!');
      setName('');
      setEmail('');
      setMessage('');
    }
  };

  return (
    <div id="contact" className="flex justify-center items-center min-h-screen p-4">
      <form onSubmit={handleSubmit} className="bg-[#9A3B3B] p-6 lg:p-[100px] lg:m-[250px] rounded-[50px] shadow-md w-full max-w-2xl">
        <h2 className="text-3xl md:text-[48px] md:leading-[52px] mb-6 text-[#F2ECBE] font-black text-center">Contact Us</h2>
        <div className="mb-4 md:mb-8">
          <label className="block text-[#E2C799] text-lg md:text-[24px] leading-[26px] font-semibold tracking-wider mb-2" htmlFor="name">
            Name
          </label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full px-3 py-2 border-4 border-[#F2ECBE] bg-[#C08261] text-[#F2ECBE] text-base md:text-[20px] leading-[24px] rounded-[10px]"
            required
          />
        </div>
        <div className="mb-4 md:mb-8">
          <label className="block text-[#E2C799] text-lg md:text-[24px] leading-[26px] font-semibold tracking-wider mb-2" htmlFor="email">
            Email
          </label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full px-3 py-2 border-4 border-[#F2ECBE] bg-[#C08261] text-[#F2ECBE] text-base md:text-[20px] leading-[24px] rounded-[10px]"
            required
          />
        </div>
        <div className="mb-4 md:mb-8">
          <label className="block text-[#E2C799] text-lg md:text-[24px] leading-[26px] font-semibold tracking-wider mb-2" htmlFor="message">
            Message
          </label>
          <textarea
            id="message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className="w-full px-3 py-2 border-4 border-[#F2ECBE] bg-[#C08261] text-[#F2ECBE] text-base md:text-[20px] leading-[24px] rounded-[10px]"
            required
          />
        </div>
        <div className="flex justify-center">
          <button type="submit" className="w-full md:w-[250px] bg-[#C08261] text-[#F2ECBE] text-lg md:text-[24px] font-semibold tracking-widest border-4 border-[#F2ECBE] hover:bg-[#F2ECBE] hover:text-[#C08261] hover:border-[#C08261] px-3 py-2 rounded-full">
            Submit
          </button>
        </div>
        {responseMessage && <p className="mt-4 text-center text-[#F2ECBE] text-sm md:text-[16px] font-medium">{responseMessage}</p>}
      </form>
    </div>
  );
}
