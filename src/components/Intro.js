import React, { useState } from "react";
// import _ from 'lodash';
// import Orderalpha from './Orderalpha'
import { Redirect } from 'react-router-dom'
import { Link } from "react-router-dom";

function Intro() {
    return (
        <div>
            <Link to="/List"><th scope="col">Restaurant Managers |</th> </Link><Link to="/"><th>Job Seekers</th></Link>

            <h1> deliverydriverhub.com</h1>

            <p>You can make $1000 per week doing deliveries!</p>
            <p>Provide some basic information and we will get back to you as soon as possible.</p>
            <form action="https://submit-form.com/GGCaFc40HpAj2r4OPjTVd" target="_self">



                <input type="text" name="name" placeholder="name"></input> <br></br>
                <p></p>
                <input type="text" name="phone" placeholder="phone number"></input> <br></br>
                <p></p>
                <input type="text" name="email" placeholder="email"></input> <br></br>
                <p></p>
                <button type="submit">Submit</button>
            </form>
            <footer>© 2020 deliverydriverhub.com </footer>
        </div>
    )

}


export default Intro;





