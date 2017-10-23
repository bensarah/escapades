import React, {Component} from 'react'
import extent from 'geojson-extent'
import Post from '../../layouts/post'
import P from '../../components/post/paragraph'
import Map from '../../components/post/map'
import Section from '../../components/post/section'
import Img from '../../components/post/img'
import Emoji from '../../components/emoji'
import Footnote from '../../components/post/footnote'
import {highlightFromTo} from '../../helpers/map-utils'
import trail from '../static/2017/mount-dana/trail'

class KingsCanyon extends Component {
  render () {
    return (
      <Post
        title='Mount Dana'
        subtitle='Yosemite National Park'
        header='/static/2017/mount-dana/header.jpg'
        trail={trail}
        id='mount-dana'
        jours={'1/2 journée'}
        tags={['Peu fréquenté', 'Points de vue', 'Altitude']}
        photos={[
          {
            src: '/static/2017/mount-dana/mont-dana.jpg',
            width: 2000,
            height: 1333,
            caption: 'Le Mont Dana vue de la route. Il n’a pas l’air si imposant et pourtant, il culmine à 3 981m !'
          },
          {
            src: '/static/2017/mount-dana/lac.jpg',
            width: 2000,
            height: 1333,
            caption: 'Le spectacle très champêtre des lacs à l&#39aller'
          },
          {
            src: '/static/2017/mount-dana/fleurs.jpg',
            width: 3417,
            height: 4000,
            caption: 'La classique photographie de fleurs sur le chemin'
          },
          {
            src: '/static/2017/mount-dana/marmot.jpg',
            width: 4762,
            height: 3170,
            caption: 'Nous avons croisé quelques marmottes, moins farouches que leurs cousines françaises.'
          },
          {
            src: '/static/2017/mount-dana/wow.jpg',
            width: 2000,
            height: 1333,
            caption: 'Quelle vue magnifique en haut du Mont Dana !'
          },
          {
            src: '/static/2017/mount-dana/selfie-sommet.jpg',
            width: 2000,
            height: 1333,
            caption: 'L’incontournable portrait pris au sommet'
          },
          {
            src: '/static/2017/mount-dana/cairn.jpg',
            width: 2000,
            height: 1333,
            caption: 'Un gigantesque cairn sur le chemin'
          },
          {
            src: '/static/2017/mount-dana/papillon.jpg',
            width: 4002,
            height: 3000,
            caption: 'Un papillon qui s’est envolé un peu vite au sommet'
          },
          {
            src: '/static/2017/mount-dana/plaque.jpg',
            width: 3899,
            height: 3899,
            caption: 'Une plaque d’immatriculation très drôle pour un de nos voisins de parking'
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
            this.state.map.fitBounds([bbox.slice(0, 2), bbox.slice(2, 4)], {duration: 3000, padding: 60})
            highlightFromTo(this.state.map, trail, 0, 0)
          }}
        >
          <P>
            Si proche des 4000m !
          </P>
          <P><Emoji name='smile' size='2x'/></P>
          <P>
            Incroyable Californie : il est rare de trouver des pics aussi hauts, aussi proches de la route.
            C’est pourtant le cas du Mont Dana dont l’ascension se fait en 1/2 journée et qui culmine à 3&nbsp;981m.
          </P>
          <P>
            Son élévation en fait le deuxième sommet le plus haut du parc de Yosemite.
            Gravir ce pic nous permettait de nous familiariser avec l’altitude, avant l’incroyable ascension du <a href='/2017/mount-whitney' target='_blank'>Mount Whitney</a>.
            D’autant plus que le profil de cette randonnée est aypique : 950 m de dénivelé en 5km et 20% de pente en moyenne.
          </P>
        </Section>

        <Section
          sidebarContent={<Img src='/static/2017/mount-dana/nuit.jpg'/>}
        >
          <P>
            Après une nuit à la belle étoile dans Yosemite*, nous avons pris la voiture pour quelques kilomètres afin de commencer cette belle randonnée au petit matin.
          </P>
          <Footnote>Je n’ai pas résisté à l’envie de vous ajouter la photo !</Footnote>
        </Section>

        <Section
          action={() => {
            setTimeout(() => {
              this.state.map.flyTo({center: [-119.258206, 37.909613], zoom: 15, duration: 1500})
            }, 1000)
          }}
        >
          <P>
            La randonnée démarre de l’entrée est du parc.
            Sur le parking, on croise deux rangers et un couple qui s’apprêtent à gravir, eux aussi, ce pic.
            Nous ne serons pas beaucoup plus nombreux sur ce chemin.
          </P>

        </Section>

        <Section
          sidebarContent={<Img src='/static/2017/mount-dana/foret.jpg'/>}
        >
          <P>
            Le début du sentier longe un flanc de montagne avec des pins et des lacs...
          </P>
        </Section>

        <Section
          sidebarContent={<Img src='/static/2017/mount-dana/pierrier.jpg'/>}
        >
          <P>
            ...mais, rapidement il devient plus pentu et aboutit dans un gigantesque pierrier.
          </P>
        </Section>

        <Section
          action={() => setTimeout(() => {
            highlightFromTo(this.state.map, trail, 0, 0.5, {duration: 4000, fitBounds: true})
          }, 1000)}
        >
          <P>
            La montée ne dure que quelques heures mais est de plus en plus intense.
          </P>
          <P>
            <Emoji name='sweat'/>
          </P>
          <P>
            Nous ressentons plusieurs épisodes de fatigue et d’essoufflement, sans vraiment savoir si l’alitude ou la difficulté de la randonnée en sont responsables. Peut-être les deux. Les symptômes ne sont pas tétanisants mais nous incitent à faire quelques pauses pour reprendre notre souffle.
          </P>
        </Section>

        <Section
          sidebarContent={<Img src='/static/2017/mount-dana/panorama.jpg'/>}
        >
          <P>
            Malgré cela, nous sommes boostés par la vue qui nous éblouit tout au long du chemin. Plus nous montons, plus nous discernons de nouveaux pics. Le panorama est sublime.
          </P>
        </Section>

        <Section
          action={() => {
            this.state.map.flyTo({center: [-119.222363, 37.901452], zoom: 14, duration: 3000})
          }}
        >
          <P>
            Nous arrivons au sommet avant 11h30. Nous frôlons les 4&nbsp;000m d’altitude.
          </P>
          <P>
            La vue et le déjeûner nous incitent à faire une longue pause, de plus d’une heure.
          </P>
        </Section>

        <Section
          sidebarContent={<Img src='/static/2017/mount-dana/mono.jpg'/>}
        >
          <P>
            Nous ne savons plus où donner de la tête : un panorama magnifique à 360°, avec notamment l’imposant Mono Lake que nous n’avions vu que depuis sa surface.
          </P>
        </Section>

        <Section
          sidebarContent={<Img src='/static/2017/mount-dana/pics.jpg'/>}
        >
          <P>
            Avant de repartir, on s’imprègne de ce panorama splendide, pour que ces superbes vues s’ancrent dans notre esprit.
          </P>
        </Section>

        <Section
          sidebarContent={<Img src='/static/2017/mount-dana/neve.jpg'/>}
        >
          <P>
            Comme à l’aller, nous avons évité quelques névés sur le retour.
            J’ai parfois essayé de les dévaler en me faisant une luge de mon k-way mais la neige est dure, ce qui génère trop de frottements pour me permettre de glisser facilement.
          </P>
        </Section>

        <Section
          action={() => setTimeout(() => {
            highlightFromTo(this.state.map, trail, 0.5, 1, {fitBounds: true, duration: 5000})
          }, 1000)}
          last={true}
        >
          <P>
            La descente fut (beaucoup) plus aisée. et nous avons retrouvé la voiture en moins de deux heures.
          </P>
          <P>
            <Emoji name='car' size='2x' title='Une Fiat 500 SUV :)'/>
          </P>
        </Section>

      </Post>
    )
  }
}

export default KingsCanyon
