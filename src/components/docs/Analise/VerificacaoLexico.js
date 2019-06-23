import React from "react";
import HeadArtefact from '../../HOC/HeadArtefact/HeadArtefact'
import Card from '../../UI/Card/Card'


const VerificacaoLexico = () => (
    <div className='content artefact'>
        <HeadArtefact versions={null} rastreability={null}
            title="Verificação Léxicos" author="Rogério Silva" />

        <Card >
            <h2>Checklist</h2>
            <iframe src="https://docs.google.com/document/d/e/2PACX-1vTwGpd-MyZfFzyna2WB0P02XjaPZb1849U6qzsU6QlDIc8b62jBIdK9wZGUJYakVCPD-k1-ifTn626q/pub" height="500" width="750"></iframe>
        </Card>
        <Card >
            <h2>Resultados</h2>
            <iframe src="https://docs.google.com/spreadsheets/d/e/2PACX-1vQiaurAKhfwjCtu1o2vRHuVeFxOF26q5xa5VaeOROusyi7AS2L38_xwnTjLOaEt4BxWcVOlhxsgaByx/pubhtml?gid=0&single=true" height="500" width="750"></iframe>
        </Card>
    </div>
);

export default VerificacaoLexico;