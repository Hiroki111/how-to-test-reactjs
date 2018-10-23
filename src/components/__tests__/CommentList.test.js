import React from 'react';
import { mount } from 'enzyme';

import CommentList from '../CommentList';
import ReduxProvider from '../../ReduxProvider';

let wrapped;

beforeEach(() => {
	const initialState = {
		comments: ["comment 1", "comment 2"]
	};

	wrapped = mount(
		<ReduxProvider initialState={initialState}>
			<CommentList />
		</ReduxProvider>
	);
});

it('creates one LI per comment', () => {
	expect(wrapped.find('li').length).toEqual(2);
});

it('shows the text for each comment', () => {
	expect(wrapped.render().text()).toContain('comment 1');
	expect(wrapped.render().text()).toContain('comment 2');
})