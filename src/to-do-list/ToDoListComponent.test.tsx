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
            'Vibe',
            'Listen to the Pina Colada song or something?',
            "SUNSCREEN DON'T FORGET AGAIN",
            'ooh, dolphins!!!',
            'Aloe vera (I forgot sunscreen again)',
        ]);

        await act(async() => {render(<ToDoListComponent />);})

        expect(mockGetToDoListItems).toHaveBeenCalledTimes(1);
        screen.getByText('Vibe');
        screen.getByText('Listen to the Pina Colada song or something?');
        screen.getByText("SUNSCREEN DON'T FORGET AGAIN");
        screen.getByText('ooh, dolphins!!!');
        screen.getByText('Aloe vera (I forgot sunscreen again)');
    });

    it('renders delete buttons for the to do list items', async () => {
        mockGetToDoListItems.mockResolvedValue([
            'Vibe',
            'Listen to the Pina Colada song or something?',
            "SUNSCREEN DON'T FORGET AGAIN",
            'ooh, dolphins!!!',
            'Aloe vera (I forgot sunscreen again)',
        ]);

        await act(async() => {render(<ToDoListComponent />);})

        expect(DeleteItemComponent).toHaveBeenCalledTimes(6);
    });

    describe('the add item button', () => {
        describe('when not clicked', () => {
            it('hides the add item component', async () => {
                mockGetToDoListItems.mockResolvedValue(['']);

                await act(async() =>{
                    const { queryByTestId } = render(<ToDoListComponent toDoItems={[]}/>);
                    expect(queryByTestId('add-item-component')).toBeNull();
                });

            });
        })
        describe('on click', () => {
            it('renders the AddItemComponent and passes it the toDoList state', async () => {
                mockGetToDoListItems.mockResolvedValue(['']);

                await act(async() => {render(<ToDoListComponent toDoItems={[]}/>);})
                fireEvent.click(screen.getByText('Add Item +'));
                expect(AddItemComponent).toHaveBeenCalledWith({toDoListItems: [""], setToDoListItems: expect.any(Function)}, {})
            });
        })
    })
});
