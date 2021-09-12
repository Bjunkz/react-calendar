import React from 'react'
import ToDoObject from './ToDoObject'


class TodaysToDoList extends React.Component{

  render(){
    const sortedList = this.props.toDoList.sort((a,b) => a.deadline > b.deadline ? 1 : -1 )
    return(
      <div>
        {Object.keys(sortedList).map(key => {
          if (this.props.toDoList[key].deadline.slice(0,-6) === this.props.today){
            return (
              
            <ToDoObject
            deadline={this.props.toDoList[key].deadline}
            assignement={this.props.toDoList[key].assignement}
            done={this.props.toDoList[key].done}
            key={key}
            index={key}
            removeToDoObject={this.props.removeToDoObject}
            toggleCheckbox={this.props.toggleCheckbox}
            />
            
            )
          }else{
            return ''
          }
        })
        }
      </div>
    )
        
  }
}



export default TodaysToDoList;
