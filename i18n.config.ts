export default defineI18nConfig(() => ({
  legacy: false,
  locale: 'en',
  messages: {
    en: {
      bi: 'BI', // Business Informatics
      bioBody: 'My passion for programming ignited in 2007, as I delved into SQL in an attempt to set up\
        a private server for my favorite {mmorpg} - a venture that proved successful.\
        Eager to dive deeper into the world of coding, I attended a {htl}\
        specializing in IT in 2009, where I learned the basics of C, Java, HTML and CSS.\
        Some years later, I took my passion further by heading to university, where I got my degree in {bi},\
        specializing in web and mobile app development.\
        Over the past {yearsOfExp} years, self-study and hands-on experience with personal projects\
        have been the cornerstone of my learning journey.',
      bioTitle: 'My Journey as a Developer',
      bioSubtitle: 'Here\'s some of the tech that I\'ve worked with before:',
      getInTouch: 'Get in touch',
      greeting: 'Hey. I\'m Manuel.',
      headerAbout: 'About',
      headerContact: 'Contact',
      headerHome: 'Home',
      headerWork: 'Projects',
      introduction: 'I\'m a Software Developer from Vienna, Austria.\
        I have a passion for crafting a wide range of applications.\
        Feel free to explore my {portfolio} to see some of my projects.',
      imprint: 'Imprint',
      iuGamerApp: 'An Android app designed to help a group of board game enthusiasts\
        better organize their regular evening game sessions.\
        Users will be reliably informed about the time and location of the next appointment.\
        They can suggest games, vote on suggested games, rate past appointments,\
        and communicate with each other via an integrated chat feature.',
      iuQuizApp: 'An online quiz system that supports distance learning students at IU\
        in solidifying their learning content in preparation for the exam.\
        It enables students to cooperatively and collaboratively find answers to subject-related questions.\
        The focus is particularly on working together and playing/learning together.\
        Similar to the popular app Quizduel, students can, but do not have to, play against each other.',
      lang: 'Languages',
      languagesFrameworks: 'Languages, Frameworks & Libraries',
      os: 'Operating Systems',
      personalWebsite: 'My first portfolio website.',
      pmb: 'A 2D game inspired by the 2000s Pokémon games. Built from scratch!\
        Features include animated NPCs, objects and battles (including online multiplayer),\
        custom maps built in Tiled, game sound, 3 difficulty levels and so much more.',
      portfolio: 'portfolio',
      portfolioTitle: 'Featured Projects',
      toolsPlatforms: 'Technologies & Tools',
      toriiInfo: '25,000+ registered users!',
      toriiJava: 'A Japanese vocabulary learning tool that harnesses the power of spaced repetition\
        to make memorizing new words a breeze. It combines a straightforward interface with robust features.\
        Designed for both casual learners and those preparing for the Japanese Language Proficiency Test (JLPT),\
        Torii offers specialized vocabulary lists and review methods.\
        Key features include audio reviews, font randomization, progress tracking,\
        and automatic cloud synchronization.',
      toriiWeb: 'Version 2 of my Japanese vocabulary learning tool introduces significant enhancements.\
        Offline functionality is now available (through the utilization of IndexedDB).\
        The web app features an integrated dictionary for efficient word addition,\
        expanded review methods for enhancing vocabulary retention,\
        a review forecast chart for effective study session planning,\
        and enhancements to the word search and statistics functions for improved user insights.'
    },
    de: {
      bi: 'WI', // Wirtschaftsinformatik
      bioBody: 'Den Einstieg in die Programmierung habe ich 2007 gemacht, als ich mich mit SQL beschäftigt habe,\
        in dem Versuch, einen Privatserver für mein Lieblings-{mmorpg} aufzusetzen - mit Erfolg.\
        Nach dem Gymnasium habe ich mich 2009 dazu entschlossen, eine auf IT spezialisierte {htl} zu besuchen,\
        wo ich die Grundlagen in C, Java, HTML and CSS gelernt habe.\
        Ein paar Jahre später habe ich {bi} studiert - Wahlpflichtfächer Web- und Mobile-App-Development.\
        Den Großteil meines Wissens habe ich mir im Zuge persönlicher Projekte in den letzten {yearsOfExp} Jahren\
        autodidaktisch angeeignet.',
      bioTitle: 'Mein Werdegang als Developer',
      bioSubtitle: 'Einige der Technologien, mit denen ich gearbeitet habe:',
      getInTouch: 'Kontaktieren',
      greeting: 'Hey. Ich bin Manuel.',
      headerAbout: 'Über mich',
      headerContact: 'Kontakt',
      headerHome: 'Home',
      headerWork: 'Projekte',
      introduction: 'Ich bin ein Software Developer aus Wien, Österreich.\
        Ich entwickle ganz unterschiedliche Applikationen.\
        Die wichtigsten Projekte habe ich in meinem {portfolio} aufgelistet.',
      imprint: 'Impressum',
      iuGamerApp: `Eine Android App, die einer Gruppe von Brettspielfans dabei helfen soll,\
        ihre regelmäßigen abendlichen Spieltermine besser zu organisieren.\
        Benutzer werden zuverlässig über Zeit & Ort des nächsten Termins informiert.\
        Sie können Spiele vorschlagen und über Vorschläge abstimmen, vergangene Termine bewerten\
        und sich über einen integrierten Chat gegenseitig Nachrichten zukommen lassen.`,
      iuQuizApp: 'Ein Online-Quizsystem, das Fernstudenten der IU bei\
        der Festigung der Lerninhalte zur Vorbereitung auf die Klausur unterstützt.\
        Es ermöglicht Studierenden, kooperativ und kollaborativ Antworten zu fachlichen Fragen zu finden.\
        Das miteinander bzw. das gemeinsame Spielen/Erarbeiten steht dabei besonders im Fokus.\
        Ähnlich wie bei der populären App Quizduell kann, jedoch muss nicht gegeneinander gespielt werden.',
      lang: 'Sprachen',
      languagesFrameworks: 'Sprachen, Frameworks & Bibliotheken',
      os: 'Betriebssysteme',
      personalWebsite: 'Meine erste Portfolio-Website.',
      pmb: 'Ein 2D Game, inspiriert von den Pokémon Game Boy Spielen der 2000er.\
        Funktionen umfassen animierte NPCs, Objekte und Kämpfe (inklusive Online-Multiplayer),\
        einzigartige Maps erstellt mit Tiled, Sound, 3 Schwierigkeitsstufen und jede Menge mehr.',
      portfolio: 'Portfolio',
      portfolioTitle: 'Ausgewählte Projekte',
      toolsPlatforms: 'Technologien & Tools',
      toriiInfo: '25.000+ registrierte Benutzer!',
      toriiJava: 'Eine japanische Vokabeltrainer-App, die die Spaced Repetition Lernmethode nutzt, um\
        den Lernprozess neuer Wörter so effektiv und effizient wie möglich zu gestalten.\
        Die App verbindet eine simple Benutzeroberfläche mit leistungsstarken Funktionen.\
        Torii eignet sich dank spezialisierter Vokabellisten und verschiedenen Wiederholungsmethoden\
        sowohl für Casual-Learners als auch zur Vorbereitung auf den\
        Japanese Language Proficiency Test (JLPT).\
        Zu den wichtigsten Funktionen zählen Audio-Reviews, Font-Randomization, Progress-Tracking,\
        und automatische Cloud-Synchronisation.',
      toriiWeb: `Version 2 meiner Vokabeltrainer-App bietet deutliche Verbesserungen im Vergleich zur\
        vorherigen Version. Zu den neuen Funktionen zählen die Offline-Nutzung durch Einsatz von IndexedDB,\
        ein integriertes Wörterbuch, das das Hinzufügen neuer Wörter mit einem einzigen Klick ermöglicht,\
        erweiterte Überprüfungsoptionen für bereits gelernte Vokabeln,\
        ein Vorschau-Diagramm zur effektiven Planung von Lerneinheiten sowie optimierte Funktionen für\
        die Wortsuche und Statistiken zur besseren Nachverfolgung des Lernfortschritts.`
    }
  }
}))