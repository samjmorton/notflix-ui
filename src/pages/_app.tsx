import {Provider} from 'react-redux';
import {IStoreProps, useStore} from '@redux/store';
import '@styles/global.scss';
import {ApolloProvider} from '@apollo/client';
import {createGQLClient} from '@apolloClient';
import { Head } from '@components';
import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'
config.autoAddCss = false

const {client} = createGQLClient();

const App: React.FC<IProps> = ({Component, pageProps}) => {
  const store = useStore(pageProps.initialReduxState);

  return (
    <Provider store={store}>
      <ApolloProvider client={client}>
				<Head />
        <Component {...pageProps} />
      </ApolloProvider>
    </Provider>
  );
};

export interface IProps {
  Component: React.FC<IPageProps>;
  pageProps: IPageProps;
}

export interface IPageProps {
  initialReduxState: IStoreProps;
}

export default App;
