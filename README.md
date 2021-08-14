# MobileInternet-second-hand
### APP小组仓库文档分工说明

## 程序设计分工

#### 苏杰

页面设计：

​	my_product（我的发布/交易中/买到的/卖出的页面）

组件设计：

​	confirm_button（发货收货按钮），hm-card（个人中心产品展示卡片）

接口设计：

​	7、获取用户交易中的商品：GET /api/userproducts12/:uid

​	8、获取用户交易中的商品数量：GET /api/userproducts12Num/:uid

​	9、获取买家买到的商品：GET /api/buyerproducts3/:uid

​	10、获取买家买到的商品数量：GET /api/buyerproducts3Num/:uid

​	11、获取卖家卖出的商品：GET /api/sellerproducts3/:uid

​	12、获取卖家卖出的商品数量：GET /api/sellerproducts3Num/:uid

数据库设计：

​	purchase（产品用户关系表）

#### 秦盛

页面设计：

​	regist（注册页）、issue（发布产品页面）

组件设计：

​	idf-button（发送验证码按钮），pro-card（首页产品展示卡片）

数据库设计：

​	product（产品实体表）

接口设计：

​	1、修改产品状态：PUT /api/product/:pid/:status/:uid

​	2、发布商品：POST /api/product

​	3、获取所有发布中商品：GET /api/products

​	4、获取指定产品详情：GET /api/product/:pid

​	5、获取指定分类商品：GET /api/products/:cid

​	6、获取卖家已发布商品：GET /api/products0/:uid

#### 陈勃

页面设计：

​	my（个人中心页面）

#### 陈福利

页面设计：

​	home（首页），login（登录页）

#### 郑洪飞

页面设计：

​	home_detail（产品详情页）

#### 乐见存

页面设计：

​	classify_detail（分类页）



## 课程设计论文

苏杰：

​	课程设计：5.1~5.3 

​	汇总组员的日常文档及程序设计的汇总，协调组员分工。

秦盛：

​	课程设计：1.1~1.5，3.2~3.5，4.1~4.3 

​	对课程设计的一个整体结构进行具体实现与跟进，初稿敲定及格式内容检查，论文定稿及打印。

陈勃：

​	课程设计：2.1~2.2

陈福利：

​	课程设计：摘要，3.1

郑洪飞：

​	课程设计：6.1~6.3

乐见存：

​	课程设计：7.1~7.2

**除苏杰，秦盛外的组员拟定商讨程序设计的大体框架，初稿内容及论文文献的查找引用。**

## 其他

小组最初分工，和日常合作部分截图在***杂项图片***文件夹。

