<template>
  <div class="page-popup">
    <h1 class="page-title">Popup</h1>
    <div class="page-popup-wrapper">
      <zmbl-button @click.native="popupVisible1 = true" size="large" ref="button">中部弹出 popup</zmbl-button>
      <zmbl-button @click.native="popupVisible2 = true" size="large">上侧弹出 popup</zmbl-button>
      <zmbl-button @click.native="popupVisible3 = true" size="large">右侧弹出 popup</zmbl-button>
      <zmbl-button @click.native="popupVisible4 = true" size="large">下侧弹出 popup</zmbl-button>
    </div>
    <zmbl-popup v-model="popupVisible1" popup-transition="popup-fade" class="zmbl-popup-1" :style="{ top: buttonBottom + 10 + 'px' }">
      <h1>popup</h1>
      <p>/ ˈpɑpˌʌp /</p>
      <p>n. 弹出式; [棒]内野飞球; 自动起跳式装置</p>
      <p>adj. 弹起的; 有自动起跳装置的</p>
    </zmbl-popup>
    <zmbl-popup v-model="popupVisible2" position="top" class="zmbl-popup-2" :modal="false">
      <p>更新成功</p>
    </zmbl-popup>
    <zmbl-popup v-model="popupVisible3" close-on-popstate position="right" class="zmbl-popup-3" :modal="false">
      <zmbl-button @click.native="popupVisible3 = false" size="large" type="primary">关闭 popup</zmbl-button>
    </zmbl-popup>
    <zmbl-popup v-model="popupVisible4" position="bottom" class="zmbl-popup-4">
      <zmbl-picker :slots="dateSlots" @change="onDateChange" :visible-item-count="5" :show-toolbar="false"></zmbl-picker>
    </zmbl-popup>
  </div>
</template>

<style lang="scss">
  .page {
    &-popup {
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

      .zmbl-popup-1 {
        width: 200px;
        border-radius: 8px;
        padding: 10px;
        transform: translate(-50%, 0);

        h1 {
          font-size: 20px;
          color: #26a2ff;
        }

        p {
          margin-bottom: 10px;
        }
      }

      .zmbl-popup-1::before {
        triangle: 10px top #fff;
        content: '';
        position: absolute;
        top: -20px;
        right: 50px;
      }

      .zmbl-popup-2 {
        width: 100%;
        height: 50px;
        text-align: center;
        background-color: rgba(0,0,0,.7);
        backface-visibility: hidden;
      }

      .zmbl-popup-2 p {
        line-height: 50px;
        color: #fff;
      }

      .zmbl-popup-3 {
        width: 100%;
        height: 100%;
        background-color: #fff;
      }

      .zmbl-popup-3 .zmbl-button {
        position: absolute;
        width: 90%;
        top: 50%;
        left: 5%;
        transform: translateY(-50%);
      }

      .zmbl-popup-4 {
        width: 100%;
        .picker-slot-wrapper, .picker-item {
          backface-visibility: hidden;
        }
      }
    }
  }
</style>

<script type="text/babel">
  export default {
    data() {
      return {
        popupVisible1: false,
        popupVisible2: false,
        popupVisible3: false,
        popupVisible4: false,
        buttonBottom: 0,
        dateSlots: [
          {
            flex: 1,
            values: ['2016-01', '2016-02', '2016-03', '2016-04', '2016-05', '2016-06'],
            className: 'slot1',
            textAlign: 'right'
          }, {
            divider: true,
            content: '-',
            className: 'slot2'
          }, {
            flex: 1,
            values: ['2016-01', '2016-02', '2016-03', '2016-04', '2016-05', '2016-06'],
            className: 'slot3',
            textAlign: 'left'
          }
        ]
      };
    },

    watch: {
      popupVisible2(val) {
        if (val) {
          setTimeout(() => {
            this.popupVisible2 = false;
          }, 2000);
        }
      }
    },

    methods: {
      onDateChange(picker, values) {
        if (values[0] > values[1]) {
          picker.setSlotValue(1, values[0]);
        }
        this.dateStart = values[0];
        this.dateEnd = values[1];
      }
    },

    mounted() {
      this.buttonBottom = this.$refs.button.$el.getBoundingClientRect().bottom;
    }
  };
</script>
