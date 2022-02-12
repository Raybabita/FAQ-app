// Write your code here.
import {Component} from 'react'
import FaqItem from '../FaqItem'
import './index.css'

class Faqs extends Component {
  render() {
    const {faqsList} = this.props

    return (
      <div className="app-container">
        <div className="faq-container">
          <h1 className="heading">FAQ</h1>
          <ul className="faq-list-items">
            {faqsList.map(eachListItem => (
              <FaqItem key={eachListItem.id} eachListDetails={eachListItem} />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default Faqs
