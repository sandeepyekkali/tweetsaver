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

    componentWillReceiveProps(){
        if(this.props.searchString){
            axios({
                url :`http://tweetsaver.herokuapp.com/?q=${this.props.searchString}&count=3`,
                adapter: jsonpAdapter,  
            })
            .then(({data})=>{
                this.setState({
                    searchResults: data,
                    searchString: null
                })
                console.log(data)
            })
        }
    }

    render() {

        if(this.state.searchResults === null){return <div>Loading</div>}

        const cardsArray = []
        const {tweets} = this.state.searchResults

        tweets.forEach(tweet=>{
            cardsArray.push(<Tweetcard tweet={tweet}/>)
        })


        return (
         <div>
            {this.state.searchResults && 
                <div>
                <p>Search Results Here</p>
                {cardsArray}
            </div>}
         </div>
        )
    }
}

export default Searchresults
