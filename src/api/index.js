
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


export const reqGoodsListInfo = (searchParmas) => {
  return Ajax({
    url:"/list",
    method:"post",
    data:searchParmas
  })
}

// reqGoodsListInfo({})
//若是不传{} 会显示201

export const reqGoodsDetailInfo = (skuId) => {
  return Ajax({
    url:`/item/${ skuId }`,
    method:'get'
  })
}

export const reqAddOrUpdateShopCart = (skuId,skuNum) =>{
  return Ajax({
    url:`/cart/addToCart/${ skuId }/${ skuNum }`,
    method:'post'
  })
}
//购物车列表信息
export const reqShopCartList = () => {
  return Ajax({
    url:'/cart/cartList',
    method:'get'
  })
}

//修改购物车选中状态
export const reqUpdateCartIsChecked = (skuId,isChecked) => {
  return Ajax({
    url:`/cart/checkCart/${skuId}/${isChecked}`,
    method:'get'
  })
}

//删除购物车
export const reqDeleteCart = (skuId) => {
  return Ajax({
    url:`/cart/deleteCart/${skuId}`,
    method:'delete'
  })
}