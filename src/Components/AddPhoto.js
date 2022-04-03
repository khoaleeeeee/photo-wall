import React, {Component} from 'react';


class AddPhoto extends Component {
  constructor(){
    super()
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleSubmit(event){
    event.preventDefault();
    const imageLink = event.target.elements.link.value;
    const caption = event.target.elements.caption.value;
    const post = {
      id: Number(new Date()),
      description: caption,
      imageLink: imageLink
    }
    if (caption && imageLink){
      this.props.onAddPhoto(post)
    }
  }
  render(){
    return <div>
        <div>
          <h1> PhotoWall</h1>
        </div>
        <div className='form'>
          <form onSubmit={this.handleSubmit}>
            <input type='text' placeholder="Link" name="link"/>
            <input type='text' placeholder="Caption" name="caption"/>
            <button>Post</button>
          </form>
        </div>
      </div>
  }
}
export default AddPhoto;
