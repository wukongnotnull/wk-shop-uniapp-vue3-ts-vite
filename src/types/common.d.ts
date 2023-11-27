/*
*  通用分页结果类型
* */

export type PageResult<T> = {
    items: T[], // 记录数据集合
    counts: number, // 总条数
    page: number, // 当前页码
    pages: number, // 总页数
    pageSize: number // 页容量

}


/** 通用分页参数类型 */
export type PageParams = {
    /** 页码：默认值为 1 */
    page?: number
    /** 页大小：默认值为 10 */
    pageSize?: number
}

/**
 * 通用商品类型
 * */
export type GoodsItem = {
    desc: string // 商品描述
    discount: number // 商品折扣
    id:string // id
    name: string
    orderNum: number // 订单中商品数量
    picture: string
    price: number
}


