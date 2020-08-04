import React, {FunctionComponent} from 'react';
import { BrowserRouter as Router,Switch,Route, Link } from 'react-router-dom';
import ChatList from "./page/chat-list";
import ChatDetail from "./page/chat-detail";



const App: FunctionComponent = () => {

    return (
    <Router>
        <div>
            <nav>
                <div className="nav-wrapper teal">
                    <Link to="/" className="brand-logo center">ChatChatDex</Link>
                </div>


                <Switch>
                    <Route exact path="/" component={ChatList} />
                    <Route exact path="/Chats" component={ChatList}/>
                    <Route  path="/Chats/:id" component={ChatDetail}/>
                </Switch>




            </nav>
        </div>
    </Router>
    )

}

export default App;

