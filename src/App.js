import './App.css';
import {useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {sendMessageTC} from "./main/bll/reducer";


function App() {

    const messages = useSelector(state => state.test.messages)
    const dispatch = useDispatch()

    const [message, setMessage] = useState('Hello')

    return (
        <div className="App">
            <div>
                {
                    messages.map((m, index) => {
                        return <div key={index}>
                            {m}
                            <hr/>
                        </div>
                    })
                }
            </div>
            <textarea value={message} onChange={
                (e) => setMessage(e.currentTarget.value)
            }/>
            <div>
                <button onClick={() => {
                    dispatch(sendMessageTC(message))
                    setMessage('')
                }}>send
                </button>
            </div>
        </div>
    );
}

export default App;
