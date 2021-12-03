import React from 'react'
import { ContentContainer } from '../../ui/shared/content'

function Context(props) {
    return (
        <ContentContainer>
            {props.children}
        </ContentContainer>
    )
}

export default Context
