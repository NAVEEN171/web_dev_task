const StatsPopup = () => (
  <div className='absolute shadow-custom -right-5 translate-y-[calc(100%-12px)] bg-white rounded-[24px] z-30'>
    <div className='circle-wrapper md:px-[20px] lg:px-[32px] py-[15px] flex flex-col gap-[10px]'>
      <div className='flex gap-[60px] items-center'>
        <div className='circle flex items-center justify-center w-[56px] h-[56px] rounded-[50%] bg-[#e6e3fd]'>
          <img src="./Images/circles.svg" alt="Circles Icon" />
        </div>
        <div className='hike-container'>
          <div className='hike-shower flex gap-[5px] items-center'>
            <img src="./Images/up_arrow.svg" alt="Up Arrow" />
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
);

export default StatsPopup;