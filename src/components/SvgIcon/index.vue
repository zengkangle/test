<template>
  <div>11</div>
  <!-- svg:图标外层容器节点，内部需要与use标签结合使用 -->
  <svg :style="{ width, height }">
    <!-- href执行用哪一个图标，属性值务必#icon-图标名字 -->
    <!-- use标签fill属性可以设置图标的颜色 -->
    <use :href="prefix + name" :fill="color"></use>
  </svg>
</template>

<script setup lang="ts">
//接收父组件传递过来的参数
defineProps({
  //href属性值的前缀
  prefix: {
    type: String,
    default: "#icon-",
  },
  //图标名字
  name: String,
  //图标颜色
  color: {
    type: String,
    default: "",
  },
  //图标宽度
  width: {
    type: String,
    default: "16px",
  },
  //图标高度
  height: {
    type: String,
    default: "16px",
  },
});
</script>

<style scoped></style>
