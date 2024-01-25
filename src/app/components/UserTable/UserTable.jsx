// "use client";
// import Image from "next/image"
// import styles from '../modal/styles.module.css'


// export default function UserTable() {

//     return (
//         <section className="border-2">
//             <Image
//             src={"/assets/images/wings-left.png"}
//             alt="Imagen del ala izquierdo"
//             width={300}
//             height={266}
//             className="flex-none relative right-[230px] top-[250px] z-10 hidden lg:flex"
//             />

//             <div className="bg-purpleDark w-[35rem] h-[30rem] flex flex-col justify-center items-center rounded-3xl lg:w-[68rem] lg:h-[40rem]">
//                 <Image src={"/assets/images/adorno-horizontal.png"} alt="Imagen de adorno horizontal, arriba" width={324} height={22} className={`${"horizontal-top"} mt-2 lg:mt-4 lg:w-[66.5rem] lg:h-[3.6rem]`}/>

//                 <section className={`${styles.scrollbar} flex flex-col w-full h-full overflow-y-scroll items-center justify-center p-4 lg:justify-start lg:gap-32 gap-4 lg:py-4`}>
//                   <UserEntries/>
//                 </section>
//                 <Image src={"/assets/images/adorno-horizontal.png"} alt="Imagen de adorno horizontal, abajo" width={324} height={22} className={`${"horizontal-bottom"} mb-2 lg:mb-0 lg:w-[66rem] lg:h-[3.6rem] lg:mt-2`}/>
//                 <Image src={"/assets/images/modal-vertical.png"}  alt="Imagen de adorno vertical, izquierda" width={380} height={57} className={`hidden lg:flex rotate-90 relative bottom-[19rem] right-[32.4rem]`}/>
//                 <Image src={"/assets/images/modal-vertical.png"}  alt="Imagen de adorno vertical, derecha" width={380} height={57} className={`hidden lg:flex rotate-90 relative bottom-[19.5rem] left-[32rem]`}/>
                
//             </div>
//             <Image
//             src={"/assets/images/wings-right.png"}
//             alt="Imagen del ala derecho"
//             width={300}
//             height={100}
//             className="flex-none relative left-[600px] bottom-[350px] z-10 hidden lg:flex"
//             />
//         </section>
//     )
// }


"use client";
import Image from "next/image";
import styles from "../modal/styles.module.css"
import clsx from "clsx";
import UserEntries from "../userEntries/UserEntries";

export default function UserTable(){

  return (
    <section>
      <Image
        src={"/assets/images/wings-left.png"}
        alt="Imagen del ala izquierdo"
        width={300}
        height={266}
        className={clsx(
          styles.alaOneCardModal,
          "flex-none relative right-[230px] top-[240px] z-10 hidden lg:flex"
        )}
      />

      <div
        className={clsx(
          styles.containerGeneral,
          "bg-purpleDark w-[90vw] min-h-[24rem] flex flex-col justify-between items-center rounded-[0.8rem] sm:w-[64rem] md:w-64rem min-[850px]:w-[64rem] lg:w-[64rem] lg:h-[52vh] relative min-[1400px]:h-[56vh]  min-[1400px]:w-[66rem] min-[1600px]:w-[35%] min-[1600px]:h-[48vh]"
        )}
      >
        <Image
          src={"/assets/images/adorno-horizontal.svg"}
          alt="Imagen de adorno horizontal, arriba"
          width={900}
          height={80}
          className={`${"horizontal-top"} mt-2 w-full`}
        />
        <section
          className={`${styles.scrollbar} flex flex-col w-full h-[16rem] overflow-y-scroll items-center  lg:h-[45rem] lg:justify-start lg:gap-32 lg:px-[3rem] min-[1400px]:px-[4rem] min-[1400px]:gap-[4rem]`}
        >
            <UserEntries/>
        </section>
        <Image
          src={"/assets/images/adorno-horizontal.svg"}
          alt="Imagen de adorno horizontal, abajo"
          width={900}
          height={80}
          className={`${"horizontal-bottom"} mt-2 w-full`}
        />
      </div>

      <Image
        src={"/assets/images/wings-right.png"}
        alt="Imagen del ala derecho"
        width={300}
        height={100}
        className={clsx(
          styles.alaTwoCardModal,
          "flex-none relative left-[600px] bottom-[350px] z-10 hidden lg:flex"
        )}
      />
    </section>
  );
}
