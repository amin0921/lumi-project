# 📁 Project: loghat-yar project

**📊 Project Overview (Selected Files):**
- Total Files: 1
- Total Size: 100.65 KB
- Total Lines: 1,595
- Estimated Tokens: ~23,075 (approx. for LLMs)

**📋 Top File Types:**
- .js: 1

🔖 Legend: ✓=included · ✗=excluded · 📂=folder

## 🌳 Project Structure

```
loghat-yar project/
└── 📂 js/
    └── app.js ✓
```

## 📄 Files Content

*Files are listed in alphabetical order by path.*

================================================================================
📄 **js\app.js**
Size: 100.65 KB | Lines: 1595
================================================================================

```javascript
var APP_VERSION = "v2.20.1";
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
      { word: "door", meaning: "در", en: "Please close the door.", fa: "لطفاً در را ببند.", icon: "🚪", examples: [{ en: "Please close the door.", fa: "لطفاً در را ببند." }, { en: "Someone is at the door.", fa: "یک نفر پشت در است." }, { en: "The door is open.", fa: "در باز است." }] }
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
      { word: "camera", meaning: "دوربین", en: "I take my camera everywhere.", fa: "من دوربینم را همه‌جا می‌برم.", icon: "📷", examples: [{ en: "I take my camera everywhere.", fa: "من دوربینم را همه‌جا می‌برم." }, { en: "This camera takes great photos.", fa: "این دوربین عکس‌های عالی می‌گیرد." }, { en: "She bought a new camera.", fa: "او یک دوربین جدید خرید." }] }
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
      { word: "coffee", meaning: "قهوه", en: "I drink coffee in the morning.", fa: "من صبح‌ها قهوه می‌نوشم.", icon: "☕", examples: [{ en: "I drink coffee in the morning.", fa: "من صبح‌ها قهوه می‌نوشم." }, { en: "He never drinks coffee at night.", fa: "او هرگز شب‌ها قهوه نمی‌نوشد." }, { en: "The coffee here is famous.", fa: "قهوه اینجا معروف است." }] }
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
      { word: "call", meaning: "تماس", en: "I need to make a phone call.", fa: "من باید یک تماس تلفنی بگیرم.", icon: "📞", examples: [{ en: "I need to make a phone call.", fa: "من باید یک تماس تلفنی بگیرم." }, { en: "The call lasted ten minutes.", fa: "تماس ده دقیقه طول کشید." }, { en: "I missed your call, sorry.", fa: "تماست را از دست دادم، ببخشید." }] }
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
      { word: "kind", meaning: "مهربان", en: "My friend is kind to everyone.", fa: "دوستم با همه مهربان است.", icon: "💜", examples: [{ en: "My friend is kind to everyone.", fa: "دوستم با همه مهربان است." }, { en: "That was a kind message.", fa: "آن یک پیام مهربانانه بود." }, { en: "Always be kind to others.", fa: "همیشه با دیگران مهربان باش." }] }
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
  }
};

var TEEN_DIALOGUES = [
  {
    scene: "مدرسه",
    lines: [
      { who: "A", en: "Hi! How are you today?", fa: "سلام! امروز حالت چطوره؟" },
      { who: "B", en: "I am a little shy, but I am okay.", fa: "کمی خجالتی‌ام، ولی خوبم." },
      { who: "A", en: "You are doing great.", fa: "داری عالی پیش می‌ری." }
    ],
    question: "دوستت می‌گه خجالتیه. چی جواب می‌دی؟",
    options: [
      { text: "You are doing great.", fa: "داری عالی پیش می‌ری.", good: true },
      { text: "Go away.", fa: "برو کنار.", good: false },
      { text: "I do not care.", fa: "برایم مهم نیست.", good: false }
    ]
  },
  {
    scene: "پیام دوستانه",
    lines: [
      { who: "A", en: "I like your style.", fa: "از استایلت خوشم می‌آید." },
      { who: "B", en: "Thank you! That is kind.", fa: "ممنون! خیلی مهربانانه بود." },
      { who: "A", en: "You look confident today.", fa: "امروز بااعتمادبه‌نفس به نظر می‌رسی." }
    ],
    question: "یکی ازت تعریف می‌کنه. جواب بهتر چیه؟",
    options: [
      { text: "Thank you!", fa: "ممنون!", good: true },
      { text: "No, never.", fa: "نه، هرگز.", good: false },
      { text: "Stop talking.", fa: "حرف نزن.", good: false }
    ]
  },
  {
    scene: "حال‌و‌هوا",
    lines: [
      { who: "A", en: "What is your mood today?", fa: "امروز حال‌وهوایت چطوره؟" },
      { who: "B", en: "I feel calm and proud.", fa: "احساس آرامش و افتخار دارم." },
      { who: "A", en: "That is beautiful.", fa: "این خیلی قشنگه." }
    ],
    question: "می‌خوای حال خوبت رو بگی. کدوم بهتره؟",
    options: [
      { text: "I feel calm and proud.", fa: "احساس آرامش و افتخار دارم.", good: true },
      { text: "I am a table.", fa: "من یک میز هستم.", good: false },
      { text: "The bus is old.", fa: "اتوبوس قدیمی است.", good: false }
    ]
  }
];

var dialogueIndex = 0;
var SENTENCE_WORDS = [
  { words: ["I", "feel", "confident", "today"], fa: "امروز احساس اعتمادبه‌نفس دارم." },
  { words: ["My", "friend", "is", "kind"], fa: "دوست من مهربان است." },
  { words: ["I", "like", "your", "style"], fa: "من استایل تو را دوست دارم." }
];

var currentSentenceWords = [];
var sentenceIndex = 0;
var currentCategoryKey = "everyday";
var WORDS = CATEGORIES[currentCategoryKey].words;
var PROGRESS_KEY = "lughatyar_progress_v1";
var LEARNING_PATH_KEY = "lughatyar_learning_path_v1";

function isPlainObject(value) {
  return value && typeof value === "object" && !Array.isArray(value);
}

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
  return safe;
}

var progress = normalizeProgress(null);
try {
  var rawProgress = localStorage.getItem(PROGRESS_KEY);
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
    localStorage.setItem(PROGRESS_KEY, JSON.stringify(progress));
  } catch (e) { }
}

function currentWordKey() { return (WORDS[idx].__cat || currentCategoryKey) + "|" + WORDS[idx].word; }
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
      var rec = progress.words[cat + "|" + w.word];
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
    var r = progress.words[catKey + "|" + ws[i].word];
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
  var a2Known = knownCountMany(["a2everyday", "a2travel", "a2food", "a2work"]);
  el.textContent = a2Known > 0 ? "A2" : "A1";
}

function renderAchievements() {
  var box = document.getElementById("achievementBadges");
  if (!box) return;
  var a2Known = knownCountMany(["a2everyday", "a2travel", "a2food", "a2work"]);
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
    a2everyday: "a2MetaEveryday",
    a2travel: "a2MetaTravel",
    a2food: "a2MetaFood",
    a2work: "a2MetaWork",
    everyday: "a1MetaEveryday",
    travel: "a1MetaTravel",
    food: "a1MetaFood",
    work: "a1MetaWork",
    teenLife: "a1MetaTeenLife"
  };
  for (var skey in subMap) {
    var sel = document.getElementById(subMap[skey]);
    if (sel && CATEGORIES[skey]) {
      var stotal = CATEGORIES[skey].words.length;
      var spct = Math.round(knownCount(skey) / stotal * 100);
      sel.textContent = toPersianDigits(stotal) + " لغت • " + toPersianDigits(spct) + "٪";
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
var examplesWordTitle = document.getElementById("examplesWordTitle");
var examplesList = document.getElementById("examplesList");
var backFromExamplesBtn = document.getElementById("backFromExamplesBtn");
var counter = document.getElementById("counter");
var progressFill = document.getElementById("progressFill");
var prevBtn = document.getElementById("prevBtn");
var nextBtn = document.getElementById("nextBtn");
var speakBtn = document.getElementById("speakBtn");
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
    var lastDate = localStorage.getItem("lughatyar_lastDate");
    var streak = parseInt(localStorage.getItem("lughatyar_streak") || "0", 10);
    if (lastDate !== todayStr) {
      var yesterday = new Date(today);
      yesterday.setDate(today.getDate() - 1);
      var yesterdayStr = yesterday.getFullYear() + "-" + (yesterday.getMonth() + 1) + "-" + yesterday.getDate();
      streak = (lastDate === yesterdayStr) ? streak + 1 : 1;
      localStorage.setItem("lughatyar_streak", String(streak));
      localStorage.setItem("lughatyar_lastDate", todayStr);
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
  var cleanKey = String(key).replace(/\s+/g, '');
  return (cleanKey.indexOf("a2") === 0) ? "A2" : "A1";
}

function updateLevelBadge() {
  var w = WORDS[idx];
  var key = (w && w.__cat) ? w.__cat : currentCategoryKey;
  var badge = document.getElementById("levelBadge");
  if (badge) badge.textContent = levelOfCategory(key);
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
    return JSON.parse(localStorage.getItem(LEARNING_PATH_KEY) || "null");
  } catch (e) {
    return null;
  }
}

function saveLearningPath(category, index) {
  if (!category || category.indexOf("__") === 0) return;
  if (!CATEGORIES[category]) return;
  try {
    localStorage.setItem(LEARNING_PATH_KEY, JSON.stringify({
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
    bannerReviewSub.textContent = due > 0 ? (toPersianDigits(due) + " لغت آماده مرور") : "امروز همه‌چیز مرور شده 🎉";
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

  document.body.setAttribute("data-active", (name === "a2" || name === "vocabularyLevels" || name === "vocabularyA1") ? "category" : name);
  var navT = (name === "idioms" || name === "a2" || name === "dialogue" || name === "stories" || name === "vocabularyLevels" || name === "vocabularyA1") ? "category" : name;
  var allNavBtns = document.querySelectorAll("#sharedNav .nav-item");
  for (var nb = 0; nb < allNavBtns.length; nb++) {
    allNavBtns[nb].classList.toggle("active", allNavBtns[nb].getAttribute("data-target") === navT);
  }
}

function selectCategory(key) {
  if (!CATEGORIES[key] || !CATEGORIES[key].words) return;
  closeCategoryDrawer();
  currentCategoryKey = key;
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
    var bannerReviewSub = document.getElementById("homeBannerReviewSub");
    if (bannerReviewSub) bannerReviewSub.textContent = "امروز همه‌چیز مرور شده 🎉";
    updateHomeDashboard();
    return;
  }
  CATEGORIES.__review = { name: "مرور امروز", words: due.map(function (x) { x.w.__cat = x.cat; return x.w; }) };
  selectCategory("__review");
}

function renderSentenceBuilder() {
  var box = document.getElementById("sentenceWords");
  var result = document.getElementById("sentenceResult");
  if (!box || !result) return;
  box.innerHTML = "";
  currentSentenceWords = [];
  var data = SENTENCE_WORDS[sentenceIndex];
  for (var i = 0; i < data.words.length; i++) {
    (function (word) {
      var btn = document.createElement("button");
      btn.type = "button";
      btn.className = "sentence-word-btn";
      btn.textContent = word;
      btn.addEventListener("click", function () {
        currentSentenceWords.push(word);
        updateSentenceResult();
      });
      box.appendChild(btn);
    })(data.words[i]);
  }
  result.textContent = "هنوز جمله‌ای نساختی.";
}

function updateSentenceResult() {
  var result = document.getElementById("sentenceResult");
  if (!result) return;
  if (currentSentenceWords.length === 0) {
    result.textContent = "هنوز جمله‌ای نساختی.";
    return;
  }
  result.textContent = currentSentenceWords.join(" ");
}

function renderDialogue() {
  var data = TEEN_DIALOGUES[dialogueIndex] || TEEN_DIALOGUES[0];
  var sceneEl = document.getElementById("dialogueScene");
  var linesEl = document.getElementById("dialogueLines");
  var questionEl = document.getElementById("roleplayQuestion");
  var optionsEl = document.getElementById("roleplayOptions");
  var feedbackEl = document.getElementById("roleplayFeedback");
  if (!sceneEl || !linesEl || !questionEl || !optionsEl || !feedbackEl) return;
  sceneEl.textContent = data.scene;
  questionEl.textContent = data.question;
  feedbackEl.textContent = "";
  feedbackEl.className = "roleplay-feedback";
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
  renderSentenceBuilder();
  optionsEl.innerHTML = "";
  var shuffledOptions = data.options.slice().sort(function () { return Math.random() - 0.5; });
  for (var j = 0; j < shuffledOptions.length; j++) {
    (function (opt) {
      var btn = document.createElement("button");
      btn.type = "button";
      btn.className = "roleplay-option";
      btn.innerHTML = "<span>" + opt.text + "</span><small>" + opt.fa + "</small>";
      btn.addEventListener("click", function () {
        var all = document.querySelectorAll(".roleplay-option");
        for (var k = 0; k < all.length; k++) all[k].classList.remove("picked");
        btn.classList.add("picked");
        if (opt.good) {
          feedbackEl.textContent = "آفرین 🌸 این جواب هم مهربونه، هم طبیعی.";
          feedbackEl.className = "roleplay-feedback good";
        } else {
          feedbackEl.textContent = "این یکی خیلی مناسب نیست. جواب مهربان‌تر رو انتخاب کن.";
          feedbackEl.className = "roleplay-feedback soft";
        }
      });
      optionsEl.appendChild(btn);
    })(shuffledOptions[j]);
  }
}

var QUIZ_LEN = 10;
var quizLevel = "A1";
var quiz = { qs: [], i: 0, correct: 0, level: quizLevel, mode: "meaning" };

function shuffleArr(a) { for (var i = a.length - 1; i > 0; i--) { var j = Math.floor(Math.random() * (i + 1)); var t = a[i]; a[i] = a[j]; a[j] = t; } return a; }

function categoryMatchesQuizLevel(cat, level) {
  if (cat.indexOf("__") === 0) return false;
  var isA2 = cat.indexOf("a2") === 0;
  if (level === "A2") return isA2;
  return !isA2 && cat.indexOf("idiom") !== 0;
}

function getQuizLevelStats(level) {
  if (!progress.quiz) progress.quiz = { plays: 0, best: 0 };
  if (!progress.quiz.byLevel) progress.quiz.byLevel = {};
  if (!progress.quiz.byLevel[level]) progress.quiz.byLevel[level] = { plays: 0, best: 0 };
  return progress.quiz.byLevel[level];
}

function setQuizLevel(level) {
  quizLevel = level === "A2" ? "A2" : "A1";
  var levelBtns = document.querySelectorAll(".quiz-level-btn");
  for (var i = 0; i < levelBtns.length; i++) {
    levelBtns[i].classList.toggle("active", levelBtns[i].getAttribute("data-quiz-level") === quizLevel);
  }
}

function makeClozePrompt(w) {
  var sent = (w.en || "").trim();
  var word = (w.word || "").trim();
  if (!sent || !word) return "____";
  var safe = word.replace(/[.*+?^${}()|[\\]\\\\]/g, "\\$&");
  var re = new RegExp("\\b" + safe + "\\w*\\b", "i");
  if (re.test(sent)) return sent.replace(re, "____");
  var first = word.split(/\s+/)[0].replace(/[.*+?^${}()|[\\]\\\\]/g, "\\$&");
  var re2 = new RegExp("\\b" + first + "\\w*\\b", "i");
  if (re2.test(sent)) return sent.replace(re2, "____");
  return sent + " (____)";
}

function buildCloze(level) {
  level = level === "A2" ? "A2" : "A1";
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
    var pool = CATEGORIES[item.cat].words.filter(function (x) { return x.word !== item.w.word; });
    shuffleArr(pool);
    var opts = [];
    for (var d = 0; d < 3 && d < pool.length; d++) opts.push(pool[d].word);
    opts.push(item.w.word);
    shuffleArr(opts);
    quiz.qs.push({
      word: item.w.word,
      answer: item.w.word,
      options: opts,
      cat: item.cat,
      level: level,
      prompt: makeClozePrompt(item.w),
      hint: item.w.meaning || item.w.fa || ""
    });
  }
  quiz.i = 0;
  quiz.correct = 0;
  quiz.level = level;
  quiz.mode = "cloze";
}

function startCloze(level) {
  if (typeof level === "string") setQuizLevel(level);
  else setQuizLevel(quizLevel);
  buildCloze(quizLevel);
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
  level = level === "A2" ? "A2" : "A1";
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
    var pool = CATEGORIES[picked[p].cat].words.filter(function (x) { return x.word !== picked[p].w.word; });
    shuffleArr(pool);
    var opts = [];
    for (var d = 0; d < 3 && d < pool.length; d++) opts.push(pool[d].fa);
    opts.push(picked[p].w.fa);
    shuffleArr(opts);
    quiz.qs.push({
      word: picked[p].w.word,
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
}

function renderQuiz() {
  var q = quiz.qs[quiz.i];
  var wordEl = document.getElementById("quizWord");
  var hintEl = document.getElementById("quizHint");
  if (quiz.mode === "cloze") {
    wordEl.textContent = q.prompt || "____";
    wordEl.classList.add("cloze-sentence");
    if (hintEl) hintEl.textContent = q.hint ? ("معنی: " + q.hint) : "لغت انگلیسی مناسب را انتخاب کن";
  } else {
    wordEl.textContent = q.word;
    wordEl.classList.remove("cloze-sentence");
    if (hintEl) hintEl.textContent = "معنی درست را انتخاب کن";
  }
  document.getElementById("quizCount").textContent = toPersianDigits(quiz.i + 1) + " / " + toPersianDigits(quiz.qs.length);
  document.getElementById("quizProgressFill").style.width = ((quiz.i) / quiz.qs.length * 100) + "%";
  var box = document.getElementById("quizOptions");
  box.innerHTML = "";
  for (var o = 0; o < q.options.length; o++) {
    (function (optText) {
      var b = document.createElement("button");
      b.className = "quiz-option";
      b.textContent = optText;
      b.addEventListener("click", function () { answerQuiz(optText, b, q); });
      box.appendChild(b);
    })(q.options[o]);
  }
}

function answerQuiz(picked, btn, q) {
  var opts = document.querySelectorAll("#quizOptions .quiz-option");
  for (var k = 0; k < opts.length; k++) {
    opts[k].classList.add("locked");
    if (opts[k].textContent === q.answer) opts[k].classList.add("correct");
  }
  if (picked === q.answer) {
    quiz.correct++;
  } else {
    btn.classList.add("wrong");
    var key = q.cat + "|" + q.word;
    var rec = progress.words[key];
    if (rec && rec.s === "k") { rec.s = "u"; rec.n = 0; rec.d = todayStr(); saveProgress(); }
  }
  setTimeout(function () {
    quiz.i++;
    if (quiz.i >= quiz.qs.length) showQuizResults();
    else renderQuiz();
  }, 900);
}

function showQuizResults() {
  if (!progress.quiz) progress.quiz = { plays: 0, best: 0 };
  var stats = getQuizLevelStats(quiz.level);
  stats.plays++;
  if (quiz.correct > stats.best) stats.best = quiz.correct;
  progress.quiz.plays = (progress.quiz.plays || 0) + 1;
  if (quiz.correct > (progress.quiz.best || 0)) progress.quiz.best = quiz.correct;
  trackMissionQuiz();
  saveProgress();
  var emoji = quiz.correct >= 9 ? "🏆" : quiz.correct >= 7 ? "🎉" : quiz.correct >= 5 ? "💪" : "📚";
  document.getElementById("quizResultEmoji").textContent = emoji;
  document.getElementById("quizResultText").textContent = toPersianDigits(quiz.correct) + " از " + toPersianDigits(quiz.qs.length) + " درست!";
  document.getElementById("quizResultBest").textContent = "بهترین رکورد " + quiz.level + ": " + toPersianDigits(stats.best) + " از " + toPersianDigits(QUIZ_LEN);
  document.getElementById("quizPlayArea").style.display = "none";
  document.getElementById("quizResults").style.display = "flex";
  updateHomeDashboard();
}

function startQuiz(level) {
  if (typeof level === "string") setQuizLevel(level);
  else setQuizLevel(quizLevel);
  quiz.mode = "meaning";
  buildQuiz(quizLevel);
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
      selectCategory(path.category);
      return;
    }
    showScreen("vocabularyLevels");
  });

  // A2 Categories
  document.getElementById("categoryA2Everyday")?.addEventListener("click", function () { selectCategory("a2everyday"); });
  document.getElementById("categoryA2Travel")?.addEventListener("click", function () { selectCategory("a2travel"); });
  document.getElementById("categoryA2Food")?.addEventListener("click", function () { selectCategory("a2food"); });
  document.getElementById("categoryA2Work")?.addEventListener("click", function () { selectCategory("a2work"); });

  // Idioms
  document.getElementById("idiomSubEveryday")?.addEventListener("click", function () { selectCategory("idiomEveryday"); });
  document.getElementById("idiomSubFeelings")?.addEventListener("click", function () { selectCategory("idiomFeelings"); });
  document.getElementById("idiomSubEffort")?.addEventListener("click", function () { selectCategory("idiomEffort"); });
  document.getElementById("idiomSubBehavior")?.addEventListener("click", function () { selectCategory("idiomBehavior"); });
  document.getElementById("backToHomeFromIdioms")?.addEventListener("click", function () { showScreen("category"); });

  // Dialogue
  document.getElementById("backToHomeFromDialogue")?.addEventListener("click", function () { showScreen("category"); });
  document.getElementById("dialogueNextBtn")?.addEventListener("click", function () {
    dialogueIndex = (dialogueIndex + 1) % TEEN_DIALOGUES.length;
    renderDialogue();
  });
  document.getElementById("dialogueLearnWordsBtn")?.addEventListener("click", function () { selectCategory("teenLife"); });
  document.getElementById("sentenceClearBtn")?.addEventListener("click", function () {
    currentSentenceWords = [];
    updateSentenceResult();
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

  document.getElementById("backToHomeFromA2")?.addEventListener("click", function () { showScreen("vocabularyLevels"); });
  document.getElementById("backToCategoryBtn")?.addEventListener("click", function () {
    var t = "category";
    if (currentCategoryKey.indexOf("idiom") === 0) t = "idioms";
    else if (currentCategoryKey.indexOf("a2") === 0) t = "a2";
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
    try { localStorage.removeItem(PROGRESS_KEY); } catch (e) { }
    location.reload();
  });
}

// Run initial setups
(function init() {
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
}

```

---
*Generated by Codebase Prompt Packer for VS Code*
*Total files processed: 1 | Generated on: 8/23/2026, 9:29:27 PM*
