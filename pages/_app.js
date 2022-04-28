import React from 'react'
import { Toaster } from 'react-hot-toast'

import { StateContext } from '../context/StateContext'
import { Layout } from '../src/components'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
    return (
        <StateContext>
            <Layout>
                <Toaster />
                <Component {...pageProps} />
            </Layout>
        </StateContext>
    )
}

export default MyApp
