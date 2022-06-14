// import utilities
import createNewPoll from './NewPoll.js';
import createPolls from './Polls.js';
import createVoteDisplay from './VoteDisplay.js';
import createVoteboard from './VoteBoard.js';

import state, { newPoll, vote, unvote, endPoll } from './state.js';

// import component creators

// import state and dispatch functions
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

// Create each component: 
// - pass in the root element via querySelector
// - pass any needed handler functions as properties of an actions object 
const NewPoll = createNewPoll(document.querySelector('#new-poll'), {
    handleNewPoll: (question, answerone, answertwo) => {
        newPoll(question, answerone, answertwo);
        display();
    }
});

const Polls = createPolls(document.querySelector('#past-polls'));

// Roll-up display function that renders (calls with state) each component
function display() {
    NewPoll({ poll: state.poll });
    Polls ({ polls: state.pastPolls });
    VoteDisplay({ poll: state.poll });
    Voteboard({ poll: state.poll });

    // Call each component passing in props that are the pieces of state this component needs
}

// Call display on page load
display();
