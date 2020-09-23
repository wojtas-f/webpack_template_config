import { helloWorld } from '../src/main/js/world'

describe('#helloWorld', () => {
	test('is it working?', () => {
		expect(helloWorld()).toBe(6)
	})
})
