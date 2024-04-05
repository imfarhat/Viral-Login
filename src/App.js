import React from "react";
import images from "./images"; // Importing the object of image paths
import { useState, useRef } from "react";
const App = () => {
  const [inputValue, setInputValue] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [inputFocus, setInputFocus] = useState(false);
  const [passwordFocus, setPasswordFocus] = useState(false);
  const passwordInputRef = useRef("");
  // console.log(inputValue.length);
  return (
    <>
      <main className="bg-[#f3fafd] p-8 min-h-[calc(100vh-56px)] w-full h-full flex flex-col gap-6 items-center justify-center">
        <div className="flex items-center justify-center flex-col">
          <h1 className="font-semibold">
            Re-creating animated Snow Monkey login page
          </h1>
          <h3>
            <em>with</em>
            &nbsp; &nbsp;
            <strong>React JS</strong> & <strong>Tailwind CSS</strong>
          </h3>
        </div>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            setInputValue("");
            setPassword("");
            e.target.reset();
          }}
          className="w-[25rem] bg-white rounded-md shadow p-4 flex flex-col items-center justify-center gap-0 transition-all md:duration-500 ease-out"
        >
          <div className="pt-8 transition-all md:duration-500 ease-out">
            <img
              src={
                inputFocus
                  ? inputValue.length <= 21
                    ? images[`length${inputValue.length}`]
                    : images.length21
                  : passwordFocus
                  ? showPassword
                    ? images.text
                    : images.password
                  : images.noFocus
              }
              alt="Snow Monkey"
            />
          </div>
          <div className="group relative w-full p-4 text-2xl transition md:duration-500 ease-out">
            <label htmlFor="email" className="font-bold text-xl text-[#217093]">
              Email
            </label>
            <input
              type="email"
              name="email"
              id="email"
              onChange={(e) => setInputValue(e.target.value)}
              value={inputValue}
              onFocus={() => setInputFocus(true)}
              onBlur={() => setInputFocus(false)}
              className="w-full px-4 pt-6 pb-2 border-2 outline-2 focus:outline-[#aadef2] border-[#237191] rounded transition md:duration-500 ease-out font-semibold text-[#aadef2]"
            />
            <label
              htmlFor="email"
              className={`absolute bottom-9 left-8 opacity-75 group-has-[input:focus]:bottom-[3.75rem] text-[#237191] group-has-[input:focus]:text-base group-has-[input:focus]:opacity-100 transition md:duration-500 ease-out select-none ${
                inputValue ? "bottom-[3.75rem] text-base" : ""
              }`}
            >
              example@email.com
            </label>
          </div>

          <div className="w-full p-4 text-2xl transition md:duration-500 ease-out">
            <label
              htmlFor="pass"
              className="font-bold text-xl flex items-center justify-between text-[#217093]"
            >
              <span>Password</span>
              <div className="text-base flex">
                <input
                  type="checkbox"
                  name="showpass"
                  id="showpass"
                  className="cursor-pointer"
                  onChange={(e) => {
                    setShowPassword(e.target.checked);
                    passwordInputRef.current.focus();
                  }}
                />
                <label
                  htmlFor="showpass"
                  className="cursor-pointer select-none pl-1"
                >
                  Show
                </label>
              </div>
            </label>
            <input
              type={showPassword ? "text" : "password"}
              name="pass"
              id="pass"
              ref={passwordInputRef}
              onChange={(e) => setPassword(e.target.value)}
              value={password}
              onFocus={() => setPasswordFocus(true)}
              onBlur={() => setPasswordFocus(false)}
              className="w-full p-4 border-2 outline-2 focus:outline-[#aadef2] border-[#237191] rounded transition md:duration-500 ease-out font-semibold text-black"
            />
          </div>

          <div className="w-full p-4">
            <button
              type="submit"
              className="bg-[#4eb8dd] hover:bg-[#237191] p-4 w-full font-semibold text-2xl text-white rounded transition md:duration-500 ease-out"
            >
              Log in
            </button>
          </div>
        </form>
      </main>

      <section className="px-2 py-4 md:px-4 flex items-center justify-between gap-2.5 text-[#16181d] w-full text-xs md:text-base">
        <a
          className="flex gap-1 md:gap-1.5"
          href="https://farhat.vercel.app"
          target="_blank"
        >
          <span>©</span> <span>2024</span>
          <span>I. Farhat</span>
        </a>
        <a
          rel="noopener noreferrer"
          href="https://farhateservices.pages.dev"
          target="_blank"
        >
          <span className="flex flex-row gap-1 md:gap-1.5 items-center justify-center">
            Powered by
            <img
              src="https://farhateservices.pages.dev/logo-head-black.png"
              alt="Farhat e Services &amp; Assistance"
              loading="lazy"
              className="h-5 filter bg-blend-multiply"
            />
            Farhat e Services &amp; Assistance
          </span>
        </a>
      </section>
    </>
  );
};

export default App;
