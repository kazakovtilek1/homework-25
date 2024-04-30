import classes from './todosPage.module.css'

function TodoOne({name}) {
    return (
        <div className={classes.text}>
            {name}
        </div>
    );
}

export default TodoOne;