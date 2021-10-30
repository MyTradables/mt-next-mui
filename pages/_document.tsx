import { ServerStyleSheets } from '@mui/styles';
import Document, { DocumentInitialProps, Head, Html, Main, NextScript } from 'next/document';
import React from 'react';

export default class myDocument extends Document {
    render() {
        return (
            <Html lang='en'>
                <Head></Head>
                <body>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        )
    }
}

myDocument.getInitialProps = async (ctx): Promise<DocumentInitialProps> => {
    const sheets = new ServerStyleSheets();
    const originalRenderPage = ctx.renderPage;
    ctx.renderPage = () => {
        return originalRenderPage({
            enhanceApp: (App) => (props) => sheets.collect(<App {...props} />),
        });
    };
    const initialProps: DocumentInitialProps = await Document.getInitialProps(ctx);
    return (
        {
            ...initialProps,
            styles: [
                ...React.Children.toArray(initialProps.styles),
                sheets.getStyleElement()
            ]
        }
    )
}