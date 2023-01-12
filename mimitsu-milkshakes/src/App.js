import React from "react"
import Nav from "./components/Nav"
import Hero from "./components/Hero"
import Card from "./components/Card"
import cardsData from "./cardsData"
import Footer from "./components/Footer"
import About from "./components/About"

export default function App() {
    const cards = cardsData.map(item => {
        return <Card 
        key = {item.id}
        item = {item} />
    })
    
    return(
        <div>
            <Nav />
            <Hero />
            <div className="cards--container">
                {cards}
            </div>
            <About />
            <Footer />
        </div>
    )
}