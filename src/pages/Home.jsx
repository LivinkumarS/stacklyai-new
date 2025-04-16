import React, { useEffect, useRef, useState } from "react";
import Header from "../components/Header";
import sec3Pattern1 from "../assets/home/sec3/arcticons_ai-chat-alt-1.png";
import sec3Pattern2 from "../assets/home/sec3/arcticons_ai-chat-alt-2.png";
import sec3Pattern3 from "../assets/home/sec3/material-icon-theme_gemini-ai.png";
import sec3Pattern4 from "../assets/home/sec3/material-icon-theme_gemini-ai(1).png";
import sec3Design1 from "../assets/home/sec3/design1.jpeg";
import sec3Design2 from "../assets/home/sec3/design2.jpeg";
import sec3Design3 from "../assets/home/sec3/design3.jpeg";

import sec4Icon1 from "../assets/home/sec4/1.png";
import sec4Icon2 from "../assets/home/sec4/2.png";
import sec4Icon3 from "../assets/home/sec4/3.png";
import sec4Icon4 from "../assets/home/sec4/4.png";

import sec5BlockImg from "../assets/home/sec5/Frame 182.png";
import sec5Frame1 from "../assets/home/sec5/Frame 175.png";
import sec5Frame2 from "../assets/home/sec5/Frame 176.png";
import sec5Frame3 from "../assets/home/sec5/Frame 177.png";
import sec5Frame4 from "../assets/home/sec5/Frame 178.png";
import sec5Frame5 from "../assets/home/sec5/Frame 181.png";
import sec5Frame6 from "../assets/home/sec5/Frame 180.png";
import sec5Frame7 from "../assets/home/sec5/Frame 183.png";
import sec5Frame8 from "../assets/home/sec5/Frame 184.png";

import sec6Img1 from "../assets/home/sec6/1.png";
import sec6Img2 from "../assets/home/sec6/2.png";
import sec6Img3 from "../assets/home/sec6/3.png";
import sec6Img4 from "../assets/home/sec6/4.png";
import sec6Img5 from "../assets/home/sec6/1 (1).png";
import sec6Img6 from "../assets/home/sec6/2 (1).png";
import sec6Img7 from "../assets/home/sec6/3 (1).png";
import sec6Img8 from "../assets/home/sec6/4 (1).png";
import sec6Logo from "../assets/home/sec6/Logo.png";

