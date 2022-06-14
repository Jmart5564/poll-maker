//Scorekeeper.js
export default function createVoteDisplay(root, dispatch) {
    const handleVote = dispatch.handleVote;
    const handleUnvote = dispatch.handleUnvote;
    const handleEndPoll = dispatch.handleEndPoll;

    const [answerOneDisplay, answerTwoDisplay] = root.querySelectorAll('span');
    const [voteA, unvoteA, voteB, unvoteB, endPoll] = root.querySelectorAll('button');

    voteA.addEventListener('click', () => {
        handleVote('one');
    });

    unvoteA.addEventListener('click', () => {
        handleUnvote('one');
    });

    voteB.addEventListener('click', () => {
        handleVote('two');
    });

    unvoteB.addEventListener('click', () => {
        handleUnvote('two');
    });

    endPoll.addEventListener('click', () => {
        handleEndPoll();
    });

    return (props) => {
        const poll = props.poll;
        if (!poll) {
            root.classList.add('hidden');
            return;
        }

        root.classList.remove('hidden');

        answerOneDisplay.textContent = poll.answerone.name;
        answerTwoDisplay.textContent = poll.answertwo.name;
    };
}