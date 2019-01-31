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

let NewsItems = ({ article0,article1,article2, }) =>
  article0 ? (
    <section>
    <article style={articleStyle}>
      <div>
        <h4>{article0.title}</h4>
        <img className='cnn' src={article0.urlToImage} alt="" />
        <p className='cnn'>{article0.description}</p>
        <p>article by <strong>{article0.author}</strong></p>
        <a href={article0.url} className='cnn' target="_blank" rel="noopener noreferrer">
          READ MORE
        </a>
        <hr />
      </div>
    </article>

<article style={articleStyle}>
<div>
  <h4>{article1.title}</h4>
  <img className='cnn' src={article1.urlToImage} alt="" />
  <p className='cnn'>{article1.description}</p>
  <a href={article1.url} className='cnn' target="_blank" rel="noopener noreferrer">
    READ MORE
  </a>
  <hr />
</div>
</article>

<article style={articleStyle}>
<div>
  <h4>{article2.title}</h4>
  <img className='cnn' src={article2.urlToImage} alt="" />
  <p className='cnn'>{article2.description}</p>
  <a href={article2.url} className='cnn' target="_blank" rel="noopener noreferrer">
    READ MORE
  </a>
  <hr />
</div>
</article>
</section>

  ) : null;

const mapStateToProps = state => ({
  //LHS as set in the root reducer file
  articles: state.newsReducer.news,
  article0: state.newsReducer.news0,
  article1: state.newsReducer.news1,
  article2: state.newsReducer.news2,
  // user: state.profileReducer.user
});

NewsItems = connect(
  mapStateToProps,
  null
)(NewsItems);

export default NewsItems;

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
