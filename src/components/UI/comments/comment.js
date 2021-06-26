import React from 'react';

import './comment.css';
import {useDispatch, useSelector} from "react-redux";
import {changeComment, changeEmail, changeName} from "../../../redux/sliceReducer";
import avatar from '../../../Images/avatar.jpg';

const Comment = (props) => {
    const invests = useSelector(state => state.slice.invests)
    const name = useSelector(state => state.slice.name);
    const email = useSelector(state => state.slice.email);
    const commentText = useSelector(state => state.slice.commentText);
    const postedComment = useSelector(state => state.slice.postedComment);
    const dispatch = useDispatch();


    const addComment = (e) =>{
      e.preventDefault();
      let postedComment = new Date();
      let dd = String(postedComment.getDate()).padStart(2, '0');
      let mm = String(postedComment.getMonth() + 1).padStart(2, '0');
      let yyyy = postedComment.getFullYear();

      postedComment = mm + '/' + dd + '/' + yyyy;


      const comment = {
          avatar: avatar,
          name: name,
          email: email,
          commentText: commentText,
      };

        console.log(invests);

        // invests[0].comments.push({name: 'Muradil', email: 'mu@gmail.com', commentText: 'This is cool!', postedComment: '2021-06-26'});
    };

    return (
        <div className='comment'>
            <div className="comments">
                <h1>Комментарии <span>{props.comments.length}</span></h1>
                <div className="commentShow">
                    {
                        props.comments ?
                            props.comments.map((comment, i) => {
                                return (
                                    <div className='commentUser' key={i}>
                                        <div className="commentInfo">
                                            <img src={comment.avatar} alt="avatar"/>
                                            <h1>{comment.name}</h1>
                                            <p>{comment.postedComment}</p>
                                        </div>
                                        <p>{comment.commentText}</p>
                                    </div>
                                )
                            })
                            :
                            null
                    }
                </div>
            </div>
            <div className="textComment">
                <h1>Оставить комментарий</h1>
                <textarea name="comment" id="comment" cols="30" rows="10" value={commentText} onChange={(e)=> dispatch(changeComment(e.target.value))}/>
            </div>
            <div className="authorComment">
                <p>Имя<span>*</span></p>
                <input type="text" value={name} onChange={(e)=> dispatch(changeName(e.target.value))}/>
                <p>Электронная почта<span>*</span></p>
                <input type="text" value={email} onChange={(e)=> dispatch(changeEmail(e.target.value))}/>
            </div>
            <button onClick={addComment}>Отправить</button>
        </div>
    );
};

export default Comment;