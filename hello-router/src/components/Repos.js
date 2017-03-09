import React, {Component} from 'react'
import MyLink from './MyLink'


class Repos extends Component {

    constructor(props){
        super(props)
        this.state = {
            repos: [
                {username: 'facebook', repoName: 'react'},
                {username: 'ant', repoName: 'antd'},
                {username: 'git', repoName: 'git'},
                {username: 'node', repoName: 'nodeJS'}
            ]
        }
    }

    render(){
        let lis = this.state.repos.map((repo, index) => (
            <li key={index}><MyLink to={`/repos/${repo.username}/${repo.repoName}`}>{repo.repoName}</MyLink></li>
        ))
        return (
            <div>
                <h3>Repos</h3>
                <ul>
                    {lis}
                </ul>
                {/*显示当前子组件*/}
                {this.props.children}
            </div>
            )
    }
}

export default Repos

