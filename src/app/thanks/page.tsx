'use client'

import { NextPage } from "next";
import { GithubPagesThanks, GoogleMaterialIconsThanks, LiveScriptThanks, NextJsThanks, NpmThanks, ReactThanks } from "./projections";

const Thanks: NextPage = () => {
    return (
        <div className="h-full flex flex-col overflow-auto justify-between items-center">
            <div className="flex flex-col min-w-[400px] max-w-[600px] justify-center justify-start items-center mb-6">
                <GoogleMaterialIconsThanks />
                <ReactThanks />
                <NextJsThanks />
                <NpmThanks />
                <LiveScriptThanks />
                <GithubPagesThanks />
                {/* TODO: add github pages here */}
            </div>
            <div className="flex flex-col justify-end items-center">
                <p className="text-center">
                    This is just a general thanks for all the help page.
                </p>
                <p className="text-center">
                    I've listed the libraries that asked for recognition and the ones that made things very straightforward.
                </p>
            </div>
        </div>
    )
}

export default Thanks