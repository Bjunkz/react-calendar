import React from 'react'

class AddToDo extends React.Component{

  state = {
    toDoObject: {
    deadline: `${this.props.value + "T00:00"}`,
    assignement: '',
    done: false
    }
  }

assignementRef = React.createRef()
deadlineRef = React.createRef()

handleChange = (event) => {
  const toDoObject = {...this.state.toDoObject, [event.currentTarget.name]: event.currentTarget.value}
  this.setState({toDoObject})
  
}

createToDo = (event) => {
  event.preventDefault()
  const ToDoObject = {
    deadline: this.deadlineRef.current.value,
    assignement: this.assignementRef.current.value,
    done: false
  }
  console.log(ToDoObject)

  this.props.addToDoObject(event,ToDoObject)

  event.currentTarget.reset()
  this.props.cancel(event)
}

  render(){
  return (
    <div className="addToDo">
      <form onSubmit={this.createToDo}>
        <input name="assignement" ref={this.assignementRef} type="text" onChange={this.handleChange} placeholder="Name of To-Do"></input>
        <input name="deadline" ref={this.deadlineRef} type="datetime-local" onChange={this.handleChange} value={this.props.value + 'T00:00'} ></input>
        <button type="submit">Add to do</button>
        <button onClick={this.props.cancel}>cancel</button>
      </form>
    </div>
  )
  }
}

export default AddToDo