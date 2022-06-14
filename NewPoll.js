export default function createNewPoll(root, handlers) {
    const handleNewPoll = handlers.handleNewPoll;

    const form = root.querySelector('form');

    form.addEventListener('submit', (e) => {
        e.preventDefault();

        const formData = new FormData(form);
        handleNewPoll(formData.get('question'), formData.get('answer-one-input'), formData.get('answer-two-input'));

        form.reset();
    });

    return (props) => {
        const poll = props.poll;

        if (poll) {
            root.classList.add('hidden');
            return;
        }

        root.classList.remove('hidden');
    };

}