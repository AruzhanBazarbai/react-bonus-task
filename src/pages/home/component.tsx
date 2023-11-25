import { useSelector } from "react-redux"
import { ChatsMessages, userId } from "../../assets/mock/chats"
import { RootState } from "../../store"

export const Home = () => {
    const selectedChatId = useSelector((state: RootState) => state.selectedChat.id)
    return (
        <div className="flex-grow chat-wrapper p-6">
            {ChatsMessages.map((el, ind) => (
                ((selectedChatId === el.receiverId && el.senderId === userId) || (selectedChatId === el.senderId && el.receiverId === userId) ) && <div className="flex max-w-[500px] relative">
                    {((ind !== 0 && ChatsMessages[ind].receiverId !== ChatsMessages[ind-1].receiverId) || ind === 0) && <img className="chat-icon" src={require("../../assets/images/profile-icon.png")} alt="" />}
                    <div className="chat-content flex">
                        <p>{el.content}</p>
                        <p className="text-[12px] text-zinc-800">{el.time}</p>
                    </div>
                </div>
            ))}
        </div>
    )
}