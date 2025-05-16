import { useState } from "react";
import { AddCategory, GifGrid } from "./components";

export const GifExpertApp = () => {
    const [categories, setCategories] = useState(["One Punch"]);

    const onAddCategory = (newCategory) => {
        if (categories.includes(newCategory)) return; //para no repetir categorias ni keys
        setCategories((previusState) => [...previusState, newCategory]);
    };

    return (
        <>
            {/* titulo */}
            <h1>GifExpertApp</h1>

            {/* Input */}
            <AddCategory
                // setCategories={setCategories}
                onNewCategory={(newCategory) => onAddCategory(newCategory)}
            />

            {/* Listado de gif */}
            {/* <button onClick={onAddCategory}>Agregar</button> */}

            {categories.map((category) => (
                <GifGrid key={category} category={category} />
            ))}
        </>
    );
};
