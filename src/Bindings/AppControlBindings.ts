import {
  centralContainer,
  CentralController,
  CENTRAL_TOKENS,
  SHARED_TOKENS,
} from "obs-tau-blend/Entry/Central";

import { injected, Container } from 'brandi';

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
