// "ScoreBox"
export default function PastPolls(props) {
    const poll = props.poll;

    const div = document.createElement('div');
    div.classList.add('poll');

    const span1 = document.createElement('span');
    span1.classList.value = 'saved-question';
    span1.textContent = poll.question.name;

    const span2 = document.createElement('span');
    span2.classList.value = 'saved-answerA';
    span2.textContent = poll.answerA.name;

    const span3 = document.createElement('span');
    span3.classList.value = 'saved-votesA';
    span3.textContent = poll.answerA.votes;

    const span4 = document.createElement('span');
    span4.classList.value = 'saved-answerB';
    span4.textContent = poll.answerB.name;

    const span5 = document.createElement('span');
    span5.classList.value = 'saved-votesB';
    span5.textContent = poll.answerB.votes;

    div.append(span1, span2, span3, span4, span5);

    return div;
}
