import React from 'react'

const card = ({id, name, email}) => {
   
    return (
        <div className='tc bg-light-green dib br3 pa3 ma2 grow pw2 shadow-5'>
            <img alt = 'robots' src={`https://robohash.org/${id}?200x200`} />
            <div>
                <h2>{name}</h2>
                <p>{email}</p>
            </div>
        </div>
    );
}

export default card;