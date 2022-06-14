export default function PastPolls(props) {
    const game = props.game;

    const div = document.createElement('div');
    div.classList.add('score-box');

    const span1 = document.createElement('span');
    span1.classList.value = 'team a';
    span1.textContent = game.teamA.name;

    const span2 = document.createElement('span');
    span2.classList.value = 'score a';
    span2.textContent = game.teamA.score;

    const span3 = document.createElement('span');
    span3.classList.value = 'team b';
    span3.textContent = game.teamB.name;

    const span4 = document.createElement('span');
    span4.classList.value = 'score b';
    span4.textContent = game.teamB.score;

    div.append(span1, span2, span3, span4);

    return div;
}
