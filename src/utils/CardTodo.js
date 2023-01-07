import React, { useEffect, useState } from 'react';
import { FaRegTrashAlt } from "react-icons/fa";
import axios from 'axios';

function CardTodo() {
    const [todo, setTodo] = useState();


    const getTodo = async (email) => {
        try {
            const response = await axios.get('https://todo.api.devcode.gethired.id/activity-groups', {
                params: {
                    email: email,
                },
            });
            setTodo(response.data.data);
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        getTodo();
    }, []);







    return (
        <div className='cardTodo py-5'>

            <div className="row row-cols-1 row-cols-md-4 g-4">

                {todo?.map((item, index) => (
                    <div className="col" key={index}>
                        <div className="card">
                            <div className="card-body">
                                <h5 className="card-title pb-5">{item?.title}</h5>
                            </div>
                            <div className="card-footer pt-5 border border-0">
                                <small className="text-muted">{item?.created_at}</small>
                                <FaRegTrashAlt />
                            </div>
                        </div>
                    </div>
                ))}

            </div>
        </div>
    )
}

export default CardTodo;