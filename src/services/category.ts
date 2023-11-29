import type { CategoryTopItem } from "@/types/category";
import { http } from "@/utils/http";

/**
 * 分类列表 - 一级分类列表
 * */
export const getCategoryTopAPI = () => {
	return http<CategoryTopItem[]>({
		method: 'GET',
		url: '/category/top'
	})
}