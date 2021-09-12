import React from 'react'

class ToDoObject extends React.Component{

  handleClick = (event) =>{
    this.props.removeToDoObject(event)
  }

  handleCheckboxClick = (event) => {
    // console.log(event.target.checked)
    // console.log(event.target.name)
    this.props.toggleCheckbox(event.target.name, event.target.checked)
  }

  render(){
    return(
    <div className="ToDoObject" >
      <p>{this.props.assignement}</p>
      <p>{this.props.deadline}
      {this.props.done ? <input type="checkbox" name={this.props.assignement} defaultChecked onClick={this.handleCheckboxClick}/> : <input type="checkbox"  name={this.props.assignement} onClick={this.handleCheckboxClick}/> }
      <button name={this.props.assignement} deadline={this.props.deadline} onClick={this.handleClick}>delete</button></p>
    </div>
    )
  }
}

export default ToDoObject