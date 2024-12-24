const MetricItem = ({ value, description }) => (
    <div className='Each-part w-fit flex flex-col items-center'>
      <div className='font-inter text-[18px] font-bold leading-[27px]'>{value}</div>
      <div className='font-inter text-[14px] font-normal leading-[20px]'>{description}</div>
    </div>
  );
  
  export default MetricItem;