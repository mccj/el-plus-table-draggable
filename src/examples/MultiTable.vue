<template>
  <div>
    <el-row :gutter="20">
      <el-col :key="index" :span="24 / lists.length" v-for="(list, index) of lists">
        <ElTableDraggable group="multiTable" v-on="$attrs">
          <el-table :data="list" row-key="id">
            <el-table-column :key="column.key" :label="column.key" :prop="column.key" v-for="column of columns">
            </el-table-column>
          </el-table>
        </ElTableDraggable>
        <ListViewer :value="list" />
      </el-col>
    </el-row>
    <CodeViewer :value="code" />
  </div>
</template>

<script lang="ts">
export const name = "多表格相互拖拽"
export const nameEn = 'Multi Table'
import { createData, columns } from '../utils/createTable'
export default {
  setup() {
    return {
      columns,
      lists: [createData(6), []],
      code: `
<!-- 列表 -->            
<ElTableDraggable group="multiTable">
  <el-table>
  </el-table>
</ElTableDraggable>

<!-- 另一个 -->
<ElTableDraggable group="multiTable">
  <el-table>
  </el-table>
</ElTableDraggable>            
            `
    }
  }
}
</script>