import React, {Component} from 'react';
import Title from './Title.js';
import Photowall from './photowall.js';
import AddPhoto from './AddPhoto.js';
import {Route} from 'react-router-dom'
import {connect} from 'react-redux'


class Main extends Component{
  constructor(){
    super()


  }


  render(){

    console.log(this.props.posts)

    return (
      <div>
        <Route exact path="/" render={()=> (
          <div>
              <Title title={"PhotoWall"}/>
              {/*<Photowall posts={this.state.posts} onRemovePhoto={this.removePhoto}/>*/}
          </div>
        )}/>

        {/*<Route path="/addPhoto"
               render={({history}) => (
               <AddPhoto onAddPhoto= {(addedPost)=> {
                 this.addPhoto(addedPost)
                 history.push("/")
               }}/>
             )}/>*/}
      </div>
    )
  }
}

function mapStatetoProps(state){
  return {
    posts: state
  }
}

export default connect(mapStatetoProps)(Main)
