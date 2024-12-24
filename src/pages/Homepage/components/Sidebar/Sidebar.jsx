import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

const Sidebar = ({ users, navbarOptions, currentUser, setcurrentUser, activeOption, setactiveOption, opennavbar, setloaded, hideNavbar }) => {
    const [show, setshow] = useState(false);
    const navigate = useNavigate();

    const handleOption = (val, route) => {
        setactiveOption(val);
        navigate(route)
        hideNavbar();
    }


    return (
        <aside className={`side-bar bg-white z-[30] md:h-full md:transition-none  animate-slideDown md:animate-none transition-height overflow-hidden   w-full absolute top-[62px] md:top-0 md:relative md:flex ${opennavbar ? 'flex' : 'hidden'}  flex-col items-center md:w-[240px] border-r`}>
            <div className='flex flex-col xs:w-[92%] w-[80%] justify-between h-full'>
                <div className='flex flex-col '>
                    <div className='md:flex items-center gap-[10px] hidden pt-[15px] md:pt-[30px]'>
                        <img className='w-[29px] h-[32px]' src="./Images/codeant_logo_dark.svg" alt="CodeAnt Logo" />
                        <header className=' font-sans-serif font-normal title text-[24px] leading-[27px]  '>CodeAnt AI</header>
                    </div>
                    <div onClick={() => { setshow(!show) }} className='drop-down  hover:bg-gray-100 mt-[20px] cursor-pointer  relative w-full rounded-md py-[5px] px-[10px] flex gap-[10px] justify-between items-center border border-[ #D6D7DA]'>
                        <div className='user-name w-[80%] font-inter text-left font-normal truncate'>{currentUser}</div>
                        <img src="./Images/down_arrow.svg" alt="Down Arrow"></img>
                        {show && <div className='absolute  top-full mt-[5px] left-0 absolute z-10 w-full mt-1 bg-white rounded-lg shadow-lg border border-gray-20'>
                            {
                                users.map((user, idx) => (
                                    <div key={idx} onClick={() => { setshow(false); setcurrentUser(user); setloaded(false) }} className='text-left py-[10px] md:py-[5px] pl-[10px]'>{user}</div>
                                ))
                            }
                        </div>}
                    </div>
                    <div className='side-bar-options w-[100%] flex flex-col gap-[5px] mt-[20px] md:my-[20px]'>
                        {
                            navbarOptions.map((option, idx) => (
                                <div key={option.name} onClick={() => { handleOption(option.name, option.route) }} className={`flex ${option.name === activeOption ? 'bg-button-color ' : ''}  pl-[10px] pr-[20px] py-[9px]  gap-[10px] items-center cursor-pointer rounded-md`}>
                                    <img className={`${option.name === activeOption ? 'brightness-0 invert' : ''} w-[24px] h-[24px]`} src={option.icon} alt={option.name} />
                                    <div className={`  ${option.name === activeOption ? 'text-white' : ''} font-inter   font-semibold leading-[24px] `}>{option.name}</div>
                                </div>
                            ))
                        }
                    </div>
                </div>

                <div className='support-logout-cont w-[80%]'>
                    <div className='side-bar-options flex flex-col gap-[5px] pb-[20px]'>


                        <div onClick={() => { handleOption("Contact", "Contact") }} className={`flex pl-[10px]   gap-[10px] items-center cursor-pointer rounded-md`}>
                            <img className='w-[24px] h-[24px]' src={"./Images/phone.svg"} alt="Contact" />
                            <div className={` py-[10px]  font-inter   font-semibold leading-[24px] `}>Contact</div>
                        </div>
                        <span onClick={() => { navigate("/Login") }}> <div className={`flex  pl-[10px]    gap-[10px] items-center cursor-pointer rounded-md`}>
                            <img className='w-[24px] h-[24px]' src={"./Images/sign-out.svg"} alt="Logout" />
                            <div className={` py-[10px]  font-inter   font-semibold leading-[24px] `}>Logout</div>
                        </div></span>


                    </div>
                </div>
            </div>
        </aside>
    )
}

export default Sidebar
