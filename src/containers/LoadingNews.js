import React from "react";
import { connect } from "react-redux";
import img from '../assets/images/spinner.gif';

let LoadingNews = ({ loading }) =>
  loading ? (
    <div style={{ textAlign: "center" }}>
      <img src={img} alt="loading" />
    </div>
  ) : null;

const mapStateToProps = state => ({ loading: state.newsReducer.loading });

LoadingNews = connect(
  mapStateToProps,
  null
)(LoadingNews);

export default LoadingNews;
