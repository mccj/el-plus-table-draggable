<template>
  <h1>Demo</h1>
  <el-tabs v-model="demo">
    <el-tab-pane
      :key="key"
      :label="name"
      :name="key"
      lazy
      v-for="{ key, name } of examples"
    >
      <div>
        <h2>{{ name }}</h2>
        <component :is="key" />
        <el-link
          :href="`https://github.com/mizuka-wu/el-table-draggable/blob/master/src/examples/${key}.vue`"
          style="margin: 16px 0"
          type="primary"
        >
          查看源文件
          <i class="el-icon-view el-icon--right"></i>
        </el-link>
        <hr />
      </div>
    </el-tab-pane>
  </el-tabs>
</template>
<script lang="ts">
import {
  defineComponent, //, ref, computed
} from "vue";
// import { useRouter, useRoute } from 'vue-router'

const components: any = {};
const componentNameMap: any = {};

// eslint-disable-next-line no-undef
const examplesContext = require.context("./examples", false, /\.vue$/);

examplesContext.keys().forEach((key) => {
  const componentName = key.replace("./", "").replace(".vue", "");
  const context = examplesContext(key);

  components[componentName] = context.default;
  componentNameMap[componentName] = `${context.name}(${context.nameEn})`;
});

export default defineComponent({
  name: "App",
  components: components,
  setup() {
    // const router = useRouter()
    // const route = useRoute()

    const examples = Object.keys(components).map((key) => ({
      key,
      name: componentNameMap[key],
    }));

    const demo = examples[0].key;
    // const demo = computed({
    //   set(demo) {
    //     const currentDemo = route.query.demo;
    //     if (demo !== currentDemo) {
    //       router.replace({
    //         query: {
    //           // demo,
    //         },
    //       });
    //     }
    //   },
    //   get() {
    //     return route.query.demo || examples[0].key;
    //   },
    // })

    return {
      demo,
      examples,
    };
  },
});
</script>
<style lang="scss">
html,
body,
#app {
  width: 100%;
  height: 100%;
  margin: 0;
  box-sizing: border-box;
}

#app {
  max-width: 1080px;
  padding: 8px;
  margin: auto;
}
</style>
