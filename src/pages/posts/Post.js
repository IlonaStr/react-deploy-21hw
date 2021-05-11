import React from "react";
import Arrow from './pics/down_chevron.png';
import Approval from './pics/approval.png';
import Bubble from './pics/bubble.png';
import Heart from './pics/heart.png';
import Retweet from './pics/retweet.png';
import Upload from './pics/upload.png';  

const Post = (props) => {
  console.log(props);
  return (
    <div className="page">
      <div className="user">
        <div className="user-photo">
          <img src={props.author.photo} alt="user-photo" />
        </div>
        <div className="user-info">
          <div className="user-name">{props.author.name}</div>
          <div className="user-pic">
            <img src={Approval} alt="user"/>
          </div>
          <div className="user-nick">{props.author.nickname}</div>
          <div className="date">{props.date}</div>
          <div className="info-below">
            <img src={Arrow} alt="info" />
          </div>
        </div>
      </div>
      <div>
        <div className="main-content">{props.content}</div>
        <div className="main-image">
          <img src={props.image} />
        </div>
      </div>
      <div className="public">
        <div className="public-comment">
          <img src={Bubble} alt="bubble"/> {props.comment}
        </div>
        <div className="public-retweet">
          <img src={Retweet} alt="retweet" /> {props.retweet}
        </div>
        <div className="public-like">
          <img src={Heart} alt="heart" /> {props.like}
        </div>
        <div className="public-share">
          <img src={Upload} alt="share" />
        </div>
      </div>
    </div>
  );
};

export default Post;
