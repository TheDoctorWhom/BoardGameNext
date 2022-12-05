import Link from 'next/link';
import classes from './lego.module.css';

function Lego (props){
    const { title, number, pieces, theme, built } = props;

    const imageURL = `https://img.bricklink.com/ItemImage/SN/0/${number}-1.png`;

    return (
        <li className={classes.item}>
            <img src={imageURL} alt={title} />
            <div className={classes.content}>
                <h2>{title}</h2>
                <p>Theme: {theme}</p>
                <p>Number: {number}</p>
                <p>Pieces: {pieces}</p>
                <p>{built?"🧱":""}</p>
            </div>
        </li>
    );

}

export default Lego;