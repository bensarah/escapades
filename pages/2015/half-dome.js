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
        jours={'1 journée · 0 nuit'}
        tags={['Difficile', 'Permis obligatoires', 'Fréquenté']}
        photos={[
          {
            src: '/static/2015/half-dome/au-pied.jpg',
            width: 2248,
            height: 4000,
            caption: 'Au pied du Half Dome'
          },
          {
            src: '/static/2015/half-dome/avant-les-cables.jpg',
            width: 2248,
            height: 4000,
            caption: 'Nous voilà à l&#39;approche de la denière partie'
          },
          {
            src: '/static/2015/half-dome/cascade.jpg',
            width: 2248,
            height: 4000,
            caption: 'Cascade, sur le chemin du retour'
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
            J&#39;en avais envie et nous l’avons fait ! Nous avons gravi ce pic phare de Yosemite qu’est le Half Dome et la balade en valait bien le coup.
          </P>
          <P>
            En voilà son récit...
          </P>
        </Section>

        <Section
          sidebarContent={<Img src='/static/2015/half-dome/half-dome.jpg'/>}
        >
          <P>
            Le Half Dome, c&#39;est un incontournable. Une grosse vague de granite qui trône au-dessus de la vallée de Yosemite. Benjamin l’avait déjà gravi quelques mois auparavant avec un groupe d’amis de Berkeley. Pour ma part, cette randonnée représentait ma première ascension de cet emblème des parcs américains.
          </P>
        </Section>

        <Section>
          <P>
            Tellement populaire qu&#39;il faut réguler le passage : il faut un permis pour gravir ce <em>must-do</em>. Une première poignée de permis est accordée en janvier pour toute la saison d&#39;été. Les permis restants sont joués à la loterie dans les jours qui précèdent l&#39;ascension.
            Ainsi, Benjamin et moi avons tenté cette loterie pour le lundi 24 août.
          </P>
          <Quote>
            Pour un lundi, ça devrait passer ! Le même jour, l&#39;année dernière, 100% l&#39;ont eu !
          </Quote>
          <P>
            Bien sûr, c&#39;était sans compter sur notre malchance au jeu et nous apprîmes le dimanche 23 juin à 20h que nous n&#39;avions pas les permis.
          </P>
        </Section>

        <Section
          sidebarContent={<Img src='/static/2015/half-dome/lottery2.png'/>}
        >
          <P><Emoji name='cry' size='2x'/></P>
          <P>
            Frustrant. D&#39;autant plus que nous l’avons appris quelques heures avant le début de l’ascension. Sans le camping de la vallée et son réseau wifi que Benjamin a pu détourner*. On n&#39;aurait eu la mauvaise nouvelle qu&#39;au pied de la bosse finale du Half Dome, après avoir déjà fait plus de 80% de la montée !
          </P>
          <Footnote>
            Soit quelqu&#39;un au nom de Tran occupe la tente 301, soit leur système d&#39;authentification laisse clairement à désirer -
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
            Le dimanche soir, exténués et stressés, on s&#39;endort donc en mettant le réveil à 4h du matin, pour peut-être arriver au pied du Half-Dome avant le réveil du ranger.
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
          <P><Emoji name='clock430'/>  Nous avons donc commencé l&#39;ascension à la lampe torche à 4h30 du matin.
            <Quote>Benjamin, on fait quoi si on croise un ours ?</Quote>
          </P>
          <P>
           Nous n&#39;avons pas croisé d&#39;ours mais beaucoup d&#39;autres randonneurs. <Emoji name='family'/>
         </P>
         <P>
            Débuter très tôt permet de faire l&#39;ascension alors que la température est de l’ordre de 25° - seulement - et d&#39;éviter les châleurs plus tardives. On a eu de la chance de vouloir esquiver le ranger, en somme.
          </P>
        </Section>

        <Section
          action={() => {
            setTimeout(() => {
              this.state.map.flyTo({center: [-119.513085, 37.745257], zoom: 13, duration: 1500})
              highlightFromTo(this.state.map, trail, 0.15, 0.7)
            }, 2000)
          }}
        >
         <P>
            Je n&#39;ai pas vu passer la montée, j&#39;étais un peu en roue libre. La fatigue était là mais je ne voulais pas trop écouter mon corps de peur de ralentir et <em>in fine</em> de ne pas pouvoir gravir la dernière montée jusqu&#39;au Half Dome.
          </P>
          <P>
            En témoignent le peu de photos et notre rythme d&#39;ascension : nous avons mis près de 4h pour faire 1440m de dénivelé, sans pause. Sans croiser le ranger ! Ouf <Emoji name='weat-smile'/>
          </P>
        </Section>

        <Section
        >{/* Retrouver une photo des virages */}
         <P>
            L'avant-dernière partie de cette montée est intense : des lacets en pente forte, en plein soleil, alors que les jambes sont déjà fatiguées.
         </P>
        </Section>

      </Post>
    )
  }
}

export default HalfDome
