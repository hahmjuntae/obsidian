```ts 
interface Person {
  name: string;
  age: number;
}
```

```ts
// 1. Partial<T>
// T의 모든 프로퍼티를 선택적으로 만듭니다.
type Partial<T> = {
  [P in keyof T]?: T[P];
};

const partialPerson: Partial<Person> = { name: "Alice" }; // age 프로퍼티는 선택적입니다.
```

```ts
// 2. Required<T>
// T의 모든 프로퍼티를 필수로 만듭니다.
type Required<T> = {
  [P in keyof T]: T[P];
};

const requiredPerson: Required<Partial<Person>> = { name: "Bob", age: 25 }; // 모든 프로퍼티가 필수입니다.
```

```ts
// 3. Readonly<T>
// T의 모든 프로퍼티를 읽기 전용으로 만듭니다.
type Readonly<T> = {
  readonly [P in keyof T]: T[P];
};

const readonlyPerson: Readonly<Person> = { name: "Charlie", age: 30 };
// readonlyPerson.age = 31; // 에러!
```

```ts
// 4. Pick<T, K>
// T의 프로퍼티 중 K에 할당된 프로퍼티만 가져옵니다.
type Pick<T, K extends keyof T> = {
  [P in K]: T[P];
};

const personName: Pick<Person, "name"> = { name: "David" };
```

```ts
// 5. Record<K, T>
// K의 모든 프로퍼티에 T 타입을 할당합니다.
type Record<K extends keyof any, T> = {
  [P in K]: T;
};
const ages: Record<string, number> = { Alice: 25, Bob: 30 };
```

```ts
// 6. Exclude<T, U>
// T에서 U에 할당 가능한 타입을 제외합니다.
type Exclude<T, U> = T extends U ? never : T;
type Numbers = 1 | 2 | 3 | 4;
type WithoutOneAndTwo = Exclude<Numbers, 1 | 2>;
```

```ts
// 7. Extract<T, U>
// T에서 U에 할당 가능한 타입만 추출합니다.
type Extract<T, U> = T extends U ? T : never;
type OnlyOneAndTwo = Extract<Numbers, 1 | 2>;
```

```ts
// 8. Omit<T, K>
// T에서 K로 지정된 프로퍼티를 제외한 타입을 만듭니다.
type Omit<T, K extends keyof any> = Pick<T, Exclude<keyof T, K>>;

const personWithoutAge: Omit<Person, "age"> = { name: "Edward" };
```

```ts
// 9. NonNullable<T>
// T에서 null과 undefined를 제외합니다.
type NonNullable<T> = T extends null | undefined ? never : T;
type MaybeNull = string | null;

const nonNullable: NonNullable<MaybeNull> = "Frank";
```

```ts
// 10. Parameters<T>
// 함수 타입 T의 매개변수 타입을 튜플 형식으로 가져옵니다.
type Parameters<T extends (...args: any) => any> = T extends (...args: infer P) => any ? P : never;

function greet(name: string, age: number): void {}

type GreetParams = Parameters<typeof greet>; // [string, number]
```

```ts
// 11. ConstructorParameters<T>
// 클래스 생성자의 매개변수 타입을 튜플 형식으로 가져옵니다.
type ConstructorParameters<T extends new (...args: any) => any> = T extends new (...args: infer P) => any ? P : never;

class PersonClass {
  constructor(name: string, age: number) {}
}

type PersonConstructorParams = ConstructorParameters<typeof PersonClass>; // [string, number]
```

```ts
// 12. ReturnType<T>
// 함수 T의 반환 타입을 가져옵니다.
type ReturnType<T extends (...args: any) => any> = T extends (...args: any) => infer R ? R : any;

type GreetReturnType = ReturnType<typeof greet>; // void
```

```ts
// 13. InstanceType<T>
// 생성자 함수 T의 인스턴스 타입을 가져옵니다.
type InstanceType<T extends new (...args: any) => any> = T extends new (...args: any) => infer R ? R : any;

type PersonInstance = InstanceType<typeof PersonClass>;
```

```ts
// 14. Uppercase<StringType>
// 문자열 타입의 모든 문자를 대문자로 변환합니다.
type Uppercase<StringType extends string> = intrinsic;
type BigHELLO = Uppercase<'hello'>; // 'HELLO'
```

```ts
// 15. Lowercase<StringType>
// 문자열 타입의 모든 문자를 소문자로 변환합니다.
type Lowercase<StringType extends string> = intrinsic;
type SmallHELLO = Lowercase<'HELLO'>; // 'hello'
```

```ts
// 16. Capitalize<StringType>
// 문자열 타입의 첫 문자를 대문자로 변환합니다.
type Capitalize<StringType extends string> = intrinsic;
type CapitalizedHello = Capitalize<'hello'>; // 'Hello'
```

```ts
// 17. Uncapitalize<StringType>
// 문자열 타입의 첫 문자를 소문자로 변환합니다.
type Uncapitalize<StringType extends string> = intrinsic;
type UncapitalizedHello = Uncapitalize<'Hello'>; // 'hello'
```

```ts
// 18. ThisType<T>
// 함수 내부의 this 타입을 T로 설정하는데 사용됩니다.
// 주로 object literals에서 사용되며, ThisType을 사용하는 인터페이스는
// 컴파일러 옵션에서 noImplicitThis를 활성화해야 합니다.
type ThisType<T> = {};

interface Thing {
  name: string;
  getName(this: ThisType<Thing>): string;
}

const thing: Thing = {
  name: "Toy",
  getName() {
      return this.name;
  }
};
```

