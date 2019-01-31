import React from "react";
import { connect } from "react-redux";
import img from '../assets/images/spinner.gif';

let LoadingProfile = ({ loading }) =>
  loading ? (
    <div style={{ textAlign: "center" }}>
      <img src={img} alt="loading" />
    </div>
  ) : null;

const mapStateToProps = state => ({ loading: state.profileReducer.loading });

LoadingProfile = connect(
  mapStateToProps,
  null
)(LoadingProfile);

export default LoadingProfile;
