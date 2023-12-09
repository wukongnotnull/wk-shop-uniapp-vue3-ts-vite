import type { CartItem } from '@/types/cart'
import { http } from '@/utils/http'

/**
 * 加入购物车
 */
export const postMemberCartAPI = (data : { skuId : string, count : number }) => {
	return http({
		method: 'POST',
		url: '/member/cart',
		data
	})
}

/**
 * 获得购物车列表
 */
export const getMemberCartAPI = () => {
	return http<CartItem[]>({
		method: 'GET',
		url: '/member/cart'
	})
}

/**
 * 删除/清空 购物车
 */
export const deleteMemberCartAPI = (data : { ids : string[] }) => {
	return http({
		method: 'DELETE',
		url: '/member/cart',
		data
	})
}

/**
 * 修改购物车单品（数量和选中状态）
 */
export const putMemberCartBySkuIdAPI = (
	skuId : string,
	data : { selected ?: boolean, count ?: number }
) => {
	return http({
		method: 'PUT',
		url: `/member/cart/${skuId}`,
		data
	})
}

/**
 * 购物车全选/取消全选
 */
export const putMemberCartAllSelectedAPi = (data : { selected : boolean }) => {
	return http({
		method: 'PUT',
		url: '/member/cart/selected',
		data
	})
}