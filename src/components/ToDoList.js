import React from 'react'
import ToDoObject from './ToDoObject'




const ToDoList = (props) => {

const sortedList = props.toDoList.sort((a,b) => a.deadline > b.deadline ? 1 : -1 )
  
 const printList = Object.keys(sortedList).map(key => {
  return (
    <ToDoObject
    deadline={props.toDoList[key].deadline}
    assignement={props.toDoList[key].assignement}
    done={props.toDoList[key].done}
    key={key}
    index={key}
    removeToDoObject={props.removeToDoObject}
     toggleCheckbox={props.toggleCheckbox}

    />
  )
})

return printList   

}

export default ToDoList;