import React from 'react';
import FirstPosts from './first-days/page';
import MyHtml from './html/page';
import MyReact from './react/page';
import MyNext from './next/page';
import MyTypeScripte from './type-script/page';
import MyCSS from './css/page';

export default function Page() {
  return (
    <main>
      <MyNext />
      <MyTypeScripte />
      <MyReact />
      <MyCSS />
      <MyHtml />
      <FirstPosts />
    </main>
  );
}
