import { useEffect, useState } from "react";
import TituloPrincipal from "../../componentes/TituloPrincipal";
import { ICategoria } from "../../interfaces/ICategoria";
import { useParams } from "react-router-dom";
import http from "../../http";
import Loader from "../../componentes/Loader";

export default function Categoria() {

const [categoria, setCategoria] = useState<ICategoria>()

const [carregando, setCarregando] = useState(true)

const params = useParams()

useEffect(() => {
    setCarregando(true)
    http.get<ICategoria[]>('categorias', {
        params: {
            slug: params.slug
        }
    })
        .then(resposta => {
            setCategoria(resposta.data[0])
            setCarregando(false)
        })
        .catch(erro => {
            console.log(erro)
        })
}, [params.slug])

if (carregando) {
    return (<div>
        <Loader />
    </div>)
}

    return (
        <div>
            <TituloPrincipal texto={categoria?.nome ?? 'Carregando...'} />
        </div>
    )
}