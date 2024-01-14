import Image from "next/image";
import Link from "next/link";

const Button = ({ text, behaviour, sourceIcon, ...rest }) => {
  let Component = "button";
  if (behaviour === "Link") {
    Component = Link;
  }
  if (behaviour === "a") Component = "a";

  return (
    <Component
      {...rest}
      className=" relative bg-purpleDark text-yellowColor py-1 pl-2 pr-7 rounded-md inline-flex items-center w-228 h-92 flex-shrink-0 text-center font-showcard"
    >
      {text}
      <Image
        className="absolute right-[-1.5rem]"
        height={50}
        width={45}
        alt="star with wings"
        src={sourceIcon}
      />
    </Component>
  );
};
export default Button;
