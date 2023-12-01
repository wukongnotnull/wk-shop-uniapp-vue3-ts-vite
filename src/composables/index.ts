import type { WkGuessInstance } from '@/types/components'
import { ref } from 'vue'

/**
 * 猜你喜欢组合式函数
 */

export const useGuessList = () => {
	// 获得 WkGuess 组件的实例
	const guessRef = ref<WkGuessInstance>()
	// 滚动触底时刻执行函数
	const onScrolltolower = () => {
		console.log("触底啦。。。")
		guessRef.value?.getMore()
	}
	return {
		guessRef, onScrolltolower
	}
}