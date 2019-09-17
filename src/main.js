import 'expose-loader?$!jquery';

import 'bootstrap/dist/js/bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';
import 'vue-cal/dist/vuecal.css'

import Vue from 'vue';
import VueAnalytics from 'vue-analytics';
import VueMeta from 'vue-meta';
import App from './App';
import router from './router';

if (window.location.href === process.env.PRODUCTION_URL) {
    Vue.use(VueAnalytics, {
        id: process.env.ANALYTICS_TRACKING_ID,
        router
    });

    (function(h,o,t,j,a,r){
        h.hj=h.hj||function(){(h.hj.q=h.hj.q||[]).push(arguments)};
        h._hjSettings={hjid:1458533,hjsv:6};
        a=o.getElementsByTagName('head')[0];
        r=o.createElement('script');r.async=1;
        r.src=t+h._hjSettings.hjid+j+h._hjSettings.hjsv;
        a.appendChild(r);
    })(window,document,'https://static.hotjar.com/c/hotjar-','.js?sv=');

    const script = document.createElement('script');
    script.type = 'text/javascript';
    document.getElementsByTagName('body')[0].appendChild(script);
    script.onload = function() {
        (adsbygoogle = window.adsbygoogle || []).push({
            google_ad_client: 'ca-pub-3020023783009364',
            enable_page_level_ads: true
        });
    };
    script.src = 'https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js';
}

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
