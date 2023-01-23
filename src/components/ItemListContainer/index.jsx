import './styles.css';

const ItemListContainer = ({greeting}) => {
    return (
        <div className="contenidoPrincipal">
            {greeting}
        </div>
    )
}

export { ItemListContainer };