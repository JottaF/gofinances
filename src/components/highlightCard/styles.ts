import styled, { css } from "styled-components/native"
import { Feather } from '@expo/vector-icons'
import { RFValue } from "react-native-responsive-fontsize"

interface TypeProps {
    type: 'up' | 'down' | 'total'
}

export const Container = styled.View<TypeProps>`
    width: ${RFValue(300)}px;
    height: ${RFValue(200)}px;
    border-radius: 10px;
    padding: 20px;
    background-color: ${({ theme, type }) => type == 'total' ? theme.colors.secondary : theme.colors.shape};
    margin-right:16px;
`
export const Header = styled.View`
    flex-direction: row;
    justify-content: space-between;
`

export const Title = styled.Text<TypeProps>`
    font-size: ${RFValue(15)}px;
    color: ${({ theme, type }) => type == 'total' ? theme.colors.shape : theme.colors.title};
    font-family: ${({ theme }) => theme.fonts.regular};
`

export const Icon = styled(Feather)<TypeProps>`
    font-size: ${RFValue(40)}px;

    ${(props) => props.type === 'up' && css`
        color: ${({ theme }) => theme.colors.success};
    `}
    
    ${(props) => props.type === 'down' && css`
        color: ${({ theme }) => theme.colors.attention};
    `}
    
    ${(props) => props.type === 'total' && css`
        color: ${({ theme }) => theme.colors.shape};
    `}
    
`

export const Footer = styled.View`
    margin-top: ${RFValue(35)}px;
`

export const Amount = styled.Text<TypeProps>`
    font-family: ${({ theme }) => theme.fonts.medium};
    font-size: ${RFValue(32)}px;
    color: ${({ theme, type }) => type == 'total' ? theme.colors.shape : theme.colors.title};
    margin-bottom:${RFValue(-5)}px;
`

export const LastTransaction = styled.Text<TypeProps>`
    font-size: ${RFValue(12)}px;
    font-family: ${({ theme }) => theme.fonts.regular};
    color: ${({ theme, type }) => type == 'total' ? theme.colors.shape : theme.colors.text};
`

