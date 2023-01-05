import React from 'react'

function TitleActivityTodo(props) {
  return (
    <div>
        <p className={props.className}>{props.activityTitle}</p>
        <p className={props.className}>{props.todoTitle}</p>
    </div>
  )
}

export default TitleActivityTodo;