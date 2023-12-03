import type { AddressParams } from '@/types/address'
import type { AddressItem } from '@/types/goods'
import { http } from '@/utils/http'
/**
 * 查询地址列表
 */
export const getMemberAddressListAPI = () => {
	return http<AddressItem[]>({
		method: 'GET',
		url: '/member/address'
	})
}

/**
 * 添加收货地址
 */
export const postMemberAddressAPI = (data : AddressParams) => {
	return http({
		method: 'POST',
		url: '/member/address',
		data
	})
}

/**
 * 根据id查询指定地址信息
 */
export const getMemberAddressAPI = (id : string) => {
	return http<AddressItem>({
		method: 'GET',
		url: `/member/address/${id}`,

	})
}

/**
 * 根据id修改指定地址
 */
export const putMemberAddressbyIdAPI = (id : string, data : AddressParams) => {
	return http({
		method: 'PUT',
		url: `/member/address/${id}`,
		data

	})
}
/**
 * 
 */
export const deleteMemberAddressByIdAPI = (id : string) => {
	return http({
		method: 'DELETE',
		url: `/member/address/${id}`
	})
}