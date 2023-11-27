import type { PageResult,GoodsItem} from "@/types/common";

/** 热门推荐- 子类型选项*/
export type SubTypeItem = {
    id: string,
    title: string,
    goodsItems: PageResult<GoodsItem>
}

/** 热门推荐*/
export type HotResult={
    id: string
    bannerPicture:string
    title:string
    subTypes: SubTypeItem[]
}
