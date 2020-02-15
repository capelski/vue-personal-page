<template>
    <BlogEntry
        :date="date"
        description="TODO"
        duration="0"
        :entry="entry"
        :isRenderedFromList="isRenderedFromList"
        :allTags="allTags"
        :tags="[tags.WebDevelopment]"
        :title="title"
    >
        <p>
            What a pretentious title isn't it? I bet I am already rubbing you up the wrong way. All I will talk about in this blog post is the set of technological choices and best practices we are using at
            <b>Sage</b> to develop our
            <b>web platforms</b>, which I've later on exported to my personal projects. Keep reading to streamline your own development experience!
        </p>

        <div v-if="!isRenderedFromList">
            <p>I will assume that you already have a version control solution in place, preferably a Git based one, and we will move into more challenging stuff. You cannot miss a dependency manager either (let's not get into useless npm vs yarn debates) and a module bundler to put all the pieces together (webpack is my one and only) as well as handling other tasks.</p>

            <p>
                So far so good! Next I will describe the concepts, what we want to achieve, and then provide a solution to achieve it.
                <b>I am using Visual Studio Code so the steps I describe are based on that particular IDE</b>. You might prefer other choices and I respect that. The IDE and libraries you use are irrelevant as long as you get to the same place. Let's move into what matters 🤩
            </p>

            <p class="text-center">
                <img
                    :src="`${images.letsGo}?$modena=vue-personal-page`"
                    alt="Enthusiastic men shouting"
                />
            </p>

            <h4 class="feature">Transpiling</h4>

            <p>JavaScript evolves fast. Sometimes, faster than what browsers can handle. You definitely want to use the latest and more comfortable ESNext features while still being compatible with all browsers. Transpilers convert your ECMA-whatever JS code to standard vanilla compliant code, at the reasonable cost of adding a build step to your software development pipeline.</p>

            <p>
                While you can be happily using
                <b>Babel</b> (13 million npm weekly downloads at the time of writing) to get the job done without bothering, I prefer to invest some more time during the project setup and go for
                <b>Typescript</b> instead (9 million npm weekly downloads), enjoying the safety only a statically typed language can provide.
            </p>

            <ul>
                <li>
                    Install typescript and a module loader as development dependencies
                    <div ref="typescriptInstall" class="code-editor"></div>
                </li>
                <li>
                    Add a
                    <b>tsconfig.json</b> configuration file. If you are migrating an existing project to typescript, you will probably want to use the
                    <b>allowJs</b> option to make the transition gradually, as well as waiting until the transition is complete to enable
                    <b>noImplicitAny</b>,
                    <b>strictNullChecks</b>, etc.
                    <div ref="typescriptConfig" class="code-editor"></div>
                </li>
                <li>
                    Configure your module bundler to resolve typescript files. In my case I use webpack, so this is how the story goes
                    <b>(webpack.config.js)</b>:
                    <div ref="typescriptWebpack" class="code-editor"></div>
                </li>
                <li>
                    Rename at least your entry point file from
                    <b>*.js to *.ts</b> and surrender to typescript awesomeness
                </li>
            </ul>

            <!-- <p>
                Example commit:
                <a
                    href="https://github.com/L3bowski/bachata-science/commit/efa93b78c2c59f529d561562daec0418f28bd7bd"
                    target="_blank"
                >refactor: put typescript in place</a>
            </p>-->

            <h4 class="feature">Formatting</h4>

            <p>Don't lose a single minute more writing semicolons, replacing double quotes with single quotes or arguing with your collegues about how to format ternary expressions and the maximum length of a line. Put a formatter that integrates with your IDE in place and it will save you priceless amounts of time while enforcing a standard code guideline.</p>

            <p>
                <a href="https://prettier.io/" target="_blank">Prettier</a> is a popular opinionated code formatter that will take care of formatting for you. It allows you to configure a few parameters (e.g. maximum line length) but, as it is opinionated, cannot be very customized (which will save you stupid dicussion with your teammates). You can either run it from the command line or use the VSCode extension to automatically format every file each time the file is saved.
            </p>

            <ul>
                <li>
                    Install prettier as a development dependency
                    <div ref="prettierInstall" class="code-editor"></div>
                </li>
                <li>
                    Add a
                    <b>prettier.rc</b> json configuration file with your favourite settings or skip this step if you are fine with prettier default settings
                    <div ref="prettierConfig" class="code-editor"></div>
                </li>
                <li>
                    Add npm scripts to run prettier
                    <div ref="prettierNpmScripts" class="code-editor"></div>
                </li>
                <li>
                    Install the VSCode prettier extension:
                    <b>esbenp.prettier-vscode</b>. If you are not doing so, I recommend you keep track of all the VSCode extensions you use in your project by creating a file named
                    <b>.vscode/extensions.json</b>
                    <div ref="prettierExtension" class="code-editor"></div>
                </li>
                <li>
                    Configure VSCode to enable the
                    <b>Format On Save</b> option. I also recommend you to set the prettier
                    <b>Require Config</b> option to true so prettier formatting will only be applied to projects that contain a prettier configuration file. You can save your VSCode settings to
                    <b>.vscode/settings.json</b>
                    <div ref="prettierExtensionConfig" class="code-editor"></div>
                </li>
            </ul>

            <!-- <p>
                Example commit:
                <a
                    href="https://github.com/L3bowski/bachata-science/commit/d5bbcc087c7e185ba7bd069a2af0256d592b7514"
                    target="_blank"
                >refactor: add prettier to the project</a> (be aware! I wrongly added it as a dependency instead of a devDependency)
            </p>-->

            <h4 class="feature">Linting</h4>

            <p>Static code analysis that will catch suspicious code (e.g. floating promises) and will enforce the best practices (e.g. alphabetical sorting on imports, functions maximum number of lines, etc.).</p>

            <p>tslint vs eslint</p>

            <p>
                Example commit:
                <a
                    href="https://github.com/L3bowski/bachata-science/commit/06da84cedaa055a1bc0500fc84e04946c1aaedd4"
                    target="_blank"
                >chore: add tslint</a>
            </p>

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

            <h4 class="feature">Spell checking</h4>
            <p>Not much to say here: use an extension for your IDE and you are good to go.</p>

            <p>
                I can already hear you saying...
                <i>
                    "What!?
                    <b>You haven't include React in the list!</b> How did you miss such hot topic!? Haven't you heard about Redux? How can you even consider yourself a developer!?"
                </i>. Yes, React is a great library that I also love using, but is more of an efficient algorithm when it comes to DOM manipulation rather than a universal concept applicable to any web project. I will leave it out of the list for now and I let you include it in yours when you write your own article 😉 See you in the next post!
            </p>
        </div>
    </BlogEntry>
</template>

<script>
import BlogEntry from '../../BlogEntry';
import { tags } from '../../tags';
import { createMonacoEditor } from '../monaco-utils';
import entriesRegistry from '../registry';
import letsGo from './lets-go.gif';

const date = '2020-01-19';
const entry = entriesRegistry['great-web-development'];
const title = 'Making web development great again';

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
                letsGo
            },
            tags,
            title
        };
    },
    mounted() {
        createMonacoEditor(
            this.$refs.typescriptInstall,
            'bash',
            `npm install --save-dev typescript awesome-typescript-loader`
        );
        createMonacoEditor(
            this.$refs.typescriptConfig,
            'javascript',
            `{
    "compilerOptions": {
        "esModuleInterop": true,
        "forceConsistentCasingInFileNames": true,
        "lib": ["dom", "es2017"],
        "module": "commonjs",
        "noImplicitAny": true,
        "noImplicitReturns": true,
        "noImplicitThis": true,
        "noUnusedLocals": true,
        "strictNullChecks": true,
        "target": "es5"
    },
    "exclude": ["node_modules/"],
    "include": ["./src"]
}`
        );
        createMonacoEditor(
            this.$refs.typescriptWebpack,
            'javascript',
            `module.exports = {
    entry: './src/index.tsx',
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                loader: 'awesome-typescript-loader',
                query: {
                    configFileName: './tsconfig.json'
                }
            },
            // Other loaders...
        ]     
    },
    // ...
    resolve: {
        extensions: ['.js', '.ts', '.tsx'],
    }
};`
        );

        createMonacoEditor(this.$refs.prettierInstall, 'bash', `npm install --save-dev prettier`);
        createMonacoEditor(
            this.$refs.prettierConfig,
            'javascript',
            `{
    "bracketSpacing": true,
    "printWidth": 100,
    "semi": true,
    "singleQuote": true,
    "tabWidth": 4,
    "trailingComma": "none"
}`
        );
        createMonacoEditor(
            this.$refs.prettierNpmScripts,
            'javascript',
            `{
    // ...
    "scripts": {
        // ...
        "prettier": "prettier --list-different \\"src/**/*.{ts,tsx}\\"",
        "prettier:fix": "prettier --write \\"src/**/*.{ts,tsx}\\""
    },
}`
        );
        createMonacoEditor(
            this.$refs.prettierExtension,
            'javascript',
            `{
    "recommendations": [
        "esbenp.prettier-vscode"
        // Add more extensions here...
    ]
}`
        );
        createMonacoEditor(
            this.$refs.prettierExtensionConfig,
            'javascript',
            `{
    "editor.formatOnSave": true,
    "prettier.requireConfig": true
    // Rest of the VSCode configuration parameters...
}`
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