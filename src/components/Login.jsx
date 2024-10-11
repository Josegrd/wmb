import { useState } from "react";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [passwordVisible, setPasswordVisible] = useState(false);
  

  const admin = [
    {
      email: "admin@example.com",
      password: "12345678",
    },
    {
      email: "admin@gmail.com",
      password: "12345678",
    },
    {
      email: "admin@yahoo.com",
      password: "12345678",
    },
  ];

  const togglePassword = () => {
    setPasswordVisible(!passwordVisible);
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    if (password.length < 6) {
      setPasswordError("Password must be at least 6 characters");
      return;
    } else {
      setPasswordError("");
    }

    let isValid = false;

    admin.forEach((adminUser) => {
      if (email === adminUser.email && password === adminUser.password) {
        isValid = true;
      }
    });

    if (isValid) {
      window.location.href = "/ListFood";
      localStorage.setItem("email", email);
      localStorage.setItem("password", password);
    } else {
      alert("Wrong username or password");
    }
  };

  return (
    <>
      <div className="bg-[#EB8317] h-[100vh] overflow-hidden">
        <div className="container text-white mx-auto lg:h-full flex flex-col justify-center items-center">
          <div className="lg:flex lg:flex-wrap md:flex md:flex-wrap lg:mt-[150px] mt-52 mb-36  lg:flex-row w-full lg:items-center justify-center">
            <div className="lg:w-1/2 md:w-1/2 lg:max-w-lg p-4 bg-white border border-gray-200 rounded-3xl shadow md:p-8 mx-10 md:mx-0">
              <form className="space-y-6 mb-10" onSubmit={handleLogin}>
                <h5 className="text-xl font-medium text-black">
                  Sign in to Reserve
                </h5>
                <div>
                  <label
                    htmlFor="email"
                    className="block mb-2 text-sm font-medium text-black"
                  >
                    Your email
                  </label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    className="bg-gray-50 border border-gray-300  text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:placeholder-gray-400 text-black"
                    placeholder="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
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
                    type={passwordVisible ? "text" : "password"}
                    name="password"
                    id="password"
                    placeholder="••••••••"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="bg-gray-50 border border-gray-300  text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:placeholder-gray-400 text-black"
                    required
                  />
                  {passwordError && (
                    <p className="text-red-500 text-sm mt-1">{passwordError}</p>
                  )}
                  <span
                    onClick={togglePassword}
                    className="relative -top-8 left-[93%] cursor-pointer"
                  >
                    {passwordVisible ? (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="black"
                        className="size-6"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M3.98 8.223A10.477 10.477 0 0 0 1.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.451 10.451 0 0 1 12 4.5c4.756 0 8.773 3.162 10.065 7.498a10.522 10.522 0 0 1-4.293 5.774M6.228 6.228 3 3m3.228 3.228 3.65 3.65m7.894 7.894L21 21m-3.228-3.228-3.65-3.65m0 0a3 3 0 1 0-4.243-4.243m4.242 4.242L9.88 9.88"
                        />
                      </svg>
                    ) : (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="black"
                        className="size-6"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z"
                        />
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                        />
                      </svg>
                    )}
                  </span>
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
