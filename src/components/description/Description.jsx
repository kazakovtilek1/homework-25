import classes from './description.module.css';

function Description ({info}) {
    return (
        <>
            <h2 className={classes.title}>{info.title}</h2>
            <p className={classes.description}>{info.description}</p>
        </>
    )
}

export default Description