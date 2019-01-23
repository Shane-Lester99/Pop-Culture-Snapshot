import  { CLICKBOX, CLICKNAV, CLICKSUBMIT, CLOSEMODAL} from "../actions";

const d = {
	dataTv : [ { title: "Marvel's The Punisher",
    posterPath: '/s2YM9zHF3tf2coi8t0UEzYrOHg8.jpg',
    overview:
     "A former Marine out to punish the criminals responsible for his family's murder finds himself ensnared in a military conspiracy.",
    voteScore: 8,
    releaseDate: '2017-11-17' },
  { title: 'True Detective',
    posterPath: '/aowr4xpLP5sRCL50TkuADomJ98T.jpg',
    overview:
     'An American anthology police detective series utilizing multiple timelines in which investigations seem to unearth personal and professional secrets of those involved, both within or outside the law.',
    voteScore: 8.2,
    releaseDate: '2014-01-12' },
  { title: 'Star Trek: Discovery',
    posterPath: '/aJTSeqG43514TewIuS9hiHvbero.jpg',
    overview:
     'Follow the voyages of Starfleet on their missions to discover new worlds and new life forms, and one Starfleet officer who must learn that to truly understand all things alien, you must first understand yourself.',
    voteScore: 6.8,
    releaseDate: '2017-09-24' },
  { title: 'Wayne',
    posterPath: '/jPjHpQwJ3yew7ZlqHry8UDiVDgj.jpg',
    overview:
     'In this gritty and sometimes bloody tale, sixteen year-old Wayne sets out on a dirt bike with his new crush Del to take back the 1978 Pontiac Trans Am that was stolen from his father before he died. It is Wayne and Del against the world.',
    voteScore: 6,
    releaseDate: '2019-01-16' },
  { title: 'Outlander',
    posterPath: '/ioQ0o7dOU6AD8gKIHHPX0czqgSw.jpg',
    overview:
     "The story of Claire Randall, a married combat nurse from 1945 who is mysteriously swept back in time to 1743, where she is immediately thrown into an unknown world where her life is threatened. When she is forced to marry Jamie, a chivalrous and romantic young Scottish warrior, a passionate affair is ignited that tears Claire's heart between two vastly different men in two irreconcilable lives.",
    voteScore: 7.2,
    releaseDate: '2014-08-09' },
  { title: 'Shameless',
    posterPath: '/iRyQTp2L437k6zfFCvZSOWaxQFA.jpg',
    overview:
     "Chicagoan Frank Gallagher is the proud single dad of six smart, industrious, independent kids, who without him would be... perhaps better off. When Frank's not at the bar spending what little money they have, he's passed out on the floor. But the kids have found ways to grow up in spite of him. They may not be like any family you know, but they make no apologies for being exactly who they are.",
    voteScore: 7.9,
    releaseDate: '2011-01-09' },
  { title: 'Game of Thrones',
    posterPath: '/gwPSoYUHAKmdyVywgLpKKA4BjRr.jpg',
    overview:
     "Seven noble families fight for control of the mythical land of Westeros. Friction between the houses leads to full-scale war. All while a very ancient evil awakens in the farthest north. Amidst the war, a neglected military order of misfits, the Night's Watch, is all that stands between the realms of men and icy horrors beyond.",
    voteScore: 8.2,
    releaseDate: '2011-04-17' },
  { title: 'Sex Education',
    posterPath: '/dH7ua9OMVQQsaDssVGKx8WiK1IR.jpg',
    overview:
     'Inexperienced Otis channels his sex therapist mom when he teams up with rebellious Maeve to set up an underground sex therapy clinic at school.',
    voteScore: 7.7,
    releaseDate: '2019-01-11' },
  { title: 'Supergirl',
    posterPath: '/vqBsgL9nd2v04ZvCqPzwtckDdFD.jpg',
    overview:
     'Twenty-four-year-old Kara Zor-El, who was taken in by the Danvers family when she was 13 after being sent away from Krypton, must learn to embrace her powers after previously hiding them. The Danvers teach her to be careful with her powers, until she has to reveal them during an unexpected disaster, setting her on her journey of heroism.',
    voteScore: 5.8,
    releaseDate: '2015-10-26' },
  { title: 'Vikings',
    posterPath: '/94gP9uXNdbypwCLORjeurlad15Z.jpg',
    overview:
     "Vikings follows the adventures of Ragnar Lothbrok, the greatest hero of his age. The series tells the sagas of Ragnar's band of Viking brothers and his family, as he rises to become King of the Viking tribes. As well as being a fearless warrior, Ragnar embodies the Norse traditions of devotion to the gods. Legend has it that he was a direct descendant of Odin, the god of war and warriors.",
    voteScore: 7.4,
    releaseDate: '2013-03-03' } ],
dataMovie : [ { title: 'IO',
    posterPath: '/utH781EwjzzXQC6fZUO3cw8L5Ht.jpg',
    overview:
     "As a young scientist searches for a way to save a dying Earth, she finds a connection with a man who's racing to catch the last shuttle off the planet.",
    voteScore: 5.1,
    releaseDate: '2019-01-18' },
  { title: 'Glass',
    posterPath: '/aG5GS0V15Zpk8zvsww02faNT0QI.jpg',
    overview:
     'Following the conclusion of Split, Glass finds David Dunn pursuing Kevin Wendell Crumb’s superhuman figure of The Beast in a series of escalating encounters, while the shadowy presence of Elijah Price emerges as an orchestrator who holds secrets critical to both men.',
    voteScore: 7,
    releaseDate: '2019-01-16' },
  { title: 'Close',
    posterPath: '/4kjUGqPIv6kpxJUvjmeQX7nQpKd.jpg',
    overview:
     'A counter-terrorism expert takes a job protecting a young heiress. After an attempted kidnapping puts both of their lives in danger, they must flee.',
    voteScore: 6.2,
    releaseDate: '2019-01-18' },
  { title: 'Bumblebee',
    posterPath: '/fw02ONlDhrYjTSZV8XO6hhU3ds3.jpg',
    overview:
     'On the run in the year 1987, Bumblebee finds refuge in a junkyard in a small Californian beach town. Charlie, on the cusp of turning 18 and trying to find her place in the world, discovers Bumblebee, battle-scarred and broken.  When Charlie revives him, she quickly learns this is no ordinary yellow VW bug.',
    voteScore: 6.6,
    releaseDate: '2018-12-15' },
  { title: 'The Nutcracker and the Four Realms',
    posterPath: '/48loYWJb0HKVRMU92cWVD0TQhYo.jpg',
    overview:
     'A young girl is transported into a magical world of gingerbread soldiers and an army of mice.',
    voteScore: 6.1,
    releaseDate: '2018-10-26' },
  { title: 'Once Upon a Deadpool',
    posterPath: '/5Ka49BWWyKMXr93YMbH5wLN7aAM.jpg',
    overview:
     "A kidnapped Fred Savage is forced to endure Deadpool's PG-13 rendition of Deadpool 2 as a Princess Bride-esque story that's full of magic, wonder & zero F's.",
    voteScore: 7.1,
    releaseDate: '2018-12-11' },
  { title: 'A Star Is Born',
    posterPath: '/wrFpXMNBRj2PBiN4Z5kix51XaIZ.jpg',
    overview:
     "Seasoned musician Jackson Maine discovers—and falls in love with—struggling artist Ally. She has just about given up on her dream to make it big as a singer—until Jack coaxes her into the spotlight. But even as Ally's career takes off, the personal side of their relationship is breaking down, as Jack fights an ongoing battle with his own internal demons.",
    voteScore: 7.5,
    releaseDate: '2018-10-03' },
  { title: 'Hunter Killer',
    posterPath: '/a0j18XNVhP4RcW3wXwsqT0kVoQm.jpg',
    overview:
     'An untested American submarine captain teams with U.S. Navy SEALs to rescue the Russian president, who has been kidnapped by a rogue general.',
    voteScore: 5.8,
    releaseDate: '2018-10-19' },
  { title: "The Girl in the Spider's Web",
    posterPath: '/w4ibr8R702DCjwYniry1D1XwQXj.jpg',
    overview:
     'In Stockholm, Sweden, hacker Lisbeth Salander is hired by Frans Balder, a computer engineer, to retrieve a program that he believes it is too dangerous to exist.',
    voteScore: 5.7,
    releaseDate: '2018-10-26' },
  { title: 'Upgrade',
    posterPath: '/8fDtXi6gVw8WUMWGT9XFz7YwkuE.jpg',
    overview:
     'A brutal mugging leaves Grey Trace paralyzed in the hospital and his beloved wife dead. A billionaire inventor soon offers Trace a cure — an artificial intelligence implant called STEM that will enhance his body. Now able to walk, Grey finds that he also has superhuman strength and agility — skills he uses to seek revenge against the thugs who destroyed his life.',
    voteScore: 7.4,
    releaseDate: '2018-06-01' } ],
  dataYoutube :
  [
    {
        title: "hello world",
        channelId: "",
        thumbnail: "",
        vidId: "",
        channelTitle: "Channel"
    }
  ]
};


const initialState = {
  display: "daily",
  showModal: false,
  loggedIn: false,
  userId: 0,
  data: d,
  userData: {},
  modalData: {},
  modalDiplay: ''
};


export default (state = initialState, action) => {
  switch (action.type) {
    case CLICKBOX:
      return Object.assign(
        {},
        state,
        state.showModal = true,
        state.modalData = action.payload,
        state.modalDisplay = action.display
      )
    case CLICKNAV:
      return Object.assign(
        {},
        state,
        state.display = action.display
      )
    case CLICKSUBMIT:
      return Object.assign(
        {},
        state,
        state.userId = action.userId,
        state.userData = action.userData,
        state.loggedIn = true
      )
		case CLOSEMODAL:
			return Object.assign(
				{},
				state,
        state.showModal = false,
        state.modalData = '',
        state.modalDisplay = ''
			)
    default:
      return state;
  }
};
