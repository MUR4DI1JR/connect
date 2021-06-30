import {createSlice} from "@reduxjs/toolkit";
import card1 from "../Images/card1.png";
import card2 from "../Images/card2.png";
import card3 from "../Images/card3.png";
import investsImg from "../Images/Rectangle 94.png";
import blog1 from "../Images/blog1.png";
import blog2 from "../Images/blog2.png";
import blog3 from "../Images/blog3.png";
import avatar from "../Images/avatar.jpg";

const slice = createSlice({
    name: 'slice',
    initialState:{
        active : true,
        searchValue: '',
        currentPage: 1,
        itemsPerPage: 6,
        clicked: -1,
        name: '',
        email: '',
        commentText: '',
        postedComment: '',
        item: '',
        itemId: 0,
        result: [],
        users: [],
        items:{
            ads : [
                {
                    id: 1,
                    name: 'ads1',
                    date: "2021-05-15",
                    time: "11:27",
                    title: 'Объявления МСБ',
                    task: 'Скачать заявку, разработать проект или бизнес-план, составить презентацию и т.п.)',
                    feedBack: 'Обучение по ХААСП, помощь с продажей в Узбекистане, технологией выращивания дождевых червей и т.п.',
                    contact: '+996 999 999 999',
                    description: "Стипендиальная программа  разработана для талантливых иностранных студентов желающих обучаться на одной из магистерских программ факультета науки университета Katholieke Universiteit Leuven в Бельгии.",
                    programs: ['Master of Astronomy and Astrophysics', 'Master of Biology', 'Master of Biophysics, Biochemistry and Biotechnology' , 'Master of Chemistry' , 'Master of Geography' , 'Interuniversity Master of Geology' , 'Master of Mathematics' , 'Master of Physics' , 'Master of Statistics' , 'Erasmus Mundus Master of Theoretical Chemistry and Computational Modelling' , 'Erasmus Mundus Joint Master in Sustainable and Territorial Development'],
                    req: ['ранее не обучались и не работали в университете University of Leuven;','имеют степень бакалавра, полученную в аккредитованном университете;','не имеют степени магистра, или кандидата наук;' , 'могут подтвердить что обучались на отлично в их родном университете;','отлично владеют английским языком ( IELTS – 7; TOEFL – 94 internet-based);' , 'заинтересованы в обучении на магистерской программе.'],
                    comments: [
                        {
                            id: 1,
                            name: 'Mark',
                            avatar: avatar,
                            email: 'mu@gmail.com',
                            commentText: 'О да, полиморфизм и инкапсуляция. Ну хоть убей я не расскажу вам быстро, что есть то и что есть это :) Ну знаю, подумаю и отвечу. Но сходу — низачто. ДУмаю ваша статья продлит мою память подольше :)',
                            postedComment: '2021-05-15',
                        },
                        {
                            id: 2,
                            name: 'Elon',
                            avatar: avatar,
                            email: 'mu@gmail.com',
                            commentText: 'Спасибо. Про абстрагирование признаюсь честно — за час до начала лекции спохватился, что этого раздела нет и спешно дописывал. Поэтому получилось немного сумбурно…',
                            postedComment: '2021-05-16'
                        }
                    ],
                },
                {
                    id: 2,
                    name: 'ads1',
                    date: "2021-05-15",
                    time: "11:27",
                    title: 'Muradil',
                    task: 'Скачать заявку, разработать проект или бизнес-план, составить презентацию и т.п.)',
                    feedBack: 'Обучение по ХААСП, помощь с продажей в Узбекистане, технологией выращивания дождевых червей и т.п.',
                    contact: '+996 999 999 999',
                    description: "Стипендиальная программа  разработана для талантливых иностранных студентов желающих обучаться на одной из магистерских программ факультета науки университета Katholieke Universiteit Leuven в Бельгии.",
                    programs: ['Master of Astronomy and Astrophysics', 'Master of Biology', 'Master of Biophysics, Biochemistry and Biotechnology' , 'Master of Chemistry' , 'Master of Geography' , 'Interuniversity Master of Geology' , 'Master of Mathematics' , 'Master of Physics' , 'Master of Statistics' , 'Erasmus Mundus Master of Theoretical Chemistry and Computational Modelling' , 'Erasmus Mundus Joint Master in Sustainable and Territorial Development'],
                    req: ['ранее не обучались и не работали в университете University of Leuven;','имеют степень бакалавра, полученную в аккредитованном университете;','не имеют степени магистра, или кандидата наук;' , 'могут подтвердить что обучались на отлично в их родном университете;','отлично владеют английским языком ( IELTS – 7; TOEFL – 94 internet-based);' , 'заинтересованы в обучении на магистерской программе.'],
                    comments: [
                        {
                            id: 1,
                            name: 'Mark',
                            avatar: avatar,
                            email: 'mu@gmail.com',
                            commentText: 'О да, полиморфизм и инкапсуляция. Ну хоть убей я не расскажу вам быстро, что есть то и что есть это :) Ну знаю, подумаю и отвечу. Но сходу — низачто. ДУмаю ваша статья продлит мою память подольше :)',
                            postedComment: '2021-05-15',
                        },
                        {
                            id: 2,
                            name: 'Elon',
                            avatar: avatar,
                            email: 'mu@gmail.com',
                            commentText: 'Спасибо. Про абстрагирование признаюсь честно — за час до начала лекции спохватился, что этого раздела нет и спешно дописывал. Поэтому получилось немного сумбурно…',
                            postedComment: '2021-05-16'
                        }
                    ],
                },
                {
                    id: 3,
                    name: 'ads1',
                    date: "2021-05-15",
                    time: "11:27",
                    title: 'Mafia',
                    task: 'Скачать заявку, разработать проект или бизнес-план, составить презентацию и т.п.)',
                    feedBack: 'Обучение по ХААСП, помощь с продажей в Узбекистане, технологией выращивания дождевых червей и т.п.',
                    contact: '+996 999 999 999',
                    description: "Стипендиальная программа  разработана для талантливых иностранных студентов желающих обучаться на одной из магистерских программ факультета науки университета Katholieke Universiteit Leuven в Бельгии.",
                    programs: ['Master of Astronomy and Astrophysics', 'Master of Biology', 'Master of Biophysics, Biochemistry and Biotechnology' , 'Master of Chemistry' , 'Master of Geography' , 'Interuniversity Master of Geology' , 'Master of Mathematics' , 'Master of Physics' , 'Master of Statistics' , 'Erasmus Mundus Master of Theoretical Chemistry and Computational Modelling' , 'Erasmus Mundus Joint Master in Sustainable and Territorial Development'],
                    req: ['ранее не обучались и не работали в университете University of Leuven;','имеют степень бакалавра, полученную в аккредитованном университете;','не имеют степени магистра, или кандидата наук;' , 'могут подтвердить что обучались на отлично в их родном университете;','отлично владеют английским языком ( IELTS – 7; TOEFL – 94 internet-based);' , 'заинтересованы в обучении на магистерской программе.'],
                    comments: [
                        {
                            id: 1,
                            name: 'Mark',
                            avatar: avatar,
                            email: 'mu@gmail.com',
                            commentText: 'О да, полиморфизм и инкапсуляция. Ну хоть убей я не расскажу вам быстро, что есть то и что есть это :) Ну знаю, подумаю и отвечу. Но сходу — низачто. ДУмаю ваша статья продлит мою память подольше :)',
                            postedComment: '2021-05-15',
                        },
                        {
                            id: 2,
                            name: 'Elon',
                            avatar: avatar,
                            email: 'mu@gmail.com',
                            commentText: 'Спасибо. Про абстрагирование признаюсь честно — за час до начала лекции спохватился, что этого раздела нет и спешно дописывал. Поэтому получилось немного сумбурно…',
                            postedComment: '2021-05-16'
                        }
                    ],
                },
                {
                    id: 4,
                    name: 'ads1',
                    title: 'Far Cry',
                    date: "2021-05-15",
                    time: "11:27",
                    task: 'Скачать заявку, разработать проект или бизнес-план, составить презентацию и т.п.)',
                    feedBack: 'Обучение по ХААСП, помощь с продажей в Узбекистане, технологией выращивания дождевых червей и т.п.',
                    contact: '+996 999 999 999',
                    description: "Стипендиальная программа  разработана для талантливых иностранных студентов желающих обучаться на одной из магистерских программ факультета науки университета Katholieke Universiteit Leuven в Бельгии.",
                    programs: ['Master of Astronomy and Astrophysics', 'Master of Biology', 'Master of Biophysics, Biochemistry and Biotechnology' , 'Master of Chemistry' , 'Master of Geography' , 'Interuniversity Master of Geology' , 'Master of Mathematics' , 'Master of Physics' , 'Master of Statistics' , 'Erasmus Mundus Master of Theoretical Chemistry and Computational Modelling' , 'Erasmus Mundus Joint Master in Sustainable and Territorial Development'],
                    req: ['ранее не обучались и не работали в университете University of Leuven;','имеют степень бакалавра, полученную в аккредитованном университете;','не имеют степени магистра, или кандидата наук;' , 'могут подтвердить что обучались на отлично в их родном университете;','отлично владеют английским языком ( IELTS – 7; TOEFL – 94 internet-based);' , 'заинтересованы в обучении на магистерской программе.'],
                    comments: [
                        {
                            id: 1,
                            name: 'Mark',
                            avatar: avatar,
                            email: 'mu@gmail.com',
                            commentText: 'О да, полиморфизм и инкапсуляция. Ну хоть убей я не расскажу вам быстро, что есть то и что есть это :) Ну знаю, подумаю и отвечу. Но сходу — низачто. ДУмаю ваша статья продлит мою память подольше :)',
                            postedComment: '2021-05-15',
                        },
                        {
                            id: 2,
                            name: 'Elon',
                            avatar: avatar,
                            email: 'mu@gmail.com',
                            commentText: 'Спасибо. Про абстрагирование признаюсь честно — за час до начала лекции спохватился, что этого раздела нет и спешно дописывал. Поэтому получилось немного сумбурно…',
                            postedComment: '2021-05-16'
                        }
                    ],
                },
                {
                    id: 5,
                    name: 'ads1',
                    title: 'Spider-man',
                    date: "2021-05-15",
                    time: "11:27",
                    task: 'Скачать заявку, разработать проект или бизнес-план, составить презентацию и т.п.)',
                    feedBack: 'Обучение по ХААСП, помощь с продажей в Узбекистане, технологией выращивания дождевых червей и т.п.',
                    contact: '+996 999 999 999',
                    description: "Стипендиальная программа  разработана для талантливых иностранных студентов желающих обучаться на одной из магистерских программ факультета науки университета Katholieke Universiteit Leuven в Бельгии.",
                    programs: ['Master of Astronomy and Astrophysics', 'Master of Biology', 'Master of Biophysics, Biochemistry and Biotechnology' , 'Master of Chemistry' , 'Master of Geography' , 'Interuniversity Master of Geology' , 'Master of Mathematics' , 'Master of Physics' , 'Master of Statistics' , 'Erasmus Mundus Master of Theoretical Chemistry and Computational Modelling' , 'Erasmus Mundus Joint Master in Sustainable and Territorial Development'],
                    req: ['ранее не обучались и не работали в университете University of Leuven;','имеют степень бакалавра, полученную в аккредитованном университете;','не имеют степени магистра, или кандидата наук;' , 'могут подтвердить что обучались на отлично в их родном университете;','отлично владеют английским языком ( IELTS – 7; TOEFL – 94 internet-based);' , 'заинтересованы в обучении на магистерской программе.'],
                    comments: [
                        {
                            id: 1,
                            name: 'Mark',
                            avatar: avatar,
                            email: 'mu@gmail.com',
                            commentText: 'О да, полиморфизм и инкапсуляция. Ну хоть убей я не расскажу вам быстро, что есть то и что есть это :) Ну знаю, подумаю и отвечу. Но сходу — низачто. ДУмаю ваша статья продлит мою память подольше :)',
                            postedComment: '2021-05-15',
                        },
                        {
                            id: 2,
                            name: 'Elon',
                            avatar: avatar,
                            email: 'mu@gmail.com',
                            commentText: 'Спасибо. Про абстрагирование признаюсь честно — за час до начала лекции спохватился, что этого раздела нет и спешно дописывал. Поэтому получилось немного сумбурно…',
                            postedComment: '2021-05-16'
                        }
                    ],
                },
                {
                    id: 6,
                    name: 'ads1',
                    title: 'watch Dog',
                    date: "2021-05-15",
                    time: "11:27",
                    task: 'Скачать заявку, разработать проект или бизнес-план, составить презентацию и т.п.)',
                    feedBack: 'Обучение по ХААСП, помощь с продажей в Узбекистане, технологией выращивания дождевых червей и т.п.',
                    contact: '+996 999 999 999',
                    description: "Стипендиальная программа  разработана для талантливых иностранных студентов желающих обучаться на одной из магистерских программ факультета науки университета Katholieke Universiteit Leuven в Бельгии.",
                    programs: ['Master of Astronomy and Astrophysics', 'Master of Biology', 'Master of Biophysics, Biochemistry and Biotechnology' , 'Master of Chemistry' , 'Master of Geography' , 'Interuniversity Master of Geology' , 'Master of Mathematics' , 'Master of Physics' , 'Master of Statistics' , 'Erasmus Mundus Master of Theoretical Chemistry and Computational Modelling' , 'Erasmus Mundus Joint Master in Sustainable and Territorial Development'],
                    req: ['ранее не обучались и не работали в университете University of Leuven;','имеют степень бакалавра, полученную в аккредитованном университете;','не имеют степени магистра, или кандидата наук;' , 'могут подтвердить что обучались на отлично в их родном университете;','отлично владеют английским языком ( IELTS – 7; TOEFL – 94 internet-based);' , 'заинтересованы в обучении на магистерской программе.'],
                    comments: [
                        {
                            id: 1,
                            name: 'Mark',
                            avatar: avatar,
                            email: 'mu@gmail.com',
                            commentText: 'О да, полиморфизм и инкапсуляция. Ну хоть убей я не расскажу вам быстро, что есть то и что есть это :) Ну знаю, подумаю и отвечу. Но сходу — низачто. ДУмаю ваша статья продлит мою память подольше :)',
                            postedComment: '2021-05-15',
                        },
                        {
                            id: 2,
                            name: 'Elon',
                            avatar: avatar,
                            email: 'mu@gmail.com',
                            commentText: 'Спасибо. Про абстрагирование признаюсь честно — за час до начала лекции спохватился, что этого раздела нет и спешно дописывал. Поэтому получилось немного сумбурно…',
                            postedComment: '2021-05-16'
                        }
                    ],
                },
                {
                    id: 7,
                    name: 'ads1',
                    title: 'watch Dog',
                    date: "2021-05-15",
                    time: "11:27",
                    task: 'Скачать заявку, разработать проект или бизнес-план, составить презентацию и т.п.)',
                    feedBack: 'Обучение по ХААСП, помощь с продажей в Узбекистане, технологией выращивания дождевых червей и т.п.',
                    contact: '+996 999 999 999',
                    description: "Стипендиальная программа  разработана для талантливых иностранных студентов желающих обучаться на одной из магистерских программ факультета науки университета Katholieke Universiteit Leuven в Бельгии.",
                    programs: ['Master of Astronomy and Astrophysics', 'Master of Biology', 'Master of Biophysics, Biochemistry and Biotechnology' , 'Master of Chemistry' , 'Master of Geography' , 'Interuniversity Master of Geology' , 'Master of Mathematics' , 'Master of Physics' , 'Master of Statistics' , 'Erasmus Mundus Master of Theoretical Chemistry and Computational Modelling' , 'Erasmus Mundus Joint Master in Sustainable and Territorial Development'],
                    req: ['ранее не обучались и не работали в университете University of Leuven;','имеют степень бакалавра, полученную в аккредитованном университете;','не имеют степени магистра, или кандидата наук;' , 'могут подтвердить что обучались на отлично в их родном университете;','отлично владеют английским языком ( IELTS – 7; TOEFL – 94 internet-based);' , 'заинтересованы в обучении на магистерской программе.'],
                    comments: [
                        {
                            id: 1,
                            name: 'Mark',
                            avatar: avatar,
                            email: 'mu@gmail.com',
                            commentText: 'О да, полиморфизм и инкапсуляция. Ну хоть убей я не расскажу вам быстро, что есть то и что есть это :) Ну знаю, подумаю и отвечу. Но сходу — низачто. ДУмаю ваша статья продлит мою память подольше :)',
                            postedComment: '2021-05-15',
                        },
                        {
                            id: 2,
                            name: 'Elon',
                            avatar: avatar,
                            email: 'mu@gmail.com',
                            commentText: 'Спасибо. Про абстрагирование признаюсь честно — за час до начала лекции спохватился, что этого раздела нет и спешно дописывал. Поэтому получилось немного сумбурно…',
                            postedComment: '2021-05-16'
                        }
                    ],
                },
                {
                    id: 8,
                    name: 'ads1',
                    title: 'watch Dog',
                    date: "2021-05-15",
                    time: "11:27",
                    task: 'Скачать заявку, разработать проект или бизнес-план, составить презентацию и т.п.)',
                    feedBack: 'Обучение по ХААСП, помощь с продажей в Узбекистане, технологией выращивания дождевых червей и т.п.',
                    contact: '+996 999 999 999',
                    description: "Стипендиальная программа  разработана для талантливых иностранных студентов желающих обучаться на одной из магистерских программ факультета науки университета Katholieke Universiteit Leuven в Бельгии.",
                    programs: ['Master of Astronomy and Astrophysics', 'Master of Biology', 'Master of Biophysics, Biochemistry and Biotechnology' , 'Master of Chemistry' , 'Master of Geography' , 'Interuniversity Master of Geology' , 'Master of Mathematics' , 'Master of Physics' , 'Master of Statistics' , 'Erasmus Mundus Master of Theoretical Chemistry and Computational Modelling' , 'Erasmus Mundus Joint Master in Sustainable and Territorial Development'],
                    req: ['ранее не обучались и не работали в университете University of Leuven;','имеют степень бакалавра, полученную в аккредитованном университете;','не имеют степени магистра, или кандидата наук;' , 'могут подтвердить что обучались на отлично в их родном университете;','отлично владеют английским языком ( IELTS – 7; TOEFL – 94 internet-based);' , 'заинтересованы в обучении на магистерской программе.'],
                    comments: [
                        {
                            id: 1,
                            name: 'Mark',
                            avatar: avatar,
                            email: 'mu@gmail.com',
                            commentText: 'О да, полиморфизм и инкапсуляция. Ну хоть убей я не расскажу вам быстро, что есть то и что есть это :) Ну знаю, подумаю и отвечу. Но сходу — низачто. ДУмаю ваша статья продлит мою память подольше :)',
                            postedComment: '2021-05-15',
                        },
                        {
                            id: 2,
                            name: 'Elon',
                            avatar: avatar,
                            email: 'mu@gmail.com',
                            commentText: 'Спасибо. Про абстрагирование признаюсь честно — за час до начала лекции спохватился, что этого раздела нет и спешно дописывал. Поэтому получилось немного сумбурно…',
                            postedComment: '2021-05-16'
                        }
                    ],
                },
                {
                    id: 9,
                    name: 'ads1',
                    title: 'watch Dog',
                    date: "2021-05-15",
                    time: "11:27",
                    task: 'Скачать заявку, разработать проект или бизнес-план, составить презентацию и т.п.)',
                    feedBack: 'Обучение по ХААСП, помощь с продажей в Узбекистане, технологией выращивания дождевых червей и т.п.',
                    contact: '+996 999 999 999',
                    description: "Стипендиальная программа  разработана для талантливых иностранных студентов желающих обучаться на одной из магистерских программ факультета науки университета Katholieke Universiteit Leuven в Бельгии.",
                    programs: ['Master of Astronomy and Astrophysics', 'Master of Biology', 'Master of Biophysics, Biochemistry and Biotechnology' , 'Master of Chemistry' , 'Master of Geography' , 'Interuniversity Master of Geology' , 'Master of Mathematics' , 'Master of Physics' , 'Master of Statistics' , 'Erasmus Mundus Master of Theoretical Chemistry and Computational Modelling' , 'Erasmus Mundus Joint Master in Sustainable and Territorial Development'],
                    req: ['ранее не обучались и не работали в университете University of Leuven;','имеют степень бакалавра, полученную в аккредитованном университете;','не имеют степени магистра, или кандидата наук;' , 'могут подтвердить что обучались на отлично в их родном университете;','отлично владеют английским языком ( IELTS – 7; TOEFL – 94 internet-based);' , 'заинтересованы в обучении на магистерской программе.'],
                    comments: [
                        {
                            id: 1,
                            name: 'Mark',
                            avatar: avatar,
                            email: 'mu@gmail.com',
                            commentText: 'О да, полиморфизм и инкапсуляция. Ну хоть убей я не расскажу вам быстро, что есть то и что есть это :) Ну знаю, подумаю и отвечу. Но сходу — низачто. ДУмаю ваша статья продлит мою память подольше :)',
                            postedComment: '2021-05-15',
                        },
                        {
                            id: 2,
                            name: 'Elon',
                            avatar: avatar,
                            email: 'mu@gmail.com',
                            commentText: 'Спасибо. Про абстрагирование признаюсь честно — за час до начала лекции спохватился, что этого раздела нет и спешно дописывал. Поэтому получилось немного сумбурно…',
                            postedComment: '2021-05-16'
                        }
                    ],
                },
                {
                    id: 10,
                    name: 'ads1',
                    title: 'watch Dog',
                    date: "2021-05-15",
                    time: "11:27",
                    task: 'Скачать заявку, разработать проект или бизнес-план, составить презентацию и т.п.)',
                    feedBack: 'Обучение по ХААСП, помощь с продажей в Узбекистане, технологией выращивания дождевых червей и т.п.',
                    contact: '+996 999 999 999',
                    description: "Стипендиальная программа  разработана для талантливых иностранных студентов желающих обучаться на одной из магистерских программ факультета науки университета Katholieke Universiteit Leuven в Бельгии.",
                    programs: ['Master of Astronomy and Astrophysics', 'Master of Biology', 'Master of Biophysics, Biochemistry and Biotechnology' , 'Master of Chemistry' , 'Master of Geography' , 'Interuniversity Master of Geology' , 'Master of Mathematics' , 'Master of Physics' , 'Master of Statistics' , 'Erasmus Mundus Master of Theoretical Chemistry and Computational Modelling' , 'Erasmus Mundus Joint Master in Sustainable and Territorial Development'],
                    req: ['ранее не обучались и не работали в университете University of Leuven;','имеют степень бакалавра, полученную в аккредитованном университете;','не имеют степени магистра, или кандидата наук;' , 'могут подтвердить что обучались на отлично в их родном университете;','отлично владеют английским языком ( IELTS – 7; TOEFL – 94 internet-based);' , 'заинтересованы в обучении на магистерской программе.'],
                    comments: [
                        {
                            id: 1,
                            name: 'Mark',
                            avatar: avatar,
                            email: 'mu@gmail.com',
                            commentText: 'О да, полиморфизм и инкапсуляция. Ну хоть убей я не расскажу вам быстро, что есть то и что есть это :) Ну знаю, подумаю и отвечу. Но сходу — низачто. ДУмаю ваша статья продлит мою память подольше :)',
                            postedComment: '2021-05-15',
                        },
                        {
                            id: 2,
                            name: 'Elon',
                            avatar: avatar,
                            email: 'mu@gmail.com',
                            commentText: 'Спасибо. Про абстрагирование признаюсь честно — за час до начала лекции спохватился, что этого раздела нет и спешно дописывал. Поэтому получилось немного сумбурно…',
                            postedComment: '2021-05-16'
                        }
                    ],
                },
                {
                    id: 11,
                    name: 'ads1',
                    title: 'watch Dog',
                    date: "2021-05-15",
                    time: "11:27",
                    task: 'Скачать заявку, разработать проект или бизнес-план, составить презентацию и т.п.)',
                    feedBack: 'Обучение по ХААСП, помощь с продажей в Узбекистане, технологией выращивания дождевых червей и т.п.',
                    contact: '+996 999 999 999',
                    description: "Стипендиальная программа  разработана для талантливых иностранных студентов желающих обучаться на одной из магистерских программ факультета науки университета Katholieke Universiteit Leuven в Бельгии.",
                    programs: ['Master of Astronomy and Astrophysics', 'Master of Biology', 'Master of Biophysics, Biochemistry and Biotechnology' , 'Master of Chemistry' , 'Master of Geography' , 'Interuniversity Master of Geology' , 'Master of Mathematics' , 'Master of Physics' , 'Master of Statistics' , 'Erasmus Mundus Master of Theoretical Chemistry and Computational Modelling' , 'Erasmus Mundus Joint Master in Sustainable and Territorial Development'],
                    req: ['ранее не обучались и не работали в университете University of Leuven;','имеют степень бакалавра, полученную в аккредитованном университете;','не имеют степени магистра, или кандидата наук;' , 'могут подтвердить что обучались на отлично в их родном университете;','отлично владеют английским языком ( IELTS – 7; TOEFL – 94 internet-based);' , 'заинтересованы в обучении на магистерской программе.'],
                    comments: [
                        {
                            id: 1,
                            name: 'Mark',
                            avatar: avatar,
                            email: 'mu@gmail.com',
                            commentText: 'О да, полиморфизм и инкапсуляция. Ну хоть убей я не расскажу вам быстро, что есть то и что есть это :) Ну знаю, подумаю и отвечу. Но сходу — низачто. ДУмаю ваша статья продлит мою память подольше :)',
                            postedComment: '2021-05-15',
                        },
                        {
                            id: 2,
                            name: 'Elon',
                            avatar: avatar,
                            email: 'mu@gmail.com',
                            commentText: 'Спасибо. Про абстрагирование признаюсь честно — за час до начала лекции спохватился, что этого раздела нет и спешно дописывал. Поэтому получилось немного сумбурно…',
                            postedComment: '2021-05-16'
                        }
                    ],
                },
                {
                    id: 12,
                    name: 'ads1',
                    title: 'watch Dog',
                    date: "2021-05-15",
                    time: "11:27",
                    task: 'Скачать заявку, разработать проект или бизнес-план, составить презентацию и т.п.)',
                    feedBack: 'Обучение по ХААСП, помощь с продажей в Узбекистане, технологией выращивания дождевых червей и т.п.',
                    contact: '+996 999 999 999',
                    description: "Стипендиальная программа  разработана для талантливых иностранных студентов желающих обучаться на одной из магистерских программ факультета науки университета Katholieke Universiteit Leuven в Бельгии.",
                    programs: ['Master of Astronomy and Astrophysics', 'Master of Biology', 'Master of Biophysics, Biochemistry and Biotechnology' , 'Master of Chemistry' , 'Master of Geography' , 'Interuniversity Master of Geology' , 'Master of Mathematics' , 'Master of Physics' , 'Master of Statistics' , 'Erasmus Mundus Master of Theoretical Chemistry and Computational Modelling' , 'Erasmus Mundus Joint Master in Sustainable and Territorial Development'],
                    req: ['ранее не обучались и не работали в университете University of Leuven;','имеют степень бакалавра, полученную в аккредитованном университете;','не имеют степени магистра, или кандидата наук;' , 'могут подтвердить что обучались на отлично в их родном университете;','отлично владеют английским языком ( IELTS – 7; TOEFL – 94 internet-based);' , 'заинтересованы в обучении на магистерской программе.'],
                    comments: [
                        {
                            id: 1,
                            name: 'Mark',
                            avatar: avatar,
                            email: 'mu@gmail.com',
                            commentText: 'О да, полиморфизм и инкапсуляция. Ну хоть убей я не расскажу вам быстро, что есть то и что есть это :) Ну знаю, подумаю и отвечу. Но сходу — низачто. ДУмаю ваша статья продлит мою память подольше :)',
                            postedComment: '2021-05-15',
                        },
                        {
                            id: 2,
                            name: 'Elon',
                            avatar: avatar,
                            email: 'mu@gmail.com',
                            commentText: 'Спасибо. Про абстрагирование признаюсь честно — за час до начала лекции спохватился, что этого раздела нет и спешно дописывал. Поэтому получилось немного сумбурно…',
                            postedComment: '2021-05-16'
                        }
                    ],
                },
            ],
            invests : [
                {
                    id: 1,
                    img: investsImg,
                    title: "Международная стипендия Warwick Chancellor’s International Scholarships",
                    star: false,
                    deadline: '2021-05-09',
                    posted: '2021-05-15',
                    postedTime: '11:57',
                    coins: 5432,
                    value: "c",
                    events: "каждый год",
                    geolocation: "Лондон",
                    country: 'Великобритания',
                    text: "Стипендиальная программа Science@Leuven разработана для талантливых иностранных студентов желающих обучаться... ",
                    description: "Стипендиальная программа  разработана для талантливых иностранных студентов желающих обучаться на одной из магистерских программ факультета науки университета Katholieke Universiteit Leuven в Бельгии.",
                    programs: ['Master of Astronomy and Astrophysics', 'Master of Biology', 'Master of Biophysics, Biochemistry and Biotechnology' , 'Master of Chemistry' , 'Master of Geography' , 'Interuniversity Master of Geology' , 'Master of Mathematics' , 'Master of Physics' , 'Master of Statistics' , 'Erasmus Mundus Master of Theoretical Chemistry and Computational Modelling' , 'Erasmus Mundus Joint Master in Sustainable and Territorial Development'],
                    req: ['ранее не обучались и не работали в университете University of Leuven;','имеют степень бакалавра, полученную в аккредитованном университете;','не имеют степени магистра, или кандидата наук;' , 'могут подтвердить что обучались на отлично в их родном университете;','отлично владеют английским языком ( IELTS – 7; TOEFL – 94 internet-based);' , 'заинтересованы в обучении на магистерской программе.'],
                    comments: [
                        {
                            id: 1,
                            name: 'Mark',
                            avatar: avatar,
                            email: 'mu@gmail.com',
                            commentText: 'О да, полиморфизм и инкапсуляция. Ну хоть убей я не расскажу вам быстро, что есть то и что есть это :) Ну знаю, подумаю и отвечу. Но сходу — низачто. ДУмаю ваша статья продлит мою память подольше :)',
                            postedComment: '2021-05-15',
                        },
                        {
                            id: 2,
                            name: 'Elon',
                            avatar: avatar,
                            email: 'mu@gmail.com',
                            commentText: 'Спасибо. Про абстрагирование признаюсь честно — за час до начала лекции спохватился, что этого раздела нет и спешно дописывал. Поэтому получилось немного сумбурно…',
                            postedComment: '2021-05-16'
                        }
                    ]
                },
                {
                    id: 2,
                    img: investsImg,
                    title: "Международная стипендия Warwick Chancellor’s International Scholarships",
                    star: true,
                    deadline: '2021-05-09',
                    posted: '2021-05-15',
                    postedTime: '11:57',
                    coins: 10000,
                    value: "$",
                    events: "каждый год",
                    geolocation: "Лондон",
                    country: 'Великобритания',
                    text: "Стипендиальная программа Science@Leuven разработана для талантливых иностранных студентов желающих обучаться muradil... ",
                    description: "Стипендиальная программа  разработана для талантливых иностранных студентов желающих обучаться на одной из магистерских программ факультета науки университета Katholieke Universiteit Leuven в Бельгии.",
                    programs: ['Master of Astronomy and Astrophysics', 'Master of Biology', 'Master of Biophysics, Biochemistry and Biotechnology' , 'Master of Chemistry' , 'Master of Geography' , 'Interuniversity Master of Geology' , 'Master of Mathematics' , 'Master of Physics' , 'Master of Statistics' , 'Erasmus Mundus Master of Theoretical Chemistry and Computational Modelling' , 'Erasmus Mundus Joint Master in Sustainable and Territorial Development'],
                    req: ['ранее не обучались и не работали в университете University of Leuven;','имеют степень бакалавра, полученную в аккредитованном университете;','не имеют степени магистра, или кандидата наук;' , 'могут подтвердить что обучались на отлично в их родном университете;','отлично владеют английским языком ( IELTS – 7; TOEFL – 94 internet-based);' , 'заинтересованы в обучении на магистерской программе.'],
                    comments: [
                        {
                            id: 1,
                            name: 'Mark',
                            avatar: avatar,
                            email: 'mu@gmail.com',
                            commentText: 'О да, полиморфизм и инкапсуляция. Ну хоть убей я не расскажу вам быстро, что есть то и что есть это :) Ну знаю, подумаю и отвечу. Но сходу — низачто. ДУмаю ваша статья продлит мою память подольше :)',
                            postedComment: '2021-05-15',
                        },
                        {
                            id: 2,
                            name: 'Elon',
                            avatar: avatar,
                            email: 'mu@gmail.com',
                            commentText: 'Спасибо. Про абстрагирование признаюсь честно — за час до начала лекции спохватился, что этого раздела нет и спешно дописывал. Поэтому получилось немного сумбурно…',
                            postedComment: '2021-05-16'
                        }
                    ],
                },
                {
                    id: 3,
                    img: investsImg,
                    title: "Международная стипендия Warwick Chancellor’s International Scholarships",
                    star: false,
                    deadline: '2021-05-09',
                    posted: '2021-05-15',
                    postedTime: '11:57',
                    coins: 5432,
                    value: "c",
                    events: "каждый год",
                    geolocation: "Лондон",
                    country: 'Великобритания',
                    text: "Стипендиальная программа Science@Leuven разработана для талантливых иностранных студентов желающих обучаться... ",
                    description: "Стипендиальная программа  разработана для талантливых иностранных студентов желающих обучаться на одной из магистерских программ факультета науки университета Katholieke Universiteit Leuven в Бельгии.",
                    programs: ['Master of Astronomy and Astrophysics', 'Master of Biology', 'Master of Biophysics, Biochemistry and Biotechnology' , 'Master of Chemistry' , 'Master of Geography' , 'Interuniversity Master of Geology' , 'Master of Mathematics' , 'Master of Physics' , 'Master of Statistics' , 'Erasmus Mundus Master of Theoretical Chemistry and Computational Modelling' , 'Erasmus Mundus Joint Master in Sustainable and Territorial Development'],
                    req: ['ранее не обучались и не работали в университете University of Leuven;','имеют степень бакалавра, полученную в аккредитованном университете;','не имеют степени магистра, или кандидата наук;' , 'могут подтвердить что обучались на отлично в их родном университете;','отлично владеют английским языком ( IELTS – 7; TOEFL – 94 internet-based);' , 'заинтересованы в обучении на магистерской программе.'],
                    comments: []
                },
                {
                    id: 4,
                    img: investsImg,
                    title: "Международная стипендия Warwick Chancellor’s International Scholarships",
                    star: false,
                    deadline: '2021-05-09',
                    posted: '2021-05-15',
                    postedTime: '11:57',
                    coins: 5432,
                    value: "c",
                    events: "каждый год",
                    geolocation: "Лондон",
                    country: 'Великобритания',
                    text: "Стипендиальная программа Science@Leuven разработана для талантливых иностранных студентов желающих обучаться... ",
                    description: "Стипендиальная программа  разработана для талантливых иностранных студентов желающих обучаться на одной из магистерских программ факультета науки университета Katholieke Universiteit Leuven в Бельгии.",
                    programs: ['Master of Astronomy and Astrophysics', 'Master of Biology', 'Master of Biophysics, Biochemistry and Biotechnology' , 'Master of Chemistry' , 'Master of Geography' , 'Interuniversity Master of Geology' , 'Master of Mathematics' , 'Master of Physics' , 'Master of Statistics' , 'Erasmus Mundus Master of Theoretical Chemistry and Computational Modelling' , 'Erasmus Mundus Joint Master in Sustainable and Territorial Development'],
                    req: ['ранее не обучались и не работали в университете University of Leuven;','имеют степень бакалавра, полученную в аккредитованном университете;','не имеют степени магистра, или кандидата наук;' , 'могут подтвердить что обучались на отлично в их родном университете;','отлично владеют английским языком ( IELTS – 7; TOEFL – 94 internet-based);' , 'заинтересованы в обучении на магистерской программе.'],
                    comments: []
                },
                {
                    id: 5,
                    img: investsImg,
                    title: "Международная стипендия Warwick Chancellor’s International Scholarships",
                    star: false,
                    deadline: '2021-05-09',
                    posted: '2021-05-15',
                    postedTime: '11:57',
                    coins: 5432,
                    value: "c",
                    events: "каждый год",
                    geolocation: "Лондон",
                    country: 'Великобритания',
                    text: "Стипендиальная программа Science@Leuven разработана для талантливых иностранных студентов желающих обучаться... ",
                    description: "Стипендиальная программа  разработана для талантливых иностранных студентов желающих обучаться на одной из магистерских программ факультета науки университета Katholieke Universiteit Leuven в Бельгии.",
                    programs: ['Master of Astronomy and Astrophysics', 'Master of Biology', 'Master of Biophysics, Biochemistry and Biotechnology' , 'Master of Chemistry' , 'Master of Geography' , 'Interuniversity Master of Geology' , 'Master of Mathematics' , 'Master of Physics' , 'Master of Statistics' , 'Erasmus Mundus Master of Theoretical Chemistry and Computational Modelling' , 'Erasmus Mundus Joint Master in Sustainable and Territorial Development'],
                    req: ['ранее не обучались и не работали в университете University of Leuven;','имеют степень бакалавра, полученную в аккредитованном университете;','не имеют степени магистра, или кандидата наук;' , 'могут подтвердить что обучались на отлично в их родном университете;','отлично владеют английским языком ( IELTS – 7; TOEFL – 94 internet-based);' , 'заинтересованы в обучении на магистерской программе.'],
                    comments: []
                },
                {
                    id: 6,
                    img: investsImg,
                    title: "Muradil",
                    star: false,
                    deadline: '2021-05-09',
                    posted: '2021-05-15',
                    postedTime: '11:57',
                    coins: 5432,
                    value: "c",
                    events: "каждый год",
                    geolocation: "Лондон",
                    country: 'Великобритания',
                    text: "Стипендиальная программа Science@Leuven разработана для талантливых иностранных студентов желающих обучаться... ",
                    description: "Стипендиальная программа  разработана для талантливых иностранных студентов желающих обучаться на одной из магистерских программ факультета науки университета Katholieke Universiteit Leuven в Бельгии.",
                    programs: ['Master of Astronomy and Astrophysics', 'Master of Biology', 'Master of Biophysics, Biochemistry and Biotechnology' , 'Master of Chemistry' , 'Master of Geography' , 'Interuniversity Master of Geology' , 'Master of Mathematics' , 'Master of Physics' , 'Master of Statistics' , 'Erasmus Mundus Master of Theoretical Chemistry and Computational Modelling' , 'Erasmus Mundus Joint Master in Sustainable and Territorial Development'],
                    req: ['ранее не обучались и не работали в университете University of Leuven;','имеют степень бакалавра, полученную в аккредитованном университете;','не имеют степени магистра, или кандидата наук;' , 'могут подтвердить что обучались на отлично в их родном университете;','отлично владеют английским языком ( IELTS – 7; TOEFL – 94 internet-based);' , 'заинтересованы в обучении на магистерской программе.'],
                    comments: [
                        {
                            id: 1,
                            name: 'Mark',
                            avatar: avatar,
                            email: 'mu@gmail.com',
                            commentText: 'О да, полиморфизм и инкапсуляция. Ну хоть убей я не расскажу вам быстро, что есть то и что есть это :) Ну знаю, подумаю и отвечу. Но сходу — низачто. ДУмаю ваша статья продлит мою память подольше :)',
                            postedComment: '2021-05-15',
                        },
                        {
                            id: 2,
                            name: 'Elon',
                            avatar: avatar,
                            email: 'mu@gmail.com',
                            commentText: 'Спасибо. Про абстрагирование признаюсь честно — за час до начала лекции спохватился, что этого раздела нет и спешно дописывал. Поэтому получилось немного сумбурно…',
                            postedComment: '2021-05-16'
                        }
                    ],
                },
                {
                    id: 7,
                    img: investsImg,
                    title: "Muradil",
                    star: false,
                    deadline: '2021-05-09',
                    posted: '2021-05-15',
                    postedTime: '11:57',
                    coins: 5432,
                    value: "c",
                    events: "каждый год",
                    geolocation: "Лондон",
                    country: 'Великобритания',
                    text: "Стипендиальная программа Science@Leuven разработана для талантливых иностранных студентов желающих обучаться... ",
                    description: "Стипендиальная программа  разработана для талантливых иностранных студентов желающих обучаться на одной из магистерских программ факультета науки университета Katholieke Universiteit Leuven в Бельгии.",
                    programs: ['Master of Astronomy and Astrophysics', 'Master of Biology', 'Master of Biophysics, Biochemistry and Biotechnology' , 'Master of Chemistry' , 'Master of Geography' , 'Interuniversity Master of Geology' , 'Master of Mathematics' , 'Master of Physics' , 'Master of Statistics' , 'Erasmus Mundus Master of Theoretical Chemistry and Computational Modelling' , 'Erasmus Mundus Joint Master in Sustainable and Territorial Development'],
                    req: ['ранее не обучались и не работали в университете University of Leuven;','имеют степень бакалавра, полученную в аккредитованном университете;','не имеют степени магистра, или кандидата наук;' , 'могут подтвердить что обучались на отлично в их родном университете;','отлично владеют английским языком ( IELTS – 7; TOEFL – 94 internet-based);' , 'заинтересованы в обучении на магистерской программе.'],
                    comments: [
                        {
                            id: 1,
                            name: 'Mark',
                            avatar: avatar,
                            email: 'mu@gmail.com',
                            commentText: 'О да, полиморфизм и инкапсуляция. Ну хоть убей я не расскажу вам быстро, что есть то и что есть это :) Ну знаю, подумаю и отвечу. Но сходу — низачто. ДУмаю ваша статья продлит мою память подольше :)',
                            postedComment: '2021-05-15',
                        },
                        {
                            id: 2,
                            name: 'Elon',
                            avatar: avatar,
                            email: 'mu@gmail.com',
                            commentText: 'Спасибо. Про абстрагирование признаюсь честно — за час до начала лекции спохватился, что этого раздела нет и спешно дописывал. Поэтому получилось немного сумбурно…',
                            postedComment: '2021-05-16'
                        }
                    ],
                },
                {
                    id: 8,
                    img: investsImg,
                    title: "Muradil",
                    star: false,
                    deadline: '2021-05-09',
                    posted: '2021-05-15',
                    postedTime: '11:57',
                    coins: 5432,
                    value: "c",
                    events: "каждый год",
                    geolocation: "Лондон",
                    country: 'Великобритания',
                    text: "Стипендиальная программа Science@Leuven разработана для талантливых иностранных студентов желающих обучаться... ",
                    description: "Стипендиальная программа  разработана для талантливых иностранных студентов желающих обучаться на одной из магистерских программ факультета науки университета Katholieke Universiteit Leuven в Бельгии.",
                    programs: ['Master of Astronomy and Astrophysics', 'Master of Biology', 'Master of Biophysics, Biochemistry and Biotechnology' , 'Master of Chemistry' , 'Master of Geography' , 'Interuniversity Master of Geology' , 'Master of Mathematics' , 'Master of Physics' , 'Master of Statistics' , 'Erasmus Mundus Master of Theoretical Chemistry and Computational Modelling' , 'Erasmus Mundus Joint Master in Sustainable and Territorial Development'],
                    req: ['ранее не обучались и не работали в университете University of Leuven;','имеют степень бакалавра, полученную в аккредитованном университете;','не имеют степени магистра, или кандидата наук;' , 'могут подтвердить что обучались на отлично в их родном университете;','отлично владеют английским языком ( IELTS – 7; TOEFL – 94 internet-based);' , 'заинтересованы в обучении на магистерской программе.'],
                    comments: [
                        {
                            id: 1,
                            name: 'Mark',
                            avatar: avatar,
                            email: 'mu@gmail.com',
                            commentText: 'О да, полиморфизм и инкапсуляция. Ну хоть убей я не расскажу вам быстро, что есть то и что есть это :) Ну знаю, подумаю и отвечу. Но сходу — низачто. ДУмаю ваша статья продлит мою память подольше :)',
                            postedComment: '2021-05-15',
                        },
                        {
                            id: 2,
                            name: 'Elon',
                            avatar: avatar,
                            email: 'mu@gmail.com',
                            commentText: 'Спасибо. Про абстрагирование признаюсь честно — за час до начала лекции спохватился, что этого раздела нет и спешно дописывал. Поэтому получилось немного сумбурно…',
                            postedComment: '2021-05-16'
                        }
                    ]
                },
                {
                    id: 9,
                    img: investsImg,
                    title: "Muradil",
                    star: false,
                    deadline: '2021-05-09',
                    posted: '2021-05-15',
                    postedTime: '11:57',
                    coins: 5432,
                    value: "c",
                    events: "каждый год",
                    geolocation: "Лондон",
                    country: 'Великобритания',
                    text: "Стипендиальная программа Science@Leuven разработана для талантливых иностранных студентов желающих обучаться... ",
                    description: "Стипендиальная программа  разработана для талантливых иностранных студентов желающих обучаться на одной из магистерских программ факультета науки университета Katholieke Universiteit Leuven в Бельгии.",
                    programs: ['Master of Astronomy and Astrophysics', 'Master of Biology', 'Master of Biophysics, Biochemistry and Biotechnology' , 'Master of Chemistry' , 'Master of Geography' , 'Interuniversity Master of Geology' , 'Master of Mathematics' , 'Master of Physics' , 'Master of Statistics' , 'Erasmus Mundus Master of Theoretical Chemistry and Computational Modelling' , 'Erasmus Mundus Joint Master in Sustainable and Territorial Development'],
                    req: ['ранее не обучались и не работали в университете University of Leuven;','имеют степень бакалавра, полученную в аккредитованном университете;','не имеют степени магистра, или кандидата наук;' , 'могут подтвердить что обучались на отлично в их родном университете;','отлично владеют английским языком ( IELTS – 7; TOEFL – 94 internet-based);' , 'заинтересованы в обучении на магистерской программе.'],
                    comments: [
                        {
                            id: 1,
                            name: 'Mark',
                            avatar: avatar,
                            email: 'mu@gmail.com',
                            commentText: 'О да, полиморфизм и инкапсуляция. Ну хоть убей я не расскажу вам быстро, что есть то и что есть это :) Ну знаю, подумаю и отвечу. Но сходу — низачто. ДУмаю ваша статья продлит мою память подольше :)',
                            postedComment: '2021-05-15',
                        },
                        {
                            id: 2,
                            name: 'Elon',
                            avatar: avatar,
                            email: 'mu@gmail.com',
                            commentText: 'Спасибо. Про абстрагирование признаюсь честно — за час до начала лекции спохватился, что этого раздела нет и спешно дописывал. Поэтому получилось немного сумбурно…',
                            postedComment: '2021-05-16'
                        }
                    ],
                },
                {
                    id: 10,
                    img: investsImg,
                    title: "Muradil",
                    star: false,
                    deadline: '2021-05-09',
                    posted: '2021-05-15',
                    postedTime: '11:57',
                    coins: 5432,
                    value: "c",
                    events: "каждый год",
                    geolocation: "Лондон",
                    country: 'Великобритания',
                    text: "Стипендиальная программа Science@Leuven разработана для талантливых иностранных студентов желающих обучаться... ",
                    description: "Стипендиальная программа  разработана для талантливых иностранных студентов желающих обучаться на одной из магистерских программ факультета науки университета Katholieke Universiteit Leuven в Бельгии.",
                    programs: ['Master of Astronomy and Astrophysics', 'Master of Biology', 'Master of Biophysics, Biochemistry and Biotechnology' , 'Master of Chemistry' , 'Master of Geography' , 'Interuniversity Master of Geology' , 'Master of Mathematics' , 'Master of Physics' , 'Master of Statistics' , 'Erasmus Mundus Master of Theoretical Chemistry and Computational Modelling' , 'Erasmus Mundus Joint Master in Sustainable and Territorial Development'],
                    req: ['ранее не обучались и не работали в университете University of Leuven;','имеют степень бакалавра, полученную в аккредитованном университете;','не имеют степени магистра, или кандидата наук;' , 'могут подтвердить что обучались на отлично в их родном университете;','отлично владеют английским языком ( IELTS – 7; TOEFL – 94 internet-based);' , 'заинтересованы в обучении на магистерской программе.'],
                    comments: [
                        {
                            id: 1,
                            name: 'Mark',
                            avatar: avatar,
                            email: 'mu@gmail.com',
                            commentText: 'О да, полиморфизм и инкапсуляция. Ну хоть убей я не расскажу вам быстро, что есть то и что есть это :) Ну знаю, подумаю и отвечу. Но сходу — низачто. ДУмаю ваша статья продлит мою память подольше :)',
                            postedComment: '2021-05-15',
                        },
                        {
                            id: 2,
                            name: 'Elon',
                            avatar: avatar,
                            email: 'mu@gmail.com',
                            commentText: 'Спасибо. Про абстрагирование признаюсь честно — за час до начала лекции спохватился, что этого раздела нет и спешно дописывал. Поэтому получилось немного сумбурно…',
                            postedComment: '2021-05-16'
                        }
                    ],
                },
                {
                    id: 11,
                    img: investsImg,
                    title: "Muradil",
                    star: false,
                    deadline: '2021-05-09',
                    posted: '2021-05-15',
                    postedTime: '11:57',
                    coins: 5432,
                    value: "c",
                    events: "каждый год",
                    geolocation: "Лондон",
                    country: 'Великобритания',
                    text: "Стипендиальная программа Science@Leuven разработана для талантливых иностранных студентов желающих обучаться... ",
                    description: "Стипендиальная программа  разработана для талантливых иностранных студентов желающих обучаться на одной из магистерских программ факультета науки университета Katholieke Universiteit Leuven в Бельгии.",
                    programs: ['Master of Astronomy and Astrophysics', 'Master of Biology', 'Master of Biophysics, Biochemistry and Biotechnology' , 'Master of Chemistry' , 'Master of Geography' , 'Interuniversity Master of Geology' , 'Master of Mathematics' , 'Master of Physics' , 'Master of Statistics' , 'Erasmus Mundus Master of Theoretical Chemistry and Computational Modelling' , 'Erasmus Mundus Joint Master in Sustainable and Territorial Development'],
                    req: ['ранее не обучались и не работали в университете University of Leuven;','имеют степень бакалавра, полученную в аккредитованном университете;','не имеют степени магистра, или кандидата наук;' , 'могут подтвердить что обучались на отлично в их родном университете;','отлично владеют английским языком ( IELTS – 7; TOEFL – 94 internet-based);' , 'заинтересованы в обучении на магистерской программе.'],
                    comments: [
                        {
                            id: 1,
                            name: 'Mark',
                            email: 'mu@gmail.com',
                            avatar: avatar,
                            commentText: 'О да, полиморфизм и инкапсуляция. Ну хоть убей я не расскажу вам быстро, что есть то и что есть это :) Ну знаю, подумаю и отвечу. Но сходу — низачто. ДУмаю ваша статья продлит мою память подольше :)',
                            postedComment: '2021-05-15',
                        },
                        {
                            id: 2,
                            name: 'Elon',
                            email: 'mu@gmail.com',
                            avatar: avatar,
                            commentText: 'Спасибо. Про абстрагирование признаюсь честно — за час до начала лекции спохватился, что этого раздела нет и спешно дописывал. Поэтому получилось немного сумбурно…',
                            postedComment: '2021-05-16'
                        }
                    ],
                },
                {
                    id: 12,
                    img: investsImg,
                    title: "Muradil",
                    star: false,
                    deadline: '2021-05-09',
                    posted: '2021-05-15',
                    postedTime: '11:57',
                    coins: 5432,
                    value: "c",
                    events: "каждый год",
                    geolocation: "Лондон",
                    country: 'Великобритания',
                    text: "Стипендиальная программа Science@Leuven разработана для талантливых иностранных студентов желающих обучаться... ",
                    description: "Стипендиальная программа  разработана для талантливых иностранных студентов желающих обучаться на одной из магистерских программ факультета науки университета Katholieke Universiteit Leuven в Бельгии.",
                    programs: ['Master of Astronomy and Astrophysics', 'Master of Biology', 'Master of Biophysics, Biochemistry and Biotechnology' , 'Master of Chemistry' , 'Master of Geography' , 'Interuniversity Master of Geology' , 'Master of Mathematics' , 'Master of Physics' , 'Master of Statistics' , 'Erasmus Mundus Master of Theoretical Chemistry and Computational Modelling' , 'Erasmus Mundus Joint Master in Sustainable and Territorial Development'],
                    req: ['ранее не обучались и не работали в университете University of Leuven;','имеют степень бакалавра, полученную в аккредитованном университете;','не имеют степени магистра, или кандидата наук;' , 'могут подтвердить что обучались на отлично в их родном университете;','отлично владеют английским языком ( IELTS – 7; TOEFL – 94 internet-based);' , 'заинтересованы в обучении на магистерской программе.'],
                    comments: [
                        {
                            id: 1,
                            name: 'Mark',
                            email: 'mu@gmail.com',
                            avatar: avatar,
                            commentText: 'О да, полиморфизм и инкапсуляция. Ну хоть убей я не расскажу вам быстро, что есть то и что есть это :) Ну знаю, подумаю и отвечу. Но сходу — низачто. ДУмаю ваша статья продлит мою память подольше :)',
                            postedComment: '2021-05-15',
                        },
                        {
                            id: 2,
                            name: 'Elon',
                            email: 'mu@gmail.com',
                            avatar: avatar,
                            commentText: 'Спасибо. Про абстрагирование признаюсь честно — за час до начала лекции спохватился, что этого раздела нет и спешно дописывал. Поэтому получилось немного сумбурно…',
                            postedComment: '2021-05-16'
                        }
                    ],
                },
            ],
            events: [
                {
                    id: 1,
                    img: card1,
                    title: 'Стипендиальная программа для иностранных студентов',
                    data: '2021-05-15',
                    time: '9:00',
                    posted: '2021-05-15',
                    timePosted: '11:57',
                    location: 'Бишкек',
                    format: 'Онлайн',
                    country: 'Великобритания',
                    coins: '5432',
                    value: 'C',
                    description: "Стипендиальная программа  разработана для талантливых иностранных студентов желающих обучаться на одной из магистерских программ факультета науки университета Katholieke Universiteit Leuven в Бельгии.",
                    programs: ['Master of Astronomy and Astrophysics', 'Master of Biology', 'Master of Biophysics, Biochemistry and Biotechnology' , 'Master of Chemistry' , 'Master of Geography' , 'Interuniversity Master of Geology' , 'Master of Mathematics' , 'Master of Physics' , 'Master of Statistics' , 'Erasmus Mundus Master of Theoretical Chemistry and Computational Modelling' , 'Erasmus Mundus Joint Master in Sustainable and Territorial Development'],
                    req: ['ранее не обучались и не работали в университете University of Leuven;','имеют степень бакалавра, полученную в аккредитованном университете;','не имеют степени магистра, или кандидата наук;' , 'могут подтвердить что обучались на отлично в их родном университете;','отлично владеют английским языком ( IELTS – 7; TOEFL – 94 internet-based);' , 'заинтересованы в обучении на магистерской программе.'],
                    comments: [
                        {
                            id: 1,
                            name: 'Mark',
                            avatar: avatar,
                            email: 'mu@gmail.com',
                            commentText: 'О да, полиморфизм и инкапсуляция. Ну хоть убей я не расскажу вам быстро, что есть то и что есть это :) Ну знаю, подумаю и отвечу. Но сходу — низачто. ДУмаю ваша статья продлит мою память подольше :)',
                            postedComment: '2021-05-15',
                        },
                        {
                            id: 2,
                            name: 'Elon',
                            avatar: avatar,
                            email: 'mu@gmail.com',
                            commentText: 'Спасибо. Про абстрагирование признаюсь честно — за час до начала лекции спохватился, что этого раздела нет и спешно дописывал. Поэтому получилось немного сумбурно…',
                            postedComment: '2021-05-16'
                        }
                    ],
                },
                {
                    id: 2,
                    img: card2,
                    title: 'Стипендиальная программа для иностранных студентов',
                    data: '2021-05-15',
                    time: '9:00',
                    posted: '2021-05-15',
                    timePosted: '11:57',
                    location: 'Кара-Балта',
                    format: 'Офлайн',
                    country: 'Великобритания',
                    coins: '5432',
                    value: 'C',
                    description: "Стипендиальная программа  разработана для талантливых иностранных студентов желающих обучаться на одной из магистерских программ факультета науки университета Katholieke Universiteit Leuven в Бельгии.",
                    programs: ['Master of Astronomy and Astrophysics', 'Master of Biology', 'Master of Biophysics, Biochemistry and Biotechnology' , 'Master of Chemistry' , 'Master of Geography' , 'Interuniversity Master of Geology' , 'Master of Mathematics' , 'Master of Physics' , 'Master of Statistics' , 'Erasmus Mundus Master of Theoretical Chemistry and Computational Modelling' , 'Erasmus Mundus Joint Master in Sustainable and Territorial Development'],
                    req: ['ранее не обучались и не работали в университете University of Leuven;','имеют степень бакалавра, полученную в аккредитованном университете;','не имеют степени магистра, или кандидата наук;' , 'могут подтвердить что обучались на отлично в их родном университете;','отлично владеют английским языком ( IELTS – 7; TOEFL – 94 internet-based);' , 'заинтересованы в обучении на магистерской программе.'],
                    comments: [
                        {
                            id: 1,
                            name: 'Mark',
                            avatar: avatar,
                            email: 'mu@gmail.com',
                            commentText: 'О да, полиморфизм и инкапсуляция. Ну хоть убей я не расскажу вам быстро, что есть то и что есть это :) Ну знаю, подумаю и отвечу. Но сходу — низачто. ДУмаю ваша статья продлит мою память подольше :)',
                            postedComment: '2021-05-15',
                        },
                        {
                            id: 2,
                            name: 'Elon',
                            avatar: avatar,
                            email: 'mu@gmail.com',
                            commentText: 'Спасибо. Про абстрагирование признаюсь честно — за час до начала лекции спохватился, что этого раздела нет и спешно дописывал. Поэтому получилось немного сумбурно…',
                            postedComment: '2021-05-16'
                        }
                    ]
                },
                {
                    id: 3,
                    img: card3,
                    title: 'Стипендиальная программа для иностранных студентов',
                    data: '2021-05-15',
                    time: '9:00',
                    posted: '2021-05-15',
                    timePosted: '11:57',
                    location: 'Мадрид',
                    format: 'Онлайн',
                    country: 'Великобритания',
                    coins: '5432',
                    value: 'C',
                    description: "Стипендиальная программа  разработана для талантливых иностранных студентов желающих обучаться на одной из магистерских программ факультета науки университета Katholieke Universiteit Leuven в Бельгии.",
                    programs: ['Master of Astronomy and Astrophysics', 'Master of Biology', 'Master of Biophysics, Biochemistry and Biotechnology' , 'Master of Chemistry' , 'Master of Geography' , 'Interuniversity Master of Geology' , 'Master of Mathematics' , 'Master of Physics' , 'Master of Statistics' , 'Erasmus Mundus Master of Theoretical Chemistry and Computational Modelling' , 'Erasmus Mundus Joint Master in Sustainable and Territorial Development'],
                    req: ['ранее не обучались и не работали в университете University of Leuven;','имеют степень бакалавра, полученную в аккредитованном университете;','не имеют степени магистра, или кандидата наук;' , 'могут подтвердить что обучались на отлично в их родном университете;','отлично владеют английским языком ( IELTS – 7; TOEFL – 94 internet-based);' , 'заинтересованы в обучении на магистерской программе.'],
                    comments: [
                        {
                            id: 1,
                            name: 'Mark',
                            avatar: avatar,
                            email: 'mu@gmail.com',
                            commentText: 'О да, полиморфизм и инкапсуляция. Ну хоть убей я не расскажу вам быстро, что есть то и что есть это :) Ну знаю, подумаю и отвечу. Но сходу — низачто. ДУмаю ваша статья продлит мою память подольше :)',
                            postedComment: '2021-05-15',
                        },
                        {
                            id: 2,
                            name: 'Elon',
                            avatar: avatar,
                            email: 'mu@gmail.com',
                            commentText: 'Спасибо. Про абстрагирование признаюсь честно — за час до начала лекции спохватился, что этого раздела нет и спешно дописывал. Поэтому получилось немного сумбурно…',
                            postedComment: '2021-05-16'
                        }
                    ]
                },
                {
                    id: 4,
                    img: card1,
                    title: 'Стипендиальная программа для иностранных студентов',
                    data: '2021-05-15',
                    time: '9:00',
                    posted: '2021-05-15',
                    timePosted: '11:57',
                    location: 'Париж',
                    format: 'Офлайн',
                    country: 'Великобритания',
                    coins: '5432',
                    value: 'C',
                    description: "Стипендиальная программа  разработана для талантливых иностранных студентов желающих обучаться на одной из магистерских программ факультета науки университета Katholieke Universiteit Leuven в Бельгии.",
                    programs: ['Master of Astronomy and Astrophysics', 'Master of Biology', 'Master of Biophysics, Biochemistry and Biotechnology' , 'Master of Chemistry' , 'Master of Geography' , 'Interuniversity Master of Geology' , 'Master of Mathematics' , 'Master of Physics' , 'Master of Statistics' , 'Erasmus Mundus Master of Theoretical Chemistry and Computational Modelling' , 'Erasmus Mundus Joint Master in Sustainable and Territorial Development'],
                    req: ['ранее не обучались и не работали в университете University of Leuven;','имеют степень бакалавра, полученную в аккредитованном университете;','не имеют степени магистра, или кандидата наук;' , 'могут подтвердить что обучались на отлично в их родном университете;','отлично владеют английским языком ( IELTS – 7; TOEFL – 94 internet-based);' , 'заинтересованы в обучении на магистерской программе.'],
                    comments: [
                        {
                            id: 1,
                            name: 'Mark',
                            avatar: avatar,
                            email: 'mu@gmail.com',
                            commentText: 'О да, полиморфизм и инкапсуляция. Ну хоть убей я не расскажу вам быстро, что есть то и что есть это :) Ну знаю, подумаю и отвечу. Но сходу — низачто. ДУмаю ваша статья продлит мою память подольше :)',
                            postedComment: '2021-05-15',
                        },
                        {
                            id: 2,
                            name: 'Elon',
                            avatar: avatar,
                            email: 'mu@gmail.com',
                            commentText: 'Спасибо. Про абстрагирование признаюсь честно — за час до начала лекции спохватился, что этого раздела нет и спешно дописывал. Поэтому получилось немного сумбурно…',
                            postedComment: '2021-05-16'
                        }
                    ],
                },
                {
                    id: 5,
                    img: card1,
                    title: 'Стипендиальная программа для иностранных студентов',
                    data: '2021-02-15',
                    time: '9:00',
                    posted: '2021-02-15',
                    timePosted: '11:57',
                    location: 'Лондон',
                    format: 'Онлайн',
                    country: 'Великобритания',
                    coins: '5432',
                    value: 'C',
                    description: "Стипендиальная программа  разработана для талантливых иностранных студентов желающих обучаться на одной из магистерских программ факультета науки университета Katholieke Universiteit Leuven в Бельгии.",
                    programs: ['Master of Astronomy and Astrophysics', 'Master of Biology', 'Master of Biophysics, Biochemistry and Biotechnology' , 'Master of Chemistry' , 'Master of Geography' , 'Interuniversity Master of Geology' , 'Master of Mathematics' , 'Master of Physics' , 'Master of Statistics' , 'Erasmus Mundus Master of Theoretical Chemistry and Computational Modelling' , 'Erasmus Mundus Joint Master in Sustainable and Territorial Development'],
                    req: ['ранее не обучались и не работали в университете University of Leuven;','имеют степень бакалавра, полученную в аккредитованном университете;','не имеют степени магистра, или кандидата наук;' , 'могут подтвердить что обучались на отлично в их родном университете;','отлично владеют английским языком ( IELTS – 7; TOEFL – 94 internet-based);' , 'заинтересованы в обучении на магистерской программе.'],
                    comments: [
                        {
                            id: 1,
                            name: 'Mark',
                            avatar: avatar,
                            email: 'mu@gmail.com',
                            commentText: 'О да, полиморфизм и инкапсуляция. Ну хоть убей я не расскажу вам быстро, что есть то и что есть это :) Ну знаю, подумаю и отвечу. Но сходу — низачто. ДУмаю ваша статья продлит мою память подольше :)',
                            postedComment: '2021-05-15',
                        },
                        {
                            id: 2,
                            name: 'Elon',
                            avatar: avatar,
                            email: 'mu@gmail.com',
                            commentText: 'Спасибо. Про абстрагирование признаюсь честно — за час до начала лекции спохватился, что этого раздела нет и спешно дописывал. Поэтому получилось немного сумбурно…',
                            postedComment: '2021-05-16'
                        }
                    ],
                },
                {
                    id: 6,
                    img: card1,
                    title: 'Стипендиальная программа для иностранных студентов',
                    data: '2021-05-15',
                    time: '9:00',
                    posted: '2021-05-15',
                    timePosted: '11:57',
                    location: 'Лондон',
                    format: 'Офлайн',
                    country: 'Великобритания',
                    coins: '5432',
                    value: 'C',
                    description: "Стипендиальная программа  разработана для талантливых иностранных студентов желающих обучаться на одной из магистерских программ факультета науки университета Katholieke Universiteit Leuven в Бельгии.",
                    programs: ['Master of Astronomy and Astrophysics', 'Master of Biology', 'Master of Biophysics, Biochemistry and Biotechnology' , 'Master of Chemistry' , 'Master of Geography' , 'Interuniversity Master of Geology' , 'Master of Mathematics' , 'Master of Physics' , 'Master of Statistics' , 'Erasmus Mundus Master of Theoretical Chemistry and Computational Modelling' , 'Erasmus Mundus Joint Master in Sustainable and Territorial Development'],
                    req: ['ранее не обучались и не работали в университете University of Leuven;','имеют степень бакалавра, полученную в аккредитованном университете;','не имеют степени магистра, или кандидата наук;' , 'могут подтвердить что обучались на отлично в их родном университете;','отлично владеют английским языком ( IELTS – 7; TOEFL – 94 internet-based);' , 'заинтересованы в обучении на магистерской программе.'],
                    comments: [
                        {
                            id: 1,
                            name: 'Mark',
                            avatar: avatar,
                            email: 'mu@gmail.com',
                            commentText: 'О да, полиморфизм и инкапсуляция. Ну хоть убей я не расскажу вам быстро, что есть то и что есть это :) Ну знаю, подумаю и отвечу. Но сходу — низачто. ДУмаю ваша статья продлит мою память подольше :)',
                            postedComment: '2021-05-15',
                        },
                        {
                            id: 2,
                            name: 'Elon',
                            avatar: avatar,
                            email: 'mu@gmail.com',
                            commentText: 'Спасибо. Про абстрагирование признаюсь честно — за час до начала лекции спохватился, что этого раздела нет и спешно дописывал. Поэтому получилось немного сумбурно…',
                            postedComment: '2021-05-16'
                        }
                    ]
                }
            ],
            blogs : [
                {
                    id: 1,
                    img: blog1,
                    title: 'Стипендиальная программа для иностранных студентов',
                    data: '2021-05-15',
                    time: '11:57',
                    descTitle: 'Факультет "Свободные искусства и науки"',
                    description: 'Одна из самых уникальных программ бакалавриата в АУЦА – "Свободные искусства и науки". Уникальность факультета состоит в том, что он дает свободу и гибкость, возможность экспериментировать. Выбрать профессию сразу после окончания школы достаточно сложно, а программа поможет определиться со своими интересами и предпочтениями. В течение первых двух семестров студенты изучают курсы из различных дисциплин, они могут в полной мере оценить возможности, которые предлагает университет. И затем уже принять решение по поводу основной специальности, и выбрать ее из 11 программ обучения. Это как традиционные учебные программы университета, так и специально разработанные программы, готовящие специалистов в области прав человека, экологических и урбанистических исследований, математического моделирования, социального предпринимательства, литературы и истории.',
                    comments: [
                        {
                            id: 1,
                            name: 'Mark',
                            avatar: avatar,
                            email: 'mu@gmail.com',
                            commentText: 'О да, полиморфизм и инкапсуляция. Ну хоть убей я не расскажу вам быстро, что есть то и что есть это :) Ну знаю, подумаю и отвечу. Но сходу — низачто. ДУмаю ваша статья продлит мою память подольше :)',
                            postedComment: '2021-05-15',
                        },
                        {
                            id: 2,
                            name: 'Elon',
                            avatar: avatar,
                            email: 'mu@gmail.com',
                            commentText: 'Спасибо. Про абстрагирование признаюсь честно — за час до начала лекции спохватился, что этого раздела нет и спешно дописывал. Поэтому получилось немного сумбурно…',
                            postedComment: '2021-05-16'
                        }
                    ],
                },
                {
                    id: 2,
                    img: blog2,
                    title: 'Стипендиальная программа для иностранных студентов',
                    data: '2021-05-15',
                    time: '11:57',
                    descTitle: 'Факультет "Свободные искусства и науки"',
                    description: 'Одна из самых уникальных программ бакалавриата в АУЦА – "Свободные искусства и науки". Уникальность факультета состоит в том, что он дает свободу и гибкость, возможность экспериментировать. Выбрать профессию сразу после окончания школы достаточно сложно, а программа поможет определиться со своими интересами и предпочтениями. В течение первых двух семестров студенты изучают курсы из различных дисциплин, они могут в полной мере оценить возможности, которые предлагает университет. И затем уже принять решение по поводу основной специальности, и выбрать ее из 11 программ обучения. Это как традиционные учебные программы университета, так и специально разработанные программы, готовящие специалистов в области прав человека, экологических и урбанистических исследований, математического моделирования, социального предпринимательства, литературы и истории.',
                    comments: [
                        {
                            id: 1,
                            name: 'Mark',
                            avatar: avatar,
                            email: 'mu@gmail.com',
                            commentText: 'О да, полиморфизм и инкапсуляция. Ну хоть убей я не расскажу вам быстро, что есть то и что есть это :) Ну знаю, подумаю и отвечу. Но сходу — низачто. ДУмаю ваша статья продлит мою память подольше :)',
                            postedComment: '2021-05-15',
                        },
                        {
                            id: 2,
                            name: 'Elon',
                            avatar: avatar,
                            email: 'mu@gmail.com',
                            commentText: 'Спасибо. Про абстрагирование признаюсь честно — за час до начала лекции спохватился, что этого раздела нет и спешно дописывал. Поэтому получилось немного сумбурно…',
                            postedComment: '2021-05-16'
                        }
                    ],
                },
                {
                    id: 3,
                    img: blog3,
                    title: 'Стипендиальная программа для иностранных студентов',
                    data: '2021-05-15',
                    time: '11:57',
                    descTitle: 'Факультет "Свободные искусства и науки"',
                    description: 'Одна из самых уникальных программ бакалавриата в АУЦА – "Свободные искусства и науки". Уникальность факультета состоит в том, что он дает свободу и гибкость, возможность экспериментировать. Выбрать профессию сразу после окончания школы достаточно сложно, а программа поможет определиться со своими интересами и предпочтениями. В течение первых двух семестров студенты изучают курсы из различных дисциплин, они могут в полной мере оценить возможности, которые предлагает университет. И затем уже принять решение по поводу основной специальности, и выбрать ее из 11 программ обучения. Это как традиционные учебные программы университета, так и специально разработанные программы, готовящие специалистов в области прав человека, экологических и урбанистических исследований, математического моделирования, социального предпринимательства, литературы и истории.',
                    comments: [
                        {
                            id: 1,
                            name: 'Mark',
                            avatar: avatar,
                            email: 'mu@gmail.com',
                            commentText: 'О да, полиморфизм и инкапсуляция. Ну хоть убей я не расскажу вам быстро, что есть то и что есть это :) Ну знаю, подумаю и отвечу. Но сходу — низачто. ДУмаю ваша статья продлит мою память подольше :)',
                            postedComment: '2021-05-15',
                        },
                        {
                            id: 2,
                            name: 'Elon',
                            avatar: avatar,
                            email: 'mu@gmail.com',
                            commentText: 'Спасибо. Про абстрагирование признаюсь честно — за час до начала лекции спохватился, что этого раздела нет и спешно дописывал. Поэтому получилось немного сумбурно…',
                            postedComment: '2021-05-16'
                        }
                    ],
                },
                {
                    id: 4,
                    img: blog3,
                    title: 'Стипендиальная программа для иностранных студентов',
                    data: '2021-05-15',
                    time: '11:57',
                    descTitle: 'Факультет "Свободные искусства и науки"',
                    description: 'Одна из самых уникальных программ бакалавриата в АУЦА – "Свободные искусства и науки". Уникальность факультета состоит в том, что он дает свободу и гибкость, возможность экспериментировать. Выбрать профессию сразу после окончания школы достаточно сложно, а программа поможет определиться со своими интересами и предпочтениями. В течение первых двух семестров студенты изучают курсы из различных дисциплин, они могут в полной мере оценить возможности, которые предлагает университет. И затем уже принять решение по поводу основной специальности, и выбрать ее из 11 программ обучения. Это как традиционные учебные программы университета, так и специально разработанные программы, готовящие специалистов в области прав человека, экологических и урбанистических исследований, математического моделирования, социального предпринимательства, литературы и истории.',
                    comments: [
                        {
                            id: 1,
                            name: 'Mark',
                            avatar: avatar,
                            email: 'mu@gmail.com',
                            commentText: 'О да, полиморфизм и инкапсуляция. Ну хоть убей я не расскажу вам быстро, что есть то и что есть это :) Ну знаю, подумаю и отвечу. Но сходу — низачто. ДУмаю ваша статья продлит мою память подольше :)',
                            postedComment: '2021-05-15',
                        },
                        {
                            id: 2,
                            name: 'Elon',
                            avatar: avatar,
                            email: 'mu@gmail.com',
                            commentText: 'Спасибо. Про абстрагирование признаюсь честно — за час до начала лекции спохватился, что этого раздела нет и спешно дописывал. Поэтому получилось немного сумбурно…',
                            postedComment: '2021-05-16'
                        }
                    ],
                }
            ],
            conss : [
                {
                    id: 1,
                    img: investsImg,
                    posted: '2021-05-15',
                    postedTime: '11:57',
                    title: 'Grintern HR компания',
                    contact: '+996 999 999 999',
                    ownerYear: 2011,
                    work: 'HR компания',
                    service: 'подбор персонала',
                    location: 'Аляска',
                    country: 'США',
                    desc: 'Компания была создан специально для того, чтобы студенты и выпускники находили интересную стажировку или работу.',
                    description: 'Grintern найдет для вас выпускника лучших колледжей по всему миру, чтобы вы позаботились об управлении проектами, лидогенерации, социальных сетях, личной помощи и других задачах. Всего за 10 дней мы выберем выпускника, который присоединится к вашей команде, в соответствии с вашими требованиями и отзывами преподавателей. Стоимость участия выпускника составляет около 12 долларов в час, но их вклад может освободить до 40% вашего рабочего времени! Это помогает нашим клиентам экономить от 4000 долларов в месяц. Вы получаете превосходные обязательства, а мы позаботимся обо всем остальном: контракт, замена, мотивация, выплаты и т. Д.',
                    services: ['Консультирование в эффективному управлению персоналом', 'Вывод персонала за штат компании.', 'Подбор персонала в регионах России и других странах.', 'Подбор подходящих резюме сотрудников.', 'Предоставление услуг по ведению кадрового делопроизводства', 'Организация массового потока соискателей без личной встречи.', 'Поиск резюме по указанными Вами параметрам по разным базам.'],
                    contacts: ['+996 999 999 999', '+996 999 999 999', 'grintern.job@gmail.com'],
                    comments: [
                        {
                            id: 1,
                            name: 'Mark',
                            avatar: avatar,
                            email: 'mu@gmail.com',
                            commentText: 'О да, полиморфизм и инкапсуляция. Ну хоть убей я не расскажу вам быстро, что есть то и что есть это :) Ну знаю, подумаю и отвечу. Но сходу — низачто. ДУмаю ваша статья продлит мою память подольше :)',
                            postedComment: '2021-05-15',
                        },
                        {
                            id: 2,
                            name: 'Elon',
                            avatar: avatar,
                            email: 'mu@gmail.com',
                            commentText: 'Спасибо. Про абстрагирование признаюсь честно — за час до начала лекции спохватился, что этого раздела нет и спешно дописывал. Поэтому получилось немного сумбурно…',
                            postedComment: '2021-05-16'
                        }
                    ],
                },
                {
                    id: 2,
                    img: investsImg,
                    posted: '2021-05-15',
                    postedTime: '11:57',
                    title: 'Grintern HR компания',
                    contact: '+996 999 999 999',
                    ownerYear: 2011,
                    work: 'HR компания',
                    service: 'подбор персонала',
                    location: 'Аляска',
                    country: 'США',
                    desc: 'Компания была создан специально для того, чтобы студенты и выпускники находили интересную стажировку или работу.',
                    description: 'Grintern найдет для вас выпускника лучших колледжей по всему миру, чтобы вы позаботились об управлении проектами, лидогенерации, социальных сетях, личной помощи и других задачах. Всего за 10 дней мы выберем выпускника, который присоединится к вашей команде, в соответствии с вашими требованиями и отзывами преподавателей. Стоимость участия выпускника составляет около 12 долларов в час, но их вклад может освободить до 40% вашего рабочего времени! Это помогает нашим клиентам экономить от 4000 долларов в месяц. Вы получаете превосходные обязательства, а мы позаботимся обо всем остальном: контракт, замена, мотивация, выплаты и т. Д.',
                    services: ['Консультирование в эффективному управлению персоналом', 'Вывод персонала за штат компании.', 'Подбор персонала в регионах России и других странах.', 'Подбор подходящих резюме сотрудников.', 'Предоставление услуг по ведению кадрового делопроизводства', 'Организация массового потока соискателей без личной встречи.', 'Поиск резюме по указанными Вами параметрам по разным базам.'],
                    contacts: ['+996 999 999 999', '+996 999 999 999', 'grintern.job@gmail.com'],
                    comments: [
                        {
                            id: 1,
                            name: 'Mark',
                            avatar: avatar,
                            email: 'mu@gmail.com',
                            commentText: 'О да, полиморфизм и инкапсуляция. Ну хоть убей я не расскажу вам быстро, что есть то и что есть это :) Ну знаю, подумаю и отвечу. Но сходу — низачто. ДУмаю ваша статья продлит мою память подольше :)',
                            postedComment: '2021-05-15',
                        },
                        {
                            id: 2,
                            name: 'Elon',
                            avatar: avatar,
                            email: 'mu@gmail.com',
                            commentText: 'Спасибо. Про абстрагирование признаюсь честно — за час до начала лекции спохватился, что этого раздела нет и спешно дописывал. Поэтому получилось немного сумбурно…',
                            postedComment: '2021-05-16'
                        }
                    ],
                },
                {
                    id: 3,
                    img: investsImg,
                    posted: '2021-05-15',
                    postedTime: '11:57',
                    title: 'Grintern HR компания',
                    contact: '+996 999 999 999',
                    ownerYear: 2011,
                    work: 'HR компания',
                    service: 'подбор персонала',
                    location: 'Аляска',
                    country: 'США',
                    desc: 'Компания была создан специально для того, чтобы студенты и выпускники находили интересную стажировку или работу.',
                    description: 'Grintern найдет для вас выпускника лучших колледжей по всему миру, чтобы вы позаботились об управлении проектами, лидогенерации, социальных сетях, личной помощи и других задачах. Всего за 10 дней мы выберем выпускника, который присоединится к вашей команде, в соответствии с вашими требованиями и отзывами преподавателей. Стоимость участия выпускника составляет около 12 долларов в час, но их вклад может освободить до 40% вашего рабочего времени! Это помогает нашим клиентам экономить от 4000 долларов в месяц. Вы получаете превосходные обязательства, а мы позаботимся обо всем остальном: контракт, замена, мотивация, выплаты и т. Д.',
                    services: ['Консультирование в эффективному управлению персоналом', 'Вывод персонала за штат компании.', 'Подбор персонала в регионах России и других странах.', 'Подбор подходящих резюме сотрудников.', 'Предоставление услуг по ведению кадрового делопроизводства', 'Организация массового потока соискателей без личной встречи.', 'Поиск резюме по указанными Вами параметрам по разным базам.'],
                    contacts: ['+996 999 999 999', '+996 999 999 999', 'grintern.job@gmail.com'],
                    comments: [
                        {
                            id: 1,
                            name: 'Mark',
                            avatar: avatar,
                            email: 'mu@gmail.com',
                            commentText: 'О да, полиморфизм и инкапсуляция. Ну хоть убей я не расскажу вам быстро, что есть то и что есть это :) Ну знаю, подумаю и отвечу. Но сходу — низачто. ДУмаю ваша статья продлит мою память подольше :)',
                            postedComment: '2021-05-15',
                        },
                        {
                            id: 2,
                            name: 'Elon',
                            avatar: avatar,
                            email: 'mu@gmail.com',
                            commentText: 'Спасибо. Про абстрагирование признаюсь честно — за час до начала лекции спохватился, что этого раздела нет и спешно дописывал. Поэтому получилось немного сумбурно…',
                            postedComment: '2021-05-16'
                        }
                    ],
                },
                {
                    id: 4,
                    img: investsImg,
                    posted: '2021-05-15',
                    postedTime: '11:57',
                    title: 'Grintern HR компания',
                    contact: '+996 999 999 999',
                    ownerYear: 2011,
                    work: 'HR компания',
                    service: 'подбор персонала',
                    location: 'Аляска',
                    country: 'США',
                    desc: 'Компания была создан специально для того, чтобы студенты и выпускники находили интересную стажировку или работу.',
                    description: 'Grintern найдет для вас выпускника лучших колледжей по всему миру, чтобы вы позаботились об управлении проектами, лидогенерации, социальных сетях, личной помощи и других задачах. Всего за 10 дней мы выберем выпускника, который присоединится к вашей команде, в соответствии с вашими требованиями и отзывами преподавателей. Стоимость участия выпускника составляет около 12 долларов в час, но их вклад может освободить до 40% вашего рабочего времени! Это помогает нашим клиентам экономить от 4000 долларов в месяц. Вы получаете превосходные обязательства, а мы позаботимся обо всем остальном: контракт, замена, мотивация, выплаты и т. Д.',
                    services: ['Консультирование в эффективному управлению персоналом', 'Вывод персонала за штат компании.', 'Подбор персонала в регионах России и других странах.', 'Подбор подходящих резюме сотрудников.', 'Предоставление услуг по ведению кадрового делопроизводства', 'Организация массового потока соискателей без личной встречи.', 'Поиск резюме по указанными Вами параметрам по разным базам.'],
                    contacts: ['+996 999 999 999', '+996 999 999 999', 'grintern.job@gmail.com'],
                    comments: [
                        {
                            id: 1,
                            name: 'Mark',
                            avatar: avatar,
                            email: 'mu@gmail.com',
                            commentText: 'О да, полиморфизм и инкапсуляция. Ну хоть убей я не расскажу вам быстро, что есть то и что есть это :) Ну знаю, подумаю и отвечу. Но сходу — низачто. ДУмаю ваша статья продлит мою память подольше :)',
                            postedComment: '2021-05-15',
                        },
                        {
                            id: 2,
                            name: 'Elon',
                            avatar: avatar,
                            email: 'mu@gmail.com',
                            commentText: 'Спасибо. Про абстрагирование признаюсь честно — за час до начала лекции спохватился, что этого раздела нет и спешно дописывал. Поэтому получилось немного сумбурно…',
                            postedComment: '2021-05-16'
                        }
                    ],
                },
                {
                    id: 5,
                    img: investsImg,
                    posted: '2021-05-15',
                    postedTime: '11:57',
                    title: 'Grintern HR компания',
                    contact: '+996 999 999 999',
                    ownerYear: 2011,
                    work: 'HR компания',
                    service: 'подбор персонала',
                    location: 'Аляска',
                    country: 'США',
                    desc: 'Компания была создан специально для того, чтобы студенты и выпускники находили интересную стажировку или работу.',
                    description: 'Grintern найдет для вас выпускника лучших колледжей по всему миру, чтобы вы позаботились об управлении проектами, лидогенерации, социальных сетях, личной помощи и других задачах. Всего за 10 дней мы выберем выпускника, который присоединится к вашей команде, в соответствии с вашими требованиями и отзывами преподавателей. Стоимость участия выпускника составляет около 12 долларов в час, но их вклад может освободить до 40% вашего рабочего времени! Это помогает нашим клиентам экономить от 4000 долларов в месяц. Вы получаете превосходные обязательства, а мы позаботимся обо всем остальном: контракт, замена, мотивация, выплаты и т. Д.',
                    services: ['Консультирование в эффективному управлению персоналом', 'Вывод персонала за штат компании.', 'Подбор персонала в регионах России и других странах.', 'Подбор подходящих резюме сотрудников.', 'Предоставление услуг по ведению кадрового делопроизводства', 'Организация массового потока соискателей без личной встречи.', 'Поиск резюме по указанными Вами параметрам по разным базам.'],
                    contacts: ['+996 999 999 999', '+996 999 999 999', 'grintern.job@gmail.com'],
                    comments: [
                        {
                            id: 1,
                            name: 'Mark',
                            avatar: avatar,
                            email: 'mu@gmail.com',
                            commentText: 'О да, полиморфизм и инкапсуляция. Ну хоть убей я не расскажу вам быстро, что есть то и что есть это :) Ну знаю, подумаю и отвечу. Но сходу — низачто. ДУмаю ваша статья продлит мою память подольше :)',
                            postedComment: '2021-05-15',
                        },
                        {
                            id: 2,
                            name: 'Elon',
                            avatar: avatar,
                            email: 'mu@gmail.com',
                            commentText: 'Спасибо. Про абстрагирование признаюсь честно — за час до начала лекции спохватился, что этого раздела нет и спешно дописывал. Поэтому получилось немного сумбурно…',
                            postedComment: '2021-05-16'
                        }
                    ],
                },
                {
                    id: 6,
                    img: investsImg,
                    posted: '2021-05-15',
                    postedTime: '11:57',
                    title: 'Grintern HR компания',
                    contact: '+996 999 999 999',
                    ownerYear: 2011,
                    work: 'HR компания',
                    service: 'подбор персонала',
                    location: 'Аляска',
                    country: 'США',
                    desc: 'Компания была создан специально для того, чтобы студенты и выпускники находили интересную стажировку или работу.',
                    description: 'Grintern найдет для вас выпускника лучших колледжей по всему миру, чтобы вы позаботились об управлении проектами, лидогенерации, социальных сетях, личной помощи и других задачах. Всего за 10 дней мы выберем выпускника, который присоединится к вашей команде, в соответствии с вашими требованиями и отзывами преподавателей. Стоимость участия выпускника составляет около 12 долларов в час, но их вклад может освободить до 40% вашего рабочего времени! Это помогает нашим клиентам экономить от 4000 долларов в месяц. Вы получаете превосходные обязательства, а мы позаботимся обо всем остальном: контракт, замена, мотивация, выплаты и т. Д.',
                    services: ['Консультирование в эффективному управлению персоналом', 'Вывод персонала за штат компании.', 'Подбор персонала в регионах России и других странах.', 'Подбор подходящих резюме сотрудников.', 'Предоставление услуг по ведению кадрового делопроизводства', 'Организация массового потока соискателей без личной встречи.', 'Поиск резюме по указанными Вами параметрам по разным базам.'],
                    contacts: ['+996 999 999 999', '+996 999 999 999', 'grintern.job@gmail.com'],
                    comments: [
                        {
                            id: 1,
                            name: 'Mark',
                            avatar: avatar,
                            email: 'mu@gmail.com',
                            commentText: 'О да, полиморфизм и инкапсуляция. Ну хоть убей я не расскажу вам быстро, что есть то и что есть это :) Ну знаю, подумаю и отвечу. Но сходу — низачто. ДУмаю ваша статья продлит мою память подольше :)',
                            postedComment: '2021-05-15',
                        },
                        {
                            id: 2,
                            name: 'Elon',
                            avatar: avatar,
                            email: 'mu@gmail.com',
                            commentText: 'Спасибо. Про абстрагирование признаюсь честно — за час до начала лекции спохватился, что этого раздела нет и спешно дописывал. Поэтому получилось немного сумбурно…',
                            postedComment: '2021-05-16'
                        }
                    ],
                },
                {
                    id: 7,
                    img: investsImg,
                    posted: '2021-05-15',
                    postedTime: '11:57',
                    title: 'Grintern HR компания',
                    contact: '+996 999 999 999',
                    ownerYear: 2011,
                    work: 'HR компания',
                    service: 'подбор персонала',
                    location: 'Аляска',
                    country: 'США',
                    desc: 'Компания была создан специально для того, чтобы студенты и выпускники находили интересную стажировку или работу.',
                    description: 'Grintern найдет для вас выпускника лучших колледжей по всему миру, чтобы вы позаботились об управлении проектами, лидогенерации, социальных сетях, личной помощи и других задачах. Всего за 10 дней мы выберем выпускника, который присоединится к вашей команде, в соответствии с вашими требованиями и отзывами преподавателей. Стоимость участия выпускника составляет около 12 долларов в час, но их вклад может освободить до 40% вашего рабочего времени! Это помогает нашим клиентам экономить от 4000 долларов в месяц. Вы получаете превосходные обязательства, а мы позаботимся обо всем остальном: контракт, замена, мотивация, выплаты и т. Д.',
                    services: ['Консультирование в эффективному управлению персоналом', 'Вывод персонала за штат компании.', 'Подбор персонала в регионах России и других странах.', 'Подбор подходящих резюме сотрудников.', 'Предоставление услуг по ведению кадрового делопроизводства', 'Организация массового потока соискателей без личной встречи.', 'Поиск резюме по указанными Вами параметрам по разным базам.'],
                    contacts: ['+996 999 999 999', '+996 999 999 999', 'grintern.job@gmail.com'],
                    comments: [
                        {
                            id: 1,
                            name: 'Mark',
                            avatar: avatar,
                            email: 'mu@gmail.com',
                            commentText: 'О да, полиморфизм и инкапсуляция. Ну хоть убей я не расскажу вам быстро, что есть то и что есть это :) Ну знаю, подумаю и отвечу. Но сходу — низачто. ДУмаю ваша статья продлит мою память подольше :)',
                            postedComment: '2021-05-15',
                        },
                        {
                            id: 2,
                            name: 'Elon',
                            avatar: avatar,
                            email: 'mu@gmail.com',
                            commentText: 'Спасибо. Про абстрагирование признаюсь честно — за час до начала лекции спохватился, что этого раздела нет и спешно дописывал. Поэтому получилось немного сумбурно…',
                            postedComment: '2021-05-16'
                        }
                    ],
                },
                {
                    id: 8,
                    img: investsImg,
                    posted: '2021-05-15',
                    postedTime: '11:57',
                    title: 'Grintern HR компания',
                    contact: '+996 999 999 999',
                    ownerYear: 2011,
                    work: 'HR компания',
                    service: 'подбор персонала',
                    location: 'Аляска',
                    country: 'США',
                    desc: 'Компания была создан специально для того, чтобы студенты и выпускники находили интересную стажировку или работу.',
                    description: 'Grintern найдет для вас выпускника лучших колледжей по всему миру, чтобы вы позаботились об управлении проектами, лидогенерации, социальных сетях, личной помощи и других задачах. Всего за 10 дней мы выберем выпускника, который присоединится к вашей команде, в соответствии с вашими требованиями и отзывами преподавателей. Стоимость участия выпускника составляет около 12 долларов в час, но их вклад может освободить до 40% вашего рабочего времени! Это помогает нашим клиентам экономить от 4000 долларов в месяц. Вы получаете превосходные обязательства, а мы позаботимся обо всем остальном: контракт, замена, мотивация, выплаты и т. Д.',
                    services: ['Консультирование в эффективному управлению персоналом', 'Вывод персонала за штат компании.', 'Подбор персонала в регионах России и других странах.', 'Подбор подходящих резюме сотрудников.', 'Предоставление услуг по ведению кадрового делопроизводства', 'Организация массового потока соискателей без личной встречи.', 'Поиск резюме по указанными Вами параметрам по разным базам.'],
                    contacts: ['+996 999 999 999', '+996 999 999 999', 'grintern.job@gmail.com'],
                    comments: [
                        {
                            id: 1,
                            name: 'Mark',
                            avatar: avatar,
                            email: 'mu@gmail.com',
                            commentText: 'О да, полиморфизм и инкапсуляция. Ну хоть убей я не расскажу вам быстро, что есть то и что есть это :) Ну знаю, подумаю и отвечу. Но сходу — низачто. ДУмаю ваша статья продлит мою память подольше :)',
                            postedComment: '2021-05-15',
                        },
                        {
                            id: 2,
                            name: 'Elon',
                            avatar: avatar,
                            email: 'mu@gmail.com',
                            commentText: 'Спасибо. Про абстрагирование признаюсь честно — за час до начала лекции спохватился, что этого раздела нет и спешно дописывал. Поэтому получилось немного сумбурно…',
                            postedComment: '2021-05-16'
                        }
                    ],
                },
                {
                    id: 9,
                    img: investsImg,
                    posted: '2021-05-15',
                    postedTime: '11:57',
                    title: 'Grintern HR компания',
                    contact: '+996 999 999 999',
                    ownerYear: 2011,
                    work: 'HR компания',
                    service: 'подбор персонала',
                    location: 'Аляска',
                    country: 'США',
                    desc: 'Компания была создан специально для того, чтобы студенты и выпускники находили интересную стажировку или работу.',
                    description: 'Grintern найдет для вас выпускника лучших колледжей по всему миру, чтобы вы позаботились об управлении проектами, лидогенерации, социальных сетях, личной помощи и других задачах. Всего за 10 дней мы выберем выпускника, который присоединится к вашей команде, в соответствии с вашими требованиями и отзывами преподавателей. Стоимость участия выпускника составляет около 12 долларов в час, но их вклад может освободить до 40% вашего рабочего времени! Это помогает нашим клиентам экономить от 4000 долларов в месяц. Вы получаете превосходные обязательства, а мы позаботимся обо всем остальном: контракт, замена, мотивация, выплаты и т. Д.',
                    services: ['Консультирование в эффективному управлению персоналом', 'Вывод персонала за штат компании.', 'Подбор персонала в регионах России и других странах.', 'Подбор подходящих резюме сотрудников.', 'Предоставление услуг по ведению кадрового делопроизводства', 'Организация массового потока соискателей без личной встречи.', 'Поиск резюме по указанными Вами параметрам по разным базам.'],
                    contacts: ['+996 999 999 999', '+996 999 999 999', 'grintern.job@gmail.com'],
                    comments: [
                        {
                            id: 1,
                            name: 'Mark',
                            avatar: avatar,
                            email: 'mu@gmail.com',
                            commentText: 'О да, полиморфизм и инкапсуляция. Ну хоть убей я не расскажу вам быстро, что есть то и что есть это :) Ну знаю, подумаю и отвечу. Но сходу — низачто. ДУмаю ваша статья продлит мою память подольше :)',
                            postedComment: '2021-05-15',
                        },
                        {
                            id: 2,
                            name: 'Elon',
                            avatar: avatar,
                            email: 'mu@gmail.com',
                            commentText: 'Спасибо. Про абстрагирование признаюсь честно — за час до начала лекции спохватился, что этого раздела нет и спешно дописывал. Поэтому получилось немного сумбурно…',
                            postedComment: '2021-05-16'
                        }
                    ],
                },
                {
                    id: 10,
                    img: investsImg,
                    posted: '2021-05-15',
                    postedTime: '11:57',
                    title: 'Grintern HR компания',
                    contact: '+996 999 999 999',
                    ownerYear: 2011,
                    work: 'HR компания',
                    service: 'подбор персонала',
                    location: 'Аляска',
                    country: 'США',
                    desc: 'Компания была создан специально для того, чтобы студенты и выпускники находили интересную стажировку или работу.',
                    description: 'Grintern найдет для вас выпускника лучших колледжей по всему миру, чтобы вы позаботились об управлении проектами, лидогенерации, социальных сетях, личной помощи и других задачах. Всего за 10 дней мы выберем выпускника, который присоединится к вашей команде, в соответствии с вашими требованиями и отзывами преподавателей. Стоимость участия выпускника составляет около 12 долларов в час, но их вклад может освободить до 40% вашего рабочего времени! Это помогает нашим клиентам экономить от 4000 долларов в месяц. Вы получаете превосходные обязательства, а мы позаботимся обо всем остальном: контракт, замена, мотивация, выплаты и т. Д.',
                    services: ['Консультирование в эффективному управлению персоналом', 'Вывод персонала за штат компании.', 'Подбор персонала в регионах России и других странах.', 'Подбор подходящих резюме сотрудников.', 'Предоставление услуг по ведению кадрового делопроизводства', 'Организация массового потока соискателей без личной встречи.', 'Поиск резюме по указанными Вами параметрам по разным базам.'],
                    contacts: ['+996 999 999 999', '+996 999 999 999', 'grintern.job@gmail.com'],
                    comments: [
                        {
                            id: 1,
                            name: 'Mark',
                            avatar: avatar,
                            email: 'mu@gmail.com',
                            commentText: 'О да, полиморфизм и инкапсуляция. Ну хоть убей я не расскажу вам быстро, что есть то и что есть это :) Ну знаю, подумаю и отвечу. Но сходу — низачто. ДУмаю ваша статья продлит мою память подольше :)',
                            postedComment: '2021-05-15',
                        },
                        {
                            id: 2,
                            name: 'Elon',
                            avatar: avatar,
                            email: 'mu@gmail.com',
                            commentText: 'Спасибо. Про абстрагирование признаюсь честно — за час до начала лекции спохватился, что этого раздела нет и спешно дописывал. Поэтому получилось немного сумбурно…',
                            postedComment: '2021-05-16'
                        }
                    ],
                }
            ],
            forums: [
                {
                    id: 1,
                    title: 'Гранты/инвестиции',
                    theme: 1447,
                    message: 44754,
                    forum: ['Электронная Книга Памяти', 'Электронная Книга Памяти'],
                },
                {
                    id: 2,
                    title: 'Гранты/инвестиции',
                    theme: 1447,
                    message: 44754,
                    forum: ['Электронная Книга Памяти', 'Электронная Книга Памяти']
                },
                {
                    id: 3,
                    title: 'Гранты/инвестиции',
                    theme: 1447,
                    message: 44754,
                    forum: ['Электронная Книга Памяти', 'Электронная Книга Памяти']
                },
                {
                    id: 4,
                    title: 'Muradil',
                    theme: 1447,
                    message: 44754,
                    forum: ['Электронная Книга Памяти', 'Электронная Книга Памяти'],
                }
            ],
        },
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
        },
        clickedItem(state, action){
            state.clicked = action.payload
        },
        changeName(state, action){
            state.name = action.payload
        },
        changeEmail(state, action){
            state.email = action.payload
        },
        changeComment(state, action){
            state.commentText = action.payload
        },
        changeDate(state, action){
            state.postedComment = action.payload
        },
        clickItem(state, action){
            state.item = action.payload
        },
        clickItemId(state, action){
            state.itemId = action.payload
        },
        addComment(state, action){
            for (var item in state.items) {
                if(state.item === item){
                    state.items[item][0].comments.push(action.payload);
                }
            }
        },
        addUser(state, action){
            state.users.push(action.payload)
        }
    }
});
export default slice.reducer;
export const {openHandle, filtered, paginate, clickedItem, changeComment, changeDate, changeEmail, changeName, addComment, clickItemId, clickItem, addUser} = slice.actions;