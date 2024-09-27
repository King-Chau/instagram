import '../styles/globals.css'
import { Fragment } from 'react'
import { Analytics } from '@vercel/analytics/react';


function MyApp({ Component, pageProps }) {
    return (
        <Fragment>
            <Component {...pageProps} />
            <Analytics />
        </Fragment>
    )
}

export default MyApp
