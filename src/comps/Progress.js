import React, { useEffect } from 'react';
import useStorage from "../hooks/useStorage"

const Progress = ({selected,setSelected}) =>{
    const {url,progress} = useStorage(selected);
    console.log(url,progress)
    useEffect(() =>
    {
        if(url)
        {
            setSelected(null);
        }
    },[url])
    return(
        <div>
        <div classname="progressbar" style={{width: progress + '%'}} >
            uploading in progress
        </div>
        </div>
    )
}
export default Progress