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

import sec7Model1 from "../assets/home/sec7/mdi_sofa.png";
import sec7Model2 from "../assets/home/sec7/healthicons_home.png";
import sec7Model3 from "../assets/home/sec7/mdi_plant.png";
import sec7Icon1 from "../assets/home/sec7/solar_upload-outline.png";
import sec7Icon2 from "../assets/home/sec7/basil_image-solid (1).png";
import sec7Icon3 from "../assets/home/sec7/Vector.png";

import sec9Frame from "../assets/home/sec9/Frame 168.png";

import sec10Img1 from "../assets/home/sec10/3d-interior-design-free-png 1.png";
import sec10Img2 from "../assets/home/sec10/3d-interior-design-png 1.png";

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
        <div className="h-[500px] max-[1000px]:flex-col flex justify-center items-center">
          <div className="max-w-[400px] min-h-[165px] text-center flex flex-col justify-center items-center">
            <div className="flex justify-center items-center relative left-[60px]">
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
            <div className="flex justify-center items-center relative left-[60px]">
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

      {/* Section 7 */}

      <section className="max-w-[100vw] w-full min-h-[1385px]  flex justify-center items-center">
        <div className="w-[1280px] min-h-[1199px]">
          <div
            className="max-w-screen-xl w-full min-h-[287px] flex flex-col justify-center items-center gap-5 rounded-t-[20px]"
            style={{
              background:
                "linear-gradient(to bottom, #007c82 0%, #004245 50%, #00292b 100%)",
            }}
          >
            <h1 className="max-w-[658px] w-full min-h-[53px] text-[38px] font-bold leading-[140%] tracking-[60%] text-center text-white">
              PICK YOUR STYLE
            </h1>
            <div className="max-w-[658px] w-full h-auto flex justify-evenly items-center">
              <div className="max-w-[101px] min-h-[121px] flex flex-col justify-center items-center gap-5">
                {" "}
                {/* interiors */}
                <div className="img">
                  <img src={sec7Model1} alt="interiors" />
                </div>
                <p className="max-w-[101px] min-h-[31px] text-[22px] font-semibold leading-[140%] text-center text-[white]">
                  interiors
                </p>
              </div>
              <div className="max-w-[101px] min-h-[121px] flex flex-col justify-center items-center gap-5">
                {" "}
                {/* exteriors */}
                <div className="img">
                  <img src={sec7Model2} alt="exteriors" />
                </div>
                <p className="max-w-[101px] min-h-[31px] text-[22px] font-semibold leading-[140%] text-center text-[white]">
                  exteriors
                </p>
              </div>
              <div className="max-w-[101px] min-h-[121px] flex flex-col justify-center items-center gap-5">
                <div className="img">
                  <img src={sec7Model3} alt="outdoors" />
                </div>
                <p className="max-w-[101px] min-h-[31px] text-[22px] font-semibold leading-[140%] text-center text-[white]">
                  outdoors
                </p>
              </div>
            </div>
          </div>

          <div className="max-w-screen-xl min-h-[912px] bg-white shadow-[0px_0px_4px_opx_#00000059] flex justify-center rounded-none items-center">
            <div className=" bg-[#002628] w-full min-h-[868px] flex justify-center items-center gap-5 max-[1100px]:flex-col p-5 max-[400px]:p-3 rounded-br-[20px] rounded-bl-[20px]">
              <div className="flex-1 w-full min-h-[400px] p-4 min-[500px]:min-h-[868px] bg-[#00393D] flex justify-center items-center rounded-[10px]">
                <div className="flex-1 w-full min-[500px]:min-h-[795px] flex flex-col justify-center items-center gap-[30px]">
                  <div className="max-w-[550px] w-full min-w-[55px] flex justify-center items-start cursor-pointer">
                    <div
                      className="max-w-[235px] w-full min-h-[40px] flex justify-center items-center px-5 py-2 rounded-[20px]"
                      style={{
                        background:
                          "linear-gradient(to right, rgb(0, 176, 186) 0%, rgba(0, 0, 0, 0) 50%, rgb(0, 176, 186) 100%)",
                      }}
                    >
                      <img
                        src={sec7Icon1}
                        alt=""
                        className="max-w-[21.5px] min-h-[21.5px]"
                      />
                      <button className="max-w-[163px] min-h-[22px] text-base font-semibold leading-[140%] text-center text-white">
                        Step 1 : Upload images
                      </button>
                    </div>
                  </div>

                  <div className="max-w-[550px] w-full min-[500px]:min-h-[740px] p-10 border cursor-pointer flex flex-col justify-center items-center rounded-sm border-[white] border-dashed">
                    <img
                      src={sec7Icon2}
                      alt=""
                      className="max-w-[60px] min-w-[60px]"
                    />
                    <p className="max-w-[280px] min-h-[40px] text-sm leading-[140%] text-center text-white">
                      Drop an image,Tap to Select,Take a Photo or Paste
                    </p>
                  </div>
                </div>
              </div>

              <form className="max-w-[610px] w-full min-h-[868px] flex flex-col justify-center items-center gap-[20PX]">
                <div className="max-w-[610px] min-h-[516px] w-full bg-[#00393D] flex flex-col justify-center items-center rounded-[10px] p-5">
                  <div className="max-w-[610px] w-full min-h-[75px] cursor-pointer flex justify-center items-center">
                    <div
                      className="max-w-[292px] min-h-[40px] flex justify-center items-center px-5 py-2 rounded-[40px]"
                      style={{
                        background:
                          "linear-gradient(to right,#00b0ba 0%,#0000001a 50%,#007b82 100%)",
                      }}
                    >
                      <img src={sec7Model2} alt="" className="w-6 h-6" />
                      <p className="max-w-[220px] min-h-[22px] text-base font-[600px] leading-[140%] text-center text-white">
                        Step2 : Design or Customize
                      </p>
                    </div>
                  </div>

                  <div className="max-w-[550px] w-full min-h-[389px] flex flex-col justify-center items-center gap-[31px]">
                    <div className="max-w-[550px] w-full flex flex-col justify-center items-center gap-2.5">
                      <p className="max-w-[550px] w-full min-h-[22px] text-base font-normal leading-[140%] text-white">
                        Select Building Type
                      </p>
                      <div className="max-w-[550px] w-full min-h-[42px] flex justify-between items-center gap-3">
                        <div className="max-w-[255px] w-full min-h-[42px] rounded bg-[#00000033] flex justify-between items-center px-2.5 py-0 hover:bg-white group">
                          <span className="group-hover:text-[#007b82] text-[white] max-w-[92px] min-h-[22px] text-base font-medium leading-[140%] text-center">
                            Commercial
                          </span>{" "}
                          <input type="radio" name="buildingType"/>
                        </div>
                        <div className="max-w-[255px] w-full min-h-[42px] rounded bg-[#00000033] flex justify-between items-center px-2.5 py-0 hover:bg-white group">
                          <span className="group-hover:text-[#007b82] text-[white] max-w-[92px] min-h-[22px] text-base font-medium leading-[140%] text-center">
                            Residential
                          </span>{" "}
                          <input type="radio" name="buildingType"/>
                        </div>
                      </div>
                    </div>

                    <div className="max-w-[550px] w-full flex flex-col justify-center items-center gap-2.5">
                      <p className="max-w-[550px] w-full min-h-[22px] text-base leading-[140%] font-normal text-white text-start">
                        Room Type
                      </p>
                      <div className="max-w-[550px] w-full min-h-[42px] h-full rounded flex justify-between items-center bg-white text-black px-4 py-2.5">
                        <select name="Living Room" id="">
                          <option value="Bedroom">Bedroom</option>
                          <option value="Kitchen">Kitchen</option>
                          <option value="Dining Room">Dining Room</option>
                          <option value="Study Room">Study Room</option>
                          <option value="Home Office">HOME Office</option>
                          <option value="Family Room">Family Room</option>
                          <option value="Kids Room">Kids Room</option>
                          <option value="Balcony">Balcony</option>
                        </select>
                      </div>
                    </div>

                    <div className="max-w-[550px] w-full flex flex-col justify-center items-center gap-2.5">
                      <p className="max-w-[550px] w-full min-h-[22px] text-base leading-[140%] font-normal text-white text-start">
                        Room Style
                      </p>
                      <div className="max-w-[550px] w-full min-h-[42px] h-full rounded flex justify-between items-center bg-white text-black px-4 py-2.5">
                        <select name="modern" id="">
                          <option value="Midcentury Modern">
                            Midcentury Modern
                          </option>
                          <option value="Modern">Modern</option>
                          <option value="Tropical">Tropical</option>
                          <option value="Rustic">Rustic</option>
                          <option value="Tribal">Tribal</option>
                          <option value="Cyberpunk">Cyberpunk</option>
                          <option value="Zen">Zen</option>
                          <option value="Japanese Design">
                            Japanese Design
                          </option>
                          <option value="Biophilic">Biophilic</option>
                          <option value="Christimas">Christimas</option>
                          <option value="Bohemian">Bohemian</option>
                          <option value="Contemporary">Contemporary</option>
                          <option value="Maximalist">Maximalist</option>
                          <option value="Vintage">Vintage</option>
                          <option value="Baroque">Baroque</option>
                          <option value="Farmhouse">Farmhouse</option>
                          <option value="Minimalist">Minimalist</option>
                          <option value="Gaming Room">Gaming Room</option>
                          <option value="French Country">French Country</option>
                          <option value="Art Deco">Art Deco</option>
                          <option value="Art Nouveau">Art Nouveau</option>
                          <option value="Halloween">Halloween</option>
                          <option value="Ski Chalet">Ski Chalet</option>
                          <option value="Sketch">Sketch</option>
                          <option value="Scandinavian">Scandinavian</option>
                          <option value="Industrial">Industrial</option>
                          <option value="Neoclassic">Neoclassic</option>
                          <option value="Medieval">Medieval</option>
                          <option value="Shabby Chic">Shabby Chic</option>
                          <option value="Eclectic">Eclectic</option>
                          <option value="Asian Traditional">
                            Asian Traditional
                          </option>
                          <option value="Hollywood Glam">Hollywood Glam</option>
                          <option value="Western Traditional">
                            Western Traditional
                          </option>
                          <option value="Transitional">Transitional</option>
                        </select>
                      </div>
                    </div>

                    <div className="max-w-[550px] w-full flex flex-col justify-center items-center gap-2.5">
                      <p className="max-w-[550px] w-full min-h-[22px] text-base leading-[140%] font-normal text-white text-start">
                        Number Of Design
                      </p>
                      <div className="max-w-[550px] w-full min-h-[42px] h-full rounded flex justify-between items-center bg-white text-black px-4 py-2.5">
                        <input type="text" />
                      </div>
                    </div>
                  </div>
                </div>

                <div className="max-w-[610px] min-h-[332px] w-full bg-[#00393D] flex flex-col justify-center items-center rounded-[10px] p-5">
                  <div className="max-w-[610px] w-full min-h-[75px] flex justify-center items-center cursor-pointer">
                    <div
                      className="max-w-[292px] min-h-[40px] flex justify-center items-center px-5 py-2 rounded-[40px]"
                      style={{
                        background:
                          "linear-gradient(to right,#00b0ba 0%,#0000001a 50%,#007b82 100%)",
                      }}
                    >
                      <img src={sec7Model2} alt="" className="w-6 h-6" />
                      <p className="max-w-[220px] min-h-[22px] text-base font-[600px] leading-[140%] text-center text-white">
                        Step3 : Generate new Design
                      </p>
                    </div>
                  </div>

                  <div className="max-w-[550px] w-full min-h-[240px] flex flex-col justify-center items-center gap-[31px]">
                    <div className="max-w-[550px] w-full flex flex-col justify-center items-center gap-5">
                      <p className="max-w-[550px] w-full min-h-[22px] text-base font-normal leading-[140%] text-white">
                        Select Building Type
                      </p>
                      <div className="max-w-[550px] w-full min-h-[42px] flex justify-between items-center gap-3">
                        <div className="max-w-[255px] w-full min-h-[42px] rounded bg-[#00000033] flex justify-between items-center px-2.5 py-0 hover:bg-white group cursor-pointer">
                          <span className="text-[white] max-w-[92px] min-h-[22px] text-base font-medium leading-[140%] text-center group-hover:text-[#007b82]">
                            Commercial
                          </span>{" "}
                          <input type="radio" name="buildingTy "/>
                        </div>
                        <div className="max-w-[255px] w-full min-h-[42px] rounded bg-[#00000033] flex justify-between items-center px-2.5 py-0 hover:bg-white group cursor-pointer">
                          <span className="text-[white] max-w-[92px] min-h-[22px] text-base font-medium leading-[140%] text-center group-hover:text-[#007b82]">
                            Residential
                          </span>{" "}
                          <input type="radio" name="buildingTy "/>
                        </div>
                      </div>
                      <div className="max-w-[550px] w-full min-h-[42px] flex justify-between items-center gap-3">
                        <div className="max-w-[255px] w-full min-h-[42px] rounded bg-[#00000033] flex justify-between items-center px-2.5 py-0 hover:bg-white group cursor-pointer">
                          <span className="text-[white] max-w-[92px] min-h-[22px] text-base font-medium leading-[140%] text-center group-hover:text-[#007b82]">
                            Commercial
                          </span>{" "}
                          <input type="radio" name="buildingTy "/>
                        </div>
                        <div className="max-w-[255px] w-full min-h-[42px] rounded bg-[#00000033] flex justify-between items-center px-2.5 py-0 hover:bg-white group cursor-pointer">
                          <span className="text-[white] max-w-[92px] min-h-[22px] text-base font-medium leading-[140%] text-center group-hover:text-[#007b82]">
                            Residential
                          </span>{" "}
                          <input type="radio" name="buildingTy "/>
                        </div>
                      </div>
                    </div>
                    <div
                      className="max-w-[570px] w-full min-h-[54px] border bg-[#00B0BACC] flex justify-center items-center gap-2.5 cursor-pointer rounded-[5px] border-solid border-[white_30%]"
                      style={{
                        background:
                          "linear-gradient(to right,#00b0ba 0%,#0000004d 50%,#007b82 100%)",
                      }}
                    >
                      <img src={sec7Icon3} alt="" />
                      <button  className="text-white cursor-pointer">
                        Create Magic
                      </button>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Section 7.5 */}

      <section className="max-w-[100vw] w-full pb-20 px-5 flex flex-col justify-start items-center gap-[30px]">
        <div className="max-w-[830px] w-full min-h-[300px] flex flex-col justify-center items-center gap-5">
          <h1 className="max-w-[828px] w-full min-h-[67px] text-5xl font-semibold leading-[140%] text-center text-black">
            <span className="text-[aqua]">SIMPLIFY DESIGN </span>WITH{" "}
            <span className="text-[#078C8C]">STACKLYAI</span>
          </h1>
          <p className="max-w-[294px] w-full min-h-[31px] text-[22px] font-semibold leading-[140%] text-center text-[#2A2A2A]">
            3 Easy Steps to Get Started
          </p>
        </div>
        <div className=" w-full min-h-[auto] flex justify-center items-start gap-5 max-[1000px]:flex-wrap">
          <div className="step1">
            <div
              className="max-w-[411px] w-full min-h-[232px] bg-center bg-no-repeat bg-cover object-cover p-2.5"
              style={{ backgroundImage: "url('/home/sec7-5/step1.jpeg')" }}
            >
              <div className="bg-[#00000080] backdrop-blur-[5] flex justify-center items-center max-w-[53px] w-full min-h-[19px] text-[10px] font-bold leading-[100%] text-[white] rounded-[60px]">
                Step 1:
              </div>
            </div>
            <p className="max-w-[374px] w-full min-h-[68px] text-[17px] font-semibold leading-[160%] text-center">
              <span className="text-[aqua]"> Upload </span>a photo of your room,
              home, or outdoor space.
            </p>
          </div>
          <div className="step2">
            <div
              className="max-w-[411px] w-full min-h-[232px] bg-center bg-no-repeat bg-cover object-cover p-2.5"
              style={{ backgroundImage: "url('/home/sec7-5/step2.jpeg')" }}
            >
              <div className="bg-[#00000080] backdrop-blur-[5] flex justify-center items-center max-w-[53px] w-full min-h-[19px] text-[10px] font-bold leading-[100%] text-[white] rounded-[60px]">
                Step 2:
              </div>
            </div>
            <p className="max-w-[374px] w-full min-h-[68px] text-[17px] font-semibold leading-[160%] text-center">
              <span className="text-[aqua]"> Personalize your experience </span>
              — choose the room type, adjust AI creativity, add special
              instructions, and select your favorite design style
            </p>
          </div>

          <div className="step3">
            <div
              className="max-w-[411px] w-full min-h-[232px] bg-center bg-no-repeat bg-cover object-cover p-2.5"
              style={{ backgroundImage: "url('/home/sec7-5/step3.jpeg')" }}
            >
              <div className="bg-[#00000080] backdrop-blur-[5] flex justify-center items-center max-w-[53px] w-full min-h-[19px] text-[10px] font-bold leading-[100%] text-[white] rounded-[60px]">
                Step 3:
              </div>
            </div>
            <p className="max-w-[374px] w-full min-h-[68px] text-[17px] font-semibold leading-[160%] text-center">
              <span className="text-[aqua]">Generate</span> stunning new décor
              and design concepts in under 25 seconds.
            </p>
          </div>
        </div>
      </section>

      {/* Section 8 */}

      <section
        className="w-screen min-h-[612px] bg-center bg-cover object-cover bg-no-repeat flex justify-center items-center"
        style={{ background: "url('/home/sec8/Bg.png')" }}
      >
        <div className="max-w-[727px] w-full min-h-[274px] bg-[#00000099] backdrop-blur-[2] flex flex-col justify-center items-center gap-6 px-[30px] py-10 rounded-xl">
          <h1 className="max-w-[667px] w-full min-h-[62px] text-[44px] font-bold leading-[140%] text-center text-[white]">
            Sign Up Quickly! Get <span className="text-[aqua]">25%</span>Offer
          </h1>
          <div className="ul-list">
            <ul className="max-w-[405px] w-full min-h-[24px] flex justify-between items-center">
              <li
                className='before:content-["."] text-[white] text-[17px] font-medium leading-[140%] text-center before:text-[aqua] before:text-[50px] before:m-2.5'
                style={{ listStyle: "none" }}
              >
                30 free outputs
              </li>
              <li
                className='before:content-["."] text-[white] text-[17px] font-medium leading-[140%] text-center before:text-[aqua] before:text-[50px] before:m-2.5'
                style={{ listStyle: "none" }}
              >
                No credit card required
              </li>
            </ul>
          </div>
          <div
            className="max-w-[406px] w-full min-h-[60px] flex justify-center items-center gap-2.5 text-xl font-bold leading-[35px] text-center text-[white] cursor-pointer rounded-xl"
            style={{
              background:
                "linear-gradient(to right,#00B0BA 0%,#0000004D 50%,#007B82 100%)",
              wordSpacing: "8px",
            }}
          >
            Signup
          </div>
        </div>
      </section>

      {/* Section 9 */}

      <section className="max-w-[100vw]  flex flex-col justify-center items-center gap-[50px] p-5 py-32">
        <h1 className="max-w-[1320px] w-full min-w-[134px] md:text-5xl text-3xl font-semibold leading-[140%] text-center text-black">
          Plan Your Future{" "}
          <span className="text-[aqua]">Interiors, Exteriors, </span> and{" "}
          <span>Outdoor Spaces </span>with{" "}
          <span className="text-[rgb(5,128,128)]">Stackly</span>
        </h1>
        <img
          className="max-w-[1115px] h-auto w-full"
          src={sec9Frame}
          alt="section 9 frame image"
        />
      </section>

      {/* Section 10 */}

      <section className="max-w-[100vw] min-h-[926px] flex flex-col justify-center items-center gap-[30px]">
        <h1 className="max-w-[1320px] min-h-[67px] w-full text-5xl font-semibold leading-[140%] text-center text-black">
          Compare Design, Find Your{" "}
          <span className="text-[aqua]">Perfect style</span>
        </h1>
        <p className="max-w-[736px] w-full min-h-[72px] text-lg font-medium leading-[200%] text-center text-[#B0B0B0]">
          Explore and compare multiple interior, exterior, and outdoor designs
          to discover the one that matches your unique taste.
        </p>
        <div className="flex justify-center items-center max-[1000px]:flex-wrap gap-2.5 p-5">
          <div className="max-w-[577px]  flex flex-col justify-center items-center gap-6 bg-[white] shadow-[0_0_4px_0_#00000040] px-[18px] py-[30px] rounded-[10px]">
            <img
              className="max-w-[541px]  w-full"
              src={sec10Img1}
              alt="image1"
            />
            <p className="max-w-[541px] min-h-[72px] w-full text-center text-[17px] font-medium leading-[140%] text-black">
              <span className="text-[aqua]">
                "Your style is sleek and sophisticated.{" "}
              </span>
              This brown-themed office design blends modern functionality with
              warm, earthy tones—perfect for a productive and stylish
              workspace."
            </p>
          </div>

          <div className="max-w-[577px]  flex flex-col justify-center items-center gap-6 bg-[white] shadow-[0_0_4px_0_#00000040] px-[18px] py-[30px] rounded-[10px]">
            <img
              className="max-w-[541px]  w-full"
              src={sec10Img2}
              alt="image2"
            />
            <p className="max-w-[541px] min-h-[72px] w-full text-center text-[17px] font-medium leading-[140%] text-black">
              <span className="text-[aqua]">
                "Embrace comfort with a touch of elegance.
              </span>{" "}
              This brown-themed lounge offers a cozy yet professional
              atmosphere, balancing work and relaxation effortlessly."
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
