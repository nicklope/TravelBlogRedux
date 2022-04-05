const db = require('../db')
const Location = require('../models/Location')

db.on('error', console.error.bind(console, 'MongoDB connect error:'))

const main = async () => {
  const locations = [
    {
      locationName: 'Hawaii',
      locationImage:
        'https://portal.ehawaii.gov/assets/webp/page/government/counties/honolulu.webp',
      locationOverview:
        'Discover the beauty, culture and adventures waiting for you on the Hawaiian Islands.',
      locationComments: []
    },
    {
      locationName: 'Chicago',
      locationImage:
        'https://media.cntraveler.com/photos/61e865ea62e14c3f706eea5c/16:9/w_2580,c_limit/Chicago_GettyImages-1180689542.jpg',
      locationOverview:
        'Chicago, on Lake Michigan in Illinois, is among the largest cities in the U.S. Famed for its bold architecture, it has a skyline punctuated by skyscrapers such as the iconic John Hancock Center and the 1,451-ft. Willis Tower (formerly the Sears Tower).',
      locationComments: []
    },
    {
      locationName: 'Sedona',
      locationImage:
        'https://fullsuitcase.com/wp-content/uploads/2021/01/Best-things-to-do-in-Sedona-Arizona.jpg.webp',
      locationOverview:
        'Sedona is an Arizona desert town near Flagstaff thats surrounded by red-rock buttes, steep canyon walls and pine forests. Its noted for its mild climate and vibrant arts community.',
      locationComments: []
    }
  ]
  await Location.insertMany(locations)
  console.log('Here come some locations!')
}
const run = async () => {
  await main()
  db.close()
}
run()
