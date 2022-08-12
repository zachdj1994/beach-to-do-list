import React from 'react';
import {deleteAnItem} from './ToDoListService';

type Props = {
    toDoItemKey: number
}

function DeleteItemComponent({ toDoItemKey }: Props) {
    const handleOnClick = () => {
        deleteAnItem(toDoItemKey);
    }

    return(
        <button onClick={handleOnClick} >Delete</button>
    );
}

export default DeleteItemComponent;
