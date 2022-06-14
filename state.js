// set state to an empty object
const state = {};

// initialize state, also used in test
export function initialize() {
    // What is the initial shape of state?
    // For example:
    // state.game = null;
    // state.pastGames = [];
    state.poll = null;
    state.pastPolls = [];
}
// call initialize
initialize();
// export state as primary (default) export
export default state;

// export dispatch functions that modify state
export function newPoll(answer1, answer2) {
    state.poll = {
        answerone: { name: answer1, votes: 0 },
        answertwo: { name: answer2, votes: 0 }
    };
}


export function vote(answer) {
    if (answer === 'one') {
        state.poll.answerone.votes++;
    }
    if (answer === 'two') {
        state.poll.answertwo.votes++;
    }
}

export function unvote(answer) {
    if (answer === 'one') {
        state.poll.answerone.votes--;
    }
    if (answer === 'two') {
        state.poll.answertwo.votes--;
    }
}

export function endPoll() {
    state.pastPolls.push(state.poll);
    state.poll = null;
}