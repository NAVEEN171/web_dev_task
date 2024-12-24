import StatsPopup from './StatsPopup';
import InfoMetrics from './InfoMetrics';

const LeftPanel = () => (
  <div className='hidden md:flex left-container w-1/2 h-full relative border-r border-[#E5E5E5] bg-white border-gray-500 justify-center pt-[150px]'>
    <div className='relative rounded-[24px] shadow-custom w-fit h-fit py-[10px] z-20'>
      <StatsPopup />
      <div className='heading-container border-b border-[#E9EAEB] flex gap-[8px] items-center py-[15px] pl-[20px] pr-[30px]'>
        <img src="./Images/codeant_logo_dark.svg" alt="CodeAnt Logo Dark" />
        <div className='font-inter text-[18px] font-bold leading-[27px]'>AI to Detect & Autofix Bad Code</div>
      </div>
      <InfoMetrics />
    </div>
    <img width="284px" height="319px" className='absolute bottom-0 left-0' src="./Images/codeant_logo.png" alt="CodeAnt Logo" />
  </div>
);

export default LeftPanel;