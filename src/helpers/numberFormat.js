export default (number) => new Intl.NumberFormat('en-US', { maximumSignificantDigits: 3 }).format(number);
