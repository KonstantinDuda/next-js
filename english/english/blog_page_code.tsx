import React from 'react'

export default function BlogPageCode() {
    return (
        <div className='myCode'>
            import React, &#123; Suspense &#125; from &#39;react&#39;; <br />
            import &#123; getSortedPostsData &#125; from &#39;../posts&#39;; <br />
            <br />
            export default function Page() &#123; <br />
            &#47;&#47; Don&#39;t await the data fetching function <br />
            &#8195; const posts = getSortedPostsData() <br />
            <br />
            return ( <br />
            &#8195; &#60;&#62; <br />
            &#8195; &#8195; &#60;h1&#62;My English blog&#60;/h1&#62; <br />
            &#8195; &#8195; &#60;Suspense fallback=&#123;&#60;div&#60;Loading...&#60;/div&#62;&#125;&#60; <br />
            &#8195; &#8195; &#60;div&#62; <br />
            &#8195; &#8195; &#8195; &#123;posts.map((&#123; id, date, title &#125;) =&#62; ( <br />
            &#8195; &#8195; &#8195; &#8195; &#60;div key=&#123;id&#125;&#60; <br />
            &#8195; &#8195; &#8195; &#8195; &#8195; &#123;title&#125; &#60;br /&#62; <br />
            &#8195; &#8195; &#8195; &#8195; &#8195; &#123;id&#125; &#60;br /&#62; <br />
            &#8195; &#8195; &#8195; &#8195; &#8195; &#38;#8195; (&#123;date&#125;) <br />
            &#8195; &#8195; &#8195; &#8195; &#60;/div&#62; <br />
            &#8195; &#8195; &#8195; ))&#125; <br />
            &#8195; &#8195; &#60;/div&#62; <br />
            &#8195; &#8195; &#60;/Suspense&#62; <br />
            &#8195; &#60;/&#62; <br />
            &#8195; ) <br />
            &#125;
        </ div>
    );
}