# dec-int

Returns a base-10 integer from a NumericString or Number. Returns `NaN` if `input` can't be coerced 
to an integer.

```js
decInt('56') // => 56
```

## What is a NumericString?

Anything that would be a number if it didn't have quotes around it. For example, these are all 
numeric strings:

```js
'5' or "5"
'123.456' or "123.456"
'-0' or "-0"
'0xFFFFFF' or "0xFFFFFF"
'020' or "020"
String(5) or new String(5)
```

However, these are examples of what's not a NumericString:

```js
"Infinity"
"Math.PI"
"PI"
"e"
```

```