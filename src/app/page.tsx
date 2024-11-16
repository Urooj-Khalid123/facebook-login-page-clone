import Image from "next/image";

export default function Home() {
  return (
    
    <div className="bg-gray-100 h-screen flex items-center justify-center">
      {/* Left Side */}
      <div className="text-3xl w-1/2 px-10">
        <Image  src={"/pictures/facebook-image.svg"} width={300} height={100} alt="Facebook-Logo" />
        <p className="ml-8 -mt-3">Facebook helps you connect and share with the people in your life.</p>
      </div>
      {/* Right Side */}
      <div className="bg-white flex flex-col p-5 rounded-xl w-1/3 space-y-2">
        <input className="my-2 border border-1 border-gray-100 p-3 rounded-md outline-1 outline-blue-600" type="text" placeholder="Email address or phone number" />
        <input className="my-2 border  border-1 border-gray-100 p-3  rounded-md  outline-1 outline-blue-600" type="password" placeholder="Password" />
        <button className="my-3 bg-blue-600 hover:bg-blue-700 text-white font-bold  py-3 rounded-md text-lg">Log in</button>
        <p className="cursor-pointer text-center my-2 text-blue-600 text-sm hover:underline">Forgotten password?</p>
        <span className="my-2">
          <hr />
        </span>
        <button className="my-3 bg-green-500 hover:bg-green-600 text-white font-bold  py-3 px-3 rounded-md text-lg w-fit mx-auto ">Create new account</button>
      </div>
    </div>
  );
}
