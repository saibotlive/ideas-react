/**
 * Created by saibot on 30/06/2017.
 */

import { createSelector } from 'reselect'

const getIdeas = ({ideasReducer}) => ideasReducer.ideas;
export const getSortBy = ({ideasReducer}) => ideasReducer.sortBy;

export const getIdeasState = createSelector(
    [getIdeas, getSortBy],
    (ideas, sortBy) => {
        switch(sortBy) {
            case 'created_date':
                return [...ideas].sort((a,b) =>  new Date(b.created_date).getTime() - new Date(a.created_date).getTime());
            case 'title':
                return [...ideas].sort((a,b) => a.title.toLowerCase() > b.title.toLowerCase());
            default:
                return ideas
        }
    }
);