#首页实现思路

### 一、FeatureView

- 独立组件的封装FeatureView
  - div>a>img



### 二、TabControl

- 独立组件的封装TabControl
  - props -> titles
  - div>根据titles v-for遍历 div>span{{title}}
  - css相关
  - 选中哪一个tab，哪一个tab文字颜色高亮，border-bottom高亮
    - currentIndex控制



### 三、首页商品数据的请求

#### 3.1 设计数据结构

goods: {

pop: page:0/list[0]

new: page:0/list[0]

sell: page:0/list[0]

}



#### 3.2发送数据请求

- 在home.js中封装getHomeGoods函数

- 在Home.vue中，又在methods中封装了getHomeGoods(type)

- 调用getHomeGoods(“pop”)，getHomeGoods(“new”)，getHomeGoods(“sell”)

  - page: 动态获取对应的page

- 获取到数据：res

  - this.goods[type].list.push[...res.data.list]（... ：表示对数组的解构，也可以使用遍历方式一个个push）
  - this.goods[type].page += 1

- goods: {

  pop: page:1/list[30]

  new: page:1/list[30]

  sell: page:1/list[30]

  }



### 四、对商品进行展示

#### 4.1 封装GoodsList.vue组件

- props: goods -> list[30]
- v-for goods -> GoodsListItem[30]
- GoodsListItem(组件) -> GoodsItem(数据)



#### 4.2 封装GoodsListItem组件

- props: goodsItem
- goodsItem取出数据，用正确的div/span/img基本标签进行展示



### 五、对滚动进行重构：Better-Scroll

#### 5.1 在index.html中尝试使用Better-Scroll

- const bscroll = new BScroll (el, { })
- 注意：wrapper -> content -> 很多内容
- 1.监听滚动
  - probetype:0/1/2(手指滚动)/3(滚动)
  - bscroll.n('scroll', (position) => { })
- 2.上拉加载
  - pullUpLoad: true
  - bscroll.on("pullingUp",() => { })
- 3.click: false
  - button可以监听点击
  - div不可以



#### 5.2 在Vue项目中使用Better-Scroll

- 在Profile.vue中进行简单的演示
- 对Better-Scroll进行封装：Scroll.vue
- Home.vue和Scroll.vue之间进行通信
  - Home.vue将probetype设置为3
  - Scroll.vue需要通过$emit()，实时将事件发送给Home.vue



### 六、 回到顶部 BackTop

#### 6.1 对BackTop.vue组件进行封装



#### 6.2 如何监听组件的点击

- 直接监听BackTop组件的点击，但是不可以直接监听
  - 必须添加修饰符.native

- 回到顶部
  - scroll对象，scroll.scrollTo(x, y, time)
  - this.$refs.scroll.scrollTo(0, 0, 500)



#### 6.3 BackTop组件的显示和隐藏

- isShowBackTop：false
- 监听滚动，拿到滚动的位置
  - position.y < -1000 设置为true
  - isShowBackTop：false = position.y < -1000



### 七、解决首页中Better-Scroll可滚动区域的问题

- Better-Scroll再决定有多少区域可以滚动时，是根据scrollerHight属性决定的
  - 而scrollerHight是根据放在Better-Scroll中的content中的子组件的高度决定的
  - 但是我们的首页中，刚开始在计算scrollerHight属性时，没有将图片计算在内
  - 所以计算出来的高度是错误的
  - 后来图片加载进来后，有了新的高度，但是scrollerHight属性并没有进行更新
  - 导致滚动出现bug
- 如何解决
  - 监听每一张图片是否加载完成，只要有一张图片加载完成就进行一次refresh
  - 如何监听图片加载完成
    - 原生JS监听图片：img.onload = function() {}
    - Vue中监听：@load=“方法”
  - 调用scroll的refresh
- 如何将GoodsListItem.vue中的事件传入Home.vue中
  - 因为涉及到非父子组件的通信，所以这里选择了**事件总线（$bus）**
    - Vue.prototype.$bus.$emit = new Vue()
    - this.$bus.$emit("事件名称", 参数)
    - this.bus.on("事件名称", 回调函数(参数))
