
import createNewPoll from './NewPoll.js';
import createPolls from './Polls.js';
import createVoteDisplay from './VoteDisplay.js';
import createVoteboard from './VoteBoard.js';

import state, { newPoll, vote, unvote, endPoll } from './state.js';


const Voteboard = createVoteboard(document.querySelector('#poll-votes-display'));

const VoteDisplay = createVoteDisplay(document.querySelector('#active-poll'), {
    handleVote: (answer) => {
        vote(answer);
        display();
    },
    handleUnvote: (answer) => {
        unvote(answer);
        display();
    },
    handleEndPoll: () => {
        endPoll();
        display();
    }
});


const NewPoll = createNewPoll(document.querySelector('#new-poll'), {
    handleNewPoll: (question, answerone, answertwo) => {
        newPoll(question, answerone, answertwo);
        display();
    }
});

const Polls = createPolls(document.querySelector('#past-polls'));

function display() {
    NewPoll({ poll: state.poll });
    Polls ({ polls: state.pastPolls });
    VoteDisplay({ poll: state.poll });
    Voteboard({ poll: state.poll });

}


display();
