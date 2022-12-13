import React from "react";
import imag from "../../imges/TheBigMan.png";
import delt from "../../imges/icon-delete.svg";
import edd from "../../imges/icon-edit.svg";
import reply from "../../imges/icon-reply.svg";
import plus from "../../imges/icon-plus.svg";
import minus from "../../imges/icon-minus.svg";
import "./Comments.css";

function Comments({ username, createdAt, content, imagess }) {
  return (
    <div className="comments-wrp">
      <div className="comment-wrp">
        <div className="comment container">
          <div className="c-score">
            <img src={plus} alt="plus" className="score-control score-plus" />
            <p className="score-number">5</p>
            <img
              src={minus}
              alt="minus"
              className="score-control score-minus"
            />
          </div>
          <div className="c-controls">
            <a className="delete">
              <img src={delt} alt="" className="control-icon" />
              Delete
            </a>
            <a className="edit">
              <img src={edd} alt="" className="control-icon" />
              Edit
            </a>
            <a className="reply">
              <img src={reply} alt="" className="control-icon" />
              Reply
            </a>
          </div>
          <div className="c-user">
            <img src={imagess} alt="" className="usr-img" />
            <p className="usr-name">{username}</p>
            <p className="cmnt-at">{createdAt}</p>
          </div>
          <p className="c-text">
            <span className="reply-to"></span>
            <span className="c-body">{content}</span>
          </p>
        </div>
        <div className="replies comments-wrp"></div>
      </div>
    </div>
  );
}

export default Comments;
