"use client"
import UserTable from "../components/UserTable/UserTable";
import Kero from "../components/animation/kero/Kero";
import Button from "../components/button/Button";
import Header from "../components/header/Header";

export default function UserArea() {
    return (
        <>
            <Header />
            <Kero />
            <div className="flex flex-col justify-center items-center gap-12 py-8 lg:py-28">
                <p className="text-yellowColor text-[1rem] text-center lg:w-full w-2/3 lg:text-[2rem]">
                    “Revive tus lecturas pasadas y encuentra conexiones en tu camino con el historial de cartas.”
                </p>
                <UserTable />
                <Button
                    onClick={() => {
                        setSelectedItems([]);
                        router.push("/home");
                    }}
                    text={"VOLVER"}
                    sourceIcon={"/assets/images/btn-icon-pink.svg"}
                    className={
                        "!text-[1.4rem] !pr-[6rem] !pl-[3rem] !animate-none !flex-basis-[50%] sm:!text-[1.8rem] md:!text-[2.5rem]"
                    }
                />
            </div>
        </>
    );
}
