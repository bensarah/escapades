import {Component} from 'react'
import extent from 'geojson-extent'
import Post from '../../layouts/post'
import P from '../../components/post/paragraph'
import Map from '../../components/post/map'
import Section from '../../components/post/section'
import Img from '../../components/post/img'
import Emoji from '../../components/emoji'
import Footnote from '../../components/post/footnote'
import {highlightFromTo} from '../../helpers/map-utils'
import trail from '../../static/2015/trois-seigneurs/trail'

class TroisSeigneurs extends Component {
  render () {
    return (
      <Post
        title='Pic des Trois Seigneurs'
        subtitle='Parc naturel régional des Pyrénées Ariégeoises'
        header='/static/2015/trois-seigneurs/sommet.jpg'
        trail={trail}
        id='trois-seigneurs'
        jours={'1/2 journée · 0 nuit'}
        tags={['Facile', 'Points de vue']}
        photos={[
          {
            src: '/static/2017/kings-canyon/kings-canyon.jpg',
            width: 2000,
            height: 1333,
            caption: 'Avant la rando, balade sur la route scénique de Kings Canyon'
          },
          {
            src: '/static/2017/kings-canyon/fleurs.jpg',
            width: 2000,
            height: 1333,
            caption: 'Quelques fleurs sur le chemin'
          },
          {
            src: '/static/2017/kings-canyon/moro-rock.jpg',
            width: 2000,
            height: 1333,
            caption: 'Avant de repartir, un petit tour sur le rocher de Moro Rock'
          },
          {
            src: '/static/2017/kings-canyon/selfie-sommet.jpg',
            width: 2000,
            height: 1333,
            caption: 'L’incontournable Selfie Sommet'
          },
          {
            src: '/static/2017/kings-canyon/sequoias.jpg',
            width: 2000,
            height: 1333,
            caption: 'Le parc contient certains des plus vieux arbres du monde'
          },
          {
            src: '/static/2017/kings-canyon/anti-moustique.jpg',
            width: 2000,
            height: 3000,
            caption: 'Les manches longues et la tête protégée contre les moustiques'
          },
          {
            src: '/static/2017/kings-canyon/fleur-rouge.jpg',
            width: 2000,
            height: 3000,
            caption: 'Une fleur chelou sous les souches'
          },
          {
            src: '/static/2017/kings-canyon/sommet.jpg',
            width: 3000,
            height: 2000,
            caption: 'Le sommet du Mt Mitchell'
          },
          {
            src: '/static/2017/kings-canyon/malle.jpg',
            width: 3000,
            height: 2000,
            caption: 'En vrac dans la malle'
          }
        ]}
      >
        <Map
          center={[1.439942, 42.830609]}
          zoom={4}
          trail={trail}
          container='sidebar'
          onMap={(map) => this.setState({map})}
        />
        <Section
          action={() => {
            var bbox = extent(trail)
            this.state.map.fitBounds([bbox.slice(0, 2), bbox.slice(2, 4)], {duration: 3000, padding: {top: 50, bottom: 50, left: 25, right: 25}})
            highlightFromTo(this.state.map, trail, 0, 0)
          }}
        >
          <P>
            Facile d’accès depuis Montaut (en Haute-Garonne), sous les conseils de mon Papa, nous avions décidé avec Benjamin de faire ce pic, en amont de la chaîne des Pyrénées, qui offre par conséquent une vue splendide sur les monts ariégeois.
            Une balade douce et belle en Ariège, faisable sur la demi-journée : parfait pour notre mise en jambe dans les Pyrénées.
          </P>
          <P><Emoji name='smile' size='2x'/></P>
        </Section>

        <Section
          action={() => highlightFromTo(this.state.map, trail, 0, 0.4, {pointHighlight: false})}
        >
          <P>
            Après un réveil matinal pour faire la route depuis Montaut, en passant par le Port de Lers, nous débutons donc l’ascension vers 9h30 par l&#39;arête ouest.
          </P>
        </Section>

        <Section
          sidebarContent={<Img src='/static/2015/trois-seigneurs/val.jpg'/>}
        >
          <P>
            Le val est verdoyant, c’est magnifique. Nous commençons sur une montagne avec beaucoup d’herbes et de végétation.
          </P>
        </Section>

        <Section
          sidebarContent={<Img src='/static/2015/trois-seigneurs/val2.jpg'/>}
        >
          <P>
            Dans la montée, on voit la vallée s’éloigner au fur et à mesure de notre ascension.
          </P>
        </Section>

        <Section
          action={() => {
            setTimeout(() => {
              this.state.map.flyTo({center: [1.418233, 42.821434], zoom: 13, duration: 1500})
              highlightFromTo(this.state.map, trail, 0.15, 0.28)
            }, 1000)
          }}
        >
          <P>
            Nous longeons les crêtes qui nous mènent au sommet qu’on aperçoit au loin. Les pics partiels s’enchaînent : Pic de Fontanette puis Pic de Barrès.
          </P>
        </Section>

        <Section
          sidebarContent={<Img src='/static/2015/trois-seigneurs/crete.jpg'/>}
        >
          <P>
            Une épaisse brume vient peu à peu recouvrir le flanc nord-ouest de la crête, on espère ne pas se retrouver dans le brouillard.
          </P>
          <P>
            La montée continue progressivement. L’avantage de faire des randonnées courtes c’est que les sacs sont peu chargés. On discute sur le chemin en imaginant nos prochaines aventures aux Etats-Unis ; on est en 2015 et nous allons bientôt y décoller tous deux pour plus d’un an.
          </P>
        </Section>

        <Section
          sidebarContent={<Img src='/static/2015/trois-seigneurs/neve.jpg'/>}
        >
          <P>
            On aperçoit un petit névé sans danger sur lequel nous croyons discerner une marmotte. Nous sommes presque au bout.
          </P>
        </Section>

        <Section
          action={() => setTimeout(() => {
            this.state.map.flyTo({center: [1.440094, 42.830493], zoom: 13.5, duration: 4000})
          }, 1000)}
        >
          <P>
            Un peu avant midi, nous arrivons au sommet, à l’heure pour dévorer nos sandwichs préparés à l’aube du jour.
          </P>
          <Emoji name='fork-and-knife' size='2x'/>
        </Section>

        <Section
          sidebarContent={<Img src='/static/2015/trois-seigneurs/croix.jpg'/>}
        >
          <P>
            La vue aura malheureusement était bouchée ce jour là par les épais nuages qui nous taquinaient pendant la montée. Le spectacle est néanmoins magnifique et fait ressortir la croix qui domine le pic.
          </P>
        </Section>

        <Section
          action={() => setTimeout(() => {
            this.state.map.flyTo({center: [1.418233, 42.821434], zoom: 13, duration: 1500})
            highlightFromTo(this.state.map, trail, 0.4, 0.84)
          }, 1000)}
        >
          <P>
            Après la pause, nous redescendons plein sud par un autre chemin qui longe des lacs épars formés par la fonte des neiges.
          </P>
        </Section>

        <Section
        sidebarContent={<Img src='/static/2015/trois-seigneurs/arbu.jpg'/>}
        >
          <P>
            Nous naviguons à la vue des cairns et passons à côté de l’étang d’Arbu. Les paysages sont rocailleux et le soleil se cachera définitivement sous un épais matelas de nages.
          </P>
        </Section>

        <Section
          action={() => {
            this.state.map.flyTo({center: [1.41703, 42.806936], zoom: 13.5, duration: 1500})
            highlightFromTo(this.state.map, trail, 0.84, 1)
          }}
          >
          <P>
            Après quelques lacets, nous arrivons de nouveau à la route, plus que deux virages à monter pour retrouver la voiture et mon Papa qui nous y aura retrouvés.
          </P>
        </Section>

        <Section
          action={() => {
            this.state.map.flyTo({center: [1.440094, 42.830493], zoom: 13.5, duration: 4000})
          }}
        >
          <P>
            PS : D’où vient le nom <em>Pic des Trois Seigneurs</em> ?
          </P>
          <P>
            La légende raconte que les trois seigneurs des vallées de Massat, Vicdessos* et Rabat-les-Trois-Seigneurs s’y rencontraient pour discuter des affaires des vallées qu’ils administraient respectivement. Le pic est en effet situé au point de rencontre de ces trois vallées.
          </P>
          <Footnote>Prononcez Massatttt et Vicdessossss, à la manière occitane :)</Footnote>
          <P><Emoji name='evergreen-tree' size='2x'/></P>
        </Section>

      </Post>
    )
  }
}

export default TroisSeigneurs