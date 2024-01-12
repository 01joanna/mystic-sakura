import BlueIcon from "../../../../public/assets/img/blue-icon-button.svg"
import PinkIcon from "../../../../public/assets/img/pink-icon-button.svg"

const Button = ({text}) => {
    return (
        <button  className="bg-purpledark text-yellowcolor py-2 px-4 rounded-md inline-flex items-center w-228 h-92 flex-shrink-0 text-center font-showcard" >
            {text}
        </button>
    )
}
export default Button;