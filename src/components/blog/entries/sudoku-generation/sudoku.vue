<template>
    <div :class="['sudoku-grid', `size-${size}`]">
        <div v-for="(row, rowIndex) in grid" :key="`row-${rowIndex}`" class="sudoku-row">
            <div
                v-for="(cell, columnIndex) in row"
                :key="`cell-${rowIndex}-${columnIndex}`"
                class="sudoku-cell"
            >{{cell}}</div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Sudoku',
    props: ['size', 'values'],
    data() {
        return {
            grid: [...Array(this.size)].map((_x, rowIndex) =>
                [...Array(this.size)].map(
                    (_y, cellIndex) =>
                        (this.values &&
                            this.values[rowIndex] &&
                            this.values[rowIndex][cellIndex]) ||
                        ' '
                )
            )
        };
    }
};
</script>

<style lang="scss">
@import '../../../../scss/globals.scss';
$cellSize: 40px;

.sudoku-grid {
    margin-top: 16px;
    margin-bottom: 16px;

    .sudoku-row {
        display: flex;
        margin: auto;

        .sudoku-cell {
            width: $cellSize;
            height: $cellSize;
            border-left: 1px solid $light-main-color;
            border-top: 1px solid $light-main-color;
            display: flex;
            justify-content: center;
            align-items: center;

            &:last-child {
                border-right: 1px solid $light-main-color;
            }
        }

        &:last-child {
            .sudoku-cell {
                border-bottom: 1px solid $light-main-color;
            }
        }
    }

    &.size-4 {
        .sudoku-row {
            width: $cellSize * 4;

            .sudoku-cell {
                &:nth-child(2n + 3) {
                    border-left: 2px solid $light-main-color;

                    &:last-child {
                        border-left: 1px solid $light-main-color;
                    }
                }
            }

            &:nth-child(2n + 3) {
                .sudoku-cell {
                    border-top: 2px solid $light-main-color;

                    &:last-child {
                        border-left: 1px solid $light-main-color;
                    }
                }
            }
        }
    }

    &.size-9 {
        .sudoku-row {
            width: $cellSize * 9;

            .sudoku-cell {
                &:nth-child(3n + 4) {
                    border-left: 2px solid $light-main-color;

                    &:last-child {
                        border-left: 1px solid $light-main-color;
                    }
                }
            }

            &:nth-child(3n + 4) {
                .sudoku-cell {
                    border-top: 2px solid $light-main-color;

                    &:last-child {
                        border-left: 1px solid $light-main-color;
                    }
                }
            }
        }
    }
}

.dark {
    .sudoku-grid {
        .sudoku-row {
            .sudoku-cell {
                border-left: 1px solid $dark-main-color;
                border-top: 1px solid $dark-main-color;

                &:last-child {
                    border-right: 1px solid $dark-main-color;
                }
            }

            &:last-child {
                .sudoku-cell {
                    border-bottom: 1px solid $dark-main-color;
                }
            }
        }

        &.size-4 {
            .sudoku-row {
                .sudoku-cell {
                    &:nth-child(2n + 3) {
                        border-left: 2px solid $dark-main-color;

                        &:last-child {
                            border-left: 1px solid $dark-main-color;
                        }
                    }
                }

                &:nth-child(2n + 3) {
                    .sudoku-cell {
                        border-top: 2px solid $dark-main-color;

                        &:last-child {
                            border-left: 1px solid $dark-main-color;
                        }
                    }
                }
            }
        }

        &.size-9 {
            .sudoku-row {
                .sudoku-cell {
                    &:nth-child(3n + 4) {
                        border-left: 2px solid $dark-main-color;

                        &:last-child {
                            border-left: 1px solid $dark-main-color;
                        }
                    }
                }

                &:nth-child(3n + 4) {
                    .sudoku-cell {
                        border-top: 2px solid $dark-main-color;

                        &:last-child {
                            border-left: 1px solid $dark-main-color;
                        }
                    }
                }
            }
        }
    }
}
</style>