import logo from './logo.svg';
import './App.css';
import DropDownCustom from './DropDownCustom';
import { useEffect } from 'react';

//import Dropdown from './DropdownMenu';

function App() {
  
  const list=[
    {
        id: 0,
        title: 'New York',
        students:[{name:'Name',department:'bscs'}],
        selected: false,
        key: 'location'
    },
    {
      id: 1,
      title: 'Dublin',
      students:[{name:'Name',department:'bscs'}],
      selected: false,
      key: 'location'
    },
    {
      id: 2,
      title: 'California',
      students:[{name:'Name',department:'bscs'}],
      selected: false,
      key: 'location'
    },
    {
      id: 3,
      title: 'Istanbul',
      students:[{name:'Name',department:'bscs'}],
      selected: false,
      key: 'location'
    },
    {
      id: 4,
      title: 'Izmir',
      students:[{name:'Name',department:'bscs'}],
      selected: false,
      key: 'location'
    },
    {
      id: 5,
      title: 'Oslo',
      selected: false,
      students:[{name:'Name',department:'bscs'}],
      key: 'location'
    }
  ]

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
         title="Select location"
         list={list}
        
      />
    </div>
  );
}

export default App;
