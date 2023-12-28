* `instanceof` 연산자는 객체가 특정 클래스 또는 생성자 함수의 인스턴스인지 확인합니다.
* TypeScript에서는 `instanceof`를 타입 가드로 사용하여 특정 클래스의 인스턴스인 경우에만
* 해당 클래스의 속성 및 메서드에 안전하게 접근할 수 있습니다.
 
```ts
class Dog {
  bark(): void {
      console.log("Woof!");
  }
}
```

```ts
class Cat {
  meow(): void {
      console.log("Meow!");
  }
}
```

```ts
function makeSound(animal: Dog | Cat): void {
  if (animal instanceof Dog) {
      animal.bark();  // 여기서 TypeScript는 animal이 Dog의 인스턴스임을 알고 있습니다.
  } else if (animal instanceof Cat) {
      animal.meow();  // 여기서 TypeScript는 animal이 Cat의 인스턴스임을 알고 있습니다.
  }
}

const myDog = new Dog();
const myCat = new Cat();

makeSound(myDog);  // 출력: Woof!
makeSound(myCat);  // 출력: Meow!
```

* 위의 예제에서, `makeSound` 함수는 `Dog` 또는 `Cat`의 인스턴스를 인수로 받습니다.
* `instanceof` 연산자를 사용하여 인수의 실제 타입을 확인하고 적절한 메서드를 호출합니다.
* TypeScript는 `instanceof`를 통해 타입을 안전하게 좁힐 수 있습니다.
