import React from 'react';
import { Provider } from 'react-redux'
import Header from './components/header/Header.jsx';
import Search from './components/search/Search.jsx';
import InfoList from './components/infoList/InfoList.jsx';
import store from './store.js'

const App = () => {
    return (

        <body>
            <Provider store={store}>
                <Header />
                <Search />
            </Provider>
        </body>


    )
}
export default App;