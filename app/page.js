import Link from "next/link";
import Image from "next/image"
export default function Home() {
  return (
    <div className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background with logos */}
      <div className="absolute inset-0 z-0">
        {/* <div className="grid grid-cols-2 md:grid-cols-4 gap-4 p-4 h-full">
          {[
            { src: "https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg", alt: "React logo" },
            { src: "https://assets.vercel.com/image/upload/v1662130559/nextjs/Icon_dark_background.png", alt: "Next.js logo" },
            { src: "https://www.mongodb.com/assets/images/global/leaf.svg", alt: "MongoDB logo" },
            { src: "https://nodejs.org/static/images/logo.svg", alt: "Node.js logo" },
          ].map((logo, index) => (
            <div key={index} className="flex items-center justify-center opacity-10">
              <Image
                src={logo.src}
                alt={logo.alt}
                width={100}
                height={100}
                className="max-w-full h-auto object-contain"
              />
            </div>
          ))}
        </div> */}
      </div>

      {/* Hero content */}
      <div className="relative z-10 text-center">
        <h1 className="text-4xl md:text-6xl font-bold text-primary mb-4">
          Welcome to this bsic CRUD simple app 
        </h1>
        <p className="text-xl md:text-2xl text-muted-foreground mb-7">
          Powered by React, Next.js, MongoDB, and Node.js and  Next Js
        </p>
        <Link className="bg-[#61dafb] hover:bg-[#4fa8c7] text-black font-semibold py-2 px-4 rounded-lg transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-[#61dafb] focus:ring-opacity-50 mt-4" href="/users">Click here</Link>
      </div>
    </div>
  );
}