import React from 'react';
import { FaAngleLeft } from "react-icons/fa";



function TitleActivityTodo(props) {
  return (
    <div>
      <p className={props.className} data-cy={props.datacy}>{props.activityTitle}</p>
      <p className={props.className} data-cy={props.datacy}><FaAngleLeft />{props.todoTitle}</p>
    </div>
  )
}

export default TitleActivityTodo;