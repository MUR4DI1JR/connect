import React from 'react';

import './comment.css';
import {useDispatch, useSelector} from "react-redux";
import {changeComment, changeEmail, changeName, addComment, clickItemId, clickItem} from "../../../redux/sliceReducer";
import avatar from '../../../Images/avatar.jpg';

const Comment = (props) => {
    const name = useSelector(state => state.slice.name);
    const email = useSelector(state => state.slice.email);
    const commentText = useSelector(state => state.slice.commentText);
    const dispatch = useDispatch();


    const addComments = (e) =>{
        e.preventDefault();
        let postedComment = new Date();
        let dd = String(postedComment.getDate()).padStart(2, '0');
        let mm = String(postedComment.getMonth() + 1).padStart(2, '0');
        let yyyy = postedComment.getFullYear();

        postedComment = yyyy + '-' + mm + '-' + dd;

        const commentInfo = {
            id: parseInt(props.id) + 1,
            avatar: avatar,
            name: name,
            email: email,
            commentText: commentText,
            postedComment: postedComment
        };

        dispatch(clickItem(props.item));
        dispatch(clickItemId(props.id - 1));
        dispatch(addComment(commentInfo));
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
            <button onClick={addComments}>Отправить</button>
        </div>
    );
};

export default Comment;