import React, { useContext } from 'react'
import { myContext } from '../context'
import SingleVideoComment from './SingleVideoComment';


function SingleVid() {
    const { singleVideo,statistics,singleVideoComment } = useContext(myContext)
    console.log(singleVideoComment)

    if(singleVideoComment){
        var singleVideoCommentSec = singleVideoComment.map(comment=>{
            return (<SingleVideoComment comment ={comment}/>)
        })
    }

    if(!singleVideo)
    return (<div>loading...</div>)
    let datetime = new Date(singleVideo.snippet.publishedAt).toISOString().substring(0, 10);
    
    if(singleVideo.id.videoId){

        var videoSrc = `https://www.youtube.com/embed/${singleVideo.id.videoId}`
    }else{
        var videoSrc = `https://www.youtube.com/embed/${singleVideo.id}`
    }


    return (
        <div className='' >
            <div className="card" >
            <iframe frameBorder='0' height='500' width = '100%' title='Video Player' src= {videoSrc} />
                    <div className="card-body text-left pl-0 pt-3 pb-1">
                            <p className='d-inline'>{singleVideo.snippet.title} |</p>  <p className='d-inline'>{singleVideo.snippet.channelTitle}</p>
                    </div>
                    <div className='d-flex justify-content-between'>
                        <div className='  statsSection p-1'>
                                <div className='d-inline'><span>{statistics ? statistics.viewCount : ''} views</span></div>
                                <div className='d-inline'><span> | {datetime}</span></div>
                        </div>
                        <div className=' d-flex justify-content-between statsSection p-1'>
                                <div ><span className='mr-2 text-secondary'><i class="fas fa-thumbs-up"></i></span><span>{statistics ? statistics.likeCount : ''}</span></div>
                                <div className='mx-4'><span className='mr-3 text-secondary'><i class="fas fa-thumbs-down"></i></span><span>{statistics ? statistics.dislikeCount : ''}</span></div>
                                <div><span className='mr-2 text-secondary'><i class="fas fa-comments"></i></span><span>{statistics ? statistics.commentCount : ''}</span></div>


                        </div>
                    </div>
            </div>

            <div className="commentSection">
                    {singleVideoCommentSec}
            </div>
        </div>
    )
}

export default SingleVid
