```scss
figure {
    position: relative;
    width: 100%;
    height: 0;
    padding-bottom: 100%; // padding이 부모의 width 값에 따르기 때문
    font-size: 0;
    img {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
}
```