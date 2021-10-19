import kanye from '../assets/kanye.png'
import mark from '../assets/mark.png'
import cristina from '../assets/cristina.png'
import malala from '../assets/malala.png'

export const data =[
  {
    id: 1,
    name: "Kanye West",
    description: "Vestibulum diam ante, porttitor a odio eget, rhoncu. Eu velit...",
    category: "entertainment",
    picture: kanye,
    lastUpdated: "2020-03-10T23:08:57.892Z",
    votes: {
        positive: 23,
        negative: 36
    }
  },
  {
    id: 2,
    name: "Mark Zuckerberg",
    description: "Born in White Plains, New York, Zuckerberg attended Harvard University, where he launched the Facebook social networking service from his dormitory room on February 4, 2004.",
    category: "business",
    picture: mark,
    lastUpdated: "2021-02-14T23:10:19.134Z",
    votes: {
        positive: 418,
        negative: 324
    }
  },
  {
    id: 3,
    name: "Cristina Fernández de Kirchner",
    description: "Her first term of office started with a conflict with the agricultural sector, and her proposed taxation system was rejected.",
    category: "politics",
    picture: cristina,
    lastUpdated: "2020-12-10T23:41:07.120Z",
    votes: {
        positive: 45,
        negative: 97
    }
  },
  {
    id: 4,
    name: "Malala Yousafzai",
    description: "The daughter of educational activist Ziauddin, Yousafzai was born to a Pashtun family in Mingora, Khyber Pakhtunkhwa, Pakistan. Her family came to run a chain of schools in the region.",
    category: "politics",
    picture: malala,
    lastUpdated: "2020-12-10T23:41:07.120Z",
    votes: {
        positive: 18,
        negative: 3
    }
  }
]