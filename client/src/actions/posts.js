import * as api from '../api';

const getPosts = () => async (dispatch) => {
    try {
        const {data} = await api.fetchPosts();
        dispatch({type:'FETCH_ALL',payload:data});
    } catch(err){
        console.log(console.err.message);
    }

    const action = {type: 'FETCH_ALL', payload: []};

    dispatch(action);
}