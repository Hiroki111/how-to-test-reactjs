import React from 'react';
import { mount } from 'enzyme';
import CommentBox from '../CommentBox';
import ReduxProvider from '../../ReduxProvider';

let wrapped;

beforeEach(() => {
	wrapped = mount(
		<ReduxProvider>
			<CommentBox />
		</ReduxProvider>
	);
});

afterEach(() => {
	wrapped.unmount();
});

it('has a text are and 2 buttons', () => {
	wrapped = mount(
		<ReduxProvider>
			<CommentBox />
		</ReduxProvider>
	);

	expect(wrapped.find('textarea').length).toEqual(1);
	expect(wrapped.find('button').length).toEqual(2);
});

describe('the textarea', () => {
	beforeEach(() => {
		wrapped.find('textarea').simulate('change', {
			target: { value: 'submit this string' }
		});
		wrapped.update();
	});

	it('has a text are that users can type in', () => {
		expect(wrapped.find('textarea').prop('value')).toEqual('submit this string');
	});

	it('empties the textarea when the form is submitted', () => {
		wrapped.find('form').simulate('submit');
		wrapped.update();
		expect(wrapped.find('textarea').prop('value')).toEqual("");
	});
});