import React, { Component } from 'react'
import youtube from './components/youtube'
const myContext = React.createContext()

class ContextProvider extends Component {

    state = {
        videos: [],
        singleVideo: null,
        searchTerm: 'java',
        statistics: null,
        allStatistics: null,
        singleVideoComment:null,
        singleVideoId:null

      
    }


    async componentDidMount() {
        const response1 = await youtube.get('search', {
            params: {
                part: 'snippet',
                maxResults: 7,
               
                key: 'AIzaSyBoLyBT2khDNraqwwws9f0pEJo1tIoE5IA',
                q: this.state.searchTerm
            }
        })

        console.log(response1)
       
        this.setState({
            videos: response1.data.items, singleVideo: response1.data.items[0],singleVideoId: response1.data.items[0].id.videoId
        }, () => { this.SearchStats();this.FindComments() })

    }


    async componentDidUpdate(prevProps,prevState)
    {

        if(prevState.searchTerm !== this.state.searchTerm){


            const response = await youtube.get('search',{
                params:{
                    part:'snippet',
                    maxResults:7,
                    type:'video',                   
                    key:'AIzaSyBoLyBT2khDNraqwwws9f0pEJo1tIoE5IA',
                    q:this.state.searchTerm
                }
            })

            console.log(response)
            this.setState({
                videos: response.data.items, singleVideo: response.data.items[0]
            }, () => { this.SearchStats();this.FindComments()})

        }



    }


    searchAction = async (searchTerm) => {

        this.setState({ searchTerm: searchTerm })

    }


    SearchStats = async () => {

        const vidId = this.state.singleVideo.id.videoId
        const vidIds = this.state.videos.map(video => {
            if (video.id.videoId) {
                return (video.id.videoId)
            } else { return null }
        })

        const filteredId = vidIds.filter(vidid => {
            if (vidid !== null) { return vidid }
        })



        const response = await youtube.get('videos', {
            params: {
                part: 'statistics',
                id: `${[...filteredId]}`,
                maxResults: 5,
                key: 'AIzaSyBEoTcvCWhpD1N2egcDVwiToMPk7bAH6OM',
            }
        })

        this.setState({ statistics: response.data.items[0].statistics, allStatistics: response.data.items}, ()=>{this.FindComments()})

    }


    FindComments = async () => {
        const vidId = this.state.singleVideoId
        console.log(vidId)
   

        const response = await youtube.get('commentThreads', {
            params: {
                part: 'snippet,replies',
                videoId:vidId,
                maxResults: 20,
                key: 'AIzaSyBEoTcvCWhpD1N2egcDVwiToMPk7bAH6OM',
                
            

            }
        })
        this.setState({singleVideoComment:response.data.items})

    }




    VideoSelect = async (video) => {
        
        this.setState({ singleVideo: video,singleVideoId: video.id.videoId })
        const response = await youtube.get('videos', {
            params: {
                part: 'statistics',
                id: video.id.videoId,
                maxResults: 5,
                key: 'AIzaSyBEoTcvCWhpD1N2egcDVwiToMPk7bAH6OM',

            }
        })


        this.setState({ statistics: response.data.items[0].statistics },()=>{this.FindComments()})
    }



    render() {
                // console.log(this.state.singleVideoComment)
        return (
            <myContext.Provider value={{
                ...this.state,
                searchAction: this.searchAction,
                VideoSelect: this.VideoSelect
            }}>
                {this.props.children}
            </myContext.Provider>
        )
    }
}

const ContextConsumer = myContext.Consumer


export { ContextProvider, myContext, ContextConsumer } 