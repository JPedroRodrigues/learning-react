import memeImg from "../assets/memeimg.png"

export default function Meme() {
    return (<section className="input--meme">
        <form>
            <div className="form--input">
                <input type="text" name="meme--text" className="meme--text" placeholder="Top text"/>
                <input type="text" name="meme--text" className="meme--text" placeholder="Bottom text"/>
            </div>

            <button type="submit" className="form--button">Get a new meme image</button>
        </form>

        <img src={memeImg} alt="Meme image" className="meme--img"/>
    </section>)
}