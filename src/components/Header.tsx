import IconAdd from "./icons/iconAdd";
import IconMenu from "./icons/iconMenu"

type props = {
    onClose: () => void;
    conversaAtual: string;
    criarNovoChat: () => void;
}

 const Header = ({onClose, conversaAtual, criarNovoChat}:props) => {
    return(
        <>
        <header className="flex justify-between items-center w-fuçç 
        h-11 text-white p-3 border-b border-gray-600 md:hidden">
            <div onClick={onClose}>
            <IconMenu width={23} height={23}/>
            </div>
            <div>
                <h2>
                    {conversaAtual}
                </h2>
            </div>
            <div>
                <IconAdd width={23} height={23}
                onClick={criarNovoChat}
                />
            </div>
        </header>
        </>
    )
}

export default Header