import React, {Suspense, useEffect, useState} from 'react';
import MainMenu from "./Components/MainMenu";
import {CircularProgress, Grid, ThemeProvider, useMediaQuery} from "@mui/material";
import {MyContext} from "./Context/MyContext";
// noinspection ES6PreferShortImport
import {Difficulty, Menu} from './react-app-env.d';
import ContentComponent from "./Components/ContentComponent";
import {createTheme, Theme} from '@mui/material/styles';
import createResource from "./resource";
import {useNavigatorOnline} from '@oieduardorabelo/use-navigator-online';
import {DummyQuestions} from "./assets/DummyQuestions";

const theme = createTheme({
    palette: {
        primary: {
            main: '#4203d5',
        },
        success: {
            main: '#83ef29'
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
type Questions = Question[] | null

interface ContextType {
    menu: string
    difficulty: string
    NoOfQuestions: number
    questions: Questions
    result: number | null
    currentSelectedAnswer: string | null
    activeStep: number
    score: number
    quizStarted: boolean
    setMenu: (menu: string) => void
    setDifficulty: (difficulty: string) => void
    setNoOfQuestions: (NoOfQuestions: number) => void
    setQuestions: (question: Questions) => void
    setResult: (result: number) => void
    setCurrentSelectedAnswer: (currentSelectedAnswer: string | null) => void
    setActiveStep: (activeStep: number) => void
    setScore: (score: number) => void
    setQuizStarted: (quizStarted: boolean) => void
}

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

interface MainAppProps {
    resource: any
    NoOfQuestions: number
    difficulty: string
    setNoOfQuestions: (NoOfQuestions: number) => void
    setDifficulty: (difficulty: string) => void
}

const MainApp: React.FC<MainAppProps> = ({resource, difficulty, setDifficulty, NoOfQuestions, setNoOfQuestions}) => {
    const [questions, setQuestions] = useState<Questions>(null);
    const [menu, setMenu] = useState<string>(Menu.Quiz);
    const [result, setResult] = useState<number | null>(null);
    const [currentSelectedAnswer, setCurrentSelectedAnswer] = useState<string | null>(null);
    const [activeStep, setActiveStep] = React.useState<number>(0);
    const [score, setScore] = useState<number>(0);
    const [quizStarted, setQuizStarted] = useState<boolean>(false);
    let allAnswersObj: any = [];

    let data: Questions;
    if (resource === null) {
        data = DummyQuestions;
    } else {
        data = resource.read().results;
    }
    let newQuestions: Questions;
    if (data !== null) {
        for (let i = 0; i < data.length; i++) {
            let allAnswers: string[];
            allAnswers = data[i].incorrect_answers.map((answer: string) => answer);
            allAnswers.push(data[i].correct_answer);
            allAnswers = shuffle(allAnswers);
            allAnswersObj.push(allAnswers);
        }
        newQuestions = data.map((question: Question, index: number) => {
            return {...question, 'allAnswers': allAnswersObj[index]}
        });
    }

    useEffect(() => {
        setQuestions(newQuestions)
        setResult(null);
        setActiveStep(0);
        setCurrentSelectedAnswer(null);
        setScore(0);
        setQuizStarted(false);
        // eslint-disable-next-line
    }, [NoOfQuestions, difficulty])

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
        setResult,

        activeStep,
        setActiveStep,

        currentSelectedAnswer,
        setCurrentSelectedAnswer,

        score,
        setScore,

        quizStarted,
        setQuizStarted
    }
    const isSmallScreen = useMediaQuery((theme: Theme) => theme.breakpoints.down('sm'));
    return (
        <MyContext.Provider value={ContextValues}>
            <Grid container sx={{height: '100vh'}}>
                <Grid item sx={{
                    backgroundImage: 'linear-gradient(to bottom, #4203d5, #5e02a9)',
                    width: isSmallScreen ? '100%' : '130px',
                    height: isSmallScreen ? '100px' : null
                }}>
                    <MainMenu/>
                </Grid>
                <Grid item xs sx={{height: '100%'}}>
                    <ContentComponent/>
                </Grid>
            </Grid>
        </MyContext.Provider>

    );
}

function App() {
    const [NoOfQuestions, setNoOfQuestions] = React.useState<number>(5);
    const [difficulty, setDifficulty] = useState<string>(Difficulty.Easy)
    const {status} = useNavigatorOnline();
    let resource: {} | null;
    if (status === 'online') {
        resource = createResource(NoOfQuestions, difficulty);
    } else {
        resource = null;
    }

    const preloader = () => (
        <Grid container sx={{width: '100%', height: '100vh'}} alignItems={'center'} justifyContent={'center'}>
            <Grid item>
                <CircularProgress/>
            </Grid>
        </Grid>
    );
    return (
        <ThemeProvider theme={theme}>
            <Suspense fallback={preloader()}>
                <MainApp
                    resource={resource}
                    NoOfQuestions={NoOfQuestions}
                    setDifficulty={setDifficulty}
                    setNoOfQuestions={setNoOfQuestions}
                    difficulty={difficulty}
                />
            </Suspense>
        </ThemeProvider>
    );
}

export default App;
