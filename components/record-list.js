import Record from './record';



function LegoList (props){
    const { records } = props;

    return (
        <ul>
            {records.map((record) =>(
                <Record
                    key = {record.title}
                    title = {record.title} 
                />
            ))}
        </ul>
    );
}

export default LegoList;