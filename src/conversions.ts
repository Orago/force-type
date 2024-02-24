import { ForceType } from './forceTypeModule';
import { resolveTyped } from './resolveTyped';

export function objFrom(obj: {[property: string]: any}, keys: Array<string>) {
	const res: {[property: string]: any} = {};

	for (const key of keys){
		if (Array.isArray(key) && obj.hasOwnProperty(key[0])){
			res[key[0]] = resolveTyped(obj[key[0]], key[1]);
		}

		else if (obj.hasOwnProperty(key)){
			res[key] = obj[key];
		}
	}

	return res;
}


export class safeJSON {
	static parse (input: string): object{
		try { return JSON.parse(input); }
		catch (E) { return {}; };
	}
}

export function tryObject (input: any): object {
	return ForceType.Object(safeJSON.parse(input));
}

export function tryNumber ($: any): number{
  if (typeof $ == 'number'){
		return $;
	} else if (typeof $ == 'string' && isNaN(Number($)) != true){
		return Number($);
	} else {
		return 0;
	}
}

export function tryArray($: string): Array<any> {
	return ForceType.Array(
		safeJSON.parse($)
	);
}