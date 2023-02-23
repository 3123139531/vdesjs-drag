<template>
  <van-button
    :type="myItem.propValues[typeIndex].value.chooseValue"
    :color="myItem.propValues[colorIndex].value"
    >{{ myItem.propValues[titleIndex].value }}</van-button
  >
</template>
<script>
import router from "../../../router";

export default {
  props: {
    myItem: {},
  },

  data() {
    return {
      titleIndex: 0,
      typeIndex: 1,
      colorIndex: 2,
      chooseValue: 0
    };
  },
};
</script>
<<<<<<< HEAD
<style>
</style>
=======

>>>>>>> c6d4e44df0284034203a89d4cb22fc5345177182
