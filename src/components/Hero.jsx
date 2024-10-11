import ImageHeroes from "../assets/hero-image.jpg";
// import AstraImage from "../assets/logo-astrapay.png";
// import ShopeeImage from "../assets/shopee-pay-logo.png";
// import OvoImage from "../assets/logo-ovo.png";
// import LinkajaImage from "../assets/logo-linkaja.png";
// import JeniusImage from "../assets/ewallet_jenius-pay.png";
import ReactTypingEffect from "react-typing-effect";
// import Swiper from "swiper";
// import { Swiper, SwiperSlide } from "swiper/react";
// import { Autoplay, Pagination } from "swiper/modules";

// import "swiper/css";
// import "swiper/swiper-bundle.css";
// import "swiper/css/navigation";
// import "swiper/css/pagination";

export default function Hero() {
  return (
    <>
      <div className="h-[100vh] overflow-hidden lg:overflow-auto">
        <div className="container text-Black lg:mx-auto md:pt-44 py-28 md:py-0 lg:py-0 mt-40">
          <div className="flex flex-wrap lg:mt-16 lg:flex-row-reverse md:flex-row-reverse">
            <div className="w-full self-end px-4 lg:w-1/2 md:w-1/2">
              <div className="relative">
                <img
                  src={ImageHeroes}
                  alt="Heroes Images"
                  className="w-40 h-40 lg:w-[520px] lg:h-[520px] mx-auto lg:mb-32 mb-12 object-cover "
                />
              </div>
            </div>
            <div className="w-full md:w-1/2 self-end px-4 lg:w-1/2 text-left lg:mb-48 font-sans">
              <h2 className="text-2xl  lg:text-[32px] font-bold text-[#FD8B51] mb-2">
                Hi Foodies!
              </h2>
              <h1 className="font-bold">
                <span className="text-5xl lg:text-8xl text-[#10375C]">
                  Welcome to{" "}
                </span>{" "}
                <span className="text-[#FD8B51] text-5xl lg:text-6xl">
                  {/* <ReactTypingEffect text={["WMB", "Warung Makan Bahari!"]} /> */}
                  <h1>Warung Makan Bahari!</h1>
                </span>
              </h1>
              <p className="max-w-md my-9 text-[14px] lg:text-[18px] opacity-80 text-[#10375C]">
                Hidup hanya sekali, mari habiskan uang mu untuk makan di Warung
                Makan Bahari
              </p>

              <div className="text-white text-2xl flex gap-5">
                <button
                  type="button"
                  className="lg:w-64 w-24 lg:text-2xl text-[17px] lg:py-2.5 py-1.5 bg-[#EB8317] rounded-full text-center mb-2 hover:bg-[#FD8B51] transition-colors duration-300"
                >
                  <a href="/login">Login To Reserve</a>
                </button>
                {/* <button
                  type="button"
                  className="lg:w-52 w-24 lg:text-2xl text-[17px] lg:py-2.5 outline outline-[#84CECF] rounded-full text-center mb-2 hover:bg-[#84CECF] hover:text-[#150E5E] transition-colors duration-300"
                >
                  <a href="/register">Register</a>
                </button> */}
              </div>
            </div>
          </div>

          {/* <div className="w-full lg:-mt-16 pt-16 ">
            <h1 className="font-sans text-[20px] font-semibold pb-3 opacity-50 ms-3">
              CONNECT ON
            </h1>
            <div className="relative w-full lg:h-32 rounded-2xl">
              <div className="absolute inset-0 lg:bg-[#150E5E] lg:opacity-20 rounded-2xl"></div>
              <div className="relative flex lg:flex-row lg:justify-evenly lg:items-center h-full w-full text-center gap-5">
                <Swiper
                  spaceBetween={50}
                  loop={true}
                  autoplay={{
                    delay: 1500,
                    disableOnInteraction: false,
                  }}
                  breakpoints={{
                    640: {
                      slidesPerView: 1,
                    },
                    768: {
                      slidesPerView: 3,
                    },
                    1024: {
                      slidesPerView: 4,
                    },
                  }}
                  modules={[Autoplay, Pagination]}
                >
                  <SwiperSlide>
                    <div className="lg:w-48 w-full">
                      <img
                        src={AstraImage}
                        alt="Astra"
                        className="object-cover mx-auto"
                      />
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="lg:w-48 w-full">
                      <img
                        src={ShopeeImage}
                        alt="Shopee"
                        className="mx-auto w-56"
                      />
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="lg:w-48 w-full">
                      <img
                        src={OvoImage}
                        alt="OVO"
                        className="object-cover mx-auto"
                      />
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="lg:w-48 w-full">
                      <img
                        src={LinkajaImage}
                        alt="LinkAja"
                        className="object-cover mx-auto"
                      />
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="lg:w-48 w-full">
                      <img
                        src={JeniusImage}
                        alt="Jenius"
                        className="object-cover mx-auto"
                      />
                    </div>
                  </SwiperSlide>
                </Swiper>
              </div>
            </div>
          </div> */}
        </div>
      </div>
    </>
  );
}
