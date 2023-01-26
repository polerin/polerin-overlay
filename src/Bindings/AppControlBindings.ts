import {
  centralContainer,
  CentralController,
  CENTRAL_TOKENS,
  Container,
  injected,
  SHARED_TOKENS,
} from "obs-tau-blend";

injected(
  CentralController,
  CENTRAL_TOKENS.serviceAdapters,
  SHARED_TOKENS.portMessageAdapter,
  SHARED_TOKENS.frameworkEventBus
);

const appControlContainer = new Container();

appControlContainer.extend(centralContainer);

appControlContainer.bind(CENTRAL_TOKENS.centralController)
    .toInstance(CentralController)
    .inSingletonScope();

export { appControlContainer };
