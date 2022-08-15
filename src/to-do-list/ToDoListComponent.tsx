import React, {useEffect, useState} from 'react';
import {getToDoListItems} from './ToDoListService';
import AddItemComponent from './AddItemComponent';
import DeleteItemComponent from './DeleteItemComponent';

function ToDoListComponent() {
    const [toDoListItems, setToDoListItems] = useState<ToDoList>();
    useEffect(() => {
        getToDoListItems().then((result: ToDoList) => {
            setToDoListItems(result);
        });
    }, []);

    const [showAddItemButton, setShowAddItemButton] = useState(false)
    return(
        <ul className={'To-do-list'}>
            {toDoListItems &&
                toDoListItems.map((toDoItem: ToDoListItem) => (
                        <li key={toDoItem.key} className={'To-do-list-item'}>
                            {toDoItem.text}
                            <DeleteItemComponent toDoItemKey={toDoItem.key} toDoListItems={toDoListItems} setToDoListItems={setToDoListItems} />
                        </li>
                ))}
            {showAddItemButton && toDoListItems &&
                <li key={-1} className={'To-do-list-item'}>
                    <AddItemComponent toDoListItems={toDoListItems} setToDoListItems={setToDoListItems}/>
                </li>
            }
            <li key={-2} className={'To-do-list-item'}>
                <button onClick={() => setShowAddItemButton(true)}>Add Item +</button>
            </li>
        </ul>
    );
}

export default ToDoListComponent;
