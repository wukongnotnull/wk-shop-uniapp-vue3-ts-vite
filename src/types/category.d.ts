import type {GoodsItem} from "@/types/common";


export  type CategoryChildItem = {
    goods: GoodsItem[],
    id: string,
    name:string,
    picture:string
}


export type CategoryTopItem = {
    children: CategoryChildItem[],
    id:string,
    imageBanners: string[],
    name: string,
    picture: string
}
