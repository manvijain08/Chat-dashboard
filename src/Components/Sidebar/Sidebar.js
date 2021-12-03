import "./Sidebar.scss";
import React, {useState, useEffect} from "react";
import search from "../../Assets/search.png";
import Sidebardata from "./Sidebardata.json";
import ChatItem from "./ChatItem";
import _const from "../../const";

const Sidebar = ({selectedChat, setSelectedChat}) => {
  const [filter, setFilter] = useState("ALL") ;
  const [sidebarData, setSidebardata] = useState([]) ;

  const filterPreset = (filterProperty) => {
    if (filter == filterProperty){
      return setFilter("ALL") ;
    }
    setFilter(filterProperty) ;
  }

  useEffect(() => {
    if (filter == 'ALL')
      setSidebardata(Sidebardata) ;
    else{
      setSidebardata(Sidebardata.filter(data => data.identifier === filter))
    }
    
  }, [filter])
  return (
    <div className="sidebar">
      <div className="social-media">
        <div className="icons">
          <span onClick={() => {filterPreset("ALL")}} className="all">All</span>
          <img id="apple-icon" onClick={() => {filterPreset("APPLE")}} src={_const.APPLE_IMG_CAP} alt="apple-icon" />
          <img id="apple-icon" onClick={() => {filterPreset("MESSANGER")}} src={_const.MESSANGER_IMG_CAP} alt="fb-icon" />
          <img id="apple-icon" onClick={() => {filterPreset("INSTAGRAM")}} src={_const.INSTAGRAM_IMG_CAP} alt="instagram-icon" />
          <img id="apple-icon" onClick={() => {filterPreset("WHATSAPP")}} src={_const.WHATSAPP_IMG_CAP} alt="wp-icon" />
        </div>
      </div>

      <div className="chats">
        <h3>Chats</h3>
        <img src={search} alt="search" />
      </div>
      {sidebarData.map((data) => (
        <ChatItem
          key = {data.conversation_id}
          conversation_id = {data.conversation_id} 
          c_name= {data.c_name}
          message_body={data.message_body}
          identifier={data.identifier}
          time={data.time}
          arrow={data.arrow}
          selectedChat={selectedChat}
          setSelectedChat={setSelectedChat}
        />
      ))}
    </div>
  );
};

export default Sidebar;

// img === "apple"
//               ? smallA
//               : img === "fb"
//               ? smallfb
//               : img === "instagram"
//               ? smalli
//               : img === "wp"
//               ? smallW
//               : null