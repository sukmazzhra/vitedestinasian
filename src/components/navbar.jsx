import { Link } from "react-router-dom";
import "../App.css"

export default function Navbar() {
    return (
        <>
            <div>
                <nav className="navbar">
                    <img class="logo" src="logo.png" alt="" srcset="" />
                    <div class="menu fw-bold">
                        <a href="" data-bs-toggle="modal" data-bs-target="#staticBackdrop">DESTINATIONS</a>
                        <a href="" data-bs-toggle="modal" data-bs-target="#staticBackdrop">DESTINATIONS GUDES</a>
                        <a href="" data-bs-toggle="modal" data-bs-target="#staticBackdrop">FEATURE</a>
                        <a href="" data-bs-toggle="modal" data-bs-target="#staticBackdrop">LATEST TRAVEL STORIES</a>
                        <a href=""></a>
                    </div>
                    <button type="button" data-bs-toggle="modal" data-bs-target="#staticBackdrop" class="HomepageHeader_menu-icon__X405r" aria-label="Toggle navigation" aria-controls=""><svg version="1.0" xmlns="http://www.w3.org/2000/svg" width="40.000000pt" height="40.000000pt" viewBox="0 0 40.000000 40.000000" preserveAspectRatio="xMidYMid meet" style={{ color: "black" }}></svg></button>
                </nav>

                <div class="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                    <div class="modal-dialog modal-fullscreen">
                        <div class="modal-content">
                            <div class="modal-header">
                                <h1 class="modal-title fs-1 fw-bold mx-3" id="staticBackdropLabel">DestinAsian</h1>
                                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div class="modal-body">
                                <div class="container">
                                    <div className="row">
                                    </div>
                                    <div class="mb-3">
                                        <form action=""></form>
                                        <label for="" class="form-label"></label>
                                        <div className="form-control me-5 d-flex align-items-center gap-2">
                                            <i class="bi bi-search"></i>
                                            <input type="search" class="form-control" id="e" aria-describedby="" />
                                        </div>
                                    </div>

                                    <div class="row">
                                        <div class="col">
                                            <ul class="list-item list-unstyled fw-bold">
                                                <li class="list-item text-warning">DESTINATIONS</li>
                                                <Link to={"../Australia"} class="list-item">AUSTRALIA</Link>
                                                <li class="list-item">CAMBODIA</li>
                                                <li class="list-item">CHINA</li>
                                                <li class="list-item">INDIA</li>
                                                <li class="list-item">INDONESIA</li>
                                                <li class="list-item">JAPAN</li>
                                                <li class="list-item">MALAYSIA</li>
                                                <li class="list-item">MALDIVES</li>
                                                <li class="list-item">NEW ZEALAND</li>
                                                <li class="list-item">PHILIPPINES</li>
                                                <li class="list-item">SOUTH KOREA</li>
                                                <li class="list-item">THAILAND</li>
                                                <li class="list-item">VIETNAM</li>
                                            </ul>
                                        </div>

                                        <div class="col">
                                            <ul class="list-item list-unstyled fw-bold">
                                                <li class="list-item text-warning">DESTINATION GUIDES</li>
                                                <li class="list-item">BALI</li>
                                                <li class="list-item">BANGKOK</li>
                                                <div>
                                                    <Link to={"../Hongkong"} class="list-item">HONGKONG</Link>
                                                </div>
                                                <div>
                                                    <Link to={"../Jakarta"} class="list-item">JAKARTA</Link>
                                                </div>
                                                <li class="list-item">KYOTO</li>
                                                <li class="list-item">SINGAPORE</li>
                                            </ul>
                                        </div>

                                        <div class="col">
                                            <ul class="list-item list-unstyled fw-bold">
                                                <li class="list-item text-warning">FEATURE STORIES</li>
                                                <li class="list-item">SUMBA IN THE SPOTLIGHT</li>
                                                <li class="list-item">FINDING PARADISE AT INDONESIA'S BAWAH RESERVE</li>
                                                <li class="list-item">A CULINARY ROMP THROUGH BHUTAN</li>
                                            </ul>
                                            <ul class="list-item list-unstyled fw-bold">
                                                <li class="list-item text-warning">LATEST TRAVEL STORIES</li>
                                                <li class="list-item">WHAT IT'S LIKE TO STAY AT THE OUTPOST HOTEL SENTOSA
                                                    DE.WAN 1958 BY CHEF WAN</li>
                                                <li class="list-item">DE.WAN 1958 BY CHEF WAN
                                                    MERDEKARYA</li>
                                            </ul>
                                        </div>

                                        <div class="col">
                                            <ul class="list-item list-unstyled fw-bold">READERS CHOICE AWARDS
                                                <li class="list-item">HONORS CIRCLE</li>
                                                <li class="list-item text-warning">UPDATES</li>
                                                <li class="list-item">AIRLINE NEWS</li>
                                                <li class="list-item">TRAVEL NEWS</li>
                                                <li class="list-item">TRADE TALK</li>
                                                <li class="list-item text-warning">PRINT MAGAZINE</li>
                                                <li class="list-item">LATEST ISSUE</li>
                                                <li class="list-item">SUBSCRIBE</li>
                                                <li class="list-item">BACK ISSUES</li>
                                                <li class="list-item">CONTESTS</li>
                                                <li class="list-item">CONTACT US</li>
                                                <li class="list-item">SOCIALS</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}