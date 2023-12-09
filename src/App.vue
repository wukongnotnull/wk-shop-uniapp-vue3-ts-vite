<script setup lang="ts">
	import { onLaunch, onShow, onHide } from '@dcloudio/uni-app'
	onLaunch(() => {
		console.log('App Launch')
	})
	onShow(() => {
		console.log('App Show')
	})
	onHide(() => {
		console.log('App Hide')
	})
</script>
<style lang="scss">
	// 全局样式 src/App.vue
	// 字体图标
	@import '@/styles/fonts.scss';
	@import '@/styles/base.scss';
</style>