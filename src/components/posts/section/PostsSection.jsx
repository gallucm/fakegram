import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';

import { usePosts } from '../../../hooks/usePosts';
import { Loading } from '../../ui/loading/Loading';
import { Post } from '../main/Post';

import classes from './PostsSection.module.css'

export const PostsSection = ({ uid }) => {

    const [loaded, setLoaded] = useState(false);
    
    const { getPosts } = usePosts();

    const { loading } = useSelector(state => state.ui);
    const { posts } = useSelector(state => state.profile);

    useEffect(() => {
        if (!loaded) {
            getPosts(uid);
            setLoaded(true);
        }
    }, [getPosts, uid, loaded]);

    if (loading || !posts)
        return <Loading size='large' />

    return (
        <>
            <div className={classes.container}>
                {
                    posts.map(post => (
                        <Post post={post} key={post.pid}/>
                    ))
                }
            </div>
        </>
    )
}
