import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useQuery, useMutation, gql, useReactiveVar } from '@apollo/client';
import { View, TouchableOpacity, Text } from 'react-native';

import { TestAtom } from '@Components/Atoms';
import { Container, TopText, Middle, Centered } from './styled';

import { IHomePage } from './Home.interface';

import { getAllTodos } from '@Apollo/Operations/Queries/getAllTodos';
import { todoMutations } from '@Apollo/Operations/Mutations';

const addTodoMutation = gql`
    mutation AddTodo($id: Int!, $text: String!, $completed: Boolean) {
        todos(id: $id, text: $text, completed: $completed) @client {
            id
            text
            completed
        }
    }
`;

const Home: React.FunctionComponent<IHomePage.IProps> = () => {
    const { t } = useTranslation();
    const todos = useQuery(getAllTodos);
    const [addTodo] = useMutation(addTodoMutation);
    const [currentItems, setCurrentItems] = useState(0);

    useEffect(() => {
        setCurrentItems(todos.data.todos.length);
    }, [todos.data]);

    const writeToCache = async () => {
        todoMutations.addTodo(`Added item ${currentItems + 1}`);
    };

    const deleteFromCache = async () => {
        todoMutations.deleteTodo(currentItems);
    };

    const readFromCache = () => {
        console.log(todos.data);
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
                <View>
                    <TouchableOpacity
                        onPress={() => {
                            deleteFromCache();
                        }}>
                        <Text>Delete Last Item</Text>
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
