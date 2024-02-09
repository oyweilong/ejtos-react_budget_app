import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';

const Currency= () => {
    const { dispatch,currency } = useContext(AppContext);
    const [newCurrency, setNewCurrency] = useState(currency);
    const handleCurrencyChange = (event) => {
        setNewCurrency(event.target.value);
    dispatch({
            type: 'CHG_CURRENCY',
            payload: newCurrency
        });
    }
    return (
        <div className='alert alert-secondary'>
        <span>Currency: </span>
        <select className="custom-select" id="inputGroupSelect02" onClick={handleCurrencyChange}>
                <option defaultValue value="£" name="Pound">£ Pound</option>
                <option value="$" name="Dollar">$ Dollar</option>
                <option value="€ " name="Euro">€ Euro </option>
                <option value="₺" name="Lira">₺ Lira</option>
        </select>
        </div>
            );
};

export default Currency;