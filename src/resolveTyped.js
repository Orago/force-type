const { ForceType } = require('./forceTypeModule.js');

function resolveTyped(input, type) {
	switch (type) {
		case null:
		case 'null': return ForceType.Null(input);

		case Boolean:
		case 'boolean': return ForceType.Boolean(input);

		case Number:
		case 'number': return ForceType.Number(input);

		case 'bigint': return ForceType.BigInt(input);

		case String:
		case 'string': return ForceType.String(input);

		case Object:
		case 'object': return ForceType.Object(input);

		case Array:
		case 'array': return ForceType.Array(input);

		default: return input;
	}
}

module.exports = resolveTyped;