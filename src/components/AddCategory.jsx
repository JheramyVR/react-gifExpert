import React, { useState } from "react";

export const AddCategory = ({ onNewCategory }) => {
    const [inputValue, setInputValue] = useState("");
    const onInputChange = (event) => {
        setInputValue(event.target.value);
    };

    const onSumbit = (event) => {
        event.preventDefault();
        if (inputValue.trim().length <= 1) return;

        // setCategories((prevStatus) => [inputValue, ...prevStatus]);
        onNewCategory(inputValue.trim());
        setInputValue("");
    };

    return (
        <form onSubmit={(event) => onSumbit(event)}>
            <input
                type="text"
                placeholder="Buscar Gifs"
                value={inputValue}
                onChange={onInputChange}
                // onChange={(event) => onInputChange(event)}
                // asi tambien se puede poner, pero como el evento se pasa internamente con js, entonces se obvia
            />
        </form>
    );
};
