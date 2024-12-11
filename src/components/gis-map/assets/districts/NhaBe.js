// Chỉnh tên đia điểm
const name = "Huyện Nhà Bè";
// Chỉnh số dân ở đây
const population = 175360;
// Chỉnh diện tích ở đây
const area = 100.43;
const symbol = {
  // Chỉnh vùng màu ở chỗ này
  color: [248, 152, 128, 0.4],
};

const rings = [
  //bắt đầu ranh giới cần giờ - nhà bè
  [106.77618326245297, 10.674680552668885],
  [106.7715444100586, 10.666297514009404],
  [106.77128176835971, 10.666085213512533],
  [106.77007104435647, 10.665675943370312],
  [106.7687313804887, 10.665329367353165],
  [106.76771482589166, 10.665194806482578],
  [106.76593349734766, 10.665095432945938],
  [106.76436275612923, 10.665341390952507],
  [106.76348713380558, 10.665621384428274],
  [106.76236984863817, 10.665898971675459],
  [106.76130191035475, 10.666258653011079],
  [106.75585437701432, 10.668778004132992],
  [106.75581480010467, 10.668793939847454],
  [106.75581480010467, 10.668793939847454],
  [106.75291242804754, 10.669978303210382],
  [106.75237674173664, 10.67013939707841],
  [106.75209733212544, 10.670223366237527],
  [106.75178765378206, 10.670316498195229],
  [106.75169157125534, 10.670345517260198],
  [106.7512551763583, 10.670476695085236],
  [106.75124491264255, 10.670479597738698],
  [106.75117066666103, 10.670493991836514],
  [106.75083655309044, 10.67055919340661],
  [106.75076818295403, 10.670572747716493],
  [106.75054724193619, 10.67061548776956],
  [106.75044953979769, 10.67063444481669],
  [106.75036640834398, 10.670645724306105],
  [106.74943747371535, 10.670768858830582],
  [106.7490513482365, 10.670797995260132],
  [106.74857550024663, 10.670833152153012],
  [106.7482577981377, 10.67085731351608],
  [106.74714176193987, 10.670837867268714],
  [106.74710354082545, 10.670840941564053],
  [106.74597917460792, 10.670817366703524],
  [106.74585385653607, 10.67081549528436],
  [106.74505949611367, 10.670666460670075],
  [106.74468663657503, 10.670596466798282],
  [106.74328018203532, 10.670134170123486],
  [106.74257308140946, 10.66978679221918],
  [106.74182278844361, 10.6694179996622],
  [106.74152937468449, 10.669226643273218],
  [106.74116931693804, 10.668991727161186],
  [106.740929232383, 10.668801476065376],
  [106.74003663107266, 10.668095101959052],
  [106.73899869214344, 10.666339182044199],
  [106.73863897163675, 10.665439862955555],
  [106.73837770640509, 10.664451838279145],
  [106.73839241271592, 10.663138977328973],
  [106.7385344584724, 10.662265756165372],
  [106.7385336674303, 10.662269805258292],
  [106.73905148851254, 10.660608576042089],
  [106.73946950078702, 10.659267113109532],
  [106.73979552955528, 10.65853258026071],
  [106.74082569164821, 10.656756113507631],
  [106.74200435028887, 10.655152411641662],
  [106.74505344502796, 10.652006953425595],
  [106.74775530502207, 10.649937032078023],
  [106.74890731631031, 10.64930383030949],
  [106.75045892082225, 10.648617756030838],
  [106.75314919022334, 10.647772372557307],
  [106.75348601067817, 10.647671689461092],
  [106.7541729164012, 10.6474859187663],
  [106.75782695403461, 10.646497684430663],
  [106.76126294039865, 10.645470912911671],
  [106.7623060704571, 10.64504509921749],
  [106.763361739395, 10.64452432109281],
  [106.76395508619461, 10.644201130394938],
  [106.765541155677, 10.64332626081983],
  [106.76778689485445, 10.641710259971841],
  [106.76875086462167, 10.640541272506148],
  [106.76888213098177, 10.64037553373081],
  [106.7691568616096, 10.640009492246747],
  [106.77035370872568, 10.638414866171194],
  [106.77083897402481, 10.637221236571888],
  [106.77127358562483, 10.635954285918553],
  [106.7714020351573, 10.635096315137524],
  [106.77146338193701, 10.633845120489958],
  [106.7714707256901, 10.633697722693281],
  [106.77147469923607, 10.633612471373096],
  [106.77142946817959, 10.632407808462167],
  [106.77142272041105, 10.632218950581173],
  [106.77142238644461, 10.63221857665318],
  [106.7714223772769, 10.632218108116906],
  [106.77100816870228, 10.62890277540994],
  [106.77061079426262, 10.625731772672278],
  [106.77032084262234, 10.624389024325737],
  [106.77032084262234, 10.624389024325737],
  [106.76997139264844, 10.622770682555736],
  [106.77050796883039, 10.61695730569291],
  [106.77080802944926, 10.615888351996352],
  [106.77122278420026, 10.614747037915194],
  [106.77571124814924, 10.608322585179424],
  [106.7774902230841, 10.60583080308656],
  [106.779110562304, 10.60365173488904],
  [106.77985584332401, 10.602384786904304],
  [106.7804682063418, 10.60125045351525],
  [106.78102692662485, 10.600102544046738],
  [106.78214484495736, 10.597302717126823],
  [106.78270404846698, 10.595723127349103],
  [106.7828120964888, 10.595291511354526],
  [106.78297202147424, 10.594614259105505],
  [106.7830953833853, 10.593772812363836],
  [106.78327805811166, 10.590904166510118],
  [106.78364130692256, 10.586457932523455],
  [106.78365331313059, 10.585300572443757],
  [106.78360093614094, 10.584583636610738],
  [106.78341995836486, 10.583633390584154],
  [106.78338593491503, 10.583545297187392],
  [106.78319570880383, 10.583052834240572],
  [106.7828659464495, 10.582461041757798],
  [106.78263278409293, 10.581935246290573],
  [106.78184570565446, 10.580465930532528],
  [106.78097630605313, 10.5795380287166],
  [106.77887945363126, 10.578115582737405],
  [106.77750711012241, 10.577007323219723],
  [106.77607858615958, 10.576634492575089],
  [106.77572724732288, 10.576546136047842],
  [106.77478672176751, 10.576341805943015],
  [106.77365466942057, 10.576232172954075],
  [106.77127561517364, 10.576239077330307],
  [106.76719945774173, 10.577256714032],
  [106.76470230746483, 10.578677067213468],
  [106.7631012015873, 10.579577886320438],
  [106.76120444621462, 10.580522279204134],
  [106.75984601677308, 10.580862419020436],
  [106.75814520264547, 10.580754388554366],
  [106.75622115309721, 10.58053348212896],
  [106.75418141550757, 10.580427358696456],
  [106.75187893232626, 10.579848995360084],
  [106.74993929624408, 10.57892312711408],
  [106.74704754046006, 10.577923666924656],
  //kết thúc ranh giới cần giờ - nhà bè

  //bắt đầu ranh giới riêng
  [106.74239281639159, 10.577758989728764],
  [106.74186845959072, 10.578606863165316],
  [106.74117364434613, 10.578805899746184],
  [106.74069547772517, 10.57875646246626],
  [106.73925875993132, 10.57856171937651],
  [106.73895230934122, 10.578489246449678],
  [106.7386097334529, 10.578381372028694],
  [106.73814971299777, 10.578183630956001],
  [106.73788745503404, 10.577965086404319],
  [106.73774297787153, 10.577803273641013],
  [106.73759982675222, 10.577559734895424],
  [106.73749950040816, 10.577477228448762],
  [106.7373274229506, 10.577172526788788],
  [106.73697334076154, 10.576919091961116],
  [106.73668844034944, 10.576874515502773],
  [106.73626925762649, 10.57691931064864],
  [106.7356739453141, 10.577147315067434],
  [106.73531336037892, 10.57745017772419],
  [106.73507886468799, 10.577867549499487],
  [106.73494437891513, 10.578402083586436],
  [106.73500182956724, 10.578673175009154],
  [106.73509840695418, 10.578862484585553],
  [106.73531437854018, 10.579044360130329],
  [106.73572184503588, 10.579226368678242],
  [106.73646078979247, 10.579446440914381],
  [106.7367736831073, 10.579665124361407],
  [106.73699630123679, 10.579926289523199],
  [106.73716647766064, 10.580103881242561],
  [106.73747631898317, 10.580379805737907],
  [106.73804039589638, 10.580693042084318],
  [106.73880490553087, 10.581170006097096],
  [106.73889093207693, 10.581223289064539],
  [106.73918726401548, 10.581521034741098],
  [106.73940781794758, 10.582000082663722],
  [106.7395996575903, 10.582742938960255],
  [106.73967467646281, 10.583292758940718],
  [106.7396464774466, 10.583483725648014],
  [106.73960485389428, 10.583682873400793],
  [106.73910075128387, 10.58498273446227],
  [106.73895999110485, 10.585217363183412],
  [106.7387076507739, 10.585460623290034],
  [106.73787479208677, 10.585993547381513],
  [106.73763235229059, 10.586106423210051],
  [106.73729478227528, 10.586223861640981],
  [106.73689379192523, 10.58632285964747],
  [106.73642732972877, 10.586325433884731],
  [106.73595156766368, 10.586244984707209],
  [106.735779902413, 10.586178811333602],
  [106.7355474899904, 10.586049447363568],
  [106.73535897999558, 10.585893287181758],
  [106.73525168555206, 10.585639669159823],
  [106.73516328599754, 10.585404924656249],
  [106.73509322625065, 10.585202502631962],
  [106.73497188524381, 10.585057847674971],
  [106.73487539098309, 10.584976271028228],
  [106.73486116250264, 10.584933126925396],
  [106.73489770639564, 10.584751379893591],
  [106.73505946, 10.58444159],
  [106.73509132784817, 10.584310829871661],
  [106.73507828, 10.58420317],
  [106.73504073, 10.58411157],
  [106.73507828, 10.58420317],
  [106.73504073, 10.58411157],
  [106.73484154, 10.58385878],
  [106.73481855, 10.58382093],
  [106.73479572, 10.58374468],
  [106.7347832, 10.58342416],
  [106.7348087, 10.58325599],
  [106.7348318, 10.58320558],
  [106.73491548, 10.58308803],
  [106.73506765, 10.58293615],
  [106.73508866, 10.58285525],
  [106.73508928, 10.58285426],
  [106.73508681, 10.582692],
  [106.73506526, 10.58259866],
  [106.7349019, 10.58239987],
  [106.73490214, 10.5823998],
  [106.73490262, 10.58239933],
  [106.73483019, 10.58224151],
  [106.73483407, 10.5821186],
  [106.73486431, 10.58199329],
  [106.73485852, 10.58193914],
  [106.73482026, 10.5819065],
  [106.73474237, 10.58189707],
  [106.73463371, 10.58190103],
  [106.73455303, 10.58189429],
  [106.734553, 10.58189354],
  [106.73449009, 10.58186986],
  [106.73444154, 10.58183029],
  [106.73440276, 10.58177492],
  [106.73437551, 10.5816738],
  [106.73437551, 10.5816738],
  [106.7343434, 10.58158997],
  [106.73429499, 10.58155563],
  [106.73423311, 10.58153206],
  [106.73415237, 10.58152018],
  [106.73397217, 10.58148738],
  [106.73387383, 10.58142123],
  [106.73374957, 10.58130552],
  [106.73356855, 10.58124362],
  [106.73350135, 10.58119513],
  [106.7335013, 10.5811947],
  [106.73345851, 10.58111034],
  [106.73344217, 10.58101657],
  [106.73331819, 10.58085124],
  [106.73326817, 10.58078413],
  [106.73325121, 10.58076116],
  [106.73323137, 10.58072574],
  [106.73317968, 10.58064494],
  [106.73308739, 10.5805491],
  [106.7330633, 10.58052409],
  [106.73298075, 10.58041562],
  [106.73296071, 10.58038901],
  [106.73291402, 10.58021414],
  [106.73287632, 10.58014787],
  [106.73284164, 10.58012821],
  [106.73264903, 10.58015186],
  [106.73255159, 10.58013735],
  [106.73245706, 10.58006184],
  [106.73224621, 10.57992106],
  [106.73208452, 10.57985517],
  [106.73189102, 10.57976987],
  [106.73181734, 10.57973613],
  [106.73162574, 10.57966934],
  [106.73149845, 10.57966096],
  [106.73135219, 10.57965087],
  [106.73133124, 10.57964947],
  [106.73119098, 10.57964745],
  [106.73110001, 10.57964547],
  [106.73088284, 10.57967858],
  [106.73072786, 10.57968883],
  [106.73070407, 10.57969072],
  [106.73056903, 10.57968238],
  [106.73042177, 10.57967348],
  [106.73023315, 10.57966672],
  [106.72966954, 10.57985869],
  [106.7294088, 10.57986465],
  [106.72908544, 10.57978004],
  [106.72895871, 10.5797859],
  [106.72885552, 10.57982504],
  [106.72874834, 10.5799105],
  [106.72861977, 10.58006177],
  [106.72858189, 10.58012799],
  [106.72850922, 10.58030243],
  [106.72848472, 10.58044987],
  [106.72843412, 10.58072733],
  [106.7283573, 10.58098252],
  [106.72822704, 10.58118955],
  [106.72818642, 10.58125448],
  [106.7280835, 10.58139975],
  [106.72806645, 10.58142335],
  [106.72792443, 10.58156574],
  [106.72779501, 10.58169557],
  [106.72775038, 10.5817408],
  [106.72767735, 10.58183438],
  [106.72762067, 10.58194262],
  [106.72757635, 10.58202755],
  [106.72755241, 10.58212519],
  [106.72752987, 10.58221685],
  [106.72749945, 10.58233522],
  [106.72746527, 10.58246151],
  [106.72743505, 10.5825729],
  [106.72737936, 10.58277769],
  [106.72717558, 10.58340149],
  [106.72686717, 10.5839325],
  [106.72681601, 10.58403701],
  [106.726736, 10.58424544],
  [106.72670711, 10.58436757],
  [106.72671927, 10.58444764],
  [106.72675934, 10.58454022],
  [106.7269002, 10.58470979],
  [106.72714532, 10.58487581],
  [106.72726113, 10.58499246],
  [106.72731276, 10.5850688],
  [106.72733783, 10.58512819],
  [106.72734195, 10.58519912],
  [106.72733375, 10.58528195],
  [106.72730376, 10.5853884],
  [106.72729894, 10.58540644],
  [106.72725099, 10.58546825],
  [106.72720102, 10.58551716],
  [106.72712563, 10.58555025],
  [106.72701467, 10.58556741],
  [106.72698751, 10.58551011],
  [106.72693642, 10.5854575],
  [106.72686669, 10.58538519],
  [106.72675821, 10.58531936],
  [106.72671846, 10.58529519],
  [106.7266637, 10.58526909],
  [106.72654955, 10.58521397],
  [106.72649159, 10.58518581],
  [106.72629048, 10.58508867],
  [106.72624947, 10.58506892],
  [106.72602755, 10.58501385],
  [106.72582604, 10.58503612],
  [106.72568048, 10.58507034],
  [106.72552972, 10.58515189],
  [106.7253841, 10.58526025],
  [106.72526284, 10.58534972],
  [106.72515459, 10.58544272],
  [106.72510311, 10.58548715],
  [106.72500374, 10.58559094],
  [106.7249507, 10.58564616],
  [106.72488006, 10.58574674],
  [106.72465146, 10.5860932],
  [106.72455433, 10.58650319],
  [106.72442197, 10.58695756],

  //here temp
  [106.71922623, 10.60548173],
  [106.73262018, 10.61017579],
  [106.73018037, 10.62853445],
  [106.7333779, 10.62931081],
  [106.72258704, 10.64575423],
  [106.7084062, 10.65009411],
  [106.69073111, 10.64990959],
  [106.68574958, 10.65669493],
  //here temp

  //kết thúc ranh giới riêng
  //bắt đầu ranh giới nhà bè - bình chánh
  [106.68548043482873, 10.657032266453227],
  [106.68513173652448, 10.65819022528938],
  [106.68494691032086, 10.659652349383368],
  [106.68467454692562, 10.660740751937068],
  [106.6844749456533, 10.661159569732876],
  [106.68420517278979, 10.661572352554874],
  [106.68357289309169, 10.661986434105629],
  [106.68246409052341, 10.662257389468836],
  [106.68136214781097, 10.662452605575092],
  [106.68055299700676, 10.662757365600203],
  [106.67994022995379, 10.663178124015776],
  [106.67958500489732, 10.663487568582896],
  [106.67926058988347, 10.66389457650971],
  [106.67894398902986, 10.664471407094174],
  [106.67863272066697, 10.665423593480694],
  [106.67841942043137, 10.668621691538402],
  [106.67842119008412, 10.668688594079118],
  [106.67842955430648, 10.668985236499498],
  [106.67845680989853, 10.669984648876778],
  [106.67862062109904, 10.670824086015989],
  [106.67867433534691, 10.671573976342959],
  [106.67874678406181, 10.671830457047827],
  [106.67935848031016, 10.673244661386233],
  [106.67988957343492, 10.674096611615969],
  [106.67997644435957, 10.674235480363588],
  [106.6800431332213, 10.674335116554468],
  [106.68115934894281, 10.676004931219056],
  [106.68138733865057, 10.676780876463889],
  [106.68143707503826, 10.677314283899962],
  [106.68139022611267, 10.678071182410743],
  [106.68110830612183, 10.679207448920998],
  [106.68064867005297, 10.680167894306745],
  [106.67976066960142, 10.6817773999239],
  [106.67927127864074, 10.682405905872955],
  [106.67835873364535, 10.683251161568554],
  [106.67753531424357, 10.683875660992417],
  [106.67686335239205, 10.684500531339983],
  [106.67635459517899, 10.685175639807913],
  [106.67635572924783, 10.685166070599832],
  [106.67599962817157, 10.685824465012766],
  [106.67584068739465, 10.686215274407754],
  [106.67581658398238, 10.686498880674273],
  [106.67584857716247, 10.68683391626257],
  [106.67591825109245, 10.687754041816873],
  [106.67589558299358, 10.68833187243891],
  [106.67576016142397, 10.688947881773576],
  [106.6755913656852, 10.689348274927378],
  [106.67488795170833, 10.690358330734762],
  [106.67345325441407, 10.691786426948651],
  [106.6733140702881, 10.692035046293727],
  [106.67324433668901, 10.692295834493823],
  [106.67321064241621, 10.692615039948587],
  [106.67327785315452, 10.693045759973607],
  [106.67359412310302, 10.694061931290937],
  [106.6737993996894, 10.69558421023762],
  [106.6737605655492, 10.69828582790343],
  [106.67442166982278, 10.701873932455337],
  [106.67436415545062, 10.70232613333372],
  [106.67420295901063, 10.702741383806332],
  [106.6734548852848, 10.703585663659805],
  [106.67334229406104, 10.703838696793573],
  [106.67332600238935, 10.703997821561254],
  [106.67340684112193, 10.704289708026455],
  [106.67355187476396, 10.704562126634759],
  [106.67402519232117, 10.705129611491047],
  [106.67459836678003, 10.705644165969993],
  [106.6764400539375, 10.708879597991826],
  [106.67672046166403, 10.709696816551629],
  [106.67730244736455, 10.709630838606326],
  [106.67753107421011, 10.709580636909028],
  [106.67786729274854, 10.709582068673223],
  [106.67813528780849, 10.709664914391293],
  [106.67825441730541, 10.709900369772553],
  [106.67840341485037, 10.710471987580537],
  [106.67844614437493, 10.710910339689264],
  [106.67845039438924, 10.711110742575077],
  [106.67856873389229, 10.711408483934566],
  [106.67865170375379, 10.711583513440079],
  [106.67876508260626, 10.711709505003762],
  [106.67884056882905, 10.711793102567404],
  [106.67939903847761, 10.712506465135442],
  [106.67979681223649, 10.71310125119613],
  [106.67997517252522, 10.713411356591141],
  [106.68023264491681, 10.713713846714795],
  [106.68050991214324, 10.71406841456123],
  [106.68098503071504, 10.714441700728038],
  [106.68110557715478, 10.714460170743775],
  [106.68148631126925, 10.71425442762551],
  [106.68193360375129, 10.714002055230006],
  [106.6825234401421, 10.713745934338872],
  [106.68354677102295, 10.713400557808992],
  [106.68400890427422, 10.713145102343521],
  [106.68442632239764, 10.712844371019484],
  [106.68549217678675, 10.71175237767213],
  [106.68585376235619, 10.711636418728625],
  [106.68635914040475, 10.711546721988192],
  [106.68648128347589, 10.711556964148553],
  [106.68635938704821, 10.711546559781596],
  [106.68648128347589, 10.711556964148553],
  [106.68682741181192, 10.711601983164988],
  [106.68794819838566, 10.7120184095343],
  [106.68846849145442, 10.712059377439408],
  [106.68880230056716, 10.71202757526827],
  [106.68876758087367, 10.71259057005815],
  [106.68851187286091, 10.714291682936542],
  [106.68836509127516, 10.714897323068616],
  [106.68850740040173, 10.715812872812803],
  [106.6889056913427, 10.716993497270513],
  [106.6893428652207, 10.718027271234973],
  [106.68942077828467, 10.71849184403318],
  [106.68940312783023, 10.719184233413287],
  [106.68897146636523, 10.720372084364941],
  [106.68887755886676, 10.720938648993647],
  [106.68901954208718, 10.721834907797016],
  [106.68936775518057, 10.722847476653286],
  [106.68943446959793, 10.723022010655173],
  [106.6899184466869, 10.724234585403945],
  [106.69021153336051, 10.725156376344234],
  //kết thúc ranh giới nhà bè - bình chánh
  //bắt đầu ranh giới quận 7 - nhà bè
  [106.6902456282027, 10.72539298086714],
  [106.69150754080431, 10.725394408895545],
  [106.69231781884464, 10.725499694737447],
  [106.69283562164227, 10.725485682237329],
  [106.69413237648344, 10.725227120306366],
  [106.6953062061077, 10.724841681742776],
  [106.69629611356952, 10.724679359818934],
  [106.69699622653263, 10.724540083589742],
  [106.69837413319479, 10.72426367691363],
  [106.69942518670246, 10.724312356493016],
  [106.70026802768727, 10.724437993643672],
  [106.70299709732113, 10.72524560199844],
  [106.7038482255866, 10.725316517861053],
  [106.70499536012933, 10.725304519494665],
  [106.70541990841592, 10.725258546517113],
  [106.70587404181111, 10.72511997397913],
  [106.70642828269656, 10.724879580716626],
  [106.7066214629302, 10.724735487600384],
  [106.7070273458971, 10.724250012319503],
  [106.70721991147467, 10.72394666729438],
  [106.70743973559752, 10.723241049264475],
  [106.70746520709417, 10.7218591157296],
  [106.70750550560219, 10.721008536435773],
  [106.70758519126369, 10.720656765431748],
  [106.70780644607817, 10.720195320725738],
  [106.70811842552772, 10.719815239767184],
  [106.70837058692486, 10.719646568919423],
  [106.70863088252456, 10.71957028211254],
  [106.70912787774081, 10.719732341356673],
  [106.70952710007971, 10.719942549730373],
  [106.70979475002176, 10.720140410861612],
  [106.71044970746254, 10.720452920849382],
  [106.7108060280713, 10.72056900867442],
  [106.7111311484767, 10.720617919296359],
  [106.71174592318523, 10.720636410579347],
  [106.71219935475327, 10.720546343201713],
  [106.71398677658135, 10.720098488376856],
  [106.71741175628476, 10.719077286219651],
  [106.71768005878549, 10.71904689899686],
  [106.71822050896382, 10.719146623008339],
  [106.71901470105297, 10.71978178059115],
  [106.71924430052935, 10.720125878182323],
  [106.71939561683585, 10.720671947491375],
  [106.71951904054482, 10.721026643865466],
  [106.71983956840022, 10.721622796574165],
  [106.7201600360426, 10.7219731145799],
  [106.72036586591828, 10.722149751902661],
  [106.72076626744855, 10.72242841438689],
  [106.72110000513015, 10.722356118413677],
  [106.72123728414593, 10.722326562755736],
  [106.72138108909536, 10.722291659086661],
  [106.72138108909536, 10.722291659086661],
  [106.72210681221758, 10.722107461930651],
  [106.72257056587426, 10.721978152039144],
  [106.72289690157601, 10.72187055323199],
  [106.72354878639695, 10.721653508087597],
  [106.72417353630982, 10.72130315908302],
  [106.72478563041652, 10.720828280811732],
  [106.72495839925425, 10.719810536910867],
  [106.72475999875793, 10.718691011673243],
  [106.72373515137933, 10.71736349039829],
  [106.7230567963726, 10.716044777673954],
  [106.72300327543749, 10.71548764795606],
  [106.7233627158333, 10.71438064254563],
  [106.72418753161611, 10.71325526974095],
  [106.72504432119985, 10.712354357592769],
  [106.72522829330492, 10.712104714084989],
  [106.7255476945815, 10.711322799063673],
  [106.72567106471155, 10.710908199400624],
  [106.72578880836018, 10.710081841281074],
  [106.72543562166796, 10.708260323167966],
  [106.72479476997692, 10.70626940807706],
  [106.7247010073373, 10.705282842829195],
  [106.72491604522612, 10.70454524314435],
  [106.7258775028063, 10.702222561204488],
  [106.72610385722054, 10.701114161623817],
  [106.72611051398778, 10.700293685208596],
  [106.72616979060312, 10.699783153544741],
  [106.72628024209193, 10.699683484237658],
  [106.7271188387187, 10.698951625610725],
  [106.72864272922745, 10.69828332858004],
  [106.73130071317057, 10.697776087582278],
  [106.73235454817235, 10.697682395420543],
  [106.73292983294333, 10.697815409088484],
  [106.73375630276134, 10.698324254792439],
  [106.73406679175, 10.698686012683],
  [106.73425234840111, 10.699021676701015],
  [106.73436647226669, 10.699455179151578],
  [106.73460049511364, 10.701611774307239],
  [106.73482267790449, 10.702222312055635],
  [106.73513778638646, 10.702604518608728],
  [106.73573584597156, 10.703172316504777],
  [106.73628219692864, 10.703379162819157],
  [106.73687877725686, 10.703500302712058],
  [106.73929880538691, 10.703517396622583],
  [106.74004282684713, 10.703405128545093],
  [106.74389555769264, 10.703141675482742],
  [106.74552131000262, 10.703218349982574],
  [106.7520771341598, 10.704769339399062],
  //kết thúc ranh giới quận 7 - nhà bè
  //start ranh giới riêng
  [106.75239645658067, 10.703519206815432],
  [106.75273943300301, 10.70230914312256],
  [106.75338466860211, 10.700023458313474],
  [106.75448441861161, 10.697664396455538],
  [106.75550350296457, 10.695779392512607],
  [106.75597116508986, 10.695113129171279],
  [106.75686930809769, 10.69379421882066],
  [106.75836109715047, 10.692081009557802],
  [106.75892118427214, 10.691451246539026],
  [106.76002592192079, 10.690334344814755],
  [106.76197923648523, 10.688488731914534],
  [106.763642121601, 10.68713949506099],
  [106.76506284068643, 10.68589334139096],
  [106.76695959061531, 10.683861962916426],
  [106.76792920581926, 10.682798451455188],
  [106.7712701276828, 10.678986243341003],
  [106.77228952558534, 10.677572736200933],
  //end ranh giới riêng
  [106.7732609736558, 10.676718940264477],
  //cạnh kết thúc
  [106.77618326245297, 10.674680552668885],
];

const districtData = {
  name,
  population,
  area,
  rings,
  symbol,
};

export default districtData;