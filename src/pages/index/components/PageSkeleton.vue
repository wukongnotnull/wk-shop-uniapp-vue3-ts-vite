<template name="skeleton">
	<view is="components/WkSwiper">
		<view class="carousel WkSwiper--carousel">
			<swiper autoplay="false" circular="true" indicator-dots="true" interval="2000" current="0"></swiper>
		</view>
	</view>
	<view is="pages/index/components/CategoryPanel">
		<view class="category CategoryPanel--category">
			<navigator class="category-item CategoryPanel--category-item" hover-class="none">
				<image class="icon CategoryPanel--icon sk-image"></image>
				<text class="text CategoryPanel--text sk-transparent sk-text-14-2857-441 sk-text">居家</text>
			</navigator>
			<navigator class="category-item CategoryPanel--category-item" hover-class="none">
				<image class="icon CategoryPanel--icon sk-image"></image>
				<text class="text CategoryPanel--text sk-transparent sk-text-14-2857-501 sk-text">锦鲤</text>
			</navigator>
			<navigator class="category-item CategoryPanel--category-item" hover-class="none">
				<image class="icon CategoryPanel--icon sk-image"></image>
				<text class="text CategoryPanel--text sk-transparent sk-text-14-2857-489 sk-text">服饰</text>
			</navigator>
			<navigator class="category-item CategoryPanel--category-item" hover-class="none">
				<image class="icon CategoryPanel--icon sk-image"></image>
				<text class="text CategoryPanel--text sk-transparent sk-text-14-2857-490 sk-text">母婴</text>
			</navigator>
			<navigator class="category-item CategoryPanel--category-item" hover-class="none">
				<image class="icon CategoryPanel--icon sk-image"></image>
				<text class="text CategoryPanel--text sk-transparent sk-text-14-2857-652 sk-text">个护</text>
			</navigator>
			<navigator class="category-item CategoryPanel--category-item" hover-class="none">
				<image class="icon CategoryPanel--icon sk-image"></image>
				<text class="text CategoryPanel--text sk-transparent sk-text-14-2857-962 sk-text">严选</text>
			</navigator>
			<navigator class="category-item CategoryPanel--category-item" hover-class="none">
				<image class="icon CategoryPanel--icon sk-image"></image>
				<text class="text CategoryPanel--text sk-transparent sk-text-14-2857-191 sk-text">数码</text>
			</navigator>
			<navigator class="category-item CategoryPanel--category-item" hover-class="none">
				<image class="icon CategoryPanel--icon sk-image"></image>
				<text class="text CategoryPanel--text sk-transparent sk-text-14-2857-345 sk-text">运动</text>
			</navigator>
			<navigator class="category-item CategoryPanel--category-item" hover-class="none">
				<image class="icon CategoryPanel--icon sk-image"></image>
				<text class="text CategoryPanel--text sk-transparent sk-text-14-2857-862 sk-text">杂项</text>
			</navigator>
			<navigator class="category-item CategoryPanel--category-item" hover-class="none">
				<image class="icon CategoryPanel--icon sk-image"></image>
				<text class="text CategoryPanel--text sk-transparent sk-text-14-2857-984 sk-text">品牌</text>
			</navigator>
		</view>
	</view>
	<view is="pages/index/components/HotPanel">
		<view class="panel HotPanel--panel hot HotPanel--hot">
			<view class="item HotPanel--item">
				<view class="title HotPanel--title">
					<text class="title-text HotPanel--title-text sk-transparent sk-text-14-2857-160 sk-text">特惠推荐</text>
					<text class="title-desc HotPanel--title-desc sk-transparent sk-text-14-2857-405 sk-text">精选全攻略</text>
				</view>
				<navigator class="cards HotPanel--cards" hover-class="none">
					<image class="image HotPanel--image sk-image" mode="aspectFit"></image>
					<image class="image HotPanel--image sk-image" mode="aspectFit"></image>
				</navigator>
			</view>
			<view class="item HotPanel--item">
				<view class="title HotPanel--title">
					<text class="title-text HotPanel--title-text sk-transparent sk-text-14-2857-399 sk-text">爆款推荐</text>
					<text class="title-desc HotPanel--title-desc sk-transparent sk-text-14-2857-826 sk-text">最受欢迎</text>
				</view>
				<navigator class="cards HotPanel--cards" hover-class="none">
					<image class="image HotPanel--image sk-image" mode="aspectFit"></image>
					<image class="image HotPanel--image sk-image" mode="aspectFit"></image>
				</navigator>
			</view>
			<view class="item HotPanel--item">
				<view class="title HotPanel--title">
					<text class="title-text HotPanel--title-text sk-transparent sk-text-14-2857-120 sk-text">一站买全</text>
					<text class="title-desc HotPanel--title-desc sk-transparent sk-text-14-2857-384 sk-text">精心优选</text>
				</view>
				<navigator class="cards HotPanel--cards" hover-class="none">
					<image class="image HotPanel--image sk-image" mode="aspectFit"></image>
					<image class="image HotPanel--image sk-image" mode="aspectFit"></image>
				</navigator>
			</view>
			<view class="item HotPanel--item">
				<view class="title HotPanel--title">
					<text class="title-text HotPanel--title-text sk-transparent sk-text-14-2857-159 sk-text">新鲜好物</text>
					<text class="title-desc HotPanel--title-desc sk-transparent sk-text-14-2857-60 sk-text">生活加分项</text>
				</view>
				<navigator class="cards HotPanel--cards" hover-class="none">
					<image class="image HotPanel--image sk-image" mode="aspectFit"></image>
					<image class="image HotPanel--image sk-image" mode="aspectFit"></image>
				</navigator>
			</view>
		</view>
	</view>
</template>

<style lang="scss">
	.sk-transparent {
		color: transparent !important;
	}

	.sk-text-3-5714-513 {
		background-image: linear-gradient(transparent 3.5714%, #EEEEEE 0%, #EEEEEE 96.4286%, transparent 0%) !important;
		background-size: 100% 28.0000rpx;
		position: relative !important;
	}

	.sk-text {
		background-origin: content-box !important;
		background-clip: content-box !important;
		background-color: transparent !important;
		color: transparent !important;
		background-repeat: repeat-y !important;
	}

	.sk-text-14-2857-397 {
		background-image: linear-gradient(transparent 14.2857%, #EEEEEE 0%, #EEEEEE 85.7143%, transparent 0%) !important;
		background-size: 100% 39.2000rpx;
		position: relative !important;
	}

	.sk-text-14-2857-924 {
		background-image: linear-gradient(transparent 14.2857%, #EEEEEE 0%, #EEEEEE 85.7143%, transparent 0%) !important;
		background-size: 100% 36.4000rpx;
		position: relative !important;
	}

	.sk-text-14-2857-270 {
		background-image: linear-gradient(transparent 14.2857%, #EEEEEE 0%, #EEEEEE 85.7143%, transparent 0%) !important;
		background-size: 100% 36.4000rpx;
		position: relative !important;
	}

	.sk-text-14-2857-29 {
		background-image: linear-gradient(transparent 14.2857%, #EEEEEE 0%, #EEEEEE 85.7143%, transparent 0%) !important;
		background-size: 100% 36.4000rpx;
		position: relative !important;
	}

	.sk-text-14-2857-788 {
		background-image: linear-gradient(transparent 14.2857%, #EEEEEE 0%, #EEEEEE 85.7143%, transparent 0%) !important;
		background-size: 100% 36.4000rpx;
		position: relative !important;
	}

	.sk-text-14-2857-995 {
		background-image: linear-gradient(transparent 14.2857%, #EEEEEE 0%, #EEEEEE 85.7143%, transparent 0%) !important;
		background-size: 100% 36.4000rpx;
		position: relative !important;
	}

	.sk-text-14-2857-751 {
		background-image: linear-gradient(transparent 14.2857%, #EEEEEE 0%, #EEEEEE 85.7143%, transparent 0%) !important;
		background-size: 100% 36.4000rpx;
		position: relative !important;
	}

	.sk-text-14-2857-450 {
		background-image: linear-gradient(transparent 14.2857%, #EEEEEE 0%, #EEEEEE 85.7143%, transparent 0%) !important;
		background-size: 100% 36.4000rpx;
		position: relative !important;
	}

	.sk-text-14-2857-72 {
		background-image: linear-gradient(transparent 14.2857%, #EEEEEE 0%, #EEEEEE 85.7143%, transparent 0%) !important;
		background-size: 100% 36.4000rpx;
		position: relative !important;
	}

	.sk-text-14-2857-9 {
		background-image: linear-gradient(transparent 14.2857%, #EEEEEE 0%, #EEEEEE 85.7143%, transparent 0%) !important;
		background-size: 100% 36.4000rpx;
		position: relative !important;
	}

	.sk-text-14-2857-547 {
		background-image: linear-gradient(transparent 14.2857%, #EEEEEE 0%, #EEEEEE 85.7143%, transparent 0%) !important;
		background-size: 100% 36.4000rpx;
		position: relative !important;
	}

	.sk-text-14-2857-474 {
		background-image: linear-gradient(transparent 14.2857%, #EEEEEE 0%, #EEEEEE 85.7143%, transparent 0%) !important;
		background-size: 100% 44.8000rpx;
		position: relative !important;
	}

	.sk-text-14-2857-584 {
		background-image: linear-gradient(transparent 14.2857%, #EEEEEE 0%, #EEEEEE 85.7143%, transparent 0%) !important;
		background-size: 100% 33.6000rpx;
		position: relative !important;
	}

	.sk-text-14-2857-426 {
		background-image: linear-gradient(transparent 14.2857%, #EEEEEE 0%, #EEEEEE 85.7143%, transparent 0%) !important;
		background-size: 100% 44.8000rpx;
		position: relative !important;
	}

	.sk-text-14-2857-710 {
		background-image: linear-gradient(transparent 14.2857%, #EEEEEE 0%, #EEEEEE 85.7143%, transparent 0%) !important;
		background-size: 100% 33.6000rpx;
		position: relative !important;
	}

	.sk-text-14-2857-85 {
		background-image: linear-gradient(transparent 14.2857%, #EEEEEE 0%, #EEEEEE 85.7143%, transparent 0%) !important;
		background-size: 100% 44.8000rpx;
		position: relative !important;
	}

	.sk-text-14-2857-163 {
		background-image: linear-gradient(transparent 14.2857%, #EEEEEE 0%, #EEEEEE 85.7143%, transparent 0%) !important;
		background-size: 100% 33.6000rpx;
		position: relative !important;
	}

	.sk-text-14-2857-21 {
		background-image: linear-gradient(transparent 14.2857%, #EEEEEE 0%, #EEEEEE 85.7143%, transparent 0%) !important;
		background-size: 100% 44.8000rpx;
		position: relative !important;
	}

	.sk-text-14-2857-680 {
		background-image: linear-gradient(transparent 14.2857%, #EEEEEE 0%, #EEEEEE 85.7143%, transparent 0%) !important;
		background-size: 100% 33.6000rpx;
		position: relative !important;
	}

	.sk-image {
		background: #EFEFEF !important;
	}

	.sk-container {
		position: absolute;
		left: 0;
		top: 0;
		width: 100%;
		height: 100%;
		overflow: hidden;
		background-color: transparent;
	}
</style>