// Translation dictionaries
const translations = {
  en: {
    // Navbar
    home: 'Home',
    saints: 'Saints',
    devotions: 'Devotions',
    massReadings: 'Mass Readings',
    teachings: 'Teachings',
    messages: 'Messages',
    about: 'About',
    contact: 'Contact',
    lightMode: '☀️ Light',
    darkMode: '🌙 Dark',
    // Home page
    welcome: 'Welcome to Zikre Kidusan',
    subtitle: 'Love compels me to tell the story of the saints.',
    subtitleAuthor: 'Abba Giorgis Zegascha /The Book of Secrets/',
    livesOfSaints: "Lives of the Saints",
    clickToRead: 'Click on a saint to read their full story',
    todayFeasts: "Today's Feasts",
    dailyDevotions: 'Daily Devotions',
    readReflections: 'Read daily spiritual reflections and prayers.',
    learnSaints: 'Learn about the lives of the saints.',
    massReadingsDesc: 'Epistle, Gospel, and other Mass readings.',
    teachingsDesc: 'Audio and video Gospel teachings.',
    // Saints page
    saintsTitle: 'Saints',
    searchPlaceholder: 'Search saints by name or biography...',
    showingSaints: 'Showing {count} saint{plural}',
    feastDay: 'Feast Day: {date}',
    // Devotions page
    devotionsTitle: 'Daily Devotions',
    date: 'Date: {date}',
    saint: 'Saint: {name}',
    prayer: 'Prayer',
    // Mass Readings page
    massReadingsTitle: 'Mass Readings',
    selectDate: 'Select date',
    allTypes: 'All Types',
    type: 'Type: {type}',
    source: 'Source: {source}',
    // Teachings page
    teachingsTitle: 'Teachings',
    watchVideo: 'Watch Video',
    published: 'Published: {date}',
    // About page
    aboutTitle: 'About Zikre Kidusan',
    mission: 'Our Mission',
    vision: 'Our Vision',
    whatWeOffer: 'What We Offer',
    missionText: `Zikre Kidusan (Remembrance of the Saints) is dedicated to providing daily spiritual nourishment 
      through the wisdom of the saints, daily Mass readings, and Gospel teachings. Our goal is to make 
      these timeless spiritual resources accessible to everyone, anywhere, at any time.`,
    visionText: `To become a leading digital platform for spiritual growth, connecting believers with the rich 
      heritage of Christian spirituality through modern technology. We strive to make the wisdom of 
      the ages accessible to the digital generation.`,
    // Contact page
    contactTitle: 'Contact Us',
    getInTouch: 'Get in touch with us',
    name: 'Name',
    email: 'Email',
    subject: 'Subject',
    message: 'Message',
    sendMessage: 'Send Message',
    thankYou: 'Thank you for your message! We\'ll respond soon.',
    otherWays: 'Other Ways to Reach Us',
    phone: 'Phone: +1 (555) 123-4567',
    address: 'Address: 123 Spiritual Way, Faith City, FC 12345',
    // Footer
    copyright: `© {year} Zikre Kidusan. All rights reserved.`,
    // Daily Wisdom (Home page bottom)
    dailyWisdom: 'Daily Wisdom',
    fiveThings: 'Look at 5 things carefully',
    fiveThingsList: '1. Intention\n2. Faith\n3. Purity\n4. Caution\n5. Perseverance',
    nineWays: 'The 9 Ways to Holiness',
    nineWaysList: '1. Religion\n2. Separation\n3. Prayer\n4. Prostration\n5. Almsgiving\n6. Love\n7. Humility\n8. Patience\n9. Meekness',
    repentance: '✝️Repentance makes the crooked right✝️',
    saintMacarius: '(Saint Macarius) Repent.',
    remembrance: 'Remembrance of the Saints (Example of Saint David)',
    // Errors
    loading: 'Loading...',
    error: 'Failed to load data. Please try again later.',
    retry: 'Retry',
    notFound: 'Page Not Found',
    notFoundText: 'The page you are looking for does not exist.',
    goHome: 'Go Home',
  },
  am: {
    // Navbar
    home: 'ቤት',
    saints: 'የእለት ስንክሳር',
    devotions: 'የእለት ግጻዌ',
    massReadings: 'የሚማ ንኝት',
    teachings: 'ትምህርቶች',
    messages: 'መልዕክቶች',
    about: 'ስለእኛ',
    contact: 'አግኝ',
    lightMode: '☀️ ብራ',
    darkMode: '🌙 ጨልም',
    // Home page
    welcome: 'እንኳን ወደ ዝክረ ቅዱሳን ማህበረ ቅዱስ ዳዊት መጡ!',
    subtitle: '"ፍቅር ያጌብረኒ ከመ እንግር ዜናሆሙ ለቅዱሳን" : "የቅዱሳንን ዜና(ታሪክ) እንድመሰክር ፍቅር ያስገድደኛል::"',
    subtitleAuthor: 'አባ ጊዮርጊስ ዘጋስጫ /መጽሐፈ ምሥጢር/',
    livesOfSaints: 'የቅዱሳ ሕይት',
    clickToRead: 'ለላይ ላ�ረሩ ሙሉ ሙሉ የሴን ታታሪ ለርብ',
    todayFeasts: 'የዕለት ስንክሳር',
    dailyDevotions: 'የዕለት ግጻዌ',
    readReflections: 'የዕለ መመልክት እና ጸሎት ያኑ።',
    learnSaints: 'የቅዱሳ ሕይት ያሱብ።',
    massReadingsDesc: 'ሐምት፣ ወንግል፣ እና ሌርኝ ያኑ።',
    teachingsDesc: 'በኦድዮ እና ቪዲዮ የወንግል ትምህርቶች',
    // Saints page
    saintsTitle: 'ቅዱሳ',
    searchPlaceholder: 'በስምክ ስም ወርዝ ቅዱሳን ያሱብ...',
    showingSaints: '{count} ቅዱሳ{plural} ያሩ',
    feastDay: 'የበላ ቀና: {date}',
    // Devotions page
    devotionsTitle: 'ጸሎት',
    date: 'ቀን: {date}',
    saint: 'ቅዱስ: {name}',
    prayer: 'ጸሎት',
    // Mass Readings page
    massReadingsTitle: 'የሚማ ንኝት',
    selectDate: 'ቀን ይምረሩ',
    allTypes: 'ሁሉ ዓይት',
    type: 'ዓይ: {type}',
    source: 'ምንግት: {source}',
    // Teachings page
    teachingsTitle: 'እምራት',
    watchVideo: 'ቪዲዮ ይመልክ',
    published: 'የታተመ: {date}',
    // About page
    aboutTitle: 'ስንትክ ዚክረ ቅዱሳ',
    mission: 'ተላላኛነች',
    vision: 'ራልትነች',
    whatWeOffer: 'ምን የነሰጽ',
    missionText: `ዚክረ ቅዱሳ (የቅዱሳ ነስስ ማ) በዕለ መመልክት እና ሰላም በቅዱሳ ብራ፣ የወንግል እምራት ይሰጣል።። የቅዱሳ ጥረ መመልክት፣ የዕለ ሚማ ንኝት፣ እና የወንግል እምራት ለምትኛነች ይሰጣል።። ዓይዎን ጥረ ማን በሙሉ ቦት ይገረጡ።።`,
    visionText: `በዴጂትላ ቴክኖላጂ እምራት ለመናላ ተዓት ማንት በቴክኖላጂ ቴክኖላጂ በመናላ ልማነች ተዓትን ከጂላት ተዓት ሽያኑዎትን በመናላ ልማነች ተዓትን እምራት ይሰጣል።።`,
    // Contact page
    contactTitle: 'አግ',
    getInTouch: 'ከኛ ይደርሹ',
    name: 'ስም',
    email: 'ኢሜል',
    subject: 'ርዙ',
    message: 'መልዕት',
    sendMessage: 'መልዕት ላክላ',
    thankYou: 'ለመልዕትዎ አግት ነው! በቅርት እናዎት።።',
    otherWays: 'ሌሎ መንገ እናዎን የሚያሉ',
    phone: 'ስልክ: +1 (555) 123-4567',
    address: 'አድራሻ: 123 ስሪሪቹላ ወይ፣ እምራት፣ ተትክ እምራት።',
    // Footer
    copyright: `© {year} ዝክረ ቅዱሳን ማህበረ ቅዱስ ዳዊት። ሁሉ መብቶች የተጠበቁ ናቸው።`,
    // Errors
    loading: 'በመጫን...',
    error: 'ዳታ መጫን አላቀር።። በቅርት ይሸል።።',
    // Daily Wisdom (Home page bottom)
    dailyWisdom: 'የእለት ጥበብ',
    fiveThings: '5 ነገሮችን በደንብ ያዙ',
    fiveThingsList: '1. አላማ\n2. እምነት\n3. ጥረት\n4, ጥንቃቄ\n5. ጽናት',
    nineWays: '9ኙ የቅድስና መንገዶች',
    nineWaysList: '፩. ሃይማኖት\n፪. ጾም\n፫. ጸሎት\n፬. ስግደት\n፭. ምጽዋት\n፮. ፍቅር\n፯. ትህትና\n፰. ትዕግስት\n፱. የዋህነት',
    repentance: '✝️ንስሐ የተጣመመውን ያቀናል።በኃጥያት የቆሸሸውን ያነጻል፤ንስሐ ለሚገቡ ሁሉ የመላዕክት ንጹሕ ልብስ ይሰጣችኃል✝️',
    saintMacarius: '(ቅዱስ መቃርስ) ንስሐ ግቡ።',
    remembrance: 'ዝክረቅዱሳን (ማኅበረ ቅዱስ ዳዊት)',
    retry: 'ዳሪ',
    notFound: 'ገጽ አይተራም',
    notFoundText: 'የምርረው ገጽ አይተራም።።',
    goHome: 'ወደ ቤይ',
  }
};

export default translations;
