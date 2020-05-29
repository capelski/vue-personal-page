<template>
    <div>
        <p>TODO</p>
        <div v-if="!isRenderedFromList">
            <p>TODO</p>
        </div>
    </div>
</template>

<script>
export default {
    props: ['isRenderedFromList', 'images']
};
</script>