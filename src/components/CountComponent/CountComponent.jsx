import React, { useState } from 'react'
import ButtonComponent from '../ButtonComponent/ButtonComponent';

const CountComponent = ()=> {
    
    const [count, setCount] = useState(0);
    const incrementar = ()=> setCount(count + 1);
    const decrementar = ()=> setCount(count - 1);

    return(
        <div>
            <h3>Contador</h3>
            <p>{count}</p>
            <ButtonComponent onClickFunction={incrementar} btnName="Sumar" btnType="success"/>
            <ButtonComponent onClickFunction={decrementar} btnName="Restar" btnType="success"/>
        </div>
    )
}

export default CountComponent