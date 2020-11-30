import React, { useEffect, useState } from "react";
import FontAwesome from "react-fontawesome";
import "./styles/global.sass";
import { ChevronDown, ChevronUp } from "react-feather";
export default function DropDownCustom(props) {
  const list = props.list;
  const [location, setLocation] = useState(props.list);
  const [listOpen, setListOpen] = useState(false);
  const [nestlistOpen, setnestListOpen] = useState(false);
  const [nestItem, setNestItem] = useState(React.createRef());
  const [keyword, setkeyword] = useState("");
  const [searchField, setSearchField] = useState(React.createRef());
  const [searchNestField, setSearchNestField] = useState(React.createRef());
  const [close, setClose] = useState(true);
  const [headerTitle, setHeadeTitle] = useState(props.title);

  const toggleItem = (id, key) => {
    let tempp = list[id];
    setNestItem(tempp);
    setnestListOpen((prevState) => !prevState);
    setkeyword("");
    let temp = list[id];
    temp.selected = !temp.selected;
    list[id] = temp;
    //  setHeadeTitle(list[id].value)
    setLocation(temp.selected);
  };
  const toggleNestItem = (id, opId) => {
    let temp = list[id].options[opId];
    console.log(temp.value);
    setHeadeTitle(temp.value);
    setLocation(list[id].selected);
  };
 const headerToggle=(title)=>{
    setHeadeTitle(title)

 }
  const toggleList = () => {
    setListOpen((prevState) => !prevState);
    setkeyword("");
  };
  return (
    <div className="dd-wrapper">
      <div className="dd-headers" onClick={toggleList}>
        <div className="dd-header-title">{headerTitle}</div>
        {listOpen ? <ChevronUp size={24} /> : <ChevronDown size={24} />}
      </div>
      {listOpen && (
        <ul className="dd-list">
          {list.map((item) => (
           
            <li
              className="dd-list-item"
              key={item.id}
              onClick={() => toggleItem(item.id, item.key)}
            >
              <div className="dd-header">
                <div className="dd-header-titles">
                
                  {
                  item.options.length>0?(
                  <div>
                    {item.value}
                    {nestlistOpen ? (
                      <ChevronUp size={24} />
                    ) : (
                      <ChevronDown size={24} />
                    )}
                  </div>
                  ):<p onClick={()=>setHeadeTitle(item.value)}>{item.value}</p>}
                </div>
                
                {nestlistOpen && nestItem.id === item.id ? (
                  
                  <ul style={{ display: "flex", flexDirection: "column" }}>
                    { nestItem.options.length>0?
                    nestItem.options.map((ite) => (
                      <li
                        key={ite.id}
                        className="dd-list-item"
                        onClick={() => toggleNestItem(item.id, ite.id)}
                      >
                        <div className="dd-header-title-list">{ite.value}</div>
                      </li>
                    ))
                    :<p></p>}
                  </ul> 
                ) : (
                  <ul></ul>
                )}
              </div>
            </li>
            
          )
          
          
          )}
        </ul>
      )}
    </div>
  );
}
