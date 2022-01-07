import { useState } from 'react';


import classes from './Post.module.css';
import { Loading } from '../../ui/loading/Loading';
import { ModalPost } from '../../modals/post/ModalPost';
import { useSelector } from 'react-redux';
import { usePosts } from '../../../hooks/usePosts';

export const Post = ({ post }) => {

    const { setSelectedPost } = usePosts();

    const { postSelected } = useSelector(state => state.profile);

    const [imageLoaded, setImageLoaded] = useState(false);
    const [openModal, setOpenModal] = useState(false);

    const handleLoadImage = () => setImageLoaded(true);

    const handleOpenModal = () => {
        setSelectedPost(post);
        setOpenModal(true);
    }
    
    const handleCloseModal = () => setOpenModal(false);

    return (
        <>
            {
                postSelected &&
                <ModalPost open={openModal} onCloseModal={handleCloseModal} post={postSelected}/>
            }

            <div key={post} className={classes.post}>
                <img src={post.image} alt='post' onLoad={handleLoadImage} style={imageLoaded ? { display: 'inherit' } : { display: 'none' }} onClick={handleOpenModal}/>
                {
                    !imageLoaded &&
                    <Loading />
                }
            </div>
        </>
    )
}
