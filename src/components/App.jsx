import React, {useState} from "react";

import Section from "./Section/Section";
import Statistics from './Statistics/Statistics'
import FeedbackOptions from './FeedbackOptions/FeedbackOptions';
import Notification from "./Notification/Notification";

export const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  const feedbackTypes= ['good', 'neutral', 'bad']
  
 const onLeaveFeedback = value => {
    if (value === 'good') setGood(prevState => prevState + 1);
    if (value === 'neutral') setNeutral(prevState => prevState + 1);
    if (value === 'bad') setBad(prevState => prevState + 1);
  };
  const countTotalFeedback = () => {
    return good + neutral + bad;
  };
 const countPositiveFeedbackPercentage = () => {
    return Math.ceil(((good  * 100/ countTotalFeedback()))) || 0
  }
  return (
    <div
      style={{
        height: '100vh',
        // display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101',
        padding: "40px",
      }}
    >
      <Section title="Please leave feedback">
          <FeedbackOptions
            options={feedbackTypes}
            onLeaveFeedback={onLeaveFeedback}
          ></FeedbackOptions>
        </Section>
       <Section title={"Statistics"}>
       {countTotalFeedback() ? (<Statistics good={good} neutral={neutral} bad={bad} total={countTotalFeedback} positivePercentage={countPositiveFeedbackPercentage}/>) : (<Notification message={"There is no feedback"}/>)}
       </Section> 
        
      
    </div>
  );
}
// export class App extends Component {
//   static defaultProps = {
//     feedbackTypes: ['good', 'neutral', 'bad'],
//   };

//   state = {
//     good: 0,
//     neutral: 0,
//     bad: 0,
//   };

  // onLeaveFeedback = value => {
  //   this.setState(prevState => ({ [value]: prevState[value] + 1 }));
  // };

  // countTotalFeedback = () => {
  //   const { good, neutral, bad } = this.state;
  //   return good + neutral + bad;
  // };

  // countPositiveFeedbackPercentage = () => {
  //   return Math.ceil(((this.state.good  * 100/ this.countTotalFeedback()))) || 0
  // }

//  render () { 
  // return (
  //   <div
  //     style={{
  //       height: '100vh',
  //       // display: 'flex',
  //       justifyContent: 'center',
  //       alignItems: 'center',
  //       fontSize: 40,
  //       color: '#010101',
  //       padding: "40px",
  //     }}
  //   >
  //     <Section title="Please leave feedback">
  //         <FeedbackOptions
  //           options={this.props.feedbackTypes}
  //           onLeaveFeedback={this.onLeaveFeedback}
  //         ></FeedbackOptions>
  //       </Section>
  //      <Section title={"Statistics"}>
  //      {this.countTotalFeedback() ? (<Statistics good={this.state.good} neutral={this.state.neutral} bad={this.state.bad} total={this.countTotalFeedback} positivePercentage={this.countPositiveFeedbackPercentage}/>) : (<Notification message={"There is no feedback"}/>)}
  //      </Section> 
        
      
  //   </div>
  // );}
// };
