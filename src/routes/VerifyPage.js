import React from 'react'
import { StyledInput } from '../Components/styled/StyledInput'
import Navbar2 from '../Components/Mobile/Navbars/Navbar2';
import { StyledButton1 } from '../Components/styled/Button';
import { useNavigate } from 'react-router-dom';
export default function VerifyPage() {
    let navigate = useNavigate();

    return (
        <React.Fragment>
            <Navbar2 title="" />
            <div className="position-absolute t-5 w-100 h-100 pt-5 px-2 w-100">
                <h1 className="tertiaryText">Enter OTP sent 8059****9</h1>
                <div className="h-15"></div>
                <StyledInput id="otp" type="number" placeholder="Enter OTP" className="mb-2 tertiaryText" />
                <StyledButton1 onClick={() =>navigate('/create')} className=' w-100 mt-3'><span className='primaryText'>Verify</span></StyledButton1>
                <div className='mt-5 align-items-center d-flex flex-column'>
                    <h2 className='tertiaryText'>00:30</h2>
                    <span className='primaryText'>Didn't get OTP? Resend</span>
                </div>
            </div>
        </React.Fragment>
    )
}
