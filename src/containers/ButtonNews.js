import React from "react";
import { connect } from "react-redux";
import { getNews } from "../actions/newsActions";

let Button = ({ getNews }) => (
  <div>
  <button onClick={getNews}><i className="mdi mdi-reload mdi-24px"></i> Refresh News</button>{ ' ' }
  </div>
  );

const mapDispatchToProps = {
  getNews: getNews
};
Button = connect(
  null,
  mapDispatchToProps
)(Button);

export default Button;
