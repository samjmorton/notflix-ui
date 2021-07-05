import '@styles/global.scss';

const App: React.FC<IProps> = ({Component, pageProps}) => <Component {...pageProps} />;

export interface IProps {
  Component: React.FC;
  pageProps: {};
}

export default App;
