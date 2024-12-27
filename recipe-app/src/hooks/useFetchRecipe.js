import axios from "axios";
import { useState } from "react";
const options = {
    method: "GET",
    url: "https://tasty.p.rapidapi.com/recipes/get-more-info?id=8138",
    params: { id: "8138" },

    headers: {
        "X-RapidAPI-Key": "084497fa57msh94ca68ef33638fep179188jsnf92a9a493bab",
        "X-RapidAPI-Host": "tasty.p.rapidapi.com",
    },
};



const useFetchRecipe = () => {
    const [recipe, setRecipe] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const fetchRecipe = async (id) => {
        setLoading(true);
        setRecipe(null);
        setError(null);
        try {

            const reqOptions = { ...options };

            reqOptions.params.id = id;

            const response = await
                axios.request(reqOptions);
            setRecipe(response.data);
            setLoading(false);
        } catch (err) {
            setError(err.message);
            setLoading(false);
        }
    };

    return [fetchRecipe, { data: recipe, loading, error }];
};

export default useFetchRecipe;