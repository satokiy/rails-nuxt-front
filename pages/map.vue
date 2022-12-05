<template>
  <div class="wrapper">
    <div class="access" v-for="access in accesses" :key="access.id">
      <h3 class="access-title">アクセス</h3>
      <div class="access-contents">
        <li class="map-title">
          <span class="area">{{ access.title_tokyo }}</span>
        </li>
        <div class="map">
          <iframe
            :src="url1"
            class="map-size"
            style="border: 0"
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          >
          </iframe>
        </div>
        <div class="address">
          <p>{{ access.address_tokyo }}</p>
        </div>
      </div>
      <div class="access-contents">
        <li class="map-title">
          <span class="area">{{ access.title_osaka }}</span>
        </li>
        <div class="map">
          <iframe
            :src="url2"
            class="map-size"
            style="border: 0"
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          >
          </iframe>
        </div>
        <div class="address">
          <p>{{ access.address_osaka }}</p>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      accesses: [
        {
          title_tokyo: '東京',
          address_tokyo: '〒000-0000 東京都港区',
          title_osaka: '大阪',
          address_osaka: '〒000-0000 大阪府中央区',
        },
      ],
      url1: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3242.3286039132536!2d139.73429761511036!3d35.644274780202984!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x60188ba8d7fde9fb%3A0x8732ae3844db17e7!2z44CSMTA4LTAwNzMg5p2x5Lqs6YO95riv5Yy65LiJ55Sw77yV5LiB55uu77yS77yR4oiS77yW!5e0!3m2!1sja!2sjp!4v1656068434679!5m2!1sja!2sjp",
      url2: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3281.1015712915946!2d135.4994950150825!3d34.67738588044042!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6000e71a2991e915%3A0x71c54e96462b09fa!2z44CSNTQyLTAwODEg5aSn6Ziq5bqc5aSn6Ziq5biC5Lit5aSu5Yy65Y2X6Ii55aC077yT5LiB55uu77yX4oiS77yS77yX!5e0!3m2!1sja!2sjp!4v1656069185890!5m2!1sja!2sjp",
    }
  },
}
</script>

<style scoped lang="scss">
// レスポンシブ対応
$sp: 796px; // sp
@mixin sp {
  @media (max-width: ($sp)) {
    @content;
  }
}

html {
  line-height: 1.15;
  font-family: 源ノ角ゴシック JP;
}

$text-align-left: left;
.wrapper {
  padding-top: 100px;
  text-align: center;
  .access {
    padding: 50px 0 0 0;
    .access-title {
      font-size: 26px;
      margin-bottom: 76px;
    }
    .access-contents {
      .map-title {
        font-size: 32px;
        color: #fd9603;
        margin: 20px auto;
        padding-bottom: 56px;
        .area {
          color: #333333;
          font-size: 32px;
        }
      }
      .map {
        margin-bottom: 53px;
        .map-size {
          width: 1102px;
          height: 675px;
        }
      }
      .address p {
        font-size: 20px;
        margin-bottom: 135px;
      }
    }
  }
  @include sp {
    .company-data {
      padding-bottom: 0;
      height: 450px;
      .company-details {
        border-spacing: 20px 30px;
        .table-data {
          font-size: 14px;
        }
        .table-title,
        .table-contents {
          text-align: $text-align-left;
        }
      }
      .title {
        font-size: 1.17em;
      }
    }
    .access {
      padding-top: 50px;
      .access-title {
        font-size: 1.17em;
        margin-bottom: 50px;
      }
      .access-contents {
        display: flex;
        flex-flow: column;
        .map-title {
          margin: 0;
          padding-bottom: 0;
          .area {
            font-size: 20px;
          }
        }
        .map {
          order: 3;
          .map-size {
            width: 445px;
            height: 329.59px;
            margin: 20px auto 0;
            order: 2;
          }
        }
        .address p {
          font-size: 14px;
          margin-bottom: 5px;
        }
      }
    }
  }
}
</style>


