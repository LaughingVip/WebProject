<template>
  <div class="show-data-wrap">
    <div class="data-info" v-for="(item, index) in todayCovidData" :key="index">
      <h2>{{ item.title }}</h2>
      <h3 :style="{ color: item.color }">{{ item.count }}</h3>
      <p>
        昨日
        <span :style="{ color: item.color }">{{
          item.countIncr > 0 ? "+" + item.countIncr : item.countIncr
        }}</span>
      </p>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    todayCovidData: {
      type: Array,
      default: () => {
        return [];
      },
    },
  },
};
</script>

<style lang="less" scoped>
.show-data-wrap {
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  text-align: center;
  .data-info {
    width: 25%;
    margin-bottom: 0.2rem;

    h2 {
      font-size: #000;
      line-height: 0.5rem;
    }
    h3 {
      font-size: 0.3rem;
      line-height: 0.5rem;
      font-weight: 700;
    }
    p {
      font-size: 0.26rem;
      color: #333;
      opacity: 0.8;
      span {
        font-size: 0.25rem;
        font-weight: 700;
      }
    }
  }
}
</style>


