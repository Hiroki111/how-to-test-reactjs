import commentReducer from '../comments';
import { SAVE_COMMENT } from '../../actions/types';

it('hanldes actions of type SAVE_COMMENT', () => {
	const action = {
		type: SAVE_COMMENT,
		payload: 'Test comment'
	};

	const newState = commentReducer([], action);

	expect(newState).toEqual(['Test comment']);
});

it('hanldes actions with unknown type', () => {
	const newState = commentReducer([], { type: "BLAH_BLAH" });

	expect(newState).toEqual([]);
});