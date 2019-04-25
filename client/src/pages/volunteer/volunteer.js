import React from "react";
import "./volunteer.css";
import Card from "../../components/card/card";
// import Navbar from '../../components/navbar/navbar';
// import volunteerImg from '../../components/images/boxedwater.jpg';

import Calendar from '../../components/calendar/Calendar';
import '../../components/calendar/calendar.css';
import CreateEvent from "../../components/createEvent/EventFormContainer";
import Newevent from "../../components/Newevent/index";

export const Volunteer = () => {
    return (   
        <div id="backgroundimage1" className="overlay volunteerImg">
            
            <h2>Register to Volunteer and help our community!</h2>
            <Card cardImage="volunteerImg">
             <Calendar />
             <CreateEvent />
             <Newevent />
            </Card>
        </div>
    );
};

export default Volunteer; 
