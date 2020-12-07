import React, {useState} from 'react';
import Dropdown from './dropdown'

export default function App() {
   const [key,setKey] =useState('')
    const state = [

      {
        id: 0,
        title: 'Apple',
        selected: false,
        key: 'fruit',
        options: [
          {id:0, label: "Item 3-1", value: "Item one-One" },
          {id:1, label: "Item 3-2", value: "Item one-Two" }
        ]
      },
      {
        id: 1,
        title: 'Orange',
        selected: false,
        key: 'fruit',
        options:[]
      },
      {
        id: 2,
        title: 'Grape',
        selected: false,
        key: 'fruit',
        options: [
          {id:0, label: "Item 3-1", value: "Item two-One" },
          {id:1, label: "Item 3-2", value: "Item two-Two" }
        ]
      },
      {
        id: 3,
        title: 'Pomegranate',
        selected: false,
        key: 'fruit',
        options: [
          {id:0, label: "Item 3-1", value: "Item three-One" },
          {id:1, label: "Item 3-2", value: "Item three-Two" }
        ]
      },
      {
        id: 4,
        title: 'Strawberry',
        selected: false,
        key: 'fruit',
        options: [
          {id:0, label: "Item 3-1", value: "Item four-One" },
          {id:1, label: "Item 3-2", value: "Item four-Two" }
        ]
      },
      {
        id: 5,
        title: 'Banana',
        selected: false,
        key: 'fruit',
        options: [
          {id:0, label: "Item 3-1", value: "Item five-One" },
          {id:1, label: "Item 3-2", value: "Item five-Two" }
        ]
      },
      {
        id: 6,
        title: 'Blueberry',
        selected: false,
        key: 'fruit',
        options: [
          {id:0, label: "Item 3-1", value: "Item six-One" },
          {id:1, label: "Item 3-2", value: "Item seven-Two" }
        ]
      },
      {
        id: 7,
        title: 'Watermelon',
        selected: false,
        key: 'fruit',
        options: [
          {id:0, label: "Item 3-1", value: "Item three-One" },
          {id:1, label: "Item 3-2", value: "Item three-Two" }
        ]
      },
      {
        id: 8,
        title: 'Water',
        selected: false,
        key: 'fruit',
        options: [],
        
      },


      {
        id: 9,
        title: 'Apples',
        selected: false,
        key: 'fruit',
        options: [
          {id:0, label: "Item 3-1", value: "Item three-One" },
          {id:1, label: "Item 3-2", value: "Item three-Two" }
        ]
      },
      {
        id: 10,
        title: 'Oranges',
        selected: false,
        key: 'fruit',
        options:[]
      },
      {
        id:11,
        title: 'Grapes',
        selected: false,
        key: 'fruit',
        options: [
          {id:0, label: "Item 3-1", value: "Item three-One" },
          {id:1, label: "Item 3-2", value: "Item three-Two" }
        ]
      },
      {
        id: 12,
        title: 'Pomegranates',
        selected: false,
        key: 'fruit',
        options: [
          
        ]
      },
      {
        id: 13,
        title: 'Strawberrys',
        selected: false,
        key: 'fruit',
        options: [
        
        ]
      },
      {
        id: 14,
        title: 'Bananas',
        selected: false,
        key: 'fruit',
        options: [
         
        ]
      },
      {
        id: 15,
        title: 'Blueberrys',
        selected: false,
        key: 'fruit',
        options: [
          
        ]
      },
      {
        id: 16,
        title: 'Watermelons',
        selected: false,
        key: 'fruit',
        options: [
         
        ]
      },
      {
        id: 17,
        title: 'Waters',
        selected: false,
        key: 'fruit',
        options: [],
        
      },
    ]
  
  

  const resetThenSet = (id:any, key:number) => {
    const temp = JSON.parse(JSON.stringify(state[key]));
    temp.forEach((item:any) => item.selected = false);
    temp[id].selected = true;
    setKey(temp)
  }
    return (
      <div className="App">
       
        <h3>Searchable</h3>
          <Dropdown
            searchable={['Search for fruit', 'No matching fruit']}
            title="Select fruit"
            list={state}
            resetThenSet={resetThenSet}
          />
      
      </div>
    );
  
}
