import React from 'react'
import VideoList from './VideoList'
import SingleVid from './SingleVid'

function VideoComp() {
    return (
        <div className='row'>
            <div className="col-lg-8  col-sm-12">
                <SingleVid/>
            </div>
            <div className="col-lg-4  col-sm-12">
                <VideoList/>
            </div>
        </div>
    )
}

export default VideoComp
