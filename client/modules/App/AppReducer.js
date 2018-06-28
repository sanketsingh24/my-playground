// Import Actions
import { TOGGLE_ADD_POST,TOGGLE_ADD_POLL } from './AppActions';

// Initial State
const initialState = {
  showAddPost: false,
  showAddPoll: false
};

const AppReducer = (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_ADD_POST:
      return {
        showAddPost: !state.showAddPost,
      };
    case TOGGLE_ADD_POLL:
      return {
        showAddPoll: !state.showAddPoll,
      };

    default:
      return state;
  }
};

/* Selectors */

// Get showAddPost
export const getShowAddPost = state => state.app.showAddPost;

export const getShowAddPoll = state => state.app.showAddPoll;


// Export Reducer
export default AppReducer;
