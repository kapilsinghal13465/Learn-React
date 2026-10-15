const ResCard = ({id, resName, resCousine, resRating, resCookTime, cloudinaryImageId}) => {
    return (<div className='m-4 p-4 w-[250px] bg-gray-200 rounded hover:bg-gray-300'  key={id}>
        {/* logo */}
        <img className="rounded" alt='res-logo' src='https://b.zmtcdn.com/data/pictures/3/2763/66acbe4e1432a24e3565dce957dcbaa0_featured_v2.jpg?fit=around|771.75:416.25&crop=771.75:416.25;*,*'/>
        <div className='res-name text-lg font-bold py-4'>{resName}</div>
        <div className='res-cousine'>{resCousine}</div>
        <div className='res-rating'>{resRating}</div>
        <div className='res-cook-time'>{resCookTime}</div>
    </div>)
}

export default ResCard;