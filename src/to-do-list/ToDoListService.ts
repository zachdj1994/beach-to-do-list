import axios from 'axios';

const getToDoListItems = async (): Promise<GetToDoListResponse> => {
    const { data } = await axios.get<GetToDoListResponse>('/toDoListItems', {baseURL: 'http://localhost:8080'})
    return data;
}

const addAnItem = (item: string): void => {
    console.log('did the thing');
}

export {getToDoListItems, addAnItem};
