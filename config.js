var config = {
    style: 'mapbox://styles/rr3006/ckq2sdhqq0pk919oaah6sbodk',
    accessToken: 'pk.eyJ1IjoicnIzMDA2IiwiYSI6ImNrcTJuc3VhOTBkZzQydWthMjAxZHlwMW0ifQ.XYlT9v5pyZ2eOHvzbml69Q',
    showMarkers: false,
    markerColor: '#3FB1CE',
    theme: 'dark',
    use3dTerrain: true,
    title: '',
    subtitle: '',
    byline: '',
    footer: 'Citations: [1] The Wire. “Did Chennai Learn Anything from the 2015 Floods?” Accessed June 9, 2021. [2] Ibid; “Chennai Floods: What Happened at Chembarambakkam, Negligence or Nature’s Fury? | The News Minute.” Accessed June 9, 2021; The Week. “Nivar Cyclone: Why Chembarambakkam Lake Brought Back Fears of 2015 Floods.” Accessed June 9, 2021.[3] “Chennai Water Shortage: How Chennai, One of the World’s Wettest Major Cities, Ran out of Water - The Economic Times.” Accessed June 9, 2021., [4] “Madras and the Environs - Digital Maps and Geospatial Data | Princeton University.” Accessed June 9, 2021., [5] Hall-Matthews, David (1996), "Historical Roots of Famine Relief Paradigms: Ideas on Dependency and Free Trade in India in the 1870s", Disasters, 20 (3): 216–230, [6] Ibid:4, [7] “North Chennai Coastal Areas Hit by Seawater Intrusion, Says Study - The Hindu.” Accessed June 17, 2021.[8] Govindarajan, Vinita. “Six Chennai Maps Spanning over a Century Explain Why the City Faces Flood Danger Each Year.” Text. Scroll.in. https://scroll.in. Accessed June 18, 2021.[9] The Wire. “We Parched the Country to Quench the City, and Chennai Still Cries for Help.” Accessed June 9, 2021.[10] Mitra, Sudeshna. 2018. "A ‘peripheries’ view of planning failures in Kolkata and Hyderabad." In Companion to Planning in the Global South, by Gautam Bhan, Vanessa Watson and Smita Srinivas, 79-90. Hyderabad: Orient BlackSwan.[11] Roy, Ananya. “Why India Cannot Plan Its Cities: Informality, Insurgence and the Idiom of Urbanization.” Planning Theory 8, no. 1 (February 1, 2009): 76–87. [12] “Judiciary and the Destruction of Chennai’s Wetlands | Economic and Political Weekly.” Accessed June 9, 2021.[13] “Varghese, Nina. “Adyar River Shows Signs of Recovery After Years of State Investment.” The Wire Science (blog), August 28, 2020.[14] Whitcomb, Theo. “In Chennai, River Restoration Lands Hardest on the Poor.” The Wire Science (blog), August 2, 2020.[15] Ibid.,[16] Srinivasan, Sudhir. “The Curious Case of OMR.” The Hindu, October 3, 2014, sec. Property Plus.[17] Ibid:12.,[18] SHEKHAR, SATYARUPA, and MADONNA THOMAS. “Chennai’s Rain Check Fifteen Years and Counting.” Economic and Political Weekly 50, no. 49 (2015): 19–21.[19] Jayaraman, Nityanand. “Chennai Floods Are Not a Natural Disaster – They’ve Been Created by Unrestrained Construction.” Text. Scroll.in.[20] Navya, K. V. “Tamil Nadu: Now, Open Space Reservation Lands Also Encroached.” Deccan Chronicle, February 28, 2018.',

    chapters: [
        {
            id: 'ecoparktitle',
            alignment: 'full',
            hidden: false,
            title: '',
            image: 'https://live.staticflickr.com/65535/51254116169_ca5ba0b69a_b.jpg',
            description: '',
            location: {
              center: {lon: 80.26247, lat: 13.05572},
              zoom: 10.46,
              pitch: 46.50,
              bearing: -16.00
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'poonga-intro',
            alignment: 'right',
            hidden: false,
            title: 'INTRODUCTION',
            image: 'https://lakesofindia.files.wordpress.com/2020/12/019pho0000752s5u00029000svc1.jpg',
            description: 'A 120-acre backwater estuary located at the mouth of the Adyar river and the Bay of Bengal, along the Coromandel coast, the Adyar Creek has long attracted migratory and resident birds. With low salinity and calm tidal flows, the creek has historically been a central location for fish trade and is lined with fishing villages.',
            location: {
                center: [80.26556, 13.01529],
                zoom: 14.28,
                pitch: 50,
                bearing: -25.60
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
            {
            layer: 'settlement-subdivision-label',
            opacity: 1,
            duration: 500
            },
            {
            layer: 'adyar-ecopark',
            opacity: 1,
            duration: 500
            }
            ],
            onChapterExit: []
        },
        {
            id: 'encroachment',
            alignment: 'center',
            hidden: false,
            title: 'ENCROACHMENT',
            image: 'https://img.etimg.com/thumb/width-640,height-480,imgsize-149231,resizemode-1,msid-51316258/news/chennai-flood-claims-at-rs-5000-crore-for-insurance-sector/chennai_bccl_sunday.jpg',
            description: 'In 1996, just five years after the liberalization of the economy, M.A.M Ramaswamy, the head of the influential business conglomerate—the Chettinad group, sought permission to construct a series of high-end housing towers along the northern edge of the estuarine lands. A violation of then building bylaws, the authorization of the project was challenged in court by a group of civil society organizations. Yet, as the CMDA had already sanctioned the construction. And in exchange for the sanction, Ramaswamy had already transferred 2321 sqm. of land under the Open Space Reservation (OSR) rules to the Corporation of Chennai. As the OSR lands had already been formally acquired the corporation, the court was forced to allow the project to proceed. This set a precedent for encroachments by other elite institutions—the Leela Palace Hotel, high-end housing projects and the Chettinad Vidyashram private school, along the fragile wetland. Later, during another round of juridical review prompted by citizen activists in 1997 on the grounds of public interest, the court sided with the project developer as the area“ booming with developmental activities.[12]',
            location: {
                center: [80.26923, 13.01585],
                zoom: 15.47,
                pitch: 46.00,
                bearing: 18.40
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
              {
              layer: 'mrc-encroachments',
              opacity: 1,
              duration: 500
              },
            ],
            onChapterExit: []
        },
        {
            id: 'marker-poonga',
            alignment: 'left',
            hidden: true,
            title: '',
            image: '',
            description: '',
            location: {
              center: {lon: 80.26923, lat: 13.01585},
              zoom: 15.47,
              pitch: 46.00,
              bearing: 18.40
            },
            markers: [
                {
                    latLong: [80.27393, 13.01725],
                    text: 'Leela Palace (2009)',
                    imagePath: '',
                },
                {
                    latLong: [80.26947, 13.01742] ,
                    text: 'Chettinad Vidyashram (1984)',
                    imagePath: '',
                },
                {
                    latLong: [80.27130, 13.01587],
                    text: 'Rani Meyammai Towers (1996)',
                    imagePath: '',
                },
                {
                    latLong: [80.27383, 13.01820],
                    text: 'One 74 (2015)',
                    imagePath: '',
                },
                {
                    latLong: [80.26093, 13.01650],
                    text: '',
                    imagePath: 'MGR Janaki College (1993)',
                },
                {
                    latLong: [80.26421, 13.01663],
                    text: 'Dr. Ambedkar Law University (1994)',
                    imagePath: '',
                },
                {
                    latLong: [80.26277, 13.01645],
                    text: 'Government College of Classical Music (1988)',
                    imagePath: '',
                }
            ],
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'conservation',
            alignment: 'right',
            hidden: false,
            title: 'CONSERVATION',
            image: 'https://cdn.thewire.in/wp-content/uploads/2019/04/17182050/Thrash-at-Elliots-Beach-during-Chennai-Floods-copy-1024x683.jpg',
            description: 'Although the problem of pollution and sedimentation in river date back to the 1960s, construction along its banks and lack of regulatory oversight in the 1990s meant that the creek began to closely resemble an open gutter. Moreover, state agencies, like Chennai Metropolitan Water Supply and Sewerage Board continued to dump untreated sewage into the river. As property values began to dip along the polluted river, a conservation effort was launched by the CMDA in 2006. To oversee this 36 billion rupee-project , the CMDA established the Chennai Rivers Restoration Trust (CRRT), to coordinate efforts between various public works departments.[13] ',
            location: {
                center: [80.26923, 13.01585],
                zoom: 15.47,
                pitch: 46.00,
                bearing: 18.40
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },

        {
            id: 'eviction',
            alignment: 'center',
            hidden: false,
            title: 'EVICTION',
            image: 'https://www.thehindu.com/news/cities/chennai/kxx63n/article25003234.ece/ALTERNATES/LANDSCAPE_1200/21THADYAR2',
            description: 'The restoration, hailed as a landmark effort in conservation, nevertheless was criticized by veteran environmentalists who saw it as a thinly veiled attempt to create a tourist attraction and privatize ‘poromboke’ or common land.[14] Unsurprisingly, much of the first phase of the project involved the displacement of slum dwellers along the banks, whose were marked as living in ‘objectionable locations’ or on low-lying flood-prone land. Further, their daily activities of ‘washing clothes in the creek’ and grazing their cows was seen as unsanitary, while young men were accused of causing mischief among the thickets. ‘“Is this restoration?” asked Vanessa Peter, a researcher at the Information and Resource Center for the Deprived Urban Communities (IRCDUC), a Chennai-based information clearinghouse for the city’s poor. “Or is this just another way of convincing everybody that we should get rid of our slums?”’[15] It was evident that rhetoric surrounding the project, targeted middle-class homeowners, who held slum-dwellers responsible for the ecological degradation of river.',
            location: {
                center: [80.26556, 13.01529],
                zoom: 14.28,
                pitch: 50,
                bearing: -25.60
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'enclosure',
            alignment: 'right',
            hidden: false,
            title: 'ENCLOSURE',
            image: 'https://live.staticflickr.com/65535/51256391789_b3e96fdfc3_b.jpg',
            description: 'Moreover CRRT, a division of the Tamil Nadu Government, seemed to be using ecological restoration as a front of development projects. The restoration of Adyar river, eventually gave way to the establishment of an eco-park, but simultaneously the CMDA had begun a large-scale issuance of construction permits for ‘new office buildings, multi-storied luxury residential complexes, and five-star hotels’ along the fragile ecology of the creek. The eco-park itself, meanwhile was a realized through a public-private partnership (P3), and is now no longer freely accessible by the public.',
            location: {
                center: [80.26556, 13.01529],
                zoom: 14.28,
                pitch: 50,
                bearing: -25.60
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'omr',
            alignment: 'full',
            hidden: false,
            title: '',
            image: 'https://live.staticflickr.com/65535/51255862723_5be3bb23ec_b.jpg',
            description: '',
            location: {
              center: {lon: 80.26247, lat: 13.05572},
              zoom: 10.46,
              pitch: 46.50,
              bearing: -16.00
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'omr-intro',
            alignment: 'right',
            hidden: false,
            title: 'INTRODUCTION',
            image: 'https://mediacdn.99acres.com/media1/14974/11/299491574M-1622787572480.jpg',
            description: 'Before the early 2000s, the landscape along the Old Mahabalipuram Road in South Chennai was primarily agricultural, populated mainly by villages, paddy fields, coconut groves and serviced by an intricate indigenous network of water infrastructure. But central to the ecology of the region were the then-5500-hectare Pallikaranai Marshes, situated around 30km inland and formed from the backwaters of the Bay of Bengal. Drained by the colonial Buckingham canal (1806), the marshland received freshwater through the rains and absorbed surplus run off from 31 sub-urban water tanks.   ',
            location: {
              center: [80.23015, 12.83913],
              zoom: 11.05,
              pitch: 32.00,
              bearing: -26.40
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
            {
            layer: 'omr',
            opacity: 1,
            duration: 500
            },
            {
            layer: 'wetlands (1)',
            opacity: 0.3,
            duration: 500
            }
            ],
            onChapterExit: []
        },
        {
            id: 'speculation',
            alignment: 'right',
            hidden: false,
            title: 'SPECULATION',
            image: 'https://is1-3.housingcdn.com/4f2250e8/ade33fa1729e361e7290d586ad5e943e/v0/large/doshi_risington-karappakam-chennai-doshi_housing.jpg',
            description: 'After liberalisation, policy reforms spurred regional governments to compete with each other—offering up tax incentives, land, power and water supply—to attract private investment to the IT sector. And Chennai’s Information Technology Corridor, a 45 km-expressway, that connects Madhya Kailash junction in the north to Thiruporur in the south—along the OMR became the site of such an initiative. between 2001 and 2008, the accelerated development of the IT corridor and contiguous luxury real-estate market along the OMR opened the surrounding agrarian land to massive speculation. The arrival of IT conglomerates housed within Special Economic Zones (SEZs), resulted in a real estate boom, with around 10,000 to 12,000 housing units being sold every year, and by the mid-2000s, a buyer could resell property purchased along the stretch for 2-3 times its original price.[16] but by 2014 the speculative bubble burst, falling demand due to flooding and water scarcity means that today 43% of rental units in OMR lie vacant.',
            location: {
              center: [80.23015, 12.83913],
              zoom: 10.95,
              pitch: 32.00,
              bearing: -26.40
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
              {
              layer: 'sezs-and-it-case1',
              opacity: 0.8,
              duration: 500
              },
            ],
            onChapterExit: [
              {
              layer: 'sezs-and-it-case1',
              opacity: 0,
              }
            ]
        },
        {
            id: 'marker-omr',
            alignment: 'left',
            hidden: true,
            title: '',
            image: '',
            description: '',
            location: {
              center: [80.23015, 12.83913],
              zoom: 10.95,
              pitch: 32.00,
              bearing: -26.40
            },
            markers: [
                {
                    latLong: [80.25031, 12.98937],
                    text: 'ELNET',
                    imagePath: '',
                },
                {
                    latLong: [80.24885, 12.98956],
                    text: 'Tidel Park',
                    imagePath: '',
                },
                {
                    latLong: [80.22536, 12.90688],
                    text: 'WIPRO',
                    imagePath: '',
                },
                {
                    latLong: [80.24630, 12.99057],
                    text: 'Ramanujam IT city',
                    imagePath: '',
                },
                {
                    latLong: [80.22297, 12.83111],
                    text: 'SIPCOT IT park',
                    imagePath: '',
                },
                {
                    latLong: [80.22315, 12.87321],
                    text: 'Sathyabama University',
                    imagePath: '',
                },
                {
                    latLong: [80.22441, 12.87128],
                    text: 'St Joseph College of Engineering',
                    imagePath: '',
                },
                {
                    latLong: [80.19588, 12.75180],
                    text: 'SSN College of Engineering',
                    imagePath: '',
                },
                {
                    latLong: [80.21857, 12.83562],
                    text: 'Mohamed Sathak A.J College of Engineering',
                    imagePath: '',
                },
                {
                    latLong: [80.22056, 12.86611],
                    text: 'Jeppiar Engineering College',
                    imagePath: '',
                },
                {
                    latLong: [80.20330, 12.89850],
                    text: 'TNSCB Housing Perumbakkam',
                    imagePath: '',
                },
                {
                    latLong: [80.24012, 12.92961],
                    text: 'TNSCB Housing Kannagi Nagar',
                    imagePath: '',
                }
            ],
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
              {
              layer: '2000-2014-chennai-sriperumbud-az6kcy',
              opacity: 1,
              duration: 500
              }
            ],
            onChapterExit: []
        },
        {
            id: 'enclosure-omr',
            alignment: 'center',
            hidden: false,
            title: 'ENCLOSURE',
            image: 'https://www.indiawaterportal.org/sites/default/files/styles/node_lead_image/public/iwp/img_3089.jpg?itok=Wn3Ie_dV',
            description: 'While the boom-and-bust cycles of speculative real estate are hardly new, and OMR is no different, what stands out here is the definitive role played by the state and judiciary in wetland acquisition for the development of the economic corridor. Consider for instance the case of Okkiyam Thoraippakam along the OMR, a heavily tank-irrigated neighbourhood. When the state-led land acquisition of a village tank for the BSR shopping mall was attempted the gram-sabha took the state to court. Although the court agreed on the importance of the tank itself, it created a new distinction in protections for artificial versus natural waterbodies and allowed the acquisition to proceed. This judgement immediately paved the way for the dismantling of dozens of tanks and ponds in an urban region-which recieves less than 30 days of contributing rainfall annually.[17]',
            location: {
              center: [80.23863, 12.93466],
              zoom: 14.40,
              pitch: 32.00,
              bearing: 0.00
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
              {
              layer: 'settlement-subdivision-label',
              opacity: 1,
              duration: 500
              }
            ],
            onChapterExit: []
        },
        {
            id: 'kannagi',
            alignment: 'full',
            hidden: false,
            title: '',
            image: 'https://live.staticflickr.com/65535/51254929097_252231381e_b.jpg',
            description: '',
            location: {
              center: [80.23863, 12.93466],
              zoom: 14.40,
              pitch: 32.00,
              bearing: 0.00
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
              {
              layer: 'settlement-subdivision-label',
              opacity: 1,
              duration: 500
              }
            ],
            onChapterExit: []
        },
        {
            id: 'intro-k',
            alignment: 'right',
            hidden: false,
            title: 'INTRODUCTION',
            image: 'https://www.thenewsminute.com/sites/default/files/styles/news_detail/public/Kannagi%20Nagar%20main%20750.jpg?itok=8PQgpREm',
            description: 'A resettlement colony, comprised of multistorey tenements occupied by fishing families displaced after the 2004 tsunami, and slum dwellers evicted from along various waterways, including the Buckingham Canal, the Cooum, and Adyar Estuary, the case of Kannagi Nagar can only be discussed within the rubric of uneven development, which characterises the growth of the OMR. ',
            location: {
              center: [80.24091, 12.93285],
              zoom: 14.59,
              pitch: 48.00,
              bearing: 0.00
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
              {
              layer: 'settlement-subdivision-label',
              opacity: 1,
              duration: 500
            },
            {
            layer: 'kannagi-nagar',
            opacity: 1,
            duration: 500
            },
            ],
            onChapterExit: []
        },
         {
                    id: 'eviction',
                    alignment: 'left',
                    hidden: false,
                    title: 'EVICTION',
                    image: 'https://images.citizenmatters.in/wp-content/uploads/sites/3/2017/07/29142852/Buckingham-2-678x381.jpg',
                    description: 'The ongoing restoration efforts centring around rivers and wetlands that lie at the heart of the city, have devastating effect on informal settlement dwellers whose houses line these waterways. Built on public land or poromboke, many of these colonies date back almost half a century; although the ramshackled huts of half-baked bricks give little sense of permanence. Carried out by multiple public agencies—the Chennai Rivers Restoration Trust (CRRT), the state Public Works Department (PWD), and the Tamil Nadu Slum Clearance Board (TNSCB)—neighbourhood clearance efforts often precede housing schemes leaving evictees to fend for themselves—often for years.  But it should be mentioned that many despite the precarity of informality, many vulnerable communities belong to powerful voting blocks and have leveraged their political power to stave off eviction for decades. Yet the heightened frequency of flood events, especially that of 2015, have made shaken the resolve of some.',
                    location: {
                      center: [80.24091, 12.93285],
                      zoom: 14.59,
                      pitch: 48.00,
                      bearing: 0.00
                    },
                    mapAnimation: 'flyTo',
                    rotateAnimation: false,
                    callback: '',
                    onChapterEnter: [
                      {
                      layer: 'settlement-subdivision-label',
                      opacity: 1,
                      duration: 500
                    },
                    {
                    layer: 'kannagi-nagar',
                    opacity: 1,
                    duration: 500
                    },
                    ],
                    onChapterExit: []
                },
        {
            id: 'housing',
            alignment: 'center',
            hidden: false,
            title: 'PUBLIC HOUSING',
            image: 'https://live.staticflickr.com/65535/49633509062_63b1287b1d_b.jpg',
            description: 'The CRRT- driven evictions, amongst others, have relocated residents on the periphery of the city often on land given to flooding—a reoccurrence that has riled environmentalists and housing advocates alike. Take for example the following dispute on the issue of landuse: a few years after the start of eco-restorative projects, the reclassification of a defunct wetland in OMR for the purpose of construction of Tamil Nadu Slum Clearance Board (TNSCB) housing at Kannagi Nagar for evicted slum dwellers, was legally challenged by Thoraipakkam’s ward councillor— in the case, Susetha v The Union of India 2010.[18] The councillor believed that although changes in landuse classifications were warranted in many cases, there seemed to be little rational behind this particular change. Moreover, given the push within the city to restore wetlands, the siting of public housing on a low-lying flood plain was against regulations. Here it important to note that: ‘In Tamil Nadu all useful lands are categorised as wet and dry, while some marshlands were categorised as ‘waste wetlands’, a colonial relic aimed at grading land revenue. This ‘subcategory’ allowed the court, in this case to rule in favour of land acquisition, claiming that it was in the public interest to resettle the slum dwellers on a flood plain. In this specific case, Kannagi Nagar eventually blocked the drainage of the Okkiyam Maduvu channel,  a critical channel of the Pallikarnai wetlands.[19]',
            location: {
              center: [80.24091, 12.93285],
              zoom: 14.59,
              pitch: 48.00,
              bearing: 0.00
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
              {
              layer: 'settlement-subdivision-label',
              opacity: 1,
              duration: 500
            },
            {
            layer: 'kannagi-nagar',
            opacity: 1,
            duration: 500
            },
            ],
            onChapterExit: []
        },
        {
            id: 'conclusion',
            alignment: 'center',
            hidden: false,
            title: 'CONCLUSION',
            image: '',
            description: 'Rather than summarise that Chennai’s ecological crisis is self-inflicted, it would be more helpful to see the factors motivating the indiscriminate enclosure of wetland infrastructure as symptomatic of how the local terrain of the city has been remade due to global capital and modernity—which has produced a shift in how, as Arturo Escobar points out, “nature is produced and known, especially when interacting with social systems established by capital and technoscience.” The culture of competitive incentivizing to attract investment means cities—and Chennai is no exception— need ready land to quickly offer up for speculation and development. Regulatory mechanisms are seen as growth deterrents and land acquisition within wetlands is easier as there are no competing ownership claims in a land market which otherwise is rift with land fragmentation and complex political claims. Simultaneously, there is a progressive weakening of regulatory mechanisms, either through increasing dilution of planning guidelines or arbitrary juridical application in ways that often frames private profit as ‘development’ in the public interest. This encourages municipalities to game the system, exploiting ownership ambiguity or erstwhile colonial land-use categories to avail of land for development. For example, the Open Space Reserve (OSR) rules of the CMDA, which states that large land purchases by private developers must be accompanied by a transfer of 10% of the total land parcel to municipalities, was originally aimed at creating public parks and lowering urban density.[20] But progressively, the OSR clause continues to be used as a tool for easy land acquisition by the state for a host of uses.',
            location: {
              center: [80.21603, 13.09314],
              zoom: 9.46,
              pitch: 0.00,
              bearing: 0.0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        }
    ]
};
