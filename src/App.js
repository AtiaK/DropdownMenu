import logo from './logo.svg';
import './App.css';
import DropDownCustom from './DropDownCustom';
import { useEffect } from 'react';
import ImageUpload from './components/imageUpload';

//import Dropdown from './DropdownMenu';

function App() {
  const list = [
    { id:0, key: 
      'location',
      selected: false,
      label: "Item 1", value: "Item One" ,
      options: [
        { id:0,label: "Item 1-1", value: "Item one-One" },
        { id:1,label: "Item 1-2", value: "Item one-Two" }
      ] },
    {
      id:1,
      key: 'location',
      selected: false,
    label: "Item 2", value:"Item two",
    
    options: [
      {id:0, label: "Item 2-1", value: "Item Two-One" },
      {id:1, label: "Item 2-2", value: "Item Two-Two" }
    ] 
  },
  {id:2, key: 'location',
   selected: false, 
   label: "Item 3", 
   value: "Item Three",
   options: [
    {id:0, label: "Item 3-1", value: "Item three-One" },
    {id:1, label: "Item 3-2", value: "Item three-Two" }
  ] },
  {id:3, key: 'location',
   selected: false, 
   label: "Item 4", 
   value: "Item four",
   options: [] }
]
  // const list=[
  //   {
  //       id: 0,
  //       title: 'New York',
  //       students:[{name:'Name',department:'bscs'}],
  //       selected: false,
  //       key: 'location'
  //   },
  //   {
  //     id: 1,
  //     title: 'Dublin',
  //     students:[{name:'Name',department:'bscs'}],
  //     selected: false,
  //     key: 'location'
  //   },
  //   {
  //     id: 2,
  //     title: 'California',
  //     students:[{name:'Name',department:'bscs'}],
  //     selected: false,
  //     key: 'location'
  //   },
  //   {
  //     id: 3,
  //     title: 'Istanbul',
  //     students:[{name:'Name',department:'bscs'}],
  //     selected: false,
  //     key: 'location'
  //   },
  //   {
  //     id: 4,
  //     title: 'Izmir',
  //     students:[{name:'Name',department:'bscs'}],
  //     selected: false,
  //     key: 'location'
  //   },
  //   {
  //     id: 5,
  //     title: 'Oslo',
  //     selected: false,
  //     students:[{name:'Name',department:'bscs'},{name:'Name',department:'bscs'},{name:'Name',department:'bscs'}],
  //     key: 'location'
  //   }
  // ]

  // useEffect=(()=>{
  //   const count = list.filter(function(a) { return a.selected; }).length;
  //   if(count === 0){
  //     return {headerTitle: list.title}
  //   }
  //   else if(count === 1){
  //     return {headerTitle: `${count} ${list.titleHelper}`}
  //   }
  //   else if(count > 1){
  //     return {headerTitle: `${count} ${list.titleHelper}s`}
  //   }
  // },[list])

  
  return (
    <div className="App">
      <DropDownCustom
         title="Select"
         list={list}
        
      />
    
    </div>
  );
}

export default App;
