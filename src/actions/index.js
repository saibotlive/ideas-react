import actionType from '../constants/action-types';

export const addNewIdea = () => {
    return {
        type: actionType.ADD_NEW_IDEAxw
    }
};


export const updateIdea = (obj) => {
    return {
        type: actionType.UPDATE_IDEA,
        obj
    }
};

export const deleteIdea = (id) => {
    return {
        type: actionType.DELETE_IDEA,
        id
    }
};

export const sortIdeas = (sortType) => {
    return {
        type: actionType.SORT_IDEAS,
        sortType
    }
};
