<template>
  <div class="zmbl-navbar" :class="{ 'is-fixed': fixed }">
    <slot></slot>
  </div>
</template>

<script>
/**
 * zmbl-navbar
 * @module components/navbar
 * @desc 顶部 tab，依赖 tab-item
 *
 * @param {boolean} [fixed=false] - 固定底部
 * @param {*} selected - 返回 item component 传入的 value
 *
 * @example
 * <zmbl-navbar :selected.sync="selected">
 *   <zmbl-tab-item value="订单">
 *     <span slot="label">订单</span>
 *   </zmbl-tab-item>
 * </zmbl-navbar>
 *
 * <zmbl-navbar :selected.sync="selected" fixed>
 *   <zmbl-tab-item :value="['传入数组', '也是可以的']">
 *     <span slot="label">订单</span>
 *   </zmbl-tab-item>
 * </zmbl-navbar>
 *
 */
export default {
  name: 'zmbl-navbar',

  props: {
    fixed: Boolean,
    value: {}
  }
};
</script>

<style lang="scss">
  @import "../../../src/style/var.scss";

  .zmbl {
    &-navbar {
      background-color: $color-white;
      display: flex;
      text-align: center;

      &.is-fixed {
        position: fixed;
        right: 0;
        left: 0;
        top:0;
        z-index: $z-index-normal;
      }

      .zmbl-tab-item {
        padding: 17px 0;
        font-size: 15px;

        &:last-child {
          border-right: 0;
        }

        &.is-selected {
          border-bottom: 3px solid $color-blue;
          color: $color-blue;
          margin-bottom: -3px;
        }
      }
    }
  }
</style>
