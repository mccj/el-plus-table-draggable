<template>
  <div>
    <ElTableDraggable handle=".el-icon-rank" v-on="$attrs">
      <el-table :data="list" row-key="id">
        <el-table-column width="30">
          <i class="el-icon-rank" />
        </el-table-column>
        <el-table-column :key="column.key" :label="column.key" :prop="column.key" v-for="column of columns">
        </el-table-column>
      </el-table>
    </ElTableDraggable>
    <ListViewer :value="list" />
    <CodeViewer :value="code" />
  </div>
</template>

<script lang="ts">
export const name = "Handle可拖拽"
export const nameEn = 'Handle'
import { createData, columns } from '../utils/createTable'
export default {
  setup() {
    return {
      columns,
      list: createData(),
      code: `<ElTableDraggable handle=".el-icon-rank">
    <el-table row-key="必填" :data="list">
      <el-table-column>
        <i class="el-icon-rank" />
      </el-table-column>
    </el-table>
</ElTableDraggable>`
    }
  }
}
</script>