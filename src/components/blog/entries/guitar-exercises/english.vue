<template>
    <div>
        <p>TODO</p>
        <div v-if="!isRenderedFromList">
            <p>TODO</p>
            <chord name="E" :pressedStrings="{3: {1: 1}, 5: {2: 2}, 4: {2: 3}}" />
            <chord
                name="Bm"
                :pressedStrings="{1: {2: 1}, 2: {2: 1, 3: 2}, 3: {2: 1, 4: 4}, 4: {2: 1, 4: 3}, 5: {2: 1}, 6: {2: 1}}"
            />
        </div>
    </div>
</template>

<script>
import chord from './chord';

export default {
    props: ['isRenderedFromList', 'images'],
    components: {
        chord
    }
};
</script>