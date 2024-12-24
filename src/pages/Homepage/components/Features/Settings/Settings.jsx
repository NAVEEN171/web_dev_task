import React from 'react'

const Settings = () => {
  return (
    <div className='xs:w-[100%] w-[95%] h-[95%] rounded-xl border border-[#E9EAEB]'>
      <div className='flex justify-center pt-[15px] pb-[10px]  border-b border-[#D5D7DA]'>
        <div className='xs:w-[92%] w-[95%] flex flex-col gap-[15px]'>
          <div className='flex flex-col gap-[5px]'>
            <h2 className='font-inter w-fit font-semibold text-[24px] leading-[32px]'>Settings</h2>
            <div className='font-inter w-fit font-normal leading-[20px] text-gray-800'>Configure your application preferences</div>
          </div>


        </div>
      </div>

    </div>
  )
}

export default Settings
