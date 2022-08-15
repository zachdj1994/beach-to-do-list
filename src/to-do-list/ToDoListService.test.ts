import axios from 'axios';
import {addAnItem, deleteAnItem, getToDoListItems} from './ToDoListService';

jest.mock('axios', () => ({
    get: jest.fn(),
    post: jest.fn(),
    delete: jest.fn()
}));

describe('The to do list service', () => {
    describe('getToDoListItems', () => {
        it('returns a list of items as a promise from the API layer', async () => {
            const axiosReturnValue = Promise.resolve({
                data: [
                    {itemId: 10, item: 'Vibe'},
                    {itemId: 11, item: 'Listen to the Pina Colada song or something?'},
                    {itemId: 12, item: "SUNSCREEN DON'T FORGET AGAIN"},
                    {itemId: 13, item: 'ooh, dolphins!!!'},
                    {itemId: 14, item: 'Aloe vera (I forgot sunscreen again)'},
                ]
            });
            const expected =  [
                {key: 10, text: 'Vibe'},
                {key: 11, text: 'Listen to the Pina Colada song or something?'},
                {key: 12, text: "SUNSCREEN DON'T FORGET AGAIN"},
                {key: 13, text: 'ooh, dolphins!!!'},
                {key: 14, text: 'Aloe vera (I forgot sunscreen again)'},
            ];
            jest.spyOn(axios, 'get').mockResolvedValue(axiosReturnValue)

            const actual = await getToDoListItems();

            expect(axios.get).toHaveBeenCalledWith('/toDoListItems', {baseURL: 'http://localhost:8080'});
            expect(actual).toEqual(expected);
        });
    });

    describe('addAnItem', () => {
        it('makes a post request to the API', () => {
            const mockPost = jest.spyOn(axios, 'post').mockResolvedValue({data: {itemId: 1, text: 'Vibe'}});

            addAnItem('Vibe');

            expect(mockPost).toHaveBeenCalledWith('/toDoListItems', {item: 'Vibe'}, {baseURL: 'http://localhost:8080'});
        });
    });

    describe('deleteAnItem', () => {
        it('makes a delete request to the API', () => {
            const mockDelete = jest.spyOn(axios, 'delete');

            deleteAnItem(1);

            expect(mockDelete).toHaveBeenCalledWith('/toDoListItems?id=1', {baseURL: 'http://localhost:8080'})
        });
    })
});