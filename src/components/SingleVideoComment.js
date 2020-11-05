import React from 'react'
const SingleVideoComment = ({comment}) =>  {
  console.log(comment)
    let text = comment.snippet.topLevelComment.snippet.textDisplay
    return (
        <div>
          <p className='text-left'>  <p dangerouslySetInnerHTML={{__html:text}} />  <hr/>  </p> 
        </div>
    )
}

export default SingleVideoComment
