import Post from "./Post";
import Cubes from './assets/cubes.png'
import json from './assets/json.json'
import './styles/styles.css'

const post = new Post('Webpack Post Title', Cubes)

console.log('Post to String:', post.toString())

console.log('JSON:', json)