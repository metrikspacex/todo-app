import "./commands";

import { mount } from "cypress/react18";

declare global {
  namespace Cypress {
    interface Chainable {
      render: typeof mount;
    }
  }
}

Cypress.Commands.add("render", mount);
