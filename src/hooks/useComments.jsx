import { useState } from "react";
import { useDispatch } from "react-redux";
import { addComment, getPostComments } from "../actions/posts";

export const useComments = () => {
    const [loaded, setLoaded] = useState(false);

    const dispatch = useDispatch();

    const handleLoadComments = (pid) => {
        dispatch(getPostComments(pid, setLoaded));
    }

    const handleSaveComment = (comment, reset) => {
        dispatch(addComment(comment, reset));
    }

    return {
        loaded,
        handleLoadComments,
        handleSaveComment
    }
}
