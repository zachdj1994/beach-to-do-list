import React, {useEffect, useState} from 'react';
import PropTypes from 'prop-types';
import AddItemComponent from './AddItemComponent';
import {getToDoListItems} from './ToDoListService';

function ToDoListComponent() {
    const [toDoListItems, setToDoListItems] = useState(['']);
    useEffect(() => {
        getToDoListItems().then((result: GetToDoListResponse) => {
            setToDoListItems(result);
        });
    }, []);

    const [showAddItemButton, setShowAddItemButton] = useState(false)
    return(
        <ul className={'To-do-list'}>
            {toDoListItems.map((toDoItem, index) => (<li key={index} className={'To-do-list-item'}>{toDoItem}</li>))}
            {showAddItemButton &&
                <li className={'To-do-list-item'}>
                    <AddItemComponent toDoListItems={toDoListItems} setToDoListItems={setToDoListItems}/>
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
