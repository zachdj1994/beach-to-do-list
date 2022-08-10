import * as ToDoListService from './ToDoListService';
import {fireEvent, render, screen} from '@testing-library/react';
import AddItemComponent from './AddItemComponent';

const mockAddAnItem = jest.spyOn(ToDoListService, 'addAnItem');

describe('The add item component', () => {
    describe('on submit', () => {
        it('makes a call to the service with the form data', () => {
            render(<AddItemComponent />);
            fireEvent.change(screen.getByTestId('text-field'), { target: { value: 'Find a cool rock or shell' } })
            fireEvent.submit(screen.getByTestId('add-item-component'));

            expect(mockAddAnItem).toHaveBeenCalledWith('Find a cool rock or shell');
        });
    });
});
