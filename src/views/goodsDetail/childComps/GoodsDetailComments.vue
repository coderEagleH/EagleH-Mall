<template>
  <div
    class="goods-detail-comments"
    v-if="Object.keys(commentsInfo).length !== 0"
  >
    <div class="comment">
      <div class="comment-hd">
        <label>用户评价</label>
        <span @click="moreComments()">更多</span>
      </div>
      <div class="comment-bd">
        <div class="user">
          <img :src="commentsInfo.user.avatar" alt="" />
          <span>{{ commentsInfo.user.uname }}</span>
        </div>
        <p class="content">{{ commentsInfo.content }}</p>
      </div>
      <div class="goods-about">
        <span class="data">{{ createdDate }} </span>
        <span class="style"> {{ commentsInfo.style }}</span>
      </div>
      <span class="images" v-for="(item, index) in commentsInfo.images">
        <img :src="item" alt="" />
      </span>
    </div>
  </div>
</template>

<script>
import { gDate } from "@/common/utils";

export default {
  name: "GoodsDetailComments",
  data() {
    return {};
  },
  props: {
    commentsInfo: {
      type: Object,
      default: {},
    },
  },
  computed: {
    createdDate() {
      let timer = this.commentsInfo.data * 1000;
      return gDate(timer);
    },
  },
  methods: {
    moreComments() {
      alert("没有更多评论了~");
    },
  },
  components: {},
};
</script>

<style scoped>
.comment {
  width: 100%;
  padding: 10px 20px 20px;
  margin-top: 6px;
  background-color: #fff;
}

.comment .comment-hd {
  position: relative;
  height: 40px;
  line-height: 38px;
  border-bottom: 1px solid #eee;
}

.comment .comment-hd label {
  font-size: 14px;
  color: #333;
}

.comment .comment-hd span {
  position: absolute;
  right: 0;
  top: 0;
  font-size: 12px;
  color: #000;
}

.user {
  padding: 10px 0;
}

.user img {
  width: 30px;
  vertical-align: middle;
  border-radius: 15px;
  overflow: hidden;
}

.user span {
  font-size: 14px;
  margin-left: 10px;
  color: #333;
}

.content {
  font-size: 12px;
  /* 限制文字显示4行，多余的用省略号代替 */
  display: -webkit-box;
  overflow: hidden;
  text-overflow: ellipsis;
  -webkit-line-clamp: 4;
  -webkit-box-orient: vertical;
}

.goods-about {
  margin: 5px auto 10px auto;
  font-size: 12px;
  color: #999;
}

.images {
  display: inline-block;
  width: 50px;
  height: 50px;
  margin-right: 3px;
  overflow: hidden;
}
.images img {
  width: 50px;
}
</style>
