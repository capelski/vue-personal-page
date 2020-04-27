<template>
    <BlogEntry
        :date="date"
        description="Some techniques to make web development more efficient and how to put them into practice"
        duration="7"
        :entry="entry"
        :isRenderedFromList="isRenderedFromList"
        :languages="['ENG']"
        :allTags="allTags"
        :tags="[tags.WebDevelopment]"
        :title="title"
    >
        <p>
            Perhaps steroids is too much saying, but you can definitely get more out of web development. In this post I will explain some of the techniques we use at
            <b>Sage</b> to develop our web platforms, both front end and back end, which I've later on exported to my personal projects too. Keep reading to streamline your own development experience!
        </p>

        <div v-if="!isRenderedFromList">
            <p>
                If you are reading this I will understand that you have made your homework and you already have a Git based version control solution, a dependency manager and a module bundler in place. Having the basics covered we can move into more challenging stuff. Be aware that I am using
                <b>Visual Studio Code</b>, so the solutions I provide are based on that particular IDE. If you prefer other choices, you will have to investigate the available tools out there, but the concepts are still applicable. That being said, let's rock and roll 🤩
            </p>

            <p class="text-center">
                <img
                    :src="`${images.letsGo}?$modena=vue-personal-page`"
                    alt="Enthusiastic men shouting"
                />
            </p>

            <h4 class="feature">Type safety</h4>

            <p>JavaScript was designed in 10 days. There are some things that make it a great language but it also has some flaws: e.g. not being able to detect certain common errors before runtime. Given that you already have to transpile your code, adding a build process to your development pipline, why not investing a bit more effort and enjoy the safeness only a statically typed language can provide?</p>
            <p></p>
            <p>
                Regardless your project size and complexity, having meta data about your code will help it being more descriptive and will allow you to run some compilation checks, using awesome libraries such as
                <a
                    href="https://palantir.github.io/tslint/"
                    target="_blank"
                >Typescript</a>. A very cool aspect of using Typescript with an appropriate IDE is that you get a list of all the attributes and methods available in an object when you type, a feature also known as Intellisense. Once you try it, you will never be able to develop without it again!
            </p>

            <p class="text-center">
                <img
                    :src="`${images.intellisense}?$modena=vue-personal-page`"
                    alt="Typescript autocompletetion example"
                />
            </p>

            <h5>Steps</h5>

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

            <h4 class="feature">Formatting</h4>

            <p>Don't lose a single minute more writing semicolons, replacing double quotes with single quotes or arguing with your collegues about how to format ternary expressions and lines maximum length. Put a formatter that integrates with your IDE in place and it will save you priceless amounts of time while enforcing a standard code guideline.</p>

            <p>
                <a href="https://prettier.io/" target="_blank">Prettier</a> is a popular opinionated code formatter that will take care of formatting for you. It allows you to configure a few parameters (e.g. maximum line length) but, as it is opinionated, cannot be very customized (which will save you stupid dicussion with your teammates). You can either run it from the command line or use the VSCode extension to automatically format every file each time the file is saved.
            </p>

            <h5>Steps</h5>

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
                    Install the VSCode prettier extension
                    <b>(esbenp.prettier-vscode)</b> and add it to
                    <b>.vscode/extensions.json</b>
                    <div ref="prettierExtension" class="code-editor"></div>
                </li>
                <li>
                    Configure VSCode to enable the
                    <b>Format On Save</b> option by adding the following property to
                    <b>.vscode/settings.json</b>. I also recommend you to set the prettier
                    <b>Require Config</b>
                    property to true so prettier formatting will only be applied to projects that contain a prettier configuration file
                    <div ref="prettierExtensionConfig" class="code-editor"></div>
                </li>
            </ul>

            <h4 class="feature">Linting</h4>

            <p>
                Static code analysis that will catch suspicious code (e.g. floating promises) and will enforce the best practices (e.g. functions maximum number of lines).
                <a
                    href="https://eslint.org/"
                    target="_blank"
                >eslint</a> is a great linting tool, which can be highly customized and manages to automatically fix certain types of issues. With a bit of additional confugration it also supports Typescript language, which makes it an ideal candidate to replace the deprecated
                <a
                    href="https://palantir.github.io/tslint/"
                    target="_blank"
                >tslint</a>.
            </p>

            <h5>Steps</h5>

            <ul>
                <li>
                    Install eslint as a development dependency
                    <div ref="eslintInstall" class="code-editor"></div>
                </li>
                <li>
                    Create a .eslintrc.js configuration file. You can either copy an existing one (remember to install the required dependencies) or create a new one with the eslint command line utility
                    <div ref="eslintConfig" class="code-editor"></div>
                </li>
                <li>
                    Add npm scripts to run eslint
                    <div ref="eslintNpmScripts" class="code-editor"></div>
                </li>
                <li>
                    If you are using or want to use prettier, you will need to configure eslint to respect prettier rules
                    <div ref="eslintPrettierInstall" class="code-editor"></div>
                    <div ref="eslintPrettierConfig" class="code-editor"></div>
                </li>
                <li>
                    Install the VSCode eslint extension
                    <b>(dbaeumer.vscode-eslint)</b> and add it to
                    <b>.vscode/extensions.json</b>
                    <div ref="eslintExtension" class="code-editor"></div>
                </li>
                <li>
                    Configure VSCode to enable the
                    <b>Format On Save</b> option as well as the
                    <b>Format: Enable</b> eslint option by adding the following properties to
                    <b>.vscode/settings.json</b>
                    <div ref="eslintExtensionConfig" class="code-editor"></div>
                </li>
                <li>
                    Optionally some more plugins can be installed on top of eslint. For example, I like to enforce the import statements to be alphabetically sorted. We can use
                    <b>eslint-plugin-import</b> for such purpose
                    <div ref="eslintImportInstall" class="code-editor"></div>
                    <div ref="eslintImportConfig" class="code-editor"></div>
                </li>
                <li>
                    Finally, you might need to
                    <b>tweak .eslintrc.js</b> file to meet your needs, specially if you are using Typescript and/or React
                </li>
            </ul>

            <h4 class="feature">Spell checking</h4>

            <p>
                So far, words are the most useful concept when it comes to communication between humans. If you want your code to be descriptive, you must avoid variable names such as
                <i>el</i>,
                <i>doc</i>,
                <i>i</i> and use words with actual meaning:
                <i>element</i>,
                <i>document</i>,
                <i>index</i>. And in case you are already paying extreme attention to variable names, even the most literate software engineer introduce typos when they code.
            </p>

            <p>
                To help us being consistent in the practice of typing meaningful names, we have the amazing
                <b>Code Spell Checker</b> tool. It will point out invalid words and typos, and it also recognizes the camel case convention so it will understand
                <i>aNameLikeThis</i>. In addition, it allows defining a white list of words that will not be considered in
                <b>.vscode/settings.json</b>, for specific software/project words that cannot be found in an english dictionary.
            </p>

            <h5>Steps</h5>

            <ul>
                <li>
                    Install the VSCode Code Spell Check extension
                    <b>(streetsidesoftware.code-spell-checker)</b> and add it to
                    <b>.vscode/extensions.json</b>
                    <div ref="spellCheckExtension" class="code-editor"></div>
                </li>
            </ul>

            <p class="conclusions">
                That's it for now! The concepts are not rocket science, but they greatly help me feeling comfortable when working on a project. Bring them in and forget about styling code, writing typos,
                and searching in the docs for the available members in objects. Discover how to make your development experience even better in the second chapter of this series 🍾🚀 (coming soon to the best theatres). See you in the next post!
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
import intellisense from './intellisense.png';

