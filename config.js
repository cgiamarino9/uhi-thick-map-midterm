var config = {
    accessToken: 'pk.eyJ1IjoiY2dpYW1hcmlubyIsImEiOiJjanAyd2hwNWUwYnJ3M3dzMHF4MnJkZ29uIn0.7tLnplw65tLmywvvIPGSKA',
    style: 'mapbox://styles/cgiamarino/ckhwwa0ov09j919qwfuojwe4o',
    theme: 'light',
    alignment: 'left',
    toptitle: 'UHI Beach Ecology | Midterm Review | Thick Map',
    title: 'Washed Out: Bordering, Displacement, and Contestation at the Beach',
    byline: 'By Chris Giamarino, Eliza Franklin-Edmondson, Victoria Tran, and Xiuwen Qi',
    description: 'Rayner Banham&#8217;s <a href="https://vimeo.com/22488225" target=”_blank” >infamous trip</a> through Los Angeles&#8217; original four ecologies—Surfurbia, Foothills, The Plains of Id, and Autopia—contained some superficial claims. While <i>driving</i> through Surfurbia, or the beach ecology, Banham (1971, p. 39) claimed that &quot;the beach is the only place in Los Angeles where all men are equal and on common ground&quot;. This storymap problematizes this argument by looking at struggles for spatial justice in the face of bordering and displacement starting with mid-century urban renewal and ending in today&#8217;s political climate with widespread social unrest and varying demands for reparations and rights to the city.</br></br> The journey begins as we make our way from north Santa Monica Bay in Malibu to south Santa Monica Bay in Manhattan Beach. The four places where we explore processes of bordering, commoning, and undecommoning are Malibu, Santa Monica, Venice, and Manhattan Beach. We respatialize real-and-imagined spaces that have been erased and reclaimed. These places include Malibu beaches, Inkwell Beach, sidewalks for shelter and survival, and Bruce&#8217;s Beach, among others.',
    footer: 'Two acknowledgments are necessary. First, thank you to Grga Basic, Marguerite Holloway, Michael Krisch, and Juan Francisco Saldarriaga at <a href="https://pointsunknown.nyc/" target=”_blank”>Points Unknown</a> for their Mapbox Story Map tutorial. Second, thank you to <a href="https://www.getbounds.com/" target=”_blank”>Malcolm Meyer</a> for their technical assistance with coding issues.',
    footerAttribution: '<a href="https://www.mapbox.com/about/maps/" target="_blank">© Mapbox</a> | <a href="http://www.openstreetmap.org/about/" target="_blank">© OpenStreetMap</a>',
    chapters: [
        {
            id: 'beach-line',
            title: 'The Beach Ecology stretches from Malibu to Newport Beach.',
            image: 'images/collage.png',
            imageCredit: 'Chris Giamarino',
            description: 'We look at Malibu, Santa Monica, Venice, and Manhattan Beach. All four location&#8217;s histories are fraught with planned social, cultural, and spatial exclusion, as well as radical contestations. Malibu is a wealthy, exclusive beach enclave with wildfires, a highway, and cliffs that reify its inaccessible character through government bailouts, car-centricity, and harsh topographical features. Santa Monica, a part of Silicon Beach, has a rich history as an historic black and countercultural beach before these groups were pushed out by postwar renewal. This erased history—black surfers and businesspeople and cultural buildings and events—is being reclaimed through critical mapping projects. Venice, once home to countercultural artists, musicians, and writers, is now a contested bohemia where local businesses, gentrifiers, tourists, and the unhoused fight for a right to city space. Manhattan Beach, once home to the only black-owned beach seized through eminent domain and racial terrorism by beach nazis and the KKK, is now a primary battleground for land reparations during the recent uprisings to protest police brutality and fight for racial justice.',
            location: {
                center: [-118.65301, 33.95435  ],
                zoom: 10.59,
                pitch: 3,
                bearing: 0
            },
            onChapterEnter: [
              {
                layer:'beach-locations',
                opacity:.6
              },
              {
                layer: 'trailMalibu',
                opacity: 0
              },
              {
                  layer: 'seczBeach',
                  opacity: 0
              },
              {
                  layer: 'bidBeach',
                  opacity: 0
              }
            ],
            onChapterExit: [
              {
                layer: 'beach-locations',
                opacity: 0
              },
              {
                layer: 'coast',
                opacity: 0
              }
            ]
        },
        {
            id: 'enterMalibu',
            title: '"Greetings from California"',
            image: 'images/greetings.jpg',
            imageCredit: '<a href="https://pepperdine.contentdm.oclc.org/digital/collection/p15730coll18/id/993" target=”_blank”>Eric Wienberg Collection of Malibu Matchbooks, Postcards, and Collectables</a>',
            description: 'Postwar real estate advertisements used beach entertainment, music, and surf imagery from Malibu to market the appeal of Los Angeles. To market to prospective white upper-middle class residents, <a href="https://pepperdine.contentdm.oclc.org/digital/api/singleitem/image/p15730coll18/117/default.jpg?highlightTerms=" target=”_blank”>white surfers</a> are referenced in ads, while the sounds of the Beach Boys are associated with Malibu during a classic photoshoot at <a href="https://rockandrollroadmap.com/places/album-cover-locations/los-angeles-area/surfin-safari-by-the-beach-boys/" target="_blank">Paradise Cove</a> for their first album. The surfing, romantic, and natural imaginaries of Malibu are etched into our minds with songs like <a href="https://www.youtube.com/watch?v=IMChBJZUDK8&ab_channel=TheOldrecordclub" target="_blank">&ldquo;Surfin&#8217; Safari&rdquo;</a> and <a href="https://www.youtube.com/watch?v=fThOaTt6bn4&ab_channel=ScottG" target="blank">&ldquo;Malibu Sunset&rdquo;</a>where one can head to Malibu to shoot between the pier or hold hands with their lover.',
            video: '',
            location: {
                center: [  -118.91645,  34.02848],
                zoom:10.2,
                pitch: 0,
                bearing: 0
            },
            onChapterEnter: [
              {
                  layer: 'malibu-hood',
                  opacity: 0.7
              },
              {
                  layer: 'bidBeach',
                  opacity: 0
              }
            ],
            onChapterExit:[
              {
                  layer:'malibu-hood',
                  opacity: 0
              }
            ]
        },
        {
            id:'incMalibu',
            title: '"Luxury home sales highlight the growing U.S. wealth gap."—Prashant Gopal, LA Times',
            image:'images/legends-3.png',
            imageCredit: '<a href="https://data.lacounty.gov/" target="_blank">County of Los Angeles Open Data</a>',
            description: 'Malibu is an expensive beach enclave with a median household income of <a href="https://www.census.gov/quickfacts/malibucitycalifornia" target="_blank">$147,934</a>, approximately three times higher than the national and LA county median.',
            location: {
              center: [-118.87619, 34.03132 ],
              zoom: 10.4,
              pitch: 0,
              bearing: 0
            },
            onChapterEnter:[
              {
                layer:'medIncMali',
                opacity: 1
              }
            ],
            onChapterExit:[
              {
                layer:'medIncMali',
                opacity:0
              }
            ]
        },
        {
            id:'fireMalibu',
            title: '"More Than a Year After the Woolsey Fire, Malibu Residents Still Grapple With Permits and Insurance Claims."—Barbara Burke, Malibu Mag',
            image:'images/fire.jpg',
            imageCredit: '<a href="https://www.kcrw.com/news/shows/greater-la/a-pending-rule-change-for-airbnb-and-other-short-term-rentals-in-la/which-malibu-restaurants-didnt-survive-the-woolsey-fire" target=”_blank”>Peter Buschmann</a>',
            description: 'The 2018 Woolsey Fire burned over 90,000 acres and put over 10,000 building structures in Malibu at risk of destruction, causing an estimated $6 billion in property damage. Why are people allowed to live in this fire ecology? While similar urban fires happen in lower areas with less wealth such as the Westlake neighborhood in LA, Malibu residents continue to receive &ldquo;cheap fire insurance, socialized disaster relief, and an expansive public commitment to &lsquo;defend Malibu&rsquo;&rdquo; (<a href="https://longreads.com/2018/12/04/the-case-for-letting-malibu-burn/" target=”_blank”>Davis, 1998)</a>.',
            video: '<audio src="https://upload.wikimedia.org/wikipedia/commons/b/b1/Campfire_sound_ambience.ogg" type="audio/mpeg"  title="wildfire crackling" controls ></audio>',
            location: {
              center: [-118.93630,  34.08291],
              zoom: 10.5,
              pitch: 0,
              bearing: 0
            },
            onChapterEnter:[
              {
                layer:'bldgsMali',
                opacity: 1
              },
              {
                layer:'woolsFire',
                opacity:0.7
              }
            ],
            onChapterExit:[
              {
                layer:'bldgsMali',
                opacity: 0
              },
              {
                layer:'woolsFire',
                opacity:0
              }
            ]
        },
        {
            id: 'malibuBeach',
            title: '"He was camping down there, that’s what he was doing. Camping. Living. Dwelling. Making the trees and bushes and the natural habitat of Topanga State Park into his own private domicile"—T.C. Boyle, "The Tortilla Curtain" (1995, p. 11)',
            image: 'images/tortilla-play.jpg',
            imageCredit: '<a href="https://westernstage.com/2015/10/05/playwright-matthew-spangler-tells-us-how-tortilla-curtain-made-it-from-the-page-to-the-western-stage/" target="_blank">Richard Green</a>',
            description: 'The <a href="http://laurbanrangers.org/site/" target=”_blank” target=”_blank”>Los Angeles Urban Rangers</a> attempt to make the exclusive beaches of Malibu more open through maps off access points along PCH that they offer in <a href="http://laurbanrangers.org/site/sites/default/files/tools/Malibu%20Public%20Beaches%20Guide_ENG%20012810_web.pdf" target=”_blank”> English</a> and <a href="http://laurbanrangers.org/site/sites/default/files/tools/Malibu%20Public%20Beaches%20Guide_SP%20012810_web.pdf" target=”_blank”>Spanish</a>. T.C. Boyle&#8217;s magnum opus <a href="https://www.latimes.com/archives/la-xpm-1995-09-24-bk-49277-story.html" target=”_blank”><i>The Tortilla Curtain</i></a> tells a different story of Malibu where access to the beach is a way that undocumented immigrants Cándido Rincón and América can survive the expensive, exclusionary, and xenophobic environment while they work for wealthy property owners who exacerbate their exclusion. This literary tome is a critique, meditation, and response to the anti-immigrant Prop 187 passed in 1994, which was <a href="https://www.aclu.org/press-releases/cas-anti-immigrant-proposition-187-voided-ending-states-five-year-battle-aclu-rights" target=”_blank”>repealed</a> in 1999.',
            video: '',
            location: {
                center: [-118.84635, 34.01386 ],
                zoom: 10.3,
                pitch: 0,
                bearing: 0
            },
            onChapterEnter: [
                {
                    layer: 'seczBeach',
                    opacity: 0
                },
                {
                    layer: 'bidBeach',
                    opacity: 0
                },
                {
                  layer: 'trail',
                  opacity: 0.8
                }
            ],
            onChapterExit: [
              {
                  layer: 'seczBeach',
                  opacity: 0
              },
              {
                  layer: 'bidBeach',
                  opacity: 0
              },
              {
                layer: 'trail',
                opacity: 0
              }
            ]
        },
        {
            id: 'SaMo',
            title: '"The Most Versatile Advertising Space in LA"—Pacific Park, Santa Monica Pier',
            image: 'images/pier.jpg',
            imageCredit: '<a href="https://pacpark.com/the-most-versatile-advertising-space-in-la/" target=”_blank”>Pacific Park</a>',
            description: 'The City of Santa Monica describes itself as <a href="https://patch.com/california/santamonica/city-unveils-new-santa-monica-slogan-at-awards-event" target="_blank">California&#8217;s most celebrated beach city</a>. Today, it is well-known as a beach resort town home to the Silicon Beach tech hub, luxury shopping, and its famous pier. All of which attract approximately <a href="https://bit.ly/3nU9f43" target="_blank">8 million</a> vistors a year. As the Talking Heads ask, &ldquo;How did we get here?&rdquo;',
            location: {
                center: [ -118.50082,  34.04319   ],
                zoom: 12.67,
                pitch: 3,
                bearing: 48.8
            },
            onChapterEnter: [
              {
                layer: 'sm-hood',
                opacity: .6
              },
              {
                  layer: 'seczBeach',
                  opacity: 0
              },
              {
                  layer: 'bidBeach',
                  opacity: 0
              }
            ],
            onChapterExit: [
              {
                layer: 'sm-hood',
                opacity: 0
              }
            ]
        },
        {
            id: 'freeway',
            title: '"In 1966, a new express freeway opened that allowed Angelenos to reach the beach from downtown in a just a few minutes."—Elsa Devienne, "The Right to the Beach?" (2016, p. 41)',
            image: 'images/10-fwy.jpg',
            imageCredit: '<a href="https://www.library.ucla.edu/location/research-library-charles-e-young" target=”_blank”>UCLA Charles E. Young Research Library Department of Special Collections</a>',
            description: 'Postwar urban renewal was racialized, anti-working class, and homophobic. Highways tore through working class communities of color in mid-century America. They remain <a href="https://archinect.com/news/article/150204203/highways-another-enduring-monument-to-american-racism" target=”_blank”>monumental racist infrastructural artefacts</a> that should be torn down. Before its completion, beach cities, white residents, and local policymakers used federal funds, urban design, restrictive covenants, and spatial regulations to clear out unwanted residents <i>and</i> everyday activities that one may assume belong at the beach...',
            location: {
                center: [ -118.40095, 34.00997  ],
                zoom: 12.62,
                pitch: 60,
                bearing: -128
            },
            onChapterEnter: [
              {
                layer: '10-fwy',
                opacity: .6
              },
              {
                  layer: 'seczBeach',
                  opacity: 0
              },
              {
                  layer: 'bidBeach',
                  opacity: 0
              }
            ],
            onChapterExit: [
              {
                layer: '10-fwy',
                opacity: 0
              }
            ]
        },
        {
            id: 'blackPop',
            title: '"The beach near the end of Pico Boulevard in the Ocean Park neighbor hood of the City of Santa Monica was a leisure site where African Amer ican day trippers were relatively free from discrimination"—Alison Rose Jefferson, "African American Leisure Space in Santa Monica" (2009, p. 158)',
            image: 'images/legend-1.png',
            imageCredit: '<a href="https://www.socialexplorer.com/explore-maps" target=”_blank”>Social Explorer</a> + <a href="https://www.nhgis.org/" target=”_blank”>IPUMS National Historical Geographic Information System, 2020</a>',
            description: 'The Pico neighborhood in Santa Monica was a <a href="https://www.jstor.org/stable/41172469?seq=1#metadata_info_tab_contents" target="_blank">historically black beach district</a> where, during Jim Crow and facing racial discrimination, segregation, and violence, black residents could attend church, meet at social clubs, and stake out their own space at the beach known as the Inkwell.',
            video: '',
            location: {
                center: [-118.48749, 34.04236],
                zoom: 12.5,
                pitch: 0,
                bearing: 46.40
            },
            onChapterEnter: [
                {
                    layer: 'CT-1970-beach',
                    opacity: 1
                },
                {
                  layer: '10-fwy',
                  opacity: 1
                },
                {
                    layer: 'seczBeach',
                    opacity: 0
                },
                {
                    layer: 'bidBeach',
                    opacity: 0
                }
            ],
            onChapterExit: [
                {
                    layer: 'CT-1970-beach',
                    opacity: 0
                },
                {
                  layer: '10-fwy',
                  opacity: 0
                },
                {
                    layer: 'seczBeach',
                    opacity: 0
                },
                {
                    layer: 'bidBeach',
                    opacity: 0
                }
            ]
        },
        {
            id: 'today',
            title: '"My dad said, "When I bought this property we were only allowed to buy down this strip from Pico all the way to the beach.""—Jubilant Sykes, Santa Monica resident',
            image: 'images/legend-2.png',
            imageCredit: '<a href="https://www.socialexplorer.com/explore-maps" target=”_blank”>Social Explorer</a>',
            description: 'Looking at the percentages from American Community Survey 2018 5-year data, the presence of African American/black communities since 1970 has dwindled and become more disparately dispersed in the Pico neighborhood of Santa Monica. Santa Monica is now part of the exclusive <a href="https://www.discoverlosangeles.com/the-rise-of-silicon-beach" target=”_blank”> Silicon Beach</a> area of Los Angeles. <a href="https://www.rentcafe.com/average-rent-market-trends/us/ca/santa-monica/" target=”_blank”>Average rent</a> is $3,200 and working class communities bear the brunt of these exorbitant rent hikes. For example, the historical legacy of redlining, urban renewal, and gentrificaiton have left the black community in Pico at a <a href="https://www.youtube.com/watch?v=pmjp9SjlVuo&feature=emb_logo" target="_blank">crossroads</a>.',
            video: '',
            location: {
                center: [-118.48749, 34.04236],
                zoom: 12.5,
                pitch: 0,
                bearing: 46.40
            },
            onChapterEnter: [
                {
                    layer: 'ct-2018-pico',
                    opacity: 1
                },
                {
                    layer: 'seczBeach',
                    opacity: 0
                },
                {
                    layer: 'bidBeach',
                    opacity: 0
                }
            ],
            onChapterExit: [
                {
                    layer: 'ct-2018-pico',
                    opacity: 0
                },
                {
                    layer: 'seczBeach',
                    opacity: 0
                },
                {
                    layer: 'bidBeach',
                    opacity: 0
                }
            ]
        },
        {
            id: 'muscleBeach',
            title: '"In 1955, after an accident involving a young boy, the Santa Monica City Council finally saw a way to get rid of Muscle Beach, which the conservative town had long considered a nuisance."—Hadley Meares, KCET',
            image: 'images/muscle.jpg',
            imageCredit: 'Chris Giamarino',
            description: 'The Original Muscle Beach was located at the foot of the Santa Monica Pier. During urban renewal in the 1950s, city officials and businesses shut down the space <a href="https://www.kcet.org/shows/lost-la/how-muscle-beach-started-in-santa-monica-but-ended-up-in-venice" target="_blank" title="Opens in a new window"> to cater to white suburban middle class tastes.</a> The city saw it as an &#8220;immoral place&#8221; attractive to &#8220;hippies&#8221;, &#8220;sexual athletes&#8221;, and &#8220;queers.&#8221; Muscle Beach migrated two miles south following the Venice countercultural movement in the 1960s and 1970s. Today, the original location is an abandoned ghost gym.',
            video: '',
            location: {
                center: [-118.49568, 34.00991],
                zoom: 16.97,
                pitch: 0,
                bearing: 44.8
            },
            onChapterEnter: [
              {
                  layer: 'seczBeach',
                  opacity: 0
              },
              {
                  layer: 'bidBeach',
                  opacity: 0
              }
            ],
            onChapterExit: [
              {
                  layer: 'seczBeach',
                  opacity: 0
              },
              {
                  layer: 'bidBeach',
                  opacity: 0
              }
            ]
        },
        {
            id: 'inkwellBeach',
            title: '"We honor the legacy of Nick Gabaldon who was one of the first documented surfers of color."—Juneteenth 2019 celebration at Inkwell',
            image: 'images/inkwell.jpg',
            imageCredit: 'Chris Giamarino',
            description: 'Inkwell was a <a href="https://www.jstor.org/stable/41172469?seq=1#metadata_info_tab_contents" target=”_blank”>historic black beach</a>. It was also the site of the first document <a href="https://www.youtube.com/watch?v=9l7ukZw86kg&ab_channel=MVAAFF" target="_blank">black surfer</a> named Nick Gabaldon who broke down barriers by surfing at the beach with white surfers. In the 1960s the city of Santa Monica implemented regulations and zones of exclusion that targeted black beach goers and exacerbated racial segregation. Urban renewal, segregation, and homogenization ensured that the city would realize its aspirations to be an affluent beach resort that catered to white, wealthy suburbanites.',
            video: '',
            location: {
                center: [-118.49275, 34.00554],
                zoom: 16.93,
                pitch: 41,
                bearing: 34.40
            },
            onChapterEnter: [
                {
                    layer: 'inkwell',
                    opacity: 1
                },
                {
                    layer: 'seczBeach',
                    opacity: 0
                },
                {
                    layer: 'bidBeach',
                    opacity: 0
                }
            ],
            onChapterExit: [
                {
                    layer: 'inkwell',
                    opacity: 0
                }
            ]
        },
        {
            id: 'adVenice',
            title: '"Venice of America"—Abbot Kinney, founder of Venice',
            image: 'images/canal.jpg',
            imageCredit: '<a href="https://www.kcet.org/shows/lost-la/the-lost-canals-of-venice-of-america" target="_blank">Metro Transportation Library and Archive</a>',
            description: 'Venice Beach, California was founded by tobacco magnate Abbot Kinney in 1905. It was designed to simulate both the tourist city of Venice, Italy and the theme park environment of Coney Island in Brooklyn, NY. In the 1960s, it became a hub for the countercultural movement, and in the 1970s it became the mecca for skateboarding, as Dogtown was born on the boder between Santa Monica and Venice. Today, it has been called a <a href="https://press.uchicago.edu/ucp/books/book/chicago/V/bo13110973.html" target="_blanke">&#8216;contested bohemia&#8217;</a> due to conflicts between the newly arriving gentry and longtime inhabitants of the beach, including hippies, African Americans, and the unhoused.',
            video:'',
            location: {
                center: [-118.47249, 33.99913],
                zoom: 13.17,
                pitch: 2,
                bearing: 60
            },
            onChapterEnter: [
                {
                    layer: 'venice-hood',
                    opacity: .7
                },
                {
                    layer: 'bidBeach',
                    opacity: 0
                }
            ],
            onChapterExit: [
              {
                  layer: 'venice-hood',
                  opacity: 0
              },
            {
                  layer: 'bidBeach',
                  opacity: 0
              }
            ]
        },
        {
            id: 'counterVenice',
            title: '"A vast radiant beach in a cool jeweled moon"—Jim Morrison, "Ghost Song" by The Doors',
            image: 'images/doors.jpg',
            imageCredit: 'Chris Giamarino',
            description: 'As black residents and hippies were pushed out of Santa Monica, they found a home in Venice Beach. Starting in the 1950s, Venice became a blossoming countercultural movement district for groups like the <a href="https://www.kcet.org/shows/departures/venice-west-cafe-a-lost-beat-landmark-that-helped-shape-modern-day-venice" target="_blank">Venice Cafe West</a> Beat Generation which included infamous characters like Lawrence Lipton and John Arthur Maynard. The Doors <a href="https://www.youtube.com/watch?v=eSkllKaA8dE&ab_channel=cjlg999" target="_blank">formed</a> here and made it their home.',
            video:'',
            location: {
                center: [-118.48065, 33.99454 ],
                zoom: 17.69,
                pitch: 3,
                bearing: 48.80
            },
            onChapterEnter: [
                {
                    layer: 'venice-west',
                    opacity: .7
                },
                {
                    layer: 'venice-west-label',
                    opacity: .7
                },
                {
                    layer: 'bidBeach',
                    opacity: 0
                }
            ],
            onChapterExit: [
              {
                  layer: 'venice-west',
                  opacity: 0
              },
              {
                  layer: 'venice-west-label',
                  opacity: 0
              },
              {
                  layer: 'venice-hood',
                  opacity: 0
              },
              {
                  layer: 'bidBeach',
                  opacity: 0
              }
            ]
        },
        {
            id: 'dogtownVenice',
            title: '"Skaters by their very nature are urban guerrillas: they make everyday use of the useless artifacts of the technological burden, and employ the handiwork of the government/corporate structure in a thousand ways that the original architects could never dream of."—Craig Stecyk, co-writer of the documentary "Dogtown and Z-Boys" (2001)',
            image: 'images/peggy.jpg',
            imageCredit: '<a href="https://theculturetrip.com/north-america/usa/california/articles/history-la-dogtown/" target="_blank">Moviestore/REX/Shutterstock</a>',
            description: 'Skateboarding was <a href="https://theculturetrip.com/north-america/usa/california/articles/history-la-dogtown/" target="_blank">born</a> in Venice along the border near Santa Monica at the dilapidated Pacific Ocean Park where misfit teenagers would go surf. Skip Engblom, Craig Stecyk and Jeff Ho of Ho Surfboards and Zephyr opened up a shop in 1972. They met Frank Nasworthy who invented polyurethane wheel technology, which revolutionized skateboarding technology and led to the formation of the Z-Boys. Previously, steel wheels made it dangerous to ride on the street, but polyurethane wheels made it easy to ride upon concrete waves when the waves of the Pacific Ocean were nonexistent.',
            video:'<iframe width="350" height="250" src="https://www.youtube.com/embed/L00yro9NvsQ" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
            location: {
                center: [-118.48384, 33.99929  ],
                zoom: 16,
                pitch: 0,
                bearing: 52
            },
            onChapterEnter: [
                {
                    layer: 'pacific-ocean',
                    opacity: .7
                },
                {
                    layer: 'dogtown-hood',
                    opacity: .7
                },
                {
                    layer: 'bidBeach',
                    opacity: 0
                }
            ],
            onChapterExit: [
              {
                  layer: 'pacific-ocean',
                  opacity: 0
              },
              {
                  layer: 'dogtown-hood',
                  opacity: 0
              },
              {
                  layer: 'venice-hood',
                  opacity: 0
              },
              {
                  layer: 'bidBeach',
                  opacity: 0
              }
            ]
        },
        {
            id: 'veniceUnhoused',
            title: '"They ask us to move and they do not tell use where to go. They tell us "Get your shit and go or we are going to throw it away.""—Beau, an unhoused individual, on police harassment in Venice',
            image: 'images/secz.jpg',
            imageCredit: 'Chris Giamarino',
            description: 'Processes of spatial exclusion have evolved from excluding communities of color and countercultures to targeting the unhoused status of beach residents who require common space to live, sleep, and perform other biologically-necessary duties. Due to its favorable climate and plethora of public space, Venice Beach has a sizable unhoused population. Today, the Venice Business/<a href="https://papers.ssrn.com/sol3/papers.cfm?abstract_id=3221446" target=”_blank”>Exclusion</a> Improvement District (purple boundary) and a Special Enforcement Zone (pink boundary) around a temporary shelter have produced a punitive public space environment that subjects the <a href="https://www.youtube.com/embed/t8ha3RxuTMg" target="_blank">unhoused</a> to police harassment, spatial banishment, and personal dispossession. Activist groups like Street Watch LA prevent police sweeps of encampments from happening through spatial occupation. During COVID-19, they have even occupied digital spaces to <a href="https://twitter.com/StreetWatchLA/status/1324578001716047872" target=”_blank”> shut down</a> a vote to resume policing of the unhoused by the Venice Neighborhood Council.',
            video: '',
            location: {
                center: [-118.47869, 33.99658],
                zoom: 14.37,
                pitch: 0,
                bearing: 52.80
            },
            onChapterEnter: [
                {
                    layer: 'seczBeach',
                    opacity: .7
                },
                {
                    layer: 'bidBeach',
                    opacity: .7
                }
            ],
            onChapterExit: [
              {
                  layer: 'seczBeach',
                  opacity: 0
              },
              {
                  layer: 'bidBeach',
                  opacity: 0
              }
            ]
        },
        {
            id: 'mnBeach',
            title: '"Sun, Sand, Sea"—Manhattan Beach slogan',
            image: 'images/mn-pier.jpg',
            imageCredit: '<a href="https://bestofthesouthbay.com/manhattan-beach-pier/" target="_blank">Best of the South Bay</a>',
            description: 'The City of Manhattan Beach is a quaint surf town in the south bay of Los Angeles County. Its noteworthy amenities include the pier, boardwalk, local shops, and restaurants. It was named after New York City in 1902 by George H. Peck, a <a href="https://www.latimes.com/california/story/2020-08-02/bruces-beach-manhattan-beach" target="_blank">racist real estate developer</a> who drove out black residents in teh early twentierh century.',
            video: '',
            location: {
                center: [-118.39818, 33.90472],
                zoom: 12.89,
                pitch: 0,
                bearing: 89.60
            },
            onChapterEnter: [
              {
                layer:'mn-beach',
                opacity:.6
              }
            ],
            onChapterExit: [
              {
                layer:'mn-beach',
                opacity:0
              }
            ]
        },
        {
            id: 'bruceBeach',
            title: '"When I told folks that my family once owned the beach here, they would laugh at me. They did not believe African Americans owned beaches"—member of the Bruce family',
            image: 'images/bruce.jpg',
            imageCredit: '<a href="https://www.latimes.com/california/story/2020-08-02/bruces-beach-manhattan-beach" target=”_blank”>Jay L. Clendenin</a>',
            description: 'Bruce&#8217;s Beach was an African American beach resort that provided an accessible oceanside refuge in the face of racial segregation. During Jim Crow, <a href="https://spectrumnews1.com/ca/la-west/human-interest/2020/07/31/reflections-on-race--bruce-s-beach--then-and-now" target="_blank" title="Opens in a new window">racial terrorism and eminent domain</a> seized the parkland and excluded African Americans from the space. With recent uprisings against police brutality and racial injustice, this site is now a <a href="https://www.youtube.com/watch?v=dzVmdjExc6E&ab_channel=BlackExcellence" target="_blank">battleground</a> for restitution, reparations, and occupation as evidenced by the recent <a href="https://www.nytimes.com/2020/06/19/us/ca-juneteenth-celebration.html" target=”_blank”>Juneteenth celebration.</a>',
            video: '',
            location: {
                center: [-118.41679, 33.89541],
                zoom: 16.70,
                pitch: 0,
                bearing: 68
            },
            onChapterEnter: [
              {
                layer:'bruceBeach',
                opacity:1
              }
            ],
            onChapterExit: [
              {
                layer:'bruceBeach',
                opacity:0
              }
            ]
        },
        {
            id: 'beach-line',
            title: 'The Right to the Beach Ecology.',
            image: 'images/collage.png',
            imageCredit: 'Chris Giamarino',
            description: 'The beach ecology is an ongoing site of commoning and undercommoning contesting both historical and contemporary processes of bordering. Thank you for taking this alternative journey through the beach ecology of Los Angeles.',
            location: {
                center: [-118.65301, 33.95435  ],
                zoom: 10.59,
                pitch: 3,
                bearing: 0
            },
            onChapterEnter: [
              {
                layer: 'coast',
                opacity: .7
              },
              {
                layer:'beach-locations',
                opacity:.7
              },
              {
                  layer: 'seczBeach',
                  opacity: 0
              },
              {
                  layer: 'bidBeach',
                  opacity: 0
              }
            ],
            onChapterExit: [
              {
                layer: 'beach-locations',
                opacity: 0
              },
              {
                  layer: 'seczBeach',
                  opacity: 0
              },
              {
                  layer: 'bidBeach',
                  opacity: 0
              }
            ]
        }
    ]
};
