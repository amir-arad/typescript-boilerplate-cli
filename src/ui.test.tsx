import React from 'react';
import chalk from 'chalk';
import { render } from 'ink-testing-library';
import { App } from './ui';
import tape from 'tape';

tape('greet user with a name', (t) => {
    t.plan(1);
    const { lastFrame } = render(<App name="Jane" />);

    t.is(lastFrame(), chalk`Hello, {green Jane}`);
});
