import React from 'react';
import Add from '../assets/tabler_plus.png';

function ActivityAddButton(props) {
    return (
        <div>
            <button type="button" className="activity-add-button text-center py-3 px-5" data-cy={props.datacy}><img src={Add} alt="add" />{' '}Tambah</button>
        </div>
    )
}

export default ActivityAddButton;