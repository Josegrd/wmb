import ImageHeroes from "../assets/hero-image.jpg";

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
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
