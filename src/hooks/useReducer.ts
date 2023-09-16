import { Email } from "../components/Dashboard";

interface State {
  emails: Email[];
}

const MARKDOWN = "markdown";
const DISCARD = "discard";
const SEND = "send";
const ADD = "add";
interface MarkdownAction {
  type: typeof MARKDOWN;
}

interface AddAction {
  type: typeof ADD;
  payload: { id: number };
}

interface DiscardAction {
  type: typeof DISCARD;
  payload: { id: number };
}

interface SendAction {
  type: typeof SEND;
  payload: { id: number; to: string; subject: string; email: string };
}

type Action = MarkdownAction | DiscardAction | SendAction | AddAction;

export const reducer = (state: State, action: Action): State => {
  switch (action.type) {
    case ADD:
      return {
        emails: [
          ...state.emails,
          { id: action.payload.id, to: "", subject: "", email: "" },
        ],
      };

    case DISCARD:
      return {
        emails: state.emails.filter((obj) => obj.id != action.payload.id),
      };
    default:
  }
};