export default function Home() {
  const [changeText, setChangeText] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setChangeText((prev) => {
        return prev === 2 ? 0 : prev + 1;
      });
    }, 1500);

    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      <Header />

      {/* banner  */}

      <section
        className="bg-cover bg-center bg-no-repeat w-full h-auto"
        style={{ backgroundImage: "url('/home/sec1/banner-bg.png')" }}
      >
        <div className="bg-[#0000000f]">
          <div className="w-full h-[46px] flex justify-center items-center bg-[#0000004d] backdrop-blur-[3px]">
            <marquee className="max-w-[1279px] w-full h-6 z-0">
              <p className="max-w-[1320px] w-full h-6 text-xl font-medium leading-[100%] text-white">
                Hey! It looks like you are from USA . We support Purchasing
                Power Parity pricing, so enjoy 50% off on your subscription. Use
                code: abc589 Hey! It looks like you are from USA . We support
                Purchasing Power Parity pricing, so enjoy 50% off on your
                subscription. Use code: abc589
              </p>
            </marquee>
          </div>

          <div className="max-[1000px]:flex-col w-full min-h-screen flex justify-center items-center gap-10 px-[5%] py-[30px]">
            <div className="max-w-[700px] min-h-[304px] flex flex-col justify-center gap-10 items-start">
              <h3 className="max-w-[700px] w-full text-5xl font-semibold leading-[100%] text-white max-[500px]:text-4xl">
                Design Your{" "}
                <span className="text-[#ffd56b]">
                  {
                    ["Interiors", "Kitchen", "Balcony", "Living Room"][
                      changeText
                    ]
                  }
                </span>
                <br />
                Space With AI
              </h3>
              <p
                className="max-w-[524px] w-full min-h-[30px] text-[17px] font-medium leading-[150%] text-neutral-100 max-[500px]:text-sm"
                style={{ wordSpacing: "3px" }}
              >
                Easy to Use, Zero Learning, AI Powered Design Tool to generate
                Your Own Space Photo-like images in 25 Seconds
              </p>

              <div className="max-w-[305px] w-full h-[50px] flex justify-center items-center bg-[#007b82] text-white shadow-[10px_10px_10px_10px_#2a2a2a29] cursor-pointer rounded-[5px] hover:bg-[#2e9ea4] hover:text-white max-[500px]:h-10">
                <p
                  className="text-lg font-bold leading-[100%] text-center text-white"
                  style={{ wordSpacing: "2px" }}
                >
                  Design Now!
                </p>
              </div>
            </div>
            <div
              className="bg-center bg-no-repeat bg-cover max-w-[500px] min-h-[312px] w-full h-auto flex flex-col justify-start items-start"
              style={{ backgroundImage: "url('/home/sec1/banner-home.png')" }}
            >
              <div className="flex flex-col justify-start items-start gap-[5px] pl-[25px] pr-0 pt-2.5 pb-0  max-[500px]:p-3">
                <div className="max-w-[149px] w-full h-[34px] rounded bg-[#00000066] flex justify-center items-center gap-2.5 px-2.5 py-1.5">
                  <p className="max-w-[129px] w-full text-base font-medium leading-[100%] text-white z-[1]">
                    ORGINAL ROOM
                  </p>
                </div>

                <p className="max-w-[44px] w-full h-5 text-sm leading-[100%] font-medium text-white z-[1] pl-[5px]">
                  Before
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* section 2 */}

      <section className="max-w-[100vw] w-full min-h-[552px] flex flex-col justify-center items-center gap-5 p-[30px] max-[500px]:py -10 max-[500px]:min-h-0">
        <h3 className="max-w-[220px] w-full min-h-[46px] text-[38px] font-semibold leading-[100%] text-[#2a2a2a] text-center">
          STACKLY AI
        </h3>
        <h2 className="max-w-[951px] w-full min-h-[53px] text-[44px] font-bold leading-[100%] text-center text-[#00b0ba]">
          Smart, fast, and built for excellence.
        </h2>
        <p className="max-w-[839px] w-full min-h-[76px] text-xl font-normal leading-[100%] h-[38px] text-center text-[#b0b0b0]">
          Delivering rapid, photo-realistic designs with advanced AI
          technology—trusted by professionals and homeowners alike.
        </p>
      </section>

      {/* section 3 */}
      <section className="w-full min-h-[1394px]">
        <div className="w-full min-h-[1394px] bg-[#002628]">
          <div className="home-bg-img relative w-full min-h-[1371px] overflow-hidden px-[5%] py-[100px]">
            <img
              src={sec3Pattern1}
              alt=""
              style={{
                position: "absolute",
                width: "240px",
                height: "240px",
                top: 0,
                left: 0,
                mixBlendMode: "overlay",
              }}
            />
            <img
              src={sec3Pattern2}
              alt=""
              style={{
                position: "absolute",
                width: "60px",
                height: "60px",
                top: "554px",
                left: "1080px",
                mixBlendMode: "overlay",
              }}
            />
            <img
              src={sec3Pattern3}
              style={{
                position: "absolute",
                width: "44px",
                height: "44px",
                top: "747px",
                left: "260px",
              }}
              alt=""
            />
            <img
              src={sec3Pattern4}
              style={{
                position: "absolute",
                width: "44px",
                height: "44px",
                top: "932px",
                left: "70%",
              }}
              alt=""
            />

            <h1 className="text-[40px] font-bold text-[white] text-center mb-5">
              Ultimate{" "}
              <span style={{ color: "#00D1DD", opacity: "100%" }}>
                AI Design Tool
              </span>{" "}
              for Interiors & Exteriors
            </h1>
            <p className="text-[22px] font-medium text-[white] text-center">
              Transform Any Space Effortlessly
            </p>

            <div className="w-full mt-[100px]">
              <div className="design flex items-center justify-center gap-5 absolute left-5 top-5 max-[600px]:static max-[600px]:flex-col max-[600px]:p-3">
                <p className="rounded-tl-[100px] rounded-tr-[20px] rounded-bl-[100px] text-[22px] font-semibold text-black bg-white p-5">
                  AI-Powered Interior Designs
                </p>
                <img
                  className="w-full max-w-[400px] max-h-[400px] rounded-[50%] border-8 border-solid border-[white]"
                  src={sec3Design1}
                  alt=""
                />
              </div>
              <div className="design flex items-center justify-center gap-5 absolute right-5 top-[300px] max-[600px]:static max-[600px]:flex-col max-[600px]:p-3">
                <img
                  className="w-full max-w-[400px] max-h-[400px] rounded-[50%] border-8 border-solid border-[white]"
                  src={sec3Design2}
                  alt=""
                />
                <p className="rounded-tl-[20px] rounded-tr-[100px] rounded-br-[100px] text-[22px] font-semibold text-black bg-white p-5">
                  Stunning Exterior Makeovers
                </p>
              </div>
              <div className="design flex items-center justify-center gap-5 absolute left-5 top-[600px] max-[600px]:static max-[600px]:flex-col max-[600px]:p-3">
                <p className="rounded-tl-[100px] rounded-tr-[50px] rounded-bl-[100px] text-[22px] font-semibold text-black bg-white p-5">
                  Outdoor Spaces Reimagined
                </p>
                <img
                  className="w-full max-w-[400px] max-h-[400px] rounded-[50%] border-8 border-solid border-[white]"
                  src={sec3Design3}
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 4 */}

      <section className="max-[500px]:p-5 max-w-[100vw] w-full min-h-[983px] overflow-x-hidden flex justify-center items-center p-[50px]">
        <div className="max-w-[1279px] w-full min-h-[778px] bg-white shadow-[0px_0px_5px_2px_#00000040] flex flex-col justify-center items-center gap-10 px-5 py-10 rounded-[15px]">
          <p className="max-w-[951px] w-full min-h-[29px] text-2xl font-semibold leading-[100%] text-center text-[#007b82]">
            First-of-Its-Kind Features
          </p>
          <h2 className="max-w-[820px] w-full min-h-[53px] text-[44px] font-bold leading-[100%] text-center text-black">
            The <span className="text-[#00b0ba]">All You Need</span> AI Home
            Design Tool
          </h2>

          <div className="max-w-[1219px] w-full min-h-[310px] flex justify-center items-center max-[900px]:flex-wrap">
            <div className="max-w-[250px] w-full min-h-[310px] flex flex-col justify-center items-center gap-5">
              <img
                src={sec4Icon1}
                alt="icon1"
                className="max-w-[100px] w-full min-h-[100px]"
              />
              <h3 className="max-w-[211px] w-full min-h-[48px] text-xl font-semibold leading-[100%] text-center text-[#2a2a2a]">
                Interior & Exterior Image Generation
              </h3>
              <p className="max-w-[250px] w-full min-h-[102px] text-[17px] font-medium leading-[100%] h-[34px] text-center text-[#b0b0b0]">
                Get design ideas for every part of your home—both indoors and
                outdoors.
              </p>
            </div>

            <div className="max-w-[250px] w-full min-h-[310px] flex flex-col justify-center items-center gap-5">
              <img
                src={sec4Icon2}
                alt="icon1"
                className="max-w-[100px] w-full min-h-[100px]"
              />
              <h3 className="max-w-[211px] w-full min-h-[48px] text-xl font-semibold leading-[100%] text-center text-[#2a2a2a]">
                Unlimited AI Ideas
              </h3>
              <p className="max-w-[250px] w-full min-h-[102px] text-[17px] font-medium leading-[100%] h-[34px] text-center text-[#b0b0b0]">
                Generate endless creative ideas to transform any space with
                ease.
              </p>
            </div>

            <div className="max-w-[250px] w-full min-h-[310px] flex flex-col justify-center items-center gap-5">
              <img
                src={sec4Icon3}
                alt="icon1"
                className="max-w-[100px] w-full min-h-[100px]"
              />
              <h3 className="max-w-[211px] w-full min-h-[48px] text-xl font-semibold leading-[100%] text-center text-[#2a2a2a]">
                High-Resolution Images
              </h3>
              <p className="max-w-[250px] w-full min-h-[102px] text-[17px] font-medium leading-[100%] h-[34px] text-center text-[#b0b0b0]">
                Download crystal-clear, AI-generated images that capture every
                detail.
              </p>
            </div>

            <div className="max-w-[250px] w-full min-h-[310px] flex flex-col justify-center items-center gap-5">
              <img
                src={sec4Icon4}
                alt="icon1"
                className="max-w-[100px] w-full min-h-[100px]"
              />
              <h3 className="max-w-[211px] w-full min-h-[48px] text-xl font-semibold leading-[100%] text-center text-[#2a2a2a]">
                Fast Image Generation
              </h3>
              <p className="max-w-[250px] w-full min-h-[102px] text-[17px] font-medium leading-[100%] h-[34px] text-center text-[#b0b0b0]">
                Create stunning, AI-powered images in just seconds.
              </p>
            </div>
          </div>
          <div className="max-w-[406px] w-full min-h-[60px] bg-[#007b82] flex justify-center items-center rounded-[5px] hover:bg-[#4bb0b5]">
            <p
              className="max-w-[137px] w-full min-h-[35px] text-xl font-bold leading-[100%] h-[35px] text-center text-white no-underline"
              style={{ wordSpacing: "2px" }}
            >
              Generate now
            </p>
          </div>
        </div>
      </section>

      {/* Section 5 */}
      <section
        className="  relative w-full min-[500px]:min-h-[1116px] bg-center object-cover bg-cover bg-no-repeat bg-scroll overflow-hidden"
        style={{ backgroundImage: "url('/home/sec5/banner.png')" }}
      >
        <div className="w-full min-h-[896px] flex flex-col justify-center items-center gap-[30px]">
          <h1 className="max-w-[688px] w-full min-h-[67px] text-5xl font-semibold leading-[100%] h-[140%] text-center text-white">
            DESIGN YOUR{" "}
            <span className="max-w-[688px] w-full min-h-[67px] text-5xl font-semibold leading-[100%] h-[140%] text-center text-[#00d1dd]">
              FUTURE HOME
            </span>
          </h1>
          <p className="max-w-[941px] w-full min-h-[76px] text-xl font-medium leading-[100%] h-[38px] text-center text-white">
            Bring your dream home to life! Explore innovative designs, customize
            every detail, and create a space that reflects your style and vision
          </p>
          <div className="group">
            <img
              src={sec5BlockImg}
              alt="gallery"
              id="gall"
              className="max-w-[250px] w-full min-h-[250px] transition-all duration-[2s] rounded-sm"
            />
            <div
              className="hidden max-[300px]:hidden min-[300px]:group-hover:block transition-all duration-[2s]"
              id="gally"
            >
              <img src={sec5Frame1} className="absolute left-0 top-[370px]" />
              <img src={sec5Frame2} className="absolute left-0 bottom-5" />
              <img src={sec5Frame3} className="absolute right-0 top-[400px]" />
              <img src={sec5Frame4} className="absolute left-20 top-[600px]" />
              <img src={sec5Frame5} className="absolute left-[50%] bottom-0" />
              <img
                src={sec5Frame6}
                className="absolute left-[50%] bottom-[30%]"
              />
              <img src={sec5Frame7} className="absolute bottom-0" />
              <img src={sec5Frame8} className="absolute right-[40%]" />
            </div>
          </div>
        </div>
      </section>

      {/* Section 6 */}

      <section className="min-h-[500px]">
        <div className="h-[500px] flex justify-center items-center">
          <div className="max-w-[400px] min-h-[165px] text-center flex flex-col justify-center items-center">
            <div className="flex justify-center items-center">
              <div className="img1 lite">
                <img src={sec6Img1} alt="Design1" />
              </div>
              <div className="relative left-[-30px]">
                <img src={sec6Img2} alt="Design2" />
              </div>
              <div className="relative left-[-60px]">
                <img src={sec6Img3} alt="Design3" />
              </div>
              <div className="relative left-[-90px]">
                <img src={sec6Img4} alt="Design4" />
              </div>
              <div className="w-[100px] h-[100px] bg-white shadow-[0_1px_4px_0_#00000040] flex justify-center items-center relative left-[-120px] p-2.5 rounded-[50%]">
                <span className="max-w-[45px] min-h-[45px] text-[32px] font-semibold leading-[100%] text-center text-[#007B82]">
                  45+
                </span>
              </div>
            </div>
            <div className="w-[380px] min-h-[39px] flex justify-center items-center">
              <span className="min-w-[185px] text-center text-[28px] font-medium leading-[100%] text-[#2A2A2A]">
                Design Styles
              </span>
            </div>
          </div>

            <div className="min-w-[245px] min-h-[71.62px] text-center flex items-baseline justify-center">
              <img src={sec6Logo} alt="logo" />
            </div>

          <div className="max-w-[400px] min-h-[165px] text-center flex flex-col justify-center items-center">
            <div className="flex justify-center items-center">
              <div className="img1  lite">
                <img src={sec6Img5} alt="" />
              </div>
              <div className=" relative left-[-30px]">
                <img src={sec6Img6} alt="" />
              </div>
              <div className=" relative left-[-60px]">
                <img src={sec6Img7} alt="" />
              </div>
              <div className=" relative left-[-90px]">
                <img src={sec6Img8} alt="" />
              </div>
              <div className="w-[100px] h-[100px] bg-white shadow-[0_1px_4px_0_#00000040] flex justify-center items-center relative left-[-120px] p-2.5 rounded-[50%]">
                <span className="max-w-[45px] min-h-[45px] text-[32px] font-semibold leading-[100%] text-center text-[#007B82]">
                  100+
                </span>
              </div>
            </div>
            <div className="w-[380px] min-h-[39px] flex justify-center items-center">
              <span className="min-w-[185px] text-center text-[28px] font-medium leading-[100%] h-[140%] text-[#2A2A2A]">
                Design Styles
              </span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
