import { Chat } from "@/types/Chat"
import IconSun from "./icons/iconExample"
import ChatPlaceHolder from "./ChatPlaceHolder";
import ChatMessageItem from "./ChatMessageItem";
import ChatMessageLoading from "./ChatMessageLoading";

type props = {
    chat: undefined | Chat;
    loading: boolean;
}

const ChatArea = ({chat, loading}: props) => {
    return (
        <section className="flex-auto h-0 overflow-y-scroll">
          {!chat && <ChatPlaceHolder/> }
          {chat && chat.messages.map(item => (
            <ChatMessageItem 
                key={item.id}
                item={item}
            />
          ))}
          {loading && <ChatMessageLoading/>}
        </section>
    )
}

export default ChatArea