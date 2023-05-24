import { ReactNode } from "react";
import IconChatLeft from "./icons/iconConversa"

type props = {
    icon: ReactNode;
    label: string;
    onClick: () => void;
}

const LimparSidebar = ({icon, label, onClick}:props) => {
    return(
        <div onClick={onClick} className="flex items-center rouded-md p-3 text-sm cursor-point hover:bg-gray-600/20">
            <div className="mr-3">
                {icon}
            </div>
            <div>
                {label}
            </div>
        </div>
    )
}

export default LimparSidebar