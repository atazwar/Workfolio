import React from 'react';
import './Sidebar.css';
import ProfilePicture from './ProfilePicture'
import ProfilePicturePopUp from './ProfilePicturePopUp'

class SideBar extends React.Component {
  

  state ={
    popUpWindow : false,
    imageSource : './pro4.jpg'
  }

  togglePop = () => {
    this.setState(
      {popUpWindow: true}
      )
};
toggleClose = ()=> {
  this.setState(
    {popUpWindow: false}
    )
};



  render(){
    return (
      <div>
        
        <div className="sidenav">
            {console.log(this.state.imageSource)}
            < ProfilePicture popUpWindow= {this.togglePop}/>
            {console.log(this.state.popUpWindow)}
        </div>
        
        
      {this.state.popUpWindow ? <ProfilePicturePopUp toggleClose = {this.toggleClose}/>:null}

      </div>
);
}
}

export default SideBar;
