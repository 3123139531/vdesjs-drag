<template>
  <div id="monaco" ref="editor"></div>
</template>
<script>
import * as monaco from 'monaco-editor';
export default {
  mounted() {
    const monacoInstance = monaco.editor.create(
      this.$refs.editor,
      {
        value: `console.log("hello,world")`,
        language: "javascript",
      }
    );
    // monacoInstance.dispose(); //使用完成销毁实例
  },
};
</script>
<style scoped>
#monaco {
  height: 100%;
  widows: 100%;
}
</style>