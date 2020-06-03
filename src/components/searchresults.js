import React, { Component } from 'react'
import axios from 'axios'
import jsonpAdapter from 'axios-jsonp'
import Tweetcard from './tweetcard'

class Searchresults extends Component {

    constructor(props){
        super(props)
        this.state = {
            
            searchResults: null
        }
    }

    componentDidUpdate=async()=>{
        if(this.props.searchString){
           await axios({
                url :`http://tweetsaver.herokuapp.com/?q=${this.props.searchString}&count=1`,
                adapter: jsonpAdapter,  
            })
            .then(({data})=>{
                this.setState({
                    searchResults: data.tweets,
                    searchString: null
                })
                console.log(data)
            })
        }
    }

    deleteSavedTweet=(id)=>{
       this.setState(prevState=>{
          let searchResults1 = prevState.searchResults
        //   const index = searchResults.findIndex(tweet=>{
        //       return tweet.id === id
        //   })

        //   searchResults.splice(index, 1)
            
          return {searchResults: searchResults1.filter(tweet=>{return id !== tweet.id})}
       })
       this.props.onSavedTweetsUpdated()
    }

    render() {

        if(this.state.searchResults === null){return <h3>Search Results</h3>}

        const cardsArray = []
        const {searchResults} = this.state

        searchResults.forEach(tweet=>{
            cardsArray.push(<Tweetcard handleDrop = {(id)=>this.deleteSavedTweet(id)} tweet={tweet}/>)
        })


        return (
         <div>
             <h3>Search Results</h3>
            {this.state.searchResults && 
                <div className='text-center'>
                {cardsArray}
            </div>}
         </div>
        )
    }
}

export default Searchresults
