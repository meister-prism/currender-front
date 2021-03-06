import * as React from 'react';
import styled from 'styled-components';
import logo from '../../../../assets/sun.png';
import {
    IWeather, ITraffic, IFortune, IWIT,
} from '../../../../reducers/CurrentReducer';

interface Props {
    Month: string,
    MonthName: string,
    Weather: IWeather,
    Traffic: ITraffic,
    Fortune: IFortune,
    WhatIsToday: IWIT,
}

const Bar = styled.div`
    width: 100%
    height: 20px
    margin: 0 auto
    background-color: #000
`;

const Root = styled.div`
    width: 100%
    height: 10%
    margin: 0 auto
    text-align: left
`;

const TitleBox = styled.span`
    width: 40%
    padding: 10px 20px
    float: left
`;

const TitleText = styled.h1`
    font-size: 100px
    margin: 0
`;

const NewsBox = styled.span`
    width: 100%
    border-radius: 3px
    border: 1px solid grey
    display: block
    margin: 0 0 1em
    padding: 0 5px
`;

const NewsText = styled.span`
    margin-left: 10px
`;

const Temp = styled.span`
    font-size: 30px
    padding: 5px 0
`;

const TempText = styled.span`
    font-size: 12px
    padding-left: 15px
`;

const HighTemp = styled.span`
    color: red
    padding: 0 0.5em
`;

const RowTemp = styled.span`
    color: blue
    padding: 0 0.5em
`;

const News = styled.span`
    width: 40%
    display: block
    margin: 2em 1em
    float: right
`;


export function Title(props: Props): JSX.Element {
    const {
        Month,
        MonthName,
        Weather,
        Traffic,
        Fortune,
        WhatIsToday,
    } = props;
    return (
        <Root>
            <Bar />
            <TitleBox>
                <TitleText>{Month}</TitleText>
                <h1>{MonthName}</h1>
            </TitleBox>
            <News>
                <img src={String(logo)} alt="weather" style={{ width: '70px' }} />
                <Temp>
                    <HighTemp>{Weather.temperature.max}</HighTemp>
                    /
                    <RowTemp>{Weather.temperature.min}</RowTemp>
                    ℃
                    <TempText>降水確率</TempText>
                    {Weather.rainfallProbability}
                </Temp>
                <p>{WhatIsToday.title}</p>
                {/* 遅延情報がない時 Traffic[0] == undefined なので応急処置しました */}
                {(Traffic !== undefined) ? (
                    <NewsBox>
                        <span>【遅延情報】</span>
                        <span>{Traffic.line}</span>
                        <br />
                        <NewsText>{Traffic.serviceStatus}</NewsText>
                        <NewsText>{Traffic.description}</NewsText>
                    </NewsBox>
                ) : null}
                <NewsBox>
                    <span>【占い】</span>
                    <span>{Fortune.constellation}</span>
                    <br />
                    <NewsText>{Fortune.message}</NewsText>
                </NewsBox>
            </News>
        </Root>
    );
}
