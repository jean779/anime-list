import { useState, useEffect } from 'react';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Maincont from './components/Maincont';

function App() {
  const [animeList, SetAnimeList] = useState([]);
  const [topAnimes, SetTopAnimes] = useState([]);
  const [search, SetSearch] = useState("");
  const GetTopAnimes = async () => {
		const temp = await fetch(`https://api.jikan.moe/v3/top/anime/1/bypopularity`)
			.then(res => res.json());
		
      SetTopAnimes(temp.top.slice(0, 7));
	}

  
  const FetchAnime = async (query) => {
		const temp = await fetch(`https://api.jikan.moe/v3/search/anime?q=${query}&order_by=title&sort=asc&limit=20`)
			.then(res => res.json());
    console.log(temp.results);
		SetAnimeList(temp.results);
	}
   
  const HandleSearch = e => {
		e.preventDefault();

		FetchAnime(search);
	}
  
  useEffect(() => {
		GetTopAnimes();
    console.log(topAnimes);
	}, []);
  
  return ( 
    <div className="App">
      <Header/>
      <div className="content-wrap">
        <Sidebar 
            topAnimes={topAnimes}/>
        <Maincont
          HandleSearch={HandleSearch}
					search={search}
          SetSearch={SetSearch}
          animeList={animeList}
        />
      </div>
      
		</div>
  );
}

export default App;
