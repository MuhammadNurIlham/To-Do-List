import React from 'react'
import ActivityAddButton from '../utils/ActivityAddButton'
import NavbarTodoList from '../utils/NavbarTodoList'
import TitleActivityTodo from '../utils/TitleActivityTodo'

function DashboardActivity() {
    return (
        <div>
            {/* Navbar */}
            <NavbarTodoList />


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
            </div>
        </div>
    )
}

export default DashboardActivity;