import type {BannerItem, GuessItem, HotItem} from '@/types/home'
import type { CategoryItem } from '@/types/home'
import type {PageParams, PageResult} from '@/types/common'
import { http } from '@/utils/http'
// getHomeBannerAPI
export const getHomeBannerAPI = (distributionSite = 1) => {
	return http<BannerItem[]>(
		{
			method: 'GET',
			url: '/home/banner',
			data: {
				distributionSite
			}
		})

}
// getHomeCategoryAPI
export const getHomeCategoryAPI= ()=> {

	return http<CategoryItem[]>({
		method: 'GET',
		url: '/home/category/mutli'

	})
}
// getHomeHotAPI
export const getHomeHotAPI = ()=> {
	return http<HotItem[]>({
		method: 'GET',
		url: '/home/hot/mutli'
	})
}

// getHomeGoodsGuessLikeAPI
export const getHomeGoodsGuessLikeAPI = (data?:PageParams)=>{
	return http<PageResult<GuessItem>>({
		method: 'GET',
		url: '/home/goods/guessLike',
		data
	})
}
