import React from 'react';
import { useTranslation } from 'react-i18next';

import { TestAtom } from '@Components/Atoms';
import { Container, TopText, Middle, Centered } from './styled';

import { IHomePage } from './Home.interface';

const Home: React.FunctionComponent<IHomePage.IProps> = () => {
    const { t } = useTranslation();

    return (
        <Container key={1}>
            <TopText>{t('home:home')}</TopText>
            <Middle>
                <Centered>
                    <TestAtom />
                </Centered>
            </Middle>
        </Container>
    );
};

export default Home;
