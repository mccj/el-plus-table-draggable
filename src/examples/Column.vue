<template>
  <div>
    <ElTableDraggable v-on="$attrs" column v-model="columns">
      <el-table border :data="list" row-key="id">
        <el-table-column :key="column.key" :label="column.key" :prop="column.key" :width="column.width"
          v-for="column of columns"></el-table-column>
      </el-table>
    </ElTableDraggable>
    <ListViewer :value="columns" />
    <CodeViewer :value="code" />
  </div>
</template>

<script lang="ts">
export const name = "列拖拽";
export const nameEn = "Drag Column";
import { createData, columns } from "../utils/createTable";
export default {
  setup() {
    return {
      columns,
      list: createData(),
      code: `<ElTableDraggable column>
    <el-table row-key="必填" :data="list">
    </el-table>
</ElTableDraggable>`,
    };
  },
};
</script>
