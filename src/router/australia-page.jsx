import Navbar from "../components/navbar";

export default function Australia() {
    return (
        <>
            <div className="d-flex flex-column">
                <Navbar />
                <div className="w-100">
                    <div className="card mx-5 my-5 justify-content-center align-items-center">
                        <img className="" width="700px" src="https://destinasian.com/_next/image?url=https%3A%2F%2Fstaging.destinasian.com%2Fwp-content%2Fuploads%2F2022%2F04%2FFridas-Field-Photo-by-Kate-Holmes.jpg&w=1920&q=75" />
                        <div className="card-body">
                            <h5 class="card-text justify-content-center align-items-ce">AUSTRALIA</h5>
                            <h2 class="card-text">The New Face of Bryon Bay</h2>
                            <p>Long past its ’70s hippie roots, this idyllic Australian destination has evolved into a buzzing beachside town where wellness and sustainable...</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}