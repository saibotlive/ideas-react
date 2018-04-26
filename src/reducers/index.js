import actionType from '../constants/action-types';

const initialState = {
    sortBy:'',
    ideas: [
        {
            id: '0',
            created_date: '2017/06/29',
            title: 'First',
            body: 'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in.'
        },
        {
            id: '1',
            created_date: '2017/06/30',
            title: 'Second',
            body: 'This is Second'
        }
    ]
};


export const ideasReducer = (state = initialState, action) => {
    switch(action.type) {
        case actionType.ADD_NEW_IDEA:
            return {
                ...state,
                ideas: [...state.ideas, {id: Date.now(), created_date:new Date().toString(), title:'', body: '' }]
            };
        case actionType.UPDATE_IDEA:
            return {
                ...state,
                ideas: state.ideas.map(idea => {
                    return idea.id === action.obj.id ? {...idea, ...action.obj} : idea;
                })
            };

        case actionType.DELETE_IDEA:
            return {
                ...state,
                ideas: state.ideas.filter(idea => idea.id !== action.id)
            };
        case actionType.SORT_IDEAS:
            return {
                ...state,
                sortBy: action.sortType
            };
        default:
            return state;
    }
};