import Raven from 'raven-js';

//https://0f04aa56d8924c4b97ea0984337a9ea0@sentry.io/195193
const sentry_key = '0f04aa56d8924c4b97ea0984337a9ea0';
const sentry_app = '195193';

export const sentry_url = `https://${sentry_key}@sentry.io/${sentry_app}`;

export function logException(ex, context){
    Raven.captureException(ex, {
        extra: context
    });

    /*slint no-console:0*/
    window && window.console && console.error && console.error(ex);
}