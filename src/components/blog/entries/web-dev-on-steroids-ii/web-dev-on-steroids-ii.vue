<template>
    <BlogEntry
        :date="date"
        description="Some techniques to make web development more efficient and how to put them into practice"
        duration="TODO"
        :entry="entry"
        :isRenderedFromList="isRenderedFromList"
        :allTags="allTags"
        :tags="[tags.WebDevelopment]"
        :title="title"
    >
        <p>INTRO</p>

        <div v-if="!isRenderedFromList">
            <h4 class="feature">Testing</h4>

            <p>
                I know! You are already feeling lazy only by having to read about it. But let's recap for a minute. All we want (for christmas) when we decide to add tests to our application is having a set of "scripts" that will run our code and ensure it satisfies certain behaviours. Before definitely droping your hopes on testing, give me a chance to describe you my
                <b>BDD approach</b> with cucumber.js.
            </p>

            <p>
                Example commit:
                <a
                    href="https://github.com/L3bowski/bachata-science/commit/6aa49f102622ff5d0495cff5af1dfddfb34de407"
                    target="_blank"
                >feat: setup cucumber testing</a>
            </p>

            <h4 class="feature">Code Coverage</h4>

            <p>Next natural step after adding tests to your code base is wanting to know which parts of the code are effectively tested and which are the lines that are going unnoticed and will result in production critical bugs. Choose some code coverage tool and never miss testing an important line again.</p>

            <p>Istanbul</p>

            <p>
                Example commit:
                <a
                    href="https://github.com/L3bowski/bachata-science/commit/20e3d3fbb46da05ba56148c4d8800c1ca50cfa2d"
                    target="_blank"
                >test: add nyc test coverage reporter</a>
            </p>

            <h4 class="feature">Repository integrity</h4>

            <p>It is useless to put all these measures into place if they are not automatically enforced in each team member's contributions. Git has a set of hooks that allow firing off custom scripts when certain actions occur. Learn how to use them to always keep your code up to your the quality standards.</p>

            <p>Husky</p>

            <p>
                Example commit:
                <a
                    href="https://github.com/L3bowski/bachata-science/commit/904bf9771b20d9527e363d36d87ba2b215f58c0c"
                    target="_blank"
                >chore: add husky</a>
            </p>

            <h4 class="feature">Conventional commits</h4>

            <p>Make your commit messages more descriptive and your git history more explicit, using the easy set of rules provided by the conventional commits specification. Say goodbye to "minor fixes" like commit messages and get a changelog file for free!</p>

            <p>commitlint</p>

            <p>
                Example commit:
                <a
                    href="https://github.com/L3bowski/bachata-science/commit/fda822903f720626965ef33e5aab02d9754a2a58"
                    target="_blank"
                >chore: add commitlint to validate commit messages</a>
            </p>
        </div>
    </BlogEntry>
</template>

<script>
import BlogEntry from '../../BlogEntry';
import { tags } from '../../tags';
import { createMonacoEditor } from '../monaco-utils';
import entriesRegistry from '../registry';

const date = 'TODO';
const entry = entriesRegistry['web-dev-on-steroids-ii'];
const title = 'Web development on steroids: Vol. 2';

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
            images: {},
            tags,
            title
        };
    }
};
</script>


<style lang="scss">
@import '../../../../scss/globals.scss';

h4.feature {
    margin-top: 40px;
    padding-bottom: 10px;
    border-bottom: 1px solid $light-main-color;
}

.dark {
    h4.feature {
        border-bottom: 1px solid $dark-main-color;
    }
}
</style>