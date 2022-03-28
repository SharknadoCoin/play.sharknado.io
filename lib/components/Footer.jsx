import React from 'react'

import MailFooterIcon from 'assets/images/mail-footer.svg'
import MediumFooterLogo from 'assets/images/medium-footer.svg'
import GithubFooterLogo from 'assets/images/github-footer.svg'
import DiscordLogo from 'assets/images/discord-footer.svg'
import TwitterFooterLogo from 'assets/images/twitter-footer.svg'

export const Footer = () => {
  let mailHref = 'mailto:hello@pooltogether.com'
  let twitterHref = 'https://twitter.com/PoolTogether_'

  return (
    <footer className='footer w-full text-default text-sm sm:px-8 lg:px-0 mt-48'>
      <div className='nav-and-footer-container'>
        <div className='flex flex-col sm:flex-row justify-between mt-3 sm:mt-4 lg:mt-6 pb-5 lg:pb-8'>
          <div className=''>
            <a title='home' className='trans mr-4 sm:ml-8' target='_blank' href='https://sharknado.io'>
              home
            </a>
            <a title='docs' className='trans mr-4' target='_blank' href='https://docs.sharknado.io'>
              docs
            </a>
            {/* <a
          title='readTheFAQ'
          className='trans mr-4'
          href='https://www.pooltogether.com/faq'
        >
          faq
        </a>

        <a
          title='seeStats'
          className='trans mr-4'
          href='https://www.pooltogether.com/#stats'
        >
          stats
        </a> */}
            <a title='vote' className='trans mr-4' target='_blank' href='https://vote.sharknado.io'>
              vote
            </a>
            <a title='Buy SHARKO' className='trans mr-4' target='_blank' href='https://swap.sharknado.io'>
              swap
            </a>
          </div>

          <div className='mt-3 sm:mt-0 mb-2 sm:mb-0'>
            <nav className='flex sm:justify-between w-full'>
              <a
                className='img-link inline-block trans mr-3 lg:mr-0 lg:ml-4 w-5 h-5 '
                href='https://twitter.com/sharknadocoin'
                target='_blank'
                rel='noreferrer noopener'
              >
                <img alt='twitter logo' src={TwitterFooterLogo} className='pt-1' />
              </a>

              <a
                className='img-link inline-block trans mr-3 lg:mr-0 lg:ml-4 w-5 h-5 '
                href='https://discord.sharknado.io'
                target='_blank'
                rel='noreferrer noopener'
              >
                <img alt='discord logo' src={DiscordLogo} className='pt-1' />
              </a>

              <a
                className='img-link inline-block trans mr-3 lg:mr-0 lg:ml-4 w-5 h-5 '
                href='https://github.com/sharknadocoin/'
                target='_blank'
                rel='noreferrer noopener'
              >
                <img alt='github logo' src={GithubFooterLogo} className='pt-1' />
              </a>

              <a
                className='img-link inline-block trans mr-3 lg:mr-0 lg:ml-4 w-5 h-5 '
                href='https://sharknadocoin.medium.com/'
                target='_blank'
                rel='noreferrer noopener'
              >
                <img alt='medium logo' src={MediumFooterLogo} className='pt-1' />
              </a>
              
            </nav>
          </div>
        </div>
      </div>
    </footer>
  )
}