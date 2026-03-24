import { useQuery } from "@tanstack/react-query";
import { ICategoria } from "../../interfaces/ICategoria";
import { obterProdutosDaCategoria } from "../../http";
import CardLivro from "../CardLivro";

interface ListaLivrosProps {
    categoria: ICategoria
}

const ListaLivros = ({ categoria }: ListaLivrosProps) => {

const { data: produtos } = useQuery({
    queryKey: ['buscarLivrosPorCategoria', categoria],
    queryFn: () => obterProdutosDaCategoria(categoria),
})

console.log(produtos)

    return (<div>
        {produtos?.map(livro => (
            <CardLivro key={livro.id} livro={livro} />
        ))}
    </div>)
}

export default ListaLivros