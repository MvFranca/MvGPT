import ChatMessageInput from "./ChatMessageInput";


type props = {
    disabled: boolean;
    onSendMessage: (message: string) => void;
}

const Footer = ({onSendMessage, disabled}: props) => {
    return (
        <footer className="border-t pt-2  border-gray-500 md:border-none flex  flex-col text-center">
        <ChatMessageInput
        disabled = {disabled}
        onSend = {onSendMessage}
        />
        <aside className="w-11/12 m-auto p-2 md:p-4 lg: mb-2 lg:w-7/12 flex justify-center gap-8 text-gray-300 text-xs ">
            <div>
                <p className="" >
                    Site desenvolvido por Marcos Vinicius França Silva, para fins estudantis. Acesse meu <a href="#" className="underline">Github</a> ou <a href="#" className="underline">LinkedIn</a>.
                
                </p>
            </div>
            
            
            
           
        </aside>

        </footer>
    )
}

export default Footer