'use client'

import { SettingsContext } from "@/structures/settings-context";
import { NextPage } from "next";
import { useContext } from "react";

const Settings: NextPage = () => {
    const {settings, updateSettings} = useContext(SettingsContext);

    const flipDevMode = () => {
        updateSettings({devMode: !settings.devMode})
    }
    
    const flipCutContent = () => {
        updateSettings({cutContent: !settings.cutContent})
    }
    
    const flipSynergy = () => {
        updateSettings({synergy: !settings.synergy})
    }

    return (
        <div className="flex flex-col gap-6 p-12 justify-start">
            <div className="flex flex-col">
                <Switch 
                    title="Stories"
                    action={flipDevMode} 
                    selected={settings.devMode} 
                    onText="dev" 
                    offText="business"
                    />
                <Switch 
                    title="Cut content"
                    action={flipCutContent} 
                    selected={settings.cutContent} 
                    onText="show" 
                    offText="hide"
                    />
                <Switch 
                    title="Synergy"
                    action={flipSynergy} 
                    selected={settings.synergy} 
                    onText="synergy" 
                    offText="division"
                    />
            </div>
        </div>
    )
}

const Switch = ({title, selected, action, onText, offText}: {title: string, selected: boolean, action: () => void, onText: string, offText: string}) => {
    return (
        <div>
            <label id="content-mode-label" className="text-xl">{title}</label>
            <button aria-labelledby="content-mode-label" onClick={action} className="text-lg flex items-center gap-2 px-6 py-2 my-1 w-fit cursor-pointer">
                <span data-selected={selected} className="data-[selected='true']:text-(--light-secondary) data-[selected='true']:font-semibold">{onText}</span>
                <span className="material-icons">swap_horiz</span>
                <span data-selected={!selected} className="data-[selected='true']:text-(--light-secondary) data-[selected='true']:font-semibold">{offText}</span>
            </button>
        </div>
    )
}

export default Settings;