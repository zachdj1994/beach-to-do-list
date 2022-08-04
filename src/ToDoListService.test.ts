import axios from 'axios';
import {getToDoListItems} from './ToDoListService';

jest.mock('axios', () => ({
    get: jest.fn()
}));

describe('The to do list service', () => {
    it('returns a list of items as a promise from the API layer', async () => {
        const axiosReturnValue = Promise.resolve({
            data: [
                'Vibe',
                'Listen to the Pina Colada song or something?',
                "SUNSCREEN DON'T FORGET AGAIN",
                'Get a closer look at that weird smelly thing that just washed up',
                'Aloe vera (I forgot sunscreen again)',
            ]
        });
        const expected =  [
                'Vibe',
                'Listen to the Pina Colada song or something?',
                "SUNSCREEN DON'T FORGET AGAIN",
                'Get a closer look at that weird smelly thing that just washed up',
                'Aloe vera (I forgot sunscreen again)',
            ];
        jest.spyOn(axios, 'get').mockResolvedValue(axiosReturnValue)

        const actual = await getToDoListItems();

        expect(axios.get).toHaveBeenCalledWith('/toDoListItems', {baseURL: 'http://localhost:8080'});
        expect(actual).toEqual(expected);
    });
});