- 对于refresh非常频繁的问题，进行防抖操作
  - 防抖debounce/节流throttle
  - 防抖函数起作用的过程
    - 如果直接执行refresh，那么refresh函数会被执行30次
    - 可以将refresh函数传入到debounce函数中，生成一个新的函数
    - 之后再调用非常频繁的时候，就是用新生成的函数
    - 而新生成的函数，并不会非常频繁的调用，如果下一次执行来的速度小于delay，那么会将上一次取消

```js
debounce(func, delay) {
      let timer = null;
      return function (...args) {
        if (timer) clearTimeout(timer);
        timer = setTimeout(() => {
          func.apply(this, args);
        }, delay);
      };
    },
```



### 八、上拉加载更多的功能





### 九、TabControl的吸顶效果

#### 9.1 获取到TabControl的offsetTop值

- 必须知道滚动到多少时，有吸顶效果，这时候就需要获取tabControl的offsetTop-

- 但是，如果直接在mounted中获取tabControl的offsetTop，那么值是不正确的（没有将图片加载计算在内）
- 如何获取正确的值
  - 监听HomeSwiper中img的加载完成
  - 加载完成后发出时间，再Home.vue中获取正确的值
  - 补充：
    - 为了不让HomeSwiper多次发出事件
    - 可以使用过一个变量记录进行判断
  - 注意：这里不进行多次调用和前面的debounce的区别



#### 9.2 监听滚动，动态改变tabControl的样式

- 问题：动态改变tabControl的样式会出现两个问题：
  - 问题一、下面的商品内容会突然上移
  - 问题二、tabControl虽然设置了fixed，但是也随着Better-Scroll一起滚出去了
- 其他方案解决停留问题
  - 再最上面多复制了一份PlaceHolderTabControl组件对象，利用它来实现停留效果
  - 当用户滚动到一定位置时，PlaceHolderTabControl显示出来
  - 当用户滚动没有达到一定位置时，PlaceHolderTabControl隐藏起来



### 十、让Home保持原来的状态

#### 10.1 让Home不要随意销毁掉

- keep-alive



#### 10.2  让Home中的内容保持原来的位置

- 离开时，保存一个位置信息saveY
- 进来时，将位置设置为原来保存的位置save Y信息即可
  - 注意：最好回来时，进行一次refresh( )







#详情页实现思路

### 一、点击商品进入详情页

- GoodsListItem点击
- 点击之后获取商品的iid，跳转到详情页，并且传入iid



### 二、解决首页保持位置状态问题

- ```
  deactivated：记录离开时的位置
  ```

- ```
  activated：通过scrollTo函数，设置离开时的位置
  ```



### 三、详情页的导航栏的实现

- 返回按钮：left
- 标题列表的展示：center



### 四、请求详情页的数据

接口：/detail?iid=

接口文档：

接口地址

请求方式：GET/POST

参数：iid

返回数据：columns



#### 五、轮播图的实现

- Swiper/SwiperItem



### 六、商品基本信息的展示

- 数据来自四面八方
- 对数据进行汇总：一个对象中
- 再将对象传入到子组件中



### 七、店铺信息的展示



### 八、商品图片的展示



### 九、参数信息的展示

- 遍历问题



### 十、评论信息的展示

- 时间格式化函数（可以百度）
- 服务器返回的时间戳 -> date -> 格式化
- yyyy-MM-dd hh:mm:ss



### 十一、推荐数据的展示

- 请求推荐数据
- GoodList展示数据



### 十二、mixin的使用（高级）

- 创建一个混入的对象：const mixin = {}
- 在组件对象中： mixins:[mixin ]



### 十三、两个bug处理

- 首页的tabControl的bug
- 详情页面滚动的bug



### 十四、标题和内容的联动效果

#### 14.1 点击标题，滚动到对应的板块

- 在Detail中监听标题的点击，获取index值
- 滚动到对应的主题：
  - 获取所有主题的offsetTop
  - 问题：在哪里才能获取到正确的offsetTop
    - created里不行，没有元素
    - mounted也不行，数据没有获取到
    - 获取数据的回调函数里也不行，Dom还没有完全渲染
    - $nextTIck也不行，图片还没有渲染
    - 图片加载完成的函数内，可以√

#### 14.2 内容滚动显示正确的标题

普通做法：

```
for (let i = 0; i < length; i++) {
  if (i !== this.currentIndex) {
	if ((-position.y >= this.navBarLinkerTo[i] && -position.y < this.navBarLinkerTo[i + 1]) || (i == length        - 1 && -position.y >= this.navBarLinkerTo[i])) 
	{
	    this.currentIndex = i;
	    this.$refs.navBar.currentIndex = this.currentIndex;
	}
  }
}
条件成立：this.currentIndex = i
if条件一：防止赋值的过程过于频繁
if条件二：
	条件1.判断位置参数是否处于要求的区间（最后一个会越界）
	条件2.判断最后一个是否大于最后一个参数区间
```

另一种思路：

hack做法：在区间数组最后添加一个最大的数Number.Max_Value，在执行以下判断

```
for (let i = 0; i < length - 1; i++) {
  if (i !== this.currentIndex) {
    if (-position.y >= nArr[i] && -position.y < nArr[i + 1]) {
      this.currentIndex = i;
      this.$refs.navBar.currentIndex = this.currentIndex;
    }
  }
}
```



### 十五、底部工具栏的封装





### 十六、详情页的回到顶部backTop

- home.vue 和detail.vue 回到顶部：抽取到混入mixin.js中



### 十七、点击加入购物车

#### 17.1 监听加入购物车按钮的点击，并且获取商品信息

- 监听
- 获取商品信息：iid/price/image/title/desc



#### 17.2 将商品添加到Vuex中

- 安装Vuex
- 配置Vuex
- 定义mutations，将商品添加到state.cartItems中
- 重构代码：
  - 将mutations中的代码抽取actions中（定义两个mutations）
  - 将mutations/actions单独抽取到文件中（可以做，我没做）



### 十八、购物车的展示

#### 18.1 导航栏的展示



#### 18.2 购物车商品的展示

- CartList -> Scroll(样式问题)
- CartList中遍历 封装了CheckBox



#### 18.3 商品的选中和取消选中

- 修改模型对象，来改变选中状态



#### 18.4 底部工具栏汇总制作

- 全选按钮和逻辑

  - 普通按钮改变全选按钮状态

    - 方法一：在computed中通过Arr.filter()筛选器返回一个checked属性全为true的数组，判断该数组的长度与CartList总长度是否相等，长度相同时，全选按钮为true，否则为false

    - ```
      ischecked() {
        let checkedLength = this.$store.state.cartItems.filter((item) => item.checked === true).length;
        return checkedLength === this.$store.state.cartItems.length;
      }
      ```
      - 方法二：通过filter筛选出checked为false的数组，当该数组有长度时，表示有checked为false，则全选按钮为false，当长度为0时，表示所有checked为true，则全选按钮为true（**需要添加判断，当购物车内没有商品时，全选按钮应当为false**）

    - ~~~
      ischeckedAll() {
        return !(this.$store.state.cartItems.filter((item) => !item.checked).length);
      },
      ~~~

    - 方法三：前两种方法都需要将整个数组遍历完成，效率不是很高，从方法二中可以提取思想，只要找到一个checked为false的元素，那么就可以判断出全选按钮为false，所以可以用find()方法（**需要添加判断，当购物车内没有商品时，全选按钮应当为false**）

    - ~~~
      ischeckedAll() {
        return !(this.$store.state.cartItems.find((item) => !item.checked));
      },
      ~~~

      

  - 全选按钮控制所有普通按钮

    - 当全选按钮点击事件触发时，获取当前全选按钮的状态，遍历将所有的商品checked值改变为当前状态的取反值（因为普通按钮影响全选按钮，所以全选按钮也会改变）

    - ~~~
      checkedAll() {
        let newState = !this.ischecked;
        for (let item of this.$store.state.cartItems) {
          item.checked = newState;
        }
      }
      ~~~

- 计算总价

- 结算



### 十九、添加购物车弹窗

#### 19.1 Vuex的补充

- Actions可以返回一个Promise
- mapActions的映射关系



空间换时间（执行性能/写代码时间）



1.联动效果

2.底部工具栏，点击加入购物车

3.回到顶部









- 难点：
  - 1、代码如何组织
  - 2、业务逻辑（不要立即动手）
  - 3、自己留的莫名的bug











