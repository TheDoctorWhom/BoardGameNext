import useSWR from 'swr';
import Search from '../components/search.js';
import { useState } from "react";
import RecordList from '../components/record-list.js';



function Record(props){
    const [record, setRecord] = useState('');

    const fetcher = (url) => fetch(url).then((res) => res.json());

    const { data, error } = useSWR('/api/record-data', fetcher);
  
    //Handle the error state
    if (error) return <div>Failed to load</div>;
    //Handle the loading state
    if (!data) return <div>Loading...</div>;
    //Handle the ready state and display the result contained in the data object mapped to the structure of the json file
    
    const recordData = JSON.parse(data);

    function findRecordHandler(searchTerm, data){
        console.log(data);
        if (searchTerm && data){
            const recordFilteredData = data.map((record) => {
                if (record.title.toLowerCase().includes(searchTerm.toLowerCase())){
                    return record;
                }
            });

            setRecord(recordFilteredData.filter(record => record !== undefined));
            console.log(record);
        }
        else {
            setRecord(data);
        }
    }
  


    return(
        <div>
            <Search onSearch={findRecordHandler} data={recordData.CATALOG.RECORD }/>
            <RecordList records = {record?record:recordData.CATALOG.RECORD}/>
        </div>
    );
}

export default Record;