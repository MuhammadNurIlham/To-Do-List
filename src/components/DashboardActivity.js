import React, { useState } from 'react';
import { useMutation } from 'react-query';
import CardTodo from '../utils/CardTodo'
import NavbarTodoList from '../utils/NavbarTodoList'
import TitleActivityTodo from '../utils/TitleActivityTodo'
import Add from '../assets/tabler_plus.png';
import axios from 'axios';



function DashboardActivity() {
    const [newTodo, setNewTodo] = useState({
        title: "New Activity yes",
    });


    const addTodo = useMutation(async (e) => {
        try {
            e.preventDefault();

            await axios.post('https://todo.api.devcode.gethired.id/activity-groups',{
                activity: newTodo,
            });
            alert("Add New Activity Success");
        } catch (error) {
            console.log(error);
        }

    })



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
                        {/* <ActivityAddButton /> */}
                        <div>
                            <button type="button" className="activity-add-button text-center py-3 px-5" onClick={(e) => addTodo(e)}><img src={Add} alt="add" />{' '}Tambah</button>
                        </div>
                    </div>

                </div>
                <CardTodo />
            </div>
        </div>
    )
}

export default DashboardActivity;