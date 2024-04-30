import classes from '../../components/todoOne/todosPage.module.css';
import TodoOne from "../../components/todoOne/TodoOne";

const todos =  ["todo 1 ", "todo 2 ", "todo 3 "]

function TodosPage () {
    return (
        <>
        {todos.map((todo, index) => <TodoOne key={index} name={todo} />)}
        </>
    )
}

export default TodosPage;