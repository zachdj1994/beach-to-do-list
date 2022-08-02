import React from 'react';
import './App.css';
import {PageHeaderComponent} from './PageHeaderComponent';
import {ToDoListComponent} from './ToDoListComponent';

function App() {
    const toDoItems = [
        'Vibe',
        'Listen to Beach Boys or something?',
        "SUNSCREEN DON'T FORGET AGAIN",
        'Get a closer look at that weird smelly thing that just washed up',
        'Aloe vera (I forgot sunscreen again)',
    ];
  return (
    <div className="App">
        <PageHeaderComponent />
        <div className={'Page-body'} ><ToDoListComponent toDoItems={toDoItems} /></div>
    </div>
  );
}

export default App;
