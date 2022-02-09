import React from 'react'

import { HighlightCard } from '../../components/highlightCard'
import { TransactionCard, TransactionCardProps } from '../../components/transactionCard'


import { 
    Container,
    Header,
    UserWrapper,
    UserInfo,
    Photo,
    User,
    UserGretting,
    UserName,
    PowerIcon,
    HightlightCards,
    Transactions,
    TransactionsHeader,
    TransactionsList,
} from './styles'

export interface DataListProps extends TransactionCardProps {
    id: string;
}

export function Dashboard() {
    const data = [
        {
            id: '1',
            type: 'positive',
            title:'Desenvolvimento de site',
            amount:'R$ 12.000,00',
            category:{
                name: 'Vendas',
                icon: 'dollar-sign'
            },
            date:'13/04/2020'
        },
        {
            id: '2',
            type: 'negative',
            title:'Lanche',
            amount:'R$ 56,00',
            category:{
                name: 'Comida',
                icon: 'coffee'
            },
            date:'13/04/2020'
        },
        {
            id: '3',
            type: 'negative',
            title:'Aluguel',
            amount:'R$ 700,00',
            category:{
                name: 'Casa',
                icon: 'shopping-bag'
            },
            date:'13/04/2020'
        }
    ]
    return (
        <Container>
            <Header>
                <UserWrapper>
                    <UserInfo>
                        <Photo source={{ uri: 'https://avatarfiles.alphacoders.com/942/thumb-1920-94255.png'}}/>
                        <User>
                            <UserGretting>Olá,</UserGretting>
                            <UserName>João Felipe</UserName>
                        </User>
                    </UserInfo>
                    <PowerIcon name ='power'/>
                </UserWrapper>
            </Header>
            <HightlightCards>
                <HighlightCard 
                    type = 'up'
                    title='Entrada' 
                    amount= 'R$ 17.400,00' 
                    lasttransaction= 'Última entrada dia 13 de abril'
                />
                <HighlightCard 
                    type = 'down'
                    title='Saída' 
                    amount= 'R$ 5.250,00' 
                    lasttransaction= 'Última entrada dia 12 de maio'
                />
                <HighlightCard 
                    type = 'total'
                    title='Total' 
                    amount= 'R$ 12.150,00' 
                    lasttransaction= '01 à 16 de abril'
                />
            </HightlightCards>

            <Transactions>
                <TransactionsHeader>
                    Listagem
                </TransactionsHeader>
                <TransactionsList 
                    data = {data}
                    keyExtractor = {item => item.id}
                    renderItem = {({ item }) => <TransactionCard data={item}/>}
                />
            </Transactions>
        </Container>
)}
