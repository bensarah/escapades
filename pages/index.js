import { Component } from 'react'
import Head from 'next/head'
import Emoji from '../components/emoji'
import Page from '../layouts/main'
import PostInfo from '../components/index/post-info'
import Header from '../components/index/header'
import Footer from '../components/footer'
import Region from '../components/index/region'
import posts from '../posts'
import palette from '../styles/palette'

class Index extends Component {
  constructor (props) {
    super(props)
    this.state = {
      highlight: null
    }
  }

  render () {
    return (
      <Page>
        <Head>
          <title>escapades</title>
        </Head>
        <Header background='/static/header-background.jpg'/>

        <div className='main'>
          <div className='px18'>
            <div>
              <p className='intro py30 align-center'>
                Nous avons décidé de vous faire partager nos escapades en randonnée sur ce site.
                <br />
                Vous pouvez retrouver l’index des différentes randos <a href='#geographical-section'><strong>géographiquement</strong></a> et <a href='#chronological-section'><strong>chronologiquement</strong></a>.
              </p>
            </div>

            <hr/>

            <div id='geographical-section'>
              <div className='py24'>
                <div className='px18 pb18'>
                  <h2 className='pt12 txt-xl txt-bold'><Emoji name='earth-africa'/> Des deux côtés de l’Atlantique</h2>
                  <p className='pt12'>
                    Voilà un aperçu de nos randos dans les différentes régions du globe, répartis par parc ou chaîne de montagnes.
                    <br />
                    Cliquez sur l’une d’entre elles pour en savoir plus.
                  </p>
                </div>
              </div>
              <div className='px18 pb24'>
                {this.regions()}
              </div>
            </div>

            <hr/>

            <div id='chronological-section'>
              <div className='py24'>
                <div className='px18 pb18'>
                  <h2 className='pt12 txt-xl txt-bold'><Emoji name='clock230'/> Sur les sentiers depuis 2012</h2>
                  <p className='pt12'>
                    Vous pouvez retrouver ci-dessous les mêmes randonnées que dans la précédente section, cette fois-ci ordonnées chronologiquement.
                    <br />
                    Cliquez sur une randonnée pour en lire l’histoire.
                  </p>
                </div>
                <div className='pt30 flex-parent flex-parent--row flex-parent--center-main flex-parent--wrap'>
                  {
                    posts
                      .sort((a, b) => new Date(b.date) - new Date(a.date))
                      .map(({ id, date, title, park, coords, header }) => (
                        <PostInfo
                          id={id}
                          key={id}
                          date={date}
                          title={title}
                          subtitle={park}
                          header={header}
                        />
                      ))
                  }
                </div>
              </div>
            </div>
          </div>

          <div className='px18 bg-gray-faint color-gray'>
              <p className='pt30 align-center'>
                <strong>Vous hésitez entre plusieurs randos ?</strong>
                <br />
                Commencez par l’ascension de <a href='/2017/kings-canyon'>Mitchell Peak</a>.
              </p>
              <p className='quote pt6 pb30 align-center'>
                « La dernière lignée d’arbres laisse apparaître un gigantesque pierrier et un névé. Le sommet est en haut... »
              </p>
          </div>

        </div>
      <Footer/>

        <style jsx>{`
          .main {
            background-color: ${palette.bleuNuit};
            color: white;
          }

          svg {
            height: 100%;
            width: 100%;
          }

          hr {
            background-image: linear-gradient(to right, ${palette.bleuNuit}, ${palette.bleuNuit}, ${palette.lavande}, ${palette.bleuNuit}, ${palette.bleuNuit});
            margin: 0px 100px 0px 100px;
          }

          h2 {
            color: ${palette.tournesol};
          }

          h3, .quote, .intro {
            font-size: 20px;
          }

          .quote {
            color: ${palette.brique};
            font-family: 'Bad Script';
          }

          a {
            color: ${palette.lavande}
          }

          a:hover {
            color: ${palette.lightenLavande}
          }

          .park {
            font-size: 16px;
            color: ${palette.brique};
          }

        `}</style>
      </Page>
    )
  }

  regions () {
    var hierarchy = {}
    posts.forEach(post => {
      if (!hierarchy[post.region]) hierarchy[post.region] = {}
      if (!hierarchy[post.region][post.park]) hierarchy[post.region][post.park] = []

      hierarchy[post.region][post.park].push(post)
    })

    return Object.keys(hierarchy).map((region, i) => <Region key={i} name={region} parks={hierarchy[region]}/>)
  }
}

export default Index
