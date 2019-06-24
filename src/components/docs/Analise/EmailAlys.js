import React from 'react'
import ReactMarkdown from 'react-markdown'
import Card from '../../UI/Card/Card'
import { Link } from 'react-router-dom'
import HeadArtefact from '../../HOC/HeadArtefact/HeadArtefact'
import './Verificacao.scss'
import I1 from '../../../assets/Email/06.png'
import I2 from '../../../assets/Email/07.png'
import I3 from '../../../assets/Email/08.png'
import I4 from '../../../assets/Email/09.png'
import I5 from '../../../assets/Email/10.png'
import I6 from '../../../assets/Email/11.png'
import I7 from '../../../assets/Email/12.png'


const ValidacaoEmail = () => {

  return (
    <div className='content artefact'>

    <HeadArtefact versions={ null } rastreability={ null }
                    title="Validação via e-mail" author="Rogério Júnior"/>

        <Card>
            <p>Hi Alys,</p>
            <p>Good Morning.</p>
            <br></br>
            <p>My name is Rogério and I'm a student from University of Brasília in Brazil. Matteo Pagliazzi passed me your email in order to check with you the possibility of put the artifacts me and my group elicited on Habitica's Official Wiki. </p>
            <br></br>
            <p>Our aim consist on reverse engineering Habitica in order to get the requirements that guided the development process and produce the respective documents. As Habitica is an open source application, Matteo said me that there's no such artifacts. And so, how developers contribute to Habiticas' code, those requirements artifacts can guide the understanding of the application and contribute the growth of the documentation of Habitica.</p>
            <br></br>
            <p>Matteo validated some artifacts we've sent him and said that you wanted to put a few on the Wiki. In order to improve the better comprehension of this artifacts we can write a simplified description so people can understand them and maybe contribute as well.</p>
            <br></br>
            <p>I'm sending you the <a href='https://requisitos-habitica.firebaseapp.com/' >Wiki</a> (PT-BR) of our project so you can get to know it better and  if you like the idea, I'll send the artifacts Matteo said you like to put on Habiticas' Official Wiki. </p>
            <br></br>
            <br></br>
            <p>Thank you for your time and consideration.</p>
            <br></br>
            <p>Anything you don't understand, please, let me know.</p>
            <br></br>
            <p>Looking forward to hear from you.</p>
            <br></br>
            <br></br>
            <p>Best Regards,</p>
            <p>Rogério Júnior.</p>
        </Card>

        <Card>
            <img src={I1} ></img>
        </Card>

        <Card>
            <p>Hi Alys,</p>
            <p>Good Morning.</p>
            <br></br>
            <p>I'm flattered to hear this. I'm sending you both artifacts with the objective of them to be as comprehensive as possible. I''d love if you could reference them with the link of our <a href='https://requisitos-habitica.firebaseapp.com/'>Wiki</a>, it would help a lot with our Software Requirement Class, and also if you could put them as quickly as possible, because our final presentation is Monday morning around 11 o'clock (GTM-3). I'm sorry to bother you with such short period of time.</p>
            <br></br>
            <p>I've been thinking, and it would be a great idea if you could provide our <a href='https://requisitos-habitica.firebaseapp.com/'>Wiki</a> in order to developer be able to contribute to translate them, whoever wants, to increase the requirements documentation of Habitica, which is a very important part of an application. Our documents were validated by the greatest professors on this area, with many works published, what has made the documents very consistent. If you could check as well the "Modelagem" tab in our <a href='https://requisitos-habitica.firebaseapp.com/'>Wiki</a>, you can find too some other artifacts that you may like and them we can make the same process with them.</p>
            <br></br>
            <p>A Rich Picture is a way to explore a situation and express it through diagrams, showing its flow in a simple and easy to read way . I'm sending you two Rich Pictures, the first describes the Habitica's inventory and the second one shows the general flux of Habitica, since the problem that Habitica solves until its gamification system.</p>
        </Card>

        <Card>
            <img src={I2} ></img>
        </Card>

        <Card>
            <p>Hi Alys,</p>
            <p>Good Morning.</p>
            <br></br>
            <p>Sorry for the delay, I was making the changes you requested me. Actually, thank you so much for feedback, even thought we were carefully making theses artifacts some things have really passed.</p>
            <br></br>
            <p>I hope now everything is up-to-date, in case not, please let me know.</p>
            <br></br>
            <p>Regarding our Wiki layout (https://requisitos-habitica.firebaseapp.com/), that's actually a requirement from our teacher as how we must develop our Final Work. If you let us, we can in the description of tab "Sobre" put a mention about "Rules for Third-Party Tools" of Habitica's and specify our aim of using it. We have no bad intentions on using them, only academical. And depending on your approval, it can become an official Wiki for the Engineering of Requirements (term used to describe the area of Software Requirements) and be linked to the Habitica.</p>
            <br></br>
            <br></br>
            <p>Thank you for your time and consideration.</p>
            <br></br>
            <p>Looking forward to hearing from you.</p>
        </Card>

        <Card>
            <img src={I3} ></img>
        </Card>

        <Card>
            <p>Hi Alys,</p>
            <p>Good Night.</p>
            <br></br>
            <p>I'm sending you many formats in order any of them shows properly.</p>
            <br></br>
            <p>Best Regards,</p>
            <p>Rogério Júnior.</p>
        </Card>

        <Card>
            <img src={I4} ></img>
        </Card>

        <Card>
            <p>Hey Alys.</p>
            <br></br>
            <p>I'm sending you again, but this time in 3 different sizes: the normal one, -25% smaller and - 0.5% smaller.</p>
            <br></br>
            <p>Hope any of them will work.</p>
        </Card>

        <Card>
            <img src={I5} ></img>
            <br></br>
            <img src={I6} ></img>
        </Card>

        <Card>
            <p>Hi Alys,</p>
            <p>Good Morning.</p>
            <br></br>
            <p>I don't know what to say! Than you much, I'm very glad for you disposal and all your feedbacks, they were very helpful.</p>
            <br></br>
            <p>If you could, I just wanted you know if you might put as reference our <a href='https://requisitos-habitica.firebaseapp.com/' >Wiki</a> as reference of the pictures, like "Source: <a href='https://requisitos-habitica.firebaseapp.com/' >https://requisitos-habitica.firebaseapp.com/</a>". It would definitely helps us make history in all the History of this class.</p>
            <br></br>
            <p>I definitely want to send you more artifacts to put on the Wiki, I'll just need some extra time to translate them and I'll contact you.</p>
            <br></br>
            <p>Thank you again for making the artifacts available</p>
            <br></br>
            <p> in such short period of time!</p>
            <br></br>
            <p>But for all you've made for me and my group, thank you much!</p>
        </Card>

        <Card>
            <img src={I7} ></img>
        </Card>

    </div>
  )
}

export default ValidacaoEmail