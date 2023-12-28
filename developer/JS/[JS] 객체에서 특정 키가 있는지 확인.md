```js
/* 객체에서 특정 키가 있는지 확인하는법(boolean 반환) */
// 1. in
'name' in obj

// 2. hasOwnProperty
obj.hasOwnProperty('name')

// 3. Object.keys + includes
Object.keys(obj).includes('name')
```

