const React = require('react');
const CompLibrary = require('../../core/CompLibrary.js');
const MarkdownBlock = CompLibrary.MarkdownBlock; /* Used to read markdown */

class Index extends React.Component {
  render() {
    const {config: siteConfig } = this.props;

    const Hero = () => (
      <section className="hero">
        <img src={ siteConfig.heroLogo }/>
      </section>
    );

    const Feature = ({ title, img, text }) => (
      <div className="feature">
        <h1 className="feature__title">{ title }</h1>
        <img src={ img } className="feature__img"/>
        <p className="feature__text">{ text }</p>
      </div>
    )
    

    const Features = () => (
      <section className="features">
        {siteConfig.features.map(f => <Feature  key={ f.title } title={ f.title } 
                                                img={ f.img }   text={ f.text }/>) }
      </section>
    );

    const FeatureCallout = () => (
      <div
        className="productShowcaseSection paddingBottom"
        style={{textAlign: 'center'}}>
        <h2>Explicar o habitica</h2>
        <MarkdownBlock>These are features of this project</MarkdownBlock>
      </div>
    ); 

    const ContributorCard = ({name, img, github}) => (
      <a href={ github } className="card">
          <p className="card__name">{ name }</p>
          <img src={ img } className="card__img"/>
      </a>
    )

    const Contributors = () => (
      <section className="contributors">
        <h1 className="contributors__title">Contribuidores</h1>
        <div className="cards-container">
          {siteConfig.contributors.map(c => <ContributorCard  key={ c.name }  name={ c.name } 
                                                              img={ c.img }   github={ c.github }/>)}
        </div>
      </section>
    );

    return (
      <div>
        <Hero siteConfig={siteConfig}/>
        <div className="mainContainer">
          <Features />
          <FeatureCallout />
          <Contributors /> 
        </div>
      </div>
    );
  }
}

module.exports = Index;
