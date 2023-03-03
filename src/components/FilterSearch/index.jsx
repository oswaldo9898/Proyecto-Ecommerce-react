import { useEffect, useState } from 'react';
import './styles.css'

const FilterSearch = ( { asignarQuery } ) => {

  const [query, setQuery] = useState({
    title: ''
  });

  useEffect(()=>{
    asignarQuery(query)
  },[asignarQuery, query]);


  return (
    <div className="filterContenedor">
      <div className="filterTitle">
        <div className='filter'>
          <input 
            type = 'text'
            value = {query.title}
            placeholder = 'Buscar por título'
            onChange = {(e) => 
              setQuery((prevState) => ({ ...prevState, title: e.target.value }))
            } />
            <span><i className="fa-solid fa-magnifying-glass"></i></span>
        </div>
          
      </div>
    </div>
  );
};

export { FilterSearch };
