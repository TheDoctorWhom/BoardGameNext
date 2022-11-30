import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import BoardgameList from '../components/boargame-list';
import useSWR from 'swr';
import Search from '../components/search.js';
import { useState } from "react";

export default function Home() {

  const [boardgames, setBoardgames] = useState('');


  const fetcher = (url) => fetch(url).then((res) => res.json());

  const { data, error } = useSWR('/api/boardgame-data', fetcher);

  //Handle the error state
  if (error) return <div>Failed to load</div>;
  //Handle the loading state
  if (!data) return <div>Loading...</div>;
  //Handle the ready state and display the result contained in the data object mapped to the structure of the json file
  
  const boardgameData = JSON.parse(data);

  function findEventHandler(searchTerm, data){
    console.log(searchTerm);
      if (searchTerm && data){
        const boardgameFilteredData = data.map((boardgame) => {
          if (boardgame.title.toLowerCase().includes(searchTerm.toLowerCase())){
            return boardgame;
          }
        });
        setBoardgames(boardgameFilteredData.filter(boardgame => boardgame !== undefined));
      }
      else {
        setBoardgames(data);
      }

      

  }



  return (
    <div>
      <Search onSearch={findEventHandler} data={boardgameData.CATALOG.GAME}/>
      <BoardgameList  boardgames={boardgames?boardgames:boardgameData.CATALOG.GAME}/>
    </div>
  );
}
