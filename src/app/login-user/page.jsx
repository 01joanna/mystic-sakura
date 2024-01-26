"use client";
import styles from "@/app/login-user/styles.module.css";
import clsx from "clsx";
import Image from "next/image";
import Button from "@/app/components/button/Button";
import { useState } from "react";
import { postUser, validIfUserExists } from "@/app/services/login";
import { useRouter } from "next/navigation";
export default function LoginUser() {
  const [userName, setUserName] = useState("");
  const [isEmpty, setIsEmpty] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  const handleUserLogin = async (event) => {
    event.preventDefault();
    localStorage.removeItem("hasModalBeenShown");
    if (!userName.trim()) {
      setIsEmpty(true);
      return;
    }

    setIsLoading(true);
    const isUserExists = await validIfUserExists(userName);

    if (isUserExists) {
      localStorage.setItem("currentUserLogged", isUserExists.id);
      router.push("/home");
      return;
    }
    const user = {
      id: crypto.randomUUID(),
      userName: userName,
    };

    const callPostUser = async () => {
      const data = await postUser(user);
      if (data.data.id) {
        router.push("/home");
        setUserName("");
        localStorage.setItem("currentUserLogged", data.data.id);
      }
    };

    await callPostUser();
  };

  return (
    <section className="h-[100vh] text-[jost] flex flex-col pt-[4rem] items-center min-[1000px]:pt-[6rem] min-[1600px]:pt-[15rem]">
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
      <div className="text-center ">
        <div
          className={clsx(
            styles.containerLoginUser,
            "w-[90%] h-[22rem]  mx-auto bg-purpleDark flex justify-center items-center rounded-[1rem] flex-col  min-[700px]:w-[40rem]  min-[700px]:h-[auto] lg:flex-row lg:w-[50rem] lg:h-[26rem] lg:relative lg:justify-normal min-[1600px]:h-[30rem]"
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
            <div className="flex justify-center items-center flex-col w-[80%] h-[18rem] lg:w-[50rem] min-[700px]:h-[20rem] lg:h-[22rem] min-[1600px]:h-[24rem]">
              <form
                className="relative flex flex-col justify-center items-center min-[700px]:w-full "
                onSubmit={handleUserLogin}
              >
                <h1
                  className={clsx(
                    isEmpty ? "text-[#ff8d8d]" : "text-yellowColor ",
                    isLoading ? "mt-[9rem]" : "mt-[12rem]",
                    "text-yellowColor text-[2rem] text-center font-showcard mt-[12rem] mb-[2rem] md:text-[2.2rem] lg:pt-[0.5rem] lg:text-[3rem] min-[1400px]:text-[2.5rem]"
                  )}
                >
                  Nombre de usuario(*)
                </h1>
                <label htmlFor="nombre"></label>
                <input
                  className={clsx(
                    isEmpty ? "border-[#ff8d8d]" : "border-yellowColor",
                    styles.inputUser,
                    "border-4 border-solid text-[1.5rem] text-white px-[0.8rem] py-[1rem] w-[95%] bg-purpleDark lg:w-[77%] lg:text-[2rem]"
                  )}
                  type="text"
                  id="nombre"
                  placeholder="Escribe tu nombre ..."
                  value={userName}
                  onChange={(event) => {
                    setIsEmpty(false);
                    setUserName(event.target.value);
                  }}
                />
                {isEmpty && (
                  <p className="text-[1.5em] text-[#ff8d8d] mt-[1rem]  min-[1100px]:text-[1.8em] ">
                    X Rellena tu nombre!
                  </p>
                )}
                {isLoading ? (
                  <span
                    className={clsx(
                      styles.loader,
                      "bottom-[-6rem] min-[1400px]:bottom-[-10rem]"
                    )}
                  ></span>
                ) : (
                  <Button
                    text={"EMPEZAR"}
                    sourceIcon={"/assets/images/kero-icon.svg"}
                    pinkColor={true}
                    className={
                      "absolute  bottom-[-4rem] mt-[4rem]  mr-[2rem] lg:bottom-[-6rem]  min-[1400px]:bottom-[-6rem] min-[1600px]:bottom-[-10rem]"
                    }
                  />
                )}
              </form>
            </div>

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
      </div>
    </section>
  );
}
