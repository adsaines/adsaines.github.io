'use client'

import { usePathname } from "next/navigation";
import { createContext, useEffect, useState } from "react";

export type PageSettings = {
    devMode: boolean;
    cutContent: boolean;
    synergy: boolean;
    bread: boolean;
}

export type SettingsContextContents = {
    settings: PageSettings;
    updateSettings: (newValues: Partial<PageSettings>) => void;
}

export const SettingsContext = createContext({} as SettingsContextContents)

export const SettingContextWrapper = ({children}: {children: React.ReactNode}) => {
    const path = usePathname();

    const [settings, setSettings] = useState<PageSettings>({
        devMode: false,
        cutContent: false,
        synergy: false,
        bread: false,
    })

    const updateSettings = (newValues: Partial<PageSettings>) => {
        setSettings({
            ...settings,
            ...newValues
        })
    }

    useEffect(() => {
        if(path.includes('thanks') && !settings.cutContent){
            updateSettings({...settings, cutContent: true})
        }
        
        if(path.includes('synergy') && !settings.synergy){
            updateSettings({...settings, synergy: true})
        }

        if(path.includes('bread') && !settings.bread){
            updateSettings({...settings, bread: true})
        }
    }, [path])

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