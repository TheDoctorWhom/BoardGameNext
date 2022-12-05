import Lego from './lego';
import classes from './lego-list.module.css';

function LegoList (props){
    const { legos } = props;

    return (
        <ul>
            {legos.map((lego) =>(
                <Lego
                    key = {lego.number}
                    title = {lego.title} 
                    number ={lego.number} 
                    pieces = {lego.pieces}
                    theme = {lego.theme}
                    built = {lego.built}
                />
            ))}
        </ul>
    );
}

export default LegoList;