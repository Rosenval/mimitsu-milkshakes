import React from "react"

export default function Hero() {
    return (
        <section>
            <div className="hero--images--container">
                <img src="https://user-images.githubusercontent.com/79523606/212127519-65583b30-5ac9-4af1-93c9-bb680b86e25b.jpg" className="hero--image" alt="pink retro" />
                <img src="https://user-images.githubusercontent.com/79523606/212127515-878c3cf3-31d8-4e8e-a0bb-1ff48249f800.png" className="hero--image" alt="mimitsu big logo" />
                <img src="https://user-images.githubusercontent.com/79523606/212127522-98f5a81a-24ea-4fed-8f7b-cdca2147eaa5.jpg" className="hero--image" alt="pink retro 2" />
            </div>
            <div className="hero--text">
                <h1 className="hero--heading">Welcome to Mimitsu's world! &#9825;</h1>
                <p className="hero--p">Need a break? Wanna drink something fresh?<br/>
                Here's a variety of choices among which you can choose the one(s) that best fit(s) your taste, enjoy!<br/><br/>
                What flavour would you like to try today?</p>
            </div>
        </section>
        )
}