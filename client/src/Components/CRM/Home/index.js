import React from 'react';
// import MapRepresentation from './MapRepresentation'
// import ReactTooltip from "react-tooltip";
// import LeadToppersGraph from './leadtoppers';
// import PlacewiseBookingsGraph from './PlacewiseBookings';
// import LastFifteenDaysGraph from './LastFifteenDays';
// import Sources from './Sources';
// import CoursesGraph from './Course';
import './styles.css'
import { decodeSessionStorage } from '../../../helpers/auth.helpers';
import { BsExclamationSquareFill } from 'react-icons/bs';

function Home(){
    const userData = decodeSessionStorage().payload;

    if(userData.role === "Admin"){
        return(
            <div style={{background: '#E0E0F8', display: 'flex', justifyContent: 'center', padding: '50px 0'}}>
                <div className='home-page'>
                    Hello!
                </div>
            </div>
        )
    }
    else if(userData.role === "Staff"){
        return(
            <div style={{background: '#E0E0F8', display: 'flex', justifyContent: 'center', padding: '50px 0'}}>
                <div className='home-page'>
                    staff!
                </div>
            </div>
        )
    }
    else if(userData.role === "Supervisor"){
        return(
            <div style={{background: '#E0E0F8', display: 'flex', justifyContent: 'center', padding: '50px 0'}}>
                <div className='home-page'>
                    sup!
                </div>
            </div>
        )
    }
    else{
        <></>
    }

}

export default Home;