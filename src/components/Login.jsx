export default function Login() {
  return (
    <>
      <div className="bg-[#EB8317] h-[100vh] overflow-hidden">
        <div className="container text-white mx-auto lg:h-full flex flex-col justify-center items-center">
          <div className="lg:flex lg:flex-wrap md:flex md:flex-wrap lg:mt-[150px] mt-52 mb-36  lg:flex-row w-full lg:items-center justify-center">
            <div className="lg:w-1/2 md:w-1/2 lg:max-w-lg p-4 bg-white border border-gray-200 rounded-3xl shadow md:p-8 mx-10 md:mx-0">
              <form className="space-y-6 mb-10">
                <h5 className="text-xl font-medium text-black">
                  Sign in to Reserve
                </h5>
                <div>
                  <label
                    htmlFor="text"
                    className="block mb-2 text-sm font-medium text-black"
                  >
                    Your username
                  </label>
                  <input
                    type="text"
                    name="text"
                    id="text"
                    className="bg-gray-50 border border-gray-300  text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:placeholder-gray-400 text-black"
                    placeholder="username"
                    required
                  />
                </div>
                <div>
                  <label
                    htmlFor="password"
                    className="block mb-2 text-sm font-medium text-black"
                  >
                    Your password
                  </label>
                  <input
                    type="password"
                    name="password"
                    id="password"
                    placeholder="••••••••"
                    className="bg-gray-50 border border-gray-300  text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:placeholder-gray-400 text-black"
                    required
                  />
                </div>
                <button
                  type="submit"
                  className="w-full text-white bg-[#10375C] hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
                >
                  Login to your account
                </button>
              </form>
            </div>
            <div className="w-full self-end lg:px-10 lg:text-left lg:mb-32 font-sans mt-28 md:px-4 mb-36 text-center lg:w-1/2">
              <h1 className="lg:text-[35px] text-[16px] md:text-[26px] font-bold">
                <span className="text-[#10375C] lg:text-[65px] text-6xl block">
                  Warung Makan Bahari
                </span>{" "}
                Hidup Nyaman, Hati Riang,{" "}
                <u className="lg:block md:block text-[#10375C]">
                  Perut Kenyang
                </u>
              </h1>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
