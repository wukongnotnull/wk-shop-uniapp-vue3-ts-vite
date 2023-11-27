<script setup lang="ts">
	import type { BannerItem } from "@/types/home"

	// 定义 props 接受
	const props = defineProps<{
		list : BannerItem[]
	}>()
	console.log("子组件的自定义属性props=>", props)
</script>

<template>
	<view class="carousel">
		<swiper :circular="true" :autoplay="true" :interval="2000" :indicator-dots="true">
			<swiper-item v-for="item in list" :key="item.id">
				<navigator url="/pages/index/index" hover-class="none" class="navigator">
					<image mode="aspectFill" class="image" :src="item.imgUrl"></image>
				</navigator>
			</swiper-item>
		</swiper>
	</view>
</template>

<style lang="scss">
	:host {
		display: block;
		height: 280rpx;
	}

	/* 轮播图 */
	.carousel {
		height: 100%;
		position: relative;
		overflow: hidden;
		transform: translateY(0);
		background-color: #efefef;

		.indicator {
			position: absolute;
			left: 0;
			right: 0;
			bottom: 16rpx;
			display: flex;
			justify-content: center;

			.dot {
				width: 30rpx;
				height: 6rpx;
				margin: 0 8rpx;
				border-radius: 6rpx;
				background-color: rgba(255, 255, 255, 0.4);
			}

			.active {
				background-color: #fff;
			}
		}

		.navigator,
		.image {
			width: 100%;
			height: 100%;
		}
	}
</style>