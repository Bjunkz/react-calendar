import React from 'react'

const Menu = (props) => {

  const handleClick = () => {
    props.setShowToDoList(true)
  }

return (
  <div>
    <p>click on a day to add To Do</p>
    <button onClick={handleClick}>Show all To Do's</button>
  </div>
  
)

}

export default Menu;