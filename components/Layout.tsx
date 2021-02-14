import React, { ReactNode } from 'react'
import Link from 'next/link'
import Head from 'next/head'

type Props = {
  children?: ReactNode
  title?: string
}

const Layout = ({ children, title = '프론트엔드 개발자 조성민의 포트폴리오입니다.' }: Props) => (
  <div>
    <Head>
      <title>{title}</title>
      <meta charSet="utf-8" />
      <meta lang="kr" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
    <header>
      <h1> this is header </h1>
    </header>
    {children}
    <footer>
      <h1> this is footer </h1>
    </footer>
  </div>
)

export default Layout
