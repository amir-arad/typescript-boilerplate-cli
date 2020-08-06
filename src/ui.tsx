import { Text } from 'ink';
import React, { ReactElement } from 'react';

export type Props = {
    name: string;
};
export function App({ name }: Props): ReactElement {
    return (
        <Text>
            Hello, <Text color="green">{name}</Text>
        </Text>
    );
}
