import { TrimTextPipe } from './trimText.pipe';

describe('TrimText Pipe', () => {
	let trimTextPipe = null;
	beforeEach(()=>{
		trimTextPipe = new TrimTextPipe();
	})
	it('should return the given string if short', () => {
		//Arrange
		let input = 'short string',
			expectedResult = 'short string';

		//Act
		let actualResult = trimTextPipe.transform(input);

		//Assert
		expect(actualResult).toBe(expectedResult);
	});

	it('should return truncated string if long', () => {
		//Arrange
		let input = 'This is a really loong string for testing the trim text pipe to see if it truncates',
			expectedResult = 'This is a really loong string ...';

		//Act
		let actualResult = trimTextPipe.transform(input);

		//Assert
		expect(actualResult).toBe(expectedResult);
	});

	it('should return truncated string if long for the given length', () => {
		//Arrange
		let input = 'This is a really loong string for testing the trim text pipe to see if it truncates',
			expectedResult = 'This is a really loong string for testin...';

		//Act
		let actualResult = trimTextPipe.transform(input, 40);

		//Assert
		expect(actualResult).toBe(expectedResult);
	});
});