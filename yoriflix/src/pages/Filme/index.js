import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import './filme-info.css';
import api from "../../services/api";

function Filme() {
    const { id } = useParams();
    const navigate = useNavigate();

    const [filme, setFilme] = useState({});
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        let loadingTimeout;

        loadingTimeout = setTimeout(() => {
            setLoading(true);
        }, 200);

        async function loadFilme() {
            await api.get(`/movie/${id}`, {
                params: {
                    api_key: "da1700a259636aa5359aaeb65d11a54b",
                    language: "pt-BR",
                }
            })
                .then((response) => {
                    clearTimeout(loadingTimeout);
                    setFilme(response.data);
                    setLoading(false);
                })
                .catch(() => {
                    navigate("/", { replace: true });
                    return;
                })
        }

        loadFilme();

        return () => {
            console.log('Componente foi desmontado')
        }
    }, [navigate, id])

    if (loading) {
        return (
            <div className="filme-info">
                <h1>Carregando detalhes...</h1>
            </div>
        )
    }

    return (
        <div className="filme-info">
            <h1>{filme.title}</h1>
            <img src={`https://image.tmdb.org/t/p/original/${filme.backdrop_path}`} alt={filme.title} />

            <h3>Sinopse</h3>
            <span>{filme.overview}</span>
            <strong>Avaliação: {filme.vote_average} / 10</strong>

            <div className="area-buttons">
                <button>Salvar</button>
                <a href={`https://youtube.com/results?search_query=${filme.title} Trailer`} rel="external" target="blank">
                    <button>
                        Trailer
                    </button>
                </a>
            </div>

        </div>
    )
}

export default Filme;