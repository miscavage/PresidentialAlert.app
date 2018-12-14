//Modules
import Document, { Head, Main, NextScript } from 'next/document'

/**
 * @author Mark Miscavage <markmiscavage@protonmail.com>
 * @description Custom <Document>
 * @public
 * @version 1.0.0
 * @license MIT
 */
export default class MyDocument extends Document {
    /**
     * @description - On load, asynchronously fetch anything that resolves to a javaScript plain Object, which populates props.
     * @function getInitialProps
     * @static
     * @async
     */
    static async getInitialProps(ctx) {
        const initialProps = await Document.getInitialProps(ctx)
        return { ...initialProps }
    };

    /**
     * @description - React render
     * @function render
     */
    render() {
        return (
            <html lang='en'>
                <body>
                    <Main />
                    <NextScript />
                </body>
            </html>
        )
    };
};