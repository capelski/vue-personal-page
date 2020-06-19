<template>
    <div class="strumming">
        <div
            v-for="(hit, hitIndex) in hits"
            :key="`hit-${hitIndex}`"
            class="hit"
            :style="{left: hit.percent  + '%'}"
        >{{hit.symbol}}{{hit.direction}}</div>
    </div>
</template>

<script>
export default {
    name: 'Strumming',
    props: ['hits'],
    data() {
        return {
            beats
        };
    }
};
</script>

<style lang="scss">
@import '../../../../scss/globals.scss';

.strumming {
    margin: 24px 0;
    border-top: 1px solid $light-main-color;
    border-bottom: 1px solid $light-main-color;
    padding: 4px;
    box-sizing: content-box;
    height: 40px;
    position: relative;

    .hit {
        position: absolute;
        font-size: 24px;
    }
}
</style>