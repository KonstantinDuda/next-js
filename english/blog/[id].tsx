import React from "react";
import { getAllPostIds, getPostData } from "../posts";

export default function Post({
    postData
}: {
    postData: { title: string, id: string, date: string }
}) {
    return (
        <div>
            {postData.title}
            <br />
            {postData.id}
            <br />
            {postData.date}
        </ div>
    );
}

export async function getStaticProps({
    params
}: {
    params: { id: string }
}) {
    const postData = getPostData(params.id);
    return {
        props: {
            postData,
        },
    };
}

export async function getStaticPaths() {
    const paths = getAllPostIds();
    return {
        paths,
        fallback: false,
    };
}