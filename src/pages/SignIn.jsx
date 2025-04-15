import React, { useState } from "react";
import Header from "../components/Header";
import { Link } from "react-router-dom";

export default function SignIn() {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div>
      <Header />

      <div
        className="bg-center bg-cover bg-no-repeat"
        style={{ backgroundImage: 'url("/logIn/bg-img.jpeg")' }}
      >
        <div class="max-[1000px]:p-[20px] max-[1000px]:flex-col max-[1000px]:gap-[50px] min-h-screen bg-[#000000b2] flex items-center justify-center gap-5 px-[5%] py-[25px]">
          <div class="flex-1 text-center max-w-[631px]">
            <h3 className="max-[1000px]:mb-[20px] max-[500px]:mb-[10px] max-[500px]:text-center max-[500px]:text-[30px]  max-[500px]:leading-9 font-semibold text-[44px] text-white text-start leading-[64px] mb-2.5">
              Redesign your{" "}
              <span class=" max-[500px]:text-[30px] font-semibold text-[44px] text-[#ffd56b] mb-[50px]">
                "Interiors"
              </span>
              <br />
              with Stackly in less than 25 seconds.
            </h3>
          </div>
          <div class="flex-1 max-[1000px]:w-full max-w-[522px] max-h-[459px] border flex flex-col gap-5 items-center justify-center bg-[#0000004d] p-5 rounded-[10px] border-solid border-[white]">
            <h3 className="font-semibold text-[26px] text-white">
              Welcome Back!
            </h3>
            <p className="font-medium text-base text-[#b0b0b0]">
              Log in and bring your dream space to life
            </p>

            <form className="flex flex-col gap-5 items-center justify-center w-full">
              <input
                className="max-w-[406px] w-full bg-[white] p-[15px] rounded-[5px] placeholder:text-base placeholder:font-normal placeholder:text-[#2a2a2a]"
                type="email"
                placeholder="Email"
                required
              />

              <div class="max-w-[406px] w-full bg-[white] flex items-center justify-center p-[15px] rounded-[5px]">
                <input
                  className="bg-white flex-1 placeholder:text-base placeholder:font-normal placeholder:text-[#2a2a2a]"
                  type={showPassword ? "text" : "password"}
                  id="password"
                  placeholder="Password"
                  required
                />
                <span
                  className="cursor-pointer"
                  onClick={() => {
                    setShowPassword((prev) => !prev);
                  }}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="25"
                    height="15"
                    viewBox="0 0 25 15"
                    fill="none"
                  >
                    <path
                      d="M24.0705 7.51211C21.3277 4.35156 17.5375 0.71875 12.5 0.71875C10.4656 0.71875 8.60078 1.29395 6.63301 2.52305C4.97402 3.56445 3.27266 5.02969 0.935547 7.43945L0.875 7.5L1.28066 7.91777C4.6168 11.3326 7.49883 14.2812 12.5 14.2812C14.71 14.2812 16.8533 13.5607 19.0512 12.0773C20.9221 10.8119 22.5145 9.20742 23.792 7.91172L24.125 7.57871L24.0705 7.51211ZM12.5 12.3438C9.82988 12.3438 7.65625 10.1701 7.65625 7.5C7.65625 4.82988 9.82988 2.65625 12.5 2.65625C15.1701 2.65625 17.3438 4.82988 17.3438 7.5C17.3438 10.1701 15.1701 12.3438 12.5 12.3438Z"
                      fill="#BEBCBC"
                    />
                    <path
                      d="M12.1609 5.73203C12.1609 5.31426 12.282 4.9207 12.4939 4.59375C10.8895 4.59375 9.59375 5.90156 9.59375 7.51211C9.59375 9.12266 10.8955 10.4244 12.4939 10.4244C14.0924 10.4244 15.4002 9.12266 15.4002 7.51211C15.0732 7.72402 14.6797 7.84512 14.2619 7.84512C13.1055 7.83906 12.1609 6.89453 12.1609 5.73203Z"
                      fill="#BEBCBC"
                    />
                  </svg>
                </span>
              </div>

              <p className="max-w-[406px] w-full text-base text-[#b0b0b0] font-normal text-end">
                <Link className="no-underline font-medium text-[#b0b0b0]" to="">
                  Forget Password?
                </Link>
              </p>
              <button
                type="submit"
                className="bg-[rgb(0,123,130)] text-base text-[white] cursor-pointer font-bold max-w-[406px] w-full p-[15px] rounded-[5px]"
              >
                Log In
              </button>
              <p class="text-base text-[#b0b0b0] font-normal">
                Don't have an account?{" "}
                <Link
                  className="no-underline font-medium text-white"
                  to="./index.html"
                >
                  Sign up
                </Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
