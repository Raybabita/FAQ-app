// Write your code here.
import {Component} from 'react'
import './index.css'

const PLUS_ICON_IMG_URL =
  'https://assets.ccbp.in/frontend/react-js/faqs-plus-icon-img.png '

const MINUS_ICON_ING_URL =
  'https://assets.ccbp.in/frontend/react-js/faqs-minus-icon-img.png '

class FaqItem extends Component {
  state = {
    isQuestionClicked: false,
  }

  onQuestionDisplay = () => {
    this.setState(preState => ({
      isQuestionClicked: !preState.isQuestionClicked,
    }))
  }

  render() {
    const {isQuestionClicked} = this.state
    const {eachListDetails} = this.props
    const {questionText, answerText} = eachListDetails

    const displayFaq = isQuestionClicked
      ? MINUS_ICON_ING_URL
      : PLUS_ICON_IMG_URL

    const imgAltText = isQuestionClicked ? 'minus' : 'plus'

    return (
      <li className="list-item">
        <div className="question-container">
          <h1 className="question-heading">{questionText}</h1>
          <button className="btn" type="button">
            <img
              className="image"
              src={displayFaq}
              onClick={this.onQuestionDisplay}
              alt={imgAltText}
            />
          </button>
        </div>

        {isQuestionClicked && (
          <div>
            <hr className="line" /> <p className="answer">{answerText}</p>
          </div>
        )}
      </li>
    )
  }
}

export default FaqItem
