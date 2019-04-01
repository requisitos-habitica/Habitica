const React = require('react');
const CompLibrary = require('../../core/CompLibrary.js');
const MarkdownBlock = CompLibrary.MarkdownBlock; /* Used to read markdown */
const Container = CompLibrary.Container;
const GridBlock = CompLibrary.GridBlock;

class Index extends React.Component {
  render() {
    const {config: siteConfig } = this.props;

    const Block = props => (
      <Container
        padding={['bottom', 'top']}
        id={props.id}
        background={props.background}>
        <GridBlock
          align="center"
          contents={props.children}
          layout={props.layout}
        />
      </Container>
    );

    const Hero = () => (
      <section className="hero">
        <img src={ siteConfig.heroLogo }/>
      </section>
    );

    const Features = () => (
      <Block layout="fourColumn">
        {[
          {
            title: 'Divirta-se organizando sua vida',
            content: 'Nunca foi tão legal organizar suas tarefas e as do seus grupos',
            //image: `${baseUrl}img/docusaurus.svg`,
            //imageAlign: 'top',
          },
          {
            title: 'Desbrave o nosso Universo',
            content: 'o que o habitica faz 2',
            //image: `${baseUrl}img/docusaurus.svg`,
            //imageAlign: 'top',
          },
        ]}
      </Block>
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
