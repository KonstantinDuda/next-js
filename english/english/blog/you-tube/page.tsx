import React from "react";
import YouTubeOne from "../../posts/you-tube/mari_bu_guy_ritchie";
import LinkList from "../../links";
import MakashovskiyThough from "../../posts/you-tube/makashovskiy_though";

export default function Page() {
    return (
        <>
            <h2>Data from YouTube</h2>
            Планую публікувати тут посилання на відео з ютуб і данні які я хотів би
            запам&#39;ятати з цих відео.
            <MakashovskiyThough />
            <YouTubeOne />
            <LinkList />
        </>
    );
}