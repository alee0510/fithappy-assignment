# Code Challenge

---

## Description

This project show all news from `country=us` with `health` category provided by `newsapi.org`. In this challnge, you will be given a task to complete some a ready defined function to complete some certain task.

Futhermore, This is the response snapshot from the newsapi.org with health category and US as the source country

``` JSON
"totalResults": 67,
"articles": [
    {
        "source": {
            "id": "cnn",
            "name": "CNN"
        },
        "author": "Madeline Holcombe",
        "title": "It's never too late to get active for your brain health later in life, study finds - CNN",
        "description": "Lifelong physical activity may be the best way to stay healthy, but what about those haven't gotten started yet? A new study finds that it is always beneficial to cognitive well-being to incorporate some activity — even if it isn't too intensive.",
        "url": "https://www.cnn.com/2023/02/21/health/exercise-any-age-wellness/index.html",
        "urlToImage": "https://media.cnn.com/api/v1/images/stellar/prod/230221145924-01-exercise-any-age-weights-wellness-stock.jpg?c=16x9&q=w_800,c_fill",
        "publishedAt": "2023-02-21T23:31:00Z",
        "content": "Sign up for CNNs Fitness, But Better newsletter series. Our seven-part guide will help you ease into a healthy routine, backed by experts. \r\nEven if youve never been physically active, you can start … [+4059 chars]"
    },
    {
        "source": {
            "id": null,
            "name": "Daily Mail"
        },
        "author": "Caitlin Tilley",
        "title": "Men who drink Coca-Cola or Pepsi have larger testicles, study suggests - Daily Mail",
        "description": "Research on mice showed adult males who drank Coca-Cola or Pepsi had higher testosterone levels and larger testicles than their peers. The unusual finding seems to contradict previous studies.",
        "url": "https://www.dailymail.co.uk/health/article-11776783/Men-drink-Coca-Cola-Pepsi-larger-testicles-study-mice-suggests.html",
        "urlToImage": "https://i.dailymail.co.uk/1s/2023/02/21/17/67927359-0-image-a-12_1677000201741.jpg",
        "publishedAt": "2023-02-21T23:01:18Z",
        "content": "The country's most popular sodas might refresh the parts other drinks can't reach - by giving men bigger testicles and making them more masculine, a study suggests. \r\nResearch on mice showed adult ma… [+2906 chars]"
    },
]
```

## Getting Started

This project is build with `expo-app` and consist with 3 different files

- `App.js` and entry point for the project where all component is rendered
- `App.Components` all local component is constuct in this file
- `App.Styles` contain all styles ans contants for all component
- `Service.Api` to handle nework call

## How to Run The Project?

- firstly, you must `fork` this origin repo to your current GitHub repo. Then, you can begin modify this project localy by clone `(git clone remote-url...)` your `forked repositoy` to your local machine.
- opon termial or command-line on the pojetc directory and run `yarn install` or `npm install`, make sure you has `nodejs` environtment and npm or yarn package manager in your local machine
- do command `yarn android` to run the project on android or change to ios if you want to run on ios device. Make sure you has connected android device or running simulator on your local machine

## Task

