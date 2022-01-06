import Link from 'next/link';

import { Header, Container, Flow, NavbarLeft, NavbarMiddleContainer, NavbarLinksContainer, NavbarLink } from './styles';

export const Navbar = ({ transparent = false }) => (
  <div className="sticky top-0">
    <Header transparent={transparent}>
      <Container>
        <Flow>
          <NavbarLeft>
            <Link href="/">
              <div className="p-2 px-4"></div>
            </Link>
          </NavbarLeft>

          <NavbarLeft>
            <NavbarLinksContainer>
              <Link href="/dashboard">
                <NavbarLink>Home</NavbarLink>
              </Link>
              <Link href="/dashboard/create">
                <NavbarLink>Create</NavbarLink>
              </Link>
              <Link href="/dashboard/settings">
                <NavbarLink>Settings</NavbarLink>
              </Link>
            </NavbarLinksContainer>
          </NavbarLeft>

          <NavbarMiddleContainer>
            {/* <NavbarMiddle>
              <SearchContainer>
                <Search />
              </SearchContainer>
            </NavbarMiddle> */}
          </NavbarMiddleContainer>

          {/* <NavbarRightContainer>
              <NavbarRight>
                <NavbarRightInner>
                <Link href="/">
                  <Notification>
                    <span className="sr-only">View notifications</span>
                    <BellIcon className="w-6 h-6" />
                  </Notification>
                </Link>
                <Profile>
                  <div>
                    <ProfileButton type="button" aria-expanded="false" aria-haspopup="true">
                      <span className="sr-only">Open user menu</span>
                      <ProfileImage
                        src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixqx=h1T2HiV5bp&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                        alt=""
                      />
                    </ProfileButton>
                  </div>
                </Profile>
              </NavbarRightInner>
              </NavbarRight>
            </NavbarRightContainer> */}
        </Flow>
      </Container>
    </Header>
  </div>
);

export const NavbarEmpty = () => (
  <Header transparent={false}>
    <Container>
      <Flow>
        <NavbarLeft>
          <Link href="/">
            <div>Logo</div>
          </Link>
        </NavbarLeft>
      </Flow>
    </Container>
  </Header>
);
