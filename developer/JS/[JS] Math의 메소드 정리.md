## 📌 프로그래밍에 자주 쓰이는 메소드

### **1.Math.round()**
- 주어진 숫자를 가장 가까운 정수로 반올림한다.

```javascript
console.log(Math.round(4.7)); // 5
console.log(Math.round(4.4)); // 4
```

### **2.Math.floor()**
- 주어진 숫자보다 크지 않은 가장 큰 정수를 반환한다.

```javascript
console.log(Math.floor(4.7)); // 4
console.log(Math.floor(4.4)); // 4
```

### **3.Math.ceil()**
- 주어진 숫자보다 작지 않은 가장 작은 정수를 반환한다.

```javascript
console.log(Math.ceil(4.7)); // 5
console.log(Math.ceil(4.4)); // 5
```

### **4.Math.random()**
- 0 (포함) ~ 1 (미포함) 사이의 난수를 반환한다.

```javascript
console.log(Math.random()); // 예: 0.12345678901234567
```

### **5.Math.min()**
- 주어진 숫자들 중에서 가장 작은 값을 반환한다.

```javascript
console.log(Math.min(5, 10, 15, 20)); // 5
```

### **6.Math.max()**
- 주어진 숫자들 중에서 가장 큰 값을 반환한다.

```javascript
console.log(Math.max(5, 10, 15, 20)); // 20
```

### **7.Math.abs()**
- 주어진 숫자의 절대값을 반환한다.
- 
```javascript
console.log(Math.abs(-5)); // 5
console.log(Math.abs(5));  // 5
```

### **8.Math.pow()**
- 주어진 두 숫자의 거듭제곱 값을 반환한다. 첫 번째 인자는 밑수, 두 번째 인자는 지수다.

```javascript
console.log(Math.pow(2, 3)); // 8
```



## 📌 수학적 연산이나 공학적 계산에 자주 쓰이는 메소드

### **1.Math.log()**
- 주어진 숫자의 자연로그 값을 반환한다.

```javascript
console.log(Math.log(10)); // 2.302585092994046
```

### **2.Math.exp()**
- 주어진 숫자의 지수 값을 반환한다.

```javascript
console.log(Math.exp(1)); // 2.718281828459045 (자연상수 e의 지수 값)
```

### **3.Math.sqrt()**
- 주어진 숫자의 제곱근을 반환한다.

```javascript
console.log(Math.sqrt(9)); // 3
```

### **4.Math.sin(), Math.cos(), Math.tan()**
- 주어진 각도의 사인, 코사인, 탄젠트 값을 반환한다. (인자는 라디안 단위)

```javascript
console.log(Math.sin(Math.PI / 2)); // 1 (90도의 사인 값)
console.log(Math.cos(Math.PI));     // -1 (180도의 코사인 값)
console.log(Math.tan(Math.PI / 4)); // 1 (45도의 탄젠트 값)
```

### **5.Math.asin(), Math.acos(), Math.atan()**
- 주어진 값의 역사인, 역코사인, 역탄젠트 값을 반환한다.

```javascript
console.log(Math.asin(1)); // 1.5707963267948966 (π/2 라디안, 즉 90도)
```

### **6.Math.PI**
- 원주율 값을 반환한다.

```javascript
console.log(Math.PI); // 3.141592653589793
```

### **7.Math.E**
- 자연상수 \( e \) 값을 반환한다.

```javascript
console.log(Math.E); // 2.718281828459045
```
