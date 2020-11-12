<template>
  <d-player ref="player" :options="options"></d-player>
</template>

<script type="text/ecmascript-6">
import dPlayer from "vue-dplayer";
import "vue-dplayer/dist/vue-dplayer.css";
const dp = new DPlayer(options);
export default {
  name: "in-video",
  props: {
    source: {
      type: String,
      default: "",
    },
  },
  data() {
    return {
      player: null,
      options: {
        video: {
          url: "http://static.smartisanos.cn/common/video/t1-ui.mp4",
          pic:
            "http://static.smartisanos.cn/pr/img/video/video_03_cc87ce5bdb.jpg",
          thumbnails:
            "http://static.smartisanos.cn/pr/img/video/video_03_cc87ce5bdb.jpg",
        },
       
      },
    };
  },
  mounted() {
    this.player = this.$refs.player.dp;
  },
  created() {},
  methods: {
   
  },
  components: {
    dPlayer,
  },
};
</script>
<style scoped>
.dplayer{
  width: 100%;
  height: 500px;
}
</style>