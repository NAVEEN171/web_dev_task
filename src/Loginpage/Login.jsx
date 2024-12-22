import React,{useState} from 'react'
import { useNavigate } from 'react-router-dom';

const Signupoptions={
    "SAAS":[
        {option:"Sign in with Github",icon:"./Images/github.svg"},
        {option:"Sign in with Bitbucket",icon:"./Images/bigbucket.svg"},
        {option:"Sign in with Azure Devops",icon:"./Images/azure.svg"},
        {option:"Sign in with Gitlab",icon:"./Images/gitlab.svg"},
    ],
    "Self Hosted":[
        {option:"Self Hosted GitLab",icon:"./Images/gitlab.svg"},
        {option:"Sign in with SSO",icon:"./Images/key.svg"},
      
    ]
}

function Login() {
     const [option,setoption]=useState("SAAS");
     const [currentSignups,setcurrentSignups]=useState(Signupoptions[option]);
     const navigate = useNavigate();


     const selectOption=(option)=>{
            setoption(option);
            setcurrentSignups(Signupoptions[option]);
     }

     const setloggedIn=()=>{
        localStorage.setItem("loginstatus","login");

     }
  return (
    <div className="h-DVH flex ">
        <div className=' hidden  md:flex left-container w-1/2 h-full relative border-r border-[#E5E5E5] bg-white border-gray-500     justify-center pt-[150px] ' >
        <div className='relative rounded-[24px] shadow-custom w-fit h-fit py-[10px] z-20 '>
            <div className='absolute shadow-custom -right-5 translate-y-[calc(100%-12px)] bg-white rounded-[24px] z-30'>
                <div className='circle-wrapper md:px-[20px]  lg:px-[32px] py-[15px]  flex flex-col gap-[10px] ' >
                    <div className='flex gap-[60px] items-center'>
                <div className='circle flex items-center justify-center w-[56px] h-[56px] rounded-[50%] bg-[#e6e3fd]'>
                <img  className='' src="./Images/circles.svg" alt="Circles Icon"/>

                </div>
                <div className='hike-container'>
                    <div className='hike-shower flex gap-[5px] items-center'>
                        <img src="./Images/up_arrow.svg" alt="Up Arrow"/>
                        <div className='font-inter font-bold text-[14px] text-custom-blue leading-[20px]'>14%</div>
                    </div>
                    <div className='font-inter leading-normal text-[12px] leading-[16px]'>This week</div>
                </div>
                </div>
                <div className='Issues-container flex flex-col gap-[3px]'>
                    <div className='font-inter font-bold text-[14px] leading-[20px]'>Issues Fixed</div>
                    <div className='font-inter font-bold text-[32px] leading-[32px]'>500K+</div>
                </div>
                </div>
                
                
            </div>
        <div className='heading-container border-b border-[rgba(230,232,240,1)] flex gap-[8px] items-center py-[15px] pl-[20px] pr-[30px]'>
        <img  className='' src="./Images/codeant_logo_dark.svg" alt="CodeAnt Logo Dark"/>

            <div className='font-inter text-[18px] font-bold leading-[27px] '>AI to Detect & Autofix Bad Code</div>

        </div>
        <div className='down-container flex md:gap-[20px] lg:gap-[55px] pl-[20px] pr-[30px] py-[15px]'>
            <div className='Each-part w-fit flex flex-col items-center'>
                <div className='font-inter text-[18px] font-bold leading-[27px] '>30+</div>
                <div className='font-inter text-[14px] font-normal leading-[20px]'>Language Support</div>
            </div>
            <div className='Each-part w-fit flex flex-col items-center'>
            <div className='font-inter text-[18px] font-bold leading-[27px] '>10K+</div>
            <div className='font-inter text-[14px] font-normal leading-[20px]'>Developers</div>
            </div>
            <div className='Each-part w-fit flex flex-col items-center'>
            <div className='font-inter text-[18px] font-bold leading-[27px] '>100K+</div>
            <div className='font-inter text-[14px] font-normal leading-[20px]'>Hours Saved</div>
            </div>
        </div>
        </div>
       
        <img width="284px" height="319px" className='absolute bottom-0 left-0' src="./Images/codeant_logo.png" alt="CodeAnt Logo"/>
        </div>
        
        <div className='right-container  w-full  md:w-1/2 h-full flex items-center justify-center' >
        <div className='flex flex-col xs:w-[90%] w-[85%] gap-[15px] '>
            <div className='h-[570px]  border border-[rgb(213, 215, 218)] rounded-xl   '>
                <div>
                <div className='right-cont-up  border-b border- rgba(216, 218, 229)] flex flex-col items-center '>
                    <div className='flex flex-col items-center xs:gap-[24px] gap-[36px]'>
                    <div className='flex items-center gap-[10px] pt-[30px]'>
                    <img src="./Images/codeant_logo_dark.svg" alt="CodeAnt Logo Dark"/>
                    <header className=' font-sans-serif title text-[30px] leading-[33px]  '>CodeAnt AI</header>
                    </div>
                    <div className='font-inter font-semibold text-[28px] sm:text-[29px]  lg:text-[32px] leading-[48px]'>Welcome to CodeAnt AI</div>
                    </div>
                    <div className='xs:w-[92%] buttons-container  rounded-md border w-[85%] border-[rgb(233, 234, 235)] mt-[20px] mb-[25px]'>
                        <button onClick={()=>{selectOption("SAAS")}} className={`${option==="SAAS"?'bg-button-color  text-white':'bg-white text-grey-variant'}  rounded-[8px] py-[12px] w-1/2 font-inter font-semibold leading-[28px] text-[20px] hover:bg-gray-10`}>SAAS</button>
                        <button onClick={()=>{selectOption("Self Hosted")}} className={` ${option==="Self Hosted"?'bg-button-color text-white':'bg-white text-grey-variant'}    rounded-[8px] py-[12px] w-1/2 font-inter font-semibold leading-[28px] text-[20px] hover:bg-gray-10`}>Self Hosted</button>
                    </div>
                </div>
                <div className='w-[100%] pt-[20px] pb-[15px] flex justify-center'>
                    <div className='signup-options w-[92%] ssm:w-[80%]  lg:w-[68%] flex flex-col gap-[15px]'>
                        {
                            currentSignups.map((option)=>(
                                <span key={option.option} onClick={()=>{navigate("/")}}><div onClick={()=>{setloggedIn()}}   className='signup-wrapper  cursor-pointer flex gap-[15px] py-[16px] justify-center border border- rgba(216, 218, 229)] rounded-[8px]'>
                                    <img className='w-[25px] h-[25px]' src={option.icon} alt={option.option}/>
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
