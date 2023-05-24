import IconSend from "./icons/iconSend"; 
import { KeyboardEvent, useState, useRef, useEffect  } from "react";

type props = {
    disabled: boolean;
    onSend: (message: string) => void;

}

const ChatMessageInput = ({disabled, onSend}: props) => {
    const [text, setText] = useState("")
    const textEl = useRef<HTMLTextAreaElement>(null)

    useEffect(() => {
        if (textEl.current){
            textEl.current.style.height = '0px';
            let scrollHeight = textEl.current.scrollHeight;
            textEl.current.style.height = scrollHeight + 'px';
        }
    }, [textEl, text])

    const handleSendMessage = () => {
        if(!disabled && text.trim() !== '') {
            onSend(text) 
            setText('')}
    }

    const handleTextKeyUp = (evento: KeyboardEvent<HTMLTextAreaElement>) => {
       if (evento.code.toLowerCase() == 'enter' && !evento.shiftKey){
            evento.preventDefault()                                    
            handleSendMessage()
       }
    }

    return (
        <div className={`w-11/12 lg:w-7/12  flex m-auto items-center border border-gray-700/50 bg-gpt-lightgray p-2 rounded-md ${disabled && 'opacity-50'}`}>

            <textarea className=" flex-1 border-0 bg-transparent resize-none outline-none h-6 max-h-48 overflow-y-auto text-white"
            ref={textEl}
            placeholder="Send a Message."
            value={text}
            onChange={e => setText(e.target.value)}
            onKeyUp={handleTextKeyUp}
            disabled = {disabled}
            > 

            </textarea>

            <div onClick={handleSendMessage} className={`flex items-center mr-1 py-1 rounded px-2 cursor-pointer ${text.length ? 'opacity-100 hover:bg-black/20' : 'opacity-20 '}`}>
                <IconSend width={15} height={15}/>
            </div>
        </div>
    )
}

export default ChatMessageInput