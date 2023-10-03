import trollFace from "../assets/troll-face.svg"

export default function Nav() {
    return <nav>
        <img src={trollFace} alt="troll-face" className="logo--img"/>
        <p className="logo--text">Meme generator</p>
        <p className="nav--text">React Course - Project 3</p>
    </nav>
}