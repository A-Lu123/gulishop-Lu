
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

//注册新用户
export const reqUserRegister = (userInfo) => {
  return Ajax({
    url:'/user/passport/register',
    method:'post',
    data:userInfo
  })
}

//登录用户
export const reqUserLogin = (userInfo) => {
  return Ajax({
    url:'/user/passport/login',
    method:'post',
    data:userInfo
  })
}

//推出登录
export const reqUserLogout = () => {
  return Ajax({
    url:'/user/passport/logout',
    method:'GET'
  })
}

//订单交易
export const reqTradeInfo = () => {
  return Ajax({
    url:'/order/auth/trade',
    method:'get'
  })
}

//提交订单
export const reqSubmitOrder = (tradeNo,tradeInfo) => {
  return Ajax({
    url:`/order/auth/submitOrder?tradeNo=${tradeNo}`,
    method:'post',
    data:tradeInfo
  })
}

//获取支付信息
export const reqPayInfo = (orderId) => {
  return Ajax({
    url:`/payment/weixin/createNative/${orderId}`,
    method:'get'
  })
}