import React from "react";
import { connect } from "react-redux";

// const imgStyle = {
//   height: "auto",
//   width: "80%",
//   border: "4px solid RebeccaPurple ",
//   borderRadius: "5%"
// };

const articleStyle = {
  width: "50%",
  margin: "0 auto",
  color: "black"
};

let NewsItem = ({ article }) =>
  article ? (
    <article style={articleStyle}>
      <div>
        <h4>{article.title}</h4>
        <img className='cnn' src={article.urlToImage} alt="" />
        <p className='cnn'>{article.description}</p>
        <a href={article.url} className='cnn' target="_blank" rel="noopener noreferrer">
          READ MORE
        </a>
        <hr />
      </div>
    </article>
  ) : null;

const mapStateToProps = state => ({
  //LHS as set in the root reducer file
  article: state.newsReducer.news,
  // user: state.profileReducer.user
});

NewsItem = connect(
  mapStateToProps,
  null
)(NewsItem);

export default NewsItem;

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
