import React from 'react'

function ActivityAddButton(props) {
    return (
        <div>
            <button type="button" className="activity-add-button text-center py-3 px-5" data-cy={props.datacy}>Tambah</button>
        </div>
    )
}

export default ActivityAddButton;