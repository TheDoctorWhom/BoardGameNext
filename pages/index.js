import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import BoardgameList from '../components/boargame-list';
import useSWR from 'swr';
import Search from '../components/search.js';
import { useState } from "react";

const fetcher = (url) => fetch(url).then((res) => res.json());

export default function Home() {

  const [boardgames, setBoardgames] = useState(0);

  const { data, error } = useSWR('/api/boardgame-data', fetcher);

  //Handle the error state
  if (error) return <div>Failed to load</div>;
  //Handle the loading state
  if (!data) return <div>Loading...</div>;
  //Handle the ready state and display the result contained in the data object mapped to the structure of the json file
  
  const boardgameData = JSON.parse(data);



  function findEventHandler(searchTerm, data){
      if (searchTerm && data){
        const filteredData = data.map((boardgame) => {
          if (boardgame.title.contains(searchTerm)){
            return boardgame;
          }
        });
        setBoardgames(filteredData);
        console.log(filteredData);
      }
      else 
        setBoardgames(data);

  }

  return (
    <div>
      <Search onSearch={findEventHandler} data={boardgameData.CATALOG.GAME}/>
      <BoardgameList  boardgames={boardgameData.CATALOG.GAME}/>
    </div>
  );
}
