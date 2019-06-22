import React from 'react'
import ReactMarkdown from 'react-markdown'
import Card from '../../UI/Card/Card'
import HeadArtefact from '../../HOC/HeadArtefact/HeadArtefact'
import { Link } from 'react-router-dom'
import Members from '../../../utils/members'


const StoryTelling02 = () => {

  return (
    <div className='content artefact'>
      <HeadArtefact versions={ null } rastreability={ null }
                    title="Story Telling" author= { Members.Pheo } />
    <Card>
        <p>Esse Documento contempla a elicitação de requisitos através de histórias contadas por usuários.</p>
    </Card>

    <Card>
        <h2 id = "ST3">ST3</h2>
        <p>Setting up a Routine This is my experience: A new routine should always start at 10 to 20% of it’s realistic end goal, and aimed to its goal every time is going to be done. It must be a Daily, and it might have a supporting Habit (e.g.: +1 [pomodoro]). I need to measure its time, so I use a dedicated Tree or Bush in Forest App, to later easy analysis. Then I taste it for the first week and adjust it after my weekly resume. I measure time spended, energy spent, periods of the day and automatic behavior. Then I adapt it, and perfect the text on the Daily Task. I let it “steep” for 21 days and then I use the Display Data Tool to check the missing days, the strongest days, time period, and I try to compare these results with other Habits and trackers that might be related to this new Routine.</p>
        <p>[…]</p>
        <p>After many months, realizing that I’m not struggling with it and it becomes part of me, I transfer the routine to my second account, and watch it from a safe distance, as it might run away again If I loose track of it!</p>
        <h3>REQUISITOS</h3>
        <p>O Usuário deve ser capaz de adicionar uma Daily Task. - <b>MUST HAVE</b></p>
        <p>O Usuário deve ser capaz de editar a Daily Task. - <b>MUST HAVE</b></p>
        <p>O Usuário deve ser capaz de adicionar um Hábito. - <b>MUST HAVE</b></p>
    </Card>

    <Card>
        <h2 id = "ST4">ST4</h2>
        <p>I am not good with rigid routines, so the Dailies really are an invaluable tool for me to create them. Especially for stuff that needs to be done regularly, but not frequently, I’ve found them useful. I have one Daily that’s just called “weekend” (though it’s only due on Sundays) with 6 items that I need to have done by the weekend – cleaning the bathroom and vacuuming, calling a family member, making a meal plan, thorough skin care, watering the plants, and go through my calendar and make extra sure it’s up to date. All of these things I need to do during the week, but I’ve tried having them as separate Dailies due on specific weekdays, and it just wasn’t working for me. Having them all lumped together on the weekend means I have the freedom to do them whenever I want, but still get into a habit of actually doing them (or face being busier in the weekend than I’d like to!). I like this fluidity.</p>
        <h3>REQUISITOS</h3>
        <p>O Usuário deve ser capaz de configurar Daily Tasks para que apareçam somente nos dias desejados. - <b>MUST HAVE</b></p>
        <p>O Usuário deve ser capaz de colocar uma lista de afazeres dentro de uma atividade. - <b>SHOULD HAVE </b></p>

    </Card>

    <Card>
        <h2 id = "ST5">ST5</h2>
        <p>I actually do use headers for dailies – they are normal dailies, trivial difficulty, and meant to sort my stuff – like before work, morning, afternoon. Mostly, they combine with something easy, like “morning”: have tea at desk ready to go etc. The headers are with #
so they are bigger</p>
        <h3>REQUISITOS</h3>
        <p>O sistema deve ser capaz de interpretar Markdown nos seus textos - <b>WANT TO HAVE</b></p>
    </Card>


    <Card>
        <h2 id = "ST6">ST6</h2>
        <p>First, there are some tasks that are obviously for one or the other of us, so we straight-forwardly divide those up — I clean the bathroom (I kind of enjoy that), she tidies the kitchen (she’s the cook); I tidy my office (it’s my space) and she dusts the high shelves (she’s tall). Each of us has a daily on an appropriate repeat for that. Other than that, we have tasks that recur every few days to get it done a little bit at a time — e.g. there’s a daily “ten minute tidy in the living room” which recurs every three days. It doesn’t matter whether one of us does ten minutes or both of us do five, though the very best outcome is for both of us to do ten; either way, as long as it’s done, we get to check it off. A minimum just has to get done every three days. That way, things never build up to the point where running the hoover round is insurmountable. We make it bitesize, so that there’s a little to do every day, but never a lot.</p>
        <h3>REQUISITOS</h3>
        <p>As Daily Tasks devem se repetir dentro de um período de tempo. - <b>MUST HAVE</b></p>
        <p>As Daily Tasks devem poder ser marcadas como feitas. - <b>MUST HAVE</b></p>
    </Card>


    <Card>
        <h2 id = "ST7">ST7</h2>
        <p>I want to establish a new habit for myself like “workout” or “get my work done without procrastinating”, I find it helpful to be both playful, precise and flexible.</p>
        <p>Flexible: I want to be more organized with like my laundry. So I set a daily. I worked with this for some days – then I realized this does not fit. So I made this a habit – it is less discouraging to rather have a habit checked off 3x/week instead of fail at a daily often.</p>
        <p>[...]</p>
        <p>precise: be organized with laundry is not exact enough. What is the issue? The place around the machine was a mess. So I found the decluttering devils, had a challenge to organize the space. Each time I walk by, now I ensure that everything goes into the right boxes (no daily needed, that just 1 min).</p>
        <p>[...]</p>
        <p>playful: I often look at my list and change everything. Different order, headers, combine tasks, make sub-tasks, new/delete tasks – whatever. My life changes, I change (hopefully) – so my habits/dailies/to-dos should. I always look for new approaches to things.</p>
        <h3>REQUISITOS</h3>
        <p>O Usuário deve ser capaz de adicionar uma Daily Task. - <b>MUST HAVE</b></p>
        <p>O Usuário deve ser capaz de editar a Daily Task. - <b>MUST HAVE</b></p>
        <p>O Usuário deve ser capaz de adicionar um Hábito. - <b>MUST HAVE</b></p>
    </Card>


    <Card>
        <h2 id = "ST8">ST8</h2>
        <p>I’ve joined a several challenges that I think will help, like the Plank-a-day, vegan challenge, no sugar challenge. I’ve also broken my weight loss goal down into weekly, then monthly goals. Using Habits to remind myself to take a moment & focus, choose the healthier option, etc. Using the Dailies to cultivate healthier eating & exercise & the To Dos for the monthly goal of 11 pounds loss a month. The challenges are really helping me hone my focus & not get off track.</p>
        <h3>REQUISITOS</h3>
        <p>O Usuário deve ser capaz de participar de challenges. - <b>WANT TO HAVE</b></p>
        <p>O Usuário deve ser capaz de criar uma To-Do. - <b>MUST HAVE</b></p>
    </Card>


    <Card>
        <h2 id = "ST9">ST9</h2>
        <p>ALL of my “run my business” tasks are in Habitica and I pretend that my Avatar is my personal assistant, here to remind me about things that are complicated, multi-step or involve deadlines. Sometimes I will drag myself through some tedious task simply because I am about to defeat a bossfight. It reminds me to reorder supplies, warns me when our advertising campaign needs to be renewed and helps me keep track of things that might have otherwise fallen through the cracks. My employees know to take it seriously when I tell them I AM PUTTING THIS ON MY HABITICA.</p>
        <h3>REQUISITOS</h3>
        <p>O Sistema possui um Avatar, que representa o usuário <b>- MUST HAVE</b></p>
        <p>O Usuário pode colocar uma data limite para as suas atividades. - MUST HAVE<b>- MUST HAVE</b></p>
        <p>Missões possuem Chefões à serem derrotados. <b>- COULD HAVE</b></p>
        <p><b></b></p>
    </Card>

    <Card>
        <h2 id = "ST10">ST10</h2>
        <p>I use YNAB (although I’m lapsing) so there is a YNAB challenge in the Financial Discipline guild that I use to remind me to budget regularly and when to do budget check ups. I use todo challenges or the planning challenges in the Planner Addicts guild to remind me about sifting through my work e-mails and such. I also use habits for being on time to appointments and work. Positive habits if I’m on time or 15 mins early and negative if I’m late, really late, or have to cancel something last minute. I kind of use To Dos as a brain dump sometimes for things I need to go shopping for or to do. There’s a deep dark red to do right now to change my headlight!</p>
        <h3>REQUISITOS</h3>
        <p>O Usuário pode se juntar à guildas.<b> - COULD HAVE</b></p>
        <p>O Usuário pode fazer hábitos e atividades das guildas.<b> - COULD HAVE</b></p>
        <p>Um hábito pode ser positivo.<b> - SHOULD HAVE</b></p>
        <p>Um hábito pode ser negativo.<b> - SHOULD HAVE</b></p>
        <p>Um hábito pode ser positivo e negativo.<b> - SHOULD HAVE</b></p>
        </Card>

    <Card>
        <h2 id = "ST11">ST11</h2>
        <p>Self-care tasks like meditating and singing and drinking water are at the very top of the list so that every time I look at Habitica I see those first.</p>
        <p>When everything gets frustrating, I have a “Extra Adulting” habit that I can click to remind myself that it’s not about me, it’s just stuff that has to get done, and at least I get points</p>
        <h3>REQUISITOS</h3>
        <p>O Usuário ganha dinheiro e experiência ao completar Tasks. <b>-MUST HAVE</b></p>
    </Card>

    <Card>
        <h2 id = "ST12">ST12</h2>
        <p>I’m in a really supportive Party and we post about things we’ve achieved or things we’re working on. It’s really nice to be able to post about finishing a red to-do and get congratulations cards from people.</p>
        <h3>REQUISITOS</h3>
        <p>Usuários podem participar de Grupos<b>. - COULD HAVE</b></p>
        <p>Grupos podem conversar via chat. <b>- WANT TO HAVE</b></p>
    </Card>

    <Card>
        <h2 id = "ST13">ST13</h2>
        <p>In order to celebrate myself I put up things in the rewards section which I’d like to have but not necessarily have to have: I am an artist in my free time, and I love to go to shops where I can buy art materials like new paints, pencils, paper and such. So “buy a bottle of acrylic ink” is something I put up. I just added “drink a cup of capuccino” because I enjoy not only the cup but also the atmosphere around it – a small cafeteria around the place where I am working.</p>
        <h3>REQUISITOS</h3>
        <p>O  Usuário pode adicionar Prêmios. <b>- COULD HAVE</b></p>
    </Card>

    <Card>
        <h2 id = "ST14">ST14</h2>
        <p>One trick I’ve done with Practical Skills is to establish an Achievement Goal as a “To Do.” It sits on my “To Do” list getting redder and redder, so when I finally achieve it, I get a big reward. The trick is to clearly define the goal so you can know when you’ve achieved it. For instance, I want to draw better for my graphic novels. But that isn’t clearly defined, how better is “better.” So I drilled down and nailed something concrete. My goal is called “Master the Head.” Under notes, I explain, “I can draw the same character over and over, in any position: head shape, hair, and facial features remain consistent and recognizable.”</p>
        <h3>REQUISITOS</h3>
        <p>As atividades ou hábitos a serem feitos devem variar de cor do azul ao vermelho <b>- WANT TO HAVE</b></p>
        <p>As atividades ou hábitos com a cor mais próximas ao vermelho devem dar mais dinheiro, experiência e dano <b>- WANT TO HAVE</b></p>
    </Card>


    <Card>
        <h2 id = "ST15">ST15</h2>
        <p>I love the encouragement I’ve found within the Habitica community. Tavern, guild, party. They’re all filled with great people. For anyone struggling or scared to join I suggest joining the guild challenges. Many encourage you to say hello. I also recommend The Mystery Train. They travel around to the different guilds. It’s a great way to find new interests, friends, and challenges.</p>
        <h3>REQUISITOS</h3>
        <p>O Sistema apresenta uma área Taverna <b>- COULD HAVE</b></p>
        <p>O Sistema apresenta uma área Guilda <b>- COULD HAVE</b></p>
        <p>O Sistema apresenta um área Grupo  <b>- COULD HAVE</b></p>
        <p>O Usuário pode se juntar à Taverna, Guilda ou Grupo <b>- COULD HAVE</b></p>
        <p>Tavernas, Guildas e Grupos apresentam chats de conversa <b>- WANT TO HAVE</b></p>
    </Card>
    </div>
  )
}

export default StoryTelling02