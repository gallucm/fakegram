import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { usePosts } from '../../../../../hooks/usePosts';
import { Loading } from '../../../../ui/loading/Loading';
import { PostContentCommentary } from './comment/PostContentCommentary';
import classes from './PostContentComments.module.css';

export const PostContentComments = ({pid}) => {
    const dispatch = useDispatch();

    const {commentsLoaded, getPostComments } = usePosts();

    const { postSelected: { comments } } = useSelector(state => state.profile);

    useEffect(() => {
        if (!commentsLoaded) {
            getPostComments(pid);
        }
    }, [dispatch, pid, getPostComments, commentsLoaded]);


    if (!commentsLoaded) 
        return <Loading size="bigger"/>

    return (
        <div className={classes.container} id="comments">
            {
                comments.map((comment, idx) => (
                    <PostContentCommentary key={idx} commentary={comment} />
                ))
            }
        </div>
    )
}
