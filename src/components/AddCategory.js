import React, { useState } from 'react'
import PropTypes from 'prop-types';
import Swal from "sweetalert2";

export const AddCategory = ({ setCategories }) => {
    
    const [inputValue, setInputValue] = useState('');

    const handleInputChange = e => {
        setInputValue(e.target.value);
    }

    const handleSubmit = e => {
        e.preventDefault();
        

        if( inputValue.trim().length > 2){
            setCategories(cats => [inputValue,...cats]);
            setInputValue('');            
        }else{
            Swal.fire({
                title: "Error",
                icon: "error",
                text: inputValue.trim().length > 0? "Longitud incorrecta, deben ser minimo 3 caracteres":"Debes ingresar un texto",
                allowOutsideClick: false,
                allowEnterKey: false,
                allowEscapeKey: false
            })
        }

    }


    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                value={inputValue}
                onChange={ handleInputChange }
            />
        </form>
    )
}


AddCategory.propTypes = {
    setCategories: PropTypes.func.isRequired
}