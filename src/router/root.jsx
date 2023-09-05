import Navbar from "../components/navbar";
import "../App.css"

export default function Root() {
    return (
        <div className="d-flex flex-column">
            <Navbar />
            <div>
                <div>
                    <video style={{ width: "100%" }} mute autoplay src="https://staging.destinasian.com/wp-content/uploads/2023/06/A-Glimpse-of-W-Hotel-Hong-Kong-2.mp4" type="video/mp4"></video>
                </div>

                <div className="card mx-5 my-5 justify-content-center align-items-center">
                    <img className="" width="700px" src="https://destinasian.com/_next/image?url=https%3A%2F%2Fstaging.destinasian.com%2Fwp-content%2Fuploads%2FSpring-Moon-Interior.jpg&w=1200&q=75" />
                    <div className="card-body">
                        <h5 class="card-text justify-content-center align-items-ce">HONG KONG DINING</h5>
                        <h2 class="card-text">Spring Moon</h2>
                        <p>A sense of nostalgia pervades The Peninsula Hong Kong’s longstanding Cantonese fine-diner, whose art deco fittings make the place feel as though...</p>
                    </div>
                </div>
                <div className="card mx-5 my-5 justify-content-center align-items-center">
                    <img className="" width="700px" src="https://destinasian.com/_next/image?url=https%3A%2F%2Fstaging.destinasian.com%2Fwp-content%2Fuploads%2FHong-Kong-Feature-Aug-Sep-2023-Hero.jpg&w=1920&q=75" />
                    <div className="card-body">
                        <h5 class="card-text justify-content-center align-items-ce">HONG KONG</h5>
                        <h2 class="card-text">Hong Kong on the Rebound</h2>
                        <p>As the skyscraper-filled harbor city emerges from its pandemic-induced isolation, a longtime resident reflects on the changes—good and bad—that...</p>
                    </div>
                </div>
                <div className="card mx-5 my-5 justify-content-center align-items-center">
                    <img className="" width="700px" src="https://destinasian.com/_next/image?url=https%3A%2F%2Fstaging.destinasian.com%2Fwp-content%2Fuploads%2FKaohsiung-Feature-1-Naomi-Goddard.jpg&w=1920&q=75" />
                    <div className="card-body">
                        <h5 class="card-text justify-content-center align-items-ce">TAIWAN</h5>
                        <h2 class="card-text">A New Chapter for Kaohsiung</h2>
                        <p>Once considered a drab industrial center, Taiwan’s southern port city is recasting itself as a cultural hub and bona fide tourist destination....</p>
                    </div>
                </div>
                <div className="card mx-5 my-5 justify-content-center align-items-center">
                    <img className="" width="700px" src="https://destinasian.com/_next/image?url=https%3A%2F%2Fstaging.destinasian.com%2Fwp-content%2Fuploads%2FThe-Godown-KL-1.jpg&w=1080&q=75" />
                    <div className="card-body">
                        <h5 class="card-text justify-content-center align-items-ce">KUALA LUMPUR ATTRACTION</h5>
                        <h2 class="card-text">The Godown</h2>
                        <p>Like many repurposed hundred-year-old buildings, The Godown has seen many incarnations, including a warehouse (hence the name) and cabaret dance...</p>
                    </div>
                </div>
                <div className="card mx-5 my-5 justify-content-center align-items-center">
                    <img className="" width="700px" src="https://destinasian.com/_next/image?url=https%3A%2F%2Fstaging.destinasian.com%2Fwp-content%2Fuploads%2FQuy-Nhon-Dispatch-Featured-Image.jpg&w=1920&q=75" />
                    <div className="card-body">
                        <h5 class="card-text justify-content-center align-items-ce">VIETNAM</h5>
                        <h2 class="card-text">The Unsung Chrams of Quy Nhon</h2>
                        <p>A luxurious train ride down the tracks from Da Nang, this up-and-coming destination on the central coast of Vietnam is the jumping-off point for...</p>
                    </div>
                </div>
            </div>
        </div>
    )
}