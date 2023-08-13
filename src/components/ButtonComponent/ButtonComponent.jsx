import Button from 'react-bootstrap/Button';
import "./ButtonComponent.css"

const ButtonComponent = ({btnName, btnType}) => {
    

    return (
        <Button variant={btnType}>{btnName}</Button>
    )
}

export default ButtonComponent;