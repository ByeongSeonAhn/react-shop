type Rating = {
    rate?: number;
    count?: number;
} & typeof defaultProps;

const defaultProps = {
    rate: 0,
    count: 0,
}
const Rating = ({rate,count} : Rating): JSX.Element => {
    const stars = Array.from(Array(10));
    return (
        <div className='flex items-center mt-3'>
            <div className='rating rating-half'>
                {stars.map(($elm, index) => {
                   return <input type='radio' name='rating-10' key={`rating${index}`} className={`bg-yellow-400 cursor`} />
                })}
            </div>
            <div className='mt-2'>
                {rate} / {count} 참여
            </div>
        </div>
    );
}

Rating.defaultProps = defaultProps;

export default Rating;

