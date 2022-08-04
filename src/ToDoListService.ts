import axios from 'axios';

const getToDoListItems = async (): Promise<string[]> => {
    const { data } = await axios.get<string[]>('/toDoListItems', {baseURL: 'http://localhost:8080'})
    return data;
}

export {getToDoListItems}