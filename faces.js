//I GOT THESE FROM HERE:
// https://textfac.es/
// http://kawaiiface.net/happy-kawaii-faces/
//https://www.lennyfaces.net/dongers

//Would like to use Json, but it was having problems with the characters
var faces = [
    "( ͡° ͜ʖ ͡°)",
    "¯\\_(ツ)_/¯",
    "▄︻̷̿┻̿═━一",
    "̿̿ ̿̿ ̿̿ ̿'̿'\̵͇̿̿\з= ( ▀ ͜͞ʖ▀) =ε/̵͇̿̿/’̿’̿ ̿ ̿̿ ̿̿ ̿̿",
    "( ͡°( ͡° ͜ʖ( ͡° ͜ʖ ͡°)ʖ ͡°) ͡°)",
    "ʕ•ᴥ•ʔ",
    "(▀̿Ĺ̯▀̿ ̿)",
    "༼ つ ◕_◕ ༽つ",
    "ಠ_ಠ",
    "(づ｡◕‿‿◕｡)づ",
    "̿'̿'\̵͇̿̿\з=( ͠° ͟ʖ ͡°)=ε/̵͇̿̿/'̿̿ ̿ ̿ ̿ ̿ ̿",
    "(ﾉ◕ヮ◕)ﾉ*:･ﾟ✧ ✧ﾟ･: *ヽ(◕ヮ◕ヽ)",
    "[̲̅$̲̅(̲̅5̲̅)̲̅$̲̅]",
    "┬┴┬┴┤ ͜ʖ ͡°) ├┬┴┬┴",
    "( ͡°╭͜ʖ╮͡° )",
    "(͡ ͡° ͜ つ ͡͡°)",
    "(• ε •)",
    "(ง'̀-'́)ง",
    "(ಥ﹏ಥ)",
    "﴾͡๏̯͡๏﴿ O'RLY?",
    "(ノಠ益ಠ)ノ彡┻━┻",
    "[̲̅$̲̅(̲̅ ͡° ͜ʖ ͡°̲̅)̲̅$̲̅]",
    "(ﾉ◕ヮ◕)ﾉ*:･ﾟ✧",
    "(☞ﾟ∀ﾟ)☞",
    "| (• ◡•)| (❍ᴥ❍ʋ)",
    "(◕‿◕✿)",
    "(ᵔᴥᵔ)",
    "(¬‿¬)",
    "(☞ﾟヮﾟ)☞ ☜(ﾟヮﾟ☜)",
    "(づ￣ ³￣)づ",
    "ლ(ಠ益ಠლ)",
    "ಠ╭╮ಠ",
    "̿ ̿ ̿'̿'\̵͇̿̿\з=(•_•)=ε/̵͇̿̿/'̿'̿ ̿",
    "/╲/\\╭( ͡° ͡° ͜ʖ ͡° ͡°)╮/\\╱\\",
    "(;´༎ຶД༎ຶ`)",
    "♪~ ᕕ(ᐛ)ᕗ",
    "♥‿♥",
    "༼ つ  ͡° ͜ʖ ͡° ༽つ",
    "༼ つ ಥ_ಥ ༽つ",
    "(╯°□°）╯︵ ┻━┻",
    "( ͡ᵔ ͜ʖ ͡ᵔ )",
    "ヾ(⌐■_■)ノ♪",
    "~(˘▾˘~)",
    "◉_◉",
    "\\ (•◡•) /",
    "(~˘▾˘)~",
    "(._.) ( l: ) ( .-. ) ( :l ) (._.)",
    "༼ʘ̚ل͜ʘ̚༽",
    "༼ ºل͟º ༼ ºل͟º ༼ ºل͟º ༽ ºل͟º ༽ ºل͟º ༽",
    "┬┴┬┴┤(･_├┬┴┬┴",
    "ᕙ(⇀‸↼‶)ᕗ",
    "ᕦ(ò_óˇ)ᕤ",
    "┻━┻ ︵ヽ(`Д´)ﾉ︵ ┻━┻",
    "⚆ _ ⚆",
    "(•_•) ( •_•)>⌐■-■ (⌐■_■)",
    "(｡◕‿‿◕｡)",
    "ಥ_ಥ",
    "ヽ༼ຈل͜ຈ༽ﾉ",
    "⌐╦╦═─",
    "(☞ຈل͜ຈ)☞",
    "☜(˚▽˚)☞",
    "(•ω•)",
    "(ง°ل͜°)ง",
    "(｡◕‿◕｡)",
    "（╯°□°）╯︵( .o.)",
    ":')",
    "┬──┬ ノ( ゜-゜ノ)",
    "(っ˘ڡ˘ς)",
    "ಠ⌣ಠ",
    "ლ(´ڡ`ლ)",
    "(°ロ°)☝",
    "｡◕‿‿◕｡",
    "( ಠ ͜ʖರೃ)",
    "╚(ಠ_ಠ)=┐",
    "(─‿‿─)",
    "ƪ(˘⌣˘)ʃ",
    "(；一_一)",
    "(¬_¬)",
    "( ⚆ _ ⚆ )",
    "(ʘᗩʘ')",
    "☜(⌒▽⌒)☞",
    "｡◕‿◕｡",
    "¯\\(°_o)/¯",
    "(ʘ‿ʘ)",
    "ლ,ᔑ•ﺪ͟͠•ᔐ.ლ",
    "(´・ω・`)",
    "ಠ~ಠ",
    "(° ͡ ͜ ͡ʖ ͡ °)",
    "┬─┬ノ( º _ ºノ)",
    "(´・ω・)っ由",
    "ಠ_ಥ",
    "Ƹ̵̡Ӝ̵̨̄Ʒ",
    "(>ლ)",
    "ಠ‿↼",
    "ʘ‿ʘ",
    "(ღ˘⌣˘ღ)",
    "ಠoಠ",
    "ರ_ರ",
    "(▰˘◡˘▰)",
    "◔̯◔",
    "◔ ⌣ ◔",
    "(✿´‿`)",
    "¬_¬",
    "ب_ب",
    "｡゜(｀Д´)゜｡",
    "(ó ì_í)=óò=(ì_í ò)",
    "°Д°",
    "( ﾟヮﾟ)",
    "٩◔̯◔۶",
    "≧☉_☉≦",
    "☼.☼",
    "^̮^",
    "(>人<)",
    "〆(・∀・＠)",
    "(~_^)",
    "^̮^",
    ">_>",
    "(^̮^)",
    "(/) (°,,°) (/)",
    "=U",
    "(◕‿◕✿)",
    "(◠‿◠✿)",
    "(◠﹏◠✿)",
    "（＊＾Ｕ＾）人（≧Ｖ≦＊）/",
    "ôヮô",
    "∧( ‘Θ’ )∧",
    "(¤﹏¤)",
    "●‿●",
    "＼（＾○＾）人（＾○＾）／",
    "ヾ(＠⌒▽⌒＠)ﾉ",
    "(°∀°)",
    "ヾ｜￣ー￣｜ﾉ	",
    " (☉‿☉✿)",
    "┏(＾0＾)┛┗(＾0＾) ┓",
    "  (◡‿◡✿)",
    "✿◕ ‿ ◕✿ ",
    "ヽ(‘ ∇‘ )ノ",
    " ☆(❁‿❁)☆ ",
    "❀◕ ‿ ◕❀",
    "ヽ(^◇^*)/",
    "(•⊙ω⊙•)",
    "!⑈ˆ~ˆ!⑈",
    "(*^ -^*)",
    "(⊙‿⊙✿)",
    "◕3◕ ",
    "(ﾟヮﾟ)",
    "¢‿¢",
    "ヅ",
    "●ᴥ●",
    "(∪ ◡ ∪)",
    "≖‿≖",
    "≧◡≦",
    "٩◔‿◔۶",
    "｡◕ ‿ ◕｡	",
    "ヾ(＠＾▽＾＠)ﾉ",
    "◃┆◉◡◉┆▷",
    "(✿◠‿◠)",
    "(￣ｰ￣)",
    "╰(◡‿◡✿╰) ",
    "~,~",
    "  (ﾉ◕ヮ◕)ﾉ*:･ﾟ✧",
    "(*~▽~)	",
    "❀‿❀",
    "◕‿◕",
    "(^L^)",
    "(^▽^)",
    "◕ ◡ ◕",
    "(◕‿◕✿)",
    "（ ；´Д｀）",
    "⊙﹏⊙",
    "✿｡✿",
    "ヽ(゜∇゜)ノ",
    "｡(✿‿✿)｡",
    "(´ー｀)",
    "q(❂‿❂)p",
    "( ́ ◕◞ε◟◕`)",
    "☆(◒‿◒)☆",
    "(∩▂∩)",
    "(¬‿¬)",
    "(^Ｏ^)",
    "ʘ‿ʘ",
    "（’◎’）",
    "(◜௰◝)",
    "(^ｰ^)",
    "(o´ω｀o) ",
    " (^з^)-☆",
    "(◕ω◕✿)",
    "(づ｡◕‿‿◕｡)づ",
    "(ﾟ▽^*)",
    "(⌒o⌒)",
    "(｡◕‿◕｡) ",
    "(. ﾟーﾟ)",
    "१✌˚◡˚✌५",
    "＼(●~▽~●)",
    "(*˘︶˘*)",
    "(✪㉨✪)",
    "(ᅌᴗᅌ* )",
    "^L^",
    "(\\/) (°„°) (\\/)",
    "＼(*^▽^*)/",
    "(◠△◠✿)",
    "( ಠ◡ಠ )",
    "(〃^∇^)ﾉ",
    "|◔◡◉|",
    "(●⌒∇⌒●)",
    "⊂◉‿◉つ",
    "✌.ʕʘ‿ʘʔ.✌",
    "(*・∀・*)人(*・∀・*)",
    "＼(^-^)／	",
    "∩(︶▽︶)∩",
    "（☉∀☉）",
    "(´ω｀)",
    "●﹏●",
    "（　´∀｀）☆",
    "✿◕ ‿ ◕✿",
    "(≧◡≦)",
    "(◡‿◡✿)",
    "(･ｪ-)",
    "^‿^",
    "٩(̾●̮̮̃̾•̃̾)۶",
    "≖‿≖",
    "(⊙ω⊙✿)	",
    "(´･ω･`)",
    "◤(¬‿¬)◥",
    "^.^",
    "(•‿•)",
    "（＾⊆＾）",
    "^( '‿' )^",
    "☆d(o⌒∇⌒o)b",
    "∑(゜Д゜;)",
    "(▰˘◡˘▰)",
    "(• ε •)",
    " ( ͡° ͜ʖ ͡°)",
    "(\\/) (°,,°) (\\/)",
    "(￣(エ)￣)	",
    "{◕ ◡ ◕}",
    "(>‘o’)>",
    "(❀‿❀)",
    "< (^^,) >",
    "ヾ(●⌒∇⌒●)ﾉ",
    "（　´∀｀）",
    "☾˙❀‿❀˙☽",
    "°٢°",
    "^o^",
    "(=ﾟωﾟ)ﾉ",
    "(=゜ω゜)",
    " (｡✿‿✿｡)",
    "ó‿ó",
    "(▰˘◡˘▰) ",
    "(︶ω︶)",
    "(ﾉ◕ヮ◕)ﾉ*:･ﾟ✧",
    "(◠ω◠✿)",
    "٩(^‿^)۶",
    "(●*∩_∩*●)",
    "<丶´Д｀>",
    " (✿◠‿◠)",
    "ヽ(´▽｀)ノ",
    "(°⌣°)",
    "☆(❁‿❁)☆",
    "（╹ェ╹）",
    "•(⌚_⌚)•",
    "ヽ(　´　∇　｀　)ノ",
    "（ミ￣ー￣ミ）",
    "(─‿‿─)",
    "~(^з^)-",
    "(*≗*)",
    "⊙ω⊙ ",
    "(´･ω･`)",
    "(｡◕‿◕｡)",
    ".=^.^=",
    "(◠︿◠✿)",
    "(`･ω･´)",
    "´ ▽ ` )ﾉ",
    "(´∀｀)",
    "(◑‿◐)",
    "ヽ(ﾟｰﾟ*ヽ)ヽ(*ﾟｰﾟ*)ﾉ(ﾉ*ﾟｰﾟ)ﾉ",
    "˚ᆺ˚",
    "ヽ(〃＾▽＾〃)ﾉ	",
    "｡◕‿◕｡",
    "❀◕ ‿ ◕❀",
    "( °٢° )",
    "Ü",
    "(●´ω｀●)",
    "<('o'<)",
    "◕‿◕",
    "◙‿◙",
    "( ͡° ͜ʖ ͡°)",
    "(ಥ ͜ʖಥ)",
    "(° ͜ʖ°)",
    "(͡o‿O͡)",
    "( ‾ʖ̫‾)",
    "͡° ͜ʖ ͡°",
    "(☞ຈل͜ຈ)☞",
    "° ͜ʖ ͡ -",
    "ヽ༼ຈل͜ຈ༽ﾉ",
    "( ͡°⊖ ͡°)",
    "͡° ͜ʖ ͡ –",
    "( ͡°Ĺ̯ ͡° )",
    "( ͡° ʖ̯ ͡°)",
    "(ง ͠° ͟ʖ #)ง",
    "ʕ  ͡° ʖ̯ ͡°ʔ",
    "(ง ͠° ͟ل͜ ͡°)ง",
    "( ͡° ͜ʖ ͡°)=ε✄",
    "(∩ ͡ ° ʖ ͡ °) ⊃-(===>",
    "<:::::[]=¤ (▀̿̿Ĺ̯̿̿▀̿ ̿)",
    "｡*ﾟ+.*.｡(っ  ͡° ل͜ ͡°)っ✂╰⋃╯",
    "(˵ ͡° ͜ʖ ͡°˵)",
    "\\( ͡° ͜/// ͡°)/",
    "( ͡°⁄ ⁄ ͜⁄ ⁄ʖ⁄ ⁄ ͡°)",
    "( ͡☉⁄ ⁄ ͜⁄ ͜ʖ̫⁄ ⁄ ͡☉)",
    "(ʖ ͜° ͜ʖ)",
    "( ͜。 ͡ʖ ͜。)",
    "(° ͡ ͜ ͡ʖ ͡ °)",
    "╱\\ ( ͡⚆ ͜ʖ ͡⚆)",
    "( ͠° ) ͜ʖ ( ͠° )",
    "/╲/( ͡⎚ ͜U ͡⎚)/\\",
    "( ͡ ͡° ͡° ʖ ͡° ͡°)",
    "/\\/( ͡°͡° ͜ʖ ͡°͡°)\\/\\",
    "( ͡° ͜ʖ ( ͡° ͜ʖ ( ͡° ͜ʖ ( ͡° ͜ʖ ͡°) ͜ʖ ͡°)ʖ ͡°)ʖ ͡°)",
    "(ಥ ͜ʖಥ)",
    "( T ʖ̯ T)",
    "( ཀ ʖ̯ ཀ)",
    "( ͡ಥ ͜ʖ ͡ಥ)",
    "ᕕ( ཀ ʖ̯ ཀ)ᕗ",
    "(´༎ຶ  ͜ʖ ༎ຶ `)♡",
    "︵‿︵(´ ͡༎ຶ  ͜ʖ  ͡༎ຶ `)︵‿︵",
    "(͡o‿O͡)",
    "( ͡°⊖ ͡°)",
    "( ͡°- ͡°)",
    "( ͡°ω ͡°)",
    "( ͡°⊱ ͡°)",
    "( ͡° ͜ ͡°)",
    "( ͡° ᴥ ͡°)",
    "(͡• ͜໒ ͡• )",
    "{ ͡• ͜ʖ ͡•}",
    "( ͡o ͜ʖ ͡o) ",
    "(˵ ͡o ͜ʖ ͡o˵)",
    "( ͡ _ ͡°)ﾉ⚲ ♫",
    "( ◔ ʖ̯ ◔ )",
    "( ͡ಠ ʖ̯ ͡ಠ)",
    "( ͡ಠ ͜ʖ ͡ಠ)",
    "( ͠° ͟ ͜ʖ ͡°)",
    "(☞ຈل͜ຈ)☞",
    "ヽ༼ຈل͜ຈ༽ﾉ",
    "( ͡ຈ ͜ʖ ͡ຈ)",
    "༼ つ  ͡° ͜ʖ ͡° ༽つ",
    "ヽ༼ ຈل͜ຈ༼ ▀̿̿Ĺ̯̿̿▀̿ ̿༽Ɵ͆ل͜Ɵ͆ ༽ﾉ"
];

exports.faces = faces;