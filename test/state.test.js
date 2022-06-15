import state, {
    initialize,
    newPoll,
    vote,
    unvote,
    endPoll,
    // import dispatch functions
} from '../state.js';

// make sure state is at known starting point
QUnit.module('state', { beforeEach: initialize });

const test = QUnit.test;

test('the first state test...', (expect) => {
    expect.equal(state.poll, null);

    newPoll('animal', 'cat', 'dog');


    expect.deepEqual(state, {
        pastPolls: [],
        poll: {
            question: 'animal',
            answerone: { name: 'cat', votes: 0 },
            answertwo: { name: 'dog', votes: 0 },
        },
    });
});
