import React, { useState } from 'react'
import ButtonComponent from '../ButtonComponent/ButtonComponent';
import "./CountComponent.css"

const CountComponent = ()=> {
    
    const [count, setCount] = useState(0);
    const incrementar = ()=> setCount(count + 1);
    const decrementar = ()=> setCount(count - 1);

    return(
        <div className='containerCount'>
            <div>
                <h3>Contador</h3>
                <p>{count}</p>
                <ButtonComponent onClickFunction={incrementar} btnName="Sumar" btnType="success"/>
                <ButtonComponent onClickFunction={decrementar} btnName="Restar" btnType="success"/>
            </div>
        </div>
    )
}

export default CountComponent