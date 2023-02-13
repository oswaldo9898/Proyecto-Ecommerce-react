import './styles.css'

const Button = ({icono, handle, classButton, texto}) => {
    return (
        <button onClick={handle} className={classButton}><i className={icono}></i> {texto}</button>
    )
}

export {Button}