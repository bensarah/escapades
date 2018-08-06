import React, {Component} from 'react'
import extent from '@mapbox/geojson-extent'
import Post from '../../layouts/post'
import P from '../../components/post/paragraph'
import Map from '../../components/post/map'
import Section from '../../components/post/section'
import Quote from '../../components/post/quote'
import Img from '../../components/post/img'
import Emoji from '../../components/emoji'
import Footnote from '../../components/post/footnote'
import {highlightFromTo} from '../../helpers/map-utils'
import trail from '../../static/2017/kings-canyon/trail'

class KingsCanyon extends Component {
  render () {
    return (
      <Post
        title='Seville Lake & Mitchell Peak'
        subtitle='Kings Canyon & Sequoia Park, California'
        header='/static/2017/kings-canyon/1.jpg'
        trail={trail}
        id='kings-canyon'
        jours={'1 jour · 1 nuit'}
        tags={['Attention aux ours', 'Peu fréquenté', 'Bivouac', 'Eau sur le chemin']}
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
          center={[-120.56396484375, 38.47939467327645]}
          zoom={4}
          trail={trail}
          container='sidebar'
          onMap={(map) => this.setState({map})}
        />
        <Section
          action={() => {
            var bbox = extent(trail)
            this.state.map.fitBounds([bbox.slice(0, 2), bbox.slice(2, 4)], {duration: 3000, padding: {top: 20, bottom: 65, left: 15, right: 5}})
            highlightFromTo(this.state.map, trail, 0, 0)
          }}
        >
          <P>
            Toutes les randonnées apportent leur lot de surprises et celle-ci n’en fut pas exclue.
          </P>
          <P><Emoji name='tent' size='2x'/></P>
        </Section>

        <Section
          action={() => highlightFromTo(this.state.map, trail, 0, 0.4, {pointHighlight: false})}
        >
          <P>
            Nous sommes partis vers 16h l’après-midi du samedi.
            Les précieux <em>wilderness permits</em><sup>*</sup> en poche, le <em>bear canister</em><sup>*</sup> rempli de nourriture et la tente sur le dos.
            Sur les conseils du ranger, direction Seville Lake qui offre apparemment un très bon spot pour passer la nuit.
          </P>
          <Footnote>
            Les wilderness permits sont des permis pour bivouaquer dans les parcs nationaux. Ils s’obtiennent auprès des rangers.
          </Footnote>
          <Footnote>
            <em>‘Be bear aware’</em> : la Californie est un territoire rempli d’ours - animal aussi majestueux que dangereux.
            Il faut donc être quelque peu préparé et emporter un bear canister pour chaque bivouac.
            C’est un cylindre rigide qu’on ne peut ouvrir qu’avec un cerveau et des doigts d’humain et dans lequel on place sa nourriture.
            Accessoirement, ces contenants sont aussi très utiles pour isoler la nourriture des marmottes ou des chipmunks.
          </Footnote>
        </Section>

        <Section
          sidebarContent={<Img src='/static/2017/kings-canyon/story1.jpg'/>}
        >
          <P>
            Les jambes sont galvanisées et nous commençons l’ascension vers la première étape : Rowell Meadows. Le sentier est agréable et ensoleillé, on longe un flanc de montagne parsemé de sequoias.
          </P>
        </Section>

        <Section
          sidebarContent={<Img src='/static/2017/kings-canyon/story2.jpg'/>}
        >
          <P>
            En une heure, nous arrivons sur cette plaine verte : une petite clairière laisse apparaître un vallon rempli d’herbes hautes d’un vert éclatant.
            L’endroit parfait pour un cliché !
            Mais nous allons rapidement être rejoints par un groupe d’incorrigibles dont deux individus se sont invités sur cette photo…
          </P>
        </Section>

        <Section
          action={() => {
            setTimeout(() => {
              this.state.map.flyTo({center: [-118.741567, 36.715440], zoom: 13, duration: 1500})
              highlightFromTo(this.state.map, trail, 0, 0.115)
            }, 1000)
          }}
        >
          <P>
            Bzzz, bzzz, bzzz…
          </P>
          <P>
            Les moustiques nous ont visiblement vite repérés et l’arrêt à Rowell Meadow fut bref, juste le temps de prendre quelques photos et de récupérer le répulsif.
            Innocents, nous pensions que poursuivre le chemin suffirait à s’éloigner de ces nuisibles. C’était sans savoir qu’ils allaient nous accompagner jusqu’à notre tente et même jusqu’au lendemain matin, mais nous y reviendrons plus tard.
          </P>
          <P>
            Nous continuons le chemin en pressant le pas.
            Notre randonnée est rythmée de <em>bzzz</em> et de <em>paf</em>.
            Je crois que l’expression “nuée” de moustiques ne suffirait pas à décrire le harcèlement que nous avons subi.
            Le répulsif s’avère n’être efficace que cinq minutes.
            Seule consolation : nous arrivons à en tuer de bonnes dizaines, soit probablement moins de 1% de cette meute affamée.
          </P>
        </Section>

        <Section
          sidebarContent={<Img src='/static/2017/kings-canyon/durdur.jpg'/>}
        >
          <Quote>
            Ça ne se calme pas on dirait, j’espère qu’il n’y aura pas de moustiques à Seville Lake.
          </Quote>
          <P>
            L‘espoir fait avancer <Emoji name='smile'/>.
            Nous avons marché plus de deux heures accompagnés de ces nuisibles, accumulant les piqûres.
            Hélas, la situation est bien loin de s’améliorer en se rapprochant du lac, les moustiques deviennent toujours plus nombreux et inassouvis.
          </P>
        </Section>

        <Section
          action={() => setTimeout(() => {
            this.state.map.flyTo({center: [-118.719584, 36.682804], duration: 3000})
            highlightFromTo(this.state.map, trail, 0.115, 0.343)
          }, 1000)}
        >
          <P>Le reflet de l’eau de Seville Lake apparaît au loin.
            Nous dépassons un autre groupe qui campait proche du lac.
            Premier échange : “Good evening”. Second échange : “Lots of mosquitos, heh!”.
            C’est le cas de le dire. Ils étaient en train de manger : recouverts de leurs k-ways, la capuche rabattue et serrée au maximum pour ne laisser dépasser qu’un rond de visage.
          </P>
          <P>
            Championnat du monde de sprint de montage de tente : en une minute chrono, la tente est érigée.
            On s’engouffre sous la tente, sacs et chaussures compris et refermons sur le champ l’ouverture de la tente.
            La seconde épreuve de ce biathlon inédit commence : dézingage de moustiques. PAF ! PAF !
            Nous avons tué plus d’une trentaine de moustiques en moins de cinq minutes. Tous ceux-ci s’étaient infiltrés en même temps que nous sous la tente, soit en moins de 5 secondes. C’est dire leur nombre.
          </P>
          <P>
            On souffle enfin, soulagés, mis en quarantaine sous la tente.
            Nous faisons l’état des lieux des piqûres, Benjamin qui était en t-shirt est dévoré.
            On dînera sous cette toile, ne la quittant qu’une seule fois brièvement pour se laver les dents.
            De retour sous la tente on se rassure, ça devrait aller mieux demain matin…
          </P>
          <P>
            <Emoji name='zzz'/>
          </P>
        </Section>

        <Section
          sidebarContent={<Img src='/static/2017/kings-canyon/lac-matin.jpg'/>}
        >
          <P>
            Réveil au lever du jour, on sort de la tente.
            L’air est plus frais et nous sommes enfin tranquilles.
            Nous nous approchons du lac avec l’appareil photo.
            Un cliché plus tard et bzz, ça reprend.
            Nous n’aurons eu que 5min de répit.
            On s’active, replie la tente, refait les sacs à dos puis nous voilà repartis à la hâte avec cette fois-ci l’attirail commando : seuls le visage et les mains restent à l’air libre.
            Ils n’en seront pas épargnés.
          </P>
        </Section>

        <Section
          action={() => {
            this.state.map.flyTo({center: [-118.715182, 36.708975], zoom: 12.5, duration: 3000})
            highlightFromTo(this.state.map, trail, 0.345, 0.5)
          }}
        >
          <P>
            Nous marchons donc de bon pas vers Mitchell Peak.
            Sur le chemin, le bourdonnement de ces moustiques m’excède, j’ai l’impression qu’on se fait piquer par-delà les vêtements. Aucun discours, ni juron ne les aura convaincus de nous faire la paix.
          </P>
        </Section>

        <Section
          sidebarContent={<Img src='/static/2017/kings-canyon/foret.jpg'/>}
        >
          <P>
            Ce n’est qu’au tiers de l’ascension du deuxième point fort de cette randonnée que nous avons été enfin tranquilles. Nous marchons donc vers Mitchell Peak même si pour le moment nous ne voyons que forêts et cailloux.
          </P>
        </Section>

        <Section
          sidebarContent={<Img src='/static/2017/kings-canyon/benwalking.jpg'/>}
        >
          <P>
            La montée est plutôt linéaire et les paysages de changent guère pendant de longues minutes.
            Les jambes sont plus tendues et j’ai l’impression que la vue ne se dégage pas. Un maigre espoir demeure malgré la fatigue. On se soutient et s’encourage mutuellement lors des passages à vide.
          </P>
        </Section>

        <Section
          sidebarContent={<Img src='/static/2017/kings-canyon/neve.jpg'/>}
        >
          <P>
            Enfin ! La dernière lignée d’arbres laisse apparaître un gigantesque pierrier et un névé. Le sommet est en haut. La vue se dégage, c’est magnifique. Plus on monte, plus c’est beau.
          </P>
        </Section>

        <Section
          action={() => setTimeout(() => {
            this.state.map.flyTo({center: [-118.715293, 36.731825], zoom: 13.5, duration: 4000})
            highlightFromTo(this.state.map, trail, 0.5, 0.715)
          }, 1000)}
        >
          <P>
            On y est : Mitchell Peak, 3 150m d’altitude. Nous n’avions jamais randonné aussi haut*.
          </P>
          <Footnote>Même si le <a href='/2017/mount-dana'>Mont Dana</a> 3981m puis <a href='/2017/mount-whitney'>Whitney</a> 4421m suivront la semaine suivante.</Footnote>
        </Section>

        <Section
          sidebarContent={<Img src='/static/2017/kings-canyon/panorama1.jpg'/>}
        >
          <P>
            Nous nous régalons de cette vue, en essayant de reconnaître les pics sur la carte. Des montagnes enneigées dans toutes les directions, des lacs et des vallées : c’est splendide ! une vue à 360 degrés à couper le souffle.
          </P>
        </Section>

        <Section
        sidebarContent={<Img src='/static/2017/kings-canyon/panorama2.jpg'/>}
        >
          <P>
            Autre surprise du sommet, un contenant en plastique renferme des mots écrits par les précédents randonneurs :
          </P>
          <Quote>La vue en vaut bien la peine.</Quote>
          <Quote>Magnifique randonnée !</Quote>
          <Quote
            author='Simon, 9 ans (avec la faute d’orthographe bien mignonne)'
          >
            Le plus haut pik que j’ai gravi.
          </Quote>
          <P>Des Allemands, des Russes, des Américains des 4 coins des Etats-Unis…</P>
        </Section>

        <Section
          action={() => {
            this.state.map.flyTo({center: [-118.739576, 36.725910], zoom: 12, duration: 4000})
            highlightFromTo(this.state.map, trail, 0.715, 1)
          }}
          >
          <P>
            Après le déjeuner, la descente fut plus tranquille. Les moustiques ont laissé places aux mouches inoffensives pour les heures les plus chaudes de la journée.
          </P>
        </Section>

        <Section
          sidebarContent={<Img src='/static/2017/kings-canyon/sequoia.jpg'/>}
          last={true}
        >
          <P>
            Ah j’oubliais : on a quand même survécu à une chute de Sequoïa. Un de ces arbres s’est effondré à 10m de nous alors que nous dévalions le sentier.
          </P>
          <P>
            Nous rejoignons la voiture - notre Fiat 500 SUV, si si ça existe - un peu avant 16h le dimanche. Après 24h dans la nature, des centaines de moustiques, un pic formidable et remplis d’aventure.
          </P>
          <P><Emoji name='evergreen-tree' size='2x'/></P>
        </Section>

      </Post>
    )
  }
}

export default KingsCanyon
