import React from 'react'
import ReactMarkdown from 'react-markdown'
import Card from '../../UI/Card/Card'
import { Link } from 'react-router-dom'
import HeadArtefact from '../../HOC/HeadArtefact/HeadArtefact'
import './Verificacao.scss'
import I1 from '../../../assets/Email/01.png'
import I2 from '../../../assets/Email/02.png'
import I3 from '../../../assets/Email/03.png'
import I4 from '../../../assets/Email/04.png'
import I5 from '../../../assets/Email/05.png'


const ValidacaoEmail = () => {

    return (
        <div className='content artefact'>

            <HeadArtefact versions={null} rastreability={null}
                title="Validação via e-mail" author="Rogério Júnior, Lucas Dutra e Youssef Muhamad" />

            <Card>
                <p>Dear Sir,</p>
                <p>Good Afternoon.</p>
                <br></br>
                <p>I'm a student at the <b>University of Brasília</b> in Brazil and I'm taking <b>Software Requirements</b> class. As approval condition my group must reverse engineering the requirements of an application, so we've chosen <b>Habitica</b>. In order to fulfill one assignment we must get as many point of views as we can get, and as you're great <b>contributor</b>, it would help us a lot if you could give your <b>feedback</b> in one of our <b>artifacts</b> to check if what we've elicited as requirements checks out and give us your point of view.</p>
                <br></br>
                <p>Also, if you could send any document with Habitica's requirements it would helps lot as well.</p>
                <br></br>
                <br></br>
                <p>I look forward to hearing from you.</p>
                <br></br>
                <p>Thank you for your time and consideration.</p>
                <br></br>
                <br></br>
                <p>Best regards,</p>
                <p>Rogério Júnior.</p>
            </Card>

            <Card>
                <img src={I1} ></img>
            </Card>

            <Card>
                <p>Hi Matteo,</p>
                <br></br>
                <p>First of all, thanks for answering me! When I mentioned the requirements of an application I've meant Software Requirements, like those artifacts that are assembled during all the software development process to guide the developers and set clear objectives, rich pictures, use cases, product backlog and many others. And as I mentioned we're assembling Habitica's Software Requirements artifacts during this class, but now we need to validate the documents we've produced with project stakeholders. We would be very grateful if you could take a look in our artifacts and give us a feedback telling us what you thought about the documents and don't hesitate to tell us if we've got something wrong, please!</p>
                <br></br>
                <p>The feedback that we want can be in the way that you prefer, a video, an email, a meeting. And if it is possible, can you send us some artifacts or any document assembled during Habitica's creative process?</p>
                <br></br>
                <p>I'm sending many translated artifacts so you can choose whatever you feel comfortable and understand the notation to send your feedback, please do not feel intimidated, give your opinion for those only you want to. Each artifact has its own goal and notation to express what should be developed on the application and express the universe of information (the context that is set the application) in a clear way. Down here there's a little explanation of which one:</p>
                <ul>
                    <li>- Rich Picture: it's a diagram that shows the main elements and relationships on the context of the application;</li>
                    <li>- Use Cases: it's the notation used in UML to describe the functionalities inside an application, the flow and the actors;</li>
                    <li>- Scenarios: it describes a situation inside the application and how does it works and what is needed to do it;</li>
                    <li>- Lexicons: it's the terms used in the context of the application. It use three classification for terms: verb (describes an action), object and state;</li>
                    <li>- NFR: it's keep the motives and decision for each functionality inside the diagram, for exemple,  in order to use any tech inside there were some thoughts that the development team had and some decision, in this diagram it's possible to see this. </li>
                </ul>
                <br></br>
                <p>Our documents will be attached in this email! If you want, you can check as well or repository on <a href='https://github.com/requisitos-habitica/Habitica-Backup'>GitHub</a> and also the others artifacts on <a href='https://drive.google.com/drive/folders/14lZ6qFwRUrY4czVOdVUwYsdyhcr7yBr8'>Drive</a> (PT-BR).</p>
                <br></br>
                <p>Thank you for your time and consideration.</p>
                <br></br>
                <br></br>
                <p>Best regards,</p>
                <p>Rogério Júnior.</p>

                <h2>Rastreabilidade</h2>
                <ul>
                    <li><Link to="/RichPictures">RPGeral em inglês</Link></li>
                    <li><Link to="/RichPictures">RPInventario em inglês</Link></li>
                    <li><Link to="/NFR V3 enUS">NFRv3 em inglês</Link></li>
                </ul>
            </Card>

            <Card>
                <p>Hi Matteo,</p>
                <p>Good Night.</p>
                <br></br>
                <br></br>
                <p>I'm just checking again to see if could send feedback to us. We have our final presentation tomorrow around 4 o'clock GTM+2 (Rome). Instead of typing you can also send me a voice mail (EN) on WhatsApp (+55 61 982034231) or Telegram (@rogeriojunior) if you feel that's more practical. But anything you prefer help us as well. </p>
                <br></br>
                <p>Thank you so much for your time and consideration again.</p>
                <br></br>
                <br></br>
                <p>Best regards,</p>
                <p>Rogério Júnior.</p>
            </Card>

            <Card>
                <img src={I2} ></img>
            </Card>

            <Card>
                <p>Hi Matteo,</p>
                <p>Good Morning.</p>
                <br></br>
                <p>Thank you a lot for your feedback and your explanations about Habitica's architecture, it was very helpful.</p>
                <br></br>
                <p>About the NFR, the goal is to list all the possibilities and punctuate them, we have another version that does that, but don't bother with this it is a bit strange at first.</p>
                <br></br>
                <p>I'm sending you again the rich pictures with a better resolution and in two formats so that this time you can open it. Can you take a look at them and check for me if their flow and the diagrams check out with what really passes on Habitica? It's like a mental map, but it also shows the flow of data and functionalities. </p>
                <br></br>
                <p>About the lexicons, their definitions checks out with what happens on Habitica? And the contribution scenario, it's like that how it happens to contribute?</p>
                <br></br>
                <br></br>
                <p>Thank you again for you time and consideration.</p>
                <br></br>
                <br></br>
                <p>Best regards,</p>
                <p>Rogério Júnior.</p>

            </Card>

            <Card>
                <img src={I3} ></img>
            </Card>

            <Card>
                <p>Hi Matteo.</p>
                <br></br>
                <p>I just want to thank you for your emails, for your patience, your availability an your help. Thank you so much for everything!</p>
                <br></br>
                <p>Anytime you need anything that I can help do not hesitate in contacting me. If you want to come to Brasil and need some tips hahaha, here I am.</p>
                <br></br>
                <p>Finally, thank for your time and consideration! This will help my group to be the best.</p>
                <br></br>
                <br></br>
                <p>Best regards,</p>
                <p>Rogério Júnior.</p>
            </Card>

            <Card>
                <img src={I4} ></img>
            </Card>

            <Card>
                <p>Hi Matteo,</p>
                <p>Good Afternoon.</p>
                <br></br>
                <p>Our presentation were awesome, our teacher were very pleased thanks to you.</p>
                <br></br>
                <p>I've been thinking and I'd like to ask you if you could help us put any of our artifacts in the Habitica Wiki, because as you said there are no artifacts made at the time it was being developed. I think that this should be a great thing to help others developers contribute to Habitica and it would increase the documentation of the application. This reverse engineering we've made can also help to make new upgrades and corrections on the application itself.</p>
                <br></br>
                <p>Thank you for your time and consideration.</p>
                <br></br>
                <br></br>
                <p>Best regards,</p>
                <p>Rogério Júnior.</p>
            </Card>

            <Card>
                <p>Hi Matteo,</p>
                <p>Good Night.</p>
                <br></br>
                <p>Sorry to bother you again, but I need to check with you if there's any possibility if our artifacts enter in Habitica's official documentation.</p>
                <br></br>
                <p>Thank you for your time and consideration.</p>
                <br></br>
                <br></br>
                <p>Best regards,</p>
                <p>Rogério Júnior.</p>
            </Card>

            <Card>
                <img src={I5} ></img>
            </Card>

            <Card>
                <p>Hi Matteo,</p>
                <p>Good Morning.</p>
                <br></br>
                <p>I'm so grateful for your help, thank you so much. I'll talk with Alys and later I'll send you a feedback.</p>
                <br></br>
                <p>Thank you for everything.</p>
                <br></br>
                <p>Best regards,</p>
                <p>Rogério Júnior.</p>
            </Card>

        </div>
    )
}

export default ValidacaoEmail