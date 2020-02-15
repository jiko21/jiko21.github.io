<template>
  <div class="container">
    <div>
      <head-image />
      <content-block :title="items['about'].title">
        <div class="text-image">
          <p v-html="items['about'].detail"></p>
          <img src="/me.jpg" />
        </div>
      </content-block>
      <content-block :title="items['profile'].title">
        <ul>
          <li v-for="(item, i) in items['profile'].detail" :key="i">
            <span>{{ i }}</span>
            : {{ item }}
          </li>
        </ul>
      </content-block>
      <content-block :title="items['skills'].title">
        <div class="skill-box">
          <div>
            <h3>Language</h3>
            <ul>
              <li v-for="(item, i) in items['skills'].detail['lang']" :key="i">
                <span>{{ i }}</span>
                : {{ item }}
              </li>
            </ul>
          </div>
          <div>
            <h3>Framework</h3>
            <ul>
              <li
                v-for="(item, i) in items['skills'].detail['framework']"
                :key="i"
              >
                <span>{{ i }}</span>
                : {{ item }}
              </li>
            </ul>
          </div>
        </div>
      </content-block>
      <content-block title="Works">
        <carousel :navigationEnabled="true" :perPage="count">
          <slide v-for="(item, i) in items.works.contents" :key="i">
            <image-card
              :title="item.title"
              :img="item.img"
              :content="item.content"
              :link="item.link"
            />
          </slide>
        </carousel>
      </content-block>
      <content-block :title="items['slides'].title">
        <p v-html="items['slides'].detail"></p>
      </content-block>
      <content-block title="SNS/Blog">
        <div class="link-box">
          <image-link src="/github.png" link="http://github.com/jiko21" />
          <image-link src="/twitter.svg" link="https://twitter.com/jiko_21" />
          <image-link
            src="/blog.svg"
            link="https://jiko-daiki.sakura.ne.jp/wordpress"
          />
        </div>
      </content-block>
      <my-footer />
    </div>
  </div>
</template>

<script>
import Carousel from 'vue-carousel/src/Carousel.vue'
import Slide from 'vue-carousel/src/Slide.vue'
import HeadImage from '../components/HeadImage.vue'
import ContentBlock from '../components/ContentBlock'
import ImageLink from '../components/ImageLink'
import ImageCard from '../components/ImageCard'
import { items } from '../contents/contents'
import MyFooter from '../components/MyFooter'

export default {
  components: {
    MyFooter,
    ContentBlock,
    HeadImage,
    ImageCard,
    ImageLink,
    Carousel,
    Slide
  },
  data() {
    return {
      items,
      count: 3
    }
  },
  created() {
    if (this.$device.isMobile) {
      this.count = 1
    }
    console.log(items.works)
  }
}
</script>

<style lang="scss" scoped>
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.text-image {
  display: flex;
  align-items: center;
  img {
    width: 40%;
    max-width: 200px;
    margin-right: auto;
  }
  p {
    float: left;
    vertical-align: center;
  }
}

.skill-box {
  display: flex;
  flex-wrap: wrap;
  div {
    flex: 1;
  }
}

.link-box {
  display: flex;
  align-items: center;
  justify-content: center;
  * {
    margin: 0 5%;
  }
}
</style>
