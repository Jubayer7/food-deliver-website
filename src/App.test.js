import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});

{/* <h3>Contact</h3>
<i class="fas fa-home"></i>
<i class="fas fa-phone"></i>
<i class="fas fa-envelope"></i> */}

{/* <div className="col-4 follow">
<h3>Follow Us</h3>
<i class="fab fa-facebook"></i>
<i class="fab fa-youtube"></i>
<i class="fab fa-twitter-square"></i>
<i class="fab fa-google-plus-g"></i>
</div> */}
