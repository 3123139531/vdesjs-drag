<template>
  <el-row class="pcToolHeader" style="line-height: 30px">
    <el-col>
      <el-link @click="deleteAll"
        >清空画布<i class="el-icon-delete"></i>
      </el-link>
      <el-link @click="generateJson"
        >生成JSON<i class="el-icon-document"></i>
      </el-link>
      <el-link @click="generateCode"
        >生成代码<i class="el-icon-document"></i>
      </el-link>
      <el-link @click="preview">预览<i class="el-icon-view"></i> </el-link>
    </el-col>

    <el-dialog title="" :visible.sync="jsonDialogVisible">
      <codemirror
        style="text-align: left !important"
        :value="curJsonCode"
        :options="cmOptions"
        class="code"
      >
      </codemirror>
      <span slot="footer" class="dialog-footer">
        <el-button @click="jsonDialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="copyJson" class="copyJson"
          >复制代码</el-button
        >
      </span>
    </el-dialog>

    <el-dialog title="" :visible.sync="codeDialogVisible">
      <el-tabs v-model="activeName">
        <el-tab-pane label="html代码" name="htmlCode">
          <codemirror
            style="text-align: left !important"
            :value="curHtmlCode"
            :options="cmOptions"
            class="code"
          >
          </codemirror>
        </el-tab-pane>
      </el-tabs>
      <span slot="footer" class="dialog-footer">
        <el-button @click="codeDialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="copyCode" class="copyCode"
          >复制代码</el-button
        >
        <el-input placeholder="输入要保存的名称" v-model="fileName" style="width: 180px">
            <template slot="append">.html</template>
        </el-input>
         <el-button type="primary" @click="downloadHtmlCode">下载</el-button>
      </span>
    </el-dialog>
  </el-row>
</template>
<script>
var beautify_html = require("js-beautify").html;
import Clipboard from "clipboard";
import { codemirror } from "vue-codemirror";
import "codemirror/theme/ambiance-mobile.css"; // 这里引入的是主题样式，根据设置的theme的主题引入，一定要引入！！
import "codemirror/mode/htmlmixed/htmlmixed"; // 这里引入的模式的js，根据设置的mode引入，一定要引入！！
import handlebars from "@/handlebars/pcIndex.js";
import { saveAs } from "file-saver";

import curList from "@/mixins/curList";

export default {
  mixins: [curList],
  data() {
    return {
      fileName: "test",
      activeName: "htmlCode",
      curHtmlCode: "",
      cmOptions: {
        value: "",
        mode: "htmlmixed",
        theme: "ambiance-mobile",
        lineNumbers: true,
      },
      jsonDialogVisible: false,
      codeDialogVisible: false,
      isFullScreen: true,
    };
  },
  computed: {
    curJsonCode() {
      return JSON.stringify(this.curList, null, "\t");
    },
  },

  components: {
    codemirror,
  },
  methods: {
    deleteAll() {
      this.$confirm("确定清除画布?", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning",
      })
        .then(() => {
          this.$store.commit("deleteAll");

          //重置globalId
          this.$store.commit("globalIdSet", 0);
        })
        .catch(() => {
          console.log("取消");
        });
    },
    generateJson() {
      this.jsonDialogVisible = true;
    },
    generateCode() {
      this.codeDialogVisible = true;
      var curHtmlCode = handlebars.generateHtmlCode(this.curList);
      curHtmlCode = beautify_html(curHtmlCode);
      this.curHtmlCode = curHtmlCode;

      
    },
    downloadHtmlCode() {
      var file = new File([this.curHtmlCode], this.fileName + ".html", {
        type: "text/plain;charset=utf-8",
      });
      saveAs(file);
    },
    copyJson() {
      console.log("复制代码");
      this.jsonDialogVisible = false;
      let that = this;
      let clipboard = new Clipboard(".copyJson", {
        text: function () {
          return that.curJsonCode;
        },
      });
      clipboard.on("success", (e) => {
        that.$message({
          showClose: true,
          message: "复制成功",
          duration: 1000,
        });
        clipboard.destroy();
      });
      clipboard.on("error", (e) => {
        that.$message({
          showClose: true,
          message: "复制失败",
          duration: 1000,
        });
        clipboard.destroy();
      });
    },
    copyCode() {
      if (this.activeName == "htmlCode") {
        // 复制html代码
        this.codeDialogVisible = false;
        let that = this;
        let clipboard = new Clipboard(".copyCode", {
          text: function () {
            return that.curHtmlCode;
          },
        });
        clipboard.on("success", (e) => {
          that.$message({
            showClose: true,
            message: "复制成功",
            duration: 1000,
          });
          clipboard.destroy();
        });
        clipboard.on("error", (e) => {
          that.$message({
            showClose: true,
            message: "复制失败",
            duration: 1000,
          });
          clipboard.destroy();
        });
      } else {
        // 复制其他代码
      }
    },

    preview() {
      let routeData = this.$router.resolve({
        path: "/pcPreview",
        query: { id: 2 },
      });

      localStorage.setItem(2, JSON.stringify(this.curList));

      window.open(routeData.href, "_blank");
    },
  },
  mounted() {},
};
</script>
<style>
.pcToolHeader .CodeMirror {
  height: 500px;
}
/* .CodeMirror-line {
  height: 25px;
} */
.pcToolHeader .el-link {
  margin-left: 10px;
  margin-right: 10px;
}
</style>
