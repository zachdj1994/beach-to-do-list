import React from 'react';
import {act, render} from '@testing-library/react';
import App from './App';
import ToDoListComponent from './to-do-list/ToDoListComponent';
import * as ToDoListService from './to-do-list/ToDoListService';

jest.mock('./to-do-list/ToDoListComponent', () => jest.fn());

const mockGetToDoListItems = jest.spyOn(ToDoListService, 'getToDoListItems');

describe('The to do list page', () => {
    it('gets the to do items and passes them to the component', async () => {
        const expected = [
            'Vibe',
            'Listen to the Pina Colada song or something?',
            "SUNSCREEN DON'T FORGET AGAIN",
            'ooh, dolphins!!!',
            'Aloe vera (I forgot sunscreen again)',
        ];

        mockGetToDoListItems.mockResolvedValue(expected);

        await act(async() => {render(<App />);})

        expect(mockGetToDoListItems).toHaveBeenCalledTimes(1);
        expect(ToDoListComponent).toHaveBeenCalledWith({toDoItems: expected}, {});
    });
});
