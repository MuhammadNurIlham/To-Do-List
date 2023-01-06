import React from 'react'
import ActivityAddButton from '../utils/ActivityAddButton'
import CardTodo from '../utils/CardTodo'
import NavbarTodoList from '../utils/NavbarTodoList'
import TitleActivityTodo from '../utils/TitleActivityTodo'

function DashboardActivity() {
    return (
        <div>
            {/* Navbar */}
            <NavbarTodoList data-cy="dashboard-new-item" />


            {/* Section */}
            <div className='container py-5'>
                <div className='row justify-content-between'>

                    <div className='col-md-9'>
                        <TitleActivityTodo className="activity-title" activityTitle="Activity" />
                    </div>

                    <div className='col-md-3'>
                        <ActivityAddButton />
                    </div>

                </div>
                <CardTodo />
            </div>
        </div>
    )
}

export default DashboardActivity;