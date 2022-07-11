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
          <blockquote>
          <p>Please note: the English translation is provided as an aid only. In case of discrepancies, the Finnish version is legally binding.</p>
          </blockquote>
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
          <h2 id="terms-of-use-of-the-urban-green-explorer-web-application">Terms of Use of the Urban Green Explorer web application</h2>
          <p>These are the terms of use of the Urban Green Explorer online service (hereinafter “UGE”, “online service” or “service”), which apply between you and Forum Virium Helsingin (hereinafter: “FVH”) and New Things Co (hereinafter: “NTC”) occasionally while using this online service.</p>
          <p>FVH or NTC may, without any notice to you at any time revise these Terms and Conditions and any other information contained in this Service. Information in this Service is not promised or guaranteed to be correct, current, or complete, and this Service may contain inaccuracies or errors. FVH and NTC assume no responsibility (and expressly disclaims any liability) for updating this Service to keep information current or to ensure the accuracy or completeness of any provided information.</p>
          <p>The authenticity, invariability and updatedness cannot be guaranteed in all situations. FVH and NTC assume no responsibility or liability for any harm that may have been caused by visiting the various locations listed in the UGE Service or using any material found on the physical sites featured in the Service.</p>
          <h2 id="intellectual-property-rights">Intellectual property rights</h2>
          <p>All intellectual property rights related to the service (for example copyrights, trademarks and domain names) belong to FVH, the creator of the work, or its collaborators. No information on the website may be presented, duplicated, copied, transferred, forwarded, stored, changed, distributed, published, reused, licensed, sold or otherwise used for commercial purposes without the prior written consent of copyright FVH or its collaborators. The application contains open source software, which is subject to the related license terms.</p>
          <h2 id="confidential-information">Confidential information</h2>
          <h3 id="feedback-form">Feedback form</h3>
          <p>The Service offers a voluntary feedback form on the Info page for gathering information of the usage of the Service, bug reports and ideas for improving the user experience. You may include your name and email to the feedback, should you choose to disclose this information as the information is optional. In addition to the fields in the feedback form, Netlify stores the feedback provider's IP address and browser version. The feedback is processed by NTC. Please note that information sent to NTC via the Service may be forwarded to FVH, unless otherwise stated in the feedback message.</p>
          <p>By sending any information or material through the Service, you grant FVH and NTC an unrestricted, irrevocable license to copy, reproduce, publish, upload, post, transmit, distribute, publicly display, perform, modify, create derivative works from, and otherwise freely use, those materials or information. You also agree that FVH and NTC are free to use any ideas, concepts, know-how, or techniques that you send them for any purpose. Personal data that you submit through the feedback form will be handled in accordance with the Privacy Policy. We comply with EU General Data Processing Regulations for data protection and privacy for individuals within the European Union. We also comply with all applicable EU and local regulations.</p>
          <h3 id="location-data">Location data</h3>
          <p>Individual location pages in UGE are tasked to determine your current location and measure the distance from you to the target location. When close enough, the check-in button becomes enabled and you can press it to unlock more information about the target location.</p>
          <p>As a user, you can opt out of giving the Service your location and enable the check-in button by default. This decision will persist throughout your session, but you can always enable the location again from your browser’s settings should you choose to do so at a later date. The location data received at each separate location is not shared or stored anywhere other than in the Service’s memory for the duration of the distance measurement process.</p>
          <p>The map view also contains a locator icon, which will ask for your current location to be able to pinpoint you on the map. The use of this feature is optional and you can deny access when prompted to locate the device on the map. The location information gathered by the map is not shared or stored anywhere outside the Service other than for the purposes of showing the device’s location on the map in real-time.</p>
          <h3 id="netlify-analytics">Netlify Analytics</h3>
          <p>The Service uses Netlify Analytics to measure how many visitors use the service. Netlify gives FVH and NTC access to:</p>
          <ul>
          <li>pageviews;</li>
          <li>how many unique visitors have visited the service;</li>
          <li>top locations by country; and</li>
          <li>top pages visited and bandwidth used.</li>
          </ul>
          <p>Netlify Analytics is GDPR compliant.</p>
          <h2 id="business-relationships">Business relationships</h2>
          <p>This Service may provide links or references to non-FVH and non-NTC websites and resources. FVH and NTC make no representations, warranties, or other commitments whatsoever about any external websites or third-party resources that may be referenced, accessible from, or linked to the Service. A link to a non-FVH or a non-NTC website does not mean that FVH or NTC endorse the content or use of such a website or its owner. In addition, FVH and NTC are not party to or responsible for any transactions you may enter into with third parties, even if you learn of such parties (or use a link to such parties) from the UGE Service. Accordingly, you acknowledge and agree that FVH and NTC are not responsible for the availability of such external sites or resources, and is not responsible or liable for any content, services, products, or other materials on or available from those sites or resources.</p>
          <p>When you access a non-FVH or non-NTC website, please understand that it is independent from both companies, and that FVH or NTC do not control the content on that website.</p>
          <h2 id="linking-to-this-site">Linking to this site</h2>
          <p>All links to this Service must be approved in writing by FVH, except that FVH consents to links in which the link and the pages that are activated by the link do not: (a) create frames around any page on this service or use other techniques that alter in any way the visual presentation or appearance of any content within this Service; (b) misrepresent your relationship with FVH; or (c) imply that FVH approves or endorses you, your website, or your service or product offerings. As a further condition to being permitted to link to this site, you agree that FVH may at any time, in its sole discretion, terminate permission to link to this website. In such event, you agree to immediately remove all links to this Service and to cease using any FVH trademark.</p>
          <h2 id="safety-of-our-service-privacy-protection">Safety of our service, Privacy Protection</h2>
          <p>The connection to the Service is always SSL protected. The purpose of protection is to prevent others from seeing the data processed on the Service.</p>
          <p>Some information described below is automatically gathered in the Service. Data is not processed or collected for commercial purposes, but only for purposes of developing the Service and analyzing its functioning. They are not sold or otherwise transferred to third parties by the service provider. The data processed in the Service includes:</p>
          <ul>
          <li>Your name and email address (should you choose to give this information while submitting your feedback)</li>
          <li>Your location data (should you choose the Service to process your location data)</li>
          </ul>
          <h2 id="browser-session-data">Browser session data</h2>
          <p>The browser's local storage is used for saving the places you have visited, so that the service can display additional content when the destination is opened and remember where you have been the next time the application will be opened in the same browser. You can disable this feature by blocking access to the browser's local storage space, in which case the locations will only be remembered for the duration of the browser session.</p>
          <h2 id="server-statistics">Server statistics</h2>
          <p>FVH or NTC do not have access to additional server logs apart from deployment logs when releasing a new version of the Service. Information about users of the service is not recorded in the logs of the publication process.</p>
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
          Nämä ovat Urban Green Explorer -verkkopalvelun (myöhemmin “UGE”,
          “verkkopalvelu” tai “palvelu”) käyttöehdot, joita sovelletaan sinun ja Forum
          Virium Helsingin (myöhemmin: “FVH”) ja New Things Co:n (myöhemmin: “NTC”)
          välillä käyttäessäsi tätä verkkopalvelua.
        </p>
        <p>
          FVH tai NTC voivat milloin tahansa ilman erillistä ilmoitusta muuttaa näitä
          käyttöehtoja ja muita tähän palveluun sisältyviä tietoja. Tätä palvelua
          koskevien tietojen ei luvata tai taata olevan oikeita, ajantasaisia tai
          täydellisiä, ja tämä sivusto saattaa sisältää virheitä. FVH ja NTC eivät ota
          vastuuta (ja nimenomaisesti kiistävät vastuun) tämän palvelun päivittämisestä
          tietojen pitämiseksi ajan tasalla, julkaistujen tietojen oikeellisuuden tai
          täydellisyyden varmistamiseksi.
        </p>
        <p>
          Aitoutta, muuttumattomuutta ja ajantasaisuutta ei voida taata kaikissa
          tilanteissa. FVH ja NTC eivät ota vastuuta mistään haitoista, jotka ovat
          saattaneet aiheutua vierailusta UGE-palvelussa mainituissa kohteissa, tai
          verkkopalvelussa esiintyviltä lokaatioilta löytyvän materiaalin käyttämisestä.
        </p>
        <h3 id="tekijänoikeudet">Tekijänoikeudet</h3>
        <p>
          Kaikki palveluun liittyvät immateriaalioikeudet (esimerkiksi tekijänoikeudet,
          tavaramerkit ja domain-nimet) kuuluvat FVH:lle, teoksen laatijalle, tai sen
          yhteistyötahoille. Mitään verkkosivujen tietoa ei saa esittää, monistaa,
          kopioida, siirtää, toimittaa edelleen, tallentaa, muuttaa, levittää,
          julkaista, käyttää uudelleen, lisensoida, myydä tai käyttää muulla tavalla
          kaupallisiin tarkoituksiin ilman tekijänoikeuden FVH:n tai sen yhteistyötahon
          ennalta antamaa kirjallista suostumusta. Sovellus sisältää avoimen lähdekoodin
          ohjelmistoja, joihin liittyviä lisenssiehtoja noudatetaan.
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
          Palvelun Info-sivulla on vapaaehtoinen palautelomake, jolla kerätään
          palautetta verkkopalvelun käytöstä, virheilmoituksia sekä ideoita
          käyttökokemuksen parantamiseksi. Voit sisällyttää palautteeseen halutessasi
          nimesi ja sähköpostiosoitteesi. Tietojen luovuttaminen on vapaaehtoista, ja
          nämä lomakkeen kentät ovat valinnaisia. Netlify tallentaa palautelomakkeessa
          olevien täytettyjen kenttien sisällön lisäksi palautteen antajan IP-osoitteen
          sekä selainversion. Palautteet käsittelee ensisijaisesti NTC. Huomaathan, että
          NTC:lle sovelluksen kautta lähetettyä tietoa voidaan välittää FVH:lle, ellei
          palauteviestissä toisin mainita.
        </p>
        <p>
          Lähettämällä mitä tahansa tietoa tai materiaalia sovelluksen palautelomakkeen
          kautta annat FVH:lle ja NTC:lle rajoittamattoman, peruuttamattoman luvan
          kopioida, toisintaa, julkaista uudelleen, viedä, lähettää, jaella, näyttää
          julkisesti, esittää, muokata, luoda johdannaisteoksia ja muutoin vapaasti
          näitä materiaaleja tai tietoja. Hyväksyt myös, että FVH ja NTC voivat vapaasti
          käyttää mihin tahansa tarkoitukseen ideoita, käsitteitä, tietotaitoa tai
          tekniikoita, jotka lähetät palautelomakkeella. Palautelomakkeella lähettämiäsi
          henkilökohtaisia tunnistetietoja käsitellään tietosuojakäytäntömme mukaisesti.
          Noudatamme EU:n yleistä tietosuoja-asetusta, joka koskee yksityishenkilöiden
          tietosuojaa ja yksityisyyttä Euroopan unionissa. Noudatamme myös kaikkea
          sovellettavaksi tulevaa EU- ja paikallislainsäädäntöä.
        </p>
        <h4 id="kohdetiedot">Kohdetiedot</h4>
        <p>
          UGE:n yksittäisten kohdesivujen tehtävänä on määrittää nykyinen sijaintisi ja
          mitata etäisyytesi kohteen sijaintiin. Ollessasi tarpeeksi lähellä voit painaa
          kirjautumispainiketta avataksesi lisätietoja kohdesijainnista.
        </p>
        <p>
          Käyttäjänä voit kieltäytyä antamasta verkkopalvelulle sijaintiasi ja ottaa
          kirjautumispainikkeen käyttöön oletusarvoisesti. Valinta säilyy koko istunnon
          ajan, mutta voit myöhemmin ottaa sijainnin uudelleen käyttöön selaimesi
          asetuksista niin halutessasi. Kussakin erillisessä kohteessa vastaanotettuja
          sijaintitietoja ei jaeta tai tallenneta muualle kuin palvelun muistiin
          etäisyyden mittausprosessin ajaksi.
        </p>
        <p>
          Karttanäkymä sisältää myös paikannuskuvakkeen, joka kysyy nykyistä sijaintiasi
          voidakseen paikantaa sinut kartalla. Tämän ominaisuuden käyttö on valinnaista,
          ja käyttäjä voi estää sen, kun käyttäjää kehotetaan paikantamaan laite
          kartalla. Kartan keräämiä sijaintitietoja ei jaeta tai tallenneta minnekään
          palvelun ulkopuolelle muutoin kuin laitteen sijainnin näyttämiseksi kartalla
          reaaliajassa.
        </p>
        <h4 id="netlify-analytics">Netlify Analytics</h4>
        <p>
          Sovellus mittaa Netlify Analyticsin avulla kuinka monta käyttäjää palvelulla
          on. Netlify antaa FVH:lle ja NTC:lle pääsyn seuraaviin tietoihin:
        </p>
        <ul>
          <li>Kuinka monta yksittäistä kävijää on käynyt palvelussa;</li>
          <li>suosituimmat sijainnit maakohtaisesti; sekä</li>
          <li>suosituimmat sivut ja käytetyt tiedonsiirtomäärät.</li>
        </ul>
        <p>
          Netlify Analytics noudattaa toiminnassaan Euroopan unionin yleistä
          tietosuoja-asetusta (GDPR).
        </p>
        <h3 id="liikesuhteet">Liikesuhteet</h3>
        <p>
          Verkkopalvelu voi tarjota linkkejä tai viittauksia muille kuin FVH:n tai NTC:n
          hallinnoimille verkkosivustoille ja -palveluille. Mitkään ulkoisista
          verkkosivustoista tai kolmannen osapuolen resursseista, joihin saatetaan
          viitata, joihin sivustolta on pääsy, tai joihin on verkkopalvelussa on
          linkkejä eivät edusta FVH:ta tai NTC:tä, eivätkä FVH tai NTC anna
          minkäänlaisia takuita tai muita sitoumuksia edellä mainittuihin liittyen.
          Linkki muun kuin FVH:n tai NTC:n hallinnoimaan ulkopuoliseen verkkopalveluun
          ei tarkoita, että FVH tai NTC tukee tällaisen verkkopalvelun sisältöä tai
          käyttöä, tai sen omistajaa. FVH ja NTC eivät ole osapuolena tai vastuussa
          tapahtumista, joita saatat tehdä kolmansien osapuolten tarjoamissa
          palveluissa, vaikka saisit tietää tällaisista osapuolista (tai päätyisit
          tällaisiin palveluihin UGE-palvelusta löytämääsi linkkiä hyödyntäen)
          UGE-palvelusta. Vastaavasti ymmärrät ja hyväksyt, että FVH ja NTC eivät vastaa
          tällaisten ulkoisten sivustojen tai resurssien käytettävyydestä eivätkä
          kyseisillä sivustoilla tai resursseissa olevista, tai niiden välityksellä
          saatavista sisällöistä, palveluista, tuotteista tai muusta aineistoista.
        </p>
        <p>
          Kun käytät muuta kuin FVH:n tai NTC:n verkkopalvelua, huomioi, että se on
          riippumaton molemmista yrityksistä, ja että FVH tai NTC eivät hallitse
          kyseisen verkkopalvelun sisältöä.
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
          välistä suhdetta virheellisesti; tai (c) ole tulkittavissa siten, että
          käyttäjällä tai tämän sivustolla, palvelulla tai tuotteilla on FVH:n
          hyväksyntä tai tuki. Tähän sivustoon johtavan linkin muodostusoikeuden ehtona
          on lisäksi se, että käyttäjä hyväksyy FVH:n oikeuden lopettaa käyttäjän oikeus
          muodostaa linkki tähän sivustoon milloin tahansa oman harkintansa mukaan.
          Käyttäjä sitoutuu poistamaan kaikki tähän sivustoon johtavat linkit ja
          lopettamaan FVH:n tavaramerkkien käytön heti, kun linkin muodostusoikeus on
          menetetty.
        </p>
        <h3 id="palvelumme-turvallisuus-ja-yksityisyyden-suoja">
          Palvelumme turvallisuus ja yksityisyyden suoja
        </h3>
        <p>
          Yhteys verkkopalveluun on aina SSL-suojattu. Suojauksen tarkoituksena on estää
          muita näkemästä palvelussa käsiteltyjä tietoja.
        </p>
        <p>
          Verkkopalvelu kerää automaattisesti tiettyjä tietoja koskien vierailuasi
          palvelussa. Tietoja ei käsitellä tai kerätä kaupallisiin tarkoituksiin, vaan
          ainoastaan palvelun kehittämiseen ja sen toiminnan analysoimiseen. Niitä ei
          myydä tai muuten luovuteta kolmansille osapuolille palveluntarjoajan toimesta.
          Palvelu käsittelee seuraavia tietoja:
        </p>
        <ul>
          <li>
            Nimesi ja sähköpostiosoitteesi (mikäli palautetta antaessasi haluat
            luovuttaa ne)
          </li>
          <li>
            Sijaintitietosi (mikäli annat palvelulle luvan käsitellä sijaintitietojasi)
          </li>
        </ul>
        <h3 id="selainistunnon-tiedot">Selainistunnon tiedot</h3>
        <p>
          Selaimen paikallista tallennustilaa (local storage) käytetään tallentamaan
          paikkoja, joissa olet käynyt, jotta verkkopalvelu voi näyttää lisäsisältöä kun
          kohde on avattu ja muistaa missä olet käynyt seuraavan kerran kun avaat
          sovelluksen samassa selaimessa. Käyttäjä voi poistaa tämän ominaisuuden
          käytöstä estämällä palvelun pääsyn selaimen paikalliseen tallennustilaan,
          jolloin tieto käydyistä kohteista pysyy muistissa ainoastaan selainistunnon
          ajan.
        </p>
        <h3 id="palvelimen-tilastot">Palvelimen tilastot</h3>
        <p>
          FVH:lla tai NTC:llä ei ole pääsyä muihin kuin palvelimen sovelluksen
          käyttöönottolokeihin uuden version julkaisun yhteydessä. Julkaisuprosessin
          lokeihin ei kirjata tietoa palvelun käyttäjistä.
        </p>
        <h3 id="palvelun-saatavuus">Palvelun saatavuus</h3>
        <p>
          FVH tai NTC eivät erikseen takaa UGE palvelun saatavuutta tai toimivuutta.
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
