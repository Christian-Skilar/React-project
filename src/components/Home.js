import Heading from "../components/layout/Heading";
import CharacterList from "./character/CharacterList";
import Footer from "../components/layout/Footer";

function Home() {
    return (
        <>
        <div className="home-bg">
            <Heading heading="Rick & Morty character page" />
            <div className="container home-text">
            <h4>Whats Rick & Morty you say?</h4>
            <p>Rick and Morty is an American adult animated science fiction sitcom created 
                by Justin Roiland and Dan Harmon for Cartoon Network's nighttime Adult Swim 
                programming block. The series follows the misadventures of cynical mad scientist 
                Rick Sanchez and his good-hearted but fretful grandson Morty Smith, who split 
                their time between domestic life and interdimensional adventures.
            </p>
            <p>
                The series originated 
                from an animated short parody film of Back to the Future, created by Roiland for 
                Channel 101, a short film festival co-founded by Harmon. The series has been 
                acclaimed by critics for its originality, creativity and humor.</p>

                <h4>If you are a fan already. </h4>
                <p>That is GREAT!! Then you can find your favourit character on this page. all the cards ar clicable, and 
                    you will then be able to read more deatails about that character</p>
            </div>
            <CharacterList />
        </div>
        <Footer />
        </>
    )
}

export default Home
