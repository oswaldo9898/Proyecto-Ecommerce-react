import './styles.css'

const FormFilter = () => {

  return (
    <div className="contenedorFiltros">

      <div className="filtrosCategoria">
        <div className="tituloCategoria">
          <h3>TODAS LAS CATEGORÍAS</h3>
        </div>
        <ul className="listaCategorias">
          <li>
            <input type="radio" id="bts" value='bts' name="categorias"/>
            <label htmlFor="bts">BTS</label>
          </li>
          <li>
            <input type="radio" id="camiseta" value='camiseta' name="categorias"/>
            <label htmlFor="camiseta">CAMISETAS</label>
          </li>
          <li>
            <input type="radio" id="figura" value='figura'  name="categorias"/>
            <label htmlFor="figura">FIGURAS</label>
          </li>
          <li>
            <input type="radio" id="funko-pop" value='funko-pop' name="categorias"/>
            <label htmlFor="funko-pop">FUNKO-POPS</label>
          </li>
          <li>
            <input type="radio" id="mochila" value='mochila' name="categorias"/>
            <label htmlFor="mochila">MOCHILAS</label>
          </li>
        </ul>
      </div>

      <div className="filtroPrecio">
        <div className="tituloCategoria">
          <h3>PRECIO</h3>
        </div>
        <div className='rangoPrecio'>
          <input 
            type="text" 
            />
          <input 
            type="text" 
            />
        </div>
        
      </div>

      <div className='botonFiltro'>
        <button><i className="fa-solid fa-filter"></i> APLICAR FILTRO</button>
      </div>

    </div>
  )
};

export { FormFilter };