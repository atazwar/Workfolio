import React from 'react';
import ProfilePicture from './ProfilePicture'
import ProfilePicturePopUp from './ProfilePicturePopUp'
import QuickAccess from './QuickAccess';

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
          <div className="main1">
              < ProfilePicture popUpWindow= {this.togglePop}/>
              <div>&nbsp;</div>
              <QuickAccess />
              {this.state.popUpWindow ? <ProfilePicturePopUp toggleClose = {this.toggleClose}/>:null}
          </div>

        );
    }
}

export default SideBar;
