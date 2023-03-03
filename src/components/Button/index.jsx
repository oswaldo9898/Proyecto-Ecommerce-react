import './styles.css'

const Button = ({icono, handle, classButton, texto}) => {
    return (
        <button onClick={handle} className = {` button ${classButton} `}><i className={icono}></i> {texto}</button>
    )
}

export {Button}