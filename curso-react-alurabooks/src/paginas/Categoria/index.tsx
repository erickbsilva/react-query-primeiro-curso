// import {  useState } from "react";
import TituloPrincipal from "../../componentes/TituloPrincipal";
import { useParams } from "react-router-dom";
import Loader from "../../componentes/Loader";
import { useQuery } from "@tanstack/react-query";
import ListaLivros from "../../componentes/ListaLivros";
import { obterCategoriaPorSlug } from "../../http";

export default function Categoria() {

    // const [categoria, setCategoria] = useState<ICategoria>()

    // const [carregando, setCarregando] = useState(true)

    const params = useParams()

    // fazendo o destruct, do useQuery, pode já renomear o data para categoria
    const { data: categoria, isLoading } = useQuery({ queryKey: ['categoriaPorSlug', params.slug], queryFn: () => obterCategoriaPorSlug(params.slug || '') })

    // useEffect(() => {
    //     setCarregando(true)
    //     http.get<ICategoria[]>('categorias', {
    //         params: {
    //             slug: params.slug
    //         }
    //     })
    //         .then(resposta => {
    //             setCategoria(resposta.data[0])
    //             setCarregando(false)
    //         })
    //         .catch(erro => {
    //             console.log(erro)
    //             setCarregando(false)
    //         })
    // }, [params.slug])

    if (isLoading) {
        return (<div>
            <Loader />
        </div>)
    }

    return (
        <div>
            <TituloPrincipal texto={categoria?.nome ?? 'Carregando...'} />
            <ListaLivros categoria={categoria!} />
        </div>
    )
}