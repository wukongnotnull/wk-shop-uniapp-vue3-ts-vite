<script setup lang="ts">
	import { getHotRecommandAPI } from '@/services/hot';
	import type { PageParams } from '@/types/common';
	import type { HotItem } from '@/types/home';
	import type { HotResult, SubTypeItem } from '@/types/hot';
	import { onLoad } from '@dcloudio/uni-app';
	import { ref } from 'vue';


	// 热门推荐页 标题和url
	const hotMap = [
		{ type: '1', title: '特惠推荐', url: '/hot/preference' },
		{ type: '2', title: '爆款推荐', url: '/hot/inVogue' },
		{ type: '3', title: '一站买全', url: '/hot/oneStop' },
		{ type: '4', title: '新鲜好物', url: '/hot/new' },
	]
	// 接受路径中的参数
	const query = defineProps<{
		type : string
	}>()
	console.log('接受路径中的参数:', query)
	// 获得当前推荐类别
	const curHot = hotMap.find((v) => v.type == query.type)
	// 动态设置导航条标题
	uni.setNavigationBarTitle({
		title: curHot!.title
	})
	// 定义 bannerPictrue
	const bannerPictrue = ref("")
	//定义 subTypes，表示所有子分类数组
	const subTypes = ref<SubTypeItem[]>([])

	// 分页参数
	const pageParams : Required<PageParams> = {
		page: import.meta.env ? 30 : 1,
		pageSize: 10
	}

	//调用 getHotRecommandAPI
	const getHotRecommandList = async () => {
		// url 区分一级分类；pageParams表明分页条件；无subType参数表示查询所有子类型
		const res = await getHotRecommandAPI(curHot!.url, {
			...pageParams
		})
		console.log(res)
		bannerPictrue.value = res.result.bannerPicture
		subTypes.value = res.result.subTypes
		console.log("subTypes.value 是：", subTypes.value)

	}


	// tab 是否被点击
	const activeIndex = ref(0)
	// 触底标记
	const finish = ref(false)

	// 触底函数
	const onScrolltolower = async () => {
		console.log("我触点啦。。。。。")
		// 再次调用api ，追加数据列表
		// 获得被选择的子分类（通过tap事件单击实现）
		const curSubType = subTypes.value[activeIndex.value]
		// 被选中的子分类对应的商品集的页码
		if (curSubType.goodsItems.page >= curSubType.goodsItems.pages) {
			finish.value = true
			return uni.showToast({
				icon: "none",
				title: "无数据加载。。。"
			})
		}
		curSubType.goodsItems.page++
		// 当前子分类的 id ,查询对应的子分类的数据
		const curRes = await getHotRecommandAPI(curHot!.url, {
			page: curSubType.goodsItems.page,
			pageSize: curSubType.goodsItems.pageSize,
			subType: curSubType.id  // 根据子分类id查询，下一页数据
		})
		// 追加数据
		curSubType.goodsItems.items.push(...curRes.result.subTypes[activeIndex.value].goodsItems.items)


	}

	//加载初始化
	onLoad(() => {
		getHotRecommandList()
	})
</script>

<template>
	<view class="viewport">
		<!-- 推荐封面图 -->
		<view class="cover">
			<image :src="bannerPictrue" class="image" mode="widthFix">
			</image>
		</view>
		<!-- 推荐选项 -->
		<view class="tabs">
			<text class="text" @tap="activeIndex = index" :class="{active:index === activeIndex}"
				v-for="(item,index) in subTypes" :key="item.id">{{item.title}}</text>
		</view>
		<!-- 推荐列表 -->
		<scroll-view scroll-y class="scroll-view" v-show="index===activeIndex" @tap="activeIndex = index"
			v-for="(item,index) in subTypes" :key="item.id" @scrolltolower="onScrolltolower">
			<view class="goods">
				<navigator hover-class="none" class="navigator" v-for="goods in item.goodsItems.items" :key="goods"
					:url="`/pages/goods/goods?id=${goods.id}`">
					<image class="thumb" :src="goods.picture"></image>
					<view class="name ellipsis">{{goods.name}}</view>
					<view class="price">
						<text class="symbol">¥</text>
						<text class="number">{{goods.price}}</text>
					</view>
				</navigator>
			</view>
			<view class="loading-text">{{
				finish ? "无数据了。。":"加载中"
			}}</view>
		</scroll-view>
	</view>
</template>

<style lang="scss">
	page {
		height: 100%;
		background-color: #f4f4f4;
		display: flex;
	}

	.scroll-view {
		height: 0%;
		flex: 1;
	}

	.viewport {
		display: flex;
		flex-direction: column;
		height: 100%;
		padding: 180rpx 0 0;
		position: relative;
	}

	.cover {
		width: 750rpx;
		height: 225rpx;
		border-radius: 0 0 40rpx 40rpx;
		overflow: hidden;
		position: absolute;
		left: 0;
		top: 0;

		.image {
			width: 750rpx;
		}
	}



	.tabs {
		display: flex;
		justify-content: space-evenly;
		height: 100rpx;
		line-height: 90rpx;
		margin: 0 20rpx;
		font-size: 28rpx;
		border-radius: 10rpx;
		box-shadow: 0 4rpx 5rpx rgba(200, 200, 200, 0.3);
		color: #333;
		background-color: #fff;
		position: relative;
		z-index: 9;

		.text {
			margin: 0 20rpx;
			position: relative;
		}

		.active {
			&::after {
				content: '';
				width: 40rpx;
				height: 4rpx;
				transform: translate(-50%);
				background-color: #27ba9b;
				position: absolute;
				left: 50%;
				bottom: 24rpx;
			}
		}
	}

	.goods {
		display: flex;
		flex-wrap: wrap;
		justify-content: space-between;
		padding: 0 20rpx 20rpx;

		.navigator {
			width: 310rpx;
			padding: 15rpx;
			margin-top: 20rpx;
			border-radius: 10rpx;
			background-color: #fff;
		}

		.thumb {
			width: 305rpx;
			height: 305rpx;
		}

		.name {
			height: 88rpx;
			font-size: 26rpx;
		}

		.price {
			line-height: 1;
			color: #cf4444;
			font-size: 30rpx;
		}

		.symbol {
			font-size: 70%;
		}

		.decimal {
			font-size: 70%;
		}
	}

	.loading-text {
		text-align: center;
		font-size: 28rpx;
		color: #666;
		padding: 20rpx 0 50rpx;
	}
</style>