import Post from '../../layouts/post'
import Img from '../../components/post/img'
import P from '../../components/post/paragraph'
import Map from '../../components/post/map'
import Waypoint from '../../components/post/waypoint'
import trail from '../../static/2017/kings-canyon/trail'

const KingsCanyon = () => (
  <Post
    title='Seville Lake & Mitchell Peak'
    header='/static/2017/kings-canyon/1.jpg'
    trail={trail}
    id='kings-canyon'
  >
    <P>A buzzing hike.</P>
    <Map
      center={[-118.263187, 36.579833]}
      zoom={11.6}
      trail={trail}
    />
    <Waypoint
      id='kings-canyon'
      element='coucou'
    />
    <P>
      Toutes les randonnées apportent leur lot de surprises et celle-ci n'en fut pas exclue.
    </P>

    <P>
      Nous sommes partis vers 16h l'après-midi du samedi. Les précieux wilderness permits* en poche, le bear canister* rempli de nourriture et la tente sur le dos. Sur les conseils du ranger, direction Seville lake qui offre apparemment un très bon spot pour passer la nuit.

      Les jambes sont galvanisées et nous commençons l’ascension vers la première étape : Rowell Meadows. Le sentier est agréable et ensoleillé, on longe un flanc de montagne parsemé de sequoias.
    </P>

    <Waypoint action={() => console.log('flanc picture')}>
      <div style={{background: 'url(/static/2017/kings-canyon/story1.jpg) no-repeat center center', width: '100%', height: '100%'}}></div>
    </Waypoint>

    <P>
      En une heure, nous arrivons sur cette plaine verte : une petite clairière laisse apparaître un vallon rempli d’herbes hautes d’un vert éclatant. L’endroit parfait pour un cliché ! Mais nous allons rapidement être rejoints par un groupe d’incorrigibles dont deux individus se sont invités sur cette photo…
    </P>

    <Waypoint action={() => console.log('Moustique picture')}>
      <div style={{background: 'url(/static/2017/kings-canyon/story2.jpg) no-repeat center center', width: '100%', height: '100%'}}></div>
    </Waypoint>

    <P>
      Bzzz, bzzz, bzzz…
    </P>

    <P>
      Les moustiques nous ont visiblement vite repérés et l’arrêt à Rowell Meadow fut bref, juste le temps de prendre quelques photos et de récupérer le répulsif.
      Innocents, nous pensions que poursuivre le chemin suffirait à s’éloigner de ces nuisibles. C’était sans savoir qu’ils allaient nous accompagner jusqu’à notre tente et même jusqu’au lendemain matin, mais nous y reviendrons plus tard.
    </P>

  </Post>
)

export default KingsCanyon
