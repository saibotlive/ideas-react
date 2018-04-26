import React, {Component} from 'react';
import {connect} from 'react-redux';
import {addNewIdea, updateIdea, deleteIdea, sortIdeas} from './actions';
import {getSortBy, getIdeasState} from './selectors';
import Tile from './components/Tile';

const mapStateToProps = (state) => {
    return {
        sortBy: getSortBy(state),
        ideas: getIdeasState(state)
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        addNewIdea() {
            dispatch(addNewIdea());
        },
        updateIdea(obj) {
            dispatch(updateIdea(obj));
        },
        deleteIdea(id) {
            dispatch(deleteIdea(id));
        },
        sortIdeas(sortBy) {
            dispatch(sortIdeas(sortBy));
        }
    };
};

class App extends Component {
    constructor() {
        super()

        this.state = {
            ideaUpdated: ''
        };
    }
    

    onUpdateIdea = (obj) => {
        this.props.updateIdea(obj);
        this.showNotification();
    }

    showNotification = () => {
        this.setState({
            ideaUpdated: ' updated'
        });
        setTimeout(() => {
            this.setState({
                ideaUpdated: ''
            });
        }, 2000)
    }


    render() {
        const {ideas, sortBy, addNewIdea, deleteIdea, sortIdeas} = this.props;
        return (
            <div id="l-wrapper" className="c-app">
                <div className={`c-app__notify${this.state.ideaUpdated}`}>Idea has been saved</div>
                <div>
                    <button onClick={addNewIdea}>Add</button>
                    <select value={sortBy} onChange={(e) => sortIdeas(e.target.value)}>
                        <option value=""> -- sort ideas -- </option>
                        <option value="title" >By Title</option>
                        <option value="created_date">By Date</option>
                    </select>
                </div>

                {ideas.map((idea, i) => <Tile key={idea.id} {...idea} total={ideas.length} index={i} onUpdateIdea={this.onUpdateIdea} deleteIdea={deleteIdea}/>)}
            </div>
        );
    }

};


export default connect(mapStateToProps, mapDispatchToProps)(App);
