import {} from './actions';

const initialState = {
    guesses: [],
    feedback: 'Make your guess!',
    auralStatus: '',
    correctAnswer: Math.round(Math.random() * 100) + 1
};

export const reducer = (state=initialState, action) => {

};