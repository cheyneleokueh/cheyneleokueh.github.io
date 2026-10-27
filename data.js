// Site content data. Update this file each semester — the pages render from it.
// Last edited via admin.html on 2026-08-10.

const LOREM = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.";
const LOREM_SHORT = "Lorem ipsum dolor sit amet, consectetur adipiscing elit.";

const HERO_STATS = [
  {
    "value": "26",
    "label": "課程記錄",
    "note": "114-1 · 114-2 修課心得"
  },
  {
    "value": "7",
    "label": "系上與校級職務",
    "note": "班代、系羽隊長、學生會…"
  },
  {
    "value": "N3",
    "label": "JLPT 日文檢定",
    "note": "已通過，朝 N2 準備中"
  },
  {
    "value": "8",
    "label": "Google Cloud 徽章",
    "note": "雲端與生成式 AI 實作"
  }
];

// ---------------- Courses (NYCU) ----------------

const COURSE_TERMS = [
  {
    "id": "114-1",
    "label": "114-1",
    "period": "2025 秋 · Fall 2025",
    "subtitle": "大一上",
    "courses": [
      {
        "name": "化學 (一)",
        "type": "必修",
        "unit": "光電系",
        "teacher": "陳方中",
        "cool": 3,
        "sweet": 4,
        "grade": "A-",
        "content": "原子結構與命名、量子力學、化學鍵、分子幾何；熱力學（焓、熵、自由能量）、水溶液反應；氣體、液體、固體（晶體結構）。",
        "method": "每週三小時授課、不定期小考（星期五早上）、主要使用課本上的內容用白板寫板書上課。",
        "grading": "小考 10%、作業 15%、期中考 35%、期末考 40%。",
        "review": "我們系上開的化學課，所以沒有會考。助教老師人都很好，上課認真也會講些笑話。有些同學在暑假期間暑修修掉化學，所以這堂課人數沒有那麼多。上課內容對於多數同學大概就是轉換成英文起初有些難度，不然跟高中的銜接還蠻好的。我覺得這門課最難的地方還是分子鍵結理論，另外就是薛丁格方程式寫在板子上有點嚇一跳（但老師沒有考）。考試的話其實都有跡可循，選擇題、繪圖、命名、申論都會出。好好寫作業看課本基本上不會出大問題。"
      },
      {
        "name": "計算機概論",
        "type": "必修",
        "unit": "光電系",
        "teacher": "孫家偉",
        "cool": 4,
        "sweet": 5,
        "grade": "A+",
        "content": "Python 語言基礎、計算機科學基礎及歷史、硬體軟體基礎、基礎 HTML、運算、人工智慧 (AI)。",
        "method": "每週兩小時授課、一小時上機。幾乎全中文授課及考試，看人太少時會做加分點名。",
        "grading": "作業＋期末報告 60%、期中考 20%、期末考 20%。",
        "review": "對於之前接觸過 CS / Informatics 的同學來說，這門課負擔不會太重；但對初學者而言 loading 可能會重一些，因為考試內容考得蠻細的。要留意即使老師上課看似離題的內容（神經結構、偏門歷史）也會出現在考卷上。老師講課用的簡報感覺是 AI 生成的，涵蓋了大部分重點；考試則是 50 題選擇題，感覺也像是直接把簡報餵給 AI 出題的。上機課部分，只要當天的作業有交且達到要求都可以拿滿分。這也是我們系上開的課，所以沒有其他學院那樣的大會考。"
      },
      {
        "name": "微積分甲 (一)",
        "type": "必修",
        "unit": "微積分小組",
        "teacher": "科特林（英授）",
        "cool": 4,
        "sweet": 3,
        "grade": "B-",
        "content": "極限、連續性、基本函數模型、微分法則、切線、最佳化問題、微積分基本定理、代換法、分部積分、參數方程、弧長與表面積。",
        "method": "每週四小時授課。上課前每次都小考，接續用黑板寫板書上課。",
        "grading": "小考 35%（19取13次平均）、期中考 35%（兩次平均）、大會考 30%。",
        "review": "外師給分不錯，但板書及口述不見得每次都非常好懂。班級裡外籍生及僑生頗多。小考的部分就是拿前次作業的題目挑兩題來考，期中考也是如此。得分的部分如果能把講義的答案背下來一定滿分，其他寫法或答案錯誤就得看助教怎麼給了。提醒：微積分習題一定要做，刷考古題不夠。"
      },
      {
        "name": "物理 (一) 榮譽班",
        "type": "必修",
        "unit": "物理小組",
        "teacher": "陳煜璋",
        "cool": 3,
        "sweet": 3,
        "grade": "B+",
        "content": "牛頓運動定律、能量守恆、動量、轉動、簡諧運動、阻尼振動、機械波、聲波、干涉與繞射、熱力學定律、理想氣體、熵。",
        "method": "每週四小時授課。主要透過簡報講解各章節內容，課中或課後會有不定期小考。",
        "grading": "作業及小考 30%、期中考 35%、期末考 35%。〔會調分〕",
        "review": "老師助教上課與改分都還蠻用心。老師上課會用簡報授課、簡報內容還蠻複雜而且會時不時用一些還未學過的微積分來計算。每個禮拜會上完的章節會各出五題作業題，完成後需繳交。期中期末考試的內容四成是選擇題，另外六題非選題由講義跟作業題出。記憶好的人可以考得不錯，但有些題的推導有難度……寫不對就很難拿分。另外要注意有六次不定期小考（變相點名），每次一題選擇題、寫名字給 70 分，跟版上其他學長姐一樣認同這門課適合能接受不定期小考的人。"
      },
      {
        "name": "物理實驗 (一)",
        "type": "必修",
        "unit": "物理小組",
        "teacher": "詹皓喆（大助）、許鈺敏（教授）",
        "cool": 4,
        "sweet": 4,
        "grade": "A",
        "content": "量測與統計、一維運動實驗、一維碰撞實驗、圓周運動實驗、波動實驗、熱力學實驗。",
        "method": "班級會分兩批進行實驗，一組兩人、一學期總共六次實驗課。",
        "grading": "平時 30%、小考 12%、實驗預報 12%（2%×6）、實驗結報 50%（剔除最低 ×1）。加分 6%（Excel）〔共 110%〕",
        "review": "電子書可以在小組的網站上找到。平時成績基本上就是用 80 分打底往上加或扣（遲到、靠椅子之類的會在學期開始時宣達）。小考就是考有沒有看講義，六次實驗各考一兩題。實驗預報照規則寫可以拿不錯的分。加分的部分就是預先把公式跟表格打好，方便輸入。最後就是重頭戲的結報。聽說會抓明顯抄襲或捏造數據的結報。"
      },
      {
        "name": "光電生涯與生活",
        "type": "必修",
        "unit": "光電系",
        "teacher": "陳方中",
        "cool": 5,
        "sweet": 5,
        "grade": "通過",
        "content": "協助光電系大一新鮮人適應大學生活及解決問題，對未來四年的大學生活做預先規劃。",
        "method": "每週上課兩小時，其中四次是聽講座、三次由其他老師來介紹系上各研究方向。另有小組晤談。",
        "grading": "平時表現 100%。",
        "review": "基本上就是出席上課，簽到看看有什麼有益的資訊。最後有一個吃喝玩樂簡報要以小組完成，總體來說是個歡樂的課。老師助教人都很好，最後一節課的報告還有鬆餅＋飲料可以吃。老師另外規定每個人都要在學期中提問一次以上（有意義的問題）。"
      },
      {
        "name": "大一體育",
        "type": "必修",
        "unit": "體育室",
        "teacher": "詹富鈞",
        "cool": 3,
        "sweet": 4,
        "grade": "A-",
        "content": "宣導、游泳、足球、籃球。",
        "method": "每週上課兩小時，上下課點名（遲到早退會被記）。",
        "grading": "平時表現 100%，詳細公式不明、其中一定要過 25m 游泳自由式。",
        "review": "老師人不錯，在簡短說明後就會在上半節讓大家做當週設定的課的活動（這個學期游泳完後是足球跟籃球）。下半節有時候會換活動、做測試，或者給自由活動時間。老師還會主動跟同學聊天，氣氛蠻好的。"
      },
      {
        "name": "全球視野下的工程文化與實踐",
        "type": "基本素養",
        "unit": "通識中心",
        "teacher": "顧彩璇",
        "cool": 3,
        "sweet": 5,
        "grade": "A+",
        "content": "半導體歷史、工程倫理、與 Virginia Tech 跟山東大學交流、多媒體製作。",
        "method": "通常上課都是聽老師及講師授課，不定時抽人回答問題。另外會配合交流活動調整時間，這學期有改晚上授課兩次、星期六上課兩次。此外還有四次自行交流的小組部分，其時數列為微學分，需另外與系辦做折抵。",
        "grading": "課堂個人作業 50%、課堂團體作業 20%、期末報告既展演 30%。〔有做有分〕",
        "review": "這學期修過的課中算是比較另類的。沒有考試，只是每個禮拜都 1～2 份小報告要交。在時間上會比較有壓力，因為這堂課會調時間（老師第一個禮拜就會說了）。其中跟美國還有大陸的交流也都很有趣，美方是博士後的一些學長姐，對岸則是一些碩士生。交流內容包括跟我們既有印象的對比跟互比。做期末報告前有導演會來指導我們怎麼表達我們想要的內容，這方面也受益良多。另外要注意的是這門課後續有調整為 3 學分。其中第三個學分由創創工坊配 ICT 一般選修。"
      },
      {
        "name": "普通心理學",
        "type": "領域課程",
        "unit": "通識中心",
        "teacher": "梁瓊惠（英文授課）",
        "cool": 3,
        "sweet": 3,
        "grade": "A",
        "content": "人的個性與心情、學習、記憶、大腦與神經、智力、意識。",
        "method": "英文授課，每週兩小時授課。主要透過簡報講解各章節內容，課中會有固定的討論時間。",
        "grading": "出席 10%、作業 30%、期中考 30%、期末考 30%。加分：提問 3%。",
        "review": "老師很認真，這門心理學對我（初學者）來說偏難但有意義，期中期末各出 50 題選擇題，需要先用講義複習不然會炸開。我期中考炸掉，還好期末救回來了。作業的部分有三個，第一個是書面報告自己怎麼樣調整心情。後面兩個作業是選課上的關鍵詞製作影片來介紹那方面的心理學。老師有額外給有提問的同學加分。〔老師會記人〕"
      },
      {
        "name": "日文 (二)",
        "type": "第二外語",
        "unit": "語言小組",
        "teacher": "永冨菜穗美",
        "cool": 4,
        "sweet": 4,
        "grade": "A+",
        "content": "日文課本第一冊 L11～畢。",
        "method": "每週兩小時授課。主要透過投影片還有課本書上內容授課。",
        "grading": "課堂學習單 20%、作業 20%、期中考 30%、期末考 30%。（疑有調分）",
        "review": "我知道很多人都想修日文課，選課前多少要評估自身能力。有看到很多人加退選、或期中後放棄的。基本上有熱忱、習得五十音與基本單字文法的話都不會太有問題。老師非常熱情，會記人跟打招呼。作業都是自己批改，每堂課會有學習單，內容是課上的基本單字跟文法練習。期中期末有選擇題也有手寫部分。我自己在作業上提到要在 12 月份考 N3，老師下課後還找我說這門課大約是 N5 的等級，幫我加油叫我告訴他結果。"
      },
      {
        "name": "學術英文閱讀與討論",
        "type": "英文語言",
        "unit": "語言小組",
        "teacher": "吳宇晴",
        "cool": 5,
        "sweet": 5,
        "grade": "A+",
        "content": "英文閱讀測驗、做報告。",
        "method": "每週兩小時授課。主要透過簡報還有課本書上內容授課。",
        "grading": "作業 15%、報告 20%、小考（4 次）15%、期中考 25%、期末考 25%。（回答加分 5%）",
        "review": "老師人不錯、會認人。出席跟作業有做有分。小考、期中、期末考都沒有難度，主要就是課本上的單字搭配小學的字詞文法（閱讀測驗、填詞、字詞意義）。報告的部分第一次是小組報告、第二次是自由報告，有準備跟會報告的人會覺得很輕鬆。"
      },
      {
        "name": "光電專題研究 (一)",
        "type": "選修",
        "unit": "光電系",
        "teacher": "陳方中",
        "cool": 3,
        "sweet": 4,
        "grade": "A+",
        "content": "大學部專題研究，由導師擬定。",
        "method": "每週一小時旁聽實驗室會議、一份學期報告。",
        "grading": "自由評分 100%。",
        "review": "受益良多。有意願進實驗室的學弟妹可以考慮大一就開始接觸，早點了解研究方向跟實驗室文化，對日後選定指導教授很有幫助。"
      }
    ]
  },
  {
    "id": "114-2",
    "label": "114-2",
    "period": "2026 春 · Spring 2026",
    "subtitle": "大一下",
    "courses": [
      {
        "name": "電路學",
        "type": "必修",
        "unit": "光電系",
        "teacher": "戴亞翔",
        "cool": 3,
        "sweet": 2,
        "grade": "C+",
        "content": "基本電路概念與定律（歐姆與克希荷夫定律）、節點與網目分析法、戴維寧與諾頓等效電路、運算放大器（Op-Amp）基礎、一階與二階電路暫態響應（RC、RL、RLC 電路）、正弦穩態分析、交流電力計算、磁耦合電路、頻率響應與濾波器、LTSpice。",
        "method": "每週三小時授課、隨堂小考、主要使用投影片跟電子塗鴉上課。",
        "grading": "小考 40%、期中考 30%、期末考 20%、上機考 10%。〔不調分〕",
        "review": "我們系上開的電路學。這門電路學特別的地方就是他同時把邏輯設計上掉，大概前三分之一是邏輯設計接 10% 的期中考、然後再三分之一上 DC 直流電接 20% 的期中考、最後三分之一是 AC 交流電接期末考，最後一周是上機考。在每堂課都會考一題小考，二十次成績取前十次當小考成績（老師說是送分的部分）。在學期中會有幾次 LTSpice 的上機，並在最後做測驗（預給電路上機的時候輸入數字看輸出交卷，算是開卷考）。考試與考古相似度高，考驗熟不熟悉內容。我的失誤是在直流電沒準備充分，導致後期有點聽不懂而交流電也考的亂七八糟。考試時沒有跟答案一致都算錯導致拿分更吃力。老師人很好、樂於回答問題，助教也很熱心（改分好快）。另外聽說老師快要退休了。"
      },
      {
        "name": "線性代數",
        "type": "必修",
        "unit": "光電系",
        "teacher": "田仲豪",
        "cool": 2,
        "sweet": 3,
        "grade": "B+",
        "content": "行列式及其性質、向量空間與子空間、線性獨立與基底、線性映射與矩陣表示法、特徵值與特徵向量、矩陣對角化、內積空間與正交性，基本上就是後續的 LU、CR、SVD。",
        "method": "每週三小時授課、五次小考、主要使用白板寫板書上課＋供掃描筆記。",
        "grading": "小考 60%、期中考 20%、期末考 20%。〔會調分〕",
        "review": "我們系上開的線性代數。老師上課很有趣，有時候延伸會講到很多其他的東西。主任的課是照著 Gilbert Strang 的課本內容教，上課好玩然後會記人。老師喜歡點名跟抽問，常沒來的同學會被老師記住。雖然課表是三個小時但老師會時不時加課一小時、把早九變成早八來做小考 or 補充課。前面一半的內容比較簡單直白、到後半比較抽象的概念，題目會變難跟從原本的運算 → 理解題目的算法 + 用對的方式找出答案。也是考驗融會貫通的科目，考試範圍的話就是教到哪考哪。老師會在上課的時候偷偷說他想要考甚麼東西，利用老師提供的講義復習那些部分可以拿到基本分。我個人覺得背一些公式（e.g. 投射）比較麻煩、第三次小考後改為可帶大抄而題目也連動便難許多。"
      },
      {
        "name": "微積分甲 (二)",
        "type": "必修",
        "unit": "微積分小組",
        "teacher": "科特林（英授）",
        "cool": 4,
        "sweet": 4,
        "grade": "B-",
        "content": "積分技巧延伸與瑕積分、無窮級數與序列、級數與泰勒級數、偏導數與多變數函數極值、多重積分（二重與三重積分、座標變換）。",
        "method": "每週四小時授課。上課前每次都小考，接續用黑板寫板書上課。",
        "grading": "小考 35%（20取14次平均）、期中考 35%（兩次平均）、大會考 30%。〔不調分〕",
        "review": "同上學期，老師的部分（70%）給分不錯。板書及口述沒有非常好懂。班級裡外籍生及僑生頗多。小考的部分就是拿前次作業的題目挑兩題來考，期中考也是如此。得分的部分如果能把講義題目的刷好記下來，助教這個學期批卷給分比較大方。剩下就跟其他微積分的評論差不多……就難。接下來得好好還微積分債了。"
      },
      {
        "name": "物理 (二) 榮譽班",
        "type": "必修",
        "unit": "物理小組",
        "teacher": "李明知",
        "cool": 3,
        "sweet": 2,
        "grade": "B",
        "content": "靜電學與高斯定律、電位與電能、電容與電介質、電流與直流電路、磁場與安培定律、法拉第電磁感應定律與電感、馬克士威方程組與電磁波傳播、幾何光學、光的干涉與繞射現象、量子力學。",
        "method": "每週四小時授課。主要透過簡報講解各章節內容。",
        "grading": "小考 25%、大考 75%。〔調 +2〕",
        "review": "老師上課用心有趣，時不時會加冷笑話。上課用書商簡報，跟課本對照不錯、進到電學磁學後覺得自己聽不太懂，內容好難然後要用微積分來計算跟證明。跟上學期的老師不一樣的是沒有送分小考跟作業來續命。這門課完完全全就是考試，怕考試的人會很痛苦。課程分為：「電學」、「磁學」、「光學＋近代物理」三個部分。每次都是到一半做一次小考，上完接大考。節奏快又考的玄。如果能拿到考古題就好好把握，題型可能會相似。期末考好像有比較簡單、或者是有抓到老師的出題方向，把物理救回來了。"
      },
      {
        "name": "物理實驗 (二)",
        "type": "必修",
        "unit": "物理小組",
        "teacher": "詹皓喆（大助）、許鈺敏（教授）",
        "cool": 4,
        "sweet": 4,
        "grade": "A",
        "content": "空氣熱容比與熱機、載流導線受磁力的測量、光的干涉與繞射、麥克森干涉、基礎電路學、RLC 串聯電路。",
        "method": "班級會分兩批進行實驗，一組兩人、一學期總共六次實驗課。〔不調、不四捨五入〕",
        "grading": "平時 30%、小考 12%、實驗預報 12%、實驗結報 50%（5取4）。加分 6%（Excel）〔共 110%〕",
        "review": "同上學期、電子書可以在小組的網站找到。平時成績基本上就是用 80 分調正。小考就是考有沒有看講義，六次實驗各考一兩題。實驗預報照規則寫可以拿不錯的分。加分的部分就是預先把公式跟表格打好，方便輸入。最後就是重頭戲的結報。"
      },
      {
        "name": "服務學習 (一)",
        "type": "必修",
        "unit": "光電系",
        "teacher": "高宗聖、黃耀緯、陳方中",
        "cool": 4,
        "sweet": 4,
        "grade": "A+",
        "content": "修課同學將學習應用光電知識，以多媒體方式展現，用於引發孩童或國高中生對光電的興趣，推廣光電教育。",
        "method": "第一次聚的時候分組成：教會服務（4組）、教具競賽（3組）、系小編組、科普小編、種子教師，共十組。",
        "grading": "（系小編）出席 30%、品質 20%、增長 20%、報告 30%。",
        "review": "有經營社群媒體或想要幫忙系上宣傳活動的可以來這邊，準時交貨把文案寫得好、照片準備好。剩下就是要把成果展現出來，算是比較輕鬆一點的服學項目。班上多數同學的志願是在教會服務，可以出隊去教教會的小朋友一些東西。教具競賽是要做教學用品來闡述某個光學相關原理、科普小編是要在系上 IG 發布相關的技術知識給想報光電系的高中生。種子教師好像是要準備一套要教的微學程（不太確定他們的結果）。"
      },
      {
        "name": "大一體育",
        "type": "必修",
        "unit": "體育室",
        "teacher": "詹富鈞",
        "cool": 4,
        "sweet": 4,
        "grade": "A",
        "content": "宣導、排球、棒球、游泳。",
        "method": "每週上課兩小時，上下課點名。",
        "grading": "出席 60%、考試 40%，詳細公式不明、要過 50m 游泳。",
        "review": "詹老師人不錯，在簡短說明後就會在上半節讓我們做他設定的課的活動（這個學期游泳完後是足球跟籃球）。後續在下半節課有時候會換活動、做測試或者是給自由活動。老師會跟同學聊天。"
      },
      {
        "name": "科學的歷程",
        "type": "領域課程",
        "unit": "資管碩",
        "teacher": "羅濟群",
        "cool": 4,
        "sweet": 4,
        "grade": "A+",
        "content": "古代自然哲學與科學萌芽、科學革命、古典物理奠基、工業革命與科學制度化、生命科學的演進、二十世紀物理學突破（相對論與量子力學）、科學與現代社會的互動與反思。基本上整個世界「科學的歷程」都講了。",
        "method": "每週上課三小時（abc 時段），簽到。",
        "grading": "參與 40%、作業＋簡報 60%。（實際：老師自由心證 100%）",
        "review": "「老子是世界上第一個量子力學家」。這是一堂真正的玄課，各種知識會流進腦袋裡。第一堂課會把同學（大學部＋專班＋碩班）分成小組，後面做作業就是小組為單位。每次上課的三個小時可以大概分為：第一個小時「老師講述主題」、第二個小時「一個小組報告（一個小時）一個主題」、第三個小時「下一個小組報告 case report（半小時）＋討論題目」。每組每週要交紙本 A4 一頁回答上堂的 case report 內容。例如：〈請說明「老子」的「宇宙觀」？〉、〈原子彈做出來，如果你是羅斯福總統你會如何做？〉。這堂課有歷史、有哲學、有科學，是個非常好玩的通識課。但如果是怕報告的同學就得迴避了。"
      },
      {
        "name": "美國外交政策",
        "type": "基本素養",
        "unit": "通識中心",
        "teacher": "邱奕宏",
        "cool": 3,
        "sweet": 4,
        "grade": "A+",
        "content": "美國外交政策之分析、外交決策機制、從孤立主義到國際主義的歷史演變、冷戰時期的對抗與圍堵、後冷戰時期的全球戰略、當代美中台三邊關係、地緣政治與全球經貿議題中的美國戰略。",
        "method": "每週上課兩小時，用課堂參與類點名。",
        "grading": "參與 20%、小組 25%、期中 30%、報告 25%。",
        "review": "絕對是我上過最多遊戲規則的一門課。老師真的教很好、課也很有趣。上課的第一件事就是先播美國愛國歌來喚醒同學。前面十三週都是正常授課，參與的計算方式就是每堂做課堂的 Kahoot、作業的電影問卷單、舉手問答的總數。期中考是 25 題選擇題（以下選項何者不正確）、選答 4 題定義以及選答 2 題申論題。有去上課聽老師的觀點分數就算好拿。期末報告是要自己命題，就課堂學到的東西做連結來做申論或從老師提供的書單做讀書心得。老師會給簡單的評論，看不太出來分數扣哪邊。最後一部分就是小組的分數，要各組做情境模擬扮演。每個小組成員為一個國家的要職就國家利益來完成任務（老師會說分數計算跟遊戲規則）最後小組要寫心得。"
      },
      {
        "name": "工程與專業倫理",
        "type": "領域課程",
        "unit": "電機系",
        "teacher": "黃育綸、徐保羅、黃欽勇",
        "cool": 4,
        "sweet": 2,
        "grade": "A+",
        "content": "工程倫理理論與核心價值、工程師的社會責任與義務、誠信與利益衝突、智慧財產權與專利法規、工程安全、風險評估與重大災難案例探討、環境永續與科技倫理。",
        "method": "每週上課兩小時，助教用座位點名。",
        "grading": "參與 30%、心得 30%、報告 40%。",
        "review": "這門課主要是講工程師會在工作上遇到的各種倫理問題，以及檢驗各種歷史事件。其中三個禮拜由黃欽勇董事長講述自己的歷程及我們當工程師的路上可能可以注意到的問題，算是有趣的見解。徐教授是電機的退休教授，跟我們說一個學生的路要怎麼最大化效益，面對問題、挫折要如何應對。修課前看到板上有很多評論這門課的，這邊提供不同意見。上課基本分感覺算好拿、舉手發問就是課堂參與的分數、一個學期小組及個人舉手共 16 就算有基本分，心得報告課堂中寫完取前半的分數也不會太難（中文不好可以寫英文），最後就是報告，把課堂內容跟自選議題連結報告出來。要小心用 AI，看下來會撞題或答不對題扣分扣最多。大概是電機系少數不用寫算式接電路的課。"
      },
      {
        "name": "學術英文演講與簡報",
        "type": "選修",
        "unit": "語言中心",
        "teacher": "李麥德",
        "cool": 4,
        "sweet": 2,
        "grade": "A+",
        "content": "簡報組織、投影片設計、口語表達與簡報演繹技巧、問答之應對策略與聽眾互動。",
        "method": "每週上課兩小時，第一節到給點名。",
        "grading": "出席 10%、報告 60%、學生授課 30%。",
        "review": "英國籍教師上課比較特殊，這門課的外籍生很多且難度偏高需注意。這門課主要是教怎麼樣做出有效的簡報跟怎麼去報告、算是比較主觀的課。學期中總共有五個報告、作業報告是要用課堂上所教的方式去做浮誇的報告，分數會一次次遞增但扣分項頗多且不給異議。另外兩個報告是讓學生分組來去教授每周的報告主題（授課內容），要講大概一節以上且設計優良才給高分。有漏掉的東西老師在後面那節再講。A+ 不易取得，慎入。"
      },
      {
        "name": "進階英文口語溝通",
        "type": "選修",
        "unit": "語言中心",
        "teacher": "鄺粵敏",
        "cool": 4,
        "sweet": 4,
        "grade": "A+",
        "content": "用課本與議題之演練與口說。",
        "method": "每週上課兩小時，上課前半小時到給點名。",
        "grading": "課堂 35%、小考 20%、期中考 25%、期末考 25%。",
        "review": "上課氛圍涼涼的英文課，小考期中期末難度都不高。上課基本上就是在朗讀課本跟練習對話。剩下的 35% 就是出席＋報告三次。一次報最喜歡的角色、一次報新聞、最後是小組就用上課的單字來演一次戲。還有就是要學習護照 5% 加分或上課有兩次歌曲聽寫。"
      },
      {
        "name": "科技英文",
        "type": "選修",
        "unit": "語言中心",
        "teacher": "李麥德",
        "cool": 4,
        "sweet": 2,
        "grade": "A+",
        "content": "科學領域的英文議題，科技領域的寫作方法、新創技術簡報或影片呈現。",
        "method": "每週上課兩小時，上課前半小時到給點名。",
        "grading": "出席 10%、學習護照 10%、作業 60%、期末報告 20%。",
        "review": "英國籍教師上課比較特殊，這門課的外籍生一樣很多要注意。老師這門課是要讓大家了解各種科技用語以及單元會用到的詞彙，以及科技領域下怎麼寫信件、報告、指令。另外每節課都有一次一頁的主題報告所以有些人會覺得比較痛苦。授課內容來說比較輕但是分不一定好拿。最後一節課會做新創科技的報告。這門課來說可以拿高分但不一定有 A+，因為給分還是一樣偏主觀。"
      },
      {
        "name": "光電專題研究 (二)",
        "type": "選修",
        "unit": "光電系",
        "teacher": "陳方中",
        "cool": 3,
        "sweet": 5,
        "grade": "A+",
        "content": "大學部專題研究，由導師擬定。",
        "method": "每週一小時旁聽實驗室會議、一份期末報告加 meeting 報告。",
        "grading": "老師評分 100%。",
        "review": "續上學期看光譜吸收的最佳化，看三份研究報告了解其中在做甚麼。這個學期用水下模擬的光譜數據、參考老師的光譜最佳轉化極限的代碼來觀看其關聯性並於期末在實驗室報告。東西做出來很有成就感、會推薦英文好並喜歡實作的同學找機會找到適合的老師做專題，比上課好玩多了。"
      }
    ]
  },
  {
    "id": "114-3",
    "label": "114-3",
    "period": "2026 夏 · Summer 2026",
    "subtitle": "大一暑",
    "courses": [
      {
        "name": "民法總則",
        "type": "選修",
        "unit": "",
        "teacher": "",
        "cool": 4,
        "sweet": 4,
        "grade": "",
        "content": "",
        "method": "",
        "grading": "",
        "review": ""
      },
      {
        "name": "刑法總則",
        "type": "選修",
        "unit": "",
        "teacher": "",
        "cool": 4,
        "sweet": 5,
        "grade": "",
        "content": "",
        "method": "",
        "grading": "",
        "review": ""
      }
    ]
  },
  {
    "id": "115-1",
    "label": "115-1",
    "period": "2026 秋 · Fall 2026",
    "subtitle": "大二上",
    "courses": [
      {
        "name": "電子學 (一)",
        "type": "必修",
        "unit": "光電系",
        "teacher": "劉柏村",
        "cool": null,
        "sweet": null,
        "grade": "",
        "content": "",
        "method": "",
        "grading": "",
        "review": ""
      },
      {
        "name": "電子學實驗 (一)",
        "type": "必修",
        "unit": "光電系",
        "teacher": "陳建安",
        "cool": null,
        "sweet": null,
        "grade": "",
        "content": "",
        "method": "",
        "grading": "",
        "review": ""
      },
      {
        "name": "電磁學 (一)",
        "type": "必修",
        "unit": "光電系",
        "teacher": "吳致盛",
        "cool": null,
        "sweet": null,
        "grade": "",
        "content": "",
        "method": "",
        "grading": "",
        "review": ""
      },
      {
        "name": "微分方程",
        "type": "必修",
        "unit": "光電系",
        "teacher": "陳智弘",
        "cool": null,
        "sweet": null,
        "grade": "",
        "content": "",
        "method": "",
        "grading": "",
        "review": ""
      },
      {
        "name": "服務學習 (二)",
        "type": "必修",
        "unit": "光電系",
        "teacher": "高宗聖、陳方中、鄒志偉、黃耀緯",
        "cool": null,
        "sweet": null,
        "grade": "",
        "content": "",
        "method": "",
        "grading": "",
        "review": ""
      },
      {
        "name": "先進光電科技與人類文明",
        "type": "領域課程",
        "unit": "光電系",
        "teacher": "田仲豪",
        "cool": null,
        "sweet": null,
        "grade": "",
        "content": "",
        "method": "",
        "grading": "",
        "review": ""
      },
      {
        "name": "資料科學與 Python 程式實務",
        "type": "選修",
        "unit": "光電系",
        "teacher": "田仲豪",
        "cool": null,
        "sweet": null,
        "grade": "",
        "content": "",
        "method": "",
        "grading": "",
        "review": ""
      },
      {
        "name": "大數據分析入門與實務研討",
        "type": "選修",
        "unit": "通識中心",
        "teacher": "白姝玉",
        "cool": null,
        "sweet": null,
        "grade": "",
        "content": "",
        "method": "",
        "grading": "",
        "review": ""
      },
      {
        "name": "生命與生醫",
        "type": "領域課程",
        "unit": "通識中心",
        "teacher": "林苕吟（英授）",
        "cool": null,
        "sweet": null,
        "grade": "",
        "content": "",
        "method": "",
        "grading": "",
        "review": ""
      },
      {
        "name": "商用英文會話",
        "type": "選修",
        "unit": "語言中心",
        "teacher": "鄺粵敏（英授）",
        "cool": null,
        "sweet": null,
        "grade": "",
        "content": "",
        "method": "",
        "grading": "",
        "review": ""
      },
      {
        "name": "體育（網球丙）",
        "type": "必修",
        "unit": "體育室",
        "teacher": "伍啟萌",
        "cool": null,
        "sweet": null,
        "grade": "",
        "content": "",
        "method": "",
        "grading": "",
        "review": ""
      },
      {
        "name": "企業金融法",
        "type": "選修",
        "unit": "科法所",
        "teacher": "林建中",
        "cool": null,
        "sweet": null,
        "grade": "",
        "content": "",
        "method": "",
        "grading": "",
        "review": ""
      },
      {
        "name": "國際經濟法與國家安全",
        "type": "選修",
        "unit": "科法所",
        "teacher": "施州爾（英授）",
        "cool": null,
        "sweet": null,
        "grade": "",
        "content": "",
        "method": "",
        "grading": "",
        "review": ""
      },
      {
        "name": "國際航空與太空法",
        "type": "選修",
        "unit": "科法所",
        "teacher": "孫介然（英授）",
        "cool": null,
        "sweet": null,
        "grade": "",
        "content": "",
        "method": "",
        "grading": "",
        "review": ""
      },
      {
        "name": "光電專題研究 (三)",
        "type": "選修",
        "unit": "光電系",
        "teacher": "陳方中",
        "cool": null,
        "sweet": null,
        "grade": "",
        "content": "",
        "method": "",
        "grading": "",
        "review": ""
      }
    ]
  }
];

