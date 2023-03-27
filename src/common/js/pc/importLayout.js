import Plate from "@/components/pc/basics/Plate.vue";
import PlateLogo from "@/assets/pc/basics/板块.png";

import PcLayout from "@/components/pc/basics/PcLayout.vue";
import PcLayoutLogo from "@/assets/pc/basics/布局.png";

let layout = {
    components: {
      Plate,
      PcLayout
    },
    data() {
      return {
        Logos: {
          Plate: PlateLogo,
          PcLayout: PcLayoutLogo
        }
      };
    }
  };
  
  export default layout;