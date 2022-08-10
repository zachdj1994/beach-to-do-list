import React, {useState} from 'react';
import PropTypes from 'prop-types';
import AddItemComponent from './AddItemComponent';

function ToDoListComponent({ toDoItems }: {toDoItems: string[]}) {
    const [showAddItemButton, setShowAddItemButton] = useState(false)
    return(
        <ul className={'To-do-list'}>
            {toDoItems.map((toDoItem, index) => (<li key={index} className={'To-do-list-item'}>{toDoItem}</li>))}
            {showAddItemButton &&
                <li className={'To-do-list-item'}>
                    <AddItemComponent />
                </li>
            }
            <li className={'To-do-list-item'}>
                <button onClick={() => setShowAddItemButton(true)}>Add Item +</button>
            </li>
        </ul>
    );
}

ToDoListComponent.propTypes = {
    toDoItems: PropTypes.arrayOf(PropTypes.string)
}

export default ToDoListComponent;
