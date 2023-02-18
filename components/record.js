import Link from 'next/link';
import classes from './record.module.css';

function Record (props){
    const { title } = props;

    return (
        <li className={classes.item}>
            <div className={classes.content}>
                <h2>{title}</h2>
            </div>
        </li>
    );

}

export default Record;