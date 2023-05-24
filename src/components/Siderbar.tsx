import { ReactNode } from "react"
import IconClose from "./icons/iconClose";
import IconAdd from "./icons/iconAdd";
import Buttonsidebar from "./LimparConversas";
import LimparSidebar from "./LimparConversas";
import IconIconTrash from "./icons/IconTrash";


type props = {
    children: ReactNode;
    open: boolean;
    fecharMenu: () => void;
    LimparSideBar: () => void;
    NewChat: () => void;
}

const Sidebar = ({open, fecharMenu, children, LimparSideBar, NewChat}: props) => {
    return (
        <section className={`fixed left-0 top-0 text-white 
        ${open ? 'w-screen h-screen bg-gray-600/75' : 'w-0' }
        md:w-64  md:static`}>

         <div className={`transition-all duration-200  flex h-scrren ${open ? 'ml-0' : '-ml-96'} md:ml-0`}>

             <div className="flex flex-col w-64 h-screen p-2 bg-gray-900">
               
                <div onClick={NewChat} className="flex items-center p-3   rounded-md cursor-pointer border border-white-600 hover:bg-gray-600/20 transition-all ">
                    <div className="mr-2">
                        <IconAdd/>
                    </div>
                    <div>
                        <p>
                            New Chat
                        </p>
                    </div>
                </div>
                <nav className="flex-1 pt-2 overflow-y-auto">
                        {children}
                </nav>

                <div className="border-t border-gray-700 pt-2 cle">
                    <LimparSidebar
                    icon={<IconIconTrash width={17} height={17}/>}
                    label="Clear Conversations"
                    onClick={LimparSideBar}
                    />
                
                </div>
             </div>

            

             <div className="flex justify-center items-center w-10 h-10 cursor-pointer md:hidden" onClick={fecharMenu}>
                <IconClose width={24} height={24} />
             </div>

         </div>
        </section>
    )
}

export default Sidebar