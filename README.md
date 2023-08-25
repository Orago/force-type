# @orago/status

### Usage:
```js
import { ForceType } from '@orago/status';

// Null
ForceType.Null(); /* => */ null

// Boolean
ForceType.Boolean(true);    /* => */ true
ForceType.Boolean(false);   /* => */ false
ForceType.Boolean({});      /* => */ false
ForceType.Boolean(0);       /* => */ false
ForceType.Boolean('maybe'); /* => */ false

// Number
ForceType.Number(50); /* => */ 50
ForceType.Number('hello'); /* => */ 0
ForceType.Number({}); /* => */ 0

// BigInt
ForceType.BigInt(50); /* => */ 50n
ForceType.BigInt(''); /* => */ 0n
ForceType.BigInt({}); /* => */ 0n
ForceType.BigInt({}); /* => */ 0n
ForceType.BigInt('9007199254740991');     /* => */ 9007199254740991n
ForceType.BigInt('0x1fffffffffffff');     /* => */ 9007199254740991n
ForceType.BigInt('0o377777777777777777'); /* => */ 9007199254740991n

// String
ForceType.String(50); /* => */ '50'
ForceType.String('hello'); /* => */ 'hello'
ForceType.String({}); /* => */ ''

// Object
ForceType.Object(50); /* => */ {}
ForceType.Object('hello'); /* => */ 'hello'
ForceType.Object({ cat: 'meow' }); /* => */ { cat: 'meow' }
ForceType.Object(new class cat { speak = 'meow' }); /* => */ cat {speak: 'meow'}

// Array
ForceType.Object([1,5,3,2]); /* => */ [1,5,3,2]
ForceType.Object('hello'); /* => */ []
ForceType.Object(['hello', 'world']); /* => */ ['hello','world']
ForceType.Object('This is a test'.split(' ')); /* => */ ['This','is','a','test']

import { tryArray } from '@orago/status';

tryArray('[5, 4, 1]'); /* => */ [5,4,1]
tryArray([6, 3, 6, 2]); /* => */ [6,3,6,2]
tryArray({ hi: 'd' }); /* => */ []
tryArray(''); /* => */ []

import { tryObject } from '@orago/status';

tryObject('[5, 4, 1]'); /* => */ {}
tryObject([6, 3, 6, 2]); /* => */ {}
tryObject({ hi: 'd' }); /* => */ { hi: 'd' }
tryObject(''); /* => */ {}
```