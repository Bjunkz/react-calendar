import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import { differenceInCalendarDays } from 'date-fns';
import ToDoList from '../src/components/ToDoList'
import TodaysToDoList from '../src/components/TodaysToDoList'
import './App.css';
import AddToDo from '../src/components/AddToDo'
import Menu from '../src/components/Menu'
import { formatDate } from './helperFunctions';


//funktion till react-calendar
const isSameDay = (a, b) => {
  return differenceInCalendarDays(a, b) === 0;
}

const App = () => {


  // finns localstorage, sätt det i state, annars sätt en tom array
  const reinstateLS = () =>{
      const LS = JSON.parse(localStorage.getItem('toDoList'))
      if(LS === null){
        return []
      } else {
        return LS
      }
  }

const [value, onChange] = useState(new Date());
const [toDoList, setToDoList] = useState(reinstateLS)
const [showAddToDo, setAddToDo] = useState(false)
const [showTodaysToDoList, setShowTodaysToDoList] = useState(false)
const [showToDoList, setShowToDoList] = useState(false)
  
const tileContent = ({ date, view }) => {
  const datesToAddContentTo = toDoList.map(key => new Date(key.deadline))
  // Add class to tiles in month view only
  if (view === 'month') {
    // Check if a date React-Calendar wants to check is on the list of dates to add class to
    if (datesToAddContentTo.find(dDate => isSameDay(dDate, date))) {
      return '.';
    }
  }
}

    const onClickDay = () => {
      setAddToDo(true)
      setShowTodaysToDoList(true)
      setShowToDoList(false)
  }

  const removeAddToDo = (e) => {
    e.preventDefault()
    if(showAddToDo===true){
      setAddToDo(false)
    } 
  }

  const addToDoObject = (event, data) => {
      event.preventDefault()
      console.log(event, data)
      const state = toDoList
      state.push(data)
      console.log(state)
      setToDoList(state)
      localStorage.setItem("toDoList", JSON.stringify(state))
  }

  const toggleCheckbox = (name, boolean) => {
      const state = toDoList
      const toggleObject = state.find(object => object.assignement === name)
      toggleObject.done = boolean;
      setToDoList(state)
      localStorage.setItem("toDoList", JSON.stringify(state))
  }

  const removeToDoObject = (event) => {
      const name = event.target.getAttribute('name')
      const deadline = event.target.getAttribute('deadline')
      setToDoList(toDoList.filter(item => item.assignement !== name && item.deadline !== deadline))
      localStorage.setItem("toDoList", JSON.stringify(toDoList.filter(item => item.assignement !== name && item.deadline !== deadline)))
  }

  const displayToDoList = (e) => {
    setShowToDoList(true)
    setShowTodaysToDoList(false)
  }

  return (
    <div className="main">
      <div className="calendar">
      <h2>TO DO-list</h2>
      <Calendar
        onClickDay={onClickDay}
        onChange={onChange}
        value={value}
        tileContent={tileContent}
      />
      <Menu setShowToDoList={displayToDoList} value="tjena"/>
      {showAddToDo ?  <AddToDo value={formatDate(value)} cancel={removeAddToDo} addToDoObject={addToDoObject} /> : ''}
      {showTodaysToDoList ? <TodaysToDoList toDoList={toDoList} today={formatDate(value)} removeToDoObject={removeToDoObject} toggleCheckbox={toggleCheckbox}/> : ''}
      {showToDoList ? <ToDoList toDoList={toDoList} removeToDoObject={removeToDoObject} toggleCheckbox={toggleCheckbox}/> : ''}
    </div>

    </div>
  );
}

export default App