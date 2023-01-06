import React from 'react'
import ActivityAddButton from '../utils/ActivityAddButton';
import NavbarTodoList from '../utils/NavbarTodoList';
import TitleActivityTodo from '../utils/TitleActivityTodo';

function ListItem() {
    return (
        <div>
            {/* Navbar */}
            <NavbarTodoList data-cy="dashboard-empty-state" />


            {/* Section */}
            <div className='container py-5'>
                <div className='row justify-content-between'>

                    <div className='col-md-9'>
                        <TitleActivityTodo className="todo-title" activityTitle="Daftar Belanja Bulanan" />
                    </div>

                    <div className='col-md-3'>
                        <ActivityAddButton />
                    </div>

                </div>
            </div>
        </div>
    )
}

export default ListItem;