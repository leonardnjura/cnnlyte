import React from "react";
import { connect } from "react-redux";
import { getProfile } from "../actions/profileActions";

let Button = ({ getProfile }) => (
  <div>
  <button onClick={getProfile} className='button-theme'><i className="mdi mdi-reload mdi-24px"></i> Refresh Profile</button></div>
  );

const mapDispatchToProps = {
  getProfile: getProfile
};
Button = connect(
  null,
  mapDispatchToProps
)(Button);

export default Button;