// ---------------- Experience (unified feed) ----------------
// tag: "research" | "leadership" | "learning" | "future"

const EXPERIENCE = [
  {
    "title": "會長 · SPIE Student Chapter",
    "org": "SPIE NYCU Student Chapter · 國立陽明交通大學",
    "period": "115-1 – 現在",
    "tag": "leadership",
    "active": true,
    "bullets": [
      "擔任 SPIE（國際光學與光子學學會）交大學生分會會長，統籌分會運作與活動"
    ]
  },
  {
    "title": "Undergraduate Researcher",
    "org": "陳方中 Lab · NYCU 光電工程學系",
    "period": "114-1 – 現在",
    "tag": "research",
    "active": true,
    "bullets": [
      "光電專題研究（一）（二）— 光譜吸收最佳化模擬研究",
      "114-2：使用水下模擬光譜數據，參考老師提供之最佳轉化極限代碼分析其關聯性，期末於實驗室 meeting 報告成果"
    ]
  },
  {
    "title": "學生會 交通分會 · 福利部 部長",
    "org": "國立陽明交通大學學生會",
    "period": "115-1 – 現在",
    "tag": "leadership",
    "active": true,
    "bullets": [
      "統籌學生福利相關業務"
    ]
  },
  {
    "title": "學生代表",
    "org": "國立陽明交通大學 國際處",
    "period": "115-1 – 現在",
    "tag": "leadership",
    "active": true,
    "bullets": [
      "代表學生參與國際處相關事務與活動"
    ]
  },
  {
    "title": "學生會 交通分會 · 秘書部",
    "org": "國立陽明交通大學學生會 · 選舉委員會",
    "period": "114-1 – 114-2",
    "tag": "leadership",
    "active": false,
    "bullets": [
      "秘書部成員，並參與學生會選舉委員會相關事務"
    ]
  },
  {
    "title": "副分會長 · 少數國家分會",
    "org": "僑生聯誼會",
    "period": "115-1 – 現在",
    "tag": "leadership",
    "active": true,
    "bullets": [
      "協助分會事務的統籌與推動"
    ]
  },
  {
    "title": "系羽 隊長",
    "org": "光電工程學系羽球隊",
    "period": "115-1 – 現在",
    "tag": "leadership",
    "active": true,
    "bullets": [
      "帶領球隊團練並代表系上出賽系際盃羽球賽事"
    ]
  },
  {
    "title": "班代",
    "org": "光電工程學系",
    "period": "114-1 – 現在",
    "tag": "leadership",
    "active": true,
    "bullets": [
      "擔任班級與系上溝通窗口：收發資訊、協調課程衝堂、統整並轉交公告，並協助班級與系上活動的舉辦"
    ]
  },
  {
    "title": "系學會 成員",
    "org": "光電工程學系學生會",
    "period": "114-1 – 現在",
    "tag": "leadership",
    "active": true,
    "bullets": [
      "參與系上活動的籌辦與推廣"
    ]
  },
  {
    "title": "日文檢定 JLPT N3",
    "org": "自學",
    "period": "114-1",
    "tag": "learning",
    "active": true,
    "bullets": [
      "以 A+ 修畢交大日文（二），並通過 JLPT N3 日文檢定；目前朝 N2 準備中"
    ]
  },
  {
    "title": "臺大 OpenCourseWare 自學筆記",
    "org": "自學",
    "period": "113-2 – 115-1",
    "tag": "learning",
    "active": true,
    "bullets": [
      "日本文化史 — 徐興慶",
      "中華民國憲法及政府 — 湯德宗",
      "哲學與人生 — 傅佩榮",
      "普通心理學 — 趙儀珊",
      "魏晉南北朝史 — 甘懷真",
      "活用哲學 — 苑舉正",
      "民法總則 — 陳聰富",
      "刑法總則 — 王皇玉"
    ]
  },
  {
    "title": "Google Cloud Skill Boost",
    "org": "自學",
    "period": "2025/02 – 2025/08",
    "tag": "learning",
    "active": false,
    "bullets": [
      "8 個技能徽章，涵蓋雲端與生成式 AI 實作：Prompt Design in Vertex AI、Multimodal RAG、BigQuery ML、Vertex AI ML 部署、Gemini API、Gen AI + Streamlit、Security Command Center、Gemini + Imagen 應用"
    ]
  },
  {
    "title": "潛水 Open Water 證照",
    "org": "PADI",
    "period": "2026/08",
    "tag": "learning",
    "active": false,
    "bullets": [
      "取得 PADI Open Water 潛水證照"
    ]
  },
  {
    "title": "滑雪 Level 1",
    "org": "自我精進",
    "period": "計畫 2027",
    "tag": "future",
    "active": false,
    "bullets": [
      "目標於 2027 年前考取滑雪 Level 1 認證"
    ]
  }
];

