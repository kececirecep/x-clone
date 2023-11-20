import React from 'react'
import Menu from '../components/Menu'
import TrendList from '../components/TrendList' 
import Tweets from '../components/Tweets'
import SendTweet from '../components/SendTweet'

const HomePage = () => {
  return (
    <div className='container mx-auto w-[1275px] flex'>
      <div className='container w-[325px]'>
      <div className='mt-2 fixed '>
        <Menu />
      </div>
      </div>
      <div className='mt-2 w-[600px]'>
      <SendTweet/>
      <Tweets/> 
      </div>
      <div className='mt-2'>
        <TrendList/>
      </div>
    </div>
  )
}

export default HomePage