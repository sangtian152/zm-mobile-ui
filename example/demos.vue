<template>
  <section class="page-demo">
    <div v-for="(group, index) in navs" :key="index">
      <div class="page-title" v-text="group.title"></div>
      <zmbl-cell
        v-for="item in group.list"
        :key="item.path"
        :to="item.path"
        is-link>
        <div slot="title">
          <span>{{ item.name }}</span>
        </div>
      </zmbl-cell>
    </div>
  </section>
</template>

<style lang="scss">
  .page-demo {
    padding-bottom: 50px;

    .indexicon {
      font-size: 22px;
      color: #26a2ff;
      display: inline-block;
      width: 30px;
      vertical-align: middle;

      &.icon-swipe {
        font-size: 26px;
      }

      &.icon-checklist {
        font-size: 18px;
      }
    }
  }
</style>

<script type="text/babel">
  import { navs } from './route';

  export default {
    data() {
      return {
        navs: []
      };
    },

    created() {
      this.navs = navs;
      console.log(this, 53)
    },
    methods:{
      log(){
        console.log('log')
      }
    }
  };
</script>
