모달 관련을 예시로 한다.
## 컴포저블 함수

```tsx
export default function useModal(option?: Partial<Modal>) {
  const { dialog, onDialogOpen, onDialogClose } = useDialog();

  const modal = reactive<Modal>({
    // dialog 기본 옵션 복사
    ...dialog,

    // 디폴트 값 설정
    size: 'm',
    isFull: false,
    hideClose: false,
    hideFooter: false,
    hideHeader: false,
    closeOnClickOutside: true,

    // 커스텀 옵션으로 덮어쓰기
    ...option,
  });

  const open = () => {
    modal.isOpen = true;

    onDialogOpen(modal);
  };

  const close = () => {
    modal.isOpen = false;

    onDialogClose(modal);
  };

  return {
    modal,

    open,
    close,
  };
}

export type { Modal };
```

## 컴포저블 함수 사용

```tsx
const { modal, open, close } = useModal({
  title: '모달 제목',
  scrollLock: false,
  size: 'l',
  isFull: false,
});
```