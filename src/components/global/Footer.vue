<template>
    <div class="g-footer">
        <p class="m-copyright">Copyright © 2018, Zhejiang University, All rights reserved.</p>
    </div>
</template>

<script>
    export default {
        name: "global-footer"
    }
</script>

<style lang="scss" scoped>
    .g-footer {
        position: absolute;
        width: 100%;
        bottom: 0;
        left: 0;
        background: #555c63;

        .m-copyright {
            font-size: 14px;
            text-align: center;
            line-height: 40px;
            color: #d7d7d7;
        }
    }
</style>
