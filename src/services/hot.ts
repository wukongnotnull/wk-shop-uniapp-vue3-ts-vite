import {http} from '@/utils/http'
import type {PageParams} from "@/types/common";

type HotParams = PageParams & {
    subType: string // 推荐集合的子推荐项类型
}

export const getHotRecommandAPI = (url: string, data?: HotParams) => {
    return http({
        method:'GET',
        url,
        data
    })

}
