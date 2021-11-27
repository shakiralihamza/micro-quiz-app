async function fetchData(noOfQuestions: number, difficulty: string) {
    const url: string = `https://opentdb.com/api.php?amount=${noOfQuestions}&difficulty=${difficulty.toLowerCase()}&type=multiple`
    // const url: string = `https://opentdb.com/api.php?amount=5&difficulty=easy&type=multiple`
    const response = await fetch(url);
    return await response.json()
}

export default function createResource(noOfQuestions: number, difficulty: string) {
    let status = "loading"
    let result: any
    let suspender = fetchData(noOfQuestions, difficulty).then(
        (data) => {
            status = "success"
            result = data
        },
        (error) => {
            status = "error"
            result = error
        }
    )

    return {
        read() {
            if (status === "loading") {
                throw suspender
            } else if (status === "error") {
                throw result
            } else if (status === "success") {
                return result
            }
        },
    }
}