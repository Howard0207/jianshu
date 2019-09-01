import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { GlobalStyle } from './style';
import { GlobalIconfont } from './statics/iconfont/iconfont';
import { Provider } from 'react-redux';
import store from './store';
import Header from './common/header';
import Home from './pages/home'
import Detail from './pages/detail/loadable'
import Login from './pages/login'
import Write from './pages/write'
class App extends Component {
    render() {
        return (
            <Provider store={store}>
                <GlobalStyle />
                <GlobalIconfont />
                <BrowserRouter>
                    <Header />
                    <Switch>
                        <Route path='/' exact component={Home}></Route>
                        <Route path='/login' exact component={Login}></Route>
                        <Route path='/detail/:id' exact component={Detail}></Route>
                        <Route path="/write" exact component={Write}></Route>
                    </Switch>
                </BrowserRouter>
            </Provider>
        )
    }
}

export default App;
