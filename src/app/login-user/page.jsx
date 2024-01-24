import styles from "@/app/login-user/styles.module.css";
import clsx from "clsx";
import Image from "next/image";
import Button from "@/app/components/button/Button";
export default function LoginUser() {
  return (
    <section className="h-[100vh] flex flex-col justify-center items-center">
      <div>
        <div className={styles.logoLogin}>
          <Image
            width={60}
            height={150}
            src={"/assets/images/logo/logo-1.png"}
            alt="logo"
            className={styles.wingLoginOne}
          />
          <Image
            width={60}
            height={150}
            src={"/assets/images/logo/logo-2.png"}
            alt="logo"
            className={styles.wingLoginTwo}
          />
        </div>
      </div>

      <h1 className="text-yellowColor text-[1.4rem] text-center font-jost w-3/4 pt-[4rem] pb-[3rem] tracking-[.07rem] min-[700px]:text-[2rem] lg:text-[1.5rem] lg:pt-[0.5rem] min-[1400px]:text-[2.2rem] min-[1400px]:pt-[2.5rem] min-[1400px]:pb-[3.5rem]">
        Descubre el mistério de las cartas de <i>Mystic Sakura</i>
      </h1>
      <div className="text-center">
        <div
          className={clsx(
            styles.containerLoginUser,
            "w-[90%] h-[35vh]  mx-auto bg-purpleDark flex justify-center items-center rounded-[1rem] flex-col  min-[700px]:w-[40rem] lg:flex-row lg:w-[50rem] lg:relative lg:justify-normal"
          )}
        >
          <Image
            width={250}
            height={200}
            src={"/assets/images/wings-left.png"}
            alt="ala izquierda"
            className="w-full hidden lg:block  lg:w-[55%] lg:absolute lg:left-[-23rem] lg:top-[0rem] z-10 min-[1400px]:w-[50%] min-[1400px]:left-[-20rem] min-[1600px]:top-[2rem] min-[1600px]:w-[52%]"
          />

          <div className="relative flex flex-col justify-center items-center w-full lg:relative">
            <Image
              width={220}
              height={120}
              src={"/assets/images/adorno-horizontal.svg"}
              alt="adorno horizontal"
              className="w-full absolute top-0"
            />
            <form className="flex justify-center items-center flex-col w-[80%] h-[30vh] lg:w-[50rem]">
              <h1 className="text-yellowColor text-[2rem] text-center font-showcard mb-[2rem] md:text-[2.2rem] lg:pt-[0.5rem] lg:text-[2.4rem] min-[1400px]:text-[2.5rem] ">
                Nombre de usuario(*)
              </h1>
              <label htmlFor="nombre"></label>
              <input
                className={clsx(
                  styles.inputUser,
                  "text-[1.5rem] text-white px-[0.8rem] py-[1rem] w-[95%] bg-purpleDark lg:w-[77%] lg:text-[2rem]"
                )}
                type="text"
                id="nombre"
                placeholder="Escribe tu nombre ..."
              />
              <span className={styles.loader}></span>
            </form>
            <Image
              width={220}
              height={120}
              src={"/assets/images/adorno-horizontal.svg"}
              alt="adorno horizontal"
              className="w-full"
            />
          </div>
          <Image
            width={250}
            height={200}
            src={"/assets/images/wings-right.png"}
            alt="ala izquierda"
            className="w-full hidden lg:block  lg:w-[55%] lg:absolute lg:right-[-23rem] lg:top-[0rem] z-10 min-[1400px]:w-[50%] min-[1400px]:right-[-20rem] min-[1600px]:top-[2rem] min-[1600px]:w-[52%]"
          />
        </div>
        <Button
          text={"EMPEZAR"}
          behaviour={"Link"}
          href="/home"
          sourceIcon={"/assets/images/kero-icon.svg"}
          pinkColor={true}
          className={"mt-[4rem]  mr-[2rem]"}
        />
      </div>
    </section>
  );
}
