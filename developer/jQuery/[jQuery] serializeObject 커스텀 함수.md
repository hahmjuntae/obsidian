```jsx
// serialize를 Object형태로 return 받는 커스텀 함수
$.fn.serializeObject = function () {
        let obj = null;
        try {
            if (this[0].tagName && this[0].tagName.toUpperCase() == 'FORM') {
                let arr = this.serializeArray();
                if (arr) {
                    obj = {};
                    jQuery.each(arr, function () {
                        obj[this.name] = this.value;
                    });
                }
            }
        } catch (e) {
            alert(e.message);
        }

        return obj;
    };
```