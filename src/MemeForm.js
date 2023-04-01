import React, {useState} from 'react'
import { useDispatch } from 'react-redux'

function MemeForm() {
    const INITIAL_STATE = {
        url: "",
        top: "",
        bottom: ""
    }
    const [data, setData] = useState(INITIAL_STATE)

    const handleChange = (e) => {
        const {name, value} = e.target
        setData(data=> ({...data, [name]: value}))
    }

    const dispatch = useDispatch()

    const handleSubmit = (e) => {
        e.preventDefault()
        dispatch({type:"CREATE", payload: data})
        setData(INITIAL_STATE)
    }
    return (
        <div>
            <h1>Meme Generator</h1>
            <form onSubmit={handleSubmit}>
                <div className="input_field">
                    <label htmlFor="url">Enter image URL here:   </label>
                    <input type="text" name="url" id="url" value={data.url} onChange={handleChange} />
                </div>
                <div className="input_field">
                    <label htmlFor="top">Enter top text here:   </label>
                    <input type="text" name="top" id="top" value={data.top} onChange={handleChange} />   
                </div>
                <div className="input_field">
                    <label htmlFor="bottom">Enter bottom text here:   </label>
                    <input type="text" name="bottom" id="bottom" value={data.bottom} onChange={handleChange}/>
                </div>  
                <button>Create meme</button>
            </form>
        </div>
    )
}


export default MemeForm