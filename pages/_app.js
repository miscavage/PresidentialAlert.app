//Modules
import App, { Container } from 'next/app';
import Head from 'next/head';
import React from 'react';

/**
 * @class PAG (Presidential Alert Generator)
 * @author Mark Miscavage <markmiscavage@protonmail.com>
 * @description Custom <App>
 * @public
 * @version 1.0.0
 * @license MIT
 * @kind class
 */
class PAG extends App {
    /**
     * @description - On load, asynchronously fetch anything that resolves to a javaScript plain Object, which populates props.
     * @function getInitialProps
     * @static
     * @async
     */
    static async getInitialProps({ Component, router, ctx }) {
        let pageProps = {};

        if (Component.getInitialProps) {
            pageProps = await Component.getInitialProps(ctx);
        }

        return { pageProps };
    };

    /**
     * @description - React render
     * @function render
     */
    render() {
        const { Component, pageProps } = this.props;

        return (
            <Container>
                <Head>
                    <title>PresidentialAlert.app - Presidential Alert Generator</title>
                </Head>
                <Component {...pageProps} />
            </Container>
        )
    };
};

export default PAG;