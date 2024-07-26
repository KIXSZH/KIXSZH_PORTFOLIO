"use client";
import { useState } from 'react';
import { TbMailForward } from "react-icons/tb";

function ContactWithoutCaptcha() {
  const [userInput, setUserInput] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [error, setError] = useState('');

  const handleMailTo = () => {
    const { name, email, message } = userInput;
    if (!name || !email || !message) {
      setError('All fields are required.');
      return '';
    }
    setError('');
    
    // Encoding URI components to handle special characters
    const subject = encodeURIComponent(`Message from ${name}`);
    const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\nMessage: ${message}`);
    return `mailto:kishorekumar150404@gmail.com?subject=${subject}&body=${body}`;
  };

  const handleClick = (e) => {
    const mailToLink = handleMailTo();
    if (!mailToLink) {
      e.preventDefault();
    } else {
      // Open mailto link in a new tab if needed or set it directly
      window.location.href = mailToLink;
      e.preventDefault();
    }
  };

  return (
    <div className="">
      <p className="font-medium mb-5 text-[#16f2b3] text-2xl font-roboto-mono uppercase">
        Contact with me
      </p>
      <div className="max-w-3xl text-white rounded-lg border border-[#464c6a] p-3 lg:p-5">
        <div className="mt-6 flex flex-col gap-4">
          <div className="flex flex-col gap-2">
            <label className="text-xl font-roboto-mono">Your Name: </label>
            <input
              className="bg-[#10172d] w-full border rounded-md border-[#353a52] focus:border-[#16f2b3] ring-0 outline-0 transition-all duration-300 px-3 py-2"
              type="text"
              maxLength="100"
              required
              onChange={(e) => setUserInput({ ...userInput, name: e.target.value })}
              value={userInput.name}
            />
          </div>

          <div className="flex flex-col gap-2">
            <label className="text-xl font-roboto-mono">Your Email: </label>
            <input
              className="bg-[#10172d] w-full border rounded-md border-[#353a52] focus:border-[#16f2b3] ring-0 outline-0 transition-all duration-300 px-3 py-2"
              type="email"
              maxLength="100"
              required
              value={userInput.email}
              onChange={(e) => setUserInput({ ...userInput, email: e.target.value })}
            />
          </div>

          <div className="flex flex-col gap-2">
            <label className="text-xl font-roboto-mono">Your Message: </label>
            <textarea
              className="bg-[#10172d] w-full border rounded-md border-[#353a52] focus:border-[#16f2b3] ring-0 outline-0 transition-all duration-300 px-3 py-2"
              maxLength="500"
              name="message"
              required
              onChange={(e) => setUserInput({ ...userInput, message: e.target.value })}
              rows="4"
              value={userInput.message}
            />
          </div>
          <div className="flex flex-col items-center gap-2">
            {error && <p className="text-sm text-red-400">{error}</p>}
            <a
              href="#"
              className="flex items-center gap-1 hover:gap-3 rounded-full bg-gradient-to-r from-pink-500 to-violet-600 px-5 md:px-8 py-3 md:py-4 text-center md:text-base font-medium font-roboto-mono tracking-wider text-white no-underline transition-all duration-200 ease-out hover:text-white hover:no-underline md:font-semibold"
              role="button"
              onClick={handleClick}
            >
              <span className='font-roboto-mono'>Send Message</span>
              <TbMailForward className="mt-1" size={18} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactWithoutCaptcha;
