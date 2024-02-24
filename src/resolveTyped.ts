import { ForceType } from './forceTypeModule';

export function resolveTyped(input: any, type: any) {
	switch (type) {
		case null:
		case 'null': return ForceType.Null();

		case Boolean:
		case 'boolean': return ForceType.Boolean(input);

		case Number:
		case 'number': return ForceType.Number(input);

		case String:
		case 'string': return ForceType.String(input);

		case Object:
		case 'object': return ForceType.Object(input);

		case Array:
		case 'array': return ForceType.Array(input);

		default: return input;
	}
}
