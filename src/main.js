import 'expose-loader?$!jquery';
import 'bootstrap/dist/js/bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

import Vue from 'vue';
import App from './App';
import router from './router';
import VueMeta from 'vue-meta'

Vue.use(VueMeta, {
  	refreshOnceOnNavigation: true
});

// Monaco configuration. The self object is defined in the webpack configuration files
self.MonacoEnvironment = {
	getWorkerUrl: function (moduleId, label) {
		if (label === 'json') {
			return '/js/json.worker.bundle.js?$modena=vue-personal-page';
		}
		if (label === 'css') {
			return '/js/css.worker.bundle.js?$modena=vue-personal-page';
		}
		if (label === 'html') {
			return '/js/html.worker.bundle.js?$modena=vue-personal-page';
		}
		if (label === 'typescript' || label === 'javascript') {
			return '/js/ts.worker.bundle.js?$modena=vue-personal-page';
		}
		return '/js/editor.worker.bundle.js?$modena=vue-personal-page';
	}
};

Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
	el: '#app',
	render: createElement => createElement(App),
	router
});
