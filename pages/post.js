import Layout from '../components/Layout.js'
import {withRouter} from 'next/router'
import Markdown from 'react-markdown'

export default withRouter((props) => (
    <Layout>
        <h1>{props.router.query.title}</h1>
        <div>
            <select className="test1">
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
            </select>
        </div>
        <style jsx>{`
            div :global(.test1) {
                border: 1px solid;
            }
        `}</style>
    </Layout>
))
