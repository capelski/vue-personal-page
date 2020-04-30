<template>
    <BlogEntry
        :date="date"
        description="How to efficiently manage your personal goals using Kanban strategy"
        duration="3"
        :entry="entry"
        :isRenderedFromList="isRenderedFromList"
        :languages="['eng']"
        :allTags="allTags"
        :tags="[tags.Dissemination]"
        :title="title"
    >
        <p>
            As a software engineer I am quite used to
            <b>project management</b> practice. With it's
            <b>never ending meetings</b>, the excess of
            <b>control mechanisms</b> and the recurrent
            <b>mail chains</b> it is certainly not the most popular system between the employees. Far from perfect however, it let to some techniques that are simple and effective when it comes to goals management.
        </p>
        <div v-if="!isRenderedFromList">
            <p>
                One of this techniques is called Kanban, an
                <a
                    href="https://en.wikipedia.org/wiki/Agile_software_development"
                    target="_blank"
                >Agile methodology</a> that, as many others, helps breaking a big and complex problem into small managable tasks and tackling them iteratively over time. The interesting aspect of Kanban is how this tasks get layed out in the Kanban board.
            </p>
            <p>
                The Kanban board consists in a set of columns which always include but are not limited to the following three:
                <b>Pending</b>,
                <b>In Progress</b> and
                <b>Done</b>. The three columns can have any names and you might find any number of additional columns (e.g. in software engineering we add columns to represent the different stages of a task development: implementation, testing, deployment, etc.). This is an empty Kanban board:
            </p>
            <div class="kanban-board">
                <div class="row">
                    <div class="col-sm-4 order-sm-1">
                        <div class="header">Pending</div>
                    </div>
                    <div class="col-sm-4 order-sm-4">&nbsp;</div>
                    <div class="col-sm-4 order-sm-2">
                        <div class="header">In Progress</div>
                    </div>
                    <div class="col-sm-4 order-sm-5">&nbsp;</div>
                    <div class="col-sm-4 order-sm-3">
                        <div class="header">Done</div>
                    </div>
                    <div class="col-sm-4 order-sm-6">&nbsp;</div>
                </div>
            </div>
            <p>When a new goal appears it always enters the Pending column, thus this column becomes the list of all the goals that need to be completed someday. The Pending column is sorted by priority, having the tasks that needs to be completed first in the very top. Let's turn the empty Kanban board into my personal goals Kanban board and add a few of them:</p>
            <div class="kanban-board">
                <div class="row">
                    <div class="col-sm-4 order-sm-1">
                        <div class="header">Pending</div>
                    </div>
                    <div class="col-sm-4 order-sm-4">Write post about Kanban</div>
                    <div class="col-sm-4 order-sm-7">Join CrossFit classes</div>
                    <div class="col-sm-4 order-sm-10">Start playing the guitar</div>
                    <div class="col-sm-4 order-sm-2">
                        <div class="header">In Progress</div>
                    </div>
                    <div class="col-sm-4 order-sm-5">&nbsp;</div>
                    <div class="col-sm-4 order-sm-8">&nbsp;</div>
                    <div class="col-sm-4 order-sm-11">&nbsp;</div>
                    <div class="col-sm-4 order-sm-3">
                        <div class="header">Done</div>
                    </div>
                    <div class="col-sm-4 order-sm-6">&nbsp;</div>
                    <div class="col-sm-4 order-sm-9">&nbsp;</div>
                    <div class="col-sm-4 order-sm-12">&nbsp;</div>
                </div>
            </div>
            <p>When we start working in any of the goals from the Pending column we move it into the In Progress column. One of the key principles to keep Kanban effective is to limit the number of tasks in the In Progress column. You will find the limit through trial and error but somewhat around 5 makes sense for most of the cases. I am currently working in the first task of the board so let's keep things updated:</p>
            <div class="kanban-board">
                <div class="row">
                    <div class="col-sm-4 order-sm-1">
                        <div class="header">Pending</div>
                    </div>
                    <div class="col-sm-4 order-sm-4">Join CrossFit classes</div>
                    <div class="col-sm-4 order-sm-7">Start playing the guitar</div>
                    <div class="col-sm-4 order-sm-2">
                        <div class="header">In Progress</div>
                    </div>
                    <div class="col-sm-4 order-sm-5">Write post about Kanban</div>
                    <div class="col-sm-4 order-sm-8">&nbsp;</div>
                    <div class="col-sm-4 order-sm-3">
                        <div class="header">Done</div>
                    </div>
                    <div class="col-sm-4 order-sm-6">&nbsp;</div>
                    <div class="col-sm-4 order-sm-9">&nbsp;</div>
                </div>
            </div>
            <p>
                As you have already guessed, once I finish writing this post I will move the task to the Done column, which becomes a historical register of all the goals that you have completed. And that's the Kanban theory in a nutshell! There are many online tools you can use to represent a Kanban board and the one I like the most is
                <a
                    href="https://trello.com/"
                    target="_blank"
                >Trello</a>. Trello boards can have any number of lists and each list contains cards that are much more powerful than just plain text: you can attach pictures, you can share them, you can label them, you can create check lists, etc. This is what my books Kanban board looks like in Trello:
            </p>
            <p class="text-center">
                <img
                    :src="`${images.trelloBoard}?$modena=vue-personal-page`"
                    alt="Kanban board in Trello"
                />
            </p>
            <p>This is it! Simple but effective Kanban helps you managing and tracking your personal goals. If you still keeping your todos in a messy text file, give it a try and surrender to it's simplicity 💪 See you in the next post!</p>
            <div class="kanban-board">
                <div class="row">
                    <div class="col-sm-4 order-sm-1">
                        <div class="header">Pending</div>
                    </div>
                    <div class="col-sm-4 order-sm-4">Join CrossFit classes</div>
                    <div class="col-sm-4 order-sm-7">Start playing the guitar</div>
                    <div class="col-sm-4 order-sm-2">
                        <div class="header">In Progress</div>
                    </div>
                    <div class="col-sm-4 order-sm-5">&nbsp;</div>
                    <div class="col-sm-4 order-sm-8">&nbsp;</div>
                    <div class="col-sm-4 order-sm-3">
                        <div class="header">Done</div>
                    </div>
                    <div
                        class="col-sm-4 order-sm-6"
                        style="text-decoration: line-through;"
                    >Write post about Kanban 👏</div>
                    <div class="col-sm-4 order-sm-9">&nbsp;</div>
                </div>
            </div>
        </div>
    </BlogEntry>
</template>

<script>
import BlogEntry from '../../blog-entry';
import { tags } from '../../tags';
import entriesRegistry from '../registry';
import trelloBoard from './trello-board.png';

const date = '2019-10-21';
const entry = entriesRegistry['kanban-goals-tracking'];
const title = 'Kanban: keep track of your goals';

export default {
    name: entry.id,
    components: {
        BlogEntry
    },
    props: ['isRenderedFromList', 'allTags'],
    data() {
        return {
            date,
            entry,
            images: {
                trelloBoard
            },
            tags,
            title
        };
    }
};
</script>

<style lang="scss">
@import '../../../../scss/globals.scss';

.kanban-board {
    text-align: center;
    margin: 40px 0;

    .header {
        font-weight: bold;
        border-top: 1px solid $light-main-color;
        border-bottom: 1px solid $light-main-color;
        margin: 10px 0;
    }
}

.dark {
    .kanban-board {
        .header {
            border-color: $dark-main-color;
        }
    }
}
</style>