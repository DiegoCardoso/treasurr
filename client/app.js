import { render } from 'react-dom';

import { setupRouting } from './helpers/router';
import routes from './config/routes';

const container = document.getElementById('app-container');

setupRouting(routes, (component) => render(component, container));
