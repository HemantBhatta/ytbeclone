import React ,{useContext} from 'react'
import {myContext} from '../context'
import VideolistMap from './VideolistMap'


function VideoList() {
    const {videos} = useContext(myContext)
    // console.log(videos)
    const videolist = videos.map((video)=>{
            return (<VideolistMap  video = {video}/>)
    })

    
    return (
        <React.Fragment>    
            <div className=''>
                        {videolist}
            </div>  
        </React.Fragment>
    )
}

export default VideoList
