import Info from './components/info/Info.jsx'
import About from './components/about/About.jsx'
import Footer from './components/footer/Footer.jsx'
import './appStyle.css'

export default function App() {
    return <div className="container">
        <Info />
        <About />
        <Footer />
    </div>
}