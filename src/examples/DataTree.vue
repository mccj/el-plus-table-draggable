<template>
  <div>
    <ElTableDraggable v-on="$attrs">
      <el-table :data="list" row-key="index" default-expand-all>
        <el-table-column :key="column.key" :label="column.key" :prop="column.key" v-for="column of columns">
        </el-table-column>
      </el-table>
    </ElTableDraggable>
    <ListViewer :value="list" />
    <CodeViewer :value="code" />
  </div>
</template>

<script lang="ts">
export const name = "树状表格拖拽";
export const nameEn = "Tree Table Draggable";
import { createData, columns } from "../utils/createTable";
export default {
  setup() {
    return {
      columns,
      list: createData(2).map((item) => ({
        index: item.index + 1,
        children: createData(2).map((data) => ({
          index: `${item.index + 1}-${data.index + 1}`,
          children: createData(4).map((subData) => ({
            index: `${item.index + 1}-${data.index + 1}-${subData.index + 1}`,
          })),
        })),
      })),
      code: `<ElTableDraggable>
    <el-table row-key="必填" :data="list">
    </el-table>
</ElTableDraggable>`,
    };
  },
};
</script>
