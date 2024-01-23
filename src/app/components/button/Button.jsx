import Image from "next/image";
import clsx from "clsx";
import styles from "@/app/components/button/styles.module.css";
import Link from "next/link";

const Button = ({
  text,
  behaviour,
  sourceIcon,
  disabled,
  href,
  pinkColor,
  className = "",
  ...rest
}) => {
  let Component = "button";
  if (behaviour === "Link") {
    Component = Link;
  }
  if (behaviour === "a") Component = "a";
  const linkProps = behaviour === "Link" ? { href } : {};
  return (
    <Component
      {...linkProps}
      disabled={disabled}
      className={clsx(
        styles.btnComponent,
        "relative text-yellowColor py-[1rem] pl-[4rem] text-[2rem] pr-[7rem] rounded-md inline-flex items-center  text-center font-showcard md:py-[1rem] md:pl-[6rem] md:text-[3rem] md:rounded-[1.2rem] min-[1600px]:py-[0.8rem] min-[1600px]:text-[2.2rem] ",
        {
          "bg-pinkColor": pinkColor,
          "bg-purpleDark": !pinkColor,
        },
        className
      )}
      {...rest}
    >
      {text}
      {sourceIcon && (
        <Image
          className="absolute right-[-2.2rem] lg:right-[-3.7rem]  lg:w-[10rem] lg:h-[10rem]"
          height={80}
          width={75}
          alt="star with wings"
          src={sourceIcon}
        />
      )}
    </Component>
  );
};
export default Button;
