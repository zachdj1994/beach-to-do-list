import React from 'react';
import { render, screen } from '@testing-library/react';
import ToDoListComponent from './ToDoListComponent';

describe('The to do list component', () => {
    it('displays a list of to-do items', () => {
        const toDoItems = [
            'Vibe',
            'Listen to the Pina Colada song or something?',
            "SUNSCREEN DON'T FORGET AGAIN",
            'ooh, dolphins!!!',
            'Aloe vera (I forgot sunscreen again)',
        ];

        render(<ToDoListComponent toDoItems={toDoItems}/>)

        screen.getByText('Vibe');
        screen.getByText('Listen to the Pina Colada song or something?');
        screen.getByText("SUNSCREEN DON'T FORGET AGAIN");
        screen.getByText('ooh, dolphins!!!');
        screen.getByText('Aloe vera (I forgot sunscreen again)');
    });
})