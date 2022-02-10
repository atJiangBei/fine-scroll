<template>
  <div class="source-code">
    <div style="overflow:auto;">
      <source-code></source-code>
    </div>
  </div>
</template>
<script>
import SourceCode from './source_code.md';
export default {
  components: {
    SourceCode,
  },
};
</script>
<style lang="less">
.source-code {
  background-color: #fdf6e3;
  padding: 10px;
  overflow: auto;
}

.hljs-name {
  color: #22863a;
}

.hljs-attr {
  color: #6f42c1;
}

.hljs-keyword {
  color: red;
}

.hljs-string {
  color: #032f62;
}
</style>
