import { useEffect, useState } from "react";
import api from "../../services/api";

// URL: movie/now_playing?api_key=da1700a259636aa5359aaeb65d11a54b&language=pt-BR
function Home() {
    const [filmes, setFilmes] = useState([]);

    useEffect(() => {
        async function loadFilmes() {
            const response = await api.get("movie/now_playing", {
                params: {
                    api_key: "da1700a259636aa5359aaeb65d11a54b",
                    language: "pt-BR",
                    page: 1,
                }
            })


            
        }

        loadFilmes();

    }, []);

    return (
        <div>
            <h1>Home</h1>
        </div>
    );
}

export default Home;