import './App.css';
import PageHeaderComponent from './header/PageHeaderComponent';
import ToDoListComponent from './to-do-list/ToDoListComponent';

function App() {
    return (
        <div className="App">
            <PageHeaderComponent />
            <div className={'Page-body'} >
                <ToDoListComponent />
            </div>
        </div>
    );
}

export default App;
