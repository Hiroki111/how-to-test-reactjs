//import saveComment from '../index.js';
import { SAVE_COMMENT } from '../types';

const saveComment = (comment) => {
	return {
		type: "SAVE_COMMENT",
		payload: comment
	};
}

describe('saveComment', () => {
	it('has the correct type', () => {
		const action = saveComment();

		expect(action.type).toEqual(SAVE_COMMENT);
	});

	it('as the correct payload', () => {
		const action = saveComment("blah");

		expect(action.payload).toEqual("blah");
	});
})