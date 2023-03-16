const questionDisplay = document.querySelector("#questions")
const answerDisplay = document.querySelector("#answer")

const questions = [
    {
        id: 0,
        text: "Pick a vacation destination:",
        answers: [
            {
                text: "New York",
                image: "https://images.unsplash.com/photo-1485871981521-5b1fd3805eee?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
                alt: "Photo of midtown during sunset",
                credit: "Michael Discenza",
            },
            {
                text: "Los Angeles",
                image: "https://images.unsplash.com/photo-1499898595565-f424ed1d075c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80",
                alt: "Photo of the beach",
                credit: "Jenna Day",
            },
            {
                text: "Miami",
                image: "https://images.unsplash.com/photo-1533106497176-45ae19e68ba2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
                alt: "Photo of Tropics Hotel and Hostel in Miami",
                credit: "Ryan Spencer",
            },
            {
                text: "Aspen",
                image: "https://images.unsplash.com/photo-1614444894791-c0c4d4286c35?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
                alt: "Photo of ski slopes",
                credit: "Chase Baker",
            }
        ]
    },
    {
        id: 1,
        text: "Pick your favorite food:",
        answers: [
            {
                text: "Tacos",
                image: "https://images.unsplash.com/photo-1599974579688-8dbdd335c77f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1194&q=80",
                alt: "Photo of a plate of tacos",
                credit: "Jeswin Thomas",
            },
            {
                text: "Burger",
                image: "https://images.unsplash.com/photo-1551782450-17144efb9c50?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1169&q=80",
                alt: "Photo of a burger, fries, and ketchup",
                credit: "sk",
            },
            {
                text: "Ramen",
                image: "https://images.unsplash.com/photo-1618889482923-38250401a84e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
                alt: "Photo of a bowl of ramen",
                credit: "Stephen Bedase",
            },
            {
                text: "Pizza",
                image: "https://images.unsplash.com/photo-1574071318508-1cdbab80d002?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1169&q=80",
                alt: "Photo of cheese pizza with basil",
                credit: "Aurélien Lemasson-Théobald",
            }
        ]
    },
    {
        id: 2,
        text: "Pick your dream home:",
        answers: [
            {
                text: "Cottage",
                image: "https://images.unsplash.com/photo-1588880331179-bc9b93a8cb5e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
                alt: "Brick home surrounded by a garden",
                credit: "Abbilyn Rurenko",
            },
            {
                text: "Log Cabin",
                image: "https://images.unsplash.com/photo-1604004218771-05c55db4f9f4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
                alt: "Log cabin in the woods",
                credit: "Kadarius Seegars",
            },
            {
                text: "Modern",
                image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
                alt: "White modern home with a pool",
                credit: "Ralph (Ravi) Kayden",
            },
            {
                text: "Villa",
                image: "https://images.unsplash.com/photo-1610098137353-cf7a1a93ebb5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1185&q=80",
                alt: "White home with a grand staircase and courtyard",
                credit: "Tom Podmore",
            }
        ]
    },
]

const populateQuestions = () => {
    questions.forEach(question => {
        const titleBlock = document.createElement("div")
        titleBlock.id = question.id
        titleBlock.classList.add("title-block")

        const titleHeading = document.createElement("h2")
        titleHeading.textContent = question.text
        titleBlock.append(titleHeading)
        questionDisplay.append(titleBlock)

        const answersBlock = document.createElement("div")
        answersBlock.id = question.id + "-questions"
        answersBlock.classList.add("answer-options")

        question.answers.forEach(answer => {
            const answerBlock = document.createElement("div")
            answerBlock.classList.add("answer-block")
            answerBlock.addEventListener("click", () => handleClick)

            const answerImage = document.createElement("img")
            answerImage.setAttribute("src", answer.image)
            answerImage.setAttribute("alt", answer.alt)

            const answerTitle = document.createElement("h3")
            answerTitle.textContent = answer.text

            const answerInfo = document.createElement("p")
            const imageLink = document.createElement("a")
            imageLink.setAttribute("href", answer.credit)
            imageLink.textContent = answer.credit
            const sourceLink = document.createElement("a")
            sourceLink.textContent = "Unsplash"
            sourceLink.setAttribute("src", "https://unsplash.com")
            answerInfo.append(imageLink, " to ", sourceLink)

            answerBlock.append(answerImage, answerTitle, answerInfo)

            answersBlock.append(answerBlock)


        })

        questionDisplay.append(answersBlock)


    })
}
populateQuestions()

const handleClick = () => {

} 