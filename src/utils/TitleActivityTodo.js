import React from 'react'

function TitleActivityTodo(props) {
  return (
    <div>
        <p className={props.className} data-cy={props.datacy}>{props.activityTitle}</p>
        <p className={props.className} data-cy={props.datacy}>{props.todoTitle}</p>
    </div>
  )
}

export default TitleActivityTodo;