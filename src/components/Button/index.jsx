import './styles.css'

const Button = ({icono, handle, classButton, texto, deshabilitado}) => {
    return (
        <button type='submit' onClick={handle} className = {` button ${classButton} ` } disabled={deshabilitado}><i className={icono}></i> {texto}</button>
    )
}

export {Button}