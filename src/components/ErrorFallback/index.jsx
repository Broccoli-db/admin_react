import React from 'react'
import sty from './index.module.scss'
export default function Index({ error, resetErrorBoundary }) {
    return (
        <div className={sty.box}>
            <div className={sty.content}>
                <h1>Something went wrong.</h1>
                <div>{error.message}</div>
            </div>
        </div>
    )
}
