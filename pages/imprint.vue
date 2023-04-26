<template>
  <v-card class="mb-2">
    <v-card-item>
      <v-card-title>Offenlegung nach § 25 Mediengesetz</v-card-title>
    </v-card-item>
    <v-card-text>
      <strong>Medieninhaber:</strong><br />
      {{ $myName }}<br />
      Wien, Österreich<br />
      {{ $myEmail }}<br />
    </v-card-text>
    <v-card-text>
      Zweck dieser Website: Präsentation des Medieninhabers.
    </v-card-text>
  </v-card>
  <v-card>
    <v-card-text>
    <h1>Datenschutzerklärung</h1>
    <h2 id="einleitung-ueberblick">Einleitung und Überblick</h2>
    <p>Wir haben diese Datenschutzerklärung (Fassung 26.04.2023-112487332) verfasst, um Ihnen gemäß der Vorgaben der <a
        href="https://eur-lex.europa.eu/legal-content/DE/TXT/HTML/?uri=CELEX:32016R0679&amp;from=DE&amp;tid=112487332#d1e2269-1-1"
        target="_blank" rel="noopener">Datenschutz-Grundverordnung (EU) 2016/679</a> und anwendbaren nationalen Gesetzen
      zu
      erklären, welche personenbezogenen Daten (kurz Daten) wir als Verantwortliche &#8211; und die von uns beauftragten
      Auftragsverarbeiter (z. B. Provider) &#8211; verarbeiten, zukünftig verarbeiten werden und welche rechtmäßigen
      Möglichkeiten Sie haben. Die verwendeten Begriffe sind geschlechtsneutral zu verstehen.<br />
      <strong>Kurz gesagt:</strong> Wir informieren Sie umfassend über Daten, die wir über Sie
      verarbeiten.
    </p>
    <p>Datenschutzerklärungen klingen für gewöhnlich sehr technisch und verwenden juristische Fachbegriffe. Diese
      Datenschutzerklärung soll Ihnen hingegen die wichtigsten Dinge so einfach und transparent wie möglich beschreiben.
      Soweit es der Transparenz förderlich ist, werden technische <strong>Begriffe
        leserfreundlich erklärt</strong>, Links zu weiterführenden Informationen geboten und <strong>Grafiken</strong> zum
      Einsatz gebracht. Wir informieren damit in klarer und einfacher
      Sprache, dass wir im Rahmen unserer Geschäftstätigkeiten nur dann personenbezogene Daten verarbeiten, wenn eine
      entsprechende gesetzliche Grundlage gegeben ist. Das ist sicher nicht möglich, wenn man möglichst knappe, unklare
      und
      juristisch-technische Erklärungen abgibt, so wie sie im Internet oft Standard sind, wenn es um Datenschutz geht. Ich
      hoffe, Sie finden die folgenden Erläuterungen interessant und informativ und vielleicht ist die eine oder andere
      Information dabei, die Sie noch nicht kannten.<br />
      Wenn trotzdem Fragen bleiben, möchten wir Sie bitten, sich an die unten bzw. im Impressum genannte verantwortliche
      Stelle zu wenden, den vorhandenen Links zu folgen und sich weitere Informationen auf Drittseiten anzusehen. Unsere
      Kontaktdaten finden Sie selbstverständlich auch im Impressum.</p>
    <h2 id="kontaktdaten-verantwortliche">Kontaktdaten des Verantwortlichen</h2>
    <p>Sollten Sie Fragen zum Datenschutz oder zur Verarbeitung personenbezogener Daten haben, finden Sie nachfolgend die
      Kontaktdaten der verantwortlichen Person bzw. Stelle:<br />
      <span style="font-weight: 400">
        {{ $myName }}<br />
        Wien, Österreich
      </span>
      <br />
      E-Mail: <a :href="`mailto:${$myEmail}`">{{ $myEmail }}</a>
    </p>
    <h2 id="rechte-dsgvo">Rechte laut Datenschutz-Grundverordnung</h2>
    <p>Gemäß Artikel 13, 14 DSGVO informieren wir Sie über die folgenden Rechte, die Ihnen zustehen, damit es zu einer
      fairen und transparenten Verarbeitung von Daten kommt:</p>
    <ul>
      <li>Sie haben laut Artikel 15 DSGVO ein Auskunftsrecht darüber, ob wir Daten von Ihnen
        verarbeiten. Sollte das zutreffen, haben Sie Recht darauf eine Kopie der Daten zu erhalten und die folgenden
        Informationen zu erfahren:
        <ul>
          <li>zu welchem Zweck wir die Verarbeitung durchführen;</li>
          <li>die Kategorien, also die Arten von Daten, die verarbeitet werden;</li>
          <li>wer diese Daten erhält und wenn die Daten an Drittländer übermittelt werden, wie
            die Sicherheit garantiert werden kann;</li>
          <li>wie lange die Daten gespeichert werden;</li>
          <li>das Bestehen des Rechts auf Berichtigung, Löschung oder Einschränkung der
            Verarbeitung und dem Widerspruchsrecht gegen die Verarbeitung;</li>
          <li>dass Sie sich bei einer Aufsichtsbehörde beschweren können (Links zu diesen
            Behörden finden Sie weiter unten);</li>
          <li>die Herkunft der Daten, wenn wir sie nicht bei Ihnen erhoben haben;</li>
          <li>ob Profiling durchgeführt wird, ob also Daten automatisch ausgewertet werden, um zu
            einem persönlichen Profil von Ihnen zu gelangen.</li>
        </ul>
      </li>
      <li>Sie haben laut Artikel 16 DSGVO ein Recht auf Berichtigung der Daten, was bedeutet,
        dass wir Daten richtig stellen müssen, falls Sie Fehler finden.</li>
      <li>Sie haben laut Artikel 17 DSGVO das Recht auf Löschung („Recht auf Vergessenwerden“),
        was konkret bedeutet, dass Sie die Löschung Ihrer Daten verlangen dürfen.</li>
      <li>Sie haben laut Artikel 18 DSGVO das Recht auf Einschränkung der Verarbeitung, was
        bedeutet, dass wir die Daten nur mehr speichern dürfen aber nicht weiter verwenden.</li>
      <li>Sie haben laut Artikel 20 DSGVO das Recht auf Datenübertragbarkeit, was bedeutet, dass
        wir Ihnen auf Anfrage Ihre Daten in einem gängigen Format zur Verfügung stellen.</li>
      <li>Sie haben laut Artikel 21 DSGVO ein Widerspruchsrecht, welches nach Durchsetzung eine
        Änderung der Verarbeitung mit sich bringt.
        <ul>
          <li>Wenn die Verarbeitung Ihrer Daten auf Artikel 6 Abs. 1 lit. e (öffentliches
            Interesse, Ausübung öffentlicher Gewalt) oder Artikel 6 Abs. 1 lit. f (berechtigtes Interesse) basiert, können
            Sie gegen die Verarbeitung Widerspruch einlegen. Wir prüfen danach so rasch wie möglich, ob wir diesem
            Widerspruch rechtlich nachkommen können.</li>
          <li>Werden Daten verwendet, um Direktwerbung zu betreiben, können Sie jederzeit gegen
            diese Art der Datenverarbeitung widersprechen. Wir dürfen Ihre Daten danach nicht mehr für Direktmarketing
            verwenden.</li>
          <li>Werden Daten verwendet, um Profiling zu betreiben, können Sie jederzeit gegen diese
            Art der Datenverarbeitung widersprechen. Wir dürfen Ihre Daten danach nicht mehr für Profiling verwenden.</li>
        </ul>
      </li>
      <li>Sie haben laut Artikel 22 DSGVO unter Umständen das Recht, nicht einer ausschließlich
        auf einer automatisierten Verarbeitung (zum Beispiel Profiling) beruhenden Entscheidung unterworfen zu werden.
      </li>
      <li>Sie haben laut Artikel 77 DSGVO das Recht auf Beschwerde. Das heißt, Sie können sich
        jederzeit bei der Datenschutzbehörde beschweren, wenn Sie der Meinung sind, dass die Datenverarbeitung von
        personenbezogenen Daten gegen die DSGVO verstößt.</li>
    </ul>
    <p>
      <strong>Kurz gesagt:</strong> Sie haben Rechte &#8211; zögern Sie nicht, die oben gelistete
      verantwortliche Stelle bei uns zu kontaktieren!
    </p>
    <p>Wenn Sie glauben, dass die Verarbeitung Ihrer Daten gegen das Datenschutzrecht verstößt oder Ihre
      datenschutzrechtlichen Ansprüche in sonst einer Weise verletzt worden sind, können Sie sich bei der Aufsichtsbehörde
      beschweren. Diese ist für Österreich die Datenschutzbehörde, deren Website Sie unter <a
        href="https://www.dsb.gv.at/?tid=112487332" target="_blank" rel="noopener">https://www.dsb.gv.at/</a> finden. In
      Deutschland gibt es für jedes Bundesland einen Datenschutzbeauftragten. Für nähere Informationen können Sie sich an
      die <a href="https://www.bfdi.bund.de/DE/Home/home_node.html" target="_blank" rel="noopener">Bundesbeauftragte für
        den
        Datenschutz und die Informationsfreiheit (BfDI)</a> wenden. Für unser
      Unternehmen ist die folgende lokale Datenschutzbehörde zuständig:</p>
    <h2 id="oesterreich-datenschutzbehoerde">Österreich Datenschutzbehörde</h2>
    <p>
      <strong>Leiterin: </strong>Mag. Dr. Andrea Jelinek<strong>
        <br />
        Adresse: </strong>Barichgasse 40-42, 1030 Wien<strong>
        <br />
        Telefonnr.: </strong>+43 1 52 152-0<strong>
        <br />
        E-Mail-Adresse: </strong>
      <a href="mailto:dsb@dsb.gv.at" target="_blank" rel="noopener">dsb@dsb.gv.at</a>
      <strong>
        <br />
        Website: </strong>
      <a href="https://www.dsb.gv.at/" target="_blank" rel="noopener">https://www.dsb.gv.at/</a>
    </p>
    <h2 id="datenuebertragung-drittlaender">Datenübertragung in Drittländer</h2>
    <p>Wir übertragen oder verarbeiten Daten nur dann in Länder außerhalb der EU (Drittländer), wenn Sie dieser
      Verarbeitung
      zustimmen, dies gesetzlich vorgeschrieben ist oder vertraglich notwendig und in jedem Fall nur soweit dies generell
      erlaubt ist. Ihre Zustimmung ist in den meisten Fällen der wichtigste Grund, dass wir Daten in Drittländern
      verarbeiten lassen. Die Verarbeitung personenbezogener Daten in Drittländern wie den USA, wo viele
      Softwarehersteller
      Dienstleistungen anbieten und Ihre Serverstandorte haben, kann bedeuten, dass personenbezogene Daten auf unerwartete
      Weise verarbeitet und gespeichert werden.</p>
    <p>Wir weisen ausdrücklich darauf hin, dass nach Meinung des Europäischen Gerichtshofs derzeit kein angemessenes
      Schutzniveau für den Datentransfer in die USA besteht. Die Datenverarbeitung durch US-Dienste (wie beispielsweise
      Google Analytics) kann dazu führen, dass gegebenenfalls Daten nicht anonymisiert verarbeitet und gespeichert werden.
      Ferner können gegebenenfalls US-amerikanische staatliche Behörden Zugriff auf einzelne Daten nehmen. Zudem kann es
      vorkommen, dass erhobene Daten mit Daten aus anderen Diensten desselben Anbieters, sofern Sie ein entsprechendes
      Nutzerkonto haben, verknüpft werden. Nach Möglichkeit versuchen wir Serverstandorte innerhalb der EU zu nutzen,
      sofern
      das angeboten wird.</p>
    <p>Wir informieren Sie an den passenden Stellen dieser Datenschutzerklärung genauer über Datenübertragung in
      Drittländer, sofern diese zutrifft.</p>
    <h2 id="sicherheit-datenverarbeitung">Sicherheit der Datenverarbeitung</h2>
    <p>Um personenbezogene Daten zu schützen, haben wir sowohl technische als auch organisatorische Maßnahmen umgesetzt.
      Wo
      es uns möglich ist, verschlüsseln oder pseudonymisieren wir personenbezogene Daten. Dadurch machen wir es im Rahmen
      unserer Möglichkeiten so schwer wie möglich, dass Dritte aus unseren Daten auf persönliche Informationen schließen
      können.</p>
    <p>Art. 25 DSGVO spricht hier von &#8220;Datenschutz durch Technikgestaltung und durch datenschutzfreundliche
      Voreinstellungen&#8221; und meint damit, dass man sowohl bei Software (z. B. Formularen) also auch Hardware (z. B.
      Zugang zum Serverraum) immer an Sicherheit denkt und entsprechende Maßnahmen setzt. Im Folgenden gehen wir, falls
      erforderlich, noch auf konkrete Maßnahmen ein.</p>
    <h2 id="tls-verschluesselung-https">TLS-Verschlüsselung mit https</h2>
    <p>TLS, Verschlüsselung und https klingen sehr technisch und sind es auch. Wir verwenden HTTPS (das Hypertext Transfer
      Protocol Secure steht für „sicheres Hypertext-Übertragungsprotokoll“), um Daten abhörsicher im Internet zu
      übertragen.<br />
      Das bedeutet, dass die komplette Übertragung aller Daten von Ihrem Browser zu unserem Webserver abgesichert ist
      &#8211; niemand kann &#8220;mithören&#8221;.</p>
    <p>Damit haben wir eine zusätzliche Sicherheitsschicht eingeführt und erfüllen den Datenschutz durch Technikgestaltung
      (<a href="https://eur-lex.europa.eu/legal-content/DE/TXT/HTML/?uri=CELEX:32016R0679&amp;from=DE&amp;tid=112487332"
        target="_blank" rel="noopener">Artikel 25 Absatz 1 DSGVO</a>). Durch den Einsatz von TLS (Transport Layer
      Security),
      einem Verschlüsselungsprotokoll zur sicheren Datenübertragung im Internet, können wir den Schutz vertraulicher Daten
      sicherstellen.<br />
      Sie erkennen die Benutzung dieser Absicherung der Datenübertragung am kleinen Schlosssymbol <img role="img"
        src="https://www.adsimple.at/wp-content/uploads/2018/03/schlosssymbol-https.svg" width="17" height="18" /> links
      oben im Browser, links von der Internetadresse (z. B. beispielseite.de) und der Verwendung des Schemas https
      (anstatt
      http) als Teil unserer Internetadresse.<br />
      Wenn Sie mehr zum Thema Verschlüsselung wissen möchten, empfehlen wir die Google Suche nach &#8220;Hypertext
      Transfer
      Protocol Secure wiki&#8221; um gute Links zu weiterführenden Informationen zu erhalten.</p>
    <h2 id="cookies">Cookies</h2>
    <table border="1" cellpadding="15">
      <tbody>
        <tr>
          <td>
            <strong>Cookies Zusammenfassung</strong>
            <br />
            &#x1f465; Betroffene: Besucher der Website<br />
            &#x1f91d; Zweck: abhängig vom jeweiligen Cookie. Mehr Details dazu finden Sie weiter unten bzw. beim
            Hersteller
            der Software, der das Cookie setzt.<br />
            &#x1f4d3; Verarbeitete Daten: Abhängig vom jeweils eingesetzten Cookie. Mehr Details dazu finden Sie weiter
            unten bzw. beim Hersteller der Software, der das Cookie setzt.<br />
            &#x1f4c5; Speicherdauer: abhängig vom jeweiligen Cookie, kann von Stunden bis hin zu Jahren variieren<br />
            &#x2696;&#xfe0f; Rechtsgrundlagen: Art. 6 Abs. 1 lit. a DSGVO (Einwilligung), Art. 6 Abs. 1 lit.f DSGVO
            (Berechtigte Interessen)
          </td>
        </tr>
      </tbody>
    </table>
    <h3>Was sind Cookies?</h3>
    <p>Unsere Website verwendet HTTP-Cookies, um nutzerspezifische Daten zu speichern.<br />
      Im Folgenden erklären wir, was Cookies sind und warum Sie genutzt werden, damit Sie die folgende
      Datenschutzerklärung
      besser verstehen.</p>
    <p>Immer wenn Sie durch das Internet surfen, verwenden Sie einen Browser. Bekannte Browser sind beispielsweise Chrome,
      Safari, Firefox, Internet Explorer und Microsoft Edge. Die meisten Websites speichern kleine Text-Dateien in Ihrem
      Browser. Diese Dateien nennt man Cookies.</p>
    <p>Eines ist nicht von der Hand zu weisen: Cookies sind echt nützliche Helferlein. Fast alle Websites verwenden
      Cookies.
      Genauer gesprochen sind es HTTP-Cookies, da es auch noch andere Cookies für andere Anwendungsbereiche gibt.
      HTTP-Cookies sind kleine Dateien, die von unserer Website auf Ihrem Computer gespeichert werden. Diese
      Cookie-Dateien
      werden automatisch im Cookie-Ordner, quasi dem &#8220;Hirn&#8221; Ihres Browsers, untergebracht. Ein Cookie besteht
      aus einem Namen und einem Wert. Bei der Definition eines Cookies müssen zusätzlich ein oder mehrere Attribute
      angegeben werden.</p>
    <p>Cookies speichern gewisse Nutzerdaten von Ihnen, wie beispielsweise Sprache oder persönliche Seiteneinstellungen.
      Wenn Sie unsere Seite wieder aufrufen, übermittelt Ihr Browser die „userbezogenen“ Informationen an unsere Seite
      zurück. Dank der Cookies weiß unsere Website, wer Sie sind und bietet Ihnen die Einstellung, die Sie gewohnt sind.
      In
      einigen Browsern hat jedes Cookie eine eigene Datei, in anderen wie beispielsweise Firefox sind alle Cookies in
      einer
      einzigen Datei gespeichert.</p>
    <p>Es gibt sowohl Erstanbieter Cookies als auch Drittanbieter-Cookies. Erstanbieter-Cookies werden direkt von unserer
      Seite erstellt, Drittanbieter-Cookies werden von Partner-Websites (z.B. Google Analytics) erstellt. Jedes Cookie ist
      individuell zu bewerten, da jedes Cookie andere Daten speichert. Auch die Ablaufzeit eines Cookies variiert von ein
      paar Minuten bis hin zu ein paar Jahren. Cookies sind keine Software-Programme und enthalten keine Viren, Trojaner
      oder andere „Schädlinge“. Cookies können auch nicht auf Informationen Ihres PCs zugreifen.</p>
    <p>So können zum Beispiel Cookie-Daten aussehen:</p>
    <p>
      <strong>Name:</strong> _ga<br />
      <strong>Wert:</strong> GA1.2.1326744211.152112487332-9<br />
      <strong>Verwendungszweck:</strong> Unterscheidung der Websitebesucher<br />
      <strong>Ablaufdatum:</strong> nach 2 Jahren
    </p>
    <p>Diese Mindestgrößen sollte ein Browser unterstützen können:</p>
    <ul>
      <li>Mindestens 4096 Bytes pro Cookie</li>
      <li>Mindestens 50 Cookies pro Domain</li>
      <li>Mindestens 3000 Cookies insgesamt</li>
    </ul>
    <h3>Welche Arten von Cookies gibt es?</h3>
    <p>Die Frage welche Cookies wir im Speziellen verwenden, hängt von den verwendeten Diensten ab und wird in den
      folgenden
      Abschnitten der Datenschutzerklärung geklärt. An dieser Stelle möchten wir kurz auf die verschiedenen Arten von
      HTTP-Cookies eingehen.</p>
    <p>Man kann 4 Arten von Cookies unterscheiden:</p>
    <p>
      <strong>Unerlässliche Cookies<br />
      </strong>Diese Cookies sind nötig, um grundlegende Funktionen der Website sicherzustellen. Zum Beispiel braucht es
      diese Cookies, wenn ein User ein Produkt in den Warenkorb legt, dann auf anderen Seiten weitersurft und später erst
      zur Kasse geht. Durch diese Cookies wird der Warenkorb nicht gelöscht, selbst wenn der User sein Browserfenster
      schließt.
    </p>
    <p>
      <strong>Zweckmäßige Cookies<br />
      </strong>Diese Cookies sammeln Infos über das Userverhalten und ob der User etwaige Fehlermeldungen bekommt. Zudem
      werden mithilfe dieser Cookies auch die Ladezeit und das Verhalten der Website bei verschiedenen Browsern gemessen.
    </p>
    <p>
      <strong>Zielorientierte Cookies<br />
      </strong>Diese Cookies sorgen für eine bessere Nutzerfreundlichkeit. Beispielsweise werden eingegebene Standorte,
      Schriftgrößen oder Formulardaten gespeichert.
    </p>
    <p>
      <strong>Werbe-Cookies<br />
      </strong>Diese Cookies werden auch Targeting-Cookies genannt. Sie dienen dazu dem User individuell angepasste
      Werbung
      zu liefern. Das kann sehr praktisch, aber auch sehr nervig sein.
    </p>
    <p>Üblicherweise werden Sie beim erstmaligen Besuch einer Website gefragt, welche dieser Cookiearten Sie zulassen
      möchten. Und natürlich wird diese Entscheidung auch in einem Cookie gespeichert.</p>
    <p>Wenn Sie mehr über Cookies wissen möchten und technische Dokumentationen nicht scheuen, empfehlen wir <a
        href="https://datatracker.ietf.org/doc/html/rfc6265">https://datatracker.ietf.org/doc/html/rfc6265</a>, dem
      Request
      for Comments der Internet Engineering Task Force (IETF) namens &#8220;HTTP State Management Mechanism&#8221;.</p>
    <h3>Zweck der Verarbeitung über Cookies</h3>
    <p>Der Zweck ist letztendlich abhängig vom jeweiligen Cookie. Mehr Details dazu finden Sie weiter unten bzw. beim
      Hersteller der Software, die das Cookie setzt.</p>
    <h3>Welche Daten werden verarbeitet?</h3>
    <p>Cookies sind kleine Gehilfen für eine viele verschiedene Aufgaben. Welche Daten in Cookies gespeichert werden, kann
      man leider nicht verallgemeinern, aber wir werden Sie im Rahmen der folgenden Datenschutzerklärung über die
      verarbeiteten bzw. gespeicherten Daten informieren.</p>
    <h3>Speicherdauer von Cookies</h3>
    <p>Die Speicherdauer hängt vom jeweiligen Cookie ab und wird weiter unter präzisiert. Manche Cookies werden nach
      weniger
      als einer Stunde gelöscht, andere können mehrere Jahre auf einem Computer gespeichert bleiben.</p>
    <p>Sie haben außerdem selbst Einfluss auf die Speicherdauer. Sie können über ihren Browser sämtliche Cookies jederzeit
      manuell löschen (siehe auch unten &#8220;Widerspruchsrecht&#8221;). Ferner werden Cookies, die auf einer
      Einwilligung
      beruhen, spätestens nach Widerruf Ihrer Einwilligung gelöscht, wobei die Rechtmäßigkeit der Speicherung bis dahin
      unberührt bleibt.</p>
    <h3>Widerspruchsrecht &#8211; wie kann ich Cookies löschen?</h3>
    <p>Wie und ob Sie Cookies verwenden wollen, entscheiden Sie selbst. Unabhängig von welchem Service oder welcher
      Website
      die Cookies stammen, haben Sie immer die Möglichkeit Cookies zu löschen, zu deaktivieren oder nur teilweise
      zuzulassen. Zum Beispiel können Sie Cookies von Drittanbietern blockieren, aber alle anderen Cookies zulassen.</p>
    <p>Wenn Sie feststellen möchten, welche Cookies in Ihrem Browser gespeichert wurden, wenn Sie Cookie-Einstellungen
      ändern oder löschen wollen, können Sie dies in Ihren Browser-Einstellungen finden:</p>
    <p>
      <a href="https://support.google.com/chrome/answer/95647?tid=112487332" target="_blank"
        rel="noopener noreferrer">Chrome: Cookies in Chrome löschen, aktivieren und verwalten</a>
    </p>
    <p>
      <a href="https://support.apple.com/de-at/guide/safari/sfri11471/mac?tid=112487332" target="_blank"
        rel="noopener noreferrer">Safari: Verwalten von Cookies und Websitedaten mit Safari</a>
    </p>
    <p>
      <a href="https://support.mozilla.org/de/kb/cookies-und-website-daten-in-firefox-loschen?tid=112487332"
        target="_blank" rel="noopener noreferrer">Firefox: Cookies löschen, um Daten zu entfernen, die Websites auf Ihrem
        Computer abgelegt
        haben</a>
    </p>
    <p>
      <a
        href="https://support.microsoft.com/de-de/windows/l%C3%B6schen-und-verwalten-von-cookies-168dab11-0753-043d-7c16-ede5947fc64d?tid=112487332">Internet
        Explorer: Löschen und Verwalten von Cookies</a>
    </p>
    <p>
      <a
        href="https://support.microsoft.com/de-de/microsoft-edge/cookies-in-microsoft-edge-l%C3%B6schen-63947406-40ac-c3b8-57b9-2a946a29ae09?tid=112487332">Microsoft
        Edge: Löschen und Verwalten von Cookies</a>
    </p>
    <p>Falls Sie grundsätzlich keine Cookies haben wollen, können Sie Ihren Browser so einrichten, dass er Sie immer
      informiert, wenn ein Cookie gesetzt werden soll. So können Sie bei jedem einzelnen Cookie entscheiden, ob Sie das
      Cookie erlauben oder nicht. Die Vorgangsweise ist je nach Browser verschieden. Am besten Sie suchen die Anleitung in
      Google mit dem Suchbegriff “Cookies löschen Chrome” oder &#8220;Cookies deaktivieren Chrome&#8221; im Falle eines
      Chrome Browsers.</p>
    <h3>Rechtsgrundlage</h3>
    <p>Seit 2009 gibt es die sogenannten „Cookie-Richtlinien“. Darin ist festgehalten, dass das Speichern von Cookies eine
      <strong>Einwilligung</strong> (Artikel 6 Abs. 1 lit. a DSGVO) von Ihnen verlangt. Innerhalb
      der EU-Länder gibt es allerdings noch sehr unterschiedliche Reaktionen auf diese Richtlinien. In Österreich erfolgte
      aber die Umsetzung dieser Richtlinie in § 96 Abs. 3 des Telekommunikationsgesetzes (TKG). In Deutschland wurden die
      Cookie-Richtlinien nicht als nationales Recht umgesetzt. Stattdessen erfolgte die Umsetzung dieser Richtlinie
      weitgehend in § 15 Abs.3 des Telemediengesetzes (TMG).
    </p>
    <p>Für unbedingt notwendige Cookies, auch soweit keine Einwilligung vorliegt, bestehen <strong>berechtigte
        Interessen</strong> (Artikel 6 Abs. 1 lit. f DSGVO), die in den meisten
      Fällen wirtschaftlicher Natur sind. Wir möchten den Besuchern der Website eine angenehme Benutzererfahrung bescheren
      und dafür sind bestimmte Cookies oft unbedingt notwendig.</p>
    <p>Soweit nicht unbedingt erforderliche Cookies zum Einsatz kommen, geschieht dies nur im Falle Ihrer Einwilligung.
      Rechtsgrundlage ist insoweit Art. 6 Abs. 1 lit. a DSGVO.</p>
    <p>In den folgenden Abschnitten werden Sie genauer über den Einsatz von Cookies informiert, sofern eingesetzte
      Software
      Cookies verwendet.</p>
    <h2 id="webhosting-einleitung">Webhosting Einleitung</h2>
    <table border="1" cellpadding="15">
      <tbody>
        <tr>
          <td>
            <strong>Webhosting Zusammenfassung</strong>
            <br />
            &#x1f465; Betroffene: Besucher der Website<br />
            &#x1f91d; Zweck: professionelles Hosting der Website und Absicherung des Betriebs<br />
            &#x1f4d3; Verarbeitete Daten: IP-Adresse, Zeitpunkt des Websitebesuchs, verwendeter Browser und weitere Daten.
            Mehr Details dazu finden Sie weiter unten bzw. beim jeweils eingesetzten Webhosting Provider.<br />
            &#x1f4c5; Speicherdauer: abhängig vom jeweiligen Provider, aber in der Regel 2 Wochen<br />
            &#x2696;&#xfe0f; Rechtsgrundlagen: Art. 6 Abs. 1 lit.f DSGVO (Berechtigte Interessen)
          </td>
        </tr>
      </tbody>
    </table>
    <h3>Was ist Webhosting?</h3>
    <p>Wenn Sie heutzutage Websites besuchen, werden gewisse Informationen &#8211; auch personenbezogene Daten &#8211;
      automatisch erstellt und gespeichert, so auch auf dieser Website. Diese Daten sollten möglichst sparsam und nur mit
      Begründung verarbeitet werden. Mit Website meinen wir übrigens die Gesamtheit aller Webseiten auf einer Domain, d.h.
      alles von der Startseite (Homepage) bis hin zur aller letzten Unterseite (wie dieser hier). Mit Domain meinen wir
      zum
      Beispiel beispiel.de oder musterbeispiel.com.</p>
    <p>Wenn Sie eine Website auf einem Computer, Tablet oder Smartphone ansehen möchten, verwenden Sie dafür ein Programm,
      das sich Webbrowser nennt. Sie kennen vermutlich einige Webbrowser beim Namen: Google Chrome, Microsoft Edge,
      Mozilla
      Firefox und Apple Safari. Wir sagen kurz Browser oder Webbrowser dazu.</p>
    <p>Um die Website anzuzeigen, muss sich der Browser zu einem anderen Computer verbinden, wo der Code der Website
      gespeichert ist: dem Webserver. Der Betrieb eines Webservers ist eine komplizierte und aufwendige Aufgabe, weswegen
      dies in der Regel von professionellen Anbietern, den Providern, übernommen wird. Diese bieten Webhosting an und
      sorgen
      damit für eine verlässliche und fehlerfreie Speicherung der Daten von Websites. Eine ganze Menge Fachbegriffe, aber
      bitte bleiben Sie dran, es wird noch besser!</p>
    <p>Bei der Verbindungsaufnahme des Browsers auf Ihrem Computer (Desktop, Laptop, Tablet oder Smartphone) und während
      der
      Datenübertragung zu und vom Webserver kann es zu einer Verarbeitung personenbezogener Daten kommen. Einerseits
      speichert Ihr Computer Daten, andererseits muss auch der Webserver Daten eine Zeit lang speichern, um einen
      ordentlichen Betrieb zu gewährleisten.</p>
    <h3>Warum verarbeiten wir personenbezogene Daten?</h3>
    <p>Die Zwecke der Datenverarbeitung sind:</p>
    <ol>
      <li>Professionelles Hosting der Website und Absicherung des Betriebs</li>
      <li>zur Aufrechterhaltung der Betriebs- und IT-Sicherheit</li>
      <li>Anonyme Auswertung des Zugriffsverhaltens zur Verbesserung unseres Angebots und ggf.
        zur Strafverfolgung bzw. Verfolgung von Ansprüchen</li>
    </ol>
    <h3>Welche Daten werden verarbeitet?</h3>
    <p>Auch während Sie unsere Website jetzt gerade besuchen, speichert unser Webserver, das ist der Computer auf dem
      diese
      Webseite gespeichert ist, in der Regel automatisch Daten wie</p>
    <ul>
      <li>die komplette Internetadresse (URL) der aufgerufenen Webseite</li>
      <li>Browser und Browserversion (z. B. Chrome 87)</li>
      <li>das verwendete Betriebssystem (z. B. Windows 10)</li>
      <li>die Adresse (URL) der zuvor besuchten Seite (Referrer URL) (z. B. <a
          href="https://www.beispielquellsite.de/vondabinichgekommen/" target="_blank"
          rel="follow noopener">https://www.beispielquellsite.de/vondabinichgekommen/</a>)</li>
      <li>den Hostnamen und die IP-Adresse des Geräts von welchem aus zugegriffen wird (z. B.
        COMPUTERNAME und 194.23.43.121)</li>
      <li>Datum und Uhrzeit</li>
      <li>in Dateien, den sogenannten Webserver-Logfiles</li>
    </ul>
    <h3>Wie lange werden Daten gespeichert?</h3>
    <p>In der Regel werden die oben genannten Daten zwei Wochen gespeichert und danach automatisch gelöscht. Wir geben
      diese
      Daten nicht weiter, können jedoch nicht ausschließen, dass diese Daten beim Vorliegen von rechtswidrigem Verhalten
      von
      Behörden eingesehen werden.</p>
    <p>
      <strong>Kurz gesagt:</strong> Ihr Besuch wird durch unseren Provider (Firma, die unsere
      Website auf speziellen Computern (Servern) laufen lässt), protokolliert, aber wir geben Ihre Daten nicht ohne
      Zustimmung weiter!
    </p>
    <h3>Rechtsgrundlage</h3>
    <p>Die Rechtmäßigkeit der Verarbeitung personenbezogener Daten im Rahmen des Webhosting ergibt sich aus Art. 6 Abs. 1
      lit. f DSGVO (Wahrung der berechtigten Interessen), denn die Nutzung von professionellem Hosting bei einem Provider
      ist notwendig, um das Unternehmen im Internet sicher und nutzerfreundlich präsentieren und Angriffe und Forderungen
      hieraus gegebenenfalls verfolgen zu können.</p>
    <p>Zwischen uns und dem Hosting-Provider besteht in der Regel ein Vertrag über die Auftragsverarbeitung gemäß Art. 28
      f.
      DSGVO, der die Einhaltung von Datenschutz gewährleistet und Datensicherheit garantiert.
    </p>
    <h2 style="--fontSize: 27; line-height: 1.5;" data-fontsize="27" data-lineheight="40.5px"
      class="fusion-responsive-typography-calculated">GitHub Pages Datenschutzerklärung</h2>
    <p>Wir verwenden für unsere Website den Webhosting-Dienst GitHub Pages. Dienstanbieter ist das amerikanische
      Unternehmen GitHub Inc., 88 Colin P. Kelly Jr. St.,San Francisco, CA 94107, USA.</p>
    <p>GitHub verarbeitet Daten von Ihnen u.a. auch in den USA. Wir weisen darauf hin, dass nach Meinung des
      Europäischen Gerichtshofs derzeit kein angemessenes Schutzniveau für den Datentransfer in die USA besteht. Dies
      kann mit verschiedenen Risiken für die Rechtmäßigkeit und Sicherheit der Datenverarbeitung einhergehen.</p>
    <p>Als Grundlage der Datenverarbeitung bei Empfängern mit Sitz in Drittstaaten (außerhalb der Europäischen Union,
      Island, Liechtenstein, Norwegen, also insbesondere in den USA) oder einer Datenweitergabe dorthin verwendet GitHub
      sogenannte Standardvertragsklauseln (= Art. 46. Abs. 2 und 3 DSGVO). Standardvertragsklauseln (Standard
      Contractual Clauses – SCC) sind von der EU-Kommission bereitgestellte Mustervorlagen und sollen sicherstellen,
      dass Ihre Daten auch dann den europäischen Datenschutzstandards entsprechen, wenn diese in Drittländer (wie
      beispielsweise in die USA) überliefert und dort gespeichert werden. Durch diese Klauseln verpflichtet sich GitHub,
      bei der Verarbeitung Ihrer relevanten Daten, das europäische Datenschutzniveau einzuhalten, selbst wenn die Daten
      in den USA gespeichert, verarbeitet und verwaltet werden. Diese Klauseln basieren auf einem Durchführungsbeschluss
      der EU-Kommission. Sie finden den Beschluss und die entsprechenden Standardvertragsklauseln u.a. hier: <a
        href="https://eur-lex.europa.eu/eli/dec_impl/2021/914/oj?locale=de">https://eur-lex.europa.eu/eli/dec_impl/2021/914/oj?locale=de</a>
    </p>
    <p>Die GitHub Datenverarbeitungsbedingungen (Processing Terms), welche den Standardvertragsklauseln entsprechen,
      finden Sie unter <a href="https://docs.github.com/en/site-policy/privacy-policies/github-data-protection-agreement"
        target="_blank"
        rel="follow noopener">https://docs.github.com/en/site-policy/privacy-policies/github-data-protection-agreement</a>.
    </p>
    <p>Mehr über die Daten, die durch die Verwendung von GitHub verarbeitet werden, erfahren Sie in der Privacy Policy
      auf <a
        href="https://docs.github.com/en/site-policy/privacy-policies/github-privacy-statement?tid=132527841">https://docs.github.com/en/site-policy/privacy-policies/github-privacy-statement</a>.
    </p>
    <h2 id="content-delivery-networks-einleitung">Content Delivery Networks Einleitung</h2>
    <table border="1" cellpadding="15">
      <tbody>
        <tr>
          <td>
            <strong>Content Delivery Networks Datenschutzerklärung Zusammenfassung</strong>
            <br />
            &#x1f465; Betroffene: Besucher der Website<br />
            &#x1f91d; Zweck: Optimierung unserer Serviceleistung (um die Website schneller laden zu können)<br />
            &#x1f4d3; Verarbeitete Daten: Daten wie etwa Ihre IP-Adresse<br />
            Mehr Details dazu finden Sie weiter unten und den einzelnen Datenschutztexten.<br />
            &#x1f4c5; Speicherdauer: meisten werden die Daten solange gespeichert, bis sie zur Erfüllung der
            Dienstleistung
            nicht mehr benötigt werden<br />
            &#x2696;&#xfe0f; Rechtsgrundlagen: Art. 6 Abs. 1 lit. a DSGVO (Einwilligung), Art. 6 Abs. 1 lit. f DSGVO
            (Berechtigte Interessen)
          </td>
        </tr>
      </tbody>
    </table>
    <h3>Was ist ein Content Delivery Network?</h3>
    <p>Wir nutzen auf unserer Website ein sogenanntes Content Delivery Network. Meistens wird ein solchen Netzwerk nur CDN
      genannt. Ein CDN hilft uns, unsere Website, unabhängig von Ihrem Standort, schnell und problemlos zu laden. Dabei
      werden auch personenbezogene Daten von Ihnen auf den Servern des eingesetzten CDN-Anbieters gespeichert, verwaltet
      und
      verarbeitet. Nachfolgend gehen wir allgemein näher auf den Dienst und dessen Datenverarbeitung ein. Genaue
      Informationen über den Umgang mit Ihren Daten finden Sie in der jeweiligen Datenschutzerklärung des Anbieters.</p>
    <p>Jedes Content Delivery Network (CDN) ist ein Netzwerk regional verteilter Server, die alle über das Internet
      miteinander verbunden sind. Über dieses Netzwerk können Inhalte von Websites (speziell auch sehr große Dateien) auch
      bei großen Lastspitzen schnell und reibungslos ausgeliefert werden. Das CDN legt dafür eine Kopie unserer Website
      auf
      Ihren Servern an. Da diese Server weltweit verteilt sind, kann die Website schnell ausgeliefert werden. Die
      Datenübertragung zu Ihrem Browser wird folglich durch das CDN deutlich verkürzt.</p>
    <h3>Warum verwenden wir ein Content Delivery Network für unsere Website?</h3>
    <p>Eine schnell ladende Website ist Teil unserer Dienstleistung. Wir wissen natürlich, wie nervig es ist, wenn eine
      Website im Schneckentempo lädt. Meist verliert man sogar die Geduld und sucht das Weite, bevor die Website
      vollständig
      geladen ist. Das wollen wir natürlich vermeiden. Daher gehört eine schnell ladende Website ganz selbstverständlich
      zu
      unserem Websiteangebot. Mit einem Content Delivery Network wird in Ihrem Browser unsere Website deutlich schneller
      geladen. Besonders hilfreich ist der Einsatz des CDNs wenn Sie im Ausland sind, weil die Website von einem Server in
      Ihrer Nähe ausgeliefert wird.</p>
    <h3>Welche Daten werden verarbeitet?</h3>
    <p>Wenn Sie eine Website bzw. die Inhalte einer Website anfordern und diese in einem CDN zwischengespeichert sind,
      leitet das CDN die Anforderung an den von Ihnen am nächsten gelegenen Server und dieser liefert die Inhalte aus.
      Content Delivery Networks sind so aufgebaut, dass JavaScript-Bibliotheken heruntergeladen werden können und auf npm-
      und Github-Servern gehostet werden. Alternativ können bei den meisten CDNs auch WordPress-Plugins geladen werden,
      wenn
      diese auf <a href="https://wordpress.org/" target="_blank" rel="noopener">WordPress.org</a>
      gehostet werden. Ihr Browser kann personenbezogene Daten an das von uns eingesetzte Content Delivery Network senden.
      Dabei handelt es sich etwa um Daten wie IP-Adresse, Browsertyp, Browserversion, welche Webseite geladen wird oder
      Uhrzeit und Datum des Seitenbesuchs. Diese Daten werden vom CDN gesammelt und auch gespeichert. Ob zur
      Datenspeicherung Cookies verwendet werden, hängt von dem eingesetzten Network ab. Bitte lesen Sie sich dafür die
      Datenschutztexte des jeweiligen Dienstes durch.</p>
    <h3>Widerspruchsrecht</h3>
    <p>Falls Sie diese Datenübertragung vollkommen unterbinden wollen, können Sie einen JavaScript-Blocker (siehe
      beispielsweise <a href="https://noscript.net/" target="_blank" rel="noopener">https://noscript.net/</a>) auf Ihrem
      PC
      installieren. Natürlich kann dann unsere Website nicht mehr
      das gewohnte Service (wie beispielsweise eine schnelle Ladegeschwindigkeit) bieten.</p>
    <h3>Rechtsgrundlage</h3>
    <p>Wenn Sie eingewilligt haben, dass ein Content Delivery Network eingesetzt werden darf, ist die Rechtsgrundlage der
      entsprechenden Datenverarbeitung diese Einwilligung. Diese Einwilligung stellt laut <strong>Art. 6 Abs. 1 lit. a
        DSGVO
        (Einwilligung)</strong> die Rechtsgrundlage für die
      Verarbeitung personenbezogener Daten, wie sie bei der Erfassung durch ein Content Delivery Network vorkommen kann,
      dar.</p>
    <p>Von unserer Seite besteht zudem ein berechtigtes Interesse, ein Content Delivery Network zu verwenden, um unser
      Online-Service zu optimieren und sicherer zu machen. Die dafür entsprechende Rechtsgrundlage ist <strong>Art. 6 Abs.
        1
        lit. f DSGVO (Berechtigte Interessen)</strong>. Wir setzen das Tool
      gleichwohl nur ein, soweit Sie eine Einwilligung erteilt haben.</p>
    <p>Informationen zu speziellen Content Delivery Network erhalten Sie &#8211; sofern vorhanden &#8211; in den folgenden
      Abschnitten.</p>
      <div class="fusion-text"><h2 style="--fontSize: 27; line-height: 1.5;" data-fontsize="27" data-lineheight="40.5px">Amazon CloudFront CDN Datenschutzerklärung</h2>
<p>Wir nutzen für unsere Website das Content Delivery Network Amazon CloudFront CDN. Dienstanbieter ist das amerikanische Unternehmen Amazon Web Services, Inc., 410 Terry Avenue North, Seattle WA 98109, USA.</p>
<p>Amazon verarbeitet Daten von Ihnen u.a. auch in den USA. Wir weisen darauf hin, dass nach Meinung des Europäischen Gerichtshofs derzeit kein angemessenes Schutzniveau für den Datentransfer in die USA besteht. Dies kann mit verschiedenen Risiken für die Rechtmäßigkeit und Sicherheit der Datenverarbeitung einhergehen.</p>
<p>Als Grundlage der Datenverarbeitung bei Empfängern mit Sitz in Drittstaaten (außerhalb der Europäischen Union, Island, Liechtenstein, Norwegen, also insbesondere in den USA) oder einer Datenweitergabe dorthin verwendet Amazon sogenannte Standardvertragsklauseln (= Art. 46. Abs. 2 und 3 DSGVO). Standardvertragsklauseln (Standard Contractual Clauses – SCC) sind von der EU-Kommission bereitgestellte Mustervorlagen und sollen sicherstellen, dass Ihre Daten auch dann den europäischen Datenschutzstandards entsprechen, wenn diese in Drittländer (wie beispielsweise in die USA) überliefert und dort gespeichert werden. Durch diese Klauseln verpflichtet sich Amazon, bei der Verarbeitung Ihrer relevanten Daten, das europäische Datenschutzniveau einzuhalten, selbst wenn die Daten in den USA gespeichert, verarbeitet und verwaltet werden. Diese Klauseln basieren auf einem Durchführungsbeschluss der EU-Kommission. Sie finden den Beschluss und die entsprechenden Standardvertragsklauseln u.a. hier: <a href="https://eur-lex.europa.eu/eli/dec_impl/2021/914/oj?locale=de" target="_blank" rel="noopener">https://eur-lex.europa.eu/eli/dec_impl/2021/914/oj?locale=de</a></p>
<p>Die Amazon Datenverarbeitungsbedingung (AWS GDPR DATA PROCESSING), welche auf die Standardvertragsklauseln verweisen, finden Sie unter <a href="https://d1.awsstatic.com/legal/aws-gdpr/AWS_GDPR_DPA.pdf" target="_blank" rel="noopener">https://d1.awsstatic.com/legal/aws-gdpr/AWS_GDPR_DPA.pdf</a>.</p>
<p>Mehr über die Daten, die durch die Verwendung von Amazon CloudFront CDN verarbeitet werden, erfahren Sie in der Datenschutzerklärung auf <a href="https://aws.amazon.com/de/privacy/" target="_blank" rel="noopener">https://aws.amazon.com/de/privacy/</a>.</p>
</div>
    <h2 id="webdesign-einleitung">Webdesign Einleitung</h2>
    <table border="1" cellpadding="15">
      <tbody>
        <tr>
          <td>
            <strong>Webdesign Datenschutzerklärung Zusammenfassung</strong>
            <br />
            &#x1f465; Betroffene: Besucher der Website<br />
            &#x1f91d; Zweck: Verbesserung der Nutzererfahrung<br />
            &#x1f4d3; Verarbeitete Daten: Welche Daten verarbeitet werden, hängt stark von den verwendeten Diensten ab.
            Meist handelt es sich etwa um IP-Adresse, technische Daten, Spracheinstellungen,  Browserversion,
            Bildschirmauflösung und Name des Browsers. Mehr Details dazu finden Sie bei den jeweils eingesetzten
            Webdesign-Tools.<br />
            &#x1f4c5; Speicherdauer: abhängig von den eingesetzten Tools<br />
            &#x2696;&#xfe0f; Rechtsgrundlagen: Art. 6 Abs. 1 lit. a DSGVO (Einwilligung), Art. 6 Abs. 1 lit. f DSGVO
            (Berechtigte Interessen)
          </td>
        </tr>
      </tbody>
    </table>
    <h3>Was ist Webdesign?</h3>
    <p>Wir verwenden auf unserer Website verschiedene Tools, die unserem Webdesign dienen. Bei Webdesign geht es nicht,
      wie
      oft angenommen, nur darum, dass unsere Website hübsch aussieht, sondern auch um Funktionalität und Leistung. Aber
      natürlich ist die passende Optik einer Website auch eines der großen Ziele professionellen Webdesigns. Webdesign ist
      ein Teilbereich des Mediendesigns und beschäftigt sich sowohl mit der visuellen als auch der strukturellen und
      funktionalen Gestaltung einer Website. Ziel ist es mit Hilfe von Webdesign Ihre Erfahrung auf unserer Website zu
      verbessern. Im Webdesign-Jargon spricht man in diesem Zusammenhang von User-Experience (UX) und Usability. Unter
      User
      Experience versteht man alle Eindrücke und Erlebnisse, die der Websitebesucher auf einer Website erfährt. Ein
      Unterpunkt der User Experience ist die Usability. Dabei geht es um die Nutzerfreundlichkeit einer Website. Wert
      gelegt
      wird hier vor allem darauf, dass Inhalte, Unterseiten oder Produkte klar strukturiert sind und Sie leicht und
      schnell
      finden, wonach Sie suchen. Um Ihnen die bestmögliche Erfahrung auf unserer Website zu bieten, verwenden wir auch
      sogenannte Webdesign-Tools von Drittanbietern. Unter die Kategorie „Webdesign“ fallen in dieser Datenschutzerklärung
      also alle Dienste, die unsere Website gestalterisch verbessern. Das können beispielsweise Schriftarten, diverse
      Plugins oder andere eingebundene Webdesign-Funktionen sein.</p>
    <h3>Warum verwenden wir Webdesign-Tools?</h3>
    <p>Wie Sie Informationen auf einer Website aufnehmen, hängt sehr stark von der Struktur, der Funktionalität und der
      visuellen Wahrnehmung der Website ab. Daher wurde auch für uns ein gutes und professionelles Webdesign immer
      wichtiger. Wir arbeiten ständig an der Verbesserung unserer Website und sehen dies auch als erweiterte
      Dienstleistung
      für Sie als Websitebesucher. Weiters hat eine schöne und funktionierende Website auch wirtschaftliche Vorteile für
      uns. Schließlich werden Sie uns nur besuchen und unsere Angebote in Anspruch nehmen, wenn Sie sich rundum wohl
      fühlen.
    </p>
    <h3>Welche Daten werden durch Webdesign-Tools gespeichert?</h3>
    <p>Wenn Sie unsere Website besuchen, können Webdesign-Elemente in unseren Seiten eingebunden sein, die auch Daten
      verarbeiten können. Um welche Daten es sich genau handelt, hängt natürlich stark von den verwendeten Tools ab.
      Weiter
      unter sehen Sie genau, welche Tools wir für unsere Website verwenden. Wir empfehlen Ihnen für nähere Informationen
      über die Datenverarbeitung auch die jeweilige Datenschutzerklärung der verwendeten Tools durchzulesen. Meistens
      erfahren Sie dort, welche Daten verarbeitet werden, ob Cookies eingesetzt werden und wie lange die Daten aufbewahrt
      werden. Durch Schriftarten wie etwa Google Fonts werden beispielsweise auch Informationen wie Spracheinstellungen,
      IP-Adresse, Version des Browsers, Bildschirmauflösung des Browsers und Name des Browsers automatisch an die
      Google-Server übertragen.</p>
    <h3>Dauer der Datenverarbeitung</h3>
    <p>Wie lange Daten verarbeitet werden, ist sehr individuell und hängt von den eingesetzten Webdesign-Elementen ab.
      Wenn
      Cookies beispielsweise zum Einsatz kommen, kann die Aufbewahrungsdauer nur eine Minute, aber auch ein paar Jahre
      dauern. Machen Sie sich diesbezüglich bitte schlau. Dazu empfehlen wir Ihnen einerseits unseren allgemeinen
      Textabschnitt über Cookies sowie die Datenschutzerklärungen der eingesetzten Tools. Dort erfahren Sie in der Regel,
      welche Cookies genau eingesetzt werden, und welche Informationen darin gespeichert werden. Google-Font-Dateien
      werden
      zum Beispiel ein Jahr gespeichert. Damit soll die Ladezeit einer Website verbessert werden. Grundsätzlich werden
      Daten
      immer nur so lange aufbewahrt, wie es für die Bereitstellung des Dienstes nötig ist. Bei gesetzlichen
      Vorschreibungen
      können Daten auch länger gespeichert werden.</p>
    <h3>Widerspruchsrecht</h3>
    <p>Sie haben auch jederzeit das Recht und die Möglichkeit Ihre Einwilligung zur Verwendung von Cookies bzw.
      Drittanbietern zu widerrufen. Das funktioniert entweder über unser Cookie-Management-Tool oder über andere
      Opt-Out-Funktionen. Sie können auch die Datenerfassung durch Cookies verhindern, indem Sie in Ihrem Browser die
      Cookies verwalten, deaktivieren oder löschen. Unter Webdesign-Elementen (meistens bei Schriftarten) gibt es
      allerdings
      auch Daten, die nicht ganz so einfach gelöscht werden können. Das ist dann der Fall, wenn Daten direkt bei einem
      Seitenaufruf automatisch erhoben und an einen Drittanbieter (wie z. B. Google) übermittelt werden. Wenden Sie sich
      dann bitte an den Support des entsprechenden Anbieters. Im Fall von Google erreichen Sie den Support unter <a
        href="https://support.google.com/?hl=de">https://support.google.com/?hl=de</a>.</p>
    <h3>Rechtsgrundlage</h3>
    <p>Wenn Sie eingewilligt haben, dass Webdesign-Tools eingesetzt werden dürfen, ist die Rechtsgrundlage der
      entsprechenden Datenverarbeitung diese Einwilligung. Diese Einwilligung stellt laut Art. 6 Abs. 1 lit. a DSGVO
      (Einwilligung) die Rechtsgrundlage für die Verarbeitung personenbezogener Daten, wie sie bei der Erfassung durch
      Webdesign-Tools vorkommen kann, dar. Von unserer Seite besteht zudem ein berechtigtes Interesse, das Webdesign auf
      unserer Website zu verbessern. Schließlich können wir Ihnen nur dann ein schönes und professionelles Webangebot
      liefern. Die dafür entsprechende Rechtsgrundlage ist Art. 6 Abs. 1 lit. f DSGVO (Berechtigte Interessen). Wir setzen
      Webdesign-Tools gleichwohl nur ein, soweit Sie eine Einwilligung erteilt haben. Das wollen wir hier auf jeden Fall
      nochmals betonen.</p>
    <p>Informationen zu speziellen Webdesign-Tools erhalten Sie &#8211; sofern vorhanden &#8211; in den folgenden
      Abschnitten.</p>
    <h2 id="google-fonts-datenschutzerklaerung">Google Fonts Datenschutzerklärung</h2>
    <table border="1" cellpadding="15">
      <tbody>
        <tr>
          <td>
            <strong>Google Fonts Datenschutzerklärung Zusammenfassung</strong>
            <br />
            &#x1f465; Betroffene: Besucher der Website<br />
            &#x1f91d; Zweck: Optimierung unserer Serviceleistung<br />
            &#x1f4d3; Verarbeitete Daten: Daten wie etwa IP-Adresse und CSS- und Schrift-Anfragen<br />
            Mehr Details dazu finden Sie weiter unten in dieser Datenschutzerklärung.<br />
            &#x1f4c5; Speicherdauer: Font-Dateien werden bei Google ein Jahr gespeichert<br />
            &#x2696;&#xfe0f; Rechtsgrundlagen: Art. 6 Abs. 1 lit. a DSGVO (Einwilligung), Art. 6 Abs. 1 lit. f DSGVO
            (Berechtigte Interessen)
          </td>
        </tr>
      </tbody>
    </table>
    <h3>Was sind Google Fonts?</h3>
    <p>Auf unserer Website verwenden wir Google Fonts. Das sind die &#8220;Google-Schriften&#8221; der Firma Google Inc.
      Für
      den europäischen Raum ist das Unternehmen Google Ireland Limited (Gordon House, Barrow Street Dublin 4, Irland) für
      alle Google-Dienste verantwortlich.</p>
    <p>Für die Verwendung von Google-Schriftarten müssen Sie sich nicht anmelden bzw. ein Passwort hinterlegen. Weiters
      werden auch keine Cookies in Ihrem Browser gespeichert. Die Dateien (CSS, Schriftarten/Fonts) werden über die
      Google-Domains fonts.googleapis.com und fonts.gstatic.com angefordert. Laut Google sind die Anfragen nach CSS und
      Schriften vollkommen getrennt von allen anderen Google-Diensten. Wenn Sie ein Google-Konto haben, brauchen Sie keine
      Sorge haben, dass Ihre Google-Kontodaten, während der Verwendung von Google Fonts, an Google übermittelt werden.
      Google erfasst die Nutzung von CSS (Cascading Style Sheets) und der verwendeten Schriftarten und speichert diese
      Daten
      sicher. Wie die Datenspeicherung genau aussieht, werden wir uns noch im Detail ansehen.</p>
    <p>Google Fonts (früher Google Web Fonts) ist ein Verzeichnis mit über 800 Schriftarten, die <a
        href="https://de.wikipedia.org/wiki/Google_LLC?tid=112487332">Google</a> Ihren Nutzern
      kostenlos zu Verfügung stellen.</p>
    <p>Viele dieser Schriftarten sind unter der SIL Open Font License veröffentlicht, während andere unter
      der Apache-Lizenz veröffentlicht wurden. Beides sind freie Software-Lizenzen.</p>
    <h3>Warum verwenden wir Google Fonts auf unserer Website?</h3>
    <p>Mit Google Fonts können wir auf der eigenen Webseite Schriften nutzen, und müssen sie nicht auf unserem eigenen
      Server hochladen. Google Fonts ist ein wichtiger Baustein, um die Qualität unserer Webseite hoch zu halten. Alle
      Google-Schriften sind automatisch für das Web optimiert und dies spart Datenvolumen und ist speziell für die
      Verwendung bei mobilen Endgeräten ein großer Vorteil. Wenn Sie unsere Seite besuchen, sorgt die niedrige Dateigröße
      für eine schnelle Ladezeit. Des Weiteren sind Google Fonts sichere Web Fonts. Unterschiedliche Bildsynthese-Systeme
      (Rendering) in verschiedenen Browsern, Betriebssystemen und mobilen Endgeräten können zu Fehlern führen. Solche
      Fehler
      können teilweise Texte bzw. ganze Webseiten optisch verzerren. Dank des schnellen Content Delivery Network (CDN)
      gibt
      es mit Google Fonts keine plattformübergreifenden Probleme. Google Fonts unterstützt alle gängigen Browser (Google
      Chrome, Mozilla Firefox, Apple Safari, Opera) und funktioniert zuverlässig auf den meisten modernen mobilen
      Betriebssystemen, einschließlich Android 2.2+ und iOS 4.2+ (iPhone, iPad, iPod). Wir verwenden die Google Fonts
      also,
      damit wir unser gesamtes Online-Service so schön und einheitlich wie möglich darstellen können.</p>
    <h3>Welche Daten werden von Google gespeichert?</h3>
    <p>Wenn Sie unsere Webseite besuchen, werden die Schriften über einen Google-Server nachgeladen. Durch diesen externen
      Aufruf werden Daten an die Google-Server übermittelt. So erkennt Google auch, dass Sie bzw. Ihre IP-Adresse unsere
      Webseite besucht. Die Google Fonts API wurde entwickelt, um Verwendung, Speicherung und Erfassung von Endnutzerdaten
      auf das zu reduzieren, was für eine ordentliche Bereitstellung von Schriften nötig ist. API steht übrigens für
      „Application Programming Interface“ und dient unter anderem als Datenübermittler im Softwarebereich.</p>
    <p>Google Fonts speichert CSS- und Schrift-Anfragen sicher bei Google und ist somit geschützt. Durch die gesammelten
      Nutzungszahlen kann Google feststellen, wie gut die einzelnen Schriften ankommen. Die Ergebnisse veröffentlicht
      Google
      auf internen Analyseseiten, wie beispielsweise Google Analytics. Zudem verwendet Google auch Daten des eigenen
      Web-Crawlers, um festzustellen, welche Webseiten Google-Schriften verwenden. Diese Daten werden in der
      BigQuery-Datenbank von Google Fonts veröffentlicht. Unternehmer und Entwickler nützen das
      Google-Webservice BigQuery,
      um große Datenmengen untersuchen und bewegen zu können.</p>
    <p>Zu bedenken gilt allerdings noch, dass durch jede Google Font Anfrage auch Informationen wie Spracheinstellungen,
      IP-Adresse, Version des Browsers, Bildschirmauflösung des Browsers und Name des Browsers automatisch an die
      Google-Server übertragen werden. Ob diese Daten auch gespeichert werden, ist nicht klar feststellbar bzw. wird von
      Google nicht eindeutig kommuniziert.</p>
    <h3>Wie lange und wo werden die Daten gespeichert?</h3>
    <p>Anfragen für CSS-Assets speichert Google einen Tag lang auf seinen Servern, die hauptsächlich außerhalb der EU
      angesiedelt sind. Das ermöglicht uns, mithilfe eines Google-Stylesheets die Schriftarten zu nutzen. Ein Stylesheet
      ist
      eine Formatvorlage, über die man einfach und schnell z.B. das Design bzw. die Schriftart einer Webseite ändern kann.
    </p>
    <p>Die Font-Dateien werden bei Google ein Jahr gespeichert. Google verfolgt damit das Ziel, die Ladezeit von Webseiten
      grundsätzlich zu verbessern. Wenn Millionen von Webseiten auf die gleichen Schriften verweisen, werden sie nach dem
      ersten Besuch zwischengespeichert und erscheinen sofort auf allen anderen später besuchten Webseiten wieder.
      Manchmal
      aktualisiert Google Schriftdateien, um die Dateigröße zu reduzieren, die Abdeckung von Sprache zu erhöhen und das
      Design zu verbessern.</p>
    <h3>Wie kann ich meine Daten löschen bzw. die Datenspeicherung verhindern?</h3>
    <p>Jene Daten, die Google für einen Tag bzw. ein Jahr speichert können nicht einfach gelöscht werden. Die Daten werden
      beim Seitenaufruf automatisch an Google übermittelt. Um diese Daten vorzeitig löschen zu können, müssen Sie den
      Google-Support auf <a
        href="https://support.google.com/?hl=de&amp;tid=112487332">https://support.google.com/?hl=de&amp;tid=112487332</a>
      kontaktieren. Datenspeicherung verhindern Sie in diesem Fall nur, wenn Sie unsere Seite nicht besuchen.</p>
    <p>Anders als andere Web-Schriften erlaubt uns Google uneingeschränkten Zugriff auf alle Schriftarten. Wir können also
      unlimitiert auf ein Meer an Schriftarten zugreifen und so das Optimum für unsere Webseite rausholen. Mehr zu Google
      Fonts und weiteren Fragen finden Sie auf <a
        href="https://developers.google.com/fonts/faq?tid=112487332">https://developers.google.com/fonts/faq?tid=112487332</a>.
      Dort geht zwar Google auf datenschutzrelevante Angelegenheiten ein, doch wirklich detaillierte Informationen über
      Datenspeicherung sind nicht enthalten. Es ist relativ schwierig, von Google wirklich präzise Informationen über
      gespeicherten Daten zu bekommen.</p>
    <h3>Rechtsgrundlage</h3>
    <p>Wenn Sie eingewilligt haben, dass Google Fonts eingesetzt werden darf, ist die Rechtsgrundlage der entsprechenden
      Datenverarbeitung diese Einwilligung. Diese Einwilligung stellt laut<strong> Art. 6 Abs. 1
        lit. a DSGVO (Einwilligung)</strong> die Rechtsgrundlage für die Verarbeitung personenbezogener Daten, wie sie bei
      der Erfassung durch Google Fonts vorkommen kann, dar.</p>
    <p>Von unserer Seite besteht zudem ein berechtigtes Interesse, Google Font zu verwenden, um unser Online-Service zu
      optimieren. Die dafür entsprechende Rechtsgrundlage ist <strong>Art. 6 Abs. 1 lit. f DSGVO
        (Berechtigte Interessen)</strong>. Wir setzen Google Font gleichwohl nur ein, soweit Sie eine Einwilligung erteilt
      haben.</p>
    <p>Google verarbeitet Daten von Ihnen u.a. auch in den USA. Wir weisen darauf hin, dass nach Meinung des Europäischen
      Gerichtshofs derzeit kein angemessenes Schutzniveau für den Datentransfer in die USA besteht. Dies kann mit
      verschiedenen Risiken für die Rechtmäßigkeit und Sicherheit der Datenverarbeitung einhergehen.</p>
    <p>Als Grundlage der Datenverarbeitung bei Empfängern mit Sitz in Drittstaaten (außerhalb der Europäischen Union,
      Island, Liechtenstein, Norwegen, also insbesondere in den USA) oder einer Datenweitergabe dorthin verwendet Google
      sogenannte Standardvertragsklauseln (= Art. 46. Abs. 2 und 3 DSGVO). Standardvertragsklauseln (Standard Contractual
      Clauses – SCC) sind von der EU-Kommission bereitgestellte Mustervorlagen und sollen sicherstellen, dass Ihre Daten
      auch dann den europäischen Datenschutzstandards entsprechen, wenn diese in Drittländer (wie beispielsweise in die
      USA)
      überliefert und dort gespeichert werden. Durch diese Klauseln verpflichtet sich Google, bei der Verarbeitung Ihrer
      relevanten Daten, das europäische Datenschutzniveau einzuhalten, selbst wenn die Daten in den USA gespeichert,
      verarbeitet und verwaltet werden. Diese Klauseln basieren auf einem Durchführungsbeschluss der EU-Kommission. Sie
      finden den Beschluss und die entsprechenden Standardvertragsklauseln u.a. hier: <a
        href="https://eur-lex.europa.eu/eli/dec_impl/2021/914/oj?locale=de" target="_blank"
        rel="noopener">https://eur-lex.europa.eu/eli/dec_impl/2021/914/oj?locale=de</a>
    </p>
    <p>Die Google Ads Datenverarbeitungsbedingungen (Google Ads Data Processing Terms), welche auch den
      Standardvertragsklauseln für Google Fonts entsprechen, finden Sie unter <a
        href="https://business.safety.google/adsprocessorterms/" target="_blank"
        rel="noopener">https://business.safety.google/adsprocessorterms/</a>.</p>
    <p>Welche Daten grundsätzlich von Google erfasst werden und wofür diese Daten verwendet werden, können Sie auch auf <a
        href="https://policies.google.com/privacy?hl=de&amp;tid=112487332">https://www.google.com/intl/de/policies/privacy/</a>
      nachlesen.</p>
    <h2 id="erklaerung-verwendeter-begriffe">Erklärung verwendeter Begriffe</h2>
    <p>Wir sind stets bemüht unsere Datenschutzerklärung so klar und verständlich wie möglich zu verfassen. Besonders bei
      technischen und rechtlichen Themen ist das allerdings nicht immer ganz einfach. Es macht oft Sinn juristische
      Begriffe
      (wie z. B. personenbezogene Daten) oder bestimmte technische Ausdrücke (wie z. B. Cookies, IP-Adresse) zu verwenden.
      Wir möchte diese aber nicht ohne Erklärung verwenden. Nachfolgend finden Sie nun eine alphabetische Liste von
      wichtigen verwendeten Begriffen, auf die wir in der bisherigen Datenschutzerklärung vielleicht noch nicht
      ausreichend
      eingegangen sind. Falls diese Begriffe der DSGVO entnommen wurden und es sich um Begriffsbestimmungen handelt,
      werden
      wir hier auch die DSGVO-Texte anführen und gegebenenfalls noch eigene Erläuterungen hinzufügen.</p>
    <h2 id="auftragsverarbeiter">Auftragsverarbeiter</h2>
    <p>
      <strong>Begriffsbestimmung nach Artikel 4 der DSGVO</strong>
    </p>
    <p>Im Sinne dieser Verordnung bezeichnet der Ausdruck:</p>
    <blockquote>
      <p>
        <em>
          <strong>„Auftragsverarbeiter“</strong> eine natürliche oder juristische Person,
          Behörde, Einrichtung oder andere Stelle, die personenbezogene Daten im Auftrag des Verantwortlichen
          verarbeitet;</em>
      </p>
    </blockquote>
    <p>
      <strong>Erläuterung:</strong> Wir sind als Unternehmen und Websiteinhaber für alle Daten,
      die wir von Ihnen verarbeiten verantwortlich. Neben den Verantwortlichen kann es auch sogenannte Auftragsverarbeiter
      geben. Dazu zählt jedes Unternehmen bzw. jede Person, die in unserem Auftrag personenbezogene Daten verarbeitet.
      Auftragsverarbeiter können folglich, neben Dienstleistern wie Steuerberater, etwa auch Hosting- oder Cloudanbieter,
      Bezahlungs- oder Newsletter-Anbieter oder große Unternehmen wie beispielsweise Google oder Microsoft sein.
    </p>
    <h2 id="einwilligung">Einwilligung</h2>
    <p>
      <strong>Begriffsbestimmung nach Artikel 4 der DSGVO</strong>
    </p>
    <p>Im Sinne dieser Verordnung bezeichnet der Ausdruck:</p>
    <blockquote>
      <p>
        <em>
          <strong>„Einwilligung“</strong> der betroffenen Person jede freiwillig für den
          bestimmten Fall, in informierter Weise und unmissverständlich abgegebene Willensbekundung in Form einer
          Erklärung
          oder einer sonstigen eindeutigen bestätigenden Handlung, mit der die betroffene Person zu verstehen gibt, dass
          sie
          mit der Verarbeitung der sie betreffenden personenbezogenen Daten einverstanden ist;</em>
      </p>
    </blockquote>
    <p>
      <strong>Erläuterung: </strong>In der Regel erfolgt bei Websites eine solche Einwilligung
      über ein Cookie-Consent-Tool. Sie kennen das bestimmt. Immer wenn Sie erstmals eine Website besuchen, werden Sie
      meist
      über einen Banner gefragt, ob Sie der Datenverarbeitung zustimmen bzw. einwilligen. Meist können Sie auch
      individuelle
      Einstellungen treffen und so selbst entscheiden, welche Datenverarbeitung Sie erlauben und welche nicht. Wenn Sie
      nicht einwilligen, dürfen auch keine personenbezogene Daten von Ihnen verarbeitet werden. Grundsätzlich kann eine
      Einwilligung natürlich auch schriftlich, also nicht über ein Tool, erfolgen.
    </p>
    <h2 id="personenbezogene-daten">Personenbezogene Daten</h2>
    <p>
      <strong>Begriffsbestimmung nach Artikel 4 der DSGVO</strong>
    </p>
    <p>Im Sinne dieser Verordnung bezeichnet der Ausdruck:</p>
    <blockquote>
      <p>
        <strong>
          <em>„personenbezogene Daten“</em>
        </strong>
        <em> alle Informationen, die sich auf eine identifizierte oder identifizierbare natürliche Person (im Folgenden
          „betroffene Person“) beziehen; als identifizierbar wird eine natürliche Person angesehen, die direkt oder
          indirekt, insbesondere mittels Zuordnung zu einer Kennung wie einem Namen, zu einer Kennnummer, zu
          Standortdaten,
          zu einer Online-Kennung oder zu einem oder mehreren besonderen Merkmalen, die Ausdruck der physischen,
          physiologischen, genetischen, psychischen, wirtschaftlichen, kulturellen oder sozialen Identität dieser
          natürlichen Person sind, identifiziert werden kann;</em>
      </p>
    </blockquote>
    <p>
      <strong>Erläuterung:</strong> Personenbezogene Daten sind also all jene Daten, die Sie als
      Person identifizieren können. Das sind in der Regel Daten wie etwa:
    </p>
    <ul>
      <li>Name</li>
      <li>Adresse</li>
      <li>E-Mail-Adresse</li>
      <li>Post-Anschrift</li>
      <li>Telefonnummer</li>
      <li>Geburtsdatum</li>
      <li>Kennnummern wie Sozialversicherungsnummer, Steueridentifikationsnummer,
        Personalausweisnummer oder Matrikelnummer</li>
      <li>Bankdaten wie Kontonummer, Kreditinformationen, Kontostände uvm.</li>
    </ul>
    <p>Laut Europäischem Gerichtshof (EuGH) zählt auch Ihre <strong>IP-Adresse zu den
        personenbezogenen Daten</strong>. IT-Experten können anhand Ihrer IP-Adresse zumindest den ungefähren Standort
      Ihres
      Geräts und in weiterer Folge Sie als Anschlussinhabers feststellen. Daher benötigt auch das Speichern einer
      IP-Adresse
      eine Rechtsgrundlage im Sinne der DSGVO. Es gibt auch noch sogenannte <strong>„besondere
        Kategorien“</strong> der personenbezogenen Daten, die auch besonders schützenswert sind. Dazu zählen:</p>
    <ul>
      <li>rassische und ethnische Herkunft</li>
      <li>politische Meinungen</li>
      <li>religiöse bzw. weltanschauliche Überzeugungen</li>
      <li>die Gewerkschaftszugehörigkeit</li>
      <li>genetische Daten wie beispielsweise Daten, die aus Blut- oder Speichelproben entnommen
        werden</li>
      <li>biometrische Daten (das sind Informationen zu psychischen, körperlichen oder
        verhaltenstypischen Merkmalen, die eine Person identifizieren können).<br />
        Gesundheitsdaten</li>
      <li>Daten zur sexuellen Orientierung oder zum Sexualleben</li>
    </ul>
    <h2 id="profiling">Profiling</h2>
    <p>
      <strong>Begriffsbestimmung nach Artikel 4 der DSGVO</strong>
    </p>
    <p>Im Sinne dieser Verordnung bezeichnet der Ausdruck:</p>
    <blockquote>
      <p>
        <em>
          <strong>„Profiling“</strong> jede Art der automatisierten Verarbeitung
          personenbezogener Daten, die darin besteht, dass diese personenbezogenen Daten verwendet werden, um bestimmte
          persönliche Aspekte, die sich auf eine natürliche Person beziehen, zu bewerten, insbesondere um Aspekte
          bezüglich
          Arbeitsleistung, wirtschaftliche Lage, Gesundheit, persönliche Vorlieben, Interessen, Zuverlässigkeit,
          Verhalten,
          Aufenthaltsort oder Ortswechsel dieser natürlichen Person zu analysieren oder vorherzusagen;</em>
      </p>
    </blockquote>
    <p>
      <strong>Erläuterung:</strong> Beim Profiling werden verschiedene Informationen über eine
      Person zusammengetragen, um daraus mehr über diese Person zu erfahren. Im Webbereich wird Profiling häufig für
      Werbezwecke oder auch für Bonitätsprüfungen angewandt. Web- bzw. Werbeanalyseprogramme sammeln zum Beispiel Daten
      über
      Ihre Verhalten und Ihre Interessen auf einer Website. Daraus ergibt sich ein spezielles Userprofil, mit dessen Hilfe
      Werbung gezielt an eine Zielgruppe ausgespielt werden kann.
    </p>

    <h2 id="verantwortlicher">Verantwortlicher</h2>
    <p>
      <strong>Begriffsbestimmung nach Artikel 4 der DSGVO</strong>
    </p>
    <p>Im Sinne dieser Verordnung bezeichnet der Ausdruck:</p>
    <blockquote>
      <p>
        <em>
          <strong>„Verantwortlicher“</strong> die natürliche oder juristische Person, Behörde,
          Einrichtung oder andere Stelle, die allein oder gemeinsam mit anderen über die Zwecke und Mittel der
          Verarbeitung
          von personenbezogenen Daten entscheidet; sind die Zwecke und Mittel dieser Verarbeitung durch das Unionsrecht
          oder
          das Recht der Mitgliedstaaten vorgegeben, so kann der Verantwortliche beziehungsweise können die bestimmten
          Kriterien seiner Benennung nach dem Unionsrecht oder dem Recht der Mitgliedstaaten vorgesehen werden;</em>
      </p>
    </blockquote>
    <p>
      <strong>Erläuterung:</strong> In unserem Fall sind wir für die Verarbeitung Ihrer
      personenbezogenen Daten verantwortlich und folglich der &#8220;Verantwortliche&#8221;. Wenn wir erhobene Daten zur
      Verarbeitung an andere Dienstleister weitergeben, sind diese &#8220;Auftragsverarbeiter&#8221;. Dafür muss ein
      &#8220;Auftragsverarbeitungsvertrag (AVV)&#8221; unterzeichnet werden.
    </p>

    <h2 id="verarbeitung">Verarbeitung</h2>
    <p>
      <strong>Begriffsbestimmung nach Artikel 4 der DSGVO</strong>
    </p>
    <p>Im Sinne dieser Verordnung bezeichnet der Ausdruck:</p>
    <blockquote>
      <p>
        <strong>
          <em>„Verarbeitung“</em>
        </strong>
        <em> jeden mit oder ohne Hilfe automatisierter Verfahren ausgeführten Vorgang oder jede solche Vorgangsreihe im
          Zusammenhang mit personenbezogenen Daten wie das Erheben, das Erfassen, die Organisation, das Ordnen, die
          Speicherung, die Anpassung oder Veränderung, das Auslesen, das Abfragen, die Verwendung, die Offenlegung durch
          Übermittlung, Verbreitung oder eine andere Form der Bereitstellung, den Abgleich oder die Verknüpfung, die
          Einschränkung, das Löschen oder die Vernichtung;</em>
      </p>
    </blockquote>
    <p>
      <strong>Anmerkung: </strong>Wenn wir in unserer Datenschutzerklärung von Verarbeitung
      sprechen, meinen wir damit jegliche Art von Datenverarbeitung. Dazu zählt, wie oben in der originalen
      DSGVO-Erklärung
      erwähnt, nicht nur das Erheben sondern auch das Speichern und Verarbeiten von Daten.
    </p>
    <h2 id="schlusswort">Schlusswort</h2>
    <p>Herzlichen Glückwunsch! Wenn Sie diese Zeilen lesen, haben Sie sich wirklich durch unsere gesamte
      Datenschutzerklärung „gekämpft“ oder zumindest bis hier hin gescrollt. Wie Sie am Umfang unserer
      Datenschutzerklärung
      sehen, nehmen wir den Schutz Ihrer persönlichen Daten, alles andere als auf die leichte Schulter.<br />
      Uns ist es wichtig, Sie nach bestem Wissen und Gewissen über die Verarbeitung personenbezogener Daten zu
      informieren.
      Dabei wollen wir Ihnen aber nicht nur mitteilen, welche Daten verarbeitet werden, sondern auch die Beweggründe für
      die
      Verwendung diverser Softwareprogramme näherbringen. In der Regel klingen Datenschutzerklärung sehr technisch und
      juristisch. Da die meisten von Ihnen aber keine Webentwickler oder Juristen sind, wollten wir auch sprachlich einen
      anderen Weg gehen und den Sachverhalt in einfacher und klarer Sprache erklären. Immer ist dies natürlich aufgrund
      der
      Thematik nicht möglich. Daher werden die wichtigsten Begriffe am Ende der Datenschutzerklärung näher
      erläutert.<br />
      Bei Fragen zum Thema Datenschutz auf unserer Website zögern Sie bitte nicht, uns oder die verantwortliche Stelle zu
      kontaktieren. Wir wünschen Ihnen noch eine schöne Zeit und hoffen, Sie auf unserer Website bald wieder begrüßen zu
      dürfen.</p>
    <p>Alle Texte sind urheberrechtlich geschützt.</p>
    <p>Quelle: Erstellt mit dem <a href="https://www.adsimple.at/datenschutz-generator/"
        title="Datenschutz Generator von AdSimple für Österreich">
      Datenschutz Generator</a> von AdSimple
    </p>
    </v-card-text>
  </v-card>
</template>

<script>
export default {
  name: 'ImprintPage',
}
</script>

<style scoped>
ul, h1, h2, h3, h4, h5, h6 {
  margin-bottom: 1rem;
}

p,
table {
  margin-bottom: 2rem;
}

li {
  margin-left: 2rem;
}
</style>