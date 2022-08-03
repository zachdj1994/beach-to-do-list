import React from 'react';
import { render, screen } from '@testing-library/react';
import ToDoListComponent from './ToDoListComponent';

describe('The to do list component', () => {
    it('displays a list of to-do items', () => {
        const toDoItems = [
            'Vibe',
            'Listen to Beach Boys or something?',
            "SUNSCREEN DON'T FORGET AGAIN",
            'Get a closer look at that weird smelly thing that just washed up',
            'Aloe vera (I forgot sunscreen again)',
        ];

        render(<ToDoListComponent toDoItems={toDoItems}/>)

        screen.getByText('Vibe');
        screen.getByText('Listen to Beach Boys or something?');
        screen.getByText("SUNSCREEN DON'T FORGET AGAIN");
        screen.getByText('Get a closer look at that weird smelly thing that just washed up');
        screen.getByText('Aloe vera (I forgot sunscreen again)');
    });
})