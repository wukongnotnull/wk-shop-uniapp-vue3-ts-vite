<script setup lang="ts">
	import { getMemberProfileAPI, putMemberProfileAPI } from '@/services/profile';
	import { useMemberStore } from '@/stores';
	import type { ProfileDetail } from '@/types/member';
	import { onLoad } from '@dcloudio/uni-app';
	import { ref } from 'vue';
	// 获取屏幕边界到安全区域距离
	const { safeAreaInsets } = uni.getSystemInfoSync()

	// 获得个人信息
	//const profile = ref<ProfileDetail>()
	const profile = ref({} as ProfileDetail)
	const getMemberProfileData = async () => {
		const res = await getMemberProfileAPI()
		profile.value = res.result
	}
	// 调用 store中存储的用户信息
	const memberStore = useMemberStore()
	// 个人信息- 点击修改头像
	const onChangeAvatar = () => {
		// uni 调用原生api 
		uni.chooseMedia({
			count: 1,
			mediaType: ['image'],
			success: (res) => {
				console.log('uni.chooseMedia --->', res)
				// 本地图片路径
				const { tempFilePath } = res.tempFiles[0]
				// 本地图片上传到后端服务器
				uni.uploadFile({
					url: '/member/profile/avatar', // 开发者服务器 url
					name: 'file', // 文件对应的 key , 开发者在服务器端通过这个 key 可以获取到文件二进制内容
					filePath: tempFilePath, // 要上传文件资源的路径。
					success: (res) => { // 接口调用成功的回调函数	
						console.log("uploadFile--->res-->", res)
						if (res.statusCode == 200) { // 200 表示上传成功
							//res.data 是字符串形式的对象 ,avatar 是后端返回的头像链接
							const { avatar } = JSON.parse(res.data).result
							profile.value!.avatar = avatar
							// 同时更新 store 中的头像
							memberStore.profile.avatar = avatar
							uni.showToast({
								icon: 'success',
								title: "头像更新成功"
							})
						} else {
							uni.showToast({
								icon: 'fail',
								title: "头像更新失败"
							})
						}
					}
				})
			}
		})
	}
	// 修改性别
	const onGenderChange = (event : any) => {
		// event.detail = {value: 选中项radio的value}
		profile.value!.gender = event.detail.value
	}
	// 修改生日
	const onBirthdayChange = (event : any) => {
		// event.detail = {value: value}
		profile.value!.birthday = event.detail.value

	}
	// 获得地区编码
	let fullLocationCode : [string, string, string] = ['', '', '']
	// 修改地区
	const onRegionChange = (event : any) => {
		console.log("onRegionChange--> event -->", event)
		// fullLocation is string  ;event.detail.value is array
		profile.value!.fullLocation = event.detail.value.join(" ")
		// 获得 code event.detail.code is array
		fullLocationCode = event.detail.code
	}

	// 保存表单修改后的个人信息
	const saveProfileModify = async () => {
		const { nickname, gender, birthday, profession } = profile.value
		const res = await putMemberProfileAPI({
			nickname,
			gender,
			birthday,
			profession,
			// fullLocation 转换成 code
			provinceCode: fullLocationCode[0],
			cityCode: fullLocationCode[1],
			countyCode: fullLocationCode[2]
		})
		console.log("saveProfileModify--> res-->", res)
		// 更新 Store 昵称
		memberStore.profile!.nickname = res.result.nickname

		uni.showToast({
			icon: 'success',
			title: "个人信息修改成功"
		})
		// t 毫秒后调用 uni.navigateBack() 
		setTimeout(() => {
			uni.navigateBack()
		}, 500)
	}

	// 初始加载
	onLoad(() => {
		getMemberProfileData()
	})
</script>

<template>
	<view class="viewport">
		<!-- 导航栏 -->
		<view class="navbar" :style="{ paddingTop: safeAreaInsets?.top + 'px' }">
			<!-- TODO 没有返回键头，需要补充-->
			<navigator open-type="navigateBack" class="back icon-left" hover-class="none"></navigator>
			<view class="title">个人信息</view>
		</view>
		<!-- 头像 -->
		<view class="avatar">
			<view class="avatar-content" @tap="onChangeAvatar">
				<image class="image" :src="profile?.avatar" mode="aspectFill" />
				<text class="text">点击修改头像</text>
			</view>
		</view>
		<!-- 表单 -->
		<view class="form">
			<!-- 表单内容 -->
			<view class="form-content">
				<view class="form-item">
					<text class="label">账号</text>
					<!-- 账号为禁止修改 -->
					<text class="account">{{ profile?.account}}</text>
				</view>
				<view class="form-item">
					<text class="label">昵称</text>
					<input class="input" type="text" placeholder="请填写昵称" v-model="profile.nickname" />
				</view>
				<view class="form-item">
					<text class="label">性别</text>
					<!--<radio-group> 中的选中项发生变化时触发 change 事件，event.detail = {value: 选中项radio的value} -->
					<radio-group @change="onGenderChange">
						<label class="radio">
							<radio value="男" color="#27ba9b" :checked="profile?.gender === '男'" />
							男
						</label>
						<label class="radio">
							<radio value="女" color="#27ba9b" :checked="profile?.gender ==='女'" />
							女
						</label>
					</radio-group>
				</view>
				<view class="form-item">
					<text class="label">生日</text>
					<!-- mode=date 表示时间选择器 2023 1923-->
					<!-- value 改变时触发 change 事件，event.detail = {value: value} -->
					<picker @change="onBirthdayChange" class="picker" mode="date" start="1900-01-01" :end="new Date()"
						:value="profile?.birthday">
						<view v-if="profile?.birthday">{{ profile.birthday }}</view>
						<view class="placeholder" v-else>请选择日期</view>
					</picker>
				</view>
				<view class="form-item">
					<text class="label">城市</text>
					<!-- mode="region" 地区选择器 -->
					<!-- 后端获得的是string ，需要转换成 数组 -->
					<picker @change="onRegionChange" class="picker" mode="region" :value="profile.fullLocation?.split(' ')">
						<view v-if="profile?.fullLocation">{{ profile.fullLocation }}</view>
						<view class="placeholder" v-else>请选择城市</view>
					</picker>
				</view>
				<view class="form-item">
					<text class="label">职业</text>
					<input class="input" type="text" placeholder="请填写职业" v-model="profile!.profession" />
				</view>
			</view>
			<!-- 提交按钮 -->
			<button class="form-button" @tap="saveProfileModify">保 存</button>
		</view>
	</view>
</template>

<style lang="scss">
	page {
		background-color: #f4f4f4;
	}

	.viewport {
		display: flex;
		flex-direction: column;
		height: 100%;
		background-image: url(../../static/images/navigator_bg.png);
		background-size: auto 420rpx;
		background-repeat: no-repeat;
	}

	// 导航栏
	.navbar {
		position: relative;

		.title {
			height: 40px;
			display: flex;
			justify-content: center;
			align-items: center;
			font-size: 16px;
			font-weight: 500;
			color: #fff;
		}

		.back {
			position: absolute;
			height: 40px;
			width: 40px;
			left: 0;
			font-size: 20px;
			color: #fff;
			display: flex;
			justify-content: center;
			align-items: center;
		}

		.icon-left {}
	}

	// 头像
	.avatar {
		text-align: center;
		width: 100%;
		height: 260rpx;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;

		.image {
			width: 160rpx;
			height: 160rpx;
			border-radius: 50%;
			background-color: #eee;
		}

		.text {
			display: block;
			padding-top: 20rpx;
			line-height: 1;
			font-size: 26rpx;
			color: #fff;
		}
	}

	// 表单
	.form {
		background-color: #f4f4f4;

		&-content {
			margin: 20rpx 20rpx 0;
			padding: 0 20rpx;
			border-radius: 10rpx;
			background-color: #fff;
		}

		&-item {
			display: flex;
			height: 96rpx;
			line-height: 46rpx;
			padding: 25rpx 10rpx;
			background-color: #fff;
			font-size: 28rpx;
			border-bottom: 1rpx solid #ddd;

			&:last-child {
				border: none;
			}

			.label {
				width: 180rpx;
				color: #333;
			}

			.account {
				color: #666;
			}

			.input {
				flex: 1;
				display: block;
				height: 46rpx;
			}

			.radio {
				margin-right: 20rpx;
			}

			.picker {
				flex: 1;
			}

			.placeholder {
				color: #808080;
			}
		}

		&-button {
			height: 80rpx;
			text-align: center;
			line-height: 80rpx;
			margin: 30rpx 20rpx;
			color: #fff;
			border-radius: 80rpx;
			font-size: 30rpx;
			background-color: #27ba9b;
		}
	}
</style>