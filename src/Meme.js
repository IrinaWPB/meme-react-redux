import React from 'react'
import { useDispatch } from 'react-redux'
import './Meme.css'

function Meme({meme}) {
    const { url, top, bottom} = meme
    const dispatch = useDispatch()
    const deleteMeme = () => {
        dispatch({type: 'DELETE', payload:meme})
    }
    return (
        <>
            <img src={url} alt="new_pic"/>
            <p className='top'>{top}</p>
            <p className='bottom'>{bottom}</p>
            <button className='delete' onClick={deleteMeme}>X</button>
        </>
    )
}

export default Meme