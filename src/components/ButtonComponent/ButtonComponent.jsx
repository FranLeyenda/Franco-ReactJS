import Button from 'react-bootstrap/Button';
import "./ButtonComponent.css"

const ButtonComponent = ({btnName, btnType,onClickFunction}) => {
    

    return (
        <Button variant={btnType} onClick={onClickFunction}>{btnName}</Button>
    )
}

export default ButtonComponent;