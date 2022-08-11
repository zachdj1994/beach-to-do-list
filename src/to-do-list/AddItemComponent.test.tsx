import * as ToDoListService from './ToDoListService';
import {act, fireEvent, render, screen} from '@testing-library/react';
import AddItemComponent from './AddItemComponent';

const mockAddAnItem = jest.spyOn(ToDoListService, 'addAnItem');

describe('The add item component', () => {
    describe('on submit', () => {
        it('makes a call to the service with the form data', async () => {
            await act(async() => {render(<AddItemComponent toDoListItems={[]} setToDoListItems={jest.fn}/>);})
            fireEvent.change(screen.getByTestId('text-field'), { target: { value: 'Find a cool rock or shell' } })
            fireEvent.submit(screen.getByTestId('add-item-component'));

            expect(mockAddAnItem).toHaveBeenCalledWith('Find a cool rock or shell');
        });

        it('updates the to do list', async () => {
            const mockStateSetter = jest.fn();
            const expected = ['Vibe', 'Find a cool rock or shell'];

            await act(async() => {render(<AddItemComponent toDoListItems={['Vibe']} setToDoListItems={mockStateSetter}/>);})
            fireEvent.change(screen.getByTestId('text-field'), { target: { value: 'Find a cool rock or shell' } })
            fireEvent.submit(screen.getByTestId('add-item-component'));

            expect(mockStateSetter).toHaveBeenCalledWith(expected);
        });
    });
});
