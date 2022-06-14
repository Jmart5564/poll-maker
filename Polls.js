//Games.js
import PastPolls from './PastPolls.js';

export default function createPolls(root) {
    // reference DOM
    const container = root.querySelector('.poll-container');

    // event listeners

    // should return its component render function
    // return ({ games }) => {
    return (props) => {
        const polls = props.polls;

        container.innerHTML = '';

        for (const poll of polls) {
            const pastPolls = PastPolls({ poll });
            container.append(pastPolls);
        }
    };
}