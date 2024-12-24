import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import LeftPanel from './components/Leftpanel';
import { Signupoptions } from '../../constants/Signups/Signupoptions';



function Login() {
    const [option, setoption] = useState("SAAS");
    const [currentSignups, setcurrentSignups] = useState(Signupoptions[option]);
    const navigate = useNavigate();


    const selectOption = (option) => {
        setoption(option);
        setcurrentSignups(Signupoptions[option]);
    }

    const setloggedIn = () => {
        localStorage.setItem("loginstatus", "login");

    }
    return (
        <div className="h-DVH flex ">
            <LeftPanel />

            <div className='right-container  w-full  md:w-1/2 h-full flex items-center justify-center' >
                <div className='flex flex-col xs:w-[90%] w-[85%] gap-[15px] '>
                    <div className='h-[570px]  border border-[#E9EAEB] rounded-xl   '>
                        <div>
                            <div className='right-cont-up  border-b border-[#E9EAEB] flex flex-col items-center '>
                                <div className='flex flex-col items-center xs:gap-[24px] gap-[36px]'>
                                    <div className='flex items-center gap-[10px] pt-[30px]'>
                                        <img src="./Images/codeant_logo_dark.svg" alt="CodeAnt Logo Dark" />
                                        <header className=' font-sans-serif title text-[30px] leading-[33px]  '>CodeAnt AI</header>
                                    </div>
                                    <div className='font-inter font-semibold text-[28px] sm:text-[29px]  lg:text-[32px] leading-[48px]'>Welcome to CodeAnt AI</div>
                                </div>
                                <div className='xs:w-[92%] buttons-container  rounded-md border w-[85%] border-[#E9EAEB] mt-[20px] mb-[25px]'>
                                    <button onClick={() => { selectOption("SAAS") }} className={`${option === "SAAS" ? 'bg-button-color  text-white' : 'bg-white text-grey-variant'}  rounded-[8px] py-[12px] w-1/2 font-inter font-semibold leading-[28px] text-[20px] hover:bg-gray-10`}>SAAS</button>
                                    <button onClick={() => { selectOption("Self Hosted") }} className={` ${option === "Self Hosted" ? 'bg-button-color text-white' : 'bg-white text-grey-variant'}    rounded-[8px] py-[12px] w-1/2 font-inter font-semibold leading-[28px] text-[20px] hover:bg-gray-10`}>Self Hosted</button>
                                </div>
                            </div>
                            <div className='w-[100%] pt-[20px] pb-[15px] flex justify-center'>
                                <div className='signup-options w-[92%] ssm:w-[80%]  lg:w-[68%] flex flex-col gap-[15px]'>
                                    {
                                        currentSignups.map((option) => (
                                            <span key={option.option} onClick={() => { navigate("/") }}><div onClick={() => { setloggedIn() }} className='signup-wrapper  cursor-pointer flex gap-[15px] py-[16px] justify-center border border-[#E9EAEB] rounded-[8px]'>
                                                <img className='w-[25px] h-[25px]' src={option.icon} alt={option.option} />
                                                <div className='font-inter font-semibold  leading-[24px]'>{option.option}</div>
                                            </div></span>
                                        ))
                                    }
                                </div>
                            </div>
                        </div>


                    </div>
                    <div className='font-inter font-normal text-[14px] leading-[24px]  text-center'>By signing up you agree to the <span className='font-bold cursor-pointer'>Privacy Policy</span>.</div>
                </div>
            </div>


        </div>
    )
}

export default Login
