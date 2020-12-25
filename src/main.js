import 'expose-loader?$!jquery';

import 'bootstrap/dist/js/bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';
import 'vue-cal/dist/vuecal.css';

import Vue from 'vue';
import VueAnalytics from 'vue-analytics';
import VueMeta from 'vue-meta';
import App from './app';
import router from './router';

if (process.env.NODE_ENV === 'production') {
    Vue.use(VueAnalytics, {
        id: process.env.ANALYTICS_TRACKING_ID,
        router
    });
}

Vue.use(VueMeta, {
    refreshOnceOnNavigation: true
});

// Monaco configuration. The self object is defined in the webpack configuration files
self.MonacoEnvironment = {
    getWorkerUrl: function(moduleId, label) {
        if (label === 'json') {
            return '/vue-personal-page/js/json.worker.bundle.js?';
        }
        if (label === 'css') {
            return '/vue-personal-page/js/css.worker.bundle.js?';
        }
        if (label === 'html') {
            return '/vue-personal-page/js/html.worker.bundle.js?';
        }
        if (label === 'typescript' || label === 'javascript') {
            return '/vue-personal-page/js/ts.worker.bundle.js?';
        }
        return '/vue-personal-page/js/editor.worker.bundle.js?';
    }
};

Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
    el: '#app',
    render: createElement => createElement(App),
    router
});
