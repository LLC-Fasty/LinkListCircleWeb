import Image from "next/image"; // Ensure you have this line to import your global CSS

export default function Home() {
  
  return (
    <main className="md:mt-[180px] mt-[100px]">
      <div className="flex justify-center items-center mt-[20px]">
        <Image
          className="h-[320px] object-cover md:h-[600px] md:object-contain md:border-b-[14px] border-b-4 border-[#E2C799] md:rounded-b-[50px]"
          src="/banner.png"
          alt="hero"
          width={1920}
          height={1080}
        />
      </div>
      <div className="flex flex-col justify-center items-center mt-[30px] text-[#9A3B3B]">
        <h1 className="md:text-[60px] text-[48px] font-medium md:leading-[62px] text-center leading-[50px]">
          Welcome to <b className="hover-gradient">LinkListCircle</b>
        </h1>
        <p className="md:text-[44px] text-[36px] md:leading-[46px] text-center leading-[38px] mt-[20px] mx-2">
          A <b className="hover-gradient">Blockchain</b> that <b className="hover-gradient">LEVEL UPs</b> the more you use.
        </p>
      </div>
    </main>
  );
}
