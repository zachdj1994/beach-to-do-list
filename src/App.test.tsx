import * as PageHeaderComponent from './header/PageHeaderComponent';
import * as ToDoListComponent from './to-do-list/ToDoListComponent';
import App from './App';
import {render} from '@testing-library/react';

jest.mock('./header/PageHeaderComponent', () => {
    return jest.fn().mockImplementation(() => {
        return null;
    });
});

jest.mock('./to-do-list/ToDoListComponent', () => {
    return jest.fn().mockImplementation(() => {
        return null;
    });
});

describe('The app', () => {
    it('renders the page header component', () => {
        render(<App />);
        expect(PageHeaderComponent).toHaveBeenCalled();
    });
    it('renders the to do list component', () => {
        render(<App />);
        expect(ToDoListComponent).toHaveBeenCalled();
    });
});
