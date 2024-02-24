export class ForceType {
  static Null () {
    return null;
  }

  static Boolean ($: any, defaults?: boolean) {
    return typeof $ === 'boolean' ? $ : (defaults === true);
  }

  static Number ($: any): number {
		return isNaN($) ? 0 : Number($);
  }

  static String ($: any, defaults: string = ''): string {
		if (typeof $ === 'string'){
			return $;
		} else if (typeof $ === 'number'){
			return $ + '';
		} else {
			return defaults + '';
		}
  }

  static Object ($: any): object {
		if ($ instanceof Object){
			if (Array.isArray($)){
				return [];
			} else {
				return $;
			}
		}

		return new Object;
  }

  static Array ($: any): Array<any> {
    return Array.isArray($) ? $ : [];
  }
}