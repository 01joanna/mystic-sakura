import Image from "next/image";
import Link from "next/link";
export default function Header() {
  return (
    <div className="flex pt-[6rem] px-[3rem] flex-col justify-center gap-8 md:flex-row md:justify-between md:items-center lg:justify-between lg:px-[4rem] lg:pt-[3rem]">
      <Image
        width={250}
        height={80}
        src={"/assets/images/logo.svg"}
        alt="logo mistic shakura"
        className=" mb-4 lg:w-[20rem] mx-auto lg:h-[7rem] min-[1400px]:w-[22rem] min-[1400px]:h-[8rem] md:mx-[unset]"
      />
      <button className="flex items-center gap-[2rem] min-[1400px]:pr-[4rem]  min-[1600px]:pr-[3rem]">
        <Image
          width={50}
          height={50}
          src={"/assets/images/icon-user.svg"}
          alt="icon usuario mistic shakura"
        />
        <Link
          href={"/user-area"}
          className="text-[1.5rem] text-[#dec9f3] font-showcard inline-block lg:text-[2rem]"
        >
          Historial de jugadas
        </Link>
      </button>
    </div>
  );
}
