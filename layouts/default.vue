<template>
  <el-container class="layout-default">
    <el-header height="197px">
      <my-header/>
    </el-header>
    <el-main>
      <nuxt/>
    </el-main>
    <el-footer height="100%">
      <my-footer/>
    </el-footer>
  </el-container>
</template>
<script>
import MyHeader from "@/components/common/header/index.vue"
import MyFooter from "@/components/common/footer/index.vue"
export default {
  components: {
    MyHeader,
    MyFooter
  }
};
</script>

