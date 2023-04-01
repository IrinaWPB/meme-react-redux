import React from 'react'
import { useSelector } from 'react-redux'
import Meme from './Meme'


function MemeList() {
    const memes = useSelector(store=>store.memes)
    
    return (
        <div className='MemeList'>
            {memes.map(meme=><div key={meme.top} className="Meme"><Meme meme={meme}/></div>)}
        </div>
    )
}
export default MemeList