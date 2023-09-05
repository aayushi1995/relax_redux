import React from 'react'
import styled from 'styled-components'

const Greeting = styled.div`
    color : ${({ theme }) => theme.colors.primary};
    font-size: ${({ theme }) => theme.fontSize.xl};
`
const GreetingSecondary = styled.div`
    color : ${({ theme }) => theme.colors.white};
    font-size: ${({ theme }) => theme.fontSize.md};
`


const Dashboard = () => {
    return (
        <div>
            <Greeting>Hello Jane</Greeting>
            <GreetingSecondary>How are you doing today? Would you like to share something with the community 🤗</GreetingSecondary>
        </div>
    )
}
export default Dashboard