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
                        <TitleActivityTodo className="todo-title" todoTitle="Daftar Belanja Bulanan" />
                    </div>

                    <div className='col-md-3'>
                        <ActivityAddButton />
                    </div>

                </div>

                <div cllassName="card bg-primary">
                    <div cllassName="card-body">
                        <div cllassName="form-check">
                            <input cllassName="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                            <label cllassName="form-check-label" for="flexCheckDefault">{''}
                                <p cllassName="text-decoration-line-through">This text has a line going through it.</p>
                            </label>
                        </div>
                    </div>
                </div>

                <div cllassName="card">
                    <div cllassName="card-body">
                        <div cllassName="form-check">
                            <input cllassName="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                            <label cllassName="form-check-label" for="flexCheckDefault">
                                <p cllassName="fw-semibold">This text has a line going through it.</p>
                            </label>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default ListItem;