import { createBrowserRouter } from 'react-router-dom';
import Home from '../components/home';
import Appointment from '../components/appointment/appointment';
import Gallery from '../components/gallery/gallery';
import OurServices from '../components/our-services/our-servcies';
import Review from '../components/reviews/review';
import OurTeam from '../components/our-team/our-team';

const router = createBrowserRouter([
  { path: '/', element: <Home /> },
  { path: '/appointment', element: <Appointment /> },
  { path: '/gallery', element: <Gallery /> },
  { path: '/services', element: <OurServices /> },
  { path: '/review', element: <Review /> },
  { path: '/team', element: <OurTeam /> },
]);

export default router;
