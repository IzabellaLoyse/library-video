import config from '../../config.json';
import { StyledHeader } from './style';

function Header() {
  return (
    <StyledHeader>
      <p>{config.name}</p>
      <p>{config.job}</p>
      <img src={`https://github.com/${config.github}.png`} alt="" />
    </StyledHeader>
  );
}

export default Header;
