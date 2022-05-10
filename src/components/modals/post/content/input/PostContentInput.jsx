import { useRef, useState } from 'react';
import { useSelector } from 'react-redux';
import { usePosts } from '../../../../../hooks/usePosts';
import classes from './PostContentInput.module.css';

export const PostContentInput = ({pid, onMoveScroll}) => {
    const { addComment } = usePosts();
    
    const inputRef = useRef('');

    const [validSubmit, setValidSubmit] = useState(false);
    
    const { data } = useSelector(state => state.auth);

    const handleReset = () => {
        inputRef.current.value = '';
    }

    const handleSubmitComment = async (e) => {
        e.preventDefault();

        const commentObject = {
            user: {
                username: data.username,
                image: data.imageProfile
            },
            comment: inputRef.current.value,
            createdAt: new Date()
        }

        addComment(pid, commentObject, handleReset);

        onMoveScroll();
    }

    const handleValidField = () => {
        setValidSubmit(inputRef.current.value.length);
    }

    return (
        <div className={classes.container}>
            <textarea id="comment" name="value" ref={inputRef} onChange={handleValidField}></textarea>
            <button type="button" onClick={handleSubmitComment} disabled={!validSubmit}>Publicar</button>
        </div>
    )
}
