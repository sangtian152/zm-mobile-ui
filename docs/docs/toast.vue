<template>
  <div class="page-toast">
    <h1 class="page-title">Toast</h1>
    <div class="page-toast-wrapper">
      <zmbl-button @click.native="openToast" size="large">点击弹出 Toast</zmbl-button>
      <zmbl-button @click.native="openToastWithIcon" size="large">点击弹出带有 icon 的 Toast</zmbl-button>
      <zmbl-button @click.native="openBottomToast" size="large">自定义 Toast 位置</zmbl-button>
    </div>
  </div>
</template>

<style lang="scss">
  .page {
    &-toast {
      &-wrapper {
        padding: 0 20px;
        position: absolute;
        top: 50%;
        width: 100%;
        transform: translateY(-50%);
        button:not(:last-child) {
          margin-bottom: 20px;
        }
      }
    }
  }
</style>

<script type="text/babel">
  import { Toast } from 'src/index';
  export default {
    methods: {
      openToast() {
        Toast('提示信息');
      },

      openToastWithIcon() {
        Toast({
          message: '操作成功',
          iconClass: 'zmblui zmblui-success'
        });
      },

      openBottomToast() {
        Toast({
          message: '提示信息',
          position: 'bottom'
        });
      }
    }
  };
</script>
