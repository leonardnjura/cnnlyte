import React from "react";
import { connect } from "react-redux";
import { getNews } from "../actions/newsActions";
import { getProfile } from "../actions/profileActions";

let Button = ({ getNews, getProfile }) => (
  <div>
          {/* <div className="jumbotron text-center">
        <h1>Journalists &amp; News</h1>
      </div> */}
  <button onClick={getNews}><i className="mdi mdi-reload mdi-24px"></i> Refresh News</button>{ ' ' }
  <button onClick={getProfile} className='button-theme'><i className="mdi mdi-reload mdi-24px"></i> Refresh Profile</button></div>
  );

const mapDispatchToProps = {
  getNews: getNews,
  getProfile: getProfile
};
Button = connect(
  null,
  mapDispatchToProps
)(Button);

export default Button;
