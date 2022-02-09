import styled from "styled-components/native"

import { Feather } from '@expo/vector-icons'
import { RFValue } from "react-native-responsive-fontsize"

interface TransactionProps {
    type: 'positive' | 'negative'
}

export const Container = styled.View`
    background-color: ${({ theme }) => theme.colors.shape};
    border-radius: 5px;
    padding:18px 24px;
    margin-top: ${RFValue(16)}px;
`
export const Title = styled.Text`
    font-family: ${({ theme }) => theme.fonts.regular};
    font-size: ${ RFValue(14) }px;
    color: ${({ theme }) => theme.colors.title};
`
export const Amount = styled.Text<TransactionProps>`
    font-family: ${({ theme }) => theme.fonts.regular};
    font-size: ${ RFValue(20) }px;
    color: ${({ theme, type }) => type === 'positive' ? theme.colors.success : theme.colors.attention};
`
export const Footer = styled.View`
    flex-direction: row;
    margin-top: ${ RFValue(20) }px;
    justify-content: space-between;
    align-items: center;
`
export const Category = styled.View`
    flex-direction: row;
`
export const CategoryName = styled.Text`
    font-family: ${({ theme }) => theme.fonts.regular};
    font-size: ${ RFValue(14) }px;
    color: ${({ theme }) => theme.colors.text};
`
export const Icon = styled(Feather)`
    color: ${({ theme }) => theme.colors.text};
    font-size: ${ RFValue(20) }px;
    margin-right: ${ RFValue(12) }px;
`
export const Date = styled.Text`
    font-family: ${({ theme }) => theme.fonts.regular};
    font-size: ${ RFValue(14) }px;
    color: ${({ theme }) => theme.colors.text};
`