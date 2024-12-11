// Chỉnh tên đia điểm
const name = "Quận 6";
// Chỉnh số dân ở đây
const population = 233561;
// Chỉnh diện tích ở đây
const area = 7.14;
const symbol = {
  // Chỉnh vùng màu ở chỗ này
  color: [204, 0, 204, 0.35],
};

// Thêm ranh giới ở đây
const rings = [
  [106.65501703, 10.74614569], // quan 6 -> quan 5, quan 8

  [106.65477746, 10.74600525],
  [106.65449705, 10.74583965],
  [106.65411301, 10.74561477],
  [106.65381644, 10.74544019],
  [106.65355096, 10.74528327],
  [106.65323919, 10.74510034],
  [106.65284783, 10.74486976],
  [106.65254456, 10.74469159],
  [106.65221538, 10.74449784],
  [106.65191059, 10.74431937],
  [106.65164023, 10.74415886],
  [106.65136683, 10.74399925],
  [106.65111263, 10.74384893],
  [106.65076211, 10.7436435],
  [106.6504311, 10.74344915],
  [106.65010192, 10.74325541],
  [106.64974445, 10.74304477],
  [106.64945703, 10.74287678],
  [106.6491565, 10.7426983],
  [106.64885536, 10.74251953],
  [106.64855788, 10.74234255],
  [106.64827107, 10.74217276],
  [106.64804613, 10.7420398],
  [106.64774895, 10.74186342],
  [106.64747951, 10.74170351],
  [106.6471613, 10.74151456],
  [106.64686535, 10.74133848],
  [106.64655628, 10.74115551],
  [106.64621247, 10.74095128],
  [106.6458205, 10.7407186],
  [106.64550108, 10.74052995],
  [106.64518348, 10.74034129],
  [106.64482687, 10.74012911],
  [106.64446782, 10.7399159],
  [106.64410847, 10.73970238],
  [106.64384512, 10.73953529],
  [106.64353271, 10.73933465],
  [106.64328217, 10.73917624],
  [106.64300571, 10.73899985],
  [106.64271524, 10.73881419],
  [106.64240344, 10.73861505],
  [106.64211479, 10.73843178],
  [106.64194015, 10.73831919],
  [106.64183895, 10.7382575],
  [106.64163899, 10.73813604],
  [106.64138571, 10.73798391],
  [106.64107756, 10.73779765],
  [106.64071699, 10.73757964],
  [106.64038079, 10.73737661],
  [106.64006076, 10.73718356],
  [106.63968603, 10.73695682],
  [106.63932607, 10.73673911],
  [106.63898561, 10.73653308],
  [106.63860979, 10.73630669],
  [106.63828336, 10.73610904],
  [106.63793467, 10.73589762],
  [106.63759086, 10.7356898],
  [106.63730444, 10.73551732],
  [106.63668144, 10.73514],
  [106.6360121, 10.73473632],
  [106.63540373, 10.73437038],
  [106.63502213, 10.73409727],
  [106.63451434, 10.73373492],
  [106.63405104, 10.73347259],
  [106.63357312, 10.73320187],
  [106.63298304, 10.73287067],
  [106.63245269, 10.73259037],
  [106.63172362, 10.73220765],
  [106.63109574, 10.73188123],
  [106.63080496, 10.73169916],
  [106.6302484, 10.73134639],
  [106.63005699, 10.73125176],
  [106.62930293, 10.73087683],
  [106.62924745, 10.73084388],
  [106.62849704, 10.73039409],
  [106.62781003, 10.72997663],
  [106.62727681, 10.72965106],
  [106.62726248, 10.72981247],
  [106.62724389, 10.7300206],
  [106.62724846, 10.73010625],
  [106.62724511, 10.73021615],
  [106.62727193, 10.73031498],
  [106.62730576, 10.730415],
  [106.62733106, 10.73053598],
  [106.62739781, 10.73064828],
  [106.62755567, 10.73091342],
  [106.62767409, 10.73108481],
  [106.6278277, 10.73125011],
  [106.62776309, 10.73150855],
  [106.62748603, 10.73168763],
  [106.62714161, 10.73172327],
  [106.62677799, 10.73167595],
  [106.62647868, 10.73155976],
  [106.62611932, 10.73141991],
  [106.62591511, 10.73143758],
  [106.62558196, 10.73146483],
  [106.6251836, 10.73149388],
  [106.62481205, 10.73151484],
  [106.62443837, 10.73139655],
  [106.62414241, 10.7314256],
  [106.62398544, 10.731649],
  [106.62396366, 10.73190781],
  [106.62396976, 10.73194345],
  [106.62401334, 10.73218901],
  [106.6240554, 10.73243068],
  [106.6240932, 10.7326409],
  [106.62409655, 10.73268881],
  [106.62411819, 10.73294815],
  [106.6241505, 10.73320779],
  [106.62417458, 10.73340543],
  [106.62422731, 10.73361655],
  [106.62426876, 10.73378725],
  [106.62431357, 10.73396842],
  [106.62436874, 10.73418883],
  [106.62445438, 10.73436312],
  [106.62448883, 10.73453591],
  [106.62448883, 10.73465988],
  [106.624488, 10.73480069],
  [106.62448861, 10.73493755],
  [106.62448221, 10.73511214],
  [106.62447642, 10.73528433],
  [106.62447123, 10.73542627],
  [106.62446941, 10.73548047],
  [106.62446971, 10.73552719],
  [106.62446026, 10.73558648],
  [106.62444777, 10.73562062],
  [106.62442155, 10.73566225],
  [106.62438315, 10.73570417],
  [106.6243353, 10.73572843],
  [106.62428561, 10.73574879],
  [106.62421856, 10.73576346],
  [106.62415912, 10.73576586],
  [106.62410091, 10.73576317],
  [106.62404696, 10.73575538],
  [106.62399331, 10.73573172],
  [106.62393235, 10.73567752],
  [106.62387048, 10.73560176],
  [106.62373241, 10.73543376],
  [106.6236416, 10.73532334],
  [106.62352547, 10.73527662],
  [106.6233938, 10.73522451],
  [106.62327005, 10.735176],
  [106.62313503, 10.7351224],
  [106.6229869, 10.73508916],
  [106.62287077, 10.7350628],
  [106.62278634, 10.73503675],
  [106.62273513, 10.7350119],
  [106.62269033, 10.73498494],
  [106.62263607, 10.73492355],
  [106.62260407, 10.73487444],
  [106.62253793, 10.73480078],
  [106.62249008, 10.73476783],
  [106.62245198, 10.73475017],
  [106.622409, 10.734734],
  [106.62234164, 10.73471543],
  [106.62224441, 10.73468339],
  [106.62218955, 10.73465673],
  [106.62215998, 10.73463098],
  [106.62206611, 10.73451],
  [106.62197436, 10.73438123],
  [106.6219006, 10.73427522],
  [106.62182684, 10.73421892],
  [106.62175277, 10.73417011],
  [106.62166499, 10.73412579],
  [106.62152235, 10.73408835],
  [106.6214556, 10.73407548],
  [106.62135227, 10.73405931],

  [106.62115318, 10.73405161], // quan 6 -> quan 8, binh tan

  [106.62117879, 10.73430376],
  [106.62121536, 10.73463676],
  [106.62129827, 10.73496497],
  [106.62138788, 10.73531235],
  [106.62148907, 10.73571243],
  [106.62157563, 10.73605202],
  [106.62168414, 10.73647845],
  [106.62172132, 10.73664914],
  [106.62178411, 10.73693662],
  [106.62186519, 10.73726124],
  [106.62198162, 10.73772241],
  [106.62206818, 10.73807217],
  [106.62217364, 10.73852196],
  [106.62220107, 10.73858245],
  [106.62224253, 10.73865792],
  [106.62227788, 10.73869924],
  [106.62218523, 10.73890886],
  [106.62200783, 10.73902865],
  [106.6219737, 10.73903224],
  [106.62193712, 10.73932631],
  [106.62187494, 10.7398258],
  [106.6218719, 10.73989202],
  [106.62184934, 10.7403448],
  [106.62184081, 10.74040829],
  [106.621756, 10.74072961],
  [106.62172573, 10.74135672],
  [106.62194823, 10.74201433],
  [106.62207948, 10.74230544],
  [106.6222782, 10.74275702],
  [106.62233968, 10.74296383],
  [106.62250369, 10.74335165],
  [106.6220983, 10.74427791],
  [106.6225952, 10.74468164],
  [106.62302618, 10.7450332],
  [106.6232243, 10.74519431],
  [106.623587, 10.7454165],
  [106.62378451, 10.74549436],
  [106.62377781, 10.74571595],
  [106.62380219, 10.74597887],
  [106.62381621, 10.746125],
  [106.62382292, 10.74624059],
  [106.62384308, 10.74651007],
  [106.62387112, 10.74689756],
  [106.62389185, 10.74719581],
  [106.62391196, 10.74746831],
  [106.62393208, 10.74784981],
  [106.62394854, 10.74815405],
  [106.62396805, 10.74847267],
  [106.62398634, 10.7487811],
  [106.62400706, 10.74914882],
  [106.6240284, 10.74951654],
  [106.62404547, 10.74980282],
  [106.62407046, 10.75021785],
  [106.62408387, 10.75044902],
  [106.62410399, 10.75077482],
  [106.62412045, 10.7510593],
  [106.62414117, 10.75140007],
  [106.62415397, 10.75164022],
  [106.6241686, 10.751866],
  [106.6241686, 10.751866],
  [106.62419116, 10.75222354],
  [106.62420762, 10.75247687],
  [106.62422651, 10.75277452],
  [106.62424236, 10.75301587],
  [106.62425578, 10.75325962],
  [106.62426553, 10.75350876],
  [106.6242765, 10.75379862],
  [106.62428321, 10.75397888],
  [106.62430393, 10.75425078],
  [106.62432222, 10.75448015],
  [106.62433746, 10.75467778],
  [106.62435453, 10.75490536],
  [106.62437099, 10.75511377],
  [106.62438806, 10.75533596],
  [106.62440573, 10.75557072],
  [106.6244161, 10.75565097],
  [106.62444231, 10.7558492],
  [106.62445816, 10.7559037],
  [106.62455569, 10.7560654],
  [106.62467883, 10.75626183],
  [106.62472089, 10.75634568],
  [106.6248294, 10.75656127],
  [106.62497509, 10.75684454],
  [106.62513176, 10.75714878],
  [106.62520064, 10.7572949],
  [106.62528599, 10.75747936],
  [106.62527867, 10.75757278],
  [106.62523905, 10.75773987],
  [106.62517565, 10.7579914],
  [106.62513664, 10.7581501],
  [106.62509214, 10.75833575],
  [106.62506044, 10.7584729],
  [106.62502325, 10.75862142],
  [106.62497997, 10.75877892],
  [106.62490804, 10.75905081],
  [106.62482818, 10.75935864],
  [106.62474894, 10.75965568],
  [106.62467639, 10.75993056],
  [106.62461848, 10.76014855],
  [106.62458557, 10.76030426],
  [106.62451973, 10.76060729],
  [106.62443195, 10.76095763],
  [106.62437465, 10.7611864],
  [106.6243143, 10.76143254],
  [106.62424602, 10.76172778],
  [106.62418141, 10.76201045],

  [106.62417071, 10.76206069], // quan 6 -> tan phu, binh tan

  [106.62417025, 10.76206313],
  [106.62425442, 10.76201553],
  [106.62428002, 10.76197271],
  [106.62440283, 10.76177149],
  [106.6245089, 10.76147864],
  [106.62462664, 10.76089474],
  [106.6246303, 10.7608624],
  [106.62464188, 10.76081688],
  [106.62465377, 10.76077975],
  [106.62469461, 10.76075071],
  [106.62473332, 10.76074083],
  [106.62485463, 10.76072855],
  [106.62503111, 10.76073903],
  [106.62508628, 10.76073214],
  [106.62515486, 10.76071118],
  [106.62520058, 10.76066896],
  [106.62523898, 10.7605935],
  [106.62527982, 10.76056625],
  [106.62535511, 10.7605405],
  [106.62543588, 10.76050906],
  [106.6255559, 10.76047955],
  [106.62577535, 10.76042535],
  [106.62588904, 10.76041427],
  [106.62598292, 10.76043852],
  [106.62626241, 10.76054482],
  [106.62647577, 10.76054782],
  [106.62653734, 10.76054033],
  [106.62675649, 10.76051218],
  [106.62686652, 10.76048973],
  [106.62704605, 10.76047176],
  [106.62720363, 10.7604508],
  [106.62737705, 10.76044631],
  [106.62762455, 10.76037145],
  [106.62768734, 10.76036366],
  [106.62777299, 10.76036247],
  [106.62794154, 10.76037384],
  [106.62810278, 10.76040259],
  [106.62816983, 10.76038492],
  [106.62827529, 10.76030737],
  [106.62835454, 10.76026215],
  [106.62844811, 10.76023041],
  [106.62852218, 10.76021993],
  [106.62862001, 10.76022173],
  [106.6287462, 10.76027713],
  [106.62880198, 10.76029868],
  [106.62898333, 10.7602927],
  [106.62907081, 10.76028461],
  [106.62915554, 10.76024568],
  [106.62921528, 10.76021484],
  [106.62929301, 10.76018071],
  [106.62933994, 10.76016843],
  [106.62938262, 10.76017023],
  [106.6294768, 10.76017951],
  [106.62955025, 10.76017921],
  [106.62963255, 10.76016544],
  [106.62966669, 10.76014298],
  [106.62969016, 10.76012022],
  [106.62970631, 10.7600795],
  [106.62971423, 10.76003937],
  [106.62972094, 10.75995763],
  [106.62972947, 10.75989804],
  [106.62976605, 10.75977706],
  [106.62979622, 10.75969532],
  [106.62982061, 10.75967376],
  [106.62984621, 10.75966088],
  [106.62988065, 10.7596507],
  [106.62992698, 10.75964591],
  [106.62999678, 10.75965998],
  [106.63014217, 10.7597058],
  [106.63035309, 10.75974832],
  [106.63040643, 10.75975311],
  [106.63051829, 10.75974113],
  [106.63064203, 10.75969053],
  [106.63071275, 10.7596492],
  [106.63081089, 10.75957195],
  [106.63094134, 10.75942852],
  [106.63111569, 10.75926592],
  [106.63135495, 10.75916022],
  [106.63144578, 10.75913657],
  [106.63151497, 10.75911052],
  [106.63162074, 10.75904015],
  [106.63182978, 10.75889446],
  [106.63183547, 10.75889237],
  [106.63200158, 10.75883788],
  [106.63225883, 10.75881422],
  [106.63243988, 10.7588235],
  [106.63256216, 10.75881302],
  [106.63263989, 10.75879506],
  [106.63271639, 10.75874954],
  [106.63277826, 10.75868067],
  [106.63282307, 10.75862258],
  [106.63289927, 10.75852346],
  [106.63300046, 10.75844471],
  [106.63306569, 10.75840788],
  [106.63314463, 10.75837404],
  [106.63326929, 10.75833781],
  [106.63345491, 10.75829619],
  [106.63350977, 10.75826894],
  [106.63356708, 10.75823361],
  [106.63362651, 10.75819109],
  [106.63368686, 10.75824499],
  [106.6337783, 10.75832673],
  [106.63387523, 10.75841926],
  [106.63393283, 10.75848603],
  [106.63398526, 10.75858635],
  [106.63403006, 10.75868247],
  [106.63405749, 10.75878907],
  [106.63410078, 10.7588774],
  [106.63415686, 10.75896484],

  [106.63418971, 10.75901686], // quan 6 -> quan 11, tan phu

  [106.63429669, 10.75890547],
  [106.63437838, 10.75882162],
  [106.63446372, 10.75873583],
  [106.63454922, 10.75865034],
  [106.63463365, 10.7585647],
  [106.63471823, 10.75848011],
  [106.63480113, 10.75839597],
  [106.63487931, 10.75831437],
  [106.63492686, 10.75826287],
  [106.63500946, 10.75817513],
  [106.63509206, 10.7580874],
  [106.63517405, 10.75799966],
  [106.63525696, 10.75791133],
  [106.63535942, 10.75780267],
  [106.63539294, 10.75775386],
  [106.63547798, 10.75765429],
  [106.63552675, 10.75758542],
  [106.63559944, 10.75748286],
  [106.63567061, 10.7573833],
  [106.63573157, 10.75729736],
  [106.63580518, 10.7571945],
  [106.63584511, 10.7571406],
  [106.63591521, 10.75704538],
  [106.63598791, 10.75694687],
  [106.63602801, 10.75689314],
  [106.63608394, 10.75681903],
  [106.63611015, 10.75678789],
  [106.63616532, 10.75672635],
  [106.63618193, 10.75670898],
  [106.63629364, 10.7565916],
  [106.63638751, 10.75649309],
  [106.63641525, 10.75646614],
  [106.63654205, 10.75634382],
  [106.63658045, 10.75630429],
  [106.63668484, 10.75619739],
  [106.63676942, 10.7561098],
  [106.63684639, 10.7560309],
  [106.63694986, 10.75592415],
  [106.63705456, 10.75581261],
  [106.63708077, 10.7557897],
  [106.63717694, 10.75568999],
  [106.63727767, 10.75559881],
  [106.63737506, 10.75548232],
  [106.63738511, 10.75546915],
  [106.63745278, 10.75537961],
  [106.63747518, 10.75533979],
  [106.63748295, 10.75532631],
  [106.63750353, 10.75529577],
  [106.63752136, 10.75520489],
  [106.63753157, 10.75513003],
  [106.63753934, 10.75509095],
  [106.63756266, 10.75497477],
  [106.6375814, 10.75488089],
  [106.63760076, 10.75478402],
  [106.63760137, 10.75477893],
  [106.63761784, 10.75468116],
  [106.6378405, 10.75470736],
  [106.63793468, 10.75470212],
  [106.63810049, 10.75469254],
  [106.63825182, 10.754684],
  [106.63838365, 10.75467667],
  [106.63853635, 10.75466798],
  [106.63862093, 10.75466304],
  [106.63865278, 10.7546605],
  [106.63879344, 10.75464927],
  [106.63879466, 10.75464807],
  [106.63888386, 10.75464104],
  [106.63913989, 10.75462038],
  [106.63935965, 10.75460241],
  [106.63953643, 10.75458415],
  [106.63985342, 10.75455151],
  [106.64015608, 10.75452066],
  [106.64046057, 10.75448922],
  [106.64077299, 10.75445718],
  [106.64107261, 10.75442634],
  [106.64138563, 10.754394],
  [106.64167123, 10.75436465],
  [106.64192908, 10.7543392],
  [106.6421909, 10.75431734],
  [106.6424019, 10.75429967],
  [106.64261556, 10.7542838],

  [106.64277446, 10.75427301],
  [106.64289455, 10.75434428],
  [106.64297044, 10.7543886],
  [106.64298202, 10.75438111],
  [106.64305883, 10.7543305],
  [106.64309144, 10.75431014],
  [106.64314722, 10.7542811],
  [106.64317709, 10.75425205],
  [106.64319081, 10.75424906],
  [106.64328408, 10.75423618],
  [106.64337277, 10.75422211],
  [106.64348433, 10.75420474],
  [106.6436285, 10.75418288],
  [106.64372938, 10.75416731],
  [106.64384673, 10.75414934],
  [106.64393329, 10.75413587],
  [106.64396164, 10.75413257],
  [106.64421026, 10.75410487],
  [106.64443947, 10.75408092],
  [106.64469428, 10.75405247],
  [106.64497256, 10.75402163],
  [106.64519506, 10.75399767],
  [106.64542213, 10.75397342],
  [106.64563427, 10.75394916],
  [106.6458074, 10.75393089],
  [106.64600612, 10.75390874],
  [106.64623289, 10.75388358],
  [106.64646515, 10.75385903],
  [106.64665656, 10.75383807],
  [106.64689095, 10.75381231],
  [106.64717258, 10.75378147],
  [106.64736826, 10.75376201],
  [106.6475612, 10.75374554],
  [106.64781753, 10.75372248],
  [106.64802327, 10.75370511],
  [106.64830246, 10.75367427],
  [106.64858805, 10.75364373],
  [106.64880324, 10.75361977],
  [106.64903092, 10.75359582],
  [106.64918485, 10.75357905],
  [106.64933389, 10.75356288],
  [106.64949117, 10.75354641],
  [106.64960699, 10.75353293],
  [106.64969812, 10.75352335],
  [106.64986759, 10.75350509],
  [106.65000353, 10.75349011],
  [106.650116, 10.75347784],
  [106.65022268, 10.75346646],
  [106.65036288, 10.75345119],
  [106.65049517, 10.75343741],
  [106.65062044, 10.75342334],

  [106.65068917, 10.75341534], // quan 6 -> quan 5, quan 11

  [106.65069656, 10.75332646],
  [106.65067462, 10.75316595],
  [106.65061671, 10.75271918],
  [106.65060817, 10.75262216],
  [106.65061853, 10.75235626],
  [106.65059293, 10.75214545],
  [106.65055148, 10.75178252],
  [106.65051125, 10.75148068],
  [106.65137931, 10.75147229],
  [106.65181395, 10.7514675],
  [106.65191409, 10.75146873],
  [106.65202686, 10.7514861],
  [106.6532706, 10.75165609],
  [106.65327242, 10.75147283],
  [106.65327913, 10.75110212],
  [106.6533029, 10.75097216],
  [106.653309, 10.75083441],
  [106.65334009, 10.75067511],
  [106.65334436, 10.75059426],
  [106.65336935, 10.75045531],
  [106.65343458, 10.75020018],
  [106.65351809, 10.74988097],
  [106.65360221, 10.74957554],
  [106.65368085, 10.74928687],
  [106.65377473, 10.74892933],
  [106.65386861, 10.74858496],
  [106.65392347, 10.74841787],
  [106.65405758, 10.74801541],
  [106.65409111, 10.74793156],
  [106.65412037, 10.74787347],
  [106.65434836, 10.74741891],
  [106.65453001, 10.74705777],
  [106.65471289, 10.74669064],
  [106.65487261, 10.74638221],
  // [106.65069587, 10.75332611],
  // [106.65068198, 10.75320745],
  // [106.65063808, 10.75287567],
  // [106.65060639, 10.75262773],
  // [106.65061858, 10.75234864],
  // [106.65051255, 10.75147891],
  // [106.65137649, 10.75146505],
  // [106.65184953, 10.75145786],
  // [106.65226162, 10.75150817],
  // [106.65326623, 10.7516567],
  // [106.65326779, 10.75131212],
  // [106.6533068, 10.75084738],
  // [106.65335557, 10.7504593],
  // [106.6534531, 10.75006163],
  // [106.65356039, 10.74967834],
  // [106.65368231, 10.74929504],
  // [106.65382385, 10.74875641],
  // [106.65387072, 10.74857433],
  // [106.65399263, 10.74817187],
  // [106.65415357, 10.74779816],
  // [106.65438765, 10.74732862],
  // [106.6546705, 10.74675368],
  // [106.6548607, 10.74637996],

  [106.65501703, 10.74614569], // quan 6 -> quan 5, quan 8
];

const districtData = {
  name,
  population,
  area,
  rings,
  symbol,
};

export default districtData;