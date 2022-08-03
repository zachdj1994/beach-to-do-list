import React, {useState, useEffect} from 'react';
import './App.css';
import PageHeaderComponent from './PageHeaderComponent';
import ToDoListComponent from './ToDoListComponent';
import {getToDoListItems} from './ToDoListService';

function App() {
    const [toDoListItems, setToDoListItems] = useState([''])
    useEffect(() => {
        getToDoListItems().then((result) => {
            setToDoListItems(result);
        });
    }, []);

    return (
        <div className="App">
            <PageHeaderComponent />
            <div className={'Page-body'} ><ToDoListComponent toDoItems={toDoListItems} /></div>
        </div>
    );
}

export default App;
