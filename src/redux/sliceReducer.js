import {createSlice} from "@reduxjs/toolkit";
import card1 from "../Images/card1.png";
import card2 from "../Images/card2.png";
import card3 from "../Images/card3.png";
import investsImg from "../Images/Rectangle 94.png";

const slice = createSlice({
    name: 'slice',
    initialState:{
        active : true,
        searchValue: '',
        currentPage: 1,
        itemsPerPage: 6,
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
            {
                id: 7,
                name: 'ads1',
                title: 'watch Dog',
                date: "5 мая 2021, 11:57",
                task: 'Скачать заявку, разработать проект или бизнес-план, составить презентацию и т.п.)',
                feedBack: 'Обучение по ХААСП, помощь с продажей в Узбекистане, технологией выращивания дождевых червей и т.п.',
                contact: '+996 999 999 999'
            },
            {
                id: 8,
                name: 'ads1',
                title: 'watch Dog',
                date: "5 мая 2021, 11:57",
                task: 'Скачать заявку, разработать проект или бизнес-план, составить презентацию и т.п.)',
                feedBack: 'Обучение по ХААСП, помощь с продажей в Узбекистане, технологией выращивания дождевых червей и т.п.',
                contact: '+996 999 999 999'
            },
            {
                id: 9,
                name: 'ads1',
                title: 'watch Dog',
                date: "5 мая 2021, 11:57",
                task: 'Скачать заявку, разработать проект или бизнес-план, составить презентацию и т.п.)',
                feedBack: 'Обучение по ХААСП, помощь с продажей в Узбекистане, технологией выращивания дождевых червей и т.п.',
                contact: '+996 999 999 999'
            },
            {
                id: 10,
                name: 'ads1',
                title: 'watch Dog',
                date: "5 мая 2021, 11:57",
                task: 'Скачать заявку, разработать проект или бизнес-план, составить презентацию и т.п.)',
                feedBack: 'Обучение по ХААСП, помощь с продажей в Узбекистане, технологией выращивания дождевых червей и т.п.',
                contact: '+996 999 999 999'
            },
            {
                id: 11,
                name: 'ads1',
                title: 'watch Dog',
                date: "5 мая 2021, 11:57",
                task: 'Скачать заявку, разработать проект или бизнес-план, составить презентацию и т.п.)',
                feedBack: 'Обучение по ХААСП, помощь с продажей в Узбекистане, технологией выращивания дождевых червей и т.п.',
                contact: '+996 999 999 999'
            },
            {
                id: 12,
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
                id: 1,
                img: investsImg,
                title: "Международная стипендия Warwick Chancellor’s International Scholarships",
                star: false,
                deadline: '9 мая 2021',
                posted: '5 мая 2021',
                coins: 5432,
                value: "c",
                events: "каждый год",
                geolocation: "Лондон",
                country: 'Великобритания',
                text: "Стипендиальная программа Science@Leuven разработана для талантливых иностранных студентов желающих обучаться... "
            },
            {
                id: 2,
                img: investsImg,
                title: "Международная стипендия Warwick Chancellor’s International Scholarships",
                star: true,
                deadline: '9 мая 2021',
                posted: '5 мая 2021',
                coins: 10000,
                value: "$",
                events: "каждый год",
                geolocation: "Лондон",
                country: 'Великобритания',
                text: "Стипендиальная программа Science@Leuven разработана для талантливых иностранных студентов желающих обучаться muradil... "
            },
            {
                id: 3,
                img: investsImg,
                title: "Международная стипендия Warwick Chancellor’s International Scholarships",
                star: false,
                deadline: '9 мая 2021',
                posted: '5 мая 2021',
                coins: 5432,
                value: "c",
                events: "каждый год",
                geolocation: "Лондон",
                country: 'Великобритания',
                text: "Стипендиальная программа Science@Leuven разработана для талантливых иностранных студентов желающих обучаться... "
            },
            {
                id: 4,
                img: investsImg,
                title: "Международная стипендия Warwick Chancellor’s International Scholarships",
                star: false,
                deadline: '9 мая 2021',
                posted: '5 мая 2021',
                coins: 5432,
                value: "c",
                events: "каждый год",
                geolocation: "Лондон",
                country: 'Великобритания',
                text: "Стипендиальная программа Science@Leuven разработана для талантливых иностранных студентов желающих обучаться... "
            },
            {
                id: 5,
                img: investsImg,
                title: "Международная стипендия Warwick Chancellor’s International Scholarships",
                star: false,
                deadline: '9 мая 2021',
                posted: '5 мая 2021',
                coins: 5432,
                value: "c",
                events: "каждый год",
                geolocation: "Лондон",
                country: 'Великобритания',
                text: "Стипендиальная программа Science@Leuven разработана для талантливых иностранных студентов желающих обучаться... "
            },
            {
                id: 6,
                img: investsImg,
                title: "Muradil",
                star: false,
                deadline: '9 мая 2021',
                posted: '5 мая 2021',
                coins: 5432,
                value: "c",
                events: "каждый год",
                geolocation: "Лондон",
                country: 'Великобритания',
                text: "Стипендиальная программа Science@Leuven разработана для талантливых иностранных студентов желающих обучаться... "
            },
            {
                id: 7,
                img: investsImg,
                title: "Muradil",
                star: false,
                deadline: '9 мая 2021',
                posted: '5 мая 2021',
                coins: 5432,
                value: "c",
                events: "каждый год",
                geolocation: "Лондон",
                country: 'Великобритания',
                text: "Стипендиальная программа Science@Leuven разработана для талантливых иностранных студентов желающих обучаться... "
            },
            {
                id: 8,
                img: investsImg,
                title: "Muradil",
                star: false,
                deadline: '9 мая 2021',
                posted: '5 мая 2021',
                coins: 5432,
                value: "c",
                events: "каждый год",
                geolocation: "Лондон",
                country: 'Великобритания',
                text: "Стипендиальная программа Science@Leuven разработана для талантливых иностранных студентов желающих обучаться... "
            },
            {
                id: 9,
                img: investsImg,
                title: "Muradil",
                star: false,
                deadline: '9 мая 2021',
                posted: '5 мая 2021',
                coins: 5432,
                value: "c",
                events: "каждый год",
                geolocation: "Лондон",
                country: 'Великобритания',
                text: "Стипендиальная программа Science@Leuven разработана для талантливых иностранных студентов желающих обучаться... "
            },
            {
                id: 10,
                img: investsImg,
                title: "Muradil",
                star: false,
                deadline: '9 мая 2021',
                posted: '5 мая 2021',
                coins: 5432,
                value: "c",
                events: "каждый год",
                geolocation: "Лондон",
                country: 'Великобритания',
                text: "Стипендиальная программа Science@Leuven разработана для талантливых иностранных студентов желающих обучаться... "
            },
            {
                id: 11,
                img: investsImg,
                title: "Muradil",
                star: false,
                deadline: '9 мая 2021',
                posted: '5 мая 2021',
                coins: 5432,
                value: "c",
                events: "каждый год",
                geolocation: "Лондон",
                country: 'Великобритания',
                text: "Стипендиальная программа Science@Leuven разработана для талантливых иностранных студентов желающих обучаться... "
            },
            {
                id: 12,
                img: investsImg,
                title: "Muradil",
                star: false,
                deadline: '9 мая 2021',
                posted: '5 мая 2021',
                coins: 5432,
                value: "c",
                events: "каждый год",
                geolocation: "Лондон",
                country: 'Великобритания',
                text: "Стипендиальная программа Science@Leuven разработана для талантливых иностранных студентов желающих обучаться... "
            },
        ],
        events: [
            {
                id: 1,
                img: card1,
                title: 'Стипендиальная программа для иностранных студентов',
                data: '15мая 2021',
                time: '9:00',
                location: 'Лондон',
                country: 'Великобритания',
                coins: '5432',
                value: 'C'
            },
            {
                id: 2,
                img: card2,
                title: 'Стипендиальная программа для иностранных студентов',
                data: '15мая 2021',
                time: '9:00',
                location: 'Лондон',
                country: 'Великобритания',
                coins: '5432',
                value: 'C'
            },
            {
                id: 3,
                img: card3,
                title: 'Стипендиальная программа для иностранных студентов',
                data: '15мая 2021',
                time: '9:00',
                location: 'Лондон',
                country: 'Великобритания',
                coins: '5432',
                value: 'C'
            },
            {
                id: 4,
                img: card1,
                title: 'Стипендиальная программа для иностранных студентов',
                data: '15мая 2021',
                time: '9:00',
                location: 'Лондон',
                country: 'Великобритания',
                coins: '5432',
                value: 'C'
            },
            {
                id: 5,
                img: card1,
                title: 'Стипендиальная программа для иностранных студентов',
                data: '15мая 2021',
                time: '9:00',
                location: 'Лондон',
                country: 'Великобритания',
                coins: '5432',
                value: 'C'
            },
            {
                id: 6,
                img: card1,
                title: 'Стипендиальная программа для иностранных студентов',
                data: '15мая 2021',
                time: '9:00',
                location: 'Лондон',
                country: 'Великобритания',
                coins: '5432',
                value: 'C'
            }
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
            state.searchValue = action.payload
        },
        paginate(state, action){
            state.currentPage = action.payload
        }
    }
});
export default slice.reducer;
export const {openHandle, filtered, paginate} = slice.actions;