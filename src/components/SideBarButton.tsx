import IconChatLeft from "./icons/iconConversa"

type props = {
    onClick: () => void;
    label: string;
}

const SidebarButton = ({onClick, label}: props) => {
    return (
       
            <div onClick={onClick} className="flex items-center rouded-md p-3 text-sm cursor-point hover:bg-gray-600/20">
                <div className="mr-3">
                    <IconChatLeft width={13} height={13}/>
                </div>
                <div>
                    {label}
                </div>
            </div>
        
    )
}

export default SidebarButton