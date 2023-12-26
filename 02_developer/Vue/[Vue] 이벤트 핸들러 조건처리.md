```vue
<!-- BEFORE -->
<div @click="isCheckNeeded ? checkNav : null" />

<!-- AFTER -->
<div @click="isCheckNeeded ? checkNav() : null" />

<!-- OR -->
<div @click="isCheckNeeded && checkNav()" />
```