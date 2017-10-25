export type LoginStartedAction = {
    type: string;
};

export type LoginSuccessfulAction = {
    type: string;
    payload: {
        token: string;
    };
};

export type AuthAction =
    LoginStartedAction |
    LoginSuccessfulAction;
