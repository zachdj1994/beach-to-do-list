import {addAnItem} from './ToDoListService';
import React, {useState} from 'react';

function AddItemComponent() {
    const [itemValue, setItemValue] = useState('');

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        if (itemValue !== '') {
            addAnItem(itemValue);
        }
    }

    const handleChange = (event: React.FormEvent<HTMLInputElement>) => {
        setItemValue(event.currentTarget.value);
    }

    return(
        <form data-testid={'add-item-component'} onSubmit={handleSubmit} >
            <input type="text" data-testid={'text-field'} onChange={handleChange} />
            <input type="submit" value="Submit" />
        </form>
    )
}

export default AddItemComponent;
