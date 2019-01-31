import React, { Component } from "react";
// import PropTypes from "prop-types";
import { connect } from "react-redux";
import { updateProfile } from "../actions/profileActions";
import { getProfile } from "../actions/profileActions";
import { getNews } from "../actions/newsActions";
import { Alert } from "reactstrap";

class ProfileForm extends Component {
  componentWillMount() {
    // this.props.getProfile();
    // this.props.getNews();
  }
  constructor(props) {
    super(props);
    this.state = {
      firstname: props.firstname || "",
      lastname: props.lastname || "",
      birthday: props.birthday || "",
      image: props.image || "",
      bio: props.bio || "",
      modalVisible: false,
      alertVisible: false
    };
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  onSubmit(e) {
    e.preventDefault();

    const data = {
      firstname: this.state.firstname,
      lastname: this.state.lastname,
      birthday: this.state.birthday,
      image: this.state.image,
      bio: this.state.bio
    };
    console.log(data)
    this.props.updateProfile(data);
  }

  toggleAlert() {
    this.setState({ alertVisible: !this.state.alertVisible });
  }

  raiseAlert() {
    this.setState({ alertVisible: true });
  }

  render() {
    return (
      <section>
        <div className="row">
          <div className="col-sm-12">
            <h4>
              <i className='mdi mdi-clipboard-account'></i>
              Edit Profile
            </h4>
            <p>
              <strong className='theme'>Please edit your profile and save changes.</strong>
            </p>
            <form onSubmit={this.onSubmit}>
              <div>
                <label>First Name</label>
                <br />
                <input
                  type="text"
                  name="firstname"
                  value={this.state.firstname}
                  onChange={this.onChange}
                />
              </div>
              <div>
                <label>Last Name</label>
                <br />
                <input
                  type="text"
                  name="lastname"
                  value={this.state.lastname}
                  onChange={this.onChange}
                />
              </div>
              <div>
                <label>Birthday</label>
                <br />
                <input
                  type="text"
                  name="birthday"
                  value={this.state.birthday}
                  onChange={this.onChange}
                />
              </div>

              <div>
                <label>Image</label>
                <br />
                <input
                  type="text"
                  name="image"
                  value={this.state.image}
                  onChange={this.onChange}
                />
              </div>

              <div>
                <label>Bio</label>
                <br />
                <textarea
                  name="bio"
                  value={this.state.bio}
                  onChange={this.onChange}
                  rows="4"
                  placeholder="I am.."
                />
              </div>

              <br />
              <Alert
                color="warning"
                isOpen={this.state.alertVisible}
                toggle={this.toggleAlert.bind(this)}
                className="p-5"
              >
                <h4>You successfully updated your profile!</h4>
              </Alert>
              <button
                type="submit"
                onClick={this.raiseAlert.bind(this)}
                className="button-theme pull-right"
              >
                <i className="mdi mdi-floppy mdi-24px" /> Update
              </button>
            </form>
          </div>
        </div>
      </section>
    );
  }
}

///***************************** */
const mapStateToProps = state => ({
  //LHS as set in the root reducer file
  user: state.profileReducer.user,
  item: state.profileReducer.item,
});

export default connect(
  mapStateToProps,
  { updateProfile, getProfile, getNews }
)(ProfileForm);

//***************************** */
// const mapDispatchToProps = {
//   getProfile,
//   updateProfile
// };
// export default connect(
//   null,
//   mapDispatchToProps
// )(ProfileForm);
