import { OVERLAY_TOKENS, overlayContainer, OverlayController, SHARED_TOKENS, injected, Container } from "obs-tau-blend";

injected(OverlayController, OVERLAY_TOKENS.controlWorker, SHARED_TOKENS.frameworkEventBus);

const appOverlayContainer = new Container();

appOverlayContainer.extend(overlayContainer);

appOverlayContainer.bind(OVERLAY_TOKENS.overlayController)
    .toInstance(OverlayController)
    .inSingletonScope();

export {
    appOverlayContainer,
}
