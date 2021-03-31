import {article1} from './articles/article1'
import {article2} from './articles/article2'
import {article3} from './articles/article3'
import article4 from './articles/article4'
import article5 from './articles/article5'

export const article1Data = {
    id: '1',
    dropdown: true,
    title: "Javascript interview preparation",
    intro: "Every interview will make you question your skills and knowledge as a developer. For all of you javascript developers out there, I prepared a cheatsheet containing everything you need to get reminded about Javascript in depth. I have collected the data by myself and I did a research about every interview I've been to. Hopefully, this will help you.",
    article: article1,
    gist: 'https://gist.github.com/StefanGorgevik/1e74543011068bba4c8addab43f0b56a'
}

export const article2Data = {
    id: '2',
    dropdown: false,
    title: "Event Loop",
    intro: "The event loop is truly important to understand and to know how it works behind the scenes. This especially comes in place when you are trying to write asynchrounous code. You can try various exercises using setTimeout as a synchrounous function that can act as a call to the database.",
    article: article2
}

export const article3Data = {
    id: '3',
    dropdown: true,
    title: "ReactJS Interview Questions",
    intro: "No matter how much Javascript you know, learning a framework can confuse you on so many levels. If ahead of you awaits a Javascript/ReactJS interview, this article can help you a lot. I did my research and made a collection of the most important things that a React developer should know.",
    article: article3,
    gist: 'https://gist.github.com/StefanGorgevik/9ac9fb50393bdaea8517a4c01bdb6199'
}

export const article4Data = {
    id: '4',
    dropdown: true,
    title: "Javascript methods",
    intro: "Javascript owns several methods that are available to us all the time, but ES6 brought several that eases our job even more. This is especially important when we are trying to write understandable and clean code. Let's take a look.",
    article: article4,
    gist: 'https://gist.github.com/StefanGorgevik/9c9db408fc17126148057f562446f7ad'
}

export const article5Data = {
    id: '5',
    dropdown: true,
    title: "React Class - Lifecycle methods",
    intro: "If you create a class component in React, you get several methods that have a certain order in execution. Knowing this order is crucial if you want to stop your React app from doing unnecessary re-renders. We will cover every life-cycle method there is, but there only a couple of them that you truly need to know. A lot of them are deprecated or changed, and it is really rare to find a good use for them.",
    article: article5,
    gist: 'https://gist.github.com/StefanGorgevik/0e8fd36df0f13b46f810d29eee9611ba'
}


export const allArticles = [article1Data, article2Data, article3Data, article4Data, article5Data]





//, article1Data, article2Data, article1Data, article3Data,article4Data, article3Data, article4Data, article2Data, article3Data, article2Data, article4Data, article3Data,
