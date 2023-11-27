// 首页-前台轮播图数据类型
import type {GoodsItem} from "@/types/common";

export type BannerItem = {
    hrefUrl: string, // 跳转链接
    id: string, // banner 图id
    imgUrl: string, // 图片来源
    type: number // 图片类型
}
// 首页-前台类目数据类型
export type CategoryItem = {
    icon: string, // 图标路径
    id: string, // 分类id
    name: string // 分类名称
}

// 首页- 前台热门推荐数据类型
export type HotItem = {
    alt: string,// 描述说明
    id: string,// id
    pictures: string[],// 图片路径集合
    target: string, // 跳转url
    title: string, // 标题
    type: string // 推荐类型
}

// 猜你喜欢- 商品类型
/*export type GuessItem = {
    desc: string, //  商品描述
    id: string, // 商品id
    discount: number,// 商品折扣
    name: string, // 商品名称
    orderNum: number ,// 已下订单商品数量
    picture: string,// 商品图片
    price: number // 商品价格
}*/

// GuessItem 和 GoodsItem 类型相同
export type GuessItem = GoodsItem
