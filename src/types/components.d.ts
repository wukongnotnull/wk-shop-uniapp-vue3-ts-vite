// src/types/components.d.ts
import WkSwiper from "../components/WkSwiper.vue"
import WkGuess from "../components/WkGuess.vue"


declare module 'vue' {
	export interface GlobalComponents {
		WkSwiper : typeof WkSwiper,
		WkGuess : typeof WkGuess,
	}
}

// 组件实例类型
export type WkGuessInstance = InstanceType<typeof WkGuess>