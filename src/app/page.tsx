"use client"

import Sidebar from "@/components/Siderbar"
import Header from "@/components/Header";
import ChatArea from "@/components/chatArea";
import { Chat } from "@/types/Chat";
import { useEffect, useState } from "react"
import LimparSidebar from "@/components/LimparConversas";
import IconChatLeft from "@/components/icons/iconConversa";
import Footer from "@/components/Footer";
import { v4 as uuidv4} from "uuid";
import { text } from "stream/consumers";
import SidebarButton from "@/components/SideBarButton";


const Page = () => {
  
  const[stateMenu, CloseOpenMenu] = useState(false);
  const [chatList, setChatList] = useState<Chat []>( [] )
  const [chatActiveId, setChatActiveId] = useState<string>('')
  const[chatActive, setChatActive] = useState<Chat>() //ou ele terá um chat, ou n terá nada
  const[AiLoading, setAiLoading] = useState(false)



  useEffect(() => {
      setChatActive(chatList.find(item => item.id === chatActiveId))
  }, [chatActiveId, chatList])

  useEffect(()=> {
      if(AiLoading) getAiResponse()
  }, [AiLoading])

  const getAiResponse = () => {
    setTimeout(()=> {
      let chatlistClone = [...chatList]
      let chatIndex = chatlistClone.findIndex(item => item.id === chatActiveId)
      chatlistClone[chatIndex].messages.push(
        {
          id: uuidv4(),
          author: 'ai',
          body: 'Resposta da IA.'
        }
      )
      setChatList(chatlistClone)
      setAiLoading(false)
    }, 2000)
  }

  const onClose = () => {
    CloseOpenMenu(!stateMenu)
  }

  const AcessarConversa = () => {
    console.log('Acessando conversa...')
  }

  const LimparSideBar = () => {
    if(AiLoading) return

    setChatActiveId('');
    setChatList([])
  }

  const handleNewChat = () => {
    if(AiLoading) return 
    
    setChatActiveId('');
    CloseOpenMenu(false)
  }


  const handleSendMessage = (message: string) => {
     if(!chatActiveId){
      let newChatId = uuidv4()
        setChatList(
        [
          {id: newChatId,
          title: message,
          messages: [
            {id: uuidv4(), author: 'me', body: message}
          ]}, 
          ...chatList
        ])
        setChatActiveId(newChatId)
     } 
     
     else{
        let chatListClone = [...chatList]
        let chatIndex = chatListClone.findIndex(item => item.id === chatActiveId)
        chatListClone[chatIndex].messages.push({
          id: uuidv4(), 
          author: 'me', 
          body: message
        })
        setChatList(chatListClone)
     }
     setAiLoading(true)
  }

  return (
    <main className="flex min-h-screen bg-gpt-gray">
      <Sidebar
      open = {stateMenu}
      fecharMenu = {onClose}
      LimparSideBar = {LimparSideBar}
      NewChat = {handleNewChat}
      >
        {chatList.map(item => (
              <SidebarButton
              key={item.id}
              label={`${item ? item.title : 'New Chat'}`}
              onClick = {AcessarConversa}
          />
        ))}
      
     
      </Sidebar>
      <section className="flex flex-col w-full">

        <Header 
        onClose = {onClose}
        conversaAtual= {`${chatActive ? chatActive.title : 'New Chat'}`}
        criarNovoChat = {handleNewChat}
        />
        <ChatArea chat = {chatActive}
         loading = {AiLoading}
         /> 

       <Footer
        disabled = {AiLoading}
        onSendMessage = {handleSendMessage}
       
       />
      </section>

    </main>
  )
}

export default Page