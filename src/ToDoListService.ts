import axios from 'axios';

const getToDoListItems = async (): Promise<GetToDoListResponse> => {
    const { data } = await axios.get<GetToDoListResponse>('/toDoListItems')
    return data;
}

export {getToDoListItems}