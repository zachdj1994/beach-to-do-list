import axios from 'axios';
import {addAnItem, getToDoListItems} from './ToDoListService';

jest.mock('axios', () => ({
    get: jest.fn(),
    post: jest.fn()
}));

describe('The to do list service', () => {
    describe('getToDoListItems', () => {
        it('returns a list of items as a promise from the API layer', async () => {
            const axiosReturnValue = Promise.resolve({
                data: [
                    'Vibe',
                    'Listen to the Pina Colada song or something?',
                    "SUNSCREEN DON'T FORGET AGAIN",
                    'ooh, dolphins!!!',
                    'Aloe vera (I forgot sunscreen again)',
                ]
            });
            const expected =  [
                'Vibe',
                'Listen to the Pina Colada song or something?',
                "SUNSCREEN DON'T FORGET AGAIN",
                'ooh, dolphins!!!',
                'Aloe vera (I forgot sunscreen again)',
            ];
            jest.spyOn(axios, 'get').mockResolvedValue(axiosReturnValue)

            const actual = await getToDoListItems();

            expect(axios.get).toHaveBeenCalledWith('/toDoListItems', {baseURL: 'http://localhost:8080'});
            expect(actual).toEqual(expected);
        });
    });

    describe('addAnItem', () => {
        it('makes a post request to the API', () => {
            const mockPost = jest.spyOn(axios, 'post')

            addAnItem('Vibe');

            expect(mockPost).toHaveBeenCalledWith('/toDoListItems', {item: 'Vibe'}, {baseURL: 'http://localhost:8080'});
        });
    });
});