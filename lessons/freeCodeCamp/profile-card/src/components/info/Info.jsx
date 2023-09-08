export default function Info() {
    return <div className='infoContainer'>
        <div className="profilePic"></div>
        <div id='profileInfo'>
            <h1>João Pedro</h1>
            <p>Estudante de Ciência da Computação</p>
        </div>
        <ul id='mainLinks'>
            <li className='buttonOne'><a href="https://github.com/JPedroRodrigues" target="_blank" rel='external noopener'>Github</a></li>
            <li className='buttonTwo'><a href="https://www.linkedin.com/in/joao-pedro-rodrigues-vieira" target='_blank' rel='external noopener'>Linkedin</a></li>
        </ul>
    </div>
}