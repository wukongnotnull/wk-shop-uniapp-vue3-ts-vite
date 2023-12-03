<script setup lang="ts">
	import { getMemberAddressAPI, postMemberAddressAPI, putMemberAddressbyIdAPI } from '@/services/address';
	import { onLoad } from '@dcloudio/uni-app';
	import { ref } from 'vue'
	// 动态设置页面标题
	const query = defineProps<{
		id ?: string
	}>()

	uni.setNavigationBarTitle({
		title: query.id ? '修改地址' : '新建地址'
	})

	// 表单数据
	const form = ref({
		receiver: '', // 收货人
		contact: '', // 联系方式
		fullLocation: '', // 省市区(前端展示)
		provinceCode: '', // 省份编码(后端参数)
		cityCode: '', // 城市编码(后端参数)
		countyCode: '', // 区/县编码(后端参数)
		address: '', // 详细地址
		isDefault: 0, // 默认地址，1为是，0为否
	})
	// 地区选择器
	const onRegionChange = (event : any) => {
		console.log("onRegionChange-->event.detail:", event.detail)
		// event.detail.value 数组为地区值
		form.value.fullLocation = event.detail.value.join(' ')
		// event.detail.code 数组为地区编码
		form.value.provinceCode = event.detail.code[0], // 省份编码(后端参数)
			form.value.cityCode = event.detail.code[1] // 城市编码(后端参数)
		form.value.countyCode = event.detail.code[2] // 区/县编码(后端参数)
	}
	// 是否默认地址开关选择器
	const onIsDefaultChange = (event : any) => {
		// checked 改变时触发 change 事件，event.detail={ value:checked}	
		console.log("onIsDefaultChange-->event.detail:", event.detail)
		form.value.isDefault = event.detail.value ? 1 : 0
	}

	// 创建组件实例
	const formRef = ref()
	// 定义校验规则
	const rules = {
		receiver: {
			rules: [{ required: true, errorMessage: '请输入收货人姓名' }],
		},
		contact: {
			rules: [
				{ required: true, errorMessage: '请输入联系方式' },
				{ pattern: /^1[3-9]\d{9}$/, errorMessage: '手机号格式不正确' },
			],
		},
		fullLocation: {
			rules: [{ required: true, errorMessage: '请选择所在地区' }],
		},
		address: {
			rules: [{ required: true, errorMessage: '请选择详细地址' }],
		},
	}

	// 添加新的收货地址或者修改提交
	const onSubmit = async () => {
		try {
			// 对表单内容进行前端数据校验
			console.log("begin -- validate()");
			await formRef?.value?.validate()
			console.log("end -- validate()");

		} catch (error) {
			return uni.showToast({
				icon: 'error',
				title: "请确认数据格式"
			})

		}
		if (query.id) {
			// 修改保存
			const res = await putMemberAddressbyIdAPI(query.id, form.value)
			console.log("putMemberAddressbyIdAPI-->res:", res);
		} else {
			// 新建保存
			const res = await postMemberAddressAPI(form.value)
			console.log("postMemberAddress-->res:", res)
			// res.result.id 为新建地址 id
		}
		uni.showToast({
			icon: "success",
			title: query.id ? "修改成功" : "添加成功"
		})
		setTimeout(() => {
			uni.navigateBack()
		}, 500)

	}

	// -------分割线-------
	// 修改页初始加载，执行查询指定地址详情
	// 如果路径中存在id，使用 onLoad() 自动调用后端api
	const showAddressFormPage = async () => {

		if (query.id) { // 若路径中存在 id
			// 根据id 从后端查询指定地址详情，并回显在地址表单上
			const res = await getMemberAddressAPI(query.id!)
			console.log("showAddressFormPage->res:", res)
			// 优化form.value = res.result
			Object.assign(form.value, res.result)

		}
		// 若路径中不存在id， 什么代码也不执行

	}
	onLoad(() => {
		showAddressFormPage()
	}
	)

	// -----分割线----
</script>

<template>
	<view class="content">
		<!-- 表单内容 -->
		<uni-forms :rules="rules" :model="form" ref="formRef">
			<uni-forms-item name="receiver" class="form-item">
				<text class="label">收货人</text>
				<input class="input" placeholder="请填写收货人姓名" v-model="form.receiver" />
			</uni-forms-item>
			<uni-forms-item name="contact" class="form-item">
				<text class="label">手机号码</text>
				<input class="input" placeholder="请填写收货人手机号码" v-model="form.contact" />
			</uni-forms-item>
			<uni-forms-item name="fullLocation" class="form-item">
				<text class="label">所在地区</text>
				<picker @change="onRegionChange" class="picker" mode="region" :value="form.fullLocation">
					<view v-if="form.fullLocation">{{ form.fullLocation }}</view>
					<view v-else class="placeholder">请选择省/市/区(县)</view>
				</picker>
			</uni-forms-item>
			<uni-forms-item name="address" class="form-item">
				<text class="label">详细地址</text>
				<input class="input" placeholder="街道、楼牌号等信息" v-model="form.address" />
			</uni-forms-item>
			<uni-forms-item name="isDefault" class="form-item">
				<label class="label">设为默认地址</label>
				<!-- checked 改变时触发 change 事件，event.detail={ value:checked}	 -->
				<switch @change="onIsDefaultChange" class="switch" color="#27ba9b" :checked="form.isDefault" />
			</uni-forms-item>
		</uni-forms>
	</view>
	<!-- 提交按钮 -->
	<button class="button" @tap="onSubmit">保存并使用</button>
</template>

<style lang="scss">
	page {
		background-color: #f4f4f4;
	}

	.content {
		margin: 20rpx 20rpx 0;
		padding: 0 20rpx;
		border-radius: 10rpx;
		background-color: #fff;

		.form-item,
		.uni-forms-item {
			display: flex;
			align-items: center;
			min-height: 96rpx;
			padding: 25rpx 10rpx 40rpx;
			background-color: #fff;
			font-size: 28rpx;
			border-bottom: 1rpx solid #ddd;
			position: relative;
			margin-bottom: 0;

			// 调整 uni-forms 样式
			.uni-forms-item__content {
				display: flex;
			}

			.uni-forms-item__error {
				margin-left: 200rpx;
			}

			&:last-child {
				border: none;
			}

			.label {
				width: 200rpx;
				color: #333;
			}

			.input {
				flex: 1;
				display: block;
				height: 46rpx;
			}

			.switch {
				position: absolute;
				right: -20rpx;
				transform: scale(0.8);
			}

			.picker {
				flex: 1;
			}

			.placeholder {
				color: #808080;
			}
		}
	}

	.button {
		height: 80rpx;
		margin: 30rpx 20rpx;
		color: #fff;
		border-radius: 80rpx;
		font-size: 30rpx;
		background-color: #27ba9b;
	}
</style>