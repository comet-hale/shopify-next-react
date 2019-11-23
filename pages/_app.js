import App from 'next/app'; // let us not to add import to each files
import Head from 'next/head';
// Add the polaris app provider component, so to be wrapped to use polaris
import { AppProvider } from '@shopify/polaris';
import '@shopify/polaris/styles.css';
import translations from '@shopify/polaris/locales/en.json';

class MyApp extends App {
    render() {
        const { Component, pageProps } = this.props;
        return (
            <React.Fragment>
                <Head>
                    <title>Sample App</title>
                    <meta charSet='utf-8' />
                </Head>
                <AppProvider i18n={translations}>
                    <Component { ...pageProps } />
                </AppProvider>
            </React.Fragment>
        );
    }
}

export default MyApp;