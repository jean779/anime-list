import React from 'react';

function Sidebar({ topAnimes }) {
  return (
     <aside>
        <nav>
          <h3>Top Animes</h3>
          {topAnimes.map(anime => (
            <a 
              href={anime.url} 
						  target="_blank"
						  key={anime.mal_id} 
						  rel="noreferrer">
						  { anime.title }         
            </a> 
          ))}
         
        </nav>
     </aside>
  )
}

export default Sidebar;