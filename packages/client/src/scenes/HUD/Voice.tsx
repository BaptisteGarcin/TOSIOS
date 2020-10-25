import React, { CSSProperties } from 'react';
import { Space, Text } from '../../components';
import { Microphone } from '../../images/icons';
import { GitHubIcon } from '../../images/icons';

import { Container } from './';
import { isMobile } from 'react-device-detect';

/**
 * Render the health of the player.
 */
export const Voice = (props:any) => {
        const { volumes, style } = props;

        const renderVolumes = () => Array.from(volumes || []).map(([playerId, volume]: any) =>  <>{playerId} {volume}<Microphone color={volume > 0 ? "green" : "white"}/><br/><br/></>)

        return (
            <Container
                style={{
                    ...styles.health,
                    ...style,
                }}
            >
                <Space size="xxs" />
                <Text style={styles.nameText}>{renderVolumes()}</Text>
            </Container>
        );
};


const styles: { [key: string]: CSSProperties } = {
    health: {
        flexDirection: 'column',
        alignItems: 'flex-start',
    },
    nameText: {
        color: 'white',
        fontSize: isMobile ? 14 : 16,
    },
    hearts: {
        display: 'flex',
        alignItems: 'center',
    },
};
