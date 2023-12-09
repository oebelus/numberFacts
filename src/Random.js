import axios from 'axios'
import {useState, useEffect} from 'react'
import { TwitterShareButton } from 'react-share';
import './Random.css'

function Random() {

  const [id, setId] = useState(23);
  const [topic, setTopic] = useState("math");

  //let randomNumber = Math.random() * 100;
  //const number = Math.round(randomNumber)
  const url = `http://numbersapi.com/${id}/${topic}`
  
  const [slip, setAdvice] = useState(id)
 
  useEffect(() => {
    axios.get(url)
    .then(response => {
      setAdvice(response.data)
    }).catch(err => {
      setId(null)
    })
  }, [url])

  const previous = () => {
    setId(parseInt(id) - 1)
  }

  function refresh() {
    setId(parseInt(Math.random() * 1000))
  }

  function next() {
    setId(parseInt(id) + 1)
  }

  function math() {
    setTopic("math")
  }

  function trivia() {
    setTopic("")
  }

  function date() {
    setTopic("date")
  }

  function changeInput(e) {
    setId(e.target.value)
    console.log(id)
  }

  return (
    <div className="row">
      <div className="col s12 m6">
        <h1 className='theTitle'>Numbers' facts generator</h1>
          <div className="card black darken-1">
            <div className="card-content white-text">
              <input type="text" name="numberToFact" onChange={changeInput} value={null?23:id} className='numberToFact'/>
              <p className='randanFactan'>{slip}</p>
            </div>
            <div className="card-action buttons">
              <button className='three previous' onClick={previous}>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-skip-backward-fill" viewBox="0 0 16 16">
                  <path d="M.5 3.5A.5.5 0 0 0 0 4v8a.5.5 0 0 0 1 0V8.753l6.267 3.636c.54.313 1.233-.066 1.233-.697v-2.94l6.267 3.636c.54.314 1.233-.065 1.233-.696V4.308c0-.63-.693-1.01-1.233-.696L8.5 7.248v-2.94c0-.63-.692-1.01-1.233-.696L1 7.248V4a.5.5 0 0 0-.5-.5z"/>
                </svg>
              </button>
              <button className='three refresh' onClick={refresh}>
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-shuffle" viewBox="0 0 16 16">
                <path fill-rule="evenodd" d="M0 3.5A.5.5 0 0 1 .5 3H1c2.202 0 3.827 1.24 4.874 2.418.49.552.865 1.102 1.126 1.532.26-.43.636-.98 1.126-1.532C9.173 4.24 10.798 3 13 3v1c-1.798 0-3.173 1.01-4.126 2.082A9.624 9.624 0 0 0 7.556 8a9.624 9.624 0 0 0 1.317 1.918C9.828 10.99 11.204 12 13 12v1c-2.202 0-3.827-1.24-4.874-2.418A10.595 10.595 0 0 1 7 9.05c-.26.43-.636.98-1.126 1.532C4.827 11.76 3.202 13 1 13H.5a.5.5 0 0 1 0-1H1c1.798 0 3.173-1.01 4.126-2.082A9.624 9.624 0 0 0 6.444 8a9.624 9.624 0 0 0-1.317-1.918C4.172 5.01 2.796 4 1 4H.5a.5.5 0 0 1-.5-.5z"/>
                <path d="M13 5.466V1.534a.25.25 0 0 1 .41-.192l2.36 1.966c.12.1.12.284 0 .384l-2.36 1.966a.25.25 0 0 1-.41-.192zm0 9v-3.932a.25.25 0 0 1 .41-.192l2.36 1.966c.12.1.12.284 0 .384l-2.36 1.966a.25.25 0 0 1-.41-.192z"/>
              </svg>
              </button>
              <button className='three next' onClick={next}>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-fast-forward-fill" viewBox="0 0 16 16">
                  <path d="M7.596 7.304a.802.802 0 0 1 0 1.392l-6.363 3.692C.713 12.69 0 12.345 0 11.692V4.308c0-.653.713-.998 1.233-.696l6.363 3.692Z"/>
                  <path d="M15.596 7.304a.802.802 0 0 1 0 1.392l-6.363 3.692C8.713 12.69 8 12.345 8 11.692V4.308c0-.653.713-.998 1.233-.696l6.363 3.692Z"/>
                </svg>
              </button>
            </div>
            <div><p className='user'>@Oebelus</p></div>
          </div>
          <div className="thebuttons">
            <div className="section">
              <button className='math' onClick={math}>Math</button>
              <button className='trivia' onClick={trivia}>Trivia</button>
              <button className='date' onClick={date}>Date</button>
            </div>
            <button className='share'>
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-twitter-x" viewBox="0 0 16 16">
                <path d="M12.6.75h2.454l-5.36 6.142L16 15.25h-4.937l-3.867-5.07-4.425 5.07H.316l5.733-6.57L0 .75h5.063l3.495 4.633L12.601.75Zm-.86 13.028h1.36L4.323 2.145H2.865l8.875 11.633Z"/>
              </svg>
            </button>
          </div>
        </div>
        <div className='footer'>
          <p className='footerParagraph'>API from <a className='linkerApi' href="http://numbersapi.com">numbersapi.com</a></p>
        </div>
      </div>
  )
}
export default Random;
