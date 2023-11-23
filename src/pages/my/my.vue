<script setup lang="ts">
import { useMemberStore } from '@/stores'
import {http} from '@/utils/http'

const memberStore = useMemberStore()
const setMember = () => {
	memberStore.setProfile({
		nickname: "我是悟空非空也",
		token: '123'
	})
  console.log('输出信息为：', memberStore.profile)
}

// 测试请求数据
const getBanner = async() => {
	const res = await http({
		method: 'GET',
		url:'/home/banner'
	})
	console.log('响应结果为：',res)
	return res
	
}
</script>
<template>
  <view>
    <button @tap="setMember">登录用户</button>
    <button @tap="getBanner">查询首页banner信息</button>
  </view>
</template>

<style></style>
