<template>
  <div class="readme-view">
    <div style="overflow:auto;">
      <instructions></instructions>
    </div>
    <div>
      <a href="#/demo">demo</a>,
      <a href="#/source_code">demo源代码</a>
    </div>
  </div>
</template>
<script>
import Instructions from './instructions.md';
export default {
  components: {
    Instructions,
  },
};
</script>
<style lang="less">
.readme-view {
  padding: 10px;
}
table {
  width: 100%;
  text-align: center;
  border: 1px solid #f0f0f0;
  border-collapse: collapse;
  margin-top: 10px;
  margin-bottom: 20px;
}
thead {
  th {
    padding: 15px 0;
  }
  background: #f5f7f9;
}
tbody {
  font-size: 13px;
  td {
    padding: 10px 0;
  }
}
</style>
