import { calculateSizeAdjustValues } from "next/dist/server/font-utils";
import Boardgame from "./boardgame";
import classes from './boardgame-list.module.css';


function BoardgameList(props){

    const { boardgames } = props;

    console.log(boardgames);

    if(!boardgames){
        return (
            <p>loading....</p>
        );
    };


    return (
        <ul className={classes.list}>
            {boardgames.map((boardgame) => (
                <Boardgame
                    key={boardgame.title}
                    title={boardgame.title}
                    image={boardgame.image}
                    difficulty={boardgame.difficulty}
                    players={boardgame.players}
                    type={boardgame.type}
                    lastplayed={boardgame.lastplayed}
                    link={boardgame.link}

                />
            
            ))}
        </ul>
        );
}

export default BoardgameList;