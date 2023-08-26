const { ForceType } = require('./forceTypeModule.js');

function objFrom(obj, keys) {
	const res = {};

	for (const key of keys)
		if (Array.isArray(key) && obj.hasOwnProperty(key[0]))
			res[key[0]] = resolveTyped(obj[key[0]], key[1]);

		else if (obj.hasOwnProperty(key))
			res[key] = obj[key];

	return res;
}
exports.objFrom = objFrom;


class safeJSON {
	static parse (input){
		try { return JSON.parse(input); }
		catch (E) { return {}; };
	}
}
exports.safeJSON = safeJSON;


function tryObject (input) {
	return ForceType.Object(safeJSON.parse(input));
}
exports.tryArray = tryArray;

function tryNumber ($){
  if (typeof $ == 'number') return $;

  if (typeof $ == 'string' && isNaN($) != true)
    return Number($);

  return 0;
}
exports.tryNumber = tryNumber;

function tryArray($) {
	return ForceType.Array(
		safeJSON.parse($)
	);
}
exports.tryObject = tryObject;