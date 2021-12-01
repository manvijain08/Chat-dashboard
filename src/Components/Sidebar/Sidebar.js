import "./Sidebar.scss";
import React, {useState, useEffect} from "react";
import apple from "../../Assets/apple.png";
import fb from "../../Assets/fb.png";
import instagram from "../../Assets/instagram.png";
import wp from "../../Assets/wp.png";
import search from "../../Assets/search.png";
import Sidebardata from "./Sidebardata.json";
import ChatItem from "./ChatItem";

const Sidebar = () => {
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
          <span className="all">{filter}</span>
          <img onClick={() => {filterPreset("APPLE")}} src={apple} alt="apple-icon" />
          <img onClick={() => {filterPreset("MESSANGER")}} src={fb} alt="fb-icon" />
          <img onClick={() => {filterPreset("INSTAGRAM")}} src={instagram} alt="instagram-icon" />
          <img onClick={() => {filterPreset("WHATSAPP")}} src={wp} alt="wp-icon" />
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