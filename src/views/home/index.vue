<template>
  <div>
    <h1 ref="r2">首页</h1>
    <ul>
      <li class="a bas" id="b" ref="r1" data-t="tt">aa</li>
      <li class="a">aa</li>
      <li class="a">aa</li>
    </ul>
    <div class="father"></div>
    <div class="top" data-t="tt">TOP</div>
  </div>
</template>

<script setup lang="ts">
onMounted(() => {
  let str = "康师傅冰红茶，这是一个跟别的牌子不同的冰红茶";
  const reg = /冰红茶/;
  console.log(reg.exec(str));
});
</script>

<style scoped>
.c {
  color: blue;
}
.bas {
  font-size: 20px;
}
.father {
  width: 800px;
  height: 1500px;
  background-color: skyblue;
  margin: 0 auto;
}
.top {
  width: 50px;
  height: 50px;
  background-color: red;
  position: absolute;
}
</style>
