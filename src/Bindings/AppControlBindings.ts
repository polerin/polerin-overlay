import { Container } from "brandi";
import { centralContainer } from "obs-tau-blend";

const appControlContainer = new Container();

appControlContainer.extend(centralContainer);

export {
    appControlContainer,
}
