import  { Component } from 'react'

 class User extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         isLoggedIn : false
      }
    }
    
  render() {
    return this.state.isLoggedIn && <div>welcome Nitin</div>
    //return(
        //this.state.isLoggedIn ?
        //<div>Welcome nitin</div> :
       // <div>please login</div>
   //// )


  }
}

export default User
