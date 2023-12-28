```ts
import {
	onMounted,
	onUpdated,
	onUnmounted,
	onBeforeUpdate,
	onBeforeUnmount,
	onRenderTracked,
	onActivated,
	onDeactivated,
	onServerPrefetch,
	onBeforeMount,
	onErrorCaptured,
	onRenderTriggered,
} from 'vue';

onMounted(() => {
	console.log('onMounted');
});

onUpdated(() => {
	console.log('onUpdated');
});

onUnmounted(() => {
	console.log('onUnmounted');
});

onBeforeMount(() => {
	console.log('onBeforeMount');
});

onBeforeUpdate(() => {
	console.log('onBeforeUpdate');
});

onBeforeUnmount(() => {
	console.log('onBeforeUnmount');
});

onErrorCaptured(() => {
	console.log('onErrorCaptured');
});

onRenderTracked(() => {
	console.log('onRenderTracked');
});

onRenderTriggered(() => {
	console.log('onRenderTriggered');
});

onActivated(() => {
	console.log('onActivated');
});

onDeactivated(() => {
	console.log('onDeactivated');
});

onServerPrefetch(() => {
	console.log('onServerPrefetch');
});
```