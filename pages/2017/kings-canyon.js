import {Component} from 'react'
import extent from 'geojson-extent'
import Post from '../../layouts/post'
import P from '../../components/post/paragraph'
import Map from '../../components/post/map'
import Waypoint from '../../components/post/waypoint'
import Section from '../../components/post/section'
import Quote from '../../components/post/quote'
import Img from '../../components/post/img'
import Footnote from '../../components/post/footnote'
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
      >
        <Map
          center={[-118.761885166, 36.7179543094]}
          zoom={11.6}
          trail={trail}
          container='sidebar'
          onMap={(map) => this.setState({map})}
        />
        <Waypoint
          id='kings-canyon'
          element='coucou'
        />
        <Section
          action={() => {
            var bbox = extent(trail)
            this.state.map.fitBounds([bbox.slice(0, 2), bbox.slice(2, 4)], {duration: 1500, padding: 20})
          }}
        >
          <P>
            Toutes les randonnées apportent leur lot de surprises et celle-ci n'en fut pas exclue. 😃
          </P>
        </Section>

        <Section
          action={() => console.log('ce aue tu veux')}
        >
          <P>
            Nous sommes partis vers 16h l'après-midi du samedi.
            Les précieux <em>wilderness permits</em><sup>*</sup> en poche, le <em>bear canister</em><sup>*</sup> rempli de nourriture et la tente sur le dos.
            Sur les conseils du ranger, direction Seville Lake qui offre apparemment un très bon spot pour passer la nuit.
          </P>
          <Footnote>
            Les wilderness permits sont des permis pour bivouaquer dans les parcs nationaux. Ils s’obtiennent auprès des rangers.
          </Footnote>
          <Footnote>
            <em>‘Be bear aware’</em> : la Californie est un territoire rempli d’ours - animal aussi majestueux que dangereux. Il faut donc être quelque peu préparé et emporter un bear canister pour chaque bivouac. C’est un cylindre rigide qu’on ne peut ouvrir qu’avec un cerveau et des doigts d’humain et dans lequel on place sa nourriture. Accessoirement, ces contenants sont aussi très utiles pour isoler la nourriture des marmottes ou des chipmunks.
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
          action={() => setTimeout(() => this.state.map.panTo([-118.715100, 36.731829]), 1000)}
        >
          <P>
            En une heure, nous arrivons sur cette plaine verte : une petite clairière laisse apparaître un vallon rempli d’herbes hautes d’un vert éclatant. L’endroit parfait pour un cliché ! Mais nous allons rapidement être rejoints par un groupe d’incorrigibles dont deux individus se sont invités sur cette photo…
          </P>
        </Section>

        <Section
          action={() => console.log('Moustique picture')}
          sidebarContent={<Img src='/static/2017/kings-canyon/story2.jpg'/>}
        >
          <P>
            Bzzz, bzzz, bzzz…
          </P>
          <P>
            Les moustiques nous ont visiblement vite repérés et l’arrêt à Rowell Meadow fut bref, juste le temps de prendre quelques photos et de récupérer le répulsif.
            Innocents, nous pensions que poursuivre le chemin suffirait à s’éloigner de ces nuisibles. C’était sans savoir qu’ils allaient nous accompagner jusqu’à notre tente et même jusqu’au lendemain matin, mais nous y reviendrons plus tard.
          </P>
        </Section>

        <Section
        >
          <P>
            Nous continuons le chemin en pressant le pas.
            Notre randonnée est rythmée de bzzz et de paf.
            Je crois que l’expression “nuée” de moustiques ne suffirait pas à décrire le harcèlement que nous avons subi.
            Le répulsif s’avère n’être efficace que cinq minutes.
            Seule consolation : nous arrivons à en tuer de bonnes dizaines, soit probablement moins de 1% de cette meute affamée.
          </P>
          <Quote>
            Ça ne se calme pas on dirait, j’espère qu’il n’y aura pas de moustiques à Seville Lake.
          </Quote>
        </Section>

        <Section>
          <P>
            L‘espoir fait avancer 😃.
            Nous avons marché plus de deux heures accompagnés de ces nuisibles, accumulant les piqûres.
            Hélas, la situation est bien loin de s’améliorer en se rapprochant du lac, les moustiques deviennent toujours plus nombreux et inassouvis.
          </P>
        </Section>

        <Section>
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
            💤
          </P>
        </Section>
      </Post>
    )
  }
}

export default KingsCanyon
