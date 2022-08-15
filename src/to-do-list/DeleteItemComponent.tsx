import React from 'react';
import {deleteAnItem} from './ToDoListService';

type Props = {
    toDoItemKey: number
    setToDoListItems: (result: ToDoList) => void
    toDoListItems: ToDoList

}

function DeleteItemComponent({ toDoItemKey, setToDoListItems, toDoListItems }: Props) {
    const handleOnClick = (toDoItemKey: number, setToDoListItems: (result: ToDoList) => void, toDoList: ToDoList) => {
        deleteAnItem(toDoItemKey);
        setToDoListItems(toDoListItems.filter(item => item.key !== toDoItemKey))
    }

    return(
        <button onClick={() => handleOnClick(toDoItemKey, setToDoListItems, toDoListItems)} >Delete</button>
    );
}

export default DeleteItemComponent;
