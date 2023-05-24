import IconAttention from "./icons/iconAtencao"
import IconSun from "./icons/iconExample"
import IconLightningBolt from "./icons/iconRaio"

const ChatPlaceHolder = () => {
    return(
    <>
    <div className=" m-5 md:mt-20">
        <h3 className="text-4xl font-bold text-white text-center my-8 ">
            MvGPT
        </h3>
        <div className="flex items-center justify-center md:flex-row gap-5 m-auto mb-8 md:max-w-4xl flex-col md:flex-row">
            <div className="flex flex-col justify-center items-center">
                <div className="flex items-center text-white gap-3 mb-3 md:flex-col">
                <IconSun width={23} height={23}/>
                <h3 >
                    Examples
                </h3>
                </div>
            
                <div className="bg-white/5 rounded text-center text-sm mb-3 p-3 text-white">
                        Explique o sentido da vida em termos simples
                </div>
                <div className="bg-white/5 rounded text-center text-sm mb-3 p-3 text-white">
                        Explique o sentido da vida em termos simples
                </div>
                <div className="bg-white/5 rounded text-center text-sm mb-3 p-3 text-white">
                        Explique o sentido da vida em termos simples
                </div>
            </div>
            <div className="flex flex-col justify-center items-center">
                <div className="flex items-center text-white gap-3 mb-3 md:flex-col">
                <IconLightningBolt width={23} height={23}/>
                <h3 >
                Capabilities
                </h3>
                </div>
            
                <div className="bg-white/5 rounded text-center text-sm mb-3 p-3 text-white ">
                        Explique o sentido da vida em termos simples
                </div>
                <div className="bg-white/5 rounded text-center text-sm mb-3 p-3 text-white">
                        Explique o sentido da vida em termos simples
                </div>
                <div className="bg-white/5 rounded text-center text-sm mb-3 p-3 text-white">
                        Explique o sentido da vida em termos simples
                </div>
            </div>
            <div className="flex flex-col justify-center items-center">
                <div className="flex items-center text-white gap-3 mb-3 md:flex-col">
                <IconAttention width={23} height={23}/>
                <h3 >
                Limitations
                </h3>
                </div>
            
                <div className="bg-white/5 rounded text-center text-sm mb-3 p-3 text-white">
                        Explique o sentido da vida em termos simples
                </div>
                <div className="bg-white/5 rounded text-center text-sm mb-3 p-3 text-white">
                        Explique o sentido da vida em termos simples
                </div>
                <div className="bg-white/5 rounded text-center text-sm mb-3 p-3 text-white">
                        Explique o sentido da vida em termos simples
                </div>
            </div>
            
        </div>
    </div>
    </>
    )
}

export default ChatPlaceHolder