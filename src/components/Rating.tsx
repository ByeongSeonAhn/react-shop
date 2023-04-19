type Rating = {
    rate?: number;
    count?: number;
} & typeof defaultProps;

const defaultProps = {
    rate: 0,
    count: 0,
}

//[상품:별점]
const Rating = ({rate,count} : Rating): JSX.Element => {
    const stars = Array.from(Array(10));
    return (
        <div className='flex items-center mt-3'>
            <div className='rating rating-half'>
                {stars.map(($elm, index) => {
                    let cls = ""

                    if(index + 1 < rate*2) { //bg-yellow-400 적용
                        if(index%2 == 0){
                            cls = "bg-yellow-400 cursor-default mask mask-star-2 mask-half-1"
                        } else {
                            cls = "bg-yellow-400 cursor-default mask mask-star-2 mask-half-2"
                        }
                    } else { //rating 보다 작은경우 bg-yellow-400 제거
                        if(index%2 == 0){
                            cls = "cursor-default mask mask-star-2 mask-half-1"
                        } else {
                            cls = "cursor-default mask mask-star-2 mask-half-2"
                        }
                    }


                   return <input type='radio' name='rating-10' key={`rating${index}`} className={cls} />
                })}
            </div>
            <div className='ml-2'>
                {rate} / {count} 참여
            </div>
        </div>
    )
}

Rating.defaultProps = defaultProps;

export default Rating;

