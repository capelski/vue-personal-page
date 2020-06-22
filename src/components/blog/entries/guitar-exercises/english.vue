<template>
    <div>
        <p>TODO</p>
        <div v-if="!isRenderedFromList">
            <p>TODO</p>

            <p>Leyenda de rasgeos</p>
            <div>👍 = Tocar todas las cuerdas con el pulgar</div>
            <div>💅 = Tocar todas las cuerdas con las uñas</div>
            <div>☝️ = Tocar las tres primeras cuerdas con el indice</div>
            <div>🅱️ = Tocar solo el bajo del acuerdo con el pulgar</div>
            <div>3️⃣ = Tocar solo la tercera cuerda con el dedo indice</div>
            <div>2️⃣ = Tocar solo la segunda cuerda con el dedo medio</div>
            <div>1️⃣ = Tocar solo la primera cuerda con el dedo aunlar</div>
            <div>👌 = Tocar las tres primeras cuerdas con los dedos indice, medio y anular</div>
            <div>✊ = Golpear todas las cuerdas con las uñas, teniendo el puño cerrado</div>

            <h4 class="guitar-lesson">Lección 4: Acordes de tres dedos</h4>
            <div class="screen-splitter">
                <chord name="G6 (sol 6)" :pressedStrings="{5: {2: 1}, 6: {3: 2}}" />
                <chord name="Em (mi menor)" :pressedStrings="{5: {2: 2}, 4: {2: 3}}" />
                <chord
                    name="Cmaj7 (Do mayor 7)"
                    :pressedStrings="{4: {2: 1}, 5: {3: 3}, 6: {3: 2}}"
                />
                <chord name="D (re)" :pressedStrings="{1: {2: 2}, 2: {3: 3}, 3: {2: 1}}" />
            </div>
            <p>Sequencia: G6 - Em - Cmaj7 - D</p>

            <div class="screen-splitter">
                <div>
                    <p>Primer rasgeo</p>
                    <strumming
                        :hits="[{percent: 0, symbol: '💅', direction: '⬇'}, {percent: 25, symbol: '💅', direction: '⬇'}, {percent: 50, symbol: '💅', direction: '⬇'}, {percent: 75, symbol: '💅', direction: '⬇'}]"
                    />
                </div>
                <div>
                    <p>Segundo rasgeo</p>
                    <strumming
                        :hits="[{percent: 0, symbol: '👍', direction: '⬇'}, {percent: 20, symbol: '☝️', direction: '⬆'}, {percent: 35, symbol: '☝️', direction: '⬆'}, {percent: 45, symbol: '💅', direction: '⬇'}, {percent: 60, symbol: '☝️', direction: '⬆'}, {percent: 75, symbol: '☝️', direction: '⬆'}, {percent: 85, symbol: '💅', direction: '⬇'}]"
                    />
                </div>
            </div>

            <h4 class="guitar-lesson">Lección 5: El rasgeo más útil + Lección 6: Arpegios</h4>
            <div class="screen-splitter">
                <chord name="Asusp2" :pressedStrings="{3: {2: 3}, 4: {2: 2}}" />
                <chord name="F#m11" :pressedStrings="{3: {2: 3}, 4: {2: 2}, 6: {2: 1}}" />
                <chord name="D (re)" :pressedStrings="{1: {2: 2}, 2: {3: 3}, 3: {2: 1}}" />
                <chord name="E (mi)" :pressedStrings="{3: {1: 1}, 5: {2: 2}, 4: {2: 3}}" />
            </div>

            <p>Sequencia: Asusp2 - Asusp2 - F#m11 - F#m11 - D - E - Asusp2 - Asusp2</p>

            <div class="screen-splitter">
                <div>
                    <p>Rasgeo lección 5</p>
                    <strumming
                        :hits="[{percent: 0, symbol: '👍', direction: '⬇'}, {percent: 30, symbol: '💅', direction: '⬇'}, {percent: 40, symbol: '☝️', direction: '⬆'}, {percent: 70, symbol: '☝️', direction: '⬆'}, {percent: 80, symbol: '💅', direction: '⬇'}]"
                    />
                </div>
                <div>
                    <p>Rasgeo lección 6</p>
                    <strumming
                        :hits="[{percent: 0, symbol: '🅱️'}, {percent: 16, symbol: '3️⃣'}, {percent: 32, symbol: '2️⃣'}, {percent: 48, symbol: '1️⃣'}, {percent: 64, symbol: '2️⃣'}, {percent: 80, symbol: '3️⃣'}]"
                    />
                </div>
            </div>

            <h4 class="guitar-lesson">Lección 7: Estirar los dedos</h4>
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

            <p>Sequencia: C - C - G - G - Dm - Dm - Fmaj7 - Em</p>

            <div class="screen-splitter">
                <div>
                    <p>Primer rasgeo</p>
                    <strumming
                        :hits="[{percent: 0, symbol: '🅱️'}, {percent: 16, symbol: '3️⃣'}, {percent: 32, symbol: '2️⃣'}, {percent: 48, symbol: '1️⃣'}, {percent: 64, symbol: '2️⃣'}, {percent: 80, symbol: '3️⃣'}]"
                    />
                </div>
                <div>
                    <p>Segundo rasgeo</p>
                    <strumming
                        :hits="[{percent: 0, symbol: '🅱️+👌'}, {percent: 16, symbol: '👌'}, {percent: 32, symbol: '👌'}, {percent: 48, symbol: '👌'}, {percent: 64, symbol: '👌'}, {percent: 80, symbol: '👌'}]"
                    />
                </div>
            </div>

            <h4 class="guitar-lesson">Lección 8: Cambios rápidos</h4>
            <div class="screen-splitter">
                <chord name="C (do)" :pressedStrings="{2: {1: 1}, 4: {2: 2}, 5: {3: 3}}" />
                <chord name="G (sol)" :pressedStrings="{1: {3: 3}, 5: {2: 1}, 6: {3: 2}}" />
                <chord name="D (re)" :pressedStrings="{1: {2: 2}, 2: {3: 3}, 3: {2: 1}}" />
                <chord name="Em (mi menor)" :pressedStrings="{5: {2: 2}, 4: {2: 3}}" />
            </div>

            <p>Primera sequencia (60 beats por minuto): C - G - D - Em</p>
            <p>Segunda sequencia (110 beats por minuto): C - C - G - G - D - D - Em - Em</p>

            <p>Primer y segundo rasgeo</p>
            <strumming
                :hits="[{percent: 0, symbol: '💅', direction: '⬇'}, {percent: 25, symbol: '💅', direction: '⬇'}, {percent: 50, symbol: '💅', direction: '⬇'}, {percent: 75, symbol: '💅', direction: '⬇'}]"
            />

            <p>Tercera sequencia: C - C - G - G - D - D - Em - Em</p>
            <p>Cuarta sequencia: C - G - D - Em</p>

            <p>Tercer y cuarto rasgeo</p>
            <strumming
                :hits="[{percent: 0, symbol: '🅱️'}, {percent: 40, symbol: '👌'}, {percent: 60, symbol: '🅱️'}, {percent: 80, symbol: '👌'}]"
            />

            <h4 class="guitar-lesson">Lección 9: Tu primer acorde con cejilla</h4>
            <div class="screen-splitter">
                <chord name="D (re)" :pressedStrings="{1: {2: 2}, 2: {3: 3}, 3: {2: 1}}" />
                <chord
                    name="Bm (si menor)"
                    :pressedStrings="{1: {2: 1}, 2: {2: 1, 3: 2}, 3: {2: 1, 4: 4}, 4: {2: 1, 4: 3}, 5: {2: 1}, 6: {2: 1}}"
                />
                <chord name="G (sol)" :pressedStrings="{1: {3: 3}, 5: {2: 1}, 6: {3: 2}}" />
                <chord name="A (la)" :pressedStrings="{2: {2: 3}, 3: {2: 1}, 4: {2: 2}}" />
            </div>

            <p>Sequencia: D - D - Bm - Bm - G - A - D - D</p>

            <p>Rasgeo</p>
            <strumming
                :hits="[{percent: 0, symbol: '👍', direction: '⬇'}, {percent: 25, symbol: '💅', direction: '⬇'}, {percent: 50, symbol: '☝️', direction: '⬆'}, {percent: 60, symbol: '☝️', direction: '⬆'}, {percent: 75, symbol: '💅', direction: '⬇'}, {percent: 85, symbol: '💅', direction: '⬇'}]"
            />

            <h4 class="guitar-lesson">Lección 10: Ritmo latino</h4>
            <div class="screen-splitter">
                <chord name="Am (la menor)" :pressedStrings="{2: {1: 1}, 3: {2: 3}, 4: {2: 2}}" />
                <chord
                    name="F (fa)"
                    :pressedStrings="{1: {1: 1}, 2: {1: 1}, 3: {1: 1, 2: 2}, 4: {1: 1, 3: 4}, 5: {1: 1, 3: 3}, 6: {1: 1}}"
                />
                <chord name="C (do)" :pressedStrings="{2: {1: 1}, 4: {2: 2}, 5: {3: 3}}" />
                <chord name="E7" :pressedStrings="{3: {1: 1}, 5: {2: 2}}" />
            </div>

            <p>Sequencia: Am - Am - F - F - C - C - E7 - E7</p>

            <p>Rasgeo</p>
            <strumming
                :hits="[ {percent: 0, symbol: '💅', direction: '⬇'}, {percent: 50, symbol: '☝️', direction: '⬆'}, {percent: 70, symbol: '✊'}, {percent: 90, symbol: '💅', direction: '⬇'}]"
            />

            <h4 class="guitar-lesson">Lección 11: Rasgueo latino</h4>
            <div class="screen-splitter">
                <chord name="Am (la menor)" :pressedStrings="{2: {1: 1}, 3: {2: 3}, 4: {2: 2}}" />
                <chord name="Dm (re menor)" :pressedStrings="{1: {1: 1}, 2: {3: 3}, 3: {2: 2}}" />
                <chord name="E7" :pressedStrings="{3: {1: 1}, 5: {2: 2}}" />
            </div>

            <p>
                Primera sequencia: Am - Dm - E7 -
                <i>(silencio)</i>
            </p>

            <p>Primer rasgeo</p>
            <strumming :hits="[ {percent: 0, symbol: '💅', direction: '⬇'}]" />

            <p>Segunda sequencia: Am - Dm - E7 - E7</p>

            <div class="screen-splitter">
                <div>
                    <p>Segundo rasgeo (1r acorde)</p>
                    <strumming
                        :hits="[ {percent: 0, symbol: '👍', direction: '⬇'}, {percent: 33, symbol: '☝️', direction: '⬆'}, {percent: 66, symbol: '✊'}]"
                    />
                </div>
                <div>
                    <p>Segundo rasgeo (2n y 3r acorde)</p>
                    <strumming
                        :hits="[ {percent: 0, symbol: '☝️', direction: '⬆'}, {percent: 50, symbol: '☝️', direction: '⬆'}, {percent: 75, symbol: '✊'}]"
                    />
                </div>
            </div>

            <h4 class="guitar-lesson">Lección 16: Cambios rápidos</h4>
            <div class="screen-splitter">
                <chord name="Em (mi menor)" :pressedStrings="{5: {2: 2}, 4: {2: 3}}" />
                <chord name="C (do)" :pressedStrings="{2: {1: 1}, 4: {2: 2}, 5: {3: 3}}" />
                <chord name="D (re)" :pressedStrings="{1: {2: 2}, 2: {3: 3}, 3: {2: 1}}" />
            </div>

            <p>Sequencia: C - Em - D - Em</p>

            <p>Primer rasgeo</p>
            <strumming :hits="[ {percent: 0, symbol: '💅', direction: '⬇'}]" />

            <div class="screen-splitter">
                <div>
                    <p>Segundo rasgeo (1r y 3r acorde)</p>
                    <strumming
                        :hits="[ {percent: 0, symbol: '👍', direction: '⬇'}, {percent: 60, symbol: '☝️', direction: '⬆'}, {percent: 90, symbol: '💅'}]"
                    />
                </div>
                <div>
                    <p>Segundo rasgeo (2n y 4o acorde)</p>
                    <strumming
                        :hits="[ {percent: 0, symbol: '👍', direction: '⬆'}, {percent: 50, symbol: '☝️', direction: '⬆'}, {percent: 75, symbol: '💅'}, {percent: 90, symbol: '💅'}]"
                    />
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import chord from './chord';
import strumming from './strumming';

export default {
    props: ['isRenderedFromList', 'images'],
    components: {
        chord,
        strumming
    }
};
</script>

<style>
.guitar-lesson {
    margin-top: 48px;
}
</style>