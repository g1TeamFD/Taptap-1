import React from 'react';
import { Routes, Route } from 'react-router-dom';
import GuestHome from '../pages/Guest/Home/GuestHome';
import Info from '../pages/Guest/Info/Info';
import ThankYou from '../pages/Guest/ThankYou/ThankYou';
import AskQuestion from '../pages/Guest/AnswerMe/AskQuestion';
import AnswerHistory from '../pages/Guest/AnswerMe/AnswerHistory';
import SubmitChallenge from '../pages/Guest/ChallengeMe/SubmitChallenge';
import EvaluateChallenge from '../pages/Guest/ChallengeMe/EvaluateChallenge';
import ViewCard from '../pages/Guest/PersonaCard/ViewCard';

const GuestRoutes = () => (
  <Routes>
    <Route path="home" element={<GuestHome />} />
    <Route path="info" element={<Info />} />
    <Route path="thank-you" element={<ThankYou />} />
    <Route path="answer-me/ask" element={<AskQuestion />} />
    <Route path="answer-me/history" element={<AnswerHistory />} />
    <Route path="challenge-me/submit" element={<SubmitChallenge />} />
    <Route path="challenge-me/evaluate" element={<EvaluateChallenge />} />
    <Route path="persona-card/view" element={<ViewCard />} />
  </Routes>
);

export default GuestRoutes;
