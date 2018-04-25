/* eslint-disable import/no-extraneous-dependencies */

import '@/styles/index.scss';
import 'ionicons/dist/css/ionicons.css';

import { webFrame } from 'electron';
import React from 'react';
import { render } from 'react-dom';
import Instabot from '@/modules/Intabot';
import '../support/repl';

webFrame.setVisualZoomLevelLimits(1, 1);
webFrame.setLayoutZoomLevelLimits(1, 1);

render(<Instabot />, document.getElementById('app'));
