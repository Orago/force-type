class ForceType {
  static Null () {
    return null;
  }

  static Boolean ($, defaults) {
    return typeof $ === 'boolean' ? $ : (defaults === true);
  }

  static Number ($) {
		return isNaN($) ? 0 : Number($);
  }

  static BigInt ($) {
		if (typeof $ === 'bigint') return $;

		try   { return BigInt($); }
		catch { return 0n;        }
  }

  static String ($, defaults = '') {
		if (typeof $ === 'string') return $;
		if (typeof $ === 'number') return $ + '';
		
    return defaults + '';
  }

  static Object ($) {
		if ($ instanceof Object)
			if (Array.isArray($)) return [];
			else return $;

		return new Object;
  }

  static Array ($) {
    return Array.isArray($) ? $ : [];
  }
}

exports.ForceType = ForceType;