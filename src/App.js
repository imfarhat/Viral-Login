import React from "react";
import images from "./images"; // Importing the object of image paths
const {
  length0,
  length1,
  length2,
  length3,
  length4,
  length5,
  length6,
  length7,
  length8,
  length9,
  length10,
  length11,
  length12,
  length13,
  length14,
  length15,
  length16,
  length17,
  length18,
  length19,
  length20,
  length21,
  noFocus,
  text,
  password,
} = images; // Destructuring to access all images
const App = () => {
  return (
    <main className="bg-[#f3fafd] p-8 min-h-screen w-full h-full flex items-center justify-center">
      <form className="w-[25rem] bg-white rounded-md shadow p-4 flex flex-col items-center justify-center gap-0">
        <div className="pt-8">
          <img src={noFocus} alt={noFocus} />
        </div>
        <div className="group relative w-full p-4 text-2xl transition md:duration-200 ease-in">
          <label htmlFor="email" className="font-bold text-xl text-[#217093]">
            Email
          </label>
          <input
            type="email"
            name="email"
            id="email"
            className="w-full px-4 pt-6 pb-2 border-2 outline-2 focus:outline-[#aadef2] border-[#237191] rounded transition md:duration-200 ease-in font-semibold text-[#aadef2]"
          />
          <label
            htmlFor="email"
            className="absolute bottom-9 left-8 group-has-[input:focus]:bottom-[3.75rem]  text-[#237191] group-has-[input:focus]:text-base transition md:duration-200 ease-in select-none"
          >
            example@email.com
          </label>
        </div>

        <div className="w-full p-4 text-2xl transition md:duration-200 ease-in">
          <label
            htmlFor="pass"
            className="font-bold text-xl flex items-center justify-between text-[#217093]"
          >
            <span>Password</span>{" "}
            <span className="text-base">
              <input type="checkbox" name="" id="" /> Show
            </span>
          </label>
          <input
            type="password"
            name="pass"
            id="pass"
            className="w-full p-4 border-2 outline-2 focus:outline-[#aadef2] border-[#237191] rounded transition md:duration-200 ease-in font-semibold text-black"
          />
        </div>

        <div className="w-full p-4">
          <button
            type="submit"
            className="bg-[#4eb8dd] hover:bg-[#237191] p-4 w-full font-semibold text-2xl text-white rounded transition md:duration-200 ease-in"
          >
            Log in
          </button>
        </div>
      </form>
    </main>
  );
};

export default App;