const EXPERIENCE_NOTE = "還有更多想嘗試的事，之後想到就會陸續補上這裡 — 大學才剛開始，慢慢來。";

// ---------------- Publications ----------------

const PUBLICATIONS = [
  {
    "title": "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    "venue": "Journal / Conference Name — TBD",
    "period": "20XX",
    "bullets": [
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.",
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
    ]
  },
  {
    "title": "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    "venue": "Journal / Conference Name — TBD",
    "period": "20XX",
    "bullets": [
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.",
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
    ]
  }
];

// ---------------- Open Source ----------------

const OPEN_SOURCE = [
  {
    "title": "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    "tag": "Lorem",
    "period": "20XX",
    "bullets": [
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris."
    ]
  },
  {
    "title": "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    "tag": "Ipsum",
    "period": "20XX",
    "bullets": [
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris."
    ]
  }
];

// ---------------- NZ ----------------

const NZ = {
  "intro": "I grew up and went to school in Auckland, New Zealand, before returning to Taiwan in 2025 to study at National Yang Ming Chiao Tung University. This page is a look back at that half of my story — six years at ACG Sunderland, a short stint at the University of Auckland, and everything in between.",
  "school": "ACG Sunderland, Auckland",
  "schoolPeriod": "6 years (Year 8–13)",
  "schoolIntro": "Completed six years of secondary school at ACG Sunderland, majoring in maths and sciences through Cambridge IGCSE and A-Level. Actively involved in leadership, sport, and the arts throughout. Graduated with an early offer into Engineering at the University of Auckland.",
  "stats": [
    {
      "value": "98",
      "label": "School awards"
    },
    {
      "value": "18",
      "label": "Honours badges"
    },
    {
      "value": "13",
      "label": "Competition certificates"
    },
    {
      "value": "4",
      "label": "Trophies"
    }
  ],
  "sections": [
    {
      "heading": "Academics",
      "items": [
        "Cambridge IGCSE: sat Combined Science a year early in Year 10, passed with an A*. In Year 11, took Maths, Design, Biology, Physics, Chemistry, and Computer Science — A* in all six, B in English — one of the top A* students in the year group.",
        "Cambridge A-Level: Chinese, English, Maths, Physics, Chemistry, Computer Science. A2 Maths 81% A (120 UCAS points), AS Chinese 92% A (60 points) — first student at the school to get an A in Chinese. A2 Physics, Computer Science, and Chemistry all B.",
        "330 UCAS Tariff points — received an early Engineering (Honours) offer from the University of Auckland."
      ]
    },
    {
      "heading": "Leadership",
      "items": [
        "2024 Whenuapai House Leader — ran weekly meetings, coordinated house resources, and led the house to first place in Swimming Sports, Cross Country, and Tug of War, and second in Athletics.",
        "Class Captain — planned and hosted inter-class activities and competitions.",
        "Badminton Team Captain (Boys Team 1) — led the team to a win in the 2022 season and received the \"Most Promising Player\" award.",
        "Sports Council President — ran the school's annual sports calendar and managed the school sports Instagram account.",
        "Sports event host (2023–2024) — emceed and coordinated multiple school sports events.",
        "Photography Club President — covered school events for the newsletter and yearbook.",
        "Band Leader / Battle of the Bands MC."
      ]
    },
    {
      "heading": "Competitions",
      "items": [
        "Australian Mathematics Competition — Distinction (2020, 2021)",
        "Australian Informatics Olympiad — Credit (2022)",
        "Computational & Algorithmic Thinking — Distinction (2023)",
        "ICAS Maths / Science / Informatics Technology — multiple High Distinction / Distinction (2016–2018)",
        "Otago Problem Challenge — Excellence (2018, 2019, incl. Final Challenge)",
        "Mathex team maths competition — team captain, first-place team most years (Year 7–10)",
        "NZ Chemistry Olympiad qualifying round — Silver Certificate (2018)",
        "NZ Engineering Science Competition — participant (2023, 2024)"
      ]
    },
    {
      "heading": "Sport & the arts",
      "items": [
        "Swimming: medalled across freestyle, backstroke, breaststroke, butterfly, and medley in the school's U19 age group over several years.",
        "Badminton (Local A/B Division), skiing (advanced terrain), golf, and tennis (Interclub).",
        "Piano (age 4–15); picked up saxophone, taiko drumming, and rock climbing from 2024.",
        "Languages: native-level (CEFR C2) in both English and Chinese, basic Japanese, plus some exposure to Māori, French, and Spanish through school."
      ]
    },
    {
      "heading": "Community & service",
      "items": [
        "2024 Gumboot Fridays fundraiser — led the school's charity fundraising campaign as House Leader: signage, poster campaigns, and fundraising events, setting the season's fundraising record.",
        "Auckland Taiwan Day volunteer — helped run the cultural stall and diabolo performance.",
        "2023 sister-school exchange volunteer — helped lead exchange activities as a Fengxing alumnus."
      ]
    }
  ],
  "uoa": {
    "heading": "University of Auckland",
    "intro": "Started a semester of Engineering at the University of Auckland before deciding to transfer to NYCU.",
    "courses": [
      {
        "code": "ENGGEN 121",
        "name": "Engineering Mechanics",
        "note": "Statics and dynamics for engineers: free body diagrams, equilibrium of particles and rigid bodies, trusses, friction, then kinematics and kinetics. The first course where physics turned into actually solving structures."
      },
      {
        "code": "ENGGEN 140",
        "name": "Fundamentals of Engineering in Society",
        "note": "Chemistry and biology applied to basic engineering problems, alongside the social side of the job: the environment, Te Tiriti o Waitangi, and what a social licence to operate means for engineers."
      },
      {
        "code": "ENGSCI 111",
        "name": "Mathematical Modelling 1",
        "note": "Engineering maths with a modelling focus: differentiation and integration techniques, differential equations including Euler's method, vectors and matrices, and probability models."
      },
      {
        "code": "WTRENG",
        "name": "Built Environment in Aotearoa New Zealand",
        "note": "How the built environment in Aotearoa is shaped by its land, people and history — a look at infrastructure and design from a New Zealand perspective, including Māori viewpoints."
      }
    ]
  },
  "more": "More reflections on this chapter to come — I'll keep adding as I think of things worth writing down."
};

// ---------------- Other ----------------

const OTHER = {
  "sections": [
    {
      "heading": "Teaching",
      "subtitle": "家教 · Tutoring",
      "items": [
        {
          "title": "English & Maths Tutor",
          "org": "NumberWorks'nWords, Henderson",
          "period": "2023/07 – 2025/08",
          "bullets": [
            "一對一及小組家教，教授英文與數學。"
          ]
        },
        {
          "title": "Private Tutor",
          "org": "Independent",
          "period": "Active",
          "bullets": [
            "Tutoring Middle School ~ Highschool Students. Focus: English, Mathematics, Sciences, ICT."
          ]
        }
      ]
    },
    {
      "heading": "Law",
      "subtitle": "法律",
      "items": [
        {
          "title": "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
          "org": "",
          "period": "",
          "bullets": [
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris."
          ]
        }
      ]
    },
    {
      "heading": "Medicine",
      "subtitle": "醫學",
      "items": [
        {
          "title": "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
          "org": "",
          "period": "",
          "bullets": [
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris."
          ]
        }
      ]
    }
  ]
};
