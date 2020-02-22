import { Reducer } from 'redux';
import moment from 'moment';
import { CalendarAction, CalendarType } from '../actions/CalendarAction';

export interface CalendarEvent {
    title: string,
    description: string,
    startSchedule: moment.Moment, // momentが欲しい
    endSchedule: moment.Moment,
    calendarName: string,
}

export interface calendarColor {
    name: string,
    color: string,
}

export interface ICalendarState {
    schedules: { [key: string]: Array<CalendarEvent> }
}

const initState: ICalendarState = {
    schedules: {
        '2020-02-04': [
            {
                title: 'testTitle',
                description: 'by sun-yryr',
                startSchedule: moment('2020-02-04'),
                endSchedule: moment('2020-02-05'),
                calendarName: 'Taiyo Minagawa',
            },
        ],
        '2020-02-01': [
            {
                title: 'testTitle2',
                description: 'by sun-yryr',
                startSchedule: moment('2020-02-01'),
                endSchedule: moment('2020-02-01'),
                calendarName: 'Taiyo Minagawa',
            }, {
                title: 'testTitle3',
                description: 'by sun-yryr',
                startSchedule: moment('2020-02-01'),
                endSchedule: moment('2020-02-01'),
                calendarName: 'Ryo Tabata',
            },
        ],
        '2020-02-05': [
            {
                title: 'testTitle11sadasd1',
                description: 'by sun-yryr',
                startSchedule: moment('2020-02-04'),
                endSchedule: moment('2020-02-05'),
                calendarName: 'Taiyo Minagawa',
            },
            {
                title: 'testTitle7',
                description: 'by sun-yryr',
                startSchedule: moment('2020-02-05'),
                endSchedule: moment('2020-02-05'),
                calendarName: 'Taiyo Minagawa',
            },
            {
                title: 'testTitle5',
                description: 'by sun-yryr',
                startSchedule: moment('2020-02-05'),
                endSchedule: moment('2020-02-06'),
                calendarName: 'Ryo Tabata',
            },
        ],
        '2020-02-06': [
            {
                title: 'testTitle7',
                description: 'by sun-yryr',
                startSchedule: moment('2020-02-06'),
                endSchedule: moment('2020-02-06'),
                calendarName: 'Taiyo Minagawa',
            },
            {
                title: 'testTitle5',
                description: 'by sun-yryr',
                startSchedule: moment('2020-02-05'),
                endSchedule: moment('2020-02-06'),
                calendarName: 'Ryo Tabata',
            },
        ],
    },
};

export const CalendarReducer: Reducer<ICalendarState, CalendarAction> = (
    state: ICalendarState = initState,
    action: CalendarAction,
): ICalendarState => {
    switch (action.type) {
        case CalendarType.CREATE_EVENT: {
            // イベントを追加する
            return { ...state };
        }
        default: {
            return state;
        }
    }
};
