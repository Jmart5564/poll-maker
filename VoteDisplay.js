
export default function createVoteDisplay(root, dispatch) {
    const handleVote = dispatch.handleVote;
    const handleUnvote = dispatch.handleUnvote;
    const handleEndPoll = dispatch.handleEndPoll;

    const [answerOneDisplay, answerTwoDisplay] = root.querySelectorAll('span');
    const [voteA, unvoteA, voteB, unvoteB, endPoll] = root.querySelectorAll('button');

    voteA.addEventListener