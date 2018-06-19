import { ADD_Poll, ADD_PollS, DELETE_Poll } from './PollsActions';

// Initial State
const initialState = { data: [] };

const PollReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_Poll :
      return {
        data: [action.Poll, ...state.data],
      };

    case ADD_PollS :
      return {
        data: action.Polls,
      };

    case DELETE_Poll :
      return {
        data: state.data.filter(Poll => Poll.cuid !== action.cuid),
      };

    default:
      return state;
  }
};

/* Selectors */

// Get all Polls
export const getPolls = state => state.Polls.data;

// Get Poll by cuid
export const getPoll = (state, cuid) => state.Polls.data.filter(Poll => Poll.cuid === cuid)[0];

// Export Reducer
export default PollReducer;
