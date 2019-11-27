import React from "react";
import contributors from "../../../../utils/contributors";
import Contributor from "../../../UI/Contributor/Contributor";
import "./Contributors.scss";
import { Trans } from "react-i18next";

const Contributors = () => (
  <section className="content contributors">
    <h1>
      <Trans i18nKey="contributors">Contribuidores</Trans>
    </h1>
    <div className="contributors__container">
      {contributors.map(contributor => (
        <Contributor key={contributor.name} {...contributor} />
      ))}
    </div>
  </section>
);

export default Contributors;
