<template>
    <div class="year">
        <div class="months">
            <div
                v-for="(month, i) in months"
                :key="i"
                :class="['month', `weeks-${month.weeks}`,  i % 2 === 0 ? 'odd-month' : 'even-month']"
            >
                <div class="name">{{month.name}}</div>
            </div>
        </div>
        <div class="weeks">
            <div v-for="(week, i) in weeks" :key="i" class="week">
                <div
                    v-for="(day, j) in week"
                    :key="i + j"
                    :class="['day', 'clickable', day.isOddMonth ? 'odd-month' : 'even-month', selectedDay === (i * 7 + j) ? 'selected' : '']"
                    v-on:click="onDayClick(i * 7 + j)"
                >{{day.number}}</div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Year',
    props: ['months', 'onDayClick', 'selectedDay', 'weeks']
};
</script>

<style lang="scss">
@import '../../../../scss/globals.scss';

.year {
    display: flex;
    margin-top: 20px;

    .months {
        width: 10%;
        display: flex;
        flex-direction: column;

        .month {
            box-sizing: border-box;
            border-bottom: 1px solid $light-main-color;
            border-left: 1px solid $light-main-color;

            &.odd-month {
                background-color: #ddd8e4;
            }

            &:first-child {
                border-top: 1px solid $light-main-color;
            }

            &.weeks-4 {
                height: 200px;
            }
            &.weeks-5 {
                height: 250px;
            }

            .name {
                height: 100%;
                writing-mode: tb-rl;
                margin: auto;
                text-align: center;
            }
        }
    }

    .weeks {
        width: 90%;

        .week {
            display: flex;
            justify-content: space-between;

            .day {
                text-align: center;
                width: 14.28%;
                padding: 15px 0;
                border-bottom: 1px solid $light-main-color;
                border-left: 1px solid $light-main-color;
                line-height: 20px;
                box-sizing: border-box;
                height: 50px;

                &.odd-month {
                    background-color: #ddd8e4;
                }

                &.selected,
                &.odd-month.selected {
                    background-color: $primary-color;
                }

                &:last-child {
                    border-right: 1px solid $light-main-color;
                }
            }

            &:first-child .day {
                border-top: 1px solid $light-main-color;
            }
        }
    }
}

.dark {
    .year {
        .months {
            .month {
                border-bottom: 1px solid $dark-main-color;
                border-left: 1px solid $dark-main-color;

                &.odd-month {
                    background-color: #414549;
                }

                &:first-child {
                    border-top: 1px solid $dark-main-color;
                }
            }
        }

        .weeks {
            .week {
                .day {
                    border-bottom: 1px solid $dark-main-color;
                    border-left: 1px solid $dark-main-color;

                    &.odd-month {
                        background-color: #414549;
                    }

                    &.selected,
                    &.odd-month.selected {
                        background-color: $primary-color;
                        color: $light-main-color;
                    }

                    &:last-child {
                        border-right: 1px solid $dark-main-color;
                    }
                }

                &:first-child .day {
                    border-top: 1px solid $dark-main-color;
                }
            }
        }
    }
}
</style>