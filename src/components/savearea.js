import React, { Component } from 'react'
import { DropTarget } from 'react-dnd'
import ls from 'local-storage'
import Tweetcard from './tweetcard'

function collect(connect,monitor){
    return{
        connectDropTarget: connect.dropTarget(),
        hovered: monitor.isOver(),
        tweet: monitor.getItem()
    }
}

class Savearea extends Component {

    constructor(props){
        super(props)
        this.state = {
            
            saveResults: []
        }
    }

   componentDidMount(){
    this.setState({
        saveResults: ls.get('savedtweets')
    })
   }

    componentDidUpdate(prevProps){
      console.log(this.props,':', prevProps.listner);
        
      if(this.props.listner !== prevProps.listner){
        this.setState({
            saveResults: ls.get('savedtweets')
        })
      }
        
    }

    render() {
       


        //if(this.state.saveResults === null){return <div>Loading</div>}

        const cardsArray = []
        const {saveResults} = this.state

       if(this.state.saveResults !== null){
        saveResults.forEach(tweet=>{
            cardsArray.push(<Tweetcard tweet={tweet}/>)
        })
       }

        const {connectDropTarget, tweet, hovered} = this.props

        return connectDropTarget(
            <div style={{border:'solid',borderWidth:1,
            borderColor:'#D3D3D3', minHeight:500, padding:5,
            marginTop:10}}>
                <h3 className='text-center'>Saved Tweets</h3>
                {cardsArray}
            </div>
        )
    }
}

export default DropTarget('tweetcard', {}, collect)(Savearea)
