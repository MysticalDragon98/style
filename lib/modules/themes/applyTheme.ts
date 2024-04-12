import transformVSCodeSettings from "../vscode/transformVSCodeSettings";
import readTheme from "./readTheme";

export default async function applyTheme (theme: string, workdir = process.cwd()) {
    const styles = await readTheme(theme);
    
    await transformVSCodeSettings((settings) => {
        if(styles.peacock?.color) {
            settings["peacock.color"] = styles.peacock.color;
            settings["peacock.affectTitleBar"] = true;
            settings["peacock.affectStatusAndTitleBorders"] = true;
            settings["peacock.affectTabActiveBorder"] = true;
            settings["peacock.affectSideBarBorder"] = false;
            settings["peacock.affectPanelBorder"] = false;
            settings["peacock.affectEditorGroupBorder"] = false;
            settings["peacock.affectActivityBar"] = false;
        } else {
            delete settings["peacock.color"];
            delete settings["peacock.affectStatusAndTitleBorders"];
            delete settings["peacock.affectTabActiveBorder"];
            delete settings["peacock.affectSideBarBorder"];
            delete settings["peacock.affectPanelBorder"];
            delete settings["peacock.affectEditorGroupBorder"];
            delete settings["peacock.affectActivityBar"];
        }

        settings["_.theme"] = styles.name;
        
        return settings;
    }, workdir);
}