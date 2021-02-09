import Toast from "./Toast"

const toastObject = {};

toastObject.install = function (Vue) {
  // 1.创建一个组件构造器
  const toastConstructor = Vue.extend(Toast);
  // 2.通过new的方式构造一个组件对象
  const toast = new toastConstructor();
  // 3.将构造的组件对象挂载到某一个元素上
  toast.$mount(document.createElement("div"));
  // 4.将组件模板添加到body中
  document.body.appendChild(toast.$el);
  // 5.将组件对象挂载到Vue原型上
  Vue.prototype.$toast = toast;
}

export default toastObject;