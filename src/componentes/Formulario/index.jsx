import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

import styles from "./Formulario.module.css";
import Header from "../Header";
import Footer from "../Footer";

const Formulario = () => {
  const { index } = useParams();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({ responsavel: "", projeto: "",  dataDeInicio: "", ultimaAtualizacao: "" });

  useEffect(()=>{
    if(index){
      // Busca os dados do index para preenchimento
      const saveData = JSON.parse(localStorage.getItem('data')) || [];
      const item = saveData.find((data)=> data.index === index);
      if(item) setFormData(item)
    }
  }, [index]);

  const handleSubmit = (e)=>{
    e.preventDefault();

    const saveData = JSON.parse(localStorage.getItem('data')) || [];

    if(index){
      const updatedData = saveData.map((data)=> data.index === index ? {...data, ...formData} : data);
      localStorage.setItem('data', JSON.stringify(updatedData));
    }else{
      const newItem = {...formData, id: Date.now().toString()};
      localStorage.setItem('data', JSON.stringify([...saveData, newItem]));
    }
    navigate('/');
  }

  return (
    <>
    <Header/>
        <h1>{index ? "Editar" : "Adicionar"} dados</h1>
        <form className={styles.form} onSubmit={handleSubmit}>
        
          <div>
            <label htmlFor="responsavel">Responsável: </label>
              <input
                type="text"
                id="responsavel"
                name="responsavel"
                placeholder="Nome do responsável"
                value={formData.responsavel}
                onChange={(e) =>
                  setFormData({ ...formData, responsavel: e.target.value })
                }
                disabled={!!index} // desabilitar o modo leitura
              />
          </div>
          <div>
              <label htmlFor="projeto">Projeto: </label>
              <input
                type="text"
                id="projeto"
                name="projeto"
                placeholder="Nome do projeto"
                value={formData.projeto}
                onChange={(e) => setFormData({ ...formData, projeto: e.target.value })}
                disabled={!!index} // desabilitar o modo leitura
              />
          </div>
        <div>
            <label htmlFor="dataDeInicio">Data de Inicio: </label>
            <input
                type="date"
                id="dataDeInicio"
                name="dataDeInicio"
                value={formData.dataDeInicio}
                onChange={(e) => setFormData({ ...formData, dataDeInicio: e.target.value })}
                disabled={!!index} // desabilitar o modo leitura
            />
        </div>
          <div>
            <label htmlFor="ultimaAtualizacao">Última atualização: </label>
              <input
                id="ultimaAtualizacao"
                name="ultimaAtualizacao"
                type="date"
                value={formData.ultimaAtualizacao}
                onChange={(e) => setFormData({ ...formData, ultimaAtualizacao: e.target.value })}
                disabled={!!index} // desabilitar o modo leitura
              />
          </div>
          <div>
            <label htmlFor="desenvolvimento">Já tem ambiente de desenvolvimento configurado ? </label>
            <select name="desenvolvimento" id="desenvolvimento">
                <option value="selecionar">Selecione uma opção</option>
                <option value="sim">Sim</option>
                <option value="nao">Não</option>
            </select>
          </div>
          <div>
            <label htmlFor="desenvolvimentoTeste">O ambiente de desenvolvimento já foi testado ? </label>
            <select name="desenvolvimentoTeste" id="desenvolvimentoTeste">
                <option value="selecionar">Selecione uma opção</option>
                <option value="sim">Sim</option>
                <option value="nao">Não</option>
            </select>
          </div>
          <div>
            <label htmlFor="homologacao">Já tem ambiente de homologação configurado ? </label>
            <select name="homologacao" id="homologacao">
                <option value="selecionar">Selecione uma opção</option>
                <option value="sim">Sim</option>
                <option value="nao">Não</option>
            </select>
          </div>
          <div>
            <label htmlFor="homologacaoTeste">O ambiente de homologação já foi testado ? </label>
            <select name="homologacaoTeste" id="homologacaoTeste">
                <option value="selecionar">Selecione uma opção</option>
                <option value="sim">Sim</option>
                <option value="nao">Não</option>
            </select>
          </div>
          <div>
            <label htmlFor="producao">Já tem ambiente de produção configurado ? </label>
            <select name="producao" id="producao">
                <option value="selecionar">Selecione uma opção</option>
                <option value="sim">Sim</option>
                <option value="nao">Não</option>
            </select>
          </div>
          <div>
            <label htmlFor="producaoTeste">O ambiente de produção já foi testado ? </label>
            <select name="producaoTeste" id="producaoTeste">
                <option value="selecionar">Selecione uma opção</option>
                <option value="sim">Sim</option>
                <option value="nao">Não</option>
            </select>
          </div>
          <div className={styles.button}>
            <div className={styles.buttonBox}>
              {!index && <button type="submit">Salvar</button>}
              <div className={styles.border}></div>
              <div className={styles.border}></div>
            </div>
            <div className={styles.buttonBox}>
              <button type="button" onClick={() => navigate('/')}>Voltar</button>
              <div className={styles.border}></div>
              <div className={styles.border}></div>
            </div>
          </div>
        </form>
        <Footer/>
    </>
  );
};

export default Formulario;
