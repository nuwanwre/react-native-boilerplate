import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useQuery, useMutation } from '@apollo/client';
import { View, TouchableOpacity, Text } from 'react-native';

import { TestAtom } from '@Components/Atoms';
import { Container, TopText, Middle, Centered } from './styled';

import { IHomePage } from './Home.interface';

import { getAllTodos } from '@Apollo/Operations/Queries/getAllTodos';
import { getApolloClient } from '@Apollo';
// import getCache from '@Apollo/Cache'

const Home: React.FunctionComponent<IHomePage.IProps> = () => {
    const { t } = useTranslation();
    const todos = useQuery(getAllTodos);
    const [currentItems, setCurrentItems] = useState(0);

    useEffect(() => {
        console.log(todos.data);
        setCurrentItems(todos.data.todos.length);
    }, [todos.data]);

    const writeToCache = async () => {
        (await getApolloClient()).writeQuery({
            query: getAllTodos,
            data: {
                todos: {
                    id: currentItems + 1,
                    text: `Added item ${currentItems + 1}`,
                    completed: false,
                },
            },
        });
    };

    const readFromCache = () => {
        console.log(todos.data.todos);
    };

    return (
        <Container key={1}>
            <TopText>{t('home:home')}</TopText>
            <Middle>
                <View>
                    <TouchableOpacity
                        onPress={() => {
                            writeToCache();
                        }}>
                        <Text>Add Item</Text>
                        <Text>items: {currentItems}</Text>
                    </TouchableOpacity>
                </View>
                <View>
                    <TouchableOpacity
                        onPress={() => {
                            readFromCache();
                        }}>
                        <Text>Read Items</Text>
                    </TouchableOpacity>
                </View>
                <Centered>
                    <TestAtom />
                </Centered>
            </Middle>
        </Container>
    );
};

export default Home;
