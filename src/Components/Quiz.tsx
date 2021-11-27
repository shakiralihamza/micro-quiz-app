import React, {useContext} from 'react';
import {useTheme} from '@mui/material/styles';
import MobileStepper from '@mui/material/MobileStepper';
import Button from '@mui/material/Button';
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';
import {Box, Grid, Paper, Typography} from "@mui/material";
import '../index.css'
import Background from "../picture.png";
import {MyContext} from "../Context/MyContext";
// noinspection ES6PreferShortImport
import {Menu} from "../react-app-env.d";


function Quiz() {
    const {
        questions, setResult, setMenu, activeStep,
        setActiveStep, setCurrentSelectedAnswer, setScore,
        currentSelectedAnswer, score, setQuizStarted
    } = useContext(MyContext);
    const answers = questions[activeStep].allAnswers;
    const question_title: string = questions[activeStep].question;
    const theme = useTheme();

    const handleNext = () => {
        const nextStep: number= activeStep + 1;
        setActiveStep(nextStep);
        setCurrentSelectedAnswer(null);
    };

    const handleReset = () => {
        setScore(0);
        setActiveStep(0)
        setCurrentSelectedAnswer(null)
        setQuizStarted(false);
    };

    const handleSelectAnswer = (answer: string) => {
        if (!currentSelectedAnswer) {
            setQuizStarted(true);
            setCurrentSelectedAnswer(answer)
            if (answer === questions[activeStep].correct_answer) {
                const newScore: number = score + 1;
                setScore(newScore)
            }
        }
    }

    const handleFinish = () => {
        setCurrentSelectedAnswer(null);
        setActiveStep(0)
        setResult(score);
        setScore(0);
        setMenu(Menu.Result)
        setQuizStarted(false);
    }

    return (
        <Box sx={{
            width: '100%', height: '100%',
            backgroundImage: `url(${Background})`,
            backgroundRepeat: 'no-repeat',
            backgroundPosition: '50% -40%',
            backgroundColor: '#fdf8ef',

        }}>
            <Box sx={{width: '100%'}}>
                <MobileStepper
                    variant="progress"
                    steps={questions.length}
                    position="static"
                    activeStep={activeStep}
                    sx={{flexGrow: 1, backgroundColor: 'transparent'}}
                    nextButton={
                        activeStep === questions.length - 1
                            ?
                            <Button size="small" onClick={handleFinish} disabled={currentSelectedAnswer === null}>
                                View Results
                            </Button>
                            :
                            <Button size="small" onClick={handleNext} disabled={currentSelectedAnswer === null}>
                                Next
                                {theme.direction === 'rtl' ? (
                                    <KeyboardArrowLeft/>
                                ) : (
                                    <KeyboardArrowRight/>
                                )}
                            </Button>
                    }
                    backButton={
                        <Button size="small" onClick={handleReset} disabled={activeStep === 0}>
                            Reset
                        </Button>
                    }
                />
            </Box>
            <Grid container justifyContent={'center'} alignContent={'center'}>
                <Grid item xs={'auto'} mt={5} mb={5}>
                    <Typography variant={'h5'}>{question_title}</Typography>
                </Grid>
                <Grid xs={12}/>
                {
                    answers.map((answer: string, index: number) => (
                        <>
                            <Grid xs={'auto'}>
                                <Paper
                                    elevation={0}
                                    onClick={() => handleSelectAnswer(answer)}
                                    sx={{
                                        borderRadius: '22px',
                                        width: '150px',
                                        padding: '13px 30px',
                                        margin: '15px 10px',
                                        opacity: '0.8',
                                        backgroundColor: (
                                            currentSelectedAnswer === answer && currentSelectedAnswer === questions[activeStep].correct_answer
                                                ? '#69d527'
                                                : currentSelectedAnswer === answer && currentSelectedAnswer !== questions[activeStep].correct_answer
                                                    ? '#e03737'
                                                    : null
                                        ),
                                        // backgroundColor: currentSelectedAnswer === answer ? '#fff7ab' : '',
                                        '&: hover': {
                                            backgroundColor: currentSelectedAnswer ? '' : '#fff7ab',
                                            cursor: currentSelectedAnswer ? 'default' : 'pointer'
                                        }
                                    }}
                                >
                                    <Typography sx={{fontWeight: '500'}}>{answer}</Typography>
                                </Paper>
                            </Grid>
                            {
                                index === 1 ? <Grid xs={12}/> : null
                            }
                        </>
                    ))
                }

            </Grid>
        </Box>
    );
}

export default Quiz;