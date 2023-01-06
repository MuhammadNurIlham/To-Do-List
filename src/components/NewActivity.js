import React from 'react'
import ActivityAddButton from '../utils/ActivityAddButton'
import NavbarTodoList from '../utils/NavbarTodoList'
import TitleActivityTodo from '../utils/TitleActivityTodo'

import TodoEmptyState from '../assets/todo-empty-state.png';

function NewActivity() {
    return (
        <div>
            {/* Navbar */}
            <NavbarTodoList data-cy="dashboard-empty-state" />


            {/* Section */}
            <div className='container py-5'>
                <div className='row justify-content-between'>

                    <div className='col-md-9'>
                        <TitleActivityTodo className="todo-title" activityTitle="New Activity" />
                    </div>

                    <div className='col-md-3'>
                        <ActivityAddButton />
                    </div>

                </div>
            </div>

            {/* Card Section */}
            <div className='card-activity-empty-state'>
                <img src={TodoEmptyState} className="rounded mx-auto d-block" alt='todo-empty-state' />
            </div>

        </div>
    )
}

export default NewActivity;