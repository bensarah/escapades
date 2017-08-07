import {Component} from 'react'
import Post from '../../layouts/post'
import P from '../../components/post/paragraph'
import Map from '../../components/post/map'
import Waypoint from '../../components/post/waypoint'
import Section from '../../components/post/section'
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
        <Section>
          <P>
            Toutes les randonnées apportent leur lot de surprises et celle-ci n'en fut pas exclue.
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
          <P>
            Nous sommes partis vers 16h l'après-midi du samedi.
            Les précieux wilderness permits* en poche, le bear canister* rempli de nourriture et la tente sur le dos.
            Sur les conseils du ranger, direction Seville lake qui offre apparemment un très bon spot pour passer la nuit.
          </P>
          <Footnote>
            Ceci est une note de pas de page.
          </Footnote>
          <Footnote>
            Ceci est une note de pas de page.
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
          action={() => console.log('flanc picture')}
          sidebarContent={<Img src='/static/2017/kings-canyon/story2.jpg'/>}
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

      </Post>
    )
  }
}

export default KingsCanyon
