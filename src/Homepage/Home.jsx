import React, { useState,useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import "../App.css"


const users = [
    "Naveen", 
    "Utkarsh Dhairya Panwar",
    "Sandeep"
]

const navbarOptions = [
    { name: "Repositories", icon: "./Images/repos.svg" },
    { name: "AI Code Review", icon: "./Images/code.svg" },
    { name: "Cloud Security", icon: "./Images/cloud.svg" },
    { name: "How To Use", icon: "./Images/book.svg" },
    { name: "Settings", icon: "./Images/settings.svg" }

]

const repositories = [
    { name: "design-system", status: "Public", language: "React", storage: "7320 KB", lastUpdated: "Updated 1 day ago", image: "./Images/database.svg" },
    { name: "codeant-ci-app", status: "Private", language: "Javascript", storage: "5871 KB", lastUpdated: "Updated 2 days ago", image: "./Images/database.svg" },
    { name: "analytics-dashboard", status: "Private", language: "Python", storage: "4521 KB", lastUpdated: "Updated 5 days ago", image: "./Images/database.svg" },
    { name: "mobile-app", status: "Public", language: "Swift", storage: "3096 KB", lastUpdated: "Updated 3 days ago", image: "./Images/database.svg" },
    { name: "e-commerce-platform", status: "Private", language: "Java", storage: "6210 KB", lastUpdated: "Updated 6 days ago", image: "./Images/database.svg" },
    { name: "blog-website", status: "Public", language: "HTML", storage: "1876 KB", lastUpdated: "Updated 4 days ago", image: "./Images/database.svg" },
    { name: "social-network", status: "Private", language: "PHP", storage: "5432 KB", lastUpdated: "Updated 7 days ago", image: "./Images/database.svg" }
];

const Home = () => {    
    const [show, setshow] = useState(false);
    const [currentUser, setcurrentUser] = useState("Naveen");
    const [activeOption, setactiveOption] = useState("Repositories");
    const [repoactive, setrepoactive] = useState("Add Repository");
    const [currentrepos,setcurrentrepos]=useState(repositories);
    const [reposearch,setreposearch]=useState("");
    const [opennavbar,setopennavbar]=useState(false);
    const navigate = useNavigate();
    const [loaded,setloaded]=useState(false);
     

    const navbarhandler=()=>{
    
        setopennavbar(!opennavbar);
        const bar1=document.getElementById("bar1");
          const bar2=document.getElementById("bar2");
    
          const bar3=document.getElementById("bar3");
        if(!opennavbar){
          
          if(bar2 && bar1 && bar3){
                 bar2.style.display="none";
                 bar1.style.rotate="45deg";
                 bar1.style.marginBottom="-4px";
                 bar1.style.transformOrigin="center";
    
                 bar3.style.rotate="-45deg"
                 bar3.style.marginTop="-4px";
                 bar3.style.transformOrigin="center";
    
    
    
          }
         
    
    
        }
        else if(bar2 && bar1 && bar3){
            bar2.style.display="block";
            bar1.style.rotate="0deg";
            bar1.style.marginBottom="0px";
            bar1.style.transformOrigin="center";
    
            bar3.style.rotate="0deg"
            bar3.style.marginTop="0px";
            bar3.style.transformOrigin="center";
    
    
    
    }
}

const hideNavbar=()=>{
    if(window.innerWidth<768){
        setopennavbar(false);
        const bar2 = document.getElementById("bar2");
                const bar1 = document.getElementById("bar1");
                const bar3 = document.getElementById("bar3");
                if(bar2 && bar1 && bar3){
                    bar2.style.display="block";
                    bar1.style.rotate="0deg";
                    bar1.style.marginBottom="0px";
                    bar1.style.transformOrigin="center";
                    bar3.style.rotate="0deg"
                    bar3.style.marginTop="0px";
                    bar3.style.transformOrigin="center";
    }
    }
}
    
    useEffect(() => {
        const handleClickOutside = (event) => {
            const aside = document.querySelector('aside');
            const navbar = document.querySelector('.menu');
            if (opennavbar && aside && !aside.contains(event.target) && !navbar.contains(event.target)) {
                setopennavbar(false);
                const bar2 = document.getElementById("bar2");
                const bar1 = document.getElementById("bar1");
                const bar3 = document.getElementById("bar3");
                if(bar2 && bar1 && bar3){
                    bar2.style.display="block";
                    bar1.style.rotate="0deg";
                    bar1.style.marginBottom="0px";
                    bar1.style.transformOrigin="center";
                    bar3.style.rotate="0deg"
                    bar3.style.marginTop="0px";
                    bar3.style.transformOrigin="center";
                }
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [opennavbar]);

    useEffect(()=>{
        if(!loaded){
       setTimeout(()=>{
        setloaded(true);
    },1500)
}
    },[loaded])


    useEffect(()=>{
         
            setcurrentrepos((repositories.filter((repo)=>(repo.name.toLowerCase().includes(reposearch.toLowerCase())))));

    },[reposearch]);

    useEffect(()=>{
      if(localStorage.getItem("loginstatus") && localStorage.getItem("loginstatus")==="login"){
                 localStorage.setItem("loginstatus","loggedout");
      }
      else{
        navigate("/Login");

      }
    },[])


    return  (  
        <div className='Home-container z-index:5 w-full relative  h-screen md:flex-row flex flex-col items-center md:items-start  '>
            <div className={`absolute h-[calc(100%-62px)]  w-full top-[62px] md:hidden bg-[#000000B3]  ${opennavbar?'block':'hidden'} `}></div>
            <div className='xs:w-[92%] w-[95%] md:hidden  flex  justify-between items-center py-[15px]'>
            <div className='flex items-center   gap-[10px] '>
                            <img className='w-[29px] h-[32px]' src="./Images/codeant_logo_dark.svg" alt="CodeAnt Logo" />
                            <header className=' font-sans-serif font-normal title text-[24px] leading-[27px]  '>CodeAnt AI</header>
                        </div>
                        <div onClick={()=>{navbarhandler()}} className={`menu flex flex-col gap-[5px] cursor-pointer`}>
                            <div id="bar1" className='transition-all duration-300 ease-in-out md:w-[24px] md:h-[4px] w-[21px] h-[3px] rounded-full   bg-[#181D27]'></div>
                            <div id="bar2" className='transition-all duration-300 ease-in-out md:w-[24px] md:h-[4px] w-[21px] h-[3px] rounded-full bg-[#181D27]'></div>
                            <div id="bar3" className='transition-all duration-300 ease-in-out md:w-[24px] md:h-[4px] w-[21px] h-[3px] rounded-full bg-[#181D27]'></div>
                        </div>
            </div>
            <aside className={`side-bar bg-white z-[30] md:h-full md:transition-none  animate-slideDown md:animate-none transition-height overflow-hidden   w-full absolute top-[62px] md:top-0 md:relative md:flex ${opennavbar?'flex':'hidden'}  flex-col items-center md:w-[240px] border-r`}>
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
                                    users.map((user,idx) => (
                                        <div key={idx} onClick={() => { setshow(false); setcurrentUser(user) }} className='text-left py-[10px] md:py-[5px] pl-[10px]'>{user}</div>
                                    ))
                                }
                            </div>}
                        </div>
                        <div className='side-bar-options w-[100%] flex flex-col gap-[5px] mt-[20px] md:my-[20px]'>
                            {
                                navbarOptions.map((option,idx) => (
                                    <div  key={option.name} onClick={() => { setactiveOption(option.name);hideNavbar() }} className={`flex ${option.name === activeOption ? 'bg-button-color ' : ''}  pl-[10px] pr-[20px] py-[9px]  gap-[10px] items-center cursor-pointer rounded-md`}>
                                        <img className={`${option.name === activeOption ? 'brightness-0 invert' : ''} w-[24px] h-[24px]`} src={option.icon} alt={option.name} />
                                        <div className={`  ${option.name === activeOption ? 'text-white' : ''} font-inter   font-semibold leading-[24px] `}>{option.name}</div>
                                    </div>
                                ))
                            }
                        </div>
                    </div>

                    <div className='support-logout-cont w-[80%]'>
                        <div className='side-bar-options flex flex-col gap-[5px] pb-[20px]'>


                            <div  onClick={()=>{hideNavbar()}} className={`flex pl-[10px]   gap-[10px] items-center cursor-pointer rounded-md`}>
                                <img className='w-[24px] h-[24px]' src={"./Images/phone.svg"} alt="Contact" />
                                <div className={` py-[10px]  font-inter   font-semibold leading-[24px] `}>Contact</div>
                            </div>
                           <span onClick={()=>{navigate("/Login")}}> <div className={`flex  pl-[10px]    gap-[10px] items-center cursor-pointer rounded-md`}>
                                <img className='w-[24px] h-[24px]' src={"./Images/sign-out.svg"} alt="Logout" />
                                <div className={` py-[10px]  font-inter   font-semibold leading-[24px] `}>Logout</div>
                            </div></span>


                        </div>
                    </div>
                </div>
            </aside>
            <div className={`main-content w-full h-[calc(100%-64px)] md:h-full md:w-[calc(100%-240px)] flex justify-center items-center  bg-white ${opennavbar ? ' pointer-events-none' : ''}`}>
                <div className='xs:w-[100%] w-[95%] h-[95%] rounded-xl border border-[#E9EAEB]'>
                    <div className='flex justify-center pt-[15px] pb-[10px]  border-b border-[#D5D7DA]'>
                        <div className='xs:w-[92%] w-[95%] flex flex-col gap-[15px]'>
                            <div className='repos-header xs:flex-col xs:gap-[12px] xs:items-start flex flex-row justify-between items-center  '>
                                <div className='flex flex-col gap-[5px]'>
                                    <h2 className='font-inter w-fit font-semibold text-[24px] leading-[32px]'>Repositories</h2>
                                    <div className='font-inter w-fit font-normal leading-[20px] text-gray-800'>{repositories.length} total repositories</div>
                                </div>
                                <div className='flex gap-[12px] '>
                                    <button onClick={() => { setrepoactive("Refresh All") ;setloaded(false) }} className={`${repoactive === "Refresh All" ? 'bg-button-color text-white   ' : 'border-[#E9EAEB]'} flex gap-[10px] py-[10px] font-normal font-inter text-[14px] border  leading-[20px] rounded-md px-[14px] items-center`}>
                                        <img className={`${repoactive === "Refresh All" ? 'brightness-0 invert' : ''} w-[20px] h-[20px]`} src="./Images/refresh.svg" alt="Refresh"></img>Refresh All</button>
                                    <button onClick={() => { setrepoactive("Add Repository") }} className={`${repoactive === "Add Repository" ? 'bg-button-color text-white ' : ''} flex gap-[10px] py-[10px] font-normal font-inter text-[14px] border border-[#E9EAEB] leading-[20px] rounded-md px-[14px] items-center`}>
                                        <img className={`${repoactive === "Add Repository" ? 'brightness-0 invert' : ''} w-[20px] h-[20px]`} src="./Images/plus.svg" alt="Add"></img>Add Repository</button>
                                </div>
                            </div>
                            <div className=' xs:w-[100%] w-[350px]   flex self-start gap-[10px] py-[10px] px-[14px] rounded-md border border-[rgba(233, 234, 235, 1)]'>
                                <img src="./Images/search.svg" alt="Search"></img>
                                <input onChange={(e)=>{setreposearch(e.target.value)}} className='outline-none  w-[70%]' placeholder="Search Repositories"></input>

                            </div>
                        </div>
                    </div>
                    <div className='repos-list-container xs:h-[calc(100%-197px)] overflow-y-auto h-[calc(100%-145px)] '>
                        {
                          loaded?(  currentrepos.map((repo) => (
                                <div key={repo.name} className='repo py-[24px] cursor-pointer border-b border-[#D5D7DA] hover:bg-[#F5F5F5]'>
                                    <div className='one-repo px-[24px] flex flex-col gap-[12px]  '>
                                        <div className='flex gap-[8px] items-center'>
                                            <div className='xs:text-[18px] font-medium font-inter text-[20px] leading-[24px]'>{repo.name}</div>
                                            <div className='xs:text-[14px] border bg-[#EFF8FF] text-[#175CD3] leading-[20px] rounded-full w-fit px-[8px] py-[2px] border-[#B2DDFF]'>{repo.status}</div>
                                        </div>
                                        <div className='flex gap-[40px] xs:gap-[24px] xxs:gap-[18px] ss:gap-[15px]  items-center'>
                                            <div className='flex gap-[8px] items-center'>
                                                <div className='leading-[24px] xs:text-[14px] font-inter '>
                                                    {repo.language}
                                                </div>
                                                <div className='circle w-[8px] h-[8px]  rounded-[50%] bg-[#1570EF]'></div>
                                            </div>
                                            <div className='flex gap-[8px] items-center'>
                                                <img src={repo.image} alt="Database Icon"></img>
                                                <div className='leading-[24px] xs:text-[14px] font-inter '>
                                                    {repo.storage}
                                                </div>
                                            </div>
                                            <div className='leading-[24px] xs:text-[14px]'>{repo.lastUpdated}</div>
                                        </div>
                                    </div>
                                </div>))):(
                                     [1,2,3,4,5].map((repo) => (
                                        <div key={repo.name} className='repo z-[10] custom-pulse py-[24px]  cursor-pointer border-b border-[#D5D7DA] '>
                                            <div className='one-repo px-[24px] flex flex-col gap-[12px]  '>
                                                <div className='flex gap-[8px] items-center'>
                                                    <div className=' w-[120px] h-[24px] bg-gray-200 rounded'></div>
                                                    <div className='w-[60px] h-[25px] bg-blue-100   rounded-full '></div>
                                                </div>
                                                <div className='flex gap-[40px] xs:gap-[24px] xxs:gap-[18px] ss:gap-[15px]  items-center'>
                                                    <div className='flex gap-[8px] items-center'>
                                                        <div className='h-[24px] w-[80px] bg-gray-200 w-[30px] font-inter rounded'>
                                                        </div>
                                                    </div>
                                                    <div className='flex gap-[8px] items-center'>
                                                        <div className='h-[24px] w-[80px] bg-gray-200 rounded '>
                                                        </div>
                                                    </div>
                                                    <div className='h-[24px] w-[180px] bg-gray-200 rounded'></div>
                                                </div>
                                            </div>
                                        </div>)
                                ))
                            
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home;