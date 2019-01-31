import React from 'react';
import { connect } from 'react-redux';

function buffer(item, val = null) {
  localStorage.setItem(item, val);
}

let ProfileItem = ({ item, user }) =>
  item ? (
    <section>
      <div className='container'>
        <div className='row'>
          <div className='col-sm-12'>
            <div>
              <div>
                <img className='icon-user' src={item.image} alt='' />
                {buffer('image', item.image)}
                <h5 className='theme'>@{user.username}</h5>
                <strong>
                  <i className='mdi mdi-email-variant' />
                </strong>{' '}
                {user.email}
                <br />
                <strong>Firstname: </strong>
                <i>{item.firstname}</i>
                {buffer('firstname', item.firstname)}
                <br />
                <strong>Lastname: </strong>
                <i>{item.lastname}</i>
                {buffer('lastname', item.lastname)}
                <br />
                <strong>Birthday: </strong>
                <i>{item.birthday}</i>
                {buffer('birthday', item.birthday)}
                <br />
                <strong>Bio:</strong>
                <i>{item.bio}</i>
                {buffer('bio', item.bio)}
                <br />
                <strong>Followers: </strong>
                <i>{item.followers}</i>
                {buffer('followers', item.followers)}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  ) : null;

const mapStateToProps = state => ({
  //LHS as set in the root reducer file
  // article: state.newsReducer.news,
  user: state.profileReducer.user,
  item: state.profileReducer.item,
});

ProfileItem = connect(
  mapStateToProps,
  null,
)(ProfileItem);

export default ProfileItem;

// const mapStateToProps = state => ({
//   //LHS as set in the root reducer file
//   profile: state.profileReducer.item,
//   user: state.profileReducer.user
// });

// // export default Profile;
// export default connect(
//   mapStateToProps,
//   { fetchUserProfile }
// )(Profile);
