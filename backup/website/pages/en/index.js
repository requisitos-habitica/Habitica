const React = require('react');

class Index extends React.Component {
  render() {
    const {config: siteConfig } = this.props;

    
    const Hero = () => (
      <header className="hero">
        <img src={ siteConfig.heroLogo }/>
      </header>
    );

    const Feature = ({ title, img, text }) => (
      <div className="feature">
        <div>
        <h1 className="feature__title">{ title }</h1>
        <img src={ img } className="feature__img"/>
        <p className="feature__text">{ text }</p>
        </div>
      </div>
    )

    const Features = () => (
      <section className="features">
        {siteConfig.features.map(f => <Feature  key={ f.title } title={ f.title } 
                                                img={ f.img }   text={ f.text }/>) }
      </section>
    );

    const About = () => (
      <div className="about">
        <h1>O que é o Habitica ?</h1>
        <p>
          Habitica é uma aplicação gamificada para ajudar seus usuários a criar ou melhorar hábitos na vida real.
          O app contém prêmios e punições para motivar o usuário e uma rede social para inspirá-lo.  
        </p>
      </div>
    ); 

    const ContributorCard = ({ name, img, github }) => (
      <a href={ github } className="card">
        <p className="card__name">{ name }</p>
        <img src={ img } className="card__img"/>
      </a>
    )

    const Contributors = () => (
      <section className="contributors">
        <h1>Contribuidores</h1>
        <div className="cards-container">
          {siteConfig.contributors.map(c => <ContributorCard  key={ c.name }  name={ c.name } 
                                                              img={ c.img }   github={ c.github }/>)}
        </div>
      </section>
    );

    return (
      <div>
        <Hero siteConfig={siteConfig}/>
        <About />
        <Features />
        <Contributors /> 
      </div>
    );
  }
}

module.exports = Index;
