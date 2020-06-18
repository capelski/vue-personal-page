<template>
    <div>
        <p>TODO</p>
        <div v-if="!isRenderedFromList">
            <p>TODO</p>
            <h2>Lección 4: Acordes de tres dedos</h2>
            <div class="screen-splitter">
                <chord name="G6 (sol 6)" :pressedStrings="{5: {2: 1}, 6: {3: 2}}" />
                <chord name="Em (mi menor)" :pressedStrings="{5: {2: 2}, 4: {2: 3}}" />
                <chord
                    name="Cmaj7 (Do mayor 7)"
                    :pressedStrings="{4: {2: 1}, 5: {3: 3}, 6: {3: 2}}"
                />
                <chord name="D (re)" :pressedStrings="{1: {2: 2}, 2: {3: 3}, 3: {2: 1}}" />
            </div>

            <h2>Lección 5: El clásico rasgeo</h2>
            <div class="screen-splitter">
                <chord name="Asusp2" :pressedStrings="{3: {2: 3}, 4: {2: 2}}" />
                <chord name="F#m11" :pressedStrings="{3: {2: 3}, 4: {2: 2}, 6: {2: 1}}" />
                <chord name="D (re)" :pressedStrings="{1: {2: 2}, 2: {3: 3}, 3: {2: 1}}" />
                <chord name="E (mi)" :pressedStrings="{3: {1: 1}, 5: {2: 2}, 4: {2: 3}}" />
            </div>

            <h2>Lección 6: Arpegios</h2>
            <p>Mismos acordes que la lección anterior</p>

            <h2>Lección 7: Estirar los dedos</h2>
            <div class="screen-splitter">
                <chord name="C (do)" :pressedStrings="{2: {1: 1}, 4: {2: 2}, 5: {3: 3}}" />
                <chord name="G (sol)" :pressedStrings="{1: {3: 3}, 5: {2: 1}, 6: {3: 2}}" />
                <chord name="Dm (re menor)" :pressedStrings="{1: {1: 1}, 2: {3: 3}, 3: {2: 2}}" />
                <chord
                    name="Fmaj7 (fa mayor 7)"
                    :pressedStrings="{2: {1: 1}, 3: {2: 2}, 4: {3: 3}}"
                />
            </div>
            <chord name="Em (mi menor)" :pressedStrings="{5: {2: 2}, 4: {2: 3}}" />

            <h2>Lección 8: Cambios rápidos</h2>
            <div class="screen-splitter">
                <chord name="C (do)" :pressedStrings="{2: {1: 1}, 4: {2: 2}, 5: {3: 3}}" />
                <chord name="G (sol)" :pressedStrings="{1: {3: 3}, 5: {2: 1}, 6: {3: 2}}" />
                <chord name="D (re)" :pressedStrings="{1: {2: 2}, 2: {3: 3}, 3: {2: 1}}" />
                <chord name="Em (mi menor)" :pressedStrings="{5: {2: 2}, 4: {2: 3}}" />
            </div>

            <h2>Lección 9: Acordes con cejilla</h2>
            <div class="screen-splitter">
                <chord name="D (re)" :pressedStrings="{1: {2: 2}, 2: {3: 3}, 3: {2: 1}}" />
                <chord
                    name="Bm (si menor)"
                    :pressedStrings="{1: {2: 1}, 2: {2: 1, 3: 2}, 3: {2: 1, 4: 4}, 4: {2: 1, 4: 3}, 5: {2: 1}, 6: {2: 1}}"
                />
                <chord name="G (sol)" :pressedStrings="{1: {3: 3}, 5: {2: 1}, 6: {3: 2}}" />
                <chord name="A (la)" :pressedStrings="{2: {2: 3}, 3: {2: 1}, 4: {2: 2}}" />
            </div>
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