import Sidebar from "./Sidebar";

export default function ListFood(){
    return (
      <>
        <Sidebar />
        <div className={`container h-[100vh]`}>
          <h1 className="text-[#02063D] lg:text-6xl md:text-5xl text-4xl font-bold underline">
            Food List
          </h1>
          <div className="mt-9 flex lg:text-[20px] md:text-[20px] text-[16px]">
            <div>
              <h1 className="font-bold mb-1">Full Name</h1>
              <h1 className="font-bold mb-1">Email</h1>
              <h1 className="font-bold mb-1">Date Of Birth</h1>
              <h1 className="font-bold mb-1">Address</h1>
              <h1 className="font-bold mb-1">Phone Number</h1>
              <h1 className="font-bold mb-1">National ID</h1>
            </div>
          </div>
        </div>
      </>
    );
}