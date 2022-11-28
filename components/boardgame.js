import { Fragment } from "react";
import classes from './boardgame.module.css';
import Button from '../ui/button.js';

function Boardgame (props){
    const { title, image, difficulty, players, type, lastplayed, link  } = props;

    return (
        <li className={classes.item}>
            <div className={classes.content}>
                <div className={classes.summary}>
                    <h2>{props.title}</h2>
                    <p>Difficulty: {props.difficulty}</p>
                    <p>Players: {props.players}</p>
                    <p>Type: {props.type}</p>
                    <p>Last Played: {props.lastplayed}</p> 

                    <Button link={props.link}>More Info</Button>
                </div>
            </div>
        </li>
    );

} 

export default Boardgame;