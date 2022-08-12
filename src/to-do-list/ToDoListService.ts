import axios from 'axios';

const url = '/toDoListItems';

const getToDoListItems = async (): Promise<ToDoList> => {
    const { data } = await axios.get<GetToDoListResponse>(url, {baseURL: 'http://localhost:8080'})
    const toDoList: ToDoList = [];
    data.map((listItem: GetToDoListResponseItem) => toDoList.push({key: listItem.itemId, text: listItem.item}))
    return toDoList;
}

const addAnItem = async (item: string): Promise<ToDoListItem> => {
    const { data } = await axios.post<GetToDoListResponseItem>(url, {item}, {baseURL: 'http://localhost:8080'});

    return {key: data.itemId, text: data.item};
}

export {getToDoListItems, addAnItem};
