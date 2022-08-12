import * as ToDoListService from './ToDoListService';
import {act, fireEvent, render, screen} from '@testing-library/react';
import AddItemComponent from './AddItemComponent';

const mockAddAnItem = jest.spyOn(ToDoListService, 'addAnItem');

describe('The add item component', () => {
    describe('on submit', () => {
        it('makes a call to the service with the form data', async () => {
            mockAddAnItem.mockResolvedValue({key: 2, text: 'Find a cool rock or shell'})

            await act(async() => {render(<AddItemComponent toDoListItems={[]} setToDoListItems={jest.fn}/>);})
            await act(async () => {
                fireEvent.change(screen.getByTestId('text-field'), { target: { value: 'Find a cool rock or shell' } })
                fireEvent.submit(screen.getByTestId('add-item-component'));
            });

            expect(mockAddAnItem).toHaveBeenCalledWith('Find a cool rock or shell');
        });

        it('updates the to do list', async () => {
            const mockStateSetter = jest.fn();
            const expected = [{key: 1, text: 'Vibe'}, {key: 2, text: 'Find a cool rock or shell'}];
            mockAddAnItem.mockResolvedValue({key: 2, text: 'Find a cool rock or shell'})

            await act(async() => {
                render(<AddItemComponent toDoListItems={[{key: 1, text: 'Vibe'}]} setToDoListItems={mockStateSetter}/>);

            })
            await act(async () => {
                fireEvent.change(screen.getByTestId('text-field'), { target: { value: 'Find a cool rock or shell' } })
                fireEvent.submit(screen.getByTestId('add-item-component'));
            });

            expect(mockStateSetter).toHaveBeenCalledWith(expected);
        });
    });
});
