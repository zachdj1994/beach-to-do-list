import React from 'react';
import {act, fireEvent, render, screen} from '@testing-library/react';
import ToDoListComponent from './ToDoListComponent';
import * as ToDoListService from './ToDoListService';
import * as AddItemComponent from './AddItemComponent';
import * as DeleteItemComponent from './DeleteItemComponent';

jest.mock('./AddItemComponent', () => {
    return jest.fn().mockImplementation(() => {
        return null;
    });
});

jest.mock('./DeleteItemComponent', () => {
    return jest.fn().mockImplementation(() => {
        return null;
    });
});

const mockGetToDoListItems = jest.spyOn(ToDoListService, 'getToDoListItems');

describe('The to do list component', () => {
    it('gets and displays the to do items', async () => {
        mockGetToDoListItems.mockResolvedValue([
            {key: 10, text: 'Vibe'},
            {key: 11, text: 'Listen to the Pina Colada song or something?'},
            {key: 12, text: "SUNSCREEN DON'T FORGET AGAIN"},
            {key: 13, text: 'ooh, dolphins!!!'},
            {key: 14, text: 'Aloe vera (I forgot sunscreen again)'},
        ]);

        await act(async() => {render(<ToDoListComponent />);});

        expect(mockGetToDoListItems).toHaveBeenCalledTimes(1);
        screen.getByText('Vibe');
        screen.getByText('Listen to the Pina Colada song or something?');
        screen.getByText("SUNSCREEN DON'T FORGET AGAIN");
        screen.getByText('ooh, dolphins!!!');
        screen.getByText('Aloe vera (I forgot sunscreen again)');
    });

    it('renders delete buttons for the to do list items', async () => {
        mockGetToDoListItems.mockResolvedValue([
            {key: 10, text: 'Vibe'},
            {key: 11, text: 'Listen to the Pina Colada song or something?'},
            {key: 12, text: "SUNSCREEN DON'T FORGET AGAIN"},
            {key: 13, text: 'ooh, dolphins!!!'},
            {key: 15, text: 'Aloe vera (I forgot sunscreen again)'},
        ]);

        await act(async() => {render(<ToDoListComponent />);});

        expect(DeleteItemComponent).toHaveBeenCalledTimes(5);
        expect(DeleteItemComponent).toHaveBeenCalledWith({toDoItemKey: 10,  setToDoListItems: expect.any(Function), toDoListItems: expect.any(Array)}, {})
        expect(DeleteItemComponent).toHaveBeenCalledWith({toDoItemKey: 11,  setToDoListItems: expect.any(Function), toDoListItems: expect.any(Array)}, {})
        expect(DeleteItemComponent).toHaveBeenCalledWith({toDoItemKey: 12,  setToDoListItems: expect.any(Function), toDoListItems: expect.any(Array)}, {})
        expect(DeleteItemComponent).toHaveBeenCalledWith({toDoItemKey: 13,  setToDoListItems: expect.any(Function), toDoListItems: expect.any(Array)}, {})
        expect(DeleteItemComponent).toHaveBeenCalledWith({toDoItemKey: 15,  setToDoListItems: expect.any(Function), toDoListItems: expect.any(Array)}, {})
    });

    describe('the add item button', () => {
        describe('when not clicked', () => {
            it('hides the add item component', async () => {
                mockGetToDoListItems.mockResolvedValue([{key: 1, text: ''}]);

                await act(async() =>{
                    const { queryByTestId } = render(<ToDoListComponent />);
                    expect(queryByTestId('add-item-component')).toBeNull();
                });

            });
        })
        describe('on click', () => {
            it('renders the AddItemComponent and passes it the toDoList state', async () => {
                mockGetToDoListItems.mockResolvedValue([{key: 1, text: ''}]);

                await act(async() => {render(<ToDoListComponent />);})
                fireEvent.click(screen.getByText('Add Item +'));
                expect(AddItemComponent).toHaveBeenCalledWith({toDoListItems: [{key: 1, text: ''}], setToDoListItems: expect.any(Function)}, {})
            });
        })
    })
});