const date = '2020-02-20';
const entry = entriesRegistry['web-dev-on-steroids-i'];
const title = 'Web development on steroids: Vol. 1';

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
                letsGo,
                intellisense
            },
            tags,
            title
        };
    },
    mounted() {
        if (!this.isRenderedFromList) {
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

            createMonacoEditor(
                this.$refs.prettierInstall,
                'bash',
                `npm install --save-dev prettier`
            );
            createMonacoEditor(
                this.$refs.prettierConfig,
                'json',
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
                'json',
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
                'json',
                `{
    "recommendations": [
        "esbenp.prettier-vscode"
        // ...
    ]
}`
            );
            createMonacoEditor(
                this.$refs.prettierExtensionConfig,
                'json',
                `{
    "editor.formatOnSave": true,
    "prettier.requireConfig": true
    // Rest of the VSCode configuration parameters...
}`
            );

            createMonacoEditor(this.$refs.eslintInstall, 'bash', `npm install --save-dev eslint`);
            createMonacoEditor(this.$refs.eslintConfig, 'bash', `npx eslint --init`);
            createMonacoEditor(
                this.$refs.eslintNpmScripts,
                'json',
                `{
    // ...
    "scripts": {
        // ...
        "lint": "eslint -c .eslintrc.js --ext ts,tsx ./src",
        "lint:fix": "eslint -c .eslintrc.js --ext ts,tsx --fix ./src",
    },
}`
            );
            createMonacoEditor(
                this.$refs.eslintPrettierInstall,
                'bash',
                `npm install --save-dev eslint-config-prettier eslint-plugin-prettier`
            );
            createMonacoEditor(
                this.$refs.eslintPrettierConfig,
                'javascript',
                `// .eslintrc.js
module.exports = {
    // ...
    extends: [
        // ...
        'prettier/@typescript-eslint', // Disables conflicting rules
        'plugin:prettier/recommended' // Displays prettier errors as eslint errors
    ],

};`
            );
            createMonacoEditor(
                this.$refs.eslintExtension,
                'json',
                `{
    "recommendations": [
        "dbaeumer.vscode-eslint"
        // ...
    ]
}`
            );
            createMonacoEditor(
                this.$refs.eslintExtensionConfig,
                'json',
                `{
    "editor.formatOnSave": true,
    "eslint.format.enable": true
    // Rest of the VSCode configuration parameters...
}`
            );
            createMonacoEditor(
                this.$refs.eslintImportInstall,
                'bash',
                `npm install --save-dev eslint-plugin-import`
            );
            createMonacoEditor(
                this.$refs.eslintImportConfig,
                'javascript',
                `module.exports = {
    // ...
    extends: [
        // ...
        'plugin:import/errors',
        'plugin:import/typescript'
    ],
    
    rules: {
        // ...
        'import/order': ['error', { alphabetize: { order: 'asc' } }]
    },
};`
            );

            createMonacoEditor(
                this.$refs.spellCheckExtension,
                'json',
                `{
    "recommendations": [
        "streetsidesoftware.code-spell-checker"
        // ...
    ]
}`
            );
        }
    }
};
</script>


<style lang="scss">
@import '../../../../scss/globals.scss';

h4.feature {
    margin-top: 64px;
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