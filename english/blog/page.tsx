import React, { Suspense } from 'react'
import { getPostData, getSortedPostsData } from '../posts'
import style from "@/app/ui/english/blog/blog.module.css";
import LinkList from '../links';

export default function Page() {
  // Don't await the data fetching function
  const posts = getSortedPostsData()
  const postsData = []
  for (const post of posts) {
    postsData.push(getPostData(post.id));
  }
  return (
    <>
      <h1>My English blog</h1>
      <Suspense fallback={<div>Loading...</div>}>
        <div>
          {postsData.map(async (post) => (
            <div key={(await post).id}>
              <h3> &#8195; {(await post).title} </h3>
              <div dangerouslySetInnerHTML={{ __html: (await post).contentHtml }} />
              <div className={style.idDate}>
                <i> &#8195; &#8195; {(await post).id} &#8195; {(await post).date} </i>
              </div>
            </div>
          ))}
        </div>
      </ Suspense>
      <LinkList />
    </>
  );
}