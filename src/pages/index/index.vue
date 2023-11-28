<script setup lang="ts">
	// 局部组件手动导入，全局公共组件自动导入
	import CustomNavbar from './components/CustomNavbar.vue'
	import CategoryPanel from './components/CategoryPanel.vue'
	import HotPanel from './components/HotPanel.vue'
	import { ref } from 'vue'
	import { getHomeBannerAPI, getHomeCategoryAPI, getHomeHotAPI } from '@/services/home';
	import { onLoad } from '@dcloudio/uni-app';
	import type { BannerItem, CategoryItem, HotItem } from '@/types/home';
	import type { WkGuessInstance } from "@/types/components";
	import PageSkeleton from "./components/PageSkeleton.vue"

	// 定义 bannerList 变量,指定类型 BannerItem[]
	const bannerList = ref<BannerItem[]>([])
	const getHomeBannerList = async () => {
		// 从后端获得轮播图数据
		const res = await getHomeBannerAPI()
		console.log("轮播图列表中 result =》", res.result)
		bannerList.value = res.result
	}
	// --------分割线----------

	//定义 分类数据
	const HomeCategoryList = ref<CategoryItem[]>([])
	// 获得分类数据
	const getHomeCategoryList = async () => {
		const res = await getHomeCategoryAPI()
		HomeCategoryList.value = res.result
	}
	// --------分割线----------
	// 定义 热门推荐数据
	const hotList = ref<HotItem[]>([])
	// 获得热门推荐数据
	const getHotList = async () => {
		const res = await getHomeHotAPI()
		hotList.value = res.result
	}
	// --------分割线----------
	//获得猜你喜欢组件实例
	const guessRef = ref<WkGuessInstance>()

	// 滚动触底事件
	const onScrollToLower = () => {
		console.log("滚动到底部啦。。。")
		guessRef.value?.getMore()

	}

	// --------分割线----------
	// 下拉刷新状态
	const isTriggered = ref(false)

	// 自定义下拉刷新被触发
	const onRefresherrefresh = async () => {
		// 开启动画
		isTriggered.value = true
		// 重置猜你喜欢组件的数据
		guessRef.value?.resetData()
		// 加载数据
		await Promise.all([getHomeBannerList(), getHomeCategoryList(), getHotList(), guessRef.value?.getMore()])
		isTriggered.value = false
	}
	// --------分割线----------
	// --------分割线----------
	// --------分割线----------
	// 加载中标记
	const onLoading = ref(false)
	// 初次加载页面时 ： import { onLoad } from '@dcloudio/uni-app';
	onLoad(async () => {
		onLoading.value = true
		await Promise.all([
			getHomeBannerList(),
			getHomeCategoryList(),
			getHotList()
		])

		onLoading.value = false
	})

	// 骨架屏控制变量
	const showSkeleton = false
</script>

<template>
	<!-- 自定义导航 -->
	<CustomNavbar />
	<!--  滚动容器-->
	<scroll-view @scrolltolower="onScrollToLower" class="scroll-view" scroll-y="true" refresher-enabled="true"
		@refresherrefresh="onRefresherrefresh" :refresher-triggered="isTriggered">
		<PageSkeleton v-if="onLoading" />
		<template v-else>
			<!-- 轮播图 -->
			<WkSwiper :list=bannerList />
			<!-- 首页-分类 -->
			<CategoryPanel :list=HomeCategoryList />
			<!-- 首页-热门推荐 -->
			<HotPanel :list=hotList />
			<!-- 首页-猜你喜欢-->
			<WkGuess ref="guessRef" />
		</template>

	</scroll-view>
</template>

<style lang="scss">
	page {
		background-color: #f7f7f7;
		height: 100%;
		display: flex;
		flex-direction: column;
	}

	.scroll-view {
		// 一定要设置高度
		height: 0rpx;
		flex: 1;
		white-space: nowrap;
	}
</style>