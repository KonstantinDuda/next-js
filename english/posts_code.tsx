import React from 'react';

export default function PostsCode() {
    return (
        <div className='myCode'>
            import fs from &#39;fs&#39;; <br />
            import path from &#39;path&#39;; <br />
            import matter from &#39;gray-matter&#39;; <br />
            <br />
            const postsDirectory = path.join(process.cwd(), &#39;app/english/posts/next-data&#39;); <br />
            <br />
            export type PostData = &#123; <br />
            &#8195; id: string;     <br />
            &#8195; date: string;   <br />
            &#8195; title: string;  <br />
            &#8195; [key: string]: unknown; <br />
            &#125;;     <br />
            <br />
            export function getSortedPostsData(): PostData[] &#123; <br />
            &#8195; &#8195; &#47;&#47; Get file names under /posts <br />
            &#8195; &#8195; const fileNames = fs.readdirSync(postsDirectory);   <br />
            &#8195; &#8195; const allPostsData: PostData[] = fileNames.map((fileName) =&#62; &#123; <br />
            &#8195; &#8195; &#8195; &#47;&#47; Remove &#34;.md&#34; from file name to get id    <br />
            &#8195; &#8195; &#8195; const id = fileName.replace(/\.md$/, &#39;&#39;);   <br />
            <br />
            &#8195; &#8195; &#8195; &#47;&#47; Read markdown file as string <br />
            &#8195; &#8195; &#8195; const fullPath = path.join(postsDirectory, fileName); <br />
            &#8195; &#8195; &#8195; const fileContents = fs.readFileSync(fullPath, &#39;utf8&#39;); <br />
            <br />
            &#8195; &#8195; &#8195; &#47;&#47; Use gray-matter to parse the post metadata section   <br />
            &#8195; &#8195; &#8195; const matterResult = matter(fileContents);  <br />
            <br />
            &#8195; &#8195; &#8195; &#47;&#47; Combine the data with the id <br />
            &#8195; &#8195; &#8195; return &#123; <br />
            &#8195; &#8195; &#8195; &#8195; id, <br />
            &#8195; &#8195; &#8195; &#8195; ...matterResult.data, <br />
            &#8195; &#8195; &#8195; &#8195; &#125; as PostData; <br />
            &#8195; &#8195; &#8195; &#125;);    <br />
            &#8195; &#47;&#47; Sort posts by date   <br />
            &#8195; return allPostsData.sort((a, b) =&#62; &#123; <br />
            &#8195; &#8195; if (a.date &#60; b.date) &#123; <br />
            &#8195; &#8195; &#8195; return 1; <br />
            &#8195; &#8195; &#125; else &#123; <br />
            &#8195; &#8195; &#8195; return -1; <br />
            &#8195; &#8195; &#125; <br />
            &#8195; &#125;); <br />
            &#125; <br />
        </ div>
    );
}