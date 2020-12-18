export default (queryString) => {
	let p = queryString.replace('?', '').replace('page=', '');
	p = parseInt(p);

	return p || 1;
};
