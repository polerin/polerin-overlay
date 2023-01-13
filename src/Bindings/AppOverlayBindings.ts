import { Container } from "brandi";
import { overlayContainer } from "obs-tau-blend";

const appOverlayContainer = new Container();

appOverlayContainer.extend(overlayContainer);

export {
    appOverlayContainer,
}
