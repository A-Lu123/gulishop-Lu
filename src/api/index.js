
import Ajax from '@/ajax/Ajax'
import mockAjax from '@/ajax/mockAjax'

//请求三级分类列表数据函数
///api/product/getBaseCategoryList 请求地址
//GET：请求方式
//参数：无



export const reqCategoryList = () => {
    return Ajax({
      url:'/product/getBaseCategoryList',
      method:'get'
    })
  }
  
  export const reqBannerList = () => {
    return mockAjax({
      url:'/banner',
      method:'get'
    })
  }

 export const reqFloorList = () => {
  return mockAjax({
    url:'/floor',
    method:'get'
  })
}