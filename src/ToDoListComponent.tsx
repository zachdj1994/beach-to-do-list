import React from 'react';
import PropTypes from 'prop-types';

export function ToDoListComponent({ toDoItems }: {toDoItems: string[]}) {
    return(
        <ul>
            {toDoItems.map((toDoItem) => (<li>{toDoItem}</li>))}
        </ul>
    );
}

ToDoListComponent.propTypes = {
    toDoItems: PropTypes.arrayOf(PropTypes.string)
}
