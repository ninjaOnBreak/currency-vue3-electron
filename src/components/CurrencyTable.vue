<template>
  <div id="currency-table">
    <div class="table-wrapper">
      <p>Most popular</p>
      <p class="rate-info">
        EURUSD
        <span class="up-icon"><BIconGraphUpArrow /></span>
        {{ fixedEURUSD }}
      </p>
      <p class="rate-info">
        USDJPY
        <span class="down-icon"><BIconGraphDownArrow /></span>
        {{ fixedUSDJPY }}
      </p>
      <p class="rate-info">
        GBPUSD
        <span class="down-icon"><BIconGraphDownArrow /></span>
        {{ fixedGBPUSD }}
      </p>
      <p class="rate-info">
        CNYUSD
        <span class="up-icon"><BIconGraphUpArrow /></span>
        {{ fixedCNYUSD }}
      </p>
      <p class="rate-info">
        USDPLN
        <span class="down-icon"><BIconGraphDownArrow /></span>
        {{ fixedUSDPLN }}
      </p>
      <p class="rate-info">
        EURPLN
        <span class="up-icon"><BIconGraphUpArrow /></span>
        {{ fixedEURPLN }}
      </p>
      <p class="rate-info">
        CHFPLN
        <span class="up-icon"><BIconGraphUpArrow /></span>
        {{ fixedCHFPLN }}
      </p>
      <p class="rate-info">
        GBPPLN
        <span class="down-icon"><BIconGraphDownArrow /></span>
        {{ fixedGBPPLN }}
      </p>
    </div>
  </div>
</template>

<script>
import { BIconGraphUpArrow, BIconGraphDownArrow } from 'bootstrap-icons-vue';
import { mapGetters } from 'vuex';

export default {
  components: {
    BIconGraphUpArrow,
    BIconGraphDownArrow,
  },
  computed: {
    ...mapGetters([
      'fixedEURUSD',
      'fixedUSDJPY',
      'fixedGBPUSD',
      'fixedCNYUSD',
      'fixedUSDPLN',
      'fixedEURPLN',
      'fixedCHFPLN',
      'fixedGBPPLN',
    ]),
  },

  mounted() {
    this.$store.dispatch('getEURUSD');
    this.$store.dispatch('getUSDJPY');
    this.$store.dispatch('getGBPUSD');
    this.$store.dispatch('getCNYUSD');
    this.$store.dispatch('getUSDPLN');
    this.$store.dispatch('getEURPLN');
    this.$store.dispatch('getCHFPLN');
    this.$store.dispatch('getGBPPLN');
  },
};
</script>

<style lang="scss" scoped>
.table-wrapper {
  padding: 50px;
  width: 20vw;
  margin: auto 20px;
  background-image: linear-gradient(#3f4b59, #333d46);
  color: #fff;
  text-align: center;
  border: 1px solid #1c232d;
  border-radius: 15px;
  box-shadow: 0 0 15px #1c232d;

  h1 {
    margin-bottom: 10px;
    font-size: 36px;
  }

  p {
    font-size: 30px;
    font-weight: 400;
  }

  .rate-info {
    font-size: 28px;
    margin: 40px 0;
    font-size: 26px;
    font-weight: 200;

    .up-icon,
    .down-icon {
      padding: 0 15px;
      font-size: 22px;
      vertical-align: bottom;
    }

    .up-icon {
      color: limegreen;
    }

    .down-icon {
      color: red;
    }
  }
}
</style>
