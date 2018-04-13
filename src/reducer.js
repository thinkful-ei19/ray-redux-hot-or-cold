import {RESTART_GAME, MAKE_GUESS, GENERATE_AURAL_UPDATE} from './actions';

const initialState = {
    guesses: [],
    feedback: 'Make your guess!',
    auralStatus: '',
    correctAnswer: Math.round(Math.random() * 100) + 1
};

export const reducer = (state=initialState, action) => {
    if(action.type === MAKE_GUESS) {
        let feedback, guess;
        guess = Number(guess);

        if(guess === 'NaN') {
            throw new Error('Must enter a valid number');
        }

        const difference = Math.abs(guess - this.state.correctAnswer);

        if (difference >= 50) {
          feedback = 'You\'re Ice Cold...';
        } else if (difference >= 30) {
          feedback = 'You\'re Cold...';
        } else if (difference >= 10) {
          feedback = 'You\'re Warm.';
        } else if (difference >= 1) {
          feedback = 'You\'re Hot!';
        } else {
          feedback = 'You got it!';
        }

        return Object.assign({}, state, {
            guesses: [...state.guesses, guess],
            feedback
        });
    }

    if(action.type === RESTART_GAME) {
        return Object.assign({}, state, {
            guesses: [],
            feedback: 'Make your guess!',
            auralStatus: '',
            correctAnswer: Math.floor(Math.random() * 100) + 1
        });
    }

    if(action.type === GENERATE_AURAL_UPDATE) {
        const guesses = state.guesses;
        const feedback = state.feedback;

        // If there's not exactly 1 guess, we want to
        // pluralize the nouns in this aural update.
        const pluralize = guesses.length !== 1;

        let  auralStatus = `Here's the status of the game right now: ${feedback} You've made ${guesses.length} ${pluralize ? 'guesses' : 'guess'}.`;

        if (guesses.length > 0) {
            auralStatus += ` ${pluralize ? 'In order of most- to least-recent, they are' : 'It was'}: ${guesses.reverse().join(', ')}`;
        }

        return Object.assign({}, state, {auralStatus})
    }
    return state;
};