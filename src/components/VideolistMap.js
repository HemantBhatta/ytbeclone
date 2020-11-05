import React ,{useContext} from 'react'
import { myContext } from '../context'


function VideolistMap({video}) {
    
    const { VideoSelect ,allStatistics} = useContext(myContext)
    let stats = null;
    if(allStatistics) {
        const alls = allStatistics.reduce((acc, cur) => ({
          ...acc, [cur.id]: cur
        }), {});
        // console.log(alls)
        // console.log( video.id.videoId, video );
        stats = alls[video.id.videoId]
        if(stats){

            var viewCount = stats.statistics.viewCount
        }
    }
    return (
        <div style={{cursor:'pointer'}} className='d-flex justify-content-start mb-5'>
            <div className='mr-2' onClick={()=>{VideoSelect(video)}}>
                <img src={video.snippet.thumbnails.default.url} alt="thumbnail"/>
            </div>
            <div className='text-left'>
                <p className='mb-1'>{video.snippet.title}</p>
                <p className='chanelName my-1'>{video.snippet.channelTitle}</p>
                <p className='chanelName m-0'>{viewCount} views</p>
            </div>
            
        </div>
    )
}

export default VideolistMap
