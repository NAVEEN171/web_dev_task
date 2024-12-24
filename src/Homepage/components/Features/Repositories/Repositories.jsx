import React, { useState, useEffect, useContext } from 'react'
import Skeletonloader from '../../../../components/Skeletonloader/Skeletonloader';
import { Reposstore } from '../../../../contexts/Reposstore';
import { data } from '../../../../constants/repositories/data';


const Repositories = () => {
    const [currentrepos, setcurrentrepos] = useState(data);
    const [reposearch, setreposearch] = useState("");
    const { loaded, setloaded, repoactive, setrepoactive } = useContext(Reposstore);

    useEffect(() => {

        setcurrentrepos((data.filter((repo) => (repo.name.toLowerCase().includes(reposearch.toLowerCase())))));

    }, [reposearch]);

    return (
        <div className='xs:w-[100%] w-[95%] h-[95%] rounded-xl border border-[#E9EAEB]'>
            <div className='flex justify-center pt-[15px] pb-[10px]  border-b border-[#D5D7DA]'>
                <div className='xs:w-[92%] w-[95%] flex flex-col gap-[15px]'>
                    <div className='repos-header xs:flex-col xs:gap-[12px] xs:items-start flex flex-row justify-between items-center  '>
                        <div className='flex flex-col gap-[5px]'>
                            <h2 className='font-inter w-fit font-semibold text-[24px] leading-[32px]'>Repositories</h2>
                            <div className='font-inter w-fit font-normal leading-[20px] text-gray-800'>{data.length} total repositories</div>
                        </div>
                        <div className='flex gap-[12px] '>
                            <button onClick={() => { setrepoactive("Refresh All"); setloaded(false) }} className={`${repoactive === "Refresh All" ? 'bg-button-color text-white   ' : 'border-[#E9EAEB]'}  flex gap-[10px] py-[10px] font-normal font-inter text-[14px] border  leading-[20px] rounded-md px-[14px] items-center`}>
                                <img className={`${repoactive === "Refresh All" ? 'brightness-0 invert' : ''} w-[20px] h-[20px]  ${loaded === false ? 'animate-rotate-slow' : ''}`} src="./Images/refresh.svg" alt="Refresh"></img>Refresh All</button>
                            <button onClick={() => { setrepoactive("Add Repository") }} className={`${repoactive === "Add Repository" ? 'bg-button-color text-white ' : ''} flex gap-[10px] py-[10px] font-normal font-inter text-[14px] border border-[#E9EAEB] leading-[20px] rounded-md px-[14px] items-center`}>
                                <img className={`${repoactive === "Add Repository" ? 'brightness-0 invert' : ''} w-[20px] h-[20px]`} src="./Images/plus.svg" alt="Add"></img>Add Repository</button>
                        </div>
                    </div>
                    <div className=' xs:w-[100%] w-[350px]   flex self-start gap-[10px] py-[10px] px-[14px] rounded-md border border-[rgba(233, 234, 235, 1)]'>
                        <img src="./Images/search.svg" alt="Search"></img>
                        <input onChange={(e) => { setreposearch(e.target.value) }} className='outline-none  w-[70%]' placeholder="Search Repositories"></input>

                    </div>
                </div>
            </div>
            <div className='repos-list-container xs:h-[calc(100%-197px)] overflow-y-auto h-[calc(100%-145px)] '>
                {
                    loaded ? (currentrepos.map((repo) => (
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
                        </div>))) :
                        (
                            <Skeletonloader />

                        )

                }
            </div>
        </div>
    )
}

export default Repositories
