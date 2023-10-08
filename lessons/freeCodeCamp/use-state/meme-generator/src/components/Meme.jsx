import {useState} from "react"
import memesData from "../memesData.js"

export default function Meme() {
    const [meme, setMeme] = useState({
        topText: "Shut up!",
        bottomText: "And take my money!",
        randomImage: "/memeimg.png"
    });

    const [allMemesImg, setAllMemesImg] = useState(memesData);

    function getMemeImage() {
        const memeArray = allMemesImg.data.memes;
        const randomMeme = memeArray[Math.floor(Math.random() * memeArray.length)];

        setMeme(prevMeme => {
            return {...prevMeme, randomImage: randomMeme.url};
        });
    }

    return (<section className="input--meme">
        <div className="form">
            <input type="text" name="meme--text" className="meme--text" placeholder="Top text"/>
            <input type="text" name="meme--text" className="meme--text" placeholder="Bottom text"/>

            <button type="submit" className="form--button" onClick={getMemeImage}>Get a new meme image</button>
        </div>

        <div className="img--container">
            <p className="top--text">{meme.topText}</p>

            <img src={meme.randomImage} alt="Meme image" className="meme--img"/>

            <p className="bottomText">{meme.bottomText}</p>
        </div>
    </section>)
}