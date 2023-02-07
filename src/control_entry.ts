import { appControlContainer } from "./Bindings/AppControlBindings";
import { initCentral } from "obs-tau-blend/Entry/Central";

onconnect = (message: MessageEvent<any>) => {
    initCentral(appControlContainer, '/config.json', message.ports[0]);
}
