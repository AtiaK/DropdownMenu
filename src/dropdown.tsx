import React, { useState,useRef , useEffect} from 'react';
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
  const [ch, setCh] = useState(0);
  
  const refs = list.reduce((acc:any, value:any) => {
    acc[value.id] = React.createRef();
    return acc;
  }, {});
 
  useEffect(() => {
if(listOpen === true){
 handleClick(ch)
}
    
  }, [listOpen, ch])
  const handleClick = (id:any) => {
    refs[id].current.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });
  }

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
    handleClick(id)
  };

  const toggleList=()=>{
   
      setListOpen((prevState)=>!prevState)
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
    
    let tempList=list
    let nestList:any[]=[]
    if (keyword.length) {
      tempList = list
        .filter((item:any) => (
          item.title.toLowerCase().slice(0, keyword.length).includes(keyword)
          
          )).sort((a:any, b:any) => {
          if (a.title < b.title) { return -1; }
          if (a.title > b.title) { return 1; }
          return 0;
        });
     
    // YE HAI Dekhna isko
    list.map((item:any)=>{
      return item.options.filter((option:any)=>{
        if(option.value.toString().toLowerCase().slice(0, keyword.length).includes(keyword)){
            nestList.push(item)
        }
      })
    })
    console.log(nestList, "nes")
     
     console.log(tempList, "temp")
  
    }
   
    if (tempList.length ) {
      
      return (
        tempList.map((item:any) => (
          
          <li
          className="dd-list-item"
          id={item.id}
          ref={refs[item.id]}
          key={item.id}
          onClick={() => toggleItem(item.id, item.key)}
        >
         <div className="dd-header">
                <div className={`dd-header-titles ${headerTitle === `${item.title}` ? "active": ""}`}>
                {item.options.length>0?(
                  <div style={{display:"flex", justifyContent:"space-between", width:"100%"}} onClick={()=>setCh(item.id)}>
                    {item.title}
                    {nestlistOpen ? (
                      <ChevronDown size={24} />
                    ) : (
                      <ChevronDown size={24} />
                    )}
                  </div>
                  ):<div style={{width:"100%"}}  onClick={()=>{setHeadeTitle(item.title);  setCh(item.id)}} >{item.title}</div>}


                </div>

                {nestlistOpen && nestItem.id === item.id ? (
                  <ul style={{ display: "flex", flexDirection: "column" }}>
                    {nestItem.options.map((ite: { id: string | number; value: React.ReactNode; }) => (
                      <li
                        key={ite.id}
                        className="dd-list-item"
                        onClick={() => toggleNestItem(item.id, ite.id)}
                      >
                        <div className={`dd-header-title-list ${headerTitle === `${ite.value}` ? "active": ""}`} >{ite.value}</div>
                      </li>
                    ))}
                  </ul>
                ) : (
                  <ul></ul>
                )}
              </div>
           
            {item.selected}
          
          </li>
        ))
      );
    }else if(nestList.length){
      return (
        nestList.map((item:any) => (
          
          <li
          className="dd-list-item"
          id={item.id}
          ref={refs[item.id]}
          key={item.id}
          onClick={() => toggleItem(item.id, item.key)}
        >
         <div className="dd-header">
                <div className={`dd-header-titles ${headerTitle === `${item.title}` ? "active": ""}`}>
                {item.options.length>0?(
                  <div style={{display:"flex", justifyContent:"space-between", width:"100%"}} onClick={()=>setCh(item.id)}>
                    {item.title}
                    {nestlistOpen ? (
                      <ChevronDown size={24} />
                    ) : (
                      <ChevronDown size={24} />
                    )}
                  </div>
                  ):<div style={{width:"100%"}}  onClick={()=>{setHeadeTitle(item.title);  setCh(item.id)}} >{item.title}</div>}


                </div>

                {nestlistOpen && nestItem.id === item.id ? (
                  <ul style={{ display: "flex", flexDirection: "column" }}>
                    {nestItem.options.map((ite: { id: string | number; value: React.ReactNode; }) => (
                      <li
                        key={ite.id}
                        className="dd-list-item"
                        onClick={() => toggleNestItem(item.id, ite.id)}
                      >
                        <div className={`dd-header-title-list ${headerTitle === `${ite.value}` ? "active": ""}`} >{ite.value}</div>
                      </li>
                    ))}
                  </ul>
                ) : (
                  <ul></ul>
                )}
              </div>
           
            {item.selected}
          
          </li>
        ))
      );
    }
    return <div className="dd-list-item no-result">{searchable[1]}</div>;
  }


    return (
      <div className="dd-wrapper">
         <div className="dd-headers" onClick={toggleList}>
        
        <div className="dd-header-title">{headerTitle}</div>
       
        {listOpen ? <ChevronUp size={24} /> : <ChevronDown size={24} />}
      </div>
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
              <ul id="dd-list"  >
                {listItems()}
              </ul>
            </div>
          
          </div>
        )}
      </div>
    );
}

