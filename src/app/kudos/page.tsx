'use client'

import { NextPage } from "next";
import { GoogleMaterialIconsKudos, NextJsKudos, ReactKudos } from "./projections";

// TODO: write some stuff about the libraries I used to make this page

const Kudos: NextPage = () => {
    return (
        <div className="flex flex-wrap h-screen justify-center items-start">
            <GoogleMaterialIconsKudos />
            <ReactKudos />
            <NextJsKudos />
        </div>
    )
}

export default Kudos