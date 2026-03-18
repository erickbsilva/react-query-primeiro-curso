import { useEffect, useState } from "react";
import TituloPrincipal from "../../componentes/TituloPrincipal";
import { ICategoria } from "../../interfaces/ICategoria";
import { useParams } from "react-router-dom";
import http from "../../http";

export default function Categoria() {

const [categoria, setCategoria] = useState<ICategoria>()

const params = useParams()

useEffect(() => {
    http.get<ICategoria[]>('categorias', {
        params: {
            slug: params.slug
        }
    })
        .then(resposta => {
            setCategoria(resposta.data[0])
        })
}, [params.slug])

    return (
        <div>
            <TituloPrincipal texto={categoria?.nome ?? 'Carregando...'} />
        </div>
    )
}