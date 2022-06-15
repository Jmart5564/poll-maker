//Scoreboard
import PastPolls from './PastPolls.js';

export default function createVoteboard(root) {
    // reference DOM

    // event listeners

    // should return its component render function
    // return ({ game }) => {
    return (props) => {
        const poll = props.poll;
        if (!poll) {
            root.classList.add('hidden');
            return;
        }

        root.classList.remove('hidden');
        root.innerHTML = '';
        const pastPolls = PastPolls({ poll });
        root.append(pastPolls);
    };
}