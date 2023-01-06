import React from 'react';

function NavbarTodoList(props) {
    return (
        <div className="activity-empty-state">
            <nav className="navbar">
                <div className='container'>
                    <span className="header-title navbar-brand mb-0 h1" data-cy={props.datacy}>TO DO LIST APP</span>
                </div>
            </nav>
        </div>
    )
}

export default NavbarTodoList;