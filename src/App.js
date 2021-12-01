import "./App.css";
import Sidebar from "./Components/Sidebar/Sidebar";
import Header from "./Custom/Header/Header";
import Chats from "./Components/Chats/Chats";
import { useState } from "react";
import msgData from "./Components/Chats/messages.json";

function App() {
  const [selectedChat, setSelectedChat] = useState(0);
  return (
    <div>
      <Header />
      <section className="pages">
        <Sidebar
          selectedChat={selectedChat}
          setSelectedChat={setSelectedChat}
        />
        {selectedChat === 0
          ? null
          : msgData.map((msgs) => {
              if (msgs["conversation_id"] == selectedChat) {
                return (
                  <Chats
                    selectedChat={selectedChat}
                    setSelectedChat={setSelectedChat}
                    conversation_id={msgs.conversation_id}
                    sp_name={msgs.sp_name}
                    sp_num={msgs.sp_num}
                    r_name={msgs.r_name}
                    r_num={msgs.r_num}
                    // message_body= {msgs.message_body}
                    time={msgs.time}
                  />
                );
              }
            })}
      </section>
    </div>
  );
}

export default App;
