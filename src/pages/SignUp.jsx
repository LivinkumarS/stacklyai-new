import React, { useRef, useState } from "react";
import Header from "../components/header";
import { Link } from "react-router-dom";

export default function SignUp() {
  const [showPassword, setShowPassword] = useState(false);
  const couponRef = useRef(0);

  return (
    <div>
      <Header />
      <div
        className="bg-center bg-cover bg-no-repeat"
        style={{ backgroundImage: "url('/signUp/bg-img.jpeg')" }}
      >
        <div className="max-[1000px]:p-5 max-[1000px]:flex-col max-[1000px]:gap-[50px] min-h-screen bg-[#000000b2] flex items-center justify-center gap-5 px-[5%] py-[25px]">
          <div className="flex-1 text-center">
            <h3 className="max-[500px]:mb-[10px] max-[1000px]:mb-0 font-semibold text-2xl text-white mb-2.5">
              Get Your Personal AI
            </h3>
            <h1 className="max-[500px]:text-[60px] max-[500px]:mb-0 max-[1000px]:mb-[20px] font-medium text-[100px] text-[#ffd56b] mb-[50px]">
              Interiors
            </h1>
            <p className="max-[500px]:mb-0 max-[1000px]:mb-[20px] font-medium text-xl text-white max-w-[522px] mx-auto my-[50px]">
              you'll unlock endless possibilities to remaining & Transform Any
              home using AI.
            </p>
            <button
              onClick={() => {
                couponRef.current.value = "STACKLYAI";
              }}
              className="border cursor-pointer font-medium text-base text-white bg-[#0000004d] mt-[50px] px-5 py-2.5 rounded-[5px] border-solid border-[white]"
            >
              APPLY COUPON : <span className="font-bold">STACKLYAI</span>
            </button>
          </div>
          <div className="max-[1000px]:w-full flex-1 max-w-[522px] border flex flex-col gap-5 items-center justify-center bg-[#0000004d] p-5 rounded-[10px] border-solid border-[white]">
            <h3 className="font-semibold text-[26px] text-white">
              Create an Account
            </h3>
            <p className="font-medium text-base text-[#b0b0b0]">sign up with</p>
            <div className="flex items-center justify-around gap-2.5 w-full">
              <a href="#">
                <button className="w-20 h-11 bg-white rounded cursor-pointer shadow-[2px_2px_5px_#00000014] p-2.5 flex items-center justify-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                  >
                    <g clipPath="url(#clip0_36_40)">
                      <path
                        d="M8.36055 0.789371C5.96258 1.62125 3.89457 3.20018 2.46029 5.29425C1.026 7.38832 0.301037 9.88714 0.391883 12.4237C0.482728 14.9602 1.38459 17.4008 2.96501 19.3869C4.54543 21.373 6.72109 22.7999 9.17243 23.4581C11.1598 23.9709 13.2419 23.9934 15.2399 23.5237C17.0499 23.1172 18.7233 22.2476 20.0962 21C21.5251 19.6619 22.5622 17.9596 23.0962 16.0762C23.6765 14.0281 23.7798 11.8742 23.3981 9.78H12.2381V14.4094H18.7012C18.572 15.1477 18.2952 15.8524 17.8873 16.4813C17.4795 17.1102 16.9489 17.6503 16.3274 18.0694C15.5382 18.5914 14.6485 18.9427 13.7156 19.1006C12.7798 19.2746 11.82 19.2746 10.8843 19.1006C9.93591 18.9045 9.03874 18.5131 8.24993 17.9512C6.98271 17.0542 6.0312 15.7799 5.53118 14.31C5.02271 12.8126 5.02271 11.1893 5.53118 9.69187C5.8871 8.64228 6.47549 7.68663 7.25243 6.89625C8.14154 5.97515 9.26718 5.31674 10.5058 4.99326C11.7445 4.66979 13.0484 4.69374 14.2743 5.0625C15.232 5.35648 16.1078 5.87013 16.8318 6.5625C17.5606 5.8375 18.2881 5.11062 19.0143 4.38187C19.3893 3.99 19.7981 3.61687 20.1674 3.21562C19.0622 2.18714 17.765 1.38685 16.3499 0.860622C13.7731 -0.0750226 10.9536 -0.100167 8.36055 0.789371Z"
                        fill="white"
                      />
                      <path
                        d="M8.3607 0.789367C10.9536 -0.100776 13.7731 -0.0762934 16.3501 0.858742C17.7654 1.38855 19.062 2.19269 20.1657 3.22499C19.7907 3.62624 19.3951 4.00124 19.0126 4.39124C18.2851 5.11749 17.5582 5.84124 16.832 6.56249C16.1079 5.87012 15.2321 5.35648 14.2745 5.06249C13.0489 4.69244 11.7451 4.66711 10.5061 4.98926C9.26712 5.31141 8.14079 5.96861 7.2507 6.88874C6.47377 7.67912 5.88538 8.63477 5.52945 9.68437L1.64258 6.67499C3.03384 3.91604 5.44273 1.80566 8.3607 0.789367Z"
                        fill="#E33629"
                      />
                      <path
                        d="M0.611157 9.65624C0.820072 8.62085 1.16691 7.61816 1.64241 6.67499L5.52928 9.69186C5.02081 11.1892 5.02081 12.8126 5.52928 14.31C4.23428 15.31 2.93866 16.315 1.64241 17.325C0.452064 14.9556 0.0890305 12.2559 0.611157 9.65624Z"
                        fill="#F8BD00"
                      />
                      <path
                        d="M12.2381 9.77814H23.3981C23.7799 11.8724 23.6766 14.0263 23.0963 16.0744C22.5623 17.9578 21.5252 19.66 20.0963 20.9981C18.8419 20.0194 17.5819 19.0481 16.3275 18.0694C16.9494 17.6499 17.4802 17.1092 17.8881 16.4796C18.296 15.8501 18.5726 15.1447 18.7013 14.4056H12.2381C12.2363 12.8644 12.2381 11.3213 12.2381 9.77814Z"
                        fill="#587DBD"
                      />
                      <path
                        d="M1.64062 17.325C2.93687 16.325 4.2325 15.32 5.5275 14.31C6.02851 15.7804 6.98138 17.0548 8.25 17.9512C9.04127 18.5105 9.94037 18.8987 10.89 19.0912C11.8257 19.2652 12.7855 19.2652 13.7213 19.0912C14.6542 18.9333 15.5439 18.5821 16.3331 18.06C17.5875 19.0387 18.8475 20.01 20.1019 20.9887C18.7292 22.237 17.0558 23.1073 15.2456 23.5144C13.2476 23.9841 11.1655 23.9616 9.17813 23.4487C7.60632 23.0291 6.13814 22.2892 4.86563 21.2756C3.51874 20.2063 2.41867 18.8587 1.64062 17.325Z"
                        fill="#319F43"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_36_40">
                        <rect width="24" height="24" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                </button>
              </a>
              <a href="#">
                <button className="w-20 h-11 bg-white rounded cursor-pointer shadow-[2px_2px_5px_#00000014] p-2.5 flex items-center justify-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                  >
                    <path
                      d="M18.7026 12.7535C18.6719 9.71361 21.2398 8.25549 21.354 8.18348C19.911 6.11931 17.6636 5.83729 16.8629 5.80488C14.9508 5.61527 13.1308 6.90538 12.1594 6.90538C11.1916 6.90538 9.69339 5.83249 8.1067 5.86129C6.02388 5.89129 4.10193 7.04459 3.02858 8.86874C0.862246 12.541 2.47349 17.9835 4.58456 20.9621C5.61615 22.4203 6.84669 24.0584 8.46162 23.9984C10.0164 23.9384 10.6046 23.0155 12.4848 23.0155C14.365 23.0155 14.8943 23.9996 16.5399 23.9696C18.2138 23.9384 19.2737 22.4827 20.2979 21.021C21.483 19.3288 21.9705 17.6907 22 17.6067C21.9632 17.5911 18.7358 16.3826 18.7038 12.7523L18.7026 12.7535ZM15.6103 3.83312C16.4675 2.81663 17.0459 1.40652 16.8875 0C15.6533 0.048004 14.1562 0.804067 13.2708 1.81815C12.4762 2.71823 11.7799 4.15235 11.9666 5.53126C13.3445 5.63687 14.7519 4.8472 15.6103 3.83312Z"
                      fill="black"
                    />
                  </svg>
                </button>
              </a>
              <a href="#">
                <button className="w-20 h-11 bg-white rounded cursor-pointer shadow-[2px_2px_5px_#00000014] p-2.5 flex items-center justify-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                  >
                    <g clipPath="url(#clip0_36_50)">
                      <mask
                        id="mask0_36_50"
                        maskUnits="userSpaceOnUse"
                        x="0"
                        y="0"
                        width="24"
                        height="24"
                      >
                        <path d="M0 0H24V24H0V0Z" fill="white" />
                      </mask>
                      <g mask="url(#mask0_36_50)">
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M0 12.067C0 18.034 4.333 22.994 10 24V15.333H7V12H10V9.333C10 6.333 11.933 4.667 14.667 4.667C15.533 4.667 16.467 4.8 17.333 4.933V8H15.8C14.333 8 14 8.733 14 9.667V12H17.2L16.667 15.333H14V24C19.667 22.994 24 18.034 24 12.067C24 5.43 18.6 0 12 0C5.4 0 0 5.43 0 12.067Z"
                          fill="#1877F2"
                        />
                      </g>
                    </g>
                    <defs>
                      <clipPath id="clip0_36_50">
                        <rect width="24" height="24" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                </button>
              </a>
            </div>
            <p className="font-medium text-base text-[#b0b0b0]">or</p>
            <form className="flex flex-col gap-5 items-center justify-center w-full">
              <input
                className="placeholder:text-base placeholder:font-normal placeholder:text-[#2a2a2a] max-w-[406px] w-full bg-[white] p-[15px] rounded-[5px]"
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

              <div className="max-w-[406px] w-full bg-[white] flex items-center justify-center p-[15px] rounded-[5px]">
                <input
                  className="placeholder:text-base placeholder:font-normal placeholder:text-[#2a2a2a] flex-1 bg-white"
                  type="text"
                  placeholder="Coupon Code "
                  id="coupon"
                  ref={couponRef}
                />
                <span
                  id="apply_btn"
                  onclick="applyCoupon()"
                  className="cursor-pointer font-medium text-base text-[#007b82]"
                >
                  Apply
                </span>
              </div>

              <button
                type="submit"
                className="bg-[rgb(0,123,130)] text-base text-[white] cursor-pointer font-bold max-w-[406px] w-full p-[15px] rounded-[5px]"
              >
                Sign Up
              </button>
              <p className="text-base text-[#b0b0b0] font-normal">
                Already have an account?{" "}
                <Link
                  to="./logIn.html"
                  className="no-underline font-medium text-white"
                >
                  Log In
                </Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
