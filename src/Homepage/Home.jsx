import React, { useState, useEffect } from 'react'
import { Outlet, useNavigate } from 'react-router-dom';
import { Reposstore } from '../contexts/Reposstore';
import "../App.css"
import Sidebar from './components/Sidebar/Sidebar';
import Repositories from './components/Features/Repositories/Repositories';
import { users } from '../constants/auth/users';
import { navbarOptions } from '../constants/navigation/options';
import Info from './components/Features/Info/Info';
import Settings from './components/Features/Settings/Settings';
import Cloudsecurity from './components/Features/Cloudsecurity/Cloudsecurity';
import Support from './components/Features/Support/Support';
import AicodeReview from './components/Features/CodeReview/AicodeReview';

const Home = () => {
    const [currentUser, setcurrentUser] = useState("Naveen");
    const [activeOption, setactiveOption] = useState("Repositories");
    const [repoactive, setrepoactive] = useState("Add Repository");

    const [opennavbar, setopennavbar] = useState(false);
    const navigate = useNavigate();
    const [loaded, setloaded] = useState(false);

    const Repodata = {
        loaded,
        setloaded,
        repoactive,
        setrepoactive,
    }

    const hidemenu = () => {
        const bar1 = document.getElementById("bar1");
        const bar2 = document.getElementById("bar2");

        const bar3 = document.getElementById("bar3");
        if (bar2 && bar1 && bar3) {
            bar2.style.display = "none";
            bar1.style.rotate = "45deg";
            bar1.style.marginBottom = "-4px";
            bar1.style.transformOrigin = "center";

            bar3.style.rotate = "-45deg"
            bar3.style.marginTop = "-4px";
            bar3.style.transformOrigin = "center";



        }
    }

    const showmenu = () => {
        const bar1 = document.getElementById("bar1");
        const bar2 = document.getElementById("bar2");

        const bar3 = document.getElementById("bar3");
        if (bar1 && bar2 && bar3) {
            bar2.style.display = "block";
            bar1.style.rotate = "0deg";
            bar1.style.marginBottom = "0px";
            bar1.style.transformOrigin = "center";

            bar3.style.rotate = "0deg"
            bar3.style.marginTop = "0px";
            bar3.style.transformOrigin = "center";
        }
    }

    const navbarhandler = () => {

        setopennavbar(!opennavbar);

        if (!opennavbar) {
            hidemenu();

        }
        else {
            showmenu();
        }
    }

    const hideNavbar = () => {
        if (window.innerWidth < 768) {
            setopennavbar(false);
            showmenu();
        }
    }

    useEffect(() => {
        const handleClickOutside = (event) => {
            const aside = document.querySelector('aside');
            const navbar = document.querySelector('.menu');
            if (opennavbar && aside && !aside.contains(event.target) && !navbar.contains(event.target)) {
                setopennavbar(false);
                showmenu();
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [opennavbar]);

    useEffect(() => {
        if (!loaded) {
            setTimeout(() => {
                setloaded(true);
            }, 1500)
        }
    }, [loaded])




    useEffect(() => {
        if (localStorage.getItem("loginstatus") && localStorage.getItem("loginstatus") === "login") {
            localStorage.setItem("loginstatus", "loggedout");
        }
        else {
            navigate("/Login");

        }
    }, [])


    return (
        <Reposstore.Provider value={Repodata}>
            <div className='Home-container z-index:5 w-full relative  h-screen md:flex-row flex flex-col items-center md:items-start  '>
                <div className={`absolute h-[calc(100%-62px)]  w-full top-[62px] md:hidden bg-[#000000B3]  ${opennavbar ? 'block' : 'hidden'} `}></div>
                <div className='xs:w-[92%] w-[95%] md:hidden  flex  justify-between items-center py-[15px]'>
                    <div className='flex items-center   gap-[10px] '>
                        <img className='w-[29px] h-[32px]' src="./Images/codeant_logo_dark.svg" alt="CodeAnt Logo" />
                        <header className=' font-sans-serif font-normal title text-[24px] leading-[27px]  '>CodeAnt AI</header>
                    </div>
                    <div onClick={() => { navbarhandler() }} className={`menu flex flex-col gap-[5px] cursor-pointer`}>
                        <div id="bar1" className='transition-all duration-300 ease-in-out md:w-[24px] md:h-[4px] w-[21px] h-[3px] rounded-full   bg-[#181D27]'></div>
                        <div id="bar2" className='transition-all duration-300 ease-in-out md:w-[24px] md:h-[4px] w-[21px] h-[3px] rounded-full bg-[#181D27]'></div>
                        <div id="bar3" className='transition-all duration-300 ease-in-out md:w-[24px] md:h-[4px] w-[21px] h-[3px] rounded-full bg-[#181D27]'></div>
                    </div>
                </div>
                <Sidebar users={users} navbarOptions={navbarOptions} currentUser={currentUser} setcurrentUser={setcurrentUser} activeOption={activeOption} setactiveOption={setactiveOption} opennavbar={opennavbar} setloaded={setloaded} hideNavbar={hideNavbar} />

                <div className={`main-content w-full h-[calc(100%-64px)] md:h-full md:w-[calc(100%-240px)] flex justify-center items-center  bg-white ${opennavbar ? ' pointer-events-none' : ''}`}>
                    <Outlet />


                </div>
            </div>
        </Reposstore.Provider>
    )
}

export default Home;