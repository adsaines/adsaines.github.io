'use client'

import { createContext, useState } from "react";

export type PageSettings = {
    devMode: boolean;
    cutContent: boolean;
    synergy: boolean;
}

export type SettingsContextContents = {
    settings: PageSettings;
    updateSettings: (newValues: Partial<PageSettings>) => void;
}

export const SettingsContext = createContext({} as SettingsContextContents)

export const SettingContextWrapper = ({children}: {children: React.ReactNode}) => {

    const [settings, setSettings] = useState<PageSettings>({
        devMode: false,
        cutContent: false,
        synergy: false,
    })

    const updateSettings = (newValues: Partial<PageSettings>) => {
        setSettings({
            ...settings,
            ...newValues
        })
    }

    return (
        <SettingsContext.Provider 
            value={{
                settings,
                updateSettings
            }}
            >
            {children}
        </SettingsContext.Provider>
    )
}