import React from "react"
import Footer from "./Footer";

export default function Credits() {
    return (
        <div>
            <div
                className="fs-3 pb-3 container-fluid col-6 mb-5 rounded-5 bg-dark text-dark bg-opacity-10 shadow my-5 text-center">
                <div>
                    Thanks to our attributors for images:
                </div>
                <div className="fs-4">
                    PCH at freepik.com:

                </div>
                    <a href="https://www.freepik.com/free-vector/patients-doctors-meeting-waiting-clinic-hall-hospital-
                interior-illustration-with-reception-person-wheelchair-visiting-doctor-office-medical-examination-
                consultation_10173282.htm#query=medical%20illustration&position=23&from_view=search&track=sph">
                        <img src="https://cdn-icons-png.flaticon.com/512/18/18551.png"/>
                    </a>

            </div>
            <Footer/>
        </div>
    );
}