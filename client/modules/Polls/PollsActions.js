import callApi from '../../util/apiCaller';

// Export Constants
export const ADD_Poll = 'ADD_Poll';
export const ADD_PollS = 'ADD_PollS';
export const DELETE_Poll = 'DELETE_Poll';

// Export Actions
export function addPoll(Poll) {
  return {
    type: ADD_Poll,
    Poll,
  };
}

export function addPollRequest(Poll) {
  return (dispatch) => {
    return callApi('Polls', 'Poll', {
      Poll: {
        name: Poll.name,
        title: Poll.title,
        content: Poll.content,
      },
    }).then(res => dispatch(addPoll(res.Poll)));
  };
}

export function addPolls(Polls) {
  return {
    type: ADD_PollS,
    Polls,
  };
}

export function fetchPolls() {
  return (dispatch) => {
    return callApi('Polls').then(res => {
      dispatch(addPolls(res.Polls));
    });
  };
}

export function fetchPoll(cuid) {
  return (dispatch) => {
    return callApi(`Polls/${cuid}`).then(res => dispatch(addPoll(res.Poll)));
  };
}

export function deletePoll(cuid) {
  return {
    type: DELETE_Poll,
    cuid,
  };
}

export function deletePollRequest(cuid) {
  return (dispatch) => {
    return callApi(`Polls/${cuid}`, 'delete').then(() => dispatch(deletePoll(cuid)));
  };
}
