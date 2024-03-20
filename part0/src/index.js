import React from 'react'
import ReactDOM from 'react-dom/client'

import App from './App'

// 将其内容渲染到div-元素中，该元素在文件public/index.html中定义，其id值为'root'。
ReactDOM.createRoot(document.getElementById('root')).render(<App />)
