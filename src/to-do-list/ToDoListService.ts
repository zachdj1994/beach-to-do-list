import axios from 'axios';

const url = '/toDoListItems';

const getToDoListItems = async (): Promise<GetToDoListResponse> => {
    const { data } = await axios.get<GetToDoListResponse>(url, {baseURL: 'http://localhost:8080'})
    return data;
}

const addAnItem = (item: string): void => {
    axios.post(url, {item}, {baseURL: 'http://localhost:8080'});
}

export {getToDoListItems, addAnItem};
