import {useState} from "react"
import memesData from "../memesData.js"

export default function Meme() {
    const [meme, setMeme] = useState("/memeimg.png");

    function handleClick() {
        const memeArray = memesData.data.memes;
        const randomMeme = memeArray[Math.floor(Math.random() * memeArray.length)];

        setMeme(randomMeme.url);
    }

    return (<section className="input--meme">
        <div className="form">
            <input type="text" name="meme--text" className="meme--text" placeholder="Top text"/>
            <input type="text" name="meme--text" className="meme--text" placeholder="Bottom text"/>

            <button type="submit" className="form--button" onClick={handleClick}>Get a new meme image</button>
        </div>

        <div className="img--container"><img src={meme} alt="Meme image" className="meme--img"/></div>
    </section>)
}