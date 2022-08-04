import React from 'react';
import {act, render} from '@testing-library/react';
import App from './App';
import ToDoListComponent from './ToDoListComponent';
import * as ToDoListService from './ToDoListService';

jest.mock('./ToDoListComponent', () => jest.fn());

const mockGetToDoListItems = jest.spyOn(ToDoListService, 'getToDoListItems');

describe('The to do list page', () => {
    it('gets the to do items and passes them to the component', async () => {
        const expected = [
            'Vibe',
            'Listen to the Pina Colada song or something?',
            "SUNSCREEN DON'T FORGET AGAIN",
            'Get a closer look at that weird smelly thing that just washed up',
            'Aloe vera (I forgot sunscreen again)',
        ];

        mockGetToDoListItems.mockResolvedValue(expected);

        await act(async() => {render(<App />);})

        expect(mockGetToDoListItems).toHaveBeenCalledTimes(1);
        expect(ToDoListComponent).toHaveBeenCalledWith({toDoItems: expected}, {});
    });
});
