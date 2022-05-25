<template>
  <div>
    <!-- <ElTableDraggable v-on="$listeners">
      <el-table :data="list" row-key="id">
        <el-table-column
          :key="column.key"
          :label="column.key"
          :prop="column.key"
          v-for="column of columns"
        ></el-table-column>
      </el-table>
    </ElTableDraggable>
    <ListViewer :value="list" />
    <CodeViewer :code="code" language="html"></CodeViewer> -->
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, computed } from 'vue'

export const name = "简单列表拖拽"
export const nameEn = 'Base Draggable'
// import { createData, columns } from '../utils/createTable'
export default ({
  //   data() {
  //     return {
  //       columns,
  //       list: createData(),
  //       code: `<ElTableDraggable>
  //     <el-table row-key="必填" :data="list">
  //     </el-table>
  // </ElTableDraggable>`
  //     }
  //   }
})
</script>