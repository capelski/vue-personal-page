<template>
    <BlogEntry
        :date="date"
        description="Some techniques to make web development more efficient and how to put them into practice"
        duration="8"
        :entry="entry"
        :isRenderedFromList="isRenderedFromList"
        :languages="entry.languages"
        :allTags="allTags"
        :tags="[tags.WebDevelopment]"
        :title="title"
    >
        <p>
            Despite I do not work at Sage anymore, some of the tools I discovered there still are a
            very wise choice when it comes to web development. Since they did not fit in the
            <router-link :to="`/blog/web-dev-on-steroids-i`">first post</router-link>
            {{ ' ' }}of this series, I'll briefly describe them in this second one. Don't worry.
            <b>I promise not to write a third part.</b>
        </p>

        <div v-if="!isRenderedFromList">
            <p>
                After having landed type safeness, code auto formatting, static analysis and spell
                checking to our project, we can forget about the more technical aspects of
                development. This second part is dedicated to ensuring code quality and repository
                integrity. Before you walk away, remember what somebody once said:
                <i>"Quality is free, but only to those who are willing to pay heavily for it"</i>.
            </p>

            <h4 class="feature">Natural language tests</h4>

            <p>
                The goal of natural language tests is both to have easily understandable tests and
                to provide a friendly description of the software (which might be used as
                documentation too). It requires some effort to setup and get used to it, but it
                helps making the software more scalable and easier to mantain.
            </p>
            <p>
                Before giving it a try, it sounds unnecessarily complicated:
                <i>"It will take much more to develop a new feature"</i>,
                <i>"It will increase the complexity of development"</i>,
                <i>"The benefits are not that clear"</i> and
                <i>"I am already familiar with Mocha/Jest"</i>. Yeap, all those sentences have a
                point. The transition to natural language testing doesn't happen overnight. However,
                let's recap for a second about the goal of having tests.
            </p>
            <p>
                All we want when it comes to unit tests is having
                <b
                    >a set of scripts that run our code and ensure the software behaves in the way
                    we expect</b
                >. As long as we fulfill the objective, any way of implement those scripts will be
                valid. From here on chosing a test runner or another seems merely a matter of
                personal preference.
            </p>
            <p>
                And, in fact, if you are aware of the importance of the tests and you are already
                caring about them like they were your beloved child, there is nothing wrong in
                sticking to Mocha, Jest or whichever test runner you are currently using.
                Nevertheless, let's have a look at a simple
                <i>React + Jest + Enzyme</i> example test:
            </p>
            <div ref="jestTestExample" class="code-editor"></div>
            <p>
                This kind of test structure is mixing the what (the behavior we want to test) with
                the how (the test implementation itself). Now, I must make clear than
                <b>the test implementation is essential</b>. No magical framework will avoid us
                having to declare and initialize the component properties, rendering the component
                and writing an expression to verify the component behaves in the expected way.
            </p>
            <p>
                The advantage of using natural language is that tests will focus on describing the
                software behavior, leaving the implementation as a secondary aspect, that will only
                need to be accessed when having to fix a failing test or when extending the product
                functionalities. This is what a natural language version of the previous test could
                look like (e.g.
                <i>text-component.feature</i>):
            </p>
            <div ref="gherkinTestExample" class="code-editor"></div>
            <p>
                Under the hood, the implementation of the test would be very similar to the one
                depicted above. The only tricky part of it is that the test code needs to me mapped
                to the natural sentences.
                <a href="https://www.npmjs.com/package/cucumber" target="_blank">Cucumber.js</a> is
                a popular gherkin library that helps us doing so. This is how the previous sentences
                can be defined through cucumber (e.g. <i>text-component.step.tsx</i>):
            </p>
            <div ref="cucumberTestExample" class="code-editor"></div>
            <p>
                As you can see, the test logic remains the same, but wrapped inside natural language
                sentences that summarize their intention and which can later be used in any number
                of test cases. It requires some practice to learn how to split a test case into
                multiple sentences and how to make those sentences as reusable as possible but, once
                you get used to it, you will not want to test in any other way 💘
            </p>

            <h5>Steps</h5>

            <ul>
                <li>
                    Install cucumber
                    <div ref="cucumberInstall" class="code-editor"></div>
                </li>
                <li>
                    Create a
                    <b>cucumber.js</b> file in the root of the project with the following content:
                    <div ref="cucumberConfig" class="code-editor"></div>
                </li>
                <li>
                    If the project is meant to run in the browser, we will need to mock the
                    document. We can do that with
                    <b>jsdom</b> and a similar intialization code that we will require from the test
                    npm script (e.g. <i>cucumber-environment.ts</i>):
                    <div ref="jsdomInstall" class="code-editor"></div>
                    <div ref="jsdomConfig" class="code-editor"></div>
                </li>
                <li>
                    Finally, add a test npm script to package.json that will run cucumber, requiring
                    the jsdom initialization file, the
                    <b>step definition</b> files and the <b>feature</b> files. You might want to
                    modify the require globs according to your project structure:
                    <div ref="javascriptTest" class="code-editor"></div>
                </li>
                <li>
                    If using typescript, install the corresponding types and ts-node, and adapt the
                    test npm script to require ts-node too:
                    <div ref="cucumberTypescriptInstall" class="code-editor"></div>
                    <div ref="typescriptTest" class="code-editor"></div>
                </li>
            </ul>

            <h4 class="feature">Code coverage</h4>

            <p>
                Next natural step after adding tests to your code is making sure that you test all
                the parts that need to be tested. I don't advice to cover 100% of the lines, but you
                definitely need to address the business critical logic that might turn in production
                critical bugs. There is a variety of test coverage tools that will instrument your
                code before running the tests and will keep track of the lines that are being
                addressed during the tests execution.
            </p>
            <p>
                Personally, I have only worked with
                <a href="https://istanbul.js.org/" target="_blank">istanbul.js</a>. It is easy to
                run (you only need to add a new npm script) and provides helpful Html reports,
                highlighting the lines that are going unnoticed in the code files. Feel free to
                explore alterantives, but this is the horse I am betting on.
            </p>
            <p class="text-center">
                <img
                    :src="`/vue-personal-page/${images.coverageReport}`"
                    alt="istanbul.js coverage report"
                />
            </p>

            <h5>Steps</h5>

            <ul>
                <li>
                    Install istanbul (for some reason, they named the npm package
                    <b>nyc</b>):
                    <div ref="nycInstall" class="code-editor"></div>
                </li>
                <li>
                    Create a
                    <b>.nycrc</b> istanbul configuration file with the following contents (you might
                    need to adapt the configuration to your needs):
                    <div ref="nycConfig" class="code-editor"></div>
                </li>
                <li>
                    Add a
                    <b>coverage</b> npm script (that will run your already existing <b>test</b> npm
                    script):
                    <div ref="coverageNpmScript" class="code-editor"></div>
                </li>
                <li>
                    Add
                    <b>.nyc_output/</b> and <b>coverage/</b> folders to your
                    <b>.gitignore</b>
                </li>
            </ul>

            <h4 class="feature">Repository integrity</h4>

            <p>
                The last thing you want to happen after having defined a quality assurance pipeline
                (e.g. linting, formatting, testing, etc.) is to forget about it as the time goes by.
                No matter how careful developer you are, you will fail to remember that checklist
                some times (specially on busy deadlines), so, running those verifications
                automatically is quite of a good idea.
            </p>

            <p>
                Git provides a way to fire off custom scripts when certain actions occur (e.g. when
                a commit is about to be made, when a branch is about to be pushed, etc.). In fact,
                when you initialize a new repository with
                <b>git init</b>, Git populates the hooks directory with a bunch of example scripts
                (see
                <a href="https://git-scm.com/book/en/v2/Customizing-Git-Git-Hooks" target="_blank"
                    >Git documentation</a
                >
                for more details).
            </p>

            <p>
                If you don't want to go that deep when it comes to Git hooks, and certainly you
                don't need to, there is a tool called
                <a href="https://github.com/typicode/husky" target="_blank">Husky</a> (woof!) that
                will deal with that complexity for you. By associating a set of Git actions and
                commands in your package.json, Husky will run the corresponding commands each time a
                Git action occurs. This way you can make sure, for example, that you never push
                failing tests to your branch again.
            </p>

            <h5>Steps</h5>

            <ul>
                <li>
                    Install husky:
                    <div ref="huskyInstall" class="code-editor"></div>
                </li>
                <li>
                    Create a
                    <b>husky</b> section in your package.json file specifying the commands to be
                    executed for each Git action. For example:
                    <div ref="huskyConfig" class="code-editor"></div>
                </li>
            </ul>

            <h4 class="feature">Conventional commits</h4>

            <p>
                Last but not least! Acknowledgement is key when it comes to software quality, and
                part of the knowledge transfer is done over the Git history. You might already be
                taking your time to write descriptive commit messages and that's admirable (nothing
                is more useless than "minor fixes" like messages). You can however take a step
                further by enforcing a commit convention and take advantage of some additional
                benefits while keeping your Git history crystal clear.
            </p>
            <p>
                <a href="https://www.conventionalcommits.org/en/v1.0.0/" target="_blank"
                    >Conventional commits</a
                >
                is a lightweight convention to make the commit messages more descriptive and the Git
                history more explicit. In addition, it makes it easier to automate certain aspects
                of the software releases (e.g., generating a changelog file for free). The
                convention can be automatically verified in every commit with the help of tools like
                <a href="https://commitlint.js.org/" target="_blank">commitlint</a> and, once the
                standard is put into place, you can take advantage of tools that rely on it (e.g.
                <a href="https://www.npmjs.com/package/standard-version" target="_blank"
                    >standard version</a
                >, a utility for versioning using semver and CHANGELOG generation). Here are some
                example commit messages:
            </p>
            <div ref="conventionalCommits" class="code-editor"></div>

            <h5>Steps</h5>

            <ul>
                <li>
                    Install commitlint and the conventional commits configuration package (or any
                    other configuration package you prefer):
                    <div ref="commitlintInstall" class="code-editor"></div>
                </li>
                <li>
                    Create a
                    <b>commitlint.config.js</b> configuration file, exporting the previously
                    installed configuration:
                    <div ref="commitlintConfig" class="code-editor"></div>
                </li>
                <li>
                    Finally, run commitlint for every commit. Eventhough there are other ways, you
                    can do that through Husky hooks:
                    <div ref="commitlintHusky" class="code-editor"></div>
                </li>
            </ul>

            <p class="conclusions">
                And that's the end of it! Four simple concepts that will help you making your tests
                more readable (and can even qualify them as public documentation), spotting non
                tested lines in your code, preventing from commiting/pushing unfinished code and
                making your Git history more descriptive. Give them a try and don't wait to add any
                combination of them to your projects 💪 See you in the next post!
            </p>
        </div>
    </BlogEntry>
