import Contact from "./Contact"
import Heading from "./components/Heading.jsx"
import catsData from "./catsData"

function App() {
    const cards = catsData.map(obj => <Contact key={obj.id} {...obj} />)

    return (
        <div className="container">
            <Heading />
            <div className="contacts">
                {cards}
                {/* <Contact
                    img={whiskerson}
                    name="Mr. Whiskerson"
                    phone="(212) 555-1234"
                    email="mr.whiskaz@catnap.meow"
                    style={styles}
                />
                <Contact
                    img={fluffy}
                    name="Fluffykins"
                    phone="(212) 555-2345"
                    email="fluff@me.com"
                />
                <Contact
                    img={felix}
                    name="Felix"
                    phone="(212) 555-4567"
                    email="thecat@hotmail.com"
                />
                <Contact
                    img={pumpkin}
                    name="Pumpkin"
                    phone="(0800) CAT KING"
                    email="pumpkin@scrimba.com"
                /> */}
            </div>
        </div>
    )
}

export default App