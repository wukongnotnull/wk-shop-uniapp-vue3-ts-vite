<template name="skeleton">
	<view class="sk-container">
		<view class="viewport">
			<view class="search">
				<view class="input">
					<text class="icon-search sk-transparent sk-text-14-2857-986 sk-text">女靴</text>
				</view>
			</view>
			<view class="categories">
				<scroll-view scroll-y="true" class="primary">
					<view class="item active sk-pseudo sk-pseudo-circle">
						<text class="name sk-transparent sk-text-14-2857-313 sk-text">居家</text>
					</view>
					<view class="item sk-pseudo sk-pseudo-circle">
						<text class="name sk-transparent sk-text-14-2857-676 sk-text">美食</text>
					</view>
					<view class="item sk-pseudo sk-pseudo-circle">
						<text class="name sk-transparent sk-text-14-2857-931 sk-text">服饰</text>
					</view>
					<view class="item sk-pseudo sk-pseudo-circle">
						<text class="name sk-transparent sk-text-14-2857-355 sk-text">母婴</text>
					</view>
					<view class="item sk-pseudo sk-pseudo-circle">
						<text class="name sk-transparent sk-text-14-2857-455 sk-text">个护</text>
					</view>
					<view class="item sk-pseudo sk-pseudo-circle">
						<text class="name sk-transparent sk-text-14-2857-24 sk-text">严选</text>
					</view>
					<view class="item sk-pseudo sk-pseudo-circle">
						<text class="name sk-transparent sk-text-14-2857-300 sk-text">数码</text>
					</view>
					<view class="item sk-pseudo sk-pseudo-circle">
						<text class="name sk-transparent sk-text-14-2857-875 sk-text">运动</text>
					</view>
					<view class="item sk-pseudo sk-pseudo-circle">
						<text class="name sk-transparent sk-text-14-2857-998 sk-text">杂项</text>
					</view>
				</scroll-view>
				<scroll-view scroll-y="true" class="secondary">
					<view is="components/WkSwiper" class="banner">
						<view class="carousel WkSwiper--carousel">
							<swiper autoplay="false" circular="true" indicator-dots="true" interval="2000" current="0">
								<swiper-item
									style="position: absolute; width: 100%; height: 100%; transform: translate(0%, 0px) translateZ(0px);">
									<navigator class="navigator WkSwiper--navigator" hover-class="none">
										<image class="image WkSwiper--image sk-image" mode="aspectFill"></image>
									</navigator>
								</swiper-item>
								<swiper-item
									style="position: absolute; width: 100%; height: 100%; transform: translate(100%, 0px) translateZ(0px);">
									<navigator class="navigator WkSwiper--navigator" hover-class="none">
										<image class="image WkSwiper--image sk-image" mode="aspectFill"></image>
									</navigator>
								</swiper-item>
							</swiper>
						</view>
					</view>
					<view class="panel">
						<view class="title">
							<text class="name sk-transparent sk-text-27-2727-28 sk-text">居家生活用品</text>
							<navigator class="more sk-transparent sk-text-30-3030-770 sk-text sk-pseudo sk-pseudo-circle"
								hover-class="none">全部</navigator>
						</view>
						<view class="section">
							<navigator class="goods" hover-class="none">
								<image class="image sk-image"></image>
								<view class="name ellipsis sk-transparent sk-text-14-2857-146 sk-text">梅乃宿梅酒720毫升</view>
								<view class="price">
									<text class="symbol sk-transparent sk-opacity">¥</text>
									<text class="number sk-transparent sk-text-14-2857-655 sk-text">168.00</text>
								</view>
							</navigator>
							<navigator class="goods" hover-class="none">
								<image class="image sk-image"></image>
								<view class="name ellipsis sk-transparent sk-text-14-2857-187 sk-text">法国年份雅文邑700毫升</view>
								<view class="price">
									<text class="symbol sk-transparent sk-opacity">¥</text>
									<text class="number sk-transparent sk-text-14-2857-500 sk-text">1480.00</text>
								</view>
							</navigator>
							<navigator class="goods" hover-class="none">
								<image class="image sk-image"></image>
								<view class="name ellipsis sk-transparent sk-text-14-2857-490 sk-text">多米尼加陈年朗姆酒700毫升</view>
								<view class="price">
									<text class="symbol sk-transparent sk-opacity">¥</text>
									<text class="number sk-transparent sk-text-14-2857-622 sk-text">238.00</text>
								</view>
							</navigator>
							<navigator class="goods" hover-class="none">
								<image class="image sk-image"></image>
								<view class="name ellipsis sk-transparent sk-text-14-2857-151 sk-text">川味牛肉辣椒酱190克</view>
								<view class="price">
									<text class="symbol sk-transparent sk-opacity">¥</text>
									<text class="number sk-transparent sk-text-14-2857-850 sk-text">38.00</text>
								</view>
							</navigator>
							<navigator class="goods" hover-class="none">
								<image class="image sk-image"></image>
								<view class="name ellipsis sk-transparent sk-text-14-2857-954 sk-text">全新升级，四川酸辣粉195克*6杯</view>
								<view class="price">
									<text class="symbol sk-transparent sk-opacity">¥</text>
									<text class="number sk-transparent sk-text-14-2857-89 sk-text">69.00</text>
								</view>
							</navigator>
							<navigator class="goods" hover-class="none">
								<image class="image sk-image"></image>
								<view class="name ellipsis sk-transparent sk-text-14-2857-192 sk-text">极光限定 珠光蓝珐琅锅</view>
								<view class="price">
									<text class="symbol sk-transparent sk-opacity">¥</text>
									<text class="number sk-transparent sk-text-14-2857-457 sk-text">199.00</text>
								</view>
							</navigator>
							<navigator class="goods" hover-class="none">
								<image class="image sk-image"></image>
							</navigator>
							<navigator class="goods" hover-class="none">
								<image class="image sk-image"></image>
							</navigator>
							<navigator class="goods" hover-class="none">
								<image class="image sk-image"></image>
							</navigator>
						</view>
					</view>
				</scroll-view>
			</view>
		</view>
	</view>
</template>

<script>
</script>

<style lang="scss">
	.sk-transparent {
		color: transparent !important;
	}

	.sk-text-14-2857-986 {
		background-image: linear-gradient(transparent 14.2857%, #EEEEEE 0%, #EEEEEE 85.7143%, transparent 0%) !important;
		background-size: 100% 38.0435rpx;
		position: relative !important;
	}

	.sk-text {
		background-origin: content-box !important;
		background-clip: content-box !important;
		background-color: transparent !important;
		color: transparent !important;
		background-repeat: repeat-y !important;
	}

	.sk-text-14-2857-313 {
		background-image: linear-gradient(transparent 14.2857%, #EEEEEE 0%, #EEEEEE 85.7143%, transparent 0%) !important;
		background-size: 100% 35.5072rpx;
		position: relative !important;
	}

	.sk-text-14-2857-676 {
		background-image: linear-gradient(transparent 14.2857%, #EEEEEE 0%, #EEEEEE 85.7143%, transparent 0%) !important;
		background-size: 100% 35.5072rpx;
		position: relative !important;
	}

	.sk-text-14-2857-931 {
		background-image: linear-gradient(transparent 14.2857%, #EEEEEE 0%, #EEEEEE 85.7143%, transparent 0%) !important;
		background-size: 100% 35.5072rpx;
		position: relative !important;
	}

	.sk-text-14-2857-355 {
		background-image: linear-gradient(transparent 14.2857%, #EEEEEE 0%, #EEEEEE 85.7143%, transparent 0%) !important;
		background-size: 100% 35.5072rpx;
		position: relative !important;
	}

	.sk-text-14-2857-455 {
		background-image: linear-gradient(transparent 14.2857%, #EEEEEE 0%, #EEEEEE 85.7143%, transparent 0%) !important;
		background-size: 100% 35.5072rpx;
		position: relative !important;
	}

	.sk-text-14-2857-24 {
		background-image: linear-gradient(transparent 14.2857%, #EEEEEE 0%, #EEEEEE 85.7143%, transparent 0%) !important;
		background-size: 100% 35.5072rpx;
		position: relative !important;
	}

	.sk-text-14-2857-300 {
		background-image: linear-gradient(transparent 14.2857%, #EEEEEE 0%, #EEEEEE 85.7143%, transparent 0%) !important;
		background-size: 100% 35.5072rpx;
		position: relative !important;
	}

	.sk-text-14-2857-875 {
		background-image: linear-gradient(transparent 14.2857%, #EEEEEE 0%, #EEEEEE 85.7143%, transparent 0%) !important;
		background-size: 100% 35.5072rpx;
		position: relative !important;
	}

	.sk-text-14-2857-998 {
		background-image: linear-gradient(transparent 14.2857%, #EEEEEE 0%, #EEEEEE 85.7143%, transparent 0%) !important;
		background-size: 100% 35.5072rpx;
		position: relative !important;
	}

	.sk-text-27-2727-28 {
		background-image: linear-gradient(transparent 27.2727%, #EEEEEE 0%, #EEEEEE 72.7273%, transparent 0%) !important;
		background-size: 100% 59.7826rpx;
		position: relative !important;
	}

	.sk-text-30-3030-770 {
		background-image: linear-gradient(transparent 30.3030%, #EEEEEE 0%, #EEEEEE 69.6970%, transparent 0%) !important;
		background-size: 100% 59.7826rpx;
		position: relative !important;
	}

	.sk-text-14-2857-146 {
		background-image: linear-gradient(transparent 14.2857%, #EEEEEE 0%, #EEEEEE 85.7143%, transparent 0%) !important;
		background-size: 100% 30.4348rpx;
		position: relative !important;
	}

	.sk-opacity {
		opacity: 0 !important;
	}

	.sk-text-14-2857-655 {
		background-image: linear-gradient(transparent 14.2857%, #EEEEEE 0%, #EEEEEE 85.7143%, transparent 0%) !important;
		background-size: 100% 32.9710rpx;
		position: relative !important;
	}

	.sk-text-14-2857-187 {
		background-image: linear-gradient(transparent 14.2857%, #EEEEEE 0%, #EEEEEE 85.7143%, transparent 0%) !important;
		background-size: 100% 30.4348rpx;
		position: relative !important;
	}

	.sk-text-14-2857-500 {
		background-image: linear-gradient(transparent 14.2857%, #EEEEEE 0%, #EEEEEE 85.7143%, transparent 0%) !important;
		background-size: 100% 32.9710rpx;
		position: relative !important;
	}

	.sk-text-14-2857-490 {
		background-image: linear-gradient(transparent 14.2857%, #EEEEEE 0%, #EEEEEE 85.7143%, transparent 0%) !important;
		background-size: 100% 30.4348rpx;
		position: relative !important;
	}

	.sk-text-14-2857-622 {
		background-image: linear-gradient(transparent 14.2857%, #EEEEEE 0%, #EEEEEE 85.7143%, transparent 0%) !important;
		background-size: 100% 32.9710rpx;
		position: relative !important;
	}

	.sk-text-14-2857-151 {
		background-image: linear-gradient(transparent 14.2857%, #EEEEEE 0%, #EEEEEE 85.7143%, transparent 0%) !important;
		background-size: 100% 30.4348rpx;
		position: relative !important;
	}

	.sk-text-14-2857-850 {
		background-image: linear-gradient(transparent 14.2857%, #EEEEEE 0%, #EEEEEE 85.7143%, transparent 0%) !important;
		background-size: 100% 32.9710rpx;
		position: relative !important;
	}

	.sk-text-14-2857-954 {
		background-image: linear-gradient(transparent 14.2857%, #EEEEEE 0%, #EEEEEE 85.7143%, transparent 0%) !important;
		background-size: 100% 30.4348rpx;
		position: relative !important;
	}

	.sk-text-14-2857-89 {
		background-image: linear-gradient(transparent 14.2857%, #EEEEEE 0%, #EEEEEE 85.7143%, transparent 0%) !important;
		background-size: 100% 32.9710rpx;
		position: relative !important;
	}

	.sk-text-14-2857-192 {
		background-image: linear-gradient(transparent 14.2857%, #EEEEEE 0%, #EEEEEE 85.7143%, transparent 0%) !important;
		background-size: 100% 30.4348rpx;
		position: relative !important;
	}

	.sk-text-14-2857-457 {
		background-image: linear-gradient(transparent 14.2857%, #EEEEEE 0%, #EEEEEE 85.7143%, transparent 0%) !important;
		background-size: 100% 32.9710rpx;
		position: relative !important;
	}

	.sk-image {
		background: #EFEFEF !important;
	}

	.sk-pseudo::before,
	.sk-pseudo::after {
		background: #EFEFEF !important;
		background-image: none !important;
		color: transparent !important;
		border-color: transparent !important;
	}

	.sk-pseudo-rect::before,
	.sk-pseudo-rect::after {
		border-radius: 0 !important;
	}

	.sk-pseudo-circle::before,
	.sk-pseudo-circle::after {
		border-radius: 50% !important;
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