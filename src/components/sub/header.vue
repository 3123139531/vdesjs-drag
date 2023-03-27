<template>
  <div>
    <el-row>
      <el-col :span="5">
        <div class="contentLogo">
          <h2>Lazyhands</h2>
        </div>
      </el-col>
      <el-col :span="12">
        <div class="tool">
          <tool-header v-if="mode == 'h5'"></tool-header>
          <pc-tool-header v-if="mode == 'pc'"></pc-tool-header>
          <free-tool-header v-if="mode == 'free'"></free-tool-header>
        </div>
      </el-col>
      <el-col :span="7">
        <div class="device">
          <span>模式切换：</span>
          <el-select size="mini" v-model="devMode" @change="selectDevice">
            <el-option value="h5">移动端画布</el-option>
            <el-option value="pc">PC画布</el-option>
             <el-option value="free">自由画布</el-option>
          </el-select>
        </div>
      </el-col>
    </el-row>
  </div>
</template>
<script>
import ToolHeader from "@/components/sub/ToolHeader.vue";
import PcToolHeader from "@/components/sub/PcToolHeader.vue";
import FreeToolHeader from './FreeToolHeader.vue';

export default {
  components: {
    ToolHeader,
    PcToolHeader,
    FreeToolHeader,
  },
  data() {
    return {
      curMode: "h5",
      deviceMode: "h5",
    };
  },
  computed: {
    mode() {
      return this.$store.state.mode;
    },
    devMode(){
      switch(this.curMode){
        case 'h5': return '移动端'
        case 'pc': return 'PC端'
        case 'free': return '自由画布'
      }
    }
  },
  methods: {
    selectDevice(val) {
      console.log(val);
      if (this.$store.state.list.length != 0) {
        this.deviceMode = this.curMode
        this.$message('画布中有数据不能进行模式的切换，否则由于 v-if标签会产生缓存，导致出bug');
        console.log('画布中有数据不能进行模式的切换，否则由于 v-if标签会产生缓存，导致出bug')
        return false;
      } else {
        this.curMode = val;
        this.$store.commit("selectDevice", val);
      }

    },
  },
};
</script>
<style scoped>
.contentLogo {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  height: 60px;
}

.device {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  height: 60px;
  margin-left: 60px;
}
.tool {
  display: flex;
  align-items: center;
  height: 60px;
  margin-top: 5px;
}
.el-link {
  margin-left: 10px;
  margin-right: 10px;
}
.contentLink {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  height: 60px;
}
</style>
