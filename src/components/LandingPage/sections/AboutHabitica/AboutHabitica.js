import React from "react";
import "./AboutHabitica.scss";
import { Trans } from "react-i18next";

const AboutHabitica = () => (
  <section className="content about-habitica">
    <h1>
      <Trans i18nKey="about.h1">O que é o Habitica ?</Trans>
    </h1>
    <p className="about-habitica__text">
      Habitica é uma aplicação gamificada para ajudar seus usuários a criar ou
      melhorar hábitos na vida real. O app contém prêmios e punições para
      motivar o usuário e uma rede social para inspirá-lo.
    </p>
  </section>
);

export default AboutHabitica;
