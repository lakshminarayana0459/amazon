import React from 'react'

import CurrencyFormat from "react-currency-format";
import { useStateValue } from './StateProvider';
import { getBasketTotal } from './reducer';


function SubTotal() {

    const [{basket}, dispatch] = useStateValue();
    return (
        <div className="subtotal">
            <CurrencyFormat
            renderText = {(value) => (
                <>
                <p> Subtotal ({basket.length} items):<strong> { ` ${value} `}</strong>
                </p>
                <small className="subtotal__gift">
                    <input type="checkbox" /> The order contains gift
                </small>
                </>
            )}
            decimalScale={2}
            value={getBasketTotal(basket)}
            displayType={"text"}
            thousandSeparatoe={true}
            prefix={"$"}/>
            <button> Proceed to checkout </button>
        </div>
    )
}

export default SubTotal
