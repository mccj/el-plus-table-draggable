<template>
  <div>
    <ElTableDraggable v-bind="$attrs">
      <el-table :data="list" row-key="id">
        <el-table-column :key="column.key" :label="column.key" :prop="column.key" v-for="column of columns">
        </el-table-column>
      </el-table>
    </ElTableDraggable>
    <ListViewer :value="list" />
    <CodeViewer :value="code" />
  </div>
</template>

<script lang="ts">
export const name = "简单列表拖拽";
export const nameEn = "Base Draggable";
import { createData, columns } from '../utils/createTable'
export default {
  name: "exammple-base",
  setup() {
    return {
      columns,
      list: createData(),
      code: `<ElTableDraggable>
    <el-table row-key="必填" :data="list">
    </el-table>
</ElTableDraggable>`,
    };
  },
};
</script>