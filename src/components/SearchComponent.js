import React,{ useState,useContext } from 'react'
import {myContext} from '../context'


function SearchComponent() {
    const {searchAction} = useContext(myContext)
   
    const [searchTerm, setsearchTerm] = useState("");
   
    

    const handleChange = (e) => {
        setsearchTerm(e.target.value)
        console.log(e.target.value)
        
    }

    const handleSubmit = (e) => {
        e.preventDefault()
       
        setsearchTerm(searchTerm)
        searchAction(searchTerm)
    }

  

   
    return (
        <div className='d-flex justify-content-between align-items-center py-5'>
            
            <div className='logo'>
                        <div className='myLogo'><div className='myLogoInner'><i class="fas fa-play-circle fa-2x "></i></div></div>
            </div>
            <div>
                <form action="" onSubmit={handleSubmit} className='d-flex'>
                    <input value={searchTerm} type="text" className='searchInput' placeholder='Search...' onChange={handleChange}/>
                    <input className='btn btn-info ' type="submit" value='Submit' name="" id=""/>
                </form>
            </div>
            <div className='w-Emptyspace'>
                                               
            </div>

        </div>
    )
}

export default SearchComponent
