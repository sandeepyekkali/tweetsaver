import React, { Component } from 'react'
//import moment from 'moment'
import {DragSource} from 'react-dnd'
import ls from 'local-storage'

const spec = {
    beginDrag(props){
        console.log('Dragging now')
        return props.tweet
    },
    endDrag(props,monitor,component){
        if(!monitor.didDrop()){
            return
        }
        console.log("Corect Area")
        var temp = ls.get('savedtweets')
        temp = [...temp, props.tweet]
        ls.set('savedtweets', temp)
        return props.handleDrop(props.tweet.id)
    }
}

function collect(connect,monitor){
    return{
        connectDragSource: connect.dragSource(),
        connectDragPreview: connect.dragPreview(),
        monitorIsDragging: monitor.isDragging()
    }
}

class Tweetcard extends Component {

    render() {

        const {text, retweetCount} = this.props.tweet
        const {name, profileImageUrlHttps} = this.props.tweet.user

        const {monitorIsDragging, connectDragSource} = this.props
        const setOpacity = monitorIsDragging ? 0:1

        return connectDragSource(
            <div className='card'  
            style={{margin:3, border:'solid', borderColor:'#D3D3D3',borderWidth:1,opacity: {setOpacity}}}>
            <span className='card-header'>
             <div>{text}</div></span>
            <div className='media card-body'>
                <img src={profileImageUrlHttps} className='media-right' alt=''></img>
                <p className='card-text'>   @{name}</p>{  }
                <p className='card-text' style={{marginLeft: 18}}> Retweets: {retweetCount}</p>
            </div>

        </div>
        )
    }
}

export default DragSource('tweetcard', spec, collect)(Tweetcard)
