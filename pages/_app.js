import App from 'next/app'; // let us not to add import to each files
import Head from 'next/head';
// Add the polaris app provider component, so to be wrapped to use polaris
import { AppProvider } from '@shopify/polaris';
import { Provider } from '@shopify/app-bridge-react';
import '@shopify/polaris/styles.css';
import translations from '@shopify/polaris/locales/en.json';
import Cookies from 'js-cookie';

class MyApp extends App {
    render() {
        const { Component, pageProps } = this.props;
        const config = {
            apiKey: API_KEY,
            shopOrigin: Cookies.get("shopOrigin"),
            forceRedirect: true,
        };

        return (
            <React.Fragment>
                <Head>
                    <title>Sample App</title>
                    <meta charSet='utf-8' />
                </Head>
                <Provider config={config}>
                    <AppProvider i18n={translations}>
                        <Component { ...pageProps } />
                    </AppProvider>
                </Provider>
            </React.Fragment>
        );
    }
}

export default MyApp;