import Navbar from "../components/navbar";

export default function Hongkong() {
    return (
        <>
        <div className="d-flex flex-column">
                <Navbar />
                <div className="w-100">
                    <div className="card mx-5 my-5 justify-content-center align-items-center">
                        <img className="" width="700px" src="https://destinasian.com/_next/image?url=https%3A%2F%2Fstaging.destinasian.com%2Fwp-content%2Fuploads%2FCardinal-Point-Magic-Hour.jpg&w=1200&q=75" />
                        <div className="card-body">
                            <h5 class="card-text justify-content-center align-items-ce">HONG KONG NIGHTLIFE</h5>
                            <h2 class="card-text">Cardinal Point</h2>
                            <p>Move over Sevva, there’s a new superstar rooftop bar in town. Set on the 45th floor of the Landmark Atrium, Cardinal Point makes up part of the...</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}