'use client'

import { SettingsContext } from "@/structures/settings-context";
import { NextPage } from "next";
import { useContext } from "react";

const Settings: NextPage = () => {
    const {settings, updateSettings} = useContext(SettingsContext);

    const flipDevMode = () => {
        updateSettings({devMode: !settings.devMode})
    }

    return (
        <div className="flex flex-col gap-6 p-12 justify-start">
            <div className="flex flex-col">
                <label className="text-xl">Content Mode Switch</label>
                <button onClick={flipDevMode} className="text-lg flex items-center gap-2 px-6 py-2 my-1 w-fit cursor-pointer">
                    <span data-selected={settings.devMode} className="data-[selected='true']:text-(--text-theme-secondary) data-[selected='true']:font-semibold">dev</span>
                    <span className="material-icons">swap_horiz</span>
                    <span data-selected={!settings.devMode} className="data-[selected='true']:text-(--text-theme-secondary) data-[selected='true']:font-semibold">business</span>
                </button>
            </div>
        </div>
    )
}

export default Settings;