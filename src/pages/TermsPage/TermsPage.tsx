/* eslint-disable  no-irregular-whitespace */
import type { VNode } from 'vue';
import { computed, defineComponent } from 'vue';
import { useI18n } from 'vue-i18n';
import AppFooter from '@/components/AppFooter';
import AppHeader from '@/components/AppHeader';
import AppMain from '@/components/AppMain';
import BackLink from '@/components/BackLink';
import './TermsPage.css';

export default defineComponent({
  name: 'TermsPage',
  setup() {
    const { locale } = useI18n();
    const currentTerms = computed(() => {
      switch (locale.value) {
        case 'en-US':
        case 'en':
          return `<h1 class="page-title" id="terms-of-use-and-privacy-policy">Terms of use and privacy policy</h1>
          <h2 id="controller">Controller</h2>
          <p><pre class="info">Forum Virium Helsinki Oy (“Forum Virium Helsinki”, “FVH”)
Business ID: FI21700292
Unioninkatu 24, 6th floor, 00130 Helsinki, Finland
Email: info@forumvirium.fi</pre></p>
          <h2 id="data-processor">Data processor</h2>
          <p><pre class="info">New Things Company Oy (“New Things Co”, “NTC”)
Business ID: 2806288-7
Lönnrotinkatu 20, 5th floor, 00120 Helsinki, Finland
Email: info@newthings.co
Tel. +358 50 326 7292</pre></p>
          <h2 id="terms-of-use-of-the-urban-green-explorer-web-application">
            Terms of Use of the Urban Green Explorer web application
          </h2>
          <p>
            The following are the terms of use between you and Forum Virium Helsinki
            (later: “FVH”), New Things Co (later: “NTC”) and the Urban Green Explorer web
            application (later “UGE”, “App” or “service”). By accessing, browsing, or
            using this service, you acknowledge that you have read, understood, and agree
            to be bound by these terms. If you do not agree to these terms, please do not
            use this service.
          </p>
          <p>
            FVH or NTC may, without notice to you, at any time revise these Terms of Use
            and any other information contained in this service. Information on this
            service is not promised or guaranteed to be correct, current, or complete, and
            this site may contain inaccuracies or errors. FVH and NTC assume no
            responsibility (and expressly disclaims responsibility) for updating this
            service to keep information current or to ensure the accuracy or completeness
            of any posted information.
          </p>
          <p>
            The authenticity, invariability and updatedness cannot be guaranteed in all
            situations. FVH and NTC assume no responsibility for any harm that may have
            been caused by visiting the various locations listed in the UGE service or
            using any material found on the physical sites featured in the App.
          </p>
          <h2 id="immaterial-rights-copyrights">Immaterial rights, copyrights</h2>
          <p>
            As a rule, FVH has the copyright for all content on the service. UGE and all
            content within it may not be copied, reproduced, republished, uploaded,
            posted, transmitted, distributed, or used for the creation of derivative works
            without prior written consent from FVH.
          </p>
          <h2 id="confidential-information">Confidential information</h2>
          <h3 id="feedback-form">Feedback form</h3>
          <p>
            NTC collects voluntary feedback from the info page, which may contain your
            name and email should you choose to disclose this information as those fields
            are optional. Please note that any information or material sent to NTC through
            the App will be deemed not to be confidential and may be forwarded to FVH,
            unless otherwise stated in the feedback message.
          </p>
          <p>
            By sending any information or material through the App, you grant FVH and NTC
            an unrestricted, irrevocable license to copy, reproduce, publish, upload,
            post, transmit, distribute, publicly display, perform, modify, create
            derivative works from, and otherwise freely use, those materials or
            information. You also agree that FVH and NTC are free to use any ideas,
            concepts, know-how, or techniques that you send them for any purpose.
            Personally-identifiable information that you submit through the feedback form
            will be handled in accordance with our privacy policy. We comply with EU
            General Data Processing Regulations for data protection and privacy for
            individuals within the European Union. We also comply with all applicable EU
            and local regulations.
          </p>
          <h3 id="location-data">Location data</h3>
          <p>
            Individual location pages in UGE are tasked to determine your current location
            and measure the distance from you to the target location. When close enough,
            the check-in button becomes enabled and you can press it to unlock more
            information about the target location.
          </p>
          <p>
            As a user, you can opt out of giving the App your location and enable the
            check-in button by default. This decision will persist throughout your
            session, but you can always enable the location again from your browser’s
            settings should you choose to do so at a later date. The location data
            received at each separate location is not shared or stored anywhere other than
            in the App’s memory for the time being of the distance measurement process.
          </p>
          <p>
            The map view also contains a locator icon, which will ask for your current
            location to be able to pinpoint you on the map. The use of this feature is
            optional and the user can deny access when prompted to locate the device on
            the map. The location information gathered by the map is not shared or stored
            anywhere outside the App other than for the purposes of showing the device’s
            location on the map in real-time.
          </p>
          <h3 id="netlify-analytics">Netlify Analytics</h3>
          <p>
            The App uses Netlify Analytics to measure how many visitors use the service.
            Netlify gives FVH and NTC access to pageviews, how many unique visitors have
            visited the service, top locations by country, top pages visited and bandwidth
            used. Netlify Analytics is GDPR compliant.
          </p>
          <h2 id="business-relationships">Business relationships</h2>
          <p>
            This service may provide links or references to non-FVH and non-NTC websites
            and resources. FVH and NTC make no representations, warranties, or other
            commitments whatsoever about any external websites or third-party resources
            that may be referenced, accessible from, or linked to our site. A link to a
            non-FVH or a non-NTC website does not mean that FVH endorses the content or
            use of such a website or its owner. In addition, FVH and NTC are not party to
            or responsible for any transactions you may enter into with third parties,
            even if you learn of such parties (or use a link to such parties) from the UGE
            service. Accordingly, you acknowledge and agree that FVH and NTC are not
            responsible for the availability of such external sites or resources, and is
            not responsible or liable for any content, services, products, or other
            materials on or available from those sites or resources.
          </p>
          <p>
            When you access a non-FVH or non-NTC website, please understand that it is
            independent from both companies, and that FVH or NTC do not control the
            content on that website.
          </p>
          <h2 id="linking-to-this-site">Linking to this site</h2>
          <p>
            All links to this website must be approved in writing by FVH, except that FVH
            consents to links in which the link and the pages that are activated by the
            link do not: (a) create frames around any page on this service or use other
            techniques that alter in any way the visual presentation or appearance of any
            content within this App; (b) misrepresent your relationship with FVH; (c)
            imply that FVH approves or endorses you, your website, or your service or
            product offerings. As a further condition to being permitted to link to this
            site, you agree that FVH may at any time, in its sole discretion, terminate
            permission to link to this website. In such event, you agree to immediately
            remove all links to this website and to cease using any FVH trademark.
          </p>
          <h2 id="safety-of-our-service-privacy-protection">
            Safety of our service, Privacy Protection
          </h2>
          <p>
            Some information described below is automatically gathered on our website.
            Data is not collected for commercial purposes. They are not sold or otherwise
            transferred to third parties by the service provider.
          </p>
          <h2 id="browser-session-data">Browser session data</h2>
          <p>
            The browser’s local storage is used to maintain a record of the locations you
            have visited in order to show additional content when the location has been
            unlocked (checked-in). The user can opt-out of this feature by denying the
            service access to the browser’s local storage.
          </p>
          <h2 id="server-statistics">Server statistics</h2>
          <p>
            UGE’s current hosting plan on Netlify does not include the Log Drain service,
            which would give access to the server’s logs and detailed statistics not
            present in Netlify’s Analytics service. FVH or NTC do not have access to
            additional server logs apart from deployment logs when releasing a new version
            of the App.
          </p>
          <h2 id="forms-and-transactions-protection">
            Forms and Transactions, Protection
          </h2>
          <p>
            Our pages offer a voluntary feedback form on the info page for gathering
            information of the App’s usage, bug reports and ideas for improving the user
            experience. The connection to the site is always SSL protected. The purpose of
            protection is to prevent others from seeing the data processed on the page.
          </p>
          <h2 id="availability-of-the-service">Availability of the service</h2>
          <p>FVH or NTC do not guarantee the availability or functionality of UGE.</p>
          `;
        default:
          return `<h1 class="page-title" id="käyttöehdot-ja-tietosuojakäytäntö">
          Käyttöehdot ja tietosuojakäytäntö
        </h1>
        <h2 id="rekisterinpitäjä">Rekisterinpitäjä</h2>
        <p><pre class="info">Forum Virium Helsinki Oy (“Forum Virium Helsinki”, “FVH”)
Y-tunnus: FI21700292
Osoite: Unioninkatu 24, 6th floor, 00130 Helsinki, Suomi
Sähköposti: info@forumvirium.fi</pre></p>
        <h2 id="käsittelijä">Käsittelijä</h2>
        <p><pre class="info">New Things Company Oy (“New Things Co”, “NTC”)
Y-tunnus: 2806288-7
Osoite: Lönnrotinkatu 20, 5th floor, 00120 Helsinki, Suomi
Sähköposti: info@newthings.co
Puh. +358 50 326 7292</pre></p>
        <h2 id="urban-green-explorer--verkkopalvelun-käyttöehdot">
          Urban Green Explorer -verkkopalvelun käyttöehdot
        </h2>
        <p>
          Nämä ovat sinun ja Forum Virium Helsingin (myöhemmin: ”FVH”), New Things Co:n
          (myöhemmin: ”NTC”) ja Urban Green Explorer -verkkopalvelun (myöhemmin ”UGE”,
          ”verkkopalvelu” tai ”palvelu&quot;) käyttöehdot. Käyttämällä tai selaamalla
          tätä palvelua vahvistat, että olet lukenut ja ymmärtänyt nämä ehdot ja
          sitoudut noudattamaan niitä. Mikäli et hyväksy näitä ehtoja, älä käytä tätä
          palvelua.
        </p>
        <p>
          FVH tai NTC voi milloin tahansa ilman erillistä ilmoitusta muuttaa näitä
          käyttöehtoja ja muita tähän palveluun sisältyviä tietoja. Tätä palvelua
          koskevien tietojen ei luvata tai taata olevan oikeita, ajantasaisia ​​tai
          täydellisiä, ja tämä sivusto saattaa sisältää virheitä. FVH ja NTC eivät ota
          vastuuta (ja nimenomaisesti kiistävät vastuun) tämän palvelun päivittämisestä
          tietojen pitämiseksi ajan tasalla julkaistujen tietojen oikeellisuuden tai
          täydellisyyden varmistamiseksi.
        </p>
        <p>
          Aitoutta, muuttumattomuutta ja ajantasaisuutta ei voida taata kaikissa
          tilanteissa. FVH ja NTC eivät ota vastuuta mistään haitoista, jotka ovat
          saattaneet aiheutua vierailusta UGE-palvelussa mainituissa kohteissa tai
          verkkopalvelussa esiintyviltä sivustoilta löytyvän materiaalin käyttämisestä.
        </p>
        <h3 id="tekijänoikeudet">Tekijänoikeudet</h3>
        <p>
          FVH:lla on pääsääntöisesti tekijänoikeus kaikkeen palvelun sisältöön. UGE:tä
          ja kaikkea sen sisältämää sisältöä ei saa kopioida, toisintaa, julkaista
          uudelleen, viedä, lähettää, jaella eikä käyttää johdannaisteosten laatimiseen
          ilman FVH:n etukäteen saatua kirjallista lupaa.
        </p>
        <h3 id="lomakkeet-asiointi-ja-suojaus">Lomakkeet, asiointi ja suojaus</h3>
        <p>
          Sovelluksen info-sivulla on vapaaehtoinen palautelomake, jolla kerätään
          palautetta sovelluksen käytöstä, virheilmoituksia ja ideoita käyttökokemuksen
          parantamiseksi. Yhteys sivustoon on aina SSL-suojattu. Suojauksen
          tarkoituksena on estää muita näkemästä sivulla käsiteltyjä tietoja.
        </p>
        <h3 id="luottamukselliset-tiedot">Luottamukselliset tiedot</h3>
        <h4 id="palautelomake">Palautelomake</h4>
        <p>
          NTC kerää vapaaehtoista palautetta info-sivulta. Se voi sisältää nimesi ja
          sähköpostiosoitteesi. Voit päättää luovutatko nämä tiedot, koska nämä
          lomakkeen kentät ovat valinnaisia. Huomaathan, että NTC:lle sovelluksen kautta
          lähetettyä tietoa tai materiaalia ei pidetä luottamuksellisina ja ne voidaan
          välittää FVH:lle, ellei palauteviestissä toisin mainita.
        </p>
        <p>
          Lähettämällä mitä tahansa tietoa tai materiaalia sovelluksen palautelomakkeen
          kautta annat FVH:lle ja NTC:lle rajoittamattoman, peruuttamattoman luvan
          kopioida, toisintaa, julkaista uudelleen, viedä, lähettää, jaella, näyttää
          julkisesti, esittää, muokata, luoda johdannaisteoksia ja muutoin vapaasti
          näitä materiaaleja tai tietoja. Hyväksyt myös, että FVH ja NTC voivat vapaasti
          käyttää mihin tahansa tarkoitukseen ideoita, käsitteitä, tietotaitoa tai
          tekniikoita, jotka lähetät palautelomakkeella. Palautelomakkeella lähettämiäsi
          henkilökohtaisia ​​tunnistetietoja käsitellään tietosuojakäytäntömme
          mukaisesti. Noudatamme EU:n yleisiä tietojenkäsittelyasetuksia, jotka koskevat
          yksityishenkilöiden tietosuojaa ja yksityisyyttä Euroopan unionissa.
          Noudatamme myös kaikkia sovellettavia EU- ja paikallismääräyksiä.
        </p>
        <h4 id="kohdetiedot">Kohdetiedot</h4>
        <p>
          UGE:n yksittäisten kohdesivujen tehtävänä on määrittää nykyinen sijaintisi ja
          mitata etäisyys sinusta kohteen sijaintiin. Ollessasi tarpeeksi lähellä voit
          painaa kirjautumis-painiketta avataksesi lisätietoja kohdesijainnista.
        </p>
        <p>
          Käyttäjänä voit kieltäytyä antamasta sovellukselle sijaintiasi ja ottaa
          kirjautumis-painikkeen käyttöön oletusarvoisesti. Valinta säilyy koko istunnon
          ajan, mutta voit myöhemmin ottaa sijainnin uudelleen käyttöön selaimesi
          asetuksista niin halutessasi. Kussakin erillisessä kohteessa vastaanotettuja
          sijaintitietoja ei jaeta tai tallenneta muualle kuin sovelluksen muistiin
          etäisyyden mittausprosessin ajaksi.
        </p>
        <p>
          Karttanäkymä sisältää myös paikannuskuvakkeen, joka kysyy nykyistä sijaintiasi
          voidakseen paikantaa sinut kartalla. Tämän ominaisuuden käyttö on valinnaista,
          ja käyttäjä voi estää sen, kun käyttäjää kehoitetaan paikantamaan laite
          kartalta. Kartan keräämiä sijaintitietoja ei jaeta tai tallenneta minnekään
          sovelluksen ulkopuolelle muutoin kuin laitteen sijainnin näyttämiseksi
          kartalla reaaliajassa.
        </p>
        <h4 id="netlify-analytics">Netlify Analytics</h4>
        <p>
          Sovellus mittaa Netlify Analyticsin avulla kuinka moni käyttää palvelua.
          Netlify antaa FVH:lle ja NTC:lle pääsyn seuraaviin tietoihin: kuinka monta
          yksittäistä kävijää on käynyt palvelussa, suosituimmat sijainnit maittain,
          suosituimmat sivut ja käytetyt tiedonsiirtomäärät. Netlify Analytics noudattaa
          yleistä tietosuoja-asetusta GDPR.
        </p>
        <h3 id="liikesuhteet">Liikesuhteet</h3>
        <p>
          Tämä verkkopalvelu voi tarjota linkkejä tai viittauksia muille kuin FVH:n tai
          NTC:n verkkosivustoille ja -palveluille. FVH ja NTC eivät anna minkäänlaisia
          lausuntoa, takuita tai muita sitoumuksia mistään ulkoisista verkkosivustoista
          tai kolmannen osapuolen resursseista, joihin saatetaan viitata, joihin
          sivustollamme on pääsy tai joihin on linkkejä. Linkki muulle kuin FVH:lle tai
          NTC:n ulkopuoliselle verkkopalvelulle ei tarkoita, että FVH tai NTC tukee
          tällaisen verkkopalvelun sisältöä tai käyttöä tai sen omistajaa. Lisäksi FVH
          ja NTC eivät ole osapuolena tai vastuussa tapahtumista, joita saatat tehdä
          kolmansien osapuolten tarjoamissa palveluissa, vaikka saisit tietää
          tällaisista osapuolista (tai käytät linkkiä tällaisiin osapuoliin)
          UGE-palvelusta. Vastaavasti ymmärrät ja hyväksyt, että FVH ja NTC eivät vastaa
          tällaisten ulkoisten sivustojen tai resurssien käytettävyydestä eikä
          kyseisillä sivustoissa tai resursseissa olevista tai niiden välityksellä
          saatavista sisällöistä, palveluista, tuotteista tai muusta aineistoista.
        </p>
        <p>
          Kun käytät muuta kuin FVH:n tai NTC:n verkkopalvelua, huomioi, että se on
          riippumaton molemmista yrityksistä ja että FVH tai NTC eivät hallitse kyseisen
          verkkopalvelun sisältöä.
        </p>
        <h3 id="linkin-muodostaminen-tähän-palveluun">
          Linkin muodostaminen tähän palveluun
        </h3>
        <p>
          Kaikkiin tähän verkkopalveluun johtaviin linkkeihin on saatava kirjallinen
          hyväksyntä FVH:ltä. Hyväksyntää ei kuitenkaan tarvitse hankkia, jos linkki ja
          sen aktivoimat sivut eivät (a) luo kehystä minkään tämän sivuston sivun
          ympärille tai käytä muita tekniikoita, jotka jollakin tavalla muuttavat tämän
          sivuston sisällön ulkoasua tai esitystapaa; (b) esitä käyttäjän ja FVH:n
          välistä suhdetta virheellisesti; (c) ole tulkittavissa siten, että käyttäjällä
          tai tämän sivustolla, palvelulla tai tuotteilla on FVH:n hyväksyntä tai tuki.
          Tähän sivustoon johtavan linkin muodostusoikeuden ehtona on lisäksi se, että
          käyttäjä hyväksyy FVH:n oikeuden lopettaa käyttäjän oikeus muodostaa linkki
          tähän sivustoon milloin tahansa oman harkintansa mukaan. Käyttäjä sitoutuu
          poistamaan kaikki tähän sivustoon johtavat linkit ja lopettamaan FVH:n
          tavaramerkkien käytön heti, kun linkin muodostusoikeus on menetetty.
        </p>
        <h3 id="palvelumme-turvallisuus-ja-yksityisyyden-suoja">
          Palvelumme turvallisuus ja yksityisyyden suoja
        </h3>
        <p>
          Jotkin alla kuvatut tiedot kerätään automaattisesti verkkopalvelussamme.
          Tietoja ei kerätä kaupallisiin tarkoituksiin. Niitä ei myydä tai muuten
          luovuteta kolmansille osapuolille palvelun tarjoajan toimesta.
        </p>
        <h3 id="selainistunnon-tiedot">Selainistunnon tiedot</h3>
        <p>
          Selaimen paikallista tallennustilaa (local storage) käytetään paikkojen
          tallennukseen, joissa olet käynyt, jotta sovelluksessa voidaan näyttää
          lisäsisältöä kun kohde on avattu. Käyttäjä voi poistaa tämän ominaisuuden
          käytöstä estämällä palvelun pääsyn selaimen paikalliseen tallennustilaan.
        </p>
        <h3 id="palvelun-saatavuus">Palvelun saatavuus</h3>
        <p>
          FVH tai NTC eivät erikseen takaa UGE palvelun saatavuutta tai toimivuutta.
        </p>
        <h3 id="palvelimen-tilastot">Palvelimen tilastot</h3>
        <p>
          UGE:n nykyinen palvelutaso verkkokehitysalusta Netlify:lta ei sisällä Log
          Drain -palvelua, joka antaisi pääsyn palvelimen lokitietoihin ja
          yksityiskohtaisiin tilastoihin, joita Netlifyn Analytics-palvelu ei sisällä.
          FVH:lla tai NTC:llä ei ole pääsyä muihin kuin palvelimen sovelluksen
          käyttöönottolokeihin uuden version julkaisun yhteydessä. Julkaisuprosessin
          lokeihin ei kirjata tietoa palvelun käyttäjistä.
        </p>
        `;
      }
    });
    return { currentTerms };
  },
  render(): VNode {
    return (
      <>
        <AppHeader />
        <AppMain class="main-terms main-wrapper">
          <BackLink />
          <div v-html={this.currentTerms} />
        </AppMain>
        <AppFooter />
      </>
    );
  },
});
