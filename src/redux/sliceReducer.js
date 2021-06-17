import {createSlice} from "@reduxjs/toolkit";

const slice = createSlice({
    name: 'slice',
    initialState:{
        active : true,
        filteredItems: [],
        ads : [
            {
                id: 1,
                name: 'ads1',
                date: "5 мая 2021, 11:57",
                title: 'Объявления МСБ',
                task: 'Скачать заявку, разработать проект или бизнес-план, составить презентацию и т.п.)',
                feedBack: 'Обучение по ХААСП, помощь с продажей в Узбекистане, технологией выращивания дождевых червей и т.п.',
                contact: '+996 999 999 999'
            },
            {
                id: 2,
                name: 'ads1',
                date: "5 мая 2021, 11:57",
                title: 'Muradil',
                task: 'Скачать заявку, разработать проект или бизнес-план, составить презентацию и т.п.)',
                feedBack: 'Обучение по ХААСП, помощь с продажей в Узбекистане, технологией выращивания дождевых червей и т.п.',
                contact: '+996 999 999 999'
            },
            {
                id: 3,
                name: 'ads1',
                date: "5 мая 2021, 11:57",
                title: 'Mafia',
                task: 'Скачать заявку, разработать проект или бизнес-план, составить презентацию и т.п.)',
                feedBack: 'Обучение по ХААСП, помощь с продажей в Узбекистане, технологией выращивания дождевых червей и т.п.',
                contact: '+996 999 999 999'
            },
            {
                id: 4,
                name: 'ads1',
                title: 'Far Cry',
                date: "5 мая 2021, 11:57",
                task: 'Скачать заявку, разработать проект или бизнес-план, составить презентацию и т.п.)',
                feedBack: 'Обучение по ХААСП, помощь с продажей в Узбекистане, технологией выращивания дождевых червей и т.п.',
                contact: '+996 999 999 999'
            },
            {
                id: 5,
                name: 'ads1',
                title: 'Spider-man',
                date: "5 мая 2021, 11:57",
                task: 'Скачать заявку, разработать проект или бизнес-план, составить презентацию и т.п.)',
                feedBack: 'Обучение по ХААСП, помощь с продажей в Узбекистане, технологией выращивания дождевых червей и т.п.',
                contact: '+996 999 999 999'
            },
            {
                id: 6,
                name: 'ads1',
                title: 'watch Dog',
                date: "5 мая 2021, 11:57",
                task: 'Скачать заявку, разработать проект или бизнес-план, составить презентацию и т.п.)',
                feedBack: 'Обучение по ХААСП, помощь с продажей в Узбекистане, технологией выращивания дождевых червей и т.п.',
                contact: '+996 999 999 999'
            },
        ],
        invests : [
            {
                img: "",
                title: "Международная стипендия Warwick Chancellor’s International Scholarships",
                star: false,
                deadline: '9 мая 2021',
                coins: 5432,
                value: "c",
                events: "каждый год",
                geolocation: "Лондон",
                country: 'Великобритания',
                text: "Стипендиальная программа Science@Leuven разработана для талантливых иностранных студентов желающих обучаться... "
            },
            {
                img: "",
                title: "Международная стипендия Warwick Chancellor’s International Scholarships",
                star: true,
                deadline: '9 мая 2021',
                coins: 10000,
                value: "$",
                events: "каждый год",
                geolocation: "Лондон",
                country: 'Великобритания',
                text: "Стипендиальная программа Science@Leuven разработана для талантливых иностранных студентов желающих обучаться muradil... "
            },
            {
                img: "",
                title: "Международная стипендия Warwick Chancellor’s International Scholarships",
                star: false,
                deadline: '9 мая 2021',
                coins: 5432,
                value: "c",
                events: "каждый год",
                geolocation: "Лондон",
                country: 'Великобритания',
                text: "Стипендиальная программа Science@Leuven разработана для талантливых иностранных студентов желающих обучаться... "
            },
            {
                img: "",
                title: "Международная стипендия Warwick Chancellor’s International Scholarships",
                star: false,
                deadline: '9 мая 2021',
                coins: 5432,
                value: "c",
                events: "каждый год",
                geolocation: "Лондон",
                country: 'Великобритания',
                text: "Стипендиальная программа Science@Leuven разработана для талантливых иностранных студентов желающих обучаться... "
            },
            {
                img: "",
                title: "Международная стипендия Warwick Chancellor’s International Scholarships",
                star: false,
                deadline: '9 мая 2021',
                coins: 5432,
                value: "c",
                events: "каждый год",
                geolocation: "Лондон",
                country: 'Великобритания',
                text: "Стипендиальная программа Science@Leuven разработана для талантливых иностранных студентов желающих обучаться... "
            },
            {
                img: "",
                title: "Международная стипендия Warwick Chancellor’s International Scholarships",
                star: false,
                deadline: '9 мая 2021',
                coins: 5432,
                value: "c",
                events: "каждый год",
                geolocation: "Лондон",
                country: 'Великобритания',
                text: "Стипендиальная программа Science@Leuven разработана для талантливых иностранных студентов желающих обучаться... "
            },

        ],
    },

    reducers:{
        openHandle(state){
            if(state.active){
                state.active = state.active = false
            }else {
                state.active = state.active = true
            }
        },
        filtered(state, action){
            state.filteredItems = action.payload
        },
    }
});
export default slice.reducer;
export const {openHandle, filtered} = slice.actions;