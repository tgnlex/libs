import React from 'react';
import Header from './layout.tsx';
import type {Children} from '../interface/props.ts';
interface LayoutProps extends Children {
  title?: string,
}
function Layout(props: LayoutProps) {
  return (
  <html lang="en">
    <head>
      <meta charset="utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="theme-color" content="#000000" />
      <meta name="description" content="SSR React App." />
      <title>{props.title}</title>
    </head>
    <body>
      <Header content={props.title} />
      <Row id="layout-row">
        {props.children}
      </Row>
    </body>
  </html>
  )
}
export default Layout;
