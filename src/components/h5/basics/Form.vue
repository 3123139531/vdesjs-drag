<template>
  <el-table
    :data="myItem.tableData"
    style="width: 100%">
    <el-table-column
      v-for="item in myItem.cols"
      prop="date"
      label="列"
      :width="item.span"
      >
    </el-table-column>
  </el-table>
</template>

<script>
export default {
  props: {
    myItem: {},
  },
  data() {
    return {
    }
  }
}
</script>
