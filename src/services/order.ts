import { http } from '@/utils/http'
import type { OrderPreResult } from '@/types/order'

/**
 * 填写订单页 - 获取预付款订单信息
 */
export const getMemberOrderPrePayAPI = () => {
	return http<OrderPreResult>({
		method: 'GET',
		url: '/member/order/pre'
	})
}


/**
 * 填写订单-获取立即购买订单
 */
export const getMemberOrderPreNowAPI = (data : {
	skuId : string
	count : string
	addressId ?: string
}) => {
	return http<OrderPreResult>({
		method: 'GET',
		url: '/member/order/pre/now',
		data,
	})
}