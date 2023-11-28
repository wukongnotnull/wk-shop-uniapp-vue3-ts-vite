import { http } from '@/utils/http'
import type { PageParams } from "@/types/common";
import type { HotResult } from '@/types/hot';

type HotParams = PageParams & {
	subType ?: string // 子分类id，可选，若不填表示查询所有子分类；
}

export const getHotRecommandAPI = (url : string, data ?: HotParams) => {
	return http<HotResult>({
		method: 'GET',
		url,
		data
	})

}