import { ChatMessage } from "@/types/ChatMessage"
import IconUser from "./icons/iconUser"
import IconRobot from "./icons/iconRobot"

type Props = {
    item: ChatMessage;
}


const ChatMessageItem = ({item}: Props) => {
    return (
        <div className={`py-5 ${item.author === 'ai' && 'bg-gray-600/50 '}`}>
            <div className="max-w-4xl m-auto flex justify-center items-center ">

                <div className= {`ml-3 w-10 h-10 flex justify-center items-center mx-4 md:ml-4 rounded ${item.author === 'ai' ? 'bg-green-900' : 'bg-blue-900 '}`}>
                    {item.author === 'me' && <IconUser width={24} height={24}/>}
                    {item.author === 'ai' && <IconRobot width={24} height={24}/>}
                </div>

                <div className="flex-1 text-base whitespace-pre-wrap pb-4 pt-4 text-white">
                    {item.body}
                </div>
               
            </div>
        </div>
    )
}



export default ChatMessageItem