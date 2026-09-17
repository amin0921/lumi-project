var APP_VERSION = "v2.36.0";
var BUILD_TIMESTAMP = "__BUILD_TIMESTAMP__";
var LEVEL = "A1";

var CATEGORIES = {
  everyday: {
    name: "روزمره",
    words: [
      { word: "water", meaning: "آب", en: "I drink water every morning.", fa: "من هر روز صبح آب می‌نوشم.", icon: "💧", examples: [{ en: "I drink water every morning.", fa: "من هر روز صبح آب می‌نوشم." }, { en: "Can I have a glass of water, please?", fa: "می‌شه لطفاً یک لیوان آب به من بدید؟" }, { en: "The water in this lake is very clean.", fa: "آب این دریاچه خیلی تمیز است." }] },
      { word: "house", meaning: "خانه", en: "This is my house.", fa: "این خانه‌ی من است.", icon: "🏠", examples: [{ en: "This is my house.", fa: "این خانه‌ی من است." }, { en: "Their house is near the park.", fa: "خانه‌ی آن‌ها نزدیک پارک است." }, { en: "We are painting our house this weekend.", fa: "ما این آخر هفته داریم خانه‌مان را رنگ می‌زنیم." }] },
      { word: "book", meaning: "کتاب", en: "She reads a book every night.", fa: "او هر شب یک کتاب می‌خواند.", icon: "📖", examples: [{ en: "She reads a book every night.", fa: "او هر شب یک کتاب می‌خواند." }, { en: "This book is very interesting.", fa: "این کتاب خیلی جذاب است." }, { en: "I bought a new book yesterday.", fa: "من دیروز یک کتاب جدید خریدم." }] },
      { word: "food", meaning: "غذا", en: "We eat food together.", fa: "ما با هم غذا می‌خوریم.", icon: "🍽️", examples: [{ en: "We eat food together.", fa: "ما با هم غذا می‌خوریم." }, { en: "The food smells good.", fa: "غذا بوی خوبی می‌دهد." }, { en: "I like homemade food.", fa: "من غذای خانگی دوست دارم." }] },
      { word: "friend", meaning: "دوست", en: "He is my best friend.", fa: "او بهترین دوست من است.", icon: "🧑‍🤝‍🧑", examples: [{ en: "He is my best friend.", fa: "او بهترین دوست من است." }, { en: "I called my friend yesterday.", fa: "دیروز به دوستم زنگ زدم." }, { en: "We play soccer with friends.", fa: "ما با دوستان فوتبال بازی می‌کنیم." }] },
      { word: "school", meaning: "مدرسه", en: "I go to school by bus.", fa: "من با اتوبوس به مدرسه می‌روم.", icon: "🏫", examples: [{ en: "I go to school by bus.", fa: "من با اتوبوس به مدرسه می‌روم." }, { en: "The school starts at eight.", fa: "مدرسه ساعت هشت شروع می‌شود." }, { en: "Her daughter loves school.", fa: "دخترش عاشق مدرسه است." }] },
      { word: "family", meaning: "خانواده", en: "My family is big.", fa: "خانواده‌ی من بزرگ است.", icon: "👨‍👩‍👧‍👦", examples: [{ en: "My family is big.", fa: "خانواده‌ی من بزرگ است." }, { en: "We have dinner with the family.", fa: "ما با خانواده شام می‌خوریم." }, { en: "His family lives in Shiraz.", fa: "خانواده‌اش در شیراز زندگی می‌کنند." }] },
      { word: "car", meaning: "ماشین", en: "They have a new car.", fa: "آن‌ها یک ماشین جدید دارند.", icon: "🚗", examples: [{ en: "They have a new car.", fa: "آن‌ها یک ماشین جدید دارند." }, { en: "My car is parked outside.", fa: "ماشینم بیرون پارک شده است." }, { en: "She drives her car to work.", fa: "او با ماشینش به سر کار می‌رود." }] },
      { word: "phone", meaning: "تلفن", en: "Can I use your phone?", fa: "می‌توانم از تلفن شما استفاده کنم؟", icon: "📱", examples: [{ en: "Can I use your phone?", fa: "می‌توانم از تلفن شما استفاده کنم؟" }, { en: "My phone is on the table.", fa: "تلفنم روی میز است." }, { en: "He bought a new phone.", fa: "او یک تلفن جدید خرید." }] },
      { word: "money", meaning: "پول", en: "I need more money.", fa: "من به پول بیشتری نیاز دارم.", icon: "💰", examples: [{ en: "I need more money.", fa: "من به پول بیشتری نیاز دارم." }, { en: "She saves money every month.", fa: "او هر ماه پول پس‌انداز می‌کند." }, { en: "Do not forget your money.", fa: "پولت را فراموش نکن." }] },
      { word: "time", meaning: "زمان", en: "What time is it?", fa: "ساعت چند است؟", icon: "⏰", examples: [{ en: "What time is it?", fa: "ساعت چند است؟" }, { en: "See you next time.", fa: "دفعه بعد می‌بینمت." }, { en: "It is time for lunch.", fa: "وقت ناهار است." }] },
      { word: "day", meaning: "روز", en: "Today is a good day.", fa: "امروز روز خوبی است.", icon: "☀️", examples: [{ en: "Today is a good day.", fa: "امروز روز خوبی است." }, { en: "Have a nice day!", fa: "روز خوبی داشته باشی!" }, { en: "We work eight hours a day.", fa: "ما روزانه هشت ساعت کار می‌کنیم." }] },
      { word: "night", meaning: "شب", en: "I sleep at night.", fa: "من شب‌ها می‌خوابم.", icon: "🌙", examples: [{ en: "I sleep at night.", fa: "من شب‌ها می‌خوابم." }, { en: "The city is quiet at night.", fa: "شهر شب‌ها ساکت است." }, { en: "Good night, see you tomorrow.", fa: "شب بخیر، فردا می‌بینمت." }] },
      { word: "work", meaning: "کار", en: "I go to work at 8 AM.", fa: "من ساعت ۸ صبح سر کار می‌روم.", icon: "💼", examples: [{ en: "I go to work at 8 AM.", fa: "من ساعت ۸ صبح سر کار می‌روم." }, { en: "I like my work.", fa: "کارم را دوست دارم." }, { en: "She finishes work at five.", fa: "او ساعت پنج کارش تمام می‌شود." }] },
      { word: "city", meaning: "شهر", en: "This city is very big.", fa: "این شهر خیلی بزرگ است.", icon: "🏙️", examples: [{ en: "This city is very big.", fa: "این شهر خیلی بزرگ است." }, { en: "The city has many parks.", fa: "این شهر پارک‌های زیادی دارد." }, { en: "We walked around the city.", fa: "دور شهر قدم زدیم." }] },
      { word: "street", meaning: "خیابان", en: "The shop is on this street.", fa: "مغازه در این خیابان است.", icon: "🛣️", examples: [{ en: "The shop is on this street.", fa: "مغازه در این خیابان است." }, { en: "Our street is very quiet.", fa: "خیابان ما خیلی ساکت است." }, { en: "She lives on this street.", fa: "او در این خیابان زندگی می‌کند." }] },
      { word: "weather", meaning: "هوا", en: "The weather is nice today.", fa: "امروز هوا خوب است.", icon: "⛅", examples: [{ en: "The weather is nice today.", fa: "امروز هوا خوب است." }, { en: "The weather gets cold at night.", fa: "هوا شب‌ها سرد می‌شود." }, { en: "How is the weather there?", fa: "آنجا هوا چطور است؟" }] },
      { word: "computer", meaning: "کامپیوتر", en: "I use my computer every day.", fa: "من هر روز از کامپیوترم استفاده می‌کنم.", icon: "💻", examples: [{ en: "I use my computer every day.", fa: "من هر روز از کامپیوترم استفاده می‌کنم." }, { en: "Her computer is very fast.", fa: "کامپیوترش خیلی سریع است." }, { en: "Turn off the computer, please.", fa: "لطفاً کامپیوتر را خاموش کن." }] },
      { word: "teacher", meaning: "معلم", en: "Our teacher is very kind.", fa: "معلم ما خیلی مهربان است.", icon: "👩‍🏫", examples: [{ en: "Our teacher is very kind.", fa: "معلم ما خیلی مهربان است." }, { en: "The teacher writes on the board.", fa: "معلم روی تخته می‌نویسد." }, { en: "Ask your teacher for help.", fa: "از معلمت کمک بخواه." }] },
      { word: "door", meaning: "در", en: "Please close the door.", fa: "لطفاً در را ببند.", icon: "🚪", examples: [{ en: "Please close the door.", fa: "لطفاً در را ببند." }, { en: "Someone is at the door.", fa: "یک نفر پشت در است." }, { en: "The door is open.", fa: "در باز است." }] },
      { word: "doorbell", meaning: "زنگ در", en: "Someone is ringing the doorbell.", fa: "یک نفر دارد زنگ در را می‌زند.", icon: "🔔", examples: [{ en: "Someone is ringing the doorbell.", fa: "یک نفر دارد زنگ در را می‌زند." }, { en: "I heard the doorbell this morning.", fa: "امروز صبح صدای زنگ در را شنیدم." }, { en: "Please answer the doorbell.", fa: "لطفاً در را باز کن." }] },
      { word: "window", meaning: "پنجره", en: "The window is open.", fa: "پنجره باز است.", icon: "🪟", examples: [{ en: "The window is open.", fa: "پنجره باز است." }, { en: "I looked out the window.", fa: "از پنجره بیرون را نگاه کردم." }, { en: "Please close the window.", fa: "لطفاً پنجره را ببند." }] },
      { word: "chair", meaning: "صندلی", en: "This chair is very comfortable.", fa: "این صندلی خیلی راحت است.", icon: "🪑", examples: [{ en: "This chair is very comfortable.", fa: "این صندلی خیلی راحت است." }, { en: "Sit on the chair, please.", fa: "لطفاً روی صندلی بنشین." }, { en: "The chair is next to the table.", fa: "صندلی کنار میز است." }] },
      { word: "table", meaning: "میز", en: "The keys are on the table.", fa: "کلیدها روی میز هستند.", icon: "🪵", examples: [{ en: "The keys are on the table.", fa: "کلیدها روی میز هستند." }, { en: "We eat dinner at the table.", fa: "ما سر میز شام می‌خوریم." }, { en: "The table is very clean.", fa: "میز خیلی تمیز است." }] },
      { word: "bed", meaning: "تخت", en: "I go to bed at ten.", fa: "من ساعت ده به رختخواب می‌روم.", icon: "🛏️", examples: [{ en: "I go to bed at ten.", fa: "من ساعت ده به رختخواب می‌روم." }, { en: "My bed is very comfortable.", fa: "تخت من خیلی راحت است." }, { en: "The cat is sleeping on the bed.", fa: "گربه روی تخت خوابیده است." }] },
      { word: "kitchen", meaning: "آشپزخانه", en: "My mother is in the kitchen.", fa: "مادرم در آشپزخانه است.", icon: "🍳", examples: [{ en: "My mother is in the kitchen.", fa: "مادرم در آشپزخانه است." }, { en: "The kitchen is clean.", fa: "آشپزخانه تمیز است." }, { en: "We cook dinner in the kitchen.", fa: "ما شام را در آشپزخانه درست می‌کنیم." }] },
      { word: "bathroom", meaning: "حمام، دستشویی", en: "The bathroom is upstairs.", fa: "حمام طبقه بالاست.", icon: "🚿", examples: [{ en: "The bathroom is upstairs.", fa: "حمام طبقه بالاست." }, { en: "I need to go to the bathroom.", fa: "باید به دستشویی بروم." }, { en: "The bathroom door is closed.", fa: "در حمام بسته است." }] },
      { word: "mirror", meaning: "آینه", en: "I looked in the mirror.", fa: "در آینه نگاه کردم.", icon: "🪞", examples: [{ en: "I looked in the mirror.", fa: "در آینه نگاه کردم." }, { en: "The mirror is on the wall.", fa: "آینه روی دیوار است." }, { en: "She checked her hair in the mirror.", fa: "او موهایش را در آینه نگاه کرد." }] },
      { word: "towel", meaning: "حوله", en: "I need a clean towel.", fa: "به یک حوله تمیز نیاز دارم.", icon: "🧴", examples: [{ en: "I need a clean towel.", fa: "به یک حوله تمیز نیاز دارم." }, { en: "The towel is in the bathroom.", fa: "حوله در حمام است." }, { en: "He dried his hands with a towel.", fa: "او دست‌هایش را با حوله خشک کرد." }] },
      { word: "soap", meaning: "صابون", en: "Wash your hands with soap.", fa: "دست‌هایت را با صابون بشوی.", icon: "🧼", examples: [{ en: "Wash your hands with soap.", fa: "دست‌هایت را با صابون بشوی." }, { en: "The soap smells good.", fa: "صابون بوی خوبی دارد." }, { en: "We need more soap.", fa: "ما صابون بیشتری نیاز داریم." }] },
      { word: "brush", meaning: "برس، مسواک", en: "I brush my teeth every morning.", fa: "من هر روز صبح دندان‌هایم را مسواک می‌زنم.", icon: "🪥", examples: [{ en: "I brush my teeth every morning.", fa: "من هر روز صبح دندان‌هایم را مسواک می‌زنم." }, { en: "My hair brush is on the table.", fa: "برس موی من روی میز است." }, { en: "Do not forget your toothbrush.", fa: "مسواکت را فراموش نکن." }] },
      { word: "clothes", meaning: "لباس‌ها", en: "My clothes are clean.", fa: "لباس‌هایم تمیز هستند.", icon: "👕", examples: [{ en: "My clothes are clean.", fa: "لباس‌هایم تمیز هستند." }, { en: "I need new clothes.", fa: "به لباس‌های جدید نیاز دارم." }, { en: "She puts her clothes in the closet.", fa: "او لباس‌هایش را در کمد می‌گذارد." }] },
      { word: "shirt", meaning: "پیراهن", en: "I like your shirt.", fa: "پیراهنت را دوست دارم.", icon: "👔", examples: [{ en: "I like your shirt.", fa: "پیراهنت را دوست دارم." }, { en: "He is wearing a blue shirt.", fa: "او یک پیراهن آبی پوشیده است." }, { en: "This shirt is too big for me.", fa: "این پیراهن برای من خیلی بزرگ است." }] },
      { word: "shoe", meaning: "کفش", en: "My shoes are new.", fa: "کفش‌های من جدید هستند.", icon: "👟", examples: [{ en: "My shoes are new.", fa: "کفش‌های من جدید هستند." }, { en: "I need comfortable shoes.", fa: "به کفش‌های راحت نیاز دارم." }, { en: "His shoes are under the bed.", fa: "کفش‌هایش زیر تخت هستند." }] },
      { word: "bag", meaning: "کیف", en: "My bag is heavy.", fa: "کیف من سنگین است.", icon: "🎒", examples: [{ en: "My bag is heavy.", fa: "کیف من سنگین است." }, { en: "I put my phone in my bag.", fa: "گوشی‌ام را داخل کیفم گذاشتم." }, { en: "She has a new school bag.", fa: "او یک کیف مدرسه جدید دارد." }] },
      { word: "key", meaning: "کلید", en: "I cannot find my keys.", fa: "نمی‌توانم کلیدهایم را پیدا کنم.", icon: "🔑", examples: [{ en: "I cannot find my keys.", fa: "نمی‌توانم کلیدهایم را پیدا کنم." }, { en: "The key is on the table.", fa: "کلید روی میز است." }, { en: "She opened the door with a key.", fa: "او با یک کلید در را باز کرد." }] },
      { word: "clock", meaning: "ساعت", en: "The clock is on the wall.", fa: "ساعت روی دیوار است.", icon: "⏰", examples: [{ en: "The clock is on the wall.", fa: "ساعت روی دیوار است." }, { en: "I looked at the clock.", fa: "به ساعت نگاه کردم." }, { en: "The clock says eight o'clock.", fa: "ساعت هشت را نشان می‌دهد." }] },
      { word: "morning", meaning: "صبح", en: "I wake up early in the morning.", fa: "من صبح زود بیدار می‌شوم.", icon: "🌅", examples: [{ en: "I wake up early in the morning.", fa: "من صبح زود بیدار می‌شوم." }, { en: "Good morning!", fa: "صبح بخیر!" }, { en: "I drink coffee every morning.", fa: "من هر صبح قهوه می‌نوشم." }] },
      { word: "afternoon", meaning: "بعدازظهر", en: "I study in the afternoon.", fa: "من بعدازظهر درس می‌خوانم.", icon: "☀️", examples: [{ en: "I study in the afternoon.", fa: "من بعدازظهر درس می‌خوانم." }, { en: "Good afternoon!", fa: "بعدازظهر بخیر!" }, { en: "We have lunch in the afternoon.", fa: "ما بعدازظهر ناهار می‌خوریم." }] },
      { word: "evening", meaning: "عصر، شب", en: "I walk in the evening.", fa: "من عصرها پیاده‌روی می‌کنم.", icon: "🌆", examples: [{ en: "I walk in the evening.", fa: "من عصرها پیاده‌روی می‌کنم." }, { en: "We watch TV in the evening.", fa: "ما عصرها تلویزیون نگاه می‌کنیم." }, { en: "Have a nice evening.", fa: "عصر خوبی داشته باشی." }] },
      { word: "week", meaning: "هفته", en: "I work five days a week.", fa: "من پنج روز در هفته کار می‌کنم.", icon: "📅", examples: [{ en: "I work five days a week.", fa: "من پنج روز در هفته کار می‌کنم." }, { en: "This week is busy.", fa: "این هفته شلوغ است." }, { en: "See you next week.", fa: "هفته بعد می‌بینمت." }] },
      { word: "month", meaning: "ماه", en: "My birthday is next month.", fa: "تولدم ماه بعد است.", icon: "🗓️", examples: [{ en: "My birthday is next month.", fa: "تولدم ماه بعد است." }, { en: "I save money every month.", fa: "من هر ماه پول پس‌انداز می‌کنم." }, { en: "This month is very busy.", fa: "این ماه خیلی شلوغ است." }] },
      { word: "year", meaning: "سال", en: "I started school last year.", fa: "من سال گذشته مدرسه را شروع کردم.", icon: "🎆", examples: [{ en: "I started school last year.", fa: "من سال گذشته مدرسه را شروع کردم." }, { en: "This year is special.", fa: "امسال خاص است." }, { en: "We travel every year.", fa: "ما هر سال سفر می‌کنیم." }] },
      { word: "clean", meaning: "تمیز", en: "My room is clean.", fa: "اتاق من تمیز است.", icon: "✨", examples: [{ en: "My room is clean.", fa: "اتاق من تمیز است." }, { en: "Please keep your hands clean.", fa: "لطفاً دست‌هایت را تمیز نگه دار." }, { en: "The kitchen is clean today.", fa: "آشپزخانه امروز تمیز است." }] },
      { word: "dirty", meaning: "کثیف", en: "My shoes are dirty.", fa: "کفش‌هایم کثیف هستند.", icon: "🧽", examples: [{ en: "My shoes are dirty.", fa: "کفش‌هایم کثیف هستند." }, { en: "The floor is dirty.", fa: "زمین کثیف است." }, { en: "Do not touch the dirty water.", fa: "به آب کثیف دست نزن." }] },
      { word: "open", meaning: "باز", en: "The door is open.", fa: "در باز است.", icon: "🚪", examples: [{ en: "The door is open.", fa: "در باز است." }, { en: "Please open the window.", fa: "لطفاً پنجره را باز کن." }, { en: "The store is open today.", fa: "فروشگاه امروز باز است." }] },
      { word: "close", meaning: "بستن", en: "Please close the door.", fa: "لطفاً در را ببند.", icon: "🔒", examples: [{ en: "Please close the door.", fa: "لطفاً در را ببند." }, { en: "I close the window at night.", fa: "من شب‌ها پنجره را می‌بندم." }, { en: "Close your book, please.", fa: "لطفاً کتابت را ببند." }] },
      { word: "turn on", meaning: "روشن کردن", en: "Turn on the lights, please.", fa: "لطفاً چراغ‌ها را روشن کن.", icon: "💡", examples: [{ en: "Turn on the lights, please.", fa: "لطفاً چراغ‌ها را روشن کن." }, { en: "I turn on my computer every morning.", fa: "من هر صبح کامپیوترم را روشن می‌کنم." }, { en: "She turned on the TV.", fa: "او تلویزیون را روشن کرد." }] },
      { word: "turn off", meaning: "خاموش کردن", en: "Please turn off the lights.", fa: "لطفاً چراغ‌ها را خاموش کن.", icon: "🔌", examples: [{ en: "Please turn off the lights.", fa: "لطفاً چراغ‌ها را خاموش کن." }, { en: "I turn off my phone before sleep.", fa: "من قبل از خواب گوشی‌ام را خاموش می‌کنم." }, { en: "He turned off the TV.", fa: "او تلویزیون را خاموش کرد." }] },
      { word: "sit", meaning: "نشستن", en: "Please sit here.", fa: "لطفاً اینجا بنشین.", icon: "🪑", examples: [{ en: "Please sit here.", fa: "لطفاً اینجا بنشین." }, { en: "I sit at my desk every day.", fa: "من هر روز پشت میزم می‌نشینم." }, { en: "They sit together at lunch.", fa: "آن‌ها هنگام ناهار کنار هم می‌نشینند." }] },
      { word: "stand", meaning: "ایستادن", en: "Please stand up.", fa: "لطفاً بلند شو.", icon: "🧍", examples: [{ en: "Please stand up.", fa: "لطفاً بلند شو." }, { en: "He is standing near the door.", fa: "او نزدیک در ایستاده است." }, { en: "I stand in line at the store.", fa: "من در فروشگاه در صف می‌ایستم." }] },
      { word: "walk", meaning: "راه رفتن", en: "I walk to school every day.", fa: "من هر روز پیاده به مدرسه می‌روم.", icon: "🚶", examples: [{ en: "I walk to school every day.", fa: "من هر روز پیاده به مدرسه می‌روم." }, { en: "We walk in the park.", fa: "ما در پارک قدم می‌زنیم." }, { en: "She walks home after work.", fa: "او بعد از کار پیاده به خانه می‌رود." }] },
      { word: "run", meaning: "دویدن", en: "I run in the morning.", fa: "من صبح‌ها می‌دوم.", icon: "🏃", examples: [{ en: "I run in the morning.", fa: "من صبح‌ها می‌دوم." }, { en: "The boy is running outside.", fa: "پسر بیرون دارد می‌دود." }, { en: "She runs every weekend.", fa: "او هر آخر هفته می‌دود." }] },
      { word: "wait", meaning: "منتظر ماندن", en: "Please wait here.", fa: "لطفاً اینجا منتظر بمان.", icon: "⏳", examples: [{ en: "Please wait here.", fa: "لطفاً اینجا منتظر بمان." }, { en: "I am waiting for my friend.", fa: "من منتظر دوستم هستم." }, { en: "We wait for the bus every morning.", fa: "ما هر صبح منتظر اتوبوس می‌مانیم." }] },
      { word: "help", meaning: "کمک کردن", en: "Can you help me?", fa: "می‌توانی به من کمک کنی؟", icon: "🤝", examples: [{ en: "Can you help me?", fa: "می‌توانی به من کمک کنی؟" }, { en: "I help my family at home.", fa: "من در خانه به خانواده‌ام کمک می‌کنم." }, { en: "She helped her friend.", fa: "او به دوستش کمک کرد." }] },
      { word: "need", meaning: "نیاز داشتن", en: "I need some water.", fa: "من کمی آب نیاز دارم.", icon: "🤲", examples: [{ en: "I need some water.", fa: "من کمی آب نیاز دارم." }, { en: "We need more time.", fa: "ما زمان بیشتری نیاز داریم." }, { en: "She needs a new phone.", fa: "او به یک گوشی جدید نیاز دارد." }] },
      { word: "want", meaning: "خواستن", en: "I want a cup of coffee.", fa: "من یک فنجان قهوه می‌خواهم.", icon: "💭", examples: [{ en: "I want a cup of coffee.", fa: "من یک فنجان قهوه می‌خواهم." }, { en: "They want to go home.", fa: "آن‌ها می‌خواهند به خانه بروند." }, { en: "She wants a new bag.", fa: "او یک کیف جدید می‌خواهد." }] },
      { word: "like", meaning: "دوست داشتن", en: "I like this song.", fa: "من این آهنگ را دوست دارم.", icon: "👍", examples: [{ en: "I like this song.", fa: "من این آهنگ را دوست دارم." }, { en: "He likes coffee.", fa: "او قهوه دوست دارد." }, { en: "We like our new home.", fa: "ما خانه جدیدمان را دوست داریم." }] },
      { word: "love", meaning: "دوست داشتن زیاد، عاشق بودن", en: "I love my family.", fa: "من خانواده‌ام را خیلی دوست دارم.", icon: "❤️", examples: [{ en: "I love my family.", fa: "من خانواده‌ام را خیلی دوست دارم." }, { en: "She loves music.", fa: "او موسیقی را خیلی دوست دارد." }, { en: "They love this place.", fa: "آن‌ها این مکان را خیلی دوست دارند." }] },
      { word: "live", meaning: "زندگی کردن", en: "I live in Canada.", fa: "من در کانادا زندگی می‌کنم.", icon: "🏡", examples: [{ en: "I live in Canada.", fa: "من در کانادا زندگی می‌کنم." }, { en: "They live near the school.", fa: "آن‌ها نزدیک مدرسه زندگی می‌کنند." }, { en: "She lives with her family.", fa: "او با خانواده‌اش زندگی می‌کند." }] },
      { id: "work_verb", word: "work", meaning: "کار کردن", en: "I work in an office.", fa: "من در یک دفتر کار می‌کنم.", icon: "💼", examples: [{ en: "I work in an office.", fa: "من در یک دفتر کار می‌کنم." }, { en: "My father works every day.", fa: "پدرم هر روز کار می‌کند." }, { en: "She works from home.", fa: "او از خانه کار می‌کند." }] },
      { word: "study", meaning: "درس خواندن", en: "I study English every day.", fa: "من هر روز انگلیسی می‌خوانم.", icon: "📚", examples: [{ en: "I study English every day.", fa: "من هر روز انگلیسی می‌خوانم." }, { en: "She studies at night.", fa: "او شب‌ها درس می‌خواند." }, { en: "They study together.", fa: "آن‌ها با هم درس می‌خوانند." }] },
      { word: "learn", meaning: "یاد گرفتن", en: "I want to learn English.", fa: "من می‌خواهم انگلیسی یاد بگیرم.", icon: "🧠", examples: [{ en: "I want to learn English.", fa: "من می‌خواهم انگلیسی یاد بگیرم." }, { en: "Children learn quickly.", fa: "بچه‌ها سریع یاد می‌گیرند." }, { en: "She learns new words every day.", fa: "او هر روز کلمات جدید یاد می‌گیرد." }] },
      { word: "read", meaning: "خواندن", en: "I read a book before bed.", fa: "من قبل از خواب کتاب می‌خوانم.", icon: "📖", examples: [{ en: "I read a book before bed.", fa: "من قبل از خواب کتاب می‌خوانم." }, { en: "She reads the news every morning.", fa: "او هر صبح اخبار می‌خواند." }, { en: "Can you read this message?", fa: "می‌توانی این پیام را بخوانی؟" }] },
      { word: "write", meaning: "نوشتن", en: "I write in my notebook.", fa: "من در دفترم می‌نویسم.", icon: "✍️", examples: [{ en: "I write in my notebook.", fa: "من در دفترم می‌نویسم." }, { en: "Please write your name here.", fa: "لطفاً نامت را اینجا بنویس." }, { en: "She writes emails at work.", fa: "او در محل کار ایمیل می‌نویسد." }] },
      { word: "speak", meaning: "صحبت کردن", en: "I speak English and Persian.", fa: "من انگلیسی و فارسی صحبت می‌کنم.", icon: "🗣️", examples: [{ en: "I speak English and Persian.", fa: "من انگلیسی و فارسی صحبت می‌کنم." }, { en: "She speaks slowly.", fa: "او آهسته صحبت می‌کند." }, { en: "Can I speak with you?", fa: "می‌توانم با تو صحبت کنم؟" }] },
      { word: "listen", meaning: "گوش دادن", en: "I listen to music every day.", fa: "من هر روز به موسیقی گوش می‌دهم.", icon: "🎧", examples: [{ en: "I listen to music every day.", fa: "من هر روز به موسیقی گوش می‌دهم." }, { en: "Please listen carefully.", fa: "لطفاً با دقت گوش کن." }, { en: "She listens to her teacher.", fa: "او به معلمش گوش می‌دهد." }] },
      { word: "watch", meaning: "تماشا کردن", en: "We watch TV after dinner.", fa: "ما بعد از شام تلویزیون تماشا می‌کنیم.", icon: "📺", examples: [{ en: "We watch TV after dinner.", fa: "ما بعد از شام تلویزیون تماشا می‌کنیم." }, { en: "I watch movies on weekends.", fa: "من آخر هفته‌ها فیلم تماشا می‌کنم." }, { en: "She watches the game.", fa: "او بازی را تماشا می‌کند." }] },
      { word: "play", meaning: "بازی کردن", en: "Children play outside.", fa: "بچه‌ها بیرون بازی می‌کنند.", icon: "🎮", examples: [{ en: "Children play outside.", fa: "بچه‌ها بیرون بازی می‌کنند." }, { en: "I play soccer with my friends.", fa: "من با دوستانم فوتبال بازی می‌کنم." }, { en: "The dog likes to play.", fa: "سگ دوست دارد بازی کند." }] },
      { word: "call", meaning: "تماس گرفتن", en: "I will call you later.", fa: "بعداً با تو تماس می‌گیرم.", icon: "📞", examples: [{ en: "I will call you later.", fa: "بعداً با تو تماس می‌گیرم." }, { en: "She calls her mother every day.", fa: "او هر روز به مادرش زنگ می‌زند." }, { en: "Please call me tonight.", fa: "لطفاً امشب با من تماس بگیر." }] },
      { word: "wake up", meaning: "بیدار شدن", en: "I wake up at seven every morning.", fa: "من هر روز صبح ساعت هفت بیدار می‌شوم.", icon: "⏰", examples: [{ en: "I wake up at seven every morning.", fa: "من هر روز صبح ساعت هفت بیدار می‌شوم." }, { en: "She wakes up early for work.", fa: "او برای کار زود بیدار می‌شود." }, { en: "I usually wake up before my alarm.", fa: "من معمولاً قبل از زنگ ساعت بیدار می‌شوم." }] },
      { word: "sleep", meaning: "خوابیدن", en: "I sleep eight hours every night.", fa: "من هر شب هشت ساعت می‌خوابم.", icon: "😴", examples: [{ en: "I sleep eight hours every night.", fa: "من هر شب هشت ساعت می‌خوابم." }, { en: "The baby is sleeping now.", fa: "بچه الان خوابیده است." }, { en: "I need to sleep early tonight.", fa: "امشب باید زود بخوابم." }] },
      { word: "eat", meaning: "غذا خوردن", en: "I eat breakfast every morning.", fa: "من هر صبح صبحانه می‌خورم.", icon: "🍽️", examples: [{ en: "I eat breakfast every morning.", fa: "من هر صبح صبحانه می‌خورم." }, { en: "We eat dinner together.", fa: "ما با هم شام می‌خوریم." }, { en: "The children are eating lunch.", fa: "بچه‌ها دارند ناهار می‌خورند." }] },
      { word: "drink", meaning: "نوشیدن", en: "I drink water every day.", fa: "من هر روز آب می‌نوشم.", icon: "🥤", examples: [{ en: "I drink water every day.", fa: "من هر روز آب می‌نوشم." }, { en: "She drinks coffee in the morning.", fa: "او صبح‌ها قهوه می‌نوشد." }, { en: "He is drinking juice.", fa: "او دارد آبمیوه می‌نوشد." }] },
      { word: "cook", meaning: "آشپزی کردن", en: "I cook dinner at home.", fa: "من در خانه شام درست می‌کنم.", icon: "🍳", examples: [{ en: "I cook dinner at home.", fa: "من در خانه شام درست می‌کنم." }, { en: "My father likes to cook.", fa: "پدرم دوست دارد آشپزی کند." }, { en: "She is cooking rice for lunch.", fa: "او برای ناهار برنج درست می‌کند." }] },
      { word: "wash", meaning: "شستن", en: "I wash my hands before eating.", fa: "من قبل از غذا خوردن دست‌هایم را می‌شویم.", icon: "🧼", examples: [{ en: "I wash my hands before eating.", fa: "من قبل از غذا خوردن دست‌هایم را می‌شویم." }, { en: "She washes the dishes after dinner.", fa: "او بعد از شام ظرف‌ها را می‌شوید." }, { en: "Please wash your face.", fa: "لطفاً صورتت را بشوی." }] },
      { word: "wear", meaning: "پوشیدن", en: "I wear a jacket in winter.", fa: "من در زمستان کت می‌پوشم.", icon: "🧥", examples: [{ en: "I wear a jacket in winter.", fa: "من در زمستان کت می‌پوشم." }, { en: "She is wearing a red dress.", fa: "او یک لباس قرمز پوشیده است." }, { en: "He wears glasses every day.", fa: "او هر روز عینک می‌زند." }] },
      { word: "change", meaning: "تغییر دادن، عوض کردن", en: "I need to change my clothes.", fa: "من باید لباس‌هایم را عوض کنم.", icon: "🔄", examples: [{ en: "I need to change my clothes.", fa: "من باید لباس‌هایم را عوض کنم." }, { en: "She changed her phone number.", fa: "او شماره تلفنش را تغییر داد." }, { en: "I change my shoes after work.", fa: "من بعد از کار کفش‌هایم را عوض می‌کنم." }] },
      { word: "move", meaning: "حرکت کردن، جابه‌جا شدن", en: "We move to a new house next month.", fa: "ما ماه آینده به خانه جدیدی نقل مکان می‌کنیم.", icon: "📦", examples: [{ en: "We move to a new house next month.", fa: "ما ماه آینده به خانه جدیدی نقل مکان می‌کنیم." }, { en: "Please move your chair.", fa: "لطفاً صندلی‌ات را جابه‌جا کن." }, { en: "The car is moving slowly.", fa: "ماشین آرام حرکت می‌کند." }] },
      { word: "bring", meaning: "آوردن", en: "Please bring your book tomorrow.", fa: "لطفاً فردا کتابت را بیاور.", icon: "📥", examples: [{ en: "Please bring your book tomorrow.", fa: "لطفاً فردا کتابت را بیاور." }, { en: "I bring lunch from home.", fa: "من ناهار را از خانه می‌آورم." }, { en: "She brings her bag to school.", fa: "او کیفش را به مدرسه می‌آورد." }] },
      { word: "take", meaning: "برداشتن، بردن", en: "Take your keys with you.", fa: "کلیدهایت را با خودت ببر.", icon: "🤲", examples: [{ en: "Take your keys with you.", fa: "کلیدهایت را با خودت ببر." }, { en: "I take the bus every day.", fa: "من هر روز با اتوبوس می‌روم." }, { en: "She takes a picture of her food.", fa: "او از غذایش عکس می‌گیرد." }] },
      { word: "give", meaning: "دادن", en: "Please give me your phone.", fa: "لطفاً گوشی‌ات را به من بده.", icon: "🎁", examples: [{ en: "Please give me your phone.", fa: "لطفاً گوشی‌ات را به من بده." }, { en: "He gives his friend a gift.", fa: "او به دوستش هدیه می‌دهد." }, { en: "I give my cat some food.", fa: "من به گربه‌ام کمی غذا می‌دهم." }] },
      { word: "find", meaning: "پیدا کردن", en: "I cannot find my wallet.", fa: "نمی‌توانم کیف پولم را پیدا کنم.", icon: "🔍", examples: [{ en: "I cannot find my wallet.", fa: "نمی‌توانم کیف پولم را پیدا کنم." }, { en: "She found her keys.", fa: "او کلیدهایش را پیدا کرد." }, { en: "We need to find a place to sit.", fa: "ما باید جایی برای نشستن پیدا کنیم." }] },
      { word: "lose", meaning: "گم کردن", en: "I lost my phone yesterday.", fa: "من دیروز گوشی‌ام را گم کردم.", icon: "❓", examples: [{ en: "I lost my phone yesterday.", fa: "من دیروز گوشی‌ام را گم کردم." }, { en: "She always loses her keys.", fa: "او همیشه کلیدهایش را گم می‌کند." }, { en: "Do not lose your bag.", fa: "کیفت را گم نکن." }] },
      { word: "remember", meaning: "به یاد آوردن، یاد داشتن", en: "I remember your name.", fa: "من اسم تو را به یاد دارم.", icon: "💡", examples: [{ en: "I remember your name.", fa: "من اسم تو را به یاد دارم." }, { en: "Please remember your homework.", fa: "لطفاً تکلیفت را یادت باشد." }, { en: "She remembers her first teacher.", fa: "او اولین معلمش را به یاد دارد." }] },
      { word: "forget", meaning: "فراموش کردن", en: "I forgot my keys at home.", fa: "من کلیدهایم را در خانه جا گذاشتم.", icon: "💭", examples: [{ en: "I forgot my keys at home.", fa: "من کلیدهایم را در خانه جا گذاشتم." }, { en: "Do not forget your homework.", fa: "تکلیفت را فراموش نکن." }, { en: "She forgot his name.", fa: "او اسم او را فراموش کرد." }] },
      { word: "start", meaning: "شروع کردن", en: "I start work at nine.", fa: "من ساعت نه کارم را شروع می‌کنم.", icon: "🚀", examples: [{ en: "I start work at nine.", fa: "من ساعت نه کارم را شروع می‌کنم." }, { en: "The movie starts at eight.", fa: "فیلم ساعت هشت شروع می‌شود." }, { en: "She starts her day with coffee.", fa: "او روزش را با قهوه شروع می‌کند." }] },
      { word: "finish", meaning: "تمام کردن، به پایان رساندن", en: "I finish school at three.", fa: "من ساعت سه مدرسه‌ام تمام می‌شود.", icon: "🏁", examples: [{ en: "I finish school at three.", fa: "من ساعت سه مدرسه‌ام تمام می‌شود." }, { en: "She finished her homework.", fa: "او تکلیفش را تمام کرد." }, { en: "We finish dinner at seven.", fa: "ما شام را ساعت هفت تمام می‌کنیم." }] },
      { word: "use", meaning: "استفاده کردن", en: "I use my phone every day.", fa: "من هر روز از گوشی‌ام استفاده می‌کنم.", icon: "📱", examples: [{ en: "I use my phone every day.", fa: "من هر روز از گوشی‌ام استفاده می‌کنم." }, { en: "She uses a computer at work.", fa: "او در محل کار از کامپیوتر استفاده می‌کند." }, { en: "We use this table for dinner.", fa: "ما از این میز برای شام استفاده می‌کنیم." }] },
      { word: "make", meaning: "درست کردن، ساختن", en: "I make breakfast every morning.", fa: "من هر صبح صبحانه درست می‌کنم.", icon: "🛠️", examples: [{ en: "I make breakfast every morning.", fa: "من هر صبح صبحانه درست می‌کنم." }, { en: "She makes a cake for her family.", fa: "او برای خانواده‌اش کیک درست می‌کند." }, { en: "We make plans for the weekend.", fa: "ما برای آخر هفته برنامه می‌ریزیم." }] },
      { word: "clean up", meaning: "مرتب و تمیز کردن", en: "I clean up my room every week.", fa: "من هر هفته اتاقم را مرتب و تمیز می‌کنم.", icon: "🧹", examples: [{ en: "I clean up my room every week.", fa: "من هر هفته اتاقم را مرتب و تمیز می‌کنم." }, { en: "Please clean up the kitchen.", fa: "لطفاً آشپزخانه را تمیز و مرتب کن." }, { en: "The children clean up their toys.", fa: "بچه‌ها اسباب‌بازی‌هایشان را جمع می‌کنند." }] },
      { word: "pick up", meaning: "برداشتن، جمع کردن", en: "Pick up your clothes from the floor.", fa: "لباس‌هایت را از روی زمین بردار.", icon: "🧺", examples: [{ en: "Pick up your clothes from the floor.", fa: "لباس‌هایت را از روی زمین بردار." }, { en: "I pick up my phone when it rings.", fa: "وقتی گوشی‌ام زنگ می‌خورد آن را برمی‌دارم." }, { en: "She picks up her bag from the chair.", fa: "او کیفش را از روی صندلی برمی‌دارد." }] },
      { word: "put", meaning: "گذاشتن", en: "Put your book on the table.", fa: "کتابت را روی میز بگذار.", icon: "📥", examples: [{ en: "Put your book on the table.", fa: "کتابت را روی میز بگذار." }, { en: "I put my clothes in the closet.", fa: "لباس‌هایم را در کمد می‌گذارم." }, { en: "She puts sugar in her coffee.", fa: "او در قهوه‌اش شکر می‌ریزد." }] },
      { word: "keep", meaning: "نگه داشتن", en: "I keep my keys in my bag.", fa: "من کلیدهایم را در کیفم نگه می‌دارم.", icon: "🔐", examples: [{ en: "I keep my keys in my bag.", fa: "من کلیدهایم را در کیفم نگه می‌دارم." }, { en: "Please keep your room clean.", fa: "لطفاً اتاقت را تمیز نگه دار." }, { en: "She keeps old photos.", fa: "او عکس‌های قدیمی را نگه می‌دارد." }] },
      { word: "meet", meaning: "ملاقات کردن، دیدن", en: "I meet my friends after school.", fa: "من بعد از مدرسه دوستانم را می‌بینم.", icon: "🤝", examples: [{ en: "I meet my friends after school.", fa: "من بعد از مدرسه دوستانم را می‌بینم." }, { en: "Nice to meet you.", fa: "از دیدنت خوشحالم." }, { en: "She meets her family on weekends.", fa: "او آخر هفته‌ها خانواده‌اش را می‌بیند." }] },
      { word: "visit", meaning: "دیدن کردن، ملاقات کردن", en: "I visit my grandparents on Sundays.", fa: "من یکشنبه‌ها به دیدن پدربزرگ و مادربزرگم می‌روم.", icon: "🏡", examples: [{ en: "I visit my grandparents on Sundays.", fa: "من یکشنبه‌ها به دیدن پدربزرگ و مادربزرگم می‌روم." }, { en: "We visit the park in the afternoon.", fa: "ما بعدازظهر به پارک می‌رویم." }, { en: "She visits her friend every week.", fa: "او هر هفته به دیدن دوستش می‌رود." }] },
      { word: "ask", meaning: "پرسیدن", en: "I ask my teacher a question.", fa: "من از معلمم یک سؤال می‌پرسم.", icon: "🙋", examples: [{ en: "I ask my teacher a question.", fa: "من از معلمم یک سؤال می‌پرسم." }, { en: "She asks for help.", fa: "او درخواست کمک می‌کند." }, { en: "Can I ask you something?", fa: "می‌توانم چیزی از تو بپرسم؟" }] },
      { word: "answer", meaning: "جواب دادن", en: "Please answer my question.", fa: "لطفاً به سؤال من جواب بده.", icon: "💬", examples: [{ en: "Please answer my question.", fa: "لطفاً به سؤال من جواب بده." }, { en: "He answers the phone.", fa: "او تلفن را جواب می‌دهد." }, { en: "She knows the answer.", fa: "او جواب را می‌داند." }] },
      { word: "tell", meaning: "گفتن، تعریف کردن", en: "Tell me your name, please.", fa: "لطفاً اسمت را به من بگو.", icon: "🗣️", examples: [{ en: "Tell me your name, please.", fa: "لطفاً اسمت را به من بگو." }, { en: "She tells a story to her children.", fa: "او برای بچه‌هایش یک داستان تعریف می‌کند." }, { en: "I tell my friend the news.", fa: "من خبر را به دوستم می‌گویم." }] },
      { word: "show", meaning: "نشان دادن", en: "Show me your picture.", fa: "عکست را به من نشان بده.", icon: "🖼️", examples: [{ en: "Show me your picture.", fa: "عکست را به من نشان بده." }, { en: "He shows his new phone.", fa: "او گوشی جدیدش را نشان می‌دهد." }, { en: "Can you show me the way?", fa: "می‌توانی راه را به من نشان بدهی؟" }] },
{ word: "room", meaning: "اتاق", en: "My room has a large window.", fa: "اتاق من یک پنجره بزرگ دارد.", icon: "🚪", examples: [{ en: "My room has a large window.", fa: "اتاق من یک پنجره بزرگ دارد." }, { en: "Clean your room before dinner.", fa: "اتاق خودت را قبل از شام تمیز کن." }, { en: "There is a small desk in the room.", fa: "یک میز کوچک در اتاق است." }] },
      { word: "wall", meaning: "دیوار", en: "There is a clock on the wall.", fa: "یک ساعت روی دیوار است.", icon: "🧱", examples: [{ en: "There is a clock on the wall.", fa: "یک ساعت روی دیوار است." }, { en: "We painted the wall light blue.", fa: "ما دیوار را آبی روشن رنگ کردیم." }, { en: "She hung a picture on the wall.", fa: "او عکسی را روی دیوار آویزان کرد." }] },
      { word: "floor", meaning: "کف اتاق، زمین", en: "The floor in the living room is clean.", fa: "کف اتاق نشیمن تمیز است.", icon: "🧹", examples: [{ en: "The floor in the living room is clean.", fa: "کف اتاق نشیمن تمیز است." }, { en: "Do not leave your shoes on the floor.", fa: "کفش‌هایت را روی کف زمین نگذار." }, { en: "He sat on the floor to read.", fa: "او برای خواندن روی زمین نشست." }] },
      { word: "roof", meaning: "سقف، بام", en: "Birds are sitting on the roof.", fa: "پرنده‌ها روی پشت‌بام نشسته‌اند.", icon: "🏠", examples: [{ en: "Birds are sitting on the roof.", fa: "پرنده‌ها روی پشت‌بام نشسته‌اند." }, { en: "Rain is falling on the roof.", fa: "باران روی سقف می‌بارد." }, { en: "Our house has a red roof.", fa: "خانه ما سقف قرمزی دارد." }] },
      { word: "lamp", meaning: "چراغ، لامپ", en: "Turn on the desk lamp, please.", fa: "لطفاً چراغ مطالعه را روشن کن.", icon: "💡", examples: [{ en: "Turn on the desk lamp, please.", fa: "لطفاً چراغ مطالعه را روشن کن." }, { en: "The lamp gives soft light.", fa: "چراغ نور ملایمی می‌دهد." }, { en: "I read under the bed lamp.", fa: "من زیر چراغ خواب مطالعه می‌کنم." }] },
      { word: "pillow", meaning: "بالش", en: "This soft pillow is very comfortable.", fa: "این بالش نرم بسیار راحت است.", icon: "🛏️", examples: [{ en: "This soft pillow is very comfortable.", fa: "این بالش نرم بسیار راحت است." }, { en: "Put your head on the pillow.", fa: "سرت را روی بالش بگذار." }, { en: "I bought two new pillows yesterday.", fa: "من دیروز دو بالش جدید خریدم." }] },
      { word: "blanket", meaning: "پتو", en: "I sleep with a warm blanket in winter.", fa: "من در زمستان با یک پتوی گرم می‌خوابم.", icon: "🛏️", examples: [{ en: "I sleep with a warm blanket in winter.", fa: "من در زمستان با یک پتوی گرم می‌خوابم." }, { en: "Fold the blanket neatly in the morning.", fa: "صبح پتو را مرتب تا کن." }, { en: "Give the baby a small blanket.", fa: "یک پتوی کوچک به نوزاد بده." }] },
      { word: "cup", meaning: "فنجان، لیوان", en: "I drink a cup of tea every morning.", fa: "من هر روز صبح یک فنجان چای می‌نوشم.", icon: "☕", examples: [{ en: "I drink a cup of tea every morning.", fa: "من هر روز صبح یک فنجان چای می‌نوشم." }, { en: "Pour hot milk into the cup.", fa: "شیر داغ را داخل فنجان بریز." }, { en: "Where is my favorite coffee cup?", fa: "فنجان قهوه موردعلاقه من کجاست؟" }] },
      { word: "plate", meaning: "بشقاب", en: "Put the food on your plate.", fa: "غذا را در بشقابت بگذار.", icon: "🍽️", examples: [{ en: "Put the food on your plate.", fa: "غذا را در بشقابت بگذار." }, { en: "She washed all the dirty plates.", fa: "او تمام بشقاب‌های کثیف را شست." }, { en: "The plate is on the dining table.", fa: "بشقاب روی میز غذاخوری است." }] },
      { word: "spoon", meaning: "قاشق", en: "Eat your soup with a spoon.", fa: "سوپت را با قاشق بخور.", icon: "🥄", examples: [{ en: "Eat your soup with a spoon.", fa: "سوپت را با قاشق بخور." }, { en: "I need a clean spoon for dessert.", fa: "من یک قاشق تمیز برای دسر می‌خواهم." }, { en: "Stir your tea with the small spoon.", fa: "چایت را با قاشق کوچک هم بزن." }] },
      { word: "fork", meaning: "چنگال", en: "Use a fork to eat your salad.", fa: "برای خوردن سالاد از چنگال استفاده کن.", icon: "🍴", examples: [{ en: "Use a fork to eat your salad.", fa: "برای خوردن سالاد از چنگال استفاده کن." }, { en: "The fork is to the left of the plate.", fa: "چنگال در سمت چپ بشقاب است." }, { en: "Pick up the fruit with a fork.", fa: "میوه را با چنگال بردار." }] },
      { word: "knife", meaning: "چاقو", en: "Cut the bread with a sharp knife.", fa: "نان را با یک چاقوی تیز ببر.", icon: "🔪", examples: [{ en: "Cut the bread with a sharp knife.", fa: "نان را با یک چاقوی تیز ببر." }, { en: "Be careful when you use that knife.", fa: "وقتی از آن چاقو استفاده می‌کنی مراقب باش." }, { en: "Put the butter knife next to the plate.", fa: "چاقوی کره را کنار بشقاب بگذار." }] },
      { word: "bottle", meaning: "بطری", en: "Fill this water bottle before leaving.", fa: "قبل از رفتن این بطری آب را پر کن.", icon: "🍶", examples: [{ en: "Fill this water bottle before leaving.", fa: "قبل از رفتن این بطری آب را پر کن." }, { en: "There is a bottle of milk in the fridge.", fa: "یک بطری شیر در یخچال هست." }, { en: "Close the bottle cap tightly.", fa: "در بطری را محکم ببند." }] },
      { word: "box", meaning: "جعبه", en: "Put your old toys in this box.", fa: "اسباب‌بازی‌های قدیمی‌ات را در این جعبه بگذار.", icon: "📦", examples: [{ en: "Put your old toys in this box.", fa: "اسباب‌بازی‌های قدیمی‌ات را در این جعبه بگذار." }, { en: "The cardboard box is light.", fa: "جعبه مقوایی سبک است." }, { en: "Open the gift box carefully.", fa: "جعبه کادو را با دقت باز کن." }] },
      { word: "plant", meaning: "گیاه، گلدان", en: "I water the house plants every Friday.", fa: "من هر جمعه به گیاهان خانگی آب می‌دهم.", icon: "🪴", examples: [{ en: "I water the house plants every Friday.", fa: "من هر جمعه به گیاهان خانگی آب می‌دهم." }, { en: "This green plant needs sunlight.", fa: "این گیاه سبز به نور خورشید نیاز دارد." }, { en: "There is a pretty plant on the windowsill.", fa: "یک گیاه قشنگ روی لبه پنجره است." }] },
      { word: "garden", meaning: "حیاط، باغچه", en: "Our small garden has red roses.", fa: "باغچه کوچک ما گل‌های رز قرمز دارد.", icon: "🏡", examples: [{ en: "Our small garden has red roses.", fa: "باغچه کوچک ما گل‌های رز قرمز دارد." }, { en: "The children play in the garden every day.", fa: "بچه‌ها هر روز در حیاط بازی می‌کنند." }, { en: "Grandmother sits in the garden in the evening.", fa: "مادربزرگ عصرها در باغچه می‌نشیند." }] },
      { word: "mother", meaning: "مادر", en: "My mother makes delicious breakfast.", fa: "مادرم صبحانه خوشمزه‌ای درست می‌کند.", icon: "👩", examples: [{ en: "My mother makes delicious breakfast.", fa: "مادرم صبحانه خوشمزه‌ای درست می‌کند." }, { en: "I called my mother after school.", fa: "من بعد از مدرسه با مادرم تماس گرفتم." }, { en: "Her mother is a kind teacher.", fa: "مادر او یک معلم مهربان است." }] },
      { word: "father", meaning: "پدر", en: "My father drives me to school.", fa: "پدرم مرا به مدرسه می‌رساند.", icon: "👨", examples: [{ en: "My father drives me to school.", fa: "پدرم مرا به مدرسه می‌رساند." }, { en: "He helps his father in the yard.", fa: "او به پدرش در حیاط کمک می‌کند." }, { en: "Father reads the news after work.", fa: "پدر بعد از کار اخبار می‌خواند." }] },
      { word: "sister", meaning: "خواهر", en: "My older sister helps me with homework.", fa: "خواهر بزرگترم در انجام تکالیف به من کمک می‌کند.", icon: "👧", examples: [{ en: "My older sister helps me with homework.", fa: "خواهر بزرگترم در انجام تکالیف به من کمک می‌کند." }, { en: "I have one sister and one brother.", fa: "من یک خواهر و یک برادر دارم." }, { en: "My sister likes to draw pictures.", fa: "خواهرم دوست دارد نقاشی بکشد." }] },
      { word: "brother", meaning: "برادر", en: "My younger brother plays with blocks.", fa: "برادر کوچکترم با لگوها بازی می‌کند.", icon: "👦", examples: [{ en: "My younger brother plays with blocks.", fa: "برادر کوچکترم با لگوها بازی می‌کند." }, { en: "I share my room with my brother.", fa: "من اتاقم را با برادرم شریک هستم." }, { en: "My brother rides his bike in the park.", fa: "برادرم در پارک دوچرخه‌سواری می‌کند." }] },
      { word: "baby", meaning: "نوزاد، کودک", en: "The baby is sleeping in the crib.", fa: "نوزاد در گهواره خوابیده است.", icon: "👶", examples: [{ en: "The baby is sleeping in the crib.", fa: "نوزاد در گهواره خوابیده است." }, { en: "Be quiet because the baby is asleep.", fa: "ساکت باش چون نوزاد خواب است." }, { en: "The baby smiled at his mother.", fa: "نوزاد به مادرش لبخند زد." }] },
      { word: "neighbor", meaning: "همسایه", en: "Our neighbor is a very friendly person.", fa: "همسایه ما فرد بسیار خوش‌برخوردی است.", icon: "🏘️", examples: [{ en: "Our neighbor is a very friendly person.", fa: "همسایه ما فرد بسیار خوش‌برخوردی است." }, { en: "We greeted our neighbor this morning.", fa: "ما امروز صبح به همسایه‌مان سلام کردیم." }, { en: "The neighbor has a friendly dog.", fa: "همسایه یک سگ مهربان دارد." }] },
      { word: "sun", meaning: "خورشید، آفتاب", en: "The sun rises in the east.", fa: "خورشید از مشرق طلوع می‌کند.", icon: "☀️", examples: [{ en: "The sun rises in the east.", fa: "خورشید از مشرق طلوع می‌کند." }, { en: "The warm sun shines through my window.", fa: "آفتاب گرم از پنجره‌ام به داخل می‌تابد." }, { en: "We sat under the sun in the park.", fa: "ما در پارک زیر آفتاب نشستیم." }] },
      { word: "moon", meaning: "ماه", en: "The full moon is bright tonight.", fa: "امشب ماه کامل بسیار درخشان است.", icon: "🌙", examples: [{ en: "The full moon is bright tonight.", fa: "امشب ماه کامل بسیار درخشان است." }, { en: "Look at the moon in the clear sky.", fa: "به ماه در آسمان صاف نگاه کن." }, { en: "The moon appears when the sun sets.", fa: "وقتی خورشید غروب می‌کند ماه پدیدار می‌شود." }] },
      { word: "star", meaning: "ستاره", en: "There are millions of stars in the sky.", fa: "میلیون‌ها ستاره در آسمان وجود دارند.", icon: "⭐", examples: [{ en: "There are millions of stars in the sky.", fa: "میلیون‌ها ستاره در آسمان وجود دارند." }, { en: "Can you see that bright star?", fa: "می‌توانی آن ستاره درخشان را ببینی؟" }, { en: "We counted the stars on a dark night.", fa: "ما در شبی تاریک ستاره‌ها را شمردیم." }] },
      { word: "sky", meaning: "آسمان", en: "The sky is clear and blue today.", fa: "امروز آسمان صاف و آبی است.", icon: "🌌", examples: [{ en: "The sky is clear and blue today.", fa: "امروز آسمان صاف و آبی است." }, { en: "White clouds are floating in the sky.", fa: "ابرهای سفید در آسمان شناور هستند." }, { en: "Birds fly high in the morning sky.", fa: "پرندگان در آسمان صبحگاهی اوج می‌گیرند." }] },
      { word: "rain", meaning: "باران", en: "I love the sound of rain on my window.", fa: "من صدای باران را روی پنجره‌ام دوست دارم.", icon: "🌧️", examples: [{ en: "I love the sound of rain on my window.", fa: "من صدای باران را روی پنجره‌ام دوست دارم." }, { en: "Take an umbrella because of the heavy rain.", fa: "به خاطر باران شدید چتر با خودت ببر." }, { en: "The rain stopped after twenty minutes.", fa: "باران بعد از بیست دقیقه بند آمد." }] },
      { word: "snow", meaning: "برف", en: "Snow covers the streets in winter.", fa: "برف در زمستان خیابان‌ها را می‌پوشاند.", icon: "❄️", examples: [{ en: "Snow covers the streets in winter.", fa: "برف در زمستان خیابان‌ها را می‌پوشاند." }, { en: "Children play with snow outside.", fa: "بچه‌ها بیرون با برف بازی می‌کنند." }, { en: "Fresh snow is white and soft.", fa: "برف تازه سفید و نرم است." }] },
      { word: "wind", meaning: "باد", en: "A cold wind is blowing outside.", fa: "باد سردی بیرون می‌وزد.", icon: "💨", examples: [{ en: "A cold wind is blowing outside.", fa: "باد سردی بیرون می‌وزد." }, { en: "The strong wind closed the door.", fa: "باد شدید در را بست." }, { en: "Leaves fall when the wind blows.", fa: "وقتی باد می‌وزد برگ‌ها می‌ریزند." }] },
      { word: "cloud", meaning: "ابر", en: "There is not a single cloud in the sky.", fa: "حتی یک تکه ابر هم در آسمان نیست.", icon: "☁️", examples: [{ en: "There is not a single cloud in the sky.", fa: "حتی یک تکه ابر هم در آسمان نیست." }, { en: "Dark clouds bring rain.", fa: "ابرهای تیره باران می‌آورند." }, { en: "The cloud blocked the hot sun.", fa: "ابر جلوی آفتاب داغ را گرفت." }] },
      { word: "hot", meaning: "گرم، داغ", en: "Be careful; the soup is very hot.", fa: "مراقب باش؛ سوپ خیلی داغ است.", icon: "🔥", examples: [{ en: "Be careful; the soup is very hot.", fa: "مراقب باش؛ سوپ خیلی داغ است." }, { en: "Summer days are usually hot.", fa: "روزهای تابستان معمولاً گرم هستند." }, { en: "I like to take a hot shower in the morning.", fa: "دوست دارم صبح‌ها دوش آب گرم بگیرم." }] },
      { word: "cold", meaning: "سرد", en: "Drink a glass of cold water.", fa: "یک لیوان آب سرد بنوش.", icon: "🧊", examples: [{ en: "Drink a glass of cold water.", fa: "یک لیوان آب سرد بنوش." }, { en: "It is cold outside; wear your coat.", fa: "بیرون هوا سرد است؛ پالتویت را بپوش." }, { en: "My hands feel cold in winter.", fa: "دست‌هایم در زمستان احساس سرما می‌کنند." }] },
      { word: "warm", meaning: "گرم، مطبوع", en: "Put on a warm sweater today.", fa: "امروز یک پلیور گرم بپوش.", icon: "🧣", examples: [{ en: "Put on a warm sweater today.", fa: "امروز یک پلیور گرم بپوش." }, { en: "The living room is warm and cozy.", fa: "اتاق نشیمن گرم و دنج است." }, { en: "Spring weather is pleasantly warm.", fa: "هوای بهار به شکل دلپذیری گرم است." }] },
      { word: "quiet", meaning: "ساکت، آرام", en: "The library is a very quiet place.", fa: "کتابخانه مکان بسیار ساکتی است.", icon: "🤫", examples: [{ en: "The library is a very quiet place.", fa: "کتابخانه مکان بسیار ساکتی است." }, { en: "Please be quiet; the baby is sleeping.", fa: "لطفاً ساکت باشید؛ نوزاد خواب است." }, { en: "Our street is quiet at night.", fa: "خیابان ما در شب ساکت و آرام است." }] },
      { word: "noisy", meaning: "پر سر و صدا، شلوغ", en: "The city center is noisy during rush hour.", fa: "مرکز شهر در ساعات شلوغی پر سر و صدا است.", icon: "📢", examples: [{ en: "The city center is noisy during rush hour.", fa: "مرکز شهر در ساعات شلوغی پر سر و صدا است." }, { en: "Do not make noisy sounds in class.", fa: "در کلاس صداهای پر سر و صدا ایجاد نکنید." }, { en: "The restaurant was too noisy for talking.", fa: "رستوران برای صحبت کردن بیش از حد شلوغ و پرسروصدا بود." }] },
      { word: "buy", meaning: "خریدن", en: "I buy fresh bread every morning.", fa: "من هر روز صبح نان تازه می‌خرم.", icon: "🛒", examples: [{ en: "I buy fresh bread every morning.", fa: "من هر روز صبح نان تازه می‌خرم." }, { en: "Can you buy milk from the shop?", fa: "می‌توانی از مغازه شیر بخری؟" }, { en: "She bought a new notebook yesterday.", fa: "او دیروز یک دفترچه جدید خرید." }] },
      { word: "sell", meaning: "فروختن", en: "They sell fresh fruit at the market.", fa: "آن‌ها در بازار میوه تازه می‌فروشند.", icon: "🏷️", examples: [{ en: "They sell fresh fruit at the market.", fa: "آن‌ها در بازار میوه تازه می‌فروشند." }, { en: "He wants to sell his old bicycle.", fa: "او می‌خواهد دوچرخه قدیمی‌اش را بفروشد." }, { en: "This small bakery sells delicious cookies.", fa: "این نانوایی کوچک کلوچه‌های خوشمزه‌ای می‌فروشد." }] },
      { word: "pay", meaning: "پرداخت کردن", en: "I pay for my groceries with a card.", fa: "من هزینه خریدهایم را با کارت پرداخت می‌کنم.", icon: "💳", examples: [{ en: "I pay for my groceries with a card.", fa: "من هزینه خریدهایم را با کارت پرداخت می‌کنم." }, { en: "How much did you pay for this shirt?", fa: "برای این پیراهن چقدر پرداخت کردی؟" }, { en: "Remember to pay the electricity bill.", fa: "یادت باشد قبض برق را پرداخت کنی." }] },
      { word: "stop", meaning: "ایستادن، متوقف شدن", en: "The bus stops right in front of our house.", fa: "اتوبوس درست جلوی خانه ما توقف می‌کند.", icon: "🛑", examples: [{ en: "The bus stops right in front of our house.", fa: "اتوبوس درست جلوی خانه ما توقف می‌کند." }, { en: "Stop at the red traffic light.", fa: "پشت چراغ قرمز توقف کن." }, { en: "Please stop making loud noises.", fa: "لطفاً سر و صدای بلند را متوقف کن." }] },
      { word: "drive", meaning: "رانندگی کردن", en: "I drive to work five days a week.", fa: "من پنج روز در هفته تا سر کار رانندگی می‌کنم.", icon: "🚗", examples: [{ en: "I drive to work five days a week.", fa: "من پنج روز در هفته تا سر کار رانندگی می‌کنم." }, { en: "Always drive carefully in the rain.", fa: "همیشه در باران با احتیاط رانندگی کن." }, { en: "My brother is learning how to drive.", fa: "برادرم دارد رانندگی یاد می‌گیرد." }] },
      { word: "ride", meaning: "سواری کردن، دوچرخه‌سواری", en: "I ride my bike in the park every evening.", fa: "من هر عصر در پارک دوچرخه‌سواری می‌کنم.", icon: "🚲", examples: [{ en: "I ride my bike in the park every evening.", fa: "من هر عصر در پارک دوچرخه‌سواری می‌کنم." }, { en: "Wear a helmet when you ride.", fa: "وقتی سواری می‌کنی کلاه ایمنی بگذار." }, { en: "She learned to ride a horse last summer.", fa: "او تابستان گذشته اسب‌سواری یاد گرفت." }] },
      { word: "swim", meaning: "شنا کردن", en: "We swim in the pool on hot summer days.", fa: "ما در روزهای گرم تابستان در استخر شنا می‌کنیم.", icon: "🏊", examples: [{ en: "We swim in the pool on hot summer days.", fa: "ما در روزهای گرم تابستان در استخر شنا می‌کنیم." }, { en: "He swims two times a week.", fa: "او هفته‌ای دو بار شنا می‌کند." }, { en: "Fish swim easily in the lake.", fa: "ماهی‌ها به راحتی در دریاچه شنا می‌کنند." }] },
      { word: "rest", meaning: "استراحت کردن", en: "Lie down and rest for an hour.", fa: "دراز بکش و یک ساعت استراحت کن.", icon: "🛋️", examples: [{ en: "Lie down and rest for an hour.", fa: "دراز بکش و یک ساعت استراحت کن." }, { en: "I need to rest after cleaning the house.", fa: "بعد از تمیز کردن خانه نیاز دارم استراحت کنم." }, { en: "Rest your eyes after using the computer.", fa: "بعد از کار با کامپیوتر به چشم‌هایت استراحت بده." }] },
      { word: "cry", meaning: "گریه کردن", en: "The baby cries when he is hungry.", fa: "نوزاد وقتی گرسنه است گریه می‌کند.", icon: "😢", examples: [{ en: "The baby cries when he is hungry.", fa: "نوزاد وقتی گرسنه است گریه می‌کند." }, { en: "Do not cry; everything is okay.", fa: "گریه نکن؛ همه چیز مرتب است." }, { en: "Cutting onions makes me cry.", fa: "خرد کردن پیاز مرا به گریه می‌اندازد." }] },
      { word: "hear", meaning: "شنیدن", en: "Can you hear the birds singing outside?", fa: "آیا می‌توانی صدای آواز پرندگان را بیرون بشنوی؟", icon: "👂", examples: [{ en: "Can you hear the birds singing outside?", fa: "آیا می‌توانی صدای آواز پرندگان را بیرون بشنوی؟" }, { en: "I can hear someone knocking on the door.", fa: "صدای در زدن کسی را می‌شنوم." }, { en: "Speak louder so everyone can hear you.", fa: "بلندتر صحبت کن تا همه بتوانند صدایت را بشنوند." }] },
      { word: "see", meaning: "دیدن", en: "I see my friend across the street.", fa: "دوستم را در آن طرف خیابان می‌بینم.", icon: "👀", examples: [{ en: "I see my friend across the street.", fa: "دوستم را در آن طرف خیابان می‌بینم." }, { en: "Can you see the stars in the night sky?", fa: "آیا می‌توانی ستاره‌ها را در آسمان شب ببینی؟" }, { en: "I am so glad to see you again.", fa: "از دیدن دوباره‌ات خیلی خوشحالم." }] },
      { word: "look", meaning: "نگاه کردن", en: "Look at the colorful flowers in the garden.", fa: "به گل‌های رنگارنگ در باغچه نگاه کن.", icon: "🔍", examples: [{ en: "Look at the colorful flowers in the garden.", fa: "به گل‌های رنگارنگ در باغچه نگاه کن." }, { en: "Look both ways before crossing the road.", fa: "قبل از رد شدن از خیابان به هر دو طرف نگاه کن." }, { en: "Look at this interesting picture in the book.", fa: "به این تصویر جالب در کتاب نگاه کن." }] },
      { word: "think", meaning: "فکر کردن", en: "Think carefully before answering the question.", fa: "قبل از پاسخ به سؤال با دقت فکر کن.", icon: "🤔", examples: [{ en: "Think carefully before answering the question.", fa: "قبل از پاسخ به سؤال با دقت فکر کن." }, { en: "I think tomorrow will be a sunny day.", fa: "من فکر می‌کنم فردا روزی آفتابی خواهد بود." }, { en: "What do you think about this idea?", fa: "درباره این ایده چه فکر می‌کنی؟" }] },
      { word: "understand", meaning: "فهمیدن، متوجه شدن", en: "I understand the lesson clearly now.", fa: "من اکنون درس را کاملاً متوجه می‌شوم.", icon: "💡", examples: [{ en: "I understand the lesson clearly now.", fa: "من اکنون درس را کاملاً متوجه می‌شوم." }, { en: "Do you understand what I mean?", fa: "آیا متوجه می‌شوی منظورم چیست؟" }, { en: "She speaks slowly so tourists can understand.", fa: "او آرام صحبت می‌کند تا گردشگران متوجه شوند." }] },
      { word: "try", meaning: "سعی کردن، تلاش کردن", en: "Always try your best in everything you do.", fa: "همیشه در هر کاری که انجام می‌دهی تمام تلاشت را بکن.", icon: "💪", examples: [{ en: "Always try your best in everything you do.", fa: "همیشه در هر کاری که انجام می‌دهی تمام تلاشت را بکن." }, { en: "Try this delicious homemade cake.", fa: "این کیک خانگی خوشمزه را امتحان کن." }, { en: "Do not give up; try one more time.", fa: "تسلیم نشو؛ یک بار دیگر تلاش کن." }] },
    ]
  },
  travel: {
    name: "سفر",
    words: [
      { word: "airport", meaning: "فرودگاه", en: "The airport is very busy today.", fa: "فرودگاه امروز خیلی شلوغ است.", icon: "🛫", examples: [{ en: "The airport is very busy today.", fa: "فرودگاه امروز خیلی شلوغ است." }, { en: "We arrived at the airport early.", fa: "ما زود به فرودگاه رسیدیم." }, { en: "The airport has many shops.", fa: "فرودگاه مغازه‌های زیادی دارد." }] },
      { word: "ticket", meaning: "بلیط", en: "I bought a ticket for the train.", fa: "من یک بلیط برای قطار خریدم.", icon: "🎫", examples: [{ en: "I bought a ticket for the train.", fa: "من یک بلیط برای قطار خریدم." }, { en: "The ticket is in my bag.", fa: "بلیط در کیفم است." }, { en: "She showed her ticket to the driver.", fa: "او بلیطش را به راننده نشان داد." }] },
      { word: "passport", meaning: "گذرنامه", en: "Don't forget your passport.", fa: "گذرنامه‌ات را فراموش نکن.", icon: "🛂", examples: [{ en: "Don't forget your passport.", fa: "گذرنامه‌ات را فراموش نکن." }, { en: "My passport is new.", fa: "گذرنامه‌ام نو است." }, { en: "Keep your passport safe.", fa: "گذرنامه‌ات را امن نگه دار." }] },
      { word: "suitcase", meaning: "چمدان", en: "My suitcase is very heavy.", fa: "چمدان من خیلی سنگین است.", icon: "🧳", examples: [{ en: "My suitcase is very heavy.", fa: "چمدان من خیلی سنگین است." }, { en: "She opened her suitcase.", fa: "او چمدانش را باز کرد." }, { en: "The suitcase is too small.", fa: "چمدان خیلی کوچک است." }] },
      { word: "hotel", meaning: "هتل", en: "We stayed at a nice hotel.", fa: "ما در یک هتل خوب ماندیم.", icon: "🏨", examples: [{ en: "We stayed at a nice hotel.", fa: "ما در یک هتل خوب ماندیم." }, { en: "The hotel room was clean.", fa: "اتاق هتل تمیز بود." }, { en: "We left the hotel at noon.", fa: "ما ظهر از هتل بیرون رفتیم." }] },
      { word: "map", meaning: "نقشه", en: "Can you show me on the map?", fa: "می‌توانی روی نقشه به من نشان بدهی؟", icon: "🗺️", examples: [{ en: "Can you show me on the map?", fa: "می‌توانی روی نقشه به من نشان بدهی؟" }, { en: "I looked at the map.", fa: "به نقشه نگاه کردم." }, { en: "The map shows the city center.", fa: "نقشه مرکز شهر را نشان می‌دهد." }] },
      { word: "train", meaning: "قطار", en: "The train leaves at nine.", fa: "قطار ساعت نه حرکت می‌کند.", icon: "🚆", examples: [{ en: "The train leaves at nine.", fa: "قطار ساعت نه حرکت می‌کند." }, { en: "The train was full of people.", fa: "قطار پر از آدم بود." }, { en: "I like traveling by train.", fa: "من سفر با قطار را دوست دارم." }] },
      { word: "beach", meaning: "ساحل", en: "We walked on the beach.", fa: "ما در ساحل قدم زدیم.", icon: "🏖️", examples: [{ en: "We walked on the beach.", fa: "ما در ساحل قدم زدیم." }, { en: "The beach is clean and sandy.", fa: "ساحل تمیز و ماسه‌ای است." }, { en: "Children play on the beach.", fa: "بچه‌ها روی ساحل بازی می‌کنند." }] },
      { word: "mountain", meaning: "کوه", en: "They climbed the mountain.", fa: "آنها از کوه بالا رفتند.", icon: "⛰️", examples: [{ en: "They climbed the mountain.", fa: "آنها از کوه بالا رفتند." }, { en: "The mountain is covered with snow.", fa: "کوه با برف پوشیده شده است." }, { en: "We saw a mountain far away.", fa: "از دور یک کوه دیدیم." }] },
      { word: "camera", meaning: "دوربین", en: "I take my camera everywhere.", fa: "من دوربینم را همه‌جا می‌برم.", icon: "📷", examples: [{ en: "I take my camera everywhere.", fa: "من دوربینم را همه‌جا می‌برم." }, { en: "This camera takes great photos.", fa: "این دوربین عکس‌های عالی می‌گیرد." }, { en: "She bought a new camera.", fa: "او یک دوربین جدید خرید." }] },
      { word: "bus", meaning: "اتوبوس", en: "I take the bus to the airport.", fa: "من با اتوبوس به فرودگاه می‌روم.", icon: "🚌", examples: [{ en: "I take the bus to the airport.", fa: "من با اتوبوس به فرودگاه می‌روم." }, { en: "The bus is late today.", fa: "اتوبوس امروز دیر کرده است." }, { en: "We wait for the bus near the hotel.", fa: "ما نزدیک هتل منتظر اتوبوس می‌مانیم." }] },
      { word: "taxi", meaning: "تاکسی", en: "I need a taxi to the hotel.", fa: "من به یک تاکسی برای رفتن به هتل نیاز دارم.", icon: "🚕", examples: [{ en: "I need a taxi to the hotel.", fa: "من به یک تاکسی برای رفتن به هتل نیاز دارم." }, { en: "The taxi driver knows the city.", fa: "راننده تاکسی شهر را می‌شناسد." }, { en: "We take a taxi after the flight.", fa: "ما بعد از پرواز تاکسی می‌گیریم." }] },
      { word: "car", meaning: "ماشین، خودرو", en: "We travel by car.", fa: "ما با ماشین سفر می‌کنیم.", icon: "🚗", examples: [{ en: "We travel by car.", fa: "ما با ماشین سفر می‌کنیم." }, { en: "The car is outside the hotel.", fa: "ماشین بیرون هتل است." }, { en: "I rent a car for my trip.", fa: "من برای سفرم ماشین اجاره می‌کنم." }] },
      { word: "road", meaning: "جاده، راه", en: "This road goes to the city center.", fa: "این جاده به مرکز شهر می‌رود.", icon: "🛣️", examples: [{ en: "This road goes to the city center.", fa: "این جاده به مرکز شهر می‌رود." }, { en: "The road is very busy today.", fa: "این جاده امروز خیلی شلوغ است." }, { en: "We are driving on a long road.", fa: "ما در یک جاده طولانی رانندگی می‌کنیم." }] },
      { word: "street", meaning: "خیابان", en: "The hotel is on this street.", fa: "هتل در این خیابان است.", icon: "🏙️", examples: [{ en: "The hotel is on this street.", fa: "هتل در این خیابان است." }, { en: "This street is easy to find.", fa: "پیدا کردن این خیابان آسان است." }, { en: "We walk down the street.", fa: "ما در خیابان قدم می‌زنیم." }] },
      { word: "city center", meaning: "مرکز شهر", en: "The museum is in the city center.", fa: "موزه در مرکز شهر است.", icon: "🏙️", examples: [{ en: "The museum is in the city center.", fa: "موزه در مرکز شهر است." }, { en: "We go to the city center by bus.", fa: "ما با اتوبوس به مرکز شهر می‌رویم." }, { en: "The city center is very busy.", fa: "مرکز شهر خیلی شلوغ است." }] },
      { word: "station", meaning: "ایستگاه", en: "The train station is nearby.", fa: "ایستگاه قطار نزدیک است.", icon: "🚉", examples: [{ en: "The train station is nearby.", fa: "ایستگاه قطار نزدیک است." }, { en: "We wait at the station.", fa: "ما در ایستگاه منتظر می‌مانیم." }, { en: "I walk to the bus station.", fa: "من پیاده به ایستگاه اتوبوس می‌روم." }] },
      { word: "subway", meaning: "مترو", en: "I take the subway to downtown.", fa: "من با مترو به مرکز شهر می‌روم.", icon: "🚇", examples: [{ en: "I take the subway to downtown.", fa: "من با مترو به مرکز شهر می‌روم." }, { en: "The subway is fast and easy.", fa: "مترو سریع و آسان است." }, { en: "We use the subway every day.", fa: "ما هر روز از مترو استفاده می‌کنیم." }] },
      { word: "bus stop", meaning: "ایستگاه اتوبوس", en: "The bus stop is near my hotel.", fa: "ایستگاه اتوبوس نزدیک هتل من است.", icon: "🚏", examples: [{ en: "The bus stop is near my hotel.", fa: "ایستگاه اتوبوس نزدیک هتل من است." }, { en: "I wait at the bus stop.", fa: "من در ایستگاه اتوبوس منتظر می‌مانم." }, { en: "The bus stop is across the street.", fa: "ایستگاه اتوبوس آن طرف خیابان است." }] },
      { word: "driver", meaning: "راننده", en: "The driver takes us to the hotel.", fa: "راننده ما را به هتل می‌برد.", icon: "🧑‍✈️", examples: [{ en: "The driver takes us to the hotel.", fa: "راننده ما را به هتل می‌برد." }, { en: "The taxi driver is friendly.", fa: "راننده تاکسی خوش‌برخورد است." }, { en: "Ask the driver for help.", fa: "از راننده کمک بخواه." }] },
      { word: "passenger", meaning: "مسافر", en: "The passengers are waiting for the bus.", fa: "مسافران منتظر اتوبوس هستند.", icon: "🧑‍💼", examples: [{ en: "The passengers are waiting for the bus.", fa: "مسافران منتظر اتوبوس هستند." }, { en: "Every passenger needs a ticket.", fa: "هر مسافر به یک بلیت نیاز دارد." }, { en: "The passenger sits near the window.", fa: "مسافر کنار پنجره می‌نشیند." }] },
      { word: "trip", meaning: "سفر", en: "We have a trip next week.", fa: "ما هفته آینده یک سفر داریم.", icon: "🧳", examples: [{ en: "We have a trip next week.", fa: "ما هفته آینده یک سفر داریم." }, { en: "My trip was very fun.", fa: "سفر من خیلی سرگرم‌کننده بود." }, { en: "I take pictures during my trip.", fa: "من در طول سفرم عکس می‌گیرم." }] },
      { word: "journey", meaning: "سفر، مسیر سفر", en: "The journey takes three hours.", fa: "این سفر سه ساعت طول می‌کشد.", icon: "🛣️", examples: [{ en: "The journey takes three hours.", fa: "این سفر سه ساعت طول می‌کشد." }, { en: "We enjoy our journey.", fa: "ما از سفرمان لذت می‌بریم." }, { en: "It is a long journey.", fa: "این یک سفر طولانی است." }] },
      { word: "vacation", meaning: "تعطیلات، سفر تفریحی", en: "We go on vacation in summer.", fa: "ما در تابستان به تعطیلات می‌رویم.", icon: "🏖️", examples: [{ en: "We go on vacation in summer.", fa: "ما در تابستان به تعطیلات می‌رویم." }, { en: "My vacation was great.", fa: "تعطیلات من عالی بود." }, { en: "I take photos during my vacation.", fa: "من در طول تعطیلاتم عکس می‌گیرم." }] },
      { word: "traveler", meaning: "مسافر، سفرکننده", en: "The traveler has a small bag.", fa: "مسافر یک کیف کوچک دارد.", icon: "🧳", examples: [{ en: "The traveler has a small bag.", fa: "مسافر یک کیف کوچک دارد." }, { en: "Many travelers visit this city.", fa: "مسافران زیادی از این شهر دیدن می‌کنند." }, { en: "A traveler needs a good map.", fa: "یک مسافر به یک نقشه خوب نیاز دارد." }] },
      { word: "arrive", meaning: "رسیدن", en: "We arrive at the hotel at night.", fa: "ما شب به هتل می‌رسیم.", icon: "🛬", examples: [{ en: "We arrive at the hotel at night.", fa: "ما شب به هتل می‌رسیم." }, { en: "The train arrives at five.", fa: "قطار ساعت پنج می‌رسد." }, { en: "I arrive early at the airport.", fa: "من زود به فرودگاه می‌رسم." }] },
      { word: "leave", meaning: "ترک کردن، رفتن", en: "We leave the hotel in the morning.", fa: "ما صبح هتل را ترک می‌کنیم.", icon: "🛫", examples: [{ en: "We leave the hotel in the morning.", fa: "ما صبح هتل را ترک می‌کنیم." }, { en: "The bus leaves at eight.", fa: "اتوبوس ساعت هشت حرکت می‌کند." }, { en: "I leave home early for my trip.", fa: "من برای سفرم زود از خانه بیرون می‌روم." }] },
      { word: "drive", meaning: "رانندگی کردن", en: "I drive to the airport.", fa: "من با ماشین به فرودگاه می‌روم.", icon: "🚗", examples: [{ en: "I drive to the airport.", fa: "من با ماشین به فرودگاه می‌روم." }, { en: "She can drive a car.", fa: "او می‌تواند رانندگی کند." }, { en: "We drive through the city.", fa: "ما در شهر رانندگی می‌کنیم." }] },
      { word: "ride", meaning: "سوار شدن، رفت‌وآمد کردن", en: "I ride the bus to school.", fa: "من با اتوبوس به مدرسه می‌روم.", icon: "🚲", examples: [{ en: "I ride the bus to school.", fa: "من با اتوبوس به مدرسه می‌روم." }, { en: "We ride in a taxi.", fa: "ما سوار تاکسی می‌شویم." }, { en: "He rides a bike in the city.", fa: "او در شهر دوچرخه‌سواری می‌کند." }] },
      { word: "stop", meaning: "توقفگاه، ایستگاه", en: "The next stop is downtown.", fa: "ایستگاه بعدی مرکز شهر است.", icon: "🛑", examples: [{ en: "The next stop is downtown.", fa: "ایستگاه بعدی مرکز شهر است." }, { en: "Get off at the next stop.", fa: "در ایستگاه بعدی پیاده شو." }, { en: "The bus makes many stops.", fa: "اتوبوس توقف‌های زیادی دارد." }] },
      { word: "direction", meaning: "جهت، مسیر", en: "Can you give me directions?", fa: "می‌توانی مسیر را به من بگویی؟", icon: "🧭", examples: [{ en: "Can you give me directions?", fa: "می‌توانی مسیر را به من بگویی؟" }, { en: "I need directions to the hotel.", fa: "من مسیر هتل را نیاز دارم." }, { en: "The sign shows the direction.", fa: "تابلو مسیر را نشان می‌دهد." }] },
      { word: "left", meaning: "چپ", en: "Turn left at the corner.", fa: "سر خیابان به چپ بپیچ.", icon: "⬅️", examples: [{ en: "Turn left at the corner.", fa: "سر خیابان به چپ بپیچ." }, { en: "The store is on the left.", fa: "فروشگاه سمت چپ است." }, { en: "My hotel is on the left side.", fa: "هتل من در سمت چپ است." }] },
      { word: "right", meaning: "راست", en: "Turn right after the bank.", fa: "بعد از بانک به راست بپیچ.", icon: "➡️", examples: [{ en: "Turn right after the bank.", fa: "بعد از بانک به راست بپیچ." }, { en: "The restaurant is on the right.", fa: "رستوران سمت راست است." }, { en: "Keep right on this road.", fa: "در این جاده سمت راست بمان." }] },
      { word: "straight", meaning: "مستقیم", en: "Go straight for two blocks.", fa: "دو خیابان مستقیم برو.", icon: "⬆️", examples: [{ en: "Go straight for two blocks.", fa: "دو خیابان مستقیم برو." }, { en: "Walk straight ahead.", fa: "مستقیم جلو برو." }, { en: "The hotel is straight ahead.", fa: "هتل مستقیم جلو است." }] },
      { word: "near", meaning: "نزدیک", en: "The airport is near the city.", fa: "فرودگاه نزدیک شهر است.", icon: "📍", examples: [{ en: "The airport is near the city.", fa: "فرودگاه نزدیک شهر است." }, { en: "Is there a restaurant near here?", fa: "آیا رستورانی نزدیک اینجا هست؟" }, { en: "My hotel is near the station.", fa: "هتل من نزدیک ایستگاه است." }] },
      { word: "far", meaning: "دور", en: "The airport is far from here.", fa: "فرودگاه از اینجا دور است.", icon: "🔭", examples: [{ en: "The airport is far from here.", fa: "فرودگاه از اینجا دور است." }, { en: "The hotel is not far from the station.", fa: "هتل از ایستگاه دور نیست." }, { en: "How far is the city center?", fa: "مرکز شهر چقدر دور است؟" }] },
      { word: "guide", meaning: "راهنما", en: "The guide shows us the city.", fa: "راهنما شهر را به ما نشان می‌دهد.", icon: "🗺️", examples: [{ en: "The guide shows us the city.", fa: "راهنما شهر را به ما نشان می‌دهد." }, { en: "We have a travel guide.", fa: "ما یک راهنمای سفر داریم." }, { en: "The guide tells us about the museum.", fa: "راهنما درباره موزه به ما توضیح می‌دهد." }] },
      { word: "tourist", meaning: "گردشگر", en: "Many tourists visit this city.", fa: "گردشگران زیادی از این شهر دیدن می‌کنند.", icon: "🧳", examples: [{ en: "Many tourists visit this city.", fa: "گردشگران زیادی از این شهر دیدن می‌کنند." }, { en: "The tourist takes pictures.", fa: "گردشگر عکس می‌گیرد." }, { en: "This place is popular with tourists.", fa: "این مکان بین گردشگران محبوب است." }] },
      { word: "city", meaning: "شهر", en: "This city is beautiful.", fa: "این شهر زیباست.", icon: "🌆", examples: [{ en: "This city is beautiful.", fa: "این شهر زیباست." }, { en: "I want to visit this city.", fa: "من می‌خواهم از این شهر دیدن کنم." }, { en: "The city has many restaurants.", fa: "این شهر رستوران‌های زیادی دارد." }] },
      { word: "country", meaning: "کشور", en: "Canada is a beautiful country.", fa: "کانادا کشور زیبایی است.", icon: "🌍", examples: [{ en: "Canada is a beautiful country.", fa: "کانادا کشور زیبایی است." }, { en: "I want to visit another country.", fa: "من می‌خواهم از کشور دیگری دیدن کنم." }, { en: "This country has many interesting places.", fa: "این کشور مکان‌های جالب زیادی دارد." }] },
      { word: "village", meaning: "روستا", en: "My grandparents live in a village.", fa: "پدربزرگ و مادربزرگم در یک روستا زندگی می‌کنند.", icon: "🏡", examples: [{ en: "My grandparents live in a village.", fa: "پدربزرگ و مادربزرگم در یک روستا زندگی می‌کنند." }, { en: "We visit a small village.", fa: "ما از یک روستای کوچک دیدن می‌کنیم." }, { en: "The village is very quiet.", fa: "روستا خیلی آرام است." }] },
      { word: "park", meaning: "پارک", en: "We walk in the park.", fa: "ما در پارک قدم می‌زنیم.", icon: "🌳", examples: [{ en: "We walk in the park.", fa: "ما در پارک قدم می‌زنیم." }, { en: "The park is near the hotel.", fa: "پارک نزدیک هتل است." }, { en: "Many people visit this park.", fa: "افراد زیادی از این پارک دیدن می‌کنند." }] },
      { word: "museum", meaning: "موزه", en: "We visit the museum today.", fa: "ما امروز از موزه دیدن می‌کنیم.", icon: "🏛️", examples: [{ en: "We visit the museum today.", fa: "ما امروز از موزه دیدن می‌کنیم." }, { en: "The museum is in the city center.", fa: "موزه در مرکز شهر است." }, { en: "The museum has many old things.", fa: "موزه چیزهای قدیمی زیادی دارد." }] },
      { word: "restaurant", meaning: "رستوران", en: "We eat at a restaurant tonight.", fa: "ما امشب در یک رستوران غذا می‌خوریم.", icon: "🍽️", examples: [{ en: "We eat at a restaurant tonight.", fa: "ما امشب در یک رستوران غذا می‌خوریم." }, { en: "The restaurant is near the hotel.", fa: "رستوران نزدیک هتل است." }, { en: "This restaurant is very popular.", fa: "این رستوران خیلی محبوب است." }] },
      { word: "entrance", meaning: "ورودی", en: "The entrance is on the left.", fa: "ورودی سمت چپ است.", icon: "🚪", examples: [{ en: "The entrance is on the left.", fa: "ورودی سمت چپ است." }, { en: "We wait near the entrance.", fa: "ما نزدیک ورودی منتظر می‌مانیم." }, { en: "The museum entrance is free.", fa: "ورودی موزه رایگان است." }] },
      { word: "exit", meaning: "خروجی", en: "The exit is near the door.", fa: "خروجی نزدیک در است.", icon: "🚪", examples: [{ en: "The exit is near the door.", fa: "خروجی نزدیک در است." }, { en: "Follow the exit sign.", fa: "تابلو خروجی را دنبال کن." }, { en: "We leave through the exit.", fa: "ما از خروجی بیرون می‌رویم." }] },
      { word: "floor", meaning: "طبقه", en: "My room is on the second floor.", fa: "اتاق من در طبقه دوم است.", icon: "🏢", examples: [{ en: "My room is on the second floor.", fa: "اتاق من در طبقه دوم است." }, { en: "The elevator goes to every floor.", fa: "آسانسور به هر طبقه می‌رود." }, { en: "The hotel has five floors.", fa: "هتل پنج طبقه دارد." }] },
      { word: "room", meaning: "اتاق", en: "My hotel room is clean.", fa: "اتاق هتل من تمیز است.", icon: "🛏️", examples: [{ en: "My hotel room is clean.", fa: "اتاق هتل من تمیز است." }, { en: "I have a room with a window.", fa: "من اتاقی با پنجره دارم." }, { en: "The room is on the third floor.", fa: "اتاق در طبقه سوم است." }] },
      { word: "reservation", meaning: "رزرو", en: "I have a hotel reservation.", fa: "من رزرو هتل دارم.", icon: "📝", examples: [{ en: "I have a hotel reservation.", fa: "من رزرو هتل دارم." }, { en: "We make a reservation online.", fa: "ما آنلاین رزرو انجام می‌دهیم." }, { en: "The restaurant has my reservation.", fa: "رستوران رزرو من را دارد." }] },
      { word: "check in", meaning: "پذیرش شدن، ورود ثبت کردن", en: "We check in at the hotel at three.", fa: "ما ساعت سه در هتل پذیرش می‌شویم.", icon: "🛎️", examples: [{ en: "We check in at the hotel at three.", fa: "ما ساعت سه در هتل پذیرش می‌شویم." }, { en: "I need to check in before my flight.", fa: "من باید قبل از پرواز پذیرش شوم." }, { en: "She checks in at the front desk.", fa: "او در میز پذیرش ثبت ورود می‌کند." }] },
      { word: "check out", meaning: "تسویه و خروج از هتل", en: "We check out in the morning.", fa: "ما صبح از هتل خارج می‌شویم.", icon: "🛎️", examples: [{ en: "We check out in the morning.", fa: "ما صبح از هتل خارج می‌شویم." }, { en: "I need to check out today.", fa: "من باید امروز تسویه کنم." }, { en: "They check out before noon.", fa: "آن‌ها قبل از ظهر از هتل خارج می‌شوند." }] },
      { word: "key card", meaning: "کارت اتاق", en: "My key card does not work.", fa: "کارت اتاق من کار نمی‌کند.", icon: "💳", examples: [{ en: "My key card does not work.", fa: "کارت اتاق من کار نمی‌کند." }, { en: "Keep your key card safe.", fa: "کارت اتاقت را نگه دار." }, { en: "The hotel gives me a key card.", fa: "هتل به من یک کارت اتاق می‌دهد." }] },
      { word: "luggage", meaning: "چمدان و وسایل سفر", en: "My luggage is heavy.", fa: "وسایل سفر من سنگین است.", icon: "🧳", examples: [{ en: "My luggage is heavy.", fa: "وسایل سفر من سنگین است." }, { en: "I carry my luggage to the car.", fa: "من وسایل سفرم را به ماشین می‌برم." }, { en: "The airline lost my luggage.", fa: "شرکت هواپیمایی وسایل سفرم را گم کرد." }] },
      { word: "backpack", meaning: "کوله‌پشتی", en: "My backpack is small and light.", fa: "کوله‌پشتی من کوچک و سبک است.", icon: "🎒", examples: [{ en: "My backpack is small and light.", fa: "کوله‌پشتی من کوچک و سبک است." }, { en: "I put my camera in my backpack.", fa: "دوربینم را داخل کوله‌پشتی می‌گذارم." }, { en: "He carries a backpack while traveling.", fa: "او هنگام سفر یک کوله‌پشتی حمل می‌کند." }] },
      { word: "flight", meaning: "پرواز", en: "My flight is tomorrow morning.", fa: "پرواز من فردا صبح است.", icon: "✈️", examples: [{ en: "My flight is tomorrow morning.", fa: "پرواز من فردا صبح است." }, { en: "The flight is two hours long.", fa: "پرواز دو ساعت طول می‌کشد." }, { en: "I check my flight time.", fa: "من زمان پروازم را بررسی می‌کنم." }] },
      { word: "airplane", meaning: "هواپیما", en: "The airplane is very big.", fa: "هواپیما خیلی بزرگ است.", icon: "✈️", examples: [{ en: "The airplane is very big.", fa: "هواپیما خیلی بزرگ است." }, { en: "We travel by airplane.", fa: "ما با هواپیما سفر می‌کنیم." }, { en: "The airplane arrives on time.", fa: "هواپیما به موقع می‌رسد." }] },
      { word: "gate", meaning: "گیت، دروازه ورود", en: "Our gate is number five.", fa: "گیت ما شماره پنج است.", icon: "🛫", examples: [{ en: "Our gate is number five.", fa: "گیت ما شماره پنج است." }, { en: "Please wait near the gate.", fa: "لطفاً نزدیک گیت منتظر بمان." }, { en: "The gate opens at six.", fa: "گیت ساعت شش باز می‌شود." }] },
      { word: "boarding pass", meaning: "کارت پرواز", en: "I show my boarding pass at the gate.", fa: "من کارت پروازم را در گیت نشان می‌دهم.", icon: "🎫", examples: [{ en: "I show my boarding pass at the gate.", fa: "من کارت پروازم را در گیت نشان می‌دهم." }, { en: "Do not lose your boarding pass.", fa: "کارت پروازت را گم نکن." }, { en: "She has her boarding pass ready.", fa: "او کارت پروازش را آماده دارد." }] },
      { word: "travel", meaning: "سفر کردن", en: "I love to travel.", fa: "من دوست دارم سفر کنم.", icon: "🧳", examples: [{ en: "I love to travel.", fa: "من دوست دارم سفر کنم." }, { en: "We travel every summer.", fa: "ما هر تابستان سفر می‌کنیم." }, { en: "She travels with her family.", fa: "او با خانواده‌اش سفر می‌کند." }] },
      { word: "address", meaning: "آدرس", en: "I wrote the hotel address on my phone.", fa: "من آدرس هتل را در گوشی‌ام نوشتم.", icon: "📍", examples: [{ en: "I wrote the hotel address on my phone.", fa: "من آدرس هتل را در گوشی‌ام نوشتم." }, { en: "Can you tell me your address?", fa: "می‌توانی آدرست را به من بگویی؟" }, { en: "The taxi driver needs the address.", fa: "راننده تاکسی به آدرس نیاز دارد." }] },
      { word: "location", meaning: "موقعیت، مکان", en: "The hotel location is very good.", fa: "موقعیت هتل خیلی خوب است.", icon: "📌", examples: [{ en: "The hotel location is very good.", fa: "موقعیت هتل خیلی خوب است." }, { en: "I check the location on my phone.", fa: "من موقعیت را در گوشی‌ام بررسی می‌کنم." }, { en: "This location is easy to find.", fa: "پیدا کردن این مکان آسان است." }] },
      { word: "downtown", meaning: "مرکز شهر", en: "We go downtown by subway.", fa: "ما با مترو به مرکز شهر می‌رویم.", icon: "🏙️", examples: [{ en: "We go downtown by subway.", fa: "ما با مترو به مرکز شهر می‌رویم." }, { en: "There are many shops downtown.", fa: "فروشگاه‌های زیادی در مرکز شهر هستند." }, { en: "My hotel is close to downtown.", fa: "هتل من نزدیک مرکز شهر است." }] },
      { word: "bridge", meaning: "پل", en: "The bridge is near the city center.", fa: "پل نزدیک مرکز شهر است.", icon: "🌉", examples: [{ en: "The bridge is near the city center.", fa: "پل نزدیک مرکز شهر است." }, { en: "We walk across the bridge.", fa: "ما از روی پل رد می‌شویم." }, { en: "The driver crosses the bridge.", fa: "راننده از پل عبور می‌کند." }] },
      { word: "corner", meaning: "گوشه، تقاطع خیابان", en: "Turn left at the corner.", fa: "سر گوشه به چپ بپیچ.", icon: "📐", examples: [{ en: "Turn left at the corner.", fa: "سر گوشه به چپ بپیچ." }, { en: "The store is on the corner.", fa: "فروشگاه سر خیابان است." }, { en: "I wait for you at the corner.", fa: "من در گوشه خیابان منتظرت می‌مانم." }] },
      { word: "sign", meaning: "تابلو، علامت", en: "Follow the signs to the exit.", fa: "تابلوها را تا خروجی دنبال کن.", icon: "🪧", examples: [{ en: "Follow the signs to the exit.", fa: "تابلوها را تا خروجی دنبال کن." }, { en: "The sign shows the way.", fa: "تابلو مسیر را نشان می‌دهد." }, { en: "I read the street sign.", fa: "من تابلو خیابان را می‌خوانم." }] },
      { word: "cross", meaning: "عبور کردن", en: "Cross the street carefully.", fa: "با دقت از خیابان عبور کن.", icon: "🚶", examples: [{ en: "Cross the street carefully.", fa: "با دقت از خیابان عبور کن." }, { en: "We cross the bridge on foot.", fa: "ما پیاده از پل عبور می‌کنیم." }, { en: "The road is easy to cross.", fa: "عبور از این جاده آسان است." }] },
      { word: "follow", meaning: "دنبال کردن", en: "Follow this road to the hotel.", fa: "این جاده را تا هتل دنبال کن.", icon: "👣", examples: [{ en: "Follow this road to the hotel.", fa: "این جاده را تا هتل دنبال کن." }, { en: "Follow the signs at the airport.", fa: "تابلوها را در فرودگاه دنبال کن." }, { en: "I follow the map.", fa: "من نقشه را دنبال می‌کنم." }] },
      { word: "lost", meaning: "گم‌شده", en: "I am lost. Can you help me?", fa: "من گم شده‌ام. می‌توانی کمکم کنی؟", icon: "❓", examples: [{ en: "I am lost. Can you help me?", fa: "من گم شده‌ام. می‌توانی کمکم کنی؟" }, { en: "The tourist is lost in the city.", fa: "گردشگر در شهر گم شده است." }, { en: "We got lost on the way.", fa: "ما در مسیر گم شدیم." }] },
      { word: "help", meaning: "کمک", en: "Can you help me find this place?", fa: "می‌توانی کمکم کنی این مکان را پیدا کنم؟", icon: "🆘", examples: [{ en: "Can you help me find this place?", fa: "می‌توانی کمکم کنی این مکان را پیدا کنم؟" }, { en: "I need help with my luggage.", fa: "من برای وسایل سفرم کمک نیاز دارم." }, { en: "The hotel staff helps travelers.", fa: "کارکنان هتل به مسافران کمک می‌کنند." }] },
      { word: "information", meaning: "اطلاعات", en: "I need more information about the flight.", fa: "من اطلاعات بیشتری درباره پرواز نیاز دارم.", icon: "ℹ️", examples: [{ en: "I need more information about the flight.", fa: "من اطلاعات بیشتری درباره پرواز نیاز دارم." }, { en: "The desk gives travel information.", fa: "میز اطلاعات، اطلاعات سفر می‌دهد." }, { en: "This sign has useful information.", fa: "این تابلو اطلاعات مفیدی دارد." }] },
      { word: "office", meaning: "دفتر", en: "The information office is near the entrance.", fa: "دفتر اطلاعات نزدیک ورودی است.", icon: "🏢", examples: [{ en: "The information office is near the entrance.", fa: "دفتر اطلاعات نزدیک ورودی است." }, { en: "I ask the office for help.", fa: "من از دفتر کمک می‌خواهم." }, { en: "The travel office opens at nine.", fa: "دفتر سفر ساعت نه باز می‌شود." }] },
      { word: "staff", meaning: "کارکنان", en: "The hotel staff is friendly.", fa: "کارکنان هتل خوش‌برخورد هستند.", icon: "👥", examples: [{ en: "The hotel staff is friendly.", fa: "کارکنان هتل خوش‌برخورد هستند." }, { en: "Ask the staff for help.", fa: "از کارکنان کمک بخواه." }, { en: "The airport staff checks tickets.", fa: "کارکنان فرودگاه بلیت‌ها را بررسی می‌کنند." }] },
      { word: "elevator", meaning: "آسانسور", en: "The elevator is on the left.", fa: "آسانسور سمت چپ است.", icon: "🛗", examples: [{ en: "The elevator is on the left.", fa: "آسانسور سمت چپ است." }, { en: "I take the elevator to my room.", fa: "من با آسانسور به اتاقم می‌روم." }, { en: "The hotel elevator is very fast.", fa: "آسانسور هتل خیلی سریع است." }] },
      { word: "key", meaning: "کلید", en: "I have the hotel room key.", fa: "من کلید اتاق هتل را دارم.", icon: "🔑", examples: [{ en: "I have the hotel room key.", fa: "من کلید اتاق هتل را دارم." }, { en: "Do not lose your key.", fa: "کلیدت را گم نکن." }, { en: "The key is on the desk.", fa: "کلید روی میز است." }] },
      { word: "towel", meaning: "حوله", en: "The hotel gives us clean towels.", fa: "هتل به ما حوله‌های تمیز می‌دهد.", icon: "🧴", examples: [{ en: "The hotel gives us clean towels.", fa: "هتل به ما حوله‌های تمیز می‌دهد." }, { en: "I need a towel after my shower.", fa: "بعد از حمام به حوله نیاز دارم." }, { en: "The towel is in the bathroom.", fa: "حوله در حمام است." }] },
      { word: "shower", meaning: "دوش", en: "My hotel room has a shower.", fa: "اتاق هتل من دوش دارد.", icon: "🚿", examples: [{ en: "My hotel room has a shower.", fa: "اتاق هتل من دوش دارد." }, { en: "I take a shower after traveling.", fa: "من بعد از سفر دوش می‌گیرم." }, { en: "The shower is clean.", fa: "دوش تمیز است." }] },
      { word: "blanket", meaning: "پتو", en: "I need another blanket.", fa: "من یک پتوی دیگر نیاز دارم.", icon: "🛏️", examples: [{ en: "I need another blanket.", fa: "من یک پتوی دیگر نیاز دارم." }, { en: "The hotel room has a warm blanket.", fa: "اتاق هتل یک پتوی گرم دارد." }, { en: "The blanket is on the bed.", fa: "پتو روی تخت است." }] },
      { word: "safe", meaning: "امن", en: "This area is safe at night.", fa: "این منطقه شب‌ها امن است.", icon: "🛡️", examples: [{ en: "This area is safe at night.", fa: "این منطقه شب‌ها امن است." }, { en: "Keep your money safe.", fa: "پولت را امن نگه دار." }, { en: "Have a safe trip.", fa: "سفر امنی داشته باشی." }] },
      { word: "money", meaning: "پول", en: "I need some money for my trip.", fa: "من برای سفرم به مقداری پول نیاز دارم.", icon: "💵", examples: [{ en: "I need some money for my trip.", fa: "من برای سفرم به مقداری پول نیاز دارم." }, { en: "Keep your money in a safe place.", fa: "پولت را در جای امن نگه دار." }, { en: "I change money at the airport.", fa: "من در فرودگاه پول عوض می‌کنم." }] },
      { word: "card", meaning: "کارت", en: "I pay with my card.", fa: "من با کارتم پرداخت می‌کنم.", icon: "💳", examples: [{ en: "I pay with my card.", fa: "من با کارتم پرداخت می‌کنم." }, { en: "Keep your card with you.", fa: "کارتت را همراهت نگه دار." }, { en: "The hotel needs my card information.", fa: "هتل اطلاعات کارت من را نیاز دارد." }] },
      { word: "wallet", meaning: "کیف پول", en: "I keep my money in my wallet.", fa: "من پولم را در کیف پولم نگه می‌دارم.", icon: "👛", examples: [{ en: "I keep my money in my wallet.", fa: "من پولم را در کیف پولم نگه می‌دارم." }, { en: "I lost my wallet during the trip.", fa: "من در طول سفر کیف پولم را گم کردم." }, { en: "My wallet is in my backpack.", fa: "کیف پولم داخل کوله‌پشتی‌ام است." }] },
      { word: "cash", meaning: "پول نقد", en: "I need some cash for the trip.", fa: "من برای سفر به کمی پول نقد نیاز دارم.", icon: "💶", examples: [{ en: "I need some cash for the trip.", fa: "من برای سفر به کمی پول نقد نیاز دارم." }, { en: "Do you have cash with you?", fa: "آیا پول نقد همراهت داری؟" }, { en: "This store only takes cash.", fa: "این فروشگاه فقط پول نقد قبول می‌کند." }] },
      { word: "change", meaning: "باقی پول، پول خرد", en: "Here is your change.", fa: "این هم باقی پول شما.", icon: "🪙", examples: [{ en: "Here is your change.", fa: "این هم باقی پول شما." }, { en: "I need some change for the bus.", fa: "من برای اتوبوس مقداری پول خرد نیاز دارم." }, { en: "The cashier gives me my change.", fa: "صندوق‌دار باقی پولم را به من می‌دهد." }] },
      { word: "price", meaning: "قیمت", en: "What is the price of this ticket?", fa: "قیمت این بلیت چقدر است؟", icon: "🏷️", examples: [{ en: "What is the price of this ticket?", fa: "قیمت این بلیت چقدر است؟" }, { en: "The hotel price is good.", fa: "قیمت هتل خوب است." }, { en: "I ask about the price before buying.", fa: "من قبل از خرید درباره قیمت می‌پرسم." }] },
      { word: "cheap", meaning: "ارزان", en: "This hotel is cheap and clean.", fa: "این هتل ارزان و تمیز است.", icon: "🏷️", examples: [{ en: "This hotel is cheap and clean.", fa: "این هتل ارزان و تمیز است." }, { en: "I found a cheap flight.", fa: "من یک پرواز ارزان پیدا کردم." }, { en: "The ticket is cheap today.", fa: "بلیت امروز ارزان است." }] },
      { word: "expensive", meaning: "گران", en: "This restaurant is expensive.", fa: "این رستوران گران است.", icon: "💎", examples: [{ en: "This restaurant is expensive.", fa: "این رستوران گران است." }, { en: "The hotel is too expensive for me.", fa: "هتل برای من خیلی گران است." }, { en: "Flights are expensive during holidays.", fa: "پروازها در تعطیلات گران هستند." }] },
      { word: "buy", meaning: "خریدن", en: "I buy a ticket online.", fa: "من یک بلیت آنلاین می‌خرم.", icon: "🛍️", examples: [{ en: "I buy a ticket online.", fa: "من یک بلیت آنلاین می‌خرم." }, { en: "She buys a gift during her trip.", fa: "او در طول سفرش یک هدیه می‌خرد." }, { en: "We buy food before the trip.", fa: "ما قبل از سفر غذا می‌خریم." }] },
      { word: "pay", meaning: "پرداخت کردن", en: "I pay for the hotel room.", fa: "من هزینه اتاق هتل را پرداخت می‌کنم.", icon: "💳", examples: [{ en: "I pay for the hotel room.", fa: "من هزینه اتاق هتل را پرداخت می‌کنم." }, { en: "Can I pay by card?", fa: "می‌توانم با کارت پرداخت کنم؟" }, { en: "We pay for our tickets.", fa: "ما هزینه بلیت‌هایمان را پرداخت می‌کنیم." }] },
      { word: "carry", meaning: "حمل کردن، با خود بردن", en: "I carry my backpack at the airport.", fa: "من در فرودگاه کوله‌پشتی‌ام را حمل می‌کنم.", icon: "🎒", examples: [{ en: "I carry my backpack at the airport.", fa: "من در فرودگاه کوله‌پشتی‌ام را حمل می‌کنم." }, { en: "She carries her luggage upstairs.", fa: "او وسایل سفرش را به طبقه بالا می‌برد." }, { en: "Do not carry too many bags.", fa: "کیف‌های زیادی حمل نکن." }] },
      { word: "pack", meaning: "بستن چمدان، جمع کردن وسایل", en: "I pack my bag before traveling.", fa: "من قبل از سفر کیفم را آماده می‌کنم.", icon: "🧳", examples: [{ en: "I pack my bag before traveling.", fa: "من قبل از سفر کیفم را آماده می‌کنم." }, { en: "She packs her clothes tonight.", fa: "او امشب لباس‌هایش را جمع می‌کند." }, { en: "We need to pack early.", fa: "ما باید زود وسایل‌مان را جمع کنیم." }] },
      { word: "unpack", meaning: "باز کردن چمدان، خالی کردن وسایل", en: "I unpack my bag at the hotel.", fa: "من در هتل کیفم را باز می‌کنم.", icon: "📦", examples: [{ en: "I unpack my bag at the hotel.", fa: "من در هتل کیفم را باز می‌کنم." }, { en: "She unpacks her clothes after arriving.", fa: "او بعد از رسیدن لباس‌هایش را از چمدان بیرون می‌آورد." }, { en: "We unpack when we get home.", fa: "ما وقتی به خانه می‌رسیم وسایل‌مان را باز می‌کنیم." }] },
      { word: "plan", meaning: "برنامه‌ریزی کردن", en: "We plan our trip together.", fa: "ما با هم برای سفرمان برنامه‌ریزی می‌کنیم.", icon: "📋", examples: [{ en: "We plan our trip together.", fa: "ما با هم برای سفرمان برنامه‌ریزی می‌کنیم." }, { en: "I plan my vacation early.", fa: "من زود برای تعطیلاتم برنامه‌ریزی می‌کنم." }, { en: "She plans where to go.", fa: "او برنامه‌ریزی می‌کند کجا برود." }] },
      { word: "schedule", meaning: "برنامه زمانی", en: "I check the flight schedule.", fa: "من برنامه زمانی پرواز را بررسی می‌کنم.", icon: "🗓️", examples: [{ en: "I check the flight schedule.", fa: "من برنامه زمانی پرواز را بررسی می‌کنم." }, { en: "The bus schedule is on the wall.", fa: "برنامه زمانی اتوبوس روی دیوار است." }, { en: "Our travel schedule is busy.", fa: "برنامه سفر ما شلوغ است." }] },
      { word: "time", meaning: "زمان، وقت", en: "What time does the flight leave?", fa: "پرواز چه ساعتی حرکت می‌کند؟", icon: "⏰", examples: [{ en: "What time does the flight leave?", fa: "پرواز چه ساعتی حرکت می‌کند؟" }, { en: "I arrive on time.", fa: "من به موقع می‌رسم." }, { en: "We do not have much time.", fa: "ما زمان زیادی نداریم." }] },
      { word: "early", meaning: "زود", en: "I arrive early at the airport.", fa: "من زود به فرودگاه می‌رسم.", icon: "🌅", examples: [{ en: "I arrive early at the airport.", fa: "من زود به فرودگاه می‌رسم." }, { en: "We leave early in the morning.", fa: "ما صبح زود حرکت می‌کنیم." }, { en: "The bus comes early today.", fa: "اتوبوس امروز زود می‌آید." }] },
      { word: "late", meaning: "دیر", en: "The train is late.", fa: "قطار دیر کرده است.", icon: "⏳", examples: [{ en: "The train is late.", fa: "قطار دیر کرده است." }, { en: "I am late for my flight.", fa: "من برای پروازم دیر کرده‌ام." }, { en: "The bus arrived late.", fa: "اتوبوس دیر رسید." }] },
      { word: "cancel", meaning: "لغو کردن", en: "The airline canceled the flight.", fa: "شرکت هواپیمایی پرواز را لغو کرد.", icon: "❌", examples: [{ en: "The airline canceled the flight.", fa: "شرکت هواپیمایی پرواز را لغو کرد." }, { en: "We cancel our hotel reservation.", fa: "ما رزرو هتل‌مان را لغو می‌کنیم." }, { en: "The trip is canceled because of the weather.", fa: "سفر به دلیل آب‌وهوا لغو شده است." }] },
      { word: "delay", meaning: "تأخیر", en: "The flight has a delay.", fa: "پرواز تأخیر دارد.", icon: "⏱️", examples: [{ en: "The flight has a delay.", fa: "پرواز تأخیر دارد." }, { en: "The bus delay is one hour.", fa: "تأخیر اتوبوس یک ساعت است." }, { en: "We wait because of the delay.", fa: "ما به خاطر تأخیر منتظر می‌مانیم." }] },
      { word: "weather", meaning: "آب‌وهوا", en: "The weather is good for traveling.", fa: "آب‌وهوا برای سفر خوب است.", icon: "⛅", examples: [{ en: "The weather is good for traveling.", fa: "آب‌وهوا برای سفر خوب است." }, { en: "I check the weather before my trip.", fa: "من قبل از سفرم آب‌وهوا را بررسی می‌کنم." }, { en: "The weather is cold today.", fa: "هوا امروز سرد است." }] },
      { word: "umbrella", meaning: "چتر", en: "I take an umbrella because it is raining.", fa: "چون باران می‌بارد، چتر برمی‌دارم.", icon: "☂️", examples: [{ en: "I take an umbrella because it is raining.", fa: "چون باران می‌بارد، چتر برمی‌دارم." }, { en: "My umbrella is in my bag.", fa: "چترم داخل کیفم است." }, { en: "Bring an umbrella for the trip.", fa: "برای سفر یک چتر بیاور." }] },
      { word: "customs", meaning: "گمرک", en: "We walked through customs at the airport.", fa: "ما در فرودگاه از گمرک رد شدیم.", icon: "🛃", examples: [{ en: "We walked through customs at the airport.", fa: "ما در فرودگاه از گمرک رد شدیم." }, { en: "The customs officer checked my passport.", fa: "مأمور گمرک گذرنامه‌ام را بررسی کرد." }, { en: "Do you have anything to declare at customs?", fa: "آیا چیزی برای اعلام در گمرک دارید؟" }] },
      { word: "security", meaning: "بازرسی امنیتی", en: "We passed through airport security quickly.", fa: "ما سریع از بازرسی امنیتی فرودگاه عبور کردیم.", icon: "🛂", examples: [{ en: "We passed through airport security quickly.", fa: "ما سریع از بازرسی امنیتی فرودگاه عبور کردیم." }, { en: "Take off your shoes at security.", fa: "در بازرسی امنیتی کفش‌هایت را درآور." }, { en: "Airport security is very strict.", fa: "بازرسی امنیتی فرودگاه بسیار دقیق است." }] },
      { word: "seat", meaning: "صندلی", en: "My seat is next to the window.", fa: "صندلی من کنار پنجره است.", icon: "💺", examples: [{ en: "My seat is next to the window.", fa: "صندلی من کنار پنجره است." }, { en: "Please take your seat on the plane.", fa: "لطفاً روی صندلی خود در هواپیما بنشینید." }, { en: "Is this seat taken?", fa: "این صندلی اشغال است؟" }] },
      { word: "aisle", meaning: "راهرو", en: "I prefer an aisle seat on the plane.", fa: "من صندلی کنار راهرو در هواپیما را ترجیح می‌دهم.", icon: "🚶", examples: [{ en: "I prefer an aisle seat on the plane.", fa: "من صندلی کنار راهرو در هواپیما را ترجیح می‌دهم." }, { en: "Please do not leave bags in the aisle.", fa: "لطفاً کیف‌ها را در راهرو نگذارید." }, { en: "She walked down the aisle to her seat.", fa: "او از راهرو به سمت صندلی‌اش رفت." }] },
      { word: "pilot", meaning: "خلبان", en: "The pilot welcomed the passengers.", fa: "خلبان به مسافران خوش‌آمد گفت.", icon: "👨‍✈️", examples: [{ en: "The pilot welcomed the passengers.", fa: "خلبان به مسافران خوش‌آمد گفت." }, { en: "The pilot flies the airplane safely.", fa: "خلبان هواپیما را با ایمنی هدایت می‌کند." }, { en: "I talked to the pilot after the flight.", fa: "بعد از پرواز با خلبان صحبت کردم." }] },
      { word: "flight attendant", meaning: "مهماندار هواپیما", en: "The flight attendant brought us water.", fa: "مهماندار هواپیما برای ما آب آورد.", icon: "🧑‍✈️", examples: [{ en: "The flight attendant brought us water.", fa: "مهماندار هواپیما برای ما آب آورد." }, { en: "Ask the flight attendant for help.", fa: "از مهماندار هواپیما کمک بخواهید." }, { en: "The flight attendant smiled at the passengers.", fa: "مهماندار هواپیما به مسافران لبخند زد." }] },
      { word: "take off", meaning: "برخاستن هواپیما، پرواز کردن", en: "The plane will take off soon.", fa: "هواپیما به‌زودی پرواز خواهد کرد.", icon: "🛫", examples: [{ en: "The plane will take off soon.", fa: "هواپیما به‌زودی پرواز خواهد کرد." }, { en: "We fastened our seat belts before take off.", fa: "قبل از برخاستن هواپیما کمربندهایمان را بستیم." }, { en: "The plane takes off on time.", fa: "هواپیما سروقت پرواز می‌کند." }] },
      { word: "land", meaning: "فرود آمدن", en: "The plane will land in ten minutes.", fa: "هواپیما تا ده دقیقه دیگر فرود می‌آید.", icon: "🛬", examples: [{ en: "The plane will land in ten minutes.", fa: "هواپیما تا ده دقیقه دیگر فرود می‌آید." }, { en: "We landed safely at the airport.", fa: "ما با ایمنی در فرودگاه فرود آمدیم." }, { en: "What time does the flight land?", fa: "پرواز چه ساعتی فرود می‌آید؟" }] },
      { word: "seat belt", meaning: "کمربند ایمنی", en: "Fasten your seat belt, please.", fa: "لطفاً کمربند ایمنی‌تان را ببندید.", icon: "💺", examples: [{ en: "Fasten your seat belt, please.", fa: "لطفاً کمربند ایمنی‌تان را ببندید." }, { en: "Keep your seat belt fastened during the flight.", fa: "در طول پرواز کمربند ایمنی خود را بسته نگه دارید." }, { en: "I wear a seat belt in the car.", fa: "من در ماشین کمربند ایمنی می‌بندم." }] },
      { word: "baggage claim", meaning: "تحویل بار، دریافت چمدان", en: "We waited for our bags at baggage claim.", fa: "ما در محل تحویل بار منتظر چمدان‌هایمان ماندیم.", icon: "🧳", examples: [{ en: "We waited for our bags at baggage claim.", fa: "ما در محل تحویل بار منتظر چمدان‌هایمان ماندیم." }, { en: "Where is the baggage claim area?", fa: "بخش دریافت چمدان کجاست؟" }, { en: "I picked up my suitcase at baggage claim.", fa: "چمدانم را از بخش تحویل بار برداشتم." }] },
      { word: "terminal", meaning: "پایانه، ترمینال", en: "Our flight leaves from Terminal 2.", fa: "پرواز ما از ترمینال ۲ حرکت می‌کند.", icon: "🏢", examples: [{ en: "Our flight leaves from Terminal 2.", fa: "پرواز ما از ترمینال ۲ حرکت می‌کند." }, { en: "The bus terminal is near the center.", fa: "ترمینال اتوبوس نزدیک مرکز شهر است." }, { en: "Which terminal do we need to go to?", fa: "باید به کدام ترمینال برویم؟" }] },
      { word: "platform", meaning: "سکو، سکوی قطار", en: "The train leaves from platform four.", fa: "قطار از سکوی چهار حرکت می‌کند.", icon: "🚉", examples: [{ en: "The train leaves from platform four.", fa: "قطار از سکوی چهار حرکت می‌کند." }, { en: "Passengers are waiting on the platform.", fa: "مسافران روی سکو منتظر هستند." }, { en: "Check the platform number on the screen.", fa: "شماره سکو را روی صفحه نمایش بررسی کن." }] },
      { word: "ferry", meaning: "کشتی مسافربری، لنج", en: "We took a ferry to the island.", fa: "ما با یک کشتی مسافربری به جزیره رفتیم.", icon: "⛴️", examples: [{ en: "We took a ferry to the island.", fa: "ما با یک کشتی مسافربری به جزیره رفتیم." }, { en: "The ferry crosses the river every hour.", fa: "کشتی مسافربری هر ساعت از رودخانه عبور می‌کند." }, { en: "I like riding the ferry.", fa: "من سوار شدن به کشتی مسافربری را دوست دارم." }] },
      { word: "boat", meaning: "قایق", en: "We rented a small boat on the lake.", fa: "ما روی دریاچه یک قایق کوچک اجاره کردیم.", icon: "⛵", examples: [{ en: "We rented a small boat on the lake.", fa: "ما روی دریاچه یک قایق کوچک اجاره کردیم." }, { en: "The boat moves slowly on the water.", fa: "قایق به‌آرامی روی آب حرکت می‌کند." }, { en: "They went fishing in a boat.", fa: "آن‌ها با قایق به ماهیگیری رفتند." }] },
      { word: "ship", meaning: "کشتی", en: "A large ship is in the harbor.", fa: "یک کشتی بزرگ در بندرگاه است.", icon: "🚢", examples: [{ en: "A large ship is in the harbor.", fa: "یک کشتی بزرگ در بندرگاه است." }, { en: "We traveled on a cruise ship.", fa: "ما با یک کشتی تفریحی سفر کردیم." }, { en: "The ship sails across the sea.", fa: "کشتی در دریا حرکت می‌کند." }] },
      { word: "bicycle", meaning: "دوچرخه", en: "I rented a bicycle to see the city.", fa: "من برای دیدن شهر یک دوچرخه اجاره کردم.", icon: "🚲", examples: [{ en: "I rented a bicycle to see the city.", fa: "من برای دیدن شهر یک دوچرخه اجاره کردم." }, { en: "He rides his bicycle in the park.", fa: "او در پارک دوچرخه‌سواری می‌کند." }, { en: "A bicycle is good for short trips.", fa: "دوچرخه برای سفرهای کوتاه مناسب است." }] },
      { word: "tram", meaning: "تراموا", en: "The tram runs through the city center.", fa: "تراموا از مرکز شهر عبور می‌کند.", icon: "🚋", examples: [{ en: "The tram runs through the city center.", fa: "تراموا از مرکز شهر عبور می‌کند." }, { en: "We waited for the next tram.", fa: "ما منتظر تراموای بعدی ماندیم." }, { en: "Buying a tram ticket is easy.", fa: "خریدن بلیط تراموا آسان است." }] },
      { word: "scooter", meaning: "اسکوتر", en: "You can rent an electric scooter here.", fa: "می‌توانی اینجا یک اسکوتر برقی اجاره کنی.", icon: "🛴", examples: [{ en: "You can rent an electric scooter here.", fa: "می‌توانی اینجا یک اسکوتر برقی اجاره کنی." }, { en: "She rides a scooter to the beach.", fa: "او با اسکوتر به ساحل می‌رود." }, { en: "Wear a helmet when using a scooter.", fa: "هنگام استفاده از اسکوتر کلاه ایمنی بگذار." }] },
      { word: "fare", meaning: "کرایه", en: "How much is the bus fare?", fa: "کرایه اتوبوس چقدر است؟", icon: "💵", examples: [{ en: "How much is the bus fare?", fa: "کرایه اتوبوس چقدر است؟" }, { en: "The taxi fare was ten dollars.", fa: "کرایه تاکسی ده دلار شد." }, { en: "You can pay the fare with a card.", fa: "می‌توانی کرایه را با کارت پرداخت کنی." }] },
      { word: "transfer", meaning: "تعویض خط، جابه‌جایی", en: "We need to transfer to another train.", fa: "ما باید خط قطارمان را عوض کنیم.", icon: "🔄", examples: [{ en: "We need to transfer to another train.", fa: "ما باید خط قطارمان را عوض کنیم." }, { en: "The hotel offers an airport transfer.", fa: "هتل سرویس ترانسفر فرودگاهی ارائه می‌دهد." }, { en: "Transfer at the next station.", fa: "در ایستگاه بعدی خط را عوض کن." }] },
      { word: "line", meaning: "صف", en: "There is a long line at the ticket counter.", fa: "یک صف طولانی جلوی باجه بلیط هست.", icon: "🧍", examples: [{ en: "There is a long line at the ticket counter.", fa: "یک صف طولانی جلوی باجه بلیط هست." }, { en: "We stood in line for twenty minutes.", fa: "ما بیست دقیقه در صف ایستادیم." }, { en: "Please wait in line.", fa: "لطفاً در صف منتظر بمانید." }] },
      { word: "miss", meaning: "از دست دادن (پرواز/قطار)", en: "Hurry up or we will miss the train.", fa: "عجله کن وگرنه قطار را از دست می‌دهیم.", icon: "⏰", examples: [{ en: "Hurry up or we will miss the train.", fa: "عجله کن وگرنه قطار را از دست می‌دهیم." }, { en: "I missed my flight this morning.", fa: "من امروز صبح پروازم را از دست دادم." }, { en: "He ran fast so he would not miss the bus.", fa: "او سریع دوید تا اتوبوس را از دست ندهد." }] },
      { word: "board", meaning: "سوار شدن (هواپیما/کشتی)", en: "Passengers are ready to board the plane.", fa: "مسافران آماده سوار شدن به هواپیما هستند.", icon: "🚶‍♂️", examples: [{ en: "Passengers are ready to board the plane.", fa: "مسافران آماده سوار شدن به هواپیما هستند." }, { en: "We boarded the train at noon.", fa: "ما ظهر سوار قطار شدیم." }, { en: "Show your ticket before you board.", fa: "قبل از سوار شدن بلیطت را نشان بده." }] },
      { word: "reception", meaning: "پذیرش هتل", en: "Ask for the key at reception.", fa: "کلید را از پذیرش بخواهید.", icon: "🛎️", examples: [{ en: "Ask for the key at reception.", fa: "کلید را از پذیرش بخواهید." }, { en: "The reception is open 24 hours.", fa: "پذیرش ۲۴ ساعته باز است." }, { en: "We went to reception to check in.", fa: "ما برای پذیرش شدن به پذیرش رفتیم." }] },
      { word: "lobby", meaning: "لابی هتل", en: "I will meet you in the hotel lobby.", fa: "من در لابی هتل با تو ملاقات خواهم کرد.", icon: "🛋️", examples: [{ en: "I will meet you in the hotel lobby.", fa: "من در لابی هتل با تو ملاقات خواهم کرد." }, { en: "The lobby has comfortable chairs.", fa: "لابی صندلی‌های راحتی دارد." }, { en: "We waited in the lobby for our taxi.", fa: "ما در لابی منتظر تاکسی‌مان ماندیم." }] },
      { word: "guest", meaning: "مهمان، مسافر هتل", en: "The hotel has many international guests.", fa: "هتل مهمانان بین‌المللی زیادی دارد.", icon: "🧑", examples: [{ en: "The hotel has many international guests.", fa: "هتل مهمانان بین‌المللی زیادی دارد." }, { en: "Every guest gets free breakfast.", fa: "هر مهمان صبحانه رایگان دریافت می‌کند." }, { en: "The staff welcomed each guest warmly.", fa: "کارکنان با گرمی به هر مهمان خوش‌آمد گفتند." }] },
      { word: "single room", meaning: "اتاق یک‌تخته", en: "I would like to book a single room.", fa: "می‌خواهم یک اتاق یک‌تخته رزرو کنم.", icon: "🛏️", examples: [{ en: "I would like to book a single room.", fa: "می‌خواهم یک اتاق یک‌تخته رزرو کنم." }, { en: "The single room is cozy and quiet.", fa: "اتاق یک‌تخته دنج و ساکت است." }, { en: "Is a single room available tonight?", fa: "آیا امشب اتاق یک‌تخته خالی هست؟" }] },
      { word: "double room", meaning: "اتاق دوتخته", en: "We stayed in a comfortable double room.", fa: "ما در یک اتاق دوتخته راحت اقامت کردیم.", icon: "🛏️", examples: [{ en: "We stayed in a comfortable double room.", fa: "ما در یک اتاق دوتخته راحت اقامت کردیم." }, { en: "A double room is good for two people.", fa: "اتاق دوتخته برای دو نفر مناسب است." }, { en: "How much does a double room cost?", fa: "قیمت یک اتاق دوتخته چقدر است؟" }] },
      { word: "balcony", meaning: "بالکن", en: "Our hotel room has a nice balcony.", fa: "اتاق هتل ما یک بالکن خوب دارد.", icon: "🏡", examples: [{ en: "Our hotel room has a nice balcony.", fa: "اتاق هتل ما یک بالکن خوب دارد." }, { en: "We drank tea on the balcony.", fa: "ما روی بالکن چای نوشیدیم." }, { en: "You can see the sea from the balcony.", fa: "از بالکن می‌توانی دریا را ببینی." }] },
      { word: "view", meaning: "منظره، چشم‌انداز", en: "The room has a wonderful sea view.", fa: "اتاق منظره فوق‌العاده‌ای رو به دریا دارد.", icon: "🌅", examples: [{ en: "The room has a wonderful sea view.", fa: "اتاق منظره فوق‌العاده‌ای رو به دریا دارد." }, { en: "We stopped to enjoy the mountain view.", fa: "ما توقف کردیم تا از منظره کوه لذت ببریم." }, { en: "The view from the top is amazing.", fa: "چشم‌انداز از بالا شگفت‌انگیز است." }] },
      { word: "room service", meaning: "خدمات اتاق هتل", en: "We ordered dinner from room service.", fa: "ما شام را از خدمات اتاق سفارش دادیم.", icon: "🛎️", examples: [{ en: "We ordered dinner from room service.", fa: "ما شام را از خدمات اتاق سفارش دادیم." }, { en: "Room service is available all night.", fa: "خدمات اتاق در تمام طول شب در دسترس است." }, { en: "Call room service for extra towels.", fa: "برای حوله اضافی به خدمات اتاق زنگ بزنید." }] },
      { word: "wifi", meaning: "وای‌فای، اینترنت بی‌سیم", en: "What is the wifi password for the hotel?", fa: "رمز وای‌فای هتل چیست؟", icon: "📶", examples: [{ en: "What is the wifi password for the hotel?", fa: "رمز وای‌فای هتل چیست؟" }, { en: "Free wifi is available in all rooms.", fa: "وای‌فای رایگان در تمام اتاق‌ها در دسترس است." }, { en: "The wifi connection is very fast.", fa: "اتصال وای‌فای بسیار سریع است." }] },
      { word: "bill", meaning: "صورت‌حساب هتل", en: "Can I have the hotel bill, please?", fa: "می‌شود لطفاً صورت‌حساب هتل را به من بدهید؟", icon: "🧾", examples: [{ en: "Can I have the hotel bill, please?", fa: "می‌شود لطفاً صورت‌حساب هتل را به من بدهید؟" }, { en: "I checked the bill before paying.", fa: "من قبل از پرداخت، صورت‌حساب را بررسی کردم." }, { en: "The bill includes all taxes.", fa: "صورت‌حساب شامل تمام مالیات‌ها می‌شود." }] },
      { word: "tour", meaning: "تور، گشت", en: "We booked a city tour for tomorrow.", fa: "ما برای فردا یک تور شهری رزرو کردیم.", icon: "🚐", examples: [{ en: "We booked a city tour for tomorrow.", fa: "ما برای فردا یک تور شهری رزرو کردیم." }, { en: "The guided tour lasts two hours.", fa: "تور با راهنما دو ساعت طول می‌کشد." }, { en: "I enjoyed the walking tour.", fa: "از تور پیاده‌روی لذت بردم." }] },
      { word: "sightseeing", meaning: "دیدن جاهای دیدنی، گشت‌وگذار", en: "We spent the whole day sightseeing.", fa: "ما تمام روز را به دیدن جاهای دیدنی گذراندیم.", icon: "📸", examples: [{ en: "We spent the whole day sightseeing.", fa: "ما تمام روز را به دیدن جاهای دیدنی گذراندیم." }, { en: "This bus is great for sightseeing.", fa: "این اتوبوس برای گشت‌وگذار در شهر عالی است." }, { en: "I love sightseeing in historic cities.", fa: "من عاشق دیدن جاهای دیدنی در شهرهای تاریخی هستم." }] },
      { word: "souvenir", meaning: "سوغات، یادگاری", en: "I bought a souvenir for my sister.", fa: "من برای خواهرم یک سوغاتی خریدم.", icon: "🎁", examples: [{ en: "I bought a souvenir for my sister.", fa: "من برای خواهرم یک سوغاتی خریدم." }, { en: "There is a souvenir shop near the museum.", fa: "یک فروشگاه سوغات نزدیک موزه هست." }, { en: "This cup is a souvenir from my trip.", fa: "این ماگ یادگاری از سفر من است." }] },
      { word: "postcard", meaning: "کارت‌پستال", en: "I sent a postcard to my parents.", fa: "من یک کارت‌پستال برای والدینم فرستادم.", icon: "✉️", examples: [{ en: "I sent a postcard to my parents.", fa: "من یک کارت‌پستال برای والدینم فرستادم." }, { en: "She collects postcards from every country.", fa: "او از هر کشوری کارت‌پستال جمع‌آوری می‌کند." }, { en: "I bought a beautiful postcard of the city.", fa: "من یک کارت‌پستال زیبا از شهر خریدم." }] },
      { word: "island", meaning: "جزیره", en: "We visited a beautiful tropical island.", fa: "ما از یک جزیره گرمسیری زیبا دیدن کردیم.", icon: "🏝️", examples: [{ en: "We visited a beautiful tropical island.", fa: "ما از یک جزیره گرمسیری زیبا دیدن کردیم." }, { en: "The island is surrounded by blue water.", fa: "جزیره با آب‌های آبی احاطه شده است." }, { en: "You can only reach the island by boat.", fa: "فقط با قایق می‌توانی به این جزیره برسی." }] },
      { word: "sea", meaning: "دریا", en: "The water in the sea is very blue.", fa: "آب دریا بسیار آبی است.", icon: "🌊", examples: [{ en: "The water in the sea is very blue.", fa: "آب دریا بسیار آبی است." }, { en: "We went swimming in the sea.", fa: "ما در دریا شنا کردیم." }, { en: "Our hotel is right next to the sea.", fa: "هتل ما درست کنار دریا است." }] },
      { word: "lake", meaning: "دریاچه", en: "We had a picnic near the lake.", fa: "ما نزدیک دریاچه پیک‌نیک داشتیم.", icon: "🏞️", examples: [{ en: "We had a picnic near the lake.", fa: "ما نزدیک دریاچه پیک‌نیک داشتیم." }, { en: "The lake water was calm and clear.", fa: "آب دریاچه آرام و شفاف بود." }, { en: "People rent small boats on the lake.", fa: "مردم روی دریاچه قایق‌های کوچک اجاره می‌کنند." }] },
      { word: "river", meaning: "رودخانه", en: "A wide river flows through the town.", fa: "یک رودخانه پهن از میان شهر می‌گذرد.", icon: "🏞️", examples: [{ en: "A wide river flows through the town.", fa: "یک رودخانه پهن از میان شهر می‌گذرد." }, { en: "We walked along the river bank.", fa: "ما در امتداد ساحل رودخانه قدم زدیم." }, { en: "There are bridges across the river.", fa: "پل‌هایی روی رودخانه وجود دارند." }] },
      { word: "forest", meaning: "جنگل", en: "We hiked in the green forest.", fa: "ما در جنگل سرسبز پیاده‌روی کردیم.", icon: "🌲", examples: [{ en: "We hiked in the green forest.", fa: "ما در جنگل سرسبز پیاده‌روی کردیم." }, { en: "The forest is quiet and peaceful.", fa: "جنگل ساکت و آرام است." }, { en: "Birds are singing in the forest.", fa: "پرندگان در جنگل آواز می‌خوانند." }] },
      { word: "square", meaning: "میدان شهر", en: "The main square is full of people.", fa: "میدان اصلی پر از جمعیت است.", icon: "🏛️", examples: [{ en: "The main square is full of people.", fa: "میدان اصلی پر از جمعیت است." }, { en: "We sat at a café in the town square.", fa: "ما در کافه‌ای در میدان شهر نشستیم." }, { en: "The famous statue is in the square.", fa: "مجسمه معروف در میدان قرار دارد." }] },
      { word: "sunglasses", meaning: "عینک آفتابی", en: "Do not forget your sunglasses today.", fa: "امروز عینک آفتابی‌ات را فراموش نکن.", icon: "🕶️", examples: [{ en: "Do not forget your sunglasses today.", fa: "امروز عینک آفتابی‌ات را فراموش نکن." }, { en: "I wear sunglasses on sunny days.", fa: "من در روزهای آفتابی عینک آفتابی می‌زنم." }, { en: "She bought new sunglasses for the trip.", fa: "او برای سفر یک عینک آفتابی جدید خرید." }] },
      { word: "sunscreen", meaning: "کرم ضدآفتاب", en: "Put on sunscreen before going to the beach.", fa: "قبل از رفتن به ساحل کرم ضدآفتاب بزن.", icon: "🧴", examples: [{ en: "Put on sunscreen before going to the beach.", fa: "قبل از رفتن به ساحل کرم ضدآفتاب بزن." }, { en: "I packed sunscreen in my bag.", fa: "من کرم ضدآفتاب را در کیفم گذاشتم." }, { en: "Sunscreen protects your skin from the sun.", fa: "کرم ضدآفتاب از پوستت در برابر آفتاب محافظت می‌کند." }] },
      { word: "hat", meaning: "کلاه", en: "He wears a sun hat during the walk.", fa: "او هنگام پیاده‌روی یک کلاه آفتاب‌گیر می‌گذارد.", icon: "🧢", examples: [{ en: "He wears a sun hat during the walk.", fa: "او هنگام پیاده‌روی یک کلاه آفتاب‌گیر می‌گذارد." }, { en: "I brought a warm hat for the mountains.", fa: "من برای کوهستان یک کلاه گرم آوردم." }, { en: "My hat blew away in the wind.", fa: "کلاهم در باد پرواز کرد." }] },
      { word: "charger", meaning: "شارژر", en: "Did you pack your phone charger?", fa: "آیا شارژر گوشی‌ات را در چمدان گذاشتی؟", icon: "🔌", examples: [{ en: "Did you pack your phone charger?", fa: "آیا شارژر گوشی‌ات را در چمدان گذاشتی؟" }, { en: "I need to plug in my charger.", fa: "من باید شارژرم را به برق بزنم." }, { en: "I forgot my charger at the hotel.", fa: "من شارژرم را در هتل جا گذاشتم." }] },
      { word: "rent", meaning: "اجاره کردن", en: "We want to rent a car for three days.", fa: "ما می‌خواهیم برای سه روز یک ماشین اجاره کنیم.", icon: "🔑", examples: [{ en: "We want to rent a car for three days.", fa: "ما می‌خواهیم برای سه روز یک ماشین اجاره کنیم." }, { en: "It is cheaper to rent an apartment.", fa: "اجاره کردن یک آپارتمان ارزان‌تر است." }, { en: "You can rent bikes near the park.", fa: "می‌توانی نزدیک پارک دوچرخه اجاره کنی." }] },
      { word: "camp", meaning: "اردو زدن، چادر زدن", en: "We plan to camp near the lake tonight.", fa: "ما قصد داریم امشب نزدیک دریاچه چادر بزنیم.", icon: "⛺", examples: [{ en: "We plan to camp near the lake tonight.", fa: "ما قصد داریم امشب نزدیک دریاچه چادر بزنیم." }, { en: "It is fun to camp with friends.", fa: "چادر زدن با دوستان سرگرم‌کننده است." }, { en: "They set up camp before dark.", fa: "آن‌ها قبل از تاریکی اردوگاه را برپا کردند." }] },
      { word: "return", meaning: "برگشتن، بازگشت", en: "We return home on Sunday.", fa: "ما یکشنبه به خانه برمی‌گردیم.", icon: "🔙", examples: [{ en: "We return home on Sunday.", fa: "ما یکشنبه به خانه برمی‌گردیم." }, { en: "When will you return from your trip?", fa: "چه زمانی از سفرت بازخواهی گشت؟" }, { en: "I bought a return ticket for the train.", fa: "من یک بلیط رفت و برگشت برای قطار خریدم." }] }
    ]
  },
  food: {
    name: "غذا و رستوران",
    words: [
      { word: "restaurant", meaning: "رستوران", en: "We ate dinner at a restaurant.", fa: "ما شام را در یک رستوران خوردیم.", icon: "🍽️", examples: [{ en: "We ate dinner at a restaurant.", fa: "ما شام را در یک رستوران خوردیم." }, { en: "The restaurant was full last night.", fa: "رستوران دیشب پر بود." }, { en: "We go to that restaurant often.", fa: "ما زیاد به آن رستوران می‌رویم." }] },
      { word: "menu", meaning: "منو", en: "Can I see the menu, please?", fa: "می‌شود منو را ببینم؟", icon: "📋", examples: [{ en: "Can I see the menu, please?", fa: "می‌شود منو را ببینم؟" }, { en: "The menu has many choices.", fa: "منو انتخاب‌های زیادی دارد." }, { en: "She read the menu quickly.", fa: "او منو را سریع خواند." }] },
      { word: "waiter", meaning: "گارسون", en: "The waiter brought our food.", fa: "گارسون غذای ما را آورد.", icon: "🤵", examples: [{ en: "The waiter brought our food.", fa: "گارسون غذای ما را آورد." }, { en: "The waiter is very polite.", fa: "گارسون خیلی مؤدب است." }, { en: "Ask the waiter for water.", fa: "از گارسون آب بخواه." }] },
      { word: "bread", meaning: "نان", en: "I eat bread every morning.", fa: "من هر روز صبح نان می‌خورم.", icon: "🍞", examples: [{ en: "I eat bread every morning.", fa: "من هر روز صبح نان می‌خورم." }, { en: "This bread smells amazing.", fa: "این نان بوی فوق‌العاده‌ای می‌دهد." }, { en: "She sliced the bread.", fa: "او نان را ورقه کرد." }] },
      { word: "rice", meaning: "برنج", en: "We usually cook rice for lunch.", fa: "ما معمولاً برای ناهار برنج می‌پزیم.", icon: "🍚", examples: [{ en: "We usually cook rice for lunch.", fa: "ما معمولاً برای ناهار برنج می‌پزیم." }, { en: "The rice needs more salt.", fa: "برنج نمک بیشتری نیاز دارد." }, { en: "They grow rice in the north.", fa: "آن‌ها در شمال برنج می‌کارند." }] },
      { word: "meat", meaning: "گوشت", en: "She doesn't eat meat.", fa: "او گوشت نمی‌خورد.", icon: "🥩", examples: [{ en: "She doesn't eat meat.", fa: "او گوشت نمی‌خورد." }, { en: "The meat is cooked well.", fa: "گوشت خوب پخته شده است." }, { en: "We bought meat from the butcher.", fa: "ما از قصابی گوشت خریدیم." }] },
      { word: "vegetable", meaning: "سبزیجات", en: "Vegetables are good for your health.", fa: "سبزیجات برای سلامتی خوب هستند.", icon: "🥦", examples: [{ en: "Vegetables are good for your health.", fa: "سبزیجات برای سلامتی خوب هستند." }, { en: "She grows vegetables in her garden.", fa: "او در باغچه‌اش سبزیجات می‌کارد." }, { en: "Eat your vegetables, please.", fa: "لطفاً سبزیجاتت را بخور." }] },
      { word: "fruit", meaning: "میوه", en: "I eat fruit after lunch.", fa: "من بعد از ناهار میوه می‌خورم.", icon: "🍎", examples: [{ en: "I eat fruit after lunch.", fa: "من بعد از ناهار میوه می‌خورم." }, { en: "The fruit is fresh and sweet.", fa: "میوه تازه و شیرین است." }, { en: "We bought fruit at the market.", fa: "ما از بازار میوه خریدیم." }] },
      { word: "juice", meaning: "آب‌میوه", en: "He drinks orange juice every day.", fa: "او هر روز آب‌پرتقال می‌نوشد.", icon: "🧃", examples: [{ en: "He drinks orange juice every day.", fa: "او هر روز آب‌پرتقال می‌نوشد." }, { en: "This juice is freshly squeezed.", fa: "این آب‌میوه تازه گرفته شده است." }, { en: "She made juice for the guests.", fa: "او برای مهمان‌ها آب‌میوه درست کرد." }] },
      { word: "coffee", meaning: "قهوه", en: "I drink coffee in the morning.", fa: "من صبح‌ها قهوه می‌نوشم.", icon: "☕", examples: [{ en: "I drink coffee in the morning.", fa: "من صبح‌ها قهوه می‌نوشم." }, { en: "He never drinks coffee at night.", fa: "او هرگز شب‌ها قهوه نمی‌نوشد." }, { en: "The coffee here is famous.", fa: "قهوه اینجا معروف است." }] },
      { word: "apple", meaning: "سیب", en: "I eat an apple every morning.", fa: "من هر صبح یک سیب می‌خورم.", icon: "🍎", examples: [{ en: "I eat an apple every morning.", fa: "من هر صبح یک سیب می‌خورم." }, { en: "She puts an apple in her bag.", fa: "او یک سیب در کیفش می‌گذارد." }, { en: "This apple is very sweet.", fa: "این سیب خیلی شیرین است." }] },
      { word: "banana", meaning: "موز", en: "I like bananas for breakfast.", fa: "من برای صبحانه موز دوست دارم.", icon: "🍌", examples: [{ en: "I like bananas for breakfast.", fa: "من برای صبحانه موز دوست دارم." }, { en: "He eats a banana after work.", fa: "او بعد از کار یک موز می‌خورد." }, { en: "The banana is ripe and sweet.", fa: "موز رسیده و شیرین است." }] },
      { word: "orange", meaning: "پرتقال", en: "I drink orange juice in the morning.", fa: "من صبح‌ها آب پرتقال می‌نوشم.", icon: "🍊", examples: [{ en: "I drink orange juice in the morning.", fa: "من صبح‌ها آب پرتقال می‌نوشم." }, { en: "She buys some oranges at the store.", fa: "او چند پرتقال از فروشگاه می‌خرد." }, { en: "This orange tastes good.", fa: "این پرتقال خوشمزه است." }] },
      { word: "egg", meaning: "تخم‌مرغ", en: "I eat eggs for breakfast.", fa: "من برای صبحانه تخم‌مرغ می‌خورم.", icon: "🥚", examples: [{ en: "I eat eggs for breakfast.", fa: "من برای صبحانه تخم‌مرغ می‌خورم." }, { en: "She cooks an egg in the kitchen.", fa: "او در آشپزخانه یک تخم‌مرغ درست می‌کند." }, { en: "We need two eggs for this recipe.", fa: "ما برای این دستور غذا به دو تخم‌مرغ نیاز داریم." }] },
      { word: "cheese", meaning: "پنیر", en: "I like cheese on my sandwich.", fa: "من پنیر روی ساندویچم دوست دارم.", icon: "🧀", examples: [{ en: "I like cheese on my sandwich.", fa: "من پنیر روی ساندویچم دوست دارم." }, { en: "She buys cheese from the store.", fa: "او از فروشگاه پنیر می‌خرد." }, { en: "This cheese tastes great.", fa: "این پنیر طعم عالی دارد." }] },
      { word: "milk", meaning: "شیر", en: "I drink milk every morning.", fa: "من هر صبح شیر می‌نوشم.", icon: "🥛", examples: [{ en: "I drink milk every morning.", fa: "من هر صبح شیر می‌نوشم." }, { en: "The child likes cold milk.", fa: "کودک شیر سرد دوست دارد." }, { en: "We need milk for the coffee.", fa: "ما برای قهوه به شیر نیاز داریم." }] },
      { word: "tea", meaning: "چای", en: "My grandmother drinks tea every day.", fa: "مادربزرگم هر روز چای می‌نوشد.", icon: "🫖", examples: [{ en: "My grandmother drinks tea every day.", fa: "مادربزرگم هر روز چای می‌نوشد." }, { en: "I want a cup of tea.", fa: "من یک فنجان چای می‌خواهم." }, { en: "The tea is hot.", fa: "چای داغ است." }] },
      { word: "sandwich", meaning: "ساندویچ", en: "I make a sandwich for lunch.", fa: "من برای ناهار یک ساندویچ درست می‌کنم.", icon: "🥪", examples: [{ en: "I make a sandwich for lunch.", fa: "من برای ناهار یک ساندویچ درست می‌کنم." }, { en: "She buys a sandwich at the restaurant.", fa: "او از رستوران یک ساندویچ می‌خرد." }, { en: "This sandwich is very fresh.", fa: "این ساندویچ خیلی تازه است." }] },
      { word: "chicken", meaning: "مرغ", en: "We eat chicken for dinner.", fa: "ما برای شام مرغ می‌خوریم.", icon: "🍗", examples: [{ en: "We eat chicken for dinner.", fa: "ما برای شام مرغ می‌خوریم." }, { en: "She cooks chicken with vegetables.", fa: "او مرغ را با سبزیجات درست می‌کند." }, { en: "I like grilled chicken.", fa: "من مرغ کبابی دوست دارم." }] },
      { word: "fish", meaning: "ماهی", en: "My family eats fish on Fridays.", fa: "خانواده من جمعه‌ها ماهی می‌خورند.", icon: "🐟", examples: [{ en: "My family eats fish on Fridays.", fa: "خانواده من جمعه‌ها ماهی می‌خورند." }, { en: "She cooks fish for dinner.", fa: "او برای شام ماهی درست می‌کند." }, { en: "This fish is fresh.", fa: "این ماهی تازه است." }] },
      { word: "soup", meaning: "سوپ", en: "I eat soup when I feel sick.", fa: "وقتی حالم خوب نیست سوپ می‌خورم.", icon: "🍲", examples: [{ en: "I eat soup when I feel sick.", fa: "وقتی حالم خوب نیست سوپ می‌خورم." }, { en: "She makes vegetable soup.", fa: "او سوپ سبزیجات درست می‌کند." }, { en: "The soup is very hot.", fa: "سوپ خیلی داغ است." }] },
      { word: "salad", meaning: "سالاد", en: "I have a salad with my lunch.", fa: "من با ناهارم سالاد می‌خورم.", icon: "🥗", examples: [{ en: "I have a salad with my lunch.", fa: "من با ناهارم سالاد می‌خورم." }, { en: "She makes a fresh salad.", fa: "او یک سالاد تازه درست می‌کند." }, { en: "The salad has tomatoes and lettuce.", fa: "سالاد گوجه و کاهو دارد." }] },
      { word: "potato", meaning: "سیب‌زمینی", en: "I like baked potatoes.", fa: "من سیب‌زمینی پخته دوست دارم.", icon: "🥔", examples: [{ en: "I like baked potatoes.", fa: "من سیب‌زمینی پخته دوست دارم." }, { en: "She cooks potatoes for dinner.", fa: "او برای شام سیب‌زمینی درست می‌کند." }, { en: "The potato is very hot.", fa: "سیب‌زمینی خیلی داغ است." }] },
      { word: "tomato", meaning: "گوجه‌فرنگی", en: "I put tomato in my sandwich.", fa: "من در ساندویچم گوجه می‌گذارم.", icon: "🍅", examples: [{ en: "I put tomato in my sandwich.", fa: "من در ساندویچم گوجه می‌گذارم." }, { en: "She cuts tomatoes for the salad.", fa: "او برای سالاد گوجه‌ها را خرد می‌کند." }, { en: "These tomatoes are fresh.", fa: "این گوجه‌ها تازه هستند." }] },
      { word: "onion", meaning: "پیاز", en: "I add onion to the soup.", fa: "من به سوپ پیاز اضافه می‌کنم.", icon: "🧅", examples: [{ en: "I add onion to the soup.", fa: "من به سوپ پیاز اضافه می‌کنم." }, { en: "She cuts an onion for dinner.", fa: "او برای شام یک پیاز خرد می‌کند." }, { en: "The onion smells strong.", fa: "پیاز بوی تندی دارد." }] },
      { word: "carrot", meaning: "هویج", en: "Rabbits like carrots.", fa: "خرگوش‌ها هویج دوست دارند.", icon: "🥕", examples: [{ en: "Rabbits like carrots.", fa: "خرگوش‌ها هویج دوست دارند." }, { en: "I eat carrots in my salad.", fa: "من در سالادم هویج می‌خورم." }, { en: "She cuts carrots for dinner.", fa: "او برای شام هویج خرد می‌کند." }] },
      { word: "sugar", meaning: "شکر", en: "I put sugar in my tea.", fa: "من در چایم شکر می‌ریزم.", icon: "🧂", examples: [{ en: "I put sugar in my tea.", fa: "من در چایم شکر می‌ریزم." }, { en: "This coffee has too much sugar.", fa: "این قهوه شکر زیادی دارد." }, { en: "We need some sugar for the cake.", fa: "ما برای کیک کمی شکر نیاز داریم." }] },
      { word: "salt", meaning: "نمک", en: "Please add some salt to the soup.", fa: "لطفاً کمی نمک به سوپ اضافه کن.", icon: "🧂", examples: [{ en: "Please add some salt to the soup.", fa: "لطفاً کمی نمک به سوپ اضافه کن." }, { en: "The food needs more salt.", fa: "غذا نمک بیشتری نیاز دارد." }, { en: "I do not eat much salt.", fa: "من زیاد نمک نمی‌خورم." }] },
      { word: "butter", meaning: "کره", en: "I put butter on my bread.", fa: "من روی نانم کره می‌مالم.", icon: "🧈", examples: [{ en: "I put butter on my bread.", fa: "من روی نانم کره می‌مالم." }, { en: "She cooks with butter.", fa: "او با کره آشپزی می‌کند." }, { en: "The butter is in the fridge.", fa: "کره در یخچال است." }] },
      { word: "breakfast", meaning: "صبحانه", en: "I eat breakfast at seven.", fa: "من ساعت هفت صبحانه می‌خورم.", icon: "🍳", examples: [{ en: "I eat breakfast at seven.", fa: "من ساعت هفت صبحانه می‌خورم." }, { en: "Breakfast is ready.", fa: "صبحانه آماده است." }, { en: "She makes breakfast for her family.", fa: "او برای خانواده‌اش صبحانه درست می‌کند." }] },
      { word: "lunch", meaning: "ناهار", en: "I eat lunch at work.", fa: "من در محل کار ناهار می‌خورم.", icon: "🍱", examples: [{ en: "I eat lunch at work.", fa: "من در محل کار ناهار می‌خورم." }, { en: "Lunch is ready now.", fa: "ناهار الان آماده است." }, { en: "We have lunch together.", fa: "ما با هم ناهار می‌خوریم." }] },
      { word: "dinner", meaning: "شام", en: "We have dinner at home.", fa: "ما در خانه شام می‌خوریم.", icon: "🍲", examples: [{ en: "We have dinner at home.", fa: "ما در خانه شام می‌خوریم." }, { en: "Dinner is at six tonight.", fa: "شام امشب ساعت شش است." }, { en: "She cooks dinner every day.", fa: "او هر روز شام درست می‌کند." }] },
      { word: "hungry", meaning: "گرسنه", en: "I am hungry after work.", fa: "من بعد از کار گرسنه هستم.", icon: "🤤", examples: [{ en: "I am hungry after work.", fa: "من بعد از کار گرسنه هستم." }, { en: "The children are hungry.", fa: "بچه‌ها گرسنه هستند." }, { en: "Are you hungry now?", fa: "الان گرسنه‌ای؟" }] },
      { word: "thirsty", meaning: "تشنه", en: "I am thirsty after walking.", fa: "من بعد از پیاده‌روی تشنه هستم.", icon: "🥤", examples: [{ en: "I am thirsty after walking.", fa: "من بعد از پیاده‌روی تشنه هستم." }, { en: "She feels thirsty in the summer.", fa: "او در تابستان احساس تشنگی می‌کند." }, { en: "Are you thirsty?", fa: "تشنه‌ای؟" }] },
      { word: "grape", meaning: "انگور", en: "I eat grapes after lunch.", fa: "من بعد از ناهار انگور می‌خورم.", icon: "🍇", examples: [{ en: "I eat grapes after lunch.", fa: "من بعد از ناهار انگور می‌خورم." }, { en: "These grapes are very sweet.", fa: "این انگورها خیلی شیرین هستند." }, { en: "She buys grapes at the market.", fa: "او از بازار انگور می‌خرد." }] },
      { word: "strawberry", meaning: "توت‌فرنگی", en: "I like strawberries in my yogurt.", fa: "من توت‌فرنگی را در ماستم دوست دارم.", icon: "🍓", examples: [{ en: "I like strawberries in my yogurt.", fa: "من توت‌فرنگی را در ماستم دوست دارم." }, { en: "She makes a strawberry dessert.", fa: "او یک دسر توت‌فرنگی درست می‌کند." }, { en: "The strawberries are fresh.", fa: "توت‌فرنگی‌ها تازه هستند." }] },
      { word: "lemon", meaning: "لیمو", en: "I add lemon to my tea.", fa: "من به چایم لیمو اضافه می‌کنم.", icon: "🍋", examples: [{ en: "I add lemon to my tea.", fa: "من به چایم لیمو اضافه می‌کنم." }, { en: "The lemon juice is fresh.", fa: "آب لیمو تازه است." }, { en: "She cuts a lemon for the fish.", fa: "او برای ماهی یک لیمو برش می‌دهد." }] },
      { word: "watermelon", meaning: "هندوانه", en: "We eat watermelon in summer.", fa: "ما در تابستان هندوانه می‌خوریم.", icon: "🍉", examples: [{ en: "We eat watermelon in summer.", fa: "ما در تابستان هندوانه می‌خوریم." }, { en: "This watermelon is very sweet.", fa: "این هندوانه خیلی شیرین است." }, { en: "She cuts the watermelon into pieces.", fa: "او هندوانه را به تکه‌هایی تقسیم می‌کند." }] },
      { word: "pasta", meaning: "پاستا", en: "I like pasta with cheese.", fa: "من پاستا با پنیر دوست دارم.", icon: "🍝", examples: [{ en: "I like pasta with cheese.", fa: "من پاستا با پنیر دوست دارم." }, { en: "She makes pasta for dinner.", fa: "او برای شام پاستا درست می‌کند." }, { en: "The pasta smells good.", fa: "پاستا بوی خوبی دارد." }] },
      { word: "noodle", meaning: "نودل، رشته", en: "I eat noodles for lunch.", fa: "من برای ناهار نودل می‌خورم.", icon: "🍜", examples: [{ en: "I eat noodles for lunch.", fa: "من برای ناهار نودل می‌خورم." }, { en: "She cooks noodles quickly.", fa: "او نودل را سریع درست می‌کند." }, { en: "The noodles are hot.", fa: "نودل‌ها داغ هستند." }] },
      { word: "cookie", meaning: "کلوچه، شیرینی کوچک", en: "I have a cookie with my coffee.", fa: "من با قهوه‌ام یک کلوچه می‌خورم.", icon: "🍪", examples: [{ en: "I have a cookie with my coffee.", fa: "من با قهوه‌ام یک کلوچه می‌خورم." }, { en: "She makes cookies at home.", fa: "او در خانه کلوچه درست می‌کند." }, { en: "These cookies are delicious.", fa: "این کلوچه‌ها خوشمزه هستند." }] },
      { word: "cake", meaning: "کیک", en: "We eat cake on birthdays.", fa: "ما در تولدها کیک می‌خوریم.", icon: "🎂", examples: [{ en: "We eat cake on birthdays.", fa: "ما در تولدها کیک می‌خوریم." }, { en: "She makes a chocolate cake.", fa: "او یک کیک شکلاتی درست می‌کند." }, { en: "The cake looks beautiful.", fa: "کیک زیبا به نظر می‌رسد." }] },
      { word: "chocolate", meaning: "شکلات", en: "I like dark chocolate.", fa: "من شکلات تلخ دوست دارم.", icon: "🍫", examples: [{ en: "I like dark chocolate.", fa: "من شکلات تلخ دوست دارم." }, { en: "She buys chocolate for her friend.", fa: "او برای دوستش شکلات می‌خرد." }, { en: "The chocolate is sweet.", fa: "شکلات شیرین است." }] },
      { word: "ice cream", meaning: "بستنی", en: "We eat ice cream in summer.", fa: "ما در تابستان بستنی می‌خوریم.", icon: "🍨", examples: [{ en: "We eat ice cream in summer.", fa: "ما در تابستان بستنی می‌خوریم." }, { en: "She wants chocolate ice cream.", fa: "او بستنی شکلاتی می‌خواهد." }, { en: "The ice cream is cold.", fa: "بستنی سرد است." }] },
      { word: "yogurt", meaning: "ماست", en: "I eat yogurt for breakfast.", fa: "من برای صبحانه ماست می‌خورم.", icon: "🥛", examples: [{ en: "I eat yogurt for breakfast.", fa: "من برای صبحانه ماست می‌خورم." }, { en: "She adds fruit to her yogurt.", fa: "او به ماستش میوه اضافه می‌کند." }, { en: "The yogurt is in the fridge.", fa: "ماست در یخچال است." }] },
      { word: "bottle", meaning: "بطری", en: "I have a bottle of water.", fa: "من یک بطری آب دارم.", icon: "🍾", examples: [{ en: "I have a bottle of water.", fa: "من یک بطری آب دارم." }, { en: "She puts juice in a bottle.", fa: "او آبمیوه را داخل بطری می‌ریزد." }, { en: "The bottle is on the table.", fa: "بطری روی میز است." }] },
      { word: "cup", meaning: "فنجان، لیوان", en: "I need a cup of tea.", fa: "من یک فنجان چای نیاز دارم.", icon: "☕", examples: [{ en: "I need a cup of tea.", fa: "من یک فنجان چای نیاز دارم." }, { en: "The cup is on the table.", fa: "فنجان روی میز است." }, { en: "She drinks coffee from a cup.", fa: "او قهوه را از یک فنجان می‌نوشد." }] },
      { word: "plate", meaning: "بشقاب", en: "Put the food on the plate.", fa: "غذا را روی بشقاب بگذار.", icon: "🍽️", examples: [{ en: "Put the food on the plate.", fa: "غذا را روی بشقاب بگذار." }, { en: "The plate is clean.", fa: "بشقاب تمیز است." }, { en: "She brings a plate of food.", fa: "او یک بشقاب غذا می‌آورد." }] },
      { word: "bowl", meaning: "کاسه", en: "I eat soup from a bowl.", fa: "من سوپ را از کاسه می‌خورم.", icon: "🥣", examples: [{ en: "I eat soup from a bowl.", fa: "من سوپ را از کاسه می‌خورم." }, { en: "The bowl is full of salad.", fa: "کاسه پر از سالاد است." }, { en: "She puts rice in a bowl.", fa: "او برنج را در یک کاسه می‌ریزد." }] },
      { word: "spoon", meaning: "قاشق", en: "I eat soup with a spoon.", fa: "من سوپ را با قاشق می‌خورم.", icon: "🥄", examples: [{ en: "I eat soup with a spoon.", fa: "من سوپ را با قاشق می‌خورم." }, { en: "The spoon is next to the plate.", fa: "قاشق کنار بشقاب است." }, { en: "She needs a spoon for the yogurt.", fa: "او برای ماست به یک قاشق نیاز دارد." }] },
      { word: "fork", meaning: "چنگال", en: "I eat pasta with a fork.", fa: "من پاستا را با چنگال می‌خورم.", icon: "🍴", examples: [{ en: "I eat pasta with a fork.", fa: "من پاستا را با چنگال می‌خورم." }, { en: "The fork is on the table.", fa: "چنگال روی میز است." }, { en: "She needs a clean fork.", fa: "او به یک چنگال تمیز نیاز دارد." }] },
      { word: "knife", meaning: "چاقو", en: "I use a knife to cut bread.", fa: "من برای بریدن نان از چاقو استفاده می‌کنم.", icon: "🔪", examples: [{ en: "I use a knife to cut bread.", fa: "من برای بریدن نان از چاقو استفاده می‌کنم." }, { en: "The knife is in the kitchen.", fa: "چاقو در آشپزخانه است." }, { en: "Be careful with the knife.", fa: "با چاقو مراقب باش." }] },
      { word: "order", meaning: "سفارش دادن", en: "I want to order a sandwich.", fa: "من می‌خواهم یک ساندویچ سفارش بدهم.", icon: "📝", examples: [{ en: "I want to order a sandwich.", fa: "من می‌خواهم یک ساندویچ سفارش بدهم." }, { en: "She orders coffee at the restaurant.", fa: "او در رستوران قهوه سفارش می‌دهد." }, { en: "We order dinner online.", fa: "ما شام را آنلاین سفارش می‌دهیم." }] },
      { word: "bill", meaning: "صورت‌حساب", en: "Can I have the bill, please?", fa: "لطفاً صورت‌حساب را می‌دهید؟", icon: "🧾", examples: [{ en: "Can I have the bill, please?", fa: "لطفاً صورت‌حساب را می‌دهید؟" }, { en: "The waiter brings the bill.", fa: "پیشخدمت صورت‌حساب را می‌آورد." }, { en: "I pay the bill after dinner.", fa: "من بعد از شام صورت‌حساب را پرداخت می‌کنم." }] },
      { word: "meal", meaning: "وعده غذایی", en: "Breakfast is my favorite meal.", fa: "صبحانه وعده غذایی مورد علاقه من است.", icon: "🍽️", examples: [{ en: "Breakfast is my favorite meal.", fa: "صبحانه وعده غذایی مورد علاقه من است." }, { en: "We have a meal together every evening.", fa: "ما هر عصر با هم یک وعده غذا می‌خوریم." }, { en: "This meal is easy to make.", fa: "درست کردن این وعده غذایی آسان است." }] },
      { word: "customer", meaning: "مشتری", en: "The customer is waiting for food.", fa: "مشتری منتظر غذا است.", icon: "🧑‍💼", examples: [{ en: "The customer is waiting for food.", fa: "مشتری منتظر غذا است." }, { en: "The restaurant has many customers.", fa: "رستوران مشتری‌های زیادی دارد." }, { en: "The customer pays at the end.", fa: "مشتری در پایان پرداخت می‌کند." }] },
      { word: "chef", meaning: "سرآشپز", en: "The chef makes great food.", fa: "سرآشپز غذای عالی درست می‌کند.", icon: "👨‍🍳", examples: [{ en: "The chef makes great food.", fa: "سرآشپز غذای عالی درست می‌کند." }, { en: "The chef is in the kitchen.", fa: "سرآشپز در آشپزخانه است." }, { en: "She wants to be a chef.", fa: "او می‌خواهد سرآشپز شود." }] },
      { word: "cook", meaning: "آشپز", en: "My dad is a good cook.", fa: "پدرم آشپز خوبی است.", icon: "🧑‍🍳", examples: [{ en: "My dad is a good cook.", fa: "پدرم آشپز خوبی است." }, { en: "The cook prepares fresh food.", fa: "آشپز غذای تازه آماده می‌کند." }, { en: "I want to become a better cook.", fa: "من می‌خواهم آشپز بهتری شوم." }] },
      { word: "glass", meaning: "لیوان", en: "I drink water from a glass.", fa: "من آب را از یک لیوان می‌نوشم.", icon: "🥛", examples: [{ en: "I drink water from a glass.", fa: "من آب را از یک لیوان می‌نوشم." }, { en: "The glass is on the table.", fa: "لیوان روی میز است." }, { en: "She fills the glass with juice.", fa: "او لیوان را با آبمیوه پر می‌کند." }] },
      { word: "fridge", meaning: "یخچال", en: "Put the milk in the fridge.", fa: "شیر را داخل یخچال بگذار.", icon: "🧊", examples: [{ en: "Put the milk in the fridge.", fa: "شیر را داخل یخچال بگذار." }, { en: "The fridge is full of food.", fa: "یخچال پر از غذا است." }, { en: "I check the fridge before shopping.", fa: "من قبل از خرید یخچال را بررسی می‌کنم." }] },
      { word: "freezer", meaning: "فریزر", en: "The ice cream is in the freezer.", fa: "بستنی داخل فریزر است.", icon: "❄️", examples: [{ en: "The ice cream is in the freezer.", fa: "بستنی داخل فریزر است." }, { en: "We keep frozen food in the freezer.", fa: "ما غذای یخ‌زده را در فریزر نگه می‌داریم." }, { en: "The freezer is very cold.", fa: "فریزر خیلی سرد است." }] },
      { word: "market", meaning: "بازار", en: "I buy vegetables at the market.", fa: "من سبزیجات را از بازار می‌خرم.", icon: "🏪", examples: [{ en: "I buy vegetables at the market.", fa: "من سبزیجات را از بازار می‌خرم." }, { en: "The market is near my house.", fa: "بازار نزدیک خانه من است." }, { en: "We go to the market every week.", fa: "ما هر هفته به بازار می‌رویم." }] },
      { word: "store", meaning: "فروشگاه", en: "I buy food at the store.", fa: "من از فروشگاه غذا می‌خرم.", icon: "🏬", examples: [{ en: "I buy food at the store.", fa: "من از فروشگاه غذا می‌خرم." }, { en: "The store sells fresh fruit.", fa: "فروشگاه میوه تازه می‌فروشد." }, { en: "The store is open today.", fa: "فروشگاه امروز باز است." }] },
      { word: "healthy", meaning: "سالم", en: "Fruits and vegetables are healthy foods.", fa: "میوه‌ها و سبزیجات غذاهای سالمی هستند.", icon: "🥗", examples: [{ en: "Fruits and vegetables are healthy foods.", fa: "میوه‌ها و سبزیجات غذاهای سالمی هستند." }, { en: "I try to eat healthy food every day.", fa: "من سعی می‌کنم هر روز غذای سالم بخورم." }, { en: "This meal is healthy and delicious.", fa: "این وعده غذایی سالم و خوشمزه است." }] },
      { word: "unhealthy", meaning: "ناسالم", en: "Too much sugar is unhealthy.", fa: "شکر زیاد ناسالم است.", icon: "🍔", examples: [{ en: "Too much sugar is unhealthy.", fa: "شکر زیاد ناسالم است." }, { en: "Fast food can be unhealthy.", fa: "غذای سریع می‌تواند ناسالم باشد." }, { en: "I try not to eat unhealthy food often.", fa: "من سعی می‌کنم زیاد غذای ناسالم نخورم." }] },
      { word: "sandwich shop", meaning: "ساندویچی", en: "There is a sandwich shop near my house.", fa: "نزدیک خانه من یک ساندویچی هست.", icon: "🥪", examples: [{ en: "There is a sandwich shop near my house.", fa: "نزدیک خانه من یک ساندویچی هست." }, { en: "We buy lunch from the sandwich shop.", fa: "ما ناهار را از ساندویچی می‌خریم." }, { en: "The sandwich shop is busy today.", fa: "ساندویچی امروز شلوغ است." }] },
      { word: "cafe", meaning: "کافه", en: "I drink coffee at the cafe.", fa: "من در کافه قهوه می‌نوشم.", icon: "☕", examples: [{ en: "I drink coffee at the cafe.", fa: "من در کافه قهوه می‌نوشم." }, { en: "The cafe is near the park.", fa: "کافه نزدیک پارک است." }, { en: "We meet at a cafe after work.", fa: "ما بعد از کار در یک کافه همدیگر را می‌بینیم." }] },
      { word: "dessert", meaning: "دسر", en: "We have dessert after dinner.", fa: "ما بعد از شام دسر می‌خوریم.", icon: "🍨", examples: [{ en: "We have dessert after dinner.", fa: "ما بعد از شام دسر می‌خوریم." }, { en: "My favorite dessert is ice cream.", fa: "دسر مورد علاقه من بستنی است." }, { en: "She makes a chocolate dessert.", fa: "او یک دسر شکلاتی درست می‌کند." }] },
      { word: "delicious", meaning: "خوشمزه", en: "This pizza is delicious.", fa: "این پیتزا خوشمزه است.", icon: "😋", examples: [{ en: "This pizza is delicious.", fa: "این پیتزا خوشمزه است." }, { en: "She makes delicious food.", fa: "او غذای خوشمزه درست می‌کند." }, { en: "The restaurant has delicious meals.", fa: "این رستوران غذاهای خوشمزه دارد." }] },
      { word: "snack", meaning: "میان‌وعده، خوراکی", en: "I eat a snack after school.", fa: "من بعد از مدرسه یک میان‌وعده می‌خورم.", icon: "🥨", examples: [{ en: "I eat a snack after school.", fa: "من بعد از مدرسه یک میان‌وعده می‌خورم." }, { en: "This snack is easy to carry.", fa: "این خوراکی راحت حمل می‌شود." }, { en: "She wants a healthy snack.", fa: "او یک میان‌وعده سالم می‌خواهد." }] },
      { word: "cut", meaning: "بریدن، خرد کردن", en: "Cut the apple, please.", fa: "لطفاً سیب را ببُر.", icon: "🔪", examples: [{ en: "Cut the apple, please.", fa: "لطفاً سیب را ببُر." }, { en: "She cuts vegetables for soup.", fa: "او سبزیجات را برای سوپ خرد می‌کند." }, { en: "I cut the bread with a knife.", fa: "من نان را با چاقو می‌برم." }] },
      { word: "mix", meaning: "مخلوط کردن", en: "Mix the eggs and milk.", fa: "تخم‌مرغ و شیر را مخلوط کن.", icon: "🥣", examples: [{ en: "Mix the eggs and milk.", fa: "تخم‌مرغ و شیر را مخلوط کن." }, { en: "She mixes the ingredients.", fa: "او مواد اولیه را مخلوط می‌کند." }, { en: "Mix everything in the bowl.", fa: "همه چیز را در کاسه مخلوط کن." }] },
      { word: "apple juice", meaning: "آب سیب", en: "I like apple juice.", fa: "من آب سیب دوست دارم.", icon: "🧃", examples: [{ en: "I like apple juice.", fa: "من آب سیب دوست دارم." }, { en: "She drinks apple juice with breakfast.", fa: "او با صبحانه آب سیب می‌نوشد." }, { en: "The apple juice is cold.", fa: "آب سیب سرد است." }] },
      { word: "pizza", meaning: "پیتزا", en: "We order pizza on Friday nights.", fa: "ما جمعه‌شب‌ها پیتزا سفارش می‌دهیم.", icon: "🍕", examples: [{ en: "We order pizza on Friday nights.", fa: "ما جمعه‌شب‌ها پیتزا سفارش می‌دهیم." }, { en: "This pizza has cheese and mushrooms.", fa: "این پیتزا پنیر و قارچ دارد." }, { en: "I like pizza with extra cheese.", fa: "من پیتزا با پنیر اضافه دوست دارم." }] },
      { word: "burger", meaning: "همبرگر", en: "I eat a burger for lunch.", fa: "من برای ناهار همبرگر می‌خورم.", icon: "🍔", examples: [{ en: "I eat a burger for lunch.", fa: "من برای ناهار همبرگر می‌خورم." }, { en: "The burger comes with fries.", fa: "همبرگر با سیب‌زمینی سرخ‌کرده می‌آید." }, { en: "She orders a cheese burger.", fa: "او یک همبرگر پنیری سفارش می‌دهد." }] },
      { word: "sweet", meaning: "شیرین", en: "This apple is very sweet.", fa: "این سیب خیلی شیرین است.", icon: "🍬", examples: [{ en: "This apple is very sweet.", fa: "این سیب خیلی شیرین است." }, { en: "I like sweet tea.", fa: "من چای شیرین دوست دارم." }, { en: "The cake is too sweet for me.", fa: "کیک برای من خیلی شیرین است." }] },
      { word: "salty", meaning: "شور", en: "The soup is a little salty.", fa: "سوپ کمی شور است.", icon: "🧂", examples: [{ en: "The soup is a little salty.", fa: "سوپ کمی شور است." }, { en: "These fries are very salty.", fa: "این سیب‌زمینی‌های سرخ‌کرده خیلی شور هستند." }, { en: "I don’t like salty food.", fa: "من غذای شور دوست ندارم." }] },
      { word: "spicy", meaning: "تند", en: "This food is too spicy for me.", fa: "این غذا برای من خیلی تند است.", icon: "🌶️", examples: [{ en: "This food is too spicy for me.", fa: "این غذا برای من خیلی تند است." }, { en: "She likes spicy chicken.", fa: "او مرغ تند دوست دارد." }, { en: "Be careful, the sauce is spicy.", fa: "مراقب باش، سس تند است." }] },
      { word: "oven", meaning: "فر", en: "Put the cake in the oven.", fa: "کیک را در فر بگذار.", icon: "⏲️", examples: [{ en: "Put the cake in the oven.", fa: "کیک را در فر بگذار." }, { en: "The oven is very hot.", fa: "فر خیلی داغ است." }, { en: "She bakes bread in the oven.", fa: "او نان را در فر می‌پزد." }] },
      { word: "stove", meaning: "اجاق گاز", en: "Turn on the stove to cook.", fa: "اجاق را روشن کن تا بپزی.", icon: "🍳", examples: [{ en: "Turn on the stove to cook.", fa: "اجاق را روشن کن تا بپزی." }, { en: "The pot is on the stove.", fa: "قابلمه روی اجاق است." }, { en: "Be careful near the hot stove.", fa: "نزدیک اجاق داغ مراقب باش." }] },
      { word: "boil", meaning: "جوشاندن", en: "Boil the water for tea.", fa: "آب را برای چای بجوشان.", icon: "🫖", examples: [{ en: "Boil the water for tea.", fa: "آب را برای چای بجوشان." }, { en: "I boil eggs for breakfast.", fa: "من برای صبحانه تخم‌مرغ می‌جوشانم." }, { en: "The soup needs to boil for ten minutes.", fa: "سوپ باید ده دقیقه بجوشد." }] },
      { word: "fry", meaning: "سرخ کردن", en: "She fries the potatoes.", fa: "او سیب‌زمینی‌ها را سرخ می‌کند.", icon: "🍳", examples: [{ en: "She fries the potatoes.", fa: "او سیب‌زمینی‌ها را سرخ می‌کند." }, { en: "I fry eggs in a pan.", fa: "من تخم‌مرغ را در تابه سرخ می‌کنم." }, { en: "Do not fry the food too long.", fa: "غذا را زیاد سرخ نکن." }] },
      { word: "bake", meaning: "پختن در فر", en: "I bake a cake every weekend.", fa: "من هر آخر هفته کیک می‌پزم.", icon: "🍞", examples: [{ en: "I bake a cake every weekend.", fa: "من هر آخر هفته کیک می‌پزم." }, { en: "She bakes bread at home.", fa: "او در خانه نان می‌پزد." }, { en: "Bake the cookies for fifteen minutes.", fa: "کوکی‌ها را پانزده دقیقه در فر بپز." }] },
      { word: "taste", meaning: "چشیدن", en: "Taste the soup. Is it good?", fa: "سوپ را بچش. خوب است؟", icon: "👅", examples: [{ en: "Taste the soup. Is it good?", fa: "سوپ را بچش. خوب است؟" }, { en: "I taste the cake before serving.", fa: "قبل از سرو کیک را می‌چشم." }, { en: "Does it taste sweet?", fa: "طعمش شیرین است؟" }] },
      { word: "oil", meaning: "روغن", en: "Put some oil in the pan.", fa: "کمی روغن در تابه بریز.", icon: "🫒", examples: [{ en: "Put some oil in the pan.", fa: "کمی روغن در تابه بریز." }, { en: "She fries the food in oil.", fa: "او غذا را در روغن سرخ می‌کند." }, { en: "This oil is good for cooking.", fa: "این روغن برای پختن خوب است." }] },
      { word: "honey", meaning: "عسل", en: "I put honey in my tea.", fa: "من عسل در چایم می‌ریزم.", icon: "🍯", examples: [{ en: "I put honey in my tea.", fa: "من عسل در چایم می‌ریزم." }, { en: "Honey is natural and sweet.", fa: "عسل طبیعی و شیرین است." }, { en: "She likes bread with honey.", fa: "او نان با عسل دوست دارد." }] },
      { word: "cucumber", meaning: "خیار", en: "I put cucumber in my salad.", fa: "من خیار در سالادم می‌گذارم.", icon: "🥒", examples: [{ en: "I put cucumber in my salad.", fa: "من خیار در سالادم می‌گذارم." }, { en: "This cucumber is fresh and cool.", fa: "این خیار تازه و خنک است." }, { en: "She cuts the cucumber for lunch.", fa: "او خیار را برای ناهار خرد می‌کند." }] },
      { word: "lettuce", meaning: "کاهو", en: "The salad has a lot of lettuce.", fa: "سالاد کاهوی زیادی دارد.", icon: "🥬", examples: [{ en: "The salad has a lot of lettuce.", fa: "سالاد کاهوی زیادی دارد." }, { en: "Wash the lettuce before eating.", fa: "قبل از خوردن کاهو را بشوی." }, { en: "I buy fresh lettuce every week.", fa: "من هر هفته کاهوی تازه می‌خرم." }] },
      { word: "mushroom", meaning: "قارچ", en: "I put mushrooms on my pizza.", fa: "من قارچ روی پیتزایم می‌گذارم.", icon: "🍄", examples: [{ en: "I put mushrooms on my pizza.", fa: "من قارچ روی پیتزایم می‌گذارم." }, { en: "She cooks mushrooms with eggs.", fa: "او قارچ را با تخم‌مرغ درست می‌کند." }, { en: "These mushrooms taste good.", fa: "این قارچ‌ها طعم خوبی دارند." }] },
      { word: "fries", meaning: "سیب‌زمینی سرخ‌کرده", en: "I order fries with my burger.", fa: "من با همبرگرم سیب‌زمینی سرخ‌کرده سفارش می‌دهم.", icon: "🍟", examples: [{ en: "I order fries with my burger.", fa: "من با همبرگرم سیب‌زمینی سرخ‌کرده سفارش می‌دهم." }, { en: "The fries are hot and salty.", fa: "سیب‌زمینی‌های سرخ‌کرده داغ و شور هستند." }, { en: "She likes fries with ketchup.", fa: "او سیب‌زمینی سرخ‌کرده با کetchup دوست دارد." }] },
      { word: "soda", meaning: "نوشابه", en: "I drink soda with my meal.", fa: "من با غذایم نوشابه می‌نوشم.", icon: "🥤", examples: [{ en: "I drink soda with my meal.", fa: "من با غذایم نوشابه می‌نوشم." }, { en: "This soda is very cold.", fa: "این نوشابه خیلی سرد است." }, { en: "She orders a soda at the restaurant.", fa: "او در رستوران نوشابه سفارش می‌دهد." }] },
      { word: "toast", meaning: "نان تست", en: "I eat toast with butter for breakfast.", fa: "من برای صبحانه نان تست با کره می‌خورم.", icon: "🍞", examples: [{ en: "I eat toast with butter for breakfast.", fa: "من برای صبحانه نان تست با کره می‌خورم." }, { en: "The toast is ready.", fa: "نان تست آماده است." }, { en: "She makes toast every morning.", fa: "او هر صبح نان تست درست می‌کند." }] },
      { word: "beef", meaning: "گوشت گاو، گوشت گوساله", en: "We bought some fresh beef for dinner.", fa: "ما برای شام مقداری گوشت گوساله تازه خریدیم.", icon: "🥩", examples: [{ en: "We bought some fresh beef for dinner.", fa: "ما برای شام مقداری گوشت گوساله تازه خریدیم." }, { en: "Do you eat beef or only chicken?", fa: "آیا گوشت گاو می‌خوری یا فقط مرغ؟" }, { en: "Beef is a common ingredient in burgers.", fa: "گوشت گاو یک ماده اولیه رایج در برگرها است." }] },
      { word: "pork", meaning: "گوشت خوک", en: "He does not eat pork for dinner.", fa: "او برای شام گوشت خوک نمی‌خورد.", icon: "🥓", examples: [{ en: "He does not eat pork for dinner.", fa: "او برای شام گوشت خوک نمی‌خورد." }, { en: "This soup has small pieces of pork.", fa: "این سوپ تکه‌های کوچکی از گوشت خوک دارد." }, { en: "Many restaurants serve grilled pork.", fa: "رستوران‌های زیادی گوشت خوک کبابی سرو می‌کنند." }] },
      { word: "seafood", meaning: "غذای دریایی", en: "This restaurant is famous for fresh seafood.", fa: "این رستوران به خاطر غذای دریایی تازه معروف است.", icon: "🦞", examples: [{ en: "This restaurant is famous for fresh seafood.", fa: "این رستوران به خاطر غذای دریایی تازه معروف است." }, { en: "I love seafood, especially grilled fish.", fa: "من عاشق غذای دریایی هستم، مخصوصاً ماهی کبابی." }, { en: "We ordered seafood for lunch today.", fa: "ما امروز برای ناهار غذای دریایی سفارش دادیم." }] },
      { word: "shrimp", meaning: "میگو", en: "She ordered fried shrimp with rice.", fa: "او میگوی سرخ‌شده با برنج سفارش داد.", icon: "🦐", examples: [{ en: "She ordered fried shrimp with rice.", fa: "او میگوی سرخ‌شده با برنج سفارش داد." }, { en: "I like to put shrimp in my salad.", fa: "من دوست دارم در سالادم میگو بریزم." }, { en: "Fresh shrimp cooks very fast.", fa: "میگوی تازه خیلی سریع می‌پزد." }] },
      { word: "tuna", meaning: "ماهی تن، تن ماهی", en: "I made a tuna sandwich for lunch.", fa: "من برای ناهار یک ساندویچ تن ماهی درست کردم.", icon: "🐟", examples: [{ en: "I made a tuna sandwich for lunch.", fa: "من برای ناهار یک ساندویچ تن ماهی درست کردم." }, { en: "We have two cans of tuna in the kitchen.", fa: "ما دو قوطی تن ماهی در آشپزخانه داریم." }, { en: "Tuna is a healthy choice for dinner.", fa: "ماهی تن یک انتخاب سالم برای شام است." }] },
      { word: "pasta sauce", meaning: "سس پاستا", en: "She makes pasta sauce with fresh tomatoes.", fa: "او سس پاستا را با گوجه‌فرنگی‌های تازه درست می‌کند.", icon: "🥫", examples: [{ en: "She makes pasta sauce with fresh tomatoes.", fa: "او سس پاستا را با گوجه‌فرنگی‌های تازه درست می‌کند." }, { en: "We need more pasta sauce for dinner.", fa: "ما برای شام به سس پاستای بیشتری نیاز داریم." }, { en: "This pasta sauce smells delicious.", fa: "این سس پاستا بوی خوشمزه‌ای می‌دهد." }] },
      { word: "garlic", meaning: "سیر", en: "I always add garlic to pasta sauce.", fa: "من همیشه به سس پاستا سیر اضافه می‌کنم.", icon: "🧄", examples: [{ en: "I always add garlic to pasta sauce.", fa: "من همیشه به سس پاستا سیر اضافه می‌کنم." }, { en: "Garlic gives this soup a great flavor.", fa: "سیر طعم فوق‌العاده‌ای به این سوپ می‌دهد." }, { en: "She chopped two cloves of garlic.", fa: "او دو حبه سیر خرد کرد." }] },
      { word: "pepper", meaning: "فلفل", en: "Please pass the salt and pepper.", fa: "لطفاً نمک و فلفل را بدهید.", icon: "🌶️", examples: [{ en: "Please pass the salt and pepper.", fa: "لطفاً نمک و فلفل را بدهید." }, { en: "I like black pepper in my soup.", fa: "من فلفل سیاه را در سوپم دوست دارم." }, { en: "This dish has too much pepper.", fa: "این غذا فلفل خیلی زیادی دارد." }] },
      { word: "flour", meaning: "آرد", en: "We need two cups of flour for the cake.", fa: "ما برای کیک به دو پیمانه آرد نیاز داریم.", icon: "🌾", examples: [{ en: "We need two cups of flour for the cake.", fa: "ما برای کیک به دو پیمانه آرد نیاز داریم." }, { en: "She bought a bag of white flour.", fa: "او یک کیسه آرد سفید خرید." }, { en: "Mix the flour and sugar together in a bowl.", fa: "آرد و شکر را در یک کاسه با هم مخلوط کن." }] },
      { word: "sauce", meaning: "سس", en: "I like tomato sauce on my pasta.", fa: "من سس گوجه‌فرنگی روی پاستایم را دوست دارم.", icon: "🥫", examples: [{ en: "I like tomato sauce on my pasta.", fa: "من سس گوجه‌فرنگی روی پاستایم را دوست دارم." }, { en: "Would you like extra sauce with your food?", fa: "آیا سس اضافه همراه با غذایتان می‌خواهید؟" }, { en: "This sauce tastes sweet and spicy.", fa: "این سس طعم شیرین و تندی دارد." }] },
      { word: "ketchup", meaning: "سس کچاپ، سس گوجه", en: "Do you want ketchup on your burger?", fa: "آیا روی برگرت سس کچاپ می‌خواهی؟", icon: "🥫", examples: [{ en: "Do you want ketchup on your burger?", fa: "آیا روی برگرت سس کچاپ می‌خواهی؟" }, { en: "Children love fries with ketchup.", fa: "بچه‌ها سیب‌زمینی سرخ‌کرده با کچاپ را خیلی دوست دارند." }, { en: "The bottle of ketchup is on the table.", fa: "بطری سس کچاپ روی میز است." }] },
      { word: "mayonnaise", meaning: "سس مایونز", en: "I put mayonnaise on my chicken sandwich.", fa: "من روی ساندویچ مرغم سس مایونز می‌زنم.", icon: "🥗", examples: [{ en: "I put mayonnaise on my chicken sandwich.", fa: "من روی ساندویچ مرغم سس مایونز می‌زنم." }, { en: "We keep the mayonnaise in the fridge.", fa: "ما سس مایونز را در یخچال نگه می‌داریم." }, { en: "This salad has too much mayonnaise.", fa: "این سالاد سس مایونز خیلی زیادی دارد." }] },
      { word: "mustard", meaning: "خردل، سس خردل", en: "She likes mustard on her hot dog.", fa: "او سس خردل روی هات‌داگش را دوست دارد.", icon: "🌭", examples: [{ en: "She likes mustard on her hot dog.", fa: "او سس خردل روی هات‌داگش را دوست دارد." }, { en: "This mustard has a strong spicy taste.", fa: "این خردل طعم تند و تیزی دارد." }, { en: "We ran out of yellow mustard.", fa: "خردل زرد ما تمام شد." }] },
      { word: "hot dog", meaning: "هات‌داگ", en: "We ate hot dogs at the park.", fa: "ما در پارک هات‌داگ خوردیم.", icon: "🌭", examples: [{ en: "We ate hot dogs at the park.", fa: "ما در پارک هات‌داگ خوردیم." }, { en: "He put mustard and ketchup on his hot dog.", fa: "او روی هات‌داگش خردل و کچاپ ریخت." }, { en: "Hot dogs are quick and easy to make.", fa: "درست کردن هات‌داگ‌ها سریع و آسان است." }] },
      { word: "sausage", meaning: "سوسیس", en: "I eat eggs and sausage for breakfast.", fa: "من برای صبحانه تخم‌مرغ و سوسیس می‌خورم.", icon: "🌭", examples: [{ en: "I eat eggs and sausage for breakfast.", fa: "من برای صبحانه تخم‌مرغ و سوسیس می‌خورم." }, { en: "She grilled sausages for dinner.", fa: "او برای شام سوسیس‌ها را کباب کرد." }, { en: "This spicy sausage tastes great.", fa: "این سوسیس تند طعم عالی دارد." }] },
      { word: "bacon", meaning: "بیکن", en: "I like crispy bacon with my eggs.", fa: "من بیکن برشته را با تخم‌مرغم دوست دارم.", icon: "🥓", examples: [{ en: "I like crispy bacon with my eggs.", fa: "من بیکن برشته را با تخم‌مرغم دوست دارم." }, { en: "The smell of bacon filled the kitchen.", fa: "بوی بیکن آشپزخانه را پر کرد." }, { en: "He cooked three slices of bacon for breakfast.", fa: "او برای صبحانه سه ورقه بیکن پخت." }] },
      { word: "jam", meaning: "مربا", en: "I like strawberry jam on my toast.", fa: "من مربای توت‌فرنگی روی نان تستم را دوست دارم.", icon: "🍯", examples: [{ en: "I like strawberry jam on my toast.", fa: "من مربای توت‌فرنگی روی نان تستم را دوست دارم." }, { en: "She bought a jar of sweet jam.", fa: "او یک شیشه مربای شیرین خرید." }, { en: "We make homemade jam every summer.", fa: "ما هر تابستان مربای خانگی درست می‌کنیم." }] },
      { word: "cereal", meaning: "غلات صبحانه، کورن‌فلکس", en: "The kids eat cereal with cold milk every morning.", fa: "بچه‌ها هر روز صبح غلات صبحانه با شیر سرد می‌خورند.", icon: "🥣", examples: [{ en: "The kids eat cereal with cold milk every morning.", fa: "بچه‌ها هر روز صبح غلات صبحانه با شیر سرد می‌خورند." }, { en: "I bought a box of cereal from the grocery store.", fa: "من یک جعبه غلات صبحانه از خواربارفروشی خریدم." }, { en: "Cereal is a very fast breakfast option.", fa: "غلات صبحانه یک گزینه صبحانه بسیار سریع است." }] },
      { word: "pancake", meaning: "پنکیک", en: "My mom makes delicious pancakes on Sunday mornings.", fa: "مادرم صبح‌های یکشنبه پنکیک‌های خوشمزه‌ای درست می‌کند.", icon: "🥞", examples: [{ en: "My mom makes delicious pancakes on Sunday mornings.", fa: "مادرم صبح‌های یکشنبه پنکیک‌های خوشمزه‌ای درست می‌کند." }, { en: "We eat pancakes with syrup and fresh fruit.", fa: "ما پنکیک‌ها را با شربت و میوه تازه می‌خوریم." }, { en: "I want two warm pancakes for breakfast.", fa: "من برای صبحانه دو عدد پنکیک گرم می‌خواهم." }] },
      { word: "lemonade", meaning: "لیموناد، آب‌لیمو شیرین", en: "We drink cold lemonade on hot summer days.", fa: "ما در روزهای گرم تابستان لیموناد خنک می‌نوشیم.", icon: "🍋", examples: [{ en: "We drink cold lemonade on hot summer days.", fa: "ما در روزهای گرم تابستان لیموناد خنک می‌نوشیم." }, { en: "She made fresh lemonade for the guests.", fa: "او برای مهمان‌ها لیموناد تازه درست کرد." }, { en: "This lemonade tastes sweet and refreshing.", fa: "این لیموناد طعم شیرین و باطراوتی دارد." }] },
      { word: "hot chocolate", meaning: "هات‌چاکلت، شکلات داغ", en: "I drink hot chocolate in the winter.", fa: "من در زمستان هات‌چاکلت می‌نوشم.", icon: "☕", examples: [{ en: "I drink hot chocolate in the winter.", fa: "من در زمستان هات‌چاکلت می‌نوشم." }, { en: "The children love warm hot chocolate with milk.", fa: "بچه‌ها شکلات داغ گرم با شیر را خیلی دوست دارند." }, { en: "This cafe serves the best hot chocolate in town.", fa: "این کافه بهترین شکلات داغ شهر را سرو می‌کند." }] },
      { word: "vegetable oil", meaning: "روغن مایع، روغن گیاهی", en: "Use vegetable oil to fry the potatoes.", fa: "برای سرخ کردن سیب‌زمینی‌ها از روغن مایع استفاده کن.", icon: "🫒", examples: [{ en: "Use vegetable oil to fry the potatoes.", fa: "برای سرخ کردن سیب‌زمینی‌ها از روغن مایع استفاده کن." }, { en: "We need a bottle of vegetable oil from the store.", fa: "ما به یک بطری روغن مایع از فروشگاه نیاز داریم." }, { en: "She cooked the chicken in vegetable oil.", fa: "او مرغ را در روغن گیاهی پخت." }] },
      { word: "olive", meaning: "زیتون", en: "I like black olives on my pizza.", fa: "من زیتون سیاه روی پیتزایم را دوست دارم.", icon: "🫒", examples: [{ en: "I like black olives on my pizza.", fa: "من زیتون سیاه روی پیتزایم را دوست دارم." }, { en: "We bought a jar of green olives from the market.", fa: "ما یک شیشه زیتون سبز از بازار خریدیم." }, { en: "She put fresh olives into the salad bowl.", fa: "او زیتون‌های تازه را داخل کاسه سالاد ریخت." }] },
      { word: "corn", meaning: "ذرت، بلال", en: "We boiled fresh sweet corn for dinner.", fa: "ما برای شام ذرت شیرین تازه آبپز کردیم.", icon: "🌽", examples: [{ en: "We boiled fresh sweet corn for dinner.", fa: "ما برای شام ذرت شیرین تازه آبپز کردیم." }, { en: "I like corn in my vegetable soup.", fa: "من ذرت را در سوپ سبزیجاتم دوست دارم." }, { en: "She bought three ears of corn at the grocery store.", fa: "او سه بلال ذرت از خواربارفروشی خرید." }] },
      { word: "spinach", meaning: "اسفناج", en: "Spinach is very healthy and full of iron.", fa: "اسفناج بسیار سالم و سرشار از آهن است.", icon: "🥬", examples: [{ en: "Spinach is very healthy and full of iron.", fa: "اسفناج بسیار سالم و سرشار از آهن است." }, { en: "She cooked spinach with eggs for breakfast.", fa: "او برای صبحانه اسفناج را با تخم‌مرغ درست کرد." }, { en: "I like fresh spinach leaves in my salad.", fa: "من برگ‌های اسفناج تازه را در سالادم دوست دارم." }] },
      { word: "pear", meaning: "گلابی", en: "This yellow pear is sweet and juicy.", fa: "این گلابی زرد شیرین و آبدار است.", icon: "🍐", examples: [{ en: "This yellow pear is sweet and juicy.", fa: "این گلابی زرد شیرین و آبدار است." }, { en: "She packed a pear for her afternoon snack.", fa: "او یک گلابی برای میان‌وعده عصرش بسته‌بندی کرد." }, { en: "We picked fresh pears from the tree.", fa: "ما گلابی‌های تازه از درخت چیدیم." }] },
      { word: "peach", meaning: "هلو", en: "I bought fresh peaches at the fruit market.", fa: "من از بازار میوه هلوهای تازه خریدم.", icon: "🍑", examples: [{ en: "I bought fresh peaches at the fruit market.", fa: "من از بازار میوه هلوهای تازه خریدم." }, { en: "The peach is sweet and soft.", fa: "هلو شیرین و نرم است." }, { en: "She made a delicious dessert with peaches.", fa: "او با هلوها یک دسر خوشمزه درست کرد." }] },
      { word: "pineapple", meaning: "آناناس", en: "She cut the pineapple into small pieces.", fa: "او آناناس را به تکه‌های کوچک برش داد.", icon: "🍍", examples: [{ en: "She cut the pineapple into small pieces.", fa: "او آناناس را به تکه‌های کوچک برش داد." }, { en: "Pineapple juice is very sweet and refreshing.", fa: "آب آناناس بسیار شیرین و باطراوت است." }, { en: "Some people like pineapple on their pizza.", fa: "بعضی افراد آناناس را روی پیتزایشان دوست دارند." }] },
      { word: "grill", meaning: "کباب کردن، گریل کردن", en: "We grill chicken outside in the summer.", fa: "ما در تابستان بیرون مرغ کباب می‌کنیم.", icon: "🥩", examples: [{ en: "We grill chicken outside in the summer.", fa: "ما در تابستان بیرون مرغ کباب می‌کنیم." }, { en: "He likes to grill burgers for his friends.", fa: "او دوست دارد برای دوستانش برگر کباب کند." }, { en: "She grilled fresh fish for dinner.", fa: "او برای شام ماهی تازه گریل کرد." }] },
      { word: "slice", meaning: "تکه، برش، ورقه", en: "Can I have a slice of bread, please?", fa: "می‌شود لطفاً یک برش نان به من بدهید؟", icon: "🍕", examples: [{ en: "Can I have a slice of bread, please?", fa: "می‌شود لطفاً یک برش نان به من بدهید؟" }, { en: "She ate a slice of chocolate cake.", fa: "او یک تکه کیک شکلاتی خورد." }, { en: "Put a slice of cheese in the sandwich.", fa: "یک ورقه پنیر در ساندویچ بگذار." }] },
      { word: "sour", meaning: "ترش", en: "This fresh lemon is very sour.", fa: "این لیموی تازه خیلی ترش است.", icon: "🍋", examples: [{ en: "This fresh lemon is very sour.", fa: "این لیموی تازه خیلی ترش است." }, { en: "She likes sour candy after lunch.", fa: "او بعد از ناهار آبنبات ترش دوست دارد." }, { en: "The green apple has a sour taste.", fa: "سیب سبز طعم ترشی دارد." }] },
      { word: "fresh", meaning: "تازه", en: "We bought fresh fruit at the morning market.", fa: "ما از بازار صبحگاهی میوه تازه خریدیم.", icon: "🥗", examples: [{ en: "We bought fresh fruit at the morning market.", fa: "ما از بازار صبحگاهی میوه تازه خریدیم." }, { en: "This fresh bread smells amazing.", fa: "این نان تازه بوی فوق‌العاده‌ای می‌دهد." }, { en: "Always drink fresh water during the day.", fa: "همیشه در طول روز آب تازه بنوشید." }] },
      { word: "hot", meaning: "داغ، گرم", en: "Be careful, the soup is very hot.", fa: "مراقب باش، سوپ خیلی داغ است.", icon: "🔥", examples: [{ en: "Be careful, the soup is very hot.", fa: "مراقب باش، سوپ خیلی داغ است." }, { en: "I like a cup of hot tea in the morning.", fa: "من یک فنجان چای داغ در صبح را دوست دارم." }, { en: "The food came to our table hot and fresh.", fa: "غذا داغ و تازه به میز ما آمد." }] },
      { word: "cold", meaning: "سرد، خنک", en: "I drink cold water after running.", fa: "من بعد از دویدن آب سرد می‌نوشم.", icon: "🧊", examples: [{ en: "I drink cold water after running.", fa: "من بعد از دویدن آب سرد می‌نوشم." }, { en: "She prefers cold milk with her cereal.", fa: "او شیر سرد را با غلات صبحانه‌اش ترجیح می‌دهد." }, { en: "Put the juice in the fridge to keep it cold.", fa: "آبمیوه را در یخچال بگذار تا سرد بماند." }] },
      { word: "fast food", meaning: "فست‌فود، غذای حاضری", en: "We eat fast food on busy days.", fa: "ما در روزهای شلوغ فست‌فود می‌خوریم.", icon: "🍔", examples: [{ en: "We eat fast food on busy days.", fa: "ما در روزهای شلوغ فست‌فود می‌خوریم." }, { en: "Too much fast food is not healthy.", fa: "فست‌فود بیش از حد سالم نیست." }, { en: "There is a new fast food place near my school.", fa: "یک فست‌فودی جدید نزدیک مدرسه من هست." }] },
      { word: "napkin", meaning: "دستمال سفره", en: "Please take a clean napkin from the table.", fa: "لطفاً یک دستمال سفره تمیز از روی میز بردارید.", icon: "🧻", examples: [{ en: "Please take a clean napkin from the table.", fa: "لطفاً یک دستمال سفره تمیز از روی میز بردارید." }, { en: "She wiped her hands with a paper napkin.", fa: "او دست‌هایش را با یک دستمال سفره کاغذی پاک کرد." }, { en: "Can we have more napkins for our table?", fa: "می‌توانیم دستمال سفره‌های بیشتری برای میزمان داشته باشیم؟" }] },
      { word: "pan", meaning: "ماهیتابه، تابه", en: "Heat the oil in the pan before frying.", fa: "قبل از سرخ کردن، روغن را در ماهیتابه داغ کن.", icon: "🍳", examples: [{ en: "Heat the oil in the pan before frying.", fa: "قبل از سرخ کردن، روغن را در ماهیتابه داغ کن." }, { en: "She washed the dirty pan in the kitchen sink.", fa: "او ماهیتابه کثیف را در سینک آشپزخانه شست." }, { en: "Put the eggs into the hot pan.", fa: "تخم‌مرغ‌ها را داخل ماهیتابه داغ بریز." }] },
      { word: "pot", meaning: "قابلمه، دیگ", en: "She filled the pot with clean water for pasta.", fa: "او قابلمه را برای پاستا با آب تمیز پر کرد.", icon: "🍲", examples: [{ en: "She filled the pot with clean water for pasta.", fa: "او قابلمه را برای پاستا با آب تمیز پر کرد." }, { en: "The soup is boiling in the pot.", fa: "سوپ در قابلمه در حال جوشیدن است." }, { en: "Put the lid on the pot to keep it warm.", fa: "در قابلمه را بگذار تا گرم بماند." }] },
      { word: "grocery store", meaning: "خواربارفروشی، سوپرمارکت", en: "I buy fresh milk at the grocery store every week.", fa: "من هر هفته از خواربارفروشی شیر تازه می‌خرم.", icon: "🛒", examples: [{ en: "I buy fresh milk at the grocery store every week.", fa: "من هر هفته از خواربارفروشی شیر تازه می‌خرم." }, { en: "The grocery store is very busy on weekends.", fa: "خواربارفروشی در آخر هفته‌ها بسیار شلوغ است." }, { en: "We made a shopping list before going to the grocery store.", fa: "ما قبل از رفتن به خواربارفروشی یک لیست خرید درست کردیم." }] },
      { word: "picnic", meaning: "پیکنیک، گردش در طبیعت", en: "We packed sandwiches and fruit for a family picnic.", fa: "ما برای یک پیکنیک خانوادگی ساندویچ و میوه بسته‌بندی کردیم.", icon: "🧺", examples: [{ en: "We packed sandwiches and fruit for a family picnic.", fa: "ما برای یک پیکنیک خانوادگی ساندویچ و میوه بسته‌بندی کردیم." }, { en: "They had a lovely picnic in the sunny park.", fa: "آن‌ها یک پیکنیک دلپذیر در پارک آفتابی داشتند." }, { en: "We spread a blanket on the grass for our picnic.", fa: "ما برای پیکنیک‌مان یک پتو روی چمن‌ها پهن کردیم." }] },
      { word: "water", meaning: "آب", en: "Can I have a glass of water, please?", fa: "می‌شود لطفاً یک لیوان آب به من بدهید؟", icon: "💧", examples: [{ en: "Can I have a glass of water, please?", fa: "می‌شود لطفاً یک لیوان آب به من بدهید؟" }, { en: "I drink plenty of water every day.", fa: "من هر روز مقدار زیادی آب می‌نوشم." }, { en: "Cold water tastes great in summer.", fa: "آب سرد در تابستان طعم عالی دارد." }] },
      { word: "drink", meaning: "نوشیدن، نوشیدنی", en: "What would you like to drink?", fa: "چه نوشیدنی‌ای میل دارید؟", icon: "🥤", examples: [{ en: "What would you like to drink?", fa: "چه نوشیدنی‌ای میل دارید؟" }, { en: "We ordered a cold drink with our lunch.", fa: "ما همراه ناهارمان یک نوشیدنی خنک سفارش دادیم." }, { en: "He drinks tea after dinner.", fa: "او بعد از شام چای می‌نوشد." }] },
      { word: "dish", meaning: "خوراک، غذا / ظرف", en: "This fish dish is very popular here.", fa: "این خوراک ماهی اینجا بسیار محبوب است.", icon: "🍽️", examples: [{ en: "This fish dish is very popular here.", fa: "این خوراک ماهی اینجا بسیار محبوب است." }, { en: "She washed the dishes after dinner.", fa: "او بعد از شام ظرف‌ها را شست." }, { en: "My favorite dish is vegetable soup.", fa: "غذای موردعلاقه من سوپ سبزیجات است." }] },
      { word: "bitter", meaning: "تلخ", en: "This black coffee tastes bitter.", fa: "این قهوه تلخ مزه می‌دهد.", icon: "☕", examples: [{ en: "This black coffee tastes bitter.", fa: "این قهوه تلخ مزه می‌دهد." }, { en: "I do not like bitter chocolate.", fa: "من شکلات تلخ را دوست ندارم." }, { en: "Add sugar if the tea is too bitter.", fa: "اگر چای خیلی تلخ است، شکر اضافه کن." }] },
      { word: "bakery", meaning: "نانوایی، قنادی", en: "We bought warm bread from the bakery.", fa: "ما از نانوایی نان گرم خریدیم.", icon: "🥖", examples: [{ en: "We bought warm bread from the bakery.", fa: "ما از نانوایی نان گرم خریدیم." }, { en: "The bakery smells of fresh cookies.", fa: "نانوایی بوی کوکی‌های تازه می‌دهد." }, { en: "Is there a good bakery near here?", fa: "آیا نانوایی خوبی نزدیک اینجا هست؟" }] },
      { word: "tip", meaning: "انعام دادن، انعام", en: "We left a tip for the waiter.", fa: "ما برای پیشخدمت انعام گذاشتیم.", icon: "💵", examples: [{ en: "We left a tip for the waiter.", fa: "ما برای پیشخدمت انعام گذاشتیم." }, { en: "How much tip should we give?", fa: "چقدر باید انعام بدهیم؟" }, { en: "The service was great, so I gave a generous tip.", fa: "سرویس‌دهی عالی بود، بنابراین انعام سخاوتمندانه‌ای دادم." }] },
      { word: "receipt", meaning: "رسید، فیش خرید", en: "Please keep your receipt after paying.", fa: "لطفاً بعد از پرداخت، رسید خود را نگه دارید.", icon: "🧾", examples: [{ en: "Please keep your receipt after paying.", fa: "لطفاً بعد از پرداخت، رسید خود را نگه دارید." }, { en: "The cashier gave me the receipt.", fa: "صندوق‌دار رسید را به من داد." }, { en: "I checked the prices on the receipt.", fa: "من قیمت‌ها را روی رسید بررسی کردم." }] },
      { word: "tray", meaning: "سینی", en: "The waiter carried drinks on a large tray.", fa: "پیشخدمت نوشیدنی‌ها را روی یک سینی بزرگ حمل کرد.", icon: "🍱", examples: [{ en: "The waiter carried drinks on a large tray.", fa: "پیشخدمت نوشیدنی‌ها را روی یک سینی بزرگ حمل کرد." }, { en: "Put your plates on the food tray.", fa: "بشقاب‌هایت را روی سینی غذا بگذار." }, { en: "She brought tea and cookies on a tray.", fa: "او چای و بیسکویت را در یک سینی آورد." }] },
      { word: "kettle", meaning: "کتری", en: "She boiled water in the kettle for tea.", fa: "او برای چای در کتری آب جوشاند.", icon: "🫖", examples: [{ en: "She boiled water in the kettle for tea.", fa: "او برای چای در کتری آب جوشاند." }, { en: "The kettle on the stove is whistling.", fa: "کتری روی اجاق گاز در حال سوت زدن است." }, { en: "Put the electric kettle on, please.", fa: "لطفاً کتری برقی را روشن کن." }] },
      { word: "can", meaning: "قوطی (کنسرو یا نوشیدنی)", en: "He opened a can of tomato soup.", fa: "او یک قوطی سوپ گوجه‌فرنگی باز کرد.", icon: "🥫", examples: [{ en: "He opened a can of tomato soup.", fa: "او یک قوطی سوپ گوجه‌فرنگی باز کرد." }, { en: "I bought a cold can of soda.", fa: "من یک قوطی نوشابه خنک خریدم." }, { en: "Keep canned beans in the kitchen cabinet.", fa: "لوبیاهای کنسروی را در کابینت آشپزخانه نگه دار." }] },
      { word: "serve", meaning: "سرو کردن، کشیدن غذا", en: "The restaurant serves breakfast until eleven.", fa: "رستوران تا ساعت یازده صبحانه سرو می‌کند.", icon: "🧑‍🍳", examples: [{ en: "The restaurant serves breakfast until eleven.", fa: "رستوران تا ساعت یازده صبحانه سرو می‌کند." }, { en: "Dinner is ready to serve.", fa: "شام برای سرو آماده است." }, { en: "They serve hot soup with fresh bread.", fa: "آن‌ها سوپ داغ را با نان تازه سرو می‌کنند." }] },
      { word: "nut", meaning: "آجیل، مغز", en: "Nuts are a healthy afternoon snack.", fa: "آجیل یک میان‌وعده سالم عصرگاهی است.", icon: "🥜", examples: [{ en: "Nuts are a healthy afternoon snack.", fa: "آجیل یک میان‌وعده سالم عصرگاهی است." }, { en: "Does this cake contain nuts?", fa: "آیا این کیک حاوی مغز یا آجیل است؟" }, { en: "I put mixed nuts in my yogurt bowl.", fa: "من در کاسه ماستم آجیل مخلوط ریختم." }] },
      { word: "bean", meaning: "لوبیا، حبوبات", en: "We cooked rice with green beans.", fa: "ما برنج را با لوبیا سبز پختیم.", icon: "🫘", examples: [{ en: "We cooked rice with green beans.", fa: "ما برنج را با لوبیا سبز پختیم." }, { en: "Beans have a lot of healthy protein.", fa: "لوبیا پروتئین سالم زیادی دارد." }, { en: "She made a warm bean soup for dinner.", fa: "او برای شام یک سوپ لوبیای گرم درست کرد." }] },
      { word: "pie", meaning: "پای، تارت", en: "We had a slice of warm apple pie.", fa: "ما یک تکه پای سیب گرم خوردیم.", icon: "🥧", examples: [{ en: "We had a slice of warm apple pie.", fa: "ما یک تکه پای سیب گرم خوردیم." }, { en: "My grandmother bakes delicious fruit pies.", fa: "مادربزرگم پای‌های میوه‌ای خوشمزه‌ای می‌پزد." }, { en: "Would you like some cherry pie for dessert?", fa: "آیا برای دسر مقداری پای گیلاس میل دارید؟" }] },
      { word: "biscuit", meaning: "بیسکویت", en: "I like to eat a biscuit with my tea.", fa: "من دوست دارم همراه چایم بیسکویت بخورم.", icon: "🍪", examples: [{ en: "I like to eat a biscuit with my tea.", fa: "من دوست دارم همراه چایم بیسکویت بخورم." }, { en: "She offered me a sweet chocolate biscuit.", fa: "او به من یک بیسکویت شکلاتی شیرین تعارف کرد." }, { en: "There are no biscuits left in the box.", fa: "هیچ بیسکویتی در جعبه باقی نمانده است." }] },
      { word: "vegetarian", meaning: "گیاه‌خوار، غذای گیاهی", en: "Does this restaurant have vegetarian options?", fa: "آیا این رستوران گزینه‌های گیاهی دارد؟", icon: "🥗", examples: [{ en: "Does this restaurant have vegetarian options?", fa: "آیا این رستوران گزینه‌های گیاهی دارد؟" }, { en: "He ordered a tasty vegetarian pizza.", fa: "او یک پیتزای گیاهی خوشمزه سفارش داد." }, { en: "My sister is vegetarian and does not eat meat.", fa: "خواهرم گیاه‌خوار است و گوشت نمی‌خورد." }] },
      { word: "bite", meaning: "لقمه، گاز زدن", en: "Can I have a small bite of your sandwich?", fa: "می‌شود یک گاز کوچک از ساندویچت بزنم؟", icon: "🥪", examples: [{ en: "Can I have a small bite of your sandwich?", fa: "می‌شود یک گاز کوچک از ساندویچت بزنم؟" }, { en: "He took a big bite of the juicy burger.", fa: "او یک گاز بزرگ از برگر آبدار زد." }, { en: "Chew every bite carefully before swallowing.", fa: "هر لقمه را قبل از قورت دادن خوب بجو." }] },
      { word: "smell", meaning: "بوییدن، بوی غذا", en: "The fresh soup has a wonderful smell.", fa: "سوپ تازه بوی فوق‌العاده‌ای دارد.", icon: "👃", examples: [{ en: "The fresh soup has a wonderful smell.", fa: "سوپ تازه بوی فوق‌العاده‌ای دارد." }, { en: "I can smell fresh bread from the kitchen.", fa: "می‌توانم بوی نان تازه را از آشپزخانه حس کنم." }, { en: "Smell the spices before putting them in the pot.", fa: "قبل از ریختن ادویه‌ها در قابلمه، آنها را بو کن." }] }
    ]
  },
  work: {
    name: "کار و اداره",
    words: [
      { word: "office", meaning: "اداره", en: "I work in a big office.", fa: "من در یک اداره بزرگ کار می‌کنم.", icon: "🏢", examples: [{ en: "I work in a big office.", fa: "من در یک اداره بزرگ کار می‌کنم." }, { en: "The office opens at nine.", fa: "اداره ساعت نه باز می‌شود." }, { en: "Her office is on the second floor.", fa: "اداره‌اش در طبقه دوم است." }] },
      { word: "job", meaning: "شغل", en: "She has a good job.", fa: "او شغل خوبی دارد.", icon: "💼", examples: [{ en: "She has a good job.", fa: "او شغل خوبی دارد." }, { en: "I love my new job.", fa: "من عاشق شغل جدیدم هستم." }, { en: "He found a job near home.", fa: "او یک شغل نزدیک خانه پیدا کرد." }] },
      { word: "meeting", meaning: "جلسه", en: "We have a meeting at 10 AM.", fa: "ما ساعت ۱۰ صبح جلسه داریم.", icon: "🗣️", examples: [{ en: "We have a meeting at 10 AM.", fa: "ما ساعت ۱۰ صبح جلسه داریم." }, { en: "The meeting was very short.", fa: "جلسه خیلی کوتاه بود." }, { en: "Do not be late for the meeting.", fa: "برای جلسه دیر نکن." }] },
      { word: "boss", meaning: "رئیس", en: "My boss is very kind.", fa: "رئیس من خیلی مهربان است.", icon: "🧑‍💼", examples: [{ en: "My boss is very kind.", fa: "رئیس من خیلی مهربان است." }, { en: "The boss called me this morning.", fa: "رئیس امروز صبح به من زنگ زد." }, { en: "Her boss travels a lot.", fa: "رئیسش زیاد سفر می‌کند." }] },
      { word: "colleague", meaning: "همکار", en: "He is my colleague.", fa: "او همکار من است.", icon: "🧑‍🤝‍🧑", examples: [{ en: "He is my colleague.", fa: "او همکار من است." }, { en: "My colleagues helped me today.", fa: "همکارانم امروز به من کمک کردند." }, { en: "She had lunch with a colleague.", fa: "او با یک همکار ناهار خورد." }] },
      { word: "email", meaning: "ایمیل", en: "Please send me an email.", fa: "لطفاً برای من ایمیل بفرست.", icon: "📧", examples: [{ en: "Please send me an email.", fa: "لطفاً برای من ایمیل بفرست." }, { en: "I check my email twice a day.", fa: "من روزی دو بار ایمیلم را چک می‌کنم." }, { en: "The email arrived an hour ago.", fa: "ایمیل یک ساعت پیش رسید." }] },
      { word: "laptop", meaning: "لپ‌تاپ", en: "I use my laptop for work.", fa: "من از لپ‌تاپم برای کار استفاده می‌کنم.", icon: "💻", examples: [{ en: "I use my laptop for work.", fa: "من از لپ‌تاپم برای کار استفاده می‌کنم." }, { en: "My laptop is charging.", fa: "لپ‌تاپم در حال شارژ است." }, { en: "She carries her laptop everywhere.", fa: "او لپ‌تاپش را همه‌جا می‌برد." }] },
      { word: "desk", meaning: "میز کار", en: "There is a lamp on my desk.", fa: "روی میز کارم یک چراغ هست.", icon: "🗂️", examples: [{ en: "There is a lamp on my desk.", fa: "روی میز کارم یک چراغ هست." }, { en: "My desk is next to the window.", fa: "میز کارم کنار پنجره است." }, { en: "Keep your desk clean.", fa: "میز کارت را تمیز نگه دار." }] },
      { word: "printer", meaning: "پرینتر", en: "The printer is out of paper.", fa: "پرینتر کاغذ ندارد.", icon: "🖨️", examples: [{ en: "The printer is out of paper.", fa: "پرینتر کاغذ ندارد." }, { en: "The printer works again.", fa: "پرینتر دوباره کار می‌کند." }, { en: "She bought a new printer.", fa: "او یک پرینتر جدید خرید." }] },
      { word: "call", meaning: "تماس", en: "I need to make a phone call.", fa: "من باید یک تماس تلفنی بگیرم.", icon: "📞", examples: [{ en: "I need to make a phone call.", fa: "من باید یک تماس تلفنی بگیرم." }, { en: "The call lasted ten minutes.", fa: "تماس ده دقیقه طول کشید." }, { en: "I missed your call, sorry.", fa: "تماست را از دست دادم، ببخشید." }] },
      { word: "worker", meaning: "کارگر، نیروی کار", en: "The factory has many hard workers.", fa: "کارخانه نیروهای کار سخت‌کوش زیادی دارد.", icon: "👷", examples: [{ en: "The factory has many hard workers.", fa: "کارخانه نیروهای کار سخت‌کوش زیادی دارد." }, { en: "Every worker has a safety helmet.", fa: "هر کارگری یک کلاه ایمنی دارد." }, { en: "He is a skilled construction worker.", fa: "او یک کارگر ماهر ساختمانی است." }] },
      { word: "team", meaning: "تیم، گروه کاری", en: "We work together as a great team.", fa: "ما به عنوان یک تیم عالی با هم کار می‌کنیم.", icon: "👥", examples: [{ en: "We work together as a great team.", fa: "ما به عنوان یک تیم عالی با هم کار می‌کنیم." }, { en: "Our team finished the task today.", fa: "تیم ما امروز کار را تمام کرد." }, { en: "Welcome to our project team.", fa: "به تیم پروژه ما خوش آمدید." }] },
      { word: "staff", meaning: "کارکنان، پرسنل", en: "The hotel staff is very helpful.", fa: "پرسنل هتل بسیار کمک‌کننده هستند.", icon: "👔", examples: [{ en: "The hotel staff is very helpful.", fa: "پرسنل هتل بسیار کمک‌کننده هستند." }, { en: "All staff members attend the morning meeting.", fa: "تمام کارکنان در جلسه صبح شرکت می‌کنند." }, { en: "We need more office staff.", fa: "ما به کارکنان دفتری بیشتری نیاز داریم." }] },
      { word: "client", meaning: "مشتری، ارباب‌رجوع", en: "I have an appointment with a client.", fa: "من با یک مشتری قرار ملاقات دارم.", icon: "🤝", examples: [{ en: "I have an appointment with a client.", fa: "من با یک مشتری قرار ملاقات دارم." }, { en: "The client loved our presentation.", fa: "مشتری از ارائه ما خوشش آمد." }, { en: "She answered the client questions politely.", fa: "او با ادب به سوالات مشتری پاسخ داد." }] },
      { word: "customer", meaning: "مشتری", en: "The customer paid with cash.", fa: "مشتری نقدی پرداخت کرد.", icon: "🛍️", examples: [{ en: "The customer paid with cash.", fa: "مشتری نقدی پرداخت کرد." }, { en: "We help every customer with a smile.", fa: "ما با لبخند به هر مشتری کمک می‌کنیم." }, { en: "A new customer entered the store.", fa: "یک مشتری جدید وارد فروشگاه شد." }] },
      { word: "assistant", meaning: "دستیار", en: "The assistant organized my schedule.", fa: "دستیار برنامه زمانی من را مرتب کرد.", icon: "🧑‍💼", examples: [{ en: "The assistant organized my schedule.", fa: "دستیار برنامه زمانی من را مرتب کرد." }, { en: "She works as a dental assistant.", fa: "او به عنوان دستیار دندان‌پزشک کار می‌کند." }, { en: "The manager hired an assistant.", fa: "مدیر یک دستیار استخدام کرد." }] },
      { word: "doctor", meaning: "پزشک، دکتر", en: "The doctor works at the city hospital.", fa: "دکتر در بیمارستان شهر کار می‌کند.", icon: "👨‍⚕️", examples: [{ en: "The doctor works at the city hospital.", fa: "دکتر در بیمارستان شهر کار می‌کند." }, { en: "She wants to be a doctor.", fa: "او می‌خواهد پزشک شود." }, { en: "The doctor examined the patient carefully.", fa: "پزشک بیمار را با دقت معاینه کرد." }] },
      { word: "nurse", meaning: "پرستار", en: "The nurse gave me good advice.", fa: "پرستار به من توصیه خوبی کرد.", icon: "👩‍⚕️", examples: [{ en: "The nurse gave me good advice.", fa: "پرستار به من توصیه خوبی کرد." }, { en: "He works as a night nurse.", fa: "او به عنوان پرستار شیفت شب کار می‌کند." }, { en: "Nurses care for sick people every day.", fa: "پرستاران هر روز از بیماران مراقبت می‌کنند." }] },
      { word: "teacher", meaning: "معلم، آموزگار", en: "Our English teacher explains clearly.", fa: "معلم انگلیسی ما به طور واضح توضیح می‌دهد.", icon: "🧑‍🏫", examples: [{ en: "Our English teacher explains clearly.", fa: "معلم انگلیسی ما به طور واضح توضیح می‌دهد." }, { en: "The teacher wrote words on the board.", fa: "معلم کلمات را روی تخته نوشت." }, { en: "He has been a teacher for five years.", fa: "او پنج سال است که معلم است." }] },
      { word: "driver", meaning: "راننده", en: "The bus driver drives safely.", fa: "راننده اتوبوس با ایمنی رانندگی می‌کند.", icon: "🚗", examples: [{ en: "The bus driver drives safely.", fa: "راننده اتوبوس با ایمنی رانندگی می‌کند." }, { en: "She works as a delivery driver.", fa: "او به عنوان راننده تحویل بار کار می‌کند." }, { en: "The taxi driver knows all the streets.", fa: "راننده تاکسی تمام خیابان‌ها را می‌شناسد." }] },
      { word: "clerk", meaning: "کارمند اداری، متصدی", en: "The bank clerk helped me open an account.", fa: "کارمند بانک به من کمک کرد حسابی باز کنم.", icon: "🧑‍💻", examples: [{ en: "The bank clerk helped me open an account.", fa: "کارمند بانک به من کمک کرد حسابی باز کنم." }, { en: "Ask the clerk at the front desk.", fa: "از کارمند پشت باجه بپرسید." }, { en: "The office clerk stamped my form.", fa: "کارمند اداره فرم من را مهر زد." }] },
      { word: "secretary", meaning: "منشی", en: "The secretary answered the office phone.", fa: "منشی تلفن اداره را جواب داد.", icon: "📋", examples: [{ en: "The secretary answered the office phone.", fa: "منشی تلفن اداره را جواب داد." }, { en: "She typed a letter for the secretary file.", fa: "او نامه‌ای برای پرونده منشی تایپ کرد." }, { en: "The secretary scheduled our morning meeting.", fa: "منشی جلسه صبح ما را تنظیم کرد." }] },
      { word: "computer", meaning: "کامپیوتر، رایانه", en: "I turn on my computer every morning.", fa: "من هر صبح کامپیوترم را روشن می‌کنم.", icon: "🖥️", examples: [{ en: "I turn on my computer every morning.", fa: "من هر صبح کامپیوترم را روشن می‌کنم." }, { en: "This new computer is very fast.", fa: "این کامپیوتر جدید بسیار سریع است." }, { en: "She works on the computer all day.", fa: "او تمام روز با کامپیوتر کار می‌کند." }] },
      { word: "keyboard", meaning: "صفحه‌کلید، کیبورد", en: "Clean your keyboard with a soft cloth.", fa: "کیبوردت را با یک دستمال نرم تمیز کن.", icon: "⌨️", examples: [{ en: "Clean your keyboard with a soft cloth.", fa: "کیبوردت را با یک دستمال نرم تمیز کن." }, { en: "He types fast on this keyboard.", fa: "او روی این کیبورد سریع تایپ می‌کند." }, { en: "My wireless keyboard needs a battery.", fa: "کیبورد بی‌سیم من به باتری نیاز دارد." }] },
      { word: "mouse", meaning: "ماوس، موشواره", en: "Click on the icon with your mouse.", fa: "با ماوس روی آیکون کلیک کن.", icon: "🖱️", examples: [{ en: "Click on the icon with your mouse.", fa: "با ماوس روی آیکون کلیک کن." }, { en: "My mouse is next to the laptop.", fa: "ماوس من کنار لپ‌تاپ است." }, { en: "She bought a comfortable mouse for work.", fa: "او یک ماوس راحت برای کار خرید." }] },
      { word: "screen", meaning: "صفحه‌نمایش، مانیتور", en: "Do not sit too close to the screen.", fa: "خیلی نزدیک صفحه‌نمایش ننشین.", icon: "📺", examples: [{ en: "Do not sit too close to the screen.", fa: "خیلی نزدیک صفحه‌نمایش ننشین." }, { en: "The computer screen is bright and clear.", fa: "صفحه‌نمایش کامپیوتر روشن و واضح است." }, { en: "He looks at the screen for hours.", fa: "او ساعت‌ها به مانیتور نگاه می‌کند." }] },
      { word: "phone", meaning: "تلفن", en: "The office phone rang three times.", fa: "تلفن اداره سه بار زنگ خورد.", icon: "📱", examples: [{ en: "The office phone rang three times.", fa: "تلفن اداره سه بار زنگ خورد." }, { en: "Please answer the phone now.", fa: "لطفاً الان تلفن را جواب بده." }, { en: "He put his phone on the desk.", fa: "او تلفنش را روی میز گذاشت." }] },
      { word: "paper", meaning: "کاغذ", en: "Put a sheet of paper in the printer.", fa: "یک برگ کاغذ در پرینتر بگذار.", icon: "📄", examples: [{ en: "Put a sheet of paper in the printer.", fa: "یک برگ کاغذ در پرینتر بگذار." }, { en: "I wrote notes on a piece of paper.", fa: "من روی یک تکه کاغذ یادداشت نوشتم." }, { en: "We recycle used paper in our office.", fa: "ما در اداره‌مان کاغذ باطله را بازیافت می‌کنیم." }] },
      { word: "pen", meaning: "خودکار", en: "Can I borrow your blue pen?", fa: "می‌توانم خودکار آبی‌ات را قرض بگیرم؟", icon: "🖊️", examples: [{ en: "Can I borrow your blue pen?", fa: "می‌توانم خودکار آبی‌ات را قرض بگیرم؟" }, { en: "Sign the paper with a black pen.", fa: "کاغذ را با خودکار مشکی امضا کن." }, { en: "I always carry a pen in my pocket.", fa: "من همیشه یک خودکار در جیبم حمل می‌کنم." }] },
      { word: "pencil", meaning: "مداد", en: "Draw the diagram with a pencil.", fa: "نمودار را با مداد بکش.", icon: "✏️", examples: [{ en: "Draw the diagram with a pencil.", fa: "نمودار را با مداد بکش." }, { en: "Sharpen your pencil before writing.", fa: "قبل از نوشتن مدادت را بتراش." }, { en: "There is a pencil on the table.", fa: "روی میز یک مداد هست." }] },
      { word: "file", meaning: "پرونده، فایل", en: "Save the file before closing the app.", fa: "قبل از بستن برنامه، فایل را ذخیره کن.", icon: "📁", examples: [{ en: "Save the file before closing the app.", fa: "قبل از بستن برنامه، فایل را ذخیره کن." }, { en: "She opened the client file.", fa: "او پرونده مشتری را باز کرد." }, { en: "Send me that project file by email.", fa: "آن فایل پروژه را با ایمیل برایم بفرست." }] },
      { word: "folder", meaning: "پوشه", en: "Keep all documents in this green folder.", fa: "تمام مدارک را در این پوشه سبز نگه دار.", icon: "📂", examples: [{ en: "Keep all documents in this green folder.", fa: "تمام مدارک را در این پوشه سبز نگه دار." }, { en: "Create a new folder on your computer.", fa: "یک پوشه جدید روی کامپیوترت بساز." }, { en: "The folder is on the top shelf.", fa: "پوشه در طبقه بالایی است." }] },
      { word: "chair", meaning: "صندلی", en: "This office chair is very comfortable.", fa: "این صندلی اداری بسیار راحت است.", icon: "🪑", examples: [{ en: "This office chair is very comfortable.", fa: "این صندلی اداری بسیار راحت است." }, { en: "Pull up a chair and sit down.", fa: "یک صندلی بکش و بنشین." }, { en: "We bought new chairs for the meeting room.", fa: "ما برای اتاق جلسه صندلی‌های جدید خریدیم." }] },
      { word: "table", meaning: "میز", en: "We sat around the large meeting table.", fa: "ما دور میز بزرگ جلسه نشستیم.", icon: "🪵", examples: [{ en: "We sat around the large meeting table.", fa: "ما دور میز بزرگ جلسه نشستیم." }, { en: "Leave the report on my table.", fa: "گزارش را روی میز من بگذار." }, { en: "The table is made of solid wood.", fa: "میز از چوب محکم ساخته شده است." }] },
      { word: "stamp", meaning: "مُهر، تمبر", en: "The manager put a stamp on the document.", fa: "مدیر روی مدرک یک مُهر زد.", icon: "📮", examples: [{ en: "The manager put a stamp on the document.", fa: "مدیر روی مدرک یک مُهر زد." }, { en: "Every official letter needs a stamp.", fa: "هر نامه رسمی به یک مُهر نیاز دارد." }, { en: "Where is the company stamp?", fa: "مُهر شرکت کجاست؟" }] },
      { word: "notebook", meaning: "دفترچه یادداشت", en: "I write my daily tasks in a notebook.", fa: "من کارهای روزمره‌ام را در یک دفترچه می‌نویسم.", icon: "📓", examples: [{ en: "I write my daily tasks in a notebook.", fa: "من کارهای روزمره‌ام را در یک دفترچه می‌نویسم." }, { en: "Bring your notebook to the meeting.", fa: "دفترچه‌ات را به جلسه بیاور." }, { en: "She opened her notebook to take notes.", fa: "او دفترچه‌اش را برای یادداشت‌برداری باز کرد." }] },
      { word: "card", meaning: "کارت، کارت ویزیت", en: "Here is my business card with my email.", fa: "این کارت ویزیت من همراه با ایمیلم است.", icon: "💳", examples: [{ en: "Here is my business card with my email.", fa: "این کارت ویزیت من همراه با ایمیلم است." }, { en: "He gave me his contact card.", fa: "او کارت تماسش را به من داد." }, { en: "Keep your ID card with you at work.", fa: "کارت شناسایی‌ات را در محل کار همراهت داشته باش." }] },
      { word: "badge", meaning: "نشان، کارت شناسایی", en: "Wear your badge at the office entrance.", fa: "کارت شناسایی‌ات را در ورودی اداره نشان بده.", icon: "🏷️", examples: [{ en: "Wear your badge at the office entrance.", fa: "کارت شناسایی‌ات را در ورودی اداره نشان بده." }, { en: "Employees scan their badge to enter.", fa: "کارمندان برای ورود کارت‌شان را اسکن می‌کنند." }, { en: "I lost my security badge yesterday.", fa: "من دیروز کارت امنیتی‌ام را گم کردم." }] },
      { word: "calendar", meaning: "تقویم", en: "Check the office calendar for holidays.", fa: "تقویم اداره را برای روزهای تعطیل بررسی کن.", icon: "📅", examples: [{ en: "Check the office calendar for holidays.", fa: "تقویم اداره را برای روزهای تعطیل بررسی کن." }, { en: "I marked our meeting on the calendar.", fa: "من جلسه‌مان را در تقویم علامت زدم." }, { en: "She has a small calendar on her desk.", fa: "او یک تقویم کوچک روی میزش دارد." }] },
      { word: "clock", meaning: "ساعت دیواری", en: "The clock on the wall shows five o’clock.", fa: "ساعت روی دیوار ساعت پنج را نشان می‌دهد.", icon: "⏰", examples: [{ en: "The clock on the wall shows five o’clock.", fa: "ساعت روی دیوار ساعت پنج را نشان می‌دهد." }, { en: "Look at the clock before leaving.", fa: "قبل از رفتن به ساعت نگاه کن." }, { en: "Our office clock is always on time.", fa: "ساعت اداره ما همیشه دقیق است." }] },
      { word: "start", meaning: "شروع کردن، آغاز کار", en: "We start work at eight in the morning.", fa: "ما ساعت هشت صبح کار را شروع می‌کنیم.", icon: "▶️", examples: [{ en: "We start work at eight in the morning.", fa: "ما ساعت هشت صبح کار را شروع می‌کنیم." }, { en: "Start the project as soon as possible.", fa: "پروژه را هرچه زودتر شروع کن." }, { en: "The meeting will start in five minutes.", fa: "جلسه پنج دقیقه دیگر شروع خواهد شد." }] },
      { word: "finish", meaning: "تمام کردن، پایان یافتن", en: "I finish my work at five in the afternoon.", fa: "من کارم را ساعت پنج بعدازظهر تمام می‌کنم.", icon: "🏁", examples: [{ en: "I finish my work at five in the afternoon.", fa: "من کارم را ساعت پنج بعدازظهر تمام می‌کنم." }, { en: "Can you finish this report today?", fa: "می‌توانی این گزارش را امروز تمام کنی؟" }, { en: "We finished all our tasks on time.", fa: "ما تمام کارهایمان را به موقع تمام کردیم." }] },
      { word: "send", meaning: "فرستادن، ارسال کردن", en: "Please send the file to the manager.", fa: "لطفاً فایل را برای مدیر بفرست.", icon: "📤", examples: [{ en: "Please send the file to the manager.", fa: "لطفاً فایل را برای مدیر بفرست." }, { en: "I will send an email right now.", fa: "من همین الان یک ایمیل خواهم فرستاد." }, { en: "Did you send the package yesterday?", fa: "آیا بسته را دیروز فرستادی؟" }] },
      { word: "write", meaning: "نوشتن", en: "I write a daily report for my boss.", fa: "من برای رئیسم یک گزارش روزانه می‌نویسم.", icon: "✍️", examples: [{ en: "I write a daily report for my boss.", fa: "من برای رئیسم یک گزارش روزانه می‌نویسم." }, { en: "Write your name on this sheet.", fa: "نام خودت را روی این برگه بنویس." }, { en: "She writes clear emails to customers.", fa: "او ایمیل‌های واضحی برای مشتریان می‌نویسد." }] },
      { word: "read", meaning: "خواندن، بررسی متن", en: "Please read this contract carefully.", fa: "لطفاً این قرارداد را با دقت بخوان.", icon: "📖", examples: [{ en: "Please read this contract carefully.", fa: "لطفاً این قرارداد را با دقت بخوان." }, { en: "I read all incoming messages every day.", fa: "من هر روز تمام پیام‌های دریافتی را می‌خوانم." }, { en: "He reads the instructions before starting.", fa: "او قبل از شروع، دستورالعمل‌ها را می‌خواند." }] },
      { word: "sign", meaning: "امضا کردن", en: "Please sign your name at the bottom.", fa: "لطفاً نام خود را در پایین برگه امضا کنید.", icon: "🖋️", examples: [{ en: "Please sign your name at the bottom.", fa: "لطفاً نام خود را در پایین برگه امضا کنید." }, { en: "Both partners must sign the agreement.", fa: "هر دو طرف باید توافق‌نامه را امضا کنند." }, { en: "Did you sign the letter?", fa: "آیا نامه را امضا کردی؟" }] },
      { word: "help", meaning: "کمک کردن، یاری رساندن", en: "Colleagues always help each other.", fa: "همکاران همیشه به یکدیگر کمک می‌کنند.", icon: "🙋", examples: [{ en: "Colleagues always help each other.", fa: "همکاران همیشه به یکدیگر کمک می‌کنند." }, { en: "Can you help me with this program?", fa: "می‌توانی در این برنامه به من کمک کنی؟" }, { en: "Thank you for your kind help.", fa: "از کمک مهربانانه‌ات متشکرم." }] },
      { word: "type", meaning: "تایپ کردن", en: "She can type forty words in one minute.", fa: "او می‌تواند در یک دقیقه چهل کلمه تایپ کند.", icon: "⌨️", examples: [{ en: "She can type forty words in one minute.", fa: "او می‌تواند در یک دقیقه چهل کلمه تایپ کند." }, { en: "Type your password to enter.", fa: "رمز عبور خودت را برای ورود تایپ کن." }, { en: "I typed the meeting notes yesterday.", fa: "من دیروز یادداشت‌های جلسه را تایپ کردم." }] },
      { word: "print", meaning: "چاپ کردن، پرینت گرفتن", en: "Please print two copies of this form.", fa: "لطفاً دو نسخه از این فرم پرینت بگیر.", icon: "🖨️", examples: [{ en: "Please print two copies of this form.", fa: "لطفاً دو نسخه از این فرم پرینت بگیر." }, { en: "I will print the tickets for you.", fa: "من بلیت‌ها را برایت چاپ خواهم کرد." }, { en: "She printed the document in color.", fa: "او سند را رنگی چاپ کرد." }] },
      { word: "copy", meaning: "کپی کردن، نسخه برداشتن", en: "Make a copy of this important page.", fa: "یک کپی از این صفحه مهم بگیر.", icon: "📑", examples: [{ en: "Make a copy of this important page.", fa: "یک کپی از این صفحه مهم بگیر." }, { en: "Copy the text and paste it here.", fa: "متن را کپی کن و اینجا بچسبان." }, { en: "Keep a copy for your records.", fa: "یک نسخه برای سوابق خودت نگه دار." }] },
      { word: "task", meaning: "وظیفه، کار محوله", en: "I have one important task for today.", fa: "من برای امروز یک وظیفه مهم دارم.", icon: "✅", examples: [{ en: "I have one important task for today.", fa: "من برای امروز یک وظیفه مهم دارم." }, { en: "Finish this task before lunch.", fa: "این کار را قبل از ناهار تمام کن." }, { en: "She completes every task carefully.", fa: "او هر کاری را با دقت کامل می‌کند." }] },
      { word: "project", meaning: "پروژه", en: "We are working on an exciting new project.", fa: "ما داریم روی یک پروژه جدید و هیجان‌انگیز کار می‌کنیم.", icon: "📊", examples: [{ en: "We are working on an exciting new project.", fa: "ما داریم روی یک پروژه جدید و هیجان‌انگیز کار می‌کنیم." }, { en: "The project will end next month.", fa: "پروژه ماه آینده به پایان خواهد رسید." }, { en: "He leads the design project.", fa: "او رهبری پروژه طراحی را بر عهده دارد." }] },
      { word: "plan", meaning: "برنامه، نقشه کار", en: "We made a simple plan for this week.", fa: "ما برای این هفته یک برنامه ساده درست کردیم.", icon: "🗺️", examples: [{ en: "We made a simple plan for this week.", fa: "ما برای این هفته یک برنامه ساده درست کردیم." }, { en: "Follow the plan step by step.", fa: "برنامه را مرحله‌به‌مرحله دنبال کن." }, { en: "Do you have a plan for tomorrow?", fa: "آیا برای فردا برنامه‌ای داری؟" }] },
      { word: "break", meaning: "استراحت، زنگ تفریح", en: "Let us take a short coffee break.", fa: "بیا یک استراحت کوتاه برای قهوه داشته باشیم.", icon: "☕", examples: [{ en: "Let us take a short coffee break.", fa: "بیا یک استراحت کوتاه برای قهوه داشته باشیم." }, { en: "She went for a walk during her break.", fa: "او در طول زمان استراحتش به پیاده‌روی رفت." }, { en: "Our lunch break is thirty minutes.", fa: "زمان استراحت ناهار ما سی دقیقه است." }] },
      { word: "lunch", meaning: "ناهار کاری", en: "We have lunch together at noon.", fa: "ما ظهر با هم ناهار می‌خوریم.", icon: "🥪", examples: [{ en: "We have lunch together at noon.", fa: "ما ظهر با هم ناهار می‌خوریم." }, { en: "I brought a sandwich for lunch.", fa: "من برای ناهار یک ساندویچ آوردم." }, { en: "The team went out for lunch today.", fa: "تیم امروز برای ناهار بیرون رفت." }] },
      { word: "hour", meaning: "ساعت کاری، زمان", en: "We work eight hours every day.", fa: "ما هر روز هشت ساعت کار می‌کنیم.", icon: "⏱️", examples: [{ en: "We work eight hours every day.", fa: "ما هر روز هشت ساعت کار می‌کنیم." }, { en: "The meeting lasted one hour.", fa: "جلسه یک ساعت طول کشید." }, { en: "What are your working hours?", fa: "ساعات کاری شما چیست؟" }] },
      { word: "rule", meaning: "قانون، مقررات کاری", en: "Follow the office safety rules.", fa: "قوانین ایمنی اداره را رعایت کن.", icon: "📜", examples: [{ en: "Follow the office safety rules.", fa: "قوانین ایمنی اداره را رعایت کن." }, { en: "This is an important company rule.", fa: "این یک قانون مهم شرکت است." }, { en: "No smoking is a strict rule here.", fa: "سیگار نکشیدن در اینجا یک قانون سفت‌وسخت است." }] },
      { word: "busy", meaning: "مشغول، پرکار", en: "I am very busy with work today.", fa: "من امروز خیلی درگیر کار هستم.", icon: "🏃", examples: [{ en: "I am very busy with work today.", fa: "من امروز خیلی درگیر کار هستم." }, { en: "Monday is always a busy day for us.", fa: "دوشنبه همیشه برای ما یک روز پرمشغله است." }, { en: "The manager is busy right now.", fa: "مدیر همین الان سرش شلوغ است." }] },
      { word: "late", meaning: "دیر، با تأخیر", en: "Do not be late for your morning shift.", fa: "برای شیفت صبح‌ات دیر نکن.", icon: "⌛", examples: [{ en: "Do not be late for your morning shift.", fa: "برای شیفت صبح‌ات دیر نکن." }, { en: "He arrived ten minutes late today.", fa: "او امروز ده دقیقه دیر رسید." }, { en: "She worked late at the office last night.", fa: "او دیشب تا دیروقت در اداره کار کرد." }] },
      { word: "early", meaning: "زود، سر وقت", en: "She arrives early at work every day.", fa: "او هر روز زود به سر کار می‌رسد.", icon: "🌅", examples: [{ en: "She arrives early at work every day.", fa: "او هر روز زود به سر کار می‌رسد." }, { en: "I like to start my tasks early.", fa: "من دوست دارم کارهایم را زود شروع کنم." }, { en: "He left the office early on Friday.", fa: "او جمعه زود اداره را ترک کرد." }] },
      {"word":"manager","meaning":"مدیر، سرپرست","en":"Our manager explained the new plan clearly.","fa":"مدیر ما برنامه جدید را به‌روشنی توضیح داد.","icon":"👔","examples":[{"en":"Our manager explained the new plan clearly.","fa":"مدیر ما برنامه جدید را به‌روشنی توضیح داد."},{"en":"She wants to speak with the office manager.","fa":"او می‌خواهد با مدیر اداره صحبت کند."},{"en":"The manager was pleased with our good results.","fa":"مدیر از نتایج خوب ما خرسند بود."}]},
      {"word":"company","meaning":"شرکت، کمپانی","en":"He works for an international technology company.","fa":"او برای یک شرکت بین‌المللی فناوری کار می‌کند.","icon":"🏢","examples":[{"en":"He works for an international technology company.","fa":"او برای یک شرکت بین‌المللی فناوری کار می‌کند."},{"en":"The company hired ten new workers this month.","fa":"شرکت این ماه ده کارمند جدید استخدام کرد."},{"en":"Our company office is in the city center.","fa":"دفتر شرکت ما در مرکز شهر است."}]},
      {"word":"salary","meaning":"حقوق، دستمزد ماهیانه","en":"Employees receive their monthly salary on time.","fa":"کارمندان حقوق ماهانه خود را به‌موقع دریافت می‌کنند.","icon":"💰","examples":[{"en":"Employees receive their monthly salary on time.","fa":"کارمندان حقوق ماهانه خود را به‌موقع دریافت می‌کنند."},{"en":"He asked his boss for a higher salary.","fa":"او از رئیسش درخواست حقوق بیشتری کرد."},{"en":"Her starting salary is quite reasonable.","fa":"حقوق شروع کار او کاملاً مناسب است."}]},
      {"word":"contract","meaning":"قرارداد کاری","en":"Please read the work contract before signing it.","fa":"لطفاً قبل از امضا کردن، قرارداد کاری را بخوانید.","icon":"📄","examples":[{"en":"Please read the work contract before signing it.","fa":"لطفاً قبل از امضا کردن، قرارداد کاری را بخوانید."},{"en":"She signed a one-year contract with the firm.","fa":"او یک قرارداد یک‌ساله با شرکت امضا کرد."},{"en":"The new contract includes health benefits.","fa":"قرارداد جدید شامل مزایای درمانی می‌شود."}]},
      {"word":"message","meaning":"پیام، پیغام کاری","en":"I left an urgent message on his desk.","fa":"من یک پیام فوری روی میزش گذاشتم.","icon":"💬","examples":[{"en":"I left an urgent message on his desk.","fa":"من یک پیام فوری روی میزش گذاشتم."},{"en":"Did you get my text message about the meeting?","fa":"آیا پیامک من درباره جلسه را دریافت کردی؟"},{"en":"Send a quick message to the team leader.","fa":"یک پیام کوتاه به سرپرست تیم بفرست."}]},
      {"word":"report","meaning":"گزارش کاری","en":"She wrote a detailed report about the sales.","fa":"او گزارش مفصلی درباره فروش نوشت.","icon":"📊","examples":[{"en":"She wrote a detailed report about the sales.","fa":"او گزارش مفصلی درباره فروش نوشت."},{"en":"Please send the weekly report by Friday.","fa":"لطفاً گزارش هفتگی را تا روز جمعه ارسال کن."},{"en":"I am reading the financial report right now.","fa":"من همین الان دارم گزارش مالی را می‌خوانم."}]},
      {"word":"presentation","meaning":"ارائه، پرزنتیشن","en":"He gave an interesting presentation to the team.","fa":"او یک ارائه جالب برای تیم انجام داد.","icon":"📽️","examples":[{"en":"He gave an interesting presentation to the team.","fa":"او یک ارائه جالب برای تیم انجام داد."},{"en":"I need to prepare slides for my presentation.","fa":"من باید برای ارائه‌ام اسلاید آماده کنم."},{"en":"Her presentation answered all our questions.","fa":"ارائه او به تمام پرسش‌های ما پاسخ داد."}]},
      {"word":"question","meaning":"پرسش، سوال","en":"Do you have any questions about the task?","fa":"آیا درباره این کار سوالی داری؟","icon":"❓","examples":[{"en":"Do you have any questions about the task?","fa":"آیا درباره این کار سوالی داری؟"},{"en":"Feel free to ask a question at any time.","fa":"در هر زمان راحتی سوال بپرس."},{"en":"He raised his hand to ask an important question.","fa":"او دستش را بلند کرد تا یک سوال مهم بپرسد."}]},
      {"word":"answer","meaning":"پاسخ دادن، پاسخ","en":"She answered all the client emails promptly.","fa":"او به تمام ایمیل‌های مشتری سریع پاسخ داد.","icon":"💡","examples":[{"en":"She answered all the client emails promptly.","fa":"او به تمام ایمیل‌های مشتری سریع پاسخ داد."},{"en":"Can you answer the office phone, please?","fa":"می‌شود لطفاً تلفن اداره را جواب بدهید؟"},{"en":"His clear answer solved our confusion.","fa":"پاسخ روشن او سردرگمی ما را برطرف کرد."}]},
      {"word":"deadline","meaning":"مهلت، موعد تحویل","en":"The project deadline is tomorrow afternoon.","fa":"مهلت تحویل پروژه فردا بعدازظهر است.","icon":"⏰","examples":[{"en":"The project deadline is tomorrow afternoon.","fa":"مهلت تحویل پروژه فردا بعدازظهر است."},{"en":"We must work together to meet the deadline.","fa":"ما باید با هم همکاری کنیم تا به موعد تحویل برسیم."},{"en":"He was worried about missing the tight deadline.","fa":"او نگران از دست دادن مهلت فشرده تحویل بود."}]},
      {"word":"interview","meaning":"مصاحبه کاری","en":"She has a job interview at ten in the morning.","fa":"او ساعت ده صبح یک مصاحبه کاری دارد.","icon":"🤝","examples":[{"en":"She has a job interview at ten in the morning.","fa":"او ساعت ده صبح یک مصاحبه کاری دارد."},{"en":"Dress professionally for the job interview.","fa":"برای مصاحبه کاری رسمی و حرفه‌ای لباس بپوش."},{"en":"The interview went very smoothly today.","fa":"مصاحبه امروز بسیار روان پیش رفت."}]},
      {"word":"resume","meaning":"رزومه کاری، شرح سوابق","en":"Send your updated resume to the human resources office.","fa":"رزومه به‌روزشده‌ات را به بخش منابع انسانی ارسال کن.","icon":"📑","examples":[{"en":"Send your updated resume to the human resources office.","fa":"رزومه به‌روزشده‌ات را به بخش منابع انسانی ارسال کن."},{"en":"Her resume highlights five years of office experience.","fa":"رزومه او پنج سال تجربه کار اداری را برجسته می‌کند."},{"en":"Check your resume for spelling mistakes.","fa":"رزومه‌ات را برای خطاهای املایی بازبینی کن."}]},
      {"word":"career","meaning":"شغل، مسیر حرفه‌ای","en":"He started his career as an office clerk.","fa":"او مسیر حرفه‌ای خود را به عنوان کارمند اداری آغاز کرد.","icon":"📈","examples":[{"en":"He started his career as an office clerk.","fa":"او مسیر حرفه‌ای خود را به عنوان کارمند اداری آغاز کرد."},{"en":"She wants to build a successful career in finance.","fa":"او می‌خواهد در حوزه مالی یک پیشه موفق بسازد."},{"en":"Learning new skills helps your career grow.","fa":"یادگیری مهارت‌های جدید به رشد شغلی شما کمک می‌کند."}]},
      {"word":"department","meaning":"بخش، دپارتمان اداری","en":"Which department do you work in?","fa":"شما در کدام بخش کار می‌کنید؟","icon":"🚪","examples":[{"en":"Which department do you work in?","fa":"شما در کدام بخش کار می‌کنید؟"},{"en":"The marketing department is on the third floor.","fa":"بخش بازاریابی در طبقه سوم قرار دارد."},{"en":"Our department has twenty hardworking staff members.","fa":"دپارتمان ما بیست کارمند کوشا دارد."}]},
      {"word":"leave","meaning":"مرخصی کاری","en":"She took three days of sick leave.","fa":"او سه روز مرخصی استعلاجی گرفت.","icon":"🏖️","examples":[{"en":"She took three days of sick leave.","fa":"او سه روز مرخصی استعلاجی گرفت."},{"en":"You need manager approval for annual leave.","fa":"شما برای مرخصی سالانه به تایید مدیر نیاز دارید."},{"en":"He will be on parental leave next month.","fa":"او ماه آینده در مرخصی والدین خواهد بود."}]},
      {"word":"holiday","meaning":"تعطیلی، روز تعطیل","en":"The office is closed on public holidays.","fa":"اداره در تعطیلات رسمی بسته است.","icon":"🎉","examples":[{"en":"The office is closed on public holidays.","fa":"اداره در تعطیلات رسمی بسته است."},{"en":"We have two weeks of paid holiday each year.","fa":"ما هر سال دو هفته تعطیلات با حقوق داریم."},{"en":"Everyone looks forward to the national holiday.","fa":"همه مشتاقانه منتظر تعطیلی ملی هستند."}]},
      {"word":"shift","meaning":"شیفت، نوبت کاری","en":"He works the night shift at the factory.","fa":"او در کارخانه شیفت شب کار می‌کند.","icon":"🔄","examples":[{"en":"He works the night shift at the factory.","fa":"او در کارخانه شیفت شب کار می‌کند."},{"en":"My morning shift starts at eight sharp.","fa":"شیفت صبح من راس ساعت هشت شروع می‌شود."},{"en":"Can you swap your weekend shift with me?","fa":"می‌توانی شیفت آخر هفته‌ات را با من جابه‌جا کنی؟"}]},
      {"word":"bonus","meaning":"پاداش، انعام شغلی","en":"The company gave every worker an annual bonus.","fa":"شرکت به هر کارگر یک پاداش سالانه داد.","icon":"🎁","examples":[{"en":"The company gave every worker an annual bonus.","fa":"شرکت به هر کارگر یک پاداش سالانه داد."},{"en":"He received a performance bonus for high sales.","fa":"او برای فروش بالا پاداش عملکرد دریافت کرد."},{"en":"A holiday bonus is paid in December.","fa":"پاداش تعطیلات در ماه دسامبر پرداخت می‌شود."}]},
      {"word":"tax","meaning":"مالیات","en":"Income tax is deducted from your monthly pay.","fa":"مالیات بر درآمد از حقوق ماهیانه شما کسر می‌شود.","icon":"🧾","examples":[{"en":"Income tax is deducted from your monthly pay.","fa":"مالیات بر درآمد از حقوق ماهیانه شما کسر می‌شود."},{"en":"He files his business tax return every spring.","fa":"او هر بهار اظهارنامه مالیاتی کسب‌وکارش را ثبت می‌کند."},{"en":"Make sure you understand local tax rules.","fa":"مطمئن شوید که قوانین مالیاتی محلی را درک می‌کنید."}]},
      {"word":"pay","meaning":"پرداخت کردن، حقوق و دستمزد","en":"They pay their employees every other Friday.","fa":"آن‌ها حقوق کارمندانشان را هر دو جمعه یک‌بار پرداخت می‌کنند.","icon":"💳","examples":[{"en":"They pay their employees every other Friday.","fa":"آن‌ها حقوق کارمندانشان را هر دو جمعه یک‌بار پرداخت می‌کنند."},{"en":"Equal pay for equal work is a fair rule.","fa":"حقوق برابر برای کار برابر یک قانون عادلانه است."},{"en":"Did the accounting team pay the invoice?","fa":"آیا تیم حسابداری فاکتور را پرداخت کرد؟"}]},
      {"word":"engineer","meaning":"مهندس","en":"The software engineer fixed the system bug.","fa":"مهندس نرم‌افزار نقص سیستم را برطرف کرد.","icon":"👷","examples":[{"en":"The software engineer fixed the system bug.","fa":"مهندس نرم‌افزار نقص سیستم را برطرف کرد."},{"en":"She studied hard to become a civil engineer.","fa":"او برای مهندس عمران شدن سخت درس خواند."},{"en":"Our company engineers design safe modern bridges.","fa":"مهندسان شرکت ما پل‌های امن و مدرن طراحی می‌کنند."}]},
      {"word":"lawyer","meaning":"وکیل","en":"The company hired a lawyer for the contract.","fa":"شرکت برای قرارداد یک وکیل استخدام کرد.","icon":"⚖️","examples":[{"en":"The company hired a lawyer for the contract.","fa":"شرکت برای قرارداد یک وکیل استخدام کرد."},{"en":"Our lawyer reviewed the agreement carefully.","fa":"وکیل ما موافقت‌نامه را با دقت بررسی کرد."},{"en":"You should consult a qualified lawyer first.","fa":"شما ابتدا باید با یک وکیل واجد شرایط مشورت کنید."}]},
      {"word":"accountant","meaning":"حسابدار","en":"The accountant checked all the office expenses.","fa":"حسابدار تمام هزینه‌های اداره را بررسی کرد.","icon":"🧮","examples":[{"en":"The accountant checked all the office expenses.","fa":"حسابدار تمام هزینه‌های اداره را بررسی کرد."},{"en":"She works as a senior accountant in a bank.","fa":"او به عنوان حسابدار ارشد در یک بانک کار می‌کند."},{"en":"Our accountant balances the company books monthly.","fa":"حسابدار ما دفاتر شرکت را به‌صورت ماهانه تراز می‌کند."}]},
      {"word":"police officer","meaning":"افسر پلیس","en":"A polite police officer helped with traffic outside.","fa":"یک افسر پلیس مودب بیرون به ترافیک کمک کرد.","icon":"👮","examples":[{"en":"A polite police officer helped with traffic outside.","fa":"یک افسر پلیس مودب بیرون به ترافیک کمک کرد."},{"en":"The police officer protects the neighborhood.","fa":"افسر پلیس از محله محافظت می‌کند."},{"en":"He wants to serve as a brave police officer.","fa":"او می‌خواهد به عنوان یک افسر پلیس شجاع خدمت کند."}]},
      {"word":"designer","meaning":"طراح","en":"The graphic designer created a modern logo.","fa":"طراح گرافیک یک لوگوی مدرن خلق کرد.","icon":"🎨","examples":[{"en":"The graphic designer created a modern logo.","fa":"طراح گرافیک یک لوگوی مدرن خلق کرد."},{"en":"Our web designer updated the homepage layout.","fa":"طراح وب ما چیدمان صفحه اصلی را به‌روزرسانی کرد."},{"en":"She works as an interior designer in the city.","fa":"او به عنوان طراح داخلی در شهر کار می‌کند."}]},
      {"word":"architect","meaning":"معمار","en":"The architect drew the blueprint for our new office.","fa":"معمار نقشه اولیه را برای دفتر کار جدید ما کشید.","icon":"📐","examples":[{"en":"The architect drew the blueprint for our new office.","fa":"معمار نقشه اولیه را برای دفتر کار جدید ما کشید."},{"en":"An experienced architect designed this green building.","fa":"یک معمار باتجربه این ساختمان سبز را طراحی کرد."},{"en":"She met with the architect to discuss the building plan.","fa":"او برای گفتگو درباره نقشه ساختمان با معمار ملاقات کرد."}]},
      {"word":"mechanic","meaning":"مکانیک، تعمیرکار","en":"The mechanic repaired our company delivery van.","fa":"مکانیک ون باربری شرکت ما را تعمیر کرد.","icon":"🔧","examples":[{"en":"The mechanic repaired our company delivery van.","fa":"مکانیک ون باربری شرکت ما را تعمیر کرد."},{"en":"He is a skilled mechanic with twenty years of practice.","fa":"او یک مکانیک ماهر با بیست سال سابقه است."},{"en":"Take the vehicle to a trusted mechanic.","fa":"خودرو را پیش یک مکانیک قابل اعتماد ببر."}]},
      {"word":"artist","meaning":"هنرمند","en":"The talented artist painted a mural in our lobby.","fa":"هنرمند بااستعداد یک نقاشی دیواری در لابی ما کشید.","icon":"🖌️","examples":[{"en":"The talented artist painted a mural in our lobby.","fa":"هنرمند بااستعداد یک نقاشی دیواری در لابی ما کشید."},{"en":"She sells her creative work as a full-time artist.","fa":"او کارهای خلاقانه‌اش را به عنوان یک هنرمند تمام‌وقت می‌فروشد."},{"en":"Many artists share their creations online.","fa":"بسیاری از هنرمندان آثارشان را آنلاین به اشتراک می‌گذارند."}]},
      {"word":"writer","meaning":"نویسنده","en":"The technical writer wrote an easy user manual.","fa":"نویسنده فنی یک راهنمای کاربری ساده نوشت.","icon":"✍️","examples":[{"en":"The technical writer wrote an easy user manual.","fa":"نویسنده فنی یک راهنمای کاربری ساده نوشت."},{"en":"She works from home as a freelance writer.","fa":"او به عنوان نویسنده آزادکار از خانه کار می‌کند."},{"en":"The company hired a content writer for the website.","fa":"شرکت یک نویسنده محتوا برای وب‌سایت استخدام کرد."}]},
      {"word":"photographer","meaning":"عکاس","en":"A professional photographer took our office headshots.","fa":"یک عکاس حرفه‌ای عکس‌های پرسنلی اداره ما را گرفت.","icon":"📷","examples":[{"en":"A professional photographer took our office headshots.","fa":"یک عکاس حرفه‌ای عکس‌های پرسنلی اداره ما را گرفت."},{"en":"The photographer captured every moment of the conference.","fa":"عکاس تمام لحظات همایش را ثبت کرد."},{"en":"He works as a commercial product photographer.","fa":"او به عنوان عکاس تبلیغاتی محصولات کار می‌کند."}]},
      {"word":"dentist","meaning":"دندان‌پزشک","en":"She visited the dentist for a routine checkup.","fa":"او برای معاینه روتین نزد دندان‌پزشک رفت.","icon":"🦷","examples":[{"en":"She visited the dentist for a routine checkup.","fa":"او برای معاینه روتین نزد دندان‌پزشک رفت."},{"en":"The company health plan covers visits to the dentist.","fa":"طرح درمانی شرکت هزینه‌های مراجعه به دندان‌پزشک را پوشش می‌دهد."},{"en":"Our dentist gave advice on good oral hygiene.","fa":"دندان‌پزشک ما توصیه‌هایی درباره بهداشت دهان و دندان داد."}]},
      {"word":"electrician","meaning":"برق‌کار","en":"The electrician fixed the lighting in the conference room.","fa":"برق‌کار روشنایی اتاق کنفرانس را تعمیر کرد.","icon":"💡","examples":[{"en":"The electrician fixed the lighting in the conference room.","fa":"برق‌کار روشنایی اتاق کنفرانس را تعمیر کرد."},{"en":"Always hire a certified electrician for wire repairs.","fa":"برای تعمیرات سیم‌کشی همیشه یک برق‌کار دارای مدرک استخدام کنید."},{"en":"The electrician checked all electrical outlets in the office.","fa":"برق‌کار تمام پریزهای برق اداره را بررسی کرد."}]},
      {"word":"password","meaning":"رمز عبور، گذرواژه","en":"Create a strong password for your work account.","fa":"یک رمز عبور قوی برای حساب کاری خود بسازید.","icon":"🔒","examples":[{"en":"Create a strong password for your work account.","fa":"یک رمز عبور قوی برای حساب کاری خود بسازید."},{"en":"Never share your computer password with anyone.","fa":"هرگز رمز عبور کامپیوترت را با کسی به اشتراک نگذار."},{"en":"I changed my email password this morning.","fa":"من امروز صبح رمز عبور ایمیلم را تغییر دادم."}]},
      {"word":"internet","meaning":"اینترنت","en":"The office internet connection is very fast.","fa":"اتصال اینترنت اداره بسیار پرسرعت است.","icon":"🌐","examples":[{"en":"The office internet connection is very fast.","fa":"اتصال اینترنت اداره بسیار پرسرعت است."},{"en":"We use the internet to research market trends.","fa":"ما برای پژوهش درباره روندهای بازار از اینترنت استفاده می‌کنیم."},{"en":"Is the internet working on your desktop?","fa":"آیا اینترنت روی کامپیوتر رومیزی شما کار می‌کند؟"}]},
      {"word":"website","meaning":"وب‌سایت، تارنما","en":"Our company website shows all available services.","fa":"وب‌سایت شرکت ما تمام خدمات در دسترس را نشان می‌دهد.","icon":"🖥️","examples":[{"en":"Our company website shows all available services.","fa":"وب‌سایت شرکت ما تمام خدمات در دسترس را نشان می‌دهد."},{"en":"Customers can order directly from the website.","fa":"مشتریان می‌توانند مستقیماً از وب‌سایت سفارش دهند."},{"en":"We launched a brand new website this week.","fa":"ما این هفته یک وب‌سایت کاملاً جدید راه‌اندازی کردیم."}]},
      {"word":"link","meaning":"پیوند، لینک اینترنتی","en":"Click on the link to join the video call.","fa":"برای پیوستن به تماس ویدیویی روی لینک کلیک کنید.","icon":"🔗","examples":[{"en":"Click on the link to join the video call.","fa":"برای پیوستن به تماس ویدیویی روی لینک کلیک کنید."},{"en":"She sent a web link with more details.","fa":"او یک لینک وب با جزئیات بیشتر فرستاد."},{"en":"The meeting link opens in your browser.","fa":"لینک جلسه در مرورگر شما باز می‌شود."}]},
      {"word":"click","meaning":"کلیک کردن","en":"Double click the icon to open the program.","fa":"روی آیکون دوبار کلیک کن تا برنامه باز شود.","icon":"🖱️","examples":[{"en":"Double click the icon to open the program.","fa":"روی آیکون دوبار کلیک کن تا برنامه باز شود."},{"en":"Click the blue button to submit your form.","fa":"برای ارسال فرم، روی دکمه آبی کلیک کنید."},{"en":"He clicked on the link in the email.","fa":"او روی پیوند داخل ایمیل کلیک کرد."}]},
      {"word":"save","meaning":"ذخیره کردن","en":"Remember to save your work frequently.","fa":"به یاد داشته باش که کارت را مرتباً ذخیره کنی.","icon":"💾","examples":[{"en":"Remember to save your work frequently.","fa":"به یاد داشته باش که کارت را مرتباً ذخیره کنی."},{"en":"Save the document before closing the window.","fa":"قبل از بستن پنجره، سند را ذخیره کن."},{"en":"I saved a backup copy on my flash drive.","fa":"من یک نسخه پشتیبان روی فلش مموری ذخیره کردم."}]},
      {"word":"delete","meaning":"حذف کردن، پاک کردن","en":"Do not delete important office files by mistake.","fa":"فایل‌های مهم اداره را به اشتباه پاک نکنید.","icon":"🗑️","examples":[{"en":"Do not delete important office files by mistake.","fa":"فایل‌های مهم اداره را به اشتباه پاک نکنید."},{"en":"She deleted old emails to clear inbox space.","fa":"او ایمیل‌های قدیمی را پاک کرد تا فضای اینباکس آزاد شود."},{"en":"Select the unwanted file and click delete.","fa":"فایل غیرضروری را انتخاب کن و روی حذف کلیک کن."}]},
      {"word":"download","meaning":"دانلود کردن، بارگیری","en":"You can download the PDF file from the portal.","fa":"می‌توانید فایل پی‌دی‌اف را از پورتال دانلود کنید.","icon":"📥","examples":[{"en":"You can download the PDF file from the portal.","fa":"می‌توانید فایل پی‌دی‌اف را از پورتال دانلود کنید."},{"en":"He downloaded the presentation onto his laptop.","fa":"او ارائه را روی لپ‌تاپ خود دانلود کرد."},{"en":"The download finished in just a few seconds.","fa":"دانلود تنها در چند ثانیه تمام شد."}]},
      {"word":"upload","meaning":"آپلود کردن، بارگذاری","en":"Please upload your resume in PDF format.","fa":"لطفاً رزومه خود را با فرمت پی‌دی‌اف آپلود کنید.","icon":"📤","examples":[{"en":"Please upload your resume in PDF format.","fa":"لطفاً رزومه خود را با فرمت پی‌دی‌اف آپلود کنید."},{"en":"She uploaded the signed agreement to the cloud.","fa":"او توافق‌نامه امضا شده را روی فضای ابری آپلود کرد."},{"en":"The worker uploaded photos of the completed project.","fa":"کارمند عکس‌های پروژه تکمیل‌شده را بارگذاری کرد."}]},
      {"word":"online","meaning":"آنلاین، برخط","en":"We hold our weekly team meetings online.","fa":"ما جلسات هفتگی تیم را آنلاین برگزار می‌کنیم.","icon":"🟢","examples":[{"en":"We hold our weekly team meetings online.","fa":"ما جلسات هفتگی تیم را آنلاین برگزار می‌کنیم."},{"en":"The customer service agent is online now.","fa":"کارشناس خدمات مشتری اکنون آنلاین است."},{"en":"She completed an online training course.","fa":"او یک دوره آموزشی آنلاین را به پایان رساند."}]},
      {"word":"offline","meaning":"آفلاین، غیربرخط","en":"You can work offline and sync your files later.","fa":"می‌توانید آفلاین کار کنید و فایل‌هایتان را بعداً همگام‌سازی کنید.","icon":"⚪","examples":[{"en":"You can work offline and sync your files later.","fa":"می‌توانید آفلاین کار کنید و فایل‌هایتان را بعداً همگام‌سازی کنید."},{"en":"The printer is currently offline.","fa":"چاپگر در حال حاضر آفلاین است."},{"en":"He prefers reading printed documents offline.","fa":"او ترجیح می‌دهد اسناد چاپی را به صورت آفلاین بخواند."}]},
      {"word":"skill","meaning":"مهارت، تخصص","en":"Communication is an essential skill at work.","fa":"ارتباطات یک مهارت ضروری در محیط کار است.","icon":"⭐","examples":[{"en":"Communication is an essential skill at work.","fa":"ارتباطات یک مهارت ضروری در محیط کار است."},{"en":"She has excellent computer skills.","fa":"او مهارت‌های کامپیوتری فوق‌العاده‌ای دارد."},{"en":"The new workshop teaches practical negotiation skills.","fa":"کارگاه جدید مهارت‌های عملی مذاکره را آموزش می‌دهد."}]},
      {"word":"experience","meaning":"تجربه، سابقه کاری","en":"He has five years of relevant sales experience.","fa":"او پنج سال تجربه کاری مرتبط در زمینه فروش دارد.","icon":"🎖️","examples":[{"en":"He has five years of relevant sales experience.","fa":"او پنج سال تجربه کاری مرتبط در زمینه فروش دارد."},{"en":"Prior work experience is helpful for this position.","fa":"سابقه کار قبلی برای این موقعیت شغلی مفید است."},{"en":"She gained valuable experience during her internship.","fa":"او در طول دوره کارآموزی‌اش تجربه ارزشمندی به دست آورد."}]},
      {"word":"training","meaning":"آموزش، دوره آموزشی","en":"New employees attend a two-day training session.","fa":"کارمندان جدید در یک جلسه آموزشی دوروزه شرکت می‌کنند.","icon":"🎓","examples":[{"en":"New employees attend a two-day training session.","fa":"کارمندان جدید در یک جلسه آموزشی دوروزه شرکت می‌کنند."},{"en":"The company provides free software training.","fa":"شرکت آموزش رایگان نرم‌افزار ارائه می‌دهد."},{"en":"Safety training is mandatory for all workers.","fa":"آموزش ایمنی برای همه کارگران اجباری است."}]},
      {"word":"goal","meaning":"هدف کاری","en":"Our team reached its quarterly sales goal.","fa":"تیم ما به هدف فروش سه‌ماهه خود دست یافت.","icon":"🎯","examples":[{"en":"Our team reached its quarterly sales goal.","fa":"تیم ما به هدف فروش سه‌ماهه خود دست یافت."},{"en":"Set clear and realistic goals for the project.","fa":"برای پروژه اهداف روشن و واقع‌بینانه تعیین کنید."},{"en":"Her main career goal is to become a director.","fa":"هدف اصلی شغلی او مدیرکل شدن است."}]},
      {"word":"idea","meaning":"ایده، نظر خلاقانه","en":"She shared a great idea during the brainstorm.","fa":"او در طول طوفان فکری یک ایده عالی مطرح کرد.","icon":"💡","examples":[{"en":"She shared a great idea during the brainstorm.","fa":"او در طول طوفان فکری یک ایده عالی مطرح کرد."},{"en":"We welcome innovative ideas from every staff member.","fa":"ما از ایده‌های نوآورانه هر عضو تیم استقبال می‌کنیم."},{"en":"That is a brilliant idea to cut office costs.","fa":"این یک ایده درخشان برای کاهش هزینه‌های اداری است."}]},
      {"word":"problem","meaning":"مشکل، مسئله کاری","en":"We resolved the technical problem quickly.","fa":"ما مشکل فنی را به‌سرعت برطرف کردیم.","icon":"⚠️","examples":[{"en":"We resolved the technical problem quickly.","fa":"ما مشکل فنی را به‌سرعت برطرف کردیم."},{"en":"Report any safety problem to your supervisor.","fa":"هرگونه مشکل ایمنی را به سرپرست خود گزارش دهید."},{"en":"They held a meeting to discuss the production problem.","fa":"آن‌ها برای گفتگو درباره مشکل تولید جلسه‌ای تشکیل دادند."}]},
      {"word":"solution","meaning":"راه‌حل، پاسخ مسئله","en":"The team found a simple solution to the issue.","fa":"تیم یک راه‌حل ساده برای این مسئله پیدا کرد.","icon":"🗝️","examples":[{"en":"The team found a simple solution to the issue.","fa":"تیم یک راه‌حل ساده برای این مسئله پیدا کرد."},{"en":"We need an effective and low-cost solution.","fa":"ما به یک راه‌حل موثر و کم‌هزینه نیاز داریم."},{"en":"His smart solution saved the company time.","fa":"راه‌حل هوشمندانه او در زمان شرکت صرفه‌جویی کرد."}]},
      {"word":"business","meaning":"کسب‌وکار، تجارت","en":"He started an online business with his friend.","fa":"او با دوستش یک کسب‌وکار آنلاین راه انداخت.","icon":"💼","examples":[{"en":"He started an online business with his friend.","fa":"او با دوستش یک کسب‌وکار آنلاین راه انداخت."},{"en":"Our business is growing steadily this year.","fa":"کسب‌وکار ما امسال به‌صورت پیوسته در حال رشد است."},{"en":"They discussed new business opportunities.","fa":"آن‌ها درباره فرصت‌های جدید کسب‌وکار گفتگو کردند."}]},
      {"word":"firm","meaning":"مؤسسه، شرکت تجاری","en":"She works for a respected consulting firm.","fa":"او برای یک شرکت مشاوره معتبر کار می‌کند.","icon":"🏢","examples":[{"en":"She works for a respected consulting firm.","fa":"او برای یک شرکت مشاوره معتبر کار می‌کند."},{"en":"The law firm hired three new assistants.","fa":"مؤسسه حقوقی سه دستیار جدید استخدام کرد."},{"en":"Our firm provides services to local businesses.","fa":"شرکت ما به کسب‌وکارهای محلی خدمات ارائه می‌دهد."}]},
      {"word":"workplace","meaning":"محیط کار، محل کار","en":"A clean workplace helps employees focus better.","fa":"محیط کار تمیز به تمرکز بهتر کارکنان کمک می‌کند.","icon":"🏢","examples":[{"en":"A clean workplace helps employees focus better.","fa":"محیط کار تمیز به تمرکز بهتر کارکنان کمک می‌کند."},{"en":"Safety rules protect everyone in the workplace.","fa":"قوانین ایمنی از همه در محل کار محافظت می‌کنند."},{"en":"We promote a friendly and supportive workplace.","fa":"ما محیط کاری دوستانه و حمایت‌کننده‌ای را ترویج می‌کنیم."}]},
      {"word":"factory","meaning":"کارخانه","en":"The modern factory produces electrical parts.","fa":"این کارخانه مدرن قطعات الکتریکی تولید می‌کند.","icon":"🏭","examples":[{"en":"The modern factory produces electrical parts.","fa":"این کارخانه مدرن قطعات الکتریکی تولید می‌کند."},{"en":"Many people work in the car factory.","fa":"افراد زیادی در کارخانه خودروسازی کار می‌کند."},{"en":"The factory manager inspected the machines.","fa":"مدیر کارخانه ماشین‌آلات را بازرسی کرد."}]},
      {"word":"shop","meaning":"مغازه، فروشگاه","en":"He manages a small book shop downtown.","fa":"او یک کتاب‌فروشی کوچک را در مرکز شهر اداره می‌کند.","icon":"🏪","examples":[{"en":"He manages a small book shop downtown.","fa":"او یک کتاب‌فروشی کوچک را در مرکز شهر اداره می‌کند."},{"en":"The print shop printed our office posters.","fa":"مغازه چاپ پوستر‌های اداری ما را چاپ کرد."},{"en":"Our shop opens every morning at nine.","fa":"فروشگاه ما هر روز صبح ساعت نه باز می‌شود."}]},
      {"word":"building","meaning":"ساختمان اداری","en":"Our office building is located near the metro.","fa":"ساختمان اداری ما نزدیک مترو قرار دارد.","icon":"🏬","examples":[{"en":"Our office building is located near the metro.","fa":"ساختمان اداری ما نزدیک مترو قرار دارد."},{"en":"Security guards check badges at the building door.","fa":"نگهبانان در ورودی ساختمان کارت‌ها را بررسی می‌کنند."},{"en":"The new building has five floors of offices.","fa":"ساختمان جدید پنج طبقه دفتر کار دارد."}]},
      {"word":"floor","meaning":"طبقه اداری","en":"The marketing team is on the second floor.","fa":"تیم بازاریابی در طبقه دوم مستقر است.","icon":"🏢","examples":[{"en":"The marketing team is on the second floor.","fa":"تیم بازاریابی در طبقه دوم مستقر است."},{"en":"Which floor is the meeting room on?","fa":"اتاق جلسه در کدام طبقه است؟"},{"en":"Take the stairs to the third floor.","fa":"از پله‌ها به طبقه سوم بروید."}]},
      {"word":"elevator","meaning":"آسانسور","en":"Take the elevator to reach the top office.","fa":"برای رسیدن به دفتر بالا از آسانسور استفاده کنید.","icon":"🛗","examples":[{"en":"Take the elevator to reach the top office.","fa":"برای رسیدن به دفتر بالا از آسانسور استفاده کنید."},{"en":"The elevator is out of service today.","fa":"آسانسور امروز خراب است."},{"en":"She waited for the elevator with her colleagues.","fa":"او با همکارانش منتظر آسانسور ماند."}]},
      {"word":"entrance","meaning":"ورودی اداره","en":"Please wait near the main office entrance.","fa":"لطفاً نزدیک ورودی اصلی اداره منتظر بمانید.","icon":"🚪","examples":[{"en":"Please wait near the main office entrance.","fa":"لطفاً نزدیک ورودی اصلی اداره منتظر بمانید."},{"en":"Visitors must sign in at the building entrance.","fa":"بازدیدکنندگان باید در ورودی ساختمان امضا کنند."},{"en":"The staff entrance is around the corner.","fa":"ورودی کارکنان در نبش خیابان است."}]},
      {"word":"reception","meaning":"پذیرش اداری","en":"Ask the friendly receptionist at reception.","fa":"از مسئول پذیرش مهربان در بخش پذیرش بپرسید.","icon":"🛎️","examples":[{"en":"Ask the friendly receptionist at reception.","fa":"از مسئول پذیرش مهربان در بخش پذیرش بپرسید."},{"en":"Clients wait in the comfortable reception area.","fa":"مشتریان در بخش راحت پذیرش منتظر می‌مانند."},{"en":"Leave your delivery package at reception.","fa":"بسته ارسالی خود را در پذیرش بگذارید."}]},
      {"word":"schedule","meaning":"برنامه زمانی، جدول کاری","en":"Check your work schedule for next week.","fa":"برنامه کاری خود را برای هفته آینده بررسی کنید.","icon":"📅","examples":[{"en":"Check your work schedule for next week.","fa":"برنامه کاری خود را برای هفته آینده بررسی کنید."},{"en":"We have a very tight work schedule today.","fa":"ما امروز جدول کاری بسیار فشرده‌ای داریم."},{"en":"She organizes her daily schedule with a planner.","fa":"او برنامه روزانه‌اش را با یک تقویم برنامه‌ریزی تنظیم می‌کند."}]},
      {"word":"agenda","meaning":"دستور جلسه، برنامه کار","en":"What is the first item on today agenda?","fa":"اولین مورد در دستور جلسه امروز چیست؟","icon":"📋","examples":[{"en":"What is the first item on today agenda?","fa":"اولین مورد در دستور جلسه امروز چیست؟"},{"en":"The manager sent the meeting agenda early.","fa":"مدیر دستور جلسه را زود ارسال کرد."},{"en":"We followed the agenda step by step.","fa":"ما دستور جلسه را گام‌به‌گام دنبال کردیم."}]},
      {"word":"appointment","meaning":"قرار ملاقات کاری","en":"I have a morning appointment with the director.","fa":"من یک قرار ملاقات صبحگاهی با مدیر دارم.","icon":"🗓️","examples":[{"en":"I have a morning appointment with the director.","fa":"من یک قرار ملاقات صبحگاهی با مدیر دارم."},{"en":"Please call to confirm your appointment.","fa":"لطفاً برای تأیید قرار ملاقات خود تماس بگیرید."},{"en":"She rescheduled her business appointment for Monday.","fa":"او قرار ملاقات کاری‌اش را به دوشنبه موکول کرد."}]},
      {"word":"note","meaning":"یادداشت کاری","en":"He wrote a quick note during the call.","fa":"او در حین تماس یک یادداشت کوتاه نوشت.","icon":"📝","examples":[{"en":"He wrote a quick note during the call.","fa":"او در حین تماس یک یادداشت کوتاه نوشت."},{"en":"Leave a sticky note on my computer screen.","fa":"یک برگه یادداشت چسبان روی صفحه مانیتورم بگذار."},{"en":"Review your meeting notes before writing the email.","fa":"قبل از نوشتن ایمیل، یادداشت‌های جلسه‌ات را بازبینی کن."}]},
      {"word":"form","meaning":"فرم اداری","en":"Please fill out this job application form.","fa":"لطفاً این فرم درخواست کار را تکمیل کنید.","icon":"📑","examples":[{"en":"Please fill out this job application form.","fa":"لطفاً این فرم درخواست کار را تکمیل کنید."},{"en":"Sign the bottom of the registration form.","fa":"پایین فرم ثبت‌نام را امضا کنید."},{"en":"Submit the expense form to the accountant.","fa":"فرم هزینه‌ها را به حسابدار تحویل دهید."}]},
      {"word":"document","meaning":"سند اداری، مدرک","en":"Keep all important business documents in a safe.","fa":"تمام اسناد مهم کاری را در گاوصندوق نگه دارید.","icon":"📄","examples":[{"en":"Keep all important business documents in a safe.","fa":"تمام اسناد مهم کاری را در گاوصندوق نگه دارید."},{"en":"Print a copy of the official document.","fa":"یک نسخه از این سند رسمی چاپ کنید."},{"en":"She attached the signed document to her email.","fa":"او سند امضاشده را به ایمیلش پیوست کرد."}]},
      {"word":"envelope","meaning":"پاکت نامه","en":"Put the official letter inside this envelope.","fa":"نامه رسمی را داخل این پاکت بگذارید.","icon":"✉️","examples":[{"en":"Put the official letter inside this envelope.","fa":"نامه رسمی را داخل این پاکت بگذارید."},{"en":"Write the recipient address clearly on the envelope.","fa":"نشانی گیرنده را با وضوح روی پاکت بنویسید."},{"en":"The clerk opened the sealed envelope carefully.","fa":"کارمند پاکت مهر و موم‌شده را با دقت باز کرد."}]},
      {"word":"box","meaning":"جعبه، کارتن اداری","en":"Store old office files inside this large box.","fa":"پرونده‌های قدیمی اداره را داخل این جعبه بزرگ بگذارید.","icon":"📦","examples":[{"en":"Store old office files inside this large box.","fa":"پرونده‌های قدیمی اداره را داخل این جعبه بزرگ بگذارید."},{"en":"The delivery worker brought a heavy box of paper.","fa":"مامور تحویل یک کارتن سنگین کاغذ آورد."},{"en":"Label each storage box with a marker.","fa":"روی هر جعبه بایگانی با ماژیک برچسب بزنید."}]},
      {"word":"drawer","meaning":"کشو، کشوی میز","en":"The spare pens are inside the top desk drawer.","fa":"خودکارهای اضافه داخل کشوی بالایی میز هستند.","icon":"🗄️","examples":[{"en":"The spare pens are inside the top desk drawer.","fa":"خودکارهای اضافه داخل کشوی بالایی میز هستند."},{"en":"Lock your desk drawer before leaving work.","fa":"قبل از ترک کار، کشوی میزت را قفل کن."},{"en":"I found the office stamp in my drawer.","fa":"مهر اداره را در کشوی میزم پیدا کردم."}]},
      {"word":"key","meaning":"کلید دفتر","en":"Who has the key to the storage room?","fa":"چه کسی کلید اتاق بایگانی را دارد؟","icon":"🔑","examples":[{"en":"Who has the key to the storage room?","fa":"چه کسی کلید اتاق بایگانی را دارد؟"},{"en":"Remember to return the office key to reception.","fa":"به یاد داشته باشید که کلید دفتر را به پذیرش تحویل دهید."},{"en":"He keeps his work locker key on a ring.","fa":"او کلید کمد کاری‌اش را در یک جاکلیدی نگه می‌دارد."}]},
      {"word":"share","meaning":"به اشتراک گذاشتن، تسهیم","en":"Share the project file with the entire team.","fa":"فایل پروژه را با کل تیم به اشتراک بگذارید.","icon":"🔄","examples":[{"en":"Share the project file with the entire team.","fa":"فایل پروژه را با کل تیم به اشتراک بگذارید."},{"en":"Can you share your screen during the call?","fa":"می‌توانید در حین تماس صفحه نمایش خود را به اشتراک بگذارید؟"},{"en":"We share helpful resources in our group chat.","fa":"ما منابع مفید را در چت گروهی‌مان به اشتراک می‌گذاریم."}]},
      {"word":"check","meaning":"بررسی کردن، چک کردن","en":"Always check your work for errors before sending.","fa":"همیشه قبل از ارسال، کارت را برای خطاها بررسی کن.","icon":"✔️","examples":[{"en":"Always check your work for errors before sending.","fa":"همیشه قبل از ارسال، کارت را برای خطاها بررسی کن."},{"en":"Please check if the client received the invoice.","fa":"لطفاً بررسی کنید که آیا مشتری فاکتور را دریافت کرده است یا نه."},{"en":"The supervisor checked the daily inventory.","fa":"سرپرست موجودی روزانه را بررسی کرد."}]},
      {"word":"discuss","meaning":"بحث کردن، گفتگو کردن","en":"We will discuss the new policy in our meeting.","fa":"ما در جلسه‌مان درباره خط‌مشی جدید گفتگو خواهیم کرد.","icon":"🗣️","examples":[{"en":"We will discuss the new policy in our meeting.","fa":"ما در جلسه‌مان درباره خط‌مشی جدید گفتگو خواهیم کرد."},{"en":"The team met to discuss customer feedback.","fa":"تیم برای بحث درباره نظرات مشتریان تشکیل جلسه داد."},{"en":"Let us discuss the project budget tomorrow.","fa":"بیایید فردا درباره بودجه پروژه صحبت کنیم."}]},
      {"word":"explain","meaning":"توضیح دادن","en":"Can you explain how this office tool works?","fa":"می‌توانید توضیح دهید که این ابزار اداری چگونه کار می‌کند؟","icon":"💡","examples":[{"en":"Can you explain how this office tool works?","fa":"می‌توانید توضیح دهید که این ابزار اداری چگونه کار می‌کند؟"},{"en":"She explained the safety rules to new workers.","fa":"او قوانین ایمنی را به کارکنان جدید توضیح داد."},{"en":"He explained his ideas with clear diagrams.","fa":"او ایده‌هایش را با نمودارهای روشن توضیح داد."}]},
      {"word":"listen","meaning":"گوش دادن، شنیدن با دقت","en":"Listen carefully to the manager instructions.","fa":"به دستورالعمل‌های مدیر با دقت گوش بده.","icon":"👂","examples":[{"en":"Listen carefully to the manager instructions.","fa":"به دستورالعمل‌های مدیر با دقت گوش بده."},{"en":"Good workers listen to client concerns attentively.","fa":"کارکنان خوب با دقت به دغدغه‌های مشتری گوش می‌دهند."},{"en":"Everyone listened quietly to the presentation.","fa":"همه در سکوت به ارائه گوش دادند."}]},
      {"word":"speak","meaning":"صحبت کردن، سخن گفتن","en":"He will speak at the national conference.","fa":"او در همایش کشوری سخنرانی خواهد کرد.","icon":"🎤","examples":[{"en":"He will speak at the national conference.","fa":"او در همایش کشوری سخنرانی خواهد کرد."},{"en":"Can I speak with the department head, please?","fa":"می‌توانم با رئیس بخش صحبت کنم، لطفاً؟"},{"en":"She speaks three languages fluently at work.","fa":"او در محل کار به سه زبان به‌طور روان صحبت می‌کند."}]},
      {"word":"wait","meaning":"صبر کردن، منتظر ماندن","en":"Please wait in the lobby for your interview.","fa":"لطفاً در لابی منتظر مصاحبه خود بمانید.","icon":"⏳","examples":[{"en":"Please wait in the lobby for your interview.","fa":"لطفاً در لابی منتظر مصاحبه خود بمانید."},{"en":"We had to wait for the client response.","fa":"ما مجبور شدیم منتظر پاسخ مشتری بمانیم."},{"en":"Wait a moment while the printer warms up.","fa":"چند لحظه صبر کنید تا چاپگر گرم شود."}]},
      {"word":"meet","meaning":"ملاقات کردن، دیدار داشتن","en":"I will meet the new supplier this afternoon.","fa":"من امروز بعدازظهر با تأمین‌کننده جدید ملاقات خواهم کرد.","icon":"🤝","examples":[{"en":"I will meet the new supplier this afternoon.","fa":"من امروز بعدازظهر با تأمین‌کننده جدید ملاقات خواهم کرد."},{"en":"The whole department meets every Monday morning.","fa":"کل بخش هر دوشنبه صبح جلسه تشکیل می‌دهد."},{"en":"Where do you want to meet for lunch?","fa":"برای ناهار کجا می‌خواهی همدیگر را ببینیم؟"}]},
      {"word":"agree","meaning":"موافقت کردن، توافق داشتن","en":"Both sides agree on the contract terms.","fa":"هر دو طرف روی شرایط قرارداد توافق دارند.","icon":"🤝","examples":[{"en":"Both sides agree on the contract terms.","fa":"هر دو طرف روی شرایط قرارداد توافق دارند."},{"en":"I agree with your suggestion completely.","fa":"من کاملاً با پیشنهاد شما موافقم."},{"en":"The team agreed to start the project early.","fa":"تیم توافق کرد که پروژه را زودتر آغاز کند."}]},
      {"word":"decide","meaning":"تصمیم گرفتن","en":"The committee will decide on the budget tomorrow.","fa":"کمیته فردا درباره بودجه تصمیم خواهد گرفت.","icon":"⚖️","examples":[{"en":"The committee will decide on the budget tomorrow.","fa":"کمیته فردا درباره بودجه تصمیم خواهد گرفت."},{"en":"We need to decide which candidate to hire.","fa":"ما باید تصمیم بگیریم کدام داوطلب را استخدام کنیم."},{"en":"She decided to accept the promotion.","fa":"او تصمیم گرفت ارتقای شغلی را بپذیرد."}]},
      {"word":"lead","meaning":"رهبری کردن، هدایت کردن","en":"She will lead the marketing project this quarter.","fa":"او در این فصل پروژه بازاریابی را رهبری خواهد کرد.","icon":"🚩","examples":[{"en":"She will lead the marketing project this quarter.","fa":"او در این فصل پروژه بازاریابی را رهبری خواهد کرد."},{"en":"A good supervisor knows how to lead by example.","fa":"یک سرپرست خوب می‌داند چطور با الگوی خود رهبری کند."},{"en":"He leads a team of five software developers.","fa":"او یک تیم پنج نفره از برنامه‌نویسان را هدایت می‌کند."}]},
      {"word":"join","meaning":"پیوستن، ملحق شدن","en":"Two new specialists join our company today.","fa":"امروز دو متخصص جدید به شرکت ما ملحق می‌شوند.","icon":"👋","examples":[{"en":"Two new specialists join our company today.","fa":"امروز دو متخصص جدید به شرکت ما ملحق می‌شوند."},{"en":"Click the invitation link to join the meeting.","fa":"برای پیوستن به جلسه، روی لینک دعوت کلیک کنید."},{"en":"Would you like to join our project team?","fa":"آیا مایل هستید به تیم پروژه ما بپیوندید؟"}]},
      {"word":"guide","meaning":"راهنمایی کردن، راهنما","en":"The senior clerk will guide the new trainees.","fa":"کارمند ارشد کارآموزان جدید را راهنمایی خواهد کرد.","icon":"🧭","examples":[{"en":"The senior clerk will guide the new trainees.","fa":"کارمند ارشد کارآموزان جدید را راهنمایی خواهد کرد."},{"en":"Read the employee guide for company policies.","fa":"برای آگاهی از سیاست‌های شرکت راهنمای کارکنان را بخوانید."},{"en":"She guided us through the software setup smoothly.","fa":"او با آرامش ما را در مراحل نصب نرم‌افزار راهنمایی کرد."}]},
      {"word":"organize","meaning":"سازماندهی کردن، مرتب کردن","en":"He organized all the office files by date.","fa":"او تمام پرونده‌های اداره را بر اساس تاریخ سازماندهی کرد.","icon":"🗂️","examples":[{"en":"He organized all the office files by date.","fa":"او تمام پرونده‌های اداره را بر اساس تاریخ سازماندهی کرد."},{"en":"We need to organize the annual company dinner.","fa":"ما باید شام سالانه شرکت را سازماندهی کنیم."},{"en":"She organizes her desk before leaving each day.","fa":"او هر روز قبل از رفتن میزش را مرتب می‌کند."}]},
      {"word":"prepare","meaning":"آماده کردن، تدارک دیدن","en":"Please prepare the meeting room before ten.","fa":"لطفاً اتاق جلسه را قبل از ساعت ده آماده کنید.","icon":"🛠️","examples":[{"en":"Please prepare the meeting room before ten.","fa":"لطفاً اتاق جلسه را قبل از ساعت ده آماده کنید."},{"en":"She prepared the sales report for her manager.","fa":"او گزارش فروش را برای مدیرش آماده کرد."},{"en":"Take time to prepare for your job interview.","fa":"برای مصاحبه کاری خود وقت بگذارید و آماده شوید."}]},
      {"word":"success","meaning":"موفقیت کاری","en":"The product launch was a great commercial success.","fa":"معرفی محصول یک موفقیت تجاری بزرگ بود.","icon":"🏆","examples":[{"en":"The product launch was a great commercial success.","fa":"معرفی محصول یک موفقیت تجاری بزرگ بود."},{"en":"Teamwork is key to the success of our business.","fa":"کار تیمی کلید موفقیت کسب‌وکار ماست."},{"en":"We celebrated our company anniversary and success.","fa":"ما سالگرد تأسیس شرکت و موفقیتمان را جشن گرفتیم."}]},
      {"word":"result","meaning":"نتیجه، دستاورد","en":"Our sales results improved significantly this month.","fa":"نتایج فروش ما این ماه بهبود چشمگیری داشت.","icon":"📊","examples":[{"en":"Our sales results improved significantly this month.","fa":"نتایج فروش ما این ماه بهبود چشمگیری داشت."},{"en":"We expect positive results from this marketing plan.","fa":"ما از این برنامه بازاریابی انتظار نتایج مثبتی داریم."},{"en":"The manager was pleased with the test results.","fa":"مدیر از نتایج آزمون راضی بود."}]},
      {"word":"progress","meaning":"پیشرفت، روند پیشروی","en":"The team is making good progress on the project.","fa":"تیم در پروژه پیشرفت خوبی دارد.","icon":"📈","examples":[{"en":"The team is making good progress on the project.","fa":"تیم در پروژه پیشرفت خوبی دارد."},{"en":"We track weekly progress using a simple chart.","fa":"ما پیشرفت هفتگی را با استفاده از یک نمودار ساده پیگیری می‌کنیم."},{"en":"She shared her training progress with the coach.","fa":"او پیشرفت آموزشی خود را با مربی به اشتراک گذاشت."}]},
      {"word":"safe","meaning":"امن، بی‌خطر در کار","en":"Wear safety glasses to keep your eyes safe.","fa":"برای حفظ سلامت چشمانتان عینک ایمنی بزنید.","icon":"🦺","examples":[{"en":"Wear safety glasses to keep your eyes safe.","fa":"برای حفظ سلامت چشمانتان عینک ایمنی بزنید."},{"en":"Our factory maintains a safe working environment.","fa":"کارخانه ما یک محیط کاری امن را حفظ می‌کند."},{"en":"Store all passwords in a safe digital vault.","fa":"همه رمزهای عبور را در یک مخزن امن دیجیتال نگهداری کنید."}]},
      {"word":"ready","meaning":"آماده، مهیا","en":"The presentation slides are ready for the meeting.","fa":"اسلایدهای ارائه برای جلسه آماده هستند.","icon":"✅","examples":[{"en":"The presentation slides are ready for the meeting.","fa":"اسلایدهای ارائه برای جلسه آماده هستند."},{"en":"Are you ready to meet the new client?","fa":"آیا برای ملاقات با مشتری جدید آماده‌اید؟"},{"en":"The contract is signed and ready to be filed.","fa":"قرارداد امضا شده و آماده بایگانی است."}]}
    ]
  },
  idiomEveryday: {
    name: "اصطلاحات روزمره",
    words: [
      { word: "a piece of cake", meaning: "مثل آب خوردن", en: "The test was a piece of cake.", fa: "امتحان مثل آب خوردن بود.", icon: "🍰", examples: [{ en: "The test was a piece of cake.", fa: "امتحان مثل آب خوردن بود." }, { en: "For her, cooking is a piece of cake.", fa: "آشپزی برای او مثل آب خوردن است." }, { en: "Do not worry, it is a piece of cake!", fa: "نگران نباش، خیلی راحته!" }] },
      { word: "hit the hay", meaning: "زدن به رختخواب", en: "I hit the hay early on weekdays.", fa: "روزهای هفته زود می‌رم رختخواب.", icon: "😴", examples: [{ en: "I hit the hay early on weekdays.", fa: "روزهای هفته زود می‌رم رختخواب." }, { en: "I am so tired; time to hit the hay.", fa: "خیلی خسته‌ام؛ وقت رفتن به رختخوابه." }, { en: "He always hits the hay after dinner.", fa: "او همیشه بعد از شام می‌ره رختخواب." }] },
      { word: "call it a day", meaning: "برای امروز کافیه", en: "Let us call it a day and go home.", fa: "بیا برای امروز تمومش کنیم و بریم خونه.", icon: "🌇", examples: [{ en: "Let us call it a day and go home.", fa: "بیا برای امروز تمومش کنیم و بریم خونه." }, { en: "We worked hard; let us call it a day.", fa: "سخت کار کردیم؛ برای امروز کافیه." }, { en: "After ten hours, I called it a day.", fa: "بعد از ده ساعت کار، گفتم برای امروز کافیه." }] },
      { word: "under the weather", meaning: "حالش بد است", en: "I am feeling under the weather today.", fa: "امروز حالم خوب نیست.", icon: "🤒", examples: [{ en: "I am feeling under the weather today.", fa: "امروز حالم خوب نیست." }, { en: "She stayed home; she is under the weather.", fa: "خونه موند؛ حالش بد بود." }, { en: "You look under the weather; rest a little.", fa: "کم‌حال به نظر می‌رسی؛ کمی استراحت کن." }] },
      { word: "break a leg", meaning: "موفق باشی!", en: "Break a leg in your show tonight!", fa: "امشب توی اجرات موفق باشی!", icon: "🍀", examples: [{ en: "Break a leg in your show tonight!", fa: "امشب توی اجرات موفق باشی!" }, { en: "Before my test, she said break a leg.", fa: "قبل از امتحانم بهم گفت موفق باشی." }, { en: "He said break a leg before my interview.", fa: "قبل از مصاحبه‌ام گفت موفق باشی." }] }
    ]
  },
  idiomFeelings: {
    name: "اصطلاحات احساسات",
    words: [
      { word: "on cloud nine", meaning: "بی‌نهایت خوشحال", en: "She is on cloud nine today.", fa: "امروز سر از پا نمی‌شناسه.", icon: "☁️", examples: [{ en: "She is on cloud nine today.", fa: "امروز سر از پا نمی‌شناسه." }, { en: "I was on cloud nine when I got the job.", fa: "وقتی کار رو گرفتم سر از پا نمی‌شناختم." }, { en: "He is on cloud nine about the news.", fa: "از این خبر خیلی ذوق کرده." }] },
      { word: "butterflies in my stomach", meaning: "دل‌شوره داشتن", en: "I get butterflies in my stomach before a speech.", fa: "قبل از سخنرانی دل‌شوره می‌گیرم.", icon: "🦋", examples: [{ en: "I get butterflies in my stomach before a speech.", fa: "قبل از سخنرانی دل‌شوره می‌گیرم." }, { en: "Thinking about it gives me butterflies in my stomach.", fa: "فکر کردن بهش بهم دل‌شوره می‌ده." }, { en: "I had butterflies in my stomach on the first day.", fa: "روز اولش دل‌شوره داشتم." }] },
      { word: "over the moon", meaning: "سر از پا نمی‌شناختن", en: "He was over the moon when he heard the news.", fa: "وقتی خبر رو شنید سر از پا نمی‌شناخت.", icon: "🌙", examples: [{ en: "He was over the moon when he heard the news.", fa: "وقتی خبر رو شنید سر از پا نمی‌شناخت." }, { en: "She is over the moon about her new puppy.", fa: "برای توله‌سگ جدیدش خیلی ذوق کرده." }, { en: "We were over the moon after the win.", fa: "بعد از برد سر از پا نمی‌شناختیم." }] },
      { word: "cold feet", meaning: "پا پس کشیدن", en: "She got cold feet before the big speech.", fa: "قبل از سخنرانی بزرگ پا پس کشید.", icon: "🥶", examples: [{ en: "She got cold feet before the big speech.", fa: "قبل از سخنرانی بزرگ پا پس کشید." }, { en: "Do not get cold feet now; you are ready!", fa: "الان پا پس نکش؛ آماده‌ای!" }, { en: "He got cold feet the night before the trip.", fa: "شب قبل از سفر پا پس کشید." }] },
      { word: "down in the dumps", meaning: "دلگیر و غمگین", en: "He is down in the dumps today.", fa: "امروز دلگیره.", icon: "😞", examples: [{ en: "He is down in the dumps today.", fa: "امروز دلگیره." }, { en: "She was down in the dumps after the news.", fa: "بعد از اون خبر غمگین شد." }, { en: "When I feel down in the dumps, I call a friend.", fa: "وقتی دلگیرم، به یک دوست زنگ می‌زنم." }] }
    ]
  },
  idiomEffort: {
    name: "اصطلاحات کار و تلاش",
    words: [
      { word: "burn the midnight oil", meaning: "تا دیروقت کار کردن", en: "I burn the midnight oil before exams.", fa: "قبل از امتحان‌ها تا دیروقت درس می‌خونم.", icon: "🕯️", examples: [{ en: "I burn the midnight oil before exams.", fa: "قبل از امتحان‌ها تا دیروقت درس می‌خونم." }, { en: "She burns the midnight oil for her project.", fa: "برای پروژه‌اش تا دیروقت کار می‌کنه." }, { en: "Do not burn the midnight oil too often.", fa: "زیاد تا دیروقت بیدار نمون." }] },
      { word: "think outside the box", meaning: "خلاقانه فکر کردن", en: "We need to think outside the box.", fa: "باید خلاقانه فکر کنیم.", icon: "📦", examples: [{ en: "We need to think outside the box.", fa: "باید خلاقانه فکر کنیم." }, { en: "She always thinks outside the box at work.", fa: "او سر کار همیشه خلاقانه فکر می‌کنه." }, { en: "Think outside the box to solve this.", fa: "برای حلش، خارج از چارچوب فکر کن." }] },
      { word: "get the ball rolling", meaning: "کار را شروع کردن", en: "Let us get the ball rolling with a quick game.", fa: "بیا با یک بازی سریع کار رو شروع کنیم.", icon: "⚽", examples: [{ en: "Let us get the ball rolling with a quick game.", fa: "بیا با یک بازی سریع کار رو شروع کنیم." }, { en: "He got the ball rolling on the new project.", fa: "او پروژه جدید رو شروع کرد." }, { en: "I will get the ball rolling tomorrow morning.", fa: "فردا صبح کار رو شروع می‌کنم." }] },
      { word: "on the ball", meaning: "هوشیار و آماده", en: "The new assistant is really on the ball.", fa: "دستیار جدید واقعاً هوشیاره.", icon: "🎯", examples: [{ en: "The new assistant is really on the ball.", fa: "دستیار جدید واقعاً هوشیاره." }, { en: "You must stay on the ball in this job.", fa: "توی این کار باید هوشیار بمونی." }, { en: "She is always on the ball with deadlines.", fa: "توی مهلت‌ها همیشه سر وقت عمل می‌کنه." }] },
      { word: "hit the nail on the head", meaning: "دقیقاً درست گفتن", en: "You hit the nail on the head with that answer.", fa: "با اون جواب دقیقاً زدی تو خال.", icon: "🔨", examples: [{ en: "You hit the nail on the head with that answer.", fa: "با اون جواب دقیقاً زدی تو خال." }, { en: "She hit the nail on the head about the problem.", fa: "درباره مشکل کاملاً درست گفت." }, { en: "His comment hit the nail on the head.", fa: "حرفش دقیقاً درست بود." }] }
    ]
  },
  idiomBehavior: {
    name: "اصطلاحات رفتار و آداب",
    words: [
      { word: "spill the beans", meaning: "راز را لو دادن", en: "Do not spill the beans about the party!", fa: "راز مهمونی رو لو نده!", icon: "🤫", examples: [{ en: "Do not spill the beans about the party!", fa: "راز مهمونی رو لو نده!" }, { en: "He spilled the beans about the gift.", fa: "راز هدیه رو لو داد." }, { en: "Who spilled the beans to her?", fa: "کی بهش راز رو لو داد؟" }] },
      { word: "let the cat out of the bag", meaning: "راز را ناخواسته لو دادن", en: "He let the cat out of the bag about the surprise.", fa: "راز سورپرایز رو ناخواسته لو داد.", icon: "🐈", examples: [{ en: "He let the cat out of the bag about the surprise.", fa: "راز سورپرایز رو ناخواسته لو داد." }, { en: "Do not let the cat out of the bag yet!", fa: "هنوز راز رو فاش نکن!" }, { en: "She let the cat out of the bag by mistake.", fa: "اشتباهاً راز رو فاش کرد." }] },
      { word: "beat around the bush", meaning: "طفره رفتن", en: "Do not beat around the bush; tell me the truth.", fa: "طفره نرو؛ حقیقت رو بگو.", icon: "🌳", examples: [{ en: "Do not beat around the bush; tell me the truth.", fa: "طفره نرو؛ حقیقت رو بگو." }, { en: "He always beats around the bush in meetings.", fa: "تو جلسه‌ها همیشه طفره می‌ره." }, { en: "I beat around the bush too much.", fa: "من زیادی طفره می‌رم." }] },
      { word: "a blessing in disguise", meaning: "توفیق اجباری", en: "Losing that job was a blessing in disguise.", fa: "اون بیکار شدن یه توفیق اجباری بود.", icon: "🙏", examples: [{ en: "Losing that job was a blessing in disguise.", fa: "اون بیکار شدن یه توفیق اجباری بود." }, { en: "The delay was a blessing in disguise.", fa: "اون تاخیر به نفعمون تموم شد." }, { en: "Sometimes rain is a blessing in disguise.", fa: "بعضی وقتا بارون به نفعه، فقط نمی‌دونی." }] },
      { word: "a couch potato", meaning: "آدم تنبل (لم‌ده)", en: "My brother is a couch potato on weekends.", fa: "برادرم آخر هفته‌ها فقط لم می‌ده.", icon: "🛋️", examples: [{ en: "My brother is a couch potato on weekends.", fa: "برادرم آخر هفته‌ها فقط لم می‌ده." }, { en: "Do not be a couch potato; come with us!", fa: "تنبلی نکن؛ بیا با ما!" }, { en: "He became a couch potato after the holidays.", fa: "بعد از تعطیلات تنبل شده." }] }
    ]
  },
  teenLife: {
    name: "حال‌وهوای من",
    words: [
      { word: "mood", meaning: "حال‌و‌هوا", en: "I am in a good mood today.", fa: "امروز حال‌وهوای خوبی دارم.", icon: "🌤️", examples: [{ en: "I am in a good mood today.", fa: "امروز حال‌وهوای خوبی دارم." }, { en: "Music changes my mood.", fa: "موسیقی حال‌وهوایم را عوض می‌کند." }, { en: "She woke up in a bad mood.", fa: "او با حال‌وهوای بدی بیدار شد." }] },
      { word: "confident", meaning: "بااعتمادبه‌نفس", en: "She feels confident in class.", fa: "او در کلاس بااعتمادبه‌نفس است.", icon: "✨", examples: [{ en: "She feels confident in class.", fa: "او در کلاس بااعتمادبه‌نفس است." }, { en: "I feel more confident now.", fa: "الان اعتمادبه‌نفس بیشتری دارم." }, { en: "Practice makes you confident.", fa: "تمرین تو را بااعتمادبه‌نفس می‌کند." }] },
      { word: "shy", meaning: "خجالتی", en: "I am shy with new people.", fa: "من با آدم‌های جدید خجالتی هستم.", icon: "🙈", examples: [{ en: "I am shy with new people.", fa: "من با آدم‌های جدید خجالتی هستم." }, { en: "She gave a shy smile.", fa: "او یک لبخند خجالتی زد." }, { en: "Don't be shy; ask your question.", fa: "خجالت نکش؛ سؤالت را بپرس." }] },
      { word: "proud", meaning: "مفتخر", en: "I am proud of my progress.", fa: "من به پیشرفتم افتخار می‌کنم.", icon: "🌟", examples: [{ en: "I am proud of my progress.", fa: "من به پیشرفتم افتخار می‌کنم." }, { en: "Her family is proud of her.", fa: "خانواده‌اش به او افتخار می‌کنند." }, { en: "We are proud of our team.", fa: "ما به تیم‌مان افتخار می‌کنیم." }] },
      { word: "kind", meaning: "مهربان", en: "My friend is kind to everyone.", fa: "دوستم با همه مهربان است.", icon: "💜", examples: [{ en: "My friend is kind to everyone.", fa: "دوستم با همه مهربان است." }, { en: "That was a kind message.", fa: "آن یک پیام مهربانانه بود." }, { en: "Always be kind to others.", fa: "همیشه با دیگران مهربان باش." }] },
{ word: "happy", meaning: "خوشحال، شاد", en: "I feel so happy when I hang out with friends.", fa: "وقتی با دوستانم وقت می‌گذرانم خیلی احساس خوشحالی می‌کنم.", icon: "😊", examples: [{ en: "I feel so happy when I hang out with friends.", fa: "وقتی با دوستانم وقت می‌گذرانم خیلی احساس خوشحالی می‌کنم." }, { en: "Her happy laugh made everyone smile.", fa: "خنده شاد او باعث شد همه لبخند بزنند." }, { en: "Listening to upbeat songs makes me happy.", fa: "گوش دادن به آهنگ‌های شاد مرا خوشحال می‌کند." }] },
      { word: "sad", meaning: "غمگین، ناراحت", en: "It is okay to feel sad sometimes.", fa: "اشکالی ندارد که گاهی اوقات احساس ناراحتی کنی.", icon: "😢", examples: [{ en: "It is okay to feel sad sometimes.", fa: "اشکالی ندارد که گاهی اوقات احساس ناراحتی کنی." }, { en: "Sad movies always make me cry.", fa: "فیلم‌های غمگین همیشه مرا به گریه می‌اندازند." }, { en: "Talk to a friend when you feel sad.", fa: "وقتی ناراحتی با یک دوست صحبت کن." }] },
      { word: "bored", meaning: "بی‌حوصله، کسل", en: "I am so bored on rainy afternoons.", fa: "بعدازظهرهای بارانی خیلی بی‌حوصله می‌شوم.", icon: "🥱", examples: [{ en: "I am so bored on rainy afternoons.", fa: "بعدازظهرهای بارانی خیلی بی‌حوصله می‌شوم." }, { en: "When I get bored, I draw in my sketchbook.", fa: "وقتی حوصله‌ام سر می‌رود، توی دفتر نقاشی‌ام می‌کشم." }, { en: "He looked bored during the long speech.", fa: "او در طول سخنرانی طولانی بی‌حوصله به نظر می‌رسید." }] },
      { word: "excited", meaning: "هیجان‌زده، پرشور", en: "I am super excited for the weekend concert.", fa: "برای کنسرت آخر هفته فوق‌العاده هیجان‌زده‌ام.", icon: "🤩", examples: [{ en: "I am super excited for the weekend concert.", fa: "برای کنسرت آخر هفته فوق‌العاده هیجان‌زده‌ام." }, { en: "The excited crowd cheered loudly.", fa: "جمعیت هیجان‌زده با صدای بلند تشویق کردند." }, { en: "She was excited to show her new sneakers.", fa: "او هیجان‌زده بود تا کتانی‌های جدیدش را نشان دهد." }] },
      { word: "tired", meaning: "خسته، بی‌رمق", en: "I am too tired after soccer practice.", fa: "بعد از تمرین فوتبال خیلی خسته‌ام.", icon: "😴", examples: [{ en: "I am too tired after soccer practice.", fa: "بعد از تمرین فوتبال خیلی خسته‌ام." }, { en: "Put your phone away when you are tired.", fa: "وقتی خسته‌ای گوشی‌ات را کنار بگذار." }, { en: "He stayed up late and felt tired at school.", fa: "او تا دیر وقت بیدار ماند و در مدرسه احساس خستگی می‌کرد." }] },
      { word: "nervous", meaning: "مضطرب، دلشوره", en: "I always get nervous before a big exam.", fa: "من همیشه قبل از یک امتحان بزرگ دلشوره می‌گیرم.", icon: "😰", examples: [{ en: "I always get nervous before a big exam.", fa: "من همیشه قبل از یک امتحان بزرگ دلشوره می‌گیرم." }, { en: "Take a deep breath if you feel nervous.", fa: "اگر مضطربی یک نفس عمیق بکش." }, { en: "She felt nervous speaking in front of the class.", fa: "او از صحبت کردن جلوی کلاس احساس اضطراب کرد." }] },
      { word: "angry", meaning: "عصبانی، کفری", en: "Count to ten when you feel angry.", fa: "وقتی عصبانی می‌شوی تا ده بشمار.", icon: "😡", examples: [{ en: "Count to ten when you feel angry.", fa: "وقتی عصبانی می‌شوی تا ده بشمار." }, { en: "He was angry because he lost the online game.", fa: "او عصبانی بود چون بازی آنلاین را باخت." }, { en: "Do not send messages when you are angry.", fa: "وقتی عصبانی هستی پیام نده." }] },
      { word: "calm", meaning: "آرام، خونسرد", en: "Listening to lo-fi beats keeps me calm.", fa: "گوش دادن به آهنگ‌های لوفای مرا آرام نگه می‌دارد.", icon: "🧘", examples: [{ en: "Listening to lo-fi beats keeps me calm.", fa: "گوش دادن به آهنگ‌های لوفای مرا آرام نگه می‌دارد." }, { en: "Try to stay calm under pressure.", fa: "سعی کن زیر فشار خونسرد بمانی." }, { en: "Her calm voice helped everyone relax.", fa: "صدای آرام او به همه کمک کرد آرامش پیدا کنند." }] },
      { word: "energetic", meaning: "پرانرژی، سرزنده", en: "Fast music makes me feel energetic.", fa: "موسیقی تند حس پرانرژی بودن به من می‌دهد.", icon: "⚡", examples: [{ en: "Fast music makes me feel energetic.", fa: "موسیقی تند حس پرانرژی بودن به من می‌دهد." }, { en: "She is always energetic in the morning.", fa: "او صبح‌ها همیشه سرزنده و پرانرژی است." }, { en: "An energetic walk refreshed my mind.", fa: "یک پیاده‌روی پرانرژی ذهنم را سرحال آورد." }] },
      { word: "stressed", meaning: "پراسترس، تحت فشار", en: "Too much homework makes me stressed.", fa: "تکلیف بیش از حد مرا پراسترس می‌کند.", icon: "🤯", examples: [{ en: "Too much homework makes me stressed.", fa: "تکلیف بیش از حد مرا پراسترس می‌کند." }, { en: "Do not get stressed over small mistakes.", fa: "به خاطر اشتباهات کوچک به خودت استرس نده." }, { en: "A short walk reduces stressed feelings.", fa: "یک پیاده‌روی کوتاه حس استرس را کم می‌کند." }] },
      { word: "curious", meaning: "کنجکاو", en: "Curious teens learn new things faster.", fa: "نوجوان‌های کنجکاو چیزهای جدید را سریع‌تر یاد می‌گیرند.", icon: "🧐", examples: [{ en: "Curious teens learn new things faster.", fa: "نوجوان‌های کنجکاو چیزهای جدید را سریع‌تر یاد می‌گیرند." }, { en: "I was curious about how coding works.", fa: "درباره اینکه برنامه‌نویسی چطور کار می‌کند کنجکاو بودم." }, { en: "Stay curious and keep asking questions.", fa: "کنجکاو بمان و مدام سؤال بپرس." }] },
      { word: "brave", meaning: "شجاع، نترس", en: "It was brave of you to admit your mistake.", fa: "شجاعانه بود که اشتباهت را قبول کردی.", icon: "🦁", examples: [{ en: "It was brave of you to admit your mistake.", fa: "شجاعانه بود که اشتباهت را قبول کردی." }, { en: "Be brave and try something new today.", fa: "شجاع باش و امروز یک کار جدید را امتحان کن." }, { en: "She is brave enough to stand on stage.", fa: "او آن‌قدر شجاع است که روی صحنه بایستد." }] },
      { word: "honest", meaning: "صادق، روراست", en: "A true friend is always honest with you.", fa: "یک دوست واقعی همیشه با تو روراست است.", icon: "🤍", examples: [{ en: "A true friend is always honest with you.", fa: "یک دوست واقعی همیشه با تو روراست است." }, { en: "I appreciate your honest feedback.", fa: "از نظر صادقانه‌ات قدردانی می‌کنم." }, { en: "Be honest about your feelings.", fa: "درباره احساساتت صادق باش." }] },
      { word: "lazy", meaning: "تنبل، بی‌حال", en: "Sunday is my favorite lazy day.", fa: "یکشنبه روز تنبلی و لم دادن دلخواه من است.", icon: "🦥", examples: [{ en: "Sunday is my favorite lazy day.", fa: "یکشنبه روز تنبلی و لم دادن دلخواه من است." }, { en: "Do not be lazy; clean your desk.", fa: "تنبلی نکن؛ میزت را مرتب کن." }, { en: "We spent a lazy afternoon watching videos.", fa: "ما یک بعدازظهر تنبلانه را با تماشای ویدیو گذراندیم." }] },
      { word: "smart", meaning: "باهوش، زرنگ", en: "That was a smart solution to the puzzle.", fa: "آن یک راه‌حل هوشمندانه برای معما بود.", icon: "💡", examples: [{ en: "That was a smart solution to the puzzle.", fa: "آن یک راه‌حل هوشمندانه برای معما بود." }, { en: "She uses smart tricks to remember words.", fa: "او از ترفندهای هوشمندانه‌ای برای به خاطر سپردن لغات استفاده می‌کند." }, { en: "You are smarter than you think.", fa: "تو باهوش‌تر از آنی هستی که فکر می‌کنی." }] },
      { word: "funny", meaning: "بامزه، خنده‌دار", en: "My best friend tells funny jokes every day.", fa: "بهترین دوستم هر روز جوک‌های خنده‌دار تعریف می‌کند.", icon: "😂", examples: [{ en: "My best friend tells funny jokes every day.", fa: "بهترین دوستم هر روز جوک‌های خنده‌دار تعریف می‌کند." }, { en: "This meme is so funny.", fa: "این میم خیلی خنده‌دار است." }, { en: "He made a funny face in the photo.", fa: "او توی عکس یک قیافه خنده‌دار به خودش گرفت." }] },
      { word: "cool", meaning: "باحال، جذاب", en: "Those new sneakers look super cool.", fa: "آن کتانی‌های جدید فوق‌العاده باحال به نظر می‌رسند.", icon: "😎", examples: [{ en: "Those new sneakers look super cool.", fa: "آن کتانی‌های جدید فوق‌العاده باحال به نظر می‌رسند." }, { en: "That video game trick was really cool.", fa: "آن ترفند بازی ویدیویی واقعاً باحال بود." }, { en: "She has a cool skateboarding style.", fa: "او استایل اسکیت‌برد باحالی دارد." }] },
      { word: "friendly", meaning: "خونگرم، صمیمی", en: "Say hello with a friendly smile.", fa: "با یک لبخند صمیمی سلام کن.", icon: "👋", examples: [{ en: "Say hello with a friendly smile.", fa: "با یک لبخند صمیمی سلام کن." }, { en: "The new student has a very friendly vibe.", fa: "دانش‌آموز جدید حال‌وهوای خیلی صمیمی دارد." }, { en: "Our group is friendly to newcomers.", fa: "گروه ما با تازه واردها صمیمی و مهربان است." }] },
      { word: "creative", meaning: "خلاق، نوآور", en: "She has lots of creative design ideas.", fa: "او ایده‌های طراحی خلاقانه زیادی دارد.", icon: "🎨", examples: [{ en: "She has lots of creative design ideas.", fa: "او ایده‌های طراحی خلاقانه زیادی دارد." }, { en: "Writing poems is a creative hobby.", fa: "شعر گفتن یک سرگرمی خلاقانه است." }, { en: "Show your creative side in this project.", fa: "سمت خلاق خودت را در این پروژه نشان بده." }] },
      { word: "chat", meaning: "چت کردن، گپ زدن", en: "We chat in our group every evening.", fa: "ما هر عصر توی گروه‌مان چت می‌کنیم.", icon: "💬", examples: [{ en: "We chat in our group every evening.", fa: "ما هر عصر توی گروه‌مان چت می‌کنیم." }, { en: "Can we have a quick chat after school?", fa: "می‌توانیم بعد از مدرسه یک گپ کوتاه بزنیم؟" }, { en: "I love chatting with friends online.", fa: "عاشق چت کردن آنلاین با دوستانم هستم." }] },
      { word: "message", meaning: "پیام، مسیج", en: "Send me a message when you get home.", fa: "وقتی رسیدی خانه برایم پیام بفرست.", icon: "✉️", examples: [{ en: "Send me a message when you get home.", fa: "وقتی رسیدی خانه برایم پیام بفرست." }, { en: "I read your message this morning.", fa: "امروز صبح پیامت را خواندم." }, { en: "She replied to my message right away.", fa: "او فوراً به پیامم جواب داد." }] },
      { word: "secret", meaning: "راز، سرّ", en: "Can you keep this secret between us?", fa: "می‌توانی این راز را بین خودمان نگه داری؟", icon: "🤫", examples: [{ en: "Can you keep this secret between us?", fa: "می‌توانی این راز را بین خودمان نگه داری؟" }, { en: "I told my best friend a big secret.", fa: "یک راز بزرگ را به بهترین دوستم گفتم." }, { en: "It is not a secret anymore.", fa: "این موضوع دیگر یک راز نیست." }] },
      { word: "promise", meaning: "قول دادن، وعده", en: "I promise to help you with math tomorrow.", fa: "قول می‌دهم فردا در ریاضی کمکت کنم.", icon: "🤞", examples: [{ en: "I promise to help you with math tomorrow.", fa: "قول می‌دهم فردا در ریاضی کمکت کنم." }, { en: "Never break a promise to a friend.", fa: "هرگز قولی را که به یک دوست دادی نشکن." }, { en: "She made a promise and kept it.", fa: "او یک قول داد و پای آن ایستاد." }] },
      { word: "joke", meaning: "شوخی، جوک", en: "His joke cracked the whole class up.", fa: "شوخی او کل کلاس را به خنده انداخت.", icon: "🤣", examples: [{ en: "His joke cracked the whole class up.", fa: "شوخی او کل کلاس را به خنده انداخت." }, { en: "It was just a friendly joke.", fa: "فقط یک شوخی دوستانه بود." }, { en: "Do you know any good jokes?", fa: "جوک خوب بلدی؟" }] },
      { word: "laugh", meaning: "خندیدن، خنده", en: "We laugh so hard when we hang out.", fa: "وقتی دور هم جمع می‌شویم از ته دل می‌خندیم.", icon: "😄", examples: [{ en: "We laugh so hard when we hang out.", fa: "وقتی دور هم جمع می‌شویم از ته دل می‌خندیم." }, { en: "Laughter is the best medicine for a bad mood.", fa: "خنده بهترین دارو برای حال‌وهوای بد است." }, { en: "She laughed at the funny cat clip.", fa: "او به کلیپ گربه خنده‌دار خندید." }] },
      { word: "smile", meaning: "لبخند زدن، لبخند", en: "A warm smile brightens up my day.", fa: "یک لبخند گرم روزم را درخشان می‌کند.", icon: "🙂", examples: [{ en: "A warm smile brightens up my day.", fa: "یک لبخند گرم روزم را درخشان می‌کند." }, { en: "Smile for the camera!", fa: "به دوربین لبخند بزن!" }, { en: "She always greets me with a gentle smile.", fa: "او همیشه با یک لبخند ملایم به من سلام می‌کند." }] },
      { word: "hug", meaning: "بغل، در آغوش گرفتن", en: "Give your friend a warm hug when they are down.", fa: "وقتی دوستت ناراحت است یک بغل گرم به او هدیه بده.", icon: "🫂", examples: [{ en: "Give your friend a warm hug when they are down.", fa: "وقتی دوستت ناراحت است یک بغل گرم به او هدیه بده." }, { en: "A big hug makes everything feel better.", fa: "یک آغوش محکم حس همه چیز را بهتر می‌کند." }, { en: "They hugged each other after winning the match.", fa: "آن‌ها بعد از بردن مسابقه همدیگر را در آغوش کشیدند." }] },
      { word: "post", meaning: "پست گذاشتن، پست", en: "I will post our group photo tonight.", fa: "من امشب عکس گروه‌مان را پست می‌کنم.", icon: "📱", examples: [{ en: "I will post our group photo tonight.", fa: "من امشب عکس گروه‌مان را پست می‌کنم." }, { en: "Did you see her latest post?", fa: "آخرین پستش را دیدی؟" }, { en: "Think twice before you post online.", fa: "قبل از اینکه آنلاین پست بگذاری دو بار فکر کن." }] },
      { word: "share", meaning: "به اشتراک گذاشتن", en: "Share this cool music playlist with me.", fa: "این پلی‌لیست موسیقی باحال را با من به اشتراک بگذار.", icon: "🔄", examples: [{ en: "Share this cool music playlist with me.", fa: "این پلی‌لیست موسیقی باحال را با من به اشتراک بگذار." }, { en: "True friends share their snacks.", fa: "دوستان واقعی خوراکی‌هایشان را شریک می‌شوند." }, { en: "She shared an inspiring video today.", fa: "او امروز یک ویدیوی الهام‌بخش به اشتراک گذاشت." }] },
      { word: "story", meaning: "استوری، داستان", en: "She put a short video on her story.", fa: "او یک ویدیوی کوتاه توی استوری‌اش گذاشت.", icon: "📖", examples: [{ en: "She put a short video on her story.", fa: "او یک ویدیوی کوتاه توی استوری‌اش گذاشت." }, { en: "Tell me the whole story from the start.", fa: "کل ماجرا را از اول برایم تعریف کن." }, { en: "I reacted to your story with a heart emoji.", fa: "به استوری‌ات با ایموجی قلب واکنش نشان دادم." }] },
      { word: "group", meaning: "گروه دوستانه، اکیپ", en: "Our study group meets at the library.", fa: "اکیپ درس خواندن ما در کتابخانه جمع می‌شوند.", icon: "👥", examples: [{ en: "Our study group meets at the library.", fa: "اکیپ درس خواندن ما در کتابخانه جمع می‌شوند." }, { en: "Join our gaming group this evening.", fa: "امروز عصر به گروه بازی ما ملحق شو." }, { en: "We took a funny group photo.", fa: "ما یک عکس دسته‌جمعی خنده‌دار گرفتیم." }] },
      { word: "music", meaning: "موسیقی، آهنگ", en: "I put my headphones on to listen to music.", fa: "هدفونم را می‌گذارم تا به موسیقی گوش بدهم.", icon: "🎧", examples: [{ en: "I put my headphones on to listen to music.", fa: "هدفونم را می‌گذارم تا به موسیقی گوش بدهم." }, { en: "Music helps me focus on my studies.", fa: "موسیقی به من کمک می‌کند روی درسم تمرکز کنم." }, { en: "What genre of music do you like?", fa: "چه سبک موسیقی‌ای دوست داری؟" }] },
      { word: "song", meaning: "ترانه، ترانه موردعلاقه", en: "This catchy song is stuck in my head.", fa: "این ترانه جذاب توی سرم گیر کرده است.", icon: "🎵", examples: [{ en: "This catchy song is stuck in my head.", fa: "این ترانه جذاب توی سرم گیر کرده است." }, { en: "Sing along to your favorite song.", fa: "همراه با ترانه موردعلاقه‌ات هم‌خوانی کن." }, { en: "She wrote a beautiful song on guitar.", fa: "او یک ترانه زیبا با گیتار ساخت." }] },
      { word: "dance", meaning: "رقصیدن، رقص", en: "We love to dance to energetic pop music.", fa: "ما عاشق رقصیدن با موسیقی پاپ پرانرژی هستیم.", icon: "💃", examples: [{ en: "We love to dance to energetic pop music.", fa: "ما عاشق رقصیدن با موسیقی پاپ پرانرژی هستیم." }, { en: "She learned a new dance move from the internet.", fa: "او یک حرکت رقص جدید از اینترنت یاد گرفت." }, { en: "Dancing is a great way to relieve stress.", fa: "رقصیدن روشی فوق‌العاده برای رفع استرس است." }] },
      { word: "game", meaning: "بازی ویدیویی، گیم", en: "Let us play a multiplayer video game.", fa: "بیا یک بازی ویدیویی چندنفره بازی کنیم.", icon: "🎮", examples: [{ en: "Let us play a multiplayer video game.", fa: "بیا یک بازی ویدیویی چندنفره بازی کنیم." }, { en: "He reached the final level in the game.", fa: "او به مرحله پایانی بازی رسید." }, { en: "Gaming with friends is super fun.", fa: "گیم زدن با دوستان فوق‌العاده لذت‌بخش است." }] },
      { word: "hobby", meaning: "سرگرمی، علاقه‌مندی", en: "Skateboarding is my favorite outdoor hobby.", fa: "اسکیت‌برد سرگرمی بیرونی موردعلاقه من است.", icon: "🛹", examples: [{ en: "Skateboarding is my favorite outdoor hobby.", fa: "اسکیت‌برد سرگرمی بیرونی موردعلاقه من است." }, { en: "Having a hobby helps you unwind.", fa: "داشتن یک سرگرمی کمکت می‌کند از خستگی دربیایی." }, { en: "Her main hobby is photography.", fa: "سرگرمی اصلی او عکاسی است." }] },
      { word: "movie", meaning: "فیلم سینمایی", en: "We are watching a scary movie tonight.", fa: "ما امشب داریم یک فیلم ترسناک می‌بینیم.", icon: "🎬", examples: [{ en: "We are watching a scary movie tonight.", fa: "ما امشب داریم یک فیلم ترسناک می‌بینیم." }, { en: "Grab some popcorn and enjoy the movie.", fa: "کمی پاپ‌کورن بردار و از فیلم لذت ببر." }, { en: "That superhero movie was fantastic.", fa: "آن فیلم ابرقهرمانی فوق‌العاده بود." }] },
      { word: "photo", meaning: "عکس، سلفی", en: "Let us take a quick selfie photo together.", fa: "بیا با هم یک عکس سلفی سریع بگیریم.", icon: "📸", examples: [{ en: "Let us take a quick selfie photo together.", fa: "بیا با هم یک عکس سلفی سریع بگیریم." }, { en: "I put cute stickers on my photo.", fa: "روی عکسم استیکرهای بامزه زدم." }, { en: "This old photo brings back good memories.", fa: "این عکس قدیمی خاطرات خوبی را زنده می‌کند." }] },
      { word: "video", meaning: "ویدیو، کلیپ", en: "I watched a short dance video on my feed.", fa: "یک ویدیوی رقص کوتاه در فیدم تماشا کردم.", icon: "📹", examples: [{ en: "I watched a short dance video on my feed.", fa: "یک ویدیوی رقص کوتاه در فیدم تماشا کردم." }, { en: "He edits his video clips on his phone.", fa: "او کلیپ‌های ویدیویی‌اش را روی گوشی ادیت می‌کند." }, { en: "This tutorial video is super helpful.", fa: "این ویدیوی آموزشی بسیار کاربردی است." }] },
      { word: "drawing", meaning: "نقاشی، طراحی", en: "Drawing in my room gives me peace of mind.", fa: "نقاشی کشیدن توی اتاقم به من آرامش خیال می‌دهد.", icon: "✏️", examples: [{ en: "Drawing in my room gives me peace of mind.", fa: "نقاشی کشیدن توی اتاقم به من آرامش خیال می‌دهد." }, { en: "She showed me her anime drawing.", fa: "او نقاشی انیمه‌ای‌اش را به من نشان داد." }, { en: "I love drawing with colored pencils.", fa: "عاشق نقاشی با مدادرنگی هستم." }] },
      { word: "style", meaning: "استایل، تیپ", en: "Wear whatever matches your personal style.", fa: "هر چیزی را که با استایل شخصی‌ات هماهنگ است بپوش.", icon: "✨", examples: [{ en: "Wear whatever matches your personal style.", fa: "هر چیزی را که با استایل شخصی‌ات هماهنگ است بپوش." }, { en: "She has a trendy vintage style.", fa: "او یک استایل وینتیج و مد روز دارد." }, { en: "Develop your own unique style.", fa: "استایل خاص و منحصر‌به‌فرد خودت را بساز." }] },
      { word: "shoes", meaning: "کفش، کتانی", en: "My comfortable shoes are great for walking.", fa: "کفش‌های راحتم برای پیاده‌روی عالی هستند.", icon: "👟", examples: [{ en: "My comfortable shoes are great for walking.", fa: "کفش‌های راحتم برای پیاده‌روی عالی هستند." }, { en: "He tied the laces on his running shoes.", fa: "او بندهای کتانی ورزشی‌اش را بست." }, { en: "Keep your shoes clean and tidy.", fa: "کفش‌هایت را تمیز و مرتب نگه دار." }] },
      { word: "clothes", meaning: "لباس، پوشاک", en: "I pick my school clothes the night before.", fa: "من لباس‌های مدرسه‌ام را از شب قبل انتخاب می‌کنم.", icon: "👕", examples: [{ en: "I pick my school clothes the night before.", fa: "من لباس‌های مدرسه‌ام را از شب قبل انتخاب می‌کنم." }, { en: "Baggy clothes are very popular right now.", fa: "لباس‌های اورسایز در حال حاضر خیلی محبوب هستند." }, { en: "Hang your clothes in the closet.", fa: "لباس‌هایت را در کمد آویزان کن." }] },
      { word: "jacket", meaning: "کاپشن، ژاکت", en: "Grab your warm jacket; it is chilly outside.", fa: "کاپشن گرمت را بردار؛ بیرون هوا خنک است.", icon: "🧥", examples: [{ en: "Grab your warm jacket; it is chilly outside.", fa: "کاپشن گرمت را بردار؛ بیرون هوا خنک است." }, { en: "She wears an oversized denim jacket.", fa: "او یک ژاکت جین اورسایز می‌پوشد." }, { en: "Zip up your jacket before going out.", fa: "قبل از بیرون رفتن زیپ کاپشنت را ببند." }] },
      { word: "backpack", meaning: "کوله‌پشتی", en: "My backpack is full of notebooks and pens.", fa: "کوله‌پشتی‌ام پر از دفترچه و خودکار است.", icon: "🎒", examples: [{ en: "My backpack is full of notebooks and pens.", fa: "کوله‌پشتی‌ام پر از دفترچه و خودکار است." }, { en: "Do not carry a backpack that is too heavy.", fa: "کوله‌پشتی خیلی سنگین را حمل نکن." }, { en: "She decorated her backpack with cute pins.", fa: "او کوله‌پشتی‌اش را با پیکسل‌های بامزه تزیین کرد." }] },
      { word: "classmate", meaning: "هم‌کلاسی", en: "My classmate helped me solve this math problem.", fa: "هم‌کلاسی‌ام به من کمک کرد این مسئله ریاضی را حل کنم.", icon: "🧑‍🎓", examples: [{ en: "My classmate helped me solve this math problem.", fa: "هم‌کلاسی‌ام به من کمک کرد این مسئله ریاضی را حل کنم." }, { en: "We sit next to each other as classmates.", fa: "ما به عنوان هم‌کلاسی کنار هم می‌نشینیم." }, { en: "All my classmates are very supportive.", fa: "تمام هم‌کلاسی‌هایم خیلی حامی و همراه هستند." }] },
      { word: "homework", meaning: "مشق، تکلیف مدرسه", en: "Finish your homework before turning on games.", fa: "تکالیفت را قبل از روشن کردن بازی‌ها تمام کن.", icon: "📝", examples: [{ en: "Finish your homework before turning on games.", fa: "تکالیفت را قبل از روشن کردن بازی‌ها تمام کن." }, { en: "I do my homework right after lunch.", fa: "من تکالیفم را درست بعد از ناهار انجام می‌دهم." }, { en: "We have science homework due on Monday.", fa: "برای دوشنبه مشق علوم داریم." }] },
      { word: "grade", meaning: "نمره، کارنامه", en: "She got a good grade on her English test.", fa: "او در آزمون زبان انگلیسی‌اش نمره خوبی گرفت.", icon: "💯", examples: [{ en: "She got a good grade on her English test.", fa: "او در آزمون زبان انگلیسی‌اش نمره خوبی گرفت." }, { en: "Studying every day improves your grades.", fa: "درس خواندن روزانه نمراتت را بهتر می‌کند." }, { en: "I am proud of my final grade.", fa: "من به نمره نهایی‌ام افتخار می‌کنم." }] },
      { word: "dream", meaning: "آرزو، رویا", en: "Work hard to achieve your dream.", fa: "برای رسیدن به رویایت سخت تلاش کن.", icon: "💭", examples: [{ en: "Work hard to achieve your dream.", fa: "برای رسیدن به رویایت سخت تلاش کن." }, { en: "My dream is to travel around the world.", fa: "رویای من سفر به دور دنیا است." }, { en: "Never let anyone dismiss your dream.", fa: "هرگز نگذار کسی رویایت را نادیده بگیرد." }] },
      { word: "goal", meaning: "هدف، مقصود", en: "Set a small goal for yourself every day.", fa: "هر روز برای خودت یک هدف کوچک تعیین کن.", icon: "🎯", examples: [{ en: "Set a small goal for yourself every day.", fa: "هر روز برای خودت یک هدف کوچک تعیین کن." }, { en: "Working step by step helps you reach your goal.", fa: "قدم‌به‌قدم پیش رفتن کمکت می‌کند به هدفت برسی." }, { en: "My main goal is to speak English well.", fa: "هدف اصلی من خوب صحبت کردن انگلیسی است." }] },
      {"word":"school","meaning":"مدرسه","en":"I meet my friends at school every morning.","fa":"من هر روز صبح دوستانم را در مدرسه می‌بینم.","icon":"🏫","examples":[{"en":"I meet my friends at school every morning.","fa":"من هر روز صبح دوستانم را در مدرسه می‌بینم."},{"en":"Our school has a big sports yard.","fa":"مدرسه ما یک حیاط ورزشی بزرگ دارد."},{"en":"After school, we usually study together.","fa":"بعد از مدرسه، معمولاً با هم درس می‌خوانیم."}]},
      {"word":"lesson","meaning":"درس، کلاس درس","en":"Today history lesson was very interesting.","fa":"درس تاریخ امروز خیلی جالب بود.","icon":"📖","examples":[{"en":"Today history lesson was very interesting.","fa":"درس تاریخ امروز خیلی جالب بود."},{"en":"I take piano lessons on Thursdays.","fa":"من پنج‌شنبه‌ها کلاس پیانو می‌روم."},{"en":"Listen carefully during the science lesson.","fa":"در طول درس علوم با دقت گوش بده."}]},
      {"word":"teacher","meaning":"معلم، دبیر","en":"Our art teacher encourages us to be creative.","fa":"معلم هنر ما تشویقمان می‌کند خلاق باشیم.","icon":"👩‍🏫","examples":[{"en":"Our art teacher encourages us to be creative.","fa":"معلم هنر ما تشویقمان می‌کند خلاق باشیم."},{"en":"Ask your English teacher if you have questions.","fa":"اگر سوالی داری از دبیر زبان انگلیسیت بپرس."},{"en":"The teacher explained the formula simply.","fa":"معلم فرمول را به سادگی توضیح داد."}]},
      {"word":"student","meaning":"دانش‌آموز، محصل","en":"She is a hard-working and popular student.","fa":"او یک دانش‌آموز کوشا و محبوب است.","icon":"🧑‍🎓","examples":[{"en":"She is a hard-working and popular student.","fa":"او یک دانش‌آموز کوشا و محبوب است."},{"en":"New students introduced themselves in class.","fa":"دانش‌آموزان جدید در کلاس خودشان را معرفی کردند."},{"en":"Every student in our team did a great job.","fa":"تمام دانش‌آموزان تیم ما کارشان را عالی انجام دادند."}]},
      {"word":"pencil","meaning":"مداد","en":"Can I borrow your pencil for the drawing class?","fa":"می‌توانم مدادت را برای کلاس نقاشی قرض بگیرم؟","icon":"✏️","examples":[{"en":"Can I borrow your pencil for the drawing class?","fa":"می‌توانم مدادت را برای کلاس نقاشی قرض بگیرم؟"},{"en":"Sharpen your pencil before the test starts.","fa":"قبل از شروع آزمون مدادت را بتراش."},{"en":"I sketched a cool anime character with a pencil.","fa":"با یک مداد یک شخصیت باحال انیمه کشیدم."}]},
      {"word":"notebook","meaning":"دفترچه، دفتر یادداشت","en":"I write all my ideas in this notebook.","fa":"من تمام ایده‌هایم را در این دفترچه می‌نویسم.","icon":"📓","examples":[{"en":"I write all my ideas in this notebook.","fa":"من تمام ایده‌هایم را در این دفترچه می‌نویسم."},{"en":"She decorated her school notebook with colorful stickers.","fa":"او دفتر مدرسه خود را با برچسب‌های رنگارنگ تزیین کرد."},{"en":"Keep your notes organized in one notebook.","fa":"یادداشت‌هایت را در یک دفتر مرتب نگه دار."}]},
      {"word":"desk","meaning":"میز تحریر، نیمکت مدرسه","en":"I like sitting at the front desk in class.","fa":"من دوست دارم روی نیمکت جلوی کلاس بنشینم.","icon":"🪑","examples":[{"en":"I like sitting at the front desk in class.","fa":"من دوست دارم روی نیمکت جلوی کلاس بنشینم."},{"en":"Clean your study desk before doing homework.","fa":"قبل از انجام تکالیف میز مطالعه‌ات را تمیز کن."},{"en":"He placed his laptop and books on the desk.","fa":"او لپ‌تاپ و کتاب‌هایش را روی میز گذاشت."}]},
      {"word":"exam","meaning":"امتحان، آزمون","en":"We have a biology exam tomorrow morning.","fa":"ما فردا صبح امتحان زیست‌شناسی داریم.","icon":"📝","examples":[{"en":"We have a biology exam tomorrow morning.","fa":"ما فردا صبح امتحان زیست‌شناسی داریم."},{"en":"Stay calm and do your best in the exam.","fa":"آرام باش و در امتحان تمام تلاشت را بکن."},{"en":"She prepared for the final exam for weeks.","fa":"او هفته‌ها برای امتحان نهایی آماده شد."}]},
      {"word":"quiz","meaning":"کوئیز، آزمونک","en":"Our group got top score in the online quiz.","fa":"گروه ما در کوئیز آنلاین بالاترین امتیاز را گرفت.","icon":"❓","examples":[{"en":"Our group got top score in the online quiz.","fa":"گروه ما در کوئیز آنلاین بالاترین امتیاز را گرفت."},{"en":"We take a quick vocabulary quiz every Friday.","fa":"ما هر جمعه یک آزمونک سریع لغت می‌دهیم."},{"en":"Playing trivia quizzes with friends is super fun.","fa":"بازی کردن کوئیزهای اطلاعات عمومی با دوستان خیلی سرگرم‌کننده است."}]},
      {"word":"library","meaning":"کتابخانه","en":"We study quietly together at the city library.","fa":"ما در سکوت با هم در کتابخانه شهر درس می‌خوانیم.","icon":"📚","examples":[{"en":"We study quietly together at the city library.","fa":"ما در سکوت با هم در کتابخانه شهر درس می‌خوانیم."},{"en":"You can borrow graphic novels from the library.","fa":"می‌توانی رمان‌های مصور را از کتابخانه امانت بگیری."},{"en":"The school library has cozy reading corners.","fa":"کتابخانه مدرسه گوشه‌های دنجی برای مطالعه دارد."}]},
      {"word":"phone","meaning":"گوشی، موبایل","en":"Put your phone on silent during class.","fa":"در طول کلاس گوشیت را بی‌صدا کن.","icon":"📱","examples":[{"en":"Put your phone on silent during class.","fa":"در طول کلاس گوشیت را بی‌صدا کن."},{"en":"I use my phone to listen to podcasts.","fa":"من برای گوش دادن به پادکست از گوشیم استفاده می‌کنم."},{"en":"She checked her phone for notifications.","fa":"او گوشیش را برای دیدن اعلان‌ها چک کرد."}]},
      {"word":"app","meaning":"اپلیکیشن، برنامه گوشی","en":"This language app helps me practice English daily.","fa":"این اپلیکیشن زبان کمکم می‌کند روزانه انگلیسی تمرین کنم.","icon":"📲","examples":[{"en":"This language app helps me practice English daily.","fa":"این اپلیکیشن زبان کمکم می‌کند روزانه انگلیسی تمرین کنم."},{"en":"Download the music app to create custom playlists.","fa":"اپلیکیشن موسیقی را دانلود کن تا پلی‌لیست‌های دلخواه بسازی."},{"en":"Which editing app do you use for your photos?","fa":"برای عکس‌هایت از چه اپلیکیشن ویرایشی استفاده می‌کنی؟"}]},
      {"word":"screen","meaning":"صفحه نمایش، اسکرین","en":"Take a break after staring at the screen.","fa":"بعد از زل زدن به صفحه نمایش کمی استراحت کن.","icon":"🖥️","examples":[{"en":"Take a break after staring at the screen.","fa":"بعد از زل زدن به صفحه نمایش کمی استراحت کن."},{"en":"The phone screen has a protective glass.","fa":"صفحه نمایش گوشی گلس محافظ دارد."},{"en":"We watched the gameplay on a big screen.","fa":"ما گیم‌پلی را روی یک صفحه نمایش بزرگ تماشا کردیم."}]},
      {"word":"battery","meaning":"باتری، شارژ باتری","en":"My phone battery is low, do you have a charger?","fa":"باتری گوشیم ضعیف است، شارژر داری؟","icon":"🔋","examples":[{"en":"My phone battery is low, do you have a charger?","fa":"باتری گوشیم ضعیف است، شارژر داری؟"},{"en":"A portable power bank keeps your battery full.","fa":"یک پاوربانک قابل حمل باتریت را پر نگه می‌دارد."},{"en":"Turn on power saving mode to save battery.","fa":"حالت صرفه‌جویی را روشن کن تا باتری ذخیره شود."}]},
      {"word":"camera","meaning":"دوربین","en":"Smile at the camera for our group photo!","fa":"برای عکس دسته‌جمعی‌مان به دوربین لبخند بزن!","icon":"📷","examples":[{"en":"Smile at the camera for our group photo!","fa":"برای عکس دسته‌جمعی‌مان به دوربین لبخند بزن!"},{"en":"Her new phone has an awesome camera.","fa":"گوشی جدیدش دوربین معرکه‌ای دارد."},{"en":"He enjoys capturing street life on his camera.","fa":"او از ثبت زندگی خیابانی با دوربینش لذت می‌برد."}]},
      {"word":"stream","meaning":"استریم کردن، پخش زنده","en":"My favorite gamer streams live every weekend.","fa":"گیمر موردعلاقه‌ام هر آخر هفته استریم زنده می‌گذارد.","icon":"🔴","examples":[{"en":"My favorite gamer streams live every weekend.","fa":"گیمر موردعلاقه‌ام هر آخر هفته استریم زنده می‌گذارد."},{"en":"We stream our favorite teen series online.","fa":"ما سریال‌های نوجوانانه موردعلاقه‌مان را آنلاین استریم می‌کنیم."},{"en":"Many teens stream music while studying.","fa":"خیلی از نوجوانان موقع درس خواندن موسیقی استریم می‌کنند."}]},
      {"word":"comment","meaning":"کامنت، نظر دادن","en":"Leave a nice comment on your friend post.","fa":"روی پست دوستت یک کامنت قشنگ بگذار.","icon":"💬","examples":[{"en":"Leave a nice comment on your friend post.","fa":"روی پست دوستت یک کامنت قشنگ بگذار."},{"en":"Her video got hundreds of positive comments.","fa":"ویدیوی او صدها کامنت مثبت دریافت کرد."},{"en":"He commented with funny laughing emojis.","fa":"او با ایموجی‌های خنده‌دار نظر داد."}]},
      {"word":"profile","meaning":"پروفایل، حساب کاربری","en":"She changed her profile picture to a cute cat.","fa":"او عکس پروفایلش را به یک گربه بامزه تغییر داد.","icon":"👤","examples":[{"en":"She changed her profile picture to a cute cat.","fa":"او عکس پروفایلش را به یک گربه بامزه تغییر داد."},{"en":"Write an inspiring bio for your profile.","fa":"یک بیوگرافی الهام‌بخش برای پروفایلت بنویس."},{"en":"Keep your personal profile safe and private.","fa":"پروفایل شخصی‌ات را امن و خصوصی نگه دار."}]},
      {"word":"pizza","meaning":"پیتزا","en":"We ordered cheesy pizza for our movie night.","fa":"ما برای شب فیلم‌دیدنمان پیتزای پرپنیر سفارش دادیم.","icon":"🍕","examples":[{"en":"We ordered cheesy pizza for our movie night.","fa":"ما برای شب فیلم‌دیدنمان پیتزای پرپنیر سفارش دادیم."},{"en":"Everyone loves eating hot pizza with friends.","fa":"همه عاشق خوردن پیتزای داغ با دوستان هستند."},{"en":"My favorite pizza topping is extra mushrooms.","fa":"تاپینگ پیتزای موردعلاقه من قارچ اضافه است."}]},
      {"word":"burger","meaning":"همبرگر، برگر","en":"Let grab a burger and fries after school.","fa":"بیا بعد از مدرسه برویم یک برگر و سیب‌زمینی بخوریم.","icon":"🍔","examples":[{"en":"Let grab a burger and fries after school.","fa":"بیا بعد از مدرسه برویم یک برگر و سیب‌زمینی بخوریم."},{"en":"This cafe makes delicious homemade burgers.","fa":"این کافه همبرگرهای خانگی خوشمزه‌ای درست می‌کند."},{"en":"He ordered a double cheese burger for lunch.","fa":"او برای ناهار یک دابل چیزبرگر سفارش داد."}]},
      {"word":"snack","meaning":"میان‌وعده، خوراکی","en":"I always pack a healthy snack in my backpack.","fa":"من همیشه یک خوراکی سالم در کوله‌پشتی‌ام می‌گذارم.","icon":"🥨","examples":[{"en":"I always pack a healthy snack in my backpack.","fa":"من همیشه یک خوراکی سالم در کوله‌پشتی‌ام می‌گذارم."},{"en":"We shared crunchy snacks while playing games.","fa":"موقع بازی کردن با هم خوراکی‌های ترد خوردیم."},{"en":"Fruit slices make an awesome afternoon snack.","fa":"تکه‌های میوه یک میان‌وعده عصرانه عالی هستند."}]},
      {"word":"sandwich","meaning":"ساندویچ","en":"She made a delicious turkey sandwich for lunch.","fa":"او برای ناهار یک ساندویچ بوقلمون خوشمزه درست کرد.","icon":"🥪","examples":[{"en":"She made a delicious turkey sandwich for lunch.","fa":"او برای ناهار یک ساندویچ بوقلمون خوشمزه درست کرد."},{"en":"We took simple sandwiches on our weekend hike.","fa":"ما در پیاده‌روی آخر هفته‌مان ساندویچ‌های ساده بردیم."},{"en":"A grilled cheese sandwich tastes amazing when warm.","fa":"ساندویچ پنیر تست‌شده وقتی گرم است طعم فوق‌العاده‌ای دارد."}]},
      {"word":"chocolate","meaning":"شکلات","en":"Sharing chocolate with friends always makes me happy.","fa":"تقسیم کردن شکلات با دوستان همیشه من را خوشحال می‌کند.","icon":"🍫","examples":[{"en":"Sharing chocolate with friends always makes me happy.","fa":"تقسیم کردن شکلات با دوستان همیشه من را خوشحال می‌کند."},{"en":"She gave me a sweet chocolate bar for my birthday.","fa":"او برای تولدم یک تخته شکلات شیرین به من داد."},{"en":"Hot chocolate is perfect on a chilly winter day.","fa":"شکلات داغ در یک روز سرد زمستانی عالی است."}]},
      {"word":"soda","meaning":"نوشابه گازدار","en":"Cold soda is refreshing on a hot sunny day.","fa":"نوشابه خنک در یک روز آفتابی و گرم خنک‌کننده است.","icon":"🥤","examples":[{"en":"Cold soda is refreshing on a hot sunny day.","fa":"نوشابه خنک در یک روز آفتابی و گرم خنک‌کننده است."},{"en":"I try to drink more water instead of soda.","fa":"سعی می‌کنم به جای نوشابه بیشتر آب بنوشم."},{"en":"We opened a can of orange soda at the picnic.","fa":"ما در پیک‌نیک یک قوطی نوشابه پرتقالی باز کردیم."}]},
      {"word":"juice","meaning":"آب‌میوه","en":"Fresh apple juice gives me good morning energy.","fa":"آب‌سیب تازه به من انرژی صبحگاهی خوبی می‌دهد.","icon":"🧃","examples":[{"en":"Fresh apple juice gives me good morning energy.","fa":"آب‌سیب تازه به من انرژی صبحگاهی خوبی می‌دهد."},{"en":"She ordered a glass of cool berry juice.","fa":"او یک لیوان آب‌میوه تمشک خنک سفارش داد."},{"en":"Pack a juice box for the school field trip.","fa":"یک آب‌میوه پاکتی برای اردوی مدرسه بردار."}]},
      {"word":"cookie","meaning":"کوکی، بیسکویت","en":"My friend baked warm chocolate chip cookies.","fa":"دوستم کوکی‌های شکلاتی گرم پخت.","icon":"🍪","examples":[{"en":"My friend baked warm chocolate chip cookies.","fa":"دوستم کوکی‌های شکلاتی گرم پخت."},{"en":"Two crispy cookies go great with milk.","fa":"دو تا کوکی ترد با شیر خیلی می‌چسبد."},{"en":"We shared a box of sweet cookies in the park.","fa":"ما یک جعبه کوکی شیرین را در پارک با هم تقسیم کردیم."}]},
      {"word":"sport","meaning":"ورزش","en":"Playing sport keeps teens healthy and energetic.","fa":"ورزش کردن نوجوانان را سالم و پرانرژی نگه می‌دارد.","icon":"⚽","examples":[{"en":"Playing sport keeps teens healthy and energetic.","fa":"ورزش کردن نوجوانان را سالم و پرانرژی نگه می‌دارد."},{"en":"What is your favorite weekend sport?","fa":"ورزش آخر هفته موردعلاقه‌ات چیست؟"},{"en":"Our school offers many outdoor sports clubs.","fa":"مدرسه ما باشگاه‌های ورزشی متنوعی در فضای باز ارائه می‌دهد."}]},
      {"word":"football","meaning":"فوتبال","en":"We play football in the yard after class.","fa":"ما بعد از کلاس در حیاط فوتبال بازی می‌کنیم.","icon":"⚽","examples":[{"en":"We play football in the yard after class.","fa":"ما بعد از کلاس در حیاط فوتبال بازی می‌کنیم."},{"en":"Watching live football with friends is thrilling.","fa":"تماشای زنده فوتبال با دوستان بسیار هیجان‌انگیز است."},{"en":"He wears his team football jersey proudly.","fa":"او پیراهن فوتبالی تیمش را با افتخار می‌پوشد."}]},
      {"word":"ball","meaning":"توپ","en":"Pass the ball quickly to your teammate.","fa":"توپ را سریع به هم‌تیمی‌ات پاس بده.","icon":"🏀","examples":[{"en":"Pass the ball quickly to your teammate.","fa":"توپ را سریع به هم‌تیمی‌ات پاس بده."},{"en":"We kicked the ball around in the park.","fa":"ما در پارک با توپ پاس‌کاری کردیم."},{"en":"Do you have an extra basketball for practice?","fa":"برای تمرین یک توپ بسکتبال اضافه داری؟"}]},
      {"word":"team","meaning":"تیم، گروه رفاقتی/ورزشی","en":"Our school volleyball team won the trophy.","fa":"تیم والیبال مدرسه ما جام قهرمانی را برد.","icon":"👥","examples":[{"en":"Our school volleyball team won the trophy.","fa":"تیم والیبال مدرسه ما جام قهرمانی را برد."},{"en":"We work as a supportive team on every project.","fa":"ما در هر پروژه به عنوان یک تیم همراه کار می‌کنیم."},{"en":"Cheer loudly for our friendly home team!","fa":"تیم خودی و دوستانه‌مان را با صدای بلند تشویق کنید!"}]},
      {"word":"match","meaning":"مسابقه، رقابت ورزشی","en":"Are you coming to watch Friday big match?","fa":"آیا برای تماشای مسابقه بزرگ جمعه می‌آیی؟","icon":"🏆","examples":[{"en":"Are you coming to watch Friday big match?","fa":"آیا برای تماشای مسابقه بزرگ جمعه می‌آیی؟"},{"en":"It was an exciting match from start to finish.","fa":"از ابتدا تا انتها مسابقه هیجان‌انگیزی بود."},{"en":"Our school team played a fantastic match.","fa":"تیم مدرسه ما مسابقه‌ای فوق‌العاده برگزار کرد."}]},
      {"word":"skate","meaning":"اسکیت‌سواری کردن، اسکیت","en":"Many teens skate at the local skatepark.","fa":"بسیاری از نوجوانان در پیست اسکیت محله اسکیت‌سواری می‌کنند.","icon":"🛹","examples":[{"en":"Many teens skate at the local skatepark.","fa":"بسیاری از نوجوانان در پیست اسکیت محله اسکیت‌سواری می‌کنند."},{"en":"He learned how to skate backward this summer.","fa":"او تابستان امسال یاد گرفت چطور رو به عقب اسکیت کند."},{"en":"Always wear knee pads when you skate.","fa":"وقتی اسکیت‌سواری می‌کنی همیشه زانوبند ببند."}]},
      {"word":"run","meaning":"دویدن","en":"I like to run in the park to clear my mind.","fa":"من دوست دارم در پارک بدوم تا فکرم آزاد شود.","icon":"🏃","examples":[{"en":"I like to run in the park to clear my mind.","fa":"من دوست دارم در پارک بدوم تا فکرم آزاد شود."},{"en":"We ran fast to catch the morning school bus.","fa":"ما سریع دویدیم تا به اتوبوس مدرسه صبح برسیم."},{"en":"Running with upbeat music makes you feel alive.","fa":"دویدن با آهنگ‌های پرانرژی حس شادابی به آدم می‌دهد."}]},
      {"word":"swim","meaning":"شنا کردن","en":"We swim in the community pool on hot afternoons.","fa":"ما بعدازظهرهای گرم در استخر عمومی شنا می‌کنیم.","icon":"🏊","examples":[{"en":"We swim in the community pool on hot afternoons.","fa":"ما بعدازظهرهای گرم در استخر عمومی شنا می‌کنیم."},{"en":"Swimming is a great exercise for teens.","fa":"شنا یک ورزش فوق‌العاده برای نوجوانان است."},{"en":"Can you swim across the whole pool?","fa":"می‌توانی کل عرض استخر را شنا کنی؟"}]},
      {"word":"friend","meaning":"دوست، رفیق","en":"A real friend always listens when you need to talk.","fa":"یک دوست واقعی همیشه وقتی نیاز به صحبت داری گوش می‌دهد.","icon":"🤝","examples":[{"en":"A real friend always listens when you need to talk.","fa":"یک دوست واقعی همیشه وقتی نیاز به صحبت داری گوش می‌دهد."},{"en":"I spent the whole Saturday with my school friends.","fa":"کل شنبه را با دوستان مدرسه‌ام گذراندم."},{"en":"Making new friends makes school life exciting.","fa":"پیدا کردن دوستان جدید زندگی مدرسه‌ای را هیجان‌انگیز می‌کند."}]},
      {"word":"bestie","meaning":"صمیمی‌ترین دوست، رفیق فاب","en":"My bestie and I share all our secrets.","fa":"من و رفیق فابم تمام رازهایمان را با هم در میان می‌گذاریم.","icon":"👯","examples":[{"en":"My bestie and I share all our secrets.","fa":"من و رفیق فابم تمام رازهایمان را با هم در میان می‌گذاریم."},{"en":"She took a funny selfie with her bestie.","fa":"او با صمیمی‌ترین دوستش یک سلفی خنده‌دار گرفت."},{"en":"I made a handmade bracelet for my bestie.","fa":"برای صمیمی‌ترین دوستم یک دستبند دست‌ساز درست کردم."}]},
      {"word":"family","meaning":"خانواده","en":"We eat dinner together as a family every night.","fa":"ما هر شب خانوادگی با هم شام می‌خوریم.","icon":"👨‍👩‍👧‍👦","examples":[{"en":"We eat dinner together as a family every night.","fa":"ما هر شب خانوادگی با هم شام می‌خوریم."},{"en":"Family support gives me confidence to grow.","fa":"حمایت خانواده به من اعتمادبه‌نفس رشد می‌دهد."},{"en":"Our family loves going on weekend road trips.","fa":"خانواده ما عاشق رفتن به سفرهای جاده‌ای آخر هفته است."}]},
      {"word":"parent","meaning":"والد، پدر و مادر","en":"Talk to your parents when you feel overwhelmed.","fa":"وقتی احساس فشار می‌کنی با والدینت صحبت کن.","icon":"🧑‍🤝‍🧑","examples":[{"en":"Talk to your parents when you feel overwhelmed.","fa":"وقتی احساس فشار می‌کنی با والدینت صحبت کن."},{"en":"My parents attended our school music concert.","fa":"والدینم در کنسرت موسیقی مدرسه ما شرکت کردند."},{"en":"Show appreciation for your parents every day.","fa":"هر روز از پدر و مادرت قدردانی کن."}]},
      {"word":"sister","meaning":"خواهر","en":"My older sister gives me great fashion advice.","fa":"خواهر بزرگترم مشاوره‌های مد و استایل فوق‌العاده‌ای به من می‌دهد.","icon":"👧","examples":[{"en":"My older sister gives me great fashion advice.","fa":"خواهر بزرگترم مشاوره‌های مد و استایل فوق‌العاده‌ای به من می‌دهد."},{"en":"I share a bedroom with my younger sister.","fa":"من با خواهر کوچکترم در یک اتاق مشترک هستیم."},{"en":"My sister and I watched funny animal videos together.","fa":"من و خواهرم با هم ویدیوهای خنده‌دار حیوانات دیدیم."}]},
      {"word":"brother","meaning":"برادر","en":"My brother plays video games with me after school.","fa":"برادرم بعد از مدرسه با من بازی ویدیویی می‌کند.","icon":"👦","examples":[{"en":"My brother plays video games with me after school.","fa":"برادرم بعد از مدرسه با من بازی ویدیویی می‌کند."},{"en":"He taught his younger brother how to ride a bike.","fa":"او به برادر کوچکترش دوچرخه‌سواری یاد داد."},{"en":"My brother helped me fix my skateboard wheels.","fa":"برادرم کمکم کرد چرخ‌های اسکیت‌بوردم را تعمیر کنم."}]},
      {"word":"cousin","meaning":"پسرعمو، دخترعمو، فامیل هم‌سن","en":"My cousin is visiting us during the spring break.","fa":"پسرعمویم در تعطیلات بهار به دیدن ما می‌آید.","icon":"🧒","examples":[{"en":"My cousin is visiting us during the spring break.","fa":"پسرعمویم در تعطیلات بهار به دیدن ما می‌آید."},{"en":"I have a lot of fun whenever my cousins get together.","fa":"هر وقت با دخترعموها و پسرعموهایم دور هم جمع می‌شویم خیلی خوش می‌گذرد."},{"en":"She texted her cousin about the upcoming party.","fa":"او درباره مهمانی پیش رو به دخترخاله‌اش پیام داد."}]},
      {"word":"neighbor","meaning":"همسایه","en":"Our friendly neighbor has a playful puppy.","fa":"همسایه مهربان ما یک توله‌سگ بازیگوش دارد.","icon":"🏡","examples":[{"en":"Our friendly neighbor has a playful puppy.","fa":"همسایه مهربان ما یک توله‌سگ بازیگوش دارد."},{"en":"We said hello to our neighbors on our walk.","fa":"در پیاده‌روی‌مان به همسایه‌هایمان سلام کردیم."},{"en":"The teen next door is a great neighbor.","fa":"نوجوان خانه کناری همسایه خیلی خوبی است."}]},
      {"word":"alarm","meaning":"آلارم، زنگ بیداری","en":"Set your morning alarm so you are not late for school.","fa":"زنگ بیداری صبح را تنظیم کن تا برای مدرسه دیرت نشود.","icon":"⏰","examples":[{"en":"Set your morning alarm so you are not late for school.","fa":"زنگ بیداری صبح را تنظیم کن تا برای مدرسه دیرت نشود."},{"en":"I woke up right before my alarm went off.","fa":"درست قبل از به صدا درآمدن آلارم از خواب بیدار شدم."},{"en":"Choose a pleasant sound for your daily alarm.","fa":"یک صدای دلنشین برای آلارم روزانه‌ات انتخاب کن."}]},
      {"word":"sleep","meaning":"خوابیدن، خواب","en":"Teens need enough sleep to stay sharp and energetic.","fa":"نوجوانان برای سرحال و پرانرژی ماندن به خواب کافی نیاز دارند.","icon":"😴","examples":[{"en":"Teens need enough sleep to stay sharp and energetic.","fa":"نوجوانان برای سرحال و پرانرژی ماندن به خواب کافی نیاز دارند."},{"en":"I try to sleep at least eight hours every night.","fa":"سعی می‌کنم هر شب حداقل هشت ساعت بخوابم."},{"en":"Good sleep improves your mood in the morning.","fa":"خواب خوب حال‌وهوای صبحت را بهتر می‌کند."}]},
      {"word":"wake","meaning":"بیدار شدن","en":"I wake up early on weekdays for school.","fa":"من روزهای هفته برای مدرسه زود بیدار می‌شوم.","icon":"🌅","examples":[{"en":"I wake up early on weekdays for school.","fa":"من روزهای هفته برای مدرسه زود بیدار می‌شوم."},{"en":"Waking up with music makes mornings easier.","fa":"بیدار شدن با موسیقی صبح‌ها را آسان‌تر می‌کند."},{"en":"What time do you usually wake up on Saturdays?","fa":"شنبه‌ها معمولاً چه ساعتی بیدار می‌شوی؟"}]},
      {"word":"party","meaning":"مهمانی، دورهمی شاد","en":"We danced all night at our classmate birthday party.","fa":"ما در مهمانی تولد هم‌کلاسی‌مان کل شب رقصیدیم.","icon":"🎉","examples":[{"en":"We danced all night at our classmate birthday party.","fa":"ما در مهمانی تولد هم‌کلاسی‌مان کل شب رقصیدیم."},{"en":"They organized a surprise party for their friend.","fa":"آن‌ها یک مهمانی غافلگیرکننده برای دوستشان ترتیب دادند."},{"en":"Music and snacks made the party super lively.","fa":"موسیقی و خوراکی‌ها مهمانی را فوق‌العاده سرزنده کردند."}]},
      {"word":"weekend","meaning":"آخر هفته","en":"I love chilling with friends on the weekend.","fa":"من عاشق وقت‌گذرانی و استراحت با دوستان در آخر هفته هستم.","icon":"🏖️","examples":[{"en":"I love chilling with friends on the weekend.","fa":"من عاشق وقت‌گذرانی و استراحت با دوستان در آخر هفته هستم."},{"en":"What are your fun plans for this weekend?","fa":"برنامه‌های سرگرم‌کننده‌ات برای این آخر هفته چیست؟"},{"en":"We watched movies throughout the whole weekend.","fa":"ما کل آخر هفته را فیلم تماشا کردیم."}]},
      {"word":"holiday","meaning":"تعطیلات","en":"Summer holiday is the best time for outdoor adventures.","fa":"تعطیلات تابستان بهترین زمان برای ماجراجویی در فضای باز است.","icon":"🌴","examples":[{"en":"Summer holiday is the best time for outdoor adventures.","fa":"تعطیلات تابستان بهترین زمان برای ماجراجویی در فضای باز است."},{"en":"We went camping with friends during the holiday.","fa":"ما در طول تعطیلات با دوستان به کمپینگ رفتیم."},{"en":"I plan to learn guitar over the winter holiday.","fa":"قصد دارم در تعطیلات زمستان گیتار یاد بگیرم."}]},
      {"word":"future","meaning":"آینده","en":"Think about your future and study well.","fa":"به آینده فکر کن و خوب درس بخوان.","icon":"🚀","examples":[{"en":"Think about your future and study well.","fa":"به آینده فکر کن و خوب درس بخوان."},{"en":"Learning new skills prepares you for the future.","fa":"یادگیری مهارت‌های جدید تو را برای آینده آماده می‌کند."},{"en":"We discussed our future career dreams together.","fa":"ما درباره آرزوهای شغلی آینده‌مان با هم گفتگو کردیم."}]},
      {"word":"habit","meaning":"عادت، روتین روزمره","en":"Reading every night is a wonderful healthy habit.","fa":"مطالعه هر شب یک عادت فوق‌العاده و سالم است.","icon":"🌱","examples":[{"en":"Reading every night is a wonderful healthy habit.","fa":"مطالعه هر شب یک عادت فوق‌العاده و سالم است."},{"en":"Building positive daily habits takes patience.","fa":"ایجاد عادت‌های مثبت روزانه نیاز به صبر دارد."},{"en":"Drinking water in the morning became my favorite habit.","fa":"آب نوشیدن در صبح تبدیل به عادت موردعلاقه من شد."}]},
      {"word":"hope","meaning":"امید، امیدوار بودن","en":"I hope we have a fun time this weekend.","fa":"امیدوارم این آخر هفته زمان سرگرم‌کننده‌ای داشته باشیم.","icon":"🌟","examples":[{"en":"I hope we have a fun time this weekend.","fa":"امیدوارم این آخر هفته زمان سرگرم‌کننده‌ای داشته باشیم."},{"en":"Never lose hope in your creative dreams.","fa":"هرگز امیدت را به رویاهای خلاقانه‌ات از دست نده."},{"en":"We all hope to pass the English test.","fa":"همه ما امیدواریم در آزمون انگلیسی قبول شویم."}]},
      {"word":"worry","meaning":"نگرانی، نگران بودن","en":"Do not worry about small mistakes in class.","fa":"درباره اشتباهات کوچک در کلاس نگران نباش.","icon":"😟","examples":[{"en":"Do not worry about small mistakes in class.","fa":"درباره اشتباهات کوچک در کلاس نگران نباش."},{"en":"Talking to a friend helps ease your worry.","fa":"صحبت کردن با یک دوست به کاهش نگرانی‌ات کمک می‌کند."},{"en":"She was worried about being late for school.","fa":"او نگران دیر رسیدن به مدرسه بود."}]},
      {"word":"afraid","meaning":"ترسیده، بیمناک","en":"Do not be afraid to ask questions in school.","fa":"از سوال پرسیدن در مدرسه نترس.","icon":"😨","examples":[{"en":"Do not be afraid to ask questions in school.","fa":"از سوال پرسیدن در مدرسه نترس."},{"en":"He was afraid of public speaking at first.","fa":"او در ابتدا از صحبت کردن در جمع می‌ترسید."},{"en":"My little brother is afraid of dark rooms.","fa":"برادر کوچکم از اتاق‌های تاریک می‌ترسد."}]},
      {"word":"lonely","meaning":"تنها، دلتنگ دوستان","en":"Call your bestie if you feel lonely at home.","fa":"اگر در خانه احساس تنهایی می‌کنی به رفیق صمیمی‌ات زنگ بزن.","icon":"🥺","examples":[{"en":"Call your bestie if you feel lonely at home.","fa":"اگر در خانه احساس تنهایی می‌کنی به رفیق صمیمی‌ات زنگ بزن."},{"en":"Joining a school club helps when you are lonely.","fa":"عضویت در یک کانون مدرسه‌ای وقتی تنها هستی کمک می‌کند."},{"en":"No student should feel lonely in our school.","fa":"هیچ دانش‌آموزی نباید در مدرسه ما احساس تنهایی کند."}]},
      {"word":"surprise","meaning":"غافلگیری، شگفت‌زده کردن","en":"We prepared a surprise gift for our teacher.","fa":"ما یک کادوی غافلگیرکننده برای معلممان آماده کردیم.","icon":"🎁","examples":[{"en":"We prepared a surprise gift for our teacher.","fa":"ما یک کادوی غافلگیرکننده برای معلممان آماده کردیم."},{"en":"Her sudden visit was a lovely surprise.","fa":"دیدار سرزده او یک غافلگیری دوست‌داشتنی بود."},{"en":"I love surprising my friends on their birthdays.","fa":"عاشق غافلگیر کردن دوستانم در روز تولدشان هستم."}]},
      {"word":"lucky","meaning":"خوش‌شانس، خوش‌اقبال","en":"I feel lucky to have such supportive friends.","fa":"احساس خوش‌شانسی می‌کنم که دوستان حامی و خوبی دارم.","icon":"🍀","examples":[{"en":"I feel lucky to have such supportive friends.","fa":"احساس خوش‌شانسی می‌کنم که دوستان حامی و خوبی دارم."},{"en":"He found a lucky four-leaf clover in the park.","fa":"او یک شبدر چهارپر خوش‌اقبال در پارک پیدا کرد."},{"en":"You are lucky that today class was canceled.","fa":"خوش‌شانسی که کلاس امروز لغو شد."}]},
      {"word":"patient","meaning":"صبور، باحوصله","en":"Be patient when learning a musical instrument.","fa":"موقع یادگیری یک ساز موسیقی صبور باش.","icon":"🧘","examples":[{"en":"Be patient when learning a musical instrument.","fa":"موقع یادگیری یک ساز موسیقی صبور باش."},{"en":"Our drawing teacher is very patient with beginners.","fa":"معلم نقاشی ما با مبتدی‌ها بسیار صبور است."},{"en":"Good results come to those who are patient.","fa":"نتایج خوب به سراغ افراد باحوصله و صبور می‌آیند."}]},
      {"word":"busy","meaning":"مشغول، پرمشغله","en":"I am busy with school homework this evening.","fa":"من امروز عصر مشغول مشق و تکالیف مدرسه هستم.","icon":"⏰","examples":[{"en":"I am busy with school homework this evening.","fa":"من امروز عصر مشغول مشق و تکالیف مدرسه هستم."},{"en":"She has a busy schedule on soccer practice days.","fa":"او در روزهای تمرین فوتبال برنامه شلوغی دارد."},{"en":"Are you busy or can we chat for five minutes?","fa":"مشغولی یا می‌توانیم پنج دقیقه گپ بزنیم؟"}]},
      {"word":"club","meaning":"باشگاه، کانون دانش‌آموزی","en":"I joined the school robotics club this semester.","fa":"من این ترم در کانون رباتیک مدرسه عضو شدم.","icon":"🏛️","examples":[{"en":"I joined the school robotics club this semester.","fa":"من این ترم در کانون رباتیک مدرسه عضو شدم."},{"en":"Our book club meets every Wednesday afternoon.","fa":"باشگاه کتاب ما هر چهارشنبه بعدازظهر تشکیل جلسه می‌دهد."},{"en":"Which school club do you want to choose?","fa":"کدام کانون مدرسه را می‌خواهی انتخاب کنی؟"}]},
      {"word":"practice","meaning":"تمرین کردن، تمرین","en":"Daily practice makes your English fluent.","fa":"تمرین روزانه انگلیسی تو را روان می‌کند.","icon":"🎯","examples":[{"en":"Daily practice makes your English fluent.","fa":"تمرین روزانه انگلیسی تو را روان می‌کند."},{"en":"We have basketball practice after school today.","fa":"امروز بعد از مدرسه تمرین بسکتبال داریم."},{"en":"Practice your pronunciation with a friend.","fa":"تلفظ خودت را با یک دوست تمرین کن."}]},
      {"word":"guitar","meaning":"گیتار","en":"He plays electric guitar in a youth rock band.","fa":"او در یک گروه راک جوانان گیتار الکتریک می‌زند.","icon":"🎸","examples":[{"en":"He plays electric guitar in a youth rock band.","fa":"او در یک گروه راک جوانان گیتار الکتریک می‌زند."},{"en":"I practice guitar chords in my room every day.","fa":"هر روز در اتاقم آکوردهای گیتار را تمرین می‌کنم."},{"en":"She sang a sweet song with her acoustic guitar.","fa":"او با گیتار آکوستیک خود آهنگ زیبایی خواند."}]},
      {"word":"piano","meaning":"پیانو","en":"She plays classic melodies on the school piano.","fa":"او ملودی‌های کلاسیک را با پیانوی مدرسه می‌نوازد.","icon":"🎹","examples":[{"en":"She plays classic melodies on the school piano.","fa":"او ملودی‌های کلاسیک را با پیانوی مدرسه می‌نوازد."},{"en":"Learning piano takes focus and steady practice.","fa":"یادگیری پیانو به تمرکز و تمرین پیوسته نیاز دارد."},{"en":"We listened to him play piano in the music room.","fa":"در اتاق موسیقی به پیانو نواختن او گوش دادیم."}]},
      {"word":"paint","meaning":"نقاشی کردن، رنگ‌آمیزی","en":"I like to paint colorful nature scenes on canvas.","fa":"من دوست دارم صحنه‌های رنگارنگ طبیعت را روی بوم نقاشی کنم.","icon":"🎨","examples":[{"en":"I like to paint colorful nature scenes on canvas.","fa":"من دوست دارم صحنه‌های رنگارنگ طبیعت را روی بوم نقاشی کنم."},{"en":"We painted posters for our school science fair.","fa":"ما برای نمایشگاه علوم مدرسه‌مان پوستر رنگ کردیم."},{"en":"Painting helps me relax after a long exam week.","fa":"نقاشی کشیدن بعد از یک هفته امتحان طولانی کمکم می‌کند آرام شوم."}]},
      {"word":"act","meaning":"نقش بازی کردن، بازیگری","en":"She loves to act in the school theater play.","fa":"او عاشق نقش بازی کردن در نمایش تئاتر مدرسه است.","icon":"🎭","examples":[{"en":"She loves to act in the school theater play.","fa":"او عاشق نقش بازی کردن در نمایش تئاتر مدرسه است."},{"en":"Acting helps teens build strong self-confidence.","fa":"بازیگری به نوجوانان کمک می‌کند اعتمادبه‌نفس قوی بسازند."},{"en":"He acted the funny character in our short film.","fa":"او در فیلم کوتاه ما نقش شخصیت بامزه را بازی کرد."}]},
      {"word":"concert","meaning":"کنسرت موسیقی","en":"We bought tickets to our favorite singer concert.","fa":"ما برای کنسرت خواننده موردعلاقه‌مان بلیت خریدیم.","icon":"🎤","examples":[{"en":"We bought tickets to our favorite singer concert.","fa":"ما برای کنسرت خواننده موردعلاقه‌مان بلیت خریدیم."},{"en":"The live concert atmosphere was full of energy.","fa":"جو کنسرت زنده سرشار از انرژی بود."},{"en":"Our school choir gave a warm holiday concert.","fa":"گروه سرود مدرسه ما یک کنسرت دلنشین به مناسبت تعطیلات اجرا کرد."}]},
      {"word":"festival","meaning":"جشنواره، فستیوال","en":"The youth culture festival had food and games.","fa":"جشنواره فرهنگ جوانان غذا و بازی‌های متنوعی داشت.","icon":"🎪","examples":[{"en":"The youth culture festival had food and games.","fa":"جشنواره فرهنگ جوانان غذا و بازی‌های متنوعی داشت."},{"en":"We showed our artwork at the spring art festival.","fa":"ما آثار هنری‌مان را در جشنواره هنر بهاری به نمایش گذاشتیم."},{"en":"Everyone enjoyed the music festival in the park.","fa":"همه از فستیوال موسیقی در پارک لذت بردند."}]},
      {"word":"money","meaning":"پول، پول‌توجیبی","en":"I save some pocket money every single week.","fa":"من هر هفته مقداری از پول‌توجیبی‌ام را پس‌انداز می‌کنم.","icon":"💵","examples":[{"en":"I save some pocket money every single week.","fa":"من هر هفته مقداری از پول‌توجیبی‌ام را پس‌انداز می‌کنم."},{"en":"Managing your money is a useful life skill.","fa":"مدیریت پولت یک مهارت زندگی مفید است."},{"en":"Do you have enough money for lunch?","fa":"آیا پول کافی برای ناهار داری؟"}]},
      {"word":"buy","meaning":"خریدن","en":"I want to buy a cool graphic t-shirt.","fa":"می‌خواهم یک تیشرت طرح‌دار باحال بخرم.","icon":"🛍️","examples":[{"en":"I want to buy a cool graphic t-shirt.","fa":"می‌خواهم یک تیشرت طرح‌دار باحال بخرم."},{"en":"We bought fresh snacks on our way home.","fa":"ما در راه خانه خوراکی‌های تازه خریدیم."},{"en":"She saved up to buy new wireless earphones.","fa":"او پس‌انداز کرد تا هندزفری بی‌سیم جدید بخرد."}]},
      {"word":"spend","meaning":"خرج کردن، وقت گذراندن","en":"I love to spend time with my best friends.","fa":"من عاشق وقت گذراندن با بهترین دوستانم هستم.","icon":"⏳","examples":[{"en":"I love to spend time with my best friends.","fa":"من عاشق وقت گذراندن با بهترین دوستانم هستم."},{"en":"Do not spend all your pocket money in one day.","fa":"تمام پول‌توجیبی‌ات را در یک روز خرج نکن."},{"en":"We spent the afternoon at the community park.","fa":"ما بعدازظهر را در پارک محله گذراندیم."}]},
      {"word":"save","meaning":"پس‌انداز کردن، ذخیره کردن","en":"I save money to buy a new skateboard.","fa":"من پول پس‌انداز می‌کنم تا یک اسکیت‌بورد جدید بخرم.","icon":"💰","examples":[{"en":"I save money to buy a new skateboard.","fa":"من پول پس‌انداز می‌کنم تا یک اسکیت‌بورد جدید بخرم."},{"en":"Always save your school project on a flash drive.","fa":"همیشه پروژه مدرسه‌ات را روی یک فلش ذخیره کن."},{"en":"Saving a little bit daily makes a big difference.","fa":"روزانه کمی پس‌انداز کردن تفاوت بزرگی ایجاد می‌کند."}]},
      {"word":"price","meaning":"قیمت، بها","en":"Check the price tag before choosing the jacket.","fa":"قبل از انتخاب کاپشن برچسب قیمت را بررسی کن.","icon":"🏷️","examples":[{"en":"Check the price tag before choosing the jacket.","fa":"قبل از انتخاب کاپشن برچسب قیمت را بررسی کن."},{"en":"This cool backpack has a very reasonable price.","fa":"این کوله‌پشتی باحال قیمت بسیار مناسبی دارد."},{"en":"Prices at the school cafeteria are student-friendly.","fa":"قیمت‌ها در بوفه مدرسه برای دانش‌آموزان مناسب است."}]},
      {"word":"mall","meaning":"مرکز خرید، پاساژ","en":"We walked around the shopping mall with friends.","fa":"ما با دوستان در مرکز خرید گشت زدیم.","icon":"🏬","examples":[{"en":"We walked around the shopping mall with friends.","fa":"ما با دوستان در مرکز خرید گشت زدیم."},{"en":"The mall has an awesome game zone for teens.","fa":"مرکز خرید یک بخش بازی معرکه برای نوجوانان دارد."},{"en":"Let meet in front of the mall entrance.","fa":"بیا جلوی ورودی پاساژ همدیگر را ببینیم."}]},
      {"word":"gift","meaning":"کادو، هدیه","en":"I wrapped a nice gift for my sister birthday.","fa":"من یک کادوی قشنگ برای تولد خواهرم کادوپیچ کردم.","icon":"🎀","examples":[{"en":"I wrapped a nice gift for my sister birthday.","fa":"من یک کادوی قشنگ برای تولد خواهرم کادوپیچ کردم."},{"en":"Her handmade friendship bracelet was the best gift.","fa":"دستبند دوستی دست‌ساز او بهترین هدیه بود."},{"en":"Receiving a thoughtful gift always warms your heart.","fa":"دریافت یک هدیه پرمحبت همیشه دل آدم را گرم می‌کند."}]},
      {"word":"wallet","meaning":"کیف پول","en":"Keep your student ID safe inside your wallet.","fa":"کارت دانش‌آموزی‌ات را داخل کیف پولت امن نگه دار.","icon":"👛","examples":[{"en":"Keep your student ID safe inside your wallet.","fa":"کارت دانش‌آموزی‌ات را داخل کیف پولت امن نگه دار."},{"en":"I forgot my wallet on the study desk.","fa":"کیف پولم را روی میز تحریر جا گذاشتم."},{"en":"He carries a slim wallet in his pocket.","fa":"او یک کیف پول جمع‌وجور در جیبش حمل می‌کند."}]},
      {"word":"wifi","meaning":"وای‌فای، اینترنت بی‌سیم","en":"What is the wifi password in the library?","fa":"رمز وای‌فای در کتابخانه چیست؟","icon":"📶","examples":[{"en":"What is the wifi password in the library?","fa":"رمز وای‌فای در کتابخانه چیست؟"},{"en":"The school cafeteria provides free student wifi.","fa":"بوفه مدرسه وای‌فای رایگان برای دانش‌آموزان ارائه می‌دهد."},{"en":"My phone connects to the home wifi automatically.","fa":"گوشی من خودکار به وای‌فای خانه وصل می‌شود."}]},
      {"word":"online","meaning":"آنلاین، برخط","en":"We play multiplayer online games every Friday.","fa":"ما هر جمعه بازی‌های آنلاین چندنفره می‌کنیم.","icon":"🌐","examples":[{"en":"We play multiplayer online games every Friday.","fa":"ما هر جمعه بازی‌های آنلاین چندنفره می‌کنیم."},{"en":"You can find great free tutorials online.","fa":"می‌توانی آموزش‌های رایگان فوق‌العاده‌ای را آنلاین پیدا کنی."},{"en":"Stay safe when sharing information online.","fa":"هنگام اشتراک‌گذاری اطلاعات به صورت آنلاین مراقب باش."}]},
      {"word":"link","meaning":"لینک، پیوند اینترنتی","en":"Send me the link to that funny video.","fa":"لینک آن ویدیوی خنده‌دار را برایم بفرست.","icon":"🔗","examples":[{"en":"Send me the link to that funny video.","fa":"لینک آن ویدیوی خنده‌دار را برایم بفرست."},{"en":"Click this link to join our study group.","fa":"روی این پیوند کلیک کن تا به گروه درسی‌مان بپیوندی."},{"en":"She shared an educational link with the class.","fa":"او یک لینک آموزشی را با کلاس به اشتراک گذاشت."}]},
      {"word":"follower","meaning":"دنبال‌کننده، فالوور","en":"Her drawing page gained many new followers.","fa":"صفحه نقاشی او فالوورهای جدید زیادی پیدا کرد.","icon":"👥","examples":[{"en":"Her drawing page gained many new followers.","fa":"صفحه نقاشی او فالوورهای جدید زیادی پیدا کرد."},{"en":"She interacts kindly with all her followers.","fa":"او با تمام دنبال‌کننده‌هایش با مهربانی ارتباط برقرار می‌کند."},{"en":"Having loyal followers inspires creative creators.","fa":"داشتن دنبال‌کننده‌های وفادار به سازندگان خلاق انگیزه می‌دهد."}]},
      {"word":"podcast","meaning":"پادکست، برنامه صوتی","en":"I listen to an English podcast on the school bus.","fa":"من در اتوبوس مدرسه به یک پادکست انگلیسی گوش می‌دهم.","icon":"🎙️","examples":[{"en":"I listen to an English podcast on the school bus.","fa":"من در اتوبوس مدرسه به یک پادکست انگلیسی گوش می‌دهم."},{"en":"This science podcast explains space in a fun way.","fa":"این پادکست علمی فضا را به روشی سرگرم‌کننده توضیح می‌دهد."},{"en":"Do you have a favorite podcast for learning?","fa":"آیا پادکست موردعلاقه‌ای برای یادگیری داری؟"}]},
      {"word":"meme","meaning":"میم اینترنتی، تصویر طنز","en":"My classmate sent a hilarious cat meme.","fa":"هم‌کلاسی‌ام یک میم گربه خیلی خنده‌دار فرستاد.","icon":"😹","examples":[{"en":"My classmate sent a hilarious cat meme.","fa":"هم‌کلاسی‌ام یک میم گربه خیلی خنده‌دار فرستاد."},{"en":"We laughed out loud at the school exam meme.","fa":"ما با صدای بلند به میم امتحان مدرسه خندیدیم."},{"en":"Sharing relatable memes makes friendship funnier.","fa":"اشتراک‌گذاری میم‌های ملموس رفاقت را بامزه‌تر می‌کند."}]},
      {"word":"website","meaning":"وب‌سایت، تارنما","en":"Check the school website for the exam schedule.","fa":"برای برنامه امتحانات وب‌سایت مدرسه را بررسی کن.","icon":"💻","examples":[{"en":"Check the school website for the exam schedule.","fa":"برای برنامه امتحانات وب‌سایت مدرسه را بررسی کن."},{"en":"This vocabulary website helps teens learn words.","fa":"این وب‌سایت لغت به نوجوانان در یادگیری واژگان کمک می‌کند."},{"en":"Bookmark the website so you can find it easily.","fa":"وب‌سایت را نشانه‌گذاری کن تا راحت آن را پیدا کنی."}]},
      {"word":"gamer","meaning":"گیمر، اهل بازی ویدیویی","en":"My friend is a skilled gamer in strategy matches.","fa":"دوست من یک گیمر ماهر در مسابقات استراتژیک است.","icon":"🎮","examples":[{"en":"My friend is a skilled gamer in strategy matches.","fa":"دوست من یک گیمر ماهر در مسابقات استراتژیک است."},{"en":"Many teens connect as friendly online gamers.","fa":"خیلی از نوجوانان به عنوان گیمرهای آنلاین و دوست با هم ارتباط می‌گیرند."},{"en":"A good gamer knows when to take healthy screen breaks.","fa":"یک گیمر خوب می‌داند چه زمانی به چشمانش استراحت بدهد."}]},
      {"word":"plan","meaning":"برنامه، نقشه‌ریزی کردن","en":"We made a fun study plan for the exam week.","fa":"ما یک برنامه درسی سرگرم‌کننده برای هفته امتحانات چیدیم.","icon":"📋","examples":[{"en":"We made a fun study plan for the exam week.","fa":"ما یک برنامه درسی سرگرم‌کننده برای هفته امتحانات چیدیم."},{"en":"What is your weekend plan with friends?","fa":"برنامه آخر هفته‌ات با دوستان چیست؟"},{"en":"Having a clear plan reduces daily stress.","fa":"داشتن یک برنامه شفاف استرس روزانه را کم می‌کند."}]},
      {"word":"idea","meaning":"ایده، نظر جالب","en":"She shared a brilliant idea for our group project.","fa":"او یک ایده درخشان برای پروژه گروهی‌مان مطرح کرد.","icon":"💡","examples":[{"en":"She shared a brilliant idea for our group project.","fa":"او یک ایده درخشان برای پروژه گروهی‌مان مطرح کرد."},{"en":"Write down your creative ideas in a notebook.","fa":"ایده‌های خلاقانه‌ات را در یک دفترچه یادداشت بنویس."},{"en":"That sounds like a fun and exciting idea!","fa":"این ایده خیلی سرگرم‌کننده و هیجان‌انگیز به نظر می‌رسد!"}]},
      {"word":"advice","meaning":"نصیحت، راهنمایی دوستانه","en":"My older brother gives helpful advice about high school.","fa":"برادر بزرگترم راهنمایی‌های مفیدی درباره دبیرستان به من می‌دهد.","icon":"🗣️","examples":[{"en":"My older brother gives helpful advice about high school.","fa":"برادر بزرگترم راهنمایی‌های مفیدی درباره دبیرستان به من می‌دهد."},{"en":"Ask your teacher for advice if a subject feels tough.","fa":"اگر درسی سخت به نظر می‌رسد از معلمت راهنمایی بخواه."},{"en":"Good advice from friends is truly valuable.","fa":"نصیحت و راهنمایی خوب از دوستان واقعاً ارزشمند است."}]},
      {"word":"choice","meaning":"انتخاب، تصمیم","en":"Making positive choices shapes your bright future.","fa":"انتخاب‌های مثبت آینده درخشان تو را می‌سازند.","icon":"🔀","examples":[{"en":"Making positive choices shapes your bright future.","fa":"انتخاب‌های مثبت آینده درخشان تو را می‌سازند."},{"en":"You have the choice between art and music club.","fa":"تو بین کانون هنر و موسیقی حق انتخاب داری."},{"en":"Take your time when making an important choice.","fa":"موقع تصمیم‌گیری و انتخاب مهم وقت کافی بگذار."}]},
      {"word":"schedule","meaning":"برنامه زمانی، جدول هفتگی","en":"I check my class schedule every Sunday evening.","fa":"من هر یکشنبه عصر جدول هفتگی کلاس‌هایم را چک می‌کنم.","icon":"🗓️","examples":[{"en":"I check my class schedule every Sunday evening.","fa":"من هر یکشنبه عصر جدول هفتگی کلاس‌هایم را چک می‌کنم."},{"en":"Stick to your study schedule to feel organized.","fa":"به برنامه زمانی مطالعه‌ات پایبند باش تا حس نظم داشته باشی."},{"en":"Our basketball match is on the sports schedule.","fa":"مسابقه بسکتبال ما در جدول برنامه ورزشی ثبت شده است."}]},
      {"word":"note","meaning":"یادداشت، نکته‌برداری","en":"Take brief notes while the teacher explains.","fa":"وقتی معلم توضیح می‌دهد یادداشت‌های کوتاه بردار.","icon":"📝","examples":[{"en":"Take brief notes while the teacher explains.","fa":"وقتی معلم توضیح می‌دهد یادداشت‌های کوتاه بردار."},{"en":"I left a friendly reminder note on the fridge.","fa":"یک یادداشت یادآوری دوستانه روی یخچال گذاشتم."},{"en":"Reviewing your class notes makes exams easy.","fa":"مرور یادداشت‌های کلاسی امتحانات را آسان می‌کند."}]},
      {"word":"challenge","meaning":"چالش، کار دشوار هیجان‌انگیز","en":"Learning fifty new words is an exciting challenge.","fa":"یادگیری ۵۰ لغت جدید یک چالش هیجان‌انگیز است.","icon":"🧗","examples":[{"en":"Learning fifty new words is an exciting challenge.","fa":"یادگیری ۵۰ لغت جدید یک چالش هیجان‌انگیز است."},{"en":"Accepting new challenges makes you grow stronger.","fa":"پذیرفتن چالش‌های جدید باعث می‌شود قوی‌تر رشد کنی."},{"en":"Our team solved the math challenge together.","fa":"تیم ما با هم چالش ریاضی را حل کرد."}]},
      {"word":"rule","meaning":"قانون، مقررات","en":"Follow the library rules and keep silence.","fa":"قوانین کتابخانه را رعایت کن و سکوت را حفظ کن.","icon":"📜","examples":[{"en":"Follow the library rules and keep silence.","fa":"قوانین کتابخانه را رعایت کن و سکوت را حفظ کن."},{"en":"Every game has fair rules for all players.","fa":"هر بازی برای تمام بازیکنان قوانین عادلانه‌ای دارد."},{"en":"The golden rule of friendship is loyalty.","fa":"قانون طلایی رفاقت، وفاداری است."}]},
      {"word":"success","meaning":"موفقیت، پیروزی","en":"Hard work and daily practice lead to success.","fa":"سخت‌کوشی و تمرین روزانه به موفقیت می‌انجامند.","icon":"🏆","examples":[{"en":"Hard work and daily practice lead to success.","fa":"سخت‌کوشی و تمرین روزانه به موفقیت می‌انجامند."},{"en":"Celebrate your small successes with pride.","fa":"موفقیت‌های کوچک خودت را با افتخار جشن بگیر."},{"en":"Our school theater play was a huge success.","fa":"نمایش تئاتر مدرسه ما یک موفقیت بزرگ بود."}]},
      {"word":"cafe","meaning":"کافه، پاتوق عصرانه","en":"We hang out at a cozy cafe after school.","fa":"ما بعد از مدرسه در یک کافه دنج دور هم جمع می‌شویم.","icon":"☕","examples":[{"en":"We hang out at a cozy cafe after school.","fa":"ما بعد از مدرسه در یک کافه دنج دور هم جمع می‌شویم."},{"en":"Order warm hot chocolate at the local cafe.","fa":"در کافه محلی یک شکلات داغ سفارش بده."},{"en":"Studying in a quiet cafe boosts my concentration.","fa":"درس خواندن در یک کافه آرام تمرکزم را بالا می‌برد."}]},
      {"word":"picnic","meaning":"پیک‌نیک، تفریح در فضای باز","en":"We had a sunny picnic in the park on Friday.","fa":"ما روز جمعه یک پیک‌نیک آفتابی در پارک داشتیم.","icon":"🧺","examples":[{"en":"We had a sunny picnic in the park on Friday.","fa":"ما روز جمعه یک پیک‌نیک آفتابی در پارک داشتیم."},{"en":"Pack fresh sandwiches and fruits for the picnic.","fa":"برای پیک‌نیک ساندویچ‌های تازه و میوه بردار."},{"en":"Playing frisbee during a picnic is super fun.","fa":"فریزبی بازی کردن در طول پیک‌نیک خیلی سرگرم‌کننده است."}]},
      {"word":"camp","meaning":"اردو، کمپینگ زدن","en":"Our school organized an exciting summer camp.","fa":"مدرسه ما یک اردوی تابستانی هیجان‌انگیز برگزار کرد.","icon":"⛺","examples":[{"en":"Our school organized an exciting summer camp.","fa":"مدرسه ما یک اردوی تابستانی هیجان‌انگیز برگزار کرد."},{"en":"We sat around the campfire and shared ghost stories.","fa":"دور آتش کمپ نشستیم و داستان‌های ارواح تعریف کردیم."},{"en":"Camping under starry skies is unforgettable.","fa":"کمپینگ زیر آسمان پرستاره فراموش‌نشدنی است."}]},
      {"word":"trip","meaning":"سفر کوتاه، گشت‌وگذار","en":"We went on a fun class trip to the science museum.","fa":"ما به یک اردوی کلاسی سرگرم‌کننده به موزه علوم رفتیم.","icon":"🚌","examples":[{"en":"We went on a fun class trip to the science museum.","fa":"ما به یک اردوی کلاسی سرگرم‌کننده به موزه علوم رفتیم."},{"en":"Pack your backpack carefully before the school trip.","fa":"قبل از سفر مدرسه کوله‌پشتی‌ات را با دقت ببند."},{"en":"A weekend road trip with family is very relaxing.","fa":"یک سفر جاده‌ای آخر هفته با خانواده بسیار آرامش‌بخش است."}]}
    ]
  },
  a2everyday: {
    name: "روزمره (A2)",
    words: [
      { word: "appointment", meaning: "قرار ملاقات، نوبت", en: "I have a doctor's appointment today.", fa: "امروز یک قرار ملاقات با پزشک دارم.", icon: "📅", examples: [{ en: "I have a doctor's appointment today.", fa: "امروز یک قرار ملاقات با پزشک دارم." }, { en: "Can we make an appointment for Monday?", fa: "می‌شود برای دوشنبه قرار بگذاریم؟" }, { en: "She canceled her appointment.", fa: "او قرار ملاقاتش را لغو کرد." }] },
      { word: "borrow", meaning: "قرض گرفتن", en: "Can I borrow your pen?", fa: "می‌شود خودکارت را قرض بگیرم؟", icon: "✏️", examples: [{ en: "Can I borrow your pen?", fa: "می‌شود خودکارت را قرض بگیرم؟" }, { en: "I borrowed a book from the library.", fa: "یک کتاب از کتابخانه قرض گرفتم." }, { en: "You can borrow my umbrella.", fa: "می‌توانی چترم را قرض بگیری." }] },
      { word: "decide", meaning: "تصمیم گرفتن", en: "We decided to stay home.", fa: "تصمیم گرفتیم در خانه بمانیم.", icon: "🤔", examples: [{ en: "We decided to stay home.", fa: "تصمیم گرفتیم در خانه بمانیم." }, { en: "I cannot decide what to wear.", fa: "نمی‌توانم تصمیم بگیرم چه بپوشم." }, { en: "She decides quickly.", fa: "او سریع تصمیم می‌گیرد." }] },
      { word: "neighborhood", meaning: "محله", en: "Our neighborhood is very quiet.", fa: "محله‌ی ما خیلی ساکت است.", icon: "🏘️", examples: [{ en: "Our neighborhood is very quiet.", fa: "محله‌ی ما خیلی ساکت است." }, { en: "There is a nice park in our neighborhood.", fa: "در محله‌ی ما یک پارک قشنگ هست." }, { en: "Everyone knows everyone in this neighborhood.", fa: "در این محله همه همدیگر را می‌شناسند." }] },
      { word: "routine", meaning: "روتین، رویه روزانه", en: "My morning routine is simple.", fa: "روتین صبحگاهی من ساده است.", icon: "🔁", examples: [{ en: "My morning routine is simple.", fa: "روتین صبحگاهی من ساده است." }, { en: "Exercise is part of my daily routine.", fa: "ورزش بخشی از روتین روزانه‌ی من است." }, { en: "She follows the same routine every day.", fa: "او هر روز همان روتین را دنبال می‌کند." }] }
    ]
  },
  a2travel: {
    name: "سفر (A2)",
    words: [
      { word: "flight", meaning: "پرواز", en: "Our flight leaves at eight.", fa: "پرواز ما ساعت هشت حرکت می‌کند.", icon: "✈️", examples: [{ en: "Our flight leaves at eight.", fa: "پرواز ما ساعت هشت حرکت می‌کند." }, { en: "The flight was short and smooth.", fa: "پرواز کوتاه و آرام بود." }, { en: "I read a book during the flight.", fa: "در طول پرواز کتاب خواندم." }] },
      { word: "luggage", meaning: "چمدان، بار مسافر", en: "My luggage is heavy.", fa: "چمدانم سنگین است.", icon: "🧳", examples: [{ en: "My luggage is heavy.", fa: "چمدانم سنگین است." }, { en: "We collected our luggage at the airport.", fa: "بارمان را در فرودگاه تحویل گرفتیم." }, { en: "Do not forget your luggage in the taxi.", fa: "چمدانت را در تاکسی جا نگذار." }] },
      { word: "passenger", meaning: "مسافر", en: "The passengers are waiting at the gate.", fa: "مسافرها پشت گیت منتظرند.", icon: "💺", examples: [{ en: "The passengers are waiting at the gate.", fa: "مسافرها پشت گیت منتظرند." }, { en: "Every passenger needs a ticket.", fa: "هر مسافر به بلیط نیاز دارد." }, { en: "The passenger next to me slept all the way.", fa: "مسافر کنار من تمام مسیر خوابید." }] },
      { word: "itinerary", meaning: "برنامه سفر", en: "Our itinerary is very full.", fa: "برنامه سفر ما خیلی پر است.", icon: "🗓️", examples: [{ en: "Our itinerary is very full.", fa: "برنامه سفر ما خیلی پر است." }, { en: "The itinerary includes two museums.", fa: "برنامه سفر شامل دو موزه است." }, { en: "I changed the itinerary a little.", fa: "برنامه سفر را کمی عوض کردم." }] },
      { word: "destination", meaning: "مقصد", en: "Our destination is Rome.", fa: "مقصد ما رم است.", icon: "🎯", examples: [{ en: "Our destination is Rome.", fa: "مقصد ما رم است." }, { en: "We reached our destination.", fa: "به مقصد رسیدیم." }, { en: "Enjoy the journey to your destination.", fa: "از مسیر تا مقصدت لذت ببر." }] }
    ]
  },
  a2food: {
    name: "غذا و رستوران (A2)",
    words: [
      { word: "recipe", meaning: "دستور پخت", en: "This recipe is my grandmother's.", fa: "این دستور پخت متعلق به مادربزرگم است.", icon: "📖", examples: [{ en: "This recipe is my grandmother's.", fa: "این دستور پخت متعلق به مادربزرگم است." }, { en: "The recipe is very easy to follow.", fa: "این دستور پخت خیلی ساده است." }, { en: "I found a great recipe online.", fa: "یک دستور پخت عالی آنلاین پیدا کردم." }] },
      { word: "dessert", meaning: "دسر", en: "Ice cream is my favorite dessert.", fa: "بستنی دسر مورد علاقه‌ی من است.", icon: "🍨", examples: [{ en: "Ice cream is my favorite dessert.", fa: "بستنی دسر مورد علاقه‌ی من است." }, { en: "We ordered dessert after dinner.", fa: "بعد از شام دسر سفارش دادیم." }, { en: "This dessert is not too sweet.", fa: "این دسر خیلی شیرین نیست." }] },
      { word: "bill", meaning: "صورتحساب", en: "Can we have the bill, please?", fa: "می‌شود صورت‌حساب را بیاورید؟", icon: "🧾", examples: [{ en: "Can we have the bill, please?", fa: "می‌شود صورت‌حساب را بیاورید؟" }, { en: "The bill is on the table.", fa: "صورت‌حساب روی میز است." }, { en: "Let me pay the bill tonight.", fa: "امشب بگذار من صورت‌حساب را پرداخت کنم." }] },
      { word: "appetizer", meaning: "پیش‌غذا", en: "We ordered an appetizer.", fa: "یک پیش‌غذا سفارش دادیم.", icon: "🥗", examples: [{ en: "We ordered an appetizer.", fa: "یک پیش‌غذا سفارش دادیم." }, { en: "The appetizer was delicious.", fa: "پیش‌غذا خوشمزه بود." }, { en: "Soup is a nice appetizer.", fa: "سوپ پیش‌غذای خوبی است." }] },
      { word: "ingredient", meaning: "مواد اولیه", en: "Flour is an important ingredient in bread.", fa: "آرد یکی از مواد اولیه مهم در نان است.", icon: "🥣", examples: [{ en: "Flour is an important ingredient in bread.", fa: "آرد یکی از مواد اولیه مهم در نان است." }, { en: "Check the ingredients before cooking.", fa: "قبل از آشپزی مواد اولیه را بررسی کن." }, { en: "This soup has simple ingredients.", fa: "این سوپ مواد اولیه ساده‌ای دارد." }] }
    ]
  },
  a2work: {
    name: "کار و اداره (A2)",
    words: [
      { word: "salary", meaning: "حقوق، دستمزد", en: "He gets his salary every month.", fa: "او هر ماه حقوقش را می‌گیرد.", icon: "💵", examples: [{ en: "He gets his salary every month.", fa: "او هر ماه حقوقش را می‌گیرد." }, { en: "The salary is paid on the first of the month.", fa: "حقوق اول ماه پرداخت می‌شود." }, { en: "She saved part of her salary.", fa: "او بخشی از حقوقش را پس‌انداز کرد." }] },
      { word: "manager", meaning: "مدیر", en: "She is the new manager.", fa: "او مدیر جدید است.", icon: "🧑‍💼", examples: [{ en: "She is the new manager.", fa: "او مدیر جدید است." }, { en: "The manager approved my request.", fa: "مدیر درخواستم را تأیید کرد." }, { en: "Our manager listens to everyone.", fa: "مدیر ما به همه گوش می‌دهد." }] },
      { word: "interview", meaning: "مصاحبه", en: "I have a job interview tomorrow.", fa: "فردا مصاحبه‌ی شغلی دارم.", icon: "📝", examples: [{ en: "I have a job interview tomorrow.", fa: "فردا مصاحبه‌ی شغلی دارم." }, { en: "The interview took about an hour.", fa: "مصاحبه حدود یک ساعت طول کشید." }, { en: "She prepared for the interview all week.", fa: "او تمام هفته برای مصاحبه آماده شد." }] },
      { word: "deadline", meaning: "ضرب‌الاجل، مهلت", en: "We must finish before the deadline.", fa: "باید قبل از ضرب‌الاجل تمام کنیم.", icon: "⏳", examples: [{ en: "We must finish before the deadline.", fa: "باید قبل از ضرب‌الاجل تمام کنیم." }, { en: "The deadline for this project is close.", fa: "مهلت این پروژه نزدیک است." }, { en: "I worked late to meet the deadline.", fa: "برای رسیدن به مهلت، تا دیروقت کار کردم." }] },
      { word: "coworker", meaning: "همکار", en: "My coworkers are friendly.", fa: "همکارانم صمیمی هستند.", icon: "🧑‍🤝‍🧑", examples: [{ en: "My coworkers are friendly.", fa: "همکارانم صمیمی هستند." }, { en: "I had lunch with a coworker.", fa: "با یک همکار ناهار خوردم." }, { en: "She asked a coworker for help.", fa: "او از یک همکار کمک خواست." }] }
    ]
  },
  pv_a1: {
    name: "افعال پایه روزمره",
    title: "افعال پایه روزمره",
    icon: "🧥",
    level: "A1",
    words: [
      {
        id: "put_on",
        word: "put on",
        level: "A1",
        theme: "لباس و پوشش",
        oldCat: "pvClothes",
        meaning: "پوشیدن (لباس، کفش، عینک، کلاه)",
        en: "Put on your warm jacket; it is freezing outside.",
        fa: "کاپشن گرمت را بپوش؛ هوای بیرون یخبندان است.",
        icon: "🧥",
        examples: [
          { en: "Put on your warm jacket; it is freezing outside.", fa: "کاپشن گرمت را بپوش؛ هوای بیرون یخبندان است." },
          { en: "She put on her sunglasses before driving into the sun.", fa: "او قبل از رانندگی رو به آفتاب، عینک آفتابی‌اش را زد." },
          { en: "Do not forget to put on your seatbelt in the car.", fa: "فراموش نکن که کمربند ایمنی‌ات را در ماشین ببندی." }
        ]
      },
      {
        id: "take_off",
        word: "take off",
        level: "A1",
        theme: "لباس و پوشش",
        oldCat: "pvClothes",
        meaning: "درآوردن (لباس یا کفش)",
        en: "Take off your wet boots at the front door.",
        fa: "چکمه‌های خیس خود را دم در ورودی درآور.",
        icon: "👟",
        examples: [
          { en: "Take off your wet boots at the front door.", fa: "چکمه‌های خیس خود را دم در ورودی درآور." },
          { en: "He took off his coat and hung it in the hallway.", fa: "او کتش را درآورد و در راهرو آویزان کرد." },
          { en: "It is warm inside, you can take off your sweater.", fa: "داخل اتاق گرم است، می‌توانی پلیورت را درآوری." }
        ]
      },
      {
        id: "turn_on",
        word: "turn on",
        level: "A1",
        theme: "وسایل و کنترل‌ها",
        oldCat: "pvAppliances",
        meaning: "باز کردن (شیر آب)، روشن کردن",
        en: "Turn on the tap and wash your hands with warm water.",
        fa: "شیر آب را باز کن و دست‌هایت را با آب گرم بشوی.",
        icon: "🚰",
        examples: [
          { en: "Turn on the tap and wash your hands with warm water.", fa: "شیر آب را باز کن و دست‌هایت را با آب گرم بشوی." },
          { en: "She turned on the shower before getting ready.", fa: "او قبل از آماده شدن، دوش حمام را باز کرد." },
          { en: "Can you turn on the kitchen faucet, please?", fa: "می‌شود لطفاً شیر آب آشپزخانه را باز کنی؟" }
        ]
      },
      {
        id: "turn_off",
        word: "turn off",
        level: "A1",
        theme: "وسایل و کنترل‌ها",
        oldCat: "pvAppliances",
        meaning: "بستن (شیر آب)، خاموش کردن",
        en: "Turn off the faucet tightly so it does not drip.",
        fa: "شیر آب را محکم ببند تا چکه نکند.",
        icon: "🚿",
        examples: [
          { en: "Turn off the faucet tightly so it does not drip.", fa: "شیر آب را محکم ببند تا چکه نکند." },
          { en: "Remember to turn off the water while brushing your teeth.", fa: "یادت باشد موقع مسواک زدن آب را ببندی." },
          { en: "He turned off the garden hose after watering the plants.", fa: "او بعد از آب دادن به گیاهان، شلنگ آب را بست." }
        ]
      },
      {
        id: "wake_up",
        word: "wake up",
        level: "A1",
        theme: "روتین روزمره و خانه",
        oldCat: "pvRoutine",
        meaning: "از خواب بیدار شدن، بیدار کردن",
        en: "I wake up at seven o clock when my alarm goes off.",
        fa: "وقتی زنگ ساعتم به صدا درمی‌آید، ساعت هفت بیدار می‌شوم.",
        icon: "⏰",
        examples: [
          { en: "I wake up at seven o clock when my alarm goes off.", fa: "وقتی زنگ ساعتم به صدا درمی‌آید، ساعت هفت بیدار می‌شوم." },
          { en: "Please wake me up if I fall asleep on the couch.", fa: "اگر روی کاناپه خوابم برد، لطفاً بیدارم کن." },
          { en: "He woke up early to prepare breakfast for his family.", fa: "او صبح زود بیدار شد تا برای خانواده‌اش صبحانه آماده کند." }
        ]
      },
      {
        id: "sit_down",
        word: "sit down",
        level: "A1",
        theme: "افعال پایه روزمره",
        meaning: "نشستن، قرار گرفتن در حالت نشسته",
        en: "Please sit down and make yourself comfortable.",
        fa: "لطفاً بنشینید و راحت باشید.",
        icon: "\ud83e\ude91",
        examples: [
          { en: "Please sit down and make yourself comfortable.", fa: "لطفاً بنشینید و راحت باشید." },
          { en: "We sat down on the bench to watch the sunset.", fa: "روی نیمکت نشستیم تا غروب خورشید را تماشا کنیم." },
          { en: "The teacher told all the students to sit down.", fa: "معلم به همه دانش‌آموزان گفت که بنشینند." }
        ]
      },
      {
        id: "stand_up",
        word: "stand up",
        level: "A1",
        theme: "افعال پایه روزمره",
        meaning: "بلند شدن، روی پای خود ایستادن",
        en: "Please stand up and answer the question.",
        fa: "لطفاً بایستید و به سوال پاسخ دهید.",
        icon: "\ud83e\uddcd",
        examples: [
          { en: "Please stand up and answer the question.", fa: "لطفاً بایستید و به سوال پاسخ دهید." },
          { en: "He stood up to shake hands with his new neighbor.", fa: "او بلند شد تا با همسایه جدیدش دست بدهد." },
          { en: "I need to stand up and stretch my legs after hours of study.", fa: "بعد از ساعت‌ها مطالعه باید بایستم و پاهایم را بکشم." }
        ]
      },
      {
        id: "get_up",
        word: "get up",
        level: "A1",
        theme: "افعال پایه روزمره",
        meaning: "برخاستن، از تخت یا صندلی بلند شدن",
        en: "I usually get up at six every morning.",
        fa: "من معمولاً هر روز صبح ساعت شش از تخت خواب بلند می‌شوم.",
        icon: "\u23f0",
        examples: [
          { en: "I usually get up at six every morning.", fa: "من معمولاً هر روز صبح ساعت شش از تخت خواب بلند می‌شوم." },
          { en: "It was difficult to get up on a cold rainy morning.", fa: "بلند شدن از رختخواب در یک صبح سرد و بارانی کار سختی بود." },
          { en: "Get up from the couch and come help me with lunch.", fa: "از روی کاناپه بلند شو و بیا در آماده کردن ناهار کمکم کن." }
        ]
      },
      {
        id: "fall_asleep",
        word: "fall asleep",
        level: "A1",
        theme: "افعال پایه روزمره",
        meaning: "به خواب رفتن، خوابیدن",
        en: "The baby fell asleep after drinking warm milk.",
        fa: "کودک پس از نوشیدن شیر گرم به خواب رفت.",
        icon: "\ud83d\ude34",
        examples: [
          { en: "The baby fell asleep after drinking warm milk.", fa: "کودک پس از نوشیدن شیر گرم به خواب رفت." },
          { en: "I was so tired that I fell asleep immediately on the sofa.", fa: "آن‌قدر خسته بودم که بلافاصله روی مبل خوابم برد." },
          { en: "He usually falls asleep while reading a novel in bed.", fa: "او معمولاً هنگام خواندن رمان در رختخواب به خواب می‌رود." }
        ]
      },
      {
        id: "get_started",
        word: "get started",
        level: "A1",
        theme: "افعال پایه روزمره",
        meaning: "شروع کردن، دست به کار شدن",
        en: "Let us get started on the project right away.",
        fa: "بیایید فوراً کار روی این پروژه را شروع کنیم.",
        icon: "\ud83d\ude80",
        examples: [
          { en: "Let us get started on the project right away.", fa: "بیایید فوراً کار روی این پروژه را شروع کنیم." },
          { en: "Once everyone arrives, we can get started with the lesson.", fa: "به محض اینکه همه برسند، می‌توانیم درس را شروع کنیم." },
          { en: "It is hard to get started, but practice makes it easy.", fa: "دست به کار شدن سخت است، اما تمرین آن را آسان می‌کند." }
        ]
      }
    ]
  },
  pv_a2_home: {
    name: "خانه و وسایل",
    title: "خانه و وسایل",
    icon: "🏠",
    level: "A2",
    words: [
      {
        id: "heat_up",
        word: "heat up",
        level: "A2",
        theme: "آشپزخانه و خوراکی",
        oldCat: "pvKitchen",
        meaning: "گرم کردن (غذا یا نوشیدنی)",
        en: "Heat up the leftover stew in the microwave for two minutes.",
        fa: "خورش باقی‌مانده را دو دقیقه در مایکروویو گرم کن.",
        icon: "🍲",
        examples: [
          { en: "Heat up the leftover stew in the microwave for two minutes.", fa: "خورش باقی‌مانده را دو دقیقه در مایکروویو گرم کن." },
          { en: "I will heat up some milk before going to bed.", fa: "قبل از رفتن به رختخواب، مقداری شیر گرم می‌کنم." },
          { en: "The soup will taste better once you heat it up.", fa: "سوپ وقتی آن را گرم کنی طعم بهتری خواهد داشت." }
        ]
      },
      {
        id: "pour_out",
        word: "pour out",
        level: "A2",
        theme: "آشپزخانه و خوراکی",
        oldCat: "pvKitchen",
        meaning: "خالی کردن، دور ریختن مایع از ظرف",
        en: "Pour out the cold coffee and make a fresh cup.",
        fa: "قهوه سرد شده را خالی کن و یک فنجان تازه درست کن.",
        icon: "🫗",
        examples: [
          { en: "Pour out the cold coffee and make a fresh cup.", fa: "قهوه سرد شده را خالی کن و یک فنجان تازه درست کن." },
          { en: "She poured out the dirty water from the cleaning bucket.", fa: "او آب کثیف را از سطل شست‌وشو خالی کرد." },
          { en: "Do not pour out the broth; we will use it for soup.", fa: "عصاره گوشت را دور نریز؛ از آن برای سوپ استفاده می‌کنیم." }
        ]
      },
      {
        id: "put_away",
        word: "put away",
        level: "A2",
        theme: "نظافت و کارهای خانه",
        oldCat: "pvCleaning",
        meaning: "سر جای خود گذاشتن، جمع کردن وسایل",
        en: "Put away the clean dishes into the kitchen cabinet.",
        fa: "ظرف‌های تمیز را سر جایشان در کابینت آشپزخانه بگذار.",
        icon: "🍽️",
        examples: [
          { en: "Put away the clean dishes into the kitchen cabinet.", fa: "ظرف‌های تمیز را سر جایشان در کابینت آشپزخانه بگذار." },
          { en: "Please put away your shoes after coming inside.", fa: "لطفاً بعد از آمدن به داخل، کفش‌هایت را سر جایشان بگذار." },
          { en: "The children put away their toys before dinner.", fa: "بچه‌ها قبل از شام اسباب‌بازی‌هایشان را جمع کردند." }
        ]
      },
      {
        id: "throw_away",
        word: "throw away",
        level: "A2",
        theme: "نظافت و کارهای خانه",
        oldCat: "pvCleaning",
        meaning: "دور انداختن، در سطل آشغال ریختن",
        en: "Throw away the empty milk carton in the recycling bin.",
        fa: "کارتن خالی شیر را در سطل بازیافت بینداز.",
        icon: "🗑️",
        examples: [
          { en: "Throw away the empty milk carton in the recycling bin.", fa: "کارتن خالی شیر را در سطل بازیافت بینداز." },
          { en: "Do not throw away that paper; I still need it.", fa: "آن برگه را دور نینداز؛ من هنوز به آن نیاز دارم." },
          { en: "She threw away all the old receipts from her purse.", fa: "او تمام رسیدهای قدیمی را از کیفش دور ریخت." }
        ]
      },
      {
        id: "take_out",
        word: "take out",
        level: "A2",
        theme: "نظافت و کارهای خانه",
        oldCat: "pvCleaning",
        meaning: "بیرون بردن (زباله)، بیرون آوردن",
        en: "Do not forget to take out the trash before you sleep.",
        fa: "فراموش نکن که قبل از خوابیدن، زباله‌ها را بیرون ببری.",
        icon: "🚮",
        examples: [
          { en: "Do not forget to take out the trash before you sleep.", fa: "فراموش نکن که قبل از خوابیدن، زباله‌ها را بیرون ببری." },
          { en: "He took out the keys from his deep pocket.", fa: "او کلیدها را از جیب عمیقش بیرون آورد." },
          { en: "I take out the garbage every Tuesday evening.", fa: "من هر سه‌شنبه عصر زباله‌ها را دم در می‌برم." }
        ]
      },
      {
        id: "plug_in",
        word: "plug in",
        level: "A2",
        theme: "وسایل و کنترل‌ها",
        oldCat: "pvAppliances",
        meaning: "به برق زدن، متصل کردن به پریز",
        en: "Plug in the charger before your phone battery dies.",
        fa: "قبل از این‌که باتری گوشی‌ات تمام شود، شارژر را به برق بزن.",
        icon: "🔌",
        examples: [
          { en: "Plug in the charger before your phone battery dies.", fa: "قبل از این‌که باتری گوشی‌ات تمام شود، شارژر را به برق بزن." },
          { en: "Where can I plug in my laptop in this room?", fa: "کجای این اتاق می‌توانم لپ‌تاپم را به برق بزنم؟" },
          { en: "Make sure you plug in the kettle safely.", fa: "مطمئن شو که کتری برقی را ایمن به برق می‌زنی." }
        ]
      },
      {
        id: "turn_up",
        word: "turn up",
        level: "A2",
        theme: "وسایل و کنترل‌ها",
        oldCat: "pvAppliances",
        meaning: "بلند کردن (صدا)، بالا بردن (درجه حرارت)",
        en: "Turn up the volume so everyone can hear the news.",
        fa: "صدا را بلند کن تا همه بتوانند اخبار را بشنوند.",
        icon: "🔊",
        examples: [
          { en: "Turn up the volume so everyone can hear the news.", fa: "صدا را بلند کن تا همه بتوانند اخبار را بشنوند." },
          { en: "Can you turn up the heater a little bit?", fa: "می‌توانی درجه بخاری را کمی بالا ببری؟" },
          { en: "I love this song, please turn it up!", fa: "من عاشق این آهنگم، لطفاً صدایش را زیاد کن!" }
        ]
      },
      {
        id: "turn_down",
        word: "turn down",
        level: "A2",
        theme: "وسایل و کنترل‌ها",
        oldCat: "pvAppliances",
        meaning: "کم کردن (صدا یا حرارت)",
        en: "Please turn down the TV; the baby is sleeping.",
        fa: "لطفاً صدای تلویزیون را کم کن؛ بچه خواب است.",
        icon: "🔉",
        examples: [
          { en: "Please turn down the TV; the baby is sleeping.", fa: "لطفاً صدای تلویزیون را کم کن؛ بچه خواب است." },
          { en: "Turn down the stove heat so the soup does not boil over.", fa: "شعله گاز را کم کن تا سوپ سر نرود." },
          { en: "I had to turn down the radio to answer the phone.", fa: "مجبور شدم صدای رادیو را کم کنم تا جواب تلفن را بدهم." }
        ]
      },
      {
        id: "hang_up",
        word: "hang up",
        level: "A2",
        theme: "روتین روزمره و خانه",
        oldCat: "pvRoutine",
        meaning: "آویزان کردن لباس، قطع کردن تماس",
        en: "Hang up your damp towel on the bathroom rack.",
        fa: "حوله نم‌دارت را روی جاحوله‌ای حمام آویزان کن.",
        icon: "🧥",
        examples: [
          { en: "Hang up your damp towel on the bathroom rack.", fa: "حوله نم‌دارت را روی جاحوله‌ای حمام آویزان کن." },
          { en: "Always hang up your suits in the closet.", fa: "کت‌وشلوارهایت را همیشه در کمد آویزان کن." },
          { en: "He said goodbye and hung up the phone.", fa: "او خداحافظی کرد و تلفن را قطع نمود." }
        ]
      }
    ]
  },
  pv_a2_social: {
    name: "پوشش و ارتباطات",
    title: "پوشش و ارتباطات",
    icon: "👔",
    level: "A2",
    words: [
      {
        id: "zip_up",
        word: "zip up",
        level: "A2",
        theme: "لباس و پوشش",
        oldCat: "pvClothes",
        meaning: "زیپ بستن (کاپشن، کیف، شلوار)",
        en: "Zip up your coat so the cold wind does not get in.",
        fa: "زیپ کُتت را ببند تا باد سرد داخل نرود.",
        icon: "🤐",
        examples: [
          { en: "Zip up your coat so the cold wind does not get in.", fa: "زیپ کُتت را ببند تا باد سرد داخل نرود." },
          { en: "Make sure you zip up your backpack before leaving.", fa: "مطمئن شو که قبل از رفتن، زیپ کوله‌پشتی‌ات را می‌بندی." },
          { en: "He zipped up his luggage after packing all his clothes.", fa: "او بعد از چیدن تمام لباس‌هایش، زیپ چمدانش را بست." }
        ]
      },
      {
        id: "button_up",
        word: "button up",
        level: "A2",
        theme: "لباس و پوشش",
        oldCat: "pvClothes",
        meaning: "دکمه بستن (پیراهن، پالتو)",
        en: "Button up your shirt collar neatly for the photo.",
        fa: "یقه پیراهنت را برای عکس مرتب دکمه ببند.",
        icon: "👔",
        examples: [
          { en: "Button up your shirt collar neatly for the photo.", fa: "یقه پیراهنت را برای عکس مرتب دکمه ببند." },
          { en: "She buttoned up her overcoat against the winter chill.", fa: "او پالتویش را در برابر سرمای زمستان دکمه بست." },
          { en: "Help the little boy button up his cardigan.", fa: "به پسربچه کمک کن تا دکمه‌های ژاکتش را ببندد." }
        ]
      },
      {
        id: "dress_up",
        word: "dress up",
        level: "A2",
        theme: "لباس و پوشش",
        oldCat: "pvClothes",
        meaning: "شیک و رسمی پوشیدن، تیپ زدن",
        en: "I decided to dress up for my date so I wore a new dress.",
        fa: "تصمیم گرفتم برای قرارم شیک و رسمی بپوشم، بنابراین یک پیراهن نو پوشیدم.",
        icon: "👗",
        examples: [
          { en: "I decided to dress up for my date so I wore a new dress.", fa: "تصمیم گرفتم برای قرارم شیک و رسمی بپوشم، بنابراین یک پیراهن نو پوشیدم." },
          { en: "You do not need to dress up for a casual family dinner.", fa: "لازم نیست برای یک شام خانوادگی خودمانی رسمی بپوشی." },
          { en: "It is always a good idea to dress up for a job interview.", fa: "همیشه ایده خوبی است که برای مصاحبه کاری شیک و رسمی لباس بپوشی." }
        ]
      },
      {
        id: "get_together",
        word: "get together",
        level: "A2",
        theme: "روابط و احساسات",
        oldCat: "pvSocial",
        meaning: "دور هم جمع شدن، ملاقات دوستانه داشتن",
        en: "I love to get together with friends and family during the holidays.",
        fa: "عاشق این هستم که در طول تعطیلات با دوستان و خانواده دور هم جمع شویم.",
        icon: "☕",
        examples: [
          { en: "I love to get together with friends and family during the holidays.", fa: "عاشق این هستم که در طول تعطیلات با دوستان و خانواده دور هم جمع شویم." },
          { en: "Let us get together this weekend and grab a cup of coffee.", fa: "بیا این آخر هفته دور هم جمع شویم و یک فنجان قهوه بنوشیم." },
          { en: "We usually get together every Friday for dinner.", fa: "ما معمولاً هر جمعه برای شام دور هم جمع می‌شویم." }
        ]
      },
      {
        id: "call_back",
        word: "call back",
        level: "A2",
        theme: "ارتباط و گفتگو",
        oldCat: "pvCommunication",
        meaning: "تماس تلفنی را پاسخ دادن، دوباره زنگ زدن",
        en: "I am in a meeting right now, but I will call you back at eleven.",
        fa: "من الان در جلسه هستم، اما ساعت یازده دوباره با شما تماس می‌گیرم.",
        icon: "📞",
        examples: [
          { en: "I am in a meeting right now, but I will call you back at eleven.", fa: "من الان در جلسه هستم، اما ساعت یازده دوباره با شما تماس می‌گیرم." },
          { en: "The doctor left a voicemail asking me to call back as soon as possible.", fa: "پزشک پیام صوتی گذاشت و خواست هر چه زودتر با او تماس بگیرم." },
          { en: "Did she call you back after receiving your message?", fa: "آیا او پس از دریافت پیامت دوباره با تو تماس گرفت؟" }
        ]
      },
      {
        id: "go_ahead",
        word: "go ahead",
        level: "A2",
        theme: "ارتباط و گفتگو",
        oldCat: "pvCommunication",
        meaning: "ادامه دادن، پیش رفتن (بفرمایید صحبت کنید یا اقدام کنید)",
        en: "Sorry for interrupting you; please go ahead with your story.",
        fa: "ببخشید حرفت را قطع کردم؛ لطفاً به داستانت ادامه بده (بفرما).",
        icon: "🟢",
        examples: [
          { en: "Sorry for interrupting you; please go ahead with your story.", fa: "ببخشید حرفت را قطع کردم؛ لطفاً به داستانت ادامه بده (بفرما)." },
          { en: "Do you want me to go ahead with the travel reservation right now?", fa: "آیا می‌خواهی همین الان رزرو سفر را جلو ببرم و انجام دهم؟" },
          { en: "The manager gave us permission to go ahead with the proposal.", fa: "مدیر به ما اجازه داد که طرح پیشنهادی را جلو ببریم." }
        ]
      }
    ]
  },
  pv_b1_clothes: {
    name: "پوشش و لباس",
    title: "پوشش و لباس",
    icon: "👞",
    level: "B1",
    words: [
      {
        id: "slip_on",
        word: "slip on",
        level: "B1",
        theme: "لباس و پوشش",
        oldCat: "pvClothes",
        meaning: "سریع و راحت پوشیدن (کفش، دمپایی، لباس)",
        en: "Slip on your slippers so your feet do not get cold.",
        fa: "دمپایی‌هایت را پایت کن تا پاهایت سرد نشوند.",
        icon: "🥿",
        examples: [
          { en: "Slip on your slippers so your feet do not get cold.", fa: "دمپایی‌هایت را پایت کن تا پاهایت سرد نشوند." },
          { en: "She slipped on a light jacket and walked outside.", fa: "او یک کت سبک پوشید و به بیرون قدم زد." },
          { en: "I can just slip on these shoes without tying laces.", fa: "می‌توانم این کفش‌ها را بدون بستن بند به راحتی بپوشم." }
        ]
      },
      {
        id: "roll_up",
        word: "roll up",
        level: "B1",
        theme: "لباس و پوشش",
        oldCat: "pvClothes",
        meaning: "بالا زدن، تا زدن (آستین یا پاچه شلوار)",
        en: "Roll up your sleeves before washing the dishes.",
        fa: "قبل از شستن ظرف‌ها، آستین‌هایت را بالا بزن.",
        icon: "💪",
        examples: [
          { en: "Roll up your sleeves before washing the dishes.", fa: "قبل از شستن ظرف‌ها، آستین‌هایت را بالا بزن." },
          { en: "He rolled up his pant legs to walk across the stream.", fa: "او پاچه‌های شلوارش را بالا زد تا از میان نهر رد شود." },
          { en: "Let us roll up the floor rug to sweep under it.", fa: "بیا فرش را لوله کنیم تا زیر آن را جارو بکشیم." }
        ]
      },
      {
        id: "buckle_up",
        word: "buckle up",
        level: "B1",
        theme: "لباس و پوشش",
        oldCat: "pvClothes",
        meaning: "کمربند بستن (کمربند ایمنی یا سگک)",
        en: "Make sure all passengers buckle up before you start driving.",
        fa: "مطمئن شو قبل از اینکه راه بیفتی همه سرنشینان کمربندشان را ببندند.",
        icon: "🔒",
        examples: [
          { en: "Don't forget to buckle up even on short trips.", fa: "حتی در سفرهای کوتاه هم بستن کمربند را فراموش نکن." },
          { en: "She reminded her kids to buckle up in the back seat.", fa: "او به فرزندانش یادآوری کرد که در صندلی عقب کمربندهایشان را ببندند." },
          { en: "Buckle up tightly; safety always comes first on the road.", fa: "کمربندت را محکم ببند؛ در جاده همیشه ایمنی حرف اول را می‌زند." }
        ]
      },
      {
        id: "grow_out_of",
        word: "grow out of",
        level: "B1",
        theme: "لباس و پوشش",
        oldCat: "pvClothes",
        meaning: "به خاطر رشد اندازه نبودن لباس، از لباسی بزرگتر شدن",
        en: "He grew out of all of his clothes, and now we need to buy new ones.",
        fa: "قد کشید و همه لباس‌هایش برایش کوچک شد، و حالا باید لباس‌های نو بخریم.",
        icon: "📏",
        examples: [
          { en: "He grew out of all of his clothes, and now we need to buy new ones.", fa: "قد کشید و همه لباس‌هایش برایش کوچک شد، و حالا باید لباس‌های نو بخریم." },
          { en: "Children grow out of their winter shoes very quickly.", fa: "کفش‌های زمستانی بچه‌ها خیلی سریع به خاطر رشد برایشان کوچک می‌شود." },
          { en: "We gave away the baby clothes that he had grown out of.", fa: "لباس‌های نوزادی را که دیگر برایش کوچک شده بود، به دیگران بخشیدیم." }
        ]
      },
      {
        id: "grow_into",
        word: "grow into",
        level: "B1",
        theme: "لباس و پوشش",
        oldCat: "pvClothes",
        meaning: "با رشد اندازه شدن لباس",
        en: "I bought this jacket a size too big because my son will grow into it.",
        fa: "این کاپشن را یک سایز بزرگ‌تر خریدم چون پسرم با رشدش اندازه‌اش خواهد شد.",
        icon: "🧥",
        examples: [
          { en: "I bought this jacket a size too big because my son will grow into it.", fa: "این کاپشن را یک سایز بزرگ‌تر خریدم چون پسرم با رشدش اندازه‌اش خواهد شد." },
          { en: "The pants look a bit long now, but she will grow into them soon.", fa: "شلوار الان کمی بلند به نظر می‌رسد، اما او به زودی رشد می‌کند و اندازه‌اش می‌شود." },
          { en: "Do not worry about the large sweater; he will grow into it by winter.", fa: "نگران بزرگی پلیور نباش؛ تا زمستان قد می‌کشد و اندازه‌اش می‌شود." }
        ]
      }
    ]
  },
  pv_b1_home: {
    name: "آشپزخانه و نظافت",
    title: "آشپزخانه و نظافت",
    icon: "🍳",
    level: "B1",
    words: [
      {
        id: "twist_off",
        word: "twist off",
        level: "B1",
        theme: "آشپزخانه و خوراکی",
        oldCat: "pvKitchen",
        meaning: "با پیچاندن باز کردن (درِ بطری یا شیشه)",
        en: "Twist off the bottle cap and pour some juice.",
        fa: "در بطری را با چرخاندن باز کن و کمی آبمیوه بریز.",
        icon: "🍾",
        examples: [
          { en: "Twist off the bottle cap and pour some juice.", fa: "در بطری را با چرخاندن باز کن و کمی آبمیوه بریز." },
          { en: "I cannot twist off this tight jar lid.", fa: "نمی‌توانم در سفت این شیشه را با چرخاندن باز کنم." },
          { en: "You can easily twist off the cap by hand.", fa: "می‌توانی به راحتی درپوش را با دست بچرخانی و باز کنی." }
        ]
      },
      {
        id: "screw_on",
        word: "screw on",
        level: "B1",
        theme: "آشپزخانه و خوراکی",
        oldCat: "pvKitchen",
        meaning: "پیچاندن و محکم بستن (درِ پیچی یا لامپ)",
        en: "Screw on the jar lid tightly so food stays fresh.",
        fa: "درِ شیشه را محکم بپیچان تا غذا تازه بماند.",
        icon: "🫙",
        examples: [
          { en: "Screw on the jar lid tightly so food stays fresh.", fa: "درِ شیشه را محکم بپیچان تا غذا تازه بماند." },
          { en: "Make sure to screw on the cap so the liquid will not spill.", fa: "مطمئن شو درپوش را پیچانده و محکم بسته‌ای تا مایع بیرون نریزد." },
          { en: "He screwed on the new light bulb carefully.", fa: "او لامپ حبابی جدید را با دقت پیچاند و بست." }
        ]
      },
      {
        id: "pop_open",
        word: "pop open",
        level: "B1",
        theme: "آشپزخانه و خوراکی",
        oldCat: "pvKitchen",
        meaning: "با تقه یا فشار باز کردن (قوطی، در)",
        en: "He popped open a cold soda can after work.",
        fa: "او بعد از کار یک قوطی نوشابه خنک را با تقه باز کرد.",
        icon: "🥫",
        examples: [
          { en: "He popped open a cold soda can after work.", fa: "او بعد از کار یک قوطی نوشابه خنک را با تقه باز کرد." },
          { en: "The trunk of the car popped open with a click.", fa: "صندوق عقب ماشین با یک تقه باز شد." },
          { en: "Pop open the container and take a cookie.", fa: "در ظرف را فشاری باز کن و یک شیرینی بردار." }
        ]
      },
      {
        id: "rinse_off",
        word: "rinse off",
        level: "B1",
        theme: "آشپزخانه و خوراکی",
        oldCat: "pvKitchen",
        meaning: "آب کشیدن (ظروف، میوه، دست)",
        en: "Rinse off the soapy plates under warm running water.",
        fa: "بشقاب‌های کفی را زیر آب گرم جاری آب بکش.",
        icon: "🚿",
        examples: [
          { en: "Rinse off the soapy plates under warm running water.", fa: "بشقاب‌های کفی را زیر آب گرم جاری آب بکش." },
          { en: "Always rinse off the fresh fruit before eating.", fa: "همیشه میوه تازه را قبل از خوردن آب بکش." },
          { en: "I need to rinse off the mud from my hands.", fa: "باید گِل را از روی دست‌هایم آب بکشم." }
        ]
      },
      {
        id: "wipe_down",
        word: "wipe down",
        level: "B1",
        theme: "نظافت و کارهای خانه",
        oldCat: "pvCleaning",
        meaning: "دستمال کشیدن و پاک کردن سطوح",
        en: "Wipe down the kitchen counter with a damp sponge.",
        fa: "کانتر آشپزخانه را با یک اسفنج مرطوب دستمال بکش.",
        icon: "🧽",
        examples: [
          { en: "Wipe down the kitchen counter with a damp sponge.", fa: "کانتر آشپزخانه را با یک اسفنج مرطوب دستمال بکش." },
          { en: "She wiped down the dining table after lunch.", fa: "او بعد از ناهار میز ناهارخوری را دستمال کشید." },
          { en: "Please wipe down the gym bench after you use it.", fa: "لطفاً بعد از استفاده، نیمکت باشگاه را دستمال بکش." }
        ]
      },
      {
        id: "soak_up",
        word: "soak up",
        level: "B1",
        theme: "نظافت و کارهای خانه",
        oldCat: "pvCleaning",
        meaning: "جذب کردن مایع، با اسفنج/دستمال آب کشیدن",
        en: "Use this paper towel to soak up the spilled water.",
        fa: "از این دستمال حوله‌ای استفاده کن تا آب ریخته‌شده را جذب کنی.",
        icon: "🧽",
        examples: [
          { en: "Use this paper towel to soak up the spilled water.", fa: "از این دستمال حوله‌ای استفاده کن تا آب ریخته‌شده را جذب کنی." },
          { en: "The dry sponge quickly soaked up all the milk on the table.", fa: "اسفنج خشک سریع تمام شیر روی میز را به خودش کشید." },
          { en: "This thick cloth soaks up any liquid easily.", fa: "این پارچه ضخیم هر مایعی را به راحتی به خود جذب می‌کند." }
        ]
      },
      {
        id: "tear_off",
        word: "tear off",
        level: "B1",
        theme: "نظافت و کارهای خانه",
        oldCat: "pvCleaning",
        meaning: "کندن با دست، جدا کردن (برگه، دستمال رول)",
        en: "Tear off a paper towel to dry your wet hands.",
        fa: "یک تکه دستمال حوله‌ای بکن تا دست‌های خیس خود را خشک کنی.",
        icon: "🧻",
        examples: [
          { en: "Tear off a paper towel to dry your wet hands.", fa: "یک تکه دستمال حوله‌ای بکن تا دست‌های خیس خود را خشک کنی." },
          { en: "He tore off a piece of tape to seal the box.", fa: "او تکه‌ای چسب کند تا جعبه را ببندد." },
          { en: "Tear off the price tag before wearing the new sweater.", fa: "قبل از پوشیدن پلیور جدید، برچسب قیمت را از آن بکن." }
        ]
      },
      {
        id: "fold_up",
        word: "fold up",
        level: "B1",
        theme: "نظافت و کارهای خانه",
        oldCat: "pvCleaning",
        meaning: "تا کردن مرتب (لباس یا ملافه)",
        en: "Fold up the clean blankets and put them in the closet.",
        fa: "پتوهای تمیز را تا کن و در کمد بگذار.",
        icon: "🧺",
        examples: [
          { en: "Fold up the clean blankets and put them in the closet.", fa: "پتوهای تمیز را تا کن و در کمد بگذار." },
          { en: "She folded up the washed laundry and stacked the shirts.", fa: "او لباس‌های شسته‌شده را تا کرد و پیراهن‌ها را روی هم چید." },
          { en: "Fold up your towels neatly before storing them.", fa: "حوله‌هایت را قبل از چیدن در کمد مرتب تا کن." }
        ]
      }
    ]
  },
  pv_b1_routine: {
    name: "روتین و وسایل",
    title: "روتین و وسایل",
    icon: "⏰",
    level: "B1",
    words: [
      {
        id: "cut_off",
        word: "cut off",
        level: "B1",
        theme: "وسایل و کنترل‌ها",
        oldCat: "pvAppliances",
        meaning: "قطع کردن (جریان آب، برق)، جدا کردن",
        en: "Cut off the main water valve if the pipe leaks.",
        fa: "اگر لوله نشتی دارد، فلکه اصلی آب را قطع کن.",
        icon: "✂️",
        examples: [
          { en: "Cut off the main water valve if the pipe leaks.", fa: "اگر لوله نشتی دارد، فلکه اصلی آب را قطع کن." },
          { en: "They cut off the electricity to repair the wiring.", fa: "آن‌ها برای تعمیر سیم‌کشی، جریان برق را قطع کردند." },
          { en: "Cut off the plastic tag with a pair of scissors.", fa: "اتیکت پلاستیکی را با یک قیچی جدا کن." }
        ]
      },
      {
        id: "air_dry",
        word: "air dry",
        level: "B1",
        theme: "وسایل و کنترل‌ها",
        oldCat: "pvAppliances",
        meaning: "در مجاورت هوا خشک شدن یا خشک کردن",
        en: "I prefer to air dry my hair instead of using a hairdryer.",
        fa: "ترجیح می‌دهم موهایم در هوای آزاد خشک شوند تا این‌که از سشوار استفاده کنم.",
        icon: "💨",
        examples: [
          { en: "I prefer to air dry my hair instead of using a hairdryer.", fa: "ترجیح می‌دهم موهایم در هوای آزاد خشک شوند تا این‌که از سشوار استفاده کنم." },
          { en: "Hang the delicate clothes outside to air dry in the sun.", fa: "لباس‌های ظریف را بیرون آویزان کن تا زیر نور آفتاب در هوا خشک شوند." },
          { en: "Let the clean dishes air dry in the rack naturally.", fa: "بگذار ظروف تمیز در آبچکان به طور طبیعی در هوا خشک شوند." }
        ]
      },
      {
        id: "roll_down",
        word: "roll down",
        level: "B1",
        theme: "وسایل و کنترل‌ها",
        oldCat: "pvAppliances",
        meaning: "پایین دادن، باز کردن (شیشه پنجره)",
        en: "Can you roll down the window to let fresh air in?",
        fa: "می‌توانی شیشه را پایین بدهی تا هوای تازه بیاید؟",
        icon: "🪟",
        examples: [
          { en: "Press the small button to roll down the side window.", fa: "دکمه کوچک را فشار بده تا شیشه کناری را پایین بدهی." },
          { en: "He rolled down the window to talk to the parking guard.", fa: "او شیشه را پایین کشید تا با نگهبان پارکینگ صحبت کند." },
          { en: "Roll down the car windows before turning on the air conditioner.", fa: "قبل از روشن کردن کولر، شیشه‌های ماشین را کمی پایین بده." }
        ]
      },
      {
        id: "tuck_in",
        word: "tuck in",
        level: "B1",
        theme: "روتین روزمره و خانه",
        oldCat: "pvRoutine",
        meaning: "تو زدن (لباس در شلوار)، مرتب کردن ملافه",
        en: "Tuck in your shirt before going to the interview.",
        fa: "قبل از رفتن به مصاحبه، پیراهنت را داخل شلوارت بزن.",
        icon: "👔",
        examples: [
          { en: "Tuck in your shirt before going to the interview.", fa: "قبل از رفتن به مصاحبه، پیراهنت را داخل شلوارت بزن." },
          { en: "She tucked in her warm blanket and fell asleep.", fa: "او پتوی گرمش را دور خود مرتب کرد و خوابش برد." },
          { en: "He tucked his trousers into his winter boots.", fa: "او پاچه شلوارش را داخل چکمه‌های زمستانی‌اش فرو برد." }
        ]
      },
      {
        id: "kick_off",
        word: "kick off",
        level: "B1",
        theme: "روتین روزمره و خانه",
        oldCat: "pvRoutine",
        meaning: "با پا درآوردن و پرتاب کردن کفش",
        en: "I kick off my shoes as soon as I get home.",
        fa: "به محض رسیدن به خانه، کفش‌هایم را با پا درمی‌آورم.",
        icon: "👟",
        examples: [
          { en: "I kick off my shoes as soon as I get home.", fa: "به محض رسیدن به خانه، کفش‌هایم را با پا درمی‌آورم." },
          { en: "She kicked off her heels and relaxed on the couch.", fa: "او کفش‌های پاشنه‌بلندش را از پا درآورد و روی کاناپه استراحت کرد." },
          { en: "Kick off your sandals before stepping onto the carpet.", fa: "قبل از پا گذاشتن روی فرش، صندل‌هایت را درآور." }
        ]
      },
      {
        id: "lock_up",
        word: "lock up",
        level: "B1",
        theme: "روتین روزمره و خانه",
        oldCat: "pvRoutine",
        meaning: "قفل کردن تمام درها، محکم بستن خانه یا مغازه",
        en: "Make sure you lock up the house before going on vacation.",
        fa: "مطمئن شو که قبل از رفتن به تعطیلات، همه درهای خانه را قفل می‌کنی.",
        icon: "🔒",
        examples: [
          { en: "Make sure you lock up the house before going on vacation.", fa: "مطمئن شو که قبل از رفتن به تعطیلات، همه درهای خانه را قفل می‌کنی." },
          { en: "The shopkeeper locks up the store at nine every night.", fa: "مغازه‌دار هر شب ساعت نه مغازه را قفل می‌کند." },
          { en: "Did you lock up the front and back gates?", fa: "آیا درهای ورودی و پشتی را قفل کردی؟" }
        ]
      },
      {
        id: "freshen_up",
        word: "freshen up",
        level: "B1",
        theme: "روتین روزمره و خانه",
        oldCat: "pvRoutine",
        meaning: "سر و وضع را مرتب کردن، دست‌ورویی شستن",
        en: "I need to go to the bathroom to freshen up after the trip.",
        fa: "من باید بعد از سفر بروم دستشویی و دست و رویی بشویم.",
        icon: "✨",
        examples: [
          { en: "I need to go to the bathroom to freshen up after the trip.", fa: "من باید بعد از سفر بروم دستشویی و دست و رویی بشویم." },
          { en: "She splashed cold water on her face to freshen up.", fa: "او به صورتش آب خنک زد تا سرحال شود و طراوت بگیرد." },
          { en: "Guests can freshen up in the guest room before dinner.", fa: "مهمان‌ها می‌توانند قبل از شام در اتاق مهمان سر و وضعشان را مرتب کنند." }
        ]
      },
      {
        id: "fill_up",
        word: "fill up",
        level: "B1",
        theme: "روتین روزمره و خانه",
        oldCat: "pvRoutine",
        meaning: "پر کردن، باک بنزین را لبریز کردن",
        en: "I need to stop at the gas station and fill up the tank.",
        fa: "باید در پمپ بنزین توقف کنم و باک را پر کنم.",
        icon: "⛽",
        examples: [
          { en: "We filled up the car before our long highway drive.", fa: "قبل از رانندگی طولانی در بزرگراه، باک ماشین را پر کردیم." },
          { en: "Always fill up your water bottle before leaving home.", fa: "همیشه قبل از خروج از خانه، بطری آبت را پر کن." },
          { en: "It cost fifty dollars to fill up the entire gas tank.", fa: "پر کردن کل باک بنزین پنجاه دلار هزینه داشت." }
        ]
      }
    ]
  },
  pv_b1_work: {
    name: "کار و یادگیری",
    title: "کار و یادگیری",
    icon: "📋",
    level: "B1",
    words: [
      {
        id: "follow_up",
        word: "follow up",
        level: "B1",
        theme: "محیط کار و تحصیل",
        oldCat: "pvWork",
        meaning: "پیگیری کردن، دنبال کردن کار یا وضعیت قبلی",
        en: "It is a great habit to follow up a job interview with a polite email.",
        fa: "این عادت بسیار خوبی است که مصاحبه شغلی را با یک ایمیل مؤدبانه پیگیری کنی.",
        icon: "📧",
        examples: [
          { en: "It is a great habit to follow up a job interview with a polite email.", fa: "این عادت بسیار خوبی است که مصاحبه شغلی را با یک ایمیل مؤدبانه پیگیری کنی." },
          { en: "I will follow up with the manager tomorrow regarding the contract.", fa: "من فردا در مورد قرارداد با مدیر پیگیری خواهم کرد." },
          { en: "Please follow up on that customer request by the end of the day.", fa: "لطفاً تا پایان روز آن درخواست مشتری را پیگیری کن." }
        ]
      },
      {
        id: "go_over",
        word: "go over",
        level: "B1",
        theme: "محیط کار و تحصیل",
        oldCat: "pvWork",
        meaning: "مرور و بررسی دقیق کردن جزئیات یک متن، گزارش یا سند",
        en: "I need to go over the contract carefully before I sign it.",
        fa: "باید قبل از امضا کردن، قرارداد را با دقت مرور و بررسی کنم.",
        icon: "📋",
        examples: [
          { en: "I need to go over the contract carefully before I sign it.", fa: "باید قبل از امضا کردن، قرارداد را با دقت مرور و بررسی کنم." },
          { en: "Can we go over the project plan together before the meeting?", fa: "می‌شود قبل از جلسه، برنامه پروژه را با هم مرور و بررسی کنیم؟" },
          { en: "The teacher will go over the exam questions with the class tomorrow.", fa: "معلم فردا سؤالات امتحان را با کل کلاس مرور و بررسی خواهد کرد." }
        ]
      },
      {
        id: "point_out",
        word: "point out",
        level: "B1",
        theme: "محیط کار و تحصیل",
        oldCat: "pvWork",
        meaning: "اشاره کردن، متذکر شدن، جلب توجه به یک نکته",
        en: "I would like to point out that sales have increased by twenty percent.",
        fa: "مایلم اشاره کنم که فروش بیست درصد افزایش یافته است.",
        icon: "👉",
        examples: [
          { en: "I would like to point out that sales have increased by twenty percent.", fa: "مایلم اشاره کنم که فروش بیست درصد افزایش یافته است." },
          { en: "She pointed out a few minor mistakes in the final draft.", fa: "او به چند اشتباه جزئی در پیش‌نویس نهایی اشاره کرد." },
          { en: "Can you point out your office location on the company map?", fa: "می‌توانی موقعیت دفترت را روی نقشه شرکت نشان بدهی؟" }
        ]
      },
      {
        id: "cross_off",
        word: "cross off",
        level: "B1",
        theme: "محیط کار و تحصیل",
        oldCat: "pvWork",
        meaning: "خط زدن (از فهرست وظایف پس از انجام)",
        en: "I crossed off all the urgent tasks on my to-do list before noon.",
        fa: "قبل از ظهر تمام وظایف فوری را از لیست کارهایم خط زدم.",
        icon: "✏️",
        examples: [
          { en: "I crossed off all the urgent tasks on my to-do list before noon.", fa: "قبل از ظهر تمام وظایف فوری را از لیست کارهایم خط زدم." },
          { en: "It feels so satisfying to cross off a completed project.", fa: "خط زدن پروژه‌ای که تمام شده بسیار حس رضایت‌بخشی دارد." },
          { en: "Cross off each item as soon as you purchase it at the market.", fa: "به محض خرید هر مورد در فروشگاه، آن را خط بزن." }
        ]
      },
      {
        id: "put_off",
        word: "put off",
        level: "B1",
        theme: "محیط کار و تحصیل",
        oldCat: "pvWork",
        meaning: "به تعویق انداختن، پشت گوش انداختن کارها",
        en: "Stop putting off your assignments until the night before the deadline.",
        fa: "پشت گوش انداختن تکالیفت را تا شب قبل از ضرب‌الاجل متوقف کن.",
        icon: "⏳",
        examples: [
          { en: "Stop putting off your assignments until the night before the deadline.", fa: "پشت گوش انداختن تکالیفت را تا شب قبل از ضرب‌الاجل متوقف کن." },
          { en: "We had to put off the team meeting until next Monday.", fa: "مجبور شدیم جلسه تیم را تا دوشنبه آینده به تعویق بیندازیم." },
          { en: "Do not put off studying if you want to pass the exam easily.", fa: "اگر می‌خواهی راحت در امتحان قبول شوی، درس خواندن را به تعویق نینداز." }
        ]
      },
      {
        id: "do_over",
        word: "do over",
        level: "B1",
        theme: "محیط کار و تحصیل",
        oldCat: "pvWork",
        meaning: "از نو انجام دادن، دوباره انجام دادن کاری به خاطر اشتباه",
        en: "The report had several errors, so the boss asked me to do it over.",
        fa: "گزارش چندین اشتباه داشت، بنابراین رئیس از من خواست آن را از نو انجام دهم.",
        icon: "🔄",
        examples: [
          { en: "The report had several errors, so the boss asked me to do it over.", fa: "گزارش چندین اشتباه داشت، بنابراین رئیس از من خواست آن را از نو انجام دهم." },
          { en: "If you make a mistake on the drawing, you just have to do it over.", fa: "اگر در طراحی اشتباه کردی، فقط باید آن را دوباره از اول بکشی." },
          { en: "I filled out the wrong form and had to do the whole application over.", fa: "فرم اشتباهی را پر کردم و مجبور شدم تمام درخواست را از نو انجام دهم." }
        ]
      }
    ]
  },
  pv_b1_social: {
    name: "روابط و گفتگو",
    title: "روابط و گفتگو",
    icon: "💬",
    level: "B1",
    words: [
      {
        id: "ask_out",
        word: "ask out",
        level: "B1",
        theme: "روابط و احساسات",
        oldCat: "pvSocial",
        meaning: "کسی را به قرار ملاقات یا شام دعوت کردن",
        en: "He finally got the courage to ask her out for coffee.",
        fa: "او بالاخره این شجاعت را پیدا کرد که او را برای قهوه به قرار دعوت کند.",
        icon: "💌",
        examples: [
          { en: "He finally got the courage to ask her out for coffee.", fa: "او بالاخره این شجاعت را پیدا کرد که او را برای قهوه به قرار دعوت کند." },
          { en: "Are you going to ask him out to the concert or not?", fa: "آیا قصد داری او را به کنسرت دعوت کنی یا نه؟" },
          { en: "My husband asked me out on a date seventeen years ago.", fa: "همسرم هفده سال پیش مرا به یک قرار دعوت کرد." }
        ]
      },
      {
        id: "let_down",
        word: "let down",
        level: "B1",
        theme: "روابط و احساسات",
        oldCat: "pvSocial",
        meaning: "ناامید کردن، مأیوس کردن کسی با زیر پا گذاشتن اعتماد",
        en: "My family always believed in me, so I never wanted to let them down.",
        fa: "خانواده‌ام همیشه به من باور داشتند، بنابراین هیچ‌وقت نمی‌خواستم ناامیدشان کنم.",
        icon: "💔",
        examples: [
          { en: "My family always believed in me, so I never wanted to let them down.", fa: "خانواده‌ام همیشه به من باور داشتند، بنابراین هیچ‌وقت نمی‌خواستم ناامیدشان کنم." },
          { en: "When you broke your promise, you really let me down.", fa: "وقتی قولت را شکستی، واقعاً من را ناامید و دل‌شکسته کردی." },
          { en: "I will do my best on this project so I do not let the team down.", fa: "من در این پروژه تمام تلاشم را خواهم کرد تا تیم را ناامید نکنم." }
        ]
      },
      {
        id: "count_on",
        word: "count on",
        level: "B1",
        theme: "روابط و احساسات",
        oldCat: "pvSocial",
        meaning: "حساب کردن روی کسی، اطمینان و تکیه کردن",
        en: "I know I can count on my best friend whenever I need help.",
        fa: "می‌دانم هر زمان به کمک نیاز داشته باشم، می‌توانم روی بهترین دوستم حساب کنم.",
        icon: "🤝",
        examples: [
          { en: "I know I can count on my best friend whenever I need help.", fa: "می‌دانم هر زمان به کمک نیاز داشته باشم، می‌توانم روی بهترین دوستم حساب کنم." },
          { en: "You can count on me to finish the report on time.", fa: "می‌توانی روی من حساب کنی که گزارش را به موقع تمام کنم." },
          { en: "True friends are people you can always count on.", fa: "دوستان واقعی کسانی هستند که همیشه می‌توانی رویشان حساب کنی." }
        ]
      },
      {
        id: "cheer_up",
        word: "cheer up",
        level: "B1",
        theme: "روابط و احساسات",
        oldCat: "pvSocial",
        meaning: "شاد کردن، روحیه دادن به کسی؛ سر حال آمدن",
        en: "I brought you these fresh flowers to cheer you up.",
        fa: "من این گل‌های تازه را برایت آوردم تا خوشحالت کنم و به تو روحیه بدهم.",
        icon: "🌻",
        examples: [
          { en: "I brought you these fresh flowers to cheer you up.", fa: "من این گل‌های تازه را برایت آوردم تا خوشحالت کنم و به تو روحیه بدهم." },
          { en: "A cup of hot tea always cheers me up on a rainy day.", fa: "یک فنجان چای داغ در یک روز بارانی همیشه حالم را سر جایش می‌آورد." },
          { en: "Cheer up! Tomorrow is a brand new day.", fa: "روحیه داشته باش و شاد باش! فردا یک روز کاملاً تازه است." }
        ]
      },
      {
        id: "call_around",
        word: "call around",
        level: "B1",
        theme: "ارتباط و گفتگو",
        oldCat: "pvCommunication",
        meaning: "به چند جا یا چند نفر تلفن زدن برای یافتن اطلاعات یا کالا",
        en: "I will call around to local garages to find the best repair price.",
        fa: "به تعمیرگاه‌های محلی زنگ خواهم زد تا بهترین قیمت تعمیر را پیدا کنم.",
        icon: "📱",
        examples: [
          { en: "I will call around to local garages to find the best repair price.", fa: "به تعمیرگاه‌های محلی زنگ خواهم زد تا بهترین قیمت تعمیر را پیدا کنم." },
          { en: "She called around to see if any friends wanted an extra concert ticket.", fa: "او به چند نفر زنگ زد تا ببیند آیا کسی بلیط اضافه کنسرت را می‌خواهد یا نه." },
          { en: "The pharmacy did not have the medicine, but they offered to call around.", fa: "داروخانه دارو را نداشت، اما پیشنهاد داد به جاهای دیگر زنگ بزند." }
        ]
      },
      {
        id: "ask_around",
        word: "ask around",
        level: "B1",
        theme: "ارتباط و گفتگو",
        oldCat: "pvCommunication",
        meaning: "از افراد مختلف پرس‌وجو کردن، جویا شدن",
        en: "I will ask around in the neighborhood to see if anyone found your lost dog.",
        fa: "در محله از این و آن پرس‌وجو خواهم کرد تا ببینم کسی سگ گم‌شده‌ات را دیده است یا نه.",
        icon: "🗣️",
        examples: [
          { en: "I will ask around in the neighborhood to see if anyone found your lost dog.", fa: "در محله از این و آن پرس‌وجو خواهم کرد تا ببینم کسی سگ گم‌شده‌ات را دیده است یا نه." },
          { en: "If you need an apartment, ask around at work; someone might know a place.", fa: "اگر آپارتمان نیاز داری، سر کار پرس‌وجو کن؛ شاید کسی جایی را بشناسد." },
          { en: "I asked around, but nobody had heard the news yet.", fa: "از چند نفر پرس‌وجو کردم، اما هنوز هیچ‌کس خبر را نشنیده بود." }
        ]
      },
      {
        id: "break_down_explain",
        word: "break down",
        level: "B1",
        theme: "ارتباط و گفتگو",
        oldCat: "pvCommunication",
        meaning: "ساده کردن، بخش‌بخش توضیح دادن مفاهیم پیچیده",
        en: "The teacher broke down the grammar rule so everyone could easily understand.",
        fa: "معلم قانون گرامر را بخش‌بخش توضیح داد تا همه بتوانند راحت درکش کنند.",
        icon: "🧩",
        examples: [
          { en: "The teacher broke down the grammar rule so everyone could easily understand.", fa: "معلم قانون گرامر را بخش‌بخش توضیح داد تا همه بتوانند راحت درکش کنند." },
          { en: "Let me break down the steps before we begin the new exercise.", fa: "اجازه بدهید قبل از شروع تمرین جدید، مراحل را ساده و خرد کنم." },
          { en: "He broke down the monthly budget into three clear categories.", fa: "او بودجه ماهانه را به سه دسته مشخص و ساده تقسیم کرد." }
        ]
      },
      {
        id: "figure_out",
        word: "figure out",
        level: "B1",
        theme: "ارتباط و گفتگو",
        oldCat: "pvCommunication",
        meaning: "سر درآوردن، پی بردن، فهمیدن چگونگی حل مسئله",
        en: "It took me an hour to figure out why the computer code was not working.",
        fa: "یک ساعت طول کشید تا سر دربیاورم چرا کد کامپیوتر کار نمی‌کرد.",
        icon: "🔍",
        examples: [
          { en: "It took me an hour to figure out why the computer code was not working.", fa: "یک ساعت طول کشید تا سر دربیاورم چرا کد کامپیوتر کار نمی‌کرد." },
          { en: "Listen carefully to the audio and try to figure out the general meaning.", fa: "با دقت به صوت گوش کن و سعی کن معنی کلی را سر دربیاوری." },
          { en: "We need to figure out a convenient time for everyone to meet.", fa: "باید زمان مناسبی را پیدا کنیم تا همه بتوانند جلسه بگذارند." }
        ]
      },
      {
        id: "give_away",
        word: "give away",
        level: "B1",
        theme: "ارتباط و گفتگو",
        oldCat: "pvCommunication",
        meaning: "لو دادن (پایان فیلم، راز)؛ رایگان بخشیدن",
        en: "Do not give away the ending of the movie before I watch it tonight.",
        fa: "قبل از این‌که امشب فیلم را ببینم، پایانش را لو نده.",
        icon: "🎁",
        examples: [
          { en: "Do not give away the ending of the movie before I watch it tonight.", fa: "قبل از این‌که امشب فیلم را ببینم، پایانش را لو نده." },
          { en: "Her facial expression gave away the fact that she was nervous.", fa: "حالت چهره‌اش این واقعیت را لو داد که او مضطرب بود." },
          { en: "We decided to give away our extra furniture to a family in need.", fa: "تصمیم گرفتیم مبلمان اضافه‌مان را به رایگان به یک خانواده نیازمند ببخشیم." }
        ]
      },
      {
        id: "break_down_machine",
        word: "break down",
        level: "B1",
        theme: "مسائل و چالش‌ها",
        oldCat: "pvChallenges",
        meaning: "خراب شدن و از کار افتادن (ماشین، وسیله یا دستگاه بزرگ)",
        en: "It is a terrible day for my car to break down in the heavy rain.",
        fa: "روز بسیار بدی است که ماشینم در این باران شدید خراب شود و از کار بیفتد.",
        icon: "🚗",
        examples: [
          { en: "It is a terrible day for my car to break down in the heavy rain.", fa: "روز بسیار بدی است که ماشینم در این باران شدید خراب شود و از کار بیفتد." },
          { en: "If you do not service appliances regularly, they will break down faster.", fa: "اگر وسایل را مرتب سرویس نکنی، سریع‌تر خراب می‌شوند و از کار می‌افتند." },
          { en: "Our washing machine broke down, so we have to wash clothes by hand.", fa: "ماشین لباسشویی‌مان خراب شد، بنابراین باید لباس‌ها را با دست بشوییم." }
        ]
      },
      {
        id: "get_over",
        word: "get over",
        level: "B1",
        theme: "مسائل و چالش‌ها",
        oldCat: "pvChallenges",
        meaning: "بهبود یافتن، پشت سر گذاشتن (بیماری، شکست یا اندوه)",
        en: "I am finally getting over a terrible cold and feeling much better today.",
        fa: "بالاخره دارم سرماخوردگی شدید را پشت سر می‌گذارم و امروز خیلی حالم بهتر است.",
        icon: "🩹",
        examples: [
          { en: "I am finally getting over a terrible cold and feeling much better today.", fa: "بالاخره دارم سرماخوردگی شدید را پشت سر می‌گذارم و امروز خیلی حالم بهتر است." },
          { en: "It took her several months to get over the emotional pain of the breakup.", fa: "چند ماه طول کشید تا او درد عاطفی جدایی را پشت سر بگذارد." },
          { en: "Do not worry about the job rejection; you will get over it soon.", fa: "نگران رد شدن در مصاحبه شغلی نباش؛ به زودی آن را پشت سر می‌گذاری." }
        ]
      }
    ]
  },
  pv_b2_social: {
    name: "روابط و سبک زندگی",
    title: "روابط و سبک زندگی",
    icon: "👥",
    level: "B2",
    words: [
      {
        id: "crack_open",
        word: "crack open",
        level: "B2",
        theme: "روتین روزمره و خانه",
        oldCat: "pvRoutine",
        meaning: "کمی باز کردن (در یا پنجره)، باز کردن نوشیدنی",
        en: "Crack open the window to let some fresh air in.",
        fa: "پنجره را کمی باز بگذار تا هوای تازه داخل بیاید.",
        icon: "🪟",
        examples: [
          { en: "Crack open the window to let some fresh air in.", fa: "پنجره را کمی باز بگذار تا هوای تازه داخل بیاید." },
          { en: "He cracked open the door to see who was outside.", fa: "او لای در را کمی باز کرد تا ببیند چه کسی بیرون است." },
          { en: "Let us crack open a cold drink and relax.", fa: "بیا یک نوشیدنی خنک باز کنیم و استراحت کنیم." }
        ]
      },
      {
        id: "prop_up",
        word: "prop up",
        level: "B2",
        theme: "روتین روزمره و خانه",
        oldCat: "pvRoutine",
        meaning: "تکیه دادن، بالا گذاشتن (پا یا بالش)",
        en: "Prop your feet up on the coffee table and relax.",
        fa: "پاهایت را روی میز پذیرایی بالا بگذار و استراحت کن.",
        icon: "🛋️",
        examples: [
          { en: "Prop your feet up on the coffee table and relax.", fa: "پاهایت را روی میز پذیرایی بالا بگذار و استراحت کن." },
          { en: "She propped herself up with two pillows in bed to read.", fa: "او در تخت با دو بالش به پشت تکیه داد تا کتاب بخواند." },
          { en: "Prop up the heavy mirror against the wall carefully.", fa: "آینه سنگین را با احتیاط به دیوار تکیه بده." }
        ]
      },
      {
        id: "kick_back",
        word: "kick back",
        level: "B2",
        theme: "روتین روزمره و خانه",
        oldCat: "pvRoutine",
        meaning: "لم دادن، ریلکس کردن و آرام گرفتن",
        en: "Kick back and enjoy your favorite movie tonight.",
        fa: "امشب لم بده و از فیلم مورد علاقه‌ات لذت ببر.",
        icon: "🍿",
        examples: [
          { en: "Kick back and enjoy your favorite movie tonight.", fa: "امشب لم بده و از فیلم مورد علاقه‌ات لذت ببر." },
          { en: "On weekends, I love to kick back with a warm cup of tea.", fa: "آخر هفته‌ها عاشق این هستم که با یک فنجان چای گرم لم بدهم." },
          { en: "After finishing work, the team kicked back at the cafe.", fa: "بعد از تمام شدن کار، اعضای تیم در کافه ریلکس کردند." }
        ]
      },
      {
        id: "look_up_to",
        word: "look up to",
        level: "B2",
        theme: "روابط و احساسات",
        oldCat: "pvSocial",
        meaning: "احترام گذاشتن، تحسین کردن و الگو قرار دادن",
        en: "My parents are both hard workers and I look up to them.",
        fa: "پدر و مادرم هر دو سخت‌کوش هستند و من آن‌ها را الگو و مایه احترام می‌دانم.",
        icon: "🌟",
        examples: [
          { en: "My parents are both hard workers and I look up to them.", fa: "پدر و مادرم هر دو سخت‌کوش هستند و من آن‌ها را الگو و مایه احترام می‌دانم." },
          { en: "Young athletes often look up to professional players.", fa: "ورزشکاران جوان اغلب بازیکنان حرفه‌ای را الگوی خود قرار می‌دهند." },
          { en: "She is a kind teacher that every student looks up to.", fa: "او معلم مهربانی است که همه دانش‌آموزان به او احترام می‌گذارند و تحسینش می‌کنند." }
        ]
      },
      {
        id: "cheer_on",
        word: "cheer on",
        level: "B2",
        theme: "روابط و احساسات",
        oldCat: "pvSocial",
        meaning: "تشویق کردن، هورا کشیدن و روحیه دادن به تیم یا فرد",
        en: "Let us stand near the finish line and cheer on our team.",
        fa: "بیا نزدیک خط پایان بایستیم و تیم‌مان را تشویق کنیم.",
        icon: "📣",
        examples: [
          { en: "Let us stand near the finish line and cheer on our team.", fa: "بیا نزدیک خط پایان بایستیم و تیم‌مان را تشویق کنیم." },
          { en: "The crowd was cheering on the runners during the entire marathon.", fa: "تماشاگران در تمام طول ماراتن دوندگان را تشویق می‌کردند." },
          { en: "Parents came to the stadium to cheer on their children.", fa: "والدین به ورزشگاه آمدند تا فرزندانشان را تشویق کنند." }
        ]
      },
      {
        id: "grow_apart",
        word: "grow apart",
        level: "B2",
        theme: "روابط و احساسات",
        oldCat: "pvSocial",
        meaning: "از هم دور شدن، سرد شدن و فاصله افتادن در رابطه",
        en: "We were best friends in school, but as we got older we grew apart.",
        fa: "ما در مدرسه صمیمی‌ترین دوست بودیم، اما با بزرگ‌تر شدنمان از هم دور شدیم.",
        icon: "🍂",
        examples: [
          { en: "We were best friends in school, but as we got older we grew apart.", fa: "ما در مدرسه صمیمی‌ترین دوست بودیم، اما با بزرگ‌تر شدنمان از هم دور شدیم." },
          { en: "If friends do not spend quality time together, they may slowly grow apart.", fa: "اگر دوستان وقت باکیفیت کنار هم نگذرانند، ممکن است به آرامی از هم دور شوند." },
          { en: "They never argued, but their busy lives made them grow apart.", fa: "آن‌ها هرگز بحث نکردند، اما مشغله‌های زندگی باعث شد از هم فاصله بگیرند." }
        ]
      },
      {
        id: "bring_down",
        word: "bring down",
        level: "B2",
        theme: "روابط و احساسات",
        oldCat: "pvSocial",
        meaning: "ناراحت کردن، روحیه را پایین آوردن، حال کسی را گرفتن",
        en: "Her constant complaining really brings down everyone in the room.",
        fa: "غر زدن مداوم او واقعاً روحیه همه افراد حاضر در اتاق را پایین می‌آورد.",
        icon: "😞",
        examples: [
          { en: "Her constant complaining really brings down everyone in the room.", fa: "غر زدن مداوم او واقعاً روحیه همه افراد حاضر در اتاق را پایین می‌آورد." },
          { en: "I hate to bring down the party mood, but I have bad news.", fa: "بدم می‌آید حال و هوای جشن را خراب کنم، اما خبر بدی دارم." },
          { en: "Try not to let negative comments bring you down.", fa: "سعی کن اجازه ندهی نظرات منفی روحیه‌ات را خراب کند." }
        ]
      },
      {
        id: "come_across_as",
        word: "come across as",
        level: "B2",
        theme: "روابط و احساسات",
        oldCat: "pvSocial",
        meaning: "به نظر رسیدن، جلوه کردن، ایجاد تصویری خاص در ذهن دیگران",
        en: "Smile when you greet guests so you do not come across as rude.",
        fa: "وقتی به مهمانان خوشامد می‌گویی لبخند بزن تا بی‌ادب به نظر نرسی.",
        icon: "🎭",
        examples: [
          { en: "Smile when you greet guests so you do not come across as rude.", fa: "وقتی به مهمانان خوشامد می‌گویی لبخند بزن تا بی‌ادب به نظر نرسی." },
          { en: "She came across as confident and well-prepared during the interview.", fa: "او در طول مصاحبه بااعتمادبه‌نفس و کاملاً آماده جلوه کرد." },
          { en: "He speaks quietly and sometimes comes across as shy.", fa: "او آرام صحبت می‌کند و گاهی اوقات خجالتی به نظر می‌رسد." }
        ]
      }
    ]
  },
  pv_b2_challenges: {
    name: "مسائل و چالش‌ها",
    title: "مسائل و چالش‌ها",
    icon: "🎯",
    level: "B2",
    words: [
      {
        id: "follow_through",
        word: "follow through",
        level: "B2",
        theme: "محیط کار و تحصیل",
        oldCat: "pvWork",
        meaning: "به سرانجام رساندن، پای حرف ایستادن و تمام کردن تعهد",
        en: "It was a challenging project, but she followed through and finished it.",
        fa: "پروژه چالش‌برانگیزی بود، اما او کار را تا آخر ادامه داد و تمامش کرد.",
        icon: "🎯",
        examples: [
          { en: "It was a challenging project, but she followed through and finished it.", fa: "پروژه چالش‌برانگیزی بود، اما او کار را تا آخر ادامه داد و تمامش کرد." },
          { en: "He makes ambitious promises, but he rarely follows through.", fa: "او قول‌های بزرگی می‌دهد، اما به ندرت پای حرفش می‌ایستد و تمامشان می‌کند." },
          { en: "If you start a study plan, you need to follow through every week.", fa: "اگر برنامه درسی را شروع کردی، باید هر هفته آن را تا آخر ادامه بدهی." }
        ]
      },
      {
        id: "drop_out",
        word: "drop out",
        level: "B2",
        theme: "محیط کار و تحصیل",
        oldCat: "pvWork",
        meaning: "ترک تحصیل کردن، انصراف دادن از دوره یا دانشگاه",
        en: "He dropped out of university to launch his own tech company.",
        fa: "او از دانشگاه انصراف داد تا شرکت فناوری خودش را راه‌اندازی کند.",
        icon: "🎓",
        examples: [
          { en: "He dropped out of university to launch his own tech company.", fa: "او از دانشگاه انصراف داد تا شرکت فناوری خودش را راه‌اندازی کند." },
          { en: "Many students drop out because the program is too demanding.", fa: "بسیاری از دانشجویان انصراف می‌دهند چون این دوره بسیار فشرده و سنگین است." },
          { en: "She decided not to drop out and persevered until graduation.", fa: "او تصمیم گرفت انصراف ندهد و تا زمان فارغ‌التحصیلی پایداری کرد." }
        ]
      },
      {
        id: "cut_out",
        word: "cut out",
        level: "B2",
        theme: "محیط کار و تحصیل",
        oldCat: "pvWork",
        meaning: "حذف کردن، درآوردن بخش‌های اضافی از متن یا گزارش",
        en: "If you cut out the repetitive paragraphs, the report will read better.",
        fa: "اگر بندهای تکراری را حذف کنی، گزارش روان‌تر خوانده خواهد شد.",
        icon: "✂️",
        examples: [
          { en: "If you cut out the repetitive paragraphs, the report will read better.", fa: "اگر بندهای تکراری را حذف کنی، گزارش روان‌تر خوانده خواهد شد." },
          { en: "The editor cut out two scenes from the promotional video.", fa: "تدوین‌گر دو صحنه را از ویدیوی تبلیغاتی حذف کرد." },
          { en: "You should cut out unnecessary details from your presentation.", fa: "باید جزئیات غیرضروری را از ارائه‌ات حذف کنی." }
        ]
      },
      {
        id: "do_away_with",
        word: "do away with",
        level: "B2",
        theme: "محیط کار و تحصیل",
        oldCat: "pvWork",
        meaning: "کنار گذاشتن، برچیدن، متوقف کردن رویه یا قانونی قدیمی",
        en: "Our company decided to do away with paper files and switch to digital storage.",
        fa: "شرکت ما تصمیم گرفت پرونده‌های کاغذی را کنار بگذارد و به ذخیره‌سازی دیجیتال روی بیاورد.",
        icon: "🗑️",
        examples: [
          { en: "Our company decided to do away with paper files and switch to digital storage.", fa: "شرکت ما تصمیم گرفت پرونده‌های کاغذی را کنار بگذارد و به ذخیره‌سازی دیجیتال روی بیاورد." },
          { en: "The school wants to do away with traditional uniform rules.", fa: "مدرسه می‌خواهد قوانین سنتی لباس فرم را برچیند." },
          { en: "Many modern offices have done away with fixed cubicles.", fa: "بسیاری از دفاتر مدرن اتاقک‌های کاری ثابت را کنار گذاشته‌اند." }
        ]
      },
      {
        id: "get_across",
        word: "get across",
        level: "B2",
        theme: "ارتباط و گفتگو",
        oldCat: "pvCommunication",
        meaning: "منظور خود را رساندن، تفهیم کردن مطلب",
        en: "She is an excellent speaker and always gets her main point across clearly.",
        fa: "او سخنران فوق‌العاده‌ای است و همیشه نکته اصلی‌اش را به روشنی تفهیم می‌کند.",
        icon: "💡",
        examples: [
          { en: "She is an excellent speaker and always gets her main point across clearly.", fa: "او سخنران فوق‌العاده‌ای است و همیشه نکته اصلی‌اش را به روشنی تفهیم می‌کند." },
          { en: "It can be difficult to get your ideas across in a second language.", fa: "رساندن ایده‌هایت به یک زبان دوم می‌تواند کار دشواری باشد." },
          { en: "Use simple diagrams to help get the message across.", fa: "از نمودارهای ساده استفاده کن تا به رساندن پیام کمک کنی." }
        ]
      },
      {
        id: "break_into",
        word: "break into",
        level: "B2",
        theme: "مسائل و چالش‌ها",
        oldCat: "pvChallenges",
        meaning: "به زور یا غیرقانونی وارد شدن، دستبرد زدن",
        en: "I forgot my house key, so I had to break into my own apartment.",
        fa: "کلید خانه‌ام را فراموش کردم، بنابراین مجبور شدم به آپارتمان خودم به زور وارد شوم.",
        icon: "🚨",
        examples: [
          { en: "I forgot my house key, so I had to break into my own apartment.", fa: "کلید خانه‌ام را فراموش کردم، بنابراین مجبور شدم به آپارتمان خودم به زور وارد شوم." },
          { en: "Wild animals broke into our outdoor trash cans during the night.", fa: "حیوانات وحشی شبانه به سطل‌های زباله بیرونی دستبرد زدند و بازشان کردند." },
          { en: "A thief attempted to break into the electronics store after closing.", fa: "یک دزد تلاش کرد بعد از تعطیلی، به زور وارد فروشگاه لوازم الکترونیکی شود." }
        ]
      },
      {
        id: "break_out",
        word: "break out",
        level: "B2",
        theme: "مسائل و چالش‌ها",
        oldCat: "pvChallenges",
        meaning: "ناگهان آغاز شدن یا شیوع یافتن (بیماری، آتش‌سوزی، جنگ)",
        en: "We were planning a vacation, but then the flu broke out across the city.",
        fa: "ما برای تعطیلات برنامه‌ریزی می‌کردیم، اما بعد آنفلوآنزا ناگهان در شهر شیوع پیدا کرد.",
        icon: "🔥",
        examples: [
          { en: "We were planning a vacation, but then the flu broke out across the city.", fa: "ما برای تعطیلات برنامه‌ریزی می‌کردیم، اما بعد آنفلوآنزا ناگهان در شهر شیوع پیدا کرد." },
          { en: "A fire broke out in the basement, but firefighters put it out quickly.", fa: "آتشی در زیرزمین شعله‌ور شد، اما آتش‌نشان‌ها سریع آن را خاموش کردند." },
          { en: "Protests broke out in the square after the controversial announcement.", fa: "اعتراضات در میدان شهر پس از آن بیانیه جنجالی ناگهان به راه افتاد." }
        ]
      },
      {
        id: "fall_through",
        word: "fall through",
        level: "B2",
        theme: "مسائل و چالش‌ها",
        oldCat: "pvChallenges",
        meaning: "به هم خوردن، نقش بر آب شدن (برنامه، قرار یا معامله)",
        en: "Our weekend travel plans fell through when our flight was canceled.",
        fa: "برنامه‌های سفر آخر هفته‌مان وقتی پرواز لغو شد، نقش بر آب شد و به هم خورد.",
        icon: "🌧️",
        examples: [
          { en: "Our weekend travel plans fell through when our flight was canceled.", fa: "برنامه‌های سفر آخر هفته‌مان وقتی پرواز لغو شد، نقش بر آب شد و به هم خورد." },
          { en: "The house purchase fell through because the buyer could not secure a loan.", fa: "خرید خانه به هم خورد چون خریدار نتوانست وام بگیرد." },
          { en: "Their wedding plans fell through after a sudden disagreement.", fa: "برنامه‌های عروسی آن‌ها پس از یک اختلاف نظر ناگهانی به هم خورد." }
        ]
      },
      {
        id: "get_away_with",
        word: "get away with",
        level: "B2",
        theme: "مسائل و چالش‌ها",
        oldCat: "pvChallenges",
        meaning: "قسر در رفتن، بدون بازخواست یا مجازات کاری خلاف انجام دادن",
        en: "He stole supplies from the office, but he will not get away with it for long.",
        fa: "او وسایلی را از دفتر دزدید، اما برای مدت زیادی از این کار قسر در نخواهد رفت.",
        icon: "🕵️",
        examples: [
          { en: "He stole supplies from the office, but he will not get away with it for long.", fa: "او وسایلی را از دفتر دزدید، اما برای مدت زیادی از این کار قسر در نخواهد رفت." },
          { en: "You cannot just ignore the safety rules and expect to get away with it.", fa: "نمی‌توانی قوانین ایمنی را نادیده بگیری و انتظار داشته باشی قسر در بروی." },
          { en: "He arrived thirty minutes late to work and somehow got away with it.", fa: "او سی دقیقه دیر سر کار آمد و به شکلی از بازخواست قسر در رفت." }
        ]
      },
      {
        id: "hold_back",
        word: "hold back",
        level: "B2",
        theme: "مسائل و چالش‌ها",
        oldCat: "pvChallenges",
        meaning: "جلوی خود را گرفتن، مهار و کنترل کردن احساسات یا واکنش",
        en: "I had to hold back my excitement until I walked out of the manager's office.",
        fa: "مجبور شدم هیجانم را مهار کنم تا زمانی که از دفتر مدیر بیرون آمدم.",
        icon: "🤐",
        examples: [
          { en: "I had to hold back my excitement until I walked out of the manager's office.", fa: "مجبور شدم هیجانم را مهار کنم تا زمانی که از دفتر مدیر بیرون آمدم." },
          { en: "She was angry at the rude customer, but she held back her temper.", fa: "او از مشتری بی‌ادب عصبانی بود، اما جلوی خشمش را گرفت و خودداری کرد." },
          { en: "He wanted to jump into the argument, but his friend held him back.", fa: "او می‌خواست وارد مشاجره شود، اما دوستش جلویش را گرفت." }
        ]
      },
      {
        id: "go_against",
        word: "go against",
        level: "B2",
        theme: "مسائل و چالش‌ها",
        oldCat: "pvChallenges",
        meaning: "مخالفت کردن با، سرپیچی کردن از (قوانین، دستورات یا رسوم)",
        en: "If you go against the company policy, you will face serious consequences.",
        fa: "اگر از سیاست‌های شرکت سرپیچی کنی، با عواقب جدی روبه‌رو خواهی شد.",
        icon: "⛔",
        examples: [
          { en: "If you go against the company policy, you will face serious consequences.", fa: "اگر از سیاست‌های شرکت سرپیچی کنی، با عواقب جدی روبه‌رو خواهی شد." },
          { en: "I decided to go against everyone's advice and pursue my true dream.", fa: "تصمیم گرفتم با توصیه همه مخالفت کنم و رویای واقعی‌ام را دنبال کنم." },
          { en: "Cheating on an exam goes against all academic principles.", fa: "تقلب در امتحان بر خلاف تمام اصول تحصیلی است." }
        ]
      }
    ]
  },

  pv_a2_transport: {
    name: "حمل‌ونقل و سفر",
    title: "حمل‌ونقل و سفر",
    icon: "\ud83d\ude97",
    level: "A2",
    words: [
      {
        id: "get_in",
        word: "get in",
        level: "A2",
        theme: "حمل‌ونقل و سفر",
        meaning: "سوار شدن (خودرو یا تاکسی)",
        en: "Open the car door and get in quickly.",
        fa: "درِ ماشین را باز کن و سریع سوار شو.",
        icon: "\ud83d\ude97",
        examples: [
          { en: "Open the car door and get in quickly.", fa: "درِ ماشین را باز کن و سریع سوار شو." },
          { en: "She told the kids to get in before it started raining.", fa: "او به بچه‌ها گفت قبل از اینکه باران بگیرد سوار شوند." },
          { en: "I got in the taxi and gave the driver the address.", fa: "سوار تاکسی شدم و آدرس را به راننده دادم." }
        ]
      },
      {
        id: "get_out_vehicle",
        word: "get out",
        level: "A2",
        theme: "حمل‌ونقل و سفر",
        meaning: "پیاده شدن (از خودرو یا تاکسی)",
        en: "We reached the station and got out of the taxi.",
        fa: "ما به ایستگاه رسیدیم و از تاکسی پیاده شدیم.",
        icon: "\ud83d\ude95",
        examples: [
          { en: "We reached the station and got out of the taxi.", fa: "ما به ایستگاه رسیدیم و از تاکسی پیاده شدیم." },
          { en: "Be careful when you get out on the busy street.", fa: "وقتی در خیابان شلوغ پیاده می‌شوی، احتیاط کن." },
          { en: "He opened the door and got out of the car.", fa: "او در را باز کرد و از خودرو خارج شد." }
        ]
      },
      {
        id: "jump_in_vehicle",
        word: "jump in",
        level: "A2",
        theme: "حمل‌ونقل و سفر",
        meaning: "سوار شدن سریع، پریدن توی ماشین",
        en: "Jump in, I will give you a ride to the supermarket.",
        fa: "بپر بالا (سوار شو)، تا سوپرمارکت می‌رسانمت.",
        icon: "\ud83d\ude99",
        examples: [
          { en: "Jump in, I will give you a ride to the supermarket.", fa: "بپر بالا (سوار شو)، تا سوپرمارکت می‌رسانمت." },
          { en: "He told his friend to jump in the van so they would not be late.", fa: "او به دوستش گفت سریع سوار ون شود تا دیرشان نشود." },
          { en: "We jumped in the car as soon as the rain started.", fa: "به محض اینکه باران شروع شد، سریع پریدیم توی ماشین." }
        ]
      },
      {
        id: "jump_out",
        word: "jump out",
        level: "A2",
        theme: "حمل‌ونقل و سفر",
        meaning: "پیاده شدن سریع، پریدن بیرون از خودرو",
        en: "He jumped out of the car to greet his old friend.",
        fa: "او به سرعت از ماشین پرید بیرون تا با دوست قدیمی‌اش احوالپرسی کند.",
        icon: "\ud83d\udca8",
        examples: [
          { en: "He jumped out of the car to greet his old friend.", fa: "او به سرعت از ماشین پرید بیرون تا با دوست قدیمی‌اش احوالپرسی کند." },
          { en: "Wait until the vehicle stops before you jump out.", fa: "صبر کن تا خودرو بایستد و بعد پیاده شو." },
          { en: "She jumped out of the taxi and ran into the airport.", fa: "او سریع از تاکسی پیاده شد و به سمت داخل فرودگاه دوید." }
        ]
      },
      {
        id: "get_on",
        word: "get on",
        level: "A2",
        theme: "حمل‌ونقل و سفر",
        meaning: "سوار شدن (اتوبوس، قطار، هواپیما یا دوچرخه)",
        en: "Show your ticket before you get on the train.",
        fa: "قبل از اینکه سوار قطار شوید، بلیط خود را نشان دهید.",
        icon: "\ud83d\ude86",
        examples: [
          { en: "Show your ticket before you get on the train.", fa: "قبل از اینکه سوار قطار شوید، بلیط خود را نشان دهید." },
          { en: "We got on the bus just before the doors closed.", fa: "درست قبل از بسته شدن درها، سوار اتوبوس شدیم." },
          { en: "Passengers are waiting to get on the flight to London.", fa: "مسافران منتظر سوار شدن به پرواز لندن هستند." }
        ]
      },
      {
        id: "get_off",
        word: "get off",
        level: "A2",
        theme: "حمل‌ونقل و سفر",
        meaning: "پیاده شدن (از اتوبوس، قطار یا هواپیما)",
        en: "You should get off at the next subway stop.",
        fa: "باید در ایستگاه بعدی مترو پیاده شوید.",
        icon: "\ud83d\ude8f",
        examples: [
          { en: "You should get off at the next subway stop.", fa: "باید در ایستگاه بعدی مترو پیاده شوید." },
          { en: "Everyone got off the bus when it reached the city center.", fa: "همه وقتی اتوبوس به مرکز شهر رسید پیاده شدند." },
          { en: "Wait for other passengers to get off before boarding.", fa: "قبل از سوار شدن، صبر کنید مسافران دیگر پیاده شوند." }
        ]
      },
      {
        id: "drive_away",
        word: "drive away",
        level: "A2",
        theme: "حمل‌ونقل و سفر",
        meaning: "با خودرو دور شدن یا رفتن",
        en: "She waved goodbye and drove away down the quiet street.",
        fa: "او برای خداحافظی دست تکان داد و در امتداد خیابان خلوت با ماشین دور شد.",
        icon: "\ud83d\udee3\ufe0f",
        examples: [
          { en: "She waved goodbye and drove away down the quiet street.", fa: "او برای خداحافظی دست تکان داد و در امتداد خیابان خلوت با ماشین دور شد." },
          { en: "The delivery van dropped the parcel and drove away.", fa: "ون تحویل کالا بسته را تحویل داد و دور شد." },
          { en: "Do not drive away without fastening your seatbelt.", fa: "بدون بستن کمربند ایمنی با ماشین حرکت نکن." }
        ]
      },
      {
        id: "drive_in",
        word: "drive in",
        level: "A2",
        theme: "حمل‌ونقل و سفر",
        meaning: "با خودرو وارد شدن یا برگشتن",
        en: "He drove in through the main gate of the park.",
        fa: "او با خودرو از دروازه اصلی پارک وارد شد.",
        icon: "\ud83c\udd7f\ufe0f",
        examples: [
          { en: "He drove in through the main gate of the park.", fa: "او با خودرو از دروازه اصلی پارک وارد شد." },
          { en: "We drove in the driveway and parked near the garage.", fa: "با ماشین وارد مسیر ورودی خانه شدیم و نزدیک گاراژ پارک کردیم." },
          { en: "Cars must slow down when they drive in the parking lot.", fa: "خودروها هنگام ورود به پارکینگ باید سرعت خود را کم کنند." }
        ]
      },
      {
        id: "run_over",
        word: "run over",
        level: "A2",
        theme: "حمل‌ونقل و سفر",
        meaning: "زیر گرفتن با خودرو یا رد شدن چرخ از روی چیزی",
        en: "Drive carefully so you do not run over the garden hose.",
        fa: "با دقت رانندگی کن تا از روی شلنگ باغچه رد نشوی.",
        icon: "\u26a0\ufe0f",
        examples: [
          { en: "Drive carefully so you do not run over the garden hose.", fa: "با دقت رانندگی کن تا از روی شلنگ باغچه رد نشوی." },
          { en: "The driver stopped immediately to check what he had run over.", fa: "راننده بلافاصله توقف کرد تا ببیند چه چیزی را زیر گرفته است." },
          { en: "A ball rolled into the road and almost got run over.", fa: "توپی به وسط جاده غلتید و چیزی نمانده بود زیر چرخ برود." }
        ]
      }
    ]
  },

  pv_a2_movement: {
    name: "حرکات و جابه‌جایی",
    title: "حرکات و جابه‌جایی",
    icon: "\ud83d\udeb6",
    level: "A2",
    words: [
      {
        id: "fall_down",
        word: "fall down",
        level: "A2",
        theme: "حرکات و جابه‌جایی",
        meaning: "زمین خوردن، افتادن به زمین",
        en: "Watch your step on the icy pavement so you do not fall down.",
        fa: "روی پیاده‌روی یخ‌زده مواظب گام‌هایت باش تا زمین نخوری.",
        icon: "\ud83e\udd15",
        examples: [
          { en: "Watch your step on the icy pavement so you do not fall down.", fa: "روی پیاده‌روی یخ‌زده مواظب گام‌هایت باش تا زمین نخوری." },
          { en: "The toddler slipped on the wet grass and fell down.", fa: "کودک نوپا روی چمن خیس لیز خورد و به زمین افتاد." },
          { en: "Several old trees fell down during the violent windstorm.", fa: "چندین درخت کهنسال در جریان طوفان شدید واژگون شدند و افتادند." }
        ]
      },
      {
        id: "climb_up",
        word: "climb up",
        level: "A2",
        theme: "حرکات و جابه‌جایی",
        meaning: "بالا رفتن (از نردبان، درخت یا پله)",
        en: "He climbed up the ladder to inspect the roof tiles.",
        fa: "او از نردبان بالا رفت تا سفال‌های سقف را بررسی کند.",
        icon: "\ud83e\uddd7",
        examples: [
          { en: "He climbed up the ladder to inspect the roof tiles.", fa: "او از نردبان بالا رفت تا سفال‌های سقف را بررسی کند." },
          { en: "The cat climbed up the tall tree to escape the dog.", fa: "گربه برای فرار از سگ از درخت بلند بالا رفت." },
          { en: "Hikers climbed up the steep path to reach the mountain peak.", fa: "کوهنوردان از مسیر شیب‌دار بالا رفتند تا به قله کوه برسند." }
        ]
      },
      {
        id: "climb_down",
        word: "climb down",
        level: "A2",
        theme: "حرکات و جابه‌جایی",
        meaning: "پایین آمدن (از نردبان، درخت یا ارتفاع)",
        en: "Climb down slowly and hold both sides firmly.",
        fa: "به آرامی پایین بیا و هر دو طرف را محکم بگیر.",
        icon: "\ud83e\ude9c",
        examples: [
          { en: "Climb down slowly and hold both sides firmly.", fa: "به آرامی پایین بیا و هر دو طرف را محکم بگیر." },
          { en: "He climbed down from the roof after clearing the leaves.", fa: "او پس از تمیز کردن برگ‌ها، از سقف پایین آمد." },
          { en: "The firefighter helped the scared child climb down safely.", fa: "آتش‌نشان به کودک وحشت‌زده کمک کرد تا با امنیت پایین بیاید." }
        ]
      },
      {
        id: "go_up_climb",
        word: "go up",
        level: "A2",
        theme: "حرکات و جابه‌جایی",
        meaning: "بالا رفتن فیزیکی (از پله، نردبان یا تپه)",
        en: "We can go up the stairs to reach the second floor.",
        fa: "می‌توانیم از پله‌ها بالا برویم تا به طبقه دوم برسیم.",
        icon: "\u2b06\ufe0f",
        examples: [
          { en: "We can go up the stairs to reach the second floor.", fa: "می‌توانیم از پله‌ها بالا برویم تا به طبقه دوم برسیم." },
          { en: "Take the elevator instead of going up eight flights of stairs.", fa: "به جای اینکه از هشت ردیف پله بالا بروی، از آسانسور استفاده کن." },
          { en: "The balloon went up into the clear blue sky.", fa: "بادکنک به آسمان آبی و صاف اوج گرفت و بالا رفت." }
        ]
      },
      {
        id: "go_down",
        word: "go down",
        level: "A2",
        theme: "حرکات و جابه‌جایی",
        meaning: "پایین آمدن یا پایین رفتن فیزیکی",
        en: "Hold the handrail as you go down the stone steps.",
        fa: "هنگام پایین رفتن از پله‌های سنگی، نرده را نگه دار.",
        icon: "\u2b07\ufe0f",
        examples: [
          { en: "Hold the handrail as you go down the stone steps.", fa: "هنگام پایین رفتن از پله‌های سنگی، نرده را نگه دار." },
          { en: "The sun is going down and the air is getting cooler.", fa: "خورشید در حال غروب کردن (پایین رفتن) است و هوا دارد خنک‌تر می‌شود." },
          { en: "We went down to the basement to check the heating system.", fa: "برای بررسی سیستم گرمایشی، به زیرزمین پایین رفتیم." }
        ]
      },
      {
        id: "turn_around",
        word: "turn around",
        level: "A2",
        theme: "حرکات و جابه‌جایی",
        meaning: "چرخیدن، دور زدن، رو برگرداندن به جهت مخالف",
        en: "Turn around so I can check the back of your coat.",
        fa: "بچرخ (پشتت را به من کن) تا پشت پالتویت را بررسی کنم.",
        icon: "\ud83d\udd04",
        examples: [
          { en: "Turn around so I can check the back of your coat.", fa: "بچرخ (پشتت را به من کن) تا پشت پالتویت را بررسی کنم." },
          { en: "She turned around when she heard someone whisper her name.", fa: "وقتی شنید کسی نامش را نجوا می‌کند، رویش را برگرداند." },
          { en: "We took a wrong exit and had to turn around at the roundabout.", fa: "از خروجی اشتباه رفتیم و مجبور شدیم در میدان دور بزنیم و برگردیم." }
        ]
      },
      {
        id: "walk_by",
        word: "walk by",
        level: "A2",
        theme: "حرکات و جابه‌جایی",
        meaning: "رد شدن یا پیاده گذشتن از کنار چیزی یا کسی",
        en: "She smiled warmly as she walked by my office desk.",
        fa: "همان‌طور که از کنار میز کار من رد می‌شد، لبخند گرمی زد.",
        icon: "\ud83d\udeb6\u200d\u2642\ufe0f",
        examples: [
          { en: "She smiled warmly as she walked by my office desk.", fa: "همان‌طور که از کنار میز کار من رد می‌شد، لبخند گرمی زد." },
          { en: "Hundreds of tourists walk by this historic monument every day.", fa: "روزانه صدها گردشگر از کنار این بنای تاریخی پیاده می‌گذرند." },
          { en: "I walked by the bakery and smelled freshly baked bread.", fa: "از کنار نانوایی رد شدم و بوی نان تازه پخته‌شده را حس کردم." }
        ]
      },
      {
        id: "walk_up",
        word: "walk up",
        level: "A2",
        theme: "حرکات و جابه‌جایی",
        meaning: "نزدیک شدن با قدم زدن، جلو رفتن به سمت کسی یا جایی",
        en: "He walked up to the counter and asked for a menu.",
        fa: "او قدم‌زنان به سمت پیشخوان رفت و منو خواست.",
        icon: "\ud83d\udc63",
        examples: [
          { en: "He walked up to the counter and asked for a menu.", fa: "او قدم‌زنان به سمت پیشخوان رفت و منو خواست." },
          { en: "A friendly stranger walked up to me to offer directions.", fa: "یک غریبه مهربان جلو آمد تا مسیر را به من نشان دهد." },
          { en: "She walked up the hill with steady, calm steps.", fa: "او با گام‌هایی استوار و آرام به سمت بالای تپه قدم برداشت." }
        ]
      },
      {
        id: "walk_away",
        word: "walk away",
        level: "A2",
        theme: "حرکات و جابه‌جایی",
        meaning: "دور شدن، محل را با قدم زدن ترک کردن",
        en: "When arguments get heated, it is best to walk away and cool down.",
        fa: "وقتی بحث‌ها داغ می‌شود، بهتر است صحنه را ترک کنی و آرام شوی.",
        icon: "\ud83d\udeaa",
        examples: [
          { en: "When arguments get heated, it is best to walk away and cool down.", fa: "وقتی بحث‌ها داغ می‌شود، بهتر است صحنه را ترک کنی و آرام شوی." },
          { en: "He picked up his backpack and walked away without looking back.", fa: "او کوله‌پشتی‌اش را برداشت و بدون اینکه به عقب نگاه کند دور شد." },
          { en: "Do not just walk away while we are discussing something important.", fa: "در حالی که داریم درباره موضوع مهمی بحث می‌کنیم، راهت را نکش و نرو." }
        ]
      },
      {
        id: "hold_on",
        word: "hold on",
        level: "A2",
        theme: "حرکات و جابه‌جایی",
        meaning: "محکم گرفتن، رها نکردن؛ صبر کردن",
        en: "Hold on to the safety rail while the boat is in motion.",
        fa: "در حالی که قایق در حال حرکت است، نرده ایمنی را محکم بگیر.",
        icon: "\ud83e\udd1d",
        examples: [
          { en: "Hold on to the safety rail while the boat is in motion.", fa: "در حالی که قایق در حال حرکت است، نرده ایمنی را محکم بگیر." },
          { en: "Hold on for a second while I fetch my car keys.", fa: "چند ثانیه صبر کن تا بروم کلیدهای ماشینم را بیاورم." },
          { en: "The little girl held on tight to her mother's coat.", fa: "دخترک پالتوی مادرش را محکم گرفته بود." }
        ]
      },
      {
        id: "let_go",
        word: "let go",
        level: "A2",
        theme: "حرکات و جابه‌جایی",
        meaning: "رها کردن، دست کشیدن، ول کردن چیزی",
        en: "Do not let go of the dog's leash in the busy park.",
        fa: "در پارک شلوغ قلاده سگ را رها نکن.",
        icon: "\ud83e\udd32",
        examples: [
          { en: "Do not let go of the dog's leash in the busy park.", fa: "در پارک شلوغ قلاده سگ را رها نکن." },
          { en: "He let go of the rope and let the anchor sink into the water.", fa: "او طناب را رها کرد و گذاشت لنگر در آب فرو برود." },
          { en: "It is healthy to let go of past mistakes and focus on today.", fa: "سالم‌ترین کار این است که اشتباهات گذشته را رها کنی و روی امروز متمرکز شوی." }
        ]
      },
      {
        id: "back_away",
        word: "back away",
        level: "A2",
        theme: "حرکات و جابه‌جایی",
        meaning: "عقب‌نشینی کردن، عقب‌عقب رفتن برای فاصله گرفتن",
        en: "Back away slowly if you encounter a wild animal on the trail.",
        fa: "اگر در مسیر با حیوان وحشی روبرو شدی، به آرامی عقب‌عقب برو.",
        icon: "\ud83d\udd19",
        examples: [
          { en: "Back away slowly if you encounter a wild animal on the trail.", fa: "اگر در مسیر با حیوان وحشی روبرو شدی، به آرامی عقب‌عقب برو." },
          { en: "He backed away from the edge of the dangerous cliff.", fa: "او از لبه صخره خطرناک عقب کشید." },
          { en: "The crowd backed away to give the paramedic room to work.", fa: "جمعیت عقب رفتند تا به امدادگر فضای لازم برای کار بدهند." }
        ]
      }
    ]
  },

  pv_a2_objects: {
    name: "برداشتن و چیدمان",
    title: "برداشتن و چیدمان",
    icon: "\ud83d\udce6",
    level: "A2",
    words: [
      {
        id: "pick_up",
        word: "pick up",
        level: "A2",
        theme: "برداشتن و چیدمان",
        meaning: "برداشتن، از روی زمین یا سطح بلند کردن",
        en: "Can you pick up that pen from the floor, please?",
        fa: "می‌شود لطفاً آن خودکار را از روی زمین برداری؟",
        icon: "\ud83d\udd8a\ufe0f",
        examples: [
          { en: "Can you pick up that pen from the floor, please?", fa: "می‌شود لطفاً آن خودکار را از روی زمین برداری؟" },
          { en: "She picked up her heavy luggage and placed it on the scale.", fa: "او چمدان سنگینش را برداشت و روی ترازو گذاشت." },
          { en: "The children were told to pick up their toys before dinner.", fa: "به بچه‌ها گفته شد اسباب‌بازی‌هایشان را قبل از شام جمع کنند و بردارند." }
        ]
      },
      {
        id: "put_down",
        word: "put down",
        level: "A2",
        theme: "برداشتن و چیدمان",
        meaning: "زمین گذاشتن، قرار دادن چیزی روی سطح",
        en: "Put down those heavy bags and take a short rest.",
        fa: "آن کیسه‌های سنگین را زمین بگذار و کمی استراحت کن.",
        icon: "\ud83d\udecd\ufe0f",
        examples: [
          { en: "Put down those heavy bags and take a short rest.", fa: "آن کیسه‌های سنگین را زمین بگذار و کمی استراحت کن." },
          { en: "He put down his coffee mug on the wooden coaster.", fa: "او ماگ قهوه‌اش را روی زیرلیوانی چوبی گذاشت." },
          { en: "The officer ordered the suspect to put down the weapon.", fa: "افسر به مظنون دستور داد سلاح را زمین بگذارد." }
        ]
      },
      {
        id: "set_down",
        word: "set down",
        level: "A2",
        theme: "برداشتن و چیدمان",
        meaning: "قرار دادن یا نهادن چیزی با احتیاط روی سطح",
        en: "Set down the glass bowl gently so it does not crack.",
        fa: "کاسه شیشه‌ای را با ملایمت زمین بگذار تا ترک نخورد.",
        icon: "\ud83e\udd63",
        examples: [
          { en: "Set down the glass bowl gently so it does not crack.", fa: "کاسه شیشه‌ای را با ملایمت زمین بگذار تا ترک نخورد." },
          { en: "She set down her notebook on the study desk.", fa: "او دفتر یادداشتش را روی میز مطالعه نهاد." },
          { en: "He set down his tools after finishing the repair work.", fa: "او پس از اتمام کار تعمیر، ابزارهایش را کنار گذاشت." }
        ]
      },
      {
        id: "put_back",
        word: "put back",
        level: "A2",
        theme: "برداشتن و چیدمان",
        meaning: "سر جای قبلی گذاشتن، بازگرداندن به محل اولیه",
        en: "Always put back the scissors in the drawer after using them.",
        fa: "همیشه قیچی را پس از استفاده سر جایش در کشو بگذار.",
        icon: "\u2702\ufe0f",
        examples: [
          { en: "Always put back the scissors in the drawer after using them.", fa: "همیشه قیچی را پس از استفاده سر جایش در کشو بگذار." },
          { en: "Did you put back the milk in the refrigerator?", fa: "شیر را سر جایش در یخچال گذاشتی؟" },
          { en: "He read the novel and put it back on the library shelf.", fa: "او رمان را خواند و آن را سر جایش در قفسه کتابخانه بازگرداند." }
        ]
      },
      {
        id: "get_out_storage",
        word: "get out",
        level: "A2",
        theme: "برداشتن و چیدمان",
        meaning: "از کشو، کمد یا یخچال بیرون آوردن برای استفاده",
        en: "Get out the bread and cheese so we can make breakfast.",
        fa: "نان و پنیر را بیرون بیاور تا صبحانه درست کنیم.",
        icon: "\ud83e\uddc0",
        examples: [
          { en: "Get out the bread and cheese so we can make breakfast.", fa: "نان و پنیر را بیرون بیاور تا صبحانه درست کنیم." },
          { en: "She got out her winter blanket from the top closet.", fa: "او پتوی زمستانی‌اش را از بالای کمد بیرون آورد." },
          { en: "Can you get out the painting brushes from the wooden box?", fa: "می‌توانی قلم‌موهای نقاشی را از جعبه چوبی بیرون بیاوری؟" }
        ]
      },
      {
        id: "take_down",
        word: "take down",
        level: "A2",
        theme: "برداشتن و چیدمان",
        meaning: "از دیوار یا ارتفاع پایین آوردن؛ یادداشت کردن",
        en: "We need to take down the holiday decorations tomorrow.",
        fa: "فردا باید تزئینات تعطیلات را از دیوار پایین بیاوریم و جمع کنیم.",
        icon: "\ud83d\uddbc\ufe0f",
        examples: [
          { en: "We need to take down the holiday decorations tomorrow.", fa: "فردا باید تزئینات تعطیلات را از دیوار پایین بیاوریم و جمع کنیم." },
          { en: "He took down the old oil painting to repaint the bedroom wall.", fa: "او تابلوی رنگ روغن قدیمی را پایین آورد تا دیوار اتاق خواب را رنگ کند." },
          { en: "Please take down my phone number in case you need assistance.", fa: "لطفاً شماره تلفنم را یادداشت کن تا اگر کمکی خواستی تماس بگیری." }
        ]
      },
      {
        id: "give_back",
        word: "give back",
        level: "A2",
        theme: "برداشتن و چیدمان",
        meaning: "پس دادن، برگرداندن امانت به صاحبش",
        en: "Remember to give back the library book before Friday.",
        fa: "یادت باشد قبل از جمعه کتاب کتابخانه را پس بدهی.",
        icon: "\ud83d\udcda",
        examples: [
          { en: "Remember to give back the library book before Friday.", fa: "یادت باشد قبل از جمعه کتاب کتابخانه را پس بدهی." },
          { en: "He gave back the borrowed umbrella with a warm thank you.", fa: "او چتر امانتی را همراه با تشکری گرم بازگرداند." },
          { en: "I will give you back your car keys as soon as I park outside.", fa: "به محض اینکه بیرون پارک کنم، سوئیچ ماشینت را پس می‌دهم." }
        ]
      },
      {
        id: "look_for",
        word: "look for",
        level: "A2",
        theme: "برداشتن و چیدمان",
        meaning: "گشتن به دنبال چیزی یا کسی، جستجو کردن",
        en: "I am looking for my reading glasses; have you seen them?",
        fa: "دارم دنبال عینک مطالعه‌ام می‌گردم؛ تو ندیدی‌اش؟",
        icon: "\ud83d\udd0d",
        examples: [
          { en: "I am looking for my reading glasses; have you seen them?", fa: "دارم دنبال عینک مطالعه‌ام می‌گردم؛ تو ندیدی‌اش؟" },
          { en: "She spent the morning looking for a decent apartment to rent.", fa: "او صبح را صرف گشتن به دنبال آپارتمانی مناسب برای اجاره کرد." },
          { en: "What are you looking for inside that dusty drawer?", fa: "توی آن کشوی خاک‌گرفته دنبال چی می‌گردی؟" }
        ]
      },
      {
        id: "look_around",
        word: "look around",
        level: "A2",
        theme: "برداشتن و چیدمان",
        meaning: "دور و بر را نگاه کردن، بازدید کردن و گشت زدن در مکانی",
        en: "We have an hour before the train leaves, let us look around the market.",
        fa: "یک ساعت تا حرکت قطار وقت داریم، بیا در بازار گشتی بزنیم.",
        icon: "\ud83d\udc40",
        examples: [
          { en: "We have an hour before the train leaves, let us look around the market.", fa: "یک ساعت تا حرکت قطار وقت داریم، بیا در بازار گشتی بزنیم." },
          { en: "The museum visitors looked around the ancient artifact gallery.", fa: "بازدیدکنندگان موزه در گالری اشیای باستانی به تماشا و گشت‌وگذار پرداختند." },
          { en: "He arrived in the new city and looked around in sheer wonder.", fa: "او وارد شهر جدید شد و با شگفتی تمام به دور و بر نگریست." }
        ]
      },
      {
        id: "come_back",
        word: "come back",
        level: "A2",
        theme: "برداشتن و چیدمان",
        meaning: "برگشتن، بازگشتن به مکان یا حالت اولیه",
        en: "What time will you come back from university today?",
        fa: "امروز چه ساعتی از دانشگاه برمی‌گردی؟",
        icon: "\ud83c\udfe0",
        examples: [
          { en: "What time will you come back from university today?", fa: "امروز چه ساعتی از دانشگاه برمی‌گردی؟" },
          { en: "Spring has arrived and migratory birds are coming back.", fa: "بهار آمده و پرندگان مهاجر در حال بازگشت هستند." },
          { en: "After two weeks of holiday, it was hard to come back to routine work.", fa: "پس از دو هفته تعطیلات، برگشتن به کارهای روتین دشوار بود." }
        ]
      }
    ]
  },

  pv_b1_food: {
    name: "آشپزی و خوراکی‌ها",
    title: "آشپزی و خوراکی‌ها",
    icon: "\ud83c\udf73",
    level: "B1",
    words: [
      {
        id: "cook_up",
        word: "cook up",
        level: "B1",
        theme: "تغذیه و نوشیدنی",
        meaning: "غذا پختن، تدارک دیدن غذا؛ در سر پروراندن نقشه",
        en: "Let me cook up some delicious pasta for dinner.",
        fa: "اجازه بده برای شام پاستای خوشمزه‌ای بپزم و تدارک ببینم.",
        icon: "\ud83c\udf5d",
        examples: [
          { en: "Let me cook up some delicious pasta for dinner.", fa: "اجازه بده برای شام پاستای خوشمزه‌ای بپزم و تدارک ببینم." },
          { en: "He went to the kitchen to cook up a quick vegetable soup.", fa: "او به آشپزخانه رفت تا یک سوپ سبزیجات سریع بار بگذارد." },
          { en: "The two brothers are cooking up a secret business plan.", fa: "دو برادر دارند یک نقشه تجاری محرمانه را در سر می‌پرورانند." }
        ]
      },
      {
        id: "whip_up",
        word: "whip up",
        level: "B1",
        theme: "تغذیه و نوشیدنی",
        meaning: "سریع و فرز غذا درست کردن، سرهم کردن خوراکی",
        en: "She whipped up a quick omelette with fresh herbs.",
        fa: "او به سرعت و با مهارت یک املت با سبزی تازه سرهم کرد و پخت.",
        icon: "\ud83c\udf73",
        examples: [
          { en: "She whipped up a quick omelette with fresh herbs.", fa: "او به سرعت و با مهارت یک املت با سبزی تازه سرهم کرد و پخت." },
          { en: "Whenever friends drop by, he can whip up a tasty salad in minutes.", fa: "هر زمان دوستانش سرزده می‌آیند، او در عرض چند دقیقه یک سالاد خوشمزه درست می‌کند." },
          { en: "Can you whip up some sandwiches for our road trip?", fa: "می‌توانی برای سفر جاده‌ای‌مان چند تا ساندویچ سریع و فرز بپیچی؟" }
        ]
      },
      {
        id: "drink_up",
        word: "drink up",
        level: "B1",
        theme: "تغذیه و نوشیدنی",
        meaning: "تا ته نوشیدنی را سر کشیدن، نوشیدن کامل",
        en: "Drink up your orange juice before the ice melts.",
        fa: "آب پرتقالت را تا ته بنوش قبل از اینکه یخ‌هایش آب شود.",
        icon: "\ud83e\udd64",
        examples: [
          { en: "Drink up your orange juice before the ice melts.", fa: "آب پرتقالت را تا ته بنوش قبل از اینکه یخ‌هایش آب شود." },
          { en: "Drink up your warm tea so we can leave on time.", fa: "چای گرمت را کامل بنوش تا به موقع راه بیفتیم." },
          { en: "The coach urged the runners to drink up plenty of water after the race.", fa: "مربی از دوندگان خواست پس از مسابقه آب فراوانی سر بکشند." }
        ]
      },
      {
        id: "eat_up",
        word: "eat up",
        level: "B1",
        theme: "تغذیه و نوشیدنی",
        meaning: "غذای خود را کامل و با اشتها خوردن",
        en: "Eat up your vegetables if you want to grow strong.",
        fa: "سبزیجاتت را کامل بخور اگر می‌خواهی قوی رشد کنی.",
        icon: "\ud83e\udd57",
        examples: [
          { en: "Eat up your vegetables if you want to grow strong.", fa: "سبزیجاتت را کامل بخور اگر می‌خواهی قوی رشد کنی." },
          { en: "The hungry children ate up all the freshly baked cookies.", fa: "کودکان گرسنه تمام کلوچه‌های تازه پخته‌شده را تا آخر خوردند." },
          { en: "Eat up, there is plenty of food for everyone at the table.", fa: "با اشتها بخورید، روی میز برای همه غذای فراوان هست." }
        ]
      },
      {
        id: "leave_out",
        word: "leave out",
        level: "B1",
        theme: "تغذیه و نوشیدنی",
        meaning: "بیرون گذاشتن خوراکی (در یخچال نگذاشتن)؛ جا انداختن یا از قلم انداختن",
        en: "Do not leave out the dairy products on the counter in summer.",
        fa: "در تابستان محصولات لبنی را بیرون روی کابینت رها نکن.",
        icon: "\ud83e\udd5b",
        examples: [
          { en: "Do not leave out the dairy products on the counter in summer.", fa: "در تابستان محصولات لبنی را بیرون روی کابینت رها نکن." },
          { en: "If you leave out the soup overnight, it will turn sour.", fa: "اگر سوپ را شب تا صبح بیرون بگذاری، ترش خواهد شد." },
          { en: "Make sure you do not leave out any essential ingredients from the recipe.", fa: "دقت کن که هیچ ماده اولیه ضروری را از دستور پخت جا نیندازی." }
        ]
      },
      {
        id: "cut_back_on",
        word: "cut back on",
        level: "B1",
        theme: "تغذیه و نوشیدنی",
        meaning: "کاهش دادن مصرف (غذا، قند، هزینه یا خرید)",
        en: "The doctor advised him to cut back on sugary drinks.",
        fa: "پزشک به او توصیه کرد مصرف نوشیدنی‌های قندی را کاهش دهد.",
        icon: "\ud83d\udcc9",
        examples: [
          { en: "The doctor advised him to cut back on sugary drinks.", fa: "پزشک به او توصیه کرد مصرف نوشیدنی‌های قندی را کاهش دهد." },
          { en: "We are trying to cut back on restaurant meals to save money.", fa: "داریم سعی می‌کنیم برای صرفه‌جویی در پول، غذا خوردن در رستوران را کم کنیم." },
          { en: "She cut back on caffeine to improve her sleep quality.", fa: "او مصرف کافئین را کاهش داد تا کیفیت خوابش بهبود یابد." }
        ]
      }
    ]
  },

  pv_b1_communication: {
    name: "گفتگو و تعاملات",
    title: "گفتگو و تعاملات",
    icon: "\ud83d\udcac",
    level: "B1",
    words: [
      {
        id: "bring_up",
        word: "bring up",
        level: "B1",
        theme: "بحث و تبادل نظر",
        meaning: "مطرح کردن موضوع در گفتگو؛ بزرگ کردن فرزند",
        en: "She decided to bring up the budget issue during the team meeting.",
        fa: "او تصمیم گرفت موضوع بودجه را در طول جلسه تیم مطرح کند.",
        icon: "\ud83d\udde3\ufe0f",
        examples: [
          { en: "She decided to bring up the budget issue during the team meeting.", fa: "او تصمیم گرفت موضوع بودجه را در طول جلسه تیم مطرح کند." },
          { en: "It is not polite to bring up past conflicts in front of guests.", fa: "مؤدبانه نیست که اختلافات گذشته را جلوی مهمان‌ها پیش بکشی." },
          { en: "Her grandparents helped bring up the three children in the countryside.", fa: "پدربزرگ و مادربزرگش در بزرگ کردن آن سه کودک در روستا کمک کردند." }
        ]
      },
      {
        id: "jump_in_conversation",
        word: "jump in",
        level: "B1",
        theme: "بحث و تبادل نظر",
        meaning: "پریدن وسط گفتگو، ملحق شدن به بحث",
        en: "Feel free to jump in if you have any comments or questions.",
        fa: "اگر نظر یا سؤالی داری، با خیال راحت وارد بحث شو و حرفت را بزن.",
        icon: "\ud83d\ude4b\u200d\u2642\ufe0f",
        examples: [
          { en: "Feel free to jump in if you have any comments or questions.", fa: "اگر نظر یا سؤالی داری، با خیال راحت وارد بحث شو و حرفت را بزن." },
          { en: "Can I jump in here for a moment to clarify that point?", fa: "می‌توانم لحظه‌ای وسط صحبت بیایم تا آن نکته را شفاف کنم؟" },
          { en: "She jumped in with a great suggestion that resolved the debate.", fa: "او با پیشنهادی عالی وارد بحث شد که به بحث و جدل خاتمه داد." }
        ]
      },
      {
        id: "talk_over_discuss",
        word: "talk over",
        level: "B1",
        theme: "بحث و تبادل نظر",
        meaning: "بحث و مشورت کردن، بررسی یک مسئله با صحبت دوجانبه",
        en: "Let us talk over the contract details over a cup of tea.",
        fa: "بیا پای یک فنجان چای درباره جزئیات قرارداد صحبت و همفکری کنیم.",
        icon: "\u2615",
        examples: [
          { en: "Let us talk over the contract details over a cup of tea.", fa: "بیا پای یک فنجان چای درباره جزئیات قرارداد صحبت و همفکری کنیم." },
          { en: "We sat down to talk over our holiday plans for the summer.", fa: "نشستیم تا درباره برنامه‌های تعطیلات تابستانمان مشورت و گفتگو کنیم." },
          { en: "Whenever they face a dilemma, they talk it over calmly.", fa: "هر وقت با دوراهی مواجه می‌شوند، با آرامش درباره‌اش صحبت می‌کنند." }
        ]
      },
      {
        id: "back_up",
        word: "back up",
        level: "B1",
        theme: "بحث و تبادل نظر",
        meaning: "پشتیبانی کردن، دفاع کردن یا تایید کردن حرف کسی؛ دنده عقب گرفتن",
        en: "My colleague backed me up when I presented the new proposal.",
        fa: "وقتی طرح جدید را ارائه دادم، همکارم از من پشتیبانی کرد و حرفم را تایید نمود.",
        icon: "\ud83d\udee1\ufe0f",
        examples: [
          { en: "My colleague backed me up when I presented the new proposal.", fa: "وقتی طرح جدید را ارائه دادم، همکارم از من پشتیبانی کرد و حرفم را تایید نمود." },
          { en: "Always make sure to back up your computer files regularly.", fa: "همیشه مطمئن شو که مرتباً از فایل‌های کامپیوترت نسخه پشتیبان بگیری." },
          { en: "He had to back up the car to let the delivery truck pass.", fa: "او مجبور شد با ماشین دنده عقب برود تا کامیون تحویل بار رد شود." }
        ]
      },
      {
        id: "look_out",
        word: "look out",
        level: "B1",
        theme: "بحث و تبادل نظر",
        meaning: "هشدار دادن: مواظب باش!، حواست رو جمع کن!",
        en: "Look out! There is a patch of wet paint on that bench.",
        fa: "مواظب باش! روی آن نیمکت یک تکه رنگ خیس وجود دارد.",
        icon: "\ud83d\udea8",
        examples: [
          { en: "Look out! There is a patch of wet paint on that bench.", fa: "مواظب باش! روی آن نیمکت یک تکه رنگ خیس وجود دارد." },
          { en: "Look out for oncoming bicycles when crossing the path.", fa: "هنگام رد شدن از مسیر، حواست به دوچرخه‌هایی که می‌آیند باشد." },
          { en: "He shouted 'look out' just before the ladder tipped over.", fa: "درست قبل از اینکه نردبان واژگون شود، فریاد زد: «مواظب باش!»" }
        ]
      },
      {
        id: "look_out_for",
        word: "look out for",
        level: "B1",
        theme: "بحث و تبادل نظر",
        meaning: "مراقبت کردن از کسی، هوای کسی را داشتن",
        en: "Good friends always look out for each other in tough times.",
        fa: "دوستان خوب همیشه در روزهای سخت هوای همدیگر را دارند.",
        icon: "\ud83e\udec2",
        examples: [
          { en: "Good friends always look out for each other in tough times.", fa: "دوستان خوب همیشه در روزهای سخت هوای همدیگر را دارند." },
          { en: "She asked the teacher to look out for her shy younger brother.", fa: "او از معلم خواست هوای برادر کوچک خجالتی‌اش را داشته باشد." },
          { en: "As the eldest sister, she naturally looked out for all her siblings.", fa: "به عنوان خواهر بزرگتر، او طبیعتاً مراقب همه خواهر و برادرهایش بود." }
        ]
      },
      {
        id: "look_after",
        word: "look after",
        level: "B1",
        theme: "بحث و تبادل نظر",
        meaning: "مراقبت کردن، رسیدگی و نگهداری از کودکان یا بیماران",
        en: "Could you look after my cat while I am away on vacation?",
        fa: "می‌توانی وقتی من در تعطیلات هستم از گربه‌ام نگهداری کنی؟",
        icon: "\ud83d\udc31",
        examples: [
          { en: "Could you look after my cat while I am away on vacation?", fa: "می‌توانی وقتی من در تعطیلات هستم از گربه‌ام نگهداری کنی؟" },
          { en: "She stayed home to look after her sick grandmother.", fa: "او در خانه ماند تا از مادربزرگ بیمارش پرستاری و مراقبت کند." },
          { en: "He knows how to look after his expensive photography gear.", fa: "او خوب بلد است چطور از تجهیزات گران‌قیمت عکاسی‌اش مراقبت کند." }
        ]
      },
      {
        id: "shut_down_business",
        word: "shut down",
        level: "B1",
        theme: "بحث و تبادل نظر",
        meaning: "تعطیل شدن دائم مغازه یا کسب‌وکار؛ خاموش کردن دستگاه",
        en: "The local bookstore had to shut down after thirty years.",
        fa: "کتاب‌فروشی محلی پس از سی سال فعالیت مجبور شد کارش را تعطیل کند.",
        icon: "\ud83d\udd12",
        examples: [
          { en: "The local bookstore had to shut down after thirty years.", fa: "کتاب‌فروشی محلی پس از سی سال فعالیت مجبور شد کارش را تعطیل کند." },
          { en: "Remember to shut down your computer before leaving the office.", fa: "یادت باشد قبل از ترک دفتر، کامپیوترت را خاموش کنی." },
          { en: "Many small shops were forced to shut down during the economic crisis.", fa: "بسیاری از مغازه‌های کوچک در طول بحران اقتصادی ناچار به تعطیلی شدند." }
        ]
      },
      {
        id: "make_up_reconcile",
        word: "make up",
        level: "B1",
        theme: "بحث و تبادل نظر",
        meaning: "آشتی کردن، برطرف کردن دلخوری و کدورت پس از مشاجره",
        en: "They had a silly argument yesterday, but they made up this morning.",
        fa: "آن‌ها دیروز جروبحث بیهوده‌ای داشتند، اما امروز صبح با هم آشتی کردند.",
        icon: "\ud83e\udd1d",
        examples: [
          { en: "They had a silly argument yesterday, but they made up this morning.", fa: "آن‌ها دیروز جروبحث بیهوده‌ای داشتند، اما امروز صبح با هم آشتی کردند." },
          { en: "Life is too short, let us make up and forget about our disagreement.", fa: "زندگی کوتاه‌تر از این حرف‌هاست، بیا آشتی کنیم و اختلافمان را فراموش کنیم." },
          { en: "He sent her a bouquet of flowers to make up after their fight.", fa: "او دسته‌گلی برایش فرستاد تا بعد از دعوایشان دلجویی و آشتی کند." }
        ]
      },
      {
        id: "come_over",
        word: "come over",
        level: "B1",
        theme: "بحث و تبادل نظر",
        meaning: "به خانه کسی سر زدن، آمدن به محل گوینده",
        en: "Why do you not come over this weekend for a barbecue?",
        fa: "چرا این آخر هفته برای کباب به خانه ما نمی‌آیی؟",
        icon: "\ud83c\udfe1",
        examples: [
          { en: "Why do you not come over this weekend for a barbecue?", fa: "چرا این آخر هفته برای کباب به خانه ما نمی‌آیی؟" },
          { en: "My cousins came over last night and we watched a classic movie.", fa: "دیشب دخترخاله‌هایم به خانه‌مان آمدند و یک فیلم کلاسیک تماشا کردیم." },
          { en: "Feel free to come over whenever you need a quiet place to study.", fa: "هر وقت برای مطالعه به مکانی آرام نیاز داشتی، با خیال راحت به اینجا بیا." }
        ]
      },
      {
        id: "come_in",
        word: "come in",
        level: "B1",
        theme: "بحث و تبادل نظر",
        meaning: "وارد شدن، داخل آمدن؛ رسیدن (قطار یا مسافر)",
        en: "Please knock before you come in the conference room.",
        fa: "لطفاً قبل از اینکه وارد اتاق کنفرانس شوید، در بزنید.",
        icon: "\ud83d\udeaa",
        examples: [
          { en: "Please knock before you come in the conference room.", fa: "لطفاً قبل از اینکه وارد اتاق کنفرانس شوید، در بزنید." },
          { en: "The evening train came in right on schedule at eight o'clock.", fa: "قطار عصرگاهی دقیقاً طبق برنامه در ساعت هشت وارد ایستگاه شد." },
          { en: "These comfortable running shoes come in four distinct colors.", fa: "این کفش‌های پیاده‌روی راحت در چهار رنگ متمایز عرضه می‌شوند." }
        ]
      },
      {
        id: "come_across",
        word: "come across",
        level: "B1",
        theme: "بحث و تبادل نظر",
        meaning: "تصادفی برخوردن به کسی یا پیدا کردن چیزی اتفاقی",
        en: "I came across an old family photo while clearing the attic.",
        fa: "هنگام تمیز کردن اتاق زیرشیروانی، به یک عکس قدیمی خانوادگی برخوردم.",
        icon: "\ud83d\udcf8",
        examples: [
          { en: "I came across an old family photo while clearing the attic.", fa: "هنگام تمیز کردن اتاق زیرشیروانی، به یک عکس قدیمی خانوادگی برخوردم." },
          { en: "You will not believe who I came across at the downtown bookstore today.", fa: "باورت نمی‌شود امروز در کتاب‌فروشی مرکز شهر به چه کسی برخوردم!" },
          { en: "In the library, she came across a rare first edition of the novel.", fa: "در کتابخانه، او اتفاقی به یک نسخه چاپ اول نایاب از این رمان برخورد." }
        ]
      },
      {
        id: "run_into",
        word: "run into",
        level: "B1",
        theme: "بحث و تبادل نظر",
        meaning: "به طور اتفاقی ملاقات کردن یا برخوردن به کسی؛ برخورد فیزیکی",
        en: "I ran into my high school teacher at the supermarket yesterday.",
        fa: "دیروز در سوپرمارکت به طور اتفاقی به معلم دوران دبیرستانم برخوردم.",
        icon: "\ud83d\udc4b",
        examples: [
          { en: "I ran into my high school teacher at the supermarket yesterday.", fa: "دیروز در سوپرمارکت به طور اتفاقی به معلم دوران دبیرستانم برخوردم." },
          { en: "It was wonderful to run into you after all these years.", fa: "دیدار اتفاقی با شما بعد از این همه سال واقعاً لذت‌بخش بود." },
          { en: "We ran into unexpected heavy traffic on our way to the coast.", fa: "در مسیر رفتن به ساحل، به ترافیک سنگین غیرمنتظره‌ای برخوردیم." }
        ]
      }
    ]
  },

  pv_b1_progress: {
    name: "پیشرفت و اهداف",
    title: "پیشرفت و اهداف",
    icon: "\ud83c\udfaf",
    level: "B1",
    words: [
      {
        id: "look_forward_to",
        word: "look forward to",
        level: "B1",
        theme: "پیشرفت و اهداف",
        meaning: "مشتاقانه در انتظار چیزی بودن، چشم‌انتظار بودن",
        en: "I am really looking forward to our trip to Italy next month.",
        fa: "من واقعاً مشتاقانه در انتظار سفر ماه آینده‌مان به ایتالیا هستم.",
        icon: "\u2708\ufe0f",
        examples: [
          { en: "I am really looking forward to our trip to Italy next month.", fa: "من واقعاً مشتاقانه در انتظار سفر ماه آینده‌مان به ایتالیا هستم." },
          { en: "We look forward to hearing your presentation at the conference.", fa: "ما مشتاقانه منتظر شنیدن ارائه شما در کنفرانس هستیم." },
          { en: "The children always look forward to winter snowfall.", fa: "بچه‌ها همیشه چشم‌انتظار بارش برف زمستانی هستند." }
        ]
      },
      {
        id: "look_up",
        word: "look up",
        level: "B1",
        theme: "پیشرفت و اهداف",
        meaning: "جستجو کردن اطلاعات (در لغت‌نامه، نقشه یا اینترنت)؛ رو به بهبود رفتن",
        en: "If you do not know the word, look it up in your dictionary.",
        fa: "اگر معنی کلمه را نمی‌دانی، آن را در لغت‌نامه‌ات جستجو کن.",
        icon: "\ud83d\udcd6",
        examples: [
          { en: "If you do not know the word, look it up in your dictionary.", fa: "اگر معنی کلمه را نمی‌دانی، آن را در لغت‌نامه‌ات جستجو کن." },
          { en: "I looked up the flight departure time on the airport website.", fa: "ساعت پرواز را در وب‌سایت فرودگاه چک و جستجو کردم." },
          { en: "After months of struggle, our sales numbers are finally looking up.", fa: "پس از ماه‌ها تلاش و سختی، سرانجام آمار فروشمان رو به بهبودی است." }
        ]
      },
      {
        id: "come_up",
        word: "come up",
        level: "B1",
        theme: "پیشرفت و اهداف",
        meaning: "پیش آمدن، مطرح شدن (مشکل، فرصت یا موضوع در جلسه)",
        en: "An urgent client issue came up, so I had to stay late at work.",
        fa: "یک مشکل فوری برای مشتری پیش آمد، بنابراین مجبور شدم تا دیرقت سر کار بمانم.",
        icon: "\ud83d\udca1",
        examples: [
          { en: "An urgent client issue came up, so I had to stay late at work.", fa: "یک مشکل فوری برای مشتری پیش آمد، بنابراین مجبور شدم تا دیرقت سر کار بمانم." },
          { en: "The topic of remote work will certainly come up in today's discussion.", fa: "موضوع دورکاری مطمئناً در بحث امروز مطرح خواهد شد." },
          { en: "If any unexpected question comes up, do not hesitate to ask.", fa: "اگر هر سؤال غیرمنتظره‌ای پیش آمد، در پرسیدنش تردید نکن." }
        ]
      },
      {
        id: "finish_up",
        word: "finish up",
        level: "B1",
        theme: "پیشرفت و اهداف",
        meaning: "تمام کردن کار، به پایان رساندن آخرین مراحل",
        en: "Give me ten minutes to finish up this report and I will join you.",
        fa: "ده دقیقه به من فرصت بده تا این گزارش را تمام کنم و به تو ملحق شوم.",
        icon: "\ud83c\udfc1",
        examples: [
          { en: "Give me ten minutes to finish up this report and I will join you.", fa: "ده دقیقه به من فرصت بده تا این گزارش را تمام کنم و به تو ملحق شوم." },
          { en: "The painters are finishing up the trim on the top floor.", fa: "نقاش‌ها دارند آخرین ریزه‌کاری‌های طبقه بالا را به پایان می‌رسانند." },
          { en: "Finish up your soup while it is still warm and tasty.", fa: "سوپت را تا هنوز گرم و خوشمزه است تا آخر تمام کن." }
        ]
      },
      {
        id: "wrap_up",
        word: "wrap up",
        level: "B1",
        theme: "پیشرفت و اهداف",
        meaning: "جمع‌بندی کردن، به اتمام رساندن جلسه یا کار؛ لباس گرم پوشیدن",
        en: "Let us wrap up today's meeting and summarize the key decisions.",
        fa: "بیایید جلسه امروز را جمع‌بندی کنیم و تصمیمات کلیدی را خلاصه نماییم.",
        icon: "\ud83d\udce6",
        examples: [
          { en: "Let us wrap up today's meeting and summarize the key decisions.", fa: "بیایید جلسه امروز را جمع‌بندی کنیم و تصمیمات کلیدی را خلاصه نماییم." },
          { en: "We managed to wrap up the entire renovation project before autumn.", fa: "موفق شدیم کل پروژه بازسازی را قبل از پاییز به اتمام برسانیم." },
          { en: "Make sure you wrap up warm; it is below freezing outside.", fa: "حتماً لباس گرم بپوش؛ دمای هوای بیرون زیر صفر است." }
        ]
      },
      {
        id: "work_out",
        word: "work out",
        level: "B1",
        theme: "پیشرفت و اهداف",
        meaning: "به نتیجه مثبت رسیدن، درست از آب درآمدن؛ ورزش کردن",
        en: "Do not worry too much; everything will work out in the end.",
        fa: "زیاد نگران نباش؛ در نهایت همه چیز درست از آب درمی‌آید و حل می‌شود.",
        icon: "\ud83d\udcaa",
        examples: [
          { en: "Do not worry too much; everything will work out in the end.", fa: "زیاد نگران نباش؛ در نهایت همه چیز درست از آب درمی‌آید و حل می‌شود." },
          { en: "He works out at the local gym three mornings a week.", fa: "او هفته‌ای سه روز صبح در باشگاه محلی ورزش و تمرین می‌کند." },
          { en: "Our negotiation worked out well and both companies signed.", fa: "مذاکرات ما به خوبی به نتیجه رسید و هر دو شرکت قرارداد را امضا کردند." }
        ]
      },
      {
        id: "catch_up",
        word: "catch up",
        level: "B1",
        theme: "پیشرفت و اهداف",
        meaning: "جبران عقب‌افتادگی، رسیدن به سطح دیگران؛ تازه‌کردن دیدار",
        en: "I need to catch up on my reading after missing two weeks of class.",
        fa: "بعد از غیبت در دو هفته کلاس، باید عقب‌افتادگی مطالعه‌ام را جبران کنم.",
        icon: "\ud83c\udfc3",
        examples: [
          { en: "I need to catch up on my reading after missing two weeks of class.", fa: "بعد از غیبت در دو هفته کلاس، باید عقب‌افتادگی مطالعه‌ام را جبران کنم." },
          { en: "We grabbed a coffee together to catch up on all the family news.", fa: "با هم قهوه‌ای خوردیم تا دیدار تازه کنیم و از همه اخبار خانواده باخبر شویم." },
          { en: "Work hard today so you can catch up with the project deadline.", fa: "امروز سخت کار کن تا بتوانی خودت را به مهلت تحویل پروژه برسانی." }
        ]
      },
      {
        id: "sort_out",
        word: "sort out",
        level: "B1",
        theme: "پیشرفت و اهداف",
        meaning: "حل و فصل کردن، مرتب کردن و سروسامان دادن به وضعیت",
        en: "We need to sort out our travel arrangements before Friday.",
        fa: "ما باید قبل از جمعه هماهنگی‌های سفرمان را سروسامان دهیم و مرتب کنیم.",
        icon: "\ud83d\uddc2\ufe0f",
        examples: [
          { en: "We need to sort out our travel arrangements before Friday.", fa: "ما باید قبل از جمعه هماهنگی‌های سفرمان را سروسامان دهیم و مرتب کنیم." },
          { en: "The technical support team sorted out the network glitch quickly.", fa: "تیم پشتیبانی فنی مشکل شبکه را به سرعت حل و فصل کرد." },
          { en: "She spent Saturday sorting out old papers and receipts.", fa: "او شنبه را صرف دسته‌بندی و مرتب کردن کاغذها و رسیدهای قدیمی کرد." }
        ]
      },
      {
        id: "find_out",
        word: "find out",
        level: "B1",
        theme: "پیشرفت و اهداف",
        meaning: "پی بردن، مطلع شدن و کشف کردن حقیقت",
        en: "Call the embassy to find out what visa documents are required.",
        fa: "با سفارت تماس بگیر تا مطلع شوی چه مدارکی برای ویزا لازم است.",
        icon: "\ud83d\udd0e",
        examples: [
          { en: "Call the embassy to find out what visa documents are required.", fa: "با سفارت تماس بگیر تا مطلع شوی چه مدارکی برای ویزا لازم است." },
          { en: "She was thrilled to find out she had won the academic scholarship.", fa: "او از اینکه پی برد برنده بورسیه تحصیلی شده بسیار هیجان‌زده شد." },
          { en: "How did you find out about our secret anniversary surprise?", fa: "چطور از سورپرایز سالگرد مخفیانه ما باخبر شدی؟" }
        ]
      },
      {
        id: "turn_out",
        word: "turn out",
        level: "B1",
        theme: "پیشرفت و اهداف",
        meaning: "از آب درآمدن، نتیجه مشخصی پیدا کردن؛ مشخص شدن در نهایت",
        en: "The rainy morning turned out to be a glorious sunny afternoon.",
        fa: "صبح بارانی در نهایت بعدازظهری آفتابی و باشکوه از آب درآمد.",
        icon: "\ud83c\udf08",
        examples: [
          { en: "The rainy morning turned out to be a glorious sunny afternoon.", fa: "صبح بارانی در نهایت بعدازظهری آفتابی و باشکوه از آب درآمد." },
          { en: "It turned out that we had both attended the same high school.", fa: "در نهایت مشخص شد که هر دوی ما در یک دبیرستان درس خوانده بودیم." },
          { en: "Despite our initial worries, the dinner party turned out wonderful.", fa: "علیرغم نگرانی‌های اولیه‌مان، مهمانی شام فوق‌العاده از آب درآمد." }
        ]
      }
    ]
  },

  pv_b1_changes: {
    name: "تغییرات و رویدادها",
    title: "تغییرات و رویدادها",
    icon: "\u23f3",
    level: "B1",
    words: [
      {
        id: "come_out",
        word: "come out",
        level: "B1",
        theme: "تغییرات و رویدادها",
        meaning: "فاش شدن، علنی شدن حقیقت؛ منتشر شدن کتاب یا فیلم؛ بیرون آمدن آفتاب",
        en: "The author's highly anticipated new book comes out next month.",
        fa: "کتاب جدید و مورد انتظار این نویسنده ماه آینده منتشر می‌شود و به بازار می‌آید.",
        icon: "\ud83d\udcda",
        examples: [
          { en: "The author's highly anticipated new book comes out next month.", fa: "کتاب جدید و مورد انتظار این نویسنده ماه آینده منتشر می‌شود و به بازار می‌آید." },
          { en: "The full truth finally came out after a thorough investigation.", fa: "حقیقت کامل سرانجام پس از تحقیقاتی دقیق فاش و برملا شد." },
          { en: "The sun came out from behind the clouds and warmed the garden.", fa: "خورشید از پشت ابرها بیرون آمد و باغ را گرم کرد." }
        ]
      },
      {
        id: "come_on",
        word: "come on",
        level: "B1",
        theme: "تغییرات و رویدادها",
        meaning: "زود باش، عجله کن؛ تشویق کردن؛ روشن شدن چراغ‌ها یا وسایل",
        en: "Come on, we are going to miss the start of the movie!",
        fa: "زود باش، داریم شروع فیلم را از دست می‌دهیم!",
        icon: "\u26a1",
        examples: [
          { en: "Come on, we are going to miss the start of the movie!", fa: "زود باش، داریم شروع فیلم را از دست می‌دهیم!" },
          { en: "The streetlights come on automatically as darkness falls.", fa: "چراغ‌های خیابان با فرارسیدن تاریکی به طور خودکار روشن می‌شوند." },
          { en: "Come on, do not give up now when you are so close to finishing.", fa: "دست بجنبان، الان که این‌قدر به پایان نزدیکی تسلیم نشو." }
        ]
      },
      {
        id: "come_down",
        word: "come down",
        level: "B1",
        theme: "تغییرات و رویدادها",
        meaning: "کاهش یافتن (قیمت‌ها و دما)؛ پایین آمدن فیزیکی یا فرود آمدن",
        en: "House prices are expected to come down slightly this winter.",
        fa: "انتظار می‌رود قیمت مسکن در زمستان امسال اندکی کاهش یابد.",
        icon: "\ud83d\udcc9",
        examples: [
          { en: "House prices are expected to come down slightly this winter.", fa: "انتظار می‌رود قیمت مسکن در زمستان امسال اندکی کاهش یابد." },
          { en: "Heavy snow came down continuously for twelve hours.", fa: "برف سنگین به مدت دوازده ساعت به طور مداوم بارید و فرو ریخت." },
          { en: "His fever has finally started to come down after taking medicine.", fa: "تب او سرانجام پس از مصرف دارو رو به کاهش گذاشته است." }
        ]
      },
      {
        id: "calm_down",
        word: "calm down",
        level: "B1",
        theme: "تغییرات و رویدادها",
        meaning: "آرام شدن، خونسردی خود را حفظ یا بازیافتن",
        en: "Take three deep breaths and calm down before replying.",
        fa: "سه نفس عمیق بکش و قبل از پاسخ دادن آرام شو.",
        icon: "\ud83e\uddd8",
        examples: [
          { en: "Take three deep breaths and calm down before replying.", fa: "سه نفس عمیق بکش و قبل از پاسخ دادن آرام شو." },
          { en: "The stormy seas gradually calmed down by sunrise.", fa: "دریای طوفانی تا طلوع آفتاب به تدریج آرام گرفت." },
          { en: "Listening to classical piano music helps her calm down after work.", fa: "گوش دادن به پیانوی کلاسیک به او کمک می‌کند پس از کار آرامش یابد." }
        ]
      },
      {
        id: "give_up",
        word: "give up",
        level: "B1",
        theme: "تغییرات و رویدادها",
        meaning: "تسلیم شدن، دست کشیدن از تلاش؛ ترک کردن عادت",
        en: "Never give up on your dreams, no matter how hard it gets.",
        fa: "هرگز از رویاهایت دست نکش و تسلیم نشو، مهم نیست چقدر سخت شود.",
        icon: "\ud83c\udff3\ufe0f",
        examples: [
          { en: "Never give up on your dreams, no matter how hard it gets.", fa: "هرگز از رویاهایت دست نکش و تسلیم نشو، مهم نیست چقدر سخت شود." },
          { en: "He decided to give up smoking to protect his health.", fa: "او تصمیم گرفت برای حفظ سلامتی‌اش سیگار را ترک کند." },
          { en: "After hours of searching, they finally gave up hope of finding the ring.", fa: "پس از ساعت‌ها جستجو، در نهایت از پیدا کردن انگشتر قطع امید کردند." }
        ]
      },
      {
        id: "go_by",
        word: "go by",
        level: "B1",
        theme: "تغییرات و رویدادها",
        meaning: "سپری شدن زمان، گذشتن روزها و سال‌ها؛ عمل کردن طبق قاعده",
        en: "Time goes by so fast when you are enjoying yourself.",
        fa: "زمان وقتی در حال لذت بردن هستی با چه سرعتی سپری می‌شود!",
        icon: "\u231b",
        examples: [
          { en: "Time goes by so fast when you are enjoying yourself.", fa: "زمان وقتی در حال لذت بردن هستی با چه سرعتی سپری می‌شود!" },
          { en: "Ten years went by before he returned to his home country.", fa: "ده سال سپری شد قبل از اینکه او به زادگاهش بازگردد." },
          { en: "We must go by the safety guidelines set by the building manager.", fa: "ما باید طبق دستورالعمل‌های ایمنی تعیین‌شده توسط مدیر ساختمان عمل کنیم." }
        ]
      },
      {
        id: "call_off",
        word: "call off",
        level: "B1",
        theme: "تغییرات و رویدادها",
        meaning: "لغو کردن، کنسل کردن برنامه یا مراسم",
        en: "They had to call off the outdoor match due to a torrential downpour.",
        fa: "آن‌ها مجبور شدند به دلیل باران سیل‌آسا، مسابقه در فضای باز را لغو کنند.",
        icon: "\ud83d\udeab",
        examples: [
          { en: "They had to call off the outdoor match due to a torrential downpour.", fa: "آن‌ها مجبور شدند به دلیل باران سیل‌آسا، مسابقه در فضای باز را لغو کنند." },
          { en: "The union decided to call off the strike after reaching an agreement.", fa: "اتحادیه پس از رسیدن به توافق تصمیم گرفت اعتصاب را لغو کند." },
          { en: "Call off the search; the lost keys have been located.", fa: "جستجو را لغو و متوقف کنید؛ کلیدهای گمشده پیدا شدند." }
        ]
      },
      {
        id: "turn_into",
        word: "turn into",
        level: "B1",
        theme: "تغییرات و رویدادها",
        meaning: "تبدیل شدن به چیز یا حالتی دیگر، دیگرگون شدن",
        en: "With proper care, the empty lot turned into a flourishing garden.",
        fa: "با مراقبت مناسب، آن زمین خالی به باغی سرسبز و شکوفا تبدیل شد.",
        icon: "\ud83e\udd8b",
        examples: [
          { en: "With proper care, the empty lot turned into a flourishing garden.", fa: "با مراقبت مناسب، آن زمین خالی به باغی سرسبز و شکوفا تبدیل شد." },
          { en: "Water turns into ice when the temperature drops below zero.", fa: "آب وقتی دما به زیر صفر می‌رسد به یخ تبدیل می‌شود." },
          { en: "A casual hobby gradually turned into a lucrative full-time career.", fa: "یک سرگرمی تفننی به تدریج به شغلی تمام‌وقت و پرسود دگرگون شد." }
        ]
      },
      {
        id: "move_on",
        word: "move on",
        level: "B1",
        theme: "تغییرات و رویدادها",
        meaning: "پشت سر گذاشتن دوران سخت و ادامه زندگی؛ رفتن به مرحله بعدی",
        en: "It is important to learn from mistakes and move on.",
        fa: "مهم است که از اشتباهات درس بگیریم و به زندگی ادامه دهیم.",
        icon: "\u23e9",
        examples: [
          { en: "It is important to learn from mistakes and move on.", fa: "مهم است که از اشتباهات درس بگیریم و به زندگی ادامه دهیم." },
          { en: "Let us move on to the next item on the meeting agenda.", fa: "بیایید به سراغ بند بعدی در دستور جلسه برویم." },
          { en: "After working ten years at the firm, she decided it was time to move on.", fa: "پس از ده سال کار در آن شرکت، تصمیم گرفت زمان رفتن به مرحله بعد فرا رسیده است." }
        ]
      }
    ]
  },

  pv_b2_discourse: {
    name: "رفتار و لحن کلام",
    title: "رفتار و لحن کلام",
    icon: "\ud83d\udde3\ufe0f",
    level: "B2",
    words: [
      {
        id: "butt_in",
        word: "butt in",
        level: "B2",
        theme: "رفتار و لحن کلام",
        meaning: "دخالت کردن در صحبت دیگران، فضولی کلامی و پریدن ناخوانده میان گفتگو",
        en: "Pardon me for butting in, but did I hear you mention Madrid?",
        fa: "ببخشید وسط حرفتان می‌پرم، اما آیا شنیدم که نام مادرید را آوردید؟",
        icon: "\ud83e\udd10",
        examples: [
          { en: "Pardon me for butting in, but did I hear you mention Madrid?", fa: "ببخشید وسط حرفتان می‌پرم، اما آیا شنیدم که نام مادرید را آوردید؟" },
          { en: "It is rude to butt in when two people are having a private conversation.", fa: "بی‌ادبانه است وقتی دو نفر دارند خصوصی صحبت می‌کنند، وسط حرفشان بپری." },
          { en: "He kept butting in with unsolicited opinions throughout the presentation.", fa: "او در طول ارائه مدام با نظرات ناخواسته وسط حرف گوینده می‌دوید." }
        ]
      },
      {
        id: "blurt_out",
        word: "blurt out",
        level: "B2",
        theme: "رفتار و لحن کلام",
        meaning: "نسنجیده و ناگهانی سخن گفتن، حرفی یا رازی را ناخواسته پراندن",
        en: "Before thinking, he blurted out the surprise party secret.",
        fa: "قبل از اینکه فکر کند، راز مهمانی غافلگیرکننده را نسنجیده لو داد و پراند.",
        icon: "\ud83e\udee2",
        examples: [
          { en: "Before thinking, he blurted out the surprise party secret.", fa: "قبل از اینکه فکر کند، راز مهمانی غافلگیرکننده را نسنجیده لو داد و پراند." },
          { en: "She blurted out the answer before the teacher even finished the question.", fa: "او حتی قبل از اینکه معلم سؤال را تمام کند، ناگهانی جواب را پراند." },
          { en: "Under immense stress, the witness blurted out the defendant's real name.", fa: "تحت فشار روانی شدید، شاهد نسنجیده نام واقعی متهم را بر زبان آورد." }
        ]
      },
      {
        id: "talk_over_interrupt",
        word: "talk over",
        level: "B2",
        theme: "رفتار و لحن کلام",
        meaning: "بلندتر از دیگری حرف زدن برای قطع کلام او و اجازه ندادن به صحبتش",
        en: "Please do not talk over me while I am trying to explain my reasoning.",
        fa: "لطفاً در حالی که سعی دارم دلیلم را توضیح دهم، بلندتر از من حرف نزن و کلامم را قطع نکن.",
        icon: "\ud83d\udce2",
        examples: [
          { en: "Please do not talk over me while I am trying to explain my reasoning.", fa: "لطفاً در حالی که سعی دارم دلیلم را توضیح دهم، بلندتر از من حرف نزن و کلامم را قطع نکن." },
          { en: "The aggressive debater constantly talked over his opponents during the panel.", fa: "مناظره‌کننده پرخاشگر در طول میزگرد مدام روی صحبت مخالفانش حرف می‌زد." },
          { en: "If you talk over each other, nobody in the audience will understand anything.", fa: "اگر هم‌زمان روی حرف هم صحبت کنید، هیچ‌کس از حاضران چیزی نخواهد فهمید." }
        ]
      },
      {
        id: "talk_around",
        word: "talk around",
        level: "B2",
        theme: "رفتار و لحن کلام",
        meaning: "قانع کردن کسی با استدلال؛ حاشیه رفتن پیرامون موضوع اصلی",
        en: "It took hours of patient discussion, but we finally talked him around.",
        fa: "ساعت‌ها بحث صبورانه برد، اما سرانجام توانستیم او را قانع و راضی کنیم.",
        icon: "\ud83d\udd04",
        examples: [
          { en: "It took hours of patient discussion, but we finally talked him around.", fa: "ساعت‌ها بحث صبورانه برد، اما سرانجام توانستیم او را قانع و راضی کنیم." },
          { en: "The spokesperson talked around the uncomfortable issue without giving a straight answer.", fa: "سخنگو پیرامون مسئله ناخوشایند حاشیه رفت بدون اینکه پاسخی سرراست بدهد." },
          { en: "She managed to talk her parents around to letting her travel abroad alone.", fa: "او موفق شد والدینش را راضی کند تا به او اجازه دهند تنهایی به خارج سفر کند." }
        ]
      },
      {
        id: "shut_down_dismiss",
        word: "shut down",
        level: "B2",
        theme: "رفتار و لحن کلام",
        meaning: "تو ذوق زدن، رد کردن قاطع و بی‌درنگ ایده یا پیشنهاد کسی در گفتگو",
        en: "The manager immediately shut down our innovative proposal without review.",
        fa: "مدیر بلافاصله بدون بررسی طرح نوآورانه ما را رد کرد و تو ذوقمان زد.",
        icon: "\ud83d\udeab",
        examples: [
          { en: "The manager immediately shut down our innovative proposal without review.", fa: "مدیر بلافاصله بدون بررسی طرح نوآورانه ما را رد کرد و تو ذوقمان زد." },
          { en: "Do not shut down constructive feedback just because it sounds critical.", fa: "بازخورد سازنده را صرفاً به این دلیل که منتقدانه به نظر می‌رسد سرکوب و رد نکن." },
          { en: "Every creative idea I shared in the workshop was harshly shut down.", fa: "هر ایده خلاقانه‌ای که در کارگاه مطرح کردم به تندی رد شد." }
        ]
      },
      {
        id: "look_down_on",
        word: "look down on",
        level: "B2",
        theme: "رفتار و لحن کلام",
        meaning: "تحقیر کردن، خود را برتر دانستن از دیگران و با تکبر نگریستن",
        en: "You should never look down on people who have less privilege in life.",
        fa: "هرگز نباید به افرادی که در زندگی امتیازات کمتری داشته‌اند با تحقیر نگاه کنی.",
        icon: "\ud83d\ude12",
        examples: [
          { en: "You should never look down on people who have less privilege in life.", fa: "هرگز نباید به افرادی که در زندگی امتیازات کمتری داشته‌اند با تحقیر نگاه کنی." },
          { en: "He looks down on anyone without an Ivy League degree.", fa: "او به هر کسی که مدرک دانشگاهی معتبر ندارد از بالا به پایین نگاه می‌کند." },
          { en: "True leaders treat everyone with respect rather than looking down on staff.", fa: "رهبران راستین با همه با احترام رفتار می‌کنند، نه اینکه زیردستان را حقیر بشمارند." }
        ]
      },
      {
        id: "tell_off",
        word: "tell off",
        level: "B2",
        theme: "رفتار و لحن کلام",
        meaning: "سرزنش کردن، توبیخ کردن و با تندی خطای کسی را گوشزد کردن",
        en: "The headmaster told him off for arriving late three days in a row.",
        fa: "مدیر مدرسه او را به خاطر اینکه سه روز متوالی دیر آمده بود به تندی توبیخ کرد.",
        icon: "\ud83d\ude20",
        examples: [
          { en: "The headmaster told him off for arriving late three days in a row.", fa: "مدیر مدرسه او را به خاطر اینکه سه روز متوالی دیر آمده بود به تندی توبیخ کرد." },
          { en: "She told off the rude customer for yelling at the young cashier.", fa: "او مشتری بی‌ادب را به خاطر داد زدن سر صندوق‌دار جوان توبیخ و سرزنش کرد." },
          { en: "I got told off by my landlord for playing loud electric guitar at midnight.", fa: "به خاطر نواختن بلند گیتار برقی در نیمه‌شب، از صاحب‌خانه تذکر و توبیخ تندی گرفتم." }
        ]
      },
      {
        id: "brush_off",
        word: "brush off",
        level: "B2",
        theme: "رفتار و لحن کلام",
        meaning: "نادیده گرفتن، بی‌اعتنایی کردن به انتقاد یا نظر، پس زدن",
        en: "The politician brushed off questions regarding campaign finances.",
        fa: "این سیاستمدار پرسش‌های مربوط به منابع مالی کمپین را با بی‌اعتنایی رد کرد و نادیده گرفت.",
        icon: "\u270b",
        examples: [
          { en: "The politician brushed off questions regarding campaign finances.", fa: "این سیاستمدار پرسش‌های مربوط به منابع مالی کمپین را با بی‌اعتنایی رد کرد و نادیده گرفت." },
          { en: "Do not just brush off her concerns; she has valid points to make.", fa: "نگرانی‌های او را فقط با بی‌محلی پس نزن؛ او نکات معتبری برای گفتن دارد." },
          { en: "He brushed off the criticism with a calm smile and returned to his work.", fa: "او انتقادها را با لبخندی آرام نادیده گرفت و به کارش بازگشت." }
        ]
      },
      {
        id: "insist_on",
        word: "insist on",
        level: "B2",
        theme: "رفتار و لحن کلام",
        meaning: "اصرار ورزیدن، پافشاری کردن بر موضع یا خواسته‌ای خاص",
        en: "She insisted on paying for the entire dinner bill herself.",
        fa: "او اصرار ورزید که کل صورت‌حساب شام را خودش به تنهایی پرداخت کند.",
        icon: "\u261d\ufe0f",
        examples: [
          { en: "She insisted on paying for the entire dinner bill herself.", fa: "او اصرار ورزید که کل صورت‌حساب شام را خودش به تنهایی پرداخت کند." },
          { en: "The auditor insisted on seeing the original receipts for every transaction.", fa: "حسابرس پافشاری کرد که رسیدهای اصلی تمام تراکنش‌ها را مشاهده کند." },
          { en: "Why do you insist on wearing light clothing when the temperature is freezing?", fa: "چرا وقتی هوا یخبندان است اصرار داری لباس نازک بپوشی؟" }
        ]
      },
      {
        id: "take_back",
        word: "take back",
        level: "B2",
        theme: "رفتار و لحن کلام",
        meaning: "پس گرفتن حرف، اعتراف به اشتباه بودن ادعا؛ بازگرداندن کالا به فروشگاه",
        en: "I take back what I said earlier; you were completely right.",
        fa: "حرفی را که قبلاً زدم پس می‌گیرم؛ حق کاملاً با تو بود.",
        icon: "\u21a9\ufe0f",
        examples: [
          { en: "I take back what I said earlier; you were completely right.", fa: "حرفی را که قبلاً زدم پس می‌گیرم؛ حق کاملاً با تو بود." },
          { en: "He was forced to take back his hurtful remarks in front of the team.", fa: "او ناچار شد سخنان دلخراشش را در حضور اعضای تیم پس بگیرد." },
          { en: "The shoes did not fit comfortably, so I took them back to the store.", fa: "کفش‌ها اندازه پایم نبود، بنابراین آن‌ها را به فروشگاه بازگرداندم." }
        ]
      },
      {
        id: "fill_in",
        word: "fill in",
        level: "B2",
        theme: "رفتار و لحن کلام",
        meaning: "در جریان جزئیات گذاشتن، توضیح دادن ماجرا؛ پر کردن فرم یا جای خالی",
        en: "Can you fill me in on what happened while I was out of the office?",
        fa: "می‌توانی مرا در جریان بگذاری که وقتی خارج از دفتر بودم چه اتفاقی افتاد؟",
        icon: "\ud83d\udcdd",
        examples: [
          { en: "Can you fill me in on what happened while I was out of the office?", fa: "می‌توانی مرا در جریان بگذاری که وقتی خارج از دفتر بودم چه اتفاقی افتاد؟" },
          { en: "Before the presentation, her assistant filled her in on the client background.", fa: "پیش از ارائه، دستیارش او را در جریان پیشینه مشتری قرار داد." },
          { en: "Please fill in all the required fields in this visa application form.", fa: "لطفاً تمام فیلدهای الزامی این فرم درخواست ویزا را پر کنید." }
        ]
      }
    ]
  },

  pv_b2_wellbeing: {
    name: "سلامت و بازیابی",
    title: "سلامت و بازیابی",
    icon: "\ud83c\udf3f",
    level: "B2",
    words: [
      {
        id: "come_down_with",
        word: "come down with",
        level: "B2",
        theme: "سلامت و بازیابی",
        meaning: "علائم بیماری پیدا کردن، مبتلا شدن به سرماخوردگی یا آنفولانزا",
        en: "I think I am coming down with the flu; my throat hurts badly.",
        fa: "فکر می‌کنم دارم آنفولانزا می‌گیرم؛ گلویم به شدت درد می‌کند.",
        icon: "\ud83e\udd12",
        examples: [
          { en: "I think I am coming down with the flu; my throat hurts badly.", fa: "فکر می‌کنم دارم آنفولانزا می‌گیرم؛ گلویم به شدت درد می‌کند." },
          { en: "Half the office came down with a stomach virus over the weekend.", fa: "طی آخر هفته نیمی از کارمندان اداره دچار ویروس معده شدند و افتادند." },
          { en: "Drink warm lemon tea if you feel like you are coming down with something.", fa: "اگر احساس می‌کنی داری سرما می‌خوری، چای لیموی گرم بنوش." }
        ]
      },
      {
        id: "fight_off",
        word: "fight off",
        level: "B2",
        theme: "سلامت و بازیابی",
        meaning: "مبارزه با بیماری و پس زدن آن، مقاومت در برابر مهاجم یا خستگی",
        en: "Her immune system managed to fight off the winter infection.",
        fa: "سیستم ایمنی بدن او موفق شد عفونت زمستانی را پس بزند و دفع کند.",
        icon: "\ud83d\udee1\ufe0f",
        examples: [
          { en: "Her immune system managed to fight off the winter infection.", fa: "سیستم ایمنی بدن او موفق شد عفونت زمستانی را پس بزند و دفع کند." },
          { en: "He drank hot ginger soup to fight off a stubborn cold.", fa: "او برای مبارزه با یک سرماخوردگی سرسخت، سوپ داغ زنجبیل خورد." },
          { en: "The exhausted driver splashed cold water on his face to fight off sleep.", fa: "راننده خسته به صورتش آب سرد پاشید تا با خواب‌آلودگی مبارزه کند." }
        ]
      },
      {
        id: "pass_away",
        word: "pass away",
        level: "B2",
        theme: "سلامت و بازیابی",
        meaning: "درگذشتن، فوت کردن (تعبیری محترمانه و ملایم برای مرگ)",
        en: "His grandfather passed away peacefully in his sleep at age ninety.",
        fa: "پدربزرگش در نود سالگی در کمال آرامش در خواب درگذشت.",
        icon: "\ud83d\udd4a\ufe0f",
        examples: [
          { en: "His grandfather passed away peacefully in his sleep at age ninety.", fa: "پدربزرگش در نود سالگی در کمال آرامش در خواب درگذشت." },
          { en: "We were deeply saddened to hear that the renowned poet passed away.", fa: "از شنیدن خبر درگذشت این شاعر نامدار عمیقاً اندوهگین شدیم." },
          { en: "She inherited the antique grandfather clock when her aunt passed away.", fa: "هنگامی که عمه‌اش به رحمت خدا رفت، ساعت ایستاده عتیقه به او به ارث رسید." }
        ]
      },
      {
        id: "heal_up",
        word: "heal up",
        level: "B2",
        theme: "سلامت و بازیابی",
        meaning: "بهبود یافتن زخم یا آسیب‌دیدگی، جوش خوردن جراحت",
        en: "Keep the cut clean and dry so it can heal up without scarring.",
        fa: "محل بریدگی را تمیز و خشک نگه دار تا بتواند بدون ایجاد جای زخم بهبود یابد.",
        icon: "\ud83e\ude79",
        examples: [
          { en: "Keep the cut clean and dry so it can heal up without scarring.", fa: "محل بریدگی را تمیز و خشک نگه دار تا بتواند بدون ایجاد جای زخم بهبود یابد." },
          { en: "It took several weeks for the fractured bone to completely heal up.", fa: "چندین هفته طول کشید تا استخوان شکسته کاملاً جوش بخورد و التیام یابد." },
          { en: "Proper nutrition helps surgical wounds heal up much faster.", fa: "تغذیه مناسب به التیام بسیار سریع‌تر زخم‌های جراحی کمک می‌کند." }
        ]
      },
      {
        id: "sober_up",
        word: "sober up",
        level: "B2",
        theme: "سلامت و بازیابی",
        meaning: "از حالت مستی درآمدن، هوشیار شدن و سر عقل آمدن",
        en: "He drank two cups of black coffee to sober up before heading home.",
        fa: "او دو فنجان قهوه تلخ نوشید تا قبل از رفتن به خانه هوشیار شود و سر عقل بیاید.",
        icon: "\u2615",
        examples: [
          { en: "He drank two cups of black coffee to sober up before heading home.", fa: "او دو فنجان قهوه تلخ نوشید تا قبل از رفتن به خانه هوشیار شود و سر عقل بیاید." },
          { en: "A brisk walk in the crisp night air helped him sober up quickly.", fa: "قدم زدن سریع در هوای خنک شبانه به او کمک کرد تا به سرعت هوشیاری‌اش را بازیابد." },
          { en: "The sobering news made everyone realize the gravity of the crisis.", fa: "خبر تکان‌دهنده باعث شد همگی به عمق بحران پی ببرند و سر عقل بیایند." }
        ]
      },
      {
        id: "patch_up",
        word: "patch up",
        level: "B2",
        theme: "سلامت و بازیابی",
        meaning: "وصله کردن، ترمیم کردن (لباس، جراحت موقت یا رابطه)",
        en: "The medic patched up the athlete's minor ankle sprain.",
        fa: "امدادگر پیچ‌خوردگی جزئی مچ پای ورزشکار را به طور موقت پانسمان و مداوا کرد.",
        icon: "\ud83e\uddf5",
        examples: [
          { en: "The medic patched up the athlete's minor ankle sprain.", fa: "امدادگر پیچ‌خوردگی جزئی مچ پای ورزشکار را به طور موقت پانسمان و مداوا کرد." },
          { en: "They met for dinner to patch up their strained friendship.", fa: "آن‌ها برای شام ملاقات کردند تا دوستی تیره‌وتارشان را ترمیم کنند و آشتی نمایند." },
          { en: "He managed to patch up the leaking garden pipe with waterproof tape.", fa: "او موفق شد لوله چکه‌کننده باغچه را با چسب ضدآب موقتاً سرهم و وصله کند." }
        ]
      },
      {
        id: "look_back_on",
        word: "look back on",
        level: "B2",
        theme: "سلامت و بازیابی",
        meaning: "مرور خاطرات گذشته، با تأمل و نوستالژی به گذشته نگریستن",
        en: "In old age, he looked back on his university days with great fondness.",
        fa: "در دوران سالمندی، او با علاقه و دلتنگی بسیار به روزهای دانشگاهش نگاه می‌کرد.",
        icon: "\ud83c\udf05",
        examples: [
          { en: "In old age, he looked back on his university days with great fondness.", fa: "در دوران سالمندی، او با علاقه و دلتنگی بسیار به روزهای دانشگاهش نگاه می‌کرد." },
          { en: "Years from now, we will look back on this challenging journey and smile.", fa: "سال‌ها بعد، به این سفر پرچالش نگاه خواهیم کرد و لبخند خواهیم زد." },
          { en: "Looking back on my mistakes taught me priceless lessons about resilience.", fa: "تأمل و بازنگری بر اشتباهاتم، درس‌های گرانبهایی از تاب‌آوری به من آموخت." }
        ]
      },
      {
        id: "fall_apart",
        word: "fall apart",
        level: "B2",
        theme: "سلامت و بازیابی",
        meaning: "از هم پاشیدن، داغان شدن، متلاشی شدن جسمی، روحی یا سازه‌ای",
        en: "My beloved vintage leather shoes are finally falling apart.",
        fa: "کفش‌های چرمی کلاسیک و محبوبم سرانجام دارند از هم متلاشی می‌شوند.",
        icon: "\ud83d\udc94",
        examples: [
          { en: "My beloved vintage leather shoes are finally falling apart.", fa: "کفش‌های چرمی کلاسیک و محبوبم سرانجام دارند از هم متلاشی می‌شوند." },
          { en: "Under intense cross-examination, the witness's fabricated story fell apart.", fa: "داستان ساختگی شاهد زیر بار بازجویی دقیق و فشرده از هم پاشید." },
          { en: "She felt like her whole life was falling apart after losing her job.", fa: "پس از دست دادن شغلش احساس می‌کرد کل زندگی‌اش دارد از هم می‌پاشد." }
        ]
      },
      {
        id: "grow_on",
        word: "grow on",
        level: "B2",
        theme: "سلامت و بازیابی",
        meaning: "به تدریج به دل نشستن، جذاب‌تر و دوست‌داشتنی‌تر شدن به مرور زمان",
        en: "I disliked the modern painting at first, but it has really grown on me.",
        fa: "در ابتدا از این نقاشی مدرن خوشم نیامد، اما به مرور زمان واقعاً به دلم نشسته است.",
        icon: "\ud83c\udf31",
        examples: [
          { en: "I disliked the modern painting at first, but it has really grown on me.", fa: "در ابتدا از این نقاشی مدرن خوشم نیامد، اما به مرور زمان واقعاً به دلم نشسته است." },
          { en: "Living in a quiet small town gradually grows on most city dwellers.", fa: "زندگی در یک شهر کوچک و آرام به تدریج به دل اغلب شهرنشینان می‌نشیند." },
          { en: "Give the album another listen; the quirky melodies tend to grow on you.", fa: "یک بار دیگر به آلبوم گوش بده؛ ملودی‌های خاصش معمولاً بعد از چند بار به دل می‌نشینند." }
        ]
      },
      {
        id: "warm_to",
        word: "warm to",
        level: "B2",
        theme: "سلامت و بازیابی",
        meaning: "راغب شدن به یک ایده یا فرد، گرم گرفتن و خوش‌بین‌تر شدن نسبت به چیزی",
        en: "The committee members gradually warmed to our renewable energy plan.",
        fa: "اعضای کمیته به تدریج نسبت به طرح انرژی‌های تجدیدپذیر ما راغب و علاقه‌مند شدند.",
        icon: "\u2600\ufe0f",
        examples: [
          { en: "The committee members gradually warmed to our renewable energy plan.", fa: "اعضای کمیته به تدریج نسبت به طرح انرژی‌های تجدیدپذیر ما راغب و علاقه‌مند شدند." },
          { en: "It took a few conversations before the cat warmed to the new puppy.", fa: "کمی زمان برد تا گربه با توله‌سگ تازه وارد انس بگیرد و گرم شود." },
          { en: "Investors quickly warmed to the young founder's enthusiastic vision.", fa: "سرمایه‌گذاران به سرعت نسبت به چشم‌انداز پرشور این بنیان‌گذار جوان راغب شدند." }
        ]
      }
    ]
  },

  pv_b2_endeavor: {
    name: "تلاش و ابتکار",
    title: "تلاش و ابتکار",
    icon: "\ud83d\ude80",
    level: "B2",
    words: [
      {
        id: "look_into",
        word: "look into",
        level: "B2",
        theme: "تلاش و ابتکار",
        meaning: "تحقیق و بررسی موشکافانه یک مسئله یا معما",
        en: "The security council promised to look into the mysterious data leak.",
        fa: "شورای امنیت قول داد که نشت مرموز داده‌ها را به طور موشکافانه بررسی و تحقیق کند.",
        icon: "\ud83d\udd2c",
        examples: [
          { en: "The security council promised to look into the mysterious data leak.", fa: "شورای امنیت قول داد که نشت مرموز داده‌ها را به طور موشکافانه بررسی و تحقیق کند." },
          { en: "We are looking into solar panels as a viable way to cut electricity costs.", fa: "ما در حال بررسی پنل‌های خورشیدی به عنوان راهکاری شدنی برای کاهش هزینه‌های برق هستیم." },
          { en: "A special commission was appointed to look into hospital management.", fa: "کمیسیونی ویژه برای تحقیق پیرامون مدیریت بیمارستان تعیین شد." }
        ]
      },
      {
        id: "look_over",
        word: "look over",
        level: "B2",
        theme: "تلاش و ابتکار",
        meaning: "مرور و بررسی سریع، نگاه کلی انداختن به اسناد",
        en: "Could you look over my resume before I submit the online application?",
        fa: "می‌توانی قبل از ارسال درخواست آنلاین، رزومه مرا یک مرور سریع بکنی؟",
        icon: "\ud83d\udcc4",
        examples: [
          { en: "Could you look over my resume before I submit the online application?", fa: "می‌توانی قبل از ارسال درخواست آنلاین، رزومه مرا یک مرور سریع بکنی؟" },
          { en: "The lawyer looked over the partnership contract for obvious loopholes.", fa: "وکیل قرارداد شراکت را برای یافتن روزنه‌های مشهود به سرعت بازبینی کرد." },
          { en: "I quickly looked over the exam questions to allocate my time wisely.", fa: "به سرعت سؤالات امتحان را مرور کردم تا وقتم را هوشمندانه تقسیم کنم." }
        ]
      },
      {
        id: "look_through",
        word: "look through",
        level: "B2",
        theme: "تلاش و ابتکار",
        meaning: "ورق زدن و جستجو در میان انبوهی از اسناد یا اشیاء",
        en: "I spent hours looking through archival documents for historical proof.",
        fa: "ساعت‌ها وقت صرف ورق زدن و جستجو در اسناد آرشیوی برای یافتن مدرک تاریخی کردم.",
        icon: "\ud83d\udcc2",
        examples: [
          { en: "I spent hours looking through archival documents for historical proof.", fa: "ساعت‌ها وقت صرف ورق زدن و جستجو در اسناد آرشیوی برای یافتن مدرک تاریخی کردم." },
          { en: "She looked through the fashion magazine while waiting at the salon.", fa: "او در حالی که در سالن منتظر بود، مجله مد را ورق زد و تماشا کرد." },
          { en: "Detectives looked through the suspect's computer browser history.", fa: "کارآگاهان تاریخچه مرورگر رایانه متهم را جستجو و بازرسی کردند." }
        ]
      },
      {
        id: "brush_up_on",
        word: "brush up on",
        level: "B2",
        theme: "تلاش و ابتکار",
        meaning: "مرور و بازیابی یک مهارت قبلی، تمرین مجدد برای تازه شدن دانش",
        en: "I need to brush up on my French conversation skills before moving to Paris.",
        fa: "قبل از نقل مکان به پاریس، باید مهارت‌های مکالمه فرانسوی‌ام را مرور و تقویت کنم.",
        icon: "\ud83c\udfa8",
        examples: [
          { en: "I need to brush up on my French conversation skills before moving to Paris.", fa: "قبل از نقل مکان به پاریس، باید مهارت‌های مکالمه فرانسوی‌ام را مرور و تقویت کنم." },
          { en: "She spent the weekend brushing up on advanced spreadsheet formulas.", fa: "او آخر هفته را صرف مرور فرمول‌های پیشرفته اکسل کرد." },
          { en: "Attending the seminar allowed engineers to brush up on current safety codes.", fa: "شرکت در سمینار به مهندسان امکان داد آیین‌نامه‌های ایمنی روز را مرور کنند." }
        ]
      },
      {
        id: "dream_up",
        word: "dream up",
        level: "B2",
        theme: "تلاش و ابتکار",
        meaning: "ایده‌پردازی خیالی، در سر پروراندن و خلق طرحی کاملاً نو و بدیع",
        en: "Only a visionary architect could dream up such a striking skyscraper.",
        fa: "تنها یک معمار صاحب‌چشم‌انداز می‌توانست چنین آسمان‌خراش خیره‌کننده‌ای را در سر بپروراند و خلق کند.",
        icon: "\ud83d\udcad",
        examples: [
          { en: "Only a visionary architect could dream up such a striking skyscraper.", fa: "تنها یک معمار صاحب‌چشم‌انداز می‌توانست چنین آسمان‌خراش خیره‌کننده‌ای را در سر بپروراند و خلق کند." },
          { en: "What bizarre marketing stunt has the advertising team dreamed up now?", fa: "تیم تبلیغات حالا چه ترفند بازاریابی عجیب و غریبی را از سر گذرانده و ساخته است؟" },
          { en: "The children dreamed up an elaborate fantasy game involving dragons and wizards.", fa: "کودکان بازی خیالی پرجزییاتی شامل اژدهایان و جادوگران ابداع کردند." }
        ]
      },
      {
        id: "set_up",
        word: "set up",
        level: "B2",
        theme: "تلاش و ابتکار",
        meaning: "راه‌اندازی و تاسیس کسب‌وکار، سازمان یا تشکیلات؛ برپا کردن تجهیزات",
        en: "The young entrepreneurs joined forces to set up a clean-tech startup.",
        fa: "کارآفرینان جوان برای راه‌اندازی و تاسیس یک استارتاپ فناوری پاک هم‌پیمان شدند.",
        icon: "\ud83c\udfe2",
        examples: [
          { en: "The young entrepreneurs joined forces to set up a clean-tech startup.", fa: "کارآفرینان جوان برای راه‌اندازی و تاسیس یک استارتاپ فناوری پاک هم‌پیمان شدند." },
          { en: "Volunteers helped set up folding chairs and tents for the charity fair.", fa: "داوطلبان در برپا کردن صندلی‌های تاشو و چادرها برای نمایشگاه خیریه کمک کردند." },
          { en: "It takes patience to set up a home audio recording studio properly.", fa: "راه‌اندازی اصولی یک استودیوی خانگی ضبط صدا به صبر و حوصله نیاز دارد." }
        ]
      },
      {
        id: "make_up_invent",
        word: "make up",
        level: "B2",
        theme: "تلاش و ابتکار",
        meaning: "از خود درآوردن، سرهم کردن بهانه، داستان تخیلی یا دروغ",
        en: "He made up an elaborate excuse to explain why he was two hours late.",
        fa: "او بهانه‌ای پر آب و تاب از خود درآورد تا توضیح دهد چرا دو ساعت دیر کرده است.",
        icon: "\ud83e\udd25",
        examples: [
          { en: "He made up an elaborate excuse to explain why he was two hours late.", fa: "او بهانه‌ای پر آب و تاب از خود درآورد تا توضیح دهد چرا دو ساعت دیر کرده است." },
          { en: "The creative author makes up fascinating fictional universes for each novel.", fa: "این نویسنده خلاق برای هر رمان جهان‌های داستانی شگفت‌انگیزی خلق می‌کند." },
          { en: "Do not make up facts during your scientific presentation.", fa: "در طول ارائه علمی‌ات از خودت آمار و اطلاعات درنیاور." }
        ]
      },
      {
        id: "come_up_with",
        word: "come up with",
        level: "B2",
        theme: "تلاش و ابتکار",
        meaning: "ارائه راه‌حل، رسیدن به یک ایده یا پاسخ هوشمندانه",
        en: "The research engineers came up with a brilliant fix for battery drainage.",
        fa: "مهندسان پژوهشگر به راه‌حل هوشمندانه‌ای برای تخلیه سریع باتری دست یافتند.",
        icon: "\ud83d\udca1",
        examples: [
          { en: "The research engineers came up with a brilliant fix for battery drainage.", fa: "مهندسان پژوهشگر به راه‌حل هوشمندانه‌ای برای تخلیه سریع باتری دست یافتند." },
          { en: "We need to come up with a catchy slogan for the marketing campaign.", fa: "ما باید یک شعار گیرا و جذاب برای کمپین تبلیغاتی پیدا و ارائه کنیم." },
          { en: "She always comes up with thoughtful gift ideas for everyone's birthday.", fa: "او همیشه برای سالروز تولد هر کسی ایده‌های کادویی پر از لطف و خلاقیت پیدا می‌کند." }
        ]
      },
      {
        id: "pay_off",
        word: "pay off",
        level: "B2",
        theme: "تلاش و ابتکار",
        meaning: "نتیجه دادن زحمات، به بار نشستن تلاش‌ها؛ تسویه کامل وام و بدهی",
        en: "All those late nights studying programming finally paid off.",
        fa: "تمام آن شب‌بیداری‌ها برای یادگیری برنامه‌نویسی سرانجام نتیجه داد و به بار نشست.",
        icon: "\ud83c\udfc6",
        examples: [
          { en: "All those late nights studying programming finally paid off.", fa: "تمام آن شب‌بیداری‌ها برای یادگیری برنامه‌نویسی سرانجام نتیجه داد و به بار نشست." },
          { en: "It took ten disciplined years to completely pay off their home mortgage.", fa: "ده سال زندگی منظم و باانضباط طول کشید تا وام مسکن‌شان کاملاً تسویه شود." },
          { en: "His bold strategic investment paid off beyond anyone's wildest expectations.", fa: "سرمایه‌گذاری استراتژیک و شجاعانه او فراتر از تصور همگان به ثمر نشست و سود داد." }
        ]
      },
      {
        id: "take_on",
        word: "take on",
        level: "B2",
        theme: "تلاش و ابتکار",
        meaning: "به عهده گرفتن مسئولیت دشوار یا چالش تازه؛ استخدام کردن کارمند",
        en: "She was eager to take on the leadership role for the flagship project.",
        fa: "او مشتاق بود مسئولیت رهبری پروژه کلیدی شرکت را بر عهده بگیرد.",
        icon: "\ud83d\udcbc",
        examples: [
          { en: "She was eager to take on the leadership role for the flagship project.", fa: "او مشتاق بود مسئولیت رهبری پروژه کلیدی شرکت را بر عهده بگیرد." },
          { en: "Do not take on more commitments than you can handle realistically.", fa: "بیشتر از آنچه واقع‌بینانه در توان داری، مسئولیت و تعهد قبول نکن." },
          { en: "The expanding manufacturing plant is planning to take on fifty workers.", fa: "کارخانه رو به گسترش قصد دارد پنجاه نیروی کار جدید را به کار بگیرد." }
        ]
      },
      {
        id: "dust_off",
        word: "dust off",
        level: "B2",
        theme: "تلاش و ابتکار",
        meaning: "گردگیری و به کار گرفتن مجدد وسیله یا مهارتی قدیمی و رهاشده",
        en: "He decided to dust off his old acoustic guitar and write new songs.",
        fa: "او تصمیم گرفت خاک گیتار آکوستیک قدیمی‌اش را بتکاند و دوباره ترانه‌های تازه بنویسد.",
        icon: "\ud83c\udfb8",
        examples: [
          { en: "He decided to dust off his old acoustic guitar and write new songs.", fa: "او تصمیم گرفت خاک گیتار آکوستیک قدیمی‌اش را بتکاند و دوباره ترانه‌های تازه بنویسد." },
          { en: "Spring is here, time to dust off the bicycles and head for the trail.", fa: "بهار آمده است، وقت آن است که دوچرخه‌ها را گردگیری کنیم و به دل جاده بزنیم." },
          { en: "The city council dusted off a decade-old subway expansion proposal.", fa: "شورای شهر طرح ده سال پیش توسعه مترو را بازگشایی و دوباره مطرح کرد." }
        ]
      },
      {
        id: "set_out",
        word: "set out",
        level: "B2",
        theme: "تلاش و ابتکار",
        meaning: "راه افتادن و عازم سفر شدن؛ مصمم بودن برای دستیابی به مقصدی مشخص",
        en: "The mountaineers set out at dawn to beat the impending snowstorm.",
        fa: "کوهنوردان در سپیده‌دم راه افتادند تا قبل از طوفان برف به مقصد برسند.",
        icon: "\ud83e\udded",
        examples: [
          { en: "The mountaineers set out at dawn to beat the impending snowstorm.", fa: "کوهنوردان در سپیده‌دم راه افتادند تا قبل از طوفان برف به مقصد برسند." },
          { en: "She set out to write a definitive biography of the forgotten scientist.", fa: "او کمر همت بست تا زندگی‌نامه‌ای مرجع درباره آن دانشمند گمنام بنگارد." },
          { en: "The contract clearly sets out the rights and duties of both parties.", fa: "این قرارداد حقوق و وظایف هر دو طرف را به روشنی تبیین و تشریح می‌کند." }
        ]
      },
      {
        id: "get_on_with",
        word: "get on with",
        level: "B2",
        theme: "تلاش و ابتکار",
        meaning: "از سر گرفتن کار پس از وقفه، پرداختن به وظایف؛ ساختن با دیگران",
        en: "Stop procrastinating and get on with your research thesis.",
        fa: "دست از پشت گوش انداختن بردار و به نوشتن پایان‌نامه تحقیقاتی‌ات برس.",
        icon: "\u270d\ufe0f",
        examples: [
          { en: "Stop procrastinating and get on with your research thesis.", fa: "دست از پشت گوش انداختن بردار و به نوشتن پایان‌نامه تحقیقاتی‌ات برس." },
          { en: "After the coffee break, everyone got on with their assigned duties.", fa: "پس از استراحت قهوه، همه به انجام وظایف محوله‌شان بازگشتند." },
          { en: "She gets on well with all her international coworkers.", fa: "او با تمام همکاران بین‌المللی‌اش به خوبی کنار می‌آید و رابطه سازنده‌ای دارد." }
        ]
      }
    ]
  },

  pv_b2_situations: {
    name: "موقعیت‌ها و چالش‌ها",
    title: "موقعیت‌ها و چالش‌ها",
    icon: "\u26a1",
    level: "B2",
    words: [
      {
        id: "dip_into",
        word: "dip into",
        level: "B2",
        theme: "شرایط و پیشامدها",
        meaning: "دست بردن در پس‌انداز یا ذخایر مالی برای پوشش هزینه‌ها",
        en: "We had to dip into our emergency savings to replace the car engine.",
        fa: "مجبور شدیم برای تعویض موتور ماشین، دست در پس‌انداز اضطراری‌مان ببریم.",
        icon: "\ud83d\udcb0",
        examples: [
          { en: "We had to dip into our emergency savings to replace the car engine.", fa: "مجبور شدیم برای تعویض موتور ماشین، دست در پس‌انداز اضطراری‌مان ببریم." },
          { en: "Try to budget wisely so you do not have to dip into your pension fund.", fa: "سعی کن هوشمندانه بودجه‌بندی کنی تا ناچار نشوی به صندوق بازنشستگی‌ات دست بزنی." },
          { en: "In the library, he dipped into several rare manuscripts for research.", fa: "در کتابخانه، او برای پژوهش به چند نسخه خطی نایاب نگاهی انداخت و از آن‌ها بهره برد." }
        ]
      },
      {
        id: "get_by",
        word: "get by",
        level: "B2",
        theme: "شرایط و پیشامدها",
        meaning: "ساختن با شرایط مالی، گذران زندگی با امکانات یا درآمد محدود",
        en: "During university years, I managed to get by on very little money.",
        fa: "در دوران دانشگاه، توانستم با پول بسیار اندکی روزگار بگذرانم و سر کنم.",
        icon: "\ud83e\ude99",
        examples: [
          { en: "During university years, I managed to get by on very little money.", fa: "در دوران دانشگاه، توانستم با پول بسیار اندکی روزگار بگذرانم و سر کنم." },
          { en: "My conversational Spanish is just enough to get by when travelling.", fa: "اسپانیایی محاوره‌ای من صرفاً در حدی است که کارم در سفر راه بیفتد و بگذرانم." },
          { en: "Rising food costs make it difficult for retired seniors to get by.", fa: "افزایش هزینه‌های خوراک، گذران زندگی را برای بازنشستگان سالمند دشوار کرده است." }
        ]
      },
      {
        id: "go_without",
        word: "go without",
        level: "B2",
        theme: "شرایط و پیشامدها",
        meaning: "بدون چیزی سر کردن، محرومیت کشیدن از نیازی اساسی یا رفاهی",
        en: "During the harsh winter storm, thousands of homes went without electricity.",
        fa: "در طول طوفان شدید زمستانی، هزاران خانه بدون برق سر کردند و بی‌برق ماندند.",
        icon: "\ud83d\udd6f\ufe0f",
        examples: [
          { en: "During the harsh winter storm, thousands of homes went without electricity.", fa: "در طول طوفان شدید زمستانی، هزاران خانه بدون برق سر کردند و بی‌برق ماندند." },
          { en: "Devoted parents often go without luxuries to provide for their children's education.", fa: "والدین فداکار اغلب از تجملات چشم‌پوشی می‌کنند تا هزینه تحصیل فرزندانشان را تأمین کنند." },
          { en: "A camel can go without water for over a week in the desert.", fa: "شتر می‌تواند در بیابان بیش از یک هفته بدون آب سر کند." }
        ]
      },
      {
        id: "turn_down_reject",
        word: "turn down",
        level: "B2",
        theme: "شرایط و پیشامدها",
        meaning: "رد کردن پیشنهاد کاری، دعوت یا درخواست؛ دست رد به سینه زدن",
        en: "He reluctantly turned down the overseas job offer to stay near family.",
        fa: "او با اکراه پیشنهاد کار در خارج از کشور را رد کرد تا در کنار خانواده‌اش بماند.",
        icon: "\ud83d\ude45\u200d\u2642\ufe0f",
        examples: [
          { en: "He reluctantly turned down the overseas job offer to stay near family.", fa: "او با اکراه پیشنهاد کار در خارج از کشور را رد کرد تا در کنار خانواده‌اش بماند." },
          { en: "How could you turn down an invitation to the presidential banquet?", fa: "چطور توانستی دعوت به ضیافت ریاست جمهوری را رد کنی؟" },
          { en: "The bank turned down their mortgage request because of poor credit.", fa: "بانک به علت امتیاز اعتباری پایین، درخواست وام مسکن آن‌ها را نپذیرفت و رد کرد." }
        ]
      },
      {
        id: "turn_up_arrive",
        word: "turn up",
        level: "B2",
        theme: "شرایط و پیشامدها",
        meaning: "سر و کله‌اش پیدا شدن، سر رسیدن یا ظاهر شدن غیرمنتظره",
        en: "Guests started to turn up unannounced just as we sat down to eat.",
        fa: "درست همان موقع که برای غذا خوردن نشستیم، مهمانان سرزده سر و کله‌شان پیدا شد.",
        icon: "\ud83d\udeaa",
        examples: [
          { en: "Guests started to turn up unannounced just as we sat down to eat.", fa: "درست همان موقع که برای غذا خوردن نشستیم، مهمانان سرزده سر و کله‌شان پیدا شد." },
          { en: "Do not panic about the missing passport; it will surely turn up somewhere.", fa: "در مورد گذرنامه گمشده هول نشو؛ مطمئناً بالاخره یک گوشه‌ای پیدا خواهد شد." },
          { en: "Only six people turned up for the morning community meeting.", fa: "تنها شش نفر در جلسه صبحگاهی انجمن محلی حضور پیدا کردند و حاضر شدند." }
        ]
      },
      {
        id: "cut_off_intercept",
        word: "cut off",
        level: "B2",
        theme: "شرایط و پیشامدها",
        meaning: "پیچیدن جلوی خودروی دیگر، سد راه شدن در رانندگی یا قطع مسیر",
        en: "A reckless driver cut me off at the busy highway intersection.",
        fa: "یک راننده بی‌احتیاط در تقاطع شلوغ بزرگراه ناگهان جلوی من پیچید و راهم را سد کرد.",
        icon: "\ud83d\ude97",
        examples: [
          { en: "A reckless driver cut me off at the busy highway intersection.", fa: "یک راننده بی‌احتیاط در تقاطع شلوغ بزرگراه ناگهان جلوی من پیچید و راهم را سد کرد." },
          { en: "The sudden landslide cut off all road access to the remote mountain village.", fa: "ریزش ناگهانی کوه تمامی راه‌های دسترسی به روستای دورافتاده کوهستانی را قطع کرد." },
          { en: "He stepped quickly to the left to cut off the runaway dog's escape route.", fa: "او به سرعت به سمت چپ گام برداشت تا مسیر فرار سگ گریزان را سد کند." }
        ]
      },
      {
        id: "go_up_increase",
        word: "go up",
        level: "B2",
        theme: "شرایط و پیشامدها",
        meaning: "بالا رفتن نرخ‌ها و هزینه‌ها، صعود آمار و ارقام اقتصادی",
        en: "Fuel prices are predicted to go up by ten percent next quarter.",
        fa: "پیش‌بینی می‌شود قیمت سوخت در فصل آینده ده درصد افزایش یابد و بالا برود.",
        icon: "\ud83d\udcc8",
        examples: [
          { en: "Fuel prices are predicted to go up by ten percent next quarter.", fa: "پیش‌بینی می‌شود قیمت سوخت در فصل آینده ده درصد افزایش یابد و بالا برود." },
          { en: "Global temperatures continue to go up due to greenhouse gas emissions.", fa: "دمای کره زمین به دلیل انتشار گازهای گلخانه‌ای همچنان رو به افزایش است." },
          { en: "University tuition has gone up significantly over the past five years.", fa: "شهریه دانشگاه طی پنج سال گذشته به شکل چشمگیری افزایش پیدا کرده است." }
        ]
      },
      {
        id: "faff_about",
        word: "faff about",
        level: "B2",
        theme: "شرایط و پیشامدها",
        meaning: "وقت تلف کردن، معطل کردن و این‌پا و آن‌پا کردن در کارها",
        en: "Stop faffing about and pack your suitcase; the taxi is arriving soon.",
        fa: "این‌قدر معطل نکن و وقت تلف نکن و چمدانت را ببند؛ تاکسی به زودی می‌رسد.",
        icon: "\u23f0",
        examples: [
          { en: "Stop faffing about and pack your suitcase; the taxi is arriving soon.", fa: "این‌قدر معطل نکن و وقت تلف نکن و چمدانت را ببند؛ تاکسی به زودی می‌رسد." },
          { en: "We wasted the whole morning faffing about instead of finishing the chores.", fa: "تمام صبح را به جای تمام کردن کارها، با اتلاف وقت و این‌پا و آن‌پا کردن تلف کردیم." },
          { en: "Do not faff about when you have strict deadlines to meet.", fa: "وقتی مهلت‌های زمانی سخت‌گیرانه داری، دست‌دست نکن و وقت تلف مکن." }
        ]
      },
      {
        id: "rub_off_on",
        word: "rub off on",
        level: "B2",
        theme: "شرایط و پیشامدها",
        meaning: "سرایت کردن ویژگی، رفتار یا روحیه یک فرد به اطرافیانش",
        en: "Her optimistic mindset gradually rubbed off on the whole team.",
        fa: "طرز فکر خوش‌بینانه او به تدریج به کل اعضای تیم سرایت کرد و اثر گذاشت.",
        icon: "\u2728",
        examples: [
          { en: "Her optimistic mindset gradually rubbed off on the whole team.", fa: "طرز فکر خوش‌بینانه او به تدریج به کل اعضای تیم سرایت کرد و اثر گذاشت." },
          { en: "I hope his calm composure during crisis rubs off on me.", fa: "امیدوارم خونسردی و تسلط او در مواقع بحران به من هم منتقل شود." },
          { en: "Living with artists rubbed off on him, and he started painting watercolors.", fa: "زندگی با هنرمندان روی او اثر گذاشت و خودش هم شروع به کشیدن آبرنگ کرد." }
        ]
      },
      {
        id: "get_up_to",
        word: "get up to",
        level: "B2",
        theme: "شرایط و پیشامدها",
        meaning: "دست زدن به کارهای غیرمنتظره، شیطنت کردن در خلوت",
        en: "What did you get up to over the long holiday weekend?",
        fa: "در تعطیلات آخر هفته طولانی مشغول چه کارهایی بودی و چه کردی؟",
        icon: "\ud83d\udc40",
        examples: [
          { en: "What did you get up to over the long holiday weekend?", fa: "در تعطیلات آخر هفته طولانی مشغول چه کارهایی بودی و چه کردی؟" },
          { en: "The children are very quiet; I wonder what mischief they are getting up to.", fa: "بچه‌ها خیلی ساکت‌اند؛ مانده‌ام دارند به چه شیطنتی دست می‌زنند." },
          { en: "He gets up to all sorts of creative woodworking projects in his backyard shed.", fa: "او در آلونک حیاط خلوتش به انواع پروژه‌های خلاقانه نجاری دست می‌زند." }
        ]
      },
      {
        id: "tag_along",
        word: "tag along",
        level: "B2",
        theme: "شرایط و پیشامدها",
        meaning: "همراه شدن با دیگران بدون دعوت اختصاصی، راه افتادن دنبال کسی",
        en: "Is it okay if my younger brother tags along with us to the cinema?",
        fa: "اشکالی ندارد اگر برادر کوچکم هم همراه ما به سینما بیاید و با ما راه بیفتد؟",
        icon: "\ud83d\udc65",
        examples: [
          { en: "Is it okay if my younger brother tags along with us to the cinema?", fa: "اشکالی ندارد اگر برادر کوچکم هم همراه ما به سینما بیاید و با ما راه بیفتد؟" },
          { en: "We were going for coffee and she asked to tag along.", fa: "ما داشتیم برای نوشیدن قهوه می‌رفتیم و او پرسید که آیا می‌تواند با ما بیاید." },
          { en: "The stray dog tagged along behind the hikers all the way to camp.", fa: "سگ بی‌صاحب تمام طول مسیر تا کمپ را پشت سر کوهنوردان به راه افتاد." }
        ]
      },
      {
        id: "shoot_off",
        word: "shoot off",
        level: "B2",
        theme: "شرایط و پیشامدها",
        meaning: "با عجله و برق‌آسا خارج شدن یا رفتن، مثل تیر در رفتن",
        en: "I must shoot off right now or I will definitely miss my connection.",
        fa: "همین الان باید با عجله بروم وگرنه حتماً از قطار اتصالی‌ام جا می‌مانم.",
        icon: "\ud83d\ude80",
        examples: [
          { en: "I must shoot off right now or I will definitely miss my connection.", fa: "همین الان باید با عجله بروم وگرنه حتماً از قطار اتصالی‌ام جا می‌مانم." },
          { en: "As soon as the school bell rang, the kids shot off into the playground.", fa: "به محض به صدا درآمدن زنگ مدرسه، بچه‌ها برق‌آسا به سمت حیاط هجوم بردند." },
          { en: "He shot off an urgent email before powering down his laptop.", fa: "او قبل از خاموش کردن لپ‌تاپش، یک ایمیل فوری ارسال کرد." }
        ]
      },
      {
        id: "knock_over",
        word: "knock over",
        level: "B2",
        theme: "شرایط و پیشامدها",
        meaning: "واژگون کردن، انداختن تصادفی ظرف یا شیء روی زمین",
        en: "Be careful with your elbow; you almost knocked over that delicate vase.",
        fa: "مواظب آرنجت باش؛ چیزی نمانده بود آن گلدان ظریف را واژگون کنی و بیندازی.",
        icon: "\ud83d\udca5",
        examples: [
          { en: "Be careful with your elbow; you almost knocked over that delicate vase.", fa: "مواظب آرنجت باش؛ چیزی نمانده بود آن گلدان ظریف را واژگون کنی و بیندازی." },
          { en: "The excited puppy ran inside and knocked over a tower of wooden blocks.", fa: "توله‌سگ هیجان‌زده به درون دوید و برجی از مکعب‌های چوبی را واژگون کرد." },
          { en: "Strong gales knocked over trash cans all along the residential street.", fa: "بادهای شدید سطل‌های زباله را در سرتاسر خیابان مسکونی سرنگون کردند." }
        ]
      }
    ]
  },

  kitchen: {
    name: "آشپزخانه",
    title: "آشپزخانه",
    icon: "🍳",
    level: "A1",
    words: [
      {
        id: "dishwasher",
        word: "dishwasher",
        meaning: "ماشین ظرفشویی",
        en: "Put the dirty plates in the dishwasher.",
        fa: "بشقاب‌های کثیف را داخل ماشین ظرفشویی بگذار.",
        icon: "🍽️",
        examples: [
          { en: "Put the dirty plates in the dishwasher.", fa: "بشقاب‌های کثیف را داخل ماشین ظرفشویی بگذار." },
          { en: "The dishwasher is running right now.", fa: "ماشین ظرفشویی در حال حاضر روشن و در حال شستشو است." },
          { en: "We unload the clean dishes from the dishwasher.", fa: "ما ظرف‌های تمیز را از ماشین ظرفشویی خالی می‌کنیم." }
        ]
      },
      {
        id: "cutting_board",
        word: "cutting board",
        meaning: "تخته برش، تخته گوشت",
        en: "Chop the onions on the wooden cutting board.",
        fa: "پیازها را روی تخته برش چوبی خرد کن.",
        icon: "🔪",
        examples: [
          { en: "Chop the onions on the wooden cutting board.", fa: "پیازها را روی تخته برش چوبی خرد کن." },
          { en: "Always wash the cutting board after cutting meat.", fa: "همیشه بعد از خرد کردن گوشت تخته برش را بشوی." },
          { en: "She has a separate cutting board for vegetables.", fa: "او یک تخته برش جداگانه برای سبزیجات دارد." }
        ]
      },
      {
        id: "water_kettle",
        word: "water kettle",
        meaning: "کتری آب، کتری برقی",
        en: "The water kettle is boiling on the kitchen counter.",
        fa: "کتری آب روی پیشخوان آشپزخانه در حال جوشیدن است.",
        icon: "🫖",
        examples: [
          { en: "The water kettle is boiling on the kitchen counter.", fa: "کتری آب روی پیشخوان آشپزخانه در حال جوشیدن است." },
          { en: "Fill the water kettle with fresh cold water.", fa: "کتری آب را با آب تازه و سرد پر کن." },
          { en: "Our electric water kettle shuts off automatically.", fa: "کتری برقی ما به طور خودکار خاموش می‌شود." }
        ]
      },
      {
        id: "paper_towel",
        word: "paper towel",
        meaning: "دستمال حوله‌ای کاغذی",
        en: "Use a paper towel to wipe up the spilled sauce.",
        fa: "از یک دستمال کاغذی حوله‌ای برای پاک کردن سس ریخته‌شده استفاده کن.",
        icon: "🧻",
        examples: [
          { en: "Use a paper towel to wipe up the spilled sauce.", fa: "از یک دستمال کاغذی حوله‌ای برای پاک کردن سس ریخته‌شده استفاده کن." },
          { en: "We need to buy another roll of paper towels.", fa: "ما باید یک رول دیگر دستمال حوله‌ای بخریم." },
          { en: "Dry the washed apples with a clean paper towel.", fa: "سیب‌های شسته‌شده را با یک دستمال کاغذی تمیز خشک کن." }
        ]
      },
      {
        id: "mug",
        word: "mug",
        meaning: "ماگ، لیوان دسته‌دار بزرگ",
        en: "She poured steaming hot coffee into her favorite ceramic mug.",
        fa: "او قهوه داغ و بخارآلود را در ماگ سرامیکی محبوبش ریخت.",
        icon: "☕",
        examples: [
          { en: "She poured steaming hot coffee into her favorite ceramic mug.", fa: "او قهوه داغ و بخارآلود را در ماگ سرامیکی محبوبش ریخت." },
          { en: "I hold the warm mug with both hands in the morning.", fa: "من صبح‌ها ماگ گرم را با هر دو دست می‌گیرم." },
          { en: "He has a colorful mug with funny birds on it.", fa: "او یک ماگ رنگارنگ با طرح پرنده‌های بامزه دارد." }
        ]
      },
      {
        id: "lid",
        word: "lid",
        meaning: "درپوش قابلمه، درب ظرف",
        en: "Put the glass lid on the pot to cook the squash faster.",
        fa: "درپوش شیشه‌ای را روی قابلمه بگذار تا کدو سریع‌تر بپزد.",
        icon: "🍲",
        examples: [
          { en: "Put the glass lid on the pot to cook the squash faster.", fa: "درپوش شیشه‌ای را روی قابلمه بگذار تا کدو سریع‌تر بپزد." },
          { en: "Lift the lid carefully to check if the water is boiling.", fa: "درپوش را با احتیاط بردار تا ببینی آب جوش آمده یا نه." },
          { en: "The stainless steel pot has a tight-fitting lid.", fa: "قابلمه استیل دارای یک درب محکم و کیپ است." }
        ]
      },
      {
        id: "wine_glass",
        word: "wine glass",
        meaning: "گیلاس شیشه‌ای پایه‌دار",
        en: "Hold the delicate wine glass by its long stem.",
        fa: "گیلاس ظریف شیشه‌ای را از ساقه بلند آن در دست بگیر.",
        icon: "🍷",
        examples: [
          { en: "Hold the delicate wine glass by its long stem.", fa: "گیلاس ظریف شیشه‌ای را از ساقه بلند آن در دست بگیر." },
          { en: "Wash each wine glass by hand to avoid cracks.", fa: "هر گیلاس را با دست بشوی تا ترک برندارد." },
          { en: "She placed a clean wine glass next to every dinner plate.", fa: "او کنار هر بشقاب شام یک گیلاس تمیز گذاشت." }
        ]
      }
    ]
  },
  bathroom: {
    name: "حمام و سرویس",
    title: "حمام و سرویس",
    icon: "🛁",
    level: "A1",
    words: [
      {
        id: "bathtub",
        word: "bathtub",
        meaning: "وان حمام",
        en: "Fill the bathtub with warm water for the baby.",
        fa: "وان حمام را با آب گرم برای کودک پر کن.",
        icon: "🛁",
        examples: [
          { en: "Fill the bathtub with warm water for the baby.", fa: "وان حمام را با آب گرم برای کودک پر کن." },
          { en: "He relaxed in the bathtub after a long workout.", fa: "او بعد از یک تمرین طولانی در وان حمام استراحت کرد." },
          { en: "Clean the white bathtub with a soft sponge.", fa: "وان سفید حمام را با یک اسفنج نرم تمیز کن." }
        ]
      },
      {
        id: "toilet",
        word: "toilet",
        meaning: "توالت فرنگی، کاسه توالت",
        en: "Flush the toilet when you are finished.",
        fa: "وقتی کارت تمام شد، سیفون توالت را بکش.",
        icon: "🚽",
        examples: [
          { en: "Flush the toilet when you are finished.", fa: "وقتی کارت تمام شد، سیفون توالت را بکش." },
          { en: "Clean the porcelain toilet every Saturday morning.", fa: "توالت چینی را هر شنبه صبح تمیز کن." },
          { en: "He fixed the handle on the bathroom toilet.", fa: "او دسته توالت حمام را تعمیر کرد." }
        ]
      },
      {
        id: "toilet_paper",
        word: "toilet paper",
        meaning: "دستمال توالت",
        en: "There is an extra roll of toilet paper under the sink.",
        fa: "یک رول اضافه دستمال توالت زیر سینک وجود دارد.",
        icon: "🧻",
        examples: [
          { en: "There is an extra roll of toilet paper under the sink.", fa: "یک رول اضافه دستمال توالت زیر سینک وجود دارد." },
          { en: "Hang the new roll of toilet paper on the holder.", fa: "رول جدید دستمال توالت را روی پایه آویزان کن." },
          { en: "We ran out of soft toilet paper this morning.", fa: "امروز صبح دستمال توالت نرم ما تمام شد." }
        ]
      },
      {
        id: "soap_dispenser",
        word: "soap dispenser",
        meaning: "پمپ مایع دستشویی، جا صابونی مایع",
        en: "Press the pump on the soap dispenser to get liquid soap.",
        fa: "پمپ جا صابونی را فشار بده تا مایع دستشویی بگیری.",
        icon: "🧴",
        examples: [
          { en: "Press the pump on the soap dispenser to get liquid soap.", fa: "پمپ جا صابونی را فشار بده تا مایع دستشویی بگیری." },
          { en: "Refill the glass soap dispenser when it is nearly empty.", fa: "وقتی پمپ مایع دستشویی شیشه‌ای تقریباً خالی شد، دوباره پرش کن." },
          { en: "The automatic soap dispenser dispenses foam without touching.", fa: "جا صابونی خودکار بدون نیاز به لمس فوم خارج می‌کند." }
        ]
      },
      {
        id: "toothbrush",
        word: "toothbrush",
        meaning: "مسواک",
        en: "Dentists recommend changing your toothbrush every three months.",
        fa: "دندانپزشکان توصیه می‌کنند مسواک خود را هر سه ماه یک بار عوض کنید.",
        icon: "🪥",
        examples: [
          { en: "Dentists recommend changing your toothbrush every three months.", fa: "دندانپزشکان توصیه می‌کنند مسواک خود را هر سه ماه یک بار عوض کنید." },
          { en: "Put a pea-sized drop of paste onto your toothbrush.", fa: "یک قطره به اندازه نخود خمیردندان روی مسواکت بگذار." },
          { en: "Store your toothbrush upright in a clean holder.", fa: "مسواکت را به صورت عمودی در یک جامسواکی تمیز نگه دار." }
        ]
      },
      {
        id: "toothpaste",
        word: "toothpaste",
        meaning: "خمیردندان",
        en: "Squeeze the mint toothpaste tube gently from the bottom.",
        fa: "تیوب خمیردندان نعنایی را به آرامی از ته فشار بده.",
        icon: "🧴",
        examples: [
          { en: "Squeeze the mint toothpaste tube gently from the bottom.", fa: "تیوب خمیردندان نعنایی را به آرامی از ته فشار بده." },
          { en: "This fluoride toothpaste protects against cavities.", fa: "این خمیردندان حاوی فلوراید از پوسیدگی دندان محافظت می‌کند." },
          { en: "Do not forget to put the cap back on the toothpaste.", fa: "فراموش نکن که درب خمیردندان را ببندی." }
        ]
      },
      {
        id: "hairdryer",
        word: "hairdryer",
        meaning: "سشوار",
        en: "Blow-dry your wet hair with the hairdryer on low heat.",
        fa: "موهای خیس خود را با سشوار روی حرارت ملایم خشک کن.",
        icon: "💨",
        examples: [
          { en: "Blow-dry your wet hair with the hairdryer on low heat.", fa: "موهای خیس خود را با سشوار روی حرارت ملایم خشک کن." },
          { en: "Unplug the hairdryer after you finish styling your hair.", fa: "بعد از حالت دادن به موهایت، سشوار را از برق بکش." },
          { en: "Her compact travel hairdryer lasted for fifteen years.", fa: "سشوار مسافرتی و جمع‌وجور او پانزده سال عمر کرد." }
        ]
      },
      {
        id: "bath_towel",
        word: "bath towel",
        meaning: "حوله بزرگ حمام",
        en: "Wrap yourself in a large, fluffy bath towel after your shower.",
        fa: "بعد از دوش گرفتن، خودت را در یک حوله حمام بزرگ و نرم بپیچ.",
        icon: "🛁",
        examples: [
          { en: "Wrap yourself in a large, fluffy bath towel after your shower.", fa: "بعد از دوش گرفتن، خودت را در یک حوله حمام بزرگ و نرم بپیچ." },
          { en: "Hang the damp bath towel on the hook to air dry.", fa: "حوله حمام نم‌دار را روی قلاب آویزان کن تا هوا بخورد و خشک شود." },
          { en: "We keep fresh cotton bath towels in the linen closet.", fa: "ما حوله‌های پنبه‌ای و تمیز حمام را در کمد ملافه‌ها نگه می‌داریم." }
        ]
      },
      {
        id: "hand_towel",
        word: "hand towel",
        meaning: "حوله دست و صورت کوچک",
        en: "Dry your hands on the clean hand towel beside the sink.",
        fa: "دست‌هایت را با حوله دست تمیز کنار سینک خشک کن.",
        icon: "🧼",
        examples: [
          { en: "Dry your hands on the clean hand towel beside the sink.", fa: "دست‌هایت را با حوله دست تمیز کنار سینک خشک کن." },
          { en: "Change the bathroom hand towel every two or three days.", fa: "حوله دست حمام را هر دو یا سه روز یک بار عوض کن." },
          { en: "The embroidered hand towel hangs neatly on the towel ring.", fa: "حوله دست گلدوزی‌شده مرتب روی حلقه حوله آویزان است." }
        ]
      }
    ]
  },
  a2Kitchen: {
    name: "آشپزخانه (A2)",
    title: "آشپزخانه",
    icon: "🍳",
    level: "A2",
    words: [
      {
        id: "colander",
        word: "colander",
        meaning: "آبکش کاسه‌ای (مخصوص ماکارونی و سبزی)",
        en: "Drain the boiled pasta using a colander.",
        fa: "ماکارونی آب‌پز را با استفاده از یک آبکش آبکشی کن.",
        icon: "🥣",
        examples: [
          { en: "Drain the boiled pasta using a colander.", fa: "ماکارونی آب‌پز را با استفاده از یک آبکش آبکشی کن." },
          { en: "She placed the washed berries in a colander.", fa: "او توت‌های شسته‌شده را داخل آبکش گذاشت." },
          { en: "Shake the colander gently to remove excess water.", fa: "آبکش را به آرامی تکان بده تا آب اضافی خارج شود." }
        ]
      },
      {
        id: "strainer",
        word: "strainer",
        meaning: "صافی، الک",
        en: "Pour the hot tea through a small strainer.",
        fa: "چای داغ را از یک صافی کوچک رد کن.",
        icon: "🫖",
        examples: [
          { en: "Pour the hot tea through a small strainer.", fa: "چای داغ را از یک صافی کوچک رد کن." },
          { en: "Use a mesh strainer to sift the flour.", fa: "از یک صافی توری برای الک کردن آرد استفاده کن." },
          { en: "The strainer catches all the fruit seeds.", fa: "صافی تمام دانه‌های میوه را می‌گیرد." }
        ]
      },
      {
        id: "dish_rack",
        word: "dish rack",
        meaning: "سبد آبچکان، قفسه ظروف",
        en: "Place the washed cups upside down in the dish rack.",
        fa: "فنجان‌های شسته‌شده را به صورت برعکس در قفسه آبچکان بگذار.",
        icon: "🍶",
        examples: [
          { en: "Place the washed cups upside down in the dish rack.", fa: "فنجان‌های شسته‌شده را به صورت برعکس در قفسه آبچکان بگذار." },
          { en: "The dish rack next to the sink is full.", fa: "سبد آبچکان کنار سینک پر است." },
          { en: "Let the glasses dry naturally in the dish rack.", fa: "بگذار لیوان‌ها به طور طبیعی در قفسه ظروف خشک شوند." }
        ]
      },
      {
        id: "drying_rack",
        word: "drying rack",
        meaning: "آبچکان، رخت‌آویز یا جای خشک کردن",
        en: "Leave the fragile wine glasses on the drying rack.",
        fa: "گیلاس‌های شکننده را روی آبچکان بگذار تا خشک شوند.",
        icon: "🥂",
        examples: [
          { en: "Leave the fragile wine glasses on the drying rack.", fa: "گیلاس‌های شکننده را روی آبچکان بگذار تا خشک شوند." },
          { en: "I wipe the water under the drying rack every morning.", fa: "من هر صبح آب زیر آبچکان را پاک می‌کنم." },
          { en: "Put the clean spoons on the small drying rack.", fa: "قاشق‌های تمیز را روی آبچکان کوچک بگذار." }
        ]
      },
      {
        id: "cheese_grater",
        word: "cheese grater",
        meaning: "رنده پنیر، رنده آشپزخانه",
        en: "Use the cheese grater to shred cheddar over the pizza.",
        fa: "از رنده برای رنده کردن پنیر چدار روی پیتزا استفاده کن.",
        icon: "🧀",
        examples: [
          { en: "Use the cheese grater to shred cheddar over the pizza.", fa: "از رنده برای رنده کردن پنیر چدار روی پیتزا استفاده کن." },
          { en: "Watch your fingers while using the cheese grater.", fa: "موقع استفاده از رنده مواظب انگشتانت باش." },
          { en: "A stainless steel cheese grater is easy to clean.", fa: "رنده پنیر استیل به راحتی تمیز می‌شود." }
        ]
      },
      {
        id: "measuring_cup",
        word: "measuring cup",
        meaning: "پیمانه اندازه‌گیری",
        en: "Fill the measuring cup with two cups of milk.",
        fa: "پیمانه اندازه‌گیری را با دو فنجان شیر پر کن.",
        icon: "🥛",
        examples: [
          { en: "Fill the measuring cup with two cups of milk.", fa: "پیمانه اندازه‌گیری را با دو فنجان شیر پر کن." },
          { en: "Baking requires a precise measuring cup.", fa: "شیرینی‌پزی به پیمانه اندازه‌گیری دقیق نیاز دارد." },
          { en: "She checked the lines on the glass measuring cup.", fa: "او خطوط روی پیمانه شیشه‌ای را بررسی کرد." }
        ]
      },
      {
        id: "toaster_oven",
        word: "toaster oven",
        meaning: "آون توستر، فر رومیزی کوچک",
        en: "We warm up the bread slices in the toaster oven.",
        fa: "ما تکه‌های نان را در آون توستر گرم می‌کنیم.",
        icon: "🍞",
        examples: [
          { en: "We warm up the bread slices in the toaster oven.", fa: "ما تکه‌های نان را در آون توستر گرم می‌کنیم." },
          { en: "A toaster oven uses less energy than a full oven.", fa: "یک آون توستر کمتر از یک فر کامل انرژی مصرف می‌کند." },
          { en: "Bake two mini pizzas in the toaster oven.", fa: "دو تا مینی‌پیتزا را در آون توستر بپز." }
        ]
      },
      {
        id: "pantry",
        word: "pantry",
        meaning: "انبار مواد غذایی، قفسه نگهداری خواربار",
        en: "We store dry goods like rice and pasta in the pantry.",
        fa: "ما مواد غذایی خشک مثل برنج و ماکارونی را در انبار خواربار نگه می‌داریم.",
        icon: "🥫",
        examples: [
          { en: "We store dry goods like rice and pasta in the pantry.", fa: "ما مواد غذایی خشک مثل برنج و ماکارونی را در انبار خواربار نگه می‌داریم." },
          { en: "Check the pantry to see if we have extra sugar.", fa: "قفسه خواربار را نگاه کن ببین شکر اضافه داریم یا نه." },
          { en: "The pantry shelves are organized neatly.", fa: "طبقات انبار مواد غذایی بسیار مرتب چیده شده‌اند." }
        ]
      },
      {
        id: "spice_rack",
        word: "spice rack",
        meaning: "جای ادویه، قفسه ادویه‌جات",
        en: "The spice rack contains cinnamon, pepper, and oregano.",
        fa: "قفسه ادویه شامل دارچین، فلفل و آویشن است.",
        icon: "🧂",
        examples: [
          { en: "The spice rack contains cinnamon, pepper, and oregano.", fa: "قفسه ادویه شامل دارچین، فلفل و آویشن است." },
          { en: "Keep the spice rack close to the stove for easy cooking.", fa: "قفسه ادویه را نزدیک اجاق گاز نگه دار تا آشپزی آسان‌تر شود." },
          { en: "She spins the revolving spice rack to find paprika.", fa: "او استند چرخان ادویه را می‌چرخاند تا فلفل قرمز را پیدا کند." }
        ]
      },
      {
        id: "oven_mitt",
        word: "oven mitt",
        meaning: "دستکش فر",
        en: "Wear an oven mitt before pulling the hot tray out.",
        fa: "قبل از بیرون کشیدن سینی داغ، دستکش فر بپوش.",
        icon: "🧤",
        examples: [
          { en: "Wear an oven mitt before pulling the hot tray out.", fa: "قبل از بیرون کشیدن سینی داغ، دستکش فر بپوش." },
          { en: "This silicone oven mitt protects your hands from burns.", fa: "این دستکش سیلیکونی فر دستانت را در برابر سوختگی محافظت می‌کند." },
          { en: "Hang the oven mitt on the hook beside the stove.", fa: "دستکش فر را روی قلاب کنار اجاق گاز آویزان کن." }
        ]
      },
      {
        id: "condiment",
        word: "condiment",
        meaning: "چاشنی، سس و طعم‌دهنده غذا",
        en: "Ketchup and mustard are popular condiments for burgers.",
        fa: "سس کچاپ و خردل از چاشنی‌های پرطرفدار همبرگر هستند.",
        icon: "🥫",
        examples: [
          { en: "Ketchup and mustard are popular condiments for burgers.", fa: "سس کچاپ و خردل از چاشنی‌های پرطرفدار همبرگر هستند." },
          { en: "Keep the condiments handy on the kitchen counter.", fa: "چاشنی‌ها را در دسترس روی پیشخوان آشپزخانه بگذار." },
          { en: "Mayonnaise is a common condiment for sandwiches.", fa: "مایونز یک چاشنی رایج برای ساندویچ‌ها است." }
        ]
      },
      {
        id: "balsamic_vinegar",
        word: "balsamic vinegar",
        meaning: "سرکه بالزامیک",
        en: "Drizzle olive oil and balsamic vinegar over the salad.",
        fa: "روغن زیتون و سرکه بالزامیک را روی سالاد بریز.",
        icon: "🍾",
        examples: [
          { en: "Drizzle olive oil and balsamic vinegar over the salad.", fa: "روغن زیتون و سرکه بالزامیک را روی سالاد بریز." },
          { en: "Balsamic vinegar adds a rich sweet and sour flavor.", fa: "سرکه بالزامیک طعم ملس و غنی به غذا می‌دهد." },
          { en: "The dark balsamic vinegar bottle sits next to the spices.", fa: "شیشه سرکه بالزامیک تیره کنار ادویه‌ها قرار دارد." }
        ]
      },
      {
        id: "chopsticks",
        word: "chopsticks",
        meaning: "چاپ‌استیک، چوب غذاخوری شرقی",
        en: "Can you eat noodles comfortably with chopsticks?",
        fa: "آیا می‌توانی نودل را راحت با چوب غذاخوری بخوری؟",
        icon: "🥢",
        examples: [
          { en: "Can you eat noodles comfortably with chopsticks?", fa: "آیا می‌توانی نودل را راحت با چوب غذاخوری بخوری؟" },
          { en: "Wooden chopsticks are stored in the utensil drawer.", fa: "چاپ‌استیک‌های چوبی در کشوی وسایل نگهداری می‌شوند." },
          { en: "He learned how to hold chopsticks correctly.", fa: "او یاد گرفت که چگونه چوب‌های غذاخوری را درست در دست بگیرد." }
        ]
      },
      {
        id: "fruit_tray",
        word: "fruit tray",
        meaning: "سینی یا ظرف میوه",
        en: "There are fresh tangerines and apples on the fruit tray.",
        fa: "نارنگی و سیب‌های تازه روی سینی میوه چیده شده‌اند.",
        icon: "🍊",
        examples: [
          { en: "There are fresh tangerines and apples on the fruit tray.", fa: "نارنگی و سیب‌های تازه روی سینی میوه چیده شده‌اند." },
          { en: "She arranged colorful sliced melons on the fruit tray.", fa: "او برش‌های خربزه رنگارنگ را روی سینی میوه چید." },
          { en: "Place the fruit tray in the center of the dining table.", fa: "سینی میوه را در وسط میز ناهارخوری قرار بده." }
        ]
      },
      {
        id: "coaster",
        word: "coaster",
        meaning: "زیرلیوانی",
        en: "Put your cold drink on a coaster to protect the wooden table.",
        fa: "نوشیدنی خنکت را روی زیرلیوانی بگذار تا از میز چوبی محافظت شود.",
        icon: "🥛",
        examples: [
          { en: "Put your cold drink on a coaster to protect the wooden table.", fa: "نوشیدنی خنکت را روی زیرلیوانی بگذار تا از میز چوبی محافظت شود." },
          { en: "Always use a coaster under hot mugs.", fa: "همیشه زیر ماگ‌های داغ از زیرلیوانی استفاده کن." },
          { en: "We have cork coasters in the living room and kitchen.", fa: "ما زیرلیوانی‌های چوب‌پنبه‌ای در پذیرایی و آشپزخانه داریم." }
        ]
      },
      {
        id: "coffee_grinder",
        word: "coffee grinder",
        meaning: "آسیاب قهوه",
        en: "Grind fresh roasted beans with the electric coffee grinder.",
        fa: "دانه‌های تازه برشته‌شده را با آسیاب برقی قهوه پودر کن.",
        icon: "☕",
        examples: [
          { en: "Grind fresh roasted beans with the electric coffee grinder.", fa: "دانه‌های تازه برشته‌شده را با آسیاب برقی قهوه پودر کن." },
          { en: "The smell of beans from the coffee grinder filled the kitchen.", fa: "عطر دانه‌ها از آسیاب قهوه فضای آشپزخانه را پر کرد." },
          { en: "Clean the coffee grinder blades after every few uses.", fa: "تیغه‌های آسیاب قهوه را هر چند وقت یک بار تمیز کن." }
        ]
      },
      {
        id: "sippy_cup",
        word: "sippy cup",
        meaning: "لیوان آموزشی نی‌دار یا درپوش‌دار کودک",
        en: "The toddler drinks water independently from his sippy cup.",
        fa: "کودک نوپا به تنهایی از لیوان آموزشی‌اش آب می‌نوشد.",
        icon: "🍼",
        examples: [
          { en: "The toddler drinks water independently from his sippy cup.", fa: "کودک نوپا به تنهایی از لیوان آموزشی‌اش آب می‌نوشد." },
          { en: "A spill-proof sippy cup prevents messy spills on the rug.", fa: "یک لیوان آموزشی ضدچکه از کثیف شدن فرش جلوگیری می‌کند." },
          { en: "Wash the silicone lid of the sippy cup thoroughly.", fa: "درپوش سیلیکونی لیوان آموزشی را با دقت بشوی." }
        ]
      },
      {
        id: "stove_top",
        word: "stove top",
        meaning: "صفحه روی اجاق گاز",
        en: "Wipe the stove top after the soup splashes.",
        fa: "بعد از ترشح کردن سوپ، صفحه روی اجاق گاز را دستمال بکش.",
        icon: "🍳",
        examples: [
          { en: "Wipe the stove top after the soup splashes.", fa: "بعد از ترشح کردن سوپ، صفحه روی اجاق گاز را دستمال بکش." },
          { en: "There are four gas burners on our stove top.", fa: "چهار شعله گاز روی صفحه اجاق ما وجود دارد." },
          { en: "Do not touch the hot stove top right after cooking.", fa: "بلافاصله بعد از آشپزی به صفحه داغ اجاق گاز دست نزن." }
        ]
      },
      {
        id: "burner",
        word: "burner",
        meaning: "شعله اجاق گاز",
        en: "Turn on the front burner to boil the tea kettle.",
        fa: "شعله جلویی اجاق را روشن کن تا کتری چای به جوش بیاید.",
        icon: "🔥",
        examples: [
          { en: "Turn on the front burner to boil the tea kettle.", fa: "شعله جلویی اجاق را روشن کن تا کتری چای به جوش بیاید." },
          { en: "Lower the flame on the back burner so the rice steams.", fa: "شعله عقبی را کم کن تا برنج دم بکشد." },
          { en: "One burner on the old stove needs to be repaired.", fa: "یکی از شعله‌های اجاق گاز قدیمی نیاز به تعمیر دارد." }
        ]
      }
    ]
  },
  a2Bathroom: {
    name: "حمام و سرویس (A2)",
    title: "حمام و سرویس",
    icon: "🛁",
    level: "A2",
    words: [
      {
        id: "shower_curtain",
        word: "shower curtain",
        meaning: "پرده حمام",
        en: "Close the shower curtain so water does not splash onto the floor.",
        fa: "پرده حمام را ببند تا آب روی کف زمین پاشیده نشود.",
        icon: "🚿",
        examples: [
          { en: "Close the shower curtain so water does not splash onto the floor.", fa: "پرده حمام را ببند تا آب روی کف زمین پاشیده نشود." },
          { en: "We replaced the old shower curtain with a bright patterned one.", fa: "ما پرده قدیمی حمام را با یک پرده طرح‌دار روشن عوض کردیم." },
          { en: "Make sure the shower curtain hangs inside the tub.", fa: "مطمئن شو که پرده حمام داخل وان آویزان باشد." }
        ]
      },
      {
        id: "shower_head",
        word: "shower head",
        meaning: "سردوشی حمام",
        en: "Water sprays evenly from the wide shower head.",
        fa: "آب به طور یکنواخت از سردوشی پهن حمام بیرون می‌پاشد.",
        icon: "🚿",
        examples: [
          { en: "Water sprays evenly from the wide shower head.", fa: "آب به طور یکنواخت از سردوشی پهن حمام بیرون می‌پاشد." },
          { en: "We installed a detachable shower head with good water pressure.", fa: "ما یک سردوشی متحرک با فشار آب مناسب نصب کردیم." },
          { en: "Clean the limescale off the shower head with vinegar.", fa: "رسوبات آهکی روی سردوشی را با سرکه تمیز کن." }
        ]
      },
      {
        id: "drain",
        word: "drain",
        meaning: "راه آب، فاضلاب، لوله خروجی کف",
        en: "Water flows down the sink drain smoothly.",
        fa: "آب به نرمی از راه آب سینک پایین می‌رود.",
        icon: "🕳️",
        examples: [
          { en: "Water flows down the sink drain smoothly.", fa: "آب به نرمی از راه آب سینک پایین می‌رود." },
          { en: "Push the plug to stop water going down the drain.", fa: "درپوش را فشار بده تا مانع رفتن آب به راه آب شوی." },
          { en: "Clean hair out of the shower drain regularly.", fa: "موها را به طور منظم از راه آب دوش پاک کن." }
        ]
      },
      {
        id: "toilet_seat",
        word: "toilet seat",
        meaning: "نشیمن توالت فرنگی",
        en: "Please remember to put the toilet seat down.",
        fa: "لطفاً یادت باشد که نشیمن توالت فرنگی را پایین بگذاری.",
        icon: "🚽",
        examples: [
          { en: "Please remember to put the toilet seat down.", fa: "لطفاً یادت باشد که نشیمن توالت فرنگی را پایین بگذاری." },
          { en: "We bought a padded toilet seat for extra comfort.", fa: "ما یک نشیمن توالت بالشتک‌دار برای راحتی بیشتر خریدیم." },
          { en: "Wipe the toilet seat with a sanitizing wipe.", fa: "نشیمن توالت را با یک دستمال ضدعفونی‌کننده پاک کن." }
        ]
      },
      {
        id: "toilet_bowl",
        word: "toilet bowl",
        meaning: "کاسه توالت",
        en: "Pour cleaner inside the toilet bowl and scrub it.",
        fa: "مایع پاک‌کننده را داخل کاسه توالت بریز و آن را فرچه بکش.",
        icon: "🚽",
        examples: [
          { en: "Pour cleaner inside the toilet bowl and scrub it.", fa: "مایع پاک‌کننده را داخل کاسه توالت بریز و آن را فرچه بکش." },
          { en: "Use the long brush to reach under the rim of the toilet bowl.", fa: "از فرچه بلند برای دسترسی به زیر لبه کاسه توالت استفاده کن." },
          { en: "The toilet bowl shines after a thorough wash.", fa: "کاسه توالت بعد از یک شستشوی کامل برق می‌زند." }
        ]
      },
      {
        id: "toilet_brush",
        word: "toilet brush",
        meaning: "فرچه توالت‌شور",
        en: "Scrub the porcelain bowl with the toilet brush.",
        fa: "کاسه سرامیکی را با فرچه توالت فرچه بکش.",
        icon: "🧹",
        examples: [
          { en: "Scrub the porcelain bowl with the toilet brush.", fa: "کاسه سرامیکی را با فرچه توالت فرچه بکش." },
          { en: "Keep the toilet brush in its plastic stand next to the wall.", fa: "فرچه توالت را در پایه پلاستیکی‌اش کنار دیوار نگه دار." },
          { en: "Rinse the toilet brush thoroughly after cleaning.", fa: "فرچه توالت را بعد از نظافت کاملاً آبکشی کن." }
        ]
      },
      {
        id: "plunger",
        word: "plunger",
        meaning: "تلمبه لوله‌بازکن دستی",
        en: "Use the rubber plunger if the bathroom toilet gets clogged.",
        fa: "اگر توالت حمام گرفت، از تلمبه لاستیکی استفاده کن.",
        icon: "🪠",
        examples: [
          { en: "Use the rubber plunger if the bathroom toilet gets clogged.", fa: "اگر توالت حمام گرفت، از تلمبه لاستیکی استفاده کن." },
          { en: "Keep a reliable plunger handy in every household bathroom.", fa: "در حمام هر خانه‌ای یک تلمبه قابل اعتماد دم دست بگذار." },
          { en: "A few firm pushes with the plunger cleared the drain.", fa: "چند فشار محکم با تلمبه گرفتگی لوله را باز کرد." }
        ]
      },
      {
        id: "bidet",
        word: "bidet",
        meaning: "بیده، شستشو دهنده توالت",
        en: "They installed a modern bidet attachment on the toilet.",
        fa: "آن‌ها یک قطعه بیده مدرن روی توالت نصب کردند.",
        icon: "🚿",
        examples: [
          { en: "They installed a modern bidet attachment on the toilet.", fa: "آن‌ها یک قطعه بیده مدرن روی توالت نصب کردند." },
          { en: "A bidet provides a cleaner and fresher feeling after use.", fa: "بیده بعد از استفاده حس تمیزی و طراوت بیشتری ایجاد می‌کند." },
          { en: "You can adjust the water temperature on this electronic bidet.", fa: "می‌توانی دمای آب را روی این بیده الکترونیکی تنظیم کنی." }
        ]
      },
      {
        id: "electric_toothbrush",
        word: "electric toothbrush",
        meaning: "مسواک برقی",
        en: "An electric toothbrush cleans teeth much more thoroughly.",
        fa: "یک مسواک برقی دندان‌ها را بسیار دقیق‌تر و عمیق‌تر تمیز می‌کند.",
        icon: "🪥",
        examples: [
          { en: "An electric toothbrush cleans teeth much more thoroughly.", fa: "یک مسواک برقی دندان‌ها را بسیار دقیق‌تر و عمیق‌تر تمیز می‌کند." },
          { en: "Charge the electric toothbrush base overnight.", fa: "پایه مسواک برقی را شب تا صبح در شارژ بگذار." },
          { en: "Replace the small rotating head on the electric toothbrush.", fa: "سری چرخان و کوچک مسواک برقی را تعویض کن." }
        ]
      },
      {
        id: "dental_floss",
        word: "dental floss",
        meaning: "نخ دندان",
        en: "Floss your teeth daily with waxed dental floss.",
        fa: "دندان‌هایت را روزانه با نخ دندان موم‌دار تمیز کن.",
        icon: "🧵",
        examples: [
          { en: "Floss your teeth daily with waxed dental floss.", fa: "دندان‌هایت را روزانه با نخ دندان موم‌دار تمیز کن." },
          { en: "Pull out about eighteen inches of dental floss.", fa: "حدود هجده اینچ نخ دندان بیرون بکش." },
          { en: "Dental floss removes food particles between teeth.", fa: "نخ دندان ذرات غذا را از بین دندان‌ها پاک می‌کند." }
        ]
      },
      {
        id: "shaving_cream",
        word: "shaving cream",
        meaning: "خمیر یا فوم اصلاح ریش",
        en: "Apply a layer of shaving cream before using the razor.",
        fa: "قبل از استفاده از تیغ، لایه‌ای از فوم اصلاح بمال.",
        icon: "🧴",
        examples: [
          { en: "Apply a layer of shaving cream before using the razor.", fa: "قبل از استفاده از تیغ، لایه‌ای از فوم اصلاح بمال." },
          { en: "Shaving cream helps the blade glide smoothly over skin.", fa: "کرم اصلاح کمک می‌کند تیغ به نرمی روی پوست سر بخورد." },
          { en: "He rinsed the white shaving cream off his face.", fa: "او فوم اصلاح سفید را از روی صورتش شست." }
        ]
      },
      {
        id: "razor_blade",
        word: "razor blade",
        meaning: "تیغ خودتراش، تیغ اصلاح",
        en: "Replace the dull razor blade with a fresh sharp one.",
        fa: "تیغ خودتراش کندشده را با یک تیغ تیز و جدید عوض کن.",
        icon: "🪒",
        examples: [
          { en: "Replace the dull razor blade with a fresh sharp one.", fa: "تیغ خودتراش کندشده را با یک تیغ تیز و جدید عوض کن." },
          { en: "A sharp razor blade prevents painful razor burns.", fa: "یک تیغ خودتراش تیز مانع سوزش و التهاب پوست می‌شود." },
          { en: "Dispose of used razor blades safely in a container.", fa: "تیغ‌های اصلاح مصرف‌شده را با رعایت ایمنی در ظرف مخصوص دور بینداز." }
        ]
      },
      {
        id: "washcloth",
        word: "washcloth",
        meaning: "لیف یا پارچه شستشوی صورت و بدن",
        en: "Lather gentle soap onto the soft washcloth.",
        fa: "صابون ملایم را روی پارچه شستشوی نرم کف کن.",
        icon: "🧽",
        examples: [
          { en: "Lather gentle soap onto the soft washcloth.", fa: "صابون ملایم را روی پارچه شستشوی نرم کف کن." },
          { en: "She washes her face with a warm damp washcloth every night.", fa: "او هر شب صورتش را با یک لیف گرم و نمدار می‌شوید." },
          { en: "Hang the washcloth over the faucet to dry after use.", fa: "لیف را بعد از استفاده روی شیر آب آویزان کن تا خشک شود." }
        ]
      },
      {
        id: "loofah",
        word: "loofah",
        meaning: "لیف اسفنجی، لیف توری",
        en: "Use a textured loofah to exfoliate and scrub your skin.",
        fa: "از یک لیف توری برای لایه‌برداری و شستشوی پوستت استفاده کن.",
        icon: "🧽",
        examples: [
          { en: "Use a textured loofah to exfoliate and scrub your skin.", fa: "از یک لیف توری برای لایه‌برداری و شستشوی پوستت استفاده کن." },
          { en: "Add body wash to the loofah to create rich foam.", fa: "مایع شستشوی بدن را روی لیف توری بریز تا کف غنی ایجاد کند." },
          { en: "Hang your loofah in a ventilated spot so it dries quickly.", fa: "لیف خود را در جایی با جریان هوا آویزان کن تا سریع خشک شود." }
        ]
      },
      {
        id: "tweezers",
        word: "tweezers",
        meaning: "موچین، انبرک ظریف",
        en: "She used fine tweezers to shape her eyebrows.",
        fa: "او از یک موچین ظریف برای فرم دادن به ابروهایش استفاده کرد.",
        icon: "✂️",
        examples: [
          { en: "She used fine tweezers to shape her eyebrows.", fa: "او از یک موچین ظریف برای فرم دادن به ابروهایش استفاده کرد." },
          { en: "Use metal tweezers to pull out the tiny splinter.", fa: "از یک موچین فلزی برای درآوردن خار کوچک چوب استفاده کن." },
          { en: "Keep the tweezers sanitized in the medicine cabinet.", fa: "موچین را ضدعفونی‌شده در کمد داروها نگه دار." }
        ]
      },
      {
        id: "nail_file",
        word: "nail file",
        meaning: "سوهان ناخن",
        en: "Smooth the rough edges of your fingernails with a nail file.",
        fa: "لبه‌های زبر ناخن‌هایت را با یک سوهان ناخن صاف کن.",
        icon: "💅",
        examples: [
          { en: "Smooth the rough edges of your fingernails with a nail file.", fa: "لبه‌های زبر ناخن‌هایت را با یک سوهان ناخن صاف کن." },
          { en: "She carries an emery board nail file in her handbag.", fa: "او یک سوهان ناخن سمباده‌ای در کیف دستی‌اش همراه دارد." },
          { en: "File your nails in one direction with a glass nail file.", fa: "ناخن‌هایت را با یک سوهان ناخن شیشه‌ای در یک جهت سوهان بکش." }
        ]
      },
      {
        id: "fingernail_clippers",
        word: "fingernail clippers",
        meaning: "ناخن‌گیر دستی",
        en: "Trim your fingernails neatly with sharp fingernail clippers.",
        fa: "ناخن‌هایت را با ناخن‌گیر تیز مرتب کوتاه کن.",
        icon: "✂️",
        examples: [
          { en: "Trim your fingernails neatly with sharp fingernail clippers.", fa: "ناخن‌هایت را با ناخن‌گیر تیز مرتب کوتاه کن." },
          { en: "These stainless steel fingernail clippers have a built-in file.", fa: "این ناخن‌گیر استیل دارای سوهان داخلی است." },
          { en: "Clip your nails straight across with the fingernail clippers.", fa: "با ناخن‌گیر ناخن‌هایت را صاف کوتاه کن." }
        ]
      }
    ]
  },
  car: {
    name: "خودرو و رانندگی",
    title: "خودرو و رانندگی",
    icon: "🚗",
    level: "A1",
    words: [
      {
        id: "steering_wheel",
        word: "steering wheel",
        meaning: "فرمان ماشین",
        en: "Keep both hands on the steering wheel while driving.",
        fa: "هنگام رانندگی هر دو دستت را روی فرمان نگه دار.",
        icon: "🚗",
        examples: [
          { en: "The steering wheel feels very smooth in this new car.", fa: "فرمان در این ماشین جدید بسیار روان است." },
          { en: "He adjusted the steering wheel to a comfortable height.", fa: "او ارتفاع فرمان را در حالتی راحت تنظیم کرد." },
          { en: "Do not take your eyes off the road or hands off the steering wheel.", fa: "چشمت را از جاده و دستت را از فرمان برندار." }
        ]
      },
      {
        id: "car_tire",
        word: "tire",
        meaning: "لاستیک، تایر",
        en: "I need to check the air in the front tire.",
        fa: "باید باد لاستیک جلو را بررسی کنم.",
        icon: "🛞",
        examples: [
          { en: "We replaced the worn-out tire before our trip.", fa: "قبل از سفر، لاستیک فرسوده را تعویض کردیم." },
          { en: "Driving with a flat tire can damage your car.", fa: "رانندگی با لاستیک پنچر می‌تواند به ماشینت آسیب بزند." },
          { en: "The mechanic inspected all four tires carefully.", fa: "مکانیک هر چهار تایر را با دقت بازرسی کرد." }
        ]
      },
      {
        id: "car_trunk",
        word: "trunk",
        meaning: "صندوق عقب",
        en: "Put the heavy luggage in the trunk.",
        fa: "چمدان‌های سنگین را در صندوق عقب بگذار.",
        icon: "🧳",
        examples: [
          { en: "She opened the trunk to load the shopping bags.", fa: "او صندوق عقب را باز کرد تا کیسه‌های خرید را بار بزند." },
          { en: "There is plenty of space in the trunk for camping gear.", fa: "در صندوق عقب فضای زیادی برای وسایل کمپینگ وجود دارد." },
          { en: "Close the trunk firmly before getting in the car.", fa: "قبل از سوار شدن به ماشین، صندوق عقب را محکم ببند." }
        ]
      },
      {
        id: "gas_station",
        word: "gas station",
        meaning: "پمپ بنزین",
        en: "Let's stop at the next gas station for fuel.",
        fa: "بیا در پمپ بنزین بعدی برای سوخت‌گیری توقف کنیم.",
        icon: "⛽",
        examples: [
          { en: "Is there a 24-hour gas station near here?", fa: "آیا در این نزدیکی یک پمپ بنزین ۲۴ ساعته هست؟" },
          { en: "He bought a cup of coffee at the gas station.", fa: "او در پمپ بنزین یک فنجان قهوه خرید." },
          { en: "We asked for directions at the gas station.", fa: "ما در پمپ بنزین آدرس پرسیدیم." }
        ]
      },
      {
        id: "car_wash",
        word: "car wash",
        meaning: "کارواش، شستشوی خودرو",
        en: "My car is very dirty, so I am going to the car wash.",
        fa: "ماشینم خیلی کثیف است، بنابراین به کارواش می‌روم.",
        icon: "🧼",
        examples: [
          { en: "The automatic car wash cleaned the car in five minutes.", fa: "کارواش اتوماتیک ماشین را ظرف پنج دقیقه شست." },
          { en: "He spent Saturday morning at the car wash.", fa: "او صبح شنبه را در کارواش گذراند." },
          { en: "A good car wash makes the paint look shiny and new.", fa: "یک کارواش خوب باعث می‌شود رنگ ماشین براق و نو به نظر برسد." }
        ]
      },
      {
        id: "car_horn",
        word: "horn",
        meaning: "بوق ماشین",
        en: "He honked the horn to warn the pedestrian.",
        fa: "او بوق زد تا به عابر پیاده هشدار دهد.",
        icon: "📢",
        examples: [
          { en: "Only use the car horn in emergency situations.", fa: "از بوق ماشین فقط در مواقع اضطراری استفاده کن." },
          { en: "Someone behind us was honking their horn loudly.", fa: "کسی پشت سر ما با صدای بلند بوق می‌زد." },
          { en: "The horn sounds different on smaller cars.", fa: "صدای بوق در ماشین‌های کوچک‌تر متفاوت است." }
        ]
      },
      {
        id: "car_windshield",
        word: "windshield",
        meaning: "شیشه جلو",
        en: "Wipe the dust off the windshield before driving.",
        fa: "قبل از رانندگی، گردوغبار را از روی شیشه جلو پاک کن.",
        icon: "🪟",
        examples: [
          { en: "A small pebble hit the windshield on the highway.", fa: "یک سنگ‌ریزه کوچک در بزرگراه به شیشه جلو برخورد کرد." },
          { en: "The sun was shining directly through the front windshield.", fa: "خورشید مستقیماً از میان شیشه جلو می‌تابید." },
          { en: "Keep your windshield clean for better visibility.", fa: "برای دید بهتر، شیشه جلویت را تمیز نگه دار." }
        ]
      },
      {
        id: "gas_tank",
        word: "gas tank",
        meaning: "باک بنزین",
        en: "The gas tank is almost empty; we must refuel.",
        fa: "باک بنزین تقریباً خالی است؛ باید سوخت‌گیری کنیم.",
        icon: "🛢️",
        examples: [
          { en: "The gas tank on this SUV holds sixty liters.", fa: "باک بنزین این شاسی‌بلند شصت لیتر گنجایش دارد." },
          { en: "Open the gas tank cap before putting in fuel.", fa: "قبل از بنزین زدن، درپوش باک را باز کن." },
          { en: "It takes about five minutes to fill the entire gas tank.", fa: "حدود پنج دقیقه طول می‌کشد تا کل باک بنزین پر شود." }
        ]
      },
      {
        id: "car_headlights",
        word: "headlights",
        meaning: "چراغ‌های جلو",
        en: "Turn on your headlights when it gets dark.",
        fa: "وقتی هوا تاریک شد، چراغ‌های جلو را روشن کن.",
        icon: "💡",
        examples: [
          { en: "One of the headlights burned out and needs replacement.", fa: "یکی از چراغ‌های جلو سوخته و نیاز به تعویض دارد." },
          { en: "The bright headlights helped us see through the heavy rain.", fa: "چراغ‌های پرنور جلو به ما کمک کردند در باران شدید مسیر را ببینیم." },
          { en: "Remember to turn off the headlights so the battery won't die.", fa: "یادت باشد چراغ‌های جلو را خاموش کنی تا باتری نخوابد." }
        ]
      },
      {
        id: "car_bumper",
        word: "bumper",
        meaning: "سپر ماشین",
        en: "The front bumper protects the car during a minor impact.",
        fa: "سپر جلو از خودرو هنگام برخورد جزئی محافظت می‌کند.",
        icon: "🛡️",
        examples: [
          { en: "He parked too close and scraped the plastic bumper.", fa: "او بیش از حد نزدیک پارک کرد و سپر پلاستیکی را خراشید." },
          { en: "Modern cars have lightweight composite bumpers.", fa: "خودروهای مدرن سپرهای کامپوزیتی سبک‌وزن دارند." },
          { en: "There was a small dent on the rear bumper.", fa: "یک فرورفتگی کوچک روی سپر عقب وجود داشت." }
        ]
      },
      {
        id: "license_plate",
        word: "license plate",
        meaning: "پلاک ماشین",
        en: "Every vehicle must display a valid license plate.",
        fa: "هر وسیله نقلیه‌ای باید پلاک معتبر داشته باشد.",
        icon: "🔢",
        examples: [
          { en: "Write down the license plate number of that car.", fa: "شماره پلاک آن ماشین را یادداشت کن." },
          { en: "He attached the new license plate to the back of his car.", fa: "او پلاک جدید را پشت ماشینش نصب کرد." },
          { en: "The traffic camera recorded the speed and license plate.", fa: "دوربین راهنمایی سرعت و پلاک ماشین را ثبت کرد." }
        ]
      },
      {
        id: "side_mirror",
        word: "side mirror",
        meaning: "آینه بغل",
        en: "Always check your side mirror before turning or changing lanes.",
        fa: "همیشه قبل از پیچیدن یا تغییر خط، آینه بغل را نگاه کن.",
        icon: "🪞",
        examples: [
          { en: "He adjusted the right side mirror so he could see the curb.", fa: "او آینه بغل راست را طوری تنظیم کرد که جدول خیابان را ببیند." },
          { en: "Fold your side mirrors when parking in narrow streets.", fa: "هنگام پارک در خیابان‌های باریک، آینه‌های بغلت را تا کن." },
          { en: "A motorcycle sped past right next to my side mirror.", fa: "یک موتورسیکلت درست از کنار آینه بغل من با سرعت عبور کرد." }
        ]
      },
      {
        id: "car_grill",
        word: "grill",
        meaning: "جلوپنجره (شبکه جلوی رادیاتور)",
        en: "Leaves and bugs were caught in the front grill of the car.",
        fa: "برگ‌ها و حشرات در جلوپنجره جلوی ماشین گیر کرده بودند.",
        icon: "🚗",
        examples: [
          { en: "The shiny chrome grill gives the car a bold front look.", fa: "جلوپنجره کرومی براق جلوه‌ای پرابهت به جلوی ماشین می‌دهد." },
          { en: "Air flows through the front grill to cool down the engine radiator.", fa: "هوا از میان جلوپنجره عبور می‌کند تا رادیاتور موتور را خنک کند." },
          { en: "A flying stone cracked the plastic grill on the highway.", fa: "یک سنگ پرتاب‌شده در بزرگراه، جلوپنجره پلاستیکی را شکست." }
        ]
      },
      {
        id: "car_shop",
        word: "shop",
        meaning: "تعمیرگاه (ماشین)، مکانیکی",
        en: "My car is in the shop today to get the brakes repaired.",
        fa: "ماشینم امروز برای تعمیر ترمزها در تعمیرگاه است.",
        icon: "🔧",
        examples: [
          { en: "I have to take my car to the shop tomorrow morning.", fa: "فردا صبح باید ماشینم را به تعمیرگاه ببرم." },
          { en: "How many days will your car be in the shop?", fa: "ماشینت چند روز در تعمیرگاه خواهد بود؟" },
          { en: "The mechanic at the shop diagnosed the engine problem quickly.", fa: "مکانیکِ تعمیرگاه مشکل موتور را به سرعت تشخیص داد." }
        ]
      }
    ]
  },
  a2Car: {
    name: "خودرو و رانندگی (A2)",
    title: "خودرو و رانندگی",
    icon: "🚗",
    level: "A2",
    words: [
      {
        id: "car_sedan",
        word: "sedan",
        meaning: "خودروی سدان (سواری چهاردر)",
        en: "A family sedan is comfortable for long city drives.",
        fa: "یک خودروی سدان خانوادگی برای رانندگی‌های طولانی شهری راحت است.",
        icon: "🚘",
        examples: [
          { en: "He bought a fuel-efficient four-door sedan.", fa: "او یک خودروی سدان چهاردر کم‌مصرف خرید." },
          { en: "Sedans usually have a separate enclosed trunk.", fa: "سدان‌ها معمولاً صندوق عقب مجزا و پوشیده دارند." },
          { en: "Most taxi fleets consist of mid-size sedans.", fa: "بیشتر ناوگان‌های تاکسیرانی از سدان‌های اندازه متوسط تشکیل شده‌اند." }
        ]
      },
      {
        id: "car_suv",
        word: "SUV",
        meaning: "شاسی‌بلند (خودروی اس‌یووی)",
        en: "They chose an SUV for mountain trips and family safety.",
        fa: "آن‌ها یک شاسی‌بلند را برای سفرهای کوهستانی و ایمنی خانواده انتخاب کردند.",
        icon: "🚙",
        examples: [
          { en: "An SUV gives you a higher driving position on the road.", fa: "یک شاسی‌بلند دید بالاتری نسبت به جاده به شما می‌دهد." },
          { en: "Many modern SUVs feature all-wheel drive.", fa: "بسیاری از شاسی‌بلندهای مدرن دارای سیستم چهارچرخ محرک هستند." },
          { en: "The SUV has plenty of cargo room in the back.", fa: "این شاسی‌بلند در عقب فضای بار فراوانی دارد." }
        ]
      },
      {
        id: "car_pickup_truck",
        word: "pickup truck",
        meaning: "وانت، وانت‌پیکاپ",
        en: "He loaded gardening supplies into the back of his pickup truck.",
        fa: "او وسایل باغبانی را پشت وانت‌پیکاپ خود بار زد.",
        icon: "🛻",
        examples: [
          { en: "A pickup truck is ideal for moving heavy equipment.", fa: "وانت‌پیکاپ برای جابه‌جایی تجهیزات سنگین ایدئال است." },
          { en: "He tied down the boxes in the pickup truck bed.", fa: "او جعبه‌ها را در قسمت بار وانت محکم بست." },
          { en: "Pickup trucks are very popular in rural areas.", fa: "وانت‌ها در مناطق روستایی بسیار پرطرفدار هستند." }
        ]
      },
      {
        id: "car_minivan",
        word: "minivan",
        meaning: "مینی‌ون (ون مسافری و خانوادگی)",
        en: "A minivan is designed with sliding doors for families with kids.",
        fa: "مینی‌ون با درهای کشویی برای خانواده‌های دارای کودک طراحی شده است.",
        icon: "🚐",
        examples: [
          { en: "The seats in the minivan can fold flat for extra storage.", fa: "صندلی‌های مینی‌ون برای فضای بار بیشتر می‌توانند کاملاً تا شوند." },
          { en: "We rented a seven-passenger minivan for our vacation.", fa: "ما برای تعطیلاتمان یک مینی‌ون هفت‌نفره اجاره کردیم." },
          { en: "Her minivan has three rows of comfortable seating.", fa: "مینی‌ون او سه ردیف صندلی راحت دارد." }
        ]
      },
      {
        id: "car_sports_car",
        word: "sports car",
        meaning: "ماشین اسپرت، خودروی پرسرعت",
        en: "He drove his red sports car along the winding coastal highway.",
        fa: "او ماشین اسپرت قرمزش را در امتداد بزرگراه ساحلی پرپیچ‌وخم راند.",
        icon: "🏎️",
        examples: [
          { en: "A sports car accelerates much faster than regular vehicles.", fa: "ماشین اسپرت بسیار سریع‌تر از خودروهای عادی شتاب می‌گیرد." },
          { en: "Most sports cars have only two seats and a low profile.", fa: "بیشتر ماشین‌های اسپرت فقط دو صندلی و ارتفاع کوتاهی دارند." },
          { en: "Maintaining a luxury sports car can be expensive.", fa: "نگهداری یک ماشین اسپرت لوکس می‌تواند پرهزینه باشد." }
        ]
      },
      {
        id: "car_convertible",
        word: "convertible",
        meaning: "خودروی کروک (سقف جمع‌شو)",
        en: "On a sunny day, he loves driving his convertible with the top down.",
        fa: "در یک روز آفتابی، او عاشق رانندگی با خودروی کروک در حالت سقف‌باز است.",
        icon: "🏎️",
        examples: [
          { en: "Push the button to open the roof of the convertible.", fa: "دکمه را فشار بده تا سقف خودروی کروک باز شود." },
          { en: "A convertible is wonderful for scenic road trips.", fa: "خودروی کروک برای سفرهای جاده‌ای با مناظر زیبا فوق‌العاده است." },
          { en: "Make sure you close the convertible roof before it rains.", fa: "مطمئن شو قبل از بارش باران سقف ماشین کروک را ببندی." }
        ]
      },
      {
        id: "car_hatchback",
        word: "hatchback",
        meaning: "ماشین هاچ‌بک (بدون صندوق مجزا)",
        en: "A compact hatchback is easy to park in busy city streets.",
        fa: "یک هاچ‌بک جمع‌وجور به راحتی در خیابان‌های شلوغ شهر پارک می‌شود.",
        icon: "🚗",
        examples: [
          { en: "The rear door of a hatchback opens upward completely.", fa: "درِ عقب هاچ‌بک کاملاً رو به بالا باز می‌شود." },
          { en: "You can fit a bicycle in the back of this hatchback.", fa: "می‌توانی یک دوچرخه را در قسمت عقب این هاچ‌بک جا بدهی." },
          { en: "Hatchbacks combine small exterior size with practical cargo space.", fa: "هاچ‌بک‌ها اندازه بیرونی کوچک را با فضای بار کاربردی ترکیب می‌کنند." }
        ]
      },
      {
        id: "car_hood",
        word: "hood",
        meaning: "کاپوت ماشین (درپوش موتور)",
        en: "Pop the hood so we can inspect the engine oil.",
        fa: "کاپوت را بالا بزن تا بتوانیم روغن موتور را بررسی کنیم.",
        icon: "🔧",
        examples: [
          { en: "Steam was rising from under the hot hood.", fa: "بخار از زیر کاپوت داغ بلند می‌شد." },
          { en: "The hood release lever is located under the steering wheel.", fa: "اهرم بازکننده کاپوت زیر فرمان قرار دارد." },
          { en: "He closed the hood with a solid click.", fa: "او کاپوت را با صدای تق محکمی بست." }
        ]
      },
      {
        id: "car_dashboard",
        word: "dashboard",
        meaning: "داشبورد ماشین",
        en: "The warning light flashed red on the dashboard.",
        fa: "چراغ هشدار روی داشبورد به رنگ قرمز چشمک زد.",
        icon: "📟",
        examples: [
          { en: "She placed her sunglasses on top of the dashboard.", fa: "او عینک آفتابی‌اش را روی داشبورد گذاشت." },
          { en: "The modern digital dashboard shows fuel efficiency clearly.", fa: "داشبورد دیجیتال مدرن مصرف سوخت را به وضوح نشان می‌دهد." },
          { en: "Keep important car documents inside the dashboard compartment.", fa: "مدارک مهم خودرو را درون محفظه داشبورد نگه دار." }
        ]
      },
      {
        id: "car_speedometer",
        word: "speedometer",
        meaning: "سرعت‌سنج، کیلومترشمار",
        en: "Check the speedometer to ensure you are not speeding.",
        fa: "سرعت‌سنج را نگاه کن تا مطمئن شوی سرعت غیرمجاز نداری.",
        icon: "⏱️",
        examples: [
          { en: "The speedometer showed seventy miles per hour on the interstate.", fa: "سرعت‌سنج در اتوبان بین‌شهری سرعت هفتاد مایل بر ساعت را نشان می‌داد." },
          { en: "Her car speedometer can switch between miles and kilometers.", fa: "سرعت‌سنج ماشین او می‌تواند بین مایل و کیلومتر تغییر وضعیت دهد." },
          { en: "The needle on the speedometer climbed as he pressed the pedal.", fa: "با فشردن پدال، عقربه سرعت‌سنج بالا رفت." }
        ]
      },
      {
        id: "car_fuel_gauge",
        word: "fuel gauge",
        meaning: "درجه باک (نشانگر سوخت)",
        en: "The fuel gauge is pointing to empty, so we must stop.",
        fa: "درجه باک روی خالی قرار دارد، بنابراین باید توقف کنیم.",
        icon: "⛽",
        examples: [
          { en: "Look at the fuel gauge before setting off on a long trip.", fa: "قبل از راه افتادن در سفری طولانی به درجه باک نگاه کن." },
          { en: "The low-fuel icon lit up beside the fuel gauge.", fa: "چراغ کمبود بنزین کنار نشانگر سوخت روشن شد." },
          { en: "After refilling, the fuel gauge showed completely full.", fa: "پس از بنزین زدن، درجه باک کاملاً پر را نشان داد." }
        ]
      },
      {
        id: "car_gear_shifter",
        word: "gear shifter",
        meaning: "دسته‌دنده",
        en: "Move the gear shifter into reverse to back out of the driveway.",
        fa: "دسته‌دنده را در وضعیت دنده‌عقب بگذار تا از پارکینگ دنده‌عقب بیرون بیایی.",
        icon: "🕹️",
        examples: [
          { en: "On automatic cars, the gear shifter has Park, Drive, and Reverse.", fa: "در خودروهای اتوماتیک، دسته‌دنده حالت‌های پارک، حرکت و دنده‌عقب دارد." },
          { en: "He gripped the leather gear shifter and shifted smoothly into third gear.", fa: "او دسته‌دنده چرمی را گرفت و به آرامی دنده سه داد." },
          { en: "Make sure your foot is on the brake before moving the gear shifter.", fa: "قبل از تغییر وضعیت دسته‌دنده مطمئن شو پایت روی ترمز است." }
        ]
      },
      {
        id: "car_windshield_wipers",
        word: "windshield wipers",
        meaning: "برف‌پاک‌کن",
        en: "Turn on the windshield wipers as soon as it starts raining.",
        fa: "به محض اینکه باران بارید، برف‌پاک‌کن را روشن کن.",
        icon: "🌧️",
        examples: [
          { en: "The old windshield wipers left dirty streaks across the glass.", fa: "برف‌پاک‌کن‌های قدیمی خطوط کثیف روی شیشه به جا می‌گذاشتند." },
          { en: "You should replace your windshield wipers once a year.", fa: "باید سالی یک بار تیغه‌های برف‌پاک‌کن خود را تعویض کنی." },
          { en: "The rear windshield wiper helps you see out the back window.", fa: "برف‌پاک‌کن عقب به شما کمک می‌کند شیشه پشت را ببینید." }
        ]
      },
      {
        id: "car_turn_signal",
        word: "turn signal",
        meaning: "راهنمای ماشین (دسته راهنما)",
        en: "Use your turn signal before making any left or right turn.",
        fa: "قبل از هرگونه گردش به چپ یا راست از راهنما استفاده کن.",
        icon: "🔄",
        examples: [
          { en: "The turn signal clicks softly inside the car while blinking.", fa: "راهنما هنگام چشمک زدن صدای تق‌تق ملایمی در داخل ماشین می‌دهد." },
          { en: "He forgot to switch off his turn signal after changing lanes.", fa: "او پس از تغییر لاین فراموش کرد راهنمایش را خاموش کند." },
          { en: "Always signal your intentions early with the turn signal.", fa: "همیشه زودتر قصد خود را با زدن راهنما نشان بده." }
        ]
      },
      {
        id: "car_emergency_brake",
        word: "emergency brake",
        meaning: "ترمز دستی، ترمز اضطراری",
        en: "Set the emergency brake whenever you park on a steep hill.",
        fa: "هر زمان که در سراشیبی تند پارک می‌کنی، ترمز دستی را بکش.",
        icon: "🛑",
        examples: [
          { en: "Release the emergency brake before attempting to drive forward.", fa: "قبل از تلاش برای حرکت به جلو، ترمز دستی را آزاد کن." },
          { en: "In modern vehicles, the emergency brake is often a small electronic switch.", fa: "در خودروهای مدرن، ترمز دستی اغلب یک کلید الکترونیکی کوچک است." },
          { en: "The red brake indicator stays on if the emergency brake is engaged.", fa: "اگر ترمز دستی درگیر باشد، چراغ هشدار قرمز ترمز روشن می‌ماند." }
        ]
      },
      {
        id: "car_gas_pedal",
        word: "gas pedal",
        meaning: "پدال گاز",
        en: "Gently press the gas pedal to accelerate smoothly.",
        fa: "پدال گاز را به آرامی فشار بده تا شتاب ملایمی بگیری.",
        icon: "🦶",
        examples: [
          { en: "Take your foot off the gas pedal when approaching a red traffic light.", fa: "هنگام نزدیک شدن به چراغ قرمز، پایت را از روی پدال گاز بردار." },
          { en: "Pressing the gas pedal too hard wastes fuel quickly.", fa: "فشردن بیش از حد پدال گاز سوخت را به سرعت هدر می‌دهد." },
          { en: "The car responded immediately when she tapped the gas pedal.", fa: "وقتی او ضربه آرامی به پدال گاز زد، ماشین فوراً عکس‌العمل نشان داد." }
        ]
      },
      {
        id: "car_brake_pedal",
        word: "brake pedal",
        meaning: "پدال ترمز",
        en: "Step firmly on the brake pedal to bring the car to a full stop.",
        fa: "پایت را محکم روی پدال ترمز بگذار تا خودرو کاملاً متوقف شود.",
        icon: "🛑",
        examples: [
          { en: "The brake pedal felt soft, so he took the car to a mechanic.", fa: "پدال ترمز زیر پا خالی می‌کرد، بنابراین او ماشین را پیش مکانیک برد." },
          { en: "Always keep your right foot ready near the brake pedal in heavy traffic.", fa: "در ترافیک سنگین همیشه پای راستت را نزدیک پدال ترمز آماده نگه دار." },
          { en: "Releasing the brake pedal slowly allows the car to creep forward.", fa: "آزاد کردن تدریجی پدال ترمز به ماشین اجازه می‌دهد آرام به جلو بخزد." }
        ]
      },
      {
        id: "car_rearview_mirror",
        word: "rearview mirror",
        meaning: "آینه وسط (دید عقب)",
        en: "Adjust your rearview mirror so you can see the entire back window.",
        fa: "آینه وسط را طوری تنظیم کن که کل شیشه عقب را ببینی.",
        icon: "🪞",
        examples: [
          { en: "Glance at your rearview mirror before slowing down suddenly.", fa: "قبل از ترمز ناگهانی، نگاهی سریع به آینه وسط بینداز." },
          { en: "The rearview mirror has a night mode to reduce headlight glare.", fa: "آینه وسط برای کاهش خیرگی نور چراغ‌ها حالت شب دارد." },
          { en: "He hung a small air freshener from the rearview mirror.", fa: "او یک بوگیر کوچک از آینه وسط آویزان کرد." }
        ]
      },
      {
        id: "car_sun_visor",
        word: "sun visor",
        meaning: "آفتاب‌گیر ماشین",
        en: "Flip down the sun visor when driving towards the afternoon sun.",
        fa: "هنگام رانندگی به سمت آفتاب بعدازظهر، آفتاب‌گیر را پایین بده.",
        icon: "☀️",
        examples: [
          { en: "There is a small mirror behind the driver's sun visor.", fa: "پشت آفتاب‌گیر سمت راننده یک آینه کوچک قرار دارد." },
          { en: "You can swing the sun visor to the side window to block side glare.", fa: "می‌توانی آفتاب‌گیر را به سمت شیشه بغل بچرخانی تا جلوی آفتاب جانبی را بگیرد." },
          { en: "The sun visor kept the blinding sunlight out of her eyes.", fa: "آفتاب‌گیر مانع از اذیت شدن چشم او توسط نور شدید خورشید شد." }
        ]
      },
      {
        id: "car_child_seat",
        word: "car seat",
        meaning: "صندلی کودک در خودرو",
        en: "A rear-facing car seat keeps infants and toddlers safe during travel.",
        fa: "صندلی کودک رو به عقب، نوزادان و کودکان نوپا را در طول سفر ایمن نگه می‌دارد.",
        icon: "💺",
        examples: [
          { en: "Make sure the car seat is securely strapped into the back row.", fa: "مطمئن شو صندلی کودک در ردیف عقب محکم با تسمه بسته شده است." },
          { en: "Children must ride in an approved car seat until they are old enough.", fa: "کودکان تا رسیدن به سن مناسب باید در صندلی کودک استاندارد بنشینند." },
          { en: "He bought a convertible car seat that grows with the child.", fa: "او یک صندلی کودک قابل تنظیم خرید که با رشد کودک تغییر می‌کند." }
        ]
      }
    ]
  }
};

var TEEN_DIALOGUES = [
  {
    id: "dialogue_school_encouragement",
    scene: "مدرسه",
    level: "A2",
    lines: [
      { who: "A", en: "Hi! How are you today?", fa: "سلام! امروز حالت چطوره؟" },
      { who: "B", en: "I am a little shy, but I am okay.", fa: "کمی خجالتی‌ام، ولی خوبم." },
      { who: "A", en: "You are doing great.", fa: "داری عالی پیش می‌ری." }
    ],
    react: {
      scenario: "دوستت اعتراف می‌کنه که اول روز کمی معذب و خجالتیه. بهترین واکنش همدلانه و تشویق‌کننده چیه؟",
      correctIntent: "encourage",
      options: [
        { text: "Take your time, there is no pressure at all.", fa: "راحت باش و عجله نکن، هیچ فشاری روت نیست.", intent: "encourage" },
        { text: "You are doing great.", fa: "داری عالی پیش می‌ری.", intent: "repeat" },
        { text: "Why did you forget your homework yesterday?", fa: "چرا دیروز تکلیفت رو فراموش کردی؟", intent: "unrelated_question" },
        { text: "Just get over it, everyone is busy.", fa: "بی‌خیال بابا، همه کار دارن خودتو جمع کن.", intent: "dismissive" }
      ]
    },
    build: {
      promptFa: "امروز احساس راحتی و آرامش دارم.",
      baseWords: ["I", "feel", "calm", "and", "relaxed", "today"],
      distractorWords: ["angry", "table", "busy"],
      validPatterns: [
        ["I", "feel", "calm", "and", "relaxed", "today"],
        ["Today", "I", "feel", "calm", "and", "relaxed"],
        ["I", "feel", "relaxed", "and", "calm", "today"],
        ["Today", "I", "feel", "relaxed", "and", "calm"]
      ]
    },
    twist: {
      scenario: "هم‌کلاسیت قبل از ارائه کنفرانس دلشوره گرفته و می‌گه دستام می‌لرزه. با همون قصد و لحن تشویق‌کننده چی بهش می‌گی؟",
      correctIntent: "encourage",
      options: [
        { text: "Take a deep breath, you can definitely handle this.", fa: "یک نفس عمیق بکش، شک نکن از پسش برمی‌آیی.", intent: "encourage" },
        { text: "What did you eat for breakfast today?", fa: "امروز صبحانه چی خوردی؟", intent: "unrelated_question" },
        { text: "You are doing great.", fa: "داری عالی پیش می‌ری.", intent: "repeat" },
        { text: "Do not embarrass our team in front of everyone.", fa: "جلوی همه آبروی تیممون رو نبری‌ها.", intent: "dismissive" }
      ]
    }
  },
  {
    id: "dialogue_friendly_compliment",
    scene: "پیام دوستانه",
    level: "B1",
    lines: [
      { who: "A", en: "I like your style.", fa: "از استایلت خوشم می‌آید." },
      { who: "B", en: "Thank you! That is kind.", fa: "ممنون! خیلی مهربانانه بود." },
      { who: "A", en: "You look confident today.", fa: "امروز بااعتمادبه‌نفس به نظر می‌رسی." }
    ],
    react: {
      scenario: "همکارت از ظاهر و انرژی مثبت امروزت تمجید می‌کنه. چطور مؤدبانه و صمیمی قدردانی می‌کنی؟",
      correctIntent: "gratitude",
      options: [
        { text: "I appreciate the compliment, it really made my day.", fa: "از تعریفت ممنونم، واقعاً روزم رو ساختی.", intent: "gratitude" },
        { text: "Thank you! That is kind.", fa: "ممنون! خیلی مهربانانه بود.", intent: "repeat" },
        { text: "Where did you buy that winter jacket?", fa: "اون کاپشن زمستونی رو از کجا خریدی؟", intent: "unrelated_question" },
        { text: "I already knew that, obviously.", fa: "خودم می‌دونستم، معلومه خب.", intent: "dismissive" }
      ]
    },
    build: {
      promptFa: "امروز احساس اعتمادبه‌نفس و آمادگی دارم.",
      baseWords: ["I", "feel", "confident", "and", "ready", "today"],
      distractorWords: ["scared", "weather", "slowly"],
      validPatterns: [
        ["I", "feel", "confident", "and", "ready", "today"],
        ["Today", "I", "feel", "confident", "and", "ready"],
        ["I", "feel", "ready", "and", "confident", "today"],
        ["Today", "I", "feel", "ready", "and", "confident"]
      ]
    },
    twist: {
      scenario: "دوستت بهت می‌گه ارائه‌ات در جلسه واقعاً مسلط و الهام‌بخش بود. چطور تشکر می‌کنی و این بازخورد خوب رو می‌پذیری؟",
      correctIntent: "gratitude",
      options: [
        { text: "Thanks a lot, that truly means so much to me.", fa: "خیلی ممنون، این حرفت واقعاً برام بسیار ارزشمنده.", intent: "gratitude" },
        { text: "I like your style.", fa: "از استایلت خوشم می‌آید.", intent: "repeat" },
        { text: "Did it rain outside this morning?", fa: "امروز صبح بیرون بارون اومد؟", intent: "unrelated_question" },
        { text: "Whatever, anyone could have done that easily.", fa: "مهم نیست، هر کسی به سادگی می‌تونست انجامش بده.", intent: "dismissive" }
      ]
    }
  },
  {
    id: "dialogue_mood_checkin",
    scene: "حال‌و‌هوا",
    level: "B1",
    lines: [
      { who: "A", en: "What is your mood today?", fa: "امروز حال‌وهوایت چطوره؟" },
      { who: "B", en: "I feel calm and proud.", fa: "احساس آرامش و افتخار دارم." },
      { who: "A", en: "That is beautiful.", fa: "این خیلی قشنگه." }
    ],
    react: {
      scenario: "دوستت در مورد احساس درونی‌ات بعد از یک هفته پرکار می‌پرسه. چطور آرامش و حس رضایتت رو بیان می‌کنی؟",
      correctIntent: "positive_state",
      options: [
        { text: "I am finally relaxed and satisfied with my progress.", fa: "بالاخره احساس آرامش دارم و از پیشرفتم راضی‌ام.", intent: "positive_state" },
        { text: "I feel calm and proud.", fa: "احساس آرامش و افتخار دارم.", intent: "repeat" },
        { text: "What time does the city library close?", fa: "کتابخونه شهر ساعت چند بسته می‌شه؟", intent: "unrelated_question" },
        { text: "Why do you care how I feel anyway?", fa: "اصلاً به تو چه ربطی داره من چه حسی دارم؟", intent: "dismissive" }
      ]
    },
    build: {
      promptFa: "دوست من امروز آرام و مهربان است.",
      baseWords: ["My", "friend", "is", "calm", "and", "kind", "today"],
      distractorWords: ["car", "crying", "loud"],
      validPatterns: [
        ["My", "friend", "is", "calm", "and", "kind", "today"],
        ["Today", "my", "friend", "is", "calm", "and", "kind"],
        ["My", "friend", "is", "kind", "and", "calm", "today"],
        ["Today", "my", "friend", "is", "kind", "and", "calm"]
      ]
    },
    twist: {
      scenario: "بعد از اعلام نمرات یک آزمون دشوار، مشاورت از حس و حالت می‌پرسه. چطور آرامش و رضایت درونی‌ات از تلاش انجام شده رو توضیح می‌دی؟",
      correctIntent: "positive_state",
      options: [
        { text: "I gave my best effort, so I feel genuinely content.", fa: "تمام تلاشم رو به کار بستم، به همین خاطر قلباً حس آرامش و رضایت دارم.", intent: "positive_state" },
        { text: "That is beautiful.", fa: "این خیلی قشنگه.", intent: "repeat" },
        { text: "Do you know when the bus arrives?", fa: "می‌دونی اتوبوس کی می‌رسه؟", intent: "unrelated_question" },
        { text: "Test scores mean nothing in real life.", fa: "نمرات آزمون در زندگی واقعی هیچ ارزشی ندارن.", intent: "dismissive" }
      ]
    }
  },
  {
    id: "dialogue_collaborative_feedback",
    scene: "کار گروهی",
    level: "B2",
    lines: [
      { who: "A", en: "We need to revise our strategy for this project.", fa: "باید استراتژی‌مان را برای این پروژه بازبینی کنیم." },
      { who: "B", en: "I agree, we should streamline our main priorities.", fa: "موافقم، باید اولویت‌های اصلی‌مان را ساده‌تر و هدفمند کنیم." },
      { who: "A", en: "Let's focus on practical results.", fa: "بیایید روی نتایج عملی تمرکز کنیم." }
    ],
    react: {
      scenario: "هم‌تیمی‌ات پیشنهاد میده برای جلوگیری از اتلاف وقت، روی دو هدف اصلی تمرکز کنید. چطور حرفه‌ای و با موافقت سازنده پاسخ میدی؟",
      correctIntent: "constructive_agreement",
      options: [
        { text: "That makes total sense, it will keep our efforts focused.", fa: "کاملاً منطقیه، این کار باعث میشه تلاشمون متمرکز باقی بمونه.", intent: "constructive_agreement" },
        { text: "Let's focus on practical results.", fa: "بیایید روی نتایج عملی تمرکز کنیم.", intent: "repeat" },
        { text: "Can you email me the meeting room number?", fa: "می‌تونی شماره اتاق جلسه رو برام ایمیل کنی؟", intent: "unrelated_question" },
        { text: "Do whatever you want, I have other things to do.", fa: "هر کاری می‌خواهی بکن، من کارهای دیگه‌ای دارم.", intent: "dismissive" }
      ]
    },
    build: {
      promptFa: "ما می‌توانیم اولویت‌های اصلی را به سادگی بازبینی کنیم.",
      baseWords: ["We", "can", "revise", "the", "main", "priorities", "easily"],
      distractorWords: ["dinner", "yellow", "slowly"],
      validPatterns: [
        ["We", "can", "revise", "the", "main", "priorities", "easily"],
        ["We", "can", "easily", "revise", "the", "main", "priorities"]
      ]
    },
    twist: {
      scenario: "مدیر پروژه پیشنهاد تغییر زمان تحویل فاز اول را می‌دهد تا کیفیت کارها تضمین شود. چطور موافقت سازنده و همراهی حرفه‌ای خود را اعلام می‌کنی؟",
      correctIntent: "constructive_agreement",
      options: [
        { text: "I agree with that adjustment, quality should always come first.", fa: "با این تغییر موافقم، کیفیت باید همیشه اولویت اول باشه.", intent: "constructive_agreement" },
        { text: "We need to revise our strategy for this project.", fa: "باید استراتژی‌مان را برای این پروژه بازبینی کنیم.", intent: "repeat" },
        { text: "Where did you leave your notebook?", fa: "دفترچه‌ات را کجا جا گذاشتی؟", intent: "unrelated_question" },
        { text: "Your planning is always completely disorganized.", fa: "برنامه‌ریزی شما همیشه کاملاً آشفته و بی‌نظم است.", intent: "dismissive" }
      ]
    }
  }
];

var dialogueIndex = 0;
var dialogueScores = { react: 0, build: 0, twist: 0 };
var dialogueCompleted = { react: false, build: false, twist: false };
var currentSentenceTokens = [];
var currentWordBank = [];
var currentCategoryKey = "everyday";
var appOrigin = null;
var WORDS = CATEGORIES[currentCategoryKey].words;
var PROGRESS_KEY = "lughatyar_progress_v1";
var LEARNING_PATH_KEY = "lughatyar_learning_path_v1";

function isPlainObject(value) {
  return value && typeof value === "object" && !Array.isArray(value);
}

var PV_OLD_CAT_TO_NEW_CAT = {
  pvClothes: "pv_b1_clothes",
  pvKitchen: "pv_b1_home",
  pvCleaning: "pv_b1_home",
  pvAppliances: "pv_b1_routine",
  pvRoutine: "pv_b1_routine",
  pvSocial: "pv_b1_social",
  pvWork: "pv_b1_work",
  pvCommunication: "pv_b1_social",
  pvChallenges: "pv_b2_challenges"
};

var PV_WORD_MIGRATION_MAP = {
  "put_on": {
    "oldCat": "pvClothes",
    "newCat": "pv_a1"
  },
  "take_off": {
    "oldCat": "pvClothes",
    "newCat": "pv_a1"
  },
  "zip_up": {
    "oldCat": "pvClothes",
    "newCat": "pv_a2_social"
  },
  "button_up": {
    "oldCat": "pvClothes",
    "newCat": "pv_a2_social"
  },
  "slip_on": {
    "oldCat": "pvClothes",
    "newCat": "pv_b1_clothes"
  },
  "roll_up": {
    "oldCat": "pvClothes",
    "newCat": "pv_b1_clothes"
  },
  "buckle_up": {
    "oldCat": "pvClothes",
    "newCat": "pv_b1_clothes"
  },
  "dress_up": {
    "oldCat": "pvClothes",
    "newCat": "pv_a2_social"
  },
  "grow_out_of": {
    "oldCat": "pvClothes",
    "newCat": "pv_b1_clothes"
  },
  "grow_into": {
    "oldCat": "pvClothes",
    "newCat": "pv_b1_clothes"
  },
  "heat_up": {
    "oldCat": "pvKitchen",
    "newCat": "pv_a2_home"
  },
  "pour_out": {
    "oldCat": "pvKitchen",
    "newCat": "pv_a2_home"
  },
  "twist_off": {
    "oldCat": "pvKitchen",
    "newCat": "pv_b1_home"
  },
  "screw_on": {
    "oldCat": "pvKitchen",
    "newCat": "pv_b1_home"
  },
  "pop_open": {
    "oldCat": "pvKitchen",
    "newCat": "pv_b1_home"
  },
  "rinse_off": {
    "oldCat": "pvKitchen",
    "newCat": "pv_b1_home"
  },
  "wipe_down": {
    "oldCat": "pvCleaning",
    "newCat": "pv_b1_home"
  },
  "put_away": {
    "oldCat": "pvCleaning",
    "newCat": "pv_a2_home"
  },
  "throw_away": {
    "oldCat": "pvCleaning",
    "newCat": "pv_a2_home"
  },
  "take_out": {
    "oldCat": "pvCleaning",
    "newCat": "pv_a2_home"
  },
  "soak_up": {
    "oldCat": "pvCleaning",
    "newCat": "pv_b1_home"
  },
  "tear_off": {
    "oldCat": "pvCleaning",
    "newCat": "pv_b1_home"
  },
  "fold_up": {
    "oldCat": "pvCleaning",
    "newCat": "pv_b1_home"
  },
  "plug_in": {
    "oldCat": "pvAppliances",
    "newCat": "pv_a2_home"
  },
  "turn_on": {
    "oldCat": "pvAppliances",
    "newCat": "pv_a1"
  },
  "turn_off": {
    "oldCat": "pvAppliances",
    "newCat": "pv_a1"
  },
  "turn_up": {
    "oldCat": "pvAppliances",
    "newCat": "pv_a2_home"
  },
  "turn_down": {
    "oldCat": "pvAppliances",
    "newCat": "pv_a2_home"
  },
  "cut_off": {
    "oldCat": "pvAppliances",
    "newCat": "pv_b1_routine"
  },
  "air_dry": {
    "oldCat": "pvAppliances",
    "newCat": "pv_b1_routine"
  },
  "roll_down": {
    "oldCat": "pvAppliances",
    "newCat": "pv_b1_routine"
  },
  "wake_up": {
    "oldCat": "pvRoutine",
    "newCat": "pv_a1"
  },
  "crack_open": {
    "oldCat": "pvRoutine",
    "newCat": "pv_b2_social"
  },
  "tuck_in": {
    "oldCat": "pvRoutine",
    "newCat": "pv_b1_routine"
  },
  "hang_up": {
    "oldCat": "pvRoutine",
    "newCat": "pv_a2_home"
  },
  "kick_off": {
    "oldCat": "pvRoutine",
    "newCat": "pv_b1_routine"
  },
  "lock_up": {
    "oldCat": "pvRoutine",
    "newCat": "pv_b1_routine"
  },
  "prop_up": {
    "oldCat": "pvRoutine",
    "newCat": "pv_b2_social"
  },
  "kick_back": {
    "oldCat": "pvRoutine",
    "newCat": "pv_b2_social"
  },
  "freshen_up": {
    "oldCat": "pvRoutine",
    "newCat": "pv_b1_routine"
  },
  "fill_up": {
    "oldCat": "pvRoutine",
    "newCat": "pv_b1_routine"
  },
  "ask_out": {
    "oldCat": "pvSocial",
    "newCat": "pv_b1_social"
  },
  "get_together": {
    "oldCat": "pvSocial",
    "newCat": "pv_a2_social"
  },
  "look_up_to": {
    "oldCat": "pvSocial",
    "newCat": "pv_b2_social"
  },
  "let_down": {
    "oldCat": "pvSocial",
    "newCat": "pv_b1_social"
  },
  "count_on": {
    "oldCat": "pvSocial",
    "newCat": "pv_b1_social"
  },
  "cheer_up": {
    "oldCat": "pvSocial",
    "newCat": "pv_b1_social"
  },
  "cheer_on": {
    "oldCat": "pvSocial",
    "newCat": "pv_b2_social"
  },
  "grow_apart": {
    "oldCat": "pvSocial",
    "newCat": "pv_b2_social"
  },
  "bring_down": {
    "oldCat": "pvSocial",
    "newCat": "pv_b2_social"
  },
  "come_across_as": {
    "oldCat": "pvSocial",
    "newCat": "pv_b2_social"
  },
  "follow_up": {
    "oldCat": "pvWork",
    "newCat": "pv_b1_work"
  },
  "follow_through": {
    "oldCat": "pvWork",
    "newCat": "pv_b2_challenges"
  },
  "go_over": {
    "oldCat": "pvWork",
    "newCat": "pv_b1_work"
  },
  "point_out": {
    "oldCat": "pvWork",
    "newCat": "pv_b1_work"
  },
  "cross_off": {
    "oldCat": "pvWork",
    "newCat": "pv_b1_work"
  },
  "put_off": {
    "oldCat": "pvWork",
    "newCat": "pv_b1_work"
  },
  "drop_out": {
    "oldCat": "pvWork",
    "newCat": "pv_b2_challenges"
  },
  "do_over": {
    "oldCat": "pvWork",
    "newCat": "pv_b1_work"
  },
  "cut_out": {
    "oldCat": "pvWork",
    "newCat": "pv_b2_challenges"
  },
  "do_away_with": {
    "oldCat": "pvWork",
    "newCat": "pv_b2_challenges"
  },
  "call_back": {
    "oldCat": "pvCommunication",
    "newCat": "pv_a2_social"
  },
  "call_around": {
    "oldCat": "pvCommunication",
    "newCat": "pv_b1_social"
  },
  "ask_around": {
    "oldCat": "pvCommunication",
    "newCat": "pv_b1_social"
  },
  "get_across": {
    "oldCat": "pvCommunication",
    "newCat": "pv_b2_challenges"
  },
  "break_down_explain": {
    "oldCat": "pvCommunication",
    "newCat": "pv_b1_social"
  },
  "figure_out": {
    "oldCat": "pvCommunication",
    "newCat": "pv_b1_social"
  },
  "go_ahead": {
    "oldCat": "pvCommunication",
    "newCat": "pv_a2_social"
  },
  "give_away": {
    "oldCat": "pvCommunication",
    "newCat": "pv_b1_social"
  },
  "break_down_machine": {
    "oldCat": "pvChallenges",
    "newCat": "pv_b1_social"
  },
  "break_into": {
    "oldCat": "pvChallenges",
    "newCat": "pv_b2_challenges"
  },
  "break_out": {
    "oldCat": "pvChallenges",
    "newCat": "pv_b2_challenges"
  },
  "fall_through": {
    "oldCat": "pvChallenges",
    "newCat": "pv_b2_challenges"
  },
  "get_over": {
    "oldCat": "pvChallenges",
    "newCat": "pv_b1_social"
  },
  "get_away_with": {
    "oldCat": "pvChallenges",
    "newCat": "pv_b2_challenges"
  },
  "hold_back": {
    "oldCat": "pvChallenges",
    "newCat": "pv_b2_challenges"
  },
  "go_against": {
    "oldCat": "pvChallenges",
    "newCat": "pv_b2_challenges"
  }
};

function makeDefaultProgress() {
  return {
    words: {},
    days: {},
    pos: {},
    settings: {
      reminder: false,
      reminderTime: "20:00",
      sound: true,
      avatar: "student",
      theme: "default"
    },
    missions: null,
    quiz: {
      plays: 0,
      best: 0,
      byLevel: {
        A1: { plays: 0, best: 0 },
        A2: { plays: 0, best: 0 }
      }
    },
    appVersion: APP_VERSION
  };
}

function normalizeProgress(data) {
  var safe = makeDefaultProgress();
  if (isPlainObject(data)) {
    for (var key in data) {
      safe[key] = data[key];
    }
  }
  if (!isPlainObject(safe.words)) safe.words = {};
  if (!isPlainObject(safe.days)) safe.days = {};
  if (!isPlainObject(safe.pos)) safe.pos = {};
  if (!isPlainObject(safe.settings)) safe.settings = {};
  safe.settings.reminder = !!safe.settings.reminder;
  safe.settings.reminderTime = typeof safe.settings.reminderTime === "string" ? safe.settings.reminderTime : "20:00";
  if (safe.settings.sound === undefined) safe.settings.sound = true;
  if (typeof safe.settings.avatar !== "string") safe.settings.avatar = "student";
  safe.settings.theme = "default";
  var allowedAvatars = ["student", "flower", "star", "cat"];
  if (allowedAvatars.indexOf(safe.settings.avatar) === -1) {
    safe.settings.avatar = "student";
  }
  if (!isPlainObject(safe.quiz)) safe.quiz = { plays: 0, best: 0, byLevel: {} };
  if (!isPlainObject(safe.quiz.byLevel)) safe.quiz.byLevel = {};
  if (!isPlainObject(safe.quiz.byLevel.A1)) safe.quiz.byLevel.A1 = { plays: 0, best: 0 };
  if (!isPlainObject(safe.quiz.byLevel.A2)) safe.quiz.byLevel.A2 = { plays: 0, best: 0 };
  safe.appVersion = APP_VERSION;

  // Phrasal Verbs level-first migration: lossless mapping of legacy pv keys to new level-based keys
  if (isPlainObject(safe.words)) {
    for (var wId in PV_WORD_MIGRATION_MAP) {
      var mapItem = PV_WORD_MIGRATION_MAP[wId];
      var oldKey = mapItem.oldCat + "|" + wId;
      var oldKeySpace = mapItem.oldCat + "|" + wId.replace(/_/g, " ");
      var newKey = mapItem.newCat + "|" + wId;
      var existingRec = safe.words[oldKey] || safe.words[oldKeySpace];
      if (existingRec) {
        if (!safe.words[newKey]) {
          safe.words[newKey] = existingRec;
        }
      }
    }
  }
  if (isPlainObject(safe.pos)) {
    for (var oldCatKey in PV_OLD_CAT_TO_NEW_CAT) {
      if (safe.pos[oldCatKey] !== undefined) {
        var mappedNewCat = PV_OLD_CAT_TO_NEW_CAT[oldCatKey];
        if (safe.pos[mappedNewCat] === undefined) {
          safe.pos[mappedNewCat] = safe.pos[oldCatKey];
        }
      }
    }
  }
  return safe;
}

var _memStorage = {};
function safeStorageGet(key) {
  try {
    if (typeof window !== "undefined" && window.localStorage) {
      var val = window.localStorage.getItem(key);
      if (val !== null) return val;
    }
  } catch (e) { }
  return _memStorage.hasOwnProperty(key) ? _memStorage[key] : null;
}
function safeStorageSet(key, val) {
  var strVal = String(val);
  _memStorage[key] = strVal;
  try {
    if (typeof window !== "undefined" && window.localStorage) {
      window.localStorage.setItem(key, strVal);
    }
  } catch (e) { }
}
function safeStorageRemove(key) {
  delete _memStorage[key];
  try {
    if (typeof window !== "undefined" && window.localStorage) {
      window.localStorage.removeItem(key);
    }
  } catch (e) { }
}

var progress = normalizeProgress(null);
try {
  var rawProgress = safeStorageGet(PROGRESS_KEY);
  if (rawProgress) progress = normalizeProgress(JSON.parse(rawProgress));
} catch (e) {
  progress = normalizeProgress(null);
}

var AVATAR_OPTIONS = {
  student: { icon: "🧑‍🎓", name: "تمرکز بالا", note: "یادگیری متمرکز و هدفمند." },
  flower: { icon: "✨", name: "یادگیری خلاق", note: "روش یادگیری مناسب خودت را پیدا کن." },
  star: { icon: "🌍", name: "کشف و یادگیری", note: "هر لغت، یک مهارت جدید است." },
  cat: { icon: "🌿", name: "یادگیری متعادل", note: "با سرعت مناسب خودت ادامه بده." }
};

function applyPersonalTheme() {
  document.body.removeAttribute("data-theme");
  if (progress.settings) progress.settings.theme = "default";
}

function toEnglishDigits(s) { return String(s).replace(/[۰-۹]/g, function (d) { return "۰۱۲۳۴۵۶۷۸۹".indexOf(d); }); }
function toPersianDigits(n) {
  var p = ['۰', '۱', '۲', '۳', '۴', '۵', '۶', '۷', '۸', '۹'];
  return String(n).replace(/[0-9]/g, function (d) { return p[+d]; });
}

function syncPersonalizationUI() {
  if (!progress.settings) return;
  var avatarKey = progress.settings.avatar || "student";
  var avatar = AVATAR_OPTIONS[avatarKey] || AVATAR_OPTIONS.student;
  var avatarEl = document.getElementById("profileAvatar");
  var nameEl = document.getElementById("profileName");
  var noteEl = document.getElementById("profileCompanionNote");
  var avatarSub = document.getElementById("avatarSub");
  if (avatarEl) avatarEl.textContent = avatar.icon;
  if (nameEl) nameEl.textContent = avatar.name;
  if (noteEl) noteEl.textContent = avatar.note;
  if (avatarSub) avatarSub.textContent = avatar.name;
  var avatarBtns = document.querySelectorAll(".avatar-choice");
  for (var i = 0; i < avatarBtns.length; i++) {
    avatarBtns[i].classList.toggle("active", avatarBtns[i].getAttribute("data-avatar") === avatarKey);
  }
  applyPersonalTheme();
}

function syncReminderUI() {
  var reminderSwitch = document.getElementById("reminderSwitch");
  var reminderTime = document.getElementById("reminderTime");
  var reminderSub = document.getElementById("reminderSub");
  if (!reminderSwitch) return;
  reminderSwitch.checked = !!progress.settings.reminder;
  reminderTime.value = progress.settings.reminderTime;
  reminderTime.disabled = !progress.settings.reminder;
  reminderSub.textContent = progress.settings.reminder ? ("فعال • ساعت " + toPersianDigits(progress.settings.reminderTime)) : "غیرفعال";
}

function todayStr() {
  var d = new Date();
  var m = String(d.getMonth() + 1).padStart(2, "0");
  var day = String(d.getDate()).padStart(2, "0");
  return d.getFullYear() + "-" + m + "-" + day;
}

function saveProgress() {
  try {
    progress = normalizeProgress(progress);
    safeStorageSet(PROGRESS_KEY, JSON.stringify(progress));
  } catch (e) { }
}

function currentWordKey() { return (WORDS[idx].__cat || currentCategoryKey) + "|" + (WORDS[idx].id || WORDS[idx].word); }
var SRS_LADDER = [2, 4, 7, 15, 30];
function daysBetween(a, b) {
  return Math.round((new Date(b + "T00:00:00") - new Date(a + "T00:00:00")) / 86400000);
}

function dueWords() {
  var out = [];
  var today = todayStr();
  for (var cat in CATEGORIES) {
    if (cat.indexOf("__") === 0) continue;
    var ws = CATEGORIES[cat].words;
    for (var i = 0; i < ws.length; i++) {
      var w = ws[i];
      var rec = progress.words[cat + "|" + (w.id || w.word)];
      if (!rec || !rec.s) continue;
      if (rec.s === "u") { out.push({ w: w, cat: cat }); continue; }
      if (rec.s === "k" && rec.d) {
        var nextN = (rec.n || 1) + 1;
        var interval = SRS_LADDER[Math.min(nextN - 2, SRS_LADDER.length - 1)];
        if (daysBetween(rec.d, today) >= interval) out.push({ w: w, cat: cat });
      }
    }
  }
  return out;
}

function markWord(state) {
  var k = currentWordKey();
  var rec = progress.words[k] || { s: "", n: 0 };
  rec.s = state;
  rec.n = (rec.n || 0) + 1;
  rec.d = todayStr();
  progress.words[k] = rec;
  if (WORDS[idx] && WORDS[idx].oldCat) {
    progress.words[WORDS[idx].oldCat + "|" + (WORDS[idx].id || WORDS[idx].word)] = rec;
  }
  trackMissionWord(state);
  saveProgress();
  updateMarkUI();
  updateTileProgress();
  updateVocabularyA1Progress();
  renderDailyMissions();
  renderAchievements();
}

function knownCount(catKey) {
  var c = 0, ws = CATEGORIES[catKey] ? CATEGORIES[catKey].words : [];
  for (var i = 0; i < ws.length; i++) {
    var id = ws[i].id || ws[i].word;
    var r = progress.words[catKey + "|" + id];
    if (!r && ws[i].oldCat) {
      r = progress.words[ws[i].oldCat + "|" + id];
    }
    if (r && r.s === "k") c++;
  }
  return c;
}

function totalKnown() {
  var t = 0;
  for (var k in CATEGORIES) {
    if (k.indexOf("__") === 0) continue;
    t += knownCount(k);
  }
  return t;
}

function studyDays() { var n = 0; for (var d in progress.days) n++; return n; }

function ensureDailyMissions() {
  var today = todayStr();
  if (!progress.missions || progress.missions.date !== today) {
    progress.missions = { date: today, words: 0, reviews: 0, quizzes: 0 };
  }
  if (progress.missions.words === undefined) progress.missions.words = 0;
  if (progress.missions.reviews === undefined) progress.missions.reviews = 0;
  if (progress.missions.quizzes === undefined) progress.missions.quizzes = 0;
}

function missionPercent(value, target) {
  return Math.min(100, Math.round((value / target) * 100));
}

function renderDailyMissions() {
  var box = document.getElementById("dailyMissions");
  if (!box) return;
  ensureDailyMissions();
  var missions = [
    { key: "words", icon: "🌱", title: "۵ لغت تمرین کن", value: progress.missions.words, target: 5 },
    { key: "reviews", icon: "🔁", title: "۳ لغت را مرور کن", value: progress.missions.reviews, target: 3 },
    { key: "quizzes", icon: "🎮", title: "یک تمرین کوتاه انجام بده", value: progress.missions.quizzes, target: 1 }
  ];
  var html = "";
  var allDone = true;
  for (var i = 0; i < missions.length; i++) {
    var m = missions[i];
    var safeValue = Math.min(m.value || 0, m.target);
    var done = safeValue >= m.target;
    if (!done) allDone = false;
    var pct = missionPercent(safeValue, m.target);
    html += '<div class="mission-card ' + (done ? "done" : "") + '">' +
      '<div class="mission-icon">' + (done ? "✅" : m.icon) + '</div>' +
      '<div class="mission-info">' +
      '<div class="mission-title">' + m.title + '</div>' +
      '<div class="mission-track"><div class="mission-fill" style="width:' + pct + '%"></div></div>' +
      '</div><div class="mission-count">' + toPersianDigits(safeValue) + " / " + toPersianDigits(m.target) + '</div></div>';
  }
  box.innerHTML = html;
  var doneNote = document.getElementById("missionsDoneNote");
  if (doneNote) {
    doneNote.classList.toggle("show", allDone);
  }
}

function knownCountMany(keys) {
  var total = 0;
  for (var i = 0; i < keys.length; i++) {
    total += knownCount(keys[i]);
  }
  return total;
}

function updateVocabularyA1Progress() {
  var buttons = document.querySelectorAll("[data-vocab-category]");
  for (var i = 0; i < buttons.length; i++) {
    var btn = buttons[i];
    var key = btn.getAttribute("data-vocab-category");
    if (!key || !CATEGORIES[key] || !CATEGORIES[key].words) continue;
    var total = CATEGORIES[key].words.length;
    var pos = progress.pos && typeof progress.pos[key] === "number" ? progress.pos[key] : 0;
    var known = knownCount(key);
    var shown = Math.max(pos, known);
    if (shown > total) shown = total;
    var countEl = btn.querySelector(".category-count");
    var statusEl = btn.querySelector(".category-status");
    if (countEl) countEl.textContent = toPersianDigits(shown) + " از " + toPersianDigits(total) + " لغت";
    if (statusEl) {
      if (shown <= 0) statusEl.textContent = "شروع نشده";
      else if (shown >= total) statusEl.textContent = "کامل شده";
      else statusEl.textContent = "در حال یادگیری";
    }
    btn.classList.toggle("is-started", shown > 0 && shown < total);
    btn.classList.toggle("is-complete", shown >= total && total > 0);
  }
}

function updateProfileLevelBadge() {
  var el = document.getElementById("profileLevel");
  if (!el) return;
  var a2Known = knownCountMany(["a2everyday", "a2travel", "a2food", "a2work", "a2Kitchen", "a2Bathroom", "a2Car"]);
  el.textContent = a2Known > 0 ? "A2" : "A1";
}

function renderAchievements() {
  var box = document.getElementById("achievementBadges");
  if (!box) return;
  var a2Known = knownCountMany(["a2everyday", "a2travel", "a2food", "a2work", "a2Kitchen", "a2Bathroom", "a2Car"]);
  var idiomKnown = knownCountMany(["idiomEveryday", "idiomFeelings", "idiomEffort", "idiomBehavior"]);
  var badges = [
    { icon: "🌱", label: "شروع مسیر", unlocked: knownCount("everyday") > 0 },
    { icon: "✈️", label: "یادگیرنده فعال", unlocked: knownCount("travel") > 0 },
    { icon: "🍓", label: "گسترش واژگان", unlocked: knownCount("food") > 0 },
    { icon: "💼", label: "پیشرفت پیوسته", unlocked: knownCount("work") > 0 },
    { icon: "🎓", label: "ورود به A2", unlocked: a2Known > 0 },
    { icon: "💬", label: "آمادگی مکالمه", unlocked: idiomKnown > 0 }
  ];
  var html = "";
  for (var i = 0; i < badges.length; i++) {
    var b = badges[i];
    html += '<div class="badge-item"><div class="hex-badge ' + (b.unlocked ? "unlocked" : "locked") + '">' +
      (b.unlocked ? b.icon : "🔒") + '</div><span class="badge-label">' + b.label + '</span></div>';
  }
  box.innerHTML = html;
  updateProfileLevelBadge();
}

function trackMissionWord(state) {
  ensureDailyMissions();
  if (state === "k" || state === "u") {
    progress.missions.words = Math.min((progress.missions.words || 0) + 1, 5);
  }
  if (currentCategoryKey === "__review" || currentCategoryKey === "__today") {
    progress.missions.reviews = Math.min((progress.missions.reviews || 0) + 1, 3);
  }
}

function trackMissionQuiz() {
  ensureDailyMissions();
  progress.missions.quizzes = Math.min(progress.missions.quizzes + 1, 1);
}

function updateMarkUI() {
  var rec = progress.words[currentWordKey()];
  if (!rec && WORDS[idx] && WORDS[idx].oldCat) {
    rec = progress.words[WORDS[idx].oldCat + "|" + (WORDS[idx].id || WORDS[idx].word)];
  }
  var knownBtn = document.getElementById("knownBtn");
  var unknownBtn = document.getElementById("unknownBtn");
  if (knownBtn) knownBtn.classList.toggle("active", !!(rec && rec.s === "k"));
  if (unknownBtn) unknownBtn.classList.toggle("active", !!(rec && rec.s === "u"));
}

function updateTileProgress() {
  var subMap = {
    idiomEveryday: "idiomMetaEveryday",
    idiomFeelings: "idiomMetaFeelings",
    idiomEffort: "idiomMetaEffort",
    idiomBehavior: "idiomMetaBehavior",
    pv_a1: "pvMetaA1",
    pv_a2_home: "pvMetaA2Home",
    pv_a2_social: "pvMetaA2Social",
    pv_b1_clothes: "pvMetaB1Clothes",
    pv_b1_home: "pvMetaB1Home",
    pv_b1_routine: "pvMetaB1Routine",
    pv_b1_work: "pvMetaB1Work",
    pv_b1_social: "pvMetaB1Social",
    pv_b2_social: "pvMetaB2Social",
    pv_b2_challenges: "pvMetaB2Challenges",
    pv_a2_transport: "pvMetaA2Transport",
    pv_a2_movement: "pvMetaA2Movement",
    pv_a2_objects: "pvMetaA2Objects",
    pv_b1_food: "pvMetaB1Food",
    pv_b1_communication: "pvMetaB1Communication",
    pv_b1_progress: "pvMetaB1Progress",
    pv_b1_changes: "pvMetaB1Changes",
    pv_b2_discourse: "pvMetaB2Discourse",
    pv_b2_wellbeing: "pvMetaB2Wellbeing",
    pv_b2_endeavor: "pvMetaB2Endeavor",
    pv_b2_situations: "pvMetaB2Situations",
    a2everyday: "a2MetaEveryday",
    a2travel: "a2MetaTravel",
    a2food: "a2MetaFood",
    a2work: "a2MetaWork",
    a2Kitchen: "a2MetaKitchen",
    a2Bathroom: "a2MetaBathroom",
    a2Car: "a2MetaCar",
    everyday: "a1MetaEveryday",
    travel: "a1MetaTravel",
    food: "a1MetaFood",
    work: "a1MetaWork",
    kitchen: "a1MetaKitchen",
    bathroom: "a1MetaBathroom",
    car: "a1MetaCar",
    teenLife: "a1MetaTeenLife"
  };
  for (var skey in subMap) {
    var sel = document.getElementById(subMap[skey]);
    if (sel && CATEGORIES[skey]) {
      var stotal = CATEGORIES[skey].words.length;
      var spct = Math.round(knownCount(skey) / stotal * 100);
      var unit = (skey.indexOf("idiom") === 0) ? " اصطلاح" : (skey.indexOf("pv") === 0) ? " فعل" : " لغت";
      sel.textContent = toPersianDigits(stotal) + unit + " • " + toPersianDigits(spct) + "٪";
    }
  }

  // Update Phrasal Verbs level status indicators on screenPhrasalLevels
  var pvLevels = {
    A1: ["pv_a1"],
    A2: ["pv_a2_home", "pv_a2_social", "pv_a2_transport", "pv_a2_movement", "pv_a2_objects"],
    B1: ["pv_b1_clothes", "pv_b1_home", "pv_b1_routine", "pv_b1_work", "pv_b1_social", "pv_b1_food", "pv_b1_communication", "pv_b1_progress", "pv_b1_changes"],
    B2: ["pv_b2_social", "pv_b2_challenges", "pv_b2_discourse", "pv_b2_wellbeing", "pv_b2_endeavor", "pv_b2_situations"]
  };
  for (var plvl in pvLevels) {
    var pstatEl = document.getElementById("phrasalLevel" + plvl + "Status");
    if (pstatEl) {
      var plvlTotal = 0, plvlKnown = 0;
      var pcatList = pvLevels[plvl];
      for (var pci = 0; pci < pcatList.length; pci++) {
        if (CATEGORIES[pcatList[pci]]) {
          plvlTotal += CATEGORIES[pcatList[pci]].words.length;
          plvlKnown += knownCount(pcatList[pci]);
        }
      }
      if (plvlTotal > 0) {
        var ppct = Math.round(plvlKnown / plvlTotal * 100);
        pstatEl.textContent = ppct > 0 ? (toPersianDigits(ppct) + "٪") : (plvl === "A1" ? "شروع" : "باز");
      }
    }
  }
}

var CATEGORY = CATEGORIES[currentCategoryKey].name;
var idx = 0;
var chipColors = ["#FFE1E7", "#E1F3EA", "#FFF3D6", "#E3F9E5", "#FFF6D6", "#FFEFB3"];

var card = document.getElementById("card");
var iconChip = document.getElementById("iconChip");
var iconFront = document.getElementById("iconFront");
var wordFront = document.getElementById("wordFront");
var meaningBack = document.getElementById("meaningBack");
var infoBtn = document.getElementById("infoBtn");
var screenExamples = document.getElementById("screenExamples");
var screenIdioms = document.getElementById("screenIdioms");
var screenPhrasalLevels = document.getElementById("screenPhrasalLevels") || document.getElementById("screenPhrasalVerbs");
var screenPhrasalA1 = document.getElementById("screenPhrasalA1");
var screenPhrasalA2 = document.getElementById("screenPhrasalA2");
var screenPhrasalB1 = document.getElementById("screenPhrasalB1");
var screenPhrasalB2 = document.getElementById("screenPhrasalB2");
var screenPhrasalVerbs = screenPhrasalLevels;
var examplesWordTitle = document.getElementById("examplesWordTitle");
var examplesList = document.getElementById("examplesList");
var backFromExamplesBtn = document.getElementById("backFromExamplesBtn");
var counter = document.getElementById("counter");
var progressFill = document.getElementById("progressFill");
var prevBtn = document.getElementById("prevBtn");
var nextBtn = document.getElementById("nextBtn");
var speakBtn = document.getElementById("speakBtn");
var cardLevelBadge = document.getElementById("cardLevelBadge");
var levelBadge = document.getElementById("levelBadge");
var categoryBadge = document.getElementById("categoryBadge");
var streakCount = document.getElementById("streakCount");
var celebrateOverlay = document.getElementById("celebrateOverlay");
var restartBtn = document.getElementById("restartBtn");

var confettiColors = ["#0E7A5C", "#013E37", "#FFB86B", "#E8973E", "#FFF1DE", "#E1F3EA", "#FFFFFF"];

function clearConfetti() {
  var old = celebrateOverlay.querySelector(".confetti-container");
  if (old && old.parentNode) old.parentNode.removeChild(old);
}

function launchConfetti() {
  clearConfetti();
  var container = document.createElement("div");
  container.className = "confetti-container";
  for (var i = 0; i < 32; i++) {
    var piece = document.createElement("span");
    piece.className = "confetti-piece";
    piece.style.left = Math.random() * 100 + "%";
    piece.style.background = confettiColors[i % confettiColors.length];
    piece.style.animationDelay = Math.random() * 0.35 + "s";
    piece.style.animationDuration = (1.5 + Math.random() * 1) + "s";
    piece.style.setProperty("--drift", Math.round(Math.random() * 100 - 50) + "px");
    piece.style.setProperty("--rot", Math.round(320 + Math.random() * 440) + "deg");
    container.appendChild(piece);
  }
  celebrateOverlay.appendChild(container);
  setTimeout(clearConfetti, 2700);
}

function updateStreak() {
  try {
    var today = new Date();
    var todayStr = today.getFullYear() + "-" + (today.getMonth() + 1) + "-" + today.getDate();
    var lastDate = safeStorageGet("lughatyar_lastDate");
    var streak = parseInt(safeStorageGet("lughatyar_streak") || "0", 10);
    if (lastDate !== todayStr) {
      var yesterday = new Date(today);
      yesterday.setDate(today.getDate() - 1);
      var yesterdayStr = yesterday.getFullYear() + "-" + (yesterday.getMonth() + 1) + "-" + yesterday.getDate();
      streak = (lastDate === yesterdayStr) ? streak + 1 : 1;
      safeStorageSet("lughatyar_streak", String(streak));
      safeStorageSet("lughatyar_lastDate", todayStr);
    }
    if (streakCount) streakCount.textContent = toPersianDigits(streak || 1);
    var profileStreakEl = document.getElementById("profileStreak");
    if (profileStreakEl) profileStreakEl.textContent = toPersianDigits(streak || 1);
  } catch (err) {
    if (streakCount) streakCount.textContent = "۱";
  }
}

function levelOfCategory(key) {
  if (!key) return "A1";
  if (CATEGORIES[key] && CATEGORIES[key].level) return CATEGORIES[key].level;
  var cleanKey = String(key).replace(/\s+/g, '');
  if (cleanKey.indexOf("idiom") === 0) return "اصطلاحات";
  if (cleanKey.indexOf("pv") === 0 || cleanKey.indexOf("phrasal") === 0) {
    if (cleanKey.indexOf("pv_a1") === 0) return "A1";
    if (cleanKey.indexOf("pv_a2") === 0) return "A2";
    if (cleanKey.indexOf("pv_b1") === 0) return "B1";
    if (cleanKey.indexOf("pv_b2") === 0) return "B2";
    return "افعال ترکیبی";
  }
  return (cleanKey.indexOf("a2") === 0) ? "A2" : "A1";
}

function updateLevelBadge() {
  var w = WORDS[idx];
  var key = (w && w.__cat) ? w.__cat : currentCategoryKey;
  var badge = document.getElementById("levelBadge");
  if (badge) {
    if (w && w.level) {
      badge.textContent = w.level;
    } else {
      badge.textContent = levelOfCategory(key);
    }
  }
}

function render() {
  var w = WORDS[idx];
  if (!w) return;
  card.classList.add("no-anim");
  card.classList.remove("flipped");
  void card.offsetWidth;
  iconChip.style.background = chipColors[idx % chipColors.length];
  iconFront.textContent = w.icon || "📘";
  wordFront.textContent = w.word;
  wordFront.classList.toggle("phrase", w.word.length > 12);
  wordFront.classList.toggle("phrase-xl", w.word.length > 22);
  meaningBack.textContent = w.meaning;
  if (cardLevelBadge) {
    if (w && w.level) {
      cardLevelBadge.textContent = w.level;
      cardLevelBadge.classList.remove("hidden");
    } else {
      cardLevelBadge.classList.add("hidden");
    }
  }
  var cardThemeTag = document.getElementById("cardThemeTag");
  if (cardThemeTag) {
    if (w && w.theme) {
      cardThemeTag.textContent = "از دسته‌ی " + w.theme;
      cardThemeTag.classList.remove("hidden");
    } else {
      cardThemeTag.classList.add("hidden");
    }
  }
  updateLevelBadge();
  updateMarkUI();
  if (document.getElementById("screenApp").classList.contains("active")) {
    progress.pos[currentCategoryKey] = idx;
    saveLearningPath(currentCategoryKey, idx);
  }
  progress.days[todayStr()] = 1;
  saveProgress();
  if (w.examples && w.examples.length) infoBtn.classList.remove("hidden");
  else infoBtn.classList.add("hidden");
  counter.textContent = toPersianDigits(idx + 1) + " / " + toPersianDigits(WORDS.length);
  progressFill.style.width = (((idx + 1) / WORDS.length) * 100) + "%";
  prevBtn.disabled = idx === 0;
  nextBtn.textContent = (idx === WORDS.length - 1) ? "دوره تمام شد" : "بعدی";
  requestAnimationFrame(function () {
    requestAnimationFrame(function () {
      card.classList.remove("no-anim");
    });
  });
}

if (card) {
  card.addEventListener("click", function (e) {
    if (e.target === speakBtn || e.target === infoBtn) return;
    if (e.target.closest && e.target.closest(".mark-btn")) return;
    card.classList.toggle("flipped");
  });
}

function escapeHtml(str) {
  return String(str).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
}

function underlineWord(sentence, word) {
  var safeSentence = escapeHtml(sentence);
  var re = new RegExp("(\\b" + word.replace(/[.*+?^${}()|[\\]\\\\]/g, "\\$&") + "\\w*\\b)", "gi");
  return safeSentence.replace(re, "<u>$1</u>");
}

if (infoBtn) {
  infoBtn.addEventListener("click", function (e) {
    e.stopPropagation();
    var w = WORDS[idx];
    if (!w.examples || !w.examples.length) return;
    examplesWordTitle.textContent = w.word;
    document.getElementById("examplesSubTitle").textContent = (currentCategoryKey.indexOf("idiom") === 0) ? "چند مثال واقعی از کاربرد این اصطلاح" : "چند مثال واقعی از کاربرد این کلمه";
    var html = "";
    for (var i = 0; i < w.examples.length; i++) {
      var ex = w.examples[i];
      html += '<div class="example-card"><div class="en">' + underlineWord(ex.en, w.word) + '</div><div class="fa">' + escapeHtml(ex.fa) + '</div></div>';
    }
    examplesList.innerHTML = html;
    showScreen("examples");
  });
}

if (backFromExamplesBtn) {
  backFromExamplesBtn.addEventListener("click", function () { showScreen("app"); });
}

function speakWord(text) {
  if (!progress.settings || progress.settings.sound === false) return;
  try {
    if (!("speechSynthesis" in window)) return;
    speechSynthesis.cancel();
    var u = new SpeechSynthesisUtterance(text);
    u.lang = "en-US";
    u.rate = 0.9;
    speechSynthesis.speak(u);
  } catch (e) { }
}

if (speakBtn) {
  speakBtn.addEventListener("click", function (e) {
    e.stopPropagation();
    speakWord(WORDS[idx].word);
  });
}

if (prevBtn) {
  prevBtn.addEventListener("click", function () {
    if (idx > 0) { idx--; render(); }
  });
}

var knownBtnEl = document.getElementById("knownBtn");
if (knownBtnEl) knownBtnEl.addEventListener("click", function (e) { e.stopPropagation(); markWord("k"); });
var unknownBtnEl = document.getElementById("unknownBtn");
if (unknownBtnEl) unknownBtnEl.addEventListener("click", function (e) { e.stopPropagation(); markWord("u"); });

if (nextBtn) {
  nextBtn.addEventListener("click", function () {
    if (idx < WORDS.length - 1) { idx++; render(); }
    else {
      var celebrateText = document.getElementById("celebrateText");
      if (celebrateText) {
        if (currentCategoryKey === "__review") {
          celebrateText.textContent = toPersianDigits(WORDS.length) + " لغت رو با موفقیت مرور کردی.";
        } else {
          celebrateText.textContent = toPersianDigits(WORDS.length) + " لغت از دسته «" + CATEGORY + "» رو کامل کردی.";
        }
      }
      celebrateOverlay.classList.add("show");
      launchConfetti();
    }
  });
}

if (restartBtn) {
  restartBtn.addEventListener("click", function () {
    celebrateOverlay.classList.remove("show");
    clearConfetti();
    idx = 0;
    render();
  });
}

var touchStartX = null;
if (card) {
  card.addEventListener("touchstart", function (e) { touchStartX = e.changedTouches[0].clientX; });
  card.addEventListener("touchend", function (e) {
    if (touchStartX === null) return;
    var dx = e.changedTouches[0].clientX - touchStartX;
    if (Math.abs(dx) > 50) {
      if (dx < 0 && idx < WORDS.length - 1) { idx++; render(); }
      else if (dx > 0 && idx > 0) { idx--; render(); }
    }
    touchStartX = null;
  });
}

function setAppHeight() {
  var tg = (window.Telegram && window.Telegram.WebApp) ? window.Telegram.WebApp : null;
  var h = 0;
  if (tg && tg.viewportStableHeight) h = tg.viewportStableHeight;
  else if (tg && tg.viewportHeight) h = tg.viewportHeight;
  if (!h) h = window.innerHeight;
  if (h) document.documentElement.style.setProperty("--app-height", h + "px");
}

window.addEventListener("resize", setAppHeight);
window.addEventListener("orientationchange", function () { setTimeout(setAppHeight, 200); });
setAppHeight();

var screenLoading = document.getElementById("screenLoading");
var screenCategory = document.getElementById("screenCategory");
var screenVocabularyLevels = document.getElementById("screenVocabularyLevels");
var screenVocabularyA1 = document.getElementById("screenVocabularyA1");
var screenStories = document.getElementById("screenStories");
var categoryDrawer = document.getElementById("categoryDrawer");
var categoryDrawerOverlay = document.getElementById("categoryDrawerOverlay");
var screenApp = document.getElementById("screenApp");
var screenProfile = document.getElementById("screenProfile");
var screenSettings = document.getElementById("screenSettings");
var screenQuiz = document.getElementById("screenQuiz");
var screenA2 = document.getElementById("screenA2");
var screenDialogue = document.getElementById("screenDialogue");
var backToCategoryBtn = document.getElementById("backToCategoryBtn");

function faDayLetter(jsDay) { return ["ی", "د", "س", "چ", "پ", "ج", "ش"][jsDay]; }
function renderWeekChart() {
  var box = document.getElementById("weekChart");
  if (!box) return;
  box.classList.remove("grown");
  box.innerHTML = "";
  var counts = [];
  var max = 1;
  var today = new Date();
  for (var i = 6; i >= 0; i--) {
    var d = new Date(today.getFullYear(), today.getMonth(), today.getDate() - i);
    var key = d.getFullYear() + "-" + String(d.getMonth() + 1).padStart(2, "0") + "-" + String(d.getDate()).padStart(2, "0");
    var c = (progress.days && progress.days[key]) || 0;
    counts.push({ letter: faDayLetter(d.getDay()), count: c, isToday: i === 0 });
    if (c > max) max = c;
  }
  for (var k = 0; k < counts.length; k++) {
    var item = counts[k];
    var pct = item.count > 0 ? Math.max(8, Math.round(item.count / max * 100)) : 0;
    var bar = document.createElement("div");
    bar.className = "week-bar" + (item.isToday ? " today" : "");
    var track = document.createElement("div");
    track.className = "bar-track";
    var fill = document.createElement("div");
    fill.className = "bar-fill";
    fill.style.height = pct + "%";
    track.appendChild(fill);
    if (item.count > 0) {
      var val = document.createElement("span");
      val.className = "bar-value";
      val.style.bottom = "calc(" + pct + "% + 3px)";
      val.textContent = toPersianDigits(item.count);
      track.appendChild(val);
    }
    if (item.isToday && item.count > 0) {
      var dot = document.createElement("span");
      dot.className = "today-dot";
      dot.style.bottom = "calc(" + pct + "% + 1px)";
      track.appendChild(dot);
    }
    bar.appendChild(track);
    var lab = document.createElement("span");
    lab.textContent = item.letter;
    bar.appendChild(lab);
    box.appendChild(bar);
  }
  setTimeout(function () { box.classList.add("grown"); }, 60);
}

function countUp(el, target, duration) {
  if (!el) return;
  var startTime = null;
  function step(ts) {
    if (!startTime) startTime = ts;
    var p = Math.min(1, (ts - startTime) / duration);
    var v = Math.floor(p * target);
    el.textContent = toPersianDigits(v);
    if (p < 1) requestAnimationFrame(step);
    else el.textContent = toPersianDigits(target);
  }
  requestAnimationFrame(step);
}

function triggerProfileAnimations() {
  countUp(document.getElementById('profileStreak'), parseInt(toEnglishDigits(document.getElementById('profileStreak')?.textContent || "1"), 10) || 1, 800);
  countUp(document.getElementById('profileWords'), totalKnown(), 1000);
  countUp(document.getElementById('profileDays'), studyDays(), 900);
  renderWeekChart();
}

function readLearningPath() {
  try {
    var p = JSON.parse(safeStorageGet(LEARNING_PATH_KEY) || "null");
    if (p && p.category && PV_OLD_CAT_TO_NEW_CAT[p.category]) {
      p.category = PV_OLD_CAT_TO_NEW_CAT[p.category];
      if (CATEGORIES[p.category]) {
        p.total = CATEGORIES[p.category].words.length;
        if (p.index >= p.total) p.index = 0;
      }
    }
    return p;
  } catch (e) {
    return null;
  }
}

function saveLearningPath(category, index) {
  if (!category || category.indexOf("__") === 0) return;
  if (!CATEGORIES[category]) return;
  try {
    safeStorageSet(LEARNING_PATH_KEY, JSON.stringify({
      category: category,
      index: index || 0,
      total: CATEGORIES[category].words.length,
      updatedAt: todayStr()
    }));
  } catch (e) { }
}

function updateHomeDashboard() {
  var continueCard = document.getElementById("continueLearningCard");
  var continueTitle = document.getElementById("continueTitle");
  var continueMeta = document.getElementById("continueMeta");
  var path = readLearningPath();

  if (continueTitle && continueMeta) {
    if (path && path.category && CATEGORIES[path.category] && CATEGORIES[path.category].words) {
      var cat = CATEGORIES[path.category];
      var total = cat.words.length;
      var pos = progress.pos && typeof progress.pos[path.category] === "number" ? progress.pos[path.category] : path.index || 0;
      if (total && pos >= total) pos = 0;
      if (pos < 0) pos = 0;
      continueTitle.textContent = cat.name;
      continueMeta.textContent = total ? ("ادامه از لغت " + toPersianDigits(pos + 1) + " از " + toPersianDigits(total)) : "مسیر آماده ادامه است";
      if (continueCard) continueCard.classList.add("has-path");
    } else {
      continueTitle.textContent = "شروع اولین مسیر";
      continueMeta.textContent = "یک سطح و دسته را انتخاب کن";
      if (continueCard) continueCard.classList.remove("has-path");
    }
  }

  // Update Home Exercise Banners Meta
  var due = dueWords().length;
  var bannerReviewSub = document.getElementById("homeBannerReviewSub");
  if (bannerReviewSub) {
    if (due > 0) {
      bannerReviewSub.textContent = toPersianDigits(due) + " لغت آماده مرور";
    } else {
      var hasAnyStudied = false;
      for (var wk in progress.words) {
        if (progress.words[wk] && progress.words[wk].s) {
          hasAnyStudied = true;
          break;
        }
      }
      bannerReviewSub.textContent = hasAnyStudied ? "آماده مرور تقویتی • دوره لغت‌ها" : "لغت‌های رسیده به موعد مرور";
    }
  }

  var a1 = getQuizLevelStats("A1");
  var a2 = getQuizLevelStats("A2");
  var bannerQuizSub = document.getElementById("homeBannerQuizSub");
  if (bannerQuizSub) {
    bannerQuizSub.textContent = (a1.plays || a2.plays)
      ? ("۱۰ سؤال • رکورد A1: " + toPersianDigits(a1.best) + " | A2: " + toPersianDigits(a2.best))
      : "۱۰ سؤال چهارگزینه‌ای • انتخاب سطح A1 یا A2";
  }
}

function openCategoryDrawer() {
  if (!categoryDrawer) return;
  categoryDrawer.classList.add("open");
  categoryDrawer.setAttribute("aria-hidden", "false");
  if (categoryDrawerOverlay) categoryDrawerOverlay.classList.add("show");
}

function closeCategoryDrawer() {
  if (!categoryDrawer) return;
  categoryDrawer.classList.remove("open");
  categoryDrawer.setAttribute("aria-hidden", "true");
  if (categoryDrawerOverlay) categoryDrawerOverlay.classList.remove("show");
}

function showScreen(name) {
  if (name !== "category") closeCategoryDrawer();
  screenLoading?.classList.remove("active");
  screenCategory?.classList.remove("active");
  screenVocabularyLevels?.classList.remove("active");
  screenStories?.classList.remove("active");
  screenVocabularyA1?.classList.remove("active");
  screenApp?.classList.remove("active");
  screenProfile?.classList.remove("active");
  screenSettings?.classList.remove("active");
  screenExamples?.classList.remove("active");
  screenIdioms?.classList.remove("active");
  screenPhrasalLevels?.classList.remove("active");
  screenPhrasalA1?.classList.remove("active");
  screenPhrasalA2?.classList.remove("active");
  screenPhrasalB1?.classList.remove("active");
  screenPhrasalB2?.classList.remove("active");
  screenPhrasalVerbs?.classList.remove("active");
  screenQuiz?.classList.remove("active");
  screenA2?.classList.remove("active");
  screenDialogue?.classList.remove("active");

  if (name === "loading") screenLoading?.classList.add("active");
  if (name === "category") screenCategory?.classList.add("active");
  if (name === "vocabularyLevels") screenVocabularyLevels?.classList.add("active");
  if (name === "vocabularyA1") {
    screenVocabularyA1?.classList.add("active");
    updateTileProgress();
  }
  if (name === "stories") screenStories?.classList.add("active");
  if (name === "app") screenApp?.classList.add("active");
  if (name === "profile") screenProfile?.classList.add("active");
  if (name === "settings") screenSettings?.classList.add("active");
  if (name === "examples") screenExamples?.classList.add("active");
  if (name === "idioms") screenIdioms?.classList.add("active");
  if (name === "phrasalLevels" || name === "phrasalVerbs") {
    screenPhrasalLevels?.classList.add("active");
    updateTileProgress();
  }
  if (name === "phrasalA1") {
    screenPhrasalA1?.classList.add("active");
    updateTileProgress();
  }
  if (name === "phrasalA2") {
    screenPhrasalA2?.classList.add("active");
    updateTileProgress();
  }
  if (name === "phrasalB1") {
    screenPhrasalB1?.classList.add("active");
    updateTileProgress();
  }
  if (name === "phrasalB2") {
    screenPhrasalB2?.classList.add("active");
    updateTileProgress();
  }
  if (name === "quiz") screenQuiz?.classList.add("active");
  if (name === "a2") screenA2?.classList.add("active");
  if (name === "dialogue") {
    renderDialogue();
    screenDialogue?.classList.add("active");
  }

  if (name === "profile") {
    syncPersonalizationUI();
    renderDailyMissions();
    renderAchievements();
    triggerProfileAnimations();
  }
  if (name === "category") {
    updateTileProgress();
    updateHomeDashboard();
  }
  if (name === "a2") { updateTileProgress(); }

  var isCatSub = (name === "a2" || name === "vocabularyLevels" || name === "vocabularyA1" || name === "phrasalLevels" || name === "phrasalVerbs" || name === "phrasalA1" || name === "phrasalA2" || name === "phrasalB1" || name === "phrasalB2");
  document.body.setAttribute("data-active", isCatSub ? "category" : name);
  var navT = (name === "idioms" || isCatSub || name === "dialogue" || name === "stories" || name === "quiz") ? "category" : name;
  var allNavBtns = document.querySelectorAll("#sharedNav .nav-item");
  for (var nb = 0; nb < allNavBtns.length; nb++) {
    allNavBtns[nb].classList.toggle("active", allNavBtns[nb].getAttribute("data-target") === navT);
  }
}

function selectCategory(key, origin) {
  if (!CATEGORIES[key] || !CATEGORIES[key].words) return;
  closeCategoryDrawer();
  currentCategoryKey = key;
  appOrigin = origin || null;
  WORDS = CATEGORIES[key].words;
  CATEGORY = CATEGORIES[key].name;
  if (categoryBadge) categoryBadge.textContent = CATEGORY;
  idx = progress.pos[key] || 0;
  if (idx >= WORDS.length) idx = 0;
  saveLearningPath(key, idx);
  render();
  showScreen("app");
}

function startReviewSession() {
  var due = dueWords();
  if (!due.length) {
    // If no words are strictly due by SRS date, collect previously studied words
    var studied = [];
    for (var cat in CATEGORIES) {
      if (cat.indexOf("__") === 0) continue;
      var ws = CATEGORIES[cat].words;
      if (!ws) continue;
      for (var i = 0; i < ws.length; i++) {
        var w = ws[i];
        var rec = progress.words[cat + "|" + (w.id || w.word)];
        if (rec && rec.s) {
          studied.push({ w: w, cat: cat, s: rec.s, n: rec.n || 0 });
        }
      }
    }
    if (studied.length > 0) {
      // Prioritize words needing review (u), then least reviewed
      studied.sort(function (a, b) {
        if (a.s === "u" && b.s !== "u") return -1;
        if (b.s === "u" && a.s !== "u") return 1;
        return a.n - b.n;
      });
      due = studied.slice(0, 15);
    } else {
      // If 0 words have been marked yet anywhere (e.g. fresh launch in plain browser or file://),
      // provide a starter review set of 10 essential words so the feature runs reliably in any environment!
      var activePath = readLearningPath();
      var starterCatKey = (activePath && activePath.category && CATEGORIES[activePath.category]) ? activePath.category : "everyday";
      if (!CATEGORIES[starterCatKey] || !CATEGORIES[starterCatKey].words) starterCatKey = "everyday";
      var starterWords = (CATEGORIES[starterCatKey] && CATEGORIES[starterCatKey].words) ? CATEGORIES[starterCatKey].words.slice(0, 10) : [];
      due = starterWords.map(function (w) { return { w: w, cat: starterCatKey }; });
    }
  }
  if (!due.length) {
    var bannerReviewSub = document.getElementById("homeBannerReviewSub");
    if (bannerReviewSub) bannerReviewSub.textContent = "امروز همه‌چیز مرور شده 🎉";
    updateHomeDashboard();
    return;
  }
  CATEGORIES.__review = { name: "مرور امروز", words: due.map(function (x) { x.w.__cat = x.cat; return x.w; }) };
  selectCategory("__review", "home");
}

function getIntentFeedback(intent, isCorrect, correctIntent) {
  if (isCorrect) {
    if (intent === "encourage") return "آفرین! یک واکنش دلگرم‌کننده و همدلانه بدون تکرار مستقیم متن دیالوگ.";
    if (intent === "gratitude") return "بسیار عالی! قدردانی صمیمانه و متناسب با بازخورد دریافت شده.";
    if (intent === "positive_state") return "عالی! بیان طبیعی و مسلط حال خوب و حس رضایت درونی.";
    if (intent === "constructive_agreement") return "بسیار حرفه‌ای! توافق سازنده و تمرکز بر پیشبرد کار گروهی.";
    return "آفرین! پاسخی دقیق، طبیعی و هم‌راستا با هدف گفتگو.";
  }
  if (intent === "repeat") {
    return "توجه: این گزینه صرفاً تکرار عینی جمله‌ای از دیالوگ است! در مکالمه واقعی باید با کلمات خودت واکنش نشان بدهی.";
  }
  if (intent === "unrelated_question") {
    return "این گزینه یک سؤال کاملاً نامربوط است و فضای مکالمه را بر هم می‌زند.";
  }
  if (intent === "dismissive") {
    return "این پاسخ لحنی سرد، دلسردکننده یا دور از ادب دارد و مناسب یک ارتباط مثبت نیست.";
  }
  return "این پاسخ هدف مکالمه را برآورده نمی‌کند. گزینه مناسب‌تر را انتخاب کن.";
}

function updateDialogueSummary() {
  var data = TEEN_DIALOGUES[dialogueIndex] || TEEN_DIALOGUES[0];
  var statReact = document.getElementById("statReactScore");
  var statBuild = document.getElementById("statBuildScore");
  var statTwist = document.getElementById("statTwistScore");
  var statTotal = document.getElementById("statTotalScore");
  var statusEl = document.getElementById("dialogueSummaryStatus");
  var feedbackEl = document.getElementById("dialogueSummaryFeedback");

  var total = dialogueScores.react + dialogueScores.build + dialogueScores.twist;

  if (statReact) statReact.textContent = dialogueScores.react + "/30";
  if (statBuild) statBuild.textContent = dialogueScores.build + "/30";
  if (statTwist) statTwist.textContent = dialogueScores.twist + "/30";
  if (statTotal) statTotal.textContent = total + " XP";

  var allDone = dialogueCompleted.react && dialogueCompleted.build && dialogueCompleted.twist;
  if (statusEl) {
    statusEl.textContent = allDone ? "تکمیل شده" : "در حال انجام مراحل";
  }

  if (feedbackEl) {
    if (!dialogueCompleted.react && !dialogueCompleted.build && !dialogueCompleted.twist) {
      feedbackEl.textContent = "مراحل ۲ تا ۴ را برای ارزیابی مهارت گفتگو کامل کن.";
      feedbackEl.style.color = "var(--text-secondary)";
    } else if (total >= 80) {
      feedbackEl.textContent = "🔥 مکالمه‌ی عالی — تسلط بر اهداف کلامی، ساخت دقیق جمله و انتقال موفق به موقعیت جدید.";
      feedbackEl.style.color = "var(--text)";
    } else if (total >= 50) {
      feedbackEl.textContent = "👍 پیشرفت خوب — مسیر ارتباطی را متوجه شدی؛ با یک بار تکرار می‌توانی نمره کامل بگیری.";
      feedbackEl.style.color = "var(--text)";
    } else {
      feedbackEl.textContent = "🌱 تمرین ارزشمند — به کلمات اضافه و تفاوت اهداف کلامی دقت کن و دوباره تلاش کن.";
      feedbackEl.style.color = "var(--text-secondary)";
    }
  }

  try {
    var stored = {
      dialogueId: data.id || ("dialogue_" + dialogueIndex),
      scores: dialogueScores,
      total: total,
      timestamp: new Date().toISOString()
    };
    safeStorageSet("lughatyar_dialogue_v2_" + (data.id || dialogueIndex), JSON.stringify(stored));
  } catch (e) { }
}

function renderSentenceResult() {
  var resultEl = document.getElementById("sentenceResult");
  if (!resultEl) return;
  resultEl.innerHTML = "";
  if (currentSentenceTokens.length === 0) {
    var placeholder = document.createElement("span");
    placeholder.className = "sentence-result-placeholder";
    placeholder.textContent = "هنوز کلمه‌ای انتخاب نکرده‌ای.";
    resultEl.appendChild(placeholder);
    return;
  }
  for (var i = 0; i < currentSentenceTokens.length; i++) {
    (function (idx) {
      var token = currentSentenceTokens[idx];
      var chip = document.createElement("button");
      chip.type = "button";
      chip.className = "sentence-token-chip";
      chip.title = "برای حذف کلیک کنید";
      chip.textContent = token.word;
      chip.addEventListener("click", function () {
        removeSentenceToken(idx);
      });
      resultEl.appendChild(chip);
    })(i);
  }
}

function removeSentenceToken(tokenIdx) {
  var removed = currentSentenceTokens.splice(tokenIdx, 1)[0];
  if (removed) {
    for (var i = 0; i < currentWordBank.length; i++) {
      if (currentWordBank[i].id === removed.id) {
        currentWordBank[i].used = false;
        break;
      }
    }
    updateWordBankButtonsState();
    renderSentenceResult();
    var feedbackEl = document.getElementById("sentenceFeedback");
    if (feedbackEl) {
      feedbackEl.className = "sentence-feedback dialogue-feedback";
      feedbackEl.textContent = "";
    }
  }
}

function updateWordBankButtonsState() {
  var box = document.getElementById("sentenceWords");
  if (!box) return;
  var btns = box.querySelectorAll(".sentence-word-btn");
  for (var i = 0; i < btns.length; i++) {
    var btn = btns[i];
    var btnId = btn.getAttribute("data-word-id");
    var bankItem = currentWordBank.find(function (item) { return item.id === btnId; });
    if (bankItem && bankItem.used) {
      btn.classList.add("used");
    } else {
      btn.classList.remove("used");
    }
  }
}

function handleSentenceCheck() {
  var data = TEEN_DIALOGUES[dialogueIndex] || TEEN_DIALOGUES[0];
  var feedbackEl = document.getElementById("sentenceFeedback");
  if (!feedbackEl) return;

  if (currentSentenceTokens.length === 0) {
    feedbackEl.textContent = "ابتدا کلمات را برای ساخت جمله انتخاب کن.";
    feedbackEl.className = "sentence-feedback dialogue-feedback soft active";
    return;
  }

  var buildData = data.build || {};
  var userWords = currentSentenceTokens.map(function (t) { return t.word.toLowerCase(); });
  var validPatterns = buildData.validPatterns || [buildData.baseWords || []];
  var distractorWords = (buildData.distractorWords || []).map(function (w) { return w.toLowerCase(); });

  function checkPatternMatch(wordList) {
    for (var p = 0; p < validPatterns.length; p++) {
      var pattern = validPatterns[p].map(function (w) { return w.toLowerCase(); });
      if (wordList.length === pattern.length) {
        var allSame = true;
        for (var k = 0; k < wordList.length; k++) {
          if (wordList[k] !== pattern[k]) {
            allSame = false;
            break;
          }
        }
        if (allSame) return true;
      }
    }
    return false;
  }

  var usedDistractors = currentSentenceTokens.filter(function (t) {
    return t.isDistractor || distractorWords.indexOf(t.word.toLowerCase()) !== -1;
  });

  var isExactMatch = checkPatternMatch(userWords);
  var coreWords = currentSentenceTokens.filter(function (t) {
    return !t.isDistractor && distractorWords.indexOf(t.word.toLowerCase()) === -1;
  }).map(function (t) { return t.word.toLowerCase(); });
  var isCoreMatch = checkPatternMatch(coreWords);

  if (isExactMatch && usedDistractors.length === 0) {
    dialogueScores.build = 30;
    dialogueCompleted.build = true;
    feedbackEl.textContent = "عالی! جمله کاملاً درست ساخته شد و هیچ کلمه اضافه‌ای انتخاب نکردی (۳۰ امتیاز کامل).";
    feedbackEl.className = "sentence-feedback dialogue-feedback good active";
  } else if (isCoreMatch && usedDistractors.length > 0) {
    dialogueScores.build = 20;
    dialogueCompleted.build = true;
    feedbackEl.textContent = "ساختار اصلی جمله درست است، اما کلمه اضافی مزاحم (" + usedDistractors.map(function (d) { return d.word; }).join(", ") + ") در آن به کار رفته است (۲۰ از ۳۰ امتیاز).";
    feedbackEl.className = "sentence-feedback dialogue-feedback soft active";
  } else {
    dialogueScores.build = 0;
    dialogueCompleted.build = false;
    if (usedDistractors.length > 0) {
      feedbackEl.textContent = "ترتیب کلمات یا انتخاب کلمات نیاز به اصلاح دارد (ضمناً کلمه اضافی '" + usedDistractors[0].word + "' نیز در جمله است).";
    } else {
      feedbackEl.textContent = "ترتیب کلمات هنوز دقیق نیست یا جمله کامل نشده است. ترتیب کلمات را بازبینی کن.";
    }
    feedbackEl.className = "sentence-feedback dialogue-feedback soft active";
  }
  updateDialogueSummary();
}

function handleSentenceClear() {
  currentSentenceTokens = [];
  for (var i = 0; i < currentWordBank.length; i++) {
    currentWordBank[i].used = false;
  }
  updateWordBankButtonsState();
  renderSentenceResult();
  var feedbackEl = document.getElementById("sentenceFeedback");
  if (feedbackEl) {
    feedbackEl.className = "sentence-feedback dialogue-feedback";
    feedbackEl.textContent = "";
  }
  dialogueScores.build = 0;
  dialogueCompleted.build = false;
  updateDialogueSummary();
}

function renderSentenceBuilder() {
  var data = TEEN_DIALOGUES[dialogueIndex] || TEEN_DIALOGUES[0];
  var buildData = data.build || {};
  var promptEl = document.getElementById("sentencePrompt");
  if (promptEl) {
    promptEl.textContent = buildData.promptFa
      ? ("معنای هدف: «" + buildData.promptFa + "» — کلمه‌ها را انتخاب کن (مراقب کلمات اضافه باش).")
      : "کلمه‌ها رو انتخاب کن و یک جمله بساز.";
  }

  var wordsBox = document.getElementById("sentenceWords");
  if (wordsBox) {
    wordsBox.innerHTML = "";
    var rawList = [];
    var baseList = buildData.baseWords || [];
    for (var b = 0; b < baseList.length; b++) {
      rawList.push({ id: "b_" + b + "_" + baseList[b], word: baseList[b], isDistractor: false, used: false });
    }
    var distList = buildData.distractorWords || [];
    for (var d = 0; d < distList.length; d++) {
      rawList.push({ id: "d_" + d + "_" + distList[d], word: distList[d], isDistractor: true, used: false });
    }
    currentWordBank = rawList.sort(function () { return Math.random() - 0.5; });

    for (var w = 0; w < currentWordBank.length; w++) {
      (function (bankItem) {
        var btn = document.createElement("button");
        btn.type = "button";
        btn.className = "sentence-word-btn";
        btn.setAttribute("data-word-id", bankItem.id);
        btn.textContent = bankItem.word;
        btn.addEventListener("click", function () {
          if (bankItem.used) return;
          bankItem.used = true;
          btn.classList.add("used");
          currentSentenceTokens.push({ id: bankItem.id, word: bankItem.word, isDistractor: bankItem.isDistractor });
          renderSentenceResult();
          var sFeedback = document.getElementById("sentenceFeedback");
          if (sFeedback) {
            sFeedback.className = "sentence-feedback dialogue-feedback";
            sFeedback.textContent = "";
          }
        });
        wordsBox.appendChild(btn);
      })(currentWordBank[w]);
    }
  }
  renderSentenceResult();
  var sFeedbackEl = document.getElementById("sentenceFeedback");
  if (sFeedbackEl) {
    sFeedbackEl.className = "sentence-feedback dialogue-feedback";
    sFeedbackEl.textContent = "";
  }
}

function updateSentenceResult() {
  renderSentenceResult();
}

function renderDialogue() {
  var data = TEEN_DIALOGUES[dialogueIndex] || TEEN_DIALOGUES[0];

  dialogueScores = { react: 0, build: 0, twist: 0 };
  dialogueCompleted = { react: false, build: false, twist: false };
  currentSentenceTokens = [];
  currentWordBank = [];

  // STAGE 1: READ
  var sceneEl = document.getElementById("dialogueScene");
  var linesEl = document.getElementById("dialogueLines");
  if (sceneEl) sceneEl.textContent = data.scene;
  if (linesEl) {
    linesEl.innerHTML = "";
    for (var i = 0; i < data.lines.length; i++) {
      var line = data.lines[i];
      var row = document.createElement("div");
      row.className = "dialogue-line";
      var who = document.createElement("span");
      who.className = "dialogue-who";
      who.textContent = line.who;
      var text = document.createElement("div");
      text.className = "dialogue-text";
      text.innerHTML = "<strong>" + line.en + "</strong><small>" + line.fa + "</small>";
      row.appendChild(who);
      row.appendChild(text);
      linesEl.appendChild(row);
    }
  }

  // STAGE 2: REACT
  var reactData = data.react || {
    scenario: data.question || "",
    correctIntent: "correct",
    options: (data.options || []).map(function (o) { return { text: o.text, fa: o.fa, intent: o.good ? "correct" : "other" }; })
  };
  var questionEl = document.getElementById("roleplayQuestion");
  var optionsEl = document.getElementById("roleplayOptions");
  var feedbackEl = document.getElementById("roleplayFeedback");

  if (questionEl) questionEl.textContent = reactData.scenario;
  if (feedbackEl) {
    feedbackEl.textContent = "";
    feedbackEl.className = "roleplay-feedback dialogue-feedback";
  }

  if (optionsEl) {
    optionsEl.innerHTML = "";
    var shuffledReactOptions = reactData.options.slice().sort(function () { return Math.random() - 0.5; });
    for (var j = 0; j < shuffledReactOptions.length; j++) {
      (function (opt) {
        var btn = document.createElement("button");
        btn.type = "button";
        btn.className = "roleplay-option dialogue-option";
        btn.innerHTML = "<span>" + opt.text + "</span><small>" + opt.fa + "</small>";
        btn.addEventListener("click", function () {
          var all = optionsEl.querySelectorAll(".dialogue-option");
          for (var k = 0; k < all.length; k++) all[k].classList.remove("picked", "correct", "wrong");
          btn.classList.add("picked");
          var isGood = (opt.intent === reactData.correctIntent);
          btn.classList.add(isGood ? "correct" : "wrong");
          dialogueScores.react = isGood ? 30 : 0;
          dialogueCompleted.react = true;
          if (feedbackEl) {
            feedbackEl.textContent = getIntentFeedback(opt.intent, isGood, reactData.correctIntent);
            feedbackEl.className = "roleplay-feedback dialogue-feedback " + (isGood ? "good" : "soft") + " active";
          }
          updateDialogueSummary();
        });
        optionsEl.appendChild(btn);
      })(shuffledReactOptions[j]);
    }
  }

  // STAGE 3: BUILD
  renderSentenceBuilder();

  // STAGE 4: TWIST
  var twistData = data.twist || {
    scenario: "موقعیت جدید در دسترس نیست.",
    correctIntent: "none",
    options: []
  };
  var twistQEl = document.getElementById("twistQuestion");
  var twistOptEl = document.getElementById("twistOptions");
  var twistFeedEl = document.getElementById("twistFeedback");

  if (twistQEl) twistQEl.textContent = twistData.scenario;
  if (twistFeedEl) {
    twistFeedEl.textContent = "";
    twistFeedEl.className = "dialogue-feedback";
  }

  if (twistOptEl) {
    twistOptEl.innerHTML = "";
    var shuffledTwistOptions = (twistData.options || []).slice().sort(function () { return Math.random() - 0.5; });
    for (var t = 0; t < shuffledTwistOptions.length; t++) {
      (function (opt) {
        var btn = document.createElement("button");
        btn.type = "button";
        btn.className = "dialogue-option";
        btn.innerHTML = "<span>" + opt.text + "</span><small>" + opt.fa + "</small>";
        btn.addEventListener("click", function () {
          var all = twistOptEl.querySelectorAll(".dialogue-option");
          for (var k = 0; k < all.length; k++) all[k].classList.remove("picked", "correct", "wrong");
          btn.classList.add("picked");
          var isGood = (opt.intent === twistData.correctIntent);
          btn.classList.add(isGood ? "correct" : "wrong");
          dialogueScores.twist = isGood ? 30 : 0;
          dialogueCompleted.twist = true;
          if (twistFeedEl) {
            twistFeedEl.textContent = getIntentFeedback(opt.intent, isGood, twistData.correctIntent);
            twistFeedEl.className = "dialogue-feedback " + (isGood ? "good" : "soft") + " active";
          }
          updateDialogueSummary();
        });
        twistOptEl.appendChild(btn);
      })(shuffledTwistOptions[t]);
    }
  }

  updateDialogueSummary();
}

var QUIZ_LEN = 10;
var quizLevel = "A1";
var quiz = { qs: [], i: 0, correct: 0, level: quizLevel, mode: "meaning", combo: 0, maxCombo: 0 };

var QUIZ_GHOST_KEY = "lughatyar_quiz_ghost_v1";
var QUIZ_BOSS_KEY = "lughatyar_quiz_boss_v1";
var QUIZ_SETTINGS_KEY = "lughatyar_quiz_settings_v1";

var quizSpecialMode = "classic"; // "classic" | "streak" | "boss"
var quizRiskMultiplier = 1; // 1 | 2 | 3
var quizCategoryStreakKey = null;

function getGhostRecord(mode, level) {
  try {
    var raw = safeStorageGet(QUIZ_GHOST_KEY);
    if (!raw) return null;
    var parsed = JSON.parse(raw);
    return parsed && parsed[mode + "_" + level] ? parsed[mode + "_" + level] : null;
  } catch (e) {
    return null;
  }
}

function saveGhostRecord(mode, level, data) {
  try {
    var raw = safeStorageGet(QUIZ_GHOST_KEY);
    var parsed = {};
    if (raw) {
      try { parsed = JSON.parse(raw) || {}; } catch (e) { parsed = {}; }
    }
    parsed[mode + "_" + level] = data;
    safeStorageSet(QUIZ_GHOST_KEY, JSON.stringify(parsed));
  } catch (e) { }
}

function getBossCounters() {
  try {
    var raw = safeStorageGet(QUIZ_BOSS_KEY);
    if (!raw) return { A1: 0, A2: 0, B1: 0, B2: 0 };
    var parsed = JSON.parse(raw);
    return {
      A1: (parsed && parsed.A1) || 0,
      A2: (parsed && parsed.A2) || 0,
      B1: (parsed && parsed.B1) || 0,
      B2: (parsed && parsed.B2) || 0
    };
  } catch (e) {
    return { A1: 0, A2: 0, B1: 0, B2: 0 };
  }
}

function incrementBossCounter(level) {
  var counters = getBossCounters();
  counters[level] = (counters[level] || 0) + 1;
  try {
    safeStorageSet(QUIZ_BOSS_KEY, JSON.stringify(counters));
  } catch (e) { }
  updateQuizModesUI();
}

function resetBossCounter(level) {
  var counters = getBossCounters();
  counters[level] = 0;
  try {
    safeStorageSet(QUIZ_BOSS_KEY, JSON.stringify(counters));
  } catch (e) { }
  updateQuizModesUI();
}

function getCategoryIcon(cat) {
  if (!cat) return "📚";
  if (CATEGORIES[cat] && CATEGORIES[cat].icon) return CATEGORIES[cat].icon;
  if (cat.indexOf("travel") !== -1 || cat.indexOf("transport") !== -1) return "🧳";
  if (cat.indexOf("food") !== -1 || cat.indexOf("kitchen") !== -1) return "🍽️";
  if (cat.indexOf("work") !== -1) return "💼";
  if (cat.indexOf("teen") !== -1) return "✨";
  if (cat.indexOf("bathroom") !== -1) return "🛁";
  if (cat.indexOf("car") !== -1) return "🚗";
  if (cat.indexOf("clothes") !== -1) return "👔";
  if (cat.indexOf("social") !== -1 || cat.indexOf("communication") !== -1) return "💬";
  if (cat.indexOf("routine") !== -1) return "⏰";
  if (cat.indexOf("movement") !== -1) return "🚶";
  if (cat.indexOf("progress") !== -1 || cat.indexOf("challenges") !== -1) return "🎯";
  if (cat.indexOf("wellbeing") !== -1) return "🌿";
  if (cat.indexOf("discourse") !== -1) return "🗣️";
  if (cat.indexOf("endeavor") !== -1) return "🚀";
  if (cat.indexOf("situations") !== -1) return "⚡";
  return "📚";
}

function getEligibleStreakCategories(level) {
  var list = [];
  for (var cat in CATEGORIES) {
    if (categoryMatchesQuizLevel(cat, level)) {
      var ws = CATEGORIES[cat].words;
      if (ws && ws.length >= 4) list.push(cat);
    }
  }
  return list;
}

function updateQuizModesUI() {
  var classicBtn = document.getElementById("quizModeClassic");
  var streakBtn = document.getElementById("quizModeStreak");
  var bossBtn = document.getElementById("quizModeBoss");
  var lockBadge = document.getElementById("bossLockBadge");

  if (classicBtn) classicBtn.classList.toggle("active", quizSpecialMode === "classic");
  if (streakBtn) streakBtn.classList.toggle("active", quizSpecialMode === "streak");
  if (bossBtn) bossBtn.classList.toggle("active", quizSpecialMode === "boss");

  var counters = getBossCounters();
  var count = counters[quizLevel] || 0;
  if (lockBadge) {
    if (count >= 3) {
      lockBadge.textContent = "آماده! ⚡";
      lockBadge.classList.add("unlocked");
      if (bossBtn) bossBtn.classList.add("unlocked");
    } else {
      lockBadge.textContent = toPersianDigits(count) + " / ۳";
      lockBadge.classList.remove("unlocked");
      if (bossBtn) bossBtn.classList.remove("unlocked");
    }
  }

  var riskBtns = document.querySelectorAll(".quiz-risk-btn");
  for (var r = 0; r < riskBtns.length; r++) {
    var val = parseInt(riskBtns[r].getAttribute("data-risk"), 10) || 1;
    riskBtns[r].classList.toggle("active", val === quizRiskMultiplier);
  }
}

function updateQuizComboUI() {
  var comboBadge = document.getElementById("quizComboBadge");
  var comboNum = document.getElementById("quizComboNum");
  if (comboNum) comboNum.textContent = toPersianDigits(quiz.combo || 0);
  if (comboBadge) {
    if (quiz.combo > 1) {
      comboBadge.classList.add("bounce");
      setTimeout(function () { comboBadge.classList.remove("bounce"); }, 400);
    }
  }
}

function updateQuizSteppedBar(currentIdx, totalCount) {
  var pips = document.querySelectorAll("#quizSteppedBar .quiz-step-pip");
  if (!pips || pips.length === 0) return;
  for (var k = 0; k < pips.length; k++) {
    pips[k].classList.remove("filled", "active");
    if (k < currentIdx) {
      pips[k].classList.add("filled");
    } else if (k === currentIdx) {
      pips[k].classList.add("active");
    }
  }
}

function shuffleArr(a) { for (var i = a.length - 1; i > 0; i--) { var j = Math.floor(Math.random() * (i + 1)); var t = a[i]; a[i] = a[j]; a[j] = t; } return a; }

function categoryMatchesQuizLevel(cat, level) {
  if (cat.indexOf("__") === 0) return false;
  if (cat.indexOf("idiom") === 0) return false;
  if (level === "A1") {
    return cat === "pv_a1" || (cat.indexOf("a2") !== 0 && cat.indexOf("pv") !== 0 && cat.indexOf("phrasal") !== 0);
  }
  if (level === "A2") {
    return cat.indexOf("a2") === 0 || cat.indexOf("pv_a2") === 0;
  }
  if (level === "B1") {
    return cat.indexOf("pv_b1") === 0 || cat.indexOf("b1") === 0;
  }
  if (level === "B2") {
    return cat.indexOf("pv_b2") === 0 || cat.indexOf("b2") === 0;
  }
  return false;
}

function getQuizLevelStats(level) {
  if (!progress.quiz) progress.quiz = { plays: 0, best: 0 };
  if (!progress.quiz.byLevel) progress.quiz.byLevel = {};
  if (!progress.quiz.byLevel[level]) progress.quiz.byLevel[level] = { plays: 0, best: 0 };
  return progress.quiz.byLevel[level];
}

function setQuizLevel(level) {
  quizLevel = (level === "A2" || level === "B1" || level === "B2") ? level : "A1";
  var scr = document.getElementById("screenQuiz");
  if (scr) {
    scr.classList.remove("quiz-level-theme-A1", "quiz-level-theme-A2", "quiz-level-theme-B1", "quiz-level-theme-B2");
    scr.classList.add("quiz-level-theme-" + quizLevel);
  }
  var levelBtns = document.querySelectorAll(".quiz-level-btn");
  for (var i = 0; i < levelBtns.length; i++) {
    levelBtns[i].classList.toggle("active", levelBtns[i].getAttribute("data-quiz-level") === quizLevel);
  }
  updateQuizModesUI();
}

function makeClozePrompt(w) {
  var sent = (w.en || "").trim();
  var word = (w.word || "").trim();
  if (!sent || !word) return "____";
  var safe = word.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  var re = new RegExp("\\b" + safe + "\\w*\\b", "i");
  if (re.test(sent)) return sent.replace(re, "____");
  var first = word.split(/\s+/)[0].replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  var re2 = new RegExp("\\b" + first + "\\w*\\b", "i");
  if (re2.test(sent)) return sent.replace(re2, "____");
  return sent + " (____)";
}

function buildClozeDistractors(targetWord, itemCat, level, allWords) {
  var targetLower = (targetWord || "").toLowerCase().trim();
  var isMultiWord = targetLower.indexOf(" ") !== -1;
  var targetParts = isMultiWord ? targetLower.split(/\s+/) : [];
  var baseVerb = targetParts.length > 0 ? targetParts[0] : "";
  var preposition = targetParts.length > 1 ? targetParts[1] : "";

  var catWords = (CATEGORIES[itemCat] && CATEGORIES[itemCat].words) ? CATEGORIES[itemCat].words : [];
  var candidates = [];

  for (var i = 0; i < catWords.length; i++) {
    var cw = catWords[i].word;
    if (!cw || cw.toLowerCase() === targetLower) continue;
    var cwLower = cw.toLowerCase();
    var score = 0;
    if (isMultiWord && cwLower.indexOf(" ") !== -1) {
      var cParts = cwLower.split(/\s+/);
      if (cParts[0] === baseVerb) score += 4;
      if (cParts[1] === preposition) score += 3;
    } else if (!isMultiWord && cwLower.indexOf(" ") === -1) {
      var lenDiff = Math.abs(cw.length - targetWord.length);
      if (lenDiff <= 2) score += 3;
      if (cw[0] === targetWord[0]) score += 2;
      if (cw.slice(-3) === targetWord.slice(-3)) score += 3;
    }
    candidates.push({ word: cw, score: score });
  }

  if (level === "B1" || level === "B2") {
    for (var f = 0; f < allWords.length; f++) {
      var aw = allWords[f].w.word;
      if (!aw || aw.toLowerCase() === targetLower) continue;
      var exists = false;
      for (var c = 0; c < candidates.length; c++) {
        if (candidates[c].word === aw) { exists = true; break; }
      }
      if (exists) continue;

      var awLower = aw.toLowerCase();
      var crossScore = 0;
      if (isMultiWord && awLower.indexOf(" ") !== -1) {
        var awParts = awLower.split(/\s+/);
        if (awParts[0] === baseVerb) crossScore += 4;
        if (awParts[1] === preposition) crossScore += 3;
      } else if (!isMultiWord && awLower.indexOf(" ") === -1) {
        var diff = Math.abs(aw.length - targetWord.length);
        if (diff <= 1) crossScore += 2;
        if (aw[0] === targetWord[0]) crossScore += 1;
        if (aw.slice(-3) === targetWord.slice(-3)) crossScore += 2;
      }
      if (crossScore > 0) {
        candidates.push({ word: aw, score: crossScore });
      }
    }
  }

  candidates.sort(function (a, b) {
    if (b.score !== a.score) return b.score - a.score;
    return Math.random() - 0.5;
  });

  var selected = [];
  for (var s = 0; s < candidates.length && selected.length < 3; s++) {
    if (selected.indexOf(candidates[s].word) === -1) {
      selected.push(candidates[s].word);
    }
  }

  if (selected.length < 3) {
    for (var k = 0; k < catWords.length && selected.length < 3; k++) {
      var fallbackWord = catWords[k].word;
      if (fallbackWord && fallbackWord !== targetWord && selected.indexOf(fallbackWord) === -1) {
        selected.push(fallbackWord);
      }
    }
  }
  if (selected.length < 3) {
    for (var m = 0; m < allWords.length && selected.length < 3; m++) {
      var fallbackAll = allWords[m].w.word;
      if (fallbackAll && fallbackAll !== targetWord && selected.indexOf(fallbackAll) === -1) {
        selected.push(fallbackAll);
      }
    }
  }

  return selected;
}

function sortClozeQuestionsByDifficulty(questions) {
  for (var i = 0; i < questions.length; i++) {
    var q = questions[i];
    var promptLen = (q.prompt || "").length;
    var wordLen = (q.word || "").length;
    var isAdvanced = (q.level === "B1" || q.level === "B2") ? 10 : 0;
    var isPhrasal = (q.word.indexOf(" ") !== -1) ? 5 : 0;
    q._difficulty = promptLen + (wordLen * 2) + isAdvanced + isPhrasal;
  }
  questions.sort(function (a, b) {
    return a._difficulty - b._difficulty;
  });
}

function buildCloze(level) {
  level = (level === "A2" || level === "B1" || level === "B2") ? level : "A1";
  var all = [];
  for (var cat in CATEGORIES) {
    if (!categoryMatchesQuizLevel(cat, level)) continue;
    var ws = CATEGORIES[cat].words;
    for (var i = 0; i < ws.length; i++) {
      if (ws[i].en) all.push({ w: ws[i], cat: cat });
    }
  }
  shuffleArr(all);
  var picked = all.slice(0, QUIZ_LEN);
  quiz.qs = [];
  for (var p = 0; p < picked.length; p++) {
    var item = picked[p];
    var closeOpts = buildClozeDistractors(item.w.word, item.cat, level, all);
    var opts = closeOpts.slice();
    opts.push(item.w.word);
    shuffleArr(opts);
    quiz.qs.push({
      word: item.w.word,
      wordKey: item.w.id || item.w.word,
      answer: item.w.word,
      options: opts,
      cat: item.cat,
      level: level,
      prompt: makeClozePrompt(item.w),
      hint: item.w.meaning || item.w.fa || ""
    });
  }

  sortClozeQuestionsByDifficulty(quiz.qs);

  quiz.i = 0;
  quiz.correct = 0;
  quiz.level = level;
  quiz.mode = "cloze";
  quiz.specialMode = "classic";
}

function buildBossQuiz(level) {
  level = (level === "A2" || level === "B1" || level === "B2") ? level : "A1";
  var all = [];
  for (var cat in CATEGORIES) {
    if (!categoryMatchesQuizLevel(cat, level)) continue;
    var ws = CATEGORIES[cat].words;
    for (var i = 0; i < ws.length; i++) {
      var w = ws[i];
      var key = cat + "|" + (w.id || w.word);
      var rec = progress.words[key];
      var weight = 1;
      if (!rec || !rec.s) weight = 3;
      else if (rec.s === "u") weight = 4;
      else if (rec.s === "k") weight = 1;
      if (w.word.length > 7 || w.word.indexOf(" ") !== -1) weight += 2;
      all.push({ w: w, cat: cat, weight: weight });
    }
  }
  all.sort(function (a, b) {
    return (b.weight + Math.random() * 2) - (a.weight + Math.random() * 2);
  });
  var picked = all.slice(0, 5);
  quiz.qs = [];
  for (var p = 0; p < picked.length; p++) {
    var item = picked[p];
    var pool = CATEGORIES[item.cat].words.filter(function (x) { return (x.id || x.word) !== (item.w.id || item.w.word); });
    shuffleArr(pool);
    var opts = [];
    for (var d = 0; d < 3 && d < pool.length; d++) opts.push(pool[d].fa);
    if (opts.length < 3) {
      for (var f = 0; f < all.length && opts.length < 3; f++) {
        var faWord = all[f].w.fa;
        if (faWord !== item.w.fa && opts.indexOf(faWord) === -1) opts.push(faWord);
      }
    }
    opts.push(item.w.fa);
    shuffleArr(opts);
    quiz.qs.push({
      word: item.w.word,
      wordKey: item.w.id || item.w.word,
      answer: item.w.fa,
      options: opts,
      cat: item.cat,
      level: level
    });
  }
  quiz.i = 0;
  quiz.correct = 0;
  quiz.level = level;
  quiz.mode = "meaning";
  quiz.specialMode = "boss";
  quiz.wrongAllowed = 1;
  quiz.wrongCount = 0;
}

function buildCategoryStreakQuiz(level, catKey) {
  level = (level === "A2" || level === "B1" || level === "B2") ? level : "A1";
  var eligible = getEligibleStreakCategories(level);
  if (!catKey || eligible.indexOf(catKey) === -1) {
    catKey = eligible.length > 0 ? eligible[Math.floor(Math.random() * eligible.length)] : "everyday";
  }
  quizCategoryStreakKey = catKey;
  var catObj = CATEGORIES[catKey];
  var ws = catObj ? catObj.words.slice() : [];
  shuffleArr(ws);
  var picked = [];
  for (var i = 0; i < QUIZ_LEN; i++) {
    picked.push(ws[i % ws.length]);
  }
  quiz.qs = [];
  for (var p = 0; p < picked.length; p++) {
    var target = picked[p];
    var pool = ws.filter(function (x) { return (x.id || x.word) !== (target.id || target.word); });
    shuffleArr(pool);
    var opts = [];
    for (var d = 0; d < 3 && d < pool.length; d++) opts.push(pool[d].fa);
    if (opts.length < 3) {
      for (var c in CATEGORIES) {
        if (!categoryMatchesQuizLevel(c, level)) continue;
        var cws = CATEGORIES[c].words;
        for (var f = 0; f < cws.length && opts.length < 3; f++) {
          if (cws[f].fa !== target.fa && opts.indexOf(cws[f].fa) === -1) opts.push(cws[f].fa);
        }
      }
    }
    opts.push(target.fa);
    shuffleArr(opts);
    quiz.qs.push({
      word: target.word,
      wordKey: target.id || target.word,
      answer: target.fa,
      options: opts,
      cat: catKey,
      level: level
    });
  }
  quiz.i = 0;
  quiz.correct = 0;
  quiz.level = level;
  quiz.mode = "meaning";
  quiz.specialMode = "streak";
}

function startCloze(level) {
  if (typeof level === "string") setQuizLevel(level);
  else setQuizLevel(quizLevel);
  quiz.combo = 0;
  quiz.maxCombo = 0;
  quiz.riskScore = 0;
  quiz.quickGuesses = 0;
  quiz.qTimes = [];
  quiz.startTime = Date.now();
  quiz.ghostRecord = getGhostRecord("cloze", quizLevel);

  buildCloze(quizLevel);
  updateQuizModesUI();
  document.getElementById("quizResults").style.display = "none";
  document.getElementById("quizPlayArea").style.display = "";
  var title = document.querySelector(".quiz-level-title");
  var sub = document.querySelector(".quiz-level-sub");
  if (title) title.textContent = "سطح جای خالی را انتخاب کن";
  if (sub) sub.textContent = "جمله می‌آید؛ لغت انگلیسی درست را انتخاب کن.";
  renderQuiz();
  showScreen("quiz");
}

function buildQuiz(level) {
  level = (level === "A2" || level === "B1" || level === "B2") ? level : "A1";
  var all = [];
  for (var cat in CATEGORIES) {
    if (!categoryMatchesQuizLevel(cat, level)) continue;
    var ws = CATEGORIES[cat].words;
    for (var i = 0; i < ws.length; i++) {
      all.push({ w: ws[i], cat: cat });
    }
  }
  shuffleArr(all);
  var picked = all.slice(0, QUIZ_LEN);
  quiz.qs = [];
  for (var p = 0; p < picked.length; p++) {
    var pool = CATEGORIES[picked[p].cat].words.filter(function (x) { return (x.id || x.word) !== (picked[p].w.id || picked[p].w.word); });
    shuffleArr(pool);
    var opts = [];
    for (var d = 0; d < 3 && d < pool.length; d++) opts.push(pool[d].fa);
    if (opts.length < 3) {
      for (var f = 0; f < all.length && opts.length < 3; f++) {
        var faWord = all[f].w.fa;
        if (faWord !== picked[p].w.fa && opts.indexOf(faWord) === -1) opts.push(faWord);
      }
    }
    opts.push(picked[p].w.fa);
    shuffleArr(opts);
    quiz.qs.push({
      word: picked[p].w.word,
      wordKey: picked[p].w.id || picked[p].w.word,
      answer: picked[p].w.fa,
      options: opts,
      cat: picked[p].cat,
      level: level
    });
  }
  quiz.i = 0;
  quiz.correct = 0;
  quiz.level = level;
  quiz.mode = "meaning";
  quiz.specialMode = "classic";
}

function renderQuiz() {
  var q = quiz.qs[quiz.i];
  var wordEl = document.getElementById("quizWord");
  var hintEl = document.getElementById("quizHint");
  var bannerEl = document.getElementById("quizActiveBanner");
  var ghostEl = document.getElementById("quizGhostIndicator");
  var predictNoticeEl = document.getElementById("quizPredictNotice");

  // Motivational headline/hint
  var warmPrompts = [
    "ببینیم این کلمه رو چطور ترجمه می‌کنی! 🎯",
    "حدس بزن معنی درست کدومه؟ ✨",
    "یک قدم جلوتر؛ این کلمه رو بلدی؟ 💡",
    "تمرکز کن، گزینه‌ی درست رو پیدا کن! 🔍"
  ];
  var promptPick = warmPrompts[quiz.i % warmPrompts.length];

  if (quiz.mode === "cloze") {
    wordEl.textContent = q.prompt || "____";
    wordEl.classList.add("cloze-sentence");
    if (hintEl) hintEl.textContent = q.hint ? ("معنی: " + q.hint) : "لغت انگلیسی مناسب جای خالی را انتخاب کن";
  } else {
    wordEl.textContent = q.word;
    wordEl.classList.remove("cloze-sentence");
    if (hintEl) hintEl.textContent = promptPick;
  }

  // Active banner rendering
  if (bannerEl) {
    if (quiz.specialMode === "streak" && quizCategoryStreakKey) {
      var catObj = CATEGORIES[quizCategoryStreakKey];
      var catName = catObj ? catObj.name : "";
      bannerEl.className = "quiz-active-banner banner-streak";
      bannerEl.innerHTML = '<span>' + getCategoryIcon(quizCategoryStreakKey) + ' زنجیره موضوعی: ' + escapeHtml(catName) + '</span><button type="button" class="quiz-active-banner-btn" id="quizChangeStreakBtn">🎲 دسته دیگر</button>';
      bannerEl.style.display = "flex";
      var chgBtn = document.getElementById("quizChangeStreakBtn");
      if (chgBtn) {
        chgBtn.onclick = function (e) {
          e.stopPropagation();
          var eligible = getEligibleStreakCategories(quizLevel);
          var idx = eligible.indexOf(quizCategoryStreakKey);
          var nextCat = eligible[(idx + 1) % eligible.length];
          quizCategoryStreakKey = nextCat;
          startQuiz(quizLevel);
        };
      }
    } else if (quiz.specialMode === "boss") {
      bannerEl.className = "quiz-active-banner banner-boss";
      var lifeIcon = (quiz.wrongCount === 0) ? "❤️❤️" : "💔";
      bannerEl.innerHTML = '<span>⚡ راند رئیس ' + quizLevel + '</span><span>جان: ' + lifeIcon + ' (حداکثر ۱ خطا)</span>';
      bannerEl.style.display = "flex";
    } else {
      bannerEl.style.display = "none";
    }
  }

  // Ghost pace indicator rendering
  if (ghostEl) {
    if (quiz.ghostRecord && quiz.ghostRecord.timeline && quiz.ghostRecord.timeline.length > 0) {
      var elapsed = Math.max(1, Math.round((Date.now() - (quiz.startTime || Date.now())) / 1000));
      var ghostDone = 0;
      for (var g = 0; g < quiz.ghostRecord.timeline.length; g++) {
        if (quiz.ghostRecord.timeline[g].t <= elapsed) ghostDone = quiz.ghostRecord.timeline[g].q;
      }
      var currentQNum = quiz.i + 1;
      var ghostQNum = Math.min(ghostDone + 1, quiz.qs.length);
      var paceClass = "quiz-ghost-pace-level";
      var paceText = "همسطح رکورد ⚡";
      if (currentQNum > ghostDone) {
        paceClass = "quiz-ghost-pace-ahead";
        paceText = "جلوتر هستید! 🔥";
      } else if (currentQNum < ghostDone) {
        paceClass = "quiz-ghost-pace-behind";
        paceText = "کمی عقب‌تر ⏳";
      }

      var hasSeenHint = false;
      try { hasSeenHint = !!safeStorageGet("lughatyar_ghost_hint_seen_v1"); } catch (e) {}

      var hintHtml = "";
      if (!hasSeenHint) {
        hintHtml = '<div class="quiz-ghost-hint-note">💡 در حالت روح، سرعت پاسخ‌گویی شما با بهترین رکورد قبلی مقایسه می‌شود.</div>';
        try { safeStorageSet("lughatyar_ghost_hint_seen_v1", "1"); } catch (e) {}
      }

      ghostEl.innerHTML = '<div class="quiz-ghost-row">' +
        '<div class="quiz-ghost-labels">' +
          '<span class="quiz-ghost-badge-user">👤 شما: سؤال ' + toPersianDigits(currentQNum) + '</span>' +
          '<span class="quiz-ghost-sep">•</span>' +
          '<span class="quiz-ghost-badge-record">👻 رکورد قبلی: سؤال ' + toPersianDigits(ghostQNum) + '</span>' +
        '</div>' +
        '<span class="quiz-ghost-pace-tag ' + paceClass + '">' + paceText + '</span>' +
      '</div>' + hintHtml;
      ghostEl.style.display = "flex";
    } else {
      ghostEl.style.display = "none";
    }
  }

  // Question count & stepped progress bar
  var countEl = document.getElementById("quizCount");
  if (countEl) countEl.textContent = toPersianDigits(quiz.i + 1) + " / " + toPersianDigits(quiz.qs.length);
  updateQuizSteppedBar(quiz.i, quiz.qs.length);
  updateQuizComboUI();

  // Render 2x2 grid options with letter badges
  var letters = quiz.mode === "cloze" ? ["A", "B", "C", "D"] : ["الف", "ب", "ج", "د"];
  var box = document.getElementById("quizOptions");
  box.innerHTML = "";

  // Predict -> Reveal pause for cloze
  if (quiz.mode === "cloze") {
    if (predictNoticeEl) {
      predictNoticeEl.textContent = "🎯 ۲ ثانیه بدون گزینه حدس بزن...";
      predictNoticeEl.style.display = "block";
    }
    box.className = "quiz-options quiz-options-grid quiz-options-concealed";
    if (quiz._predictTimer) clearTimeout(quiz._predictTimer);
    quiz.optionsRevealedAt = null;
    quiz._predictTimer = setTimeout(function () {
      if (predictNoticeEl) predictNoticeEl.style.display = "none";
      if (box) {
        box.classList.remove("quiz-options-concealed");
        box.classList.add("quiz-options-revealed");
      }
      quiz.optionsRevealedAt = Date.now();
    }, 2000);
  } else {
    if (predictNoticeEl) predictNoticeEl.style.display = "none";
    box.className = "quiz-options quiz-options-grid";
  }

  for (var o = 0; o < q.options.length; o++) {
    (function (optText, optIdx) {
      var b = document.createElement("button");
      var isEnglish = quiz.mode === "cloze" || /[A-Za-z]/.test(optText);
      b.className = "quiz-option " + (isEnglish ? "quiz-option-en" : "quiz-option-fa");
      
      var badge = document.createElement("span");
      badge.className = "quiz-option-letter";
      badge.textContent = letters[optIdx] || (optIdx + 1);
      b.appendChild(badge);

      var textSpan = document.createElement("span");
      textSpan.className = "quiz-option-text";
      textSpan.textContent = optText;
      b.appendChild(textSpan);

      b.addEventListener("click", function () { answerQuiz(optText, b, q); });
      box.appendChild(b);
    })(q.options[o], o);
  }
}

function answerQuiz(picked, btn, q) {
  if (quiz._predictTimer) {
    clearTimeout(quiz._predictTimer);
    quiz._predictTimer = null;
  }
  var predictNoticeEl = document.getElementById("quizPredictNotice");
  if (predictNoticeEl) predictNoticeEl.style.display = "none";
  var box = document.getElementById("quizOptions");
  if (box) {
    box.classList.remove("quiz-options-concealed");
    box.classList.add("quiz-options-revealed");
  }

  var opts = document.querySelectorAll("#quizOptions .quiz-option");
  for (var k = 0; k < opts.length; k++) {
    opts[k].classList.add("locked");
    var textNodes = opts[k].querySelectorAll("span");
    var optVal = textNodes.length > 1 ? textNodes[1].textContent : opts[k].textContent;
    if (optVal === q.answer) {
      opts[k].classList.add("correct");
    }
  }

  if (!quiz.qTimes) quiz.qTimes = [];
  quiz.qTimes.push({
    q: quiz.i + 1,
    t: Math.max(1, Math.round((Date.now() - (quiz.startTime || Date.now())) / 1000))
  });

  var isCorrect = (picked === q.answer);

  if (isCorrect) {
    quiz.correct++;
    quiz.combo = (quiz.combo || 0) + 1;
    if (quiz.combo > (quiz.maxCombo || 0)) quiz.maxCombo = quiz.combo;
    updateQuizComboUI();

    var pts = 10 * quizRiskMultiplier;
    // Check quick prediction bonus in Cloze
    if (quiz.mode === "cloze" && quiz.optionsRevealedAt && (Date.now() - quiz.optionsRevealedAt <= 2500)) {
      quiz.quickGuesses = (quiz.quickGuesses || 0) + 1;
      pts += (5 * quizRiskMultiplier);
    }
    quiz.riskScore = (quiz.riskScore || 0) + pts;
  } else {
    quiz.combo = 0;
    updateQuizComboUI();
    btn.classList.add("wrong");

    var penalty = (quizRiskMultiplier === 1) ? 0 : ((quizRiskMultiplier === 2) ? 10 : 20);
    quiz.riskScore = Math.max(0, (quiz.riskScore || 0) - penalty);

    var key = q.cat + "|" + (q.wordKey || q.word);
    var rec = progress.words[key];
    if (rec && rec.s === "k") { rec.s = "u"; rec.n = 0; rec.d = todayStr(); saveProgress(); }

    if (quiz.specialMode === "boss") {
      quiz.wrongCount = (quiz.wrongCount || 0) + 1;
      if (quiz.wrongCount > (quiz.wrongAllowed || 1)) {
        setTimeout(function () {
          showQuizResults(true);
        }, 850);
        return;
      }
    }
  }

  setTimeout(function () {
    quiz.i++;
    if (quiz.i >= quiz.qs.length) showQuizResults(false);
    else renderQuiz();
  }, 950);
}

function showQuizResults(isBossDefeat) {
  if (!progress.quiz) progress.quiz = { plays: 0, best: 0 };
  var stats = getQuizLevelStats(quiz.level);
  stats.plays++;
  if (quiz.correct > stats.best) stats.best = quiz.correct;
  progress.quiz.plays = (progress.quiz.plays || 0) + 1;
  if (quiz.correct > (progress.quiz.best || 0)) progress.quiz.best = quiz.correct;
  trackMissionQuiz();
  saveProgress();

  var prevGhost = getGhostRecord(quiz.mode, quiz.level);
  var totalSec = Math.max(1, Math.round((Date.now() - (quiz.startTime || Date.now())) / 1000));
  var isNewGhostBest = false;

  if (!isBossDefeat) {
    if (!prevGhost || quiz.correct > prevGhost.correct || (quiz.correct === prevGhost.correct && totalSec < prevGhost.totalTime)) {
      isNewGhostBest = true;
      saveGhostRecord(quiz.mode, quiz.level, {
        correct: quiz.correct,
        totalTime: totalSec,
        timeline: quiz.qTimes || [],
        date: todayStr()
      });
    }
  }

  if (quiz.specialMode === "boss") {
    if (isBossDefeat) {
      resetBossCounter(quiz.level);
      quizSpecialMode = "classic";
    }
  } else if (!isBossDefeat) {
    incrementBossCounter(quiz.level);
  }

  // Warm, motivational titles and feedback
  var titleEl = document.getElementById("quizResultTitle");
  var textEl = document.getElementById("quizResultText");
  var subEl = document.getElementById("quizResultSub");
  var bestEl = document.getElementById("quizStatBest");
  var comboEl = document.getElementById("quizStatCombo");
  var riskBox = document.getElementById("quizStatRiskBox");
  var riskVal = document.getElementById("quizStatRisk");
  var ghostBox = document.getElementById("quizStatGhostBox");
  var ghostVal = document.getElementById("quizStatGhost");
  var badgesWrap = document.getElementById("quizBadgesContainer");

  if (isBossDefeat) {
    if (titleEl) titleEl.textContent = "راند رئیس متوقف شد! ⚡";
    if (textEl) textEl.textContent = toPersianDigits(quiz.correct) + " از ۵ درست";
    if (subEl) subEl.textContent = "بیش از ۱ خطا مجاز نبود؛ برای فعال‌سازی مجدد راند رئیس، ۳ دور دیگر تمرین کن!";
  } else if (quiz.specialMode === "boss") {
    if (titleEl) titleEl.textContent = "رئیس مغلوب شد! ⚡🏆";
    if (textEl) textEl.textContent = toPersianDigits(quiz.correct) + " از ۵ درست";
    if (subEl) subEl.textContent = "با مهارت و تمرکز فوق‌العاده از چالش رئیس عبور کردی!";
  } else if (quiz.correct >= 9) {
    if (titleEl) titleEl.textContent = "فوق‌العاده بود! 🏆";
    if (textEl) textEl.textContent = toPersianDigits(quiz.correct) + " از " + toPersianDigits(quiz.qs.length) + " درست";
    if (subEl) subEl.textContent = "تسلطت بر واژگان این سطح مثال‌زدنیه!";
  } else if (quiz.correct >= 7) {
    if (titleEl) titleEl.textContent = "عالی رفتی! 🎉";
    if (textEl) textEl.textContent = toPersianDigits(quiz.correct) + " از " + toPersianDigits(quiz.qs.length) + " درست";
    if (subEl) subEl.textContent = toPersianDigits(quiz.correct) + " لغت رو به خوبی در ذهنت تثبیت کردی 👏";
  } else if (quiz.correct >= 5) {
    if (titleEl) titleEl.textContent = "دست مریزاد! 💪";
    if (textEl) textEl.textContent = toPersianDigits(quiz.correct) + " از " + toPersianDigits(quiz.qs.length) + " درست";
    if (subEl) subEl.textContent = "پیشرفت خیلی خوبی داشتی؛ با تمرین بیشتر کامل مسلط می‌شی.";
  } else {
    if (titleEl) titleEl.textContent = "تمرین ارزشمندی بود! 📚";
    if (textEl) textEl.textContent = toPersianDigits(quiz.correct) + " از " + toPersianDigits(quiz.qs.length) + " درست";
    if (subEl) subEl.textContent = "یادگیری فرآیند پیوسته‌ست، هر دور قوی‌تر می‌شی!";
  }

  if (bestEl) bestEl.textContent = toPersianDigits(stats.best) + " از " + toPersianDigits(QUIZ_LEN);
  if (comboEl) comboEl.textContent = toPersianDigits(quiz.maxCombo || 0) + " پاسخ پی‌درپی";

  if (riskBox && riskVal) {
    riskBox.style.display = "";
    riskVal.textContent = toPersianDigits(quiz.riskScore || 0) + " (×" + toPersianDigits(quizRiskMultiplier) + ")";
  }

  if (ghostBox && ghostVal) {
    ghostBox.style.display = "";
    if (isNewGhostBest && prevGhost) {
      ghostVal.textContent = "رکورد جدید! 🌟 (" + toPersianDigits(totalSec) + "ث)";
    } else if (prevGhost) {
      ghostVal.textContent = toPersianDigits(prevGhost.correct) + " درست (" + toPersianDigits(prevGhost.totalTime) + "ث)";
    } else {
      ghostVal.textContent = "ثبت اولین رکورد 👻";
    }
  }

  // Encouragement badges
  if (badgesWrap) {
    badgesWrap.innerHTML = "";
    if (quiz.specialMode === "boss" && !isBossDefeat) {
      var bBoss = document.createElement("span");
      bBoss.className = "quiz-badge-chip";
      bBoss.textContent = "⚡ مهار راند رئیس " + quiz.level;
      badgesWrap.appendChild(bBoss);
    }
    if (isNewGhostBest && prevGhost) {
      var bGhost = document.createElement("span");
      bGhost.className = "quiz-badge-chip";
      bGhost.textContent = "👻 شکست رکورد قبلی!";
      badgesWrap.appendChild(bGhost);
    }
    if (quiz.specialMode === "streak" && quiz.correct >= 7 && quizCategoryStreakKey) {
      var bStreak = document.createElement("span");
      bStreak.className = "quiz-badge-chip";
      bStreak.textContent = "🧳 زنجیره " + (CATEGORIES[quizCategoryStreakKey] ? CATEGORIES[quizCategoryStreakKey].name : "");
      badgesWrap.appendChild(bStreak);
    }
    if (quiz.quickGuesses && quiz.quickGuesses > 0) {
      var bQuick = document.createElement("span");
      bQuick.className = "quiz-badge-chip";
      bQuick.textContent = "🎯 " + toPersianDigits(quiz.quickGuesses) + " حدس سریع";
      badgesWrap.appendChild(bQuick);
    }
    if (quizRiskMultiplier > 1 && quiz.correct >= 7) {
      var bRisk = document.createElement("span");
      bRisk.className = "quiz-badge-chip";
      bRisk.textContent = "🎲 استاد ریسک (×" + toPersianDigits(quizRiskMultiplier) + ")";
      badgesWrap.appendChild(bRisk);
    }
    if (quiz.correct >= 8 && quiz.specialMode !== "boss") {
      var b1 = document.createElement("span");
      b1.className = "quiz-badge-chip";
      b1.textContent = "🎯 دقت بالا";
      badgesWrap.appendChild(b1);
    }
    if ((quiz.maxCombo || 0) >= 3) {
      var b2 = document.createElement("span");
      b2.className = "quiz-badge-chip";
      b2.textContent = "🔥 زنجیره تسلط";
      badgesWrap.appendChild(b2);
    }
    var b3 = document.createElement("span");
    b3.className = "quiz-badge-chip";
    b3.textContent = "⚡ سطح " + quiz.level;
    badgesWrap.appendChild(b3);
  }

  document.getElementById("quizPlayArea").style.display = "none";
  document.getElementById("quizResults").style.display = "flex";
  updateHomeDashboard();
}

function startQuiz(level) {
  if (typeof level === "string") setQuizLevel(level);
  else setQuizLevel(quizLevel);
  quiz.mode = "meaning";
  quiz.combo = 0;
  quiz.maxCombo = 0;
  quiz.riskScore = 0;
  quiz.quickGuesses = 0;
  quiz.qTimes = [];
  quiz.startTime = Date.now();
  quiz.ghostRecord = getGhostRecord("meaning", quizLevel);

  if (quizSpecialMode === "boss") {
    buildBossQuiz(quizLevel);
  } else if (quizSpecialMode === "streak") {
    buildCategoryStreakQuiz(quizLevel, quizCategoryStreakKey);
  } else {
    buildQuiz(quizLevel);
  }

  updateQuizModesUI();
  document.getElementById("quizResults").style.display = "none";
  document.getElementById("quizPlayArea").style.display = "";
  var title = document.querySelector(".quiz-level-title");
  var sub = document.querySelector(".quiz-level-sub");
  if (title) title.textContent = "سطح چالش رو انتخاب کن";
  if (sub) sub.textContent = "برای هر سطح، سؤال‌ها فقط از همان لغت‌ها ساخته می‌شن.";
  renderQuiz();
  showScreen("quiz");
}

function showHomeComingSoon(title) {
  var msg = title + " به‌زودی به لغت‌یار اضافه می‌شود.";
  var t = document.getElementById("reminderToast");
  if (t) {
    t.textContent = msg;
    t.classList.add("show");
    setTimeout(function () { t.classList.remove("show"); }, 2800);
    return;
  }
  try { alert(msg); } catch (e) { }
}

// Bind Home buttons
function bindHomeEvents() {
  document.getElementById("homeRouteVocabulary")?.addEventListener("click", function () { showScreen("vocabularyLevels"); });
  document.getElementById("homeRouteIdioms")?.addEventListener("click", function () { showScreen("idioms"); });
  document.getElementById("homeRoutePhrasal")?.addEventListener("click", function () { showScreen("phrasalLevels"); });
  document.getElementById("homeRouteStories")?.addEventListener("click", function () { showScreen("stories"); });
  document.getElementById("homeRoutePodcast")?.addEventListener("click", function () { showHomeComingSoon("پادکست"); });

  // Home Exercise Banners
  document.getElementById("homeBannerReview")?.addEventListener("click", function () { startReviewSession(); });
  document.getElementById("homeBannerQuiz")?.addEventListener("click", function () { startQuiz("A1"); });
  document.getElementById("homeBannerCloze")?.addEventListener("click", function () { startCloze("A1"); });
  document.getElementById("homeBannerDialogue")?.addEventListener("click", function () { showScreen("dialogue"); });

  // Vocab levels & sub screens
  document.getElementById("backToHomeFromVocabularyLevels")?.addEventListener("click", function () { showScreen("category"); });
  document.getElementById("backToVocabularyLevelsFromA1")?.addEventListener("click", function () { showScreen("vocabularyLevels"); });
  document.getElementById("backToHomeFromStories")?.addEventListener("click", function () { showScreen("category"); });
  document.getElementById("vocabLevelA1Btn")?.addEventListener("click", function () { showScreen("vocabularyA1"); });
  document.getElementById("vocabLevelA2Btn")?.addEventListener("click", function () { showScreen("a2"); });
  document.getElementById("storyA1First")?.addEventListener("click", function () { showHomeComingSoon("داستان A1"); });

  var lockedLevels = document.querySelectorAll(".vocab-level-lane[data-coming-soon]");
  for (var j = 0; j < lockedLevels.length; j++) {
    lockedLevels[j].addEventListener("click", function () {
      showHomeComingSoon("سطح " + this.getAttribute("data-coming-soon"));
    });
  }

  var vocabCategoryBtns = document.querySelectorAll("[data-vocab-category]");
  for (var v = 0; v < vocabCategoryBtns.length; v++) {
    vocabCategoryBtns[v].addEventListener("click", function () {
      selectCategory(this.getAttribute("data-vocab-category"));
    });
  }

  // Drawer
  document.getElementById("categoryMenuBtn")?.addEventListener("click", openCategoryDrawer);
  document.getElementById("closeCategoryDrawer")?.addEventListener("click", closeCategoryDrawer);
  document.getElementById("categoryDrawerOverlay")?.addEventListener("click", closeCategoryDrawer);

  var drawerBtns = document.querySelectorAll(".drawer-category-btn[data-category]");
  for (var d = 0; d < drawerBtns.length; d++) {
    drawerBtns[d].addEventListener("click", function () { selectCategory(this.getAttribute("data-category")); });
  }

  document.getElementById("drawerReviewBtn")?.addEventListener("click", function () { closeCategoryDrawer(); startReviewSession(); });
  document.getElementById("drawerIdiomsBtn")?.addEventListener("click", function () { closeCategoryDrawer(); showScreen("idioms"); });
  document.getElementById("drawerQuizBtn")?.addEventListener("click", function () { closeCategoryDrawer(); startQuiz("A1"); });
  document.getElementById("drawerClozeBtn")?.addEventListener("click", function () { closeCategoryDrawer(); startCloze("A1"); });
  document.getElementById("drawerDialogueBtn")?.addEventListener("click", function () { closeCategoryDrawer(); showScreen("dialogue"); });
  document.getElementById("drawerA2Btn")?.addEventListener("click", function () { closeCategoryDrawer(); showScreen("a2"); });

  // Continue learning card
  document.getElementById("continueLearningCard")?.addEventListener("click", function () {
    var path = readLearningPath();
    if (path && path.category && CATEGORIES[path.category] && CATEGORIES[path.category].words) {
      var total = CATEGORIES[path.category].words.length;
      var pos = progress.pos && typeof progress.pos[path.category] === "number" ? progress.pos[path.category] : path.index || 0;
      if (total && pos >= total) pos = 0;
      if (pos < 0) pos = 0;
      progress.pos[path.category] = pos;
      saveLearningPath(path.category, pos);
      selectCategory(path.category, "home");
      return;
    }
    showScreen("vocabularyLevels");
  });

  // A2 Categories
  document.getElementById("categoryA2Everyday")?.addEventListener("click", function () { selectCategory("a2everyday"); });
  document.getElementById("categoryA2Travel")?.addEventListener("click", function () { selectCategory("a2travel"); });
  document.getElementById("categoryA2Food")?.addEventListener("click", function () { selectCategory("a2food"); });
  document.getElementById("categoryA2Work")?.addEventListener("click", function () { selectCategory("a2work"); });
  document.getElementById("categoryA2Kitchen")?.addEventListener("click", function () { selectCategory("a2Kitchen"); });
  document.getElementById("categoryA2Bathroom")?.addEventListener("click", function () { selectCategory("a2Bathroom"); });
  document.getElementById("categoryA2Car")?.addEventListener("click", function () { selectCategory("a2Car"); });

  // Idioms
  document.getElementById("idiomSubEveryday")?.addEventListener("click", function () { selectCategory("idiomEveryday"); });
  document.getElementById("idiomSubFeelings")?.addEventListener("click", function () { selectCategory("idiomFeelings"); });
  document.getElementById("idiomSubEffort")?.addEventListener("click", function () { selectCategory("idiomEffort"); });
  document.getElementById("idiomSubBehavior")?.addEventListener("click", function () { selectCategory("idiomBehavior"); });
  document.getElementById("backToHomeFromIdioms")?.addEventListener("click", function () { showScreen("category"); });

  // Phrasal Verbs Level Hub & Screens
  document.getElementById("backToHomeFromPhrasalLevels")?.addEventListener("click", function () { showScreen("category"); });
  document.getElementById("phrasalLevelA1Btn")?.addEventListener("click", function () { showScreen("phrasalA1"); });
  document.getElementById("phrasalLevelA2Btn")?.addEventListener("click", function () { showScreen("phrasalA2"); });
  document.getElementById("phrasalLevelB1Btn")?.addEventListener("click", function () { showScreen("phrasalB1"); });
  document.getElementById("phrasalLevelB2Btn")?.addEventListener("click", function () { showScreen("phrasalB2"); });

  // Back to Phrasal Levels from specific level screens
  document.getElementById("backToPhrasalLevelsFromA1")?.addEventListener("click", function () { showScreen("phrasalLevels"); });
  document.getElementById("backToPhrasalLevelsFromA2")?.addEventListener("click", function () { showScreen("phrasalLevels"); });
  document.getElementById("backToPhrasalLevelsFromB1")?.addEventListener("click", function () { showScreen("phrasalLevels"); });
  document.getElementById("backToPhrasalLevelsFromB2")?.addEventListener("click", function () { showScreen("phrasalLevels"); });

  // Phrasal Verb category tiles
  document.getElementById("categoryPvA1")?.addEventListener("click", function () { selectCategory("pv_a1"); });
  document.getElementById("categoryPvA2Home")?.addEventListener("click", function () { selectCategory("pv_a2_home"); });
  document.getElementById("categoryPvA2Social")?.addEventListener("click", function () { selectCategory("pv_a2_social"); });
  document.getElementById("categoryPvB1Clothes")?.addEventListener("click", function () { selectCategory("pv_b1_clothes"); });
  document.getElementById("categoryPvB1Home")?.addEventListener("click", function () { selectCategory("pv_b1_home"); });
  document.getElementById("categoryPvB1Routine")?.addEventListener("click", function () { selectCategory("pv_b1_routine"); });
  document.getElementById("categoryPvB1Work")?.addEventListener("click", function () { selectCategory("pv_b1_work"); });
  document.getElementById("categoryPvB1Social")?.addEventListener("click", function () { selectCategory("pv_b1_social"); });
  document.getElementById("categoryPvB2Social")?.addEventListener("click", function () { selectCategory("pv_b2_social"); });
  document.getElementById("categoryPvB2Challenges")?.addEventListener("click", function () { selectCategory("pv_b2_challenges"); });
  document.getElementById("categoryPvA2Transport")?.addEventListener("click", function () { selectCategory("pv_a2_transport"); });
  document.getElementById("categoryPvA2Movement")?.addEventListener("click", function () { selectCategory("pv_a2_movement"); });
  document.getElementById("categoryPvA2Objects")?.addEventListener("click", function () { selectCategory("pv_a2_objects"); });
  document.getElementById("categoryPvB1Food")?.addEventListener("click", function () { selectCategory("pv_b1_food"); });
  document.getElementById("categoryPvB1Communication")?.addEventListener("click", function () { selectCategory("pv_b1_communication"); });
  document.getElementById("categoryPvB1Progress")?.addEventListener("click", function () { selectCategory("pv_b1_progress"); });
  document.getElementById("categoryPvB1Changes")?.addEventListener("click", function () { selectCategory("pv_b1_changes"); });
  document.getElementById("categoryPvB2Discourse")?.addEventListener("click", function () { selectCategory("pv_b2_discourse"); });
  document.getElementById("categoryPvB2Wellbeing")?.addEventListener("click", function () { selectCategory("pv_b2_wellbeing"); });
  document.getElementById("categoryPvB2Endeavor")?.addEventListener("click", function () { selectCategory("pv_b2_endeavor"); });
  document.getElementById("categoryPvB2Situations")?.addEventListener("click", function () { selectCategory("pv_b2_situations"); });

  // Dialogue
  document.getElementById("backToHomeFromDialogue")?.addEventListener("click", function () { showScreen("category"); });
  document.getElementById("dialogueNextBtn")?.addEventListener("click", function () {
    dialogueIndex = (dialogueIndex + 1) % TEEN_DIALOGUES.length;
    renderDialogue();
  });
  document.getElementById("dialogueLearnWordsBtn")?.addEventListener("click", function () { selectCategory("teenLife", "dialogue"); });
  document.getElementById("sentenceClearBtn")?.addEventListener("click", function () {
    handleSentenceClear();
  });
  document.getElementById("sentenceCheckBtn")?.addEventListener("click", function () {
    handleSentenceCheck();
  });

  // Quiz back / again
  document.getElementById("quizBackBtn")?.addEventListener("click", function () { showScreen("category"); });
  document.getElementById("quizAgainBtn")?.addEventListener("click", function () {
    if (quiz.mode === "cloze") startCloze(quizLevel);
    else startQuiz(quizLevel);
  });
  document.getElementById("quizHomeBtn")?.addEventListener("click", function () { showScreen("category"); });
  document.getElementById("quizSpeak")?.addEventListener("click", function () { speakWord(quiz.qs[quiz.i].word); });

  var quizLevelBtns = document.querySelectorAll(".quiz-level-btn");
  for (var qlb = 0; qlb < quizLevelBtns.length; qlb++) {
    quizLevelBtns[qlb].addEventListener("click", function () {
      var lv = this.getAttribute("data-quiz-level");
      if (quiz.mode === "cloze") startCloze(lv);
      else startQuiz(lv);
    });
  }

  // Quiz Mode Pills (Classic, Category Streak, Boss Round)
  document.getElementById("quizModeClassic")?.addEventListener("click", function () {
    quizSpecialMode = "classic";
    updateQuizModesUI();
    if (quiz.mode === "cloze") startCloze(quizLevel);
    else startQuiz(quizLevel);
  });
  document.getElementById("quizModeStreak")?.addEventListener("click", function () {
    quizSpecialMode = "streak";
    var eligible = getEligibleStreakCategories(quizLevel);
    quizCategoryStreakKey = eligible.length > 0 ? eligible[0] : "everyday";
    updateQuizModesUI();
    if (quiz.mode === "cloze") startCloze(quizLevel);
    else startQuiz(quizLevel);
  });
  document.getElementById("quizModeBoss")?.addEventListener("click", function () {
    var counters = getBossCounters();
    if ((counters[quizLevel] || 0) < 3) {
      var toast = document.getElementById("reminderToast");
      if (toast) {
        toast.textContent = "برای باز شدن راند رئیس، ابتدا ۳ دور در سطح " + quizLevel + " بازی کن! (فعلاً " + toPersianDigits(counters[quizLevel] || 0) + " از ۳)";
        toast.classList.add("visible");
        setTimeout(function () { toast.classList.remove("visible"); }, 2800);
      }
      return;
    }
    quizSpecialMode = "boss";
    updateQuizModesUI();
    if (quiz.mode === "cloze") startCloze(quizLevel);
    else startQuiz(quizLevel);
  });

  // Quiz Risk Multiplier buttons (x1, x2, x3)
  var riskBtns = document.querySelectorAll(".quiz-risk-btn");
  for (var rb = 0; rb < riskBtns.length; rb++) {
    riskBtns[rb].addEventListener("click", function () {
      quizRiskMultiplier = parseInt(this.getAttribute("data-risk"), 10) || 1;
      updateQuizModesUI();
    });
  }

  updateQuizModesUI();

  document.getElementById("backToHomeFromA2")?.addEventListener("click", function () { showScreen("vocabularyLevels"); });
  document.getElementById("backToCategoryBtn")?.addEventListener("click", function () {
    if (appOrigin === "home" || currentCategoryKey === "__review") {
      appOrigin = null;
      showScreen("category");
      return;
    }
    if (appOrigin === "dialogue") {
      appOrigin = null;
      showScreen("dialogue");
      return;
    }
    if (appOrigin) {
      var orig = appOrigin;
      appOrigin = null;
      showScreen(orig);
      return;
    }
    appOrigin = null;
    var t = "vocabularyA1";
    if (currentCategoryKey.indexOf("idiom") === 0) t = "idioms";
    else if (currentCategoryKey.indexOf("a2") === 0) t = "a2";
    else if (currentCategoryKey.indexOf("pv_a1") === 0) t = "phrasalA1";
    else if (currentCategoryKey.indexOf("pv_a2") === 0) t = "phrasalA2";
    else if (currentCategoryKey.indexOf("pv_b1") === 0) t = "phrasalB1";
    else if (currentCategoryKey.indexOf("pv_b2") === 0) t = "phrasalB2";
    else if (currentCategoryKey.indexOf("pv") === 0 || currentCategoryKey.indexOf("phrasal") === 0) t = "phrasalLevels";
    showScreen(t);
  });

  // Navigation items
  var navItems = document.querySelectorAll(".nav-item");
  for (var ni = 0; ni < navItems.length; ni++) {
    navItems[ni].addEventListener("click", function () {
      showScreen(this.getAttribute("data-target"));
    });
  }

  // Settings
  var avatarBtns = document.querySelectorAll(".avatar-choice");
  for (var ac = 0; ac < avatarBtns.length; ac++) {
    avatarBtns[ac].addEventListener("click", function () {
      progress.settings.avatar = this.getAttribute("data-avatar") || "student";
      saveProgress();
      syncPersonalizationUI();
    });
  }

  var soundSwitch = document.getElementById("soundSwitch");
  if (soundSwitch) {
    soundSwitch.addEventListener("change", function () {
      progress.settings.sound = this.checked;
      saveProgress();
      document.getElementById("soundSub").textContent = this.checked ? "فعال" : "غیرفعال";
    });
  }

  var reminderSwitch = document.getElementById("reminderSwitch");
  var reminderTime = document.getElementById("reminderTime");
  if (reminderSwitch) {
    reminderSwitch.addEventListener("change", function () {
      progress.settings.reminder = this.checked;
      saveProgress();
      syncReminderUI();
    });
  }
  if (reminderTime) {
    reminderTime.addEventListener("change", function () {
      progress.settings.reminderTime = this.value || "20:00";
      saveProgress();
      syncReminderUI();
    });
  }

  var resetBtn = document.getElementById("resetProgressBtn");
  var resetConfirm = document.getElementById("resetConfirm");
  if (resetBtn) {
    resetBtn.addEventListener("click", function () {
      resetBtn.style.display = "none";
      if (resetConfirm) resetConfirm.style.display = "flex";
    });
  }
  document.getElementById("resetCancel")?.addEventListener("click", function () {
    if (resetConfirm) resetConfirm.style.display = "none";
    if (resetBtn) resetBtn.style.display = "";
  });
  document.getElementById("resetYes")?.addEventListener("click", function () {
    try { safeStorageRemove(PROGRESS_KEY); } catch (e) { }
    location.reload();
  });
}

// Run initial setups
(function init() {
  console.log("🚀 Lumi (لغت‌یار) " + APP_VERSION + " | Build: " + BUILD_TIMESTAMP);
  updateStreak();
  updateTileProgress();
  syncPersonalizationUI();
  syncReminderUI();
  updateHomeDashboard();
  bindHomeEvents();
  render();

  var screenLoadingEl = document.getElementById("screenLoading");
  setTimeout(function () {
    screenLoadingEl?.classList.remove("active");
    showScreen("category");
  }, 1800);
})();

// Vocabulary Audit function
function auditVocabularyData() {
  var report = {
    totalWords: 0,
    missingExamples: [],
    lessThanThreeExamples: [],
    invalidEntries: []
  };
  for (var catKey in CATEGORIES) {
    var category = CATEGORIES[catKey];
    if (!category.words || !Array.isArray(category.words)) {
      report.invalidEntries.push({ category: catKey, reason: "Missing words array" });
      continue;
    }
    for (var i = 0; i < category.words.length; i++) {
      var item = category.words[i];
      report.totalWords++;
      var location = { category: catKey, word: item.word || "(unknown)" };
      if (!item.word || !item.meaning) {
        report.invalidEntries.push({ category: catKey, word: item.word || "(unknown)", reason: "Missing word or meaning" });
      }
      if (!item.examples || !Array.isArray(item.examples)) {
        report.missingExamples.push(location);
      } else if (item.examples.length < 3) {
        report.lessThanThreeExamples.push({ category: catKey, word: item.word, count: item.examples.length });
      }
    }
  }
  return report;
}

if (typeof window !== "undefined") {
  window.auditVocabularyData = auditVocabularyData;
  window.TEEN_DIALOGUES = TEEN_DIALOGUES;
  window.renderDialogue = renderDialogue;
  window.handleSentenceCheck = handleSentenceCheck;
  window.handleSentenceClear = handleSentenceClear;
}
