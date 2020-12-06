/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable react/prop-types */
import React, { useState,useRef } from 'react';
import './styles/global.sass';
import { ChevronDown, ChevronUp } from "react-feather";
export default function DropDown(props) {
  
  const list = props.list;

  const [location, setLocation] = useState(props.list);
  const [listOpen, setListOpen] = useState(false);
  const [nestlistOpen, setnestListOpen] = useState(false);
  const [nestItem, setNestItem] = useState(React.createRef());
  const [keyword, setkeyword] = useState("");
  
  const [searchField, setSearchField] = useState(React.createRef());
  const [searchNestField, setSearchNestField] = useState(React.createRef());
  const [close, setClose] = useState(true);
  const searchable=['Search for fruit', 'No matching fruit']
  const [headerTitle, setHeadeTitle] = useState(props.title);
  
 

  
  const toggleNestItem = (id, opId) => {
    let temp = list[id].options[opId];
    console.log(temp.value);
    setHeadeTitle(temp.value);
    setListOpen(false)
    setLocation(list[id].selected);
    setTimeout(() => {

      setListOpen(true)
      setnestListOpen((prevState) => !prevState);
    }, 400);
    
  };

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
  // const selectItem=(title, id, stateKey)=>{
  //   const { resetThenSet } = props;
  //     setHeadeTitle(title)
  //     setListOpen(false)
  //     resetThenSet(id, stateKey)
  // }

  const toggleList=()=>{
   
      setListOpen(prevState=>!prevState.listOpen)
      setkeyword('')
     
      // eslint-disable-next-line react/destructuring-assignment
      if (listOpen && searchField.current) {
        searchField.current.focus();
        setkeyword('')
      }
    
  }

 const filterList=(e)=>{
  
      setkeyword(e.target.value.toLowerCase())
   
  }

 const listItems=()=>{
    const { list, searchable } = props;
    
    let tempList = list;
    
    if (keyword.length) {
      let nestTempList=[]
      tempList = list
        .filter((item) => {
          if(item.title.toLowerCase().slice(0, keyword.length).includes(keyword)){
              nestTempList.push(item)
          }
          item.options.filter(option=>{
            if(option.label.toLowerCase().slice(0, keyword.length).includes(keyword)){
              nestTempList.push(item)
              setnestListOpen(true)
            }
          })
        }   
        ).sort((a, b) => {
          if (a.title < b.title) { return -1; }
          if (a.title > b.title) { return 1; }
          return 0;
        });
     
     tempList=nestTempList
    }

    if (tempList.length) {
      return (
        tempList.map((item) => (
          <li
          className="dd-list-item"
          id={item.id}
          key={item.id}
          onClick={() => toggleItem(item.id, item.key)}
        >
          <button
            type="button"
            className="dd-list-item"
            key={item.id}
            // onClick={() => selectItem(item.title, item.id, item.key)}
          >
            {item.title}
            {' '}
           
              <div >
                <div>
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
           
            {item.selected}
          </button>
          </li>
        ))
      );
    }
    return <div className="dd-list-item no-result">{searchable[1]}</div>;
  }


    return (
      <div className="dd-wrapper">
        <button
          type="button"
          className="dd-header"
          onClick={toggleList}
        >
          {headerTitle}
        {listOpen
            ?<ChevronUp size={24} /> : <ChevronDown size={24} />}
        </button>
        {listOpen && (
          <div
            role="list"
            className={`dd-list ${searchable ? 'searchable' : ''}`}
            onClick={(e) => e.stopPropagation()}
          >
            {searchable
            && (
              
            <input
              ref={searchField}
              className="dd-list-search-bar"
              placeholder={searchable[0]}
              onChange={(e) => filterList(e)}
            />
            )}
            <div className="dd-scroll-list">
              <ul id="ul-list">
                {listItems()}
              </ul>
            </div>
          
          </div>
        )}
      </div>
    );
}

