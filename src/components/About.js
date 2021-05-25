import Heading from "../components/layout/Heading";
import Footer from "../components/layout/Footer"
import Headerimg from "../img/rm-bad.png"
import RickAndMorty from "../img/randm.png"
import RmAbout from "../img/rm-about.png"
import Boys from "../img/rm.png"


function About() {
    return (
        <>
            <Heading heading="So, Whats Rick & Morty about?" />
            <div className="container">
            <img src={Headerimg} className="about-header-img" alt="Rick and morty breaking bad"></img>
            </div>

            <div className="container about-page">
                <p>
                The show revolves around the adventures of the members of the 
                Smith household, which consists of parents Jerry and Beth, their 
                children Summer and Morty, and Beth’s father, Rick Sanchez, who 
                lives with them as a guest. The Smith family lives outside of Seattle, 
                Washington. The adventures of Rick and Morty, however, take place across 
                an infinite number of realities, with the characters traveling to other 
                planets and dimensions through portals and Rick’s flying car.
                </p>
                <p>
                    <b>DISCLAIMER:</b> I don’t claim to own any images shared here. If you want 
                    credits or images to be removed, please contact me.
                </p>

                <div className="flex">
                    <div>
                        <img src={RickAndMorty} alt="rick and morty"></img>
                    </div>
                    <div>
                        <p>
                            Rick and Morty, together make the weirdest duo and are involved in weird shit, 
                            all the time. Grandpa Rick tells queer, contradictory things to his grandson, 
                            Morty and makes him do the same.
                        </p>
                        <p>
                            The salacious Grandfather, Richard "Rick" Sanchez. He is a genius scientist whose alcoholism and reckless 
                            behavior are a source of concern for his daughter's family, as well as the safety of their son, Morty.
                            Rick forces his grandson to stick to him in all his missions.
                        </p>
                        <p>
                        Morty is the 14-year-old grandson, to Rick. He is a kind-hearted but easily distressed boy, 
                        whose naïve but grounded moral compass plays counterpoint to Rick’s Machiavellian ego.
                        </p>
                    </div>
                </div>

                <div className="flex">
                    <div>
                        <p>
                        Animation for the show is done using Toon Boom Harmony, post-production work is done in Adobe After Effects, 
                        and background art is done in Adobe Photoshop. Production of animation is handled by Bardel Entertainment 
                        in Vancouver, Canada.
                        </p>
                        <p>
                        Roiland's cartooning style is heavily indebted to The Simpsons, a factor he acknowledged in a 2013 interview, 
                        while also comparing his style to that of Pendleton Ward (Adventure Time) and J. G. Quintel (Regular Show)
                        </p>
                        <p>
                        You'll notice mouths are kind of similar and teeth are similar, but I think that's also a stylistic thing that... 
                        all of the creators are kind of the same age, and they are all inspired by The Simpsons and all these other shows we're kind of 
                        subconsciously tapping into.
                        </p>
                    </div>
                    <div>
                        <img src={RmAbout} alt="rick and morty"></img>
                    </div>
                </div>
                <img src={Boys} className="last-image" alt="rick and morty"></img>
            </div>
            <Footer />
        </>
    )
}

export default About
