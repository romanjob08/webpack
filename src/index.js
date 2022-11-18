import Post from "@models/Post";
import * as $ from 'jquery'
import xml from './assets/data.xml'
import json from './assets/json'
import './styles/styles.css'
import './styles/less.less'
import './styles/scss.scss'

const post = new Post('Webpack Post Title')

$('pre').addClass('code').html(post.toString())

console.log('JSON:', json)
console.log('XML:', xml)