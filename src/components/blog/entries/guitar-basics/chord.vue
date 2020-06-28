<template>
    <div>
        <h5 class="chord-title">{{name}}</h5>
        <div class="chord">
            <div class="fret-numbers">
                <div
                    v-for="(string, stringIndex) in strings"
                    :key="`fret-number-${stringIndex}`"
                    class="fret-number"
                >{{stringIndex + 1}} -</div>
                <div class="frets-start"></div>
            </div>
            <div class="frets">
                <div
                    v-for="(fret, fretIndex) in frets"
                    :key="`fret-${fretIndex}`"
                    class="fret-slot"
                >
                    <div
                        v-for="(string, stringIndex) in strings"
                        :key="`fret-${fretIndex}-string-${stringIndex}`"
                        class="string-slot"
                    >
                        <div class="string"></div>
                        <div
                            v-if="pressedStrings[stringIndex + 1] && pressedStrings[stringIndex + 1][fretIndex + 1]"
                            class="finger"
                        >
                            <span>{{pressedStrings[stringIndex + 1] && pressedStrings[stringIndex + 1][fretIndex + 1]}}</span>
                        </div>
                    </div>
                    <div class="fret"></div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
const frets = 4;
const strings = 6;

export default {
    name: 'Chord',
    props: ['name', 'pressedStrings'],
    data() {
        return {
            frets,
            strings
        };
    }
};
</script>

<style lang="scss">
@import '../../../../scss/globals.scss';

$fretNumbersWidth: 24px;
$fretSlotWidth: 48px;
$stringSlotHeight: 32px;
$stringsWidth: 2px;

.chord-title {
    text-align: center;
}

.chord {
    display: flex;
    justify-content: center;

    .fret-numbers {
        width: $fretNumbersWidth;
        position: relative;

        .fret-number {
            display: flex;
            align-items: center;
            height: $stringSlotHeight;
            position: relative;
        }

        .frets-start {
            position: absolute;
            height: $stringSlotHeight * 5 + $stringsWidth;
            width: $stringsWidth;
            top: $stringSlotHeight / 2;
            right: 0;
            background-color: $light-main-color;
        }
    }

    .frets {
        display: flex;

        .fret-slot {
            width: $fretSlotWidth;
            position: relative;

            .string-slot {
                height: $stringSlotHeight;
                display: flex;
                align-items: center;
                justify-content: space-between;
                position: relative;

                .finger {
                    flex-grow: 1;
                    text-align: center;
                    z-index: 2;

                    span {
                        background-color: white;
                    }
                }

                .string {
                    z-index: 1;
                    position: absolute;
                    height: $stringsWidth;
                    width: 100%;
                    top: 50%;
                    background-color: $light-main-color;
                }
            }

            .fret {
                position: absolute;
                height: $stringSlotHeight * 5 + $stringsWidth;
                width: $stringsWidth;
                top: $stringSlotHeight / 2;
                background-color: $light-main-color;
            }
        }
    }
}

.dark {
    .chord-title,
    .chord {
        color: $dark-main-color;
    }

    .chord {
        .fret-numbers {
            .frets-start {
                background-color: $dark-main-color;
            }
        }

        .frets {
            .fret-slot {
                .string-slot {
                    .finger {
                        span {
                            background-color: $light-main-color;
                        }
                    }

                    .string {
                        background-color: $dark-main-color;
                    }
                }
            }

            .fret {
                background-color: $dark-main-color;
            }
        }
    }
}
</style>