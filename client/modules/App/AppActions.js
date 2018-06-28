// Export Constants
export const TOGGLE_ADD_POST = 'TOGGLE_ADD_POST';
export const TOGGLE_ADD_POLL = 'TOGGLE_ADD_POLL';

// Export Actions
export function toggleAddPost() {
  return {
    type: TOGGLE_ADD_POST,
  };
}

export function toggleAddPoll() {
  return {
    type: TOGGLE_ADD_POLL,
  };
}
