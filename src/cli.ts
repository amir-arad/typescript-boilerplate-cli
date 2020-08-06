#!/usr/bin/env node
import { render } from 'ink';
import meow from 'meow';
import React from 'react';
import { App, Props } from './ui';

const cli = meow(
    `
	Usage
	  $ my-fancy-cli

	Options
		--name  Your name

	Examples
	  $ my-fancy-cli --name=Jane
	  Hello, Jane
`,
    {
        flags: {
            name: {
                type: 'string',
                default: 'Joe',
            },
        },
        description: `A generic CLI`,
    }
);

render(React.createElement(App, cli.flags as Props));
