import React from "react";
import {PAGES} from "../../assets/pagesdb";

export default function Page({id}) {
    const DB = PAGES[id];
    return (
        <div>
            <h1>{DB.title}</h1>
            <p>{DB.description}</p>
        </div>
    )
}
