import React from "react";
import Card from "../../UI/Card/Card";
import HeadArtefact from "../../HOC/HeadArtefact/HeadArtefact";
import { Link } from "react-router-dom";
import "./Verificacao.scss";
import defeitos from "../../../assets/Analise/Defeito.png";

const VerificacaoCenarios = () => {
  return (
    <div className="content artefact">
      <HeadArtefact
        versions={null}
        rastreability={null}
        title="Verificação Cenários"
        author="Pedro Féo"
      />

      <Card>
        <h2>Rastreabilidade</h2>
        <p>
          <Link to="/Cenarios">Cenários</Link>
        </p>
      </Card>

      <Card>
        <h2>Checklist</h2>
        <ul>
          <li>O título é auto-explicativo</li>
          <li>O objetivo é claro</li>
          <li>O contexto apresenta pré-condição</li>
          <li>A pré-condição está completa</li>
          <li>O contexto apresenta local</li>
          <li>O contexto apresenta tempo</li>
          <li>Os atores foram listados de forma correta</li>
          <li>Existem recursos</li>
          <li>Os episódios abrangem todo o processo </li>
          <li>Os episódios estão claros</li>
          <li>Existem restrições</li>
          <li>
            Restrições não repetem informações da pré-condição e/ou recursos
          </li>
          <li>Existem exceções</li>
          <li>Possui hyperlinks</li>
        </ul>
      </Card>

      <Card>
        <h2>Possíveis Defeitos</h2>
        <div className="center-card">
          <img src={defeitos} />
        </div>
      </Card>

      <Card>
        <h2>Resultado</h2>
        <div className="center-card">
          <iframe
            title="planilha_verificacao_cenarios"
            src="https://docs.google.com/spreadsheets/d/e/2PACX-1vTBTvWHgNKGB3aEJ0SxGXGluxDWSu2UZClKh8FhI3e1md_0WZAepppcUxT14ouwNlJgktZkFUZycTWX/pubhtml?gid=0&single=true"
            height="500"
            width="650"
          />
        </div>
      </Card>
    </div>
  );
};

export default VerificacaoCenarios;
