import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";

const Tabela = () => {
    const [data, setData] = useState([]);
    const navigate = useNavigate();

    const handleDelete = (index)=>{
        setData(data.filter((item)=> item.index !== index))
    }

  return (
    <div>
      <h1>Tabela de dados</h1>
      <Link to="/form">Adicionar novo</Link>
      <table>
        <thead>
          <tr>
            <th>Responsável</th>
            <th>Projeto</th>
            <th>Data de inicio</th>
            <th>Última atualização</th>
            <th>Andamento</th>
          </tr>
        </thead>
        <tbody>
            {data.map((item)=>(
                <tr key={item.id}>
                    <td onClick={() => navigate(`/form/${item.index}`)}>{item.responsavel}</td>
                    <td>{item.projeto}</td>
                    <td>{item.dataDeInicio}</td>
                    <td>{item.ultimaAtualizacao}</td>
                    <td>{item.andamento}</td>
                    <td>
                        <button onClick={()=> handleDelete(item.index)}>Excluir</button>
                    </td>
                </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
};

export default Tabela;
