import React from 'react';
import { mount } from 'enzyme';
import moxios from 'moxios';
import ReduxProvider from '../ReduxProvider';
import App from '../components/App';

beforeEach(() => {
	moxios.install();
	moxios.stubRequest('http://jsonplaceholder.typicode.com/comments', {
		status: 200,
		response: [{ name: 'Test #1' }, { name: 'Test #2' }]
	});
});

afterEach(() => {
	moxios.uninstall();
});

it('can fetch a list of comments and display them', (done) => {
	const wrapped = mount(
		<ReduxProvider>
			<App />
		</ReduxProvider>
	);

	wrapped.find('.fetch-comments').simulate('click');

	moxios.wait(() => {
		wrapped.update();

		expect(wrapped.find('li').length).toEqual(2);
		done();

		wrapped.unmount();
	});
});