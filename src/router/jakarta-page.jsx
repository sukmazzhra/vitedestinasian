import Navbar from "../components/navbar";

export default function Jakarta() {
    return (
        <>
        <div className="d-flex flex-column">
                <Navbar />
                <div className="w-100">
                    <div className="card mx-5 my-5 justify-content-center align-items-center">
                        <img className="" width="700px" src="https://destinasian.com/_next/image?url=https%3A%2F%2Fstaging.destinasian.com%2Fwp-content%2Fuploads%2FLe-Quartier-1.jpg&w=1200&q=75" />
                        <div className="card-body">
                            <h5 class="card-text justify-content-center align-items-ce">JAKARTA DINING</h5>
                            <h2 class="card-text">Le Quartier</h2>
                            <p>Surviving and thriving in Jakarta’s crowded restaurant scene is no mean feat: how do you continually impress a city of fickle eaters who are...</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}