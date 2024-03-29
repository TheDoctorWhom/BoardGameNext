import useSWR from 'swr';
import Search from '../components/search.js';
import { useState } from "react";
import LegoList from '../components/lego-list.js';



function Lego(props){
    const [lego, setLego] = useState('');

    const fetcher = (url) => fetch(url).then((res) => res.json());

    const { data, error } = useSWR('/api/lego-data', fetcher);
  
    //Handle the error state
    if (error) return <div>Failed to load</div>;
    //Handle the loading state
    if (!data) return <div>Loading...</div>;
    //Handle the ready state and display the result contained in the data object mapped to the structure of the json file
    
    const legoData = JSON.parse(data);

    function findLegoHandler(searchTerm, data){
        console.log(data);
        if (searchTerm && data){
            const legoFilteredData = data.map((lego) => {
                if (lego.title.toLowerCase().includes(searchTerm.toLowerCase())){
                    return lego;
                }
            });

            setLego(legoFilteredData.filter(lego => lego !== undefined));
            console.log(lego);
        }
        else {
            setLego(data);
        }
    }
  


    return(
        <div>
            <Search onSearch={findLegoHandler} data={legoData.CATALOG.LEGO }/>
            <LegoList legos = {lego?lego:legoData.CATALOG.LEGO}/>
        </div>
    );
}

export default Lego;