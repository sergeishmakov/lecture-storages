import { useRef } from 'react'
import {
  Switch,
  Route,
  useLocation,
  Redirect,
  useHistory,
} from 'react-router-dom'
import { findIndex, first, last } from 'lodash'
import { SwitchTransition, CSSTransition } from 'react-transition-group'

import SlideLayout from '../../layout/SlideLayout'
import Introduction from './components/Introduction'
import SecondSlide from './components/SecondSlide'

import {
  AppContainer,
  Header,
  Content,
  Link,
  Controls,
  PreviousButton,
  NextButton,
  LinksWrapper,
  Wrapper,
  LeftShadow,
  RightShadow,
} from './styles'
import LocalStorage from './components/LocalStorage'

const links = [
  {
    name: 'Introduction',
    title: 'LocalStorage, SessionStorage, Cookie',
    path: '/introduction',
    content: <Introduction />,
  },
  {
    name: 'LocalStorage',
    title: 'LocalStorage (локальное хранилище)',
    path: '/first',
    content: <LocalStorage />,
  },
  { name: 'second', path: '/second', component: SecondSlide },
]

function App() {
  const location = useLocation()
  const history = useHistory()
  const ref = useRef(null)

  const isFirst = location.pathname === first(links).path
  const isLast = location.pathname === last(links).path

  const currentIndex = findIndex(
    links,
    (link) => link.path === location.pathname
  )

  const handlePreviousButtonClick = () => {
    const path = links[currentIndex - 1]?.path
    if (path) history.push(path)
  }

  const handleNextButtonClick = () => {
    const path = links[currentIndex + 1]?.path
    if (path) history.push(path)
  }

  return (
    <AppContainer>
      <Header>
        <LinksWrapper>
          {links.map((link) => (
            <Link key={`link-${link.name}`} to={link.path}>
              {link.name}
            </Link>
          ))}
        </LinksWrapper>
      </Header>
      <Wrapper>
        <LeftShadow onClick={handlePreviousButtonClick} />
        <Content>
          <SwitchTransition mode="out-in">
            <CSSTransition
              key={location.key}
              nodeRef={ref}
              timeout={300}
              classNames="fade"
            >
              <div ref={ref}>
                <Switch>
                  {links.map((link) => (
                    <Route key={link.name} path={link.path}>
                      <SlideLayout title={link.title}>
                        {link.content}
                      </SlideLayout>
                    </Route>
                  ))}
                  <Redirect to={links[0].path} />
                </Switch>
              </div>
            </CSSTransition>
          </SwitchTransition>
          {/* <Controls>
            {isFirst ? (
              <div />
            ) : (
              <PreviousButton onClick={handlePreviousButtonClick}>
                Previous
              </PreviousButton>
            )}
            {isLast ? (
              <div />
            ) : (
              <NextButton onClick={handleNextButtonClick}>Next</NextButton>
            )}
          </Controls> */}
        </Content>
        <RightShadow onClick={handleNextButtonClick} />
      </Wrapper>
    </AppContainer>
  )
}

export default App
