import Link from 'next/link';
import classes from './record.module.css';

function Record (props){
    const { title, artist, year, published } = props;

    return (
        <li className={classes.item}>
            <div className={classes.content}>
                <h2>{title}</h2>
                <p>{artist}</p>
                <p>{year}</p>
                <p>{published}</p>
            </div>
        </li>
    );

}

export default Record;