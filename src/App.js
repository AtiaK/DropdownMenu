import React, { Component, useState} from 'react';
import Dropdown from './dropdown'

export default function App() {
   const [key,setKey] =useState('')
    const state = {
      location: [
        {
          id: 0,
          title: 'New York',
          selected: false,
          key: 'location',
         
        },
        {
          id: 1,
          title: 'Dublin',
          selected: false,
          key: 'location',
          
        },
        {
          id: 2,
          title: 'California',
          selected: false,
          key: 'location',
        },
        {
          id: 3,
          title: 'Istanbul',
          selected: false,
          key: 'location',
        },
        {
          id: 4,
          title: 'Izmir',
          selected: false,
          key: 'location',
        },
        {
          id: 5,
          title: 'Oslo',
          selected: false,
          key: 'location',
        },
        {
          id: 6,
          title: 'Zurich',
          selected: false,
          key: 'location',
        },
      ],
      fruit: [
        {
          id: 0,
          title: 'Apple',
          selected: false,
          key: 'fruit',
          options: [
            {id:0, label: "Item 3-1", value: "Item three-One" },
            {id:1, label: "Item 3-2", value: "Item three-Two" }
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
            {id:0, label: "Item 3-1", value: "Item three-One" },
            {id:1, label: "Item 3-2", value: "Item three-Two" }
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
            {id:0, label: "Item 3-1", value: "Item three-One" },
            {id:1, label: "Item 3-2", value: "Item three-Two" }
          ]
        },
        {
          id: 5,
          title: 'Banana',
          selected: false,
          key: 'fruit',
          options: [
            {id:0, label: "Item 3-1", value: "Item three-One" },
            {id:1, label: "Item 3-2", value: "Item three-Two" }
          ]
        },
        {
          id: 6,
          title: 'Blueberry',
          selected: false,
          key: 'fruit',
          options: [
            {id:0, label: "Item 3-1", value: "Item three-One" },
            {id:1, label: "Item 3-2", value: "Item three-Two" }
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
      ],
    };
  

  const resetThenSet = (id, key) => {
    const temp = JSON.parse(JSON.stringify(state[key]));
    temp.forEach((item) => item.selected = false);
    temp[id].selected = true;
    setKey(temp)
  }
    return (
      <div className="App">
       
        <h3>Searchable</h3>
          <Dropdown
            searchable={['Search for fruit', 'No matching fruit']}
            title="Select fruit"
            list={state.fruit}
            resetThenSet={resetThenSet}
          />
      
      </div>
    );
  
}
