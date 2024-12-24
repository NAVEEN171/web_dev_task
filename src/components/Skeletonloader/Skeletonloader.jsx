import React, { Fragment } from 'react'

const Skeletonloader = () => {
    return (
        <Fragment>
            {[1, 2, 3, 4, 5].map((idx) => (
                <div key={idx} className='repo z-[10] custom-pulse py-[24px]  cursor-pointer border-b border-[#D5D7DA] '>
                    <div className='one-repo px-[24px] flex flex-col gap-[12px]  '>
                        <div className='flex gap-[8px] items-center'>
                            <div className=' w-[120px] h-[24px] bg-gray-200 rounded'></div>
                            <div className='w-[60px] h-[25px] bg-blue-100   rounded-full '></div>
                        </div>
                        <div className='flex gap-[40px] xs:gap-[24px] xxs:gap-[18px] ss:gap-[15px]  items-center'>
                            <div className='flex gap-[8px] items-center'>
                                <div className='h-[24px] xxs:w-[60px] w-[80px] bg-gray-200 w-[30px] font-inter rounded'>
                                </div>
                            </div>
                            <div className='flex gap-[8px] items-center'>
                                <div className='h-[24px] xxs:w-[60px] w-[80px] bg-gray-200 rounded '>
                                </div>
                            </div>
                            <div className='h-[24px] xxs:w-[145px] w-[180px] bg-gray-200 rounded'></div>
                        </div>
                    </div>
                </div>)
            )}
        </Fragment>
    )
}

export default Skeletonloader
