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
        <p>
            Despite I do not work at Sage anymore, some of the tools I discovered there still are a very wise choice when it comes to web development. Since they did not fit in the
            <router-link :to="`/blog/web-dev-on-steroids-i`">first post</router-link>
            {{' '}}of this series, I'll briefly describe them in this second one. Don't worry.
            <b>I promise not to write a third part.</b>
        </p>

        <div v-if="!isRenderedFromList">
            <p>
                After having landed type safeness, code auto formatting, static analysis and spell checking to our project, we can forget about the more technical aspects of development. This second part is dedicated to ensuring code quality and repository integrity. Before you walk away, remember what somebody once said:
                <i>"Quality is free, but only to those who are willing to pay heavily for it"</i>.
            </p>

            <h4 class="feature">Natural language tests</h4>

            <p>The goal of natural language tests is both to have easily understandable tests and to provide a friendly description of the software (which might be used as documentation too). It requires some effort to setup and get used to it, but it helps making the software more scalable and easier to mantain.</p>
            <p>
                Before giving it a try, it sounds unnecessarily complicated:
                <i>"It will take much more to develop a new feature"</i>,
                <i>"It will increase the complexity of development"</i>,
                <i>"The benefits are not that clear"</i> and
                <i>"I am already familiar with Mocha/Jest"</i>. Yeap, all those sentences have a point. The transition to natural language testing doesn't happen overnight. However, let's recap for a second about the goal of having tests.
            </p>
            <p>
                All we want when it comes to unit tests is having
                <b>a set of scripts that run our code and ensure the software behaves in the way we expect</b>. As long as we fulfill the objective, any way of implement those scripts will be valid. From here on chosing a test runner or another seems merely a matter of personal preference.
            </p>
            <p>And, in fact, if you are aware of the importance of the tests and you are already caring about them like they were your beloved child, there is nothing wrong in sticking to Mocha, Jest or whichever test runner you are currently using. Nevertheless, let's have a look at a simple React + Jest + Enzyme example test:</p>
            <div ref="jestTestExample" class="code-editor"></div>
            <p>
                This kind of test structure is mixing the what (the behavior we want to test) with the how (the test implementation itself). Now, I must make clear than
                <b>the test implementation is essential</b>. No magical framework will avoid us having to declare and initialize the component properties, rendering the component and writing an expression to verify the component behaves in the expected way.
            </p>
            <p>The advantage of using natural language is that tests will focus on describing the software behavior, leaving the implementation as a secondary aspect, that will only be accessed when having to fix a failing test or when extending the product functionalities. This is what a natural language version of the previous test could look like:</p>
            <div ref="gherkinTestExample" class="code-editor"></div>
            <p>
                Under the hood, the implementation of the test would be very similar to the one depicted above. The only tricky part of it is that the test code needs to me mapped to the natural sentences.
                <a
                    href="https://www.npmjs.com/package/cucumber"
                    target="_blank"
                >Cucumber.js</a> is a popular gherkin library that helps as doing so. This is how the previous sentences can be defined through cucumber:
            </p>
            <div ref="cucumberTestExample" class="code-editor"></div>
            <p>As you can see, the test logic remains the same, but wrapped inside a natural language sentence that summarizes it's intention and which can later be used in any number of test cases. It requires some practice to learn how to split a test case into multiple sentences and how to make those sentences as reusable as possible but, once you get used to it, you will not want to test in any other way 💘</p>

            <h5>Steps</h5>

            <ul>TODO</ul>

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
    },
    mounted() {
        createMonacoEditor(
            this.$refs.jestTestExample,
            'javascript',
            `// ...
describe('Text component', () => {
    // ...
    let textProperties;
    // ...
    beforeEach(() => {
        textProperties = {
            // Default mandatory text properties...
        };
    });
    // ...
    it('should render a helper text when a helper text value is provided', () => {
        textProperties.helperText = 'This is a helper text';
        const textComponent = Enzyme.render(<TextComponent {...textProperties} />);
        expect(textComponent.find('[data-element="helper-text"]')).toHaveLength(1);
    });
    // ...
});`
        );

        createMonacoEditor(
            this.$refs.gherkinTestExample,
            'gherkin',
            `Feature: Text component

    Scenario: should render a helper text when a helper text value is provided
        Given a default set of text propeties
        And setting the helperText property value to "This is a helper text"
        When rendering the text component
        Then the text component contains a helper text element
`
        );

        createMonacoEditor(
            this.$refs.cucumberTestExample,
            'javascript',
            `import { Given, Then, When } from 'cucumber';
// ...

let textProperties;
let textComponent;

Given('a default set of text propeties', () => {
    textProperties = {
        // Default mandatory text properties...
    };
});

Given('setting the helperText property value to {string}', (helperTextValue) => {
    textProperties.helperText = helperTextValue;
});

When('rendering the text component', () => {
    textComponent = Enzyme.render(<TextComponent {...textProperties} />);
});

Then('the text component contains a helper text element', () => {
    expect(textComponent.find('[data-element="helper-text"]')).toHaveLength(1);
});
`
        );
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