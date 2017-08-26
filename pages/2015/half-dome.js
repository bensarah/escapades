import {Component} from 'react'
import extent from 'geojson-extent'
import Post from '../../layouts/post'
import P from '../../components/post/paragraph'
import Map from '../../components/post/map'
import Section from '../../components/post/section'
import Img from '../../components/post/img'
import Emoji from '../../components/emoji'
import Footnote from '../../components/post/footnote'
import Quote from '../../components/post/quote'
import {highlightFromTo} from '../../helpers/map-utils'
import trail from '../../static/2015/half-dome/trail'

class HalfDome extends Component {
  render () {
    return (
      <Post
        title='Half Dome'
        subtitle='Yosemite National Park, California'
        header='/static/2015/half-dome/header.jpg'
        trail={trail}
        id='half-dome'
        jours={'1 journée'}
        tags={['Difficile', 'Permis obligatoires', 'Fréquenté']}
        photos={[
          {
            src: '/static/2015/half-dome/au-pied.jpg',
            width: 1200,
            height: 674,
            caption: 'Au pied du Half Dome'
          },
          {
            src: '/static/2015/half-dome/avant-les-cables.jpg',
            width: 2248,
            height: 4000,
            caption: 'Nous voilà à l’approche de la denière partie'
          },
          {
            src: '/static/2015/half-dome/cables-bouchon.jpg',
            width: 4000,
            height: 2248,
            caption: 'Après 10h, il y a beaucoup de monde sur les câbles'
          },
          {
            src: '/static/2015/half-dome/cascade.jpg',
            width: 2248,
            height: 4000,
            caption: 'Cascade, sur le chemin du retour'
          },
          {
            src: '/static/2015/half-dome/post.jpg',
            width: 4000,
            height: 2248,
            caption: 'Le majestueux Half Dome depuis la crête au sud'
          },
          {
            src: '/static/2015/half-dome/derniere-montee.jpg',
            width: 4000,
            height: 2248,
            caption: 'Difficile dernière montée avant les câbles'
          },
          {
            src: '/static/2015/half-dome/lezard.jpg',
            width: 4000,
            height: 2248,
            caption: 'Y’a pas de lézard.'
          },
          {
            src: '/static/2015/half-dome/dur.jpg',
            width: 4000,
            height: 2248,
            caption: 'Un peu dans le dur - il fait chaud au soleil !'
          },
          {
            src: '/static/2015/half-dome/ours.jpg',
            width: 2248,
            height: 4000,
            caption: 'Il y a un ourson sur cette photo. Saurez-vous le trouver ?'
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
            this.state.map.fitBounds([bbox.slice(0, 2), bbox.slice(2, 4)], {duration: 1500, padding: 20})
          }}
        >
          <P>
            J’en avais envie et nous l’avons fait ! Nous avons gravi ce pic phare de Yosemite qu’est le Half Dome et la balade en valait bien le coup.
          </P>
          <P>
            En voilà son récit...
          </P>
        </Section>

        <Section
          sidebarContent={<Img src='/static/2015/half-dome/half-dome.jpg'/>}
        >
          <P>
            Le Half Dome, c’est un incontournable. Une grosse vague de granite qui trône au-dessus de la vallée de Yosemite. Benjamin l’avait déjà gravi quelques mois auparavant avec un groupe d’amis de Berkeley. Pour ma part, cette randonnée représentait ma première ascension de cet emblème des parcs américains.
          </P>
        </Section>

        <Section>
          <P>
            Tellement populaire qu’il faut réguler le passage : il faut un permis pour gravir ce <em>must-do</em>. Une première poignée de permis est accordée en janvier pour toute la saison d’été. Les permis restants sont joués à la loterie dans les jours qui précèdent l’ascension.
            Ainsi, Benjamin et moi avons tenté cette loterie pour le lundi 24 août.
          </P>
          <Quote>
            Pour un lundi, ça devrait passer ! Le même jour, l’année dernière, 100% l’ont eu !
          </Quote>
          <P>
            Bien sûr, c’était sans compter sur notre malchance au jeu et nous apprîmes le dimanche 23 juin à 20h que nous n’avions pas les permis.
          </P>
        </Section>

        <Section
          sidebarContent={<Img src='/static/2015/half-dome/lottery2.png'/>}
        >
          <P><Emoji name='cry' size='2x'/></P>
          <P>
            Frustrant. D’autant plus que nous l’avons appris quelques heures avant le début de l’ascension. Sans le camping de la vallée et son réseau wifi que Benjamin a pu détourner*. On n’aurait eu la mauvaise nouvelle qu’au pied de la bosse finale du Half Dome, après avoir déjà fait plus de 80% de la montée !
          </P>
          <Footnote>
            Soit quelqu’un au nom de Tran occupe la tente 301, soit leur système d’authentification laisse clairement à désirer -
          </Footnote>
        </Section>

        <Section
          sidebarContent={<Img src='/static/2015/half-dome/night.jpg'/>}
        > {/*  Trouver une meilleure photo maybe, ça c'est à May Lake */}
          <P>
            Après quelques instants de déception, Benjamin m’annonce :
          </P>
          <Quote>Tant pis, on y va. Si on croise le ranger, on lui expliquera notre cas.</Quote>
          <P>
            Le dimanche soir, exténués et stressés, on s’endort donc en mettant le réveil à 4h du matin, pour peut-être arriver au pied du Half-Dome avant le réveil du ranger.
          </P>
          <P><Emoji name='zzz'/></P>
        </Section>

        <Section
          action={() => {
            setTimeout(() => {
              this.state.map.flyTo({center: [-119.555344, 37.726097], zoom: 13, duration: 1500})
              highlightFromTo(this.state.map, trail, 0, 0.15)
            }, 1000)
          }}
        >
          <P><Emoji name='clock430'/>  Nous avons donc commencé l’ascension à la lampe torche à 4h30 du matin.
          </P>
          <Quote>Benjamin, on fait quoi si on croise un ours ?</Quote>
          <P>
           Nous n’avons pas croisé d’ours mais beaucoup d’autres randonneurs. <Emoji name='family'/>
         </P>
         <P>
            Débuter très tôt permet de faire l’ascension alors que la température est de l’ordre de 25° - seulement - et d’éviter les châleurs plus tardives. On a eu de la chance de vouloir esquiver le ranger, en somme.
          </P>
        </Section>

        <Section
          action={() => {
            setTimeout(() => {
              this.state.map.flyTo({center: [-119.513085, 37.745257], zoom: 13, duration: 1500})
              highlightFromTo(this.state.map, trail, 0.15, 0.46)
            }, 2000)
          }}
        >
         <P>
            Je n’ai pas vu passer la montée, j’étais un peu en roue libre. La fatigue était là mais je ne voulais pas trop écouter mon corps de peur de ralentir et <em>in fine</em> de ne pas pouvoir gravir la dernière montée jusqu’au Half Dome.
          </P>
          <P>
            En témoignent le peu de photos et notre rythme d’ascension : nous avons mis près de 4h pour faire 1440m de dénivelé, sans pause. Sans croiser le ranger ! Ouf <Emoji name='weat-smile'/>
          </P>
        </Section>

        <Section
          action={() => {
            setTimeout(() => {
              this.state.map.flyTo({center: [-119.527277, 37.748318], zoom: 15, duration: 1500})
              highlightFromTo(this.state.map, trail, 0.46, 0.48)
            }, 2000)
          }}
        >
         <P>
            L’avant-dernière partie de cette montée est intense : des lacets en pente forte, en plein soleil, alors que les jambes sont déjà fatiguées.
         </P>
        </Section>
        <Section
          sidebarContent={<Img src='/static/2015/half-dome/les-cables.jpg'/>}
        >
          <P>
            La fin de l’ascension est atypique : les «&nbsp;câbles&nbsp;» !
          </P>
          <P>
            En raison de la pente à 45° par endroits, la dernière montée se fait en se tractant contre la paroi. Le mur est assez lisse, ce qui a requis l’installation de paliers en bois sur lesquels s’appuyer. Une chute en dehors des câbles et c’est la dégringolade jusque dans la vallée ! Certains ont le vertige et tétanisent. Nous n’avons rien ressenti, heureusement.
          </P>
        </Section>

        <Section
          sidebarContent={<Img src='/static/2015/half-dome/en-haut.jpg'/>}
        >
          <P>
            Et après les câbles, on y est, enfin ! Toute la vallée de Yosemite à nos pieds, une vue imprenable. et en haut du Half Dome, c’est presque plat, c’est lunaire presque.
          </P>
        </Section>

        <Section
          sidebarContent={<Img src='/static/2015/half-dome/fumee.jpg'/>}
        >
          <P>
            Il n’est même pas 9h30 et nous enchaînons les photos, admirons la vue et en profitons aussi pour faire la sieste.
          </P>
          <P>
            Détail impressionnant : une opaque brume envahit l’horizon de la vallée. C’est la conséquence des feux de forêt qui font rage dans la région.
          </P>
        </Section>
        <Section
          action={() => {
            setTimeout(() => {
              this.state.map.flyTo({center: [-119.518747, 37.746769], zoom: 12, duration: 1500})
              highlightFromTo(this.state.map, trail, 0.50, 1)
            }, 1000)
          }}
        >
          <P>
            La descente s’est faite plus doucement, mais chaudement.
          </P>
          <P><Emoji name='sun' size='2x'/></P>
          <P>
            En effet, la température dépassait largement les trente degrés. L’ombre se faisait rare sur le chemin de la descente.
          </P>
        </Section>
        <Section
          sidebarContent={<Img src='/static/2015/half-dome/descente.jpg'/>}
        >
          <P>
            D’autant plus, que nous avions oublié la crème solaire à la voiture et que la randonnée de la veille, Clouds Rest, nous avait laissé quelques rougeurs bénignes.
          </P>
        </Section>

        <Section
          sidebarContent={<Img src='/static/2015/half-dome/selfie-fatigues.jpg'/>}
          last={true}
        >
          <P>
            En tout, la balade aller-retour nous a pris 12h avec pauses.
          </P>
          <P>
            Mais quelle fierté tout de même : on a gravi le Half Dome !
          </P>
        </Section>

      </Post>
    )
  }
}

export default HalfDome
