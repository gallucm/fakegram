import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getPostComments } from '../../../../../../actions/posts';
import { Loading } from '../../../../loading/Loading';
import { PostContentCommentary } from './comment/PostContentCommentary';
import classes from './PostContentComments.module.css';

export const PostContentComments = ({pid}) => {

    const [loaded, setLoaded] = useState(false);

    const dispatch = useDispatch();

    const { comments } = useSelector(state => state.post);

    useEffect(() => {
        dispatch(getPostComments(pid, setLoaded));
    }, [dispatch, pid]);

    if (!loaded) 
        return <Loading size="bigger"/>

    return (
        <div className={classes.container}>
            {
                comments.map((comment, idx) => (
                    <PostContentCommentary key={idx} commentary={comment} />
                ))
            }
        </div>
    )
}
