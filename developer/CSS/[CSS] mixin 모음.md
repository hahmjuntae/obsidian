Font
```scss
// @include fontcss($color, font-weight, font-size, line-height);
@mixin fontcss($color: $black, $weight: 200, $size: rem(14px), $lineheight: 1) {
    @if ($color) {
        color: $color;
    }
    @if ($weight) {
        font-weight: $weight;
    }
    @if ($size) {
        font-size: $size;
    }
    @if ($lineheight) {
        line-height: $lineheight;
    }
}
```

라인 말줄임
```scss
// @include line(라인수)
@mixin line($lineCount: 1) {
    @if ($lineCount == 1) {
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
    } @else {
        /* autoprefixer: off */
        -webkit-box-orient: vertical;
        /* autoprefixer: on */
        display: block;
        display: -webkit-box;
        overflow: hidden;
        text-overflow: ellipsis;
        word-break: break-all;
        -webkit-line-clamp: $lineCount;
    }
}
```

이미지 경로
```scss
// src($folder: 'guide', $filename: '')
// ex) background-image: url(src($folder: 'guide', $filename: ''));
@function src($folder: 'guide', $filename: '') {
    @return '../images/#{$folder}/#{$filename}';
}
```

스프라이트 이미지
```scss
//@include sprite(left,top)
@mixin sprite($left, $top) {
    background-image: url(../images/sprite.png);
    background-repeat: no-repeat;
    background-size: $sprite;
    background-position: #{rem($left $top)};
}
```

구분선
```scss
// @include division($color: #ccc, $space: rem(32px), $height: rem(18px))
@mixin division($color: #ccc, $space: rem(32px), $height: rem(18px)) {
    position: relative;
    padding-left: $space;

    &:before {
        position: absolute;
        top: 50%;
        left: calc(#{$space} / 2 - #{1px});
        width: 1px;
        height: $height;
        background: $color;
        transform: translate(0, -50%);
        content: '';
    }
}
```

이미지 리사이즈
```scss
// @include imageResize("width/height/fit-cover/auto");
@mixin imageResize($type: 'width') {
    overflow: hidden;
    position: relative;

    img {
        position: absolute;
        top: 0;
        left: 0;
        bottom: 0;
        right: 0;
        margin: auto;

        @if ($type == 'width') {
            width: 100%;
            height: auto;
        } @else if ($type == 'height') {
            width: auto;
            height: 100%;
        } @else if ($type == 'fit-cover') {
            width: 100%;
            height: 100%;
            object-fit: cover;
        } @else if ($type == 'auto') {
            width: auto;
            height: auto;
            max-width: 100%;
            max-height: 100%;
        }
    }
}
```

PC max-width 설정
```scss
@mixin desktop {
    @media (max-width: #{$desktop-width}) {
        @content;
    }
}
```

