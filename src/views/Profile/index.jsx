import React, {Component} from 'react';
import { connect } from "react-redux";
import Nav from '../../containers/Nav';
import Button from '../../containers/ButtonProfile';
import ProfileItem from '../../containers/ProfileItem';
import LoadingProfile from '../../containers/LoadingProfile';
import NewsItems from '../../containers/NewsItems';
import LoadingNews from '../../containers/LoadingNews';
import { username } from '../../services/profile.service';
import {
  firstname,
  lastname,
  birthday,
  bio,
  followers,
  image,
} from '../../services/profile.service';
import ProfileForm from '../../containers/ProfileForm';
import { getProfile } from '../../actions/profileActions';
import { getNews } from "../../actions/newsActions";

class App extends Component {
  componentWillMount() {
    this.props.getProfile();
    this.props.getNews();
  }
  render() { 
    return ( 
  <div>
    <div className='container'>
      <div className='row'>
        <div className='col-sm-12'>

        <Button />
          <hr />
          <h4 className='theme'>Journalist Profile</h4>
          <LoadingProfile />
          <ProfileItem /><hr />
        </div>

        <div className='col-sm-6'>
        </div>
        <div className='col-sm-6'>
          
          <ProfileForm
            firstname={firstname}
            lastname={lastname}
            birthday={birthday}
            bio={bio}
            followers={followers}
            image={image}
          />
        </div>
      </div>
      {/* <div className='row'>
        <div className='col-sm-12'>
          <hr />
          <h4 className='theme'>Breaking News</h4>

          <LoadingNews />
          <NewsItems />
        </div>
      </div> */}
    </div>
  </div>
);
  }
}

export default connect(
  null,
  { getProfile, getNews }
)(App);

 

