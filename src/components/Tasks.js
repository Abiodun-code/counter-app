import React from 'react';
import {FaTimes} from 'react-icons/fa'


function Tasks({task, onDelete, onToggle}) {
    return (
        <div className={`task ${task.reminder ? 'reminder' : ''} `} onDoubleClick={() => onToggle(task.id)}>
            <h3>
                {task.text} <FaTimes style={{color: 'red', cursor: 'pointer'}} onClick={onDelete} />
            </h3>
            <p>{task.days}</p>
        </div>
    );
}
export default Tasks;