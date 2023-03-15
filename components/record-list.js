import Record from './record';
import classes from './boardgame-list.module.css';



function LegoList (props){
    const { records } = props;

    return (
        <ul className={classes.list}>
            {records.map((record) =>(
                <Record
                    key = {record.title}
                    title = {record.title} 
                    artist = {record.artist}
                    year = {record.year}
                    published ={record.published}
                />
            ))}
        </ul>
    );
}

export default LegoList;