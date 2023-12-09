import type { AddressItem } from '@/types/address'
import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useAddressStore = defineStore('address', () => {
	// 会员选中的地址
	const selectedAddress = ref<AddressItem>()

	const changeSelectedAddress = (val : AddressItem) => {
		selectedAddress.value = val
	}

	return {
		selectedAddress,
		changeSelectedAddress,
	}
})