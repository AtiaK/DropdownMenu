import React, { useState,useRef } from 'react';
import './styles/global.sass';
import { ChevronDown, ChevronUp } from "react-feather";
export default function DropDown(props:any) {
  
  const list = props.list;

  const [location, setLocation] = useState(props.list);
  const [listOpen, setListOpen] = useState(false);
  const [nestlistOpen, setnestListOpen] = useState(false);
  const [nestItem, setNestItem] = useState({id:0,key:'',selected:false,title:'',options:[]});
  const [keyword, setkeyword] = useState("");
  const [searchField, setSearchField] = useState(React.createRef<HTMLInputElement>());
  const searchable=['Search for fruit', 'No matching fruit']
  const [headerTitle, setHeadeTitle] = useState(props.title);
  
 
  const refs = list.reduce((acc:any, value:any) => {
    acc[value.id] = React.createRef();
    return acc;
  }, {});
 
  
  const handleClick = (id:any) =>
    refs[id].current.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });

  const toggleNestItem = (id:any, opId:any) => {
    let temp = list[id].options[opId];
    console.log(temp.value);
    setHeadeTitle(temp.value);
    setListOpen(false)
    setLocation(list[id].selected);
    setTimeout(() => {

      setListOpen(true)
      setnestListOpen((prevState) => !prevState);
    }, 400);
    if(listOpen){
      handleClick(id)
    }
  };

  const toggleItem = (id:any, key:any) => {
    let tempp = list[id];
    setNestItem(tempp);
    setnestListOpen((prevState) => !prevState);
    setkeyword("");
    let temp = list[id];
    temp.selected = !temp.selected;
    list[id] = temp;
    setLocation(temp.selected);
  };

  const toggleList=()=>{
   
      setListOpen((prevState:any)=>!prevState.listOpen)
      setkeyword('')
      if (listOpen && searchField.current) {
        searchField.current.focus();
        setkeyword('')
      }
  }

 const filterList=(e:any)=>{
      setkeyword(e.target.value.toLowerCase())
  }

 const listItems=()=>{
    const { list, searchable } = props;
    
    let tempList = list;
    
    if (keyword.length) {
      let nestTempList:any[]=[]
      tempList = list
        .filter((item:any) => {
          if(item.title.toLowerCase().slice(0, keyword.length).includes(keyword)){
              nestTempList.push(item)
          }
          item.options.filter((option:any)=>{
            if(option.label.toLowerCase().slice(0, keyword.length).includes(keyword)){
              nestTempList.push(item)
              setnestListOpen(true)
            }
          })
        }   
        ).sort((a:any, b:any) => {
          if (a.title < b.title) { return -1; }
          if (a.title > b.title) { return 1; }
          return 0;
        });
     
     tempList=nestTempList
    }

    if (tempList.length) {
      return (
        tempList.map((item:any) => (
          <li
          className="dd-list-item"
          id={item.id}
          ref={refs[item.id]}
          key={item.id}
          onClick={() => toggleItem(item.id, item.key)}
        >
          <button
            type="button"
            className="dd-list-item"
            key={item.id}
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
                    nestItem.options.map((ite:any) => (
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

