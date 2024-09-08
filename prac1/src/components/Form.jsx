import  { Component } from 'react'

 class Form extends Component {
    constructor(props) {
        super(props)
      
        this.state = {
          username: '',
          comments: '',
          topic: 'react'
           
        }
      }
      handleUsernameChange = (event) => {
        this.setState({ username: event.target.value });
      }
      handleCommentsChange =(event) =>
      {
        this.setState({ comments: event.target.value});
      }
      handleTopicChange = (event) =>
      {
        this.setState({ topic: event.target.value});
      }
      handleSubmit = (event) =>
      {
        alert(`${this.state.username} ${this.state.comments} ${this.state.topic}`)
        event.preventDefault()
      }
  render() {
   
    
    return (
      <div>
       <form onSubmit={this.handleSubmit} >
        <div>
            <label htmlFor="">userName</label>
            <input type="text" value={this.state.username}  onChange={this.handleUsernameChange}/>
        </div>
        <div>
            <label htmlFor="">comments</label>
            <textarea value={this.state.comments}  onChange={this.handleCommentsChange} > </textarea>
        </div>
        <div>
            <label htmlFor="">topic</label>
            <select value={this.state.topic} onChange={this.handleTopicChange}>
                <option value="react">react</option>
                <option value="vue">vue</option>
                <option value="typescript">typeScript</option>
            </select>
        </div>
        <button type='submit'>Submit</button>
       </form>

      </div>
    )
  }
}

export default Form
