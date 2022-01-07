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
    }, [getPosts, uid, loaded, loading]);

    if (loading) {
        return <Loading size='large' />
    }

    return (
        <>
            <div className={classes.container}>
                {
                    posts.map((post, idx) => (
                        <Post post={post} key={idx}/>
                    ))
                }
            </div>
        </>
    )
}
