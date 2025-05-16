import { useEffect, useState } from "react";
import { getGifs } from "../helpers/getGifs";

export const useFetchGifs = (category) => {
    const [images, setImages] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    const getImages = async () => {
        const newImages = await getGifs(category);
        setImages(newImages);
        setIsLoading(false);
    };

    useEffect(() => {
        getImages(); //No se usa await porque no necesitamos esperar nada , solo disparar la ejecucion de getImages para el solo maneje sus cosas.
    }, []);

    return {
        images,
        isLoading,
    };
};
