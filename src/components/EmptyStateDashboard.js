import React from 'react';
import ActivityEmptyState from "../assets/activity-empty-state.png";
import ActivityAddButton from '../utils/ActivityAddButton';
import NavbarTodoList from '../utils/NavbarTodoList';
import TitleActivityTodo from '../utils/TitleActivityTodo';

function EmptyStateDashboard() {
    return (
        <div>
            {/* Navbar */}
            <NavbarTodoList data-cy="dashboard-empty-state" />


            {/* Section */}
            <div className='container py-5'>
                <div className='row justify-content-between'>

                    <div className='col-md-9'>
                        <TitleActivityTodo className="activity-title" activityTitle="Activity" data-cy="activity-title"/>
                    </div>

                    <div className='col-md-3'>
                        <ActivityAddButton />
                    </div>

                </div>
            </div>


            {/* Card Section */}
            <div className='card-activity-empty-state'>
                <img src={ActivityEmptyState} className="rounded mx-auto d-block" alt='activity-empty-state' />
            </div>


        </div>
    )
}

export default EmptyStateDashboard;