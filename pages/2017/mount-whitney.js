import {Component} from 'react'
import extent from 'geojson-extent'
import Post from '../../layouts/post'
import P from '../../components/post/paragraph'
import Map from '../../components/post/map'
import Section from '../../components/post/section'
import Quote from '../../components/post/quote'
import Img from '../../components/post/img'
import Emoji from '../../components/emoji'
import Footnote from '../../components/post/footnote'
import {highlightFromTo} from '../../helpers/map-utils'
import trail from '../../static/2017/mount-whitney/trail'

class MountWhitney extends Component {
  render () {
    return (
      <Post
        title='Mount Whitney'
        subtitle='Inyo National Forest & Kings Canyon National Park, California'
        header='/static/2017/mount-whitney/header.jpg'
        trail={trail}
        id='mount-whitney'
        jours={'2 jours · 1 nuit'}
        tags={['Attention aux marmottes', 'Permis obligatoires', 'Difficile', 'Eau sur le chemin']}
        photos={[
          {
            src: '/static/2017/mount-whitney/stars.jpg',
            width: 1000,
            height: 1000,
            caption: 'Sur la route de Whitney, nuit étoilée donnant sur le Half Dome'
          },
          {
            src: '/static/2017/mount-whitney/biche.jpg',
            width: 2000,
            height: 1333,
            caption: 'Une biche stoïque'
          },
          {
            src: '/static/2017/mount-whitney/dej.jpg',
            width: 2000,
            height: 1333,
            caption: 'Déjeuner aux bords du lac'
          },
          {
            src: '/static/2017/mount-whitney/looking-down.jpg',
            width: 2000,
            height: 1333,
            caption: 'On a déjà bien grimpé'
          },
          {
            src: '/static/2017/mount-whitney/oiseau.jpg',
            width: 2000,
            height: 1333,
            caption: 'Pas tous seuls en haut'
          },
          {
            src: '/static/2017/mount-whitney/selfie-top.jpg',
            width: 2000,
            height: 1333,
            caption: 'Photo pic !'
          },
          {
            src: '/static/2017/mount-whitney/il-fait-froid.jpg',
            width: 2000,
            height: 1333,
            caption: 'Tout le monde a pensé au sac de couchage'
          },
          {
            src: '/static/2017/mount-whitney/man-guitar-lake.jpg',
            width: 2000,
            height: 1333,
            caption: 'Dans la descente, regardant vers Kings Canyon'
          },
          {
            src: '/static/2017/mount-whitney/marmotte.jpg',
            width: 2000,
            height: 1333,
            caption: 'Protégez votre nourriture des marmottes !'
          },
          {
            src: '/static/2017/mount-whitney/neve.jpg',
            width: 2000,
            height: 1333,
            caption: 'Quelques passages enneigés'
          },
          {
            src: '/static/2017/mount-whitney/sarah-sierras.jpg',
            width: 2000,
            height: 1333,
            caption: 'On commence la descente'
          },
          {
            src: '/static/2017/mount-whitney/sarah-top.jpg',
            width: 1024,
            height: 683,
            caption: 'En haut du pic'
          },
          {
            src: '/static/2017/mount-whitney/some-lake.jpg',
            width: 2000,
            height: 1333,
            caption: 'Vue typique de la Sierra Nevada'
          },
          {
            src: '/static/2017/mount-whitney/water-trail-sarah.jpg',
            width: 2000,
            height: 1333,
            caption: 'Caution, wet floor'
          },
          {
            src: '/static/2017/mount-whitney/way-down-east.jpg',
            width: 2000,
            height: 1333,
            caption: 'Regardant vers l’est entre Keeler Needle et Muir Peak'
          }
        ]}
      >
        <Map
          center={[-118.270, 36.575]}
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
            Il y a des randonnées pour lesquelles on traverserait des océans.
            Le Mont Whitney, plus haut sommet des Etats-Unis (hors Alaska) du haut de ses 4 421 m, fait partie de ceux-ci.
            Étant aussi l’un des sentiers les plus convoités, il y a aussi une loterie à gagner pour pouvoir le gravir.
          </P>
          <P>
            On a donc tenté notre chance en février, à l’ouverture des inscriptions, pour un départ en juillet. Quelques semaines plus tard, que de chance ! Nous avons notre premier choix de date.
          </P>
          <P><Emoji name='ticket' size='2x'/></P>
        </Section>

        <Section
          sidebarContent={<Img src='/static/2017/mount-whitney/bag.jpg'/>}
        >
          <P>
            Avançons de quelques mois, Sarah a donc traversé l’Atlantique et nous voilà ensemble à quelques jours du départ.
            Les sacs sont prêts, la météo s’annonce bonne et les dernières nouvelles du trail semblent indiquer qu’il n’y aura pas trop de neige - malgré les avertissements d’un randonneur que nous avions croisé sur le chemin du <a href='/2017/mount-whitney'>Mont Mitchell</a>:
          </P>
          <Quote>The snow was brutal!</Quote>
          <P>
            Nous avons prévu de traverser les Sierras en passant par Yosemite, et de gravir le <a href='/2017/mount-dana'>mont Dana</a> (3 981 m) la veille pour nous habituer à l’altitude.
          </P>
        </Section>

        <Section
          sidebarContent={<Img src='/static/2017/mount-whitney/from-lone-pine.jpg'/>}
        >
          <P>
            Au camp de Lone Pine, la carte en main, nous planifions les repas pour les 35 kilomètres et 1860m de dénivelé qui nous attendent ces deux prochains jours. Par chance, la saison a été forte en neige et les fontes garantissent de trouver de l’eau sans avoir à trop en porter. Le pic paraît si loin, presque inatteignable d’où nous sommes !
          </P>
        </Section>

        <Section
          action={() => {
            highlightFromTo(this.state.map, trail, 0, 0.19, {fitBounds: true})
          }}
        >
          <P>
            Le lendemain, nous voilà sur le trail, attaquant par une montée douce pour s’échauffer.
            Le paysage et la végétation changent petit à petit, signe de l’altitude.
            Le temps est idéal - pas trop chaud, pas de vent et grand ciel bleu. <Emoji name='sun'/>
          </P>
        </Section>
        <Section
          sidebarContent={<Img src='/static/2017/mount-whitney/water-trail.jpg'/>}
        >
          <P>
            Certaines parties du chemin sont submergées, ce qui nous force à jouer les équilibristes sur les rochers qui sortent la tête de l’eau pour éviter de tremper les chaussures.
            Autour de nous, poissons, marmottes et biches font comme si de rien n’était.
          </P>
        </Section>

        <Section
          action={() => {
            highlightFromTo(this.state.map, trail, 0.19, 0.28, {fitBounds: true})
          }}
        >
          <P>
            Après un déjeuner aux bords du lac, nous nous remettons en marche vers Trail Camp où nous bivouaquerons.
            Le paysage devient plus aride, le chemin plus rocailleux, mais la pente est toujours douce et nous avançons à bon rythme.
          </P>
        </Section>

        <Section
          sidebarContent={<Img src='/static/2017/mount-whitney/trail-camp.jpg'/>}
        >
          <P>
            Les randonneurs qui descendent nous disent que nous y sommes presque ; et quelques minutes plus tard, sur les coups de 16h30, nous y voilà ! Un petit lac dont les extrémités sont encore gelées, et quelques tentes parsemées ça et là<sup>*</sup>.
          </P>
          <P>
            Les marmottes guettent les restes de nourriture, et les malheureux qui n’ont pas de bear canister (plutôt marmotte canister) le regretteront !
          </P>
          <Footnote>
            60 campeurs sont autorisés sur le chemin chaque jour
          </Footnote>
        </Section>
        <Section
          sidebarContent={<Img src='/static/2017/mount-whitney/planning.jpg'/>}
        >
          <P>
            Le temps de monter la tente, remplir l’eau, manger, s’étirer un peu, puis d’étudier le chemin, et la nuit tombe déjà. Nous essayons de distinguer les fameux 97 lacets que nous emprunterons le lendemain, grâce aux silhouettes des courageux qui redescendent après avoir fait l’ascension en un jour.
          </P>
          <P>
            <Emoji name='zzz'/>
          </P>
        </Section>

        <Section
          sidebarContent={<Img src='/static/2017/mount-whitney/at-night.jpg'/>}
        >
          <P>
            Nous avons l’intention d’être au sommet pour le lever du jour.
          </P>
          <P>
            <Emoji name='alarm-clock'/> Le réveil sonne à 1h30 du matin.
            Étrangement, sortir du sac de couchage n’est pas si dur.
            Comme on a tout préparé pour partir au plus vite, nous partons sans un bruit moins de 15 minutes plus tard, guidés par nos lampes frontales.
          </P>
        </Section>
        <Section
          action={() => setTimeout(() => highlightFromTo(this.state.map, trail, 0.28, 0.38, {fitBounds: true, duration: 7000}), 2000)}
        >
          <P>
            Les lacets s’enchaînent sans qu’on ne puisse trop savoir où on en est.
            La température, un peu fraîche au lever, est maintenant parfaite au milieu de l’effort.
            En regardant en bas, on voit d’autres lampes s’agiter et commencer l’ascension.
          </P>
        </Section>

        <Section
          sidebarContent={<Img src='/static/2017/mount-whitney/final-ascent.jpg'/>}
        >
          <P>
            À l’arrivée à Trail Crest, où l’on passe de l’autre côté des crêtes, l’horizon commence à devenir orangé.
            Il est bientôt 4h du matin et il nous reste environ 1h30 avant le que le soleil ne se lève.
          </P>
          <P>
            Le chemin redescend un peu, puis remonte doucement en longeant ce qu’il me semble être un précipice (ou est-ce dans ma tête ? On ne voit pas très loin dans le noir…).
            À notre droite, les aiguilles s’enchaînent (Mont Muir, Aiguille de Keeler), et cela paraît incroyable de se dire que l’on va grimper plus haut qu’elles !
          </P>
        </Section>

        <Section
          sidebarContent={<Img src='/static/2017/mount-whitney/see-top.jpg'/>}
        >
          <P>
            La dernière montée se fait en dehors du trail, crapahutant sur des gros rochers pour éviter la neige.
            L’excitation monte, car il ne nous reste plus longtemps avant le lever du jour !
          </P>
          <P>
            Aucun mal de l’altitude grâce à quelques nuits passées à plus de 3000m, mais les jambes sont un peu lourdes et se frayer un chemin dans la caillasse s’avère un peu difficile.
          </P>
          <P>
            Enfin, on le voit !
            Le sommet, avec sa petite cahute, et quelques personnes en haut déjà installées pour le spectacle.
          </P>
        </Section>

        <Section
          action={() => highlightFromTo(this.state.map, trail, 0.38, 0.482, {fitBounds: true})}
        >
          <P>
            On y est, à 4421 m, au plus haut point des <em>Lower 48<sup>*</sup></em>, dix minutes avant que le soleil n’émerge.
          </P>
          <Footnote>
            Dénomination des 48 états contigus des USA, c’est à dire tous sauf l’Alaska et Hawaii.
          </Footnote>
        </Section>
        <Section
          sidebarContent={<Img src='/static/2017/mount-whitney/sunrise.jpg'/>}
        >
          <P>
            Le bonheur est palpable, et on se pose à quelques mètres du bord, emmitouflés dans un sac de couchage, regardant plein Est.
          </P>
          <P>
            <Emoji name='sunrise'/>
          </P>
          <P>
            Je ne pense pas avoir été plus ému qu’à ce moment - serrés pour se tenir chaud, les premiers rayons venant frapper nos visages, et quelques applaudissements et cris de joie des autres chanceux qui ont atteint le sommet à temps.
          </P>
        </Section>

        <Section
          sidebarContent={<Img src='/static/2017/mount-whitney/cahute.jpg'/>}
        >
          <P>
            Après s’être réchauffés et avoir repris quelques forces dans le refuge, nous voilà repartis.
            L’avantage de randonner de nuit et qu’il reste plein de choses à découvrir sur le retour, une fois dans la lumière !
            Kings Canyon et les Sierras à l’Ouest, les plaines de l’Est, et la température qui monte doucement (heureusement qu’on redescend !).
          </P>
          <P>
            Au passage, on compte les lacets pour vérifier qu’il y en a bien 97 <sup>*</sup>.
          </P>
          <Footnote>
            (ou 99, si vous demandez à Sarah. Mais tout le monde sait bien que les deux derniers ne comptent pas vraiment)
          </Footnote>
        </Section>

        <Section
          action={() => highlightFromTo(this.state.map, trail, 0.482, 0.85, {fitBounds: true, duration: 5000})}
        >
          <P>
            Nous nous permettons le luxe d’une sieste puis d’un café<sup>*</sup> de retour à notre tente (dire qu’à cette heure là, les gens normaux ne sont pas encore levés). Puis commence une longue descente, la tête pleine de belles images.
          </P>
          <Footnote>
            Petite canette de <em>cold brew</em> que nous avons montée jusqu’ici
          </Footnote>
        </Section>

        <Section
          sidebarContent={<Img src='/static/2017/mount-whitney/lone-pine-lake.jpg'/>}
        >
          <P>
            Nous déjeunons à Lone Pine Lake, avant de terminer la descente à bon rythme.
          </P>
        </Section>
        <Section
          sidebarContent={<Img src='/static/2017/mount-whitney/fini.jpg'/>}
        >
          <P>
            Nous voilà au point de départ, après une bonne journée de 15h. Faire l’ascension d’un pic à plus de 4000m d’altitude : <Emoji name='white-check-mark'/> !
          </P>
        </Section>
      </Post>
    )
  }
}

export default MountWhitney
