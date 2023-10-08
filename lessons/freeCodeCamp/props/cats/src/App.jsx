import Contact from "./Contact"
import catsData from "./catsData"
import Heading from "./components/Heading.jsx"

import "./style.css"

function App() {
    const cats = catsData.map(cat => <Contact {...cat} />)

    return (
        <div className="container">
            <Heading animal="raposas" id={123456}/>

            <div className="contacts">
                {cats}
            </div>
        </div>
    )
}

export default App