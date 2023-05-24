import IconRobot from "./icons/iconRobot"

const ChatMessageLoading = () => {
    return (
        <div className="py-5 bg-gray-600/50">
            <div className="max-w-4xl m-auto flex items-center">
                <div className="w-10 h-10 bg-green-600/50 flex items-center justify-center mx-4 md:ml-0 rounded ">
                    <IconRobot width={23} height={23}/>
                </div>
                <div>
                       <div className="h-4 w-2 bg-gray-300/70 animate-spin">
                        </div> 
                </div>
            </div>
        </div>
    )
}

export default ChatMessageLoading