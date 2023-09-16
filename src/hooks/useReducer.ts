import { Email } from "../components/Dashboard"

interface State{
    emails : Email[]
}

const MARKDOWN = 'markdown'
const DISCARD = 'discard'
const SEND = 'send'

interface MarkdownAction{
    type: typeof MARKDOWN
}

interface DiscardAction {
    type : typeof DISCARD,
}

interface SendAction{
    type: typeof SEND
    payload : {id: number , to: string, subject : string, email: string}
}

type Action = MarkdownAction | DiscardAction | SendAction

export const reducer = (state: State, action : Action): State =>{
    switch(action.type){
        case DISCARD:

        case SEND: 

        default:
    }
}