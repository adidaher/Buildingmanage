import React from "react";
import imag from "../../image-juliusomo.webp";
import delt from "../../icon-delete.svg";
import edd from "../../icon-edit.svg";
import reply from "../../icon-reply.svg";
import plus from "../../icon-plus.svg";
import minus from "../../icon-minus.svg";
import "./Replymsg.css";
function Replymsg() {
  return (
    <div className="replies comments-wrp">
      <div className="comment container this-user">
        <div className="c-score">
          <img src={plus} alt="plus" className="score-control score-plus" />
          <p className="score-number">2</p>
          <img src={minus} alt="minus" className="score-control score-minus" />
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
          <img src={imag} alt="" className="usr-img" />
          <p className="usr-name">juliusomo</p>
          <p className="cmnt-at">2 days ago</p>
        </div>
        <p className="c-text">
          <span className="reply-to">@ramsesmiron</span>
          <span className="c-body">
            I couldn't agree more with this. Everything moves so fast and it
            always seems like everyone knows the newest library/framework. But
            the fundamentals are what stay constant.
          </span>
        </p>
      </div>
      <div className="replies comments-wrp"></div>
    </div>
  );
}

export default Replymsg;
