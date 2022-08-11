import React from 'react';
import {act, fireEvent, render, screen} from '@testing-library/react';
import ToDoListComponent from './ToDoListComponent';
import * as ToDoListService from './ToDoListService';

const mockGetToDoListItems = jest.spyOn(ToDoListService, 'getToDoListItems');

describe('The to do list component', () => {
    it('gets and displays the to do items', async () => {
        const expected = [
            'Vibe',
            'Listen to the Pina Colada song or something?',
            "SUNSCREEN DON'T FORGET AGAIN",
            'ooh, dolphins!!!',
            'Aloe vera (I forgot sunscreen again)',
        ];

        mockGetToDoListItems.mockResolvedValue(expected);

        await act(async() => {render(<ToDoListComponent />);})

        expect(mockGetToDoListItems).toHaveBeenCalledTimes(1);
        screen.getByText('Vibe');
        screen.getByText('Listen to the Pina Colada song or something?');
        screen.getByText("SUNSCREEN DON'T FORGET AGAIN");
        screen.getByText('ooh, dolphins!!!');
        screen.getByText('Aloe vera (I forgot sunscreen again)');
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
            it('shows the add item component',async () => {
                mockGetToDoListItems.mockResolvedValue(['']);

                await act(async() => {render(<ToDoListComponent toDoItems={[]}/>);})
                fireEvent.click(screen.getByText('Add Item +'));

                screen.getByTestId('add-item-component');
            });
        })
    })
});
