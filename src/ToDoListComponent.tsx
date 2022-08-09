import React from 'react';
import PropTypes from 'prop-types';

function ToDoListComponent({ toDoItems }: {toDoItems: string[]}) {
    return(
        <ul className={'To-do-list'}>
            {toDoItems.map((toDoItem, index) => (<li key={index} className={'To-do-list-item'}>{toDoItem}</li>))}
        </ul>
    );
}

ToDoListComponent.propTypes = {
    toDoItems: PropTypes.arrayOf(PropTypes.string)
}

export default ToDoListComponent
