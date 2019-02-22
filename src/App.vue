<template>
    <div id="app">
        <global-header/>
        <global-main/>
        <global-footer/>
    </div>
</template>

<script>
  import Header from './components/global/Header';
  import Main from './components/global/Main';
  import Footer from './components/global/Footer';

  export default {
    name: 'App',
    components: {
      GlobalHeader: Header,
      GlobalMain: Main,
      GlobalFooter: Footer
    },
    props: {},
    data () {
      return {};
    },
    methods: {
      changeRoute (path) {
        this.$router.push(path);
      }
    }
  };

</script>

<style>
    @import "./styles/base.scss";

    #app {
        font-family: '微软雅黑', Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        color: #2c3e50;
        margin-bottom: auto;
        background: #efefef;
        min-height: 100vh;
        padding: 60px 0 40px 0;
    }
</style>
