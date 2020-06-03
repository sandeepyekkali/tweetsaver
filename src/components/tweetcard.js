import React, { Component } from 'react'
//import moment from 'moment'

class Tweetcard extends Component {

    render() {

        const {text, createdAt, retweetCount} = this.props.tweet
        const {name, profileImageUrlHttps} = this.props.tweet.user

        return (
            <div className='card'  style={{margin:3, border:'solid', borderColor:'#D3D3D3',borderWidth:1}}>
            <span className='card-header'>
             <div>{text}</div></span>
            <div className='media card-body'>
                <img src={profileImageUrlHttps} className='media-right'></img>
                <p className='card-text'>   @{name}</p>{  }
                <p className='card-text' style={{marginLeft: 18}}>   Retweets: {retweetCount}</p>
            </div>

        </div>
        )
    }
}

export default Tweetcard