</template>

<script>
import BlogEntry from '../../blog-entry';
import { tags } from '../../tags';
import { createMonacoEditor } from '../monaco-utils';
import entriesRegistry from '../registry';
import coverageReport from './coverage-report.png';

const date = '2020-03-27';
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
            images: {
                coverageReport
            },
            tags,
            title
        };
    },
    mounted() {
        if (!this.isRenderedFromList) {
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
            createMonacoEditor(
                this.$refs.cucumberInstall,
                'bash',
                'npm install --save-dev cucumber'
            );
            createMonacoEditor(
                this.$refs.cucumberConfig,
                'javascript',
                `module.exports = {
    default: \`--format-options '{"snippetInterface": "synchronous"}'\`
};`
            );
            createMonacoEditor(this.$refs.jsdomInstall, 'bash', 'npm install --save-dev jsdom');
            createMonacoEditor(
                this.$refs.jsdomConfig,
                'typescript',
                `import { Before } from 'cucumber';
import { DOMWindow, JSDOM } from 'jsdom';

const parsedGlobal = (global as unknown) as {
    window: DOMWindow;
    document: Document;
    navigator: Navigator;
};

const mockDocument = () => {
    const testingDocument = new JSDOM(\`
        <!doctype html>
        <html>
            <head></head>
            <body></body>
        </html>\`);

    parsedGlobal.window = testingDocument.window;
    parsedGlobal.document = testingDocument.window.document;
    parsedGlobal.navigator = testingDocument.window.navigator;
};

// Cucumber fails to run all tests if the global document is not initialized here,
// before start running any scenario
mockDocument();

Before(mockDocument);`
            );
            createMonacoEditor(
                this.$refs.cucumberTypescriptInstall,
                'bash',
                'npm install --save-dev @types/cucumber @types/jsdom ts-node'
            );
            createMonacoEditor(
                this.$refs.javascriptTest,
                'json',
                `{
    // ...
    "scripts": {
        // ...
        "test": "cucumber-js --require cucumber-environment.js --require src/**/__step-definitions__/*.step.{js,jsx} src/**/feature/*.feature",
    },
}`
            );
            createMonacoEditor(
                this.$refs.typescriptTest,
                'json',
                `{
    // ...
    "scripts": {
        // ...
        "test": "cucumber-js --require-module ts-node/register --require cucumber-environment.ts --require src/**/__step-definitions__/*.step.{ts,tsx} src/**/feature/*.feature",
    },
}`
            );

            createMonacoEditor(this.$refs.nycInstall, 'bash', 'npm install --save-dev nyc');
            createMonacoEditor(
                this.$refs.coverageNpmScript,
                'json',
                `{
    // ...
    "scripts": {
        // ...
        "coverage": "nyc npm run test",
    },
}`
            );
            createMonacoEditor(
                this.$refs.nycConfig,
                'json',
                `{
    "cache": false,
    "check-coverage": false,
    "extension": [".ts", ".tsx"],
    "include": ["src/components/*.ts", "src/components/*.tsx"],
    "exclude": ["__step-definitions__/"],
    "sourceMap": true,
    "reporter": ["html", "text", "text-summary"],
    "all": true,
    "instrument": true
}`
            );

            createMonacoEditor(this.$refs.huskyInstall, 'bash', 'npm install --save-dev husky');
            createMonacoEditor(
                this.$refs.huskyConfig,
                'json',
                `{
    // ...
    "husky": {
        "hooks": {
            // Verify linting and formatting before each commit
            "pre-commit": "npm run lint && npm run prettier",
            // Run the tests before pushing commits to any origin branch
            "pre-push": "npm test"
        }
    },
}`
            );

            createMonacoEditor(
                this.$refs.conventionalCommits,
                'bash',
                `feat(lang): add polish language

feat: allow provided config object to extend other configs

docs: correct spelling of CHANGELOG`
            );
            createMonacoEditor(
                this.$refs.commitlintInstall,
                'bash',
                'npm install --save-dev @commitlint/cli @commitlint/config-conventional'
            );
            createMonacoEditor(
                this.$refs.commitlintConfig,
                'javascript',
                `module.exports = {
    extends: ['@commitlint/config-conventional']
};`
            );
            createMonacoEditor(
                this.$refs.commitlintHusky,
                'json',
                `{
    // ...
    "husky": {
        "hooks": {
            // ...
            "commit-msg": "commitlint -E HUSKY_GIT_PARAMS",
        }
    },
}`
            );
        }
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

.conclusions {
    margin-top: 80px;
}

.dark {
    h4.feature {
        border-bottom: 1px solid $dark-main-color;
    }
}
</style>
