const { ForceType } = require('./forceTypeModule.js');

class safeJSON {
	static parse (input){
		try { return JSON.parse(input); }
		catch (E) { return {}; };
	}
}

function tryObject (input) {
	return ForceType.Object(safeJSON.parse(input));
}

function tryArray($) {
	return ForceType.Array(
		safeJSON.parse($)
	);
}

function objFrom(obj, keys) {
	const res = {};

	for (const key of keys)
		if (Array.isArray(key) && obj.hasOwnProperty(key[0]))
			res[key[0]] = resolveTyped(obj[key[0]], key[1]);

		else if (obj.hasOwnProperty(key))
			res[key] = obj[key];

	return res;
}

Object.assign(exports, {
	safeJSON,
	tryObject,
	tryArray,
	objFrom
});