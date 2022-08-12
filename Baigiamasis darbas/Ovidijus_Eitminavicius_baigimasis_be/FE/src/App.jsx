import './App.css';
import { Toaster } from 'react-hot-toast';
import Header from './components/Header/Header';
import { Route, Switch } from 'react-router-dom';
import LoginPage from './pages/LoginPage/LoginPage';
import RegisterPage from './pages/RegisterPage/RegisterPage';
import Footer from './components/Footer/Footer';
import NotFoundPage from './pages/NotFoundPage/NotFoundPage';
import ProtectedRoute from './components/ProtectedRoute/ProtectedRoute';
import HomePage from './pages/HomePage/HomePage';
import QuestionsPage from './pages/QuestionsPage/QuestionsPage';
import AddQuestion from './pages/AddQuestion/AddQuestion';
import AnswersPage from './pages/AnswersPage/AnswersPage';
import EditQuestionPage from './pages/EditQuestionPage/EditQuestionPage';
import EditAnswerPage from './pages/EditAnswerPage/EditAnswerPage';

function App() {
  return (
    <div className='App'>
      <Toaster />
      <Header />
      <Switch>
        <Route path={'/register'}>
          <RegisterPage />
        </Route>
        <Route path={'/login'}>
          <LoginPage />
        </Route>
        <Route path={'/questions'}>
          <QuestionsPage />
        </Route>
        <ProtectedRoute path={'/editQuestion/:id'}>
          <EditQuestionPage />
        </ProtectedRoute>
        <ProtectedRoute path={'/editAnswer/:id'}>
          <EditAnswerPage />
        </ProtectedRoute>
        <ProtectedRoute path={'/add'}>
          <AddQuestion />
        </ProtectedRoute>
        <Route path={'/:id/answers'}>
          <AnswersPage />
        </Route>
        <Route exact path={'/'}>
          <HomePage />
        </Route>
        <Route path={'*'}>
          <NotFoundPage />
        </Route>
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
