<template>
    <div>
        <p>TODO</p>
        <div v-if="!isRenderedFromList">
            <p>TODO</p>
            <p class="text-center">
                <img :src="`${images.destinyGraphics1}?$modena=vue-personal-page`" alt="TODO" />
            </p>
            <p class="text-center">
                <img :src="`${images.destinyGraphics2}?$modena=vue-personal-page`" alt="TODO" />
            </p>
            <p class="text-center">
                <img :src="`${images.destinyGraphics3}?$modena=vue-personal-page`" alt="TODO" />
            </p>
            <p class="text-center">
                <img :src="`${images.destinyGraphics4}?$modena=vue-personal-page`" alt="TODO" />
            </p>
            <p class="text-center">
                <video
                    width="100%"
                    controls
                    :src="`${images.destinyGraphics5}?$modena=vue-personal-page`"
                />
            </p>
        </div>
    </div>
</template>

<script>
export default {
    props: ['isRenderedFromList', 'images']
};
</script>