import * as ToDoListService from './ToDoListService';
import {fireEvent, render, screen} from '@testing-library/react';
import DeleteItemComponent from './DeleteItemComponent';

describe('The delete item component', () => {
    describe('on click', () => {
        it('tells the service to delete by id', async () => {
            const toDoItemKey = 10;
            const mockDeleteAnItem = jest.spyOn(ToDoListService,'deleteAnItem')

            render(<DeleteItemComponent toDoItemKey={toDoItemKey} setToDoListItems={jest.fn()} toDoListItems={[{key: toDoItemKey, text: 'text'}]} /> );
                fireEvent.click(screen.getByText('Delete'));

            expect(mockDeleteAnItem).toHaveBeenCalledWith(toDoItemKey);
        });
    });
    it('updates the to do list', async () => {});
});
