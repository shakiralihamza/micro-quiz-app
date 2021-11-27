import React, {useState} from 'react';
import LeftComponent from "./Components/LeftComponent";
import {Grid, ThemeProvider} from "@mui/material";
import {MyContext} from "./Context/MyContext";
// noinspection ES6PreferShortImport
import {Difficulty, Menu} from './react-app-env.d';
import RightComponent from "./Components/RightComponent";
import {createTheme} from '@mui/material/styles';

const theme = createTheme({
    palette: {
        primary: {
            main: '#4203d5',
        }
    },
});

type Question = {
    category: string
    type: string
    difficulty: string
    question: string
    correct_answer: string
    incorrect_answers: string[]
    allAnswers?: string[]
}
type Questions = Question[]

interface ContextType {
    menu: string
    difficulty: string
    NoOfQuestions: number
    questions: Questions
    result: number | null
    setMenu: (menu: string) => void
    setDifficulty: (difficulty: string) => void
    setNoOfQuestions: (NoOfQuestions: number) => void
    setQuestions: (question: Questions) => void
    setResult: (result: number) => void
}

const DummyQuestions: Questions = [
    {
        "category": "General Knowledge",
        "type": "multiple",
        "difficulty": "easy",
        "question": "Which company did Valve cooperate with in the creation of the Vive?",
        "correct_answer": "HTC",
        "incorrect_answers": [
            "Oculus",
            "Google",
            "Razer"
        ]
    },
    {
        "category": "General Knowledge",
        "type": "multiple",
        "difficulty": "easy",
        "question": "What is the shape of the toy invented by Hungarian professor Ernő Rubik?",
        "correct_answer": "Cube",
        "incorrect_answers": [
            "Sphere",
            "Cylinder",
            "Pyramid"
        ]
    },
    {
        "category": "General Knowledge",
        "type": "multiple",
        "difficulty": "easy",
        "question": "Which one of the following rhythm games was made by Harmonix?",
        "correct_answer": "Rock Band",
        "incorrect_answers": [
            "Meat Beat Mania",
            "Guitar Hero Live",
            "Dance Dance Revolution"
        ]
    },
    {
        "category": "General Knowledge",
        "type": "multiple",
        "difficulty": "easy",
        "question": "What is the French word for &quot;fish&quot;?",
        "correct_answer": "poisson",
        "incorrect_answers": [
            "fiche",
            "escargot",
            "mer"
        ]
    },
    {
        "category": "General Knowledge",
        "type": "multiple",
        "difficulty": "easy",
        "question": "Who invented the first ever chocolate bar, in 1847?",
        "correct_answer": "Joseph Fry",
        "incorrect_answers": [
            "Andrew Johnson",
            "John Cadbury",
            "John Tyler"
        ]
    }
];

//shuffle the answers in the array:
function shuffle(array: string[]): string[] {
    let currentIndex = array.length, randomIndex;
    while (currentIndex !== 0) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;
        [array[currentIndex], array[randomIndex]] = [
            array[randomIndex], array[currentIndex]];
    }
    return array;
}

function App() {
    let allAnswersObj:any =[];
    for (let i = 0; i < DummyQuestions.length; i++) {
        let allAnswers: string[];
        allAnswers = DummyQuestions[i].incorrect_answers.map((answer: string) => answer);
        allAnswers.push(DummyQuestions[i].correct_answer);
        allAnswers = shuffle(allAnswers);
        allAnswersObj.push(allAnswers);
    }
    const newQuestions:Questions = DummyQuestions.map((question: Question, index: number) => {
        return {...question, 'allAnswers': allAnswersObj[index]}
    });

    const [menu, setMenu] = useState<string>(Menu.Quiz);
    const [difficulty, setDifficulty] = useState<string>(Difficulty.Easy)
    const [NoOfQuestions, setNoOfQuestions] = React.useState<number>(5);
    const [questions, setQuestions] = useState<Questions>(newQuestions);
    const [result, setResult] = useState<number | null>(null);

    const ContextValues: ContextType = {
        menu,
        setMenu,

        difficulty,
        setDifficulty,

        NoOfQuestions,
        setNoOfQuestions,

        questions,
        setQuestions,

        result,
        setResult
    }

    return (
        <MyContext.Provider value={ContextValues}>
            <ThemeProvider theme={theme}>
                <Grid container sx={{height: '100vh'}}>
                    <Grid item sx={{
                        backgroundImage: 'linear-gradient(to bottom, #4203d5, #5e02a9)',
                        width: '130px'
                    }}>
                        <LeftComponent/>
                    </Grid>
                    <Grid item xs>
                        <RightComponent/>
                    </Grid>
                </Grid>
            </ThemeProvider>
        </MyContext.Provider>
    );
}

export default App;
