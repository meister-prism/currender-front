import * as React from 'react';
import { connect } from 'react-redux';
import { Dispatch, Action } from 'redux';
import styled from 'styled-components';
import { RootState } from './reducers';
import { webSocketActionCreator } from './actions/WebSocketAction';
import { currentActionCreator } from './actions/CurrentAction';
import Watch from './containers/sample/Watch';
import Title from './calendars/monthly/default/containers/Title';
import { GoogleApi } from './GoogleApi';

interface IStateToProps {
    connected: boolean;
}

interface IDispatchToProps {
    createConnection: (url: string) => void;
    updateDatetime: () => void;
}

type IProps = IStateToProps & IDispatchToProps;
type IState = { timerId: number }

class App extends React.Component<IProps, IState> {
    googleapi: GoogleApi;

    constructor(props: any) {
        super(props);
        this.googleapi = new GoogleApi();
    }

    componentDidMount() {
        const { createConnection, updateDatetime } = this.props;
        updateDatetime();
        const timerId = setInterval(updateDatetime, 1000);
        this.setState({ timerId });
        createConnection('ws://localhost:8080');
    }

    componentWillUnmount() {
        const { timerId } = this.state;
        clearInterval(timerId);
    }

    render() {
        const { connected } = this.props;
        return (
            <Root>
                <Title />
                <a href={this.googleapi.AuthUrl()}>login</a>
            </Root>
        );
    }
}

const mapStateToProps = (state: RootState): IStateToProps => {
    const { WebSocketState } = state;
    return { connected: WebSocketState.connected };
};

const mapDispatchToProps = (dispatch: Dispatch<Action>): IDispatchToProps => ({
    createConnection: (url: string) => dispatch(webSocketActionCreator.connect(url)),
    updateDatetime: () => dispatch(currentActionCreator.updateNowDate()),
});

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(App);


const Root = styled.div`
    height: 100%;
    width: 100%;
`;
