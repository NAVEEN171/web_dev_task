import MetricItem from './MetricItem';

const InfoMetrics = () => (
  <div className='down-container flex md:gap-[20px] lg:gap-[55px] pl-[20px] pr-[30px] py-[15px]'>
    <MetricItem value="30+" description="Language Support" />
    <MetricItem value="10K+" description="Developers" />
    <MetricItem value="100K+" description="Hours Saved" />
  </div>
);

export default InfoMetrics